// Malatya ilçeleri. Her ilçe için özgün içerik: yapı stoğu, coğrafya, tipik iş kalemleri.
// distanceKm: Malatya merkeze yaklaşık uzaklık (yol mesafesi).

export const districts = [
  {
    slug: "battalgazi",
    name: "Battalgazi",
    type: "merkez ilçe",
    distanceKm: 0,
    tagline: "Eski Malatya'nın tarihi dokusu ile yeni konut alanlarının bir arada olduğu merkez ilçe",
    metaExtra: "Battalgazi merkez, Orduzu, Çöşnük, Fırat ve İnönü başta olmak üzere tüm mahallelerde",
    intro:
      "Battalgazi, Malatya'nın iki merkez ilçesinden biri ve yapı stoğu bakımından en karışık olanı. Bir yanda Eski Malatya'nın tek ve iki katlı tarihi dokusu, diğer yanda son on yılda yükselen yeni konut alanları var. Bu ikilik, tesisat işlerinde de kendini gösteriyor.",
    context: [
      {
        h: "Yapı stoğu ve tipik işler",
        p: "İlçenin merkez mahallelerinde 1980–2000 arası yapılmış apartmanlar ağırlıkta. Bu binalarda en sık karşılaştığımız kalemler; buşonlu sigorta kutusunun modern panoyla değiştirilmesi, topraklama hattı ilavesi ve galvaniz su borularının yenilenmesi. Eski Malatya tarafındaki tek katlı yapılarda ise bahçe hatları, kuyu pompaları ve dış mekân aydınlatması öne çıkıyor.",
      },
      {
        h: "Yeni yapılaşma bölgeleri",
        p: "Deprem sonrası hızlanan yenileme ile birlikte özellikle Şehit Fevzi, Bulgurlu ve Uçbağlar çevresinde yeni bloklar arttı. Yeni yapılarda işimiz genelde teslim sonrası ilaveler oluyor: ankastre mutfak için ayrı hat, klima beslemesi, spot ve şerit LED uygulaması, kamera ve data altyapısı.",
      },
      {
        h: "Bahçe ve kırsal mahalleler",
        p: "Orduzu, Hatunsuyu, Toygar ve Yaygın gibi mahallelerde kayısı bahçeleri ve müstakil yapılar yoğun. Buralarda damlama sulama hattı, kuyu ve dalgıç pompa bağlantısı, sulama panosu ve arazi enerji hattı işleri sezonluk olarak yoğunlaşıyor.",
      },
    ],
    highlights: ["Eski Malatya tarihi dokusu", "Orduzu ve kayısı bahçeleri", "Yenilenen konut alanları", "İnönü Üniversitesi çevresi"],
    priorityServices: ["elektrik-tesisati", "sihhi-tesisat", "komple-ev-tadilati", "su-kacagi-tespiti", "elektrik-ariza", "hidrofor-pompa-sistemleri"],
  },
  {
    slug: "yesilyurt",
    name: "Yeşilyurt",
    type: "merkez ilçe",
    distanceKm: 0,
    tagline: "Malatya'nın en hızlı büyüyen konut ve sanayi ilçesi",
    metaExtra: "Tecde, Çilesiz, Karakavak, Bostanbaşı, Çarmuzu ve Yakınca başta olmak üzere",
    intro:
      "Yeşilyurt, Malatya'nın nüfusça en kalabalık ve en hızlı büyüyen ilçesi. Tecde, Karakavak ve Bostanbaşı gibi mahallelerde yoğun konut yapılaşması, Yakınca çevresinde organize sanayi bölgeleri, üst kotlarda ise bağ evi ve villa dokusu bir arada bulunuyor.",
    context: [
      {
        h: "Yoğun konut alanlarında öne çıkanlar",
        p: "Tecde, Çilesiz, Karakavak ve Bostanbaşı hattında yeni ve orta yaşlı apartman stoğu ağırlıkta. Bu bölgelerde en sık aldığımız işler; daire tadilatı kapsamında elektrik ve su tesisatının birlikte yenilenmesi, banyo–mutfak yenileme, spot ve aydınlatma uygulamaları ile apartman hidrofor ve diafon sistemlerinin bakımı.",
      },
      {
        h: "Üst kotlarda basınç sorunu",
        p: "İlçenin yüksek kotlu mahallelerinde şebeke basıncı üst katlarda yetersiz kalabiliyor. Bu bölgelerde depo ve hidrofor birlikte kullanılıyor; hidrofor bakımı, basınç tankı kontrolü ve su deposu temizliği düzenli olarak talep edilen kalemler arasında.",
      },
      {
        h: "Organize sanayi bölgeleri",
        p: "Yakınca çevresindeki 1. ve 2. Organize Sanayi Bölgesi'nde üretim tesisleri için kuvvet panosu, makine besleme hattı, kablo tavası, kompanzasyon ve endüstriyel aydınlatma işleri yapıyoruz. Reaktif ceza kaynaklı kompanzasyon revizyonları burada en sık gelen taleplerden biri.",
      },
    ],
    highlights: ["Tecde–Karakavak konut hattı", "1. ve 2. Organize Sanayi Bölgesi", "Yakınca ve çevresi", "Bağ evi ve villa bölgeleri"],
    priorityServices: ["komple-ev-tadilati", "elektrik-tesisati", "hidrofor-pompa-sistemleri", "avize-aydinlatma", "sihhi-tesisat", "kamera-guvenlik-sistemleri"],
  },
  {
    slug: "akcadag",
    name: "Akçadağ",
    type: "ilçe",
    distanceKm: 35,
    tagline: "Mermer ocakları, tarım arazileri ve Levent Vadisi'nin ilçesi",
    metaExtra: "Akçadağ merkez, Levent, Kürecik ve çevre mahallelerde",
    intro:
      "Akçadağ, Malatya merkeze yaklaşık 35 km uzaklıkta, tarım ve mermer işletmeciliğinin öne çıktığı bir ilçe. Levent Vadisi çevresindeki yerleşimler ve geniş tarım arazileri, sulama ve pompa işlerini burada birinci sıraya taşıyor.",
    context: [
      {
        h: "Tarımsal sulama ağırlıklı iş yükü",
        p: "İlçede en yoğun çalıştığımız alan tarımsal sulama. Kuyu ve dalgıç pompa bağlantıları, sulama kumanda panoları, arazi enerji hattı çekimi ve damlama sistemi kurulumları sezon boyunca sürüyor. Arazi hatlarında gerilim dalgalanması yaygın olduğu için faz koruma ve kuru çalışma korumasını standart uygulama olarak ekliyoruz.",
      },
      {
        h: "Mermer ve işletme tesisleri",
        p: "Mermer ocakları ve işleme tesislerinde kuvvet panosu, motor besleme hatları, kompanzasyon ve aydınlatma işleri yapıyoruz. Tozlu ve nemli ortam koşulları nedeniyle pano koruma sınıfı ve kablo güzergâhı seçimi burada özellikle önem taşıyor.",
      },
      {
        h: "Konut ve müstakil yapılar",
        p: "Merkez mahallelerde apartman stoğu sınırlı; ağırlık müstakil ve iki katlı yapılarda. Bu yapılarda tesisat yenileme, ısıtma hattı bakımı, bahçe aydınlatması ve topraklama işleri öne çıkıyor. Kırsal mahallelerde taşlı ve kuru zemin nedeniyle topraklama direncine ayrıca dikkat ediyoruz.",
      },
    ],
    highlights: ["Levent Vadisi", "Mermer ocakları ve OSB", "Geniş tarım arazileri", "Kürecik yaylası"],
    priorityServices: ["tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri", "elektrik-tesisati", "topraklama-paratoner", "elektrik-panosu", "sihhi-tesisat"],
  },
  {
    slug: "arapgir",
    name: "Arapgir",
    type: "ilçe",
    distanceKm: 110,
    tagline: "Tarihi konakları, bağları ve dut bahçeleriyle kuzeyin ilçesi",
    metaExtra: "Arapgir merkez, Onar ve çevre mahallelerde",
    intro:
      "Arapgir, Malatya'nın kuzeyinde, merkeze yaklaşık 110 km uzaklıkta bir ilçe. Taş konakları, bağları ve dut bahçeleriyle bilinen ilçede yapı stoğu büyük oranda geleneksel; bu da tesisat işlerinde farklı bir yaklaşım gerektiriyor.",
    context: [
      {
        h: "Tarihi ve geleneksel yapılarda çalışmak",
        p: "Taş ve kerpiç duvarlı geleneksel yapılarda kanal açmak, betonarme yapılara göre çok daha dikkat isteyen bir iş. Bu yapılarda mümkün olduğunca sıva üstü kanal veya mevcut boşluklardan geçiş tercih ediyoruz. Restore edilen konaklarda ise tesisatın gizlenmesi ve orijinal dokunun korunması birlikte planlanıyor.",
      },
      {
        h: "Mevsimlik kullanım ve kış hazırlığı",
        p: "İlçedeki birçok ev yaz aylarında kullanılıyor, kışın boş kalıyor. Bu evlerde kış öncesi su hattının boşaltılması, sulama sisteminin tahliyesi ve elektrik panosunun kapatılması gibi sezon kapatma işlemlerini yapıyoruz. Donma kaynaklı patlak boru onarımı, ilkbaharda en sık gelen çağrılardan biri.",
      },
      {
        h: "Bağ ve bahçe sulama",
        p: "Bağlar ve dut bahçeleri için pompa ve damlama sulama uygulamaları yapıyoruz. Kot farkının fazla olduğu araziler nedeniyle basınç hesabı ve zonlama burada özellikle belirleyici oluyor.",
      },
    ],
    highlights: ["Tarihi Arapgir konakları", "Bağlar ve dut bahçeleri", "Mevsimlik kullanılan konutlar", "Onar ve çevre yerleşimleri"],
    priorityServices: ["sihhi-tesisat", "elektrik-tesisati", "tarimsal-sulama-sistemleri", "hidrofor-tamiri", "elektrik-ariza", "mekanik-tesisat"],
  },
  {
    slug: "arguvan",
    name: "Arguvan",
    type: "ilçe",
    distanceKm: 70,
    tagline: "Türküleriyle bilinen, hayvancılık ve tarımın öne çıktığı kuzey ilçesi",
    metaExtra: "Arguvan merkez ve kırsal mahallelerde",
    intro:
      "Arguvan, Malatya merkeze yaklaşık 70 km uzaklıkta, kültürel kimliğiyle bilinen bir kuzey ilçesi. Nüfusun önemli bölümü kırsal mahallelerde yaşıyor; bu da hizmetin ağırlıklı olarak müstakil yapılar, ahır–ağıl elektriği ve su temini üzerinde yoğunlaşması demek.",
    context: [
      {
        h: "Kırsal yerleşimlerde elektrik ve su",
        p: "Kırsal mahallelerde en sık çalıştığımız kalemler; ev ve müştemilat elektrik tesisatı, ahır ve depo aydınlatması, topraklama ve pano yenileme. Su tarafında ise kuyu pompası bağlantıları, depo ve hidrofor kurulumu ile donmaya karşı hat izolasyonu öne çıkıyor.",
      },
      {
        h: "Hayvancılık işletmeleri",
        p: "Besi ve süt işletmelerinde süt sağım ünitesi beslemesi, su tesisatı, aydınlatma ve pompa sistemleri kuruyoruz. Bu tesislerde nem ve toz nedeniyle koruma sınıfı yüksek malzeme kullanımı ve düzenli pano bakımı önem taşıyor.",
      },
      {
        h: "Uzak mesafe planlaması",
        p: "İlçenin merkeze uzaklığı nedeniyle işleri toplu programlıyoruz. Aynı mahalledeki birden fazla iş aynı güne alındığında hem yol maliyeti düşüyor hem randevu daha hızlı veriliyor. Komşularınızla birlikte arama yaptığınızda programı sizin lehinize kurabiliyoruz.",
      },
    ],
    highlights: ["Kırsal yerleşim ağırlıklı yapı", "Hayvancılık işletmeleri", "Yüksek rakımlı araziler", "Bağ ve bahçe sulaması"],
    priorityServices: ["elektrik-tesisati", "hidrofor-pompa-sistemleri", "tarimsal-sulama-sistemleri", "topraklama-paratoner", "sihhi-tesisat", "elektrik-panosu"],
  },
  {
    slug: "darende",
    name: "Darende",
    type: "ilçe",
    distanceKm: 110,
    tagline: "Somuncu Baba ve Tohma Vadisi ile turizm hareketliliği olan batı ilçesi",
    metaExtra: "Darende merkez, Zaviye, Balaban ve Ayvalı çevresinde",
    intro:
      "Darende, Malatya'nın batısında, Tohma Vadisi boyunca uzanan ve Somuncu Baba Külliyesi nedeniyle yıl boyu ziyaretçi ağırlayan bir ilçe. Turizm hareketliliği, ilçedeki konaklama ve yeme–içme işletmelerinin teknik ihtiyaçlarını da beraberinde getiriyor.",
    context: [
      {
        h: "Konaklama ve ticari işletmeler",
        p: "Otel, pansiyon ve restoranlarda sıcak su sistemleri, mutfak elektrik altyapısı, kompanzasyon, kamera sistemi ve yangın tesisatı işleri yapıyoruz. Bu işletmelerde sezon yoğunluğu nedeniyle bakım ve yenileme çalışmalarını düşük sezona planlıyoruz.",
      },
      {
        h: "Vadi boyunca su ve basınç",
        p: "Tohma Vadisi boyunca kot farkları büyük. Yerleşimlerin bir kısmında şebeke basıncı yetersiz kalıyor ve hidrofor–depo çözümleri gerekiyor. Su deposu temizliği ve hidrofor bakımı ilçede düzenli talep edilen kalemler arasında.",
      },
      {
        h: "Konut ve bahçe işleri",
        p: "Merkez mahallelerde apartman ve müstakil yapı karışık; tadilat kapsamında tesisat yenileme talepleri düzenli geliyor. Bahçeli yapılarda ise otomatik sulama, dış mekân aydınlatması ve bahçe elektrik hatları öne çıkıyor.",
      },
    ],
    highlights: ["Somuncu Baba Külliyesi çevresi", "Tohma Vadisi", "Konaklama işletmeleri", "Balaban ve Ayvalı yerleşimleri"],
    priorityServices: ["sihhi-tesisat", "hidrofor-tamiri", "elektrik-tesisati", "su-deposu-temizligi", "kamera-guvenlik-sistemleri", "dukkan-ofis-tadilati"],
  },
  {
    slug: "dogansehir",
    name: "Doğanşehir",
    type: "ilçe",
    distanceKm: 55,
    tagline: "Elma ve kayısı üretimiyle bilinen, yenilenen yapı stoğuna sahip güneybatı ilçesi",
    metaExtra: "Doğanşehir merkez, Sürgü, Polat, Erkenek ve Kurucaova çevresinde",
    intro:
      "Doğanşehir, Malatya merkeze yaklaşık 55 km uzaklıkta, meyveciliğin ve tarımın öne çıktığı bir ilçe. Son yıllarda yapı stoğunun önemli bölümü yenilendiği için yeni yapılarda tesisat ve altyapı işleri yoğun.",
    context: [
      {
        h: "Yeni yapılarda tesisat ve ilaveler",
        p: "Yenilenen konutlarda teslim sonrası en sık talep edilen kalemler; ankastre mutfak ve klima için ayrı hat çekimi, aydınlatma uygulamaları, kamera ve data altyapısı ile bahçeli yapılarda dış mekân hatları. Yeni tesisatta yapılan küçük ilaveler, sonradan kırım gerektirmemesi için erken aşamada planlanmalı.",
      },
      {
        h: "Meyve bahçeleri ve sulama",
        p: "Elma ve kayısı bahçelerinde damlama sulama, pompa bağlantısı ve sulama otomasyonu işleri sezon boyunca sürüyor. Sürgü ve çevresindeki su kaynaklarına bağlı sistemlerde filtreleme ve basınç düzenleme özellikle önem taşıyor.",
      },
      {
        h: "Ticari alanlar",
        p: "İlçe merkezindeki dükkân ve iş yerlerinde elektrik altyapısı, aydınlatma, tabela beslemesi ve kamera sistemleri kuruyoruz. Açılış programı olan işlerde çalışmayı tarihe göre geriye doğru planlıyoruz.",
      },
    ],
    highlights: ["Elma ve kayısı bahçeleri", "Sürgü ve çevresi", "Yenilenen konut stoğu", "İlçe merkezi ticari alanları"],
    priorityServices: ["elektrik-tesisati", "tarimsal-sulama-sistemleri", "sihhi-tesisat", "komple-ev-tadilati", "dukkan-ofis-tadilati", "kamera-guvenlik-sistemleri"],
  },
  {
    slug: "doganyol",
    name: "Doğanyol",
    type: "ilçe",
    distanceKm: 115,
    tagline: "Karakaya Baraj Gölü kıyısında, dağlık ve dağınık yerleşimli güneydoğu ilçesi",
    metaExtra: "Doğanyol merkez ve çevre mahallelerde",
    intro:
      "Doğanyol, Karakaya Baraj Gölü kıyısında yer alan, Malatya'nın en küçük ilçelerinden biri. Yerleşimler dağınık ve arazi engebeli; bu da hem ulaşımı hem tesisat planlamasını belirleyici oluyor.",
    context: [
      {
        h: "Dağınık yerleşimde planlı çalışma",
        p: "İlçeye gelişlerimizi toplu program hâlinde yapıyoruz. Aynı bölgedeki işleri aynı güne aldığımızda hem randevu süresi kısalıyor hem maliyet düşüyor. Acil olmayan işlerde birkaç gün beklemek, hem sizin hem bizim için daha verimli oluyor.",
      },
      {
        h: "Su temini ve pompa",
        p: "Kot farkının fazla olduğu yerleşimlerde su temini pompa ve depoya dayanıyor. Dalgıç pompa bağlantıları, depo–hidrofor sistemleri ve uzun hat çekimlerinde gerilim düşümü hesabı burada özellikle önemli. Kablo kesitini mesafeye göre hesaplayarak pompa arızalarının önüne geçiyoruz.",
      },
      {
        h: "Bağ evleri ve mevsimlik kullanım",
        p: "Göl kıyısındaki bağ evleri ve yazlık yapılarda sezon açma–kapama işleri yapıyoruz: kış öncesi hat boşaltma, ilkbaharda sistemin devreye alınması, donma hasarı onarımı ve dış mekân aydınlatması.",
      },
    ],
    highlights: ["Karakaya Baraj Gölü kıyısı", "Dağınık ve engebeli yerleşim", "Bağ evleri", "Uzun hat pompa uygulamaları"],
    priorityServices: ["hidrofor-pompa-sistemleri", "elektrik-tesisati", "sihhi-tesisat", "topraklama-paratoner", "elektrik-ariza", "bahce-sulama"],
  },
  {
    slug: "hekimhan",
    name: "Hekimhan",
    type: "ilçe",
    distanceKm: 90,
    tagline: "Madencilik geçmişi ve sanayi tesisleriyle öne çıkan kuzey ilçesi",
    metaExtra: "Hekimhan merkez, Hasançelebi, Güzelyurt ve çevresinde",
    intro:
      "Hekimhan, Malatya'nın kuzeyinde, demir yatakları ve madencilik geçmişiyle bilinen bir ilçe. Hasançelebi çevresindeki sanayi faaliyetleri, ilçede endüstriyel elektrik işlerini öne çıkarıyor.",
    context: [
      {
        h: "Endüstriyel tesislerde elektrik",
        p: "Maden ve işleme tesislerinde kuvvet panosu, motor besleme, kablo tavası ve endüstriyel aydınlatma işleri yapıyoruz. Ağır çalışma koşulları nedeniyle koruma sınıfı yüksek malzeme, düzenli termal kontrol ve kompanzasyon bakımı bu tesislerde standart program hâline geliyor.",
      },
      {
        h: "Konut ve kamu yapıları",
        p: "İlçe merkezindeki konut ve kamu yapılarında tesisat yenileme, pano değişimi, ısıtma hattı bakımı ve aydınlatma işleri yapıyoruz. Yüksek rakım nedeniyle ısıtma sisteminin sezon öncesi kontrolü burada özellikle önemli.",
      },
      {
        h: "Kırsal mahalleler",
        p: "Kırsal yerleşimlerde su temini, kuyu pompası, depo ve hat izolasyonu ağırlıklı işler yapıyoruz. Kış koşullarının sert geçmesi nedeniyle donma korumasını planlamanın parçası olarak ele alıyoruz.",
      },
    ],
    highlights: ["Hasançelebi ve maden sahaları", "Sanayi tesisleri", "Yüksek rakım ve sert kış", "Kırsal mahalleler"],
    priorityServices: ["fabrika-elektrik-tesisati", "elektrik-panosu", "kompanzasyon-panosu", "elektrik-tesisati", "mekanik-tesisat", "hidrofor-pompa-sistemleri"],
  },
  {
    slug: "kale",
    name: "Kale",
    type: "ilçe",
    distanceKm: 55,
    tagline: "Karakaya Baraj Gölü çevresinde tarım ve bağcılığın öne çıktığı ilçe",
    metaExtra: "Kale merkez, İzollu ve çevre mahallelerde",
    intro:
      "Kale, Malatya'nın doğusunda, Karakaya Baraj Gölü'ne komşu bir ilçe. Sulanabilir tarım arazileri ve bağcılık, ilçedeki iş yükünün önemli bölümünü sulama ve pompa sistemleri üzerinde topluyor.",
    context: [
      {
        h: "Sulama ve pompa sistemleri",
        p: "Göl ve kuyu suyuna dayalı sulama sistemlerinde pompa seçimi, filtre istasyonu ve otomasyon panoları kuruyoruz. Yüzey suyu kullanılan sistemlerde yosun ve organik madde nedeniyle kum filtre uygulaması, damlatıcı tıkanmasının önüne geçmek için gerekli oluyor.",
      },
      {
        h: "Müstakil yapılar ve bahçeler",
        p: "Konut stoğu ağırlıklı olarak müstakil ve bahçeli yapılardan oluşuyor. Bu yapılarda tesisat yenileme, bahçe aydınlatması, dış mekân priz hatları ve topraklama işleri yapıyoruz. Bahçe içinden geçen hatlarda koruma sınıfı ve kablo tipi seçimi önem taşıyor.",
      },
      {
        h: "Sezonluk yoğunluk",
        p: "Sulama sezonu öncesi (mart–nisan) ve sonrası (ekim–kasım) ilçedeki iş yoğunluğu artıyor. Sezon başlamadan yapılan kontrol ve bakım, sulama döneminde yaşanacak arızaların büyük bölümünü bitiriyor.",
      },
    ],
    highlights: ["Karakaya Baraj Gölü çevresi", "Sulanabilir tarım arazileri", "Bağcılık", "Müstakil yapı dokusu"],
    priorityServices: ["tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri", "elektrik-tesisati", "sihhi-tesisat", "bahce-sulama", "topraklama-paratoner"],
  },
  {
    slug: "kuluncak",
    name: "Kuluncak",
    type: "ilçe",
    distanceKm: 115,
    tagline: "Yüksek rakımlı, hayvancılık ağırlıklı kuzeybatı ilçesi",
    metaExtra: "Kuluncak merkez, Sofular ve çevre mahallelerde",
    intro:
      "Kuluncak, Malatya'nın kuzeybatısında, yüksek rakımlı ve kışları sert geçen bir ilçe. Hayvancılık ve tarım ağırlıklı ekonomik yapı, teknik işlerin de ağırlıklı olarak işletme ve müstakil yapılar üzerinde yoğunlaşmasına yol açıyor.",
    context: [
      {
        h: "Sert kış koşullarına göre tesisat",
        p: "İlçede tesisat planlarken donma riski birinci sırada geliyor. Dış duvar ve soğuk hacimlerden geçen su hatlarını izole ediyor, riskli noktalarda tahliye vanası bırakıyoruz. Kullanılmayan yapılarda kış öncesi hat boşaltma işlemini de yapıyoruz.",
      },
      {
        h: "Hayvancılık işletmeleri",
        p: "Ahır, ağıl ve süt işletmelerinde aydınlatma, sağım ünitesi beslemesi, su tesisatı ve pompa sistemleri kuruyoruz. Nemli ve tozlu ortamlarda koruma sınıfı yüksek armatür ve pano seçimi, arıza sıklığını gözle görülür şekilde azaltıyor.",
      },
      {
        h: "Isıtma sistemleri",
        p: "Uzun ısıtma sezonu nedeniyle tesisat bakımı önem kazanıyor. Petek temizliği, sistem dengeleme, sirkülasyon pompası kontrolü ve basınç ayarı gibi kalemler sezon öncesi düzenli olarak talep ediliyor.",
      },
    ],
    highlights: ["Yüksek rakım ve sert kış", "Hayvancılık işletmeleri", "Müstakil yapı dokusu", "Uzun ısıtma sezonu"],
    priorityServices: ["mekanik-tesisat", "petek-temizligi", "elektrik-tesisati", "sihhi-tesisat", "hidrofor-pompa-sistemleri", "elektrik-panosu"],
  },
  {
    slug: "puturge",
    name: "Pütürge",
    type: "ilçe",
    distanceKm: 90,
    tagline: "Dağlık coğrafyası ve yenilenen yapı stoğuyla güneydoğu ilçesi",
    metaExtra: "Pütürge merkez, Tepehan ve çevre mahallelerde",
    intro:
      "Pütürge, Malatya'nın güneydoğusunda, dağlık ve engebeli bir coğrafyaya sahip. Son yıllarda yapı stoğunun önemli bölümü yenilendiği için ilçede yeni tesisat ve altyapı işleri yoğun biçimde sürüyor.",
    context: [
      {
        h: "Yeni yapılarda altyapı",
        p: "Yenilenen konutlarda elektrik ve su tesisatının doğru kurulması, sonradan yapılacak müdahaleleri önlüyor. Teslim aşamasındaki yapılarda priz ve aydınlatma noktalarının artırılması, ankastre mutfak için ayrı hat çekilmesi ve zayıf akım altyapısının bırakılması en çok fark yaratan kalemler.",
      },
      {
        h: "Engebeli arazide su ve basınç",
        p: "Kot farklarının fazla olduğu yerleşimlerde su temini pompa ve depoya dayanıyor. Basma yüksekliği hesabı, kablo kesiti ve kuru çalışma koruması bu bölgede pompa ömrünü doğrudan belirliyor.",
      },
      {
        h: "Uzak mesafe ve program",
        p: "İlçenin merkeze uzaklığı ve yol koşulları nedeniyle işleri toplu planlıyoruz. Aynı bölgedeki birden fazla iş aynı programa alındığında hem randevu hızlanıyor hem yol maliyeti azalıyor.",
      },
    ],
    highlights: ["Dağlık coğrafya", "Yenilenen yapı stoğu", "Tepehan ve çevre yerleşimleri", "Pompa ve depo çözümleri"],
    priorityServices: ["elektrik-tesisati", "sihhi-tesisat", "hidrofor-pompa-sistemleri", "komple-ev-tadilati", "topraklama-paratoner", "elektrik-ariza"],
  },
  {
    slug: "yazihan",
    name: "Yazıhan",
    type: "ilçe",
    distanceKm: 40,
    tagline: "Sulu tarım, sera ve besi işletmeleriyle öne çıkan kuzey ilçesi",
    metaExtra: "Yazıhan merkez, Fethiye, Durucasu ve OSB bölgelerinde",
    intro:
      "Yazıhan, Malatya merkeze yaklaşık 40 km uzaklıkta, sulu tarım ve hayvancılığın yoğun olduğu bir ilçe. Besi ve sera organize sanayi bölgeleri, ilçede hem tarımsal hem endüstriyel elektrik işlerini bir arada getiriyor.",
    context: [
      {
        h: "Sera ve besi işletmeleri",
        p: "Sera işletmelerinde sulama otomasyonu, ısıtma ve havalandırma kontrolü, aydınlatma ve pompa sistemleri kuruyoruz. Besi işletmelerinde ise su temini, aydınlatma, pano ve topraklama işleri öne çıkıyor. Her iki tesis tipinde de yüksek nem nedeniyle malzeme koruma sınıfı belirleyici.",
      },
      {
        h: "Sulu tarım ve pompa",
        p: "Sulanabilir arazi oranının yüksek olması, pompa ve sulama sistemlerini ilçedeki en yoğun iş kalemi hâline getiriyor. Kuyu ve kanal suyuna dayalı sistemlerde filtreleme, zonlama ve otomasyon uygulamaları yapıyoruz.",
      },
      {
        h: "Konut ve merkez",
        p: "İlçe merkezinde konut tesisatı yenileme, tadilat, ısıtma hattı bakımı ve aydınlatma işleri düzenli olarak talep ediliyor. Merkeze yakınlığı nedeniyle randevu süreleri diğer uzak ilçelere göre daha kısa.",
      },
    ],
    highlights: ["Besi TDİ OSB", "Sera OSB", "Sulanabilir tarım arazileri", "Merkeze yakın ulaşım"],
    priorityServices: ["tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri", "fabrika-elektrik-tesisati", "elektrik-panosu", "elektrik-tesisati", "sihhi-tesisat"],
  },
];

export const getDistrict = (slug) => districts.find((d) => d.slug === slug);
export const districtNames = districts.map((d) => d.name);
