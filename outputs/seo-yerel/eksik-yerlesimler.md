# Malatya yerleşim listesi — site karşılaştırması

Kaynak: `outputs/seo-yerel/malatya-yerlesim-listeleri/` (Malatya Valiliği muhtarlık
listesi, 6360 sayılı Kanun sonrası güncel durum). Karşılaştırma tarihi: 09 Ağustos 2026.

## Özet

| | Adet |
|---|---|
| Resmî listedeki güncel mahalle | 719 |
| Karşılaştırma öncesi sitede olan | 121 |
| **Eksik olan ve şimdi eklenen** | **647** |
| Karşılaştırma sonrası sitedeki toplam yerleşim | 768 |
| Bunlardan resmî listede karşılığı olmayan (TOKİ, OSB, bağ bölgesi, ilçe merkezi kaydı) | 52 |

Eksik olan **647** yerleşimin tamamı
`site/data/localities-extra.mjs` dosyasına eklendi. Her biri için:

- `/bolgeler/<ilçe>/<mahalle>/` mahalle sayfası,
- `/bolgeler/<ilçe>/<mahalle>/<etiket>/` biçiminde 8 etiket sayfası
  (elektrikçi, su tesisatçısı, sıhhi tesisatçı, doğalgaz tesisatçısı, sulama sistemi ustası, hidrofor ve pompa ustası, aydınlatma ustası, tadilat ustası)

üretiliyor.

## İlçe bazında durum

| İlçe | Resmî mahalle | Önceden sitede | Eklenen |
|---|---|---|---|
| Battalgazi | 104 | 23 | **+81** |
| Yeşilyurt | 82 | 20 | **+62** |
| Akçadağ | 77 | 4 | **+73** |
| Arapgir | 63 | 2 | **+61** |
| Arguvan | 49 | 3 | **+46** |
| Darende | 67 | 4 | **+63** |
| Doğanşehir | 39 | 5 | **+34** |
| Doğanyol | 16 | 1 | **+15** |
| Hekimhan | 65 | 4 | **+61** |
| Kale | 28 | 0 | **+28** |
| Kuluncak | 28 | 1 | **+27** |
| Pütürge | 68 | 2 | **+66** |
| Yazıhan | 33 | 3 | **+30** |
| **Toplam** | **719** | **72** | **+647** |

---

## Eklenen yerleşimler (ilçe ilçe)

### Battalgazi — 81 yerleşim eklendi

Adagören, Ağılyazı, Alacakapı, Alhanuşağı, Alişar, Aslanbey, Ataköy, Bağtepe, Bahçelievler, Bahri (Erenli), Başharık, Battalgazi, Beylerbaşı, Boran, Bulutlu, Büyükhüseyinbey, Büyükmustafapaşa, Cevherizade, Çolaklı, Çolakoğlu, Dabakhane, Dolamantepe, Düzyol, Ferhadiye, Fırıncı, Göller, Göztepe, Gülümuşağı, Hacıabdi, Hacıhaliloğluçifliği, Hacıyusuflar, Halfettin, Hamidiye, Hasanvarol, Hidayet, Hisartepe, İskender, İstiklal, İzzetiye, Kadıçayırı, Kamıştaş, Kapıkaya, Karabağlar, Karagöz, Karahan, Karakaşçiftliği, Karaköy, Karatepe, Kavaklıbağ, Kernek, Kıraç, Kırçuval, Kuluşağı, Küçükhüseyinbey, Küçükmustafapaşa, Merdivenler, Merkezbeydağı, Meydancık, Nuriye, Paşaköşkü, Pelitli, Sarıcıoğlu, Selçuklu, Selvidağ, Serintepe, Şıkşık, Şişman, Tandoğan, Tanışık, Taştepe, Tokluca, Toptaş, Uluköy, Üniversite, Üzümlü, Yamaç, Yarımcahan, Yenice, Yenihamam, Yeniköy, Yıldıztepe

### Yeşilyurt — 62 yerleşim eklendi

Abdulgaffar, Aşağıbağlar, Aşağıköy, Atalar, Atatürk, Banazı, Bentbaşı, Bindal, Cafana, Cemal Gürsel, Cevatpaşa, Cumhuriyet, Cumhuriyet Örnek, Çavuşoğlu, Çayırköy, Çukurdere, Duranlar, Duruldu, Fatih, Gazi, Gedik, Göktarla, Gözene, Hamidiye, Hıroğlu, Hocaahmetyesevi, Işıklı, İkizce, İlyas, İnönü, Kadiruşağı, Karahan, Kendirli, Kırkpınar, Kırlangıç, Kiltepe, Koşu, Kozluk, Kuşdoğan, Kuyulu, Mahmutlu, Merkez Fatih, Mullakassım, Oluklu, Ortaköy, Öncü, Özal, Salkonak, Salköprü, Samanlı, Seyituşağı, Seyran, Suluköy, Tepeköy, Tohma, Topraktepe, Üçgöze, Yaka, Yalınkaya, Yavuz Selim, Yeşilkaynak, Zaviye

