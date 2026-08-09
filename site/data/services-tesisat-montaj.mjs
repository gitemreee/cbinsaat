// Tesisat montaj işleri (duşakabin, vitrifiye, petek).
// Not: mobilya, beyaz eşya, klima ve çelik kapı işleri ayrı hizmet olarak
// sunulmuyor; anahtar teslim daire projesinin kapsamında yer alıyor.

export const tesisatMontajServices = [
  {
    slug: "dusakabin-montaji",
    title: "Duşakabin ve Duş Teknesi Montajı",
    group: "Mutfak ve Banyo",
    icon: "drop",
    featured: false,
    priced: true,
    short: "Duşakabin kurulumu, duş teknesi yerleşimi ve sızdırmazlık uygulaması.",
    metaTitle: "Malatya Duşakabin Montajı ve Duş Teknesi Kurulumu",
    metaDesc:
      "Malatya'da duşakabin montajı, duş teknesi yerleşimi, sifon bağlantısı ve sızdırmazlık. Eski duşakabin sökümü ve değişimi.",
    keywords: ["Malatya duşakabin montajı", "duş teknesi montajı", "duşakabin tamiri", "duşakabin conta değişimi"],
    intro:
      "Duşakabin montajında iş, camı yerine oturtmakla bitmiyor. Asıl mesele suyun banyoya sızmadan gidere yönlenmesi. Yanlış kurulan bir duşakabin, ilk aylarda değil ama bir yıl sonra alt katı ilgilendiren bir soruna dönüşüyor.",
    symptoms: [
      { title: "Duş sonrası dışarı su sızıyor", text: "Alt profil silikonu eksik ya da kapı contaları yıpranmış." },
      { title: "Kapı sürtüyor veya kapanmıyor", text: "Tekne terazide değil; gövde çarpılmış." },
      { title: "Tekne altından nem geliyor", text: "Sifon bağlantısı veya tekne–duvar birleşimi sızdırıyor." },
      { title: "Su gidere yavaş çekiyor", text: "Sifon tıkalı ya da tekne eğimi yetersiz." },
    ],
    scope: [
      "Duşakabin montajı (köşe, çeyrek daire, düz)",
      "Duş teknesi yerleştirme ve terazi ayarı",
      "Sifon ve gider bağlantısı",
      "Silikon ve sızdırmazlık uygulaması",
      "Eski duşakabin sökümü",
      "Kapı contası ve tekerlek değişimi",
      "Duş bataryası ve el duşu montajı",
      "Sızdırmazlık testi",
    ],
    body: [
      { h2: "Teknenin terazisi her şeyi belirler" },
      { p: "Tekne tam terazide değilse, üzerine kurulan cam gövde çarpılıyor. Çarpılmış gövdede kapı ya sürtüyor ya da tam kapanmıyor, contalar görevini yapamıyor ve su dışarı sızıyor." },
      { p: "Zemin eğimli olduğunda tekne ayaklarından denge alınıyor, gerekirse altına harç yatağı yapılıyor. Bu adım atlanıp doğrudan monte edilen duşakabinlerde sorun birkaç hafta içinde başlıyor." },

      { h2: "Silikon: içeriden mi dışarıdan mı?" },
      { p: "Sık yapılan hata, duşakabini hem içeriden hem dışarıdan silikonlamak. İçeriden gelen suyun tekneye dönebilmesi için iç kısımda kontrollü bir yol bırakılmalı; her yeri kapatmak, sızan suyun profil içinde birikmesine ve zamanla küflenmeye yol açıyor." },
      { p: "Doğru uygulama, dış birleşimi tam sızdırmaz yapmak ve iç tarafta suyun tekneye dönmesine izin vermek. Bu detay, duşakabin şikâyetlerinin önemli bir kısmının kaynağı." },

      { h2: "Değişim mi, tamir mi?" },
      { p: "Cam sağlamsa çoğu duşakabin tamir edilebiliyor. Kapı tekerlekleri, mıknatıslı contalar ve alt profil sızdırmazlık bandı ayrı ayrı değiştirilebilen parçalar ve maliyeti yeni duşakabinin çok altında." },
      { p: "Camda çatlak, profil deformasyonu veya tekne çatlağı varsa değişim gerekiyor. Hangisinin uygun olduğunu fotoğraftan çoğu zaman söyleyebiliyoruz." },
    ],
    priceFactors: [
      "Duşakabin tipi ve ölçüsü",
      "Tekne montajı dahil mi",
      "Eski ürünün sökümü",
      "Zemin eğimi ve harç yatağı ihtiyacı",
      "Batarya ve duş sistemi montajı",
    ],
    faqs: [
      { q: "Teknesiz duşakabin montajı yapıyor musunuz?", a: "Yapıyoruz. Teknesiz uygulamada zeminin su yalıtımı ve eğimi kritik; mevcut banyoda bunlar uygun değilse önce zemin işi gerekir. Keşifte durumu görüp söylüyoruz." },
      { q: "Montaj ne kadar sürer?", a: "Tekne ile birlikte standart bir duşakabin 3–5 saat sürer. Silikonun kürlenmesi için montajdan sonra 24 saat kullanılmaması gerekiyor." },
      { q: "Sadece conta değişimi yapıyor musunuz?", a: "Evet. Kapı contası, tekerlek ve alt profil bandı değişimi sık yaptığımız işler. Ürünün fotoğrafını gönderirseniz parçanın bulunup bulunmadığını önceden söyleyebiliyoruz." },
      { q: "Duşakabini ben aldım, montajı yapar mısınız?", a: "Yapıyoruz. Ölçünün banyonuza uygun olduğundan emin olun; almadan önce ölçü konusunda telefonda yardımcı olabiliyoruz." },
    ],
    localAngle: "banyo tadilatlarında duşakabin değişiminin en sık talep edilen kalem olması",
    related: ["vitrifiye-armatur-montaji", "sihhi-tesisat", "komple-ev-tadilati"],
  },

  {
    slug: "vitrifiye-armatur-montaji",
    title: "Vitrifiye ve Armatür Montajı",
    group: "Mutfak ve Banyo",
    icon: "pipe",
    featured: false,
    priced: true,
    short: "Klozet, lavabo, batarya ve aksesuar montajı ile eski ürün değişimi.",
    metaTitle: "Malatya Klozet, Lavabo ve Batarya Montajı",
    metaDesc:
      "Malatya'da vitrifiye ve armatür montajı: klozet, lavabo, batarya, rezervuar ve banyo aksesuarları. Eski ürün sökümü ve değişimi.",
    keywords: ["Malatya klozet montajı", "lavabo montajı", "batarya değişimi", "rezervuar tamiri", "vitrifiye montaj"],
    intro:
      "Vitrifiye montajı küçük iş gibi görünür ama banyodaki su hasarlarının çoğu tam olarak bu bağlantılardan başlıyor. Sıkılmamış bir rekor, ezilmiş bir conta ya da yanlış oturtulmuş bir klozet flanşı aylarca fark edilmiyor.",
    symptoms: [
      { title: "Klozet arkasından su sızıyor", text: "Flanş contası oturmamış veya rezervuar bağlantısı gevşek." },
      { title: "Batarya damlatıyor", text: "Kartuş ömrünü tamamlamış; çoğu bataryada değiştirilebilir." },
      { title: "Rezervuar sürekli akıyor", text: "İç takım contası bozulmuş, sessizce ton ton su gidiyor." },
      { title: "Lavabo duvardan ayrılıyor", text: "Askı dübeli duvar tipine uygun seçilmemiş." },
    ],
    scope: [
      "Klozet ve taharet musluğu montajı",
      "Asma klozet ve gömme rezervuar kurulumu",
      "Lavabo, ayaklı lavabo ve tezgâh üstü çanak montajı",
      "Banyo ve mutfak bataryası değişimi",
      "Rezervuar iç takım değişimi",
      "Havluluk, sabunluk ve aksesuar montajı",
      "Eski vitrifiye sökümü ve tahliyesi",
      "Bağlantı sonrası sızdırmazlık kontrolü",
    ],
    body: [
      { h2: "Klozet montajında flanş" },
      { p: "Klozetin gidere oturduğu yerdeki flanş contası, banyoda görünmeyen ama en kritik bağlantı. Doğru oturmadığında sızan su döşemenin altına gidiyor; koku ve alt kata nem olarak aylar sonra ortaya çıkıyor." },
      { p: "Montajda zemin düzlüğü kontrol ediliyor, gerekiyorsa klozet altına takoz konuluyor ve flanş tam merkeze oturtuluyor. Bağlantı sonrası birkaç sifon çekilerek sızdırmazlık gözleniyor." },

      { h2: "Rezervuar: sessiz su kaybı" },
      { p: "Akan rezervuar, faturaya yansıyan ama fark edilmeyen bir kayıp. Kontrolü basit: hazneye birkaç damla gıda boyası damlatın, yarım saat sifonu çekmeden bekleyin. Klozette renk görünüyorsa iç takım sızdırıyor demektir." },
      { p: "İç takım değişimi düşük maliyetli ve hızlı bir iş. Gömme rezervuarlarda ise servis kapağından erişim gerekiyor; kapak yoksa açılması gerekebilir." },

      { h2: "Batarya seçimi ve kartuş" },
      { p: "Damlatan bataryaların büyük kısmı değiştirilmek zorunda değil. Sorun genelde kartuşta ve kartuş ayrı satılan bir parça. Ancak çok ucuz bataryalarda kartuş standart dışı olabiliyor ve bulunamıyor; bu durumda değişim gerekiyor." },
      { p: "Yeni batarya alacaksanız, kartuşu piyasada bulunabilen bilinen bir seri seçmenizi öneriyoruz. Beş yıl sonra 100 liralık kartuşla çözülecek bir sorun için bataryanın tamamını değiştirmek zorunda kalmazsınız." },
    ],
    priceFactors: [
      "Ürün adedi ve tipi",
      "Asma klozet / gömme rezervuar mı",
      "Eski ürünün sökümü ve tahliyesi",
      "Bağlantı hattında değişiklik gerekip gerekmediği",
      "Aynı ziyarette yapılan toplam iş",
    ],
    faqs: [
      { q: "Asma klozet montajı yapıyor musunuz?", a: "Yapıyoruz. Asma klozette gömme rezervuar kasasının duvara veya zemine sağlam sabitlenmesi kritik; taşıyıcı kasa doğru monte edilmezse zamanla oynama başlıyor. Kasa montajı yeni yapılacaksa duvar yapısına bakıp söylüyoruz." },
      { q: "Ürünü ben alsam olur mu?", a: "Olur, sık yaptığımız iş. Klozette gider mesafesi (yerden veya duvardan) ürüne göre değiştiği için, almadan önce mevcut ölçünüzü teyit etmenizi öneriyoruz; telefonda yardımcı olabiliyoruz." },
      { q: "Tek bir batarya değişimi için geliyor musunuz?", a: "Geliyoruz ama yol ve iş gücü nedeniyle tek kalemlik işlerde minimum servis bedeli uygulanıyor. Evdeki tüm damlatan armatürleri aynı ziyarette elden geçirmek kalem başına maliyeti belirgin düşürüyor." },
      { q: "Su kesintisi olur mu?", a: "Sadece çalışılan noktanın ara vanası kapatılıyor. Ara vana yoksa daire girişinden kesmek gerekiyor; bu durumda süre birkaç saat olabiliyor. Ara vana takılmasını da aynı işte yapabiliyoruz." },
    ],
    localAngle: "eski banyolarda ara vana bulunmaması ve rezervuar kaynaklı sessiz su kayıpları",
    related: ["dusakabin-montaji", "sihhi-tesisat", "su-kacagi-tespiti"],
  },

  {
    slug: "kombi-petek-montaji",
    title: "Kombi ve Petek Montajı",
    group: "Doğalgaz",
    icon: "radiator",
    featured: false,
    priced: true,
    short: "Petek montajı, yer değişimi, tesisat hattı ve kombi bağlantı altyapısı.",
    metaTitle: "Malatya Petek Montajı ve Kombi Tesisat Bağlantısı",
    metaDesc:
      "Malatya'da panel radyatör montajı, petek yeri değişimi, havlupan kurulumu ve kombi tesisat altyapısı. Gaz işlemleri yetkili firmayla.",
    keywords: ["Malatya petek montajı", "panel radyatör montajı", "havlupan montajı", "kombi tesisatı", "petek yeri değiştirme"],
    intro:
      "Petek montajında ölçü, hattın nereden geleceği ve peteğin kapasitesi birlikte düşünülmeli. Odaya küçük seçilmiş bir petek, tesisat ne kadar iyi olursa olsun o odayı ısıtmıyor.",
    symptoms: [
      { title: "Oda bir türlü ısınmıyor", text: "Petek oda hacmine göre küçük seçilmiş olabilir." },
      { title: "Petek yerini değiştirmek gerekiyor", text: "Mobilya düzeni değişince hat uzatma veya kaydırma gerekir." },
      { title: "Havlupan takılacak", text: "Banyoda mevcut hat uygun mu, kontrol edilmeli." },
      { title: "Kombi yeri değişecek", text: "Tesisat ve baca tarafı önceden planlanmalı." },
    ],
    scope: [
      "Panel radyatör montajı ve askı",
      "Havlupan ve banyo radyatörü kurulumu",
      "Petek yeri değişimi ve hat uzatma",
      "Vana, purjör ve termostatik başlık montajı",
      "Kombi bağlantı tesisatı ve hat hazırlığı",
      "Kombi yeri değişiminde tesisat düzenlemesi",
      "Sistem doldurma, hava alma ve basınç ayarı",
      "Devreye alma ve ısınma kontrolü",
    ],
    body: [
      { h2: "Petek ölçüsü nasıl seçilir?" },
      { p: "Peteğin kapasitesi watt cinsinden verilir ve odanın ısı ihtiyacına göre seçilir. Kaba bir yaklaşımla, iyi yalıtılmış bir odada metreküp başına 35–45 W, yalıtımsız veya dış duvarı çok olan odalarda 50–60 W hesaplanır." },
      { p: "Pencere altına yerleştirme rastgele bir gelenek değil; camdan gelen soğuk havayı karşılayarak odada dengeli bir dolaşım sağlar. Mümkün olduğunca bu konumu koruyoruz." },

      { h2: "Yer değişimi ve hat uzatma" },
      { p: "Petek yerini değiştirmek, hattın da uzatılması demek. Bu iş görünürde basit ama hattın nereden geçeceği, sıva altı mı üstü mü olacağı ve mevcut sistemin dengesinin bozulup bozulmayacağı birlikte değerlendirilmeli." },
      { p: "Kolektörlü sistemlerde değişiklik daha kolay; klasik dağıtımlı sistemlerde bir peteği kaydırmak diğerlerinin debisini etkileyebiliyor. Değişiklik sonrası sistemi yeniden dengeliyoruz." },

      { h2: "Kombi tarafı" },
      { p: "Kombinin kendisinin montajı ve gaz bağlantısı yetkili firma işi. Bizim yaptığımız kısım tesisat altyapısı: gidiş–dönüş hatları, temiz su bağlantısı, tahliye hattı ve gerekiyorsa hat güzergâhının yenilenmesi." },
      { p: "Kombi yeri değişecekse tesisat tarafını önceden hazırlıyor, yetkili firmayla koordineli çalışıyoruz. Bu şekilde iki ekip birbirini beklemiyor ve iş tek günde bitiyor." },
    ],
    priceFactors: [
      "Petek adedi ve ölçüsü",
      "Yeni hat çekimi veya uzatma gerekip gerekmediği",
      "Sıva altı mı sıva üstü mü",
      "Sistem dengeleme ihtiyacı",
      "Eski peteklerin sökümü",
    ],
    faqs: [
      { q: "Kombi montajı yapıyor musunuz?", a: "Gaz bağlantısı ve cihazın devreye alınması yetkili firma yetkisinde; onu yapmıyoruz. Tesisat altyapısı, hat çekimi, petek montajı ve sistem dengeleme bizim işimiz. İki tarafı koordine ederek tek programda yürütüyoruz." },
      { q: "Petek yerini kışın değiştirebilir miyiz?", a: "Değiştirilebilir ama sistemin boşaltılması gerektiği için ısıtmasız geçen birkaç saat oluyor. Mümkünse sezon dışında yapılmasını öneriyoruz." },
      { q: "Havlupan mevcut hatta takılır mı?", a: "Banyoda hâlihazırda petek varsa çoğu durumda takılır. Petek yoksa yeni hat çekilmesi gerekiyor; banyonun konumuna göre bu iş kolay da olabilir, kırım da gerektirebilir." },
      { q: "Termostatik başlık işe yarıyor mu?", a: "Yarıyor. Oda hedef sıcaklığa ulaşınca debiyi kısarak hem konforu dengeliyor hem yakıt tüketimini düşürüyor. Özellikle güneş alan ve az kullanılan odalarda farkı belirgin." },
    ],
    localAngle: "uzun ısıtma sezonunda petek kapasitesinin yetersiz kaldığı odalar",
    related: ["petek-temizligi", "mekanik-tesisat", "sihhi-tesisat"],
  },
];
