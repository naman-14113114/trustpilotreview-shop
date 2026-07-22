import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const assetPath = path.join(root, "assets", "buudy-exit-popup.js");
const script = fs.readFileSync(assetPath, "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function isEligible(pathname) {
  const match = script.match(/ELIGIBLE_PATHS\s*=\s*(\[[\s\S]*?\]);/);
  assert(match, "ELIGIBLE_PATHS array is not exposed in the popup script");
  const paths = Function(`return ${match[1]}`)();
  return paths.some((eligiblePath) => {
    return pathname === eligiblePath || pathname.startsWith(`${eligiblePath}/`);
  });
}

assert(isEligible("/top-5-led-mask"), "top-5 page must be eligible");
assert(isEligible("/best-led-face-mask-in-uk"), "main advertorial page must be eligible");
assert(isEligible("/blog/red-light-mask-guide"), "article/blog pages must be eligible");
assert(!isEligible("/privacy"), "privacy page must not be eligible");
assert(!isEligible("/contact"), "contact page must not be eligible");
assert(!isEligible("/pages/buudy-led-mask-product-redesign"), "product redesign page must not be eligible");

assert(script.includes("buudy.com/pages/buudy-led-face-mask"), "CTA must send visitors to the Buudy face-mask page");
assert(script.includes("utm_medium=exit_popup"), "CTA must include exit-popup attribution");
assert(script.includes("sessionStorage"), "popup must use sessionStorage frequency capping");
assert(script.includes("data-buudy-exit-close"), "popup close controls must have explicit close attributes");
assert(script.includes('"pointerdown"'), "popup must close from pointer/touch starts, not click only");

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
    html.includes("/assets/buudy-exit-popup.js"),
    `${htmlFile} must load the exit popup script`
  );
}

console.log("Exit popup verification passed");