### Akçadağ — 73 yerleşim eklendi

Aksaray, Aksüt, Aktepe, Aliçeri, Altunlu, Ancar, Aşağıörükçü, Aydınlar, Bağköy, Bahri, Başpınar, Bayramuşağı, Bekiruşağı, Bölüklü, Büyükçimiş, Büyükköy, Çakıllıpınar, Çatalbahçe, Çevirme, Çobanuşağı, Darıca, Dedeköy, Demirciler, Develi, Doğanlar, Doğantepe, Durulova, Dutlu, Dümüklü, Eğin, Esenbey, Esenli, Fatih, Gölpınar, Güneşli, Gürkaynak, Hançerli, Hartut, Harunuşağı, Ilıcak, İkinciler, Kadıibrahim, Kahyalı, Karamağara, Karapınar, Kasımuşağı, Kayadibi, Keklikpınar, Keller, Kepez, Kolköy, Kotangölü, Kömekavak, Kurtuşağı, Küçükkürne, Kültür, Mezra, Mihmanlı, Muratlı, Ortaköy, Resuluşağı, Sahilköy, Sakalıuzun, Sarıhacı, Şeyhler, Taşevler, Taşolar, Tataruşağı, Yağmurlu, Yalınbudak, Yalınkaya, Yaylımlı, Yukarıörükçü

### Arapgir — 61 yerleşim eklendi

Aktaş, Alıçlı, Aşağı Çörenge, Aşağı Ulupınar, Aşağı Yenice, Berenge, Boğazlı, Bostancık, Budak, Cömertli, Çakırsu, Çarşı, Çaybaşı, Çiğnir, Çimen, Çobanlı, Deregezen, Düzce, Esikli, Eskiarapgir, Eynir, Gebeli, Göz, Gözeli, Günyüzü, Hezenek, Hocaali, Kayakesen, Kaynak, Kazanç, Kılıçlı, Koru, Köseoğlu, Mehmet Akif, Meşeli, Ormansırtı, Osmanpaşa, Pacalı, Pirali, Sağıluşağı, Sekisu, Selamlı, Serge, Sinikli, Sipahi Uşağı, Suceyin, Sugeçti, Şıhlar, Tarhan, Taşdelen, Taşdibek, Ulaçlı, Yaylacık, Yazılı, Yeni, Yeşilyayla, Yukarıçörenge, Yukarıulupınar, Yukarıyabanlı, Yukarıyenice, Zöhrap

### Arguvan — 46 yerleşim eklendi

Akören, Alhasuşağı, Armutlu, Asar, Asmaca, Aşağısürmenli, Bahçeli, Bahçelievler, Çakmak, Çayırlı, Çevreli, Çiftlik, Dolaylı, Doydum, Ermişli, Eymir, Göçeruşağı, Gökağaç, Gümüşlü, Güngören, Gürge, Güveçli, Hakverdi, İçmece, İsaköy, Karababa, Karahüyük, Kızık, Koçak, Konakbaşı, Kömürlük, Kurutaş, Kuyudere, Narmikan, Parçikan, Şotik, Tarlacık, Tatkınık, Tepebağ, Yamaç, Yeni, Yeniköy, Yenisu, Yoncalı, Yukarısürmenli, Yürekteşı

### Darende — 63 yerleşim eklendi

Ağılbaşı, Ağılyazı, Akbaba, Akçatoprak, Akova, Barındır, Başkaya, Baytarbağı, Beybağı, Çaybaşı, Çınar, Çukurkaya, Gaziköy, Gökçeören, Gökyar, Göllüce, Güdül, Günerli, Hacıderviş, Hacılar Sıragoz, Hacılar Şeyhli, Hacolar, Heyiketeği, Hisarcık, Hisarkale, Ilıca, Irmaklı, İbrahimpaşa, Kaldırım, Karabacak, Karabayır, Karaoğuz, Kavak, Kaynak, Kerimli, Kılıçbağı, Kölükler, Kurudere, Kuzpınar, Medişeyh, Mehmetpaşa, Mollauşağı, Nadir, Nurkuyusu, Ozan, Palanga, Sakarya, Sandıkkaya, Sayfiye, Sungur, Şendere, Şuğul, Ulupınar, Uzunhasan, Üçpınar, Yarımca, Yavuzlar, Yazıköy, Yenice, Yeniköy, Yenipınar, Yeşiltaş, Yukarıulupınar

### Doğanşehir — 34 yerleşim eklendi

