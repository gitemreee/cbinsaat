// Blog: pompa, sulama, yapı ve aydınlatma konulu yazılar.

export const yapiPosts = [
  {
    slug: "hidrofor-secimi-nasil-yapilir",
    title: "Bina için hidrofor seçimi nasıl yapılır?",
    category: "Pompa",
    published: "2025-06-03",
    updated: "2026-04-22",
    reading: 8,
    metaTitle: "Bina İçin Hidrofor Seçimi | Debi ve Basınç Hesabı",
    metaDesc:
      "Kat sayısı, daire sayısı, debi ve basma yüksekliği hesabı. Hidrofor seçiminde doğru boyutlandırmanın kuralları ve sık yapılan hatalar.",
    keywords: ["hidrofor seçimi", "basma yüksekliği hesabı", "debi hesabı", "apartman hidroforu", "frekans kontrollü hidrofor"],
    excerpt: "Katalogtaki en büyük değerler değil, sizin sisteminizin çalışma noktası önemlidir. Debi ve basma yüksekliğini doğru hesaplama rehberi.",
    services: ["hidrofor-pompa-sistemleri", "hidrofor-tamiri", "mekanik-tesisat"],
    intro:
      "Pompa seçiminde tek bir kural var: debi ve basma yüksekliği doğru hesaplanmadan alınan pompa ya yetersiz kalır ya da gereğinden fazla enerji harcar. İkisi de pahalıya patlar.",
    body: [
      { h2: "Basma yüksekliği nasıl hesaplanır?" },
      { p: "Basma yüksekliği (metre cinsinden) üç bileşenin toplamıdır:" },
      { ul: [
        "Statik yükseklik: suyun alındığı seviye ile en üst kullanım noktası arasındaki kot farkı",
        "Sürtünme kaybı: boru çapı, uzunluğu ve dirsek sayısına bağlı kayıp (tipik olarak statik yüksekliğin %20–30'u)",
        "Kullanım basıncı: musluğun rahat çalışması için gereken 15–20 metre ek değer",
      ] },
      { p: "Örnek: bodrumdaki depodan 5. kata su basılacaksa statik yükseklik yaklaşık 18 metre olur. Sürtünme kaybı 5 metre, kullanım basıncı 18 metre eklenirse toplam 41 metre basma yüksekliği gerekir. Katalogdan bu değeri istenen debide sağlayan pompa seçilir." },

      { h2: "Debi ve eşzamanlılık" },
      { p: "Tüm muslukların aynı anda açılmayacağı varsayımıyla, toplam ihtiyacın belirli bir oranı hesaba katılır. Buna eşzamanlılık denir ve daire sayısı arttıkça oran düşer." },
      {
        table: {
          head: ["Daire sayısı", "Yaklaşık debi ihtiyacı", "Not"],
          rows: [
            ["4–8 daire", "3–5 m³/saat", "Küçük apartman, tek pompa yeterli"],
            ["8–16 daire", "5–8 m³/saat", "Yedekli grup önerilir"],
            ["16–30 daire", "8–14 m³/saat", "İki veya üç pompalı grup"],
            ["30+ daire", "14 m³/saat üzeri", "Frekans kontrollü grup, kademeli devreye alma"],
          ],
        },
      },
      { p: "Bu değerler başlangıç noktasıdır; daire başına kişi sayısı, kullanım alışkanlığı ve bina tipi hesaba katılarak kesinleştirilir." },

      { h2: "Büyük pompa neden zararlı?" },
      { p: "\"Ne kadar büyük o kadar iyi\" yaklaşımı pompa seçiminde yanlıştır. Gereğinden büyük pompa, çalışma noktasının dışında çalışır; verimi düşer, titreşim ve su darbesi artar, elektrik tüketimi yükselir." },
      { p: "Ayrıca aşırı basınç, armatür ve tesisat bağlantılarını zorlar. Üst katlarda konfor sağlanırken alt katlarda musluklar fışkırıyorsa, bu doğru boyutlandırmanın değil aşırı boyutlandırmanın göstergesidir. Bu durumda kat bazlı basınç düşürücü kullanılması gerekir." },

      { h2: "Frekans kontrollü (invertörlü) sistem" },
      { p: "Klasik sistemde pompa açılıp kapanarak basıncı belirli bir aralıkta tutar. Frekans kontrollü sistemde ise pompa devrini ayarlayarak sabit basınç tutar; açılıp kapanma neredeyse biter." },
      {
        table: {
          head: ["", "Klasik hidrofor", "Frekans kontrollü"],
          rows: [
            ["Basınç", "Aralıkta dalgalanır", "Sabit"],
            ["Gürültü", "Ani kalkış ve duruş sesi", "Yumuşak, sessiz"],
            ["Elektrik tüketimi", "Yüksek", "Belirgin düşük"],
            ["Su darbesi", "Var", "Yok denecek kadar az"],
            ["İlk maliyet", "Düşük", "Yüksek"],
          ],
        },
      },
      { p: "Apartmanlarda ve basınç dalgalanmasından rahatsız olunan yerlerde fark hemen hissedilir. İlk maliyeti yüksektir ancak elektrik tasarrufu ve pompa ömrü üzerinden orta vadede kendini amorti eder." },

      { h2: "Yedekli çalışma" },
      { p: "Apartman, otel, yurt ve üretim tesislerinde tek pompa yerine iki pompalı grup öneriyoruz. Pompalar dönüşümlü çalışır; biri arızalandığında diğeri devreye girer ve yoğun talep anında ikisi birlikte kapasiteyi artırır." },
      { p: "Bina yönetimi açısından en değerli kazanım şudur: bir pompa arızalandığında bina susuz kalmaz ve onarım planlı olarak yapılabilir." },

      { h2: "Kurulumda dikkat edilenler" },
      { ul: [
        "Emiş hattı, basma hattından bir çap büyük seçilir",
        "Emiş tarafında hava sızdıracak bağlantı bulunmamalı",
        "Titreşim takozu ve esnek bağlantı elemanı kullanılır",
        "Kuru çalışma koruması mutlaka takılır",
        "Basınç tankı hacmi pompa kapasitesine uygun seçilir",
        "Pano faz koruma rölesi içermelidir",
      ] },
      { p: "Bu kalemlerin toplam maliyeti pompanın küçük bir yüzdesidir; buna karşılık en sık görülen arıza nedenlerinin çoğunu önler." },
    ],
    faqs: [
      { q: "Mevcut hidroforumu invertörle güncelleyebilir miyim?", a: "Çoğu üç fazlı pompa frekans invertörüyle kontrol edilebilir. Motorun invertöre uygunluğu, basınç sensörü ilavesi ve pano düzenlemesi gerekir. Mevcut sistem üzerinde uygulanabilirliğini keşifte değerlendiriyoruz." },
      { q: "Hidrofor kaç yıl kullanılır?", a: "Bakımlı bir hidrofor 10–15 yıl çalışabilir. Ömrü en çok etkileyen faktör devreye girme sayısıdır; basınç tankı bakımı yapılan bir sistemde bu sayı epey düşer ve ömür uzar." },
    ],
    related: ["hidrofor-surekli-calisiyor", "su-deposu-hidrofor-birlikte", "dalgic-pompa-calismiyor"],
  },

  {
    slug: "dalgic-pompa-calismiyor",
    title: "Dalgıç pompa neden çalışmaz? Adım adım kontrol",
    category: "Pompa",
    published: "2025-07-22",
    updated: "2026-03-11",
    reading: 7,
    metaTitle: "Dalgıç Pompa Çalışmıyor | Nedenleri ve Kontrol Sırası",
    metaDesc:
      "Enerji, seviye şalteri, pano, motor ve mekanik sıkışma. Dalgıç pompa arızalarında kontrol sırası ve en sık karşılaşılan nedenler.",
    keywords: ["dalgıç pompa çalışmıyor", "kuyu pompası arızası", "kuru çalışma", "faz koruma", "pompa panosu"],
    excerpt: "Kuyudan pompa çıkarmadan önce yapılabilecek kontroller var. Sırasıyla nereye bakılır ve arızaların çoğu neden elektrikseldir?",
    services: ["hidrofor-pompa-sistemleri", "elektrik-panosu", "tarimsal-sulama-sistemleri"],
    intro:
      "Dalgıç pompa arızalarında ilk refleks pompayı kuyudan çıkarmak oluyor. Halbuki arızaların önemli bölümü elektriksel ve pompa hiç çıkarılmadan çözülebiliyor.",
    body: [
      { h2: "Kontrol sırası: dıştan içe" },
      { ol: [
        "Enerji var mı? Panoya gelen gerilim ölçülür, sigortalar kontrol edilir.",
        "Koruma elemanları attı mı? Termik, faz koruma rölesi ve kuru çalışma koruması incelenir.",
        "Kumanda devresi çalışıyor mu? Kontaktör çekiyor mu, kontrol devresi sağlam mı?",
        "Motora gerilim gidiyor mu? Kontaktör çıkışında üç fazın da olduğu doğrulanır.",
        "Motor sargıları sağlam mı? Direnç ve izolasyon ölçümü yapılır.",
        "Mekanik sorun var mı? Ancak bu adımlardan sonra pompa çıkarılır.",
      ] },
      { p: "Bu sıra izlendiğinde çağrıların önemli bölümü ilk üç adımda çözülüyor. Pompa çıkarmak hem zaman hem maliyet açısından pahalı bir işlem; son çare olmalı." },

      { h2: "En sık nedenler" },
      {
        table: {
          head: ["Neden", "Belirti", "Çözüm"],
          rows: [
            ["Faz kaybı", "Motor uğulduyor, dönmüyor", "Sigorta, kontaktör ve besleme kontrolü"],
            ["Kuru çalışma", "Koruma atmış, pompa durmuş", "Su seviyesi kontrolü, koruma ayarı"],
            ["Kondansatör (tek faz)", "Kalkmıyor, ısınıyor", "Kondansatör değişimi"],
            ["Kontaktör arızası", "Kumanda var, motora gerilim yok", "Kontaktör değişimi"],
            ["Motor sargısı yanmış", "İzolasyon direnci düşük", "Motor sarımı veya pompa değişimi"],
            ["Çark sıkışması", "Motor zorlanıyor, termik atıyor", "Pompa çıkarılıp temizlenir"],
          ],
        },
      },

      { h2: "Kuru çalışma: en yaygın ve en önlenebilir" },
      { p: "Kuyunun su seviyesi düştüğünde pompa susuz kalır. Su, dalgıç pompada hem soğutucu hem yağlayıcı görevi görür; olmadığında salmastra ve çark birkaç dakika içinde zarar görür, motor sargısı yanabilir." },
      { p: "Bunu önleyen basit ve ucuz elemanlar var: seviye elektrodu, seviye şalteri veya akım izlemeli koruma. Hiçbiri pompanın maliyetinin küçük bir yüzdesinden fazla değil." },
      { quote: "Kuru çalışma koruması olmayan bir dalgıç pompa, kuyu seviyesi düştüğünde kendini yakar. Bu, en sık gördüğümüz ve en kolay önlenebilir pompa arızası." },

      { h2: "Kablo kesiti ve gerilim düşümü" },
      { p: "Derin kuyularda kablo uzunluğu 50–150 metreyi bulur. Bu mesafede gerilim düşümü kaçınılmazdır; kesit yetersizse motor düşük gerilimde çalışır, akım artar ve zamanla sargı yanar." },
      { p: "Kesit hesabı kuyu derinliği, motor gücü ve kabul edilebilir gerilim düşümüne (genelde %3–5) göre yapılır. Kesitten yapılan tasarruf, ilk yıl içinde motor değişimi olarak geri dönüyor." },

      { h2: "Faz koruma rölesi" },
      { p: "Üç fazlı bir motorda fazlardan biri kaybolursa, motor iki faz üzerinden çalışmaya devam eder ve aşırı akım çeker. Termik koruma bunu her zaman yeterince hızlı algılayamaz." },
      { p: "Faz koruma rölesi; faz kaybı, faz sırası hatası ve düşük gerilim durumlarında motoru anında durdurur. Tarımsal ve kırsal hatlarda gerilim dalgalanması yaygın olduğu için bu röle zorunlu kabul edilmeli." },

      { h2: "Pompayı çıkarmadan önce son kontrol" },
      { p: "Elektriksel kontroller temizse ve pompa hâlâ çalışmıyorsa, çıkarmadan önce izolasyon direnci ölçülür. Motor sargısının toprağa karşı direnci düşük çıkıyorsa sargı ıslanmış veya yanmış demektir; bu bilgi çıkarma öncesi yedek parça hazırlığı yapmayı sağlar." },
      { p: "Böylece pompa çıkarıldığında iş tek seferde tamamlanır; ikinci bir vinç veya ekip gerekmez." },
    ],
    faqs: [
      { q: "Pompa çalışıyor ama su gelmiyor, neden?", a: "Kuyu su seviyesi pompanın emiş noktasının altına düşmüş olabilir, çark aşınmıştır veya çıkış hattında bir tıkanma ya da kapalı vana vardır. Ayrıca çekvalf takılı kalmışsa da su gelmez. Sırayla kontrol edilmeli." },
      { q: "Pompa sık sık termikten atıyor, ne yapmalıyım?", a: "Termik ayarı motor etiket akımına göre kontrol edilmeli. Ayar doğruysa neden aşırı yüktür: gerilim düşümü, faz dengesizliği, mekanik sıkışma veya pompanın çalışma noktasının dışında zorlanması. Ölçümle ayırt edilir." },
    ],
    related: ["kuru-calisma-korumasi", "dalgic-pompa-kablo-kesiti", "dalgic-pompa-kuyudan-cikarma", "kuyu-pompasi-basinc-sorunu", "hidrofor-secimi-nasil-yapilir"],
  },

  {
    slug: "kuyu-pompasi-basinc-sorunu",
    title: "Kuyu pompasında basınç neden düşer?",
    category: "Pompa",
    published: "2025-08-26",
    updated: "2026-05-19",
    reading: 6,
    metaTitle: "Kuyu Pompasında Basınç Düşmesi | Nedenleri",
    metaDesc:
      "Su seviyesi, pompa aşınması, boru kaçağı ve elektriksel sorunlar. Kuyu pompasında basınç düşmesinin nedenleri ve tespit yöntemleri.",
    keywords: ["kuyu pompası basınç", "su seviyesi düştü", "pompa aşınması", "dinamik su seviyesi", "kuyu verimi"],
    excerpt: "Aynı pompa dün yeterken bugün neden yetmiyor? Basınç düşüşünün dört ana nedeni ve hangisinin sizde olduğunu anlama yolu.",
    services: ["hidrofor-pompa-sistemleri", "tarimsal-sulama-sistemleri", "hidrofor-tamiri"],
    intro:
      "Kuyu pompasında basınç düşüşü genelde tek bir olaya değil, yavaş ilerleyen bir sürece işaret eder. Nedeni bulmak için önce sorunun kuyuda mı pompada mı hatta mı olduğunu ayırmak gerekir.",
    body: [
      { h2: "1. Kuyu su seviyesi düşmüş olabilir" },
      { p: "Kuyularda iki seviye vardır: statik seviye (pompa çalışmazken) ve dinamik seviye (pompa çalışırken). Pompa çektikçe seviye düşer; kuyu verimi düşükse bu düşüş fazla olur ve pompa yeterli suyu bulamaz." },
      { p: "Kurak dönemlerde ve yoğun sulama sezonunda bölgedeki yeraltı su seviyesi genel olarak düşer. Bu durumda pompa arızalı değildir; çalışma koşulu değişmiştir. Çözüm, pompanın daha derine indirilmesi veya çalışma programının değiştirilmesi olabilir." },

      { h2: "2. Pompa aşınması" },
      { p: "Su içindeki kum ve partiküller, çarkı ve difüzörü zamanla aşındırır. Aşınan çark aynı devirde daha az basınç üretir. Bu, yavaş ilerleyen bir süreçtir ve kullanıcı çoğu zaman fark etmez, basınç aylar içinde azalır." },
      { p: "Kumlu kuyularda bu aşınma çok daha hızlıdır. Kuyu ağzında kum tutucu kullanılması, pompa ömrünü ciddi oranda uzatıyor." },

      { h2: "3. Boru hattı kaçağı" },
      { p: "Kuyudan çıkan dikey hat veya arazi içindeki yatay hat üzerinde bir kaçak varsa, pompanın bastığı suyun bir kısmı hedefe ulaşmadan kaybolur. Belirtisi tipiktir: pompa normal çalışıyor gibi görünür ama uçtaki basınç düşüktür." },
      { p: "Arazi hatlarında kaçak, toprağın belirli bir noktasının sürekli ıslak kalmasıyla veya bitki örtüsünün orada daha yeşil olmasıyla kendini gösterir. Kuyu içindeki dikey hatta kaçak varsa tespit daha zordur ve pompa çıkarılması gerekebilir." },

      { h2: "4. Elektriksel nedenler" },
      { p: "Gerilim düşümü, motorun devrini düşürür ve pompa daha az basınç üretir. Uzun kablo mesafeleri, yetersiz kesit ve arazi hatlarındaki düşük gerilim bu duruma yol açar." },
      { p: "Kontrol basittir: pompa çalışırken pano girişindeki gerilim ölçülür. Nominal değerin %10'undan fazla düşük ise sorun elektrikseldir ve kesit veya besleme tarafında çözüm aranmalıdır." },

      { h2: "Ayırt etme yöntemi" },
      {
        table: {
          head: ["Belirti", "Muhtemel neden"],
          rows: [
            ["Basınç yavaşça, aylar içinde düştü", "Pompa aşınması"],
            ["Sezonluk olarak düşüyor, kışın normal", "Kuyu su seviyesi"],
            ["Pompa çıkışında basınç iyi, uçta düşük", "Hat kaçağı veya çap yetersizliği"],
            ["Pompa zorlanıyor, akım yüksek", "Gerilim düşümü veya mekanik sıkışma"],
            ["Aralıklı olarak kesiliyor", "Kuru çalışma koruması devreye giriyor"],
          ],
        },
      },

      { h2: "Ölçüm neyi değiştirir?" },
      { p: "Tahminle karar vermek, bu tür arızalarda en pahalı yol. Pompa çıkışında basınç ölçümü, hat sonunda basınç ölçümü, çalışma akımı ve besleme gerilimi ölçümü. Bu dört değer birlikte alındığında neredeyse her zaman nedeni ortaya koyuyor." },
      { p: "Ölçüm yapmadan pompa değiştirildiğinde, sorun kuyuda veya hatta ise yeni pompa da aynı performansı verir ve para boşa gider. Bu, sahada sık gördüğümüz bir durum." },
    ],
    faqs: [
      { q: "Pompayı daha derine indirmek çözüm mü?", a: "Kuyu derinliği ve su seviyesi uygunsa evet, ancak pompanın kuyu dibine çok yaklaşması kum çekmesine yol açar. Genel uygulama, pompayı kuyu dibinden birkaç metre yukarıda konumlandırmaktır. Kuyu logu varsa karar kolaylaşır." },
      { q: "Kumlu su pompaya zarar verir mi?", a: "Evet, en hızlı aşındırıcı etkendir. Kum tutucu kullanmak, pompayı doğru kotta konumlandırmak ve kuyu temizliği yaptırmak bu etkiyi azaltır." },
    ],
    related: ["dalgic-pompa-calismiyor", "tarimsal-sulama-pompa-secimi", "hidrofor-secimi-nasil-yapilir"],
  },

  {
    slug: "tarimsal-sulama-pompa-secimi",
    title: "Tarımsal sulama için pompa nasıl seçilir?",
    category: "Sulama",
    published: "2025-09-16",
    updated: "2026-04-08",
    reading: 9,
    metaTitle: "Tarımsal Sulama Pompası Seçimi | Debi, Basınç, Zon",
    metaDesc:
      "Kuyu verimi, hat uzunluğu, kot farkı ve sulama debisinin pompa seçimine etkisi. Zonlama, filtreleme ve koruma elemanları rehberi.",
    keywords: ["sulama pompası seçimi", "damlama sulama pompası", "kuyu verimi", "zonlama", "sulama debisi"],
    excerpt: "Sulama sisteminin başarısı hattan önce pompada belirlenir. Debi, basınç ve zon sayısının nasıl hesaplandığı.",
    services: ["tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri", "elektrik-panosu"],
    intro:
      "Sulama sistemi tasarımı su kaynağıyla başlar, hatla değil. Kuyunun verimi ve suyun kalitesi bilinmeden seçilen pompa, sezon ortasında yetersiz kalır.",
    body: [
      { h2: "Önce su kaynağı" },
      { p: "Kuyu kullanılacaksa üç değer bilinmelidir: kuyu verimi (saatte kaç m³ su verebiliyor), statik ve dinamik su seviyesi. Bu değerler kuyu açılırken yapılan denemede belirlenir; yoksa bir pompa testi ile ölçülebilir." },
      { p: "Şebeke veya kanal suyu kullanılacaksa basıncın ve sürekliliğin ölçülmesi gerekir. Gölet ve akarsu suyunda ise filtreleme ihtiyacı baştan hesaba katılmalıdır." },

      { h2: "Su ihtiyacını hesaplamak" },
      { p: "Bitki türü ve alan büyüklüğü, günlük su ihtiyacını belirler. Kabaca, damlama sulamada dekar başına günlük ihtiyaç yaz aylarında 3–6 m³ arasında değişir; ağaç yaşı ve iklim koşullarına göre bu değer artabilir." },
      { p: "Bu ihtiyaç, günlük sulama süresine bölünerek gerekli debi bulunur. 20 dekarlık bir kayısı bahçesinde günlük 80 m³ su gerekiyorsa ve günde 8 saat sulama yapılacaksa, sistemin saatte 10 m³ debi vermesi gerekir." },

      { h2: "Zonlama: pompayı büyütmeden alanı büyütmek" },
      { p: "Pompanın verebileceği debi sınırlıdır. Tüm bahçeyi aynı anda sulamak istendiğinde her damlatıcıya düşen debi azalır ve uzak noktalara su ulaşmaz." },
      { p: "Zonlama, araziyi pompanın kapasitesine uygun bölümlere ayırıp sırayla sulamaktır. Böylece daha küçük ve daha ucuz bir pompa ile aynı alan sulanabilir. Otomasyon panosu zonları sırayla çalıştırdığında bu işlem insansız yürür." },
      {
        table: {
          head: ["Yaklaşım", "Pompa", "Süre", "Maliyet"],
          rows: [
            ["Tek zon, tüm alan", "Büyük ve pahalı", "Kısa", "Yüksek yatırım + yüksek elektrik"],
            ["3–4 zon, sıralı", "Orta boy", "Uzun (gece yapılabilir)", "Düşük yatırım + düşük elektrik"],
          ],
        },
      },
      { p: "Gece sulaması hem buharlaşma kaybını azaltıyor hem de elektrik tarifesinden yararlanma imkânı veriyor. Bu nedenle zonlu sistem çoğu durumda daha avantajlı." },

      { h2: "Basınç hesabı" },
      { p: "Damlama sulamada damlatıcıların çalışma basıncı genelde 1–1,5 bar civarındadır. Buna hat sürtünme kayıpları, filtre kaybı ve kot farkı eklenerek pompa çıkış basıncı belirlenir." },
      { ul: [
        "Damlatıcı çalışma basıncı: ~1–1,5 bar",
        "Filtre kaybı: 0,3–0,5 bar (kirlendikçe artar)",
        "Ana hat ve manifold kaybı: hat uzunluğuna göre 0,3–1 bar",
        "Kot farkı: her 10 metre yükseklik = 1 bar",
      ] },
      { p: "Eğim aşağı yönde ise basınç fazlalığı oluşur ve damlatıcılar zorlanır; bu durumda basınç düzenleyici kullanılması gerekir." },

      { h2: "Filtreleme: sistemin ömrü" },
      { p: "Damlatıcı delikleri milimetrenin altındadır; en küçük partikül bile zamanla tıkanmaya yol açar. Filtre istasyonu, sistemin en önemli ve en çok ihmal edilen parçasıdır." },
      {
        table: {
          head: ["Su kaynağı", "Ana sorun", "Uygun filtre"],
          rows: [
            ["Derin kuyu", "İnce kum, silt", "Hidrosiklon + eleman filtre"],
            ["Gölet / kanal", "Yosun, organik madde", "Kum (medya) filtre + eleman filtre"],
            ["Şebeke", "Kireç, düşük partikül", "Eleman filtre"],
          ],
        },
      },

      { h2: "Koruma elemanları" },
      { p: "Tarımsal sulamada pompa arızalarının önemli bölümü elektrikseldir: faz kaybı, düşük gerilim, kuru çalışma ve yıldırım kaynaklı hasar. Arazi hatlarında gerilim dalgalanması şehir içinden çok daha yaygın." },
      { ul: [
        "Faz koruma rölesi ve düşük gerilim koruması",
        "Kuru çalışma koruması (seviye elektrodu veya akım izleme)",
        "Pano dış ortamda ise en az IP54 koruma sınıfı",
        "Topraklama ve parafudr",
        "Mesafeye göre hesaplanmış kablo kesiti",
      ] },
      { quote: "Bu kalemlerin toplam maliyeti pompanın küçük bir yüzdesi. Buna rağmen sezon ortasında yanan bir pompanın maliyeti sadece cihaz değil, kaybedilen sulama zamanıdır." },
    ],
    faqs: [
      { q: "Mevcut sistemimi genişletebilir miyim?", a: "Mevcut pompanın debi ve basınç değerleri yeni alan için yeterliyse hat ilavesi yapılabilir. Yeterli değilse ya pompa yükseltilir ya da zon sayısı artırılarak sıralı sulamaya geçilir. Ölçüm yaparak hangisinin uygun olduğunu söylüyoruz." },
      { q: "Güneş enerjili sulama pompası mantıklı mı?", a: "Şebeke elektriğinin olmadığı veya çok pahalıya çekileceği arazilerde belirgin avantaj sağlıyor. Sulama ihtiyacının güneşli saatlerle örtüşmesi de uygunluk açısından olumlu. Yatırım maliyeti yüksek olduğu için hesabın araziye özel yapılması gerekiyor." },
    ],
    related: ["damlama-sulama-tikaniklik", "kuyu-pompasi-basinc-sorunu", "otomatik-bahce-sulama"],
  },

  {
    slug: "damlama-sulama-tikaniklik",
    title: "Damlama sulama hattı neden tıkanır?",
    category: "Sulama",
    published: "2025-10-28",
    updated: "2026-05-27",
    reading: 6,
    metaTitle: "Damlama Sulama Tıkanması | Nedenleri ve Önleme",
    metaDesc:
      "Filtreleme, su kalitesi, basınç ve bakım eksikliklerinin damlatıcılara etkisi. Tıkanmayı önleme ve hat temizleme yöntemleri.",
    keywords: ["damlama sulama tıkanması", "damlatıcı tıkandı", "sulama filtresi", "hat yıkama", "asit uygulaması"],
    excerpt: "Damlatıcı delikleri milimetrenin altında. Tıkanmanın üç ana nedeni ve her biri için alınacak önlem.",
    services: ["tarimsal-sulama-sistemleri", "bahce-sulama", "hidrofor-pompa-sistemleri"],
    intro:
      "Damlama sulamanın en büyük avantajı hedefli su vermesi; en büyük zayıflığı ise tıkanmaya açık olması. İyi haber şu: tıkanmaların neredeyse tamamı önlenebilir.",
    body: [
      { h2: "Üç neden, üç farklı çözüm" },
      {
        table: {
          head: ["Tıkanma tipi", "Kaynak", "Çözüm"],
          rows: [
            ["Fiziksel", "Kum, silt, organik partikül", "Doğru filtreleme + hat yıkama"],
            ["Kimyasal", "Kireç, demir, mangan çökelmesi", "Asit uygulaması, su analizi"],
            ["Biyolojik", "Yosun, bakteri, kök girişi", "Klor uygulaması, kök bariyerli damlatıcı"],
          ],
        },
      },
      { p: "Hangi tipin baskın olduğunu anlamak için tıkalı bir damlatıcı kesilip içine bakmak yeterli olabilir: kum ve çamur fiziksel, beyaz sert kabuk kireç, kahverengi çamurumsu birikim demir, yeşilimsi kaygan tabaka biyolojik tıkanmaya işaret eder." },

      { h2: "Filtreleme: birinci savunma hattı" },
      { p: "Filtre seçimi su kaynağına göre yapılır. Kuyu suyunda ince kum sorunu için hidrosiklon ve eleman filtre; gölet veya kanal suyunda organik madde için kum (medya) filtre gerekir." },
      { p: "Filtrenin varlığı tek başına yetmez; temizlenmesi gerekir. Kirlenen filtre basınç kaybı yaratır ve bir noktadan sonra by-pass yaparak kirli suyu hatta geçirir. Otomatik geri yıkamalı sistemler bu işi kendisi yapar ve büyük alanlarda işçiliği bitirir." },

      { h2: "Hat sonu yıkaması" },
      { p: "Lateral hatların ucunda biriken partiküller zamanla son damlatıcıları tıkar. O yüzden hat uçlarında açılabilir kapaklar bırakılır ve sezon boyunca düzenli olarak hat yıkaması yapılır." },
      { ol: [
        "Sistemi normal basınçta çalıştırın",
        "Lateral hat uçlarını sırayla açın",
        "Çıkan su berraklaşana kadar akıtın (genelde 1–2 dakika)",
        "Uçları kapatın ve bir sonraki hatta geçin",
      ] },
      { p: "Bu işlem ayda bir yapıldığında tıkanma çağrılarının önemli bölümü bitiyor. Zaman maliyeti düşük, getirisi yüksek bir bakım." },

      { h2: "Kireç ve demir sorunu" },
      { p: "Sert sularda kalsiyum karbonat, damlatıcı çıkışında beyaz sert bir kabuk oluşturur. Demir içeriği yüksek sularda ise demir oksitlenerek kahverengi çamurumsu birikim yapar." },
      { p: "Kimyasal tıkanma önlenemez ama yönetilebilir. Sezon sonunda ve gerekirse sezon ortasında yapılan asit uygulaması, birikimi çözer. Uygulama ürün dozajına ve bekleme süresine dikkat edilerek yapılmalı; ardından hat bol suyla yıkanmalıdır." },
      { p: "Su analizi yaptırmak, hangi sorunla karşı karşıya olduğunuzu ve hangi bakım programının gerektiğini baştan gösterir. Bir kerelik ve düşük maliyetli bir işlem." },

      { h2: "Biyolojik tıkanma ve kök girişi" },
      { p: "Yosun ve bakteri filmi, özellikle yüzey suyu kullanılan sistemlerde sorun yaratır. Sistem kapalıyken hatta kalan su ve sıcaklık, bu oluşumu hızlandırır." },
      { p: "Kök girişi ise yeraltına gömülü damlama hatlarında görülür. Kökler nemi arayarak damlatıcıya yönelir ve deliği tıkar. Bunun için kök bariyerli (herbisit emdirilmiş) damlatıcılar üretilir; gömülü sistemlerde bu tip tercih edilmelidir." },

      { h2: "Sezon sonu bakımı" },
      { ul: [
        "Tüm hatları yıkayın ve uçları açık bırakarak boşaltın",
        "Filtreleri sökün, temizleyin ve kuru şekilde saklayın",
        "Gerekiyorsa asit veya klor uygulaması yapın",
        "Yerüstü hatlarında donma riskine karşı suyu tamamen tahliye edin",
        "Vana kutularını kontrol edin, su birikimi varsa tahliye edin",
        "Pompa ve panoyu nemden koruyacak şekilde kapatın",
      ] },
      { p: "Sezon sonunda yapılan bu bakım, ilkbaharda sistemin sorunsuz devreye alınmasını sağlıyor ve donma kaynaklı hasarların tamamını önlüyor." },
    ],
    faqs: [
      { q: "Tıkalı damlatıcıyı temizlemek mümkün mü?", a: "Az sayıda damlatıcı tıkalıysa iğne ile açmayı denemek yerine değiştirmek daha sağlıklı; iğne deliği genişletebilir ve debiyi bozar. Yaygın tıkanmada ise tek tek uğraşmak yerine kimyasal temizlik uygulanır." },
      { q: "Ne sıklıkla asit uygulaması yapmalıyım?", a: "Suyun sertliğine bağlı. Çok sert sularda sezonda 2–3 kez, orta sertlikte sezon sonunda bir kez yeterli olabilir. Su analizi sonucuna göre program çıkarıyoruz." },
    ],
    related: ["sulama-filtresi-secimi", "damlama-sulama-nasil-kurulur", "otomatik-bahce-sulama", "tarimsal-sulama-pompa-secimi"],
  },

  {
    slug: "otomatik-bahce-sulama",
    title: "Otomatik bahçe sulama sistemi nasıl kurulur?",
    category: "Sulama",
    published: "2026-03-10",
    updated: "2026-07-15",
    reading: 7,
    metaTitle: "Otomatik Bahçe Sulama Sistemi Kurulumu Rehberi",
    metaDesc:
      "Zonlama, vana, zamanlayıcı, sprinkler ve damlama hattı planlaması. Otomatik bahçe sulama sisteminin kurulum adımları ve kış hazırlığı.",
    keywords: ["otomatik bahçe sulama", "sprinkler sistemi", "sulama zamanlayıcısı", "bahçe sulama kurulumu", "pop-up sprinkler"],
    excerpt: "Hortumla sulamanın yerini alan sistem, bitki sağlığı için de daha iyi. Zon planlaması, kafa yerleşimi ve doğru sulama saati.",
    services: ["bahce-sulama", "tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri"],
    intro:
      "Otomatik sulama bir konfor çözümü olmasının yanında bitki sağlığı açısından da daha iyi. Doğru zamanda, doğru miktarda ve kök bölgesine verilen su, hem çimin hem ağacın daha az hastalanmasını sağlıyor.",
    body: [
      { h2: "Zon planlaması: bitki gruplarına göre" },
      { p: "Bir bahçede tüm bitkiler aynı miktarda su istemez. Çim sık ve az miktarda su isterken, ağaç ve çalılar seyrek ama derin sulama ister. Bu iki grubu aynı zonda toplamak ya çimi kurutur ya ağacın kökünü boğar." },
      { ul: [
        "Güneşli çim alanı: en yüksek su ihtiyacı",
        "Gölgeli çim alanı: %30–40 daha az su",
        "Ağaç ve çalılar: damlama hattı, seyrek ve uzun sulama",
        "Çiçeklik ve saksılar: ayrı ve kısa süreli program",
      ] },
      { p: "Her zonun sulama süresi ayrı programlanır. Bu, otomatik sistemin hortuma göre en büyük üstünlüğü." },

      { h2: "Kafa yerleşiminin temel kuralı" },
      { p: "Sprinkler kafaları, her noktanın en az iki kafadan su alacağı şekilde yerleştirilir. Buna \"kafa kafaya örtüşme\" denir: bir kafanın attığı suyun ucu, komşu kafaya ulaşmalıdır." },
      { p: "Örtüşme sağlanmadığında aradaki bölgeler daha az su alır ve çimde sarı halkalar oluşur. Bu, en sık karşılaşılan yerleşim hatası ve sonradan düzeltmesi kazı gerektiriyor." },
      { ul: [
        "Aynı zonda aynı tip ve aynı debili kafalar kullanılır",
        "Köşe, kenar ve tam daire kafalar doğru açılarla seçilir",
        "Kafa yüksekliği çim seviyesiyle aynı olmalıdır",
        "Rüzgârlı bölgelerde daha düşük atış mesafeli kafalar tercih edilir",
        "Yaya geçişi olan yerlerde pop-up (gömme) tip zorunludur",
      ] },

      { h2: "Kurulum adımları" },
      { ol: [
        "Bahçe ölçülür, kroki çıkarılır ve zonlar belirlenir",
        "Su kaynağının basıncı ve debisi ölçülür",
        "Kafa yerleşimi ve hat güzergâhı planlanır",
        "Kanal açılır (dar kanal makinesi ile çim korunur)",
        "Ana hat, vana kutuları ve lateral hatlar döşenir",
        "Selenoid vanalar ve kontrol kablosu çekilir",
        "Kafalar monte edilir ve hat yıkanarak temizlenir",
        "Kontrol ünitesi kurulur ve programlanır",
        "Test edilir, kafa açıları ve süreler ince ayarlanır",
      ] },

      { h2: "Doğru sulama saati" },
      { p: "En verimli saat sabaha karşıdır (04:00–07:00). Bu saatte buharlaşma düşük, rüzgâr azdır ve yapraklar gün doğumuyla kurur; bu da mantar hastalığı riskini azaltır." },
      { p: "Akşam geç saatte sulama, yaprakların gece boyu ıslak kalmasına neden olduğu için önerilmez. Öğle saatlerinde sulama ise buharlaşma nedeniyle suyun önemli bir kısmının boşa gitmesi demektir." },
      { quote: "Sık ve kısa yerine, seyrek ve uzun sulayın. Derin sulama kökün aşağı inmesini teşvik eder; yüzeysel sulama kökü yüzeyde tutar ve bitkiyi sıcağa karşı zayıflatır." },

      { h2: "Sensörler" },
      { p: "Yağmur sensörü, küçük bir maliyetle su israfını önlediği için hemen her sistemde öneriliyor. Yağmur yağdığında programı otomatik iptal eder ve yağmurun ardından çalışan sulama gibi anlamsız durumları engeller." },
      { p: "Toprak nem sensörü daha hassas çalışır ve gerçek ihtiyaca göre sulama yapar, ancak bakım ister ve doğru konumlandırılması gerekir. Büyük bahçelerde yatırımı hızlı geri döner." },

      { h2: "Kış hazırlığı" },
      { p: "Malatya'da kış sıcaklıkları sulama hatları için risklidir. Sezon kapanışında hatların basınçlı hava veya tahliye vanalarıyla boşaltılması, vana kutularının kontrol edilmesi ve kontrol ünitesinin kış moduna alınması gerekir." },
      { p: "Bu işlem yapılmadığında en sık zarar gören parçalar selenoid vanalar ve sprinkler gövdeleridir. İkisi de ilkbaharda değişmesi gereken kalemler hâline gelir." },
    ],
    faqs: [
      { q: "Mevcut çimi bozmadan sistem kurulabilir mi?", a: "Dar kanal açan makinelerle çim neredeyse tamamen korunarak hat döşenebilir; kesim hatları birkaç hafta içinde kapanır. Yine de yeni çim ekimiyle birlikte yapılan kurulum en temiz sonucu verir." },
      { q: "Şebeke suyu yeterli mi, pompa gerekir mi?", a: "Şebeke basıncı ve debisi ölçülerek karar verilir. Küçük bahçelerde şebeke genelde yeterlidir. Büyük alanlarda veya basıncın düşük olduğu bölgelerde depo ve pompa ile sabit basınç sağlanması gerekir." },
    ],
    related: ["sulama-otomasyonu-secimi", "bahce-sulama-suresi", "damlama-sulama-tikaniklik", "tarimsal-sulama-pompa-secimi"],
  },

  {
    slug: "ev-tadilati-nereden-baslanir",
    title: "Ev tadilatına nereden başlanır?",
    category: "Tadilat",
    published: "2025-12-02",
    updated: "2026-06-10",
    reading: 8,
    metaTitle: "Ev Tadilatına Nereden Başlanır? Sıra ve Planlama",
    metaDesc:
      "Elektrik, su, mekanik ve ince işlerin doğru uygulama sırası. Tadilat planlaması, bütçe kontrolü ve gerçekçi süre beklentileri.",
    keywords: ["ev tadilatı", "tadilat sırası", "daire yenileme", "tadilat bütçesi", "tadilat süresi"],
    excerpt: "Sıra yanlış olduğunda doğru yapılmış işler bile bozulur. Tadilatın doğru sırası, bütçeyi kontrol altında tutmanın yolu ve gerçekçi süreler.",
    services: ["komple-ev-tadilati", "anahtar-teslim-insaat", "elektrik-tesisati"],
    intro:
      "Tadilatta en pahalı hata, işlerin sırasını karıştırmaktır. Sıva atıldıktan sonra hatırlanan bir priz, yeni yapılmış duvarın kırılması demektir.",
    body: [
      { h2: "Önce kapsam listesi" },
      { p: "\"Banyoyu yenileyelim\" tek başına bir kapsam değildir. Seramik mi değişiyor, tesisat da mı, klozet yeri kayıyor mu, duş teknesi mi duşakabin mi, bunların hepsi ayrı maliyet ve ayrı süre demektir." },
      { p: "Oda oda dolaşıp neyin değişeceğini yazılı bir listeye dökmek, tadilatın en değerli ilk adımı. Liste netleştikten sonra iş programı ve bütçe gerçekçi hâle geliyor. Belirsiz bırakılan her kalem, iş sırasında hem gecikme hem tartışma kaynağı oluyor." },

      { h2: "Doğru sıra" },
      { ol: [
        "Söküm ve moloz tahliyesi",
        "Kaba yapı: duvar kaldırma/örme, kapı boşlukları",
        "Tesisat altyapısı: elektrik boruları, su ve atık hatları",
        "Basınç testi (su) ve hat kontrolü (elektrik)",
        "Sıva ve şap",
        "Su yalıtımı (ıslak hacimler) ve su testi",
        "Seramik ve zemin kaplamaları",
        "Alçı, kartonpiyer ve tavan işleri",
        "Boya",
        "Montajlar: vitrifiye, armatür, priz, aydınlatma, dolap",
        "Temizlik, kontrol listesi ve teslim",
      ] },
      { p: "Her aşamanın kendi kontrol noktası var ve o kontrol yapılmadan sonraki aşamaya geçilmemeli. En kritik ikisi: tesisat kapanmadan basınç testi ve seramik döşenmeden su testi." },

      { h2: "Kuruma sürelerine saygı" },
      { p: "Kuruma sürelerini kısaltmaya çalışmak, tadilatta yapılan en yaygın ve en pahalı hata. Nemli şap üzerine döşenen parke kabarır, kurumamış alçı üzerine atılan boya çatlar, kurumamış yalıtım işlevini görmez." },
      {
        table: {
          head: ["İşlem", "Kuruma süresi", "Not"],
          rows: [
            ["Sıva", "3–7 gün", "Havalandırma ve mevsime bağlı"],
            ["Şap", "7–21 gün", "Kalınlığa göre değişir, parke için kritik"],
            ["Su yalıtımı", "24–48 saat", "Ardından su testi"],
            ["Seramik yapıştırıcı", "24 saat", "Derz öncesi beklenir"],
            ["Boya (kat arası)", "4–6 saat", "Kışın uzar"],
            ["Silikon", "24 saat", "Duş kullanımı öncesi"],
          ],
        },
      },

      { h2: "Bütçeyi kontrol altında tutmak" },
      { p: "Bütçe aşımının iki kaynağı var: baştan eksik yazılan kalemler ve iş sırasında değişen kararlar." },
      { p: "Birincisi için tek çözüm, keşifte tüm kalemleri metrajlı biçimde yazmak ve \"sonra bakarız\" denen bir kalem bırakmamak. İkincisi ise doğal bir durum, iş ilerledikçe fikirler değişir. Bunu engellemek yerine yönetmek gerekir: her değişiklik için ek maliyet ve süre etkisi yazılı bildirilir, onay alınmadan uygulanmaz." },
      { p: "Ayrıca toplam bütçenin %10–15'i kadar bir pay ayırmanızı öneriyoruz. Söküm sonrası ortaya çıkan gizli sorunlar (çürük boru, ıslanmış duvar, çökmüş şap) neredeyse her tadilatta bir miktar çıkıyor." },

      { h2: "Oturarak mı, boşaltarak mı?" },
      {
        table: {
          head: ["", "Oturarak", "Boşaltarak"],
          rows: [
            ["Süre", "%40–60 daha uzun", "En kısa"],
            ["Maliyet", "Koruma ve temizlik nedeniyle yüksek", "Daha ekonomik"],
            ["Konfor", "Toz, gürültü, kısıtlı kullanım", "Etkilenme yok"],
            ["Uygun olduğu durum", "Tek mekân yenileme", "Komple tadilat"],
          ],
        },
      },

      { h2: "Gerçekçi süre beklentisi" },
      { p: "Ortalama bir 3+1 dairede komple tadilat 25–40 iş günü sürer. Dağılım kabaca şöyle: söküm ve tesisat 8–10 gün, sıva ve yalıtım 5–7 gün, seramik 6–8 gün, boya 4–6 gün, montajlar ve teslim 3–5 gün. Aralarda kuruma süreleri var ve bunlar sıkıştırılamaz." },
      { p: "Tek bir banyo yenilemesi 12–20 iş günü, tek bir mutfak 10–18 iş günü sürer. Bu süreler malzeme temini gecikmesi olmadığı varsayımıyla verilmiştir; özel sipariş ürünlerde tedarik süresi ayrıca eklenmelidir." },
    ],
    faqs: [
      { q: "Tadilat için apartmandan izin gerekir mi?", a: "Daire içi tadilatlarda genelde yönetime bilgi vermek yeterlidir. Taşıyıcı sisteme, ortak alana veya kolon hattına müdahale gerektiren işlerde ise yönetim ve gerekirse belediye izni gerekir." },
      { q: "Malzemeyi kendim alsam daha mı ucuz olur?", a: "Seramik, vitrifiye ve armatür gibi kalemleri kendiniz almanız yaygın ve mümkün. Fiyat avantajı duruma göre değişir; asıl fayda ürünü kendiniz seçmenizdir. Ölçü ve miktar listesini çıkarıp size veriyoruz." },
    ],
    related: ["banyo-tadilati-siralama", "anahtar-teslim-insaat-kapsami", "ev-su-tesisati-yenileme"],
  },

  {
    slug: "anahtar-teslim-insaat-kapsami",
    title: "Anahtar teslim inşaat hangi işleri kapsar?",
    category: "İnşaat",
    published: "2026-04-07",
    updated: "2026-07-21",
    reading: 8,
    metaTitle: "Anahtar Teslim İnşaat Kapsamı | Neler Dahil?",
    metaDesc:
      "Kaba yapı, ince işler, elektrik, mekanik ve teslim sürecinin kalemleri. Anahtar teslim sözleşmesinde nelere dikkat edilmeli?",
    keywords: ["anahtar teslim inşaat", "anahtar teslim kapsam", "inşaat sözleşmesi", "hakediş", "iş programı"],
    excerpt: "\"Anahtar teslim\" ifadesi net görünür ama kapsamı sözleşmede tanımlanmadıysa tartışma çıkar. Nelerin dahil olduğu ve nelere dikkat edilmesi gerektiği.",
    services: ["anahtar-teslim-insaat", "komple-ev-tadilati", "dukkan-ofis-tadilati"],
    intro:
      "Anahtar teslim işin özü, işveren ile onlarca ayrı ustanın arasına tek bir sorumlu koymaktır. Ancak bu sorumluluğun sınırları yazılı değilse, iş ortasında \"bu dahil miydi\" tartışması çıkıyor.",
    body: [
      { h2: "Tipik kapsam" },
      { p: "Anahtar teslim bir işte genelde şu kalemler bulunur. Sizin işinizde hangilerinin dahil olduğu sözleşmede tek tek yazılmalıdır:" },
      { ul: [
        "Söküm, yıkım ve moloz tahliyesi",
        "Kaba yapı: duvar, kalıp, beton, çatı",
        "Elektrik tesisatı ve pano",
        "Zayıf akım: data, TV, diafon, kamera altyapısı",
        "Sıhhi tesisat: temiz su, atık su, ıslak hacim bağlantıları",
        "Mekanik tesisat: ısıtma, havalandırma, pompa",
        "Su yalıtımı ve ısı yalıtımı",
        "Sıva, şap, alçı ve tavan işleri",
        "Seramik, parke ve zemin kaplamaları",
        "Boya ve dekoratif işler",
        "Doğrama: kapı, pencere, dolap, mutfak",
        "Vitrifiye, armatür ve aydınlatma montajı",
        "Genel temizlik ve teslim",
      ] },

      { h2: "Genelde kapsam dışı olanlar" },
      { p: "Aşağıdaki kalemler çoğu zaman ayrı değerlendirilir. Dahil olup olmadığı baştan netleştirilmeli:" },
      { ul: [
        "Mimari ve statik proje hizmetleri",
        "Ruhsat, harç ve belediye işlemleri",
        "Beyaz eşya ve mobilya",
        "Peyzaj ve bahçe düzenlemesi",
        "Klima cihazı temini ve gaz şarjı (altyapı dahil olabilir)",
        "Asansör (varsa)",
        "Abonelik işlemleri (elektrik, su, doğalgaz)",
      ] },

      { h2: "Sözleşmede olması gerekenler" },
      { p: "İyi bir anahtar teslim sözleşmesi tartışmayı baştan bitirir. Aşağıdakiler mutlaka yer almalı:" },
      { ol: [
        "İş kalemleri listesi ve metrajlar",
        "Malzeme sınıfı ve marka/model belirtimi (veya fiyat bandı)",
        "Toplam bedel ve neyin dahil olduğu",
        "Ödeme planı: hakediş esaslı, aşamalara bağlı",
        "İş programı ve teslim tarihi",
        "Gecikme durumunda uygulanacak koşullar",
        "Ek iş prosedürü: nasıl talep edilir, nasıl fiyatlanır, nasıl onaylanır",
        "İşçilik garantisi süresi ve kapsamı",
        "Teslim koşulları ve eksik listesi prosedürü",
      ] },

      { h2: "Hakediş: doğru ödeme yöntemi" },
      { p: "Peşin toplu ödeme, hem işveren hem yüklenici için sağlıksız bir yapı. Doğru yöntem hakediş esaslı ödemedir: tamamlanan iş kalemlerine göre kademeli ödeme yapılır." },
      { p: "Tipik bir hakediş planı şöyle olabilir: sözleşme imzasında %15–20 avans, kaba yapı tamamlandığında %25, tesisat tamamlandığında %20, ince işler bittiğinde %25, teslimde %10–15. Oranlar işin niteliğine göre değişir ama mantık aynıdır." },
      { quote: "Son ödemenin teslimde ve eksik listesi kapatıldıktan sonra yapılması, işin düzgün bitmesini sağlayan en etkili mekanizma." },

      { h2: "İş programı ve takip" },
      { p: "Haftalık program çıkarılması, hangi hafta hangi kalemin yapılacağını ve hangi ekibin geleceğini gösterir. Program, tedarik süreleriyle birlikte kurulmalı; seramik veya doğrama gibi teslim süresi uzun kalemler baştan sipariş edilmelidir." },
      { p: "Şantiyeye gelemeyen işverenler için haftalık fotoğraf ve ilerleme raporu, güven açısından en çok işe yarayan uygulama. Şehir dışında olan mülk sahipleriyle çalışırken bu yöntemi standart hâle getirdik." },

      { h2: "Teslim ve eksik listesi" },
      { p: "Teslim, \"iş bitti\" denilen an değil; birlikte dolaşılıp eksiklerin listelendiği ve o listenin kapatıldığı süreçtir. İyi bir teslimde şunlar yapılır:" },
      { ul: [
        "Oda oda dolaşılarak eksik ve kusur listesi çıkarılır",
        "Liste yazılı hâle getirilir ve süre verilir",
        "Tesisat testleri tekrarlanır (su basıncı, pano fonksiyonları)",
        "Garanti belgeleri, kullanım kılavuzları teslim edilir",
        "Tesisat güzergâh fotoğrafları ve pano şeması verilir",
        "Eksikler kapatıldıktan sonra son ödeme yapılır",
      ] },
      { p: "Tesisat güzergâh fotoğrafları özellikle değerli: ileride bir raf takarken veya tadilat yaparken delme kazalarını önlüyor." },
    ],
    faqs: [
      { q: "Keşif ücretli mi?", a: "Malatya merkez ilçelerde ilk keşif ücretsizdir. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabilir; iş tarafımızca yapıldığında bu bedel toplam tutardan düşülür." },
      { q: "İş sırasında ek iş çıkarsa ne olur?", a: "Söküm sonrası görünen gizli sorunlar olabilir. Bu durumda işi durdurup fotoğrafla bildiriyor, ek kalem ve maliyeti yazılı sunuyoruz. Onayınız olmadan devam etmiyoruz; sözleşmede bu prosedür tanımlı." },
    ],
    related: ["anahtar-teslim-fiyat-nasil-hesaplanir", "komple-ev-tadilati-ne-kadar-surer", "ev-tadilati-nereden-baslanir", "banyo-tadilati-siralama"],
  },

  {
    slug: "avize-secim-rehberi",
    title: "Odaya göre doğru avize ve aydınlatma nasıl seçilir?",
    category: "Aydınlatma",
    published: "2025-11-25",
    updated: "2026-05-13",
    reading: 7,
    metaTitle: "Avize Seçimi Rehberi | Renk Sıcaklığı, Lümen, Ölçü",
    metaDesc:
      "Salon, mutfak ve yatak odasında ölçü, renk sıcaklığı ve ışık gücü nasıl seçilir? Katmanlı aydınlatma ve montaj güvenliği rehberi.",
    keywords: ["avize seçimi", "renk sıcaklığı", "lümen hesabı", "katmanlı aydınlatma", "spot yerleşimi"],
    excerpt: "Aynı odada yanlış renk sıcaklığı huzursuz, doğru kurgulanmış katmanlı aydınlatma ferah bir his verir. Seçim kriterleri ve ölçüler.",
    services: ["avize-aydinlatma", "elektrik-tesisati", "komple-ev-tadilati"],
    intro:
      "Aydınlatma, bir mekânın algılanan kalitesini en hızlı değiştiren kalem. Üstelik pahalı bir armatür bile yanlış renk sıcaklığıyla başarısız görünüyor.",
    body: [
      { h2: "Renk sıcaklığı: en can alıcı karar" },
      {
        table: {
          head: ["Renk sıcaklığı", "Görünüm", "Uygun mekân"],
          rows: [
            ["2700–3000K", "Sıcak sarı", "Salon, yatak odası, restoran"],
            ["3500–4000K", "Doğal beyaz", "Mutfak, banyo, çalışma odası, ofis"],
            ["5000–6500K", "Gün ışığı / soğuk beyaz", "Atölye, depo, teknik alan, vitrin"],
          ],
        },
      },
      { p: "Aynı mekânda farklı renk sıcaklıkları karıştırılmamalı. Salonda 3000K avize varken tavanda 5000K spot kullanmak, gözün sürekli adaptasyon yapmasına ve yorgunluğa yol açıyor. Bu, evlerde en sık gördüğümüz aydınlatma hatası." },

      { h2: "Kaç lümen gerekir?" },
      { p: "Watt artık ışık miktarını göstermiyor; ölçü lümen. Kaba bir başlangıç olarak metrekare başına 100–150 lümen genel aydınlatma için yeterli." },
      {
        table: {
          head: ["Mekân", "Hedef (lümen/m²)", "20 m² için toplam"],
          rows: [
            ["Salon (genel)", "100–150", "2.000–3.000 lm"],
            ["Mutfak (genel)", "150–200", "3.000–4.000 lm"],
            ["Mutfak tezgâhı", "300+", "Ayrı tezgâh aydınlatması"],
            ["Yatak odası", "80–120", "1.600–2.400 lm"],
            ["Banyo", "150–200", "3.000–4.000 lm"],
            ["Çalışma masası", "300–500", "Ayrı masa lambası"],
          ],
        },
      },
      { p: "Toplam ışık tek bir avizeden değil, avize artı birkaç spot ile sağlandığında dağılım çok daha dengeli oluyor." },

      { h2: "Katmanlı aydınlatma" },
      { p: "İyi aydınlatılmış bir mekânda üç katman bulunur:" },
      { ul: [
        "Genel aydınlatma: odanın temel ışık seviyesi (avize, tavan armatürü)",
        "İş aydınlatması: belirli bir eylemi destekler (tezgâh üstü LED, okuma lambası)",
        "Vurgu aydınlatması: mekâna derinlik katar (duvar yıkayıcı spot, gizli şerit LED)",
      ] },
      { p: "Tek katmanla kurulan mekânlar aydınlık olsa bile düz ve steril görünür. Üç katmanın anahtarları ayrı devrelere alındığında, aynı oda gün içinde farklı senaryolarda kullanılabilir hâle geliyor." },

      { h2: "Avize ölçüsü nasıl seçilir?" },
      { p: "Pratik bir kural var: odanın uzunluğu ve genişliği metre cinsinden toplanır; çıkan sayı santimetre olarak avizenin uygun çapını verir. 4×5 metrelik bir salon için 4+5=9, yani yaklaşık 90 cm çapında bir avize dengeli görünür." },
      { p: "Yükseklik için: yemek masası üzerinde avizenin alt noktası masa yüzeyinden 75–85 cm yukarıda olmalı. Geçiş alanlarında ise zeminden en az 210 cm yükseklik bırakılmalı." },

      { h2: "Spot yerleşimi" },
      { p: "2,7–3 metre tavan yüksekliğinde spotlar arası mesafe 1–1,5 metre dengeli bir dağılım verir. Duvardan mesafe ise 60–80 cm olmalı; duvara çok yakın spotlar duvarı yıkar ve odanın ortası karanlık kalır." },
      { p: "Alçıpan tavanlarda spot yerleri, tesisat çekilmeden önce belirlenmeli. Sonradan yer değişikliği, tavanın açılıp kapanması demek." },

      { h2: "Montaj güvenliği" },
      { p: "Avize montajının en belirleyici kısmı elektrik değil, taşıma kapasitesi. Ağır bir kristal avize 15–25 kg gelebilir ve alçıpan tavanda standart dübelle taşınamaz." },
      { ul: [
        "Montajdan önce ilgili sigorta indirilir ve kontakla teyit edilir",
        "Tavan tipi ve ürün ağırlığına göre bağlantı elemanı seçilir",
        "8 kg üzeri ürünlerde alçıpan içine takviye profili gerekir",
        "Kablo uçları klemensle bağlanır, bant ile ek yapılmaz",
        "Metal gövdeli armatürlerde topraklama iletkeni mutlaka bağlanır",
        "Montaj sonrası ürün elle yüklenerek sağlamlığı test edilir",
      ] },

      { h2: "Dimmer uyumu" },
      { p: "Her LED dimlenmez. Ürünün \"dimmable\" olması ve dimmer tipinin (leading edge / trailing edge) sürücüyle uyumlu olması gerekir. Uyumsuz kombinasyonlarda titreme ve uğultu görülür." },
      { p: "Ürün seçiminde bu uyumu kontrol etmek, sonradan armatür veya dimmer değiştirmek zorunda kalmayı önlüyor." },
    ],
    faqs: [
      { q: "LED şerit ne kadar dayanır?", a: "Kaliteli bir şerit LED ve uygun güç kaynağıyla 30.000–50.000 saat beklenir. Erken bitmelerin ana nedeni yetersiz soğutma (alüminyum profil kullanılmaması) ve düşük kaliteli güç kaynağıdır." },
      { q: "Avizeyi ben alsam montajını yapar mısınız?", a: "Evet, sadece montaj hizmeti de veriyoruz. Ürünü siz aldıysanız montaj öncesi ağırlık ve bağlantı tipi konusunda bilgi almanız iyi olur; özellikle alçıpan tavanlarda ek takviye gerekebilir." },
    ],
    related: ["ev-elektrik-tesisati-maliyeti", "dukkan-tadilati-elektrik-aydinlatma", "ev-tadilati-nereden-baslanir"],
  },

  {
    slug: "dukkan-tadilati-elektrik-aydinlatma",
    title: "Dükkan tadilatında elektrik ve aydınlatma planı",
    category: "Tadilat",
    published: "2026-05-06",
    updated: "2026-07-28",
    reading: 7,
    metaTitle: "Dükkan Tadilatında Elektrik ve Aydınlatma Planı",
    metaDesc:
      "Vitrin, kasa, tabela, data ve ürün aydınlatmasının birlikte planlanması. Ticari aydınlatmada CRI ve renk sıcaklığı seçimi.",
    keywords: ["dükkan tadilatı", "mağaza aydınlatması", "vitrin aydınlatması", "CRI", "ticari elektrik tesisatı"],
    excerpt: "Mağazada aydınlatmanın işlevi görmek değil, göstermektir. Satışı doğrudan etkileyen teknik detaylar ve elektrik planı.",
    services: ["dukkan-ofis-tadilati", "avize-aydinlatma", "kamera-guvenlik-sistemleri"],
    intro:
      "Ticari alan tadilatında en kıymetli şey zaman: her gecikme gün doğrudan ciro kaybı. İkinci en kıymetli şey ise aydınlatma, ürünü nasıl gösterdiğiniz doğrudan satışa yansıyor.",
    body: [
      { h2: "CRI: göz ardı edilen ama belirleyici değer" },
      { p: "Renksel geri verim indeksi (CRI), bir ışığın renkleri ne kadar gerçeğe yakın gösterdiğini ifade eder; 100 gün ışığıdır. Düşük CRI'li ucuz armatürler ürünü olduğundan soluk gösterir." },
      {
        table: {
          head: ["İş kolu", "Renk sıcaklığı", "CRI hedefi"],
          rows: [
            ["Giyim, tekstil", "3000–3500K", "90+"],
            ["Kuyum, aksesuar", "4000K + vurgu", "95+"],
            ["Market, gıda", "4000K (et reyonunda özel)", "85+"],
            ["Ofis, çalışma alanı", "4000K", "80+"],
            ["Kafe, restoran", "2700–3000K", "90+"],
            ["Eczane, sağlık", "4000K", "90+"],
          ],
        },
      },
      { p: "Tekstil ve gıda satan iş yerlerinde CRI farkı doğrudan satışa yansıyor. Aynı ürün, iyi CRI'li ışık altında daha canlı ve daha kaliteli görünüyor." },

      { h2: "Vitrin: dışarıdan içeriye ilk izlenim" },
      { p: "Vitrin aydınlatması, mağaza içi aydınlatmadan daha güçlü olmalı. Gündüz saatlerinde dış ışıkla yarışması gerektiği için, iç mekân seviyesinin 2–3 katı bir aydınlık hedeflenir." },
      { ul: [
        "Vitrin hattı ayrı anahtar ve zaman rölesiyle kontrol edilmeli",
        "Ayarlanabilir spot (ray sistemi) kullanmak, sezonluk vitrin değişiminde esneklik sağlar",
        "Cam üzerinde yansıma oluşturmayacak açı seçilmeli",
        "Vitrin içi sıcaklık artışı hesaba katılmalı, LED tercih edilmeli",
      ] },

      { h2: "Elektrik planı: mobilya ile birlikte" },
      { p: "İş yerinde elektrik planı, mobilya yerleşiminden sonra değil onunla birlikte yapılmalı. Kasa noktası, vitrin, deneme kabini, depo ve ürün rafları; hepsinin kendi besleme ve data ihtiyacı var." },
      { ul: [
        "Kasa noktasına kesintisiz güç için ayrı hat ve UPS prizi",
        "Kamera ve kayıt cihazı için ayrı beslenen bir teknik nokta",
        "Vitrin aydınlatmasının ayrı anahtar ve zaman rölesiyle kontrolü",
        "Tabela için ayrı sigorta ve fotosel/zaman kontrolü",
        "Data noktalarının Cat6 ile merkezi bir kabinete toplanması",
        "Depo ve arka alan için ayrı aydınlatma devresi",
      ] },
      { p: "Bu ayrımlar yapılmadığında kasa arızası tüm mağazanın enerjisini kesebiliyor veya tabela unutulup gece boyu yanabiliyor. İkisi de kolayca önlenebilir." },

      { h2: "Tabela: unutulan detaylar" },
      { p: "Tabela beslemesinin ayrı sigortadan alınması ve fotosel veya zaman rölesiyle kontrol edilmesi standart olmalı. Manuel anahtarla kontrol edilen tabelalar unutuluyor ve gereksiz elektrik tüketiyor." },
      { p: "Ayrıca tabela hattının kaçak akım korumalı olması gerekiyor; dış mekânda olduğu için nem ve yağmur kaynaklı kaçak riski yüksek." },

      { h2: "Açılış tarihine göre geri planlama" },
      { p: "Ticari işlerde programı sondan başa kuruyoruz. Açılış tarihi belirlenir; ondan geriye doğru temizlik, montaj, boya, kaplama, altyapı ve söküm süreleri yerleştirilir." },
      { p: "Bu yöntem, hangi malzemenin en geç ne zaman sipariş edilmesi gerektiğini de otomatik ortaya çıkarıyor. Tedarik süresi uzun kalemler (özel aydınlatma, doğrama, tabela, özel seramik) genelde programın kritik yolunda yer alıyor ve keşif aşamasında siparişe çıkarılması gerekiyor." },

      { h2: "Faaliyet sürerken tadilat" },
      { p: "İşletmeyi kapatmadan yapılan tadilatlarda alan bölümlere ayrılır ve etaplı çalışılır. Toz bariyeri kurulur, gürültülü işler mesai dışına alınır, elektrik kesintileri müşteri yoğunluğunun düşük olduğu saatlere planlanır." },
      { p: "Bu şekilde çalışmak süreyi uzatır ve maliyeti bir miktar artırır; buna karşılık işletmenin kapanmaması çoğu durumda bu farkı fazlasıyla karşılıyor. Hangi yaklaşımın uygun olduğunu ciro ve süre üzerinden birlikte değerlendiriyoruz." },
    ],
    faqs: [
      { q: "Dükkan tadilatı ne kadar sürer?", a: "60–100 m² bir dükkânda kapsamlı tadilat tipik olarak 15–25 iş günü sürer. Sadece aydınlatma ve boya gibi sınırlı kalemlerde bu süre 5–8 güne iner. Programı açılış tarihinize göre kuruyoruz." },
      { q: "Tabela işini de yapıyor musunuz?", a: "Tabelanın elektrik beslemesi, kontrol ve montaj altyapısını yapıyoruz. Tabelanın üretimi ayrı bir uzmanlık; anlaştığınız üreticiyle koordineli çalışıyoruz." },
    ],
    related: ["avize-secim-rehberi", "guvenlik-kamerasi-secim-rehberi", "anahtar-teslim-insaat-kapsami"],
  },

  {
    slug: "guvenlik-kamerasi-secim-rehberi",
    title: "Güvenlik kamerası seçimi: kaç kamera, hangi çözünürlük?",
    category: "Güvenlik",
    published: "2026-06-16",
    updated: "2026-07-30",
    reading: 7,
    metaTitle: "Güvenlik Kamerası Seçim Rehberi | IP mi Analog mu?",
    metaDesc:
      "Kamera sayısı, çözünürlük, gece görüşü ve kayıt süresi nasıl belirlenir? IP ve analog sistem karşılaştırması, yerleşim kuralları.",
    keywords: ["güvenlik kamerası seçimi", "IP kamera", "analog kamera", "kayıt süresi hesabı", "kamera yerleşimi"],
    excerpt: "Sistemin değeri kamera sayısında değil, doğru noktalarda ve yeterli çözünürlükte görüntü almasında. Seçim ve yerleşim kuralları.",
    services: ["kamera-guvenlik-sistemleri", "diafon-goruntulu-konusma", "dukkan-ofis-tadilati"],
    intro:
      "Yüz tanınamayan, plaka okunamayan bir kayıt olay anında hiçbir işe yaramaz. Dolayısıyla kurulumdan önce hangi noktada neyi görmek istediğinizi netleştirmek gerekiyor.",
    body: [
      { h2: "Önce soru: bu kamera neyi görecek?" },
      { p: "Her kamera bir soruya cevap vermeli. Geniş açıyla her yeri gören tek bir kamera, hiçbir yüzü tanınır kılmaz. Amaca göre kamera tipi ve konumu değişir." },
      {
        table: {
          head: ["Amaç", "Yaklaşım", "Not"],
          rows: [
            ["Yüz tanıma", "2–3 m mesafe, göz hizasına yakın açı", "Giriş kapıları için"],
            ["Plaka okuma", "Dar açı, düşük montaj yüksekliği", "Otopark girişi, tek yönde"],
            ["Genel gözetim", "Geniş açı, yüksek montaj", "Koridor, salon, depo"],
            ["Kasa gözetimi", "İki kamera: üstten ve karşıdan", "Detay ve genel görünüm birlikte"],
          ],
        },
      },
      { p: "En sık yapılan yerleşim hatası, kameranın güneşe veya güçlü ışığa karşı bakmasıdır. Gündüz saatlerinde görüntü tamamen siluete döner. WDR özellikli kameralar bunu bir miktar telafi eder ama en iyi çözüm doğru yönlendirmedir." },

      { h2: "IP mi analog mu?" },
      {
        table: {
          head: ["Kriter", "IP sistem", "Analog (AHD/TVI)"],
          rows: [
            ["Çözünürlük", "4MP–8MP ve üzeri", "2MP–5MP"],
            ["Kablolama", "Cat6, PoE ile tek kablo", "Koaksiyel + ayrı besleme"],
            ["Maliyet", "Daha yüksek", "Daha ekonomik"],
            ["Mevcut kabloyla yükseltme", "Kablo değişimi gerekir", "Mevcut koaksiyel kullanılabilir"],
            ["Uygun olduğu yer", "Yeni kurulum, geniş alan, plaka okuma", "Mevcut sistemin yenilenmesi"],
          ],
        },
      },
      { p: "Mevcut analog sistemi olan bir binada kablolar sağlamsa, AHD kameralarla yükseltme en hızlı ve ekonomik yol. Yeni bir yapıda ise Cat6 çekip IP sisteme geçmek uzun vadede daha esnek." },

      { h2: "Kaç kamera gerekir?" },
      { p: "Alan büyüklüğünden çok püf nokta sayısı belirleyici. Tipik dağılımlar:" },
      { ul: [
        "Daire girişi ve bahçe: 2–4 kamera",
        "Orta ölçekli dükkân: 4–6 kamera (giriş, kasa, ürün alanı, depo)",
        "Apartman: 4–8 kamera (giriş, otopark, asansör, bahçe)",
        "Küçük işletme / atölye: 4–8 kamera",
        "Depo ve tesis: alan büyüklüğüne göre planlanır",
      ] },

      { h2: "Kayıt süresi ve disk hesabı" },
      { p: "Kayıt süresi; kamera sayısı, çözünürlük, kare hızı ve sıkıştırma formatına bağlı. Örnek vermek gerekirse: 8 adet 4MP kamera, H.265 sıkıştırma ve sürekli kayıtla 4 TB diskte yaklaşık 20–25 gün kayıt tutar." },
      { p: "Hareket algılamalı kayıtta bu süre iki katına çıkabilir. Yasal ve pratik ihtiyaç genelde 30 gün olarak konuşulduğu için disk boyutu bu hedefe göre seçilmeli." },

      { h2: "Gece görüşü" },
      { p: "Kızılötesi (IR) mesafesi, kameranın karanlıkta ne kadar uzağı görebileceğini belirler. Katalogdaki değerler ideal koşullar içindir; pratikte bu mesafenin %70'i kadar etkili görüş beklenmeli." },
      { p: "Renkli gece görüşü isteniyorsa, IR yerine beyaz ışık destekli veya düşük ışık hassasiyeti yüksek (starlight) kameralar tercih edilmeli. Plaka okuma gibi uygulamalarda bu fark belirleyici oluyor." },

      { h2: "Gizlilik ve KVKK" },
      { p: "Kamera kaydı kişisel veri niteliğinde. Apartman ve iş yeri uygulamalarında dikkat edilmesi gerekenler:" },
      { ul: [
        "Görüş alanı komşu mülkleri ve kamusal alanı gereksiz biçimde kapsamamalı",
        "Giriş noktalarına bilgilendirme levhası konulmalı",
        "Kayıtlara erişim sınırlı ve kayıt altında olmalı",
        "Kayıt süresi ihtiyaçtan uzun tutulmamalı",
        "Apartmanlarda kurulum kararı yönetim kararıyla alınmalı",
      ] },
      { p: "Kurulum sırasında görüş alanlarını bu çerçevede ayarlıyor, bilgilendirme levhası konumlarını öneriyoruz." },
    ],
    faqs: [
      { q: "İnternet olmadan çalışır mı?", a: "Evet. Kayıt cihazı internetten bağımsız çalışır ve kayıt tutar. İnternet yalnızca uzaktan izleme ve bildirim için gereklidir; kesildiğinde sistem kayıt almaya devam eder." },
      { q: "Mevcut sisteme kamera eklenebilir mi?", a: "Kayıt cihazının boş kanalı ve kablolama imkânı varsa eklenebilir. Kanal doluysa cihaz değişimi gerekir; bu durumda mevcut kameraları koruyarak sadece kayıt cihazını yükseltmek çoğu zaman mümkün oluyor." },
    ],
    related: ["dukkan-tadilati-elektrik-aydinlatma", "fabrika-elektrik-tesisati-planlama", "avize-secim-rehberi"],
  },

  {
    slug: "fabrika-elektrik-tesisati-planlama",
    title: "Fabrika elektrik tesisatı planlama rehberi",
    category: "Sanayi Elektriği",
    published: "2026-01-27",
    updated: "2026-06-30",
    reading: 8,
    metaTitle: "Fabrika Elektrik Tesisatı Planlama | Kapasite ve Tava",
    metaDesc:
      "Makine güçleri, pano kapasitesi, kablo tavası, kompanzasyon ve aydınlatma koordinasyonu. Büyümeye açık sanayi tesisatı nasıl kurulur?",
    keywords: ["fabrika elektrik tesisatı", "sanayi elektrik", "kablo tavası", "kuvvet panosu", "endüstriyel aydınlatma"],
    excerpt: "Sanayi tesisatında ölçü yalnızca güç değil; erişilebilirlik, esneklik ve duruş süresidir. Büyümeye açık altyapı nasıl kurulur?",
    services: ["fabrika-elektrik-tesisati", "kompanzasyon-panosu", "jenerator-ups"],
    intro:
      "Üretim alanında en sık karşılaştığımız sorun, ilk kurulumda \"bugünün ihtiyacına\" göre boyutlandırma yapılması. Üç yıl sonra iki makine daha alındığında pano yer vermiyor, tava dolmuş oluyor.",
    body: [
      { h2: "Yedek kapasite: ilk kurulumun en önemli kararı" },
      { p: "Ana besleme, pano ve tava kapasitesinde %30–40 yedek pay bırakılmasını öneriyoruz. Bu, ilk yatırımı bir miktar artırır ama ilerideki tadilat maliyetinin yanında küçük kalır." },
      { ul: [
        "Ana besleme kesiti: mevcut yükün %130–140'ına göre",
        "Pano: en az %30 boş modül yeri ve boş bara noktası",
        "Kablo tavası: doluluk oranı %50'yi geçmeyecek şekilde",
        "Kompanzasyon: kademe eklemeye uygun pano boyutu",
      ] },

      { h2: "Yük analizi ve ölçüm" },
      { p: "Mevcut bir tesiste kapasite artışı planlanıyorsa, tahmin yerine ölçüm yapılmalı. Enerji analizörü ile faz akımları, gerilim, güç faktörü ve harmonik değerleri belirli bir süre (tercihen bir hafta) kaydedilir." },
      { p: "Bu ölçüm; gerçek tepe yükü, faz dengesizliği ve harmonik bozulma seviyesini gösterir. Üç veri de kapasite kararında belirleyici oluyor ve çoğu zaman beklenenden farklı çıkıyor." },

      { h2: "Kablo tavası ve güzergâh" },
      { p: "Kabloların düzenli bir tava sisteminde taşınması sadece görüntü meselesi değil. Doğru kurulmuş bir güzergâhta kablo değiştirmek yarım gün sürer; serbest çekilmiş bir tesiste aynı iş üretimi durdurur." },
      { ul: [
        "Kuvvet ve zayıf akım kabloları ayrı tavalarda veya bölmeli tavada",
        "Tava doluluk oranı sınırlı tutulur, ısınma ve ekleme payı bırakılır",
        "Her kablo iki ucundan etiketlenir",
        "Makine bağlantıları esnek boru veya sürüklenmeye dayanıklı kablo ile tamamlanır",
        "Tava güzergâhı, makine yerleşimi değişse de geçerli kalacak şekilde planlanır",
      ] },

      { h2: "Motor koruma ve yol verme" },
      { p: "Motor besleme hatlarında koruma seçimi, motorun gücüne ve yol verme yöntemine göre yapılır. Doğrudan yol vermede kalkış akımı nominal akımın 6–8 katına çıkar; bu, şebekede gerilim çökmesine ve diğer cihazlarda soruna yol açabilir." },
      {
        table: {
          head: ["Yol verme", "Kalkış akımı", "Uygun güç"],
          rows: [
            ["Doğrudan (DOL)", "6–8× nominal", "5,5 kW altı"],
            ["Yıldız-üçgen", "2–3× nominal", "5,5–75 kW"],
            ["Yumuşak yol verici", "2–4× nominal (ayarlanabilir)", "Her güç, kontrollü kalkış"],
            ["Frekans invertörü", "1–1,5× nominal", "Hız kontrolü gereken uygulamalar"],
          ],
        },
      },

      { h2: "Endüstriyel aydınlatma" },
      { p: "Üretim alanında aydınlık seviyesi işin türüne göre değişir: genel montaj alanlarında 300–500 lüks, hassas montaj ve kalite kontrol noktalarında 750–1000 lüks, depo ve koridorlarda 150–200 lüks hedeflenir." },
      { p: "Yüksek tavanlı alanlarda armatür seçimi kadar montaj yüksekliği ve ışık dağılım açısı da önemli. Yanlış açı seçimi, tabanda gölgeli bölgeler ve makine üzerinde parlama yaratıyor." },

      { h2: "Duruş süresini azaltmak" },
      { p: "Sanayide elektrik arızasının maliyeti, tamir bedeli değil üretim kaybı. Bunu azaltmanın yolu planlı bakım:" },
      { ol: [
        "Pano bağlantılarının yıllık tork kontrolü",
        "Termal kamera ile ısınma taraması (yılda 1–2 kez)",
        "Motor koruma ayarlarının doğrulanması",
        "Kompanzasyon kondansatör kapasitelerinin ölçümü",
        "Topraklama direnci ölçümü ve raporlaması",
        "Kritik yedek parçanın stokta tutulması",
      ] },
      { p: "Son madde özellikle değerli: kontaktör, sigorta, sürücü ve sensör gibi kritik parçaların stokta bulunması, arıza anında saatlerce sürecek tedarik beklemesini sıfırlıyor. Tesisinizin kritik ekipman listesini birlikte çıkarıyoruz." },
    ],
    faqs: [
      { q: "Üretimi durdurmadan çalışabilir misiniz?", a: "Çoğu işte evet. Vardiya dışı saatlerde ve hafta sonlarında çalışarak, bölüm bölüm devreye alma yaparak duruşu en aza indiriyoruz. İş programını üretim planınıza göre kuruyoruz." },
      { q: "Proje çizimi yapıyor musunuz?", a: "Tesisat yerleşimi, pano şeması ve tava güzergâh planını çıkarıyoruz. Resmî onay gerektiren projelerde ilgili proje müellifi ile koordineli çalışıyoruz." },
    ],
    related: ["kompanzasyon-panosu-nedir", "jenerator-transfer-panosu", "elektrik-panosu-bakimi"],
  },
];
