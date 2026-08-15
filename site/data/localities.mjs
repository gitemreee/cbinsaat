// Mahalle ve yerleşim verisi.
// [ad, slug, ilçe, tip, kısa not]
// Not alanı her mahalle sayfasında özgün içerik olarak kullanılır.
// Yeni mahalle eklerken: not alanını mutlaka doldurun, boş bırakılan kayıt sayfa üretmez.
//
// Bu dosyadaki kayıtlar "öne çıkan" (featured) mahallelerdir: menülerde ve
// bölge sayfalarının üst bloklarında bunlar listelenir. Malatya Valiliği'nin
// 719 mahallelik güncel listesindeki kalan yerleşimler localities-extra.mjs
// içinde otomatik üretilir ve sayfaları aynı şablonla yayınlanır.

import { extraRows } from "./localities-extra.mjs";

const rows = [
  // ---------------------------------------------------------------- Battalgazi
  ["Battalgazi Merkez", "battalgazi-merkez", "battalgazi", "mahalle", "Eski Malatya olarak bilinen tarihi çekirdek; tek ve iki katlı yapılarda sıva üstü çözümler ve bahçe hatları öne çıkıyor."],
  ["Orduzu", "orduzu", "battalgazi", "mahalle", "Kayısı bahçeleri ile konut alanlarının iç içe olduğu mahalle; sulama pompası ve bahçe elektriği talepleri yoğun."],
  ["Çöşnük", "cosnuk", "battalgazi", "mahalle", "Merkeze yakın, yoğun apartman dokusu; daire tadilatı ve pano yenileme işleri en sık gelen kalemler."],
  ["Fırat", "firat", "battalgazi", "mahalle", "Orta yaşlı apartman stoğunun bulunduğu mahallede topraklama ilavesi ve su tesisatı yenileme öne çıkıyor."],
  ["İnönü", "inonu", "battalgazi", "mahalle", "Üniversite çevresine yakın konumu nedeniyle kiralık daire yoğunluğu var; hızlı arıza müdahalesi ve tadilat talepleri düzenli."],
  ["Niyazi", "niyazi", "battalgazi", "mahalle", "Ticari ve konut kullanımının bir arada olduğu mahallede dükkân elektriği ve aydınlatma işleri sık."],
  ["Saray", "saray", "battalgazi", "mahalle", "Merkezi konumda, eski yapı oranı yüksek; buşonlu sigorta kutularının modern panoyla değişimi yaygın bir iş."],
  ["Şifa", "sifa", "battalgazi", "mahalle", "Sağlık tesislerine yakın bölgede iş yeri ve muayenehane tadilatları ile data altyapısı talepleri öne çıkıyor."],
  ["Bulgurlu", "bulgurlu", "battalgazi", "mahalle", "Yeni yapılaşmanın hızlandığı bölgede teslim sonrası ilaveler: klima hattı, spot aydınlatma ve kamera altyapısı."],
  ["Uçbağlar", "ucbaglar", "battalgazi", "mahalle", "Yenilenen konut alanlarının bulunduğu mahallede tesisat ilavesi ve aydınlatma uygulamaları yoğun."],
  ["Şehit Fevzi", "sehit-fevzi", "battalgazi", "mahalle", "Yeni blokların yer aldığı bölgede apartman hidroforu, diafon ve ortak alan elektrik işleri düzenli talep ediliyor."],
  ["Zafer", "zafer", "battalgazi", "mahalle", "Karma yapı stoğu bulunan mahallede hem tadilat hem arıza çağrıları dengeli dağılıyor."],
  ["İsmetiye", "ismetiye", "battalgazi", "mahalle", "Merkeze yakın yerleşimde su tesisatı yenileme ve gider tıkanıklığı işleri sık görülüyor."],
  ["Beydağı", "beydagi", "battalgazi", "mahalle", "Üst kotta yer aldığı için üst katlarda basınç düşüklüğü yaşanabiliyor; hidrofor ve depo çözümleri öne çıkıyor."],
  ["Cirikpınar", "cirikpinar", "battalgazi", "mahalle", "Konut ve küçük işletmelerin bir arada olduğu mahallede pano ve aydınlatma yenileme talepleri düzenli."],
  ["Meydanbaşı", "meydanbasi", "battalgazi", "mahalle", "Ticari hareketliliğin yoğun olduğu bölgede dükkân tadilatı, tabela beslemesi ve kamera sistemi işleri sık."],
  ["Çavuşoğlu", "cavusoglu", "battalgazi", "mahalle", "Apartman yoğunluğu olan mahallede ortak alan elektriği ve hidrofor bakımı öne çıkıyor."],
  ["Hanımınçiftliği", "haniminciftligi", "battalgazi", "mahalle", "Bahçeli yapıların bulunduğu bölgede dış mekân aydınlatması ve bahçe sulama hatları talep ediliyor."],
  ["Akpınar", "akpinar", "battalgazi", "mahalle", "Müstakil yapı oranı yüksek; kuyu pompası, depo ve bahçe elektriği işleri yaygın."],
  ["Hasırcılar", "hasircilar", "battalgazi", "kırsal mahalle", "Tarım arazileriyle çevrili yerleşimde sulama pompası ve arazi enerji hattı çalışmaları sezonluk yoğunlaşıyor."],
  ["Hatunsuyu", "hatunsuyu", "battalgazi", "kırsal mahalle", "Kayısı bahçelerinin yoğun olduğu bölgede damlama sulama ve dalgıç pompa bağlantıları öne çıkıyor."],
  ["Kemerköprü", "kemerkopru", "battalgazi", "kırsal mahalle", "Bahçe ve tarla sulamasına dayalı yerleşimde pompa panosu ve topraklama işleri sık yapılıyor."],
  ["Toygar", "toygar", "battalgazi", "kırsal mahalle", "Müstakil yapı ve bahçe dokusunda su hattı yenileme ile donmaya karşı izolasyon önem taşıyor."],
  ["Yaygın", "yaygin", "battalgazi", "kırsal mahalle", "Tarımsal üretimin sürdüğü mahallede sulama sistemi kurulumu ve bakımı yıl boyu devam ediyor."],
  ["Sancaktar", "sancaktar", "battalgazi", "kırsal mahalle", "Bahçe ağırlıklı yerleşimde kuyu pompası, sulama hattı ve dış mekân elektriği talepleri geliyor."],
  ["Çamurlu", "camurlu", "battalgazi", "kırsal mahalle", "Kırsal karakterli yerleşimde ev tesisatı yenileme ve topraklama işleri öne çıkıyor."],

  // ------------------------------------------------------------------ Yeşilyurt
  ["Tecde", "tecde", "yesilyurt", "mahalle", "Yoğun konut yapılaşmasının bulunduğu mahallede daire tadilatı, aydınlatma ve apartman hidroforu işleri en sık gelen kalemler."],
  ["Çilesiz", "cilesiz", "yesilyurt", "mahalle", "Yeni ve orta yaşlı apartman stoğu bir arada; tesisat yenileme ve pano değişimi düzenli talep ediliyor."],
  ["Karakavak", "karakavak", "yesilyurt", "mahalle", "Hızlı yapılaşan bölgede teslim sonrası hat ilaveleri, spot aydınlatma ve data altyapısı öne çıkıyor."],
  ["Bostanbaşı", "bostanbasi", "yesilyurt", "mahalle", "Konut yoğunluğu yüksek mahallede banyo–mutfak yenileme ve su tesisatı işleri yaygın."],
  ["Çarmuzu", "carmuzu", "yesilyurt", "mahalle", "Kalabalık yerleşimde arıza çağrıları ve daire tadilatı talepleri dengeli biçimde dağılıyor."],
  ["Yakınca", "yakinca", "yesilyurt", "mahalle", "Organize sanayi bölgelerine komşu konumda hem konut hem işletme tarafında elektrik işleri yapılıyor."],
  ["Özalper", "ozalper", "yesilyurt", "mahalle", "Üniversite ve yerleşke çevresindeki mahallede kiralık daire yoğunluğu nedeniyle hızlı arıza müdahalesi talep ediliyor."],
  ["Turgut Özal", "turgut-ozal", "yesilyurt", "mahalle", "Yeni konut alanlarının bulunduğu bölgede aydınlatma, klima hattı ve kamera altyapısı işleri öne çıkıyor."],
  ["Şeyh Bayram", "seyh-bayram", "yesilyurt", "mahalle", "Karma yapı dokusunda tesisat yenileme ve ortak alan elektrik işleri düzenli olarak yapılıyor."],
  ["Gündüzbey", "gunduzbey", "yesilyurt", "mahalle", "Su kaynakları ve bahçeleriyle bilinen mahallede sulama hatları ve bahçe elektriği talepleri yoğun."],
  ["Dilek", "dilek", "yesilyurt", "mahalle", "Müstakil ve az katlı yapıların bulunduğu bölgede tesisat yenileme ve topraklama işleri sık."],
  ["Konak", "konak", "yesilyurt", "mahalle", "Merkezi konumdaki mahallede apartman hidroforu, diafon ve pano bakımı öne çıkıyor."],
  ["Melekbaba", "melekbaba", "yesilyurt", "mahalle", "Eski yapı oranının yüksek olduğu mahallede galvaniz boru yenileme ve pano değişimi yaygın."],
  ["Koyunoğlu", "koyunoglu", "yesilyurt", "mahalle", "Konut ve küçük ticarethanelerin bir arada olduğu bölgede dükkân elektriği ve aydınlatma işleri talep ediliyor."],
  ["Yeşiltepe", "yesiltepe", "yesilyurt", "mahalle", "Üst kotta yer alan yerleşimde şebeke basıncı düşük kalabildiği için hidrofor ve depo uygulamaları öne çıkıyor."],
  ["Bahçebaşı", "bahcebasi", "yesilyurt", "mahalle", "Bahçeli yapıların yoğun olduğu mahallede otomatik sulama ve dış mekân aydınlatması sık uygulanıyor."],
  ["Samanköy", "samankoy", "yesilyurt", "mahalle", "Konut alanlarının genişlediği bölgede yeni tesisat ve teslim sonrası ilave işleri yapılıyor."],
  ["Kaynarca", "kaynarca", "yesilyurt", "mahalle", "Su kaynaklarına yakın yerleşimde tesisat yenileme ve bahçe sulama hatları öne çıkıyor."],
  ["Sütlüce", "sutluce", "yesilyurt", "mahalle", "Müstakil yapı dokusunda ısıtma tesisatı bakımı ve su hattı yenileme talepleri düzenli."],
  ["Topsöğüt", "topsogut", "yesilyurt", "kırsal mahalle", "Bahçe ve tarım arazileriyle çevrili yerleşimde sulama pompası ve arazi hattı işleri yapılıyor."],
  ["Görgü", "gorgu", "yesilyurt", "kırsal mahalle", "Kırsal karakterli mahallede kuyu pompası, depo ve ev tesisatı yenileme öne çıkıyor."],
  ["Şahnahan", "sahnahan", "yesilyurt", "kırsal mahalle", "Tarımsal üretimin sürdüğü bölgede damlama sulama ve pompa panosu kurulumları yaygın."],
  ["Aslanbey", "aslanbey", "yesilyurt", "kırsal mahalle", "Bahçelik alanlarda sulama hattı bakımı ve dış mekân elektrik işleri talep ediliyor."],
  ["Horata", "horata", "yesilyurt", "mahalle", "Bağ evi ve müstakil yapı dokusunun yoğun olduğu bölgede kuyu pompası, bahçe sulaması ve dış mekân elektriği öne çıkıyor."],
  ["Hanımınçiftliği Bağları", "haniminciftligi-baglari", "yesilyurt", "kırsal mahalle", "Bağ ve bahçe alanlarında damlama sulama, pompa bağlantısı ve sezon açma–kapatma işleri yapılıyor."],
  ["Karakavak Bağları", "karakavak-baglari", "yesilyurt", "kırsal mahalle", "Bağ evlerinin bulunduğu bölgede mevsimlik su hattı boşaltma ve ilkbaharda devreye alma talepleri geliyor."],
  ["Beydağı Bağları", "beydagi-baglari", "battalgazi", "kırsal mahalle", "Üst kotlardaki bağ evlerinde depo–hidrofor çözümleri ve donmaya karşı hat izolasyonu önem taşıyor."],
  ["I. Organize Sanayi Bölgesi", "birinci-osb", "yesilyurt", "sanayi bölgesi", "Üretim tesislerinde kuvvet panosu, makine besleme, kablo tavası ve kompanzasyon işleri yürütülüyor."],
  ["II. Organize Sanayi Bölgesi", "ikinci-osb", "yesilyurt", "sanayi bölgesi", "Yeni tesislerde elektrik altyapısı kurulumu, endüstriyel aydınlatma ve enerji analizi çalışmaları yapılıyor."],

  // ------------------------------------------------------------------- Akçadağ
  ["Akçadağ Merkez", "akcadag-merkez", "akcadag", "mahalle", "İlçe merkezinde konut tesisatı, dükkân elektriği ve pano yenileme işleri düzenli olarak yapılıyor."],
  ["Levent", "levent", "akcadag", "kırsal mahalle", "Levent Vadisi çevresindeki yerleşimde bahçe sulaması, pompa bağlantısı ve dış mekân aydınlatması öne çıkıyor."],
  ["Kozluca", "kozluca", "akcadag", "kırsal mahalle", "Tarım arazileriyle çevrili mahallede damlama sulama ve arazi enerji hattı çalışmaları yoğun."],
  ["Ören", "oren", "akcadag", "mahalle", "Müstakil yapı dokusunda tesisat yenileme, topraklama ve ısıtma hattı bakımı talep ediliyor."],
  ["Kürecik", "kurecik", "akcadag", "kırsal mahalle", "Yüksek rakımlı yerleşimde donmaya karşı hat izolasyonu ve kış öncesi tahliye işlemleri önem taşıyor."],
  ["Doğu", "dogu-akcadag", "akcadag", "kırsal mahalle", "Bahçe ve tarla sulamasına dayalı yerleşimde pompa ve filtre istasyonu uygulamaları yapılıyor."],
  ["Mermer OSB", "mermer-osb", "akcadag", "sanayi bölgesi", "Mermer işleme tesislerinde kuvvet panosu, motor besleme ve tozlu ortama uygun pano çözümleri uygulanıyor."],

  // -------------------------------------------------------------------- Arapgir
  ["Arapgir Merkez", "arapgir-merkez", "arapgir", "mahalle", "Tarihi konak dokusunda tesisatın yapıya zarar vermeden çekilmesi ve restorasyon uyumlu çözümler öne çıkıyor."],
  ["Onar", "onar", "arapgir", "kırsal mahalle", "Bağ ve bahçe ağırlıklı yerleşimde sulama hattı, pompa ve mevsimlik sistem açma–kapama işleri yapılıyor."],
  ["Sinik", "sinik", "arapgir", "kırsal mahalle", "Mevsimlik kullanılan yapıların bulunduğu mahallede kış öncesi hat boşaltma ve ilkbahar devreye alma talepleri geliyor."],
  ["Eskişehir", "eskisehir-arapgir", "arapgir", "kırsal mahalle", "Dut bahçelerinin bulunduğu yerleşimde sulama ve bahçe elektriği işleri öne çıkıyor."],
  ["Konducak", "konducak", "arapgir", "kırsal mahalle", "Kırsal yapı stoğunda ev tesisatı yenileme, pano değişimi ve topraklama işleri yaygın."],

  // -------------------------------------------------------------------- Arguvan
  ["Arguvan Merkez", "arguvan-merkez", "arguvan", "mahalle", "İlçe merkezinde konut ve iş yeri tesisatı, pano yenileme ve ısıtma hattı bakımı yapılıyor."],
  ["Bozan", "bozan", "arguvan", "kırsal mahalle", "Hayvancılık işletmelerinin bulunduğu yerleşimde ahır aydınlatması ve su tesisatı öne çıkıyor."],
  ["Çavuş", "cavus", "arguvan", "kırsal mahalle", "Kırsal yapı dokusunda kuyu pompası, depo ve ev tesisatı yenileme talepleri geliyor."],
  ["Morhamam", "morhamam", "arguvan", "kırsal mahalle", "Tarım ve hayvancılığın sürdüğü mahallede sulama hattı ve işletme elektriği işleri yapılıyor."],
  ["Kuruttaş", "kuruttas", "arguvan", "kırsal mahalle", "Yüksek rakımlı yerleşimde donma koruması ve ısıtma tesisatı bakımı önem taşıyor."],
  ["Karahöyük", "karahoyuk-arguvan", "arguvan", "kırsal mahalle", "Bahçe ve tarla sulamasına dayalı yerleşimde pompa ve pano işleri sezonluk yoğunlaşıyor."],

  // -------------------------------------------------------------------- Darende
  ["Darende Merkez", "darende-merkez", "darende", "mahalle", "İlçe merkezinde konut tadilatı, dükkân elektriği ve ticari aydınlatma işleri düzenli olarak yapılıyor."],
  ["Zaviye", "zaviye", "darende", "mahalle", "Somuncu Baba Külliyesi çevresindeki işletmelerde sıcak su sistemi, mutfak elektriği ve kamera sistemi talepleri yoğun."],
  ["Balaban", "balaban", "darende", "mahalle", "Yerleşim ve tarım alanlarının bir arada olduğu bölgede sulama hattı ve tesisat yenileme işleri öne çıkıyor."],
  ["Ayvalı", "ayvali", "darende", "mahalle", "Tohma Vadisi boyunca uzanan yerleşimde kot farkı nedeniyle hidrofor ve depo çözümleri sık uygulanıyor."],
  ["Aşağıulupınar", "asagiulupinar", "darende", "kırsal mahalle", "Bahçelik alanlarda pompa bağlantısı, sulama hattı ve dış mekân elektriği işleri yapılıyor."],
  ["Günpınar", "gunpinar", "darende", "kırsal mahalle", "Su kaynaklarına yakın yerleşimde tesisat yenileme ve sulama sistemi kurulumları talep ediliyor."],
  ["Darende OSB", "darende-osb", "darende", "sanayi bölgesi", "İşletme tesislerinde pano, makine besleme ve kompanzasyon çalışmaları yürütülüyor."],

  // ---------------------------------------------------------------- Doğanşehir
  ["Doğanşehir Merkez", "dogansehir-merkez", "dogansehir", "mahalle", "Yenilenen yapı stoğunda yeni tesisat kurulumu ve teslim sonrası hat ilaveleri en sık gelen işler."],
  ["Sürgü", "surgu", "dogansehir", "mahalle", "Su kaynakları ve tarım alanlarıyla öne çıkan yerleşimde sulama sistemi ve pompa işleri yoğun."],
  ["Polat", "polat", "dogansehir", "mahalle", "Meyve bahçelerinin bulunduğu bölgede damlama sulama ve filtre istasyonu uygulamaları yapılıyor."],
  ["Erkenek", "erkenek", "dogansehir", "mahalle", "Yol güzergâhındaki yerleşimde işletme elektriği, aydınlatma ve pano işleri talep ediliyor."],
  ["Kurucaova", "kurucaova", "dogansehir", "mahalle", "Tarımsal üretimin sürdüğü mahallede kuyu pompası ve sulama otomasyonu öne çıkıyor."],
  ["Elmalı", "elmali-dogansehir", "dogansehir", "kırsal mahalle", "Elma bahçelerinin yoğun olduğu yerleşimde damlama hattı ve pompa bakımı sezonluk yapılıyor."],

  // ----------------------------------------------------------------- Doğanyol
  ["Doğanyol Merkez", "doganyol-merkez", "doganyol", "mahalle", "İlçe merkezinde konut tesisatı, pano yenileme ve su temini çözümleri talep ediliyor."],
  ["Gökçe", "gokce", "doganyol", "kırsal mahalle", "Göl kıyısındaki yerleşimde uzun hat pompa uygulamaları ve kablo kesiti hesabı önem taşıyor."],
  ["İsak", "isak", "doganyol", "kırsal mahalle", "Dağınık yerleşim yapısında planlı gidiş ile tesisat ve pompa işleri toplu olarak yürütülüyor."],
  ["Ballıkaya", "ballikaya", "doganyol", "kırsal mahalle", "Bağ evlerinin bulunduğu bölgede sezon açma–kapama ve donma hasarı onarımı yaygın."],

  // ----------------------------------------------------------------- Hekimhan
  ["Hekimhan Merkez", "hekimhan-merkez", "hekimhan", "mahalle", "İlçe merkezinde konut ve kamu yapılarında tesisat yenileme, pano ve ısıtma bakımı yapılıyor."],
  ["Hasançelebi", "hasancelebi", "hekimhan", "mahalle", "Maden ve sanayi faaliyetlerinin bulunduğu bölgede kuvvet panosu ve endüstriyel aydınlatma işleri öne çıkıyor."],
  ["Güzelyurt", "guzelyurt", "hekimhan", "mahalle", "Yerleşim alanlarında ev tesisatı, topraklama ve ısıtma hattı bakımı talep ediliyor."],
  ["Kocaözü", "kocaozu", "hekimhan", "kırsal mahalle", "Kırsal yerleşimde kuyu pompası, depo ve donmaya karşı hat izolasyonu işleri yapılıyor."],
  ["Basak", "basak", "hekimhan", "kırsal mahalle", "Tarım arazileriyle çevrili mahallede sulama hattı ve arazi enerji bağlantıları öne çıkıyor."],

  // --------------------------------------------------------------------- Kale
  ["Kale Merkez", "kale-merkez", "kale", "mahalle", "İlçe merkezinde müstakil yapı tesisatı, bahçe elektriği ve pano yenileme işleri yapılıyor."],
  ["İzollu", "izollu", "kale", "kırsal mahalle", "Sulanabilir arazilerin bulunduğu yerleşimde pompa, filtre istasyonu ve sulama otomasyonu öne çıkıyor."],
  ["Bentköy", "bentkoy", "kale", "kırsal mahalle", "Baraj gölüne yakın konumda yüzey suyu kullanan sulama sistemlerinde kum filtre uygulaması gerekiyor."],
  ["Kömürhan", "komurhan", "kale", "kırsal mahalle", "Yol güzergâhındaki yerleşimde işletme elektriği ve su temini çözümleri talep ediliyor."],
  ["Bulutlu", "bulutlu", "kale", "kırsal mahalle", "Bağcılığın sürdüğü mahallede damlama sulama ve pompa bakımı sezonluk yoğunlaşıyor."],

  // ---------------------------------------------------------------- Kuluncak
  ["Kuluncak Merkez", "kuluncak-merkez", "kuluncak", "mahalle", "İlçe merkezinde ısıtma tesisatı bakımı, petek temizliği ve konut tesisatı yenileme öne çıkıyor."],
  ["Sofular", "sofular", "kuluncak", "kırsal mahalle", "Hayvancılık işletmelerinin bulunduğu yerleşimde ahır aydınlatması ve su tesisatı yapılıyor."],
  ["Konakpınar", "konakpinar", "kuluncak", "kırsal mahalle", "Yüksek rakımlı mahallede donma koruması ve kış öncesi hat boşaltma işlemleri önem taşıyor."],
  ["Alhasuşağı", "alhasusagi", "kuluncak", "kırsal mahalle", "Kırsal yapı stoğunda pano yenileme, topraklama ve su temini çözümleri talep ediliyor."],

  // ----------------------------------------------------------------- Pütürge
  ["Pütürge Merkez", "puturge-merkez", "puturge", "mahalle", "Yenilenen yapı stoğunda yeni tesisat kurulumu ve altyapı işleri yoğun biçimde sürüyor."],
  ["Tepehan", "tepehan", "puturge", "mahalle", "Kot farkının yüksek olduğu yerleşimde pompa, depo ve basınç çözümleri öne çıkıyor."],
  ["Nohutlu", "nohutlu", "puturge", "kırsal mahalle", "Dağlık arazideki yerleşimde uzun hat pompa uygulamaları ve gerilim düşümü hesabı gerekiyor."],
  ["Gözeler", "gozeler", "puturge", "kırsal mahalle", "Bahçelik alanlarda sulama hattı, kuyu pompası ve dış mekân elektriği işleri yapılıyor."],
  ["Erdemli", "erdemli-puturge", "puturge", "kırsal mahalle", "Yeni yapılan konutlarda elektrik ve su tesisatı kurulumu ile topraklama işleri talep ediliyor."],

  // ----------------------------------------------------------------- Yazıhan
  ["Yazıhan Merkez", "yazihan-merkez", "yazihan", "mahalle", "İlçe merkezinde konut tesisatı, tadilat ve pano yenileme işleri düzenli olarak yapılıyor."],
  ["Fethiye", "fethiye", "yazihan", "mahalle", "Sulu tarım arazilerinin bulunduğu yerleşimde pompa ve sulama otomasyonu öne çıkıyor."],
  ["Durucasu", "durucasu", "yazihan", "mahalle", "Tarımsal üretimin yoğun olduğu mahallede damlama sulama ve filtre istasyonu uygulamaları yapılıyor."],
  ["Boyaca", "boyaca", "yazihan", "kırsal mahalle", "Bahçe ve tarla sulamasına dayalı yerleşimde arazi enerji hattı ve pompa panosu işleri talep ediliyor."],
  ["Besi TDİ OSB", "besi-tdi-osb", "yazihan", "sanayi bölgesi", "Besi işletmelerinde su temini, aydınlatma, pano ve topraklama çalışmaları yürütülüyor."],
  ["Sera OSB", "sera-osb", "yazihan", "sanayi bölgesi", "Sera tesislerinde sulama otomasyonu, ısıtma–havalandırma kontrolü ve pompa sistemleri kuruluyor."],

  // ------------------------------------------------- TOKİ ve toplu konut alanları
  ["İkizce TOKİ", "ikizce-toki", "yesilyurt", "toplu konut", "Toplu konut bloklarında teslim sonrası ilaveler yoğun: mutfak ve banyo yenileme, spot aydınlatma, klima hattı, kamera ve diafon altyapısı."],
  ["Beydağı TOKİ", "beydagi-toki", "battalgazi", "toplu konut", "Blok tipi konutlarda daire içi tadilat, priz ve aydınlatma ilavesi ile ortak alan elektrik işleri düzenli talep ediliyor."],
  ["Şehit Fevzi TOKİ", "sehit-fevzi-toki", "battalgazi", "toplu konut", "Yeni teslim bloklarda mutfak dolabı, duşakabin, petek ilavesi ve daire içi elektrik düzenlemeleri öne çıkıyor."],
  ["Yeşiltepe TOKİ", "yesiltepe-toki", "yesilyurt", "toplu konut", "Toplu konut alanında hidrofor, ortak alan aydınlatma ve daire içi tesisat ilaveleri sık yapılan işler."],
  ["Çilesiz TOKİ", "cilesiz-toki", "battalgazi", "toplu konut", "Blok konutlarda banyo ve mutfak yenileme, gider tıkanıklığı ve pano düzenleme çağrıları yoğun."],
  ["Kaynarca TOKİ", "kaynarca-toki", "yesilyurt", "toplu konut", "Deprem sonrası yapılan konut alanında iç mekân yenileme, dolap ve tesisat ilave işleri yürütülüyor."],
];