Altıntop, Beğre, Bıçakçı, Çavuşlu, Çığlık, Çömlekoba, Dedeyazı, Doğu, Esentepe, Eskiköy, Fındık, Gövdeli, Günedoğru, Gürobası, Güzelköy, Hudut, Kadılı, Kapıdere, Karanlıkdere, Karaterzi, Karşıyaka, Kelhalil, Küçüklü, Örencik, Polatderesi, Reşadiye, Savaklı, Söğüt, Suçatı, Şatırobası, Topraktepe, Yeni, Yolkoru, Yuvalı

### Doğanyol — 15 yerleşim eklendi

Akkent, Behramlı, Burçköy, Çolak, Damlı, Gevheruşağı, Gümüşsu, İshak, Koldere, Konurtay, Mezraa, Poyraz, Ulutaş, Yalınca, Yeşilköy

### Hekimhan — 61 yerleşim eklendi

Akmağara, Aksütlü, Aşağı Sazlıca, Bağyolu, Bahçedamı, Bahçelievler, Ballıkaya, Başkavak, Başkınık, Beykent, Boğazgören, Budaklı, Çanakpınar, Çimenlik, Çulhalı, Davulku, Delihasanyurdu, Dereköy, Deveci, Dikenli, Dikili, Dumlu, Dursunlu, Fatih, Girmana, Güçlü, Güvenç, Güzelyayla, Hacılar, Haydaroğlu, Işıklı, İgdir, Karadere, Karaköcek, Karapınar, Karslılar, Karşıyaka, Kavacık, Kozdere, Köprülü Mehmet Paşa, Köylü Köyü, Kurşunlu, Mimar Sinan, Mollaibrahim, Salıcık, Saraylı, Sarıkız, Sögüt, Şehit Fethi Akyüz, Taşbaşı, Taşoluk, Turgut Özal, Uğurlu, Yağca, Yayladamı, Yeni, Yeşilkale, Yeşilköy, Yeşilpınar, Yukarı Saz, Yukarı Selimli

### Kale — 28 yerleşim eklendi

Abuşoğlu, Akça, Akuşağı, Bağlıca, Bent, Çanakçı, Darıpınar, Dedeköy, Düztarla, Erdemli, Gülenköy, Güneyce, İkizpınar, Kale, Karaağaç, Karahüseyin, Kıyıcak, Kozluk, Kumluyazı, Mahmutdursun, Salkımlı, Sarıot, Soğukpınar, Tepebaşı, Uyanık, Uzunhüseyin, Üçdeğirmen, Yenidamlar

### Kuluncak — 27 yerleşim eklendi

Alvar, Aşağıselimli, Bahçelievler, Başören, Bıyıkboğazı, Bicir, Boğaziçi, Ciritbelen, Çayköy, Çörmü, Göğebakan, İlisuluk, İsmetpaşa, İstiklal, Karabük, Karaçayır, Karıncalık, Karlık, Kaynarca, Kızılhisar, Kızılmağara, Konaktepe, Kömüklü, Ortapınar, Sultanlı, Temüklü, Yeni

### Pütürge — 66 yerleşim eklendi

Ağalar, Aktarla, Aliçeri, Alihan, Arınlı, Arıtoprak, Arslankent, Bakımlı, Balpınarı, Başmezra, Bayırköy, Belenköy, Bölükkaya, Bölünmez, Büyüköz, Çamlıdere, Çayköy, Çengelli, Çığırlı, Çukuroymağı, Deredüzü, Erdemler, Ersele, Esencik, Esenlik, Gertan, Gözlüce, Gündeğer, Gündüz, Hatip, Karakaya, Karşıyaka, Kavaklıdere, Kayadere, Koçköy, Korucak, Kozluk, Köklükaya, Körme, Köylü, Meşedibi, Ormaniçi, Örencik, Örmeli, Örnekköy, Pazarcık, Poskıran, Sahilköy, Söğütlü, Şiro Taraksu, Şükan, Taşbaşı, Taşmış, Taştepe, Tatlıcak, Tekederesi, Teluşağı, Ulutaş, Uzunkoru, Uzuntaş, Üçyaka, Yamaç, Yandere, Yazıca, Yediyol, Yeşildere

### Yazıhan — 30 yerleşim eklendi

Akyazı, Alican, Ambarcık, Bahçelievler, Balaban, Bereketli, Boztepe, Böğürtlen, Buzluk, Çavuş, Çivril, Dedekargın, Doğuş, Eğribük, Epreme, Erecek, Gayret, Gövük, Hamidiye, İriağaç, Karaca, Koşar, Kömüşhan, Mısırdere, Sadıklı, Sinanlı, Sürür, Tahtalı, Tecirli, Yeni

---

## Sitede olup resmî mahalle listesinde geçmeyen kayıtlar (52)

