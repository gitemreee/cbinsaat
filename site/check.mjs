// Yayın öncesi kontrol: kırık iç linkler, tekrar eden title/description/H1,
// ince içerik ve meta uzunlukları.
// Çalıştırma: node site/check.mjs   (önce node site/build.mjs)

import { readdir, readFile } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist-site");

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const get = (html, re) => (html.match(re) || [])[1] || "";
const textOf = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const allFiles = await walk(ROOT);
const files = allFiles.filter((f) => f.endsWith(".html"));
// Link hedeflerini disk yerine bellekten doğrula: 8000+ sayfada milyonlarca
// fs.access çağrısı yerine tek Set araması.
const onDisk = new Set(allFiles.map((f) => f.replace(ROOT, "").split("\\").join("/")));
const titles = new Map(), descs = new Map(), h1s = new Map();
const brokenLinks = new Map();
const warnings = [];
let linkCount = 0;

for (const f of files) {
  const html = await readFile(f, "utf8");
  const rel = f.replace(ROOT, "").replace(/\\/g, "/");
  const noindex = /content="noindex/.test(html);

  // --- iç linkler
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    linkCount++;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    const target = clean.endsWith("/") ? `${clean}index.html` : clean;
    if (!onDisk.has(target)) {
      if (!brokenLinks.has(href)) brokenLinks.set(href, []);
      brokenLinks.get(href).push(rel);
    }
  }

  // --- meta
  const title = get(html, /<title>([^<]*)<\/title>/);
  const desc = get(html, /<meta name="description" content="([^"]*)"/);
  const h1 = get(html, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, "").trim();

  const push = (map, key) => {
    if (!key) return;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(rel);
  };
  if (!noindex) { push(titles, title); push(descs, desc); }
  push(h1s, h1);

  if (noindex) continue;
  const words = textOf(html).split(" ").length;
  if (words < 400) warnings.push(`ince içerik (${words} kelime): ${rel}`);
  if (title.length > 70) warnings.push(`title uzun (${title.length}): ${rel}`);
  if (desc.length > 165) warnings.push(`description uzun (${desc.length}): ${rel}`);
  if (desc.length < 80) warnings.push(`description kısa (${desc.length}): ${rel}`);
  if ((html.match(/<h1/g) || []).length !== 1) warnings.push(`H1 sayısı 1 değil: ${rel}`);
  if (/<img(?![^>]*\balt=)/.test(html)) warnings.push(`alt'sız görsel: ${rel}`);
}

const dupes = (map) => [...map].filter(([, v]) => v.length > 1);

const dupTitle = dupes(titles), dupDesc = dupes(descs), dupH1 = dupes(h1s);

console.log(`
Kontrol sonucu
──────────────────────────────────────────
  HTML sayfa            : ${files.length}
  Kontrol edilen iç link: ${linkCount}
  Kırık link            : ${brokenLinks.size}
  Tekrar eden title     : ${dupTitle.length}
  Tekrar eden desc      : ${dupDesc.length}
  Tekrar eden H1        : ${dupH1.length}
  Uyarı                 : ${warnings.length}
`);

const list = (label, arr, fmt) => {
  if (!arr.length) return;
  console.log(`${label}:`);
  arr.slice(0, 15).forEach((x) => console.log("  · " + fmt(x)));
  if (arr.length > 15) console.log(`  … ve ${arr.length - 15} tane daha`);
  console.log("");
};

list("Kırık linkler", [...brokenLinks], ([h, w]) => `${h}  (${w.length} sayfada, ör. ${w[0]})`);
list("Tekrar eden title", dupTitle, ([k, v]) => `"${k.slice(0, 60)}" → ${v.length}x`);
list("Tekrar eden description", dupDesc, ([k, v]) => `"${k.slice(0, 60)}" → ${v.length}x`);
list("Tekrar eden H1", dupH1, ([k, v]) => `"${k.slice(0, 60)}" → ${v.length}x`);
list("Uyarılar", warnings, (x) => x);

const fatal = brokenLinks.size || dupTitle.length || dupDesc.length;
console.log(fatal ? "SONUÇ: düzeltilmesi gereken sorunlar var.\n" : "SONUÇ: temiz.\n");
process.exit(fatal ? 1 : 0);
