// Tüm hizmetlerin birleşimi ve yardımcı seçiciler.
import { elektrikServices } from "./services-elektrik.mjs";
import { suServices } from "./services-su.mjs";
import { tesisatMontajServices } from "./services-tesisat-montaj.mjs";
import { pompaServices } from "./services-pompa.mjs";
import { yapiServices } from "./services-yapi.mjs";
import { anahtarTeslimServices } from "./services-anahtar-teslim.mjs";
import { otomasyonServices } from "./services-otomasyon.mjs";
import { tadilatServices } from "./services-tadilat.mjs";
import { dogalgazServices } from "./services-dogalgaz.mjs";
import { yapimServices } from "./services-yapim.mjs";
import { kabaInsaatServices } from "./services-kaba-insaat.mjs";
import { inceInsaatServices } from "./services-ince-insaat.mjs";
import { cepheBahceServices } from "./services-cephe-bahce.mjs";

// Sıralama ana sayfadaki ve menüdeki önceliği belirler.
// Ana konumlandırma tadilat ve anahtar teslim; elektrik/su destekleyici gruplar.
export const serviceGroups = [
  "Anahtar Teslim Tadilat",
  "Anahtar Teslim Yapım",
  "Elektrik",
  "Su ve Tesisat",
  "Doğalgaz",
  "Pompa ve Sulama",
  "Mutfak ve Banyo",
  "Ticari Tadilat",
  "Kaba İnşaat",
  "İnce İnşaat",
  "Çatı ve Dış Cephe",
  "Bahçe ve Çevre",
  "Proje Yönetimi",
];

export const services = [
  ...tadilatServices,
  ...anahtarTeslimServices,
  ...yapiServices,
  ...tesisatMontajServices,
  ...elektrikServices,
  ...otomasyonServices,
  ...suServices,
  ...pompaServices,
  ...dogalgazServices,
  ...yapimServices,
  ...kabaInsaatServices,
  ...inceInsaatServices,
  ...cepheBahceServices,
];

/** Grup sırasına göre sıralanmış hizmetler (menü ve liste sayfaları için). */
export const servicesOrdered = serviceGroups.flatMap((g) => services.filter((s) => s.group === g));

export const byGroup = (group) => services.filter((s) => s.group === group);
export const getService = (slug) => services.find((s) => s.slug === slug);

/** Hizmet × ilçe sayfası üretilen ana hizmetler. */
// Geo SEO: her hizmet için ilçe sayfası üretilir.
// (Eskiden yalnızca s.core işaretli hizmetler için üretiliyordu.)
export const coreServices = services;

/** Ana sayfa vitrininde gösterilenler. */
export const featuredServices = services.filter((s) => s.featured);

/** Fiyat sayfası üretilen hizmetler (küçük/standart işler). */
export const pricedServices = services.filter((s) => s.priced);

