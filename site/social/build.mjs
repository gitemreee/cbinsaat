// Instagram gönderi görsellerini (1080×1080 PNG) ve açıklama dosyasını üretir.
// Çalıştırma: node site/social/build.mjs
// Çıktı: sosyal-medya/ klasörü (görseller + aciklamalar.md)

import { mkdir, writeFile, readdir, rm, access } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { posts, allTags } from "./posts.mjs";
import { icons, esc } from "../lib/html.mjs";
import { themeOfGroup } from "../lib/theme.mjs";
import { site } from "../data/site.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "..", "sosyal-medya");
// Konu fotoğrafları: public/social-photos/<id>.jpg  (kendi fotoğrafınızla değiştirebilirsiniz)
const PHOTOS = resolve(__dirname, "..", "..", "public", "social-photos");

const exists = async (p) => { try { await access(p); return true; } catch { return false; } };
const missingPhoto = [];

const S = 1080;               // Instagram kare gönderi
const PAD = 84;
const INNER = S - PAD * 2;

// Yazı tipleri: resvg sistem fontlarını kullanır. Impact ve Segoe UI Windows'ta var.
const F_HOOK = "Impact, 'Arial Narrow', Arial, sans-serif";
const F_BODY = "'Segoe UI', Arial, sans-serif";

const iconInner = (name) =>
  (icons[name] || icons.bolt).replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");

/** Impact yaklaşık 0.46em/karakter. Satır kutuya sığacak punto seçilir. */
const hookSize = (lines) => {
  const longest = Math.max(...lines.map((l) => l.length));
  const byWidth = Math.floor(INNER / (longest * 0.455));
  const byCount = Math.floor(410 / lines.length);   // dikey alan da sınırlı
  return Math.max(48, Math.min(96, byWidth, byCount));
};

function postSvg(p, photo = false) {
  const t = themeOfGroup(p.group);
  // Fotoğraflı gönderilerde metin her zaman koyu zemin üzerinde durur.
  const dark = photo ? true : p.style === "dark";

  const textMain = dark ? "#ffffff" : "#12161b";
  const textSoft = dark ? "#c3cad2" : "#4d5661";
  const accent = t.color;

  const fs = hookSize(p.hook);
  const lineH = Math.round(fs * 1.02);
  const hookTop = 356;                                     // etiketle çakışmasın

  const hookLines = p.hook
    .map((l, i) => {
      // Koyu zeminde son satır da beyaz kalır; renkli metin okunurluğu düşürüyor.
      const fill = !dark && i === p.hook.length - 1 ? accent : textMain;
      return `<text x="${PAD}" y="${hookTop + i * lineH}" fill="${fill}" font-family="${F_HOOK}" font-size="${fs}">${esc(l)}</text>`;
    })
    .join("\n  ");

  const bulletsTop = hookTop + p.hook.length * lineH + 66;
  const bulletLines = p.bullets
    .map((b, i) => {
      const y = bulletsTop + i * 76;
      return `<circle cx="${PAD + 11}" cy="${y - 10}" r="7" fill="${accent}"/>
  <text x="${PAD + 40}" y="${y}" fill="${textSoft}" font-family="${F_BODY}" font-size="32">${esc(b)}</text>`;
    })
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="${dark ? "#0b0e12" : "#ffffff"}"/>
    <stop offset="1" stop-color="${dark ? "#181d23" : t.soft}"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.86" cy="0.16" r="0.6">
    <stop offset="0" stop-color="${accent}" stop-opacity="${dark ? 0.3 : 0.22}"/>
    <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
  </radialGradient>
  <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1.6" fill="${accent}" fill-opacity="${dark ? 0.16 : 0.15}"/>
  </pattern>
  <!-- Fotoğraf üzerine perde: sol taraf koyu, sağda fotoğraf görünür kalır -->
  <linearGradient id="scrimX" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#070a0d" stop-opacity="0.95"/>
    <stop offset="0.44" stop-color="#070a0d" stop-opacity="0.88"/>
    <stop offset="0.72" stop-color="#070a0d" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#070a0d" stop-opacity="0.3"/>
  </linearGradient>
  <linearGradient id="scrimY" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#070a0d" stop-opacity="0.75"/>
    <stop offset="0.32" stop-color="#070a0d" stop-opacity="0.2"/>
    <stop offset="0.72" stop-color="#070a0d" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#070a0d" stop-opacity="0.85"/>
  </linearGradient>
</defs>

${
  photo
    ? `<rect width="${S}" height="${S}" fill="url(#scrimY)"/>
<rect width="${S}" height="${S}" fill="url(#scrimX)"/>
<rect width="${S}" height="${S}" fill="${accent}" fill-opacity="0.1"/>`
    : `<rect width="${S}" height="${S}" fill="url(#g)"/>
<rect width="${S}" height="${S}" fill="url(#dots)"/>
<rect width="${S}" height="${S}" fill="url(#glow)"/>

<g transform="translate(792 452) scale(16)" fill="none" stroke="${accent}"
   stroke-opacity="0.12" stroke-width="1.05"
   stroke-linecap="round" stroke-linejoin="round">${iconInner(p.icon)}</g>`
}

<rect width="${S}" height="14" fill="${accent}"/>

<!-- marka satırı -->
<g transform="translate(${PAD} 112)">
  <rect x="-2" y="-36" width="54" height="58" fill="${accent}"/>
  <g transform="translate(9 -24) scale(1.4)" fill="#ffffff" stroke="none">
    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z"/>
  </g>
  <text x="70" y="-6" fill="${textMain}" font-family="${F_HOOK}" font-size="40">CB İNŞAAT</text>
  <text x="70" y="22" fill="${textSoft}" font-family="${F_BODY}" font-size="20" letter-spacing="3">MALATYA · ELEKTRİK · SU · MEKANİK</text>
</g>

<!-- kategori etiketi -->
<g transform="translate(${PAD} 186)">
  <rect x="0" y="0" width="${Math.max(158, p.kicker.length * 19 + 58)}" height="54" rx="27"
        fill="${dark ? "#ffffff" : "#ffffff"}" fill-opacity="${dark ? 0.1 : 1}"
        stroke="${accent}" stroke-width="2.5"/>
  <text x="29" y="36" fill="${dark ? "#ffffff" : accent}" font-family="${F_BODY}" font-size="23" font-weight="600" letter-spacing="1.5">${esc(p.kicker.toLocaleUpperCase("tr-TR"))}</text>
</g>

${hookLines}

<line x1="${PAD}" y1="${bulletsTop - 56}" x2="${PAD + 156}" y2="${bulletsTop - 56}" stroke="${accent}" stroke-width="5"/>

${bulletLines}

<!-- alt marka bandı -->
<rect y="${S - 108}" width="${S}" height="108" fill="${accent}"/>
<text x="${PAD}" y="${S - 42}" fill="#ffffff" font-family="${F_HOOK}" font-size="46">${esc(site.phoneDisplay)}</text>
<text x="${S - PAD}" y="${S - 42}" fill="#ffffff" fill-opacity="0.92" font-family="${F_BODY}" font-size="27" text-anchor="end">cbinsaat.com</text>
</svg>`;
}

/* ------------------------------------------------------------------ build */
await mkdir(OUT, { recursive: true });
for (const f of await readdir(OUT).catch(() => [])) {
  await rm(join(OUT, f), { recursive: true, force: true });
}

const captionLines = [
  "# CB İnşaat — Instagram gönderileri",
  "",
  `${posts.length} gönderi. Görseller bu klasörde \`NN-konu.png\` adıyla duruyor (1080×1080).`,
  "Açıklamayı kopyalayıp görselle birlikte paylaşın.",
  "",
  "---",
  "",
];

