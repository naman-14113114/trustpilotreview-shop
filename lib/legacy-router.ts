import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const siteRoot = path.join(/* turbopackIgnore: true */ process.cwd());

const directHtmlRoutes = new Map<string, string>([
  ['', 'index.html'],
  ['best-led-face-mask-uk-2026', 'reference-app.html'],
  ['best-hair-removal-device-uk-2026', 'hair-removal-app.html'],
  ['best-led-face-mask-uk-2026-previous', 'previous-app.html'],
  ['best-led-face-mask-uk-2026-video-test', 'app.html'],
  ['theraface-vs-other-masks', 'app.html'],
  ['deluxeskin-vs-buudy', 'app.html'],
  ['qureskincare-vs-buudy', 'app.html'],
  ['currentbody-vs-buudy', 'app.html'],
  ['silicone-led-mask-dangers', 'app.html'],
  ['floating-head-warning', 'app.html'],
  ['missing-colors-expose', 'app.html'],
  ['led-density-scam', 'app.html'],
  ['brand-name-premium', 'app.html'],
  ['privacy', 'app.html'],
  ['terms', 'app.html'],
  ['disclosure', 'app.html'],
  ['contact', 'app.html'],
  ['new-advertorial', 'app.html'],
]);

const textContentTypes = new Map<string, string>([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.mjs', 'application/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.svg', 'image/svg+xml; charset=utf-8'],
]);

const binaryContentTypes = new Map<string, string>([
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.gif', 'image/gif'],
  ['.ico', 'image/x-icon'],
  ['.avif', 'image/avif'],
  ['.mp4', 'video/mp4'],
  ['.webm', 'video/webm'],
  ['.pdf', 'application/pdf'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
  ['.ttf', 'font/ttf'],
  ['.otf', 'font/otf'],
]);

function normaliseRoute(segments: string[]) {
  return segments.map((segment) => decodeURIComponent(segment)).join('/').replace(/^\/+|\/+$/g, '');
}

function resolveInsideRoot(relativePath: string) {
  const resolved = path.resolve(/* turbopackIgnore: true */ siteRoot, relativePath);
  const relative = path.relative(siteRoot, resolved);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    return null;
  }

  return resolved;
}

async function fileExists(relativePath: string) {
  const resolved = resolveInsideRoot(relativePath);

  if (!resolved) {
    return false;
  }

  try {
    const fileStat = await stat(resolved);
    return fileStat.isFile();
  } catch {
    return false;
  }
}

function getContentType(relativePath: string) {
  const extension = path.extname(relativePath).toLowerCase();
  return textContentTypes.get(extension) ?? binaryContentTypes.get(extension) ?? 'application/octet-stream';
}

function cacheHeader(relativePath: string) {
  if (relativePath.startsWith('assets/')) {
    return 'public, max-age=31536000, immutable';
  }

  return 'public, max-age=0, must-revalidate';
}

async function serveFile(relativePath: string, includeBody = true) {
  const resolved = resolveInsideRoot(relativePath);

  if (!resolved || !(await fileExists(relativePath))) {
    return new Response('Not found', { status: 404 });
  }

  const body = includeBody ? await readFile(resolved) : null;

  return new Response(body, {
    headers: {
      'Cache-Control': cacheHeader(relativePath),
      'Content-Type': getContentType(relativePath),
    },
  });
}

async function resolveLegacyFile(route: string) {
  const directRoute = directHtmlRoutes.get(route);

  if (directRoute) {
    return directRoute;
  }

  if (route.startsWith('blog/')) {
    return 'app.html';
  }

  if (route && (await fileExists(route))) {
    return route;
  }

  if (route && (await fileExists(`${route}/index.html`))) {
    return `${route}/index.html`;
  }

  return 'index.html';
}

export async function serveLegacyRequest(segments: string[], includeBody = true) {
  const route = normaliseRoute(segments);
  const file = await resolveLegacyFile(route);
  return serveFile(file, includeBody);
}
