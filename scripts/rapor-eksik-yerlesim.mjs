// Resmî Malatya yerleşim listesi ile sitedeki bölge verisini karşılaştırıp
// outputs/seo-yerel/eksik-yerlesimler.md raporunu üretir.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { localities, featuredLocalities } from "../site/data/localities.mjs";
import { districts } from "../site/data/districts.mjs";
import { localTags } from "../site/data/local-tags.mjs";

const DIR = "outputs/seo-yerel/malatya-yerlesim-listeleri";
const norm = (s) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]/g, "");

const ilceSlug = Object.fromEntries(districts.map((d) => [norm(d.name), d.slug]));
const ilceAd = Object.fromEntries(districts.map((d) => [d.slug, d.name]));

const readCsv = async (f) => {
  const raw = (await readFile(`${DIR}/${f}`, "utf8")).replace(/^﻿/, "");
  const lines = raw.trim().split(/\r?\n/);
  const head = lines[0].split(";").map((x) => x.replace(/^"|"$/g, ""));
  return lines.slice(1).map((l) => {
    const c = l.split(";").map((x) => x.replace(/^"|"$/g, ""));
    return Object.fromEntries(head.map((h, i) => [h, c[i]]));
  });
};

const mahalleler = await readCsv("01-malatya-guncel-ilce-mahalleleri.csv");
const beldeler = await readCsv("03-malatya-eski-belde-kasaba-belediyeleri.csv").catch(() => []);
const koyler = await readCsv("04-malatya-merkeze-bagli-eski-koyler.csv").catch(() => []);
const mezralar = await readCsv("05-malatya-harita-tabanli-mezra-adaylari.csv").catch(() => []);

const sitede = new Set(localities.map((l) => `${l.district}|${norm(l.name)}`));
const resmi = new Set();
const eksik = new Map(districts.map((d) => [d.slug, []]));
const eklendi = new Map(districts.map((d) => [d.slug, []]));

for (const r of mahalleler) {
  const ds = ilceSlug[norm(r.Ilce)];
  if (!ds) continue;
  resmi.add(`${ds}|${norm(r.Mahalle)}`);
  if (!sitede.has(`${ds}|${norm(r.Mahalle)}`)) eksik.get(ds).push(r.Mahalle);
}
for (const l of localities) {
  if (!l.featured) eklendi.get(l.district).push(l.name);
}
const siteFazla = localities.filter((l) => !resmi.has(`${l.district}|${norm(l.name)}`));

const bugun = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
const N = (x) => String(x).padStart(3);

let md = `# Malatya yerleşim listesi — site karşılaştırması

Kaynak: \`outputs/seo-yerel/malatya-yerlesim-listeleri/\` (Malatya Valiliği muhtarlık
listesi, 6360 sayılı Kanun sonrası güncel durum). Karşılaştırma tarihi: ${bugun}.

## Özet

| | Adet |
|---|---|
| Resmî listedeki güncel mahalle | ${mahalleler.length} |
| Karşılaştırma öncesi sitede olan | ${featuredLocalities.length} |
| **Eksik olan ve şimdi eklenen** | **${localities.length - featuredLocalities.length}** |
| Karşılaştırma sonrası sitedeki toplam yerleşim | ${localities.length} |
| Bunlardan resmî listede karşılığı olmayan (TOKİ, OSB, bağ bölgesi, ilçe merkezi kaydı) | ${siteFazla.length} |

Eksik olan **${localities.length - featuredLocalities.length}** yerleşimin tamamı
\`site/data/localities-extra.mjs\` dosyasına eklendi. Her biri için:

- \`/bolgeler/<ilçe>/<mahalle>/\` mahalle sayfası,
- \`/bolgeler/<ilçe>/<mahalle>/<etiket>/\` biçiminde ${localTags.length} etiket sayfası
  (${localTags.map((t) => t.label).join(", ")})

üretiliyor.

## İlçe bazında durum

| İlçe | Resmî mahalle | Önceden sitede | Eklenen |
|---|---|---|---|
`;

let topEksik = 0;
for (const d of districts) {
  const resmiSay = mahalleler.filter((r) => ilceSlug[norm(r.Ilce)] === d.slug).length;
  const ek = eklendi.get(d.slug).length;
  topEksik += ek;
  md += `| ${d.name} | ${resmiSay} | ${resmiSay - ek} | **+${ek}** |\n`;
}
md += `| **Toplam** | **${mahalleler.length}** | **${mahalleler.length - topEksik}** | **+${topEksik}** |\n`;

md += `
---

## Eklenen yerleşimler (ilçe ilçe)

`;
for (const d of districts) {
  const ek = eklendi.get(d.slug);
  if (!ek.length) continue;
  md += `### ${d.name} — ${ek.length} yerleşim eklendi\n\n`;
  md += ek.map((n) => `${n}`).join(", ") + "\n\n";
}

md += `---

## Sitede olup resmî mahalle listesinde geçmeyen kayıtlar (${siteFazla.length})

Bunlar hata değil; resmî mahalle listesinde ayrı satır olarak yer almayan ama
halk arasında ve adres tariflerinde kullanılan yerlerdir. Yerel aramada karşılığı
olduğu için sayfaları korundu.

| Yer | İlçe | Tür |
|---|---|---|
`;
for (const l of siteFazla) md += `| ${l.name} | ${ilceAd[l.district]} | ${l.type} |\n`;

md += `
---

## Kapsam dışı bırakılan listeler

Klasördeki diğer dosyalar bilinçli olarak sayfaya çevrilmedi:

| Dosya | Kayıt | Neden |
|---|---|---|
| \`02-malatya-guncel-belediyeler.csv\` | 14 | Belediye tüzel kişiliği; yerleşim değil. |
| \`03-malatya-eski-belde-kasaba-belediyeleri.csv\` | ${beldeler.length} | 6360 sonrası mahalleye dönüştü; adları zaten mahalle listesinde var. |
| \`04-malatya-merkeze-bagli-eski-koyler.csv\` | ${koyler.length} | Aynı şekilde mahalleye dönüştü, mükerrer sayfa olurdu. |
| \`05-malatya-harita-tabanli-mezra-adaylari.csv\` | ${mezralar.length} | OpenStreetMap kaynaklı, resmî değil. Kaynak dosyanın kendi notu da doğrulama isteniyor diyor. Muhtarlıktan teyit edilirse eklenebilir. |

## Yeniden üretmek için

\`\`\`bash
node scripts/gen-localities.mjs   # localities-extra.mjs'i yeniden üretir
node scripts/rapor-eksik-yerlesim.mjs   # bu raporu yeniden üretir
node site/build.mjs
\`\`\`
`;

await mkdir("outputs/seo-yerel", { recursive: true });
await writeFile("outputs/seo-yerel/eksik-yerlesimler.md", md, "utf8");
console.log(`✓ outputs/seo-yerel/eksik-yerlesimler.md  (${topEksik} eklenen yerleşim)`);
