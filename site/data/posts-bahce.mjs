// Blog: bahçe, çevre düzenlemesi ve dış mekân elektrik/su konulu yazılar.

export const bahcePosts = [
  {
    slug: "bahce-duzenlemesinde-sira",
    title: "Bahçe düzenlemesinde doğru sıra: önce boru, sonra taş",
    category: "Bahçe ve Çevre",
    published: "2025-10-07",
    updated: "2026-05-30",
    reading: 5,
    metaTitle: "Bahçe Düzenlemesinde İş Sırası: Altyapı Önce",
    metaDesc:
      "Drenaj, sulama hattı, aydınlatma kablosu ve kilit taşı. Bahçe düzenlemesinde sıra bozulduğunda taşlar sökülüyor.",
    keywords: ["bahçe düzenleme", "kilit taşı", "bahçe drenajı", "bahçe aydınlatma", "sulama hattı"],
    excerpt: "Bahçede sıra bozulduğunda döşenen taş sökülüyor. Önce ne yapılır, hangi boru şimdiden bırakılır?",
    services: ["bahce-cevre-duzenleme", "bahce-sulama", "demir-korkuluk"],
    intro:
      "Bahçe işlerinde en sık yaptığımız uyarı şu: kilit taşı döşendikten sonra sulama hattı ya da aydınlatma kablosu çekmek, taşları sökmek demek. Altyapı her zaman önce gelir.",
    body: [
      { h2: "Doğru sıra" },
      { ol: [
        "Kot çalışması ve kazı",
        "Drenaj ve yağmur suyu hatları",
        "İstinat ve bahçe duvarı",
        "Su, sulama ve elektrik boruları (boş boru dahil)",
        "Dolgu ve sıkıştırma",
        "Kilit taşı, beton zemin veya kaplama",
        "Sulama başlıkları ve aydınlatma armatürleri",
        "Bitki ve peyzaj uygulaması",
      ] },
      { p: "Bu sıra bozulduğunda, sonraki her adım öncekini kısmen sökmeyi gerektiriyor." },

      { h2: "Boş boru bırakın" },
      { p: "Şimdilik istemediğiniz noktalar için bile boş boru (koruge) bırakılması, maliyeti neredeyse hiç artırmıyor." },
      { p: "İleride bahçeye kamera, ek aydınlatma ya da otomatik kapı motoru eklemek istediğinizde kazı yapmak gerekmiyor. Bu, en çok teşekkür aldığımız detaylardan biri." },

      { h2: "Drenaj: temeli koruyan kalem" },
      { p: "Bahçede biriken su bina temeline yöneliyor. Yıllar içinde bu, bodrumda rutubet ve sıva dökülmesi olarak görünüyor." },
      { p: "Drenaj hattı ve doğru eğimle su binadan uzaklaştırılıyor. Yağmur oluğu iniş boruları da bu hatta bağlanmalı; bina dibine boşalmamalı." },

      { h2: "Dolgu ve sıkıştırma" },
      { p: "Kilit taşının ömrünü belirleyen şey taşın kendisi değil, altındaki dolgu ve sıkıştırma. Yeterince sıkıştırılmamış zeminde taşlar bir yıl içinde oturuyor." },
      { p: "Sıkıştırma kademeli yapılmalı; tek seferde dökülen kalın dolgu tam sıkışmıyor. Araç girecek alanlarda dolgu ve taş kalınlığı artıyor." },

      { h2: "Yaya alanı ile otopark farkı" },
      { p: "Yaya alanında ince taş ve daha az dolgu yeterli. Araç girecek alanda hem taş kalınlığı hem alt dolgu artıyor." },
      { p: "İkisini aynı metrajla hesaplamak yaygın bir hata. Otopark alanı bir yıl içinde çöküyor ve yeniden yapılıyor." },

      { h2: "Bitki en sona" },
      { p: "Peyzaj ve bitkilendirme en sona bırakılabilir; bütçe sıkışırsa ertelenebilecek tek kalem bu." },
      { p: "Ama bitkilerin sulama noktaları ve toprak hazırlığı altyapı aşamasında planlanmalı. Sonradan sulama çekmek çim ve kaplamayı sökmek demek." },
    ],
    faqs: [
      { q: "Kilit taşı mı beton zemin mi?", a: "Kilit taşı sökülüp yeniden döşenebiliyor; altına müdahale kolay. Beton daha düz ve temizliği kolay ama müdahale gerektiğinde kırmak gerekiyor. Otoparkta beton, yaya alanında kilit taşı yaygın." },
      { q: "Bahçe düzenlemesi ne kadar sürer?", a: "200 m² bir bahçede kazı, drenaj, altyapı ve kilit taşı 2–4 hafta. İstinat duvarı devreye girerse uzuyor." },
      { q: "Kışın yapılabilir mi?", a: "Kazı ve altyapı yapılabiliyor. Beton ve harç işleri donma riskine göre planlanıyor; uygun olmayan günlerde yapılmıyor." },
    ],
    related: ["istinat-duvari-neden-catlar", "otomatik-sulama-kurulumu", "bahce-aydinlatmasi-nasil-planlanir"],
  },

  {
    slug: "otomatik-sulama-kurulumu",
    title: "Otomatik sulama sistemi: zon planı ve kurulum",
    category: "Sulama",
    published: "2025-10-21",
    updated: "2026-06-01",
    reading: 6,
    metaTitle: "Otomatik Sulama Sistemi Kurulumu ve Zon Planı",
    metaDesc:
      "Bahçe sulamasında zon planı, başlık seçimi, vana kutusu, kontrol ünitesi ve kış hazırlığı.",
    keywords: ["otomatik sulama", "bahçe sulama sistemi", "sulama zonu", "pop-up sprinkler", "damlama sulama"],
    excerpt: "Sulama sisteminin performansını belirleyen şey başlık markası değil, zon planı ve debi hesabı.",
    services: ["bahce-sulama", "anahtar-teslim-sulama-sistemi", "hidrofor-pompa-sistemleri"],
    intro:
      "Otomatik sulamada en sık gördüğümüz sorun, tüm bahçenin tek zonda toplanması. Basınç bölünüyor, başlıklar tam açılmıyor ve bazı bölgeler kuru kalıyor.",
    body: [
      { h2: "Zon nedir, neden gerekli?" },
      { p: "Zon, aynı anda çalışan başlık grubudur. Kaynağın (şebeke ya da pompa) verebileceği debi sınırlı olduğu için başlıklar gruplara bölünüyor ve sırayla çalışıyor." },
      { p: "Zon sayısı, toplam debi ihtiyacının kaynağın kapasitesine bölünmesiyle çıkıyor. Bu hesap yapılmadan kurulan sistem hiçbir zaman düzgün çalışmıyor." },

      { h2: "Bitki tipine göre ayırma" },
      { p: "Çim, çalı ve ağaçların su ihtiyacı farklı. Hepsini aynı zonda toplamak, birini fazla diğerini az sulamak demek." },
      { p: "Doğru yaklaşım: çim alanlar rotor/sprey başlıklarla ayrı zonda, çalı ve ağaçlar damlama hattıyla ayrı zonda. Güneş alan ve gölge alan bölgeler de ayrılıyor." },

      { h2: "Başlık seçimi" },
      { ul: [
        "Sprey (fıskiye) başlık: küçük ve düzensiz alanlar, kısa mesafe",
        "Rotor başlık: geniş çim alanlar, uzun mesafe",
        "Damlama hattı: çalı, çiçeklik, ağaç dipleri",
        "Bubbler: ağaç çanağı sulaması",
      ] },
      { p: "Aynı zonda sprey ve rotor karıştırılmamalı; su verme hızları farklı olduğu için biri fazla diğeri az su alıyor." },

      { h2: "Vana kutusu ve kontrol" },
      { p: "Solenoid vanalar erişilebilir kutularda toplanıyor. Kutunun yeri, bakım için kolay ulaşılır ve araç trafiğinden uzak olmalı." },
      { p: "Kontrol ünitesi zonları sırayla çalıştırıyor. Yağmur sensörü eklendiğinde yağışlı günlerde sulama otomatik atlanıyor; su tasarrufu sağlayan basit bir ek." },

      { h2: "Sulama saati" },
      { p: "En verimli zaman sabaha karşı. Buharlaşma düşük, rüzgâr az ve bitki gün boyunca suyu kullanabiliyor." },
      { p: "Akşam sulaması yaprakların gece ıslak kalmasına ve mantar hastalığına yol açabiliyor. Öğlen sulaması ise buharlaşmayla ciddi kayıp demek." },

      { h2: "Kış hazırlığı" },
      { p: "Malatya kışında borular donabiliyor. Sezon sonunda sistemin boşaltılması gerekiyor: ana vana kapatılıyor, hat en alçak noktadan ya da kompresörle boşaltılıyor." },
      { p: "Vana kutusu ve kontrol ünitesi de kış moduna alınıyor. Bu işlemleri yazılı olarak veriyoruz; kendiniz de yapabiliyorsunuz." },
    ],
    faqs: [
      { q: "Mevcut bahçeye sonradan kurulabilir mi?", a: "Kurulabiliyor. Çim varsa kanal açma yöntemiyle minimum hasarla çalışılıyor; çim birkaç haftada kapanıyor. Yine de en ekonomik zamanı bahçe düzenlemesiyle birlikte." },
      { q: "Şebeke suyu yeterli mi?", a: "Küçük bahçelerde yeterli olabiliyor. Basınç ve debi ölçülüp zon sayısı buna göre belirleniyor. Yetersizse depo ve hidrofor devreye giriyor." },
      { q: "Ne kadar sürer?", a: "300 m² bir bahçede kanal, hat, vana ve başlık montajı 3–6 iş günü." },
    ],
    related: ["bahce-duzenlemesinde-sira", "damlama-mi-yagmurlama-mi", "kuyu-pompasi-secimi"],
  },

  {
    slug: "damlama-mi-yagmurlama-mi",
    title: "Damlama mı yağmurlama mı? Bahçe ve arazi için karşılaştırma",
    category: "Sulama",
    published: "2025-11-25",
    updated: "2026-06-02",
    reading: 5,
    metaTitle: "Damlama mı Yağmurlama mı? Su Verimi ve Maliyet",
    metaDesc:
      "Damlama ve yağmurlama sulamanın su verimi, maliyet, bakım ve bitki tipine göre karşılaştırması.",
    keywords: ["damlama sulama", "yağmurlama sulama", "sulama sistemi seçimi", "kayısı sulama"],
    excerpt: "İkisi farklı işler için. Kayısı bahçesinde damlama, çim alanda yağmurlama; ama istisnalar var.",
    services: ["kayisi-bahcesi-sulama", "tarimsal-sulama-sistemleri", "bahce-sulama"],
    intro:
      "Sulama sistemi seçiminde tek bir doğru yok; belirleyici olan bitki tipi, arazi yapısı, su kaynağının kapasitesi ve iş gücü.",
    body: [
      { h2: "Damlama sulama" },
      { p: "Suyu doğrudan bitki köküne veriyor. Buharlaşma ve rüzgâr kaybı neredeyse yok; su verimi en yüksek sistem." },
      { p: "Meyve ağaçları, bağ, sera ve sıra bitkilerinde standart tercih. Yabani ot da daha az çıkıyor çünkü sıra araları kuru kalıyor." },

      { h2: "Yağmurlama sulama" },
      { p: "Suyu yukarıdan püskürterek yağmur etkisi yaratıyor. Geniş ve yayılı alanlarda, özellikle çim ve tahılda tercih ediliyor." },
      { p: "Sıcak günlerde bitkiyi serinletme etkisi de var. Buna karşılık buharlaşma kaybı daha yüksek ve rüzgârlı havada dağılım bozuluyor." },

      { h2: "Karşılaştırma" },
      { ul: [
        "Su verimi: damlama > yağmurlama",
        "İlk kurulum maliyeti: yağmurlama genelde daha düşük (küçük alanlarda)",
        "Yabani ot kontrolü: damlama daha iyi",
        "Tıkanma riski: damlama daha yüksek (filtre şart)",
        "Geniş alan kolaylığı: yağmurlama daha pratik",
        "Don koruması: yağmurlama kullanılabiliyor",
      ] },

      { h2: "Filtreleme: damlamanın olmazsa olmazı" },
      { p: "Damlatıcı delikleri çok küçük; kum, tortu ve alg tıkanmaya yol açıyor. Kuyu ve gölet suyunda filtre istasyonu zorunlu." },
      { p: "Hidrosiklon (kum ayırıcı) ve disk/eleman filtre kombinasyonu yaygın. Filtrelerin düzenli temizliği sistemin ömrünü tek başına belirliyor." },

      { h2: "Kayısı bahçesinde" },
      { p: "Malatya'da kayısıda damlama sulama, salma sulamaya göre hem su hem işçilik tasarrufu sağlıyor. Ağaç başına damlatıcı sayısı toprak yapısına göre belirleniyor." },
      { p: "Kumlu toprakta su hızlı süzülüyor, daha sık ve kısa sulama gerekiyor. Killi toprakta ise daha seyrek ve uzun sulama uygun." },

      { h2: "Karma çözüm" },
      { p: "Aynı arazide iki sistem birlikte kullanılabiliyor: ağaçlarda damlama, ara çim alanda yağmurlama. Zonlar ayrı kurulup ayrı programlanıyor." },
      { p: "Böyle bir durumda pompa ve filtre istasyonu her iki sistemin ihtiyacına göre boyutlanıyor." },
    ],
    faqs: [
      { q: "Damlama hattı kaç yıl kullanılır?", a: "Kaliteli boru ve düzgün filtrelemeyle uzun yıllar kullanılıyor. Ömrü kısaltan ana etken tıkanma ve UV; hattın toprak altına alınması ömrü uzatıyor." },
      { q: "Sistemi kendim kurabilir miyim?", a: "Küçük bahçelerde mümkün. Ama debi hesabı, zon planı ve filtre seçimi yapılmadan kurulan sistemler genelde yetersiz kalıyor." },
      { q: "Sulama otomasyonu şart mı?", a: "Şart değil ama işçiliği ortadan kaldırıyor ve doğru zamanda sulama sağlıyor. Geniş arazilerde kısa sürede kendini amorti ediyor." },
    ],
    related: ["otomatik-sulama-kurulumu", "kuyu-pompasi-secimi", "gunes-enerjisiyle-sulama"],
  },

  {
    slug: "kuyu-pompasi-secimi",
    title: "Kuyu pompası nasıl seçilir? Önce kuyu ölçülür",
    category: "Pompa",
    published: "2025-12-09",
    updated: "2026-06-03",
    reading: 6,
    metaTitle: "Kuyu Pompası Seçimi: Verim, Basma Yüksekliği, Kesit",
    metaDesc:
      "Dalgıç pompa seçiminde kuyu verimi, dinamik su seviyesi, basma yüksekliği ve kablo kesiti hesabı.",
    keywords: ["dalgıç pompa", "kuyu pompası", "pompa seçimi", "basma yüksekliği", "gerilim düşümü"],
    excerpt: "Kuyu verimi ölçülmeden alınan pompa ya suyu çekemiyor ya kuyuyu boşaltıp kendini yakıyor.",
    services: ["hidrofor-pompa-sistemleri", "anahtar-teslim-sulama-sistemi", "gunes-enerjisi-su-sistemi"],
    intro:
      "Pompa seçimi katalogdan yapılmıyor; kuyudan yapılıyor. Önce kuyunun ne verdiği ölçülüyor, sonra ona uygun pompa seçiliyor. Tersi sıralama, yanan pompalarla sonuçlanıyor.",
    body: [
      { h2: "1. Kuyu verimi" },
      { p: "Kuyunun saatte kaç ton su verebildiği ölçülüyor. Pompanın debisi bu değerin üzerinde olamaz; aksi hâlde kuyu boşalıyor ve pompa susuz çalışıp yanıyor." },
      { p: "Ölçüm sırasında dinamik su seviyesi de belirleniyor: pompa çalışırken su seviyesinin ne kadar düştüğü. Bu, basma yüksekliği hesabının girdisi." },

      { h2: "2. Basma yüksekliği" },
      { p: "Toplam basma yüksekliği üç bileşenden oluşuyor: dinamik su seviyesi (kuyu derinliği), yükseklik farkı (depoya kadar) ve boru sürtünme kaybı." },
      { p: "Sürtünme kaybı sık atlanıyor. Uzun ve dar borularda bu kayıp ciddi boyutlara ulaşıyor; boru çapı da bu yüzden hesaba giriyor." },

      { h2: "3. Kablo kesiti" },
      { p: "Kuyudan panoya, panodan enerji kaynağına kadar olan mesafede gerilim düşümü hesaplanmalı. Yetersiz kesit, motorun düşük gerilimle çalışıp ısınmasına yol açıyor." },
      { p: "Arazi hatlarında mesafe uzun olduğu için bu hesap kritik. Doğru kesit seçilmediğinde pompa değil kablo problemi yaşanıyor ama fatura pompaya çıkıyor." },

      { h2: "4. Koruma ekipmanı" },
      { p: "Pompayı yakan üç şey: susuz çalışma, faz kaybı ve aşırı akım. Üçü için de koruma var ve üçü de panoya konması gereken standart ekipman." },
      { ul: [
        "Kuru çalışma koruması (seviye elektrodu veya akım rölesi)",
        "Faz koruma rölesi",
        "Termik manyetik koruma",
        "Yol verme ekipmanı (yumuşak yol verici veya kondansatör)",
      ] },
      { p: "\"Korumasız bir sisteme sadece şalter takmak\" en sık gördüğümüz ve en pahalıya mal olan uygulama." },

      { h2: "5. Depo ve hidrofor" },
      { p: "Kuyu verimi düşükse pompa sürekli çalışamaz. Bu durumda kuyudan depoya yavaş dolum, depodan kullanıma hidroforla basınçlı verme çözümü uygulanıyor." },
      { p: "Depo yüksek bir kota konabiliyorsa hidrofor ihtiyacı azalıyor ya da tamamen kalkıyor. Arazinin eğimi burada avantaja çevriliyor." },

      { h2: "Sık yapılan hatalar" },
      { p: "Büyük pompa daha iyi sanılıyor. Oysa kuyunun veremediği debiyi çeken pompa kuyuyu boşaltıyor ve kendini yakıyor." },
      { p: "İkinci sık hata, komşunun pompasının aynısını almak. Kuyular birbirinden farklı; aynı köyde iki kuyunun verimi kat kat değişebiliyor." },
    ],
    faqs: [
      { q: "Pompam sık sık yanıyor, neden?", a: "En sık üç sebep: kuru çalışma, gerilim düşümü ve faz kaybı. Üçü de koruma ekipmanıyla önlenebiliyor. Panonuza bakıp hangi korumaların eksik olduğunu söylüyoruz." },
      { q: "Kuyu verimi ölçümü ne kadar sürer?", a: "Kısa bir işlem, birkaç saat. Pompa çalıştırılıp su seviyesinin dengelenmesi izleniyor. Bu ölçüm olmadan pompa önermiyoruz." },
      { q: "Güneş enerjisiyle çalışır mı?", a: "Çalışıyor. Özellikle sezonluk sulama ve enerji hattı uzak arazilerde ekonomik oluyor. Panel kapasitesi pompa gücüne ve günlük su ihtiyacına göre hesaplanıyor." },
    ],
    related: ["kuyu-actirmadan-once", "hidrofor-basinc-sorunu", "gunes-enerjisiyle-sulama", "damlama-mi-yagmurlama-mi"],
  },

  {
    slug: "hidrofor-basinc-sorunu",
    title: "Hidrofor sürekli çalışıyor ya da basınç düşük: sebepleri",
    category: "Pompa",
    published: "2026-01-12",
    updated: "2026-06-04",
    reading: 5,
    metaTitle: "Hidrofor Sürekli Çalışıyor: Sebepleri ve Çözümü",
    metaDesc:
      "Hidroforun sık devreye girmesi, basınç düşüklüğü ve su darbesi. Genleşme tankı, presostat ve çek valf kontrolü.",
    keywords: ["hidrofor", "hidrofor sürekli çalışıyor", "su basıncı düşük", "genleşme tankı", "presostat"],
    excerpt: "Hidroforun sık devreye girmesinin en yaygın sebebi tankın havasını kaybetmesi. Kontrolü birkaç dakika sürüyor.",
    services: ["hidrofor-tamiri", "hidrofor-pompa-sistemleri", "sihhi-tesisat"],
    intro:
      "Hidrofor şikâyetleri üç başlıkta toplanıyor: sürekli devreye giriyor, basınç düşük ya da su darbesi yapıyor. Üçünün de kontrol sırası belli.",
    body: [
      { h2: "Sık devreye giriyor" },
      { p: "En yaygın sebep genleşme tankının havasını kaybetmesi. Tank, pompa durduktan sonra basıncı bir süre tutan yastık görevi görüyor; havası gidince bu görevi yapamıyor." },
      { p: "Kontrolü basit: tankın üzerindeki sibop kapağı açılıp basınç ölçülüyor. Değer, presostatın devreye girme basıncının biraz altında olmalı. Şarj edilerek düzeltiliyor." },

      { h2: "Basınç düşük" },
      { p: "Önce presostat ayarına bakılıyor; devreye girme ve çıkma basınçları doğru ayarlanmamış olabiliyor." },
      { p: "Ayar doğruysa pompanın kendisi yorulmuş olabilir. Fanların aşınması debiyi ve basıncı düşürüyor. Ayrıca emiş hattında hava sızması da basıncı düşürüyor." },

      { h2: "Su darbesi (koç darbesi)" },
      { p: "Musluk kapandığında borularda duyulan gümbürtü, suyun ani duruşundan kaynaklanıyor. Uzun vadede bağlantıları gevşetiyor." },
      { p: "Genleşme tankı ve darbe emici bu etkiyi azaltıyor. Ayrıca boru askılarının sağlam olması ve hattın serbest titreşim yapmaması gerekiyor." },

      { h2: "Çek valf" },
      { p: "Emiş hattındaki çek valf tutmuyorsa su geri kaçıyor ve pompa boşa çalışıyor. Belirtisi: pompa durduktan bir süre sonra basıncın kendiliğinden düşmesi." },
      { p: "Tank sağlamsa ve tesisatta kaçak yoksa, basıncın kendiliğinden düşmesi neredeyse kesin olarak çek valfi gösteriyor." },

      { h2: "Tesisat kaçağı" },
      { p: "Bütün musluklar kapalıyken pompanın devreye girmesi, tesisatta bir yerde su gittiğini gösteriyor. Rezervuar sızıntısı en sık sebep." },
      { p: "Ana vanayı kapatıp sayaç ve basınç izlenerek kaçak olup olmadığı anlaşılıyor. Kaçak varsa kaçak tespiti gerekiyor." },

      { h2: "Apartman hidroforunda ek noktalar" },
      { p: "Çok katlı binalarda üst katlarda basınç düşüklüğü, hidroforun kapasitesinin kat sayısına yetmediğini gösterebiliyor." },
      { p: "Frekans kontrollü (invertörlü) hidroforlar bu binalarda daha dengeli basınç veriyor ve enerji tüketimini düşürüyor. Değişimde bu seçeneği değerlendiriyoruz." },
    ],
    faqs: [
      { q: "Genleşme tankının basıncı kaç olmalı?", a: "Presostatın devreye girme basıncının biraz altında olmalı. Cihazın etiketinde ve kullanım kılavuzunda değer yazıyor; ölçüp ona göre şarj ediyoruz." },
      { q: "Hidrofor gürültülü çalışıyor, normal mi?", a: "Belirli bir ses normal ama artan gürültü rulman aşınmasını gösterebiliyor. Ayrıca zeminle temasından kaynaklanan titreşim, titreşim takozuyla azaltılıyor." },
      { q: "Hidrofor tamiri mi değişim mi?", a: "Tank, presostat ve çek valf gibi parçalar değiştirilebiliyor. Motor sargısı gitmiş ya da fanlar aşınmışsa değişim çoğu zaman daha mantıklı." },
    ],
    related: ["kuyu-pompasi-secimi", "su-kacagi-nasil-bulunur-blog", "otomatik-sulama-kurulumu"],
  },

  {
    slug: "gunes-enerjisiyle-sulama",
    title: "Güneş enerjisiyle sulama: nerede mantıklı?",
    category: "Enerji",
    published: "2026-02-09",
    updated: "2026-06-05",
    reading: 5,
    metaTitle: "Güneş Enerjisiyle Su Pompası: Nerede Mantıklı?",
    metaDesc:
      "Enerji hattı uzak arazilerde güneş enerjili pompa sistemi; panel kapasitesi, depo çözümü ve maliyet karşılaştırması.",
    keywords: ["güneş enerjili pompa", "solar sulama", "arazi elektrik hattı", "tarımsal sulama enerjisi"],
    excerpt: "Enerji hattı uzaksa güneş enerjisi çoğu zaman daha ekonomik. Ama her arazi için değil; hesabı nasıl yapılır?",
    services: ["gunes-enerjisi-su-sistemi", "kuyu-pompasi-secimi", "tarimsal-sulama-sistemleri"],
    intro:
      "Arazi enerji hattı çektirmenin maliyeti mesafeyle hızla artıyor. Belirli bir mesafeden sonra güneş enerjili pompa sistemi hem ilk yatırım hem işletme açısından öne geçiyor.",
    body: [
      { h2: "Nerede mantıklı?" },
      { ul: [
        "Enerji hattı arazi sınırından uzaksa",
        "Kullanım sezonluk ve gündüz ağırlıklıysa",
        "Su deposuna dolum yapılabiliyorsa",
        "Arazi güneş görüyorsa (gölgesiz)",
        "Şebeke elektriği sık kesiliyorsa",
      ] },
      { p: "Bu beş maddeden üçü ve fazlası sizde varsa güneş enerjisi ciddi biçimde değerlendirilmeli." },

      { h2: "Depo, akünün yerini tutar" },
      { p: "Akülü sistemler pahalı ve bakım istiyor. Sulamada daha akıllı çözüm, gündüz güneş varken depoyu doldurmak ve sulamayı depodan yapmak." },
      { p: "Bu şekilde akü ihtiyacı ortadan kalkıyor. Depo hacmi, günlük su ihtiyacının bir-iki katı olacak şekilde seçiliyor." },

      { h2: "Panel kapasitesi nasıl belirlenir?" },
      { p: "Pompanın gücü, günlük çalışma süresi ve bölgenin güneşlenme değeri hesaba giriyor. Malatya güneşlenme açısından avantajlı bir bölge." },
      { p: "Panel kapasitesi pompanın anlık gücünden fazla seçiliyor; bulutlu ve kış günlerinde performans düşüyor. Bu pay hesaba katılmazsa sistem yaz dışında çalışmıyor." },

      { h2: "Pompa tipi" },
      { p: "Doğrudan DC ile çalışan solar pompalar ve invertörle beslenen AC pompalar var. DC pompalar daha verimli, AC pompalar daha yaygın ve parça bulunabilirliği yüksek." },
      { p: "Mevcut AC pompanız varsa uygun invertörle güneşe bağlanabiliyor; sıfırdan kurulumda DC seçenek değerlendiriliyor." },

      { h2: "Hibrit çalışma" },
      { p: "Şebeke bağlantısı olan ama sık kesinti yaşanan yerlerde hibrit sistem kuruluyor: güneş varken panelden, yoksa şebekeden." },
      { p: "Bu, sulamanın kesintiye uğramamasını sağlıyor ve elektrik faturasını düşürüyor." },

      { h2: "Bakım" },
      { p: "Panellerin yüzeyi tozlanınca verim düşüyor. Sezon içinde birkaç kez temizlik yeterli oluyor." },
      { p: "Kablo bağlantıları ve konnektörler yılda bir kontrol edilmeli. Açık alanda olduğu için UV ve hayvan zararına karşı kablo koruması önemli." },
    ],
    faqs: [
      { q: "Kışın çalışır mı?", a: "Çalışır ama verim düşer; gün kısa ve güneşlenme az. Sulama zaten yaz ağırlıklı olduğu için bu çoğu arazide sorun olmuyor." },
      { q: "Sistem kaç yılda kendini amorti eder?", a: "Enerji hattı maliyetine ve kullanım yoğunluğuna bağlı. Hat çok uzaksa daha ilk yatırımda avantajlı olabiliyor; keşifte iki seçeneğin maliyetini yan yana çıkarıyoruz." },
      { q: "Panel çalınırsa ne olur?", a: "Açık arazide bu gerçek bir risk. Sabitleme sistemleri, güvenlik vidaları ve gerekiyorsa kamera ile önlem alıyoruz." },
    ],
    related: ["kuyu-pompasi-secimi", "bag-evi-yapiminda-altyapi", "damlama-mi-yagmurlama-mi"],
  },

  {
    slug: "bahce-aydinlatmasi-nasil-planlanir",
    title: "Bahçe aydınlatması nasıl planlanır?",
    category: "Aydınlatma",
    published: "2026-03-09",
    updated: "2026-06-06",
    reading: 5,
    metaTitle: "Bahçe Aydınlatması: Planlama, Koruma Sınıfı ve Kontrol",
    metaDesc:
      "Bahçede armatür tipleri, IP koruma sınıfı, kablo güzergâhı, sensör ve zaman kontrolü. Işık kirliliğinden kaçınma.",
    keywords: ["bahçe aydınlatma", "dış mekan aydınlatma", "IP koruma sınıfı", "bollard armatür"],
    excerpt: "Bahçe aydınlatmasında amaç her yeri aydınlatmak değil; yolu güvenli, mekânı davetkâr kılmak.",
    services: ["bahce-cevre-duzenleme", "avize-aydinlatma", "elektrik-tesisati"],
    intro:
      "Bahçe aydınlatmasında sık yapılan hata, birkaç güçlü projektörle her yeri aydınlatmak. Sonuç göz alıcı bir parlaklık ve gölgeye gömülmüş bir bahçe oluyor.",
    body: [
      { h2: "Üç işlev" },
      { p: "Güvenlik (yolu ve basamakları görmek), yönlendirme (girişi ve patikayı belli etmek) ve vurgu (ağaç, duvar, havuz)." },
      { p: "Üçünü aynı armatürle yapmaya çalışmak yerine ayırmak, hem daha az enerjiyle hem daha iyi sonuç veriyor." },

      { h2: "Armatür tipleri" },
      { ul: [
        "Bollard (bahçe direği): patika ve yol kenarı",
        "Gömme yer armatürü: ağaç ve duvar aydınlatma",
        "Basamak armatürü: merdiven ve kot farkı",
        "Duvar apliği: giriş ve teras",
        "Projektör: geniş alan (dikkatli kullanılmalı)",
      ] },

      { h2: "IP koruma sınıfı" },
      { p: "Dış mekân armatürlerinde IP değeri belirleyici. Yağmura maruz kalan yerlerde en az IP65, zemine gömülenlerde ise su altında kalmaya dayanıklı sınıf gerekiyor." },
      { p: "İç mekân armatürünü dışarıda kullanmak, birkaç ayda su alıp kısa devre yapması demek. Bu, bahçede en sık gördüğümüz arıza sebebi." },

      { h2: "Kablo güzergâhı" },
      { p: "Kablolar koruge boru içinde ve yeterli derinlikte gömülmeli. Kazma ve bahçe işleri sırasında zarar görmemesi için güzergâh planı size verilmeli." },
      { p: "Bahçe düzenlemesi sırasında kablolar döşenmezse sonradan kilit taşı sökmek gerekiyor. Boş boru bırakmak burada da geçerli." },

      { h2: "Kontrol" },
      { p: "Alacakaranlık sensörü (fotosel) ile otomatik açılma, zaman rölesiyle belirli saatte kapanma en pratik kombinasyon." },
      { p: "Hareket sensörü ise sadece güvenlik amaçlı bölgelerde mantıklı; dekoratif aydınlatmada sürekli açılıp kapanma rahatsız edici oluyor." },

      { h2: "Işık kirliliğinden kaçınma" },
      { p: "Yukarı doğru ışık veren armatürler hem enerji israfı hem komşu rahatsızlığı. Işığı aşağı yönlendiren armatürler tercih edilmeli." },
      { p: "Sıcak renk sıcaklığı (2700–3000K) hem daha davetkâr hem böcekleri daha az çekiyor. Bahçede soğuk beyaz ışık genelde iyi sonuç vermiyor." },
    ],
    faqs: [
      { q: "Bahçe aydınlatması ne kadar elektrik harcar?", a: "LED armatürlerle tüketim çok düşük. Asıl belirleyici armatür sayısı ve yanma süresi; zaman kontrolüyle gece yarısından sonra kapatmak tüketimi epeyce düşürüyor." },
      { q: "Solar bahçe armatürleri işe yarar mı?", a: "Dekoratif ve düşük ışık ihtiyacında yarıyor. Yol ve merdiven aydınlatması gibi güvenlik amaçlı yerlerde kablolu sistem daha güvenilir." },
      { q: "Mevcut bahçeye sonradan kurulabilir mi?", a: "Kurulabiliyor. Kilit taşı varsa kenar kanallardan geçiş yapılabiliyor; çim alanda kanal açma yöntemiyle minimum hasarla çalışılıyor." },
    ],
    related: ["bahce-duzenlemesinde-sira", "ic-mekan-aydinlatma-planlama", "otomatik-sulama-kurulumu"],
  },

  {
    slug: "sera-elektrik-ve-otomasyon",
    title: "Serada elektrik ve otomasyon: nelere dikkat edilir?",
    category: "Sulama",
    published: "2026-04-13",
    updated: "2026-06-07",
    reading: 5,
    metaTitle: "Sera Elektrik ve Sulama Otomasyonu",
    metaDesc:
      "Serada nem ve korozyona dayanıklı elektrik tesisatı, sulama otomasyonu, havalandırma kontrolü ve koruma ekipmanı.",
    keywords: ["sera elektriği", "sera otomasyonu", "sera sulama", "nem dayanımlı tesisat"],
    excerpt: "Sera, elektrik tesisatı için zorlu bir ortam: yüksek nem, gübre ve sürekli ıslaklık. Standart tesisat burada uzun ömürlü olmuyor.",
    services: ["sera-elektrik-sulama", "uzaktan-kumanda-otomasyon", "tarimsal-sulama-sistemleri"],
    intro:
      "Serada elektrik tesisatı, konuttakinden farklı koşullarda çalışıyor: sürekli yüksek nem, gübre ve kimyasal buharı, su teması. Standart malzeme burada birkaç sezonda bitiyor.",
    body: [
      { h2: "Malzeme seçimi" },
      { p: "Buat, priz ve anahtarların en az IP65 sınıfında olması gerekiyor. Metal gövdeli ekipman korozyona uğradığı için plastik gövde tercih ediliyor." },
      { p: "Kablo güzergâhları mümkün olduğunca yüksekten ve damlama olmayacak şekilde planlanıyor. Kablo kanalı yerine koruge boru kullanmak nem girişini azaltıyor." },

      { h2: "Kaçak akım koruması" },
      { p: "Nemli ortamda kaçak akım riski çok yüksek. Kaçak akım rölesi burada tartışılmaz bir zorunluluk." },
      { p: "Ayrıca hatları bölgelere ayırmak gerekiyor; tek röleye bağlı tüm sera, bir arızada tamamen karanlıkta kalıyor ve sulama duruyor." },

      { h2: "Topraklama" },
      { p: "Metal konstrüksiyonlu seralarda karkasın topraklanması gerekiyor. Nemli zeminde insan-metal teması riski yüksek." },
      { p: "Topraklama direnci ölçülüp kayıt altına alınıyor. Bu ölçümü teslimde size veriyoruz." },

      { h2: "Sulama otomasyonu" },
      { p: "Zon vanaları, kontrol ünitesi ve gerekiyorsa nem sensörü. Otomasyon, sulamayı bitkinin ihtiyacına göre yapmayı sağlıyor." },
      { p: "Gübreli sulama (fertigasyon) yapılacaksa dozaj pompası ve karışım tankı sisteme entegre ediliyor. Böyle olunca filtreleme daha da kritik." },

      { h2: "Havalandırma ve ısıtma kontrolü" },
      { p: "Yan perde ve tepe pencere motorları, sıcaklık sensörüne bağlı olarak otomatik çalışabiliyor. Bu, seranın iç iklimini dengeliyor." },
      { p: "Motorların panosunda faz koruma ve termik koruma bulunması gerekiyor. Sıkışan bir perde motoru, koruma yoksa kısa sürede yanıyor." },

      { h2: "Uzaktan kontrol" },
      { p: "GSM ya da WiFi modülüyle sulama ve havalandırma uzaktan izlenip kontrol edilebiliyor. Arıza ve enerji kesintisi bildirimi de alınabiliyor." },
      { p: "Burada bizim kuralımız net: korumasız bir sisteme sadece uzaktan kumanda takmıyoruz. Önce koruma ekipmanı, sonra uzaktan kontrol." },
    ],
    faqs: [
      { q: "Sera tesisatı ne sıklıkla kontrol edilmeli?", a: "Sezon başında bir kez tam kontrol öneriyoruz: buat contaları, kaçak akım rölesi testi, topraklama ve motor korumaları." },
      { q: "Uzaktan kumanda sistemi internet olmadan çalışır mı?", a: "GSM tabanlı sistemler SIM kart ile çalışıyor, internet altyapısı gerekmiyor. RF kumandalı sistemler ise kısa mesafede internetsiz çalışıyor." },
      { q: "Elektrik kesilirse sulama durur mu?", a: "Durur. Kritik dönemlerde jeneratör ya da güneş enerjili yedek çözüm değerlendirilebiliyor; kesinti bildirimi de sistemden alınabiliyor." },
    ],
    related: ["gunes-enerjisiyle-sulama", "otomatik-sulama-kurulumu", "ic-mekan-priz-plani"],
  },

  {
    slug: "ic-mekan-priz-plani",
    title: "Priz planı: kaç tane, nereye, hangi yükseklikte?",
    category: "Elektrik",
    published: "2026-05-04",
    updated: "2026-06-08",
    reading: 5,
    metaTitle: "Priz Planı: Sayı, Konum ve Yükseklik Rehberi",
    metaDesc:
      "Oda oda priz sayısı, tezgâh üstü ve yatak başı yükseklikleri, ayrı hat gerektiren cihazlar ve yedek pay.",
    keywords: ["priz planı", "priz yüksekliği", "priz sayısı", "elektrik projesi", "ayrı hat"],
    excerpt: "Priz planı tadilatın en ucuz ama en çok pişmanlık yaratan kalemi. Sonradan eklemek duvar açmak demek.",
    services: ["priz-tamiri", "elektrik-tesisati", "daire-tadilati"],
    intro:
      "Tadilat bittikten sonra en çok duyduğumuz cümle: \"keşke şuraya bir priz daha koysaydık\". Priz maliyeti tadilat içinde çok küçük bir kalem; sonradan eklemek ise duvar açmak demek.",
    body: [
      { h2: "Oda oda öneri" },
      { ul: [
        "Salon: TV ünitesi arkası 4–6, oturma grubu yanları 2×2, genel 2",
        "Yatak odası: yatak başı 2×2, çalışma/makyaj 2, genel 2",
        "Mutfak: tezgâh üstü 4–6, ankastre için ayrı hatlar, buzdolabı ayrı",
        "Banyo: ayna/lavabo yanı 1–2 (korumalı), çamaşır makinesi ayrı",
        "Antre-koridor: 1–2 (süpürge ve şarj için)",
        "Balkon: 1 korumalı priz",
      ] },
      { p: "Bunlar başlangıç noktası; yerleşim planınıza göre ayarlıyoruz." },

      { h2: "Yükseklikler" },
      { p: "Genel prizler zeminden 30–40 cm. Tezgâh üstü prizler tezgâhtan 15–20 cm yukarıda. Yatak başı prizleri, komodin yüksekliğinin biraz üstünde." },
      { p: "TV arkası prizler, askı yüksekliğine göre belirlenmeli; ekranın arkasında kalacak şekilde. Kablo geçişi için boş boru da bırakılıyor." },

      { h2: "Ayrı hat gerektirenler" },
      { p: "Fırın, ankastre ocak, bulaşık makinesi, çamaşır makinesi, kurutucu, elektrikli su ısıtıcısı ve klima; bunlar panodan ayrı hatla beslenmeli." },
      { p: "Aynı hatta bağlandıklarında sigorta atmaya başlıyor. Bu, sonradan çözülmesi en zor sorunlardan biri." },

      { h2: "Banyoda kurallar" },
      { p: "Banyoda priz konumu, su kaynaklarına mesafeye göre kurala bağlı. Duş ve küvet yakınına priz konmuyor." },
      { p: "Banyo hattı mutlaka kaçak akım korumalı olmalı. Havlupanın elektrikli modeli kullanılacaksa besleme ayrıca planlanıyor." },

      { h2: "USB ve ağ prizleri" },
      { p: "USB'li prizler pratik ama teknoloji hızlı değişiyor; birkaç noktayla sınırlı tutmak mantıklı. Yatak başı ve çalışma masası en çok işe yarayan yerler." },
      { p: "Ağ prizi, WiFi'ye rağmen hâlâ değerli: TV, oyun konsolu ve çalışma masası için. Boş boru bırakmak en azından ileride çekim imkânı sağlıyor." },

      { h2: "Yedek pay" },
      { p: "Planladığınız sayının yaklaşık yüzde 20 fazlasını koymanızı öneriyoruz. Bir prizin ek maliyeti çok düşük." },
      { p: "Ayrıca panoda da boş yer bırakıyoruz. İleride bir hat eklenmesi gerektiğinde panonun tamamen değişmesi gerekmesin diye." },
    ],
    faqs: [
      { q: "Çoklu priz kullanmak zararlı mı?", a: "Düşük güçlü cihazlar için sorun değil. Isıtıcı, ütü, elektrikli soba gibi yüksek çekişli cihazlar doğrudan duvar prizinden çalıştırılmalı." },
      { q: "Sonradan priz eklenebilir mi?", a: "Eklenebiliyor ama duvar açmak ya da kablo kanalı kullanmak gerekiyor. Alçıpan duvarda çok daha kolay; tuğla duvarda sıva ve boya onarımı da devreye giriyor." },
      { q: "Priz markası fark eder mi?", a: "Mekanizma kalitesi fark ediyor. Ucuz mekanizmaların yaylı temasları kısa sürede gevşiyor; gevşek temas ısınma demek. Marka değil, mekanizma sınıfına bakmak gerekiyor." },
    ],
    related: ["ic-mekan-aydinlatma-planlama", "daire-tadilati-is-sirasi", "priz-neden-isinir"],
  },

  {
    slug: "su-kacagi-nasil-bulunur-blog",
    title: "Su kaçağı nasıl bulunur? Duvarı açmadan tespit",
    category: "Sıhhi Tesisat",
    published: "2026-05-18",
    updated: "2026-06-09",
    reading: 5,
    metaTitle: "Su Kaçağı Tespiti: Duvar Açmadan Nasıl Bulunur?",
    metaDesc:
      "Termal kamera, akustik dinleme ve basınç testi ile su kaçağı tespiti. Evde yapabileceğiniz ön kontroller.",
    keywords: ["su kaçağı tespiti", "termal kamera", "akustik dinleme", "basınç testi", "su kaçağı"],
    excerpt: "Kaçak tespitinde amaç kaçağı bulmak değil; duvarı en az yerden açarak bulmak. Yöntemler ve ön kontroller.",
    services: ["su-kacagi-tespiti", "sihhi-tesisat", "bina-tesisat-yenileme"],
    intro:
      "Su kaçağında en pahalı kalem çoğu zaman onarım değil, kaçağı ararken açılan duvarlar. Doğru tespit, bu maliyeti ciddi biçimde düşürüyor.",
    body: [
      { h2: "Önce şu kontrolü yapın" },
      { p: "Evdeki tüm muslukları kapatın ve su sayacını izleyin. Sayaç dönmeye devam ediyorsa tesisatta kaçak var demektir." },
      { p: "Sayaç durursa kaçak yok; nem başka bir kaynaktan (yoğuşma, dış cephe) geliyor olabilir. Bu tek kontrol, işin yönünü tamamen değiştiriyor." },

      { h2: "Rezervuar testi" },
      { p: "Kaçakların azımsanmayacak kısmı klozet rezervuarından. Rezervuara birkaç damla gıda boyası damlatın; boya klozete geçiyorsa iç takım sızdırıyor demektir." },
      { p: "Bu, sessiz ve fark edilmeyen bir su kaybı. Onarımı basit ve ucuz; faturaya etkisi ise şaşırtıcı olabiliyor." },

      { h2: "Termal kamera" },
      { p: "Sıcak su hattındaki kaçaklarda çok etkili; sıcak su duvarda ısı izi bırakıyor. Soğuk su hatlarında ise buharlaşma nedeniyle oluşan soğuma izlenebiliyor." },
      { p: "Görüntü doğrudan sonuç vermiyor; yorumlanması gerekiyor. Isıtma hatları ve güneş alan duvarlar yanıltıcı izler oluşturabiliyor." },

      { h2: "Akustik dinleme" },
      { p: "Basınçlı hattan sızan su, borularda ve zeminde belirli bir frekansta ses üretiyor. Yer mikrofonuyla bu ses dinlenip kaynak noktası daraltılıyor." },
      { p: "Basınç ne kadar yüksekse ses o kadar net. Dolayısıyla tespit sırasında hat basınçlandırılıyor." },

      { h2: "Basınç testi" },
      { p: "Hat izole edilip basınç altına alınıyor ve manometre izleniyor. Basınç düşüyorsa o hatta kaçak var demektir." },
      { p: "Bu yöntem kaçağın hangi hatta olduğunu kesinleştiriyor; hangi noktada olduğunu ise akustik ve termal yöntemler daraltıyor. Üçü birlikte kullanılıyor." },

      { h2: "Onarım sonrası" },
      { p: "Kaçak giderildikten sonra duvarın kuruması bekleniyor; nem ölçümü yapılmadan sıva ve boyaya geçilmiyor." },
      { p: "Onarım noktasının fotoğrafı ve hattın güzergâhı size veriliyor. İleride aynı bölgede iş yapılacaksa bu bilgi işe yarıyor." },
    ],
    faqs: [
      { q: "Kaçak tespiti duvarı kırmadan yapılabilir mi?", a: "Tespit aşaması kırmadan yapılıyor. Onarım için sadece kaçağın olduğu nokta açılıyor; amaç en az yerden açmak." },
      { q: "Alt komşuda leke var, kaynak bende mi?", a: "Mutlaka değil. Kaynak sizin daireniz, kolon hattı ya da üst kat olabiliyor. Tespit bunu netleştiriyor; sorumluluk buna göre belirleniyor." },
      { q: "Tespit ne kadar sürer?", a: "Çoğu dairede 1–3 saat. Karmaşık ve çok katlı yapılarda hat izolasyonu gerektiği için uzayabiliyor." },
    ],
    related: ["hidrofor-basinc-sorunu", "banyo-tadilatinda-su-yalitimi", "cepheden-nem-alan-duvar"],
  },
];