for (const p of posts) {
  const t = themeOfGroup(p.group);
  const slug = p.kicker
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşü]/g, (c) => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" })[c])
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const name = `${p.id}-${slug}`;

  // Konuya ait fotoğraf varsa arka plana yerleştirilir.
  const photoPath = join(PHOTOS, `${p.id}.jpg`);
  const hasPhoto = await exists(photoPath);
  const svg = postSvg(p, hasPhoto);
  await writeFile(join(OUT, `${name}.svg`), svg, "utf8");

  if (hasPhoto) {
    const base = await sharp(photoPath)
      .resize(S, S, { fit: "cover", position: p.photoPosition || "attention" })
      .toBuffer();
    await sharp(base)
      .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
      .png()
      .toFile(join(OUT, `${name}.png`));
  } else {
    await sharp(Buffer.from(svg)).png().toFile(join(OUT, `${name}.png`));
    missingPhoto.push(p.id);
  }

  captionLines.push(
    `## ${p.id} · ${p.kicker}`,
    "",
    `**Görsel:** \`${name}.png\` · **Grup:** ${p.group} · **Renk:** ${t.color}`,
    "",
    "**Görseldeki başlık:** " + p.hook.join(" "),
    "",
    "**Açıklama:**",
    "",
    "```",
    p.caption,
    "",
    allTags(p).map((x) => "#" + x).join(" "),
    "```",
    "",
    "---",
    ""
  );
}

await writeFile(join(OUT, "aciklamalar.md"), captionLines.join("\n"), "utf8");

console.log(`
${posts.length} gönderi üretildi.${missingPhoto.length ? `
  ! fotoğrafsız (desen zeminli): ${missingPhoto.join(", ")}` : ""}

  Klasör : ${OUT}
  Görsel : ${posts.length} PNG (1080×1080) + kaynak SVG
  Metin  : aciklamalar.md
`);