/** Grup açıklamaları, hizmetler listesi sayfasında kullanılır. */
export const groupIntro = {
  "Anahtar Teslim Tadilat":
    "Yıkımdan temiz teslime kadar bir mekânın tüm tadilatı. Daire, ev, villa, apartman ortak alanı; kırım, tesisat, ince işler ve montaj tek programda, tek muhatapla.",
  "Mutfak ve Banyo":
    "Evin en çok tesisat barındıran iki mekânı. Su, elektrik, seramik ve montaj aynı ekipte olduğu için mutfakta ankastre hattı, banyoda su yalıtımı atlanmıyor.",
  "Ticari Tadilat":
    "Dükkan, ofis, mağaza, kafe ve atölye. Programı açılış tarihinden geriye kuruyoruz; tedarik süresi uzun kalemleri en başta siparişe çıkarıyoruz.",
  "Anahtar Teslim Yapım":
    "Sıfırdan müstakil ev, villa, bağ evi, dükkan, depo ve atölye yapımı. Ruhsat ve statik gerektiren işlerde yetkili proje ekipleriyle koordineli çalışıyoruz; sahadaki uygulama ve iş programı bizde.",
  "Kaba İnşaat":
    "Temel, betonarme, duvar, çatı ve şap. Sonradan düzeltilemeyen tek aşama burası; demir ve beton kayıtlarını dosyalayıp size veriyoruz.",
  "İnce İnşaat":
    "Sıva, alçı, boya, alçıpan, seramik, parke, kapı ve doğrama. Yapının görünen tüm işleri; doğru sırayla yapıldığında hiçbiri diğerini bozmuyor.",
  "Çatı ve Dış Cephe":
    "Çatı yapımı ve aktarma, mantolama, cephe boyası, teras ve balkon su yalıtımı. İskele bir kez kurulurken yapılması gereken her şeyi birlikte planlıyoruz.",
  "Bahçe ve Çevre":
    "Bahçe duvarı, kilit taşı, drenaj, aydınlatma, otomatik sulama, sundurma ve korkuluk. Önce altyapı, sonra görünen kısım.",
  "Proje Yönetimi":
    "Keşif, metraj, bütçe analizi, iş programı ve ekip koordinasyonu. İşin kötü gitmesinin sebebi genelde işçilik değil, kimin ne zaman ne yapacağının belli olmaması.",
  Elektrik:
    "Sıfır tesisattan sigorta arızasına, panodan uzaktan kumanda sistemlerine kadar elektriğin geçtiği her yer. Tahminle değil ölçüm cihazıyla çalışıyoruz; duvar kapanmadan önce hattı test ediyoruz.",
  "Su ve Tesisat":
    "Temiz su, pis su, kalorifer ve yangın hattı. Kaçak tespiti, tıkalı gider açma, boru yenileme, depo temizliği. Kaçak işinde önceliğimiz, duvarı mümkün olan en az yerden açmak.",
  "Pompa ve Sulama":
    "Apartman hidroforu, kuyu pompası, kayısı bahçesi ve sera sulaması, anahtar teslim sulama sistemleri. Hesap yapmadan pompa önermiyoruz: kaç metre basacak, saatte kaç ton verecek, önce bunu çıkarıyoruz.",
  "Yapı ve Tadilat":
    "Anahtar teslim daire ve iş yeri, bina tesisat yenileme, komple tadilat. Elektriği de mekaniği de biz yaptığımız için işler birbirini bekletmiyor; teslim tarihi kaymıyor.",
};

/** Grup ikonları. */
export const groupIcon = {
  Elektrik: "bolt",
  "Su ve Tesisat": "drop",
  "Pompa ve Sulama": "pump",
  "Yapı ve Tadilat": "building",
};

/* ------------------------------------------------------- hizmet grupları */
// Grup hub sayfaları: /hizmetler/alan/<slug>/
// "alan" ara segmenti, grup slug'ının hizmet slug'ıyla çakışmasını önlüyor
// (ör. hem "anahtar-teslim-tadilat" grubu hem aynı adlı hizmet var).
export const groupSlugMap = {
  "Anahtar Teslim Tadilat": "anahtar-teslim-tadilat",
  "Anahtar Teslim Yapım": "anahtar-teslim-yapim",
  Elektrik: "elektrik",
  "Su ve Tesisat": "su-ve-tesisat",
  Doğalgaz: "dogalgaz",
  "Pompa ve Sulama": "pompa-ve-sulama",
  "Mutfak ve Banyo": "mutfak-ve-banyo",
  "Ticari Tadilat": "ticari-tadilat",
  "Kaba İnşaat": "kaba-insaat",
  "İnce İnşaat": "ince-insaat",
  "Çatı ve Dış Cephe": "cati-ve-dis-cephe",
  "Bahçe ve Çevre": "bahce-ve-cevre",
  "Proje Yönetimi": "proje-yonetimi",
};

export const groupSlug = (g) => groupSlugMap[g] || "";
export const groupHref = (g) => `/hizmetler/alan/${groupSlug(g)}/`;
export const getGroupBySlug = (slug) =>
  serviceGroups.find((g) => groupSlugMap[g] === slug);

/** Ana sayfa ve grup listeleri için hazır nesne. */
export const groupsOrdered = serviceGroups.map((name) => ({
  name,
  slug: groupSlugMap[name],
  href: `/hizmetler/alan/${groupSlugMap[name]}/`,
  items: services.filter((s) => s.group === name),
  intro: groupIntro[name] || "",
}));

/** Grup kapağı: gruptaki ilk öne çıkan hizmetin fotoğrafı kullanılır. */
export const groupCover = (name) => {
  const list = services.filter((s) => s.group === name);
  return (list.find((s) => s.featured) || list[0])?.slug || "";
};
