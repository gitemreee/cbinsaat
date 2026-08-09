// Küçük HTML yardımcıları ve ikon seti (harici istek olmasın diye satır içi SVG).

export const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Meta/title içeriği: HTML etiketlerini at, boşlukları sadeleştir, uzunluğu kırp.
export const meta = (s = "", max = 158) => {
  const clean = String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return esc(clean);
  return esc(clean.slice(0, max - 1).replace(/[\s,;:.-]+\S*$/, "") + "…");
};

export const attr = (obj = {}) =>
  Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && v !== false && v !== "")
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${esc(v)}"`))
    .join("");

export const join = (arr, sep = "") => arr.filter(Boolean).join(sep);

// Türkçe karakterleri de doğru çeviren slug üretici.
const TR = { ç: "c", Ç: "c", ğ: "g", Ğ: "g", ı: "i", İ: "i", ö: "o", Ö: "o", ş: "s", Ş: "s", ü: "u", Ü: "u", â: "a", î: "i", û: "u" };
export const slugify = (s = "") =>
  String(s)
    .replace(/[çÇğĞıİöÖşŞüÜâîû]/g, (c) => TR[c] || c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// --- Türkçe ek üretimi -------------------------------------------------
// Yer adlarına bulunma (-da/-de), yönelme (-a/-e) ve tamlayan (-ın/-in/-un/-ün)
// eki getirir. `poss=true`, adın 3. tekil iyelik ekiyle bitmesi durumunda
// kullanılan kaynaştırma -n- harfini ekler: "Orduzu" -> "Orduzu'nda".

const lastVowel = (word) => {
  const v = String(word).toLowerCase().replace(/[^aeıioöuüâîû]/g, "");
  return v.slice(-1) || "a";
};
const isBack = (word) => "aıouâû".includes(lastVowel(word));
const endsVowel = (w) => /[aeıioöuüâîû]$/i.test(String(w).trim());
// Sert ünsüzle biten adlarda bulunma eki -ta/-te olur (Yeşilyurt'ta, Kuluncak'ta).
const endsHard = (w) => /[pçtkfhsş]$/i.test(String(w).trim());

// Dört yönlü ünlü uyumu — tamlayan ve iyelik ekleri için.
const narrowVowel = (word) => {
  const v = lastVowel(word);
  if ("aı".includes(v)) return "ı";
  if ("ei".includes(v)) return "i";
  if ("ou".includes(v)) return "u";
  if ("öü".includes(v)) return "ü";
  return "ı";
};

/** Bulunma: "Battalgazi" -> "Battalgazi'de", "Yeşilyurt" -> "Yeşilyurt'ta", "Orduzu" (poss) -> "Orduzu'nda" */
export const locIn = (name, poss = false) => {
  const base = String(name).trim();
  const d = !poss && endsHard(base) ? "t" : "d";
  return `${base}'${poss ? "n" : ""}${d}${isBack(base) ? "a" : "e"}`;
};

/** Yönelme: "Battalgazi" -> "Battalgazi'ye", "Yeşilyurt" -> "Yeşilyurt'a", "Orduzu" (poss) -> "Orduzu'na" */
export const locTo = (name, poss = false) => {
  const base = String(name).trim();
  const suffix = isBack(base) ? "a" : "e";
  const buffer = poss ? "n" : endsVowel(base) ? "y" : "";
  return `${base}'${buffer}${suffix}`;
};

/** Tamlayan: "Battalgazi" -> "Battalgazi'nin", "Yeşilyurt" -> "Yeşilyurt'un", "Orduzu" (poss) -> "Orduzu'nun" */
export const locOf = (name, poss = false) => {
  const base = String(name).trim();
  const v = narrowVowel(base);
  const buffer = poss || endsVowel(base) ? "n" : "";
  return `${base}'${buffer}${v}n`;
};

/**
 * Türkçe küçük harf. Varsayılan toLowerCase() "İ" harfini birleşik noktalı "i̇"
 * yaptığı için ("İnşaat" -> "i̇nşaat") locale duyarlı sürüm kullanılır.
 */
export const trLower = (s = "") => String(s).toLocaleLowerCase("tr-TR");

export const dateTR = (iso) => {
  const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

// --- İkonlar -------------------------------------------------------------
// Tümü 24x24 viewBox, currentColor. Harici ikon kütüphanesi yok.
const P = (d, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}${extra}</svg>`;

export const icons = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>`,
  bolt: P('<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" fill="currentColor" stroke="none"/>'),
  phone: P('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>'),
  wa: P('<path d="M20.5 11.6A8.4 8.4 0 0 1 7.9 19L3.5 20.5l1.6-4.3A8.4 8.4 0 1 1 20.5 11.6Z"/><path d="M8.8 8.4c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.5l.8 1.8c.1.3 0 .5-.1.7l-.4.5c-.1.2-.3.4-.1.7a7 7 0 0 0 3.1 2.7c.3.1.5 0 .7-.2l.5-.6c.2-.2.4-.2.6-.1l1.7.8c.3.2.4.3.4.5a2 2 0 0 1-1.3 1.7c-.6.2-1.6.3-4-.9a9.5 9.5 0 0 1-4-4c-.9-1.8-.6-2.8-.4-3.3Z" fill="currentColor" stroke="none"/>'),
  mail: P('<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6.5L21 6"/>'),
  pin: P('<path d="M20 10.5c0 5.5-8 11.5-8 11.5s-8-6-8-11.5a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.3" r="2.8"/>'),
  clock: P('<circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3.2 2"/>'),
  check: P('<path d="m4.5 12.5 5 5 10-11"/>'),
  arrow: P('<path d="M5 12h13.5"/><path d="m13 6.2 6 5.8-6 5.8"/>'),
  chevron: P('<path d="m6 9.5 6 6 6-6"/>'),
  menu: P('<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>'),
  shield: P('<path d="M12 22s8-3.6 8-9.5V5.6L12 2.5 4 5.6v6.9C4 18.4 12 22 12 22Z"/><path d="m8.8 12.2 2.3 2.3 4.2-4.6"/>'),
  wrench: P('<path d="M14.8 6.2a4.5 4.5 0 0 0 5.7 5.9l-8 8a2.6 2.6 0 0 1-3.6-3.6l8-8a4.5 4.5 0 0 0-2.1-2.3Z"/>'),
  drop: P('<path d="M12 2.8s6.2 6.5 6.2 10.6a6.2 6.2 0 1 1-12.4 0C5.8 9.3 12 2.8 12 2.8Z"/>'),
  fire: P('<path d="M12 2.5s1.2 3 3.4 4.9c2.2 2 3.6 3.7 3.6 6.6a7 7 0 0 1-14 0c0-2 .8-3.4 2-4.6.4 1.3 1.4 2 2.3 2 .5-3.5 1.4-6.6 2.7-8.9Z"/>'),
  gauge: P('<path d="M4 17a8.5 8.5 0 1 1 16 0"/><path d="m12 13.5 3.6-3.2"/><circle cx="12" cy="17" r="1.4" fill="currentColor" stroke="none"/>'),
  camera: P('<path d="M3.5 8.5h3l1.6-2.4h7.8l1.6 2.4h3v10.5h-17V8.5Z"/><circle cx="12" cy="13.5" r="3.4"/>'),
  sun: P('<circle cx="12" cy="12" r="4"/><path d="M12 2.6v2.2M12 19.2v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.4 19.6 6 18M18 6l1.6-1.6"/>'),
  leaf: P('<path d="M5 19c0-8 6-14 15-14 0 9-5.6 14-11 14a5 5 0 0 1-4-.6Z"/><path d="M9 15.5c1.6-3 4.4-5.4 8-6.8"/>'),
  home: P('<path d="m3.5 10.5 8.5-7 8.5 7V21h-6v-6h-5v6h-6V10.5Z"/>'),
  building: P('<path d="M4 21V4.5h9V21M13 10h7v11M7 8h3M7 12h3M7 16h3M16 14h1.5M16 17.5h1.5"/>'),
  factory: P('<path d="M3 21V10l5.5 3.5V10L14 13.5V6.5h7V21H3Z"/><path d="M6.5 17.5H8M11 17.5h1.5M16.5 17.5H18"/>'),
  panel: P('<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7.5h8M8 11h8M8 14.5h4"/>'),
  plug: P('<path d="M9 3v5M15 3v5"/><path d="M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0V8Z"/><path d="M12 17v4"/>'),
  lamp: P('<path d="M12 2.5v3"/><path d="m6.5 14 5.5-8 5.5 8h-11Z"/><path d="M9.5 17.5h5M10.5 21h3"/>'),
  pump: P('<circle cx="9" cy="14" r="5"/><path d="M14 14h6M17 14V7h-4M9 9.5V14"/>'),
  pipe: P('<path d="M3 8h7a3 3 0 0 1 3 3v10"/><path d="M3 5.5v5M20 5.5v5M17.5 3h5"/><path d="M13 11h8"/>'),
  water: P('<path d="M3 8.5c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0M3 14c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0M3 19.5c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0"/>'),
  radiator: P('<rect x="3.5" y="5" width="17" height="12" rx="1.5"/><path d="M8 5v12M12 5v12M16 5v12M6.5 20h11"/>'),
  antenna: P('<circle cx="12" cy="9" r="2.5"/><path d="M12 11.5V21M7.8 13.2a6 6 0 0 1 0-8.4M16.2 4.8a6 6 0 0 1 0 8.4M5 16a9.5 9.5 0 0 1 0-14M19 2a9.5 9.5 0 0 1 0 14"/>'),
  battery: P('<rect x="2.5" y="7" width="15" height="10" rx="1.5"/><path d="M20 10.5v3M6 12h6"/>'),
  ground: P('<path d="M12 3v9"/><path d="M6 12h12M8 15.5h8M10 19h4"/>'),
  alert: P('<path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 9.5v4"/><circle cx="12" cy="16.4" r="1" fill="currentColor" stroke="none"/>'),
  tools: P('<path d="M3.5 20.5 9 15M6.5 3.5l3.6 3.6-2.5 2.5L4 6"/><path d="m14 10 6.5 6.5-2.5 2.5L11.5 12.5"/><path d="M13 6.5A4 4 0 0 1 18.5 3l-2.4 2.4 2 2L20.5 5A4 4 0 0 1 16 10.2"/>'),
  doc: P('<path d="M14 3H6.5v18h11V6.5L14 3Z"/><path d="M13.5 3v4h4M9 12h6M9 16h6"/>'),
  users: P('<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 6M17.5 20a6 6 0 0 0-2.2-4.6"/>'),
  star: P('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>'),
  search: P('<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>'),
  calendar: P('<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
  layers: P('<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3.5 12.5 8.5 4.7 8.5-4.7M3.5 16.8l8.5 4.7 8.5-4.7"/>'),
};

export const icon = (name) => icons[name] || icons.bolt;

/**
 * Yerel arama terimleri. Kullanıcıların gerçekte yazdığı halk dili karşılıklar
 * ("sucu", "elektrikçi", "tesisatçı") ile resmî hizmet adlarını birlikte üretir.
 * Sayfa metalarına ve içeriğe bu terimlerle giriliyor.
 */
export const localTerms = (place = "Malatya") => {
  const p = String(place).trim();
  return [
    `${p} elektrikçi`,
    `${p} sucu`,
    `${p} tesisatçı`,
    `${p} sıhhi tesisatçı`,
    `${p} su tesisatçısı`,
    `${p} tadilat`,
    `${p} tadilatçı`,
    `${p} boyacı`,
    `${p} usta`,
    `${p} anahtar teslim tadilat`,
    `${p} elektrik arıza`,
    `${p} su kaçağı`,
    `${p} tıkalı gider açma`,
    `${p} doğalgaz tesisatı`,
    `${p} kombi servisi`,
    `en yakın elektrikçi ${p}`,
    `acil tesisatçı ${p}`,
  ];
};
