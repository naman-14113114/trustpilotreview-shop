import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const snapshotsDir = path.join(root, "tests", "parity", "snapshots");

const snapshotFiles = [
  "index.html",
  "reference-app.html",
  "hair-removal-app.html",
  "previous-app.html",
  "app.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "llms-full.txt"
];

const routes = [
  "/",
  "/best-led-face-mask-uk-2026",
  "/best-hair-removal-device-uk-2026",
  "/best-hair-dryer-uk-2026",
  "/dyson-vs-shark-vs-muuhu-uk",
  "/privacy",
  "/contact"
];

for (const file of snapshotFiles) {
  const target = path.join(snapshotsDir, file);
  if (!existsSync(target)) {
    throw new Error(`Missing parity snapshot: ${file}`);
  }
}

const baseUrl = process.env.PARITY_BASE_URL;

if (!baseUrl) {
  console.log("Parity snapshots present. Set PARITY_BASE_URL=http://localhost:3000 to smoke-test routes.");
  process.exit(0);
}

for (const route of routes) {
  const url = new URL(route, baseUrl);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${route} returned HTTP ${response.status}`);
  }

  const html = await response.text();
  const requiredFragments = ["GTM-TQ3HRZMJ", "microsoft-consent-mode.js"];

  for (const fragment of requiredFragments) {
    if (!html.includes(fragment)) {
      throw new Error(`${route} is missing ${fragment}`);
    }
  }
}

const llms = await readFile(path.join(root, "public", "llms.txt"), "utf8");
if (!llms.trim()) {
  throw new Error("public/llms.txt is empty");
}

console.log(`Smoke-tested ${routes.length} routes from ${baseUrl}`);
