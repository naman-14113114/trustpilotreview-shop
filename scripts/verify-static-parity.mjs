import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();

const expectedRoutes = new Map([
  ['/', 'index.html'],
  ['/best-led-face-mask-uk-2026', 'reference-app.html'],
  ['/best-hair-removal-device-uk-2026', 'hair-removal-app.html'],
  ['/best-led-face-mask-uk-2026-previous', 'previous-app.html'],
  ['/best-led-face-mask-uk-2026-video-test', 'app.html'],
  ['/theraface-vs-other-masks', 'app.html'],
  ['/deluxeskin-vs-buudy', 'app.html'],
  ['/qureskincare-vs-buudy', 'app.html'],
  ['/currentbody-vs-buudy', 'app.html'],
  ['/silicone-led-mask-dangers', 'app.html'],
  ['/floating-head-warning', 'app.html'],
  ['/missing-colors-expose', 'app.html'],
  ['/led-density-scam', 'app.html'],
  ['/brand-name-premium', 'app.html'],
  ['/privacy', 'app.html'],
  ['/terms', 'app.html'],
  ['/disclosure', 'app.html'],
  ['/contact', 'app.html'],
  ['/new-advertorial', 'app.html'],
  ['/blog/red-light-therapy-ultimate-guide', 'app.html'],
  ['/robots.txt', 'robots.txt'],
  ['/sitemap.xml', 'sitemap.xml'],
  ['/llms.txt', 'llms.txt'],
  ['/llms-full.txt', 'llms-full.txt'],
]);

const redirectRoutes = [
  '/new',
  '/best-led-face-mask-in-uk',
  '/best-red-light-therapy-mask',
  '/best-red-light-therapy-mask/example',
  '/top-5-led-mask',
  '/top-5-led-mask/example',
  '/pages/buudy-led-mask',
  '/pages/buudy-led-mask/example',
  '/pages/buudy-led-face-mask',
  '/pages/buudy-led-face-mask/example',
];

const requiredFragments = new Map([
  ['index.html', ['GTM-TQ3HRZMJ', 'microsoft-consent-mode.js', 'buudy-outbound-failsafe']],
  ['reference-app.html', ['GTM-TQ3HRZMJ', 'microsoft-consent-mode.js', 'buudy-outbound-failsafe']],
  ['hair-removal-app.html', ['GTM-TQ3HRZMJ', 'microsoft-consent-mode.js', 'buudy-outbound-failsafe']],
  ['app.html', ['GTM-TQ3HRZMJ', 'microsoft-consent-mode.js', 'buudy-outbound-failsafe']],
]);

const htmlFiles = new Set(['index.html', 'reference-app.html', 'hair-removal-app.html', 'previous-app.html', 'app.html']);

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function normaliseLocalAssetUrl(value) {
  const trimmed = value.trim();

  if (
    !trimmed ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('//')
  ) {
    return null;
  }

  const withoutHash = trimmed.split('#')[0];
  const withoutQuery = withoutHash.split('?')[0];

  if (!withoutQuery.startsWith('/') || withoutQuery.startsWith('/_next/')) {
    return null;
  }

  return withoutQuery;
}

function collectLocalAssetUrls(html) {
  const urls = new Set();
  const attrPattern = /\b(?:src|href|poster)=["']([^"']+)["']/gi;
  const srcsetPattern = /\bsrcset=["']([^"']+)["']/gi;
  let match;

  while ((match = attrPattern.exec(html))) {
    const normalised = normaliseLocalAssetUrl(match[1]);
    if (normalised) {
      urls.add(normalised);
    }
  }

  while ((match = srcsetPattern.exec(html))) {
    for (const candidate of match[1].split(',')) {
      const normalised = normaliseLocalAssetUrl(candidate.trim().split(/\s+/)[0] ?? '');
      if (normalised) {
        urls.add(normalised);
      }
    }
  }

  return urls;
}

async function readExistingBytes(relativePath) {
  return readFile(path.join(root, relativePath));
}

async function readExistingText(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8');
}

async function fileExists(relativePath) {
  try {
    return (await stat(path.join(root, relativePath))).isFile();
  } catch {
    return false;
  }
}

async function routeLooksServable(route) {
  const relative = route.replace(/^\/+/, '');

  if (await fileExists(relative)) {
    return true;
  }

  if (await fileExists(`${relative}/index.html`)) {
    return true;
  }

  return expectedRoutes.has(route);
}

async function main() {
  const baseUrl = process.env.PARITY_BASE_URL;
  const failures = [];
  const fileHashes = {};
  const localAssetUrls = new Set();

  for (const [route, file] of expectedRoutes) {
    if (!(await fileExists(file))) {
      failures.push(`${route} expected missing file ${file}`);
      continue;
    }

    const expectedBytes = await readExistingBytes(file);
    const expectedText = await readExistingText(file);
    fileHashes[file] = sha256(expectedBytes);

    const fragments = requiredFragments.get(file) ?? [];
    for (const fragment of fragments) {
      if (!expectedText.includes(fragment)) {
        failures.push(`${file} is missing required preserved fragment: ${fragment}`);
      }
    }

    if (htmlFiles.has(file)) {
      for (const localAssetUrl of collectLocalAssetUrls(expectedText)) {
        localAssetUrls.add(localAssetUrl);
      }
    }

    if (baseUrl) {
      const response = await fetch(new URL(route, baseUrl), { redirect: 'manual' });
      const actualBytes = Buffer.from(await response.arrayBuffer());

      if (response.status !== 200) {
        failures.push(`${route} returned ${response.status}, expected 200`);
      }

      if (!actualBytes.equals(expectedBytes)) {
        failures.push(`${route} byte mismatch against ${file}`);
      }
    }
  }

  if (baseUrl) {
    for (const route of redirectRoutes) {
      const response = await fetch(new URL(route, baseUrl), { redirect: 'manual' });
      const location = response.headers.get('location') ?? '';

      if (![307, 308].includes(response.status)) {
        failures.push(`${route} returned ${response.status}, expected 307/308 redirect`);
      }

      if (!location.endsWith('/best-led-face-mask-uk-2026')) {
        failures.push(`${route} redirected to ${location}, expected /best-led-face-mask-uk-2026`);
      }
    }
  }

  for (const localAssetUrl of localAssetUrls) {
    if (!(await routeLooksServable(localAssetUrl))) {
      failures.push(`${localAssetUrl} is referenced by preserved HTML but is not present locally`);
      continue;
    }

    if (baseUrl) {
      const response = await fetch(new URL(localAssetUrl, baseUrl), { method: 'HEAD', redirect: 'manual' });

      if (response.status !== 200) {
        failures.push(`${localAssetUrl} returned ${response.status}, expected 200`);
      }
    }
  }

  if (failures.length) {
    console.error(failures.join('\\n'));
    process.exit(1);
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        checkedRoutes: expectedRoutes.size,
        checkedRedirects: baseUrl ? redirectRoutes.length : 0,
        checkedLocalAssets: localAssetUrls.size,
        mode: baseUrl ? 'server' : 'filesystem',
        preservedFiles: fileHashes,
      },
      null,
      2,
    ),
  );
}

await main();
