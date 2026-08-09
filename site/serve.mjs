// Yerel önizleme sunucusu (bağımlılık yok).
// Çalıştırma: node site/serve.mjs   →  http://localhost:4321
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist-site");
const PORT = Number(process.env.PORT || 4321);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webmanifest": "application/manifest+json",
};

createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = join(ROOT, url);
    try {
      if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    } catch {
      if (!extname(file)) file = join(ROOT, url, "index.html");
    }
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(body);
  } catch {
    try {
      const nf = await readFile(join(ROOT, "404.html"));
      res.writeHead(404, { "content-type": TYPES[".html"] });
      res.end(nf);
    } catch {
      res.writeHead(404).end("404");
    }
  }
}).listen(PORT, () => console.log(`Önizleme: http://localhost:${PORT}`));