/**
 * 3. tekil iyelik ekiyle biten yer adları. Bunlara ek getirilirken kaynaştırma
 * -n- harfi kullanılır: "Orduzu'nda", "Bahçebaşı'nda", "Çavuşoğlu'nun".
 * Yeni mahalle eklerken adı "-ı/-i/-u/-ü" veya "-sı/-si/-su/-sü" ile bitiyor ve
 * bir tamlama ise (…başı, …oğlu, …suyu, …dağı) slug'ını buraya ekleyin.
 */
export const possessiveNames = new Set([
  "orduzu", "beydagi", "haniminciftligi", "hatunsuyu", "meydanbasi", "cavusoglu",
  "carmuzu", "bostanbasi", "koyunoglu", "bahcebasi", "kocaozu", "alhasusagi",
  "durucasu", "birinci-osb", "ikinci-osb",
]);

const toLocality = (featured) => ([name, slug, district, type, note]) => ({
  name, slug, district, type, note, featured,
  poss: possessiveNames.has(slug),
});

/** Menülerde ve bölge sayfası üst bloklarında gösterilen elle yazılmış mahalleler. */
export const featuredLocalities = rows.map(toLocality(true));

/** Resmî listedeki tüm mahalleler (öne çıkanlar + otomatik tamamlananlar). */
export const localities = [...featuredLocalities, ...extraRows.map(toLocality(false))];

