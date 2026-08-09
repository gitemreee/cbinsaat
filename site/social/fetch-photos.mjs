// Üretilen konu fotoğraflarını indirip public/social-photos/ altına yazar.
// Kendi çektiğiniz fotoğrafları koymak isterseniz aynı klasöre <id>.jpg olarak
// atmanız yeterli; build o dosyayı kullanır.

import { mkdir, writeFile, copyFile, access } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..", "..");
const OUT = join(ROOT, "public", "social-photos");
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3A2ZHIybrDGO1KuyX7FQFS5OPNc";

// gönderi id → üretilen dosya adı
const MAP = {
  "01": "hf_20260801_150511_a9b6adb5-e9db-428e-b377-033c92532b5a.png",
  "02": "hf_20260801_150544_0ad6d857-b728-41b6-b07c-b668f11e9fd3.png",
  "03": "hf_20260801_150547_30ab1403-becf-4e3d-9ea8-4b78a3a32bc2.png",
  "04": "hf_20260801_150548_c04db54b-45ed-42f0-a473-490abfd493a0.png",
  "05": "hf_20260801_150550_d1f7fdf2-76d2-4195-bf92-40c4d4f2fe77.png",
  "06": "hf_20260801_150558_f10f6276-d362-4684-9dce-9a3b87845589.png",
  "07": "hf_20260801_150600_19bd66f2-7879-425b-95a5-23fdeab14df8.png",
  "08": "hf_20260801_150602_6be23990-8f3e-4265-95f3-69651eb10284.png",
  "09": "hf_20260801_150603_bafbb536-a2dc-461b-9642-677fcf2c3ed5.png",
  "10": "hf_20260801_150954_1e4ff5df-15a1-417a-a9b3-99a2caef504b.png",
  "11": "hf_20260801_150955_4dd9d82c-88e2-4794-993f-df1f317b06bc.png",
};

// Ek olarak elimizdeki gerçek fotoğraflar
const LOCAL = {
  "12": join(ROOT, "public", "malatya-panorama.jpg"),
};

await mkdir(OUT, { recursive: true });
let ok = 0;

for (const [id, file] of Object.entries(MAP)) {
  const url = `${CDN}/${file}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ! ${id}: indirilemedi (HTTP ${res.status})`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).jpeg({ quality: 88, mozjpeg: true }).toFile(join(OUT, `${id}.jpg`));
  ok++;
  console.log(`  ✓ ${id}.jpg`);
}

for (const [id, src] of Object.entries(LOCAL)) {
  try {
    await access(src);
    await sharp(src).jpeg({ quality: 88, mozjpeg: true }).toFile(join(OUT, `${id}.jpg`));
    ok++;
    console.log(`  ✓ ${id}.jpg (yerel)`);
  } catch {
    console.warn(`  ! ${id}: yerel dosya yok — ${src}`);
  }
}

console.log(`\n${ok} fotoğraf hazır: ${OUT}\n`);