Bunlar hata değil; resmî mahalle listesinde ayrı satır olarak yer almayan ama
halk arasında ve adres tariflerinde kullanılan yerlerdir. Yerel aramada karşılığı
olduğu için sayfaları korundu.

| Yer | İlçe | Tür |
|---|---|---|
| Battalgazi Merkez | Battalgazi | mahalle |
| İnönü | Battalgazi | mahalle |
| Çavuşoğlu | Battalgazi | mahalle |
| Yeşiltepe | Yeşilyurt | mahalle |
| Bahçebaşı | Yeşilyurt | mahalle |
| Görgü | Yeşilyurt | kırsal mahalle |
| Aslanbey | Yeşilyurt | kırsal mahalle |
| Hanımınçiftliği Bağları | Yeşilyurt | kırsal mahalle |
| Karakavak Bağları | Yeşilyurt | kırsal mahalle |
| Beydağı Bağları | Battalgazi | kırsal mahalle |
| I. Organize Sanayi Bölgesi | Yeşilyurt | sanayi bölgesi |
| II. Organize Sanayi Bölgesi | Yeşilyurt | sanayi bölgesi |
| Akçadağ Merkez | Akçadağ | mahalle |
| Kürecik | Akçadağ | kırsal mahalle |
| Mermer OSB | Akçadağ | sanayi bölgesi |
| Arapgir Merkez | Arapgir | mahalle |
| Sinik | Arapgir | kırsal mahalle |
| Eskişehir | Arapgir | kırsal mahalle |
| Arguvan Merkez | Arguvan | mahalle |
| Kuruttaş | Arguvan | kırsal mahalle |
| Karahöyük | Arguvan | kırsal mahalle |
| Darende Merkez | Darende | mahalle |
| Aşağıulupınar | Darende | kırsal mahalle |
| Darende OSB | Darende | sanayi bölgesi |
| Doğanşehir Merkez | Doğanşehir | mahalle |
| Doğanyol Merkez | Doğanyol | mahalle |
| İsak | Doğanyol | kırsal mahalle |
| Ballıkaya | Doğanyol | kırsal mahalle |
| Hekimhan Merkez | Hekimhan | mahalle |
| Kale Merkez | Kale | mahalle |
| İzollu | Kale | kırsal mahalle |
| Bentköy | Kale | kırsal mahalle |
| Kömürhan | Kale | kırsal mahalle |
| Bulutlu | Kale | kırsal mahalle |
| Kuluncak Merkez | Kuluncak | mahalle |
| Konakpınar | Kuluncak | kırsal mahalle |
| Alhasuşağı | Kuluncak | kırsal mahalle |
| Pütürge Merkez | Pütürge | mahalle |
| Gözeler | Pütürge | kırsal mahalle |
| Erdemli | Pütürge | kırsal mahalle |
| Yazıhan Merkez | Yazıhan | mahalle |
| Besi TDİ OSB | Yazıhan | sanayi bölgesi |
| Sera OSB | Yazıhan | sanayi bölgesi |
| İkizce TOKİ | Yeşilyurt | toplu konut |
| Beydağı TOKİ | Battalgazi | toplu konut |
| Şehit Fevzi TOKİ | Battalgazi | toplu konut |
| Yeşiltepe TOKİ | Yeşilyurt | toplu konut |
| Çilesiz TOKİ | Battalgazi | toplu konut |
| Kaynarca TOKİ | Yeşilyurt | toplu konut |
| Sinikli | Arapgir | mahalle |
| Çayköy | Kuluncak | mahalle |
| Karabük | Kuluncak | mahalle |

---

## Kapsam dışı bırakılan listeler

Klasördeki diğer dosyalar bilinçli olarak sayfaya çevrilmedi:

| Dosya | Kayıt | Neden |
|---|---|---|
| `02-malatya-guncel-belediyeler.csv` | 14 | Belediye tüzel kişiliği; yerleşim değil. |
| `03-malatya-eski-belde-kasaba-belediyeleri.csv` | 39 | 6360 sonrası mahalleye dönüştü; adları zaten mahalle listesinde var. |
| `04-malatya-merkeze-bagli-eski-koyler.csv` | 44 | Aynı şekilde mahalleye dönüştü, mükerrer sayfa olurdu. |
| `05-malatya-harita-tabanli-mezra-adaylari.csv` | 54 | OpenStreetMap kaynaklı, resmî değil. Kaynak dosyanın kendi notu da doğrulama isteniyor diyor. Muhtarlıktan teyit edilirse eklenebilir. |

## Yeniden üretmek için

```bash
node scripts/gen-localities.mjs   # localities-extra.mjs'i yeniden üretir
node scripts/rapor-eksik-yerlesim.mjs   # bu raporu yeniden üretir
node site/build.mjs
```