/**
 * Aynı ad birden fazla ilçede geçebiliyor (Aliçeri hem Akçadağ hem Darende'de).
 * Bu durumda başlıkta ilçe adı da yazılır ki H1'ler benzersiz kalsın.
 */
const nameCount = new Map();
for (const l of localities) nameCount.set(l.name, (nameCount.get(l.name) || 0) + 1);
const districtName = new Map([
  ["battalgazi", "Battalgazi"], ["yesilyurt", "Yeşilyurt"], ["akcadag", "Akçadağ"],
  ["arapgir", "Arapgir"], ["arguvan", "Arguvan"], ["darende", "Darende"],
  ["dogansehir", "Doğanşehir"], ["doganyol", "Doğanyol"], ["hekimhan", "Hekimhan"],
  ["kale", "Kale"], ["kuluncak", "Kuluncak"], ["puturge", "Pütürge"], ["yazihan", "Yazıhan"],
]);
export const displayName = (l) =>
  nameCount.get(l.name) > 1 ? `${l.name} (${districtName.get(l.district) || l.district})` : l.name;

export const localitiesOf = (districtSlug) => localities.filter((l) => l.district === districtSlug);
export const featuredOf = (districtSlug) => featuredLocalities.filter((l) => l.district === districtSlug);
export const getLocality = (districtSlug, slug) =>
  localities.find((l) => l.district === districtSlug && l.slug === slug);

/**
 * Aynı ilçedeki komşu mahalleler (iç link için).
 * Listenin kendi sırasında halka gibi ilerler: her mahalle farklı bir komşu
 * kümesine link verir, böylece iç link ağı tek noktada toplanmaz.
 */
export const neighbours = (loc, count = 6) => {
  const all = localitiesOf(loc.district);
  const i = Math.max(0, all.findIndex((l) => l.slug === loc.slug));
  const out = [];
  for (let k = 1; k < all.length && out.length < count; k++) out.push(all[(i + k) % all.length]);
  return out;
};
