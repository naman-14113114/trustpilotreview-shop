import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import vm from "node:vm";

const root = process.cwd();
const read = (file) => readFile(resolve(root, file), "utf8");
const digest = (value) => createHash("sha256").update(value).digest("hex");

const [referenceHtml, archiveHtml, originalHtml, vercelJson, sitemap, tracking] =
  await Promise.all([
    read("reference-app.html"),
    read("previous-app.html"),
    read("app.html"),
    read("vercel.json"),
    read("sitemap.xml"),
    read("assets/buudy-outbound-failsafe-buudycouk-660.js"),
  ]);

const referenceSource = await read("unzipped_new_pages/src/pages/Home.tsx");
assert.match(referenceSource, /<MarketFlag market=\{market\.flagKey\} \/>/);
assert.match(referenceSource, /<span className="block">Best LED Face Mask<\/span>/);
assert.match(referenceSource, /GreenStarRating/);
assert.match(referenceSource, /EXPERT_PROFILE/);
assert.match(referenceSource, /\/img\/TOP 5 LED Mask uk\.png/);
assert.match(referenceSource, /#1 Editor's Choice/);
assert.doesNotMatch(referenceSource, /\/img\/best-product-badge\.png/);

const archiveWithoutBootstrap = archiveHtml.replace(
  /\s*<!-- ARCHIVE_ROUTE_BOOTSTRAP_START -->[\s\S]*?<!-- ARCHIVE_ROUTE_BOOTSTRAP_END -->\s*/,
  "\n  ",
);
assert.equal(
  digest(archiveWithoutBootstrap),
  digest(originalHtml),
  "The archived page may differ from the previous page only by its route bootstrap.",
);

assert.match(
  referenceHtml,
  /<link rel="canonical" href="https:\/\/www\.trustpilotreview\.shop\/best-led-face-mask-uk-2026" \/>/,
  "The current page must retain the TrustpilotReview canonical URL.",
);
assert.match(
  referenceHtml,
  /\/assets\/buudy-outbound-failsafe-buudycouk-660\.js/,
  "The Microsoft Ads outbound failsafe must remain loaded.",
);
assert.match(
  referenceHtml,
  /\/assets\/buudy-exit-popup-buudycouk-v2\.js/,
  "The existing exit popup must remain loaded.",
);
assert.match(
  referenceHtml,
  /embed\.tawk\.to\/699e744b8a14f51c38e4fa86\/1ji9fci26/,
  "The supplied TrustpilotReview Tawk widget must remain loaded.",
);
assert.match(
  referenceHtml,
  /GTM-TQ3HRZMJ/,
  "The TrustpilotReview GTM container must remain loaded.",
);

const assetPaths = [
  ...referenceHtml.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g),
].map((match) => match[1].slice(1));
for (const assetPath of assetPaths) {
  await readFile(resolve(root, assetPath));
}

assert.doesNotMatch(
  referenceHtml,
  /(?:Â|â€|ï¿½|\uFFFD)/,
  "The current HTML must not contain mojibake markers.",
);

const vercel = JSON.parse(vercelJson);
const currentRewrite = vercel.rewrites.find(
  (rule) => rule.source === "/best-led-face-mask-uk-2026",
);
const archiveRewrite = vercel.rewrites.find(
  (rule) => rule.source === "/best-led-face-mask-uk-2026-previous",
);
assert.equal(currentRewrite?.destination, "/reference-app.html");
assert.equal(archiveRewrite?.destination, "/previous-app.html");

const archiveHeader = vercel.headers.find(
  (rule) => rule.source === "/best-led-face-mask-uk-2026-previous",
);
assert.ok(
  archiveHeader?.headers?.some(
    (header) =>
      header.key.toLowerCase() === "x-robots-tag" &&
      header.value.toLowerCase().includes("noindex"),
  ),
  "The archive route must send an X-Robots-Tag noindex header.",
);
assert.doesNotMatch(
  sitemap,
  /best-led-face-mask-uk-2026-previous/,
  "The archive route must stay out of the sitemap.",
);

assert.match(tracking, /var CONVERSION_VALUE = 660;/);
assert.match(tracking, /var CONVERSION_CURRENCY = "INR";/);
assert.match(
  tracking,
  /var CONVERSION_EVENT_NAMES = \["buudy_outbound_click", "affiliate_click"\];/,
);
assert.match(
  tracking,
  /https:\/\/www\.buudy\.co\.uk\/products\/buudy-led-mask/,
);

const trackingSandbox = {
  URL,
  URLSearchParams,
  Date,
  Object,
  Array,
  setTimeout,
  clearTimeout,
  console,
  location: {
    href: "https://www.trustpilotreview.shop/best-led-face-mask-uk-2026?msclkid=verification",
    hostname: "www.trustpilotreview.shop",
    search: "?msclkid=verification",
    assign() {},
  },
  localStorage: {
    getItem() {
      return null;
    },
    setItem() {},
  },
  document: {
    readyState: "complete",
    addEventListener() {},
    elementFromPoint() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    documentElement: {},
  },
  MutationObserver: class {
    observe() {}
  },
  dataLayer: [],
  uetq: [],
  __tprMicrosoftAdsConsent: "granted",
};
trackingSandbox.window = trackingSandbox;
vm.runInNewContext(tracking, trackingSandbox);

assert.equal(typeof trackingSandbox.tprTrackBuudyOutbound, "function");
assert.equal(
  trackingSandbox.tprTrackBuudyOutbound(
    "https://www.buudy.co.uk/products/buudy-led-mask?utm_source=verification",
  ),
  true,
);
const trackedEvents = trackingSandbox.dataLayer.filter((entry) =>
  ["buudy_outbound_click", "affiliate_click"].includes(entry.event),
);
assert.deepEqual(
  trackedEvents.map((entry) => entry.event),
  ["buudy_outbound_click", "affiliate_click"],
);
for (const event of trackedEvents) {
  assert.equal(event.event_value, 660);
  assert.equal(event.revenue_value, 660);
  assert.equal(event.currency, "INR");
  assert.equal(
    event.outbound_url,
    "https://www.buudy.co.uk/products/buudy-led-mask",
  );
  assert.match(event.raw_outbound_url, /msclkid=verification/);
}

console.log(
  `Reference page checks passed: ${assetPaths.length} assets, archive preserved, INR 660 tracking retained.`,
);
