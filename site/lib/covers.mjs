// Hizmet ve blog yazıları için kapak görseli üreticisi.
// Stok fotoğraf yerine, kategori rengiyle çizilmiş şeffaf zeminli çizim kapaklar.
// Her biri ~1,5 KB, çözünürlükten bağımsız, tamamen aramaya açık (alt metinli).
//
// Gerçek fotoğrafla değiştirmek için: public/photos/<slug>.jpg koyun.
// Build sırasında o slug için kapak yerine fotoğraf kullanılır.

import { icons, esc } from "./html.mjs";

// İkon SVG'sinin iç içeriğini çıkarır (dış <svg> etiketini atar).
const inner = (name) =>
  (icons[name] || icons.bolt).replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");

// Slug'dan deterministik sayı — aynı kategorideki kapaklar birbirinin kopyası olmasın.
const seed = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

// Her kategori için yardımcı (küçük) ikonlar — kompozisyona derinlik katar.
const SIDEKICKS = {
  bolt: ["panel", "plug"],
  plug: ["bolt", "panel"],
  panel: ["bolt", "gauge"],
  alert: ["bolt", "plug"],
  lamp: ["bolt", "sun"],
  ground: ["bolt", "shield"],
  gauge: ["panel", "bolt"],
  battery: ["bolt", "panel"],
  factory: ["panel", "bolt"],
  camera: ["shield", "antenna"],
  antenna: ["camera", "shield"],
  drop: ["pipe", "water"],
  pipe: ["drop", "wrench"],
  water: ["drop", "pipe"],
  radiator: ["fire", "drop"],
  fire: ["drop", "gauge"],
  wrench: ["tools", "pipe"],
  tools: ["wrench", "gauge"],
  pump: ["drop", "gauge"],
  leaf: ["drop", "water"],
  sun: ["drop", "battery"],
  home: ["tools", "layers"],
  building: ["layers", "tools"],
  layers: ["building", "tools"],
  doc: ["layers", "check"],
};

/**
 * @param {object} o
 * @param {string} o.slug   dosya adı / varyasyon tohumu
 * @param {string} o.color  kategori rengi
 * @param {string} o.soft   kategori açık tonu (zemin)
 * @param {string} o.icon   ana ikon adı
 * @param {string} o.label  sol altta görünen etiket
 */
export function cover({ slug, color, soft = "#f1f1ef", icon, label }) {
  const h = seed(slug);
  const id = slug.replace(/[^a-z0-9]/gi, "");
  const [s1, s2] = SIDEKICKS[icon] || ["check", "layers"];

  const rot = (h % 7) - 3;                 // ana ikon açısı -3..3
  const dx = (h % 5) * 14;                 // yatay kayma
  const dotY = 40 + (h % 4) * 18;          // nokta dizisinin yeri
  const stripeX = 60 + (h % 6) * 40;       // ince şerit

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 360" role="img" aria-label="${esc(label)}">
<defs>
  <linearGradient id="bg${id}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffffff"/>
    <stop offset="1" stop-color="${soft}"/>
  </linearGradient>
  <pattern id="dots${id}" width="26" height="26" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1.6" fill="${color}" fill-opacity="0.16"/>
  </pattern>
</defs>

<rect width="840" height="360" fill="url(#bg${id})"/>
<rect width="840" height="360" fill="url(#dots${id})"/>

<!-- diyagonal şeritler -->
<g stroke="${color}" stroke-opacity="0.11" stroke-width="26">
  <path d="M${stripeX} 400 L${stripeX + 230} -40"/>
  <path d="M${stripeX + 74} 400 L${stripeX + 304} -40"/>
</g>

<!-- solda büyük, soluk yardımcı ikon -->
<g transform="translate(58 ${dotY}) scale(5.4)" fill="none" stroke="${color}"
   stroke-opacity="0.18" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  ${inner(s1)}
</g>

<!-- ana ikonun arkasındaki disk -->
<circle cx="${592 + dx / 4}" cy="168" r="128" fill="#ffffff" fill-opacity="0.86"/>
<circle cx="${592 + dx / 4}" cy="168" r="128" fill="none" stroke="${color}" stroke-opacity="0.28" stroke-width="2.5"/>

<!-- ana ikon -->
<g transform="translate(${508 + dx / 4} 84) rotate(${rot} 84 84) scale(7)"
   fill="none" stroke="${color}" stroke-width="1.2"
   stroke-linecap="round" stroke-linejoin="round">
  ${inner(icon)}
</g>

<!-- sağ altta küçük ikinci ikon -->
<g transform="translate(742 262) scale(2.4)" fill="none" stroke="${color}"
   stroke-opacity="0.34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  ${inner(s2)}
</g>

<rect x="44" y="266" width="${Math.min(560, 30 + String(label).length * 22)}" height="52" rx="26"
      fill="#ffffff" fill-opacity="0.86" stroke="${color}" stroke-opacity="0.3" stroke-width="2"/>
<text x="72" y="301" fill="${color}"
      font-family="'Arial Narrow',Arial,Helvetica,sans-serif" font-size="32"
      font-weight="700" letter-spacing="3.5">${esc(String(label).toLocaleUpperCase("tr-TR"))}</text>

<rect y="352" width="840" height="8" fill="${color}"/>
</svg>`;
}
