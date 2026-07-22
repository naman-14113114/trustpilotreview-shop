import { readFileSync } from "node:fs";

const html = readFileSync(new URL("./buudy-led-mask-uk/index.html", import.meta.url), "utf8");

const expectations = [
  ["sale price", '<strong class="price">&pound;179</strong>'],
  ["compare-at price", '<span class="compare">&pound;449</span>'],
  ["launch savings", '<span class="save">Save &pound;270 during UK launch</span>'],
];

const failures = expectations
  .filter(([, snippet]) => !html.includes(snippet))
  .map(([label, snippet]) => `Missing ${label}: ${snippet}`);

if (html.includes('<span class="compare">&pound;299</span>')) {
  failures.push("Found stale compare-at price: &pound;299");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Buudy UK price copy is consistent.");
