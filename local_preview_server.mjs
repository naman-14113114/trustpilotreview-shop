import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = __dirname;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function sendFile(res, filePath) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:4173");
  const pathname = decodeURIComponent(url.pathname);

  if (pathname === "/new") {
    res.writeHead(308, { Location: "/best-led-face-mask-uk-2026" });
    res.end();
    return;
  }

  if (
    pathname === "/best-led-face-mask-in-uk" ||
    pathname === "/best-red-light-therapy-mask" ||
    pathname.startsWith("/best-red-light-therapy-mask/") ||
    pathname === "/top-5-led-mask" ||
    pathname.startsWith("/top-5-led-mask/")
  ) {
    res.writeHead(308, { Location: "/best-led-face-mask-uk-2026" });
    res.end();
    return;
  }

  if (pathname === "/best-led-face-mask-uk-2026") {
    sendFile(res, path.join(root, "reference-app.html"));
    return;
  }

  if (pathname === "/best-hair-removal-device-uk-2026") {
    sendFile(res, path.join(root, "hair-removal-app.html"));
    return;
  }

  if (pathname === "/best-led-face-mask-uk-2026-previous") {
    sendFile(res, path.join(root, "previous-app.html"));
    return;
  }

  const normalizedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.join(root, normalizedPath.replace(/^\/+/, ""));
  sendFile(res, filePath);
});

server.listen(4173, "127.0.0.1", () => {
  console.log("Preview server running at http://127.0.0.1:4173");
});
