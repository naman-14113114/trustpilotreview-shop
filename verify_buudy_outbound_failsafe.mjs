import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const script = fs.readFileSync(path.join(root, "assets", "buudy-outbound-failsafe.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(script.includes("https://www.buudy.co.uk/products/buudy-led-mask"), "fallback route must use the UK Buudy LED mask product page");
assert(script.includes("CONVERSION_VALUE = 330"), "Microsoft Ads conversion value must stay 330 INR");
assert(script.includes("buudy_outbound_click"), "primary outbound conversion event must be pushed");
assert(script.includes("affiliate_click"), "affiliate fallback conversion event must be pushed");
assert(script.includes("looksLikeBuudyImage"), "image-layer clicks must be handled, not only anchor clicks");
assert(script.includes("stopImmediatePropagation"), "outbound clicks must beat page-level handlers that swallow navigation");

const htmlFiles = [
  "ads.html",
  "app.html",
  "best-red-light-therapy-mask/ads.html",
  "best-red-light-therapy-mask/index.html",
  "buudy-led-mask-uk/index.html",
  "therabody-vs-buudy/index.html",
  "top-5-led-mask/ads.html",
  "top-5-led-mask/index.html",
];

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(path.join(root, htmlFile), "utf8");
  assert(
    html.includes("/assets/buudy-outbound-failsafe.js"),
    `${htmlFile} must load the Buudy outbound failsafe script`
  );
}

console.log("Buudy outbound failsafe verification passed");
