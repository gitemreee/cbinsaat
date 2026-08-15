---
name: cb-metin
description: CB İnşaat sitesinin ses tonu ve metin kuralları. Yeni sayfa metni, hizmet açıklaması, SSS cevabı, blog girişi, başlık, buton ya da kısa etiket yazarken; mevcut metni düzenlerken veya "şu yazı hoşuma gitmedi", "daha sıcak olsun", "bu cümle keskin" gibi bir istek geldiğinde kullan. Türkçe müşteri metinlerinin tamamı bu kurallara tabidir.
---

# CB İnşaat metin sesi

Site, Malatya'da elektrik, su, doğalgaz, pompa, sulama ve anahtar teslim
tadilat işi yapan bir firmanın sitesi. Okuyan kişi çoğu zaman bir sorunla
geliyor: su akıtıyor, sigorta atıyor, tadilat düşünüyor. Metin o kişiyi
karşılayan bir insan gibi konuşmalı.

## Temel ilke

**Kapıyı açık tut.** Her cümle "gelin, konuşalım, hallederiz" hissi
vermeli. Kural koyan, sınır çizen, kendini savunan bir ton olmamalı.

Ölçü şu: cümleyi telefonda söylesen kulağa nasıl gelirdi? "Telefonda
kesin rakam vermiyoruz" diye başlayan bir usta, karşıdakini daha ilk
cümlede geri iter. "Bir gelip bakalım, ondan sonra net konuşalım" diyen
usta aynı şeyi söylüyor ama kapı açık kalıyor.

## Kurallar

### 1. Reddi teklife çevir

Yapmadığın şeyi söyleyerek başlama. Aynı bilgiyi yaptığın şey üzerinden
ver. Bilgi kaybolmaz, çerçeve değişir.

| Böyle değil | Böyle |
| --- | --- |
| Telefonda kesin rakam vermiyoruz. | Bir gelip yerinde bakalım, fiyatı ondan sonra net konuşalım. |
| Götürü rakam vermiyoruz. | Fiyatı kalem kalem açıyoruz; hangi rakam neye ait, görürsünüz. |
| Siz onaylamadan ek iş yapılmıyor. | Ek bir iş çıkarsa önce size sorarız. |
| Taşerona dağıtmıyoruz. | Bütün işi kendi ekibimiz yapıyor. |
| Bekleyebilecek bir işe acil ücreti yansıtmıyoruz. | Acil ücreti yalnızca gerçekten acil işlerde geçerli. |
| Yerinde bakmadan kesin rakam vermiyoruz. | Kesin rakam için yerinde görmemiz yeterli. |

Tek istisna: güvenlik uyarıları. "Gaz kokusu varsa hiçbir düğmeye
dokunmayın" cümlesi yumuşatılmaz.

### 2. Saymayı bırak, kapsa

Rakamla sınır çizmek soğuk durur ve okuyan kişi kendini listede
arar. Kapsayıcı söyle.

| Böyle değil | Böyle |
| --- | --- |
| Malatya'nın 13 ilçesine hizmet | Malatya geneli hizmetinizdeyiz |
| 13 ilçe, mahalle bazında | Malatya'nın her yerine gidiyoruz |
| 8 farklı hizmet kalemi sunuyoruz | Elektrikten suya, tadilattan sulamaya hepsi bizde |

Rakam bir şey kanıtlıyorsa kalabilir: "2005'ten beri", "21 yıllık
tecrübe", "60 metrede su veren formasyon". Kural, envanter saymaya karşı.

### 3. Keskin kesinlik yerine yumuşak kesinlik

Verilen söz aynı kalsın ama cümle çarpmasın. Kesme, tehdit ve şart
kipinden uzak dur.

| Böyle değil | Böyle |
| --- | --- |
| Teklifte "onu sonra konuşuruz" dediğimiz bir kalem bırakmıyoruz. | Teklifte ne varsa odur; sonradan çıkan bir kalem olmaz. |
| Kalem kalem yazılı teklif | Fiyatı yazılı veriyoruz |
| Yıkımdan temiz teslime tek ekip | Yıkımından teslimine kadar yanınızdayız |

### 4. Davet cümlesi bulundur

Sayfanın müşteriye dönük her bölümünde en az bir "arayın, gelelim,
bakalım" cümlesi olsun. Emir değil çağrı: "Aramanız yeterli",
"Ne zaman isterseniz arayın", "Bir bakalım, birlikte karar veririz".

### 5. Muhatap belli olsun

Müşteriye **siz**, firmaya **biz**. Edilgen çatı ("yapılmaktadır",
"değerlendirilir") firmayı ortadan kaldırır, soğutur. Etken yaz:
"yapıyoruz", "bakıyoruz", "geliriz".

### 6. Kısa yaz ama kesik yazma

Kısa cümle iyi. Fiilsiz, telgraf gibi kesik ifade kötü. "Tek ekip.
Yazılı teklif. Temiz teslim." yerine "İşin tamamını tek ekip yapıyor,
fiyatı yazılı veriyoruz, yeri temiz bırakıyoruz."

### 7. Abartma

Övgü sıfatı yok: kusursuz, mükemmel, üstün kalite, titizlikle, müşteri
memnuniyeti odaklı, yılların tecrübesiyle, geniş yelpaze. Yapılan iş
kendini anlatsın. `humanizer` skill'indeki yapay zekâ kalıpları da
geçerli: em tire, "Bu yüzden/Bu nedenle" yığılması, "belirgin",
"Sonuç olarak", üçlü liste takıntısı.

### 8. Bilgi kaybetme

Yumuşatmak, bilgiyi silmek değil. Rakam, süre, koşul, teknik detay
neyse aynen kalır; yalnızca çerçeve değişir. Bir cümleyi yumuşatırken
içindeki somut bilgi düşüyorsa yanlış yapıyorsun demektir.

## Uygularken

- Kaynak `site/` altındadır; `dist-site/` build çıktısı, elle dokunulmaz.
- Şablon katmanı (`site/pages/`, `site/lib/`, `site/data/districts.mjs`,
  `localities.mjs`) tek satırla binlerce sayfayı etkiliyor. Ton
  denetiminde burayı atlama.
- Aynı cümle iki ayrı şablonda tekrarlanıyorsa ikisini farklı yaz;
  yoksa binlerce sayfada yinelenen içerik oluşuyor.
- Değişiklikten sonra `npm run build` ve `npm run check` çalıştır,
  ardından `main`'e gönder (CLAUDE.md'deki yayın kuralı).

## Denetim komutu

Reddi öne alan cümleleri bulmak için:

```
grep -rnoE ".{0,70}(vermiyoruz|yapmıyoruz|bırakmıyoruz|almıyoruz|dağıtmıyoruz|yansıtmıyoruz|etmiyoruz|geçmiyoruz).{0,40}" site/data site/pages site/lib
```

Envanter sayan ifadeler için:

```
grep -rnoE ".{0,50}[0-9]+ (ilçe|hizmet|kalem|madde|başlık).{0,50}" site/data site/pages site/lib
```
