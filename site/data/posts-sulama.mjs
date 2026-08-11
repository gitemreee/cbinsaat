// Sulama yazıları: damlama kurulumu, filtre, süre hesabı, kayısı bahçesi ve
// otomasyon. Arama verisinde damlama ve otomatik bahçe sulama güçlü küme.

export const sulamaPosts = [
  {
    slug: "damlama-sulama-nasil-kurulur",
    title: "Damlama sulama nasıl kurulur? Malzeme listesi ve adımlar",
    category: "Sulama",
    published: "2026-08-08",
    reading: 10,
    metaTitle: "Damlama Sulama Nasıl Kurulur? Malzeme ve Adımlar",
    metaDesc:
      "Damlama sulama sisteminin bileşenleri, zon hesabı, montaj sırası ve devreye alma. Malzeme listesi, basınç ayarı ve ilk sezonda yapılan hatalar.",
    keywords: [
      "damlama sulama kurulumu",
      "damlama sulama malzemeleri",
      "damlatıcı seçimi",
      "sulama zonu hesabı",
      "lateral boru",
    ],
    excerpt:
      "Damlama sulamada işi belirleyen şey malzeme markası değil; debi hesabı, zon kurgusu ve filtre. Üçü doğruysa sistem yıllarca sorun çıkarmıyor.",
    services: ["tarimsal-sulama-sistemleri", "bahce-sulama", "anahtar-teslim-sulama-sistemi"],
    intro:
      "Damlama sulama, suyu bitkinin kök bölgesine damla damla veren bir sistem. Kurulumu ilk bakışta basit görünür: boru serilir, damlatıcı takılır, su verilir. Ancak sistemin ömrünü ve verimini belirleyen kararlar montajdan önce alınır; kaynağın debisi ölçülmeden ve zon kurgusu yapılmadan atılan her adım sonradan sökülüyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Damlama sulama kurulumu beş adımdan oluşur: kaynağın debisini ölçmek, alanı zonlara bölmek, filtre ve basınç düzenlemesini kurmak, ana hat ile lateralleri sermek ve sistemi yıkayıp basınç testinden geçirmek.</strong>",
      },
      {
        p: "Sistemin kalbi filtredir. Filtresiz kurulan bir damlama hattı, ne kadar kaliteli malzeme kullanılırsa kullanılsın ilk sezonda tıkanmaya başlar. İkinci kritik nokta basınç: damlatıcıların çoğu 1–2,5 bar aralığında çalışacak şekilde üretilir.",
      },

      { h2: "Sistemin bileşenleri" },
      {
        p: "Bir damlama sisteminde her parçanın belirli bir görevi var. Eksik bırakılan parçalar genelde ilk yıl fark edilmez, ikinci yıl sorun olarak geri döner:",
      },
      {
        ul: [
          "Su kaynağı: kuyu, depo veya şebeke bağlantısı.",
          "Pompa: kaynağa ve alana göre seçilir; depolu sistemde hidrofor da olabilir.",
          "Kum ayırıcı: kuyu suyunda kum varsa filtreden önce konumlanır.",
          "Filtre: elek, disk veya kum–çakıl; su kalitesine göre seçilir.",
          "Gübreleme ünitesi: venturi veya tank tipi, filtreden önce bağlanır.",
          "Basınç regülatörü: damlatıcıların çalışma aralığını korur.",
          "Ana hat: alanı boydan boya besleyen PE boru.",
          "Manifold ve zon vanaları: her bölgeyi ayrı besler.",
          "Lateral: damlatıcılı 16 mm PE boru, sıralara serilir.",
          "Hava tahliye vanası: kapanışta oluşan vakumu kırar.",
          "Manometre: filtre giriş ve çıkışına takılır.",
          "Sayaç: verilen suyu ölçer, program doğrulaması sağlar.",
        ],
      },
      {
        p: "Listede en çok atlanan iki kalem manometre ve sayaç. İkisi de ucuz, ikisi de sistemin nasıl çalıştığını görünür kılıyor. Ölçemediğiniz bir sistemi yönetmek mümkün değil.",
      },

      { h2: "Önce kaynağın debisini ölçün" },
      {
        p: "Tasarımın başlangıç noktası, kaynağın saatte kaç litre su verebildiğidir. Kuyularda bu değer pompanın etiketinden değil, gerçek ölçümle bulunur; dinamik su seviyesi ve hat kayıpları etiket değerini düşürür.",
      },
      {
        p: "Pratik ölçüm yöntemi: hattın ucundan bilinen hacimde bir kabı doldurup süreyi tutmak. Örneğin 20 litrelik bir kap 30 saniyede doluyorsa saatlik debi 2400 litredir. Ölçüm, sistemin normal çalışma basıncında yapılmalıdır.",
      },
      {
        p: "Bu değer, kurulacak sistemin sınırıdır. Aynı anda çalıştırılacak damlatıcıların toplam debisi kaynağın debisini aşamaz; aştığında hat sonundaki bitkiler yeterince su alamaz.",
      },

      { h2: "Zon hesabı nasıl yapılır?" },
      {
        p: "Zon, aynı anda birlikte sulanan bölgedir. Hesap basittir: kaynağın saatlik debisi, bir bölgenin toplam damlatıcı debisine bölünür ve alan o kadar zona ayrılır.",
      },
      {
        table: {
          head: ["Örnek", "Değer"],
          rows: [
            ["Kaynak debisi", "2400 litre/saat"],
            ["Damlatıcı debisi", "4 litre/saat"],
            ["Aynı anda çalışabilecek damlatıcı", "600 adet"],
            ["Bahçedeki toplam damlatıcı", "1500 adet"],
            ["Gereken zon sayısı", "3 zon (500 damlatıcı/zon)"],
          ],
        },
      },
      {
        p: "Zonları belirlerken bitki türünü de dikkate almak gerekir. Farklı su ihtiyacı olan bitkileri aynı zona koymak, birini fazla diğerini az sulamaya yol açar; sebze ile meyve ağacı aynı programda olmamalıdır.",
      },
      {
        p: "Eğimli arazilerde zonlar mümkün olduğunca aynı kot bandında kurulur. Yukarı ile aşağı arasındaki yükseklik farkı basınç farkı yaratır ve damlatıcı debileri birbirinden ayrışır.",
      },

      { h2: "Damlatıcı tipi seçimi" },
      {
        table: {
          head: ["Tip", "Nerede kullanılır", "Not"],
          rows: [
            ["Hat içi (in-line) damlatıcı", "Sıra bitkiler, sebze, çilek", "Boruya fabrikada yerleştirilmiş"],
            ["Hat üstü (on-line) damlatıcı", "Ağaçlar, süs bitkileri", "İstenen noktaya sonradan takılır"],
            ["Basınç kompanseli damlatıcı", "Eğimli arazi, uzun hat", "Basınç değişse de debi sabit kalır"],
            ["Ayarlanabilir damlatıcı", "Saksı, küçük peyzaj", "Sık ayar bozulur, geniş alanda önerilmez"],
          ],
        },
      },
      {
        p: "Eğimin olduğu her yerde basınç kompanseli damlatıcı öneriyoruz. Normal damlatıcıda yüksek noktada az, alçak noktada çok su akar; kompanseli tipte aradaki fark ortadan kalkar. Fiyat farkı ilk sezonda kendini gösteriyor.",
      },
      {
        p: "Damlatıcı aralığı bitkiye ve toprağa göre seçilir. Kumlu toprakta su hızla aşağı iner ve yanal yayılım azdır; bu durumda aralık daraltılır. Killi toprakta ise yanal yayılım geniştir, aralık açılabilir.",
      },

      { h2: "Lateral hattın uzunluğu sınırlıdır" },
      {
        p: "Damlatıcılı boru boyunca su ilerledikçe sürtünme nedeniyle basınç düşer. Hat çok uzun olursa baştaki damlatıcı ile sondaki damlatıcı arasında belirgin debi farkı oluşur; genel kabul, bu farkın %10'u geçmemesidir.",
      },
      {
        p: "Düz arazide, 16 mm boruda ve normal damlatıcı debilerinde hat uzunluğu genelde seksen–yüz metre aralığında sınırlanır. Eğim yukarı doğruysa bu mesafe kısalır, aşağı doğruysa bir miktar uzayabilir.",
      },
      {
        p: "Uzun sıralarda çözüm, hattı ortadan beslemektir: manifold sıranın ortasına getirilir ve iki yöne dağıtım yapılır. Böylece her kol yarı uzunlukta kalır ve basınç dengesi korunur.",
      },

      { h2: "Montaj sırası" },
      {
        ol: [
          "Alanın krokisi çıkarılır; sıralar, zonlar ve hat güzergâhları çizilir.",
          "Kaynak bağlantısı, çekvalf ve ana vana kurulur.",
          "Kum ayırıcı ve filtre montajı yapılır, manometreler takılır.",
          "Gübreleme ünitesi filtreden önce hatta bağlanır.",
          "Ana hat serilir; dönüşlerde uygun bağlantı parçaları kullanılır.",
          "Manifold ve zon vanaları kurulur, vana kutuları yerleştirilir.",
          "Lateraller sıralara serilir, uçlar açık bırakılır.",
          "Hat düşük basınçta yıkanır; içeride kalan talaş ve toprak dışarı atılır.",
          "Lateral uçlarına kapak takılır.",
          "Hat üstü damlatıcılar delik açma aletiyle yerleştirilir.",
          "Sistem tam basınçta çalıştırılır, kaçaklar kontrol edilir.",
          "Zon süreleri belirlenir ve program yazılır.",
        ],
      },
      {
        p: "Sekizinci adım en çok atlanan aşama. Montaj sırasında boruların içine giren toprak ve plastik talaşı yıkanmazsa, ilk çalıştırmada doğrudan damlatıcılara gider ve daha ilk günden tıkanma başlar.",
      },

      { h2: "Basıncı doğru kurmak" },
      {
        p: "Damlatıcıların çoğu 1–2,5 bar aralığında çalışacak şekilde üretilir. Basınç düşükse damlatıcılar dolmaz ve hat sonu susuz kalır; yüksekse boru bağlantıları zorlanır, damlatıcılar fırlar ve laterallerde patlama görülür.",
      },
      {
        p: "Kaynak basıncı yüksekse hatta basınç regülatörü konur. Şebeke bağlantılı bahçe sistemlerinde bu neredeyse zorunludur; şebeke basıncı gün içinde değiştiği için sistem sabit çalışmaz.",
      },
      {
        p: "Filtre giriş ve çıkışına takılan iki manometre, sistemin sağlığını gösteren en basit göstergedir. Aradaki fark zamanla artıyorsa filtre kirlenmiştir; fark aniden yükseldiyse tıkanma vardır.",
      },

      { h2: "Gübreleme ünitesi nereye bağlanır?" },
      {
        p: "Gübreleme ünitesi her zaman filtreden önce bağlanır. Böylece çözünmeyen kalıntılar filtrede tutulur ve damlatıcılara ulaşmaz. Filtreden sonra bağlanan bir ünite, sisteme doğrudan tortu basar.",
      },
      {
        p: "Venturi tipi üniteler basınç farkıyla çalışır ve ucuzdur; tank tipi üniteler ise daha kolay kullanılır ama karışım oranı zaman içinde değişir. Hangi tip seçilirse seçilsin, gübreleme sonrası hattın temiz suyla yıkanması gerekir.",
      },
      {
        quote:
          "Gübreleme sonrası on beş dakikalık temiz su yıkaması, damlatıcı ömrünü belirleyen en basit alışkanlık.",
      },
      {
        p: "Kaynağa geri kaçışı önlemek için çekvalf şart. Gübreli suyun kuyuya veya şebekeye geri gitmesi hem çevresel hem sağlık açısından ciddi bir sorun; bu bağlantı ihmal edilmemeli.",
      },

      { h2: "Boru çapları nasıl belirlenir?" },
      {
        p: "Ana hat, manifold ve lateral için farklı çaplar kullanılır. Çap seçimi debiye göre yapılır; dar seçilen bir ana hat, sistemin tamamını yavaşlatan bir darboğaz oluşturur.",
      },
      {
        table: {
          head: ["Hat", "Görevi", "Tipik çap"],
          rows: [
            ["Ana hat", "Kaynaktan bahçeye taşır", "Debiye göre 40–75 mm"],
            ["Manifold", "Zonu lateral hatlara dağıtır", "32–50 mm"],
            ["Lateral", "Damlatıcıları taşır", "16–20 mm"],
          ],
        },
      },
      {
        p: "Boru içindeki akış hızının makul sınırlarda kalması hedeflenir. Hız yükseldiğinde sürtünme kaybı hızla artar; bu, hem basınç kaybı hem su darbesi riski demektir. Bir kademe büyük çap, çoğu zaman pompadan çok daha ucuz bir çözüm.",
      },
      {
        p: "Toprak altına alınacak ana hatlarda ek noktaları erişilebilir bırakılmalı ve güzergâh krokiye işlenmeli. Sonradan yapılan kazılarda en sık zarar gören eleman, yeri unutulmuş ana hattır.",
      },

      { h2: "Sistemi devreye alırken yapılan test" },
      {
        p: "Kurulum bittiğinde sistem doğrudan programa alınmaz. Önce bir devreye alma testi yapılır ve sonuçlar kaydedilir; bu kayıt, ilerleyen yıllarda karşılaştırma noktası olur.",
      },
      {
        ol: [
          "Her zon tek tek çalıştırılır, çalışma basıncı manometreden okunur.",
          "Hattın başındaki ve sonundaki damlatıcıların debisi bir kapla ölçülüp karşılaştırılır.",
          "Aradaki fark belirgin çıkıyorsa hat uzunluğu veya çap gözden geçirilir.",
          "Tüm bağlantılar sızdırmazlık açısından gözle taranır.",
          "Filtre giriş–çıkış basınç farkı temiz hâldeyken not edilir.",
          "Zon süreleri belirlenerek program yazılır.",
        ],
      },
      {
        p: "İkinci maddedeki ölçüm en değerlisi. Baştaki ve sondaki damlatıcı arasında büyük fark varsa sistem daha ilk günden dengesizdir ve bu fark yıllar içinde bitki gelişimine yansır.",
      },

      { h2: "İlk sezonda yapılan hatalar" },
      {
        ul: [
          "Filtresiz kurulum yapmak veya filtreyi \"sonra takarız\" diye ertelemek.",
          "Kaynak debisini ölçmeden zon kurmak.",
          "Farklı su ihtiyacı olan bitkileri aynı zona koymak.",
          "Hattı yıkamadan damlatıcıları takmak.",
          "Basınç regülatörü kullanmamak.",
          "Lateralleri gergin sermek; sıcakta uzayan boru sonra kıvrılır.",
          "Sulama süresini toprak kontrolü yapmadan belirlemek.",
        ],
      },
      {
        p: "Bu hataların ortak sonucu aynı: sistem çalışır görünür ama bitkiler eşit su almaz. Fark genelde ikinci yıl, bazı sıralardaki gelişim geriliğiyle ortaya çıkar.",
      },

      { h2: "Sezon içi bakım" },
      {
        table: {
          head: ["İşlem", "Sıklık"],
          rows: [
            ["Filtre temizliği", "Suyun kalitesine göre haftalık veya iki haftalık"],
            ["Manometre farkı kontrolü", "Her sulamada göz ucuyla"],
            ["Lateral uçlarının yıkanması", "Ayda bir"],
            ["Damlatıcı kontrolü (örnekleme)", "Ayda bir, farklı noktalardan"],
            ["Gübreleme sonrası yıkama", "Her gübrelemede"],
            ["Vana ve bağlantı sızdırmazlığı", "Ayda bir"],
          ],
        },
      },
      {
        p: "Lateral uçlarının ayda bir açılıp yıkanması, tıkanmayı önlemenin en etkili yolu. Hattın sonunda biriken tortu, açılmadığı sürece damlatıcıların içine doğru ilerlemeye devam ediyor.",
      },

      { h2: "Kışa hazırlık" },
      {
        p: "Malatya'da kış sıcaklıkları sulama hatları için risk oluşturur. Boru içinde kalan su donduğunda genleşir; laterallerde çatlama, vana gövdelerinde kırılma ve filtre hasarı ortaya çıkabilir.",
      },
      {
        ol: [
          "Sezon sonunda ana vana kapatılır.",
          "Hatlar en alçak noktadan veya basınçlı havayla tahliye edilir.",
          "Filtreler sökülüp temizlenir, kuru saklanır.",
          "Manometreler ve hassas parçalar sökülerek içeri alınır.",
          "Vana kutularının içine su dolmaması için drenaj kontrol edilir.",
          "Kontrol ünitesi kış moduna alınır veya elektriği kesilir.",
        ],
      },
      {
        p: "Bahar açılışında sistem doğrudan tam basınçla çalıştırılmaz. Önce düşük basınçta yıkama yapılır, ardından basınç kademeli yükseltilir. Kışı geçirmiş bir hatta bu adım, birkaç patlamayı önlüyor.",
      },
    ],
    faqs: [
      {
        q: "Damlama sulama kaç bar basınçla çalışır?",
        a: "Damlatıcıların çoğu 1–2,5 bar aralığında çalışacak şekilde üretilir. Basınç kompanseli tipler daha geniş bir aralıkta sabit debi verir. Basınç düşükse hat sonu susuz kalır, yüksekse damlatıcılar yerinden çıkar ve bağlantılar zorlanır. Bu nedenle regülatör kullanılması önerilir.",
      },
      {
        q: "Bir lateral hat en fazla kaç metre olabilir?",
        a: "Düz arazide 16 mm boruda genellikle seksen–yüz metre aralığında sınırlanır. Amaç, ilk ve son damlatıcı arasındaki debi farkını %10'un altında tutmaktır. Eğim yukarı doğruysa mesafe kısalır. Uzun sıralarda hat ortadan beslenerek her kolun uzunluğu yarıya indirilir.",
      },
      {
        q: "Filtresiz damlama sulama kurulabilir mi?",
        a: "Teknik olarak mümkün ama pratikte kısa ömürlüdür. Şebeke suyunda bile ince tortu bulunur ve damlatıcı çıkışları çok küçüktür. Kuyu veya gölet suyunda filtre olmadan sistem birkaç hafta içinde tıkanmaya başlar. Filtre, sistemin en ucuz ama en belirleyici parçasıdır.",
      },
      {
        q: "Kaç zon kurmam gerekir?",
        a: "Kaynağın saatlik debisi, bir bölgenin toplam damlatıcı debisine bölünerek bulunur. Örneğin saatte 2400 litre veren bir kaynakta 4 litrelik damlatıcılarla aynı anda 600 damlatıcı çalıştırılabilir. Bahçedeki toplam damlatıcı sayısı buna bölünerek zon sayısı belirlenir.",
      },
      {
        q: "Damlatıcı aralığı ne olmalı?",
        a: "Toprak tipine ve bitkiye bağlıdır. Kumlu toprakta su aşağı doğru hızlı iner, yanal yayılım azdır; aralık daraltılır. Killi toprakta yanal yayılım geniş olduğu için aralık açılabilir. Karar vermeden önce bir test sulaması yapıp ıslanan alanın genişliğine bakmak en güvenilir yöntemdir.",
      },
      {
        q: "Sistemi kendim kurabilir miyim?",
        a: "Küçük bahçelerde temel bileşenlerle kurulum yapılabilir. Kritik nokta tasarım aşamasıdır: debi ölçümü, zon hesabı ve filtre seçimi doğru yapılmazsa montaj ne kadar düzgün olursa olsun sistem dengesiz çalışır. Bu üç kalemi profesyonel bir hesapla netleştirmek işi kolaylaştırır.",
      },
      {
        q: "Damlama mı yağmurlama mı daha iyi?",
        a: "Amaç farklıdır. Damlama suyu doğrudan köke verir; su kullanımı düşük, yaprak ıslanmadığı için hastalık riski azdır. Yağmurlama geniş alanları ve çim gibi yüzey örtülerini kaplamak için uygundur. Meyve bahçesi ve sıra bitkilerinde damlama, çim alanlarda yağmurlama tercih edilir.",
      },
      {
        q: "Sistem kurulduktan sonra ne kadar sürede sonuç alınır?",
        a: "Bitki, düzenli ve doğru miktarda su almaya başladığında birkaç hafta içinde gelişim farkı görülür. Asıl fark ikinci sezonda ortaya çıkar; kök bölgesi düzenli nem gördüğü için bitki strese girmez. Sistemin gerçek kazancı, sulamanın öngörülebilir hâle gelmesidir.",
      },
    ],
    related: ["damlama-sulama-tikaniklik", "sulama-filtresi-secimi", "otomatik-bahce-sulama"],
  },

  {
    slug: "sulama-filtresi-secimi",
    title: "Sulama suyunda filtre seçimi: elek, disk ve kum filtresi",
    category: "Sulama",
    published: "2026-08-04",
    reading: 9,
    metaTitle: "Sulama Filtresi Seçimi | Elek, Disk ve Kum Filtresi",
    metaDesc:
      "Kuyu, gölet ve şebeke suyunda hangi filtre kullanılır? Mesh değeri, basınç kaybı takibi, ters yıkama ve filtre bakımının damlatıcı ömrüne etkisi.",
    keywords: [
      "sulama filtresi",
      "disk filtre",
      "elek filtre",
      "kum filtresi",
      "mesh değeri",
    ],
    excerpt:
      "Damlama sulamada arızaların büyük bölümü filtrede başlar. Doğru filtre, doğru mesh değeri ve düzenli temizlik; damlatıcı ömrünü kat kat uzatıyor.",
    services: ["tarimsal-sulama-sistemleri", "bahce-sulama", "kayisi-bahcesi-sulama"],
    intro:
      "Damlatıcının çıkış deliği bir milimetrenin altındadır. Suda gözle görülmeyen bir tortu bile zamanla bu deliği kapatır. Filtre, sistemin en ucuz ama en belirleyici parçası; seçimi ve bakımı doğru yapıldığında damlama hattı yıllarca sorun çıkarmıyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Temiz şebeke veya derin kuyu suyunda elek filtre, kum ve organik yükün birlikte bulunduğu sularda disk filtre, gölet ve kanal gibi organik yükü yüksek kaynaklarda ise kum–çakıl filtresi kullanılır.</strong> Kum varsa filtreden önce hidrosiklon konumlandırılır.",
      },
      {
        p: "Damlama sistemlerinde yaygın seçim 120 mesh civarı bir filtredir. Genel kural, damlatıcı çıkış çapının yaklaşık onda biri kadar parçacığın geçmesine izin vermektir.",
      },

      { h2: "Filtre neyi tutar, neyi tutmaz?" },
      {
        p: "Filtre, suda asılı hâlde bulunan katı parçacıkları tutar. Çözünmüş hâldeki kireç ve tuzları tutmaz; onlar hatta ilerler ve damlatıcı içinde birikerek tıkanma yapar. Bu ayrım, filtre seçiminden önce bilinmesi gereken temel bilgi.",
      },
      {
        p: "Yani filtre kum, çamur, alg ve organik parçacıklara karşı etkilidir. Kireç sorununa karşı ise farklı bir yöntem gerekir: sezon sonunda yapılan asit yıkaması veya suyun sertliğini düşürecek bir uygulama.",
      },
      {
        p: "Aynı şekilde biyolojik büyüme de filtreyle tamamen engellenemez. Hatta güneş gören şeffaf borular kullanıldığında alg gelişimi filtreden sonra da devam eder; bu nedenle sulama borularında siyah renk tercih edilir.",
      },

      { h2: "Filtre tipleri" },
      {
        table: {
          head: ["Tip", "Uygun kaynak", "Güçlü yanı", "Zayıf yanı"],
          rows: [
            ["Elek (screen)", "Şebeke, temiz kuyu", "Ucuz, basit, kolay temizlik", "Organik yükte hızla tıkanır"],
            ["Disk", "Kuyu, karışık yük", "Yüksek tutma kapasitesi", "Temizliği daha zahmetli"],
            ["Kum–çakıl", "Gölet, kanal, açık su", "Organik yükte çok etkili", "Yer kaplar, ters yıkama gerekir"],
            ["Hidrosiklon", "Kumlu kuyu", "Ağır taneleri ayırır", "İnce parçacıkta etkisiz"],
          ],
        },
      },
      {
        p: "Sık karşılaşılan doğru kurulum, hidrosiklon ile disk filtrenin birlikte kullanılmasıdır: siklon ağır kumu alır, disk ince parçacıkları tutar. Böylece disk filtre çok daha seyrek tıkanır.",
      },
      {
        p: "Kum–çakıl filtresi genelde büyük alanlarda ve açık kaynaklarda tercih edilir. Kurulumu ve alan ihtiyacı fazladır ama gölet suyunda başka bir çözüm uzun süre dayanmaz.",
      },

      { h2: "Mesh değeri ne anlama gelir?" },
      {
        p: "Mesh, bir inç uzunluktaki göz sayısını ifade eder. Sayı büyüdükçe gözler küçülür ve daha ince parçacıklar tutulur. Damlama sistemlerinde yaygın aralık 120–155 mesh civarındadır.",
      },
      {
        table: {
          head: ["Mesh", "Yaklaşık göz açıklığı", "Tipik kullanım"],
          rows: [
            ["40 mesh", "≈ 400 mikron", "Kaba ön filtre, yağmurlama"],
            ["80 mesh", "≈ 190 mikron", "Yağmurlama ve mikro yağmurlama"],
            ["120 mesh", "≈ 130 mikron", "Damlama sulamada en yaygın"],
            ["155 mesh", "≈ 100 mikron", "Hassas damlatıcılar"],
            ["200 mesh", "≈ 75 mikron", "Çok ince filtreleme, sık temizlik ister"],
          ],
        },
      },
      {
        p: "Daha ince filtre her zaman daha iyi değildir. Gözler küçüldükçe filtre daha sık tıkanır ve basınç kaybı artar. Doğru seçim, damlatıcının ihtiyaç duyduğu incelik ile bakım yükü arasındaki dengeyi kurar.",
      },

      { h2: "Filtre boyutu debiye göre seçilir" },
      {
        p: "Filtrenin bağlantı çapı ile kapasitesi farklı şeylerdir. Sistemin debisine göre seçilmeyen bir filtre, doğru mesh değerine sahip olsa bile yüksek basınç kaybı yaratır ve çok sık temizlik ister.",
      },
      {
        p: "Katalogda her filtre için önerilen debi aralığı verilir. Seçim bu aralığın üst sınırında değil, ortasında yapılmalıdır; böylece filtre kirlendikçe sistem hâlâ yeterli akışı sürdürür.",
      },
      {
        p: "Büyük sistemlerde tek büyük filtre yerine paralel bağlı iki filtre tercih edilebilir. Bu düzen hem basınç kaybını düşürür hem biri temizlenirken diğerinin çalışmasına imkân verir.",
      },

      { h2: "Basınç kaybını izlemek" },
      {
        p: "Filtre giriş ve çıkışına birer manometre takmak, sistemin en pratik teşhis aracı. Temiz filtrede iki değer birbirine yakındır; filtre kirlendikçe aradaki fark açılır.",
      },
      {
        p: "Uygulamada kullanılan basit kural şu: fark 0,5 bar civarına yükseldiğinde filtre temizlenir. Bu değer sistemden sisteme değişebilir; önemli olan, temiz hâldeki farkın bilinmesi ve ona göre karar verilmesidir.",
      },
      {
        quote:
          "Filtreyi takvimle değil, manometreyle temizleyin. Aynı bahçede su kalitesi mevsime göre değişir; sabit bir takvim ya erken ya geç kalır.",
      },
      {
        p: "Fark hiç açılmıyorsa da bir sorun vardır: filtre elemanı yırtılmış olabilir. Bu durumda su filtreden geçiyormuş gibi görünür ama parçacıklar doğrudan hatta gider.",
      },

      { h2: "Temizlik ve ters yıkama" },
      {
        ol: [
          "Sistemi durdurun ve basıncı düşürün.",
          "Filtre kapağını açın, eleman veya diskleri çıkarın.",
          "Diskleri ayırıp basınçlı suyla yıkayın; gerekiyorsa birkaç saat suda bekletin.",
          "Elek filtrelerde yumuşak fırça kullanın; metal fırça gözleri deforme eder.",
          "Contayı kontrol edin, yıpranmışsa değiştirin.",
          "Elemanı yerine takıp kapağı sıkın, sistemi kademeli basınçlandırın.",
        ],
      },
      {
        p: "Otomatik ters yıkamalı filtreler, belirli basınç farkına ulaşıldığında kendini yıkar. Büyük sistemlerde iş gücünü belirgin azaltır; ancak yıkama vanasının ve tahliye hattının düzenli kontrol edilmesi gerekir.",
      },
      {
        p: "Kum filtrelerinde ters yıkama, akışın tersine çevrilerek kum yatağının kabartılması ve tutulan malzemenin dışarı atılmasıdır. Yıkama süresi yetersizse kum yatağı zamanla sıkışır ve filtre verimini kaybeder.",
      },

      { h2: "Kireç ve organik tıkanma" },
      {
        p: "Filtre parçacıkları tutar ama damlatıcı içinde biriken kireci engelleyemez. Sert su kullanılan sistemlerde sezon sonunda asit yıkaması yapılır; uygun asit, üretici talimatına göre seyreltilerek hatta verilir ve belirli süre bekletildikten sonra bol suyla yıkanır.",
      },
      {
        p: "Organik tıkanmada ise farklı bir yöntem gerekir. Alg ve biyofilm, uygun dozda klor uygulamasıyla kontrol altına alınır. İki uygulama asla birlikte yapılmaz; kimyasalların karışması tehlikeli sonuçlar doğurur.",
      },
      {
        p: "Bu işlemler kimyasal içerdiği için ölçü ve güvenlik kuralları önemli. Uygulama sonrası hattın bol temiz suyla yıkanması ve ilk sulamanın kontrollü yapılması gerekiyor.",
      },

      { h2: "Filtre kirlendiğinde ne olur?" },
      {
        p: "Tıkanmaya başlayan filtre önce basınç kaybı yaratır. Hat sonundaki damlatıcılar yeterli su alamaz; bahçenin bir bölümü kurumaya başlar ve bu genelde \"pompa zayıfladı\" diye yorumlanır.",
      },
      {
        p: "İkinci aşamada pompa zorlanır. Sistem direnci arttığı için pompa çalışma noktasının dışına çıkar, verimi düşer ve daha fazla ısınır. Uzun süren bu durum pompanın ömrünü kısaltır.",
      },
      {
        p: "Üçüncü aşamada filtre elemanı zarar görür. Basınç farkı çok yükseldiğinde elek yırtılır veya diskler deforme olur; bu noktadan sonra filtre görevini hiç yapmaz ve parçacıklar doğrudan damlatıcılara ulaşır.",
      },

      { h2: "İki kademeli filtreleme" },
      {
        p: "Su kalitesi düşükse tek filtre yeterli olmaz. İki kademeli düzen, hem bakım yükünü hem tıkanma riskini azaltır: kaba kademe iri parçacıkları alır, ince kademe damlatıcı hassasiyetine göre filtreler.",
      },
      {
        ul: [
          "Birinci kademe: hidrosiklon veya kaba elek, iri kum ve tortuyu tutar.",
          "İkinci kademe: disk veya ince elek, damlatıcının ihtiyacına göre seçilir.",
          "Zon girişlerinde küçük ön filtreler, kaçan parçacıkları yakalar.",
          "Her kademeye manometre konarak hangisinin tıkandığı ayırt edilir.",
        ],
      },
      {
        p: "Bu düzenin en pratik faydası teşhiste: hangi kademede basınç farkı arttığı görüldüğünde, bakımın nereye yapılacağı tartışmasız belli oluyor.",
      },

      { h2: "Filtre elemanının ömrü" },
      {
        p: "Filtre gövdesi uzun yıllar dayanır ama eleman aşınan bir parçadır. Diskler zamanla yüzey pürüzlülüğünü kaybeder, elekler ise temizlik sırasında deforme olur.",
      },
      {
        p: "Ömrü uzatmanın yolu doğru temizlik. Metal fırça kullanmamak, elemanı zorlamadan sökmek ve contayı düzenli kontrol etmek; elemanın birkaç sezon fazladan görev yapmasını sağlar.",
      },
      {
        p: "Yıpranmış eleman değişimi ertelenmemeli. Yırtık bir elekle çalışan sistem, filtresiz çalışan sistemle aynı sonucu verir; üstelik kullanıcı korunduğunu sandığı için sorun geç fark edilir.",
      },

      { h2: "Filtre nereye konumlanır?" },
      {
        p: "Sıralama sistemin çalışmasını doğrudan etkiler. Doğru dizilim genelde şöyledir: kaynak, pompa, hidrosiklon, gübreleme ünitesi, ana filtre, basınç regülatörü, ana hat.",
      },
      {
        p: "Gübreleme ünitesinin filtreden önce olması kritik. Aksi hâlde çözünmeyen gübre kalıntıları doğrudan damlatıcılara gider. Bu, sahada en sık gördüğümüz kurulum hatalarından biri.",
      },
      {
        p: "Zon vanalarının hemen ardına küçük ön filtreler eklemek de faydalı olabilir. Ana filtreden kaçan bir parçacık veya montaj sonrası hatta kalan artık, bu küçük filtrelerde tutulur.",
      },

      { h2: "Yağmurlama ve mikro sulamada filtre" },
      {
        p: "Filtre ihtiyacı yalnızca damlamaya özgü değil. Yağmurlama başlıklarının meme çapı damlatıcıdan büyük olduğu için daha kaba filtre yeterlidir; ancak filtresiz çalışan bir yağmurlama sistemi de zamanla meme tıkanması yaşar.",
      },
      {
        p: "Mikro yağmurlama ve sisleme sistemleri ise damlamaya yakın hassasiyet ister. Meme çapları küçüktür ve tıkandıklarında dağılım deseni bozulur; sulama görünürde devam eder ama alanın bir bölümü kuru kalır.",
      },
      {
        p: "Karma sistemlerde her hattın kendi ihtiyacına göre filtrelenmesi doğru yaklaşım. Tüm sistemi en hassas elemana göre filtrelemek gereksiz bakım yükü yaratırken, en kabaya göre filtrelemek hassas hattı bitiriyor.",
      },

      { h2: "Su kalitesini bilmek" },
      {
        table: {
          head: ["Kaynak", "Beklenen yük", "Önerilen çözüm"],
          rows: [
            ["Şebeke", "Düşük, ince tortu", "Elek filtre"],
            ["Derin kuyu", "Kum, çözünmüş mineral", "Hidrosiklon + disk"],
            ["Sığ kuyu", "Kum ve organik", "Hidrosiklon + disk, sık temizlik"],
            ["Depo", "Tortu ve alg", "Disk filtre, depo temizliği"],
            ["Gölet / kanal", "Yüksek organik yük", "Kum–çakıl filtre"],
          ],
        },
      },
      {
        p: "Su analizi yaptırmak, filtre seçimini tahminden çıkarır. Analiz; askıda katı madde, sertlik, demir ve mangan gibi başlıkları gösterir. Bu bilgiler hem filtre hem bakım programı için yol gösterir.",
      },

      { h2: "Filtre bakımını kim yapacak?" },
      {
        p: "Filtre, düzenli bakım isteyen tek parça olduğu için sorumluluğun net olması gerekir. Bahçe bakımı hizmet alınarak yapılıyorsa filtre temizliğinin bu kapsamda olup olmadığı baştan konuşulmalı.",
      },
      {
        p: "Temizliğin nasıl yapılacağının bir kez gösterilmesi yeterli oluyor. İşlem birkaç dakikalık; asıl mesele ne zaman yapılacağını bilmek ve bunu manometre üzerinden takip etmek.",
      },
      {
        p: "Kayıt tutmak burada da işe yarar: hangi tarihte temizlik yapıldığı ve o gün basınç farkının ne olduğu not edilirse, sistemin davranışı birkaç ay içinde öngörülebilir hâle geliyor.",
      },

      { h2: "Sezon boyunca ne değişir?" },
      {
        p: "Su kalitesi sabit değildir. İlkbaharda yağışlarla birlikte bulanıklık artar, yaz ortasında sıcaklıkla birlikte alg gelişimi hızlanır, sonbaharda ise yaprak ve organik atık yükü yükselir.",
      },
      {
        p: "Bu nedenle filtre temizlik sıklığı sezon boyunca değişmelidir. Manometre takibi bu değişimi otomatik olarak yakalar; sabit bir takvime bağlı kalmak ise ya gereksiz iş ya gecikmiş müdahale demektir.",
      },
      {
        p: "Kayıt tutmak burada da işe yarıyor: hangi ayda ne sıklıkta temizlik yapıldığı not edildiğinde, ikinci sezonda bakım planı çok daha isabetli kuruluyor.",
      },
    ],
    faqs: [
      {
        q: "Damlama sulamada kaç mesh filtre kullanılmalı?",
        a: "Yaygın seçim 120 mesh civarındadır; hassas damlatıcılarda 155 mesh tercih edilir. Genel kural, damlatıcı çıkış çapının yaklaşık onda biri kadar parçacığın geçmesine izin vermektir. Daha ince filtre her zaman daha iyi değildir; gözler küçüldükçe tıkanma sıklığı ve basınç kaybı artar.",
      },
      {
        q: "Disk filtre mi elek filtre mi daha iyi?",
        a: "Su kalitesine bağlıdır. Temiz şebeke veya derin kuyu suyunda elek filtre yeterli ve ekonomiktir. Kum ile organik yükün birlikte bulunduğu sularda disk filtre daha uzun süre görev yapar, çünkü tutma kapasitesi belirgin yüksektir. Gölet suyunda ise ikisi de yetersiz kalır, kum filtre gerekir.",
      },
      {
        q: "Filtre ne sıklıkla temizlenmeli?",
        a: "Takvimle değil, basınç farkıyla karar verilmelidir. Filtre giriş ve çıkışındaki manometreler arasındaki fark temiz hâline göre belirgin arttığında temizlik zamanı gelmiştir. Uygulamada 0,5 bar civarındaki bir fark yaygın eşiktir. Su kalitesi mevsimlere göre değiştiği için sabit takvim yanıltır.",
      },
      {
        q: "Filtre kireci tutar mı?",
        a: "Hayır. Filtre yalnızca suda asılı katı parçacıkları tutar; çözünmüş hâldeki kireç filtreden geçer ve damlatıcı içinde birikir. Kireç sorununa karşı sezon sonunda uygun asit yıkaması yapılır veya su sertliğini düşürecek bir çözüm değerlendirilir.",
      },
      {
        q: "Hidrosiklon filtre yerine geçer mi?",
        a: "Geçmez, tamamlar. Hidrosiklon ağır kum tanelerini merkezkaç etkisiyle ayırır; ince parçacıklar ve organik yük için etkisizdir. Kumlu kuyularda doğru kurulum, hidrosiklonun filtreden önce konumlandırılmasıdır. Böylece asıl filtre çok daha seyrek tıkanır.",
      },
      {
        q: "Otomatik ters yıkamalı filtre gerekli mi?",
        a: "Küçük bahçelerde gerekmez; elle temizlik yeterlidir. Geniş alanlarda ve organik yükü yüksek kaynaklarda ise iş gücünü ciddi biçimde azaltır. Kurulduğunda yıkama vanasının ve tahliye hattının düzenli kontrol edilmesi gerekir; tıkalı bir tahliye, yıkamayı işlevsiz kılar.",
      },
      {
        q: "Filtre çıkışında basınç çok düşüyor, ne yapmalıyım?",
        a: "Önce temizlik yapılır. Temizlik sonrası fark devam ediyorsa filtre sistemin debisine göre küçük seçilmiş olabilir. Katalogdaki önerilen debi aralığının ortasında çalışacak bir model veya paralel bağlı iki filtre bu sorunu çözer. Eleman yırtığı da kontrol edilmelidir.",
      },
      {
        q: "Gübreleme ünitesi filtreden önce mi sonra mı bağlanır?",
        a: "Her zaman filtreden önce bağlanır. Böylece çözünmeyen gübre kalıntıları filtrede tutulur ve damlatıcılara ulaşmaz. Filtreden sonra bağlanan ünite sisteme doğrudan tortu basar. Ayrıca kaynağa geri kaçışı önlemek için çekvalf kullanılması gerekir.",
      },
    ],
    related: ["damlama-sulama-tikaniklik", "damlama-sulama-nasil-kurulur", "kuyu-suyu-kumlu-geliyor"],
  },

  {
    slug: "bahce-sulama-suresi",
    title: "Bahçe ne kadar sulanmalı? Süre ve miktar hesabı",
    category: "Sulama",
    published: "2026-07-27",
    reading: 9,
    metaTitle: "Bahçe Sulama Süresi | Ne Kadar, Ne Sıklıkla?",
    metaDesc:
      "Toprak tipi, kök derinliği ve damlatıcı debisine göre sulama süresi nasıl hesaplanır? Sabah sulama, derin sulama mantığı ve kontrol yöntemleri.",
    keywords: [
      "bahçe sulama süresi",
      "ne kadar sulanmalı",
      "damlatıcı debisi hesabı",
      "toprak nemi kontrolü",
      "sulama programı",
    ],
    excerpt:
      "\"Günde yarım saat\" diye bir cevap yok. Süreyi belirleyen üç şey var: toprağın su tutma kapasitesi, kök derinliği ve damlatıcının debisi.",
    services: ["bahce-sulama", "tarimsal-sulama-sistemleri", "anahtar-teslim-sulama-sistemi"],
    intro:
      "Sulamada en sık yapılan hata, sık ve az su vermek. Yüzeyi ıslatan kısa sulamalar kökleri yukarıda tutar; sıcak bir günde toprak yüzeyi kuruduğunda bitki hemen strese girer. Doğru yaklaşım tersi: daha seyrek, ama kök bölgesini gerçekten dolduran sulama.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Sulama süresi; kök bölgesini ıslatacak su miktarının, damlatıcı debisine bölünmesiyle bulunur.</strong> Örneğin ağaç başına 40 litre verilmek isteniyorsa ve ağaçta 4 litre/saat debili iki damlatıcı varsa, süre 40 ÷ 8 = 5 saat olur.",
      },
      {
        p: "Sıklık ise toprak tipine bağlıdır: kumlu toprakta daha sık ve az, killi toprakta daha seyrek ve çok su verilir. Karar her zaman toprak kontrolüyle doğrulanmalıdır; program tek başına yeterli değildir.",
      },

      { h2: "Toprak tipi her şeyi değiştirir" },
      {
        table: {
          head: ["Toprak", "Su tutma", "Sulama biçimi"],
          rows: [
            ["Kumlu", "Düşük, hızlı geçirir", "Sık, kısa süreli"],
            ["Tınlı", "Orta", "Dengeli, en kolay yönetilen"],
            ["Killi", "Yüksek, yavaş emer", "Seyrek, uzun süreli"],
            ["Taşlı", "Çok düşük", "Sık, damlatıcı sayısı artırılır"],
          ],
        },
      },
      {
        p: "Killi toprakta uzun süreli sulama yaparken akış hızına dikkat etmek gerekir. Toprak suyu emmeye yetişemezse yüzeyde birikme ve akış olur; verilen su kök bölgesine inmeden kaybolur.",
      },
      {
        p: "Kumlu toprakta ise tersi risk var: uzun sulamada su kök bölgesinin altına iner ve bitkinin ulaşamayacağı derinliğe geçer. Bu durumda süreyi bölmek, yani aynı miktarı iki seferde vermek daha verimli oluyor.",
      },

      { h2: "Kök derinliği ne kadar?" },
      {
        p: "Sulamanın hedefi, bitkinin köklerinin bulunduğu bölgeyi nemlendirmektir. Bu bölge her bitkide farklıdır ve süre hesabının ikinci girdisidir.",
      },
      {
        ul: [
          "Çim: yüzeye yakın, genellikle ilk 15–20 cm.",
          "Sebze: 20–40 cm arası, türe göre değişir.",
          "Çalı ve süs bitkileri: 30–50 cm.",
          "Meyve ağaçları: 60–90 cm, olgun ağaçlarda daha derin.",
        ],
      },
      {
        p: "Derin köklü bitkilerde seyrek ve bol sulama, kökün aşağı doğru gelişmesini teşvik eder. Sık ve yüzeysel sulama ise kökleri yukarıda tutar; bu, sıcak dönemde bitkiyi savunmasız bırakır.",
      },

      { h2: "Damlatıcı debisiyle hesap" },
      {
        p: "Damlama sistemlerinde hesap kolaydır çünkü debi bilinir. Verilecek su miktarı belirlendikten sonra süre doğrudan bulunur:",
      },
      {
        table: {
          head: ["Hedef", "Damlatıcı düzeni", "Süre"],
          rows: [
            ["20 litre / bitki", "2 adet × 2 l/h", "5 saat"],
            ["20 litre / bitki", "2 adet × 4 l/h", "2,5 saat"],
            ["40 litre / ağaç", "4 adet × 4 l/h", "2,5 saat"],
            ["60 litre / ağaç", "4 adet × 4 l/h", "3,75 saat"],
            ["60 litre / ağaç", "6 adet × 4 l/h", "2,5 saat"],
          ],
        },
      },
      {
        p: "Tablodan çıkan sonuç net: aynı su miktarını daha kısa sürede vermek istiyorsanız damlatıcı sayısını artırmalısınız. Süreyi kısaltıp damlatıcı sayısını sabit tutmak, sadece daha az su vermek anlamına gelir.",
      },
      {
        p: "Yağmurlama sistemlerinde hesap milimetre üzerinden yapılır. Alana verilen su yüksekliği ölçülür; bunun için bahçeye birkaç düz kap yerleştirip belirli süre sonunda içindeki su derinliğini ölçmek en pratik yöntemdir.",
      },

      { h2: "Ne zaman sulanmalı?" },
      {
        p: "En uygun zaman sabahın erken saatleri. Sıcaklık düşük olduğu için buharlaşma kaybı azdır ve gün boyunca bitki suya erişebilir. Yapraklar gün içinde kuruduğu için mantar hastalıkları riski de düşer.",
      },
      {
        p: "Akşam sulaması, buharlaşma açısından avantajlı görünse de yaprakların gece boyunca ıslak kalmasına yol açar. Damlama sistemlerinde bu risk düşüktür çünkü yaprak ıslanmaz; yağmurlamada ise belirgindir.",
      },
      {
        p: "Öğle saatlerinde sulamadan kaçınmak gerekir. Buharlaşma kaybı en yüksek seviyededir ve verilen suyun önemli bölümü toprağa hiç ulaşmadan kaybolur.",
      },

      { h2: "Sıklık nasıl belirlenir?" },
      {
        p: "Sabit bir takvim, sulamanın en zayıf yönetim biçimi. Hava sıcaklığı, rüzgâr, yağış ve bitkinin gelişim dönemi su ihtiyacını sürekli değiştirir. Doğru yaklaşım, toprağı kontrol ederek karar vermek.",
      },
      {
        ol: [
          "Sulamadan bir gün sonra kök derinliğinde toprağı kontrol edin: nemli olmalı.",
          "İki–üç gün sonra tekrar kontrol edin; nem azalmaya başlamışsa süre yeterlidir.",
          "Üst 5 cm kuruduğunda değil, kök bölgesi kurumaya başladığında sulayın.",
          "Sıcak dalgasında sıklığı artırın, yağıştan sonra bir sulamayı atlayın.",
          "Sonbaharda sıklığı kademeli azaltın.",
        ],
      },
      {
        p: "Toprak kontrolü için özel alet gerekmiyor: bir çubuk veya küçük bir kürek yeterli. Kök derinliğinde alınan toprak elde şekil alıyorsa nem yeterli, dağılıyorsa sulama zamanı gelmiş demektir.",
      },

      { h2: "Ne kadar su vermeli?" },
      {
        p: "Kesin bir rakam vermek yanıltıcı olur; ihtiyaç iklime, bitkiye ve toprağa göre değişir. Bunun yerine kullanılabilir bir yöntem var: bir sulama yapıp ertesi gün kök derinliğinde nemi kontrol etmek ve miktarı buna göre ayarlamak.",
      },
      {
        p: "Nem kök bölgesine ulaşmamışsa miktar artırılır. Kök bölgesinin altına inmişse azaltılır. İki–üç denemeyle bahçenizin gerçek ihtiyacı bulunur ve bu değer sezon boyunca referans olur.",
      },
      {
        quote:
          "Kitaptan alınan bir rakam yerine, kendi bahçenizde iki kez yaptığınız kontrol daha doğru sonuç verir.",
      },
      {
        p: "Yaz ortasında ihtiyacın belirgin arttığını, ilkbahar ve sonbaharda ise azaldığını unutmamak gerekir. Aynı program bütün sezon uygulandığında, ya yaz ortasında bitki susuz kalır ya bahar aylarında su israf edilir.",
      },

      { h2: "Islanma alanı ve damlatıcı yerleşimi" },
      {
        p: "Damlatıcının altındaki su, toprakta bir soğan biçiminde yayılır. Bu yayılımın genişliği toprak tipine bağlıdır; kumlu toprakta dar ve derin, killi toprakta geniş ve sığdır.",
      },
      {
        p: "Bu nedenle damlatıcı yerleşimi toprağa göre planlanır. Kumlu toprakta damlatıcılar birbirine yakın konur, killi toprakta aralık açılabilir. Doğru yerleşimin ölçüsü, ıslanan alanların birleşerek sürekli bir nemli şerit oluşturmasıdır.",
      },
      {
        p: "Ağaçlarda damlatıcılar gövdeye dayanmaz; taç izdüşümüne, yani emici köklerin bulunduğu bölgeye yerleştirilir. Gövde dibinin sürekli ıslak kalması kök boğazı çürüklüğü riskini artırır.",
      },

      { h2: "Çim alanlarda durum farklı" },
      {
        p: "Çim, kökleri yüzeye yakın olduğu için diğer bitkilerden farklı bir program ister. Derin sulamanın karşılığı yoktur; su kök bölgesinin altına indiğinde boşa gider.",
      },
      {
        p: "Buna karşılık çok sık sulama da yanlış. Yüzeyi sürekli ıslak tutmak mantar hastalıklarını davet eder ve kökleri iyice yüzeyde tutarak çimi sıcağa karşı dayanıksız hâle getirir.",
      },
      {
        p: "Yağmurlama sistemlerinde dağılım düzgünlüğü ayrı bir konu. Bahçeye yerleştirilen birkaç düz kap, farklı noktalara ne kadar su düştüğünü gösterir; fark büyükse başlık yerleşimi veya basınç gözden geçirilmelidir.",
      },

      { h2: "Saksı ve teras bitkileri" },
      {
        p: "Saksıdaki toprak hacmi sınırlı olduğu için su tutma kapasitesi çok düşüktür. Bu bitkiler bahçe bitkilerine göre çok daha sık sulama ister ve sıcak günlerde günde birden fazla sulama gerekebilir.",
      },
      {
        ul: [
          "Saksı altından su çıkana kadar sulamak, kök bölgesinin tamamen ıslandığını gösterir.",
          "Tabaklarda biriken suyun uzun süre kalması kök çürümesine yol açar.",
          "Koyu renk ve metal saksılar güneşte ısınır, su ihtiyacını artırır.",
          "Damlama sistemine bağlanan saksılar için ayrı bir zon kurulmalıdır.",
        ],
      },
      {
        p: "Teras ve balkon sistemlerinde ayrı zon kurmak neredeyse zorunlu. Saksı bitkilerinin ihtiyacı bahçe bitkilerinden o kadar farklıdır ki, aynı programda ikisini birden doğru sulamak mümkün olmuyor.",
      },

      { h2: "Yeni dikimde sulama farklıdır" },
      {
        p: "Yeni dikilmiş bir bitkinin kök sistemi henüz gelişmemiştir; su arayacak alanı dardır. Bu dönemde sulama daha sık ve daha küçük miktarlarda yapılır.",
      },
      {
        p: "Kök geliştikçe program kademeli olarak seyrekleştirilir ve miktar artırılır. Amaç, kökü suyu aramaya teşvik etmek ve derine yönlendirmektir. İlk sezonun sonunda bitki kalıcı programa geçebilir.",
      },
      {
        p: "Dikim çukurunun etrafındaki toprakla, dikimde kullanılan harcın su tutma kapasitesi farklı olabilir. Bu fark ilk yıl sulamada dikkate alınmazsa, su çukurun içinde kalır ve kök dışarı doğru gelişmez.",
      },

      { h2: "Programı sezona uyarlamak" },
      {
        table: {
          head: ["Dönem", "Yaklaşım"],
          rows: [
            ["İlkbahar", "Sıklık düşük, süre orta; toprak zaten nemli"],
            ["Yaz başı", "Sıklık kademeli artar"],
            ["Yaz ortası", "En yüksek ihtiyaç; süre ve sıklık zirvede"],
            ["Yaz sonu", "İhtiyaç azalmaya başlar"],
            ["Sonbahar", "Sıklık düşürülür, kışa hazırlık başlar"],
          ],
        },
      },
      {
        p: "Otomatik sistemlerde bu geçişleri yapmak kolay: kontrol ünitesinde mevsimsel ayar (yüzde artırma–azaltma) özelliği bulunur. Tüm programı yeniden yazmak yerine tek bir yüzde değeri değiştirilerek sistem sezona uyarlanır.",
      },

      { h2: "Su tüketimini düşüren uygulamalar" },
      {
        p: "Sulama süresini kısaltmak, su tüketimini azaltmanın tek yolu değil ve çoğu zaman en kötüsü. Bitkiyi susuz bırakmadan tüketimi düşüren birkaç yöntem var:",
      },
      {
        ul: [
          "Malç: toprak yüzeyini örten organik veya mineral katman, buharlaşmayı belirgin azaltır.",
          "Sabah sulama: buharlaşma kaybının en düşük olduğu saat.",
          "Damlamaya geçiş: suyu doğrudan köke verir, yüzey kaybı olmaz.",
          "Mevsimsel ayar: aynı programı yıl boyu kullanmamak.",
          "Yağmur ve nem sensörü: gereksiz sulamayı otomatik olarak engeller.",
          "Kaçak kontrolü: kırık bir lateral, sezon boyunca sessizce su harcar.",
        ],
      },
      {
        p: "Bu maddelerin çoğu tek seferlik uygulamalar ve etkileri sezon boyunca sürüyor. Malç özellikle sıcak ve rüzgârlı bölgelerde, sadece su tasarrufu değil; toprak sıcaklığını dengeleyerek bitki sağlığına da katkı sağlıyor.",
      },

      { h2: "Fazla sulamanın belirtileri" },
      {
        p: "Az sulamak kadar çok sulamak da zararlı. Kök bölgesi sürekli doygun kaldığında toprakta hava kalmaz; kökler nefes alamaz ve çürümeye başlar.",
      },
      {
        ul: [
          "Yaprakların sararması ve solgun görünmesi — susuzlukla karıştırılır.",
          "Toprak yüzeyinde yosun veya mantar oluşumu.",
          "Kök boğazında yumuşama, kabuk çürümesi.",
          "Sürekli ıslak kalan, ayak bastığında çamurlaşan zemin.",
          "Su faturasında veya kuyu çalışma süresinde beklenmedik artış.",
        ],
      },
      {
        p: "Sararmış yaprak gördüğünde daha çok sulamak, en sık yapılan hatalardan biri. Karar vermeden önce kök derinliğinde toprak kontrolü yapmak, bu yanlışın önüne geçiyor.",
      },

      { h2: "Sulama günlüğü tutmak" },
      {
        p: "Kısa bir kayıt, sulama kararlarını tahminden çıkarır. Hangi gün, ne kadar süre sulandığı ve o günün hava durumu not edildiğinde, birkaç hafta içinde bahçenizin gerçek ritmi ortaya çıkar.",
      },
      {
        p: "Kayıt ayrıca sorun tespitinde işe yarar. Bir bölgede gelişim geriliği fark edildiğinde, o bölgenin ne kadar su aldığı geriye dönük olarak görülebilir ve neden aranacak yer daralır.",
      },
      {
        p: "Otomatik sistemlerde kontrol ünitesi bu kaydı zaten tutar. Elle sulanan bahçelerde ise takvim üzerine yazılan birkaç kelime, aynı işi görüyor.",
      },

      { h2: "Malatya koşullarında dikkat edilecekler" },
      {
        p: "Bölgede yazlar sıcak ve kurak geçer; buharlaşma yüksektir. Bu, sulama ihtiyacının yaz ortasında belirgin şekilde artması anlamına gelir. Aynı programın nisan ve temmuz aylarında uygulanması mümkün değil.",
      },
      {
        p: "İkinci nokta rüzgâr: yağmurlama sistemlerinde rüzgârlı saatlerde yapılan sulamada suyun önemli bölümü hedefe ulaşmaz. Sabahın erken saatleri bu açıdan da avantajlı.",
      },
      {
        p: "Üçüncüsü kış hazırlığı. Sonbaharda sulama kademeli azaltılır ve sezon sonunda hatlar tahliye edilir. Donma riski, sadece boruları değil vana ve filtre gövdelerini de tehdit ediyor.",
      },
    ],
    faqs: [
      {
        q: "Bahçeyi her gün sulamak gerekir mi?",
        a: "Genellikle hayır. Her gün yapılan kısa sulamalar kökleri yüzeyde tutar ve bitkiyi sıcağa karşı savunmasız bırakır. Daha seyrek ama kök bölgesini gerçekten dolduran sulama tercih edilir. İstisna, kumlu ve çok geçirgen topraklar ile saksı bitkileridir.",
      },
      {
        q: "Sulama süresini nasıl hesaplarım?",
        a: "Bitkiye verilecek su miktarını, o bitkiye hizmet eden damlatıcıların toplam saatlik debisine bölün. Ağaç başına 40 litre verilecekse ve 4 litre/saat debili iki damlatıcı varsa süre beş saattir. Sonucu ertesi gün toprak kontrolüyle doğrulamak gerekir.",
      },
      {
        q: "Sabah mı akşam mı sulamak daha iyi?",
        a: "Sabahın erken saatleri en uygunudur. Buharlaşma düşüktür, bitki gün boyu suya erişir ve yapraklar gün içinde kurur. Akşam sulaması yaprakların gece boyunca ıslak kalmasına yol açarak mantar hastalığı riskini artırır; damlama sistemlerinde bu risk daha düşüktür.",
      },
      {
        q: "Toprağın yeterince sulandığını nasıl anlarım?",
        a: "Sulamadan bir gün sonra kök derinliğinde toprak alın. Elinizde şekil alıyor ve nemli hissediliyorsa yeterlidir; dağılıyorsa süre kısa kalmıştır. Yüzeydeki 5 santimetreye bakmak yanıltır; asıl kontrol kök bölgesinde yapılmalıdır.",
      },
      {
        q: "Aşırı sulama nasıl anlaşılır?",
        a: "Yaprakların sararması, toprak yüzeyinde yosun oluşumu, kök boğazında yumuşama ve sürekli çamurlu kalan zemin tipik belirtilerdir. Sararma çoğu zaman susuzlukla karıştırılır ve sulama artırılarak sorun büyütülür. Karar öncesi kök derinliğinde nem kontrolü şarttır.",
      },
      {
        q: "Yağmur yağdığında programı durdurmalı mıyım?",
        a: "Evet. Otomatik sistemlerde yağmur sensörü bu işi kendiliğinden yapar. Sensör yoksa yağıştan sonra bir sulama atlanır. Kısa süreli yağışların toprağın derinine inmediğini unutmayın; kararı yine kök derinliğindeki nem kontrolüyle vermek en doğrusu.",
      },
      {
        q: "Damlatıcı sayısını artırmak süreyi kısaltır mı?",
        a: "Evet. Aynı su miktarını daha kısa sürede vermenin yolu damlatıcı sayısını veya debisini artırmaktır. Ancak toplam debi kaynağın kapasitesini aşmamalıdır; aştığında hat sonundaki bitkiler yeterli su alamaz ve sistem dengesiz çalışır.",
      },
      {
        q: "Sezon boyunca aynı programı kullanabilir miyim?",
        a: "Kullanmamak gerekir. Su ihtiyacı yaz ortasında belirgin artar, ilkbahar ve sonbaharda azalır. Kontrol ünitelerindeki mevsimsel yüzde ayarı bu geçişi kolaylaştırır; tüm programı yeniden yazmadan tek bir değerle sistem sezona uyarlanabilir.",
      },
    ],
    related: ["otomatik-bahce-sulama", "damlama-sulama-nasil-kurulur", "kayisi-bahcesi-damlama-sulama"],
  },

  {
    slug: "kayisi-bahcesi-damlama-sulama",
    title: "Kayısı bahçesinde damlama sulama nasıl planlanır?",
    category: "Sulama",
    published: "2026-07-30",
    reading: 10,
    metaTitle: "Kayısı Bahçesinde Damlama Sulama | Planlama Rehberi",
    metaDesc:
      "Malatya kayısı bahçelerinde damlatıcı sayısı, yerleşim, kritik sulama dönemleri ve fertigasyon. Kuyu debisine göre zonlama ve kışa hazırlık.",
    keywords: [
      "kayısı bahçesi sulama",
      "kayısı damlama sulama",
      "malatya kayısı sulama",
      "fertigasyon",
      "meyve bahçesi sulama",
    ],
    excerpt:
      "Kayısıda sulama, sadece su vermek değil; hangi dönemde ne kadar verildiğini bilmek. Damlama sistemi bu kontrolü mümkün kılan en pratik yöntem.",
    services: ["kayisi-bahcesi-sulama", "tarimsal-sulama-sistemleri", "anahtar-teslim-sulama-sistemi"],
    intro:
      "Malatya'da kayısı, bahçenin bir parçası değil; bölgenin kendisi. Buna rağmen birçok bahçede sulama hâlâ salma yöntemiyle veya düzensiz aralıklarla yapılıyor. Damlama sistemi, suyu azaltmaktan çok onu doğru zamanda ve doğru yere vermeyi sağladığı için fark yaratıyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Kayısı bahçesinde damlama planlaması dört soruya yanıt vererek yapılır: kuyunun debisi ne, ağaç yaşı ve dikim aralığı ne, ağaç başına kaç damlatıcı gerekiyor ve bahçe kaç zona bölünecek?</strong>",
      },
      {
        p: "Genç ağaçlarda ağaç başına iki damlatıcı yeterli olurken, olgun ağaçlarda taç genişledikçe damlatıcı sayısı artırılır. Damlatıcılar gövdeye değil, taç izdüşümüne, emici köklerin bulunduğu bölgeye yerleştirilir.",
      },

      { h2: "Neden damlama?" },
      {
        p: "Salma sulamada su, ağacın ihtiyacından bağımsız olarak tüm yüzeye yayılır. Buharlaşma ve derine sızma kayıpları yüksektir; ayrıca sulama aralıkları uzun olduğu için ağaç iki sulama arasında strese girer.",
      },
      {
        p: "Damlama sisteminde su doğrudan kök bölgesine, ölçülebilir miktarda verilir. Bu, iki önemli sonuç doğurur: toprak nemi dalgalanmadan sabit kalır ve gübreleme suyla birlikte yapılabilir.",
      },
      {
        p: "Üçüncü fayda iş gücünde. Sulama saatlerini beklemek, hat açıp kapatmak yerine sistem programlanır. Geniş bahçelerde bu, sezon boyunca ciddi bir zaman kazancı anlamına geliyor.",
      },

      { h2: "Ağaç yaşına göre damlatıcı düzeni" },
      {
        table: {
          head: ["Ağaç durumu", "Damlatıcı sayısı", "Yerleşim"],
          rows: [
            ["Yeni dikim (1–2 yaş)", "2 adet", "Gövdeden 40–50 cm uzakta, karşılıklı"],
            ["Genç (3–5 yaş)", "2–4 adet", "Taç genişledikçe dışa alınır"],
            ["Verim çağı", "4–6 adet", "Taç izdüşümü çevresinde dağıtılır"],
            ["Yaşlı, geniş taçlı", "6 ve üzeri", "Çift lateral veya halka düzeni"],
          ],
        },
      },
      {
        p: "Damlatıcıları ağaç büyüdükçe dışa taşımak gerekir. Genç ağaç düzeniyle devam eden bir bahçede, ağaç büyüdüğünde su hâlâ gövde dibine verilir ve emici köklerin bulunduğu dış bölge kuru kalır.",
      },
      {
        p: "Geniş taçlı ağaçlarda iki lateral hat çekmek yaygın çözüm: sıranın iki yanından geçen hatlar, kök bölgesini daha dengeli ıslatır. Bu düzen aynı zamanda tek hattaki bir arızada bahçenin tamamen susuz kalmasını önler.",
      },

      { h2: "Kritik sulama dönemleri" },
      {
        p: "Kayısıda su ihtiyacı sezon boyunca sabit değildir. Bazı dönemlerde yaşanan su stresi, o yılın verimini doğrudan etkiler:",
      },
      {
        ul: [
          "Meyve tutumu sonrası: hücre bölünmesi dönemidir, su stresi meyve iriliğini düşürür.",
          "Çekirdek sertleşmesi: ihtiyaç sürer, düzensiz sulama meyve dökümüne yol açabilir.",
          "Hasat öncesi hızlı büyüme: meyve iriliğinin belirlendiği dönemdir.",
          "Hasat sonrası: gelecek yılın gözleri bu dönemde oluşur, sulama kesilmemelidir.",
          "Sonbahar: kışa girmeden önce toprak profilinin nemli olması faydalıdır.",
        ],
      },
      {
        p: "En sık yapılan hata, hasattan sonra sulamayı tamamen kesmek. Ağaç o dönemde gelecek yılın hazırlığını yapıyor; susuz bırakılan bahçe ertesi yıl daha zayıf bir başlangıç yapıyor.",
      },

      { h2: "Kuyu debisine göre zonlama" },
      {
        p: "Bahçenin tamamını aynı anda sulamak çoğu zaman mümkün değildir; kuyunun debisi sınırlıdır. Bu nedenle bahçe zonlara ayrılır ve zonlar sırayla sulanır.",
      },
      {
        table: {
          head: ["Veri", "Örnek değer"],
          rows: [
            ["Kuyu debisi", "6000 litre/saat"],
            ["Ağaç başına damlatıcı", "4 adet × 4 l/h = 16 l/h"],
            ["Aynı anda sulanabilecek ağaç", "375 ağaç"],
            ["Bahçedeki toplam ağaç", "1100 ağaç"],
            ["Gereken zon sayısı", "3 zon"],
          ],
        },
      },
      {
        p: "Zonları belirlerken arazi eğimi de dikkate alınır. Aynı zonda büyük kot farkı varsa, üst taraftaki damlatıcılar az, alt taraftakiler çok su verir. Bu durumda basınç kompanseli damlatıcı kullanmak gerekir.",
      },
      {
        p: "Zon sayısı arttıkça toplam sulama süresi uzar. Kuyunun günlük çalışma saati bu hesaba dâhil edilmeli; aksi hâlde kâğıt üzerinde çalışan bir plan, sahada günün yetmemesi nedeniyle uygulanamaz hâle geliyor.",
      },

      { h2: "Fertigasyon: suyla gübreleme" },
      {
        p: "Damlama sisteminin en değerli yanlarından biri, gübrenin suyla birlikte ve kök bölgesine verilebilmesi. Bu yöntem gübrenin daha etkin kullanılmasını sağlar ve yüzeye serpme uygulamalardaki kayıpları azaltır.",
      },
      {
        p: "Uygulamada dikkat edilecek üç kural var: gübreleme ünitesi filtreden önce bağlanır, tam çözünür gübre kullanılır ve uygulama sonrası hat temiz suyla yıkanır.",
      },
      {
        quote:
          "Fertigasyonda hattı yıkamayı atlamak, birkaç sezon içinde damlatıcıların yarısını tıkayan en yaygın alışkanlık.",
      },
      {
        p: "Gübre programının bitkinin gelişim dönemine göre kurgulanması gerekiyor. Aynı gübreyi sezon boyunca sabit dozda vermek yerine, dönemlere göre ayarlanmış bir program hem verimi hem gübre verimliliğini artırıyor.",
      },

      { h2: "İlkbahar geç donları" },
      {
        p: "Bölgenin en bilinen riski ilkbahar geç donları. Bu konuda net olmak gerekir: damlama sulama, don koruması sağlamaz. Don koruması amacıyla kullanılan yöntem üstten yağmurlama sistemidir ve ayrı bir tasarım gerektirir.",
      },
      {
        p: "Damlama sisteminin dolaylı bir katkısı olabilir: nemli toprak, kuru toprağa göre gün içinde daha fazla ısı depolar ve gece bunu yavaş yavaş bırakır. Ancak bu etki sınırlıdır ve tek başına bir koruma yöntemi sayılmaz.",
      },
      {
        p: "Don koruma amacıyla yağmurlama düşünülüyorsa, sistemin su ihtiyacı damlama sisteminden kat kat fazladır ve kuyu kapasitesinin buna uygunluğu önceden hesaplanmalıdır. İki sistemi aynı kaynağa bağlamak, planlama gerektiren bir karar.",
      },

      { h2: "Kayısıda sık görülen sulama hataları" },
      {
        ul: [
          "Damlatıcıları gövde dibine yerleştirmek; kök boğazı sürekli ıslak kalır.",
          "Ağaç büyüdüğü hâlde damlatıcı düzenini değiştirmemek.",
          "Hasat sonrası sulamayı tamamen kesmek.",
          "Filtre bakımını aksatmak ve tıkanmayı fark etmemek.",
          "Eğimli arazide basınç kompanseli damlatıcı kullanmamak.",
          "Sulama miktarını ölçmemek; sayaç olmadan program doğrulanamaz.",
          "Kış öncesi hatları tahliye etmemek.",
        ],
      },
      {
        p: "Bu maddelerin birçoğu tek tek küçük görünür. Bir arada olduklarında ise sistemin verimi belirgin düşer ve \"damlama sulama beklediğimi vermedi\" sonucuna varılır. Halbuki sorun yöntemde değil, uygulamadadır.",
      },

      { h2: "Toprak yapısı ve tuzlanma" },
      {
        p: "Damlama sulamada su hep aynı noktadan verildiği için, ıslanan alanın kenarında tuz birikimi oluşur. Bu, özellikle sulama suyunun tuz içeriği yüksek olduğu yerlerde birkaç sezon içinde belirginleşir.",
      },
      {
        p: "Yağışlı dönemler bu tuzun yıkanmasına yardımcı olur. Yağışın yetersiz kaldığı yıllarda ise sezon sonunda daha uzun süreli bir sulama yaparak tuzun kök bölgesinden uzaklaştırılması faydalı olur.",
      },
      {
        p: "Damlatıcı konumunu yıllar içinde bir miktar kaydırmak da uygulanan yöntemlerden biri. Aynı noktanın sürekli ıslanması yerine, ıslanan bölgenin dönüşümlü değişmesi tuz birikimini dağıtıyor.",
      },

      { h2: "Genç bahçede sulama" },
      {
        p: "Yeni tesis edilmiş bir kayısı bahçesinde amaç, kökü derine yönlendirmek. Bunun için sulama sık ve az değil; kök bölgesini dolduracak ölçüde ve giderek seyrekleşen aralıklarla yapılır.",
      },
      {
        p: "İlk yıllarda damlatıcılar gövdeye daha yakındır ve sayıları azdır. Ağaç büyüdükçe hem sayı artırılır hem konum dışa taşınır. Bu değişiklik yapılmadığında ağacın kökleri dar bir alanda sıkışır.",
      },
      {
        p: "Genç bahçede dikkat edilecek ikinci konu, sıra aralarındaki yabancı otların suyu paylaşması. Ot kontrolü yapılmayan bir bahçede verilen suyun bir bölümü ağaca ulaşmadan tüketiliyor.",
      },

      { h2: "Sistem ve budama ilişkisi" },
      {
        p: "Taç yapısı değiştikçe kök bölgesi de değişir. Sert budama sonrası ağacın su ihtiyacı bir süre azalır; taç yeniden geliştiğinde ihtiyaç eski seviyesine döner.",
      },
      {
        p: "Bu nedenle budama ile sulama programının birlikte düşünülmesi gerekir. Budama sonrası aynı programın sürdürülmesi, kök bölgesinde gereğinden fazla nem bırakabilir.",
      },
      {
        p: "Aynı ilişki damlatıcı yerleşimi için de geçerli. Taç izdüşümü değiştiğinde damlatıcıların konumu da gözden geçirilir; bu kontrol, sezon açılışı bakımının doğal bir parçası olmalı.",
      },

      { h2: "Ölçmek: sayaç ve kayıt" },
      {
        p: "Hattın başına takılan bir su sayacı, bahçe yönetimini tahminden çıkarır. Her sulamada verilen su miktarı okunur ve kaydedilir; sezon sonunda toplam kullanım net biçimde görülür.",
      },
      {
        p: "Sayaç ayrıca arıza tespitinde de işe yarar. Beklenenden yüksek bir tüketim, hatta kaçak veya kırık lateral olduğunu gösterir. Bu bilgi olmadan kaçak, ancak gözle görülene kadar sürer.",
      },
      {
        p: "Kayıt tutmanın ikinci faydası yıllar arası karşılaştırma. Hangi yıl ne kadar su verildiği ve verimin nasıl değiştiği birlikte izlendiğinde, program her sezon biraz daha isabetli hâle geliyor.",
      },

      { h2: "Sulama suyunun kalitesi" },
      {
        p: "Bahçenin suyu, sistemin ömrünü ve toprağın uzun vadeli durumunu belirler. Analiz yaptırmak; sertlik, tuzluluk, demir ve askıda katı madde gibi başlıkları görünür kılar.",
      },
      {
        table: {
          head: ["Bulgu", "Sistemdeki etkisi", "Alınacak önlem"],
          rows: [
            ["Yüksek sertlik", "Damlatıcıda kireç birikimi", "Sezon sonu asit yıkaması"],
            ["Yüksek tuzluluk", "Toprakta tuz birikmesi", "Yıkama sulaması, damlatıcı konumu değişimi"],
            ["Demir içeriği", "Kırmızı çökelti, tıkanma", "Havalandırma ve filtreleme"],
            ["Askıda katı madde", "Filtre ve damlatıcı tıkanması", "İki kademeli filtreleme"],
            ["Organik yük", "Alg ve biyofilm", "Kum filtre, kontrollü klor uygulaması"],
          ],
        },
      },
      {
        p: "Analiz sonucu bir defa alındığında yıllarca yol gösterir. Kuyu suyunun karakteri kısa sürede değişmez; bu nedenle tek bir analiz, hem filtre seçimi hem bakım programı için sağlam bir temel oluşturur.",
      },

      { h2: "Bakım takvimi" },
      {
        table: {
          head: ["Dönem", "Yapılacak iş"],
          rows: [
            ["Sezon açılışı", "Hat yıkama, basınç testi, damlatıcı kontrolü"],
            ["Sulama sezonu", "Filtre temizliği, manometre takibi, lateral yıkama"],
            ["Gübreleme sonrası", "Hattın temiz suyla yıkanması"],
            ["Hasat sonrası", "Sulamanın sürdürülmesi, sistem kontrolü"],
            ["Sonbahar", "Kademeli azaltma, arıza tespiti"],
            ["Kış öncesi", "Tahliye, filtre sökümü, vana kutusu kontrolü"],
          ],
        },
      },
      {
        p: "Bu takvim, sistemin ömrünü belirleyen asıl unsur. Damlama sistemleri doğru kurulduğunda uzun yıllar çalışır; erken biten sistemlerin neredeyse tamamında ortak sebep bakımın aksatılmasıdır.",
      },

      { h2: "Sistem büyütülebilir mi?" },
      {
        p: "Bahçe genişletilecekse veya yeni parseller eklenecekse, sistemin buna hazır olması gerekir. Ana hat çapı ve kuyu debisi, ileride eklenecek alanı da düşünerek seçilirse büyüme kolay olur.",
      },
      {
        p: "Sonradan yapılan eklemelerde en sık yaşanan sorun, mevcut zonların basıncının düşmesidir. Yeni alan aynı zona bağlandığında toplam damlatıcı debisi artar ve hat sonundaki ağaçlar yeterli su alamaz.",
      },
      {
        p: "Doğru yaklaşım, yeni alanı ayrı bir zon olarak kurmak ve program süresini buna göre uzatmaktır. Manifold üzerinde baştan bırakılan yedek çıkış, bu genişlemeyi çok kolaylaştırıyor.",
      },

      { h2: "Kemirgen ve mekanik hasar" },
      {
        p: "Bahçelerde laterallere en çok zarar veren iki etken var: kemirgenler ve tarım aletleri. Fare ve tavşan zararı genelde sezon dışında, hat boşken ortaya çıkar ve ilk çalıştırmada fark edilir.",
      },
      {
        p: "Bu yüzden sezon açılışında hattın tamamı basınç altında gözle taranmalı. Küçük bir delik, bir sezon boyunca fark edilmediğinde hem su kaybı hem de o bölgedeki ağaçlarda gelişim geriliği yaratır.",
      },
      {
        p: "Toprak işleme sırasında hatların konumunun bilinmesi de önemli. Laterallerin sıra üzerinde sabitlenmesi ve dönüş noktalarında işaretlenmesi, çapa ve pulluk kaynaklı kesikleri belirgin azaltıyor.",
      },
    ],
    faqs: [
      {
        q: "Kayısı ağacına kaç damlatıcı gerekir?",
        a: "Ağaç yaşına ve taç genişliğine bağlıdır. Yeni dikimde iki damlatıcı yeterli olurken, verim çağındaki ağaçlarda genellikle dört–altı damlatıcı kullanılır. Önemli olan sayı değil, ıslanan alanın emici köklerin bulunduğu taç izdüşümünü kapsamasıdır.",
      },
      {
        q: "Damlatıcılar gövdeye ne kadar uzakta olmalı?",
        a: "Gövde dibine konmamalıdır. Genç ağaçlarda gövdeden yaklaşık 40–50 santim uzağa, olgun ağaçlarda ise taç izdüşümü çevresine yerleştirilir. Gövde dibinin sürekli ıslak kalması kök boğazı çürüklüğü riskini artırır ve ağacın ömrünü kısaltır.",
      },
      {
        q: "Hasattan sonra sulama kesilir mi?",
        a: "Kesilmemelidir. Hasat sonrası dönemde ağaç gelecek yılın gözlerini oluşturur ve depo maddelerini biriktirir. Bu dönemde yaşanan su stresi ertesi yılın verimini düşürür. Sulama, sonbahara doğru kademeli olarak azaltılarak sürdürülür.",
      },
      {
        q: "Damlama sulama dona karşı koruma sağlar mı?",
        a: "Hayır. Don koruması için kullanılan yöntem üstten yağmurlama sistemidir ve ayrı bir tasarım ile çok daha yüksek su kapasitesi gerektirir. Damlama sisteminin nemli toprak üzerinden dolaylı ve sınırlı bir katkısı olabilir; ancak bu bir koruma yöntemi sayılmaz.",
      },
      {
        q: "Salma sulamadan damlamaya geçmek zor mu?",
        a: "Geçiş, mevcut kaynağın debisinin ölçülmesi ve bahçenin zonlara ayrılmasıyla başlar. Ana hat, filtre ve laterallerin kurulumu genelde tek sezon dışı dönemde tamamlanır. En kritik aşama tasarım; kuyu debisi ve ağaç sayısı doğru eşleştirilmezse sistem dengesiz çalışır.",
      },
      {
        q: "Fertigasyon her bahçede uygulanabilir mi?",
        a: "Damlama sistemi kurulu her bahçede uygulanabilir. Gereken ekipman bir gübreleme ünitesi ve çekvalftir. Tam çözünür gübre kullanılması, ünitenin filtreden önce bağlanması ve uygulama sonrası hattın yıkanması bu yöntemin üç temel kuralıdır.",
      },
      {
        q: "Eğimli bahçede ne yapmalı?",
        a: "Basınç kompanseli damlatıcı kullanılmalıdır. Normal damlatıcıda yüksek noktada az, alçak noktada çok su akar; bu fark ağaçlar arasında gelişim farkına dönüşür. Ayrıca zonların mümkün olduğunca aynı kot bandında kurulması dengeyi kolaylaştırır.",
      },
      {
        q: "Sistem kaç yıl çalışır?",
        a: "Bakımı yapılan bir damlama sistemi uzun yıllar çalışır. Ömrü belirleyen ana etkenler filtre bakımı, gübreleme sonrası yıkama, kış tahliyesi ve mekanik hasarların zamanında onarılmasıdır. Erken biten sistemlerde neredeyse her zaman ortak sebep aksatılan bakımdır.",
      },
    ],
    related: ["damlama-sulama-nasil-kurulur", "sulama-filtresi-secimi", "bahce-sulama-suresi"],
  },

  {
    slug: "sulama-otomasyonu-secimi",
    title: "Sulama otomasyonu: kontrol ünitesi, vana ve sensör seçimi",
    category: "Sulama",
    published: "2026-07-24",
    reading: 9,
    metaTitle: "Sulama Otomasyonu | Kontrol Ünitesi ve Vana Seçimi",
    metaDesc:
      "Otomatik sulamada kontrol ünitesi, selenoid vana, sensör ve kablolama nasıl seçilir? Sık görülen arızalar, program mantığı ve kış hazırlığı.",
    keywords: [
      "sulama otomasyonu",
      "sulama kontrol ünitesi",
      "selenoid vana",
      "yağmur sensörü",
      "otomatik sulama arızası",
    ],
    excerpt:
      "Otomatik sulamada kararı veren kontrol ünitesi değil, sistemin kurgusu. Vana, kablo ve sensör doğru seçildiğinde sistem yıllarca kendi başına çalışıyor.",
    services: ["bahce-sulama", "uzaktan-kumanda-otomasyon", "anahtar-teslim-sulama-sistemi"],
    intro:
      "Otomatik sulamanın vaadi basit: doğru miktarda suyu doğru zamanda vermek ve bunu her gün düşünmek zorunda kalmamak. Bu vaadin tutması ise ekipman seçimine bağlı. Yanlış seçilmiş bir vana veya suya maruz kalmış bir kablo eki, tüm sistemi güvenilmez hâle getiriyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Bir sulama otomasyonu üç ana parçadan oluşur: programı yürüten kontrol ünitesi, suyu açıp kapatan selenoid vanalar ve kararı besleyen sensörler.</strong> Dördüncü ve en çok ihmal edilen parça ise kablolama ve su geçirmez eklerdir.",
      },
      {
        p: "Sistemin güvenilirliği en zayıf halkasına eşittir. Sahada gördüğümüz arızaların büyük bölümü kontrol ünitesinden değil; su almış kablo eklerinden, kirlenmiş vana diyaframından ve yanlış yerleştirilmiş sensörlerden kaynaklanıyor.",
      },

      { h2: "Kontrol ünitesi nasıl seçilir?" },
      {
        p: "Kontrol ünitesi seçiminde ilk kriter istasyon sayısıdır. Her zon bir istasyona bağlanır; bahçenin zon sayısı belirlendikten sonra en az bir–iki yedek istasyonu olan model tercih edilir.",
      },
      {
        ul: [
          "İstasyon sayısı: zon sayısı + yedek.",
          "Bağımsız program sayısı: farklı bitki gruplarına ayrı program yazabilmek için.",
          "Mevsimsel ayar: tüm süreleri tek yüzdeyle artırıp azaltma imkânı.",
          "Pompa rölesi veya ana vana çıkışı: pompayla senkron çalışma için.",
          "Sensör girişi: yağmur ve nem sensörünü bağlayabilmek için.",
          "Uzaktan erişim: geniş bahçelerde ve ikinci konutlarda pratik.",
          "Hafıza yedeği: elektrik kesintisinde programın silinmemesi için.",
        ],
      },
      {
        p: "Dış mekâna monte edilecek üniteler uygun koruma sınıfında olmalı. İç mekân için üretilmiş bir ünitenin dışarıda kullanılması, birkaç sezonda nem kaynaklı arızalarla sonuçlanıyor.",
      },

      { h2: "Selenoid vana ve kutusu" },
      {
        p: "Selenoid vana, kontrol ünitesinden gelen sinyalle açılıp kapanan elektrikli vanadır. Çoğu bahçe sisteminde düşük gerilimli bobinler kullanılır; bu, hem güvenlik hem kolay kablolama sağlar.",
      },
      {
        p: "Vanalar, içine su dolmayan ve drenajı olan kutulara yerleştirilir. Kutu içindeki suya gömülü kalan bir bobin veya kablo eki, en sık karşılaşılan arıza kaynağı. Kutu altına çakıl serilmesi drenajı belirgin iyileştirir.",
      },
      {
        p: "Her vanada manuel açma imkânı bulunur. Elektrik veya kontrol ünitesi arızasında sulamayı elle yapabilmek, sezon ortasında ciddi bir kolaylık; devreye alma sırasında bu işlevin çalıştığı mutlaka test edilmelidir.",
      },

      { h2: "Pilli sistemler ne zaman mantıklı?" },
      {
        p: "Elektrik bulunmayan bahçelerde pille çalışan, darbe sinyaliyle konum değiştiren vanalar kullanılır. Bu sistemler kablo çekmeyi ortadan kaldırır ve kurulumu hızlandırır.",
      },
      {
        table: {
          head: ["Ölçüt", "Elektrikli sistem", "Pilli sistem"],
          rows: [
            ["Kurulum", "Kablo çekmek gerekir", "Kablosuz, hızlı"],
            ["Güvenilirlik", "Yüksek", "Pil ömrüne bağlı"],
            ["İstasyon sayısı", "Yüksek", "Genelde sınırlı"],
            ["Bakım", "Düşük", "Pil takibi gerekir"],
            ["Uygun yer", "Kalıcı bahçeler", "Elektrik olmayan araziler"],
          ],
        },
      },
      {
        p: "Pilli sistemlerde en kritik konu pil takibi. Sezon başında pilleri yenilemek, sezon ortasında sulanmayan bir zonla uğraşmaktan daha kolay ve ucuz.",
      },

      { h2: "Sensörler: sistemi akıllı yapan parça" },
      {
        p: "Program tek başına hava durumunu bilmez. Sensörler, sistemin gerçek koşullara tepki vermesini sağlar ve hem su tasarrufu hem bitki sağlığı açısından fark yaratır.",
      },
      {
        ul: [
          "Yağmur sensörü: belirli bir yağış sonrası programı askıya alır.",
          "Toprak nem sensörü: kök bölgesindeki nemi ölçer, gereksiz sulamayı engeller.",
          "Akış sensörü: beklenmedik debi artışında kaçak olduğunu gösterir.",
          "Donma sensörü: düşük sıcaklıkta sulamayı engeller.",
          "Rüzgâr sensörü: yağmurlama sistemlerinde savrulmayı önler.",
        ],
      },
      {
        p: "Akış sensörü, geniş bahçelerde en çok işe yarayan ama en az kullanılan eleman. Kırılan bir lateral veya patlayan bir bağlantı, sensör olmadan günlerce fark edilmeyebilir; sensör varsa sistem hem uyarır hem zonu kapatır.",
      },

      { h2: "Kablolama ve ekler" },
      {
        p: "Sulama kablosu, toprak altında sürekli neme maruz kalır. Bu nedenle bu iş için üretilmiş çok damarlı kablo kullanılır ve ekler su geçirmez bağlantı elemanlarıyla yapılır.",
      },
      {
        ol: [
          "Kablo, mümkünse kesintisiz tek parça çekilir.",
          "Ek zorunluysa jel dolgulu, su geçirmez klemens kullanılır.",
          "Kablo boru içine alınarak korunur; doğrudan toprağa serilmez.",
          "Ek noktaları vana kutusu içinde ve erişilebilir konumda bırakılır.",
          "Kablo güzergâhı krokiye işlenir; sonraki kazılarda kesilmesi önlenir.",
          "Ortak dönüş hattı tüm vanalara ulaşacak şekilde planlanır.",
        ],
      },
      {
        p: "Elektrik bandıyla yapılan ekler, birkaç sezon içinde mutlaka su alır. Bu ekler ilk yıl sorunsuz çalıştığı için güven verir; arıza genelde iki–üç yıl sonra, hiç beklenmedik bir zamanda ortaya çıkar.",
      },

      { h2: "Program mantığı" },
      {
        p: "Kontrol ünitesinde zonlar aynı anda değil, sırayla çalışır. Bunun nedeni kaynağın debisidir: iki zon aynı anda açıldığında basınç düşer ve hiçbir zon doğru çalışmaz.",
      },
      {
        p: "Program yazarken üç değer belirlenir: başlangıç saati, her zonun süresi ve hangi günlerde çalışacağı. Toplam süre, kaynak kapasitesi ve gün içindeki uygun sulama penceresine sığmalıdır.",
      },
      {
        p: "Bir bahçede birden fazla bitki grubu varsa ayrı programlar kullanılır. Çim, sebze ve ağaç aynı programda olduğunda üçünden ikisi ya fazla ya az su alır; ayrı programlar bu sorunu ortadan kaldırır.",
      },

      { h2: "Ana vana ve geri akış önleme" },
      {
        p: "Ana vana (master vana), sulama yapılmadığı zamanlarda hattı basınç altında tutmayan bir güvenlik elemanıdır. Program dışında bir zon vanası sızdırsa bile su gitmez; kaçak, ana vana sayesinde sınırlı kalır.",
      },
      {
        p: "Şebeke bağlantılı sistemlerde geri akış önleyici kullanmak ayrıca önemli. Sulama hattındaki suyun, basınç düşmesi durumunda içme suyu hattına geri kaçması istenmeyen bir durumdur ve basit bir çekvalfle önlenir.",
      },
      {
        p: "Gübreleme yapılan sistemlerde bu eleman zorunlu sayılmalı. Gübreli suyun kaynağa dönmesi, hem kuyu hem şebeke açısından ciddi bir risk oluşturur.",
      },

      { h2: "Uzaktan yönetim ne kazandırıyor?" },
      {
        p: "İnternete bağlanabilen kontrol üniteleri, programı telefondan değiştirmeye ve sistemi uzaktan izlemeye imkân verir. Kazanç sadece konfor değil; sorunları erken görmek de mümkün hâle geliyor.",
      },
      {
        ul: [
          "Yağış sonrası programı anında askıya alabilme.",
          "Zon çalışma kayıtlarını görüp beklenmedik durumları fark etme.",
          "Akış sensörüyle birlikte kullanıldığında kaçak uyarısı alma.",
          "İkinci konut veya uzaktaki bahçeyi yerinde olmadan yönetme.",
          "Mevsimsel ayarı birkaç saniyede güncelleme.",
        ],
      },
      {
        p: "Bağlantı kesildiğinde sistemin yerel programla çalışmaya devam etmesi önemli bir özellik. İnternet olmadan sulamayı tamamen durduran bir kurgu, bahçeyi tek bir bağlantıya bağımlı hâle getiriyor.",
      },

      { h2: "Sistemi kim yönetecek?" },
      {
        p: "Otomasyonun sürdürülebilir olması, sistemi kullanacak kişinin onu anlamasına bağlı. Devreye alma sırasında programın nasıl değiştirileceği, manuel çalıştırmanın nasıl yapılacağı ve arıza durumunda ne yapılacağı mutlaka gösterilmelidir.",
      },
      {
        p: "Pratik bir yöntem: zon numaralarının hangi bölgeye karşılık geldiğini gösteren küçük bir kroki hazırlayıp kontrol ünitesinin kapağına yapıştırmak. Yıllar sonra bile hangi vananın nereyi suladığı tartışma konusu olmuyor.",
      },
      {
        p: "Aynı krokiye vana kutularının ve kablo güzergâhının yerleri de işlenmeli. Bahçede yapılacak herhangi bir kazı öncesi bu kroki, kesilen kablo ve patlayan boru sayısını sıfıra yaklaştırıyor.",
      },

      { h2: "Sık görülen arızalar" },
      {
        table: {
          head: ["Belirti", "Muhtemel neden", "Kontrol"],
          rows: [
            ["Bir zon hiç açılmıyor", "Bobin yanmış veya kablo kopuk", "Bobin direnci ölçümü"],
            ["Zon kapanmıyor, su akıyor", "Diyafram kirli veya vana içinde kum", "Vana sökülüp temizlenir"],
            ["Tüm zonlar çalışmıyor", "Besleme, sigorta veya ünite arızası", "Adaptör ve sigorta kontrolü"],
            ["Program kendiliğinden değişiyor", "Hafıza yedeği yok, kesinti yaşanıyor", "Pil/yedek kontrolü"],
            ["Sulama olmadığı hâlde su gidiyor", "Vana tam kapanmıyor", "Vana bakımı"],
            ["Sensör devrede kalmış", "Sensör arızası veya yanlış konum", "Sensör testi"],
          ],
        },
      },
      {
        p: "Bu arızaların çoğu, yılda bir yapılan sezon açılışı kontrolüyle önceden yakalanabiliyor. Her zonu tek tek çalıştırıp gözlemlemek yarım saat sürüyor ve sezonun geri kalanını rahatlatıyor.",
      },

      { h2: "Vana kutusu düzeni" },
      {
        p: "Vana kutusu, sistemin bakım yapılan tek noktası. Düzenli bir kutu, arıza anında dakikalar kazandırır; dağınık bir kutu ise basit bir işi saatlik bir uğraşa çevirir.",
      },
      {
        ul: [
          "Kutu, zemin seviyesinden bir miktar yüksekte konumlanmalı; yağmur suyu içeri akmamalı.",
          "Kutu altına çakıl serilerek drenaj sağlanmalı.",
          "Kablo ekleri kutu içinde ve erişilebilir olmalı.",
          "Her vananın hangi zona ait olduğu üzerine yazılmalı.",
          "Kutu kapağı bahçe bakımı sırasında kaybolmayacak şekilde sabitlenmeli.",
        ],
      },
      {
        p: "Vana kutularının yerlerinin krokiye işlenmesi de önemli. Zamanla toprak ve bitki örtüsü altında kalan kutuları aramak, sulama sistemlerinde sık yaşanan ve tamamen önlenebilir bir zaman kaybı.",
      },

      { h2: "Pompayla senkron çalışma" },
      {
        p: "Kaynak kuyu veya depo ise pompanın sulama programıyla birlikte çalışması gerekir. Bu, kontrol ünitesinin pompa rölesi çıkışıyla sağlanır: zon açıldığında röle pompayı devreye alır, zon kapandığında durdurur.",
      },
      {
        p: "Bu bağlantı yapılmadığında iki senaryo çıkar: ya pompa sürekli çalışır ve boşuna basınç tutar, ya da vana açıldığında su gelmez. İkisi de sistemin güvenilirliğini bitirir.",
      },
      {
        p: "Pompa röle bağlantısında kuru çalışma korumasının da devrede olması şart. Program gece çalışırken kaynak biterse, koruma yoksa pompa saatlerce susuz çalışır ve sabaha yanmış olarak bulunur.",
      },

      { h2: "Mevcut sistemi otomasyona çevirmek" },
      {
        p: "Elle çalışan bir sulama sistemi genelde baştan kurulmadan otomasyona geçirilebilir. Mevcut hatlar ve damlatıcılar korunur; değişen kısım, vanaların elektrikli tipe dönüştürülmesi ve kontrol ünitesinin eklenmesidir.",
      },
      {
        ol: [
          "Mevcut zonlar tespit edilir; hangi vana nereyi suluyor, kroki çıkarılır.",
          "Manuel vanaların yerine selenoid vanalar konur, vana kutuları yerleştirilir.",
          "Kontrol ünitesi için uygun, korunaklı bir konum belirlenir.",
          "Kablo güzergâhı planlanır ve boru içinden çekilir.",
          "Pompa varsa röle bağlantısı yapılır, kuru çalışma koruması kontrol edilir.",
          "Sensörler eklenir, program yazılır ve zonlar tek tek test edilir.",
        ],
      },
      {
        p: "Dönüşümde en çok atlanan adım birincisi. Hangi vananın nereyi suladığı yazılı hâle getirilmeden yapılan bir kurulumda, program yazılırken zonlar karışıyor ve bahçenin bir bölümü fazla, bir bölümü az su alıyor.",
      },

      { h2: "Kışa hazırlık ve sezon açılışı" },
      {
        ol: [
          "Sezon sonunda ana vana kapatılır, hatlar tahliye edilir.",
          "Vana kutuları kontrol edilir, içine dolan su boşaltılır.",
          "Kontrol ünitesi kış moduna alınır veya enerjisi kesilir.",
          "Sensörler ve pil durumu kontrol edilir.",
          "Sezon açılışında sistem düşük basınçta yıkanır.",
          "Her zon tek tek çalıştırılıp gözle kontrol edilir.",
          "Program mevsime göre yeniden ayarlanır.",
        ],
      },
      {
        p: "Malatya'da kış donları vana gövdelerini çatlatacak kadar sert geçebiliyor. Tahliye edilmemiş bir sistemde bahar açılışında birden fazla vana ve bağlantı değişimi gerekiyor; bu, on dakikalık bir işin ertelenmesinin bedeli.",
      },
    ],
    faqs: [
      {
        q: "Otomatik sulama sistemi elektrik olmadan kurulabilir mi?",
        a: "Evet. Pille çalışan, darbe sinyaliyle konum değiştiren vanalar ve pilli kontrol üniteleriyle kablosuz sistemler kurulabilir. Kurulumu hızlıdır ancak istasyon sayısı genelde sınırlıdır ve pil takibi gerekir. Sezon başında pillerin yenilenmesi en pratik yaklaşımdır.",
      },
      {
        q: "Zonlar neden aynı anda çalışmıyor?",
        a: "Kaynağın debisi sınırlı olduğu için. İki zon aynı anda açıldığında basınç düşer, damlatıcılar yeterli su vermez ve hat sonları susuz kalır. Kontrol üniteleri bu nedenle zonları sırayla çalıştırır. Toplam süre planlanırken kaynağın günlük çalışma kapasitesi de hesaba katılmalıdır.",
      },
      {
        q: "Bir zon hiç açılmıyorsa ne yapmalıyım?",
        a: "Önce vananın bobin direnci ölçülür; yanmış bobin açık devre verir. Bobin sağlamsa kablo hattı ve ekler kontrol edilir. Su almış bir ek en sık nedendir. Kontrol ünitesinin o istasyon çıkışında gerilim olup olmadığına bakmak da ayrımı hızla yapar.",
      },
      {
        q: "Vana kapanmıyor, su akmaya devam ediyor. Neden?",
        a: "Genellikle diyafram üzerinde biriken kir veya vana içine kaçan kum nedeniyle olur. Vana sökülüp diyafram temizlendiğinde çoğu durumda sorun çözülür. Sık tekrarlıyorsa hattaki filtreleme yetersizdir; kaynak tarafında filtre eklenmesi gerekir.",
      },
      {
        q: "Yağmur sensörü gerçekten işe yarar mı?",
        a: "Evet, hem su tasarrufu hem bitki sağlığı açısından. Yağış sonrası programı askıya alarak gereksiz sulamayı önler. Doğru konumlandırılması önemlidir: ağaç altına veya saçak altına konan bir sensör yağışı göremez ve işlevsiz kalır.",
      },
      {
        q: "Akış sensörü ne işe yarar?",
        a: "Sistemdeki debiyi izler ve beklenmedik artışta kaçak olduğunu bildirir. Kırılan bir lateral veya patlayan bağlantı, sensör olmadan günlerce fark edilmeyebilir. Geniş bahçelerde ve uzaktan yönetilen sistemlerde en çok fayda sağlayan elemanlardan biridir.",
      },
      {
        q: "Kontrol ünitesi programı unutuyor, sebebi ne?",
        a: "Elektrik kesintilerinde hafızayı koruyan yedek pil bitmiş olabilir. Bazı modellerde yedekleme kondansatörle yapılır ve zamanla zayıflar. Program yazıldıktan sonra bir kopyasının kâğıda not edilmesi, tekrar yazmayı kolaylaştıran basit bir önlemdir.",
      },
      {
        q: "Kışın sistemi kapatmak gerekir mi?",
        a: "Gerekir. Hatlar tahliye edilmezse boru içindeki su donarak laterallerde çatlama, vana gövdelerinde kırılma yapabilir. Sezon sonunda ana vana kapatılır, hatlar boşaltılır, vana kutuları kontrol edilir ve kontrol ünitesi kış moduna alınır veya enerjisi kesilir.",
      },
    ],
    related: ["otomatik-bahce-sulama", "bahce-sulama-suresi", "damlama-sulama-nasil-kurulur"],
  },
];
