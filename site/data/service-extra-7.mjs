// Hizmet sayfası derinlik blokları — 7. parti (son).

export const serviceExtra7 = {
  "su-deposu-temizligi": [
    { h2: "Depoda ne birikir?" },
    { p: "Şebeke suyu temiz gelse bile içinde çözünmüş mineral ve askıda partikül bulunur. Depoda su durdukça bunlar dibe çöker ve zamanla bir tortu tabakası oluşturur." },
    { p: "İkinci birikim biyofilmdir: iç yüzeye yapışan ince, kaygan bir tabaka. Işık sızan depolarda ayrıca alg oluşur. Üçü birlikte hem tadı hem kokuyu bozar." },
    { p: "Deponun kapağı tam kapanmıyorsa toz, böcek ve yaprak da girer. Kapak contası ve havalandırma filtresi, temizlikten sonra mutlaka kontrol edilmesi gereken kalemlerdir." },

    { h2: "Ne sıklıkla temizlenmeli?" },
    { p: "Konut ve apartman depolarında yılda bir temizlik yaygın uygulamadır. Gıda üreten iş yerlerinde ve okul, otel gibi yoğun kullanımlı yapılarda bu sıklık artar." },
    { p: "Suyun tadında ya da kokusunda değişiklik, musluktan gelen tortu, filtre kartuşlarının hızlı kirlenmesi; bunlar süreyi beklemeden temizlik gerektiğini gösterir." },
    { p: "Uzun süre kullanılmayan depolarda (bağ evi, yazlık) sezon başında temizlik yapılması gerekir; duran su en hızlı bozulan sudur." },

    { h2: "Temizlik nasıl yapılır?" },
    { ol: [
      "Depo boşaltılır, tortu tahliye edilir",
      "İç yüzey basınçlı su ile yıkanır",
      "Biyofilm mekanik olarak temizlenir",
      "Uygun dezenfektanla dezenfeksiyon yapılır",
      "Bol suyla durulanır, durulama suyu tahliye edilir",
      "Kapak contası, havalandırma ve taşma borusu kontrol edilir",
      "Depo doldurulup ilk su tahliye edilir",
    ] },
    { p: "Dezenfeksiyon sonrası durulama atlanmamalıdır. Yeterince durulanmamış bir depoda su günlerce kimyasal kokar." },

    { h2: "Depo malzemesi ve konumu" },
    { p: "Paslanmaz çelik depolar hijyen açısından en uygunudur, uzun ömürlüdür ve temizliği kolaydır. Polietilen depolar ekonomiktir ama ışık geçiren modellerde alg oluşumu hızlanır." },
    { p: "Depo mümkünse ışık almayan, serin bir yerde olmalıdır. Güneş alan bir depoda sıcaklık artar; hem alg oluşur hem su tadı bozulur." },
    { p: "Taşma borusunun ucu böcek girmeyecek şekilde kapatılmalı, havalandırma filtresi bulunmalıdır. Bu iki detay, deponun bir yıl boyunca temiz kalmasını doğrudan etkiler." },

    { h2: "Temizlik sonrası hidrofor ve filtreler" },
    { p: "Depo temizliğinden sonra hidrofor emiş filtresi ve varsa ana hat filtresi de temizlenmelidir. Dibe çökmüş tortu, temizlik sırasında karışıp filtreye gider." },
    { p: "Aynı ziyarette hidroforun genleşme tankı basıncını ve çek valfini de kontrol ediyoruz; iki iş bir arada yapıldığında ayrı gelme ihtiyacı kalmıyor." },
  ],

  "mekanik-tesisat": [
    { h2: "Mekanik tesisat neleri kapsar?" },
    { p: "Mekanik tesisat, bir yapının su, ısıtma, soğutma, havalandırma ve yangın sistemlerinin bütünüdür. Konutta bunlar küçük ölçekte ayrı ayrı yürür; ticari ve endüstriyel yapılarda tek bir sistem olarak tasarlanır." },
    { p: "Bu sistemlerin ortak noktası, hepsinin bir akışkanı bir yerden bir yere taşımasıdır. Bu yüzden hesabın temeli aynıdır: debi, basınç kaybı ve pompa/fan seçimi." },

    { h2: "Kolektörlü sistem ve dengeleme" },
    { p: "Isıtma ve soğutma hatlarında en sık görülen sorun dengesizliktir: kaynağa yakın bölgeler fazla, uzak bölgeler az akışkan alır. Bunun sonucu bazı odaların aşırı ısınması, bazılarının üşümesidir." },
    { p: "Denge vanaları ve debimetreler bu sorunu çözer. Her devrenin debisi ölçülerek ayarlanır ve kayıt altına alınır." },
    { p: "Dengeleme yapılmamış bir tesisatta cihaz kapasitesini büyütmek sorunu çözmez; sadece dengesizliği daha yüksek maliyetle sürdürür." },

    { h2: "Boru yalıtımı: görünmeyen kayıp" },
    { p: "Yalıtılmamış bir sıcak su borusu, geçtiği her metrede ısı kaybeder. Bu kayıp doğrudan yakıt tüketimine yansır ve bodrum gibi ısıtılmayan hacimlerde daha büyüktür." },
    { p: "Soğutma hatlarında ise yalıtımsız boru yüzeyinde yoğuşma olur; damlayan su tavanda leke ve küf yapar. Bu, sıklıkla \"su kaçağı\" sanılan bir durumdur." },
    { p: "Yalıtım kalınlığı boru çapına ve akışkan sıcaklığına göre seçilir. İnce yalıtım, yapılmamış yalıtımdan biraz daha iyidir ama beklenen faydayı vermez." },

    { h2: "Pompa ve genleşme" },
    { p: "Kapalı devre ısıtma ve soğutma sistemlerinde genleşme tankı zorunludur; akışkan ısınıp genleştiğinde bu hacmi karşılar. Tank yoksa ya da havası kaçmışsa emniyet ventili sürekli su atar." },
    { p: "Sirkülasyon pompası da doğru boyutlandırılmalıdır. Gereğinden büyük pompa gürültü ve erozyon yapar; küçük pompa uzak devrelere ulaşamaz." },
    { p: "Frekans kontrollü pompalar, değişken yükte belirgin enerji tasarrufu sağlar. Büyük tesislerde bu fark kısa sürede kendini amorti eder." },

    { h2: "Havalandırma" },
    { p: "Mekanik havalandırmada atılan hava kadar taze hava alınması gerekir. Sadece egzoz yapan bir sistem mekânı negatif basınca sokar; kapı zor açılır, baca çeker, koku yayılır." },
    { p: "Kanal boyutlandırması hız esasına göre yapılır. Dar kanalda hız artar, gürültü yükselir ve basınç kaybı büyür. Dirsek sayısı da mümkün olduğunca azaltılır." },

    { h2: "Test ve devreye alma" },
    { ul: [
      "Basınç testi (su ve ısıtma hatları)",
      "Sızdırmazlık kontrolü",
      "Hat yıkama ve havanın alınması",
      "Denge vanası ayarları ve debi kaydı",
      "Pompa ve fan devir ayarları",
      "Otomasyon ve termostat kontrolü",
    ] },
    { p: "Devreye alma raporunu yazılı veriyoruz. Ayar değerlerinin kayıtlı olması, ileride bir sorun çıktığında sistemin nasıl teslim edildiğini gösteriyor." },
  ],

  "yangin-tesisati": [
    { h2: "Yangın tesisatı ne zaman gerekir?" },
    { p: "Gereklilik yapının büyüklüğüne, kullanım amacına, kat sayısına ve kapasitesine göre belirlenir. Bu belirleme yetkili proje ekiplerinin işidir; biz uygulamayı yaparız." },
    { p: "Konutlarda genelde yangın dolabı ve algılama sistemi düzeyinde kalırken; iş yeri, depo, otel ve toplanma yapılarında sprinkler ve pompa istasyonu gündeme gelir." },
    { p: "Ruhsat süreçlerinde bu kalemler aranır. Yapı tamamlandıktan sonra eklemek hem pahalı hem de mimariyi zorlayan bir iştir; baştan planlanması gerekir." },

    { h2: "Sistem bileşenleri" },
    { ul: [
      "Yangın deposu ve pompa istasyonu (ana pompa, jokey pompa, dizel yedek)",
      "Sprinkler hattı ve başlıkları",
      "Yangın dolapları ve hortum sistemi",
      "Kuru/ıslak kolon ve itfaiye bağlantı ağzı",
      "Algılama: duman ve ısı dedektörleri, yangın butonu",
      "Uyarı: siren, flaşör",
      "Acil aydınlatma ve yönlendirme armatürleri",
    ] },
    { p: "Bunların bir kısmı mekanik, bir kısmı elektrik işidir. İki tarafın aynı ekipte olması, sahada en çok koordinasyon gerektiren işlerden birini kolaylaştırır." },

    { h2: "Pompa istasyonu" },
    { p: "Yangın pompası normal zamanlarda çalışmaz, sadece basınç düştüğünde devreye girer. Jokey pompa ise küçük kaçaklardan doğan basınç düşüşünü karşılar ve ana pompanın gereksiz çalışmasını önler." },
    { p: "Elektrik kesintisinde çalışabilmesi için dizel yedek pompa ya da jeneratör beslemesi istenir. Bu, sistemin en kritik yedekliliğidir." },
    { p: "Pompanın periyodik test edilmesi ve kaydının tutulması gerekir. Yıllarca çalıştırılmamış bir pompa, ihtiyaç anında çalışmayabilir." },

    { h2: "Sprinkler: her başlık ayrı çalışır" },
    { p: "Yaygın bir yanılgı, yangın çıktığında tüm sprinklerlerin birden açılacağıdır. Gerçekte her başlık kendi ısı ampulüyle bağımsız çalışır; sadece sıcaklığın yükseldiği yerdeki başlık açılır." },
    { p: "Başlık tipi ve tepki sıcaklığı hacme göre seçilir. Mutfak gibi normalde sıcak olan alanlarda daha yüksek tepki sıcaklıklı başlık kullanılır." },
    { p: "Başlıkların önü kapatılmamalıdır. Raf, tabela ya da asma tavan değişikliği ile kapanan bir başlık, o bölgeyi korumasız bırakır." },

    { h2: "Algılama ve acil aydınlatma" },
    { p: "Duman dedektörleri mutfak ve kazan dairesi gibi normalde duman/buhar olan yerlerde yanlış alarm verir; buralarda ısı dedektörü kullanılır." },
    { p: "Acil aydınlatma armatürleri kaçış yolunu ve merdiveni görünür kılar. Bunların akü süreleri periyodik test edilmelidir; test kaydı tutulur." },
    { p: "Yönlendirme armatürleri kaçış yönünü gösterir ve her noktadan en az biri görünür olmalıdır. Yerleşimi kaçış planına göre yapılır." },
  ],

  "kombi-petek-montaji": [
    { h2: "Petek ölçüsü nasıl belirlenir?" },
    { p: "Petek ölçüsü odanın ısı ihtiyacına göre hesaplanır. Belirleyiciler: oda hacmi, dış duvar sayısı, pencere alanı, yalıtım durumu ve kat konumu (üst kat, zemin kat)." },
    { p: "\"Metrekareye şu kadar\" gibi kaba kurallar yanıltıcıdır. Aynı metrekaredeki iki oda, biri köşe daire üst kat diğeri ara kat orta daire ise çok farklı ısı ister." },
    { p: "Katalog değerleri genelde 75/65 derece su sıcaklığına göre verilir. Yoğuşmalı sistemde daha düşük sıcaklıkla çalışıldığı için gerçek güç daha düşüktür; peteği bir üst ölçüde seçmek çoğu odada doğru olur." },

    { h2: "Petek nereye konur?" },
    { p: "Klasik yerleşim pencere altıdır. Sebebi estetik değil fizik: camdan inen soğuk hava akımı, petekten yükselen sıcak havayla karşılaşıp dengelenir; pencere önündeki soğuk his ortadan kalkar." },
    { p: "Petek önüne mobilya konması ısı yayılımını engeller. Uzun perde de aynı etkiyi yapar; perde peteğin önünden değil arkasından inmelidir." },
    { p: "Petek ile duvar arasında birkaç santim boşluk bırakılır. Bu boşluk hava sirkülasyonunu sağlar; duvara yapışık montaj ısının duvarı ısıtmasına yol açar." },

    { h2: "Vana ve bağlantı" },
    { p: "Her peteğe gidiş ve dönüş vanası konur. Termostatik vana, oda sıcaklığına göre debiyi kendisi ayarlar ve odanın aşırı ısınmasını önler." },
    { p: "Termostatik başlık perde arkasında ya da mobilya arkasında kalmamalıdır; kendi çevresindeki sıcaklığı ölçtüğü için yanlış konumda hatalı çalışır." },
    { p: "Dönüş tarafına konan denge vanası ile debi ayarı yapılır. Bu ayar, evdeki tüm odaların dengeli ısınmasını sağlayan adımdır ve genelde atlanır." },

    { h2: "Kombi montajında kritik noktalar" },
    { p: "Kombi yeri; baca çıkışı, gaz hattı ve su bağlantılarının hepsine uygun olmalıdır. Sadece \"görünmesin\" diye seçilen bir yer, sonradan bakım ve arıza müdahalesini zorlaştırır." },
    { p: "Cihazın önünde servis için yeterli boşluk bırakılmalıdır. Dolap içine alınacaksa havalandırma boşlukları ve sökülebilir kapak gerekir." },
    { p: "Yoğuşmalı kombide kondens tahliyesinin gidere bağlanabilmesi şarttır. Bunun mümkün olup olmadığı keşifte netleşmelidir." },

    { h2: "Devreye alma" },
    { p: "Sistem doldurulur, havası alınır, basınç 1,5 bara ayarlanır. Ardından her petek tek tek kontrol edilerek dolaşımın sağlandığı doğrulanır." },
    { p: "Denge ayarları yapılır ve kayıt altına alınır. Oda termostatı bağlanıp programlanır; kullanımı size anlatılır." },
    { p: "Yeni kombi eski bir tesisata bağlanıyorsa tesisatın yıkanması ve manyetik filtre takılması önerilir. Bu iki kalem yeni cihazın ömrünü doğrudan uzatır." },
  ],

  "anahtar-teslim-sulama-sistemi": [
    { h2: "Anahtar teslim ne demek?" },
    { p: "Sulama sisteminde anahtar teslim, su kaynağından son damlatıcıya kadar tüm zincirin tek elden kurulmasıdır: kuyu ve pompa, enerji hattı ve pano, filtre istasyonu, ana hat, manifold, lateraller ve otomasyon." },
    { p: "Bu zincirin bir halkasının eksik ya da yanlış boyutlandırılması, diğerlerini de çalışamaz hâle getirir. En sık görülen durum, pompanın doğru ama enerji hattının yetersiz olmasıdır." },

    { h2: "Sıra: ölçümle başlar" },
    { ol: [
      "Kuyu verimi ve dinamik su seviyesi ölçümü",
      "Sulanacak alanın ve bitki deseninin çıkarılması",
      "Su ihtiyacı ve zon sayısı hesabı",
      "Pompa ve boru çapı seçimi",
      "Enerji hattı ve kablo kesiti hesabı",
      "Filtre istasyonu boyutlandırma",
      "Hat döşeme ve otomasyon kurulumu",
      "Basınç testi ve zon programlama",
    ] },
    { p: "Bu sıralamada ilk iki adım atlandığında geri kalanı tahmin üzerine kurulur. Ölçüm birkaç saat sürer ve sistemin tamamını doğru boyutlandırmayı sağlar." },

    { h2: "Basınç kaybı hesabı" },
    { p: "Su borudan geçerken sürtünme nedeniyle basınç kaybeder. Bu kayıp boru çapına, uzunluğuna ve debiye bağlıdır. Uzun hatlarda dar boru kullanmak, hattın sonundaki damlatıcıların çalışmamasına yol açar." },
    { p: "Bu yüzden ana hat, manifold ve lateral çapları ayrı ayrı hesaplanır. Ekonomi yapmak için tek çap kullanmak, sistemin en uzak noktasını kurban etmek demektir." },
    { p: "Basınç düzenleyici ve basınç dengeleyici damlatıcılar, eğimli arazilerde dağılımı eşitler. Malatya'daki bağ ve bahçelerin çoğu eğimli olduğu için bu kalem sık gündeme gelir." },

    { h2: "Filtre istasyonu" },
    { p: "Kuyu ve gölet suyunda filtre zorunludur. Hidrosiklon kumu ayırır, disk ya da eleman filtre ince partikülü tutar. İkisinin birlikte kullanımı en yaygın kurulumdur." },
    { p: "Filtrenin öncesine ve sonrasına basınç göstergesi konur. Aradaki fark büyüdüğünde temizlik zamanı gelmiştir; bu, tahminle değil ölçümle bakım yapmayı sağlar." },
    { p: "Otomatik geri yıkamalı filtreler, büyük sistemlerde işçiliği ortadan kaldırır. Küçük bahçelerde manuel temizlik yeterlidir." },

    { h2: "Otomasyon ve uzaktan kontrol" },
    { p: "Zon vanaları ve kontrol ünitesiyle sulama programlanır. Yağmur sensörü, yağışlı günlerde sulamayı otomatik atlar." },
    { p: "GSM modülüyle uzaktan kontrol ve arıza bildirimi eklenebilir. Arazi uzaktaysa bu özellik tek başına sistemi değerli kılar." },
    { p: "Otomasyon kurmadan önce koruma ekipmanının tam olması gerekir: kuru çalışma koruması, faz koruma, termik. Korumasız sisteme uzaktan kumanda takmıyoruz." },

    { h2: "Teslim ve sezon bakımı" },
    { p: "Teslimde zon planı, program ayarları, pano şeması ve bakım talimatı yazılı verilir. Sistemin manuel çalıştırma yöntemi de anlatılır." },
    { p: "Sezon sonunda hat boşaltma ve kış moduna alma işlemleri yapılır. Bu bakımı kendiniz yapabilir ya da bize bırakabilirsiniz." },
  ],

  "hidrofor-tamiri": [
    { h2: "Arıza teşhisinde ilk üç kontrol" },
    { p: "**Birinci kontrol**: pompa hiç çalışmıyor mu, çalışıyor ama basınç vermiyor mu, yoksa sürekli çalışıp duruyor mu? Bu üç durum farklı arıza ailelerini işaret eder." },
    { p: "**İkinci kontrol**: genleşme tankının basıncı. Sibop kapağı açılıp ölçülür; presostatın devreye girme basıncının biraz altında olmalıdır. Hidrofor şikâyetlerinin büyük kısmı burada çözülür." },
    { p: "**Üçüncü kontrol**: bütün musluklar kapalıyken basıncın kendiliğinden düşüp düşmediği. Düşüyorsa ya tesisatta kaçak vardır ya çek valf tutmuyordur." },

    { h2: "Sürekli devreye giriyor" },
    { p: "En yaygın sebep genleşme tankının havasını kaybetmesidir. Tank görevini yapamayınca pompa küçük bir su kullanımında bile devreye girer ve hemen durur." },
    { p: "İkinci sebep tesisat kaçağıdır. Rezervuar sızıntısı en sık kaynaktır; gıda boyası testiyle dakikalar içinde doğrulanır." },
    { p: "Üçüncü sebep presostat ayarının bozulmasıdır. Devreye girme ve çıkma basınçları birbirine çok yakınsa pompa sürekli açılıp kapanır." },

    { h2: "Basınç düşük" },
    { p: "Önce presostat ayarına bakılır. Ayar doğruysa pompanın kendisi yorulmuş olabilir; fanların aşınması debiyi ve basıncı düşürür." },
    { p: "Emiş hattında hava sızması da basıncı düşürür ve pompanın kavitasyon yapmasına yol açar. Bu, tipik bir çakıl sesi olarak duyulur ve pompayı hızla yıpratır." },
    { p: "Emiş filtresi tıkalıysa da aynı belirti görülür. Depo temizliğinden sonra bu filtrenin kontrolü atlanmamalıdır." },

    { h2: "Hangi parça değişir?" },
    { ul: [
      "Genleşme tankı — havası şarj edilir ya da değişir",
      "Presostat (basınç şalteri) — ayarı bozulur ya da kontakları yanar",
      "Çek valf — tutmadığında basınç kendiliğinden düşer",
      "Mekanik salmastra — mil çevresinden damlatma yapar",
      "Rulman — artan gürültünün en sık sebebi",
      "Kondansatör — tek fazlı pompada kalkış sorunu yapar",
    ] },
    { p: "Bu parçaların çoğu değiştirilebilir ve maliyeti yeni pompanın çok altındadır. Motor sargısı gitmiş ya da fanlar aşınmışsa değişim daha mantıklı olur." },

    { h2: "Gürültü sorunu" },
    { p: "Hidrofor gürültüsünün kaynağı genelde motor değil, titreşimin yapıya aktarılmasıdır. Betonarme yapıda bu titreşim üst katlara kolayca taşınır." },
    { p: "Çözüm üç adımdır: titreşim takozu, boru bağlantılarında esnek kompansatör ve boruların duvara rijit bağlanmaması." },
    { p: "Bu üçü uygulandığında gürültü belirgin düşer. Ses yalıtım kabini son çaredir; önce titreşim yolunu kesmek gerekir." },
  ],

  "tarimsal-sulama-sistemleri": [
    { h2: "Yöntem seçimi: ürün ve arazi belirler" },
    { p: "Damlama sulama suyu doğrudan köke verir; buharlaşma kaybı en düşük yöntemdir. Meyve ağacı, bağ, sıra bitkileri ve serada standart tercihtir." },
    { p: "Yağmurlama geniş ve yayılı alanlarda, özellikle tahıl ve yem bitkilerinde tercih edilir. Don koruması amacıyla da kullanılabilir; bu, damlamanın sağlayamadığı bir avantajdır." },
    { p: "Aynı arazide iki sistem birlikte de kullanılabilir. Zonlar ayrı kurulur ve ayrı programlanır; pompa ve filtre istasyonu her iki sistemin ihtiyacına göre boyutlandırılır." },

    { h2: "Su kaynağı ve tahsis" },
    { p: "Kuyu, gölet, kanal ya da şebeke; kaynağın kapasitesi sistemin tamamını belirler. Ölçülmeden yapılan tasarım, sahada çalışmayan bir sistem üretir." },
    { p: "Kuyu kullanılacaksa verim ve dinamik su seviyesi ölçülür. Kanal ve gölet suyunda ise filtreleme çok daha kritik hâle gelir; askıda katı madde oranı yüksektir." },
    { p: "Sulama birliği ya da kooperatif suyu kullanılıyorsa tahsis saatleri ve basıncı da tasarıma girer. Belirli saatlerde su geliyorsa depo şart olur." },

    { h2: "Zon planı ve program" },
    { p: "Toplam su ihtiyacının kaynak kapasitesine bölünmesiyle zon sayısı çıkar. Her zon sırayla çalışır; hepsinin aynı anda çalışması beklenmez." },
    { p: "Bitki tipi, toprak yapısı ve arazi eğimi zon ayrımında dikkate alınır. Kumlu toprakta sık ve kısa, killi toprakta seyrek ve uzun sulama uygundur." },
    { p: "Sulama saati de verimi etkiler. Sabaha karşı yapılan sulamada buharlaşma en düşüktür; öğlen sulaması ciddi kayıp demektir." },

    { h2: "Arazi enerji hattı" },
    { p: "Uzun arazi hatlarında gerilim düşümü hesaplanmadan kablo kesiti seçilemez. Yetersiz kesit, motorun düşük gerilimle çalışıp ısınmasına ve zamanla yanmasına yol açar." },
    { p: "Pano; faz koruma, termik koruma ve kuru çalışma koruması içermelidir. Bunlar olmadan kurulan bir sistemde ilk arıza motoru götürür." },
    { p: "Enerji hattı çekmenin maliyeti mesafeyle hızla artar. Belirli bir mesafeden sonra güneş enerjili sistem daha ekonomik hâle gelir; iki seçeneği yan yana hesaplayıp veriyoruz." },

    { h2: "Bakım takvimi" },
    { ul: [
      "Sezon başı: hat yıkama, filtre temizliği, damlatıcı kontrolü",
      "Sezon içi: filtre basınç farkı takibi, tıkanan damlatıcı değişimi",
      "Ayda bir: pompa ve pano gözle kontrol",
      "Sezon sonu: hat boşaltma, kış moduna alma",
      "Yılda bir: kuyu verimi ve pompa performansı kontrolü",
    ] },
    { p: "Bu takvim uygulandığında sistem yıllarca sorunsuz çalışır. En sık yapılan hata filtre temizliğinin ihmal edilmesidir; tıkanan filtre önce basıncı düşürür, sonra pompayı zorlar." },
  ],

  "gunes-enerjisi-su-sistemi": [
    { h2: "Depo mantığı: aküye gerek kalmadan" },
    { p: "Güneş enerjili sulamada en ekonomik kurgu akü değil depodur. Gündüz güneş varken pompa çalışır ve depo dolar; sulama depodan yapılır." },
    { p: "Akü sistemleri pahalıdır, ömürlüdür ve bakım ister. Suyu depolamak ise enerjiyi depolamaktan çok daha ucuzdur." },
    { p: "Depo hacmi, günlük su ihtiyacının bir–iki katı olacak şekilde seçilir. Bulutlu günler için bu pay önemlidir." },

    { h2: "Panel kapasitesi nasıl hesaplanır?" },
    { p: "Pompanın gücü, günlük çalışma süresi ve bölgenin güneşlenme değeri hesaba girer. Malatya güneşlenme açısından avantajlı bir bölgedir." },
    { p: "Panel kapasitesi, pompanın anlık gücünden bir miktar fazla seçilir; bulutlu ve kış günlerinde performans düşer. Bu pay hesaba katılmazsa sistem yaz dışında çalışmaz." },
    { p: "Panel yönü ve eğimi de verimi doğrudan etkiler. Güneye bakan ve bölgenin enlemine uygun eğimde kurulan paneller yıl boyunca en yüksek verimi verir." },

    { h2: "DC pompa mı AC pompa mı?" },
    { p: "Doğrudan DC ile çalışan solar pompalar daha verimlidir; invertör kaybı yoktur. Buna karşılık parça bulunabilirliği ve servis ağı AC pompalara göre sınırlıdır." },
    { p: "AC pompalar yaygındır ve mevcut bir pompayı uygun invertörle güneşe bağlamak mümkündür. Sistemi sıfırdan kuruyorsanız DC seçeneği değerlendirmeye değer." },
    { p: "İki seçeneğin ilk yatırım ve uzun vadeli maliyetini yan yana çıkarıp veriyoruz; karar kullanım yoğunluğuna göre değişir." },

    { h2: "Hibrit çalışma" },
    { p: "Şebeke bağlantısı olan ama sık kesinti yaşanan yerlerde hibrit sistem kurulur: güneş varken panelden, yoksa şebekeden beslenir." },
    { p: "Bu, sulamanın kesintiye uğramamasını sağlar ve elektrik faturasını düşürür. Geçiş otomatik yapılır; müdahale gerekmez." },

    { h2: "Montaj ve güvenlik" },
    { p: "Panel taşıyıcı konstrüksiyonu rüzgâr yüküne göre boyutlandırılır. Açık arazide rüzgâr, panelleri söken en yaygın etkendir." },
    { p: "Açık arazide hırsızlık gerçek bir risktir. Güvenlik vidaları, sabitleme sistemleri ve gerekiyorsa kamera ile önlem alıyoruz." },
    { p: "Kablo bağlantıları ve konnektörler UV ve hayvan zararına karşı korunmalıdır. Kemirgen zararı, arazide en sık görülen ve en zor bulunan arızalardan biridir." },

    { h2: "Bakım" },
    { p: "Panellerin yüzeyi tozlanınca verim düşer. Sezon içinde birkaç kez temizlik yeterli olur; Malatya'nın tozlu dönemlerinde sıklık artabilir." },
    { p: "Kablo bağlantıları ve konnektörler yılda bir kontrol edilir. Gevşeyen bir konnektör hem verim kaybı hem ısınma riski yaratır." },
  ],

  "dusakabin-montaji": [
    { h2: "Teknenin terazisi her şeyi belirler" },
    { p: "Duşakabin montajının başarısı camla değil tekneyle başlar. Tekne tam terazide değilse üzerine kurulan cam gövde çarpılır; kapı sürter ya da tam kapanmaz ve contalar görevini yapamaz." },
    { p: "Zemin eğimliyse tekne ayaklarından denge alınır, gerekirse altına harç yatağı yapılır. Bu adım atlanıp doğrudan monte edilen duşakabinlerde sorun birkaç hafta içinde başlar." },
    { p: "Teknesiz (zemine entegre) uygulamalarda ise zeminin su yalıtımı ve eğimi kritiktir. Mevcut banyoda bunlar uygun değilse önce zemin işi gerekir." },

    { h2: "Silikon: içeriden mi dışarıdan mı?" },
    { p: "Sık yapılan hata, duşakabini hem içeriden hem dışarıdan tam silikonlamaktır. İçeriden gelen suyun tekneye dönebilmesi için iç kısımda kontrollü bir yol bırakılmalıdır." },
    { p: "Her yeri kapatmak, sızan suyun profil içinde birikmesine ve zamanla küflenmeye yol açar. Doğru uygulama dış birleşimi tam sızdırmaz yapmak, iç tarafta suyun tekneye dönmesine izin vermektir." },
    { p: "Silikonun kürlenmesi için montajdan sonra 24 saat kullanılmaması gerekir. Bu bekleme, silikonun ömrünü doğrudan belirler." },

    { h2: "Cam ve profil seçimi" },
    { p: "Temperli cam, kırıldığında keskin parça oluşturmadan dağılır; duşakabinde standart olması gereken güvenlik özelliğidir. Cam kalınlığı 6 mm ve üzeri tercih edilmelidir." },
    { p: "Nano kaplamalı camlar su ve kireç lekesini daha az tutar; temizlik kolaylığı sağlar. Kaplama zamanla etkisini yitirir ama ilk yıllarda belirgin fark yaratır." },
    { p: "Profilsiz (frameless) sistemler daha ferah görünür ama montaj toleransı daha düşüktür; duvar ve zeminin düzgün olması şarttır." },

    { h2: "Sık karşılaşılan sorunlar" },
    { ul: [
      "Duş sonrası dışarı su sızıyor → alt profil silikonu ya da kapı contası",
      "Kapı sürtüyor / kapanmıyor → tekne terazide değil ya da tekerlek yıpranmış",
      "Tekne altından nem geliyor → sifon veya tekne–duvar birleşimi",
      "Su gidere yavaş çekiyor → sifon tıkalı ya da tekne eğimi yetersiz",
      "Camda kireç lekesi kalıcı → kaplama ömrünü doldurmuş",
    ] },

    { h2: "Tamir mi değişim mi?" },
    { p: "Cam sağlamsa çoğu duşakabin tamir edilebilir. Kapı tekerlekleri, mıknatıslı contalar ve alt profil sızdırmazlık bandı ayrı ayrı değiştirilebilen parçalardır ve maliyeti yeni duşakabinin çok altındadır." },
    { p: "Camda çatlak, profilde deformasyon veya teknede çatlak varsa değişim gerekir. Hangisinin uygun olduğunu fotoğraftan çoğu zaman söyleyebiliyoruz." },
    { p: "Parça temininde model ve marka önemlidir; ürünün fotoğrafını gönderirseniz parçanın bulunup bulunmadığını önceden söyleyebiliyoruz." },
  ],

  "vitrifiye-armatur-montaji": [
    { h2: "Askılı klozet ve taşıyıcı kasa" },
    { p: "Askılı (gömme rezervuarlı) klozet, zeminde alan açar ve temizliği kolaylaştırır. Ama duvara değil, duvarın içindeki taşıyıcı kasaya sabitlenir; yükü zemine kasa aktarır." },
    { p: "Kasanın kalitesi ve montajı burada belirleyicidir. Yetersiz sabitlenmiş bir kasa, zamanla oynamaya ve klozetin duvardan ayrılmasına yol açar." },
    { p: "Kasa montajı sıva ve seramikten önce yapılır. Sonradan askılı klozete geçmek, duvarın açılması demektir; bu karar tadilat başında verilmelidir." },

    { h2: "Armatür seçimi: kartuş belirleyici" },
    { p: "Bataryanın ömrünü gövde değil içindeki kartuş belirler. Seramik diskli kartuşlar uzun ömürlüdür ve damlatma yapmaz; kartuş değişimi de mümkündür." },
    { p: "Krom kaplama kalınlığı, yüzeyin yıllar içinde nasıl görüneceğini belirler. İnce kaplamada kireç ve temizlik ürünleri kısa sürede iz bırakır." },
    { p: "Ankastre (duvar içi) armatürlerde gövde duvarın içinde kalır; bu yüzden gövde kalitesi daha da önemlidir. Servis kapağı bırakılması gerekir." },

    { h2: "Bağlantı yükseklikleri" },
    { p: "Vitrifiye ve armatür bağlantı yükseklikleri, seramikten önce belirlenmelidir. Lavabo yüksekliği, klozet gider merkezi, duş bataryası yüksekliği; hepsi kullanıcıya göre ayarlanabilir." },
    { p: "Standart yükseklikler bir başlangıç noktasıdır. Evde çok uzun ya da çok kısa boylu biri varsa, lavabo ve duş yüksekliğini ona göre ayarlamak günlük konforu belirgin değiştirir." },
    { p: "Bu ölçüleri keşifte konuşup seramik planına işliyoruz. Sonradan değiştirmek fayans kırmak demektir." },

    { h2: "Su tasarrufu" },
    { p: "Çift kademeli rezervuar, her kullanımda gereken kadar su harcamayı sağlar. Fark küçük görünür ama yıllık toplamda anlamlıdır." },
    { p: "Perlatörlü (havalandırmalı) bataryalar suyu havayla karıştırarak akış hissini korur, tüketimi düşürür. Basit ve ucuz bir değişikliktir." },
    { p: "Damlayan bir musluk, göründüğünden çok daha fazla su harcar. Kartuş ya da conta değişimi kısa bir iştir ve faturaya etkisi hissedilir." },

    { h2: "Montaj sonrası kontroller" },
    { ul: [
      "Bütün bağlantılarda sızdırmazlık kontrolü",
      "Sıcak–soğuk yönlerinin doğru bağlandığının teyidi",
      "Rezervuar dolum ve tahliye ayarı",
      "Sifon koku geçirmezliği",
      "Silikon uygulaması ve kürlenme süresi",
      "Servis kapağı erişiminin kontrolü",
    ] },
    { p: "Bu kontrolleri teslimde birlikte yapıyoruz. Özellikle sıcak–soğuk yönü, montaj sonrası fark edilmesi en can sıkıcı hatalardan biridir." },
  ],

  "duvar-orme": [
    { h2: "Malzeme seçimi: tuğla, gazbeton, bims" },
    { p: "Delikli tuğla ekonomiktir ve yaygındır; ses yalıtımı orta düzeydedir. Gazbeton hafiftir, kesimi kolaydır ve ısı yalıtımı iyidir ama ses yalıtımı tuğlaya göre zayıftır." },
    { p: "Bims (ponza) blok ise hafiflik ve ısı yalıtımını birlikte sunar. Üçünün de doğru kullanım yeri farklıdır; iç bölmede ve dış duvarda aynı malzeme uygun olmayabilir." },
    { p: "Üst katlarda ve mevcut yapıya eklenen bölmelerde hafiflik önem kazanır; gazbeton ve bims bu durumda öne çıkar. Ses yalıtımı öncelikliyse tuğla ya da alçıpan + yalıtım tercih edilir." },

    { h2: "Örgü kuralları" },
    { p: "Duvar şaşırtmalı örülür; düşey derzler üst üste gelmemelidir. Üst üste gelen derzler duvarda zayıf bir hat oluşturur ve çatlak buradan ilerler." },
    { p: "Derz kalınlığı malzemeye göre değişir: klasik tuğlada harç derzi, gazbetonda ise ince yapıştırıcı derz kullanılır. Gazbetonu klasik harçla örmek, yalıtım avantajını büyük ölçüde yok eder." },
    { p: "Duvarın üst sırası ile tavan arasında birkaç santim boşluk bırakılıp esnek dolgu yapılır. Bu boşluk, yapı hareket ettiğinde duvarın kırılmasını önler." },

    { h2: "Boşluk açmak ve lento" },
    { p: "Duvarda kapı veya pencere boşluğu açılırken üstteki yükü taşıyacak bir lento gerekir. Lentosuz açılan boşluk, üstündeki duvarda çatlakla kendini gösterir." },
    { p: "Lento, boşluğun her iki yanına yeterli mesafede oturmalıdır. Kısa oturan lento yükü aktaramaz; bu, çatlağın sadece geciktirilmesi anlamına gelir." },
    { p: "Taşıyıcı duvarda boşluk açılacaksa bu doğrudan statik konusudur ve yetkili ekibin çözümüyle yapılır. Bu konuda tahmin yürütmüyoruz." },

    { h2: "Kırım: toz ve moloz yönetimi" },
    { p: "Oturulan bir dairede kırım yapılıyorsa iş, molozdan çok tozla ilgilidir. Çalışma alanı naylon bariyerle ayrılır, kapı aralıkları bantlanır, tozlu işlerde toz emici kullanılır." },
    { p: "Asansör ve merdiven güzergâhı korunur, her günün sonunda süpürülür. Bina yönetimiyle moloz saatleri önceden konuşulur." },
    { p: "Moloz merdivende bekletilmez; aynı gün ya da en geç ertesi sabah tahliye edilir. Belediyenin moloz kurallarına uyulur." },

    { h2: "Tesisat ve duvar birlikte planlanır" },
    { p: "Yeni örülen duvarın içinden priz, anahtar ya da su hattı geçecekse bunlar örgü sırasında planlanır. Duvar örüldükten sonra kanal açmak, yeni duvarı zayıflatır." },
    { p: "Gazbeton duvarda kanal açmak kolaydır ama duvarın kesitini incelttiği için ağır yük asılacak noktalarda dikkat gerekir." },
    { p: "Ağır dolap ve TV asılacak noktalara örgü sırasında dolu blok ya da takviye konabilir. Bu, montaj sırasında dakikalar süren bir iştir." },
  ],

  "sap-zemin-hazirligi": [
    { h2: "Şap tipleri" },
    { p: "**Klasik çimento şap**: en yaygın ve ekonomik olanıdır. Kuruma süresi uzundur; her santim için kabaca bir hafta beklenir." },
    { p: "**Kendinden yayılan (self-levelling) şap**: akışkandır, kendisi terazilenir ve çok düzgün bir yüzey verir. İnce uygulanır ve hızlı kurur; maliyeti yüksektir." },
    { p: "**Isı şapı (yerden ısıtma şapı)**: serpantini örtecek kalınlıkta ve ısı iletimini bozmayacak katkıda olur. Kuruma sonrası kademeli ısıtma programı uygulanır." },

    { h2: "Kot planlaması" },
    { p: "Şap kalınlığı zemini yükseltir. Kapı altları, balkon eşiği, asansör kotu ve merdiven basamağı buna göre planlanmazsa kapı kesmek ya da eşik yapmak gerekir." },
    { p: "Bu yüzden kaplama seçimini şaptan önce soruyoruz; seramik, parke ve laminatın kalınlıkları farklıdır. Kot hesabı buna göre yapılır." },
    { p: "Farklı odalarda farklı kaplama kullanılacaksa şap kotları da odaya göre ayarlanır; böylece bitmiş zemin her yerde aynı seviyede olur." },

    { h2: "Yalıtım katmanları" },
    { p: "Şapın altına gelen katmanlar kullanım yerine göre değişir. Ara katlarda ses yalıtımı, zemin katta ısı yalıtımı ve nem bariyeri, ıslak hacimlerde su yalıtımı gerekir." },
    { p: "Kenar bandı (kenar şeridi) her durumda uygulanır. Şapın duvara temas etmesini engeller; ısı ve ses köprüsünü keser, şapın genleşmesine yer bırakır." },
    { p: "Bu katmanların sırası önemlidir. Yanlış sıralanan katmanlar, tek tek doğru malzemeler kullanılsa bile sistemi çalışmaz hâle getirir." },

    { h2: "Eğim gereken yerler" },
    { p: "Banyo, balkon, teras ve garaj gibi yerlerde şap düz değil eğimli dökülür; su gidere yönelmelidir. Eğimi yanlış verilen bir banyoda su köşede birikir." },
    { p: "Klasik nokta süzgeçte eğim dört yönden merkeze, lineer süzgeçte tek yöne verilir. Süzgeç tipi kararı şap dökümünden önce verilmelidir." },
    { p: "Eğim kontrolü basittir: zemine bir bardak su dökün, gidere yönelmeli. Bunu teslimde birlikte yapıyoruz." },

    { h2: "Kuruma ve nem ölçümü" },
    { p: "Şap kuru görünse de içeride nem barındırabilir. Parke döşemeden önce nem ölçümü yapılır; ürün üreticisinin belirttiği eşiğin altına inmesi beklenir." },
    { p: "Erken kaplanan şapın nemi, parkede kabarmaya ve seramikte boşalmaya yol açar. Bu, sökümü gerektiren ve tamamen önlenebilir bir hatadır." },
    { p: "Kuruma havalandırma ve sıcaklıkla hızlanır. Doğrudan ısı vermek ise yüzeyde çatlak yapar; hızlandırma yöntemi de doğru seçilmelidir." },
  ],

  "mermer-granit": [
    { h2: "Doğal taş, kompozit ve seramik plak" },
    { p: "Mermer doğal ve karakterlidir ama asit ve lekeye hassastır; limon, sirke ve şarap yüzeyde iz bırakabilir. Koruyucu uygulanması ve periyodik yenilenmesi gerekir." },
    { p: "Granit doğal taştır ama çok daha serttir; çizilmeye ve ısıya karşı iyi davranır. Gözenekliliği mermerden düşüktür, bakım yükü azdır." },
    { p: "Kompozit (kuvars) gözeneksizdir, leke tutmaz ve bakım gerektirmez. Buna karşılık yüksek ısıya doğrudan temasa hassastır; sıcak tencere altlıksız konmamalıdır." },

    { h2: "Şablon: ölçünün tek doğru yöntemi" },
    { p: "Tezgâh, mutfak dolapları monte edildikten sonra yerinde şablonla ölçülür. Duvarlar tam dik olmadığı için kâğıt üstü ölçüyle kesilen tezgâh çoğu mutfakta boşluk bırakır." },
    { p: "Şablondan kesime ve montaja kadar tipik olarak 3–5 gün geçer. Bu sürede eviye ve ocak takılamaz; programa yazılması gereken bir beklemedir." },
    { p: "Şablon sırasında eviye tipi, ocak modeli ve priz kesimleri de netleşmiş olmalıdır. Sonradan yapılan kesim, plakanın kırılma riskini artırır." },

    { h2: "Kenar profili ve kesim köşeleri" },
    { p: "Kenar profili sadece estetik değildir; keskin bırakılan köşeler çarpma sonucu kırılmaya yatkındır. Hafif yuvarlatılmış profiller daha dayanıklıdır." },
    { p: "Eviye kesim köşeleri de keskin bırakılmamalıdır. Gerilme keskin köşeden başlar ve çatlak oradan ilerler; bu, uygulama kalitesinin en net göstergelerinden biridir." },
    { p: "Ocak kesimi çevresine ısıya dayanıklı bant uygulanması, ısıl genleşmenin taşı zorlamasını azaltır." },

    { h2: "Denizlik ve damlalık" },
    { p: "Pencere denizliğinin alt yüzünde ince bir damlalık kanalı açılmalıdır. Bu kanal suyun duvara doğru dönmesini engeller." },
    { p: "Damlalık olmadığında cephede zamanla kirlenme ve koyu bir nem çizgisi oluşur. Küçük bir detay ama dış cephenin görünümünü yıllarca etkiler." },
    { p: "Denizliğin duvardan yeterince taşması da gerekir; içeride kalan bir denizlik damlalığı olsa bile işlevini göremez." },

    { h2: "Merdiven ve dış mekân uygulamaları" },
    { p: "Merdiven basamağında yüzey işlemi kullanım yerine göre seçilir. Dış merdivende ve ıslanabilecek yerlerde honlu veya fırçalı yüzey tercih edilir; parlak cila kayganlık yaratır." },
    { p: "Basamak burun detayı da güvenlikle ilgilidir; kaymaz bant kanalı açılabilir ya da profil kullanılabilir." },
    { p: "Dış mekânda donma–çözülme dayanımı olan taş seçilmelidir. Su emme oranı yüksek taşlar birkaç kışta yüzeyden dökülmeye başlar." },
  ],

  "bahce-cevre-duzenleme": [
    { h2: "Kot çalışması: her şeyin başlangıcı" },
    { p: "Bahçe düzenlemesinde ilk iş kot çalışmasıdır. Suyun nereye akacağı, hangi alanın dolgu hangisinin kazı olacağı, istinat gerekip gerekmediği burada belirlenir." },
    { p: "Kot planlanmadan başlanan bahçelerde yağmurda su binaya doğru akar. Bu, yıllar içinde bodrum rutubeti ve sıva dökülmesi olarak geri döner." },
    { p: "Bina çevresinde zemin, yapıdan uzağa doğru hafif eğimli olmalıdır. Bu tek kural, birçok rutubet sorununu baştan önler." },

    { h2: "Drenaj ve yağmur suyu" },
    { p: "Drenaj hattı, toprakta biriken suyu toplayıp binadan uzaklaştırır. Delikli boru çakılla sarılır, çakıl ile toprak arasına geotekstil keçe serilir." },
    { p: "Geotekstil olmadan çakıl zamanla toprakla dolar ve drenaj işlevini kaybeder. En sık atlanan detay budur." },
    { p: "Yağmur oluğu iniş boruları da bu hatta bağlanmalıdır. Bina dibine boşalan iniş borusu, temele doğrudan su verir." },

    { h2: "Kilit taşı: alt dolgu belirleyici" },
    { p: "Kilit taşının ömrünü taşın kendisi değil altındaki dolgu ve sıkıştırma belirler. Yeterince sıkıştırılmamış zeminde taşlar bir yıl içinde oturur ve düzensizleşir." },
    { p: "Dolgu kademeli sıkıştırılır; tek seferde dökülen kalın dolgu tam sıkışmaz. Araç girecek alanlarda hem dolgu hem taş kalınlığı artar." },
    { p: "Yaya alanı ile otopark alanını aynı metrajla hesaplamak yaygın bir hatadır. Otopark bir yıl içinde çöker ve yeniden yapılır." },

    { h2: "Altyapı önce, taş sonra" },
    { ul: [
      "Drenaj ve yağmur suyu hatları",
      "Sulama ana hattı ve vana kutuları",
      "Bahçe aydınlatma kabloları (koruge boru içinde)",
      "Kamera ve zayıf akım için boş boru",
      "Otomatik bahçe kapısı besleme hattı",
      "Havuz ve sundurma için bırakılacak besleme",
    ] },
    { p: "Bu listedeki her kalem taş döşenmeden önce yapıldığında maliyeti düşüktür. Sonradan eklemek, taşları sökmek demektir." },

    { h2: "Sundurma, kamelya ve kar yükü" },
    { p: "Sundurma ve kamelya hafif yapılardır ama üzerlerine binen kar yükü hafif değildir. İnce profille yapılmış bir sundurma, yoğun kar yağışında çökebilir." },
    { p: "Profil kesiti ve açıklık kar yüküne göre boyutlandırılır. Ucuz görünen ince profil, ilk yoğun kışta pahalıya mal olur." },
    { p: "Sundurmanın su tahliyesi de planlanmalıdır; oluk ve iniş borusu olmadan su doğrudan zemine ve temele iner." },

    { h2: "Peyzaj en sona bırakılabilir" },
    { p: "Bitkilendirme ve peyzaj, bütçe sıkışırsa ertelenebilecek tek kalemdir. Ama bitkilerin sulama noktaları ve toprak hazırlığı altyapı aşamasında planlanmalıdır." },
    { p: "Sonradan sulama çekmek, çim ve kaplamayı sökmek demektir. Şimdilik istemediğiniz noktalar için bile boş boru bırakmayı öneriyoruz." },
  ],

  "demir-korkuluk": [
    { h2: "Yüzey işlemi: demirin gerçek ömrü" },
    { p: "Paslanan bir korkuluğa bakıp \"kalınlık az tutulmuş\" denir genelde. Oysa asıl sebep neredeyse hep yüzey hazırlığındadır: kaynak sonrası temizlik, yağ alma ve antipas." },
    { p: "Kaynak sırasında oluşan cüruf ve ısıl işlem metal yüzeyi kimyasal olarak değiştirir. Temizlenmezse pas hep buradan başlar." },
    { p: "Kaynak dikişlerinin taşlanıp düzgünleştirilmesi hem estetik hem koruma açısından gereklidir; pürüzlü yüzeyde boya kalınlığı eşit olmaz." },

    { h2: "Galvaniz mi boya mı?" },
    { p: "Sıcak daldırma galvaniz, çeliği çinko tabakasıyla kaplar. İlk maliyeti yüksektir ama uzun yıllar bakım gerektirmez; dış mekânda ve yüksek nemde mantıklı bir yatırımdır." },
    { p: "Elektrostatik toz boya fırınlandığı için dayanımı yüksektir; atölyede uygulanır ve yerinde boyamaya göre çok daha uzun ömürlüdür." },
    { p: "Yerinde boyama en ekonomik ama en kısa ömürlü seçenektir. Mevcut korkuluğun bakımında ya da renk değişikliğinde tercih edilir." },

    { h2: "Güvenlik ölçüleri" },
    { p: "Balkon ve merdiven korkuluğunda yükseklik ve dikmeler arasındaki boşluk, özellikle çocuklu evlerde kritiktir. Dekoratif tercihler bu ölçülerin önüne geçmemelidir." },
    { p: "Yatay elemanlı korkuluklar tırmanmaya elverişlidir; çocuklu evlerde dikey dikme öneriyoruz. Ayak bağlantılarının sağlamlığı da kontrol edilmelidir." },
    { p: "Merdiven korkuluğunda tutamak sürekliliği önemlidir; kesintili tutamak, dengeyi kaybeden birinin tutunacak yer bulamaması demektir." },

    { h2: "Bahçe kapısı ve otomasyon" },
    { p: "Kayar (sürgülü) kapı yer kazandırır ama ray ve zemin düzgünlüğü ister. Kanatlı kapı daha basittir ama açılım için alan gerektirir; eğimli araziye uygun değildir." },
    { p: "Otomatik kapıda motor, fotosel ve kumanda birlikte kurulur. Fotosel, kapının altında bir engel varken kapanmasını önler; güvenlik açısından atlanmamalıdır." },
    { p: "Elektrik altyapısını da biz çekiyoruz. Kapı besleme hattı ve kumanda kabloları, bahçe düzenlemesi sırasında boru içinde bırakılırsa sonradan kazı gerekmez." },

    { h2: "Mevcut korkuluğu kurtarmak" },
    { p: "Kesiti incelmemiş, pas delik açmamış korkuluklar kurtarılabilir: pas temizliği, taşlama, antipas ve son kat boya." },
    { p: "Pas metali delmişse ya da kesiti belirgin incelttiyse boyama çözüm değildir; parça değişimi ya da yenileme gerekir." },
    { p: "Bakım sırasında ayak bağlantıları ve kaynak noktaları da kontrol edilir. Görünüşte sağlam bir korkuluk, ayak bağlantısı çürümüşse güvenli değildir." },
  ],

  "proje-uygulama-yonetimi": [
    { h2: "Metraj: bütçenin tek sağlam zemini" },
    { p: "Bir işe \"yaklaşık şu kadar\" diyerek başlamak, iş ortasında konuşulacak rakamı büyütür. Metraj çıkarıldığında her kalemin miktarı ve birim maliyeti belli olur." },
    { p: "Metraj listesi size verilir. Bütçe sıkıştığında hangi kalemden ne kadar kısılabileceğini rakama bakarak görürsünüz; kesme kararını tahminle değil veriyle verirsiniz." },
    { p: "Metrajsız verilen götürü rakam, kapsamı belirsiz bıraktığı için hem müşteriyi hem yükleniciyi riske sokar. \"Bu dahil değildi\" cümlesinin kaynağı budur." },

    { h2: "İş programı ve kritik yol" },
    { p: "Bir projede bazı işler paralel yürüyebilir, bazıları birbirini bekler. Kritik yol, geciktiğinde teslimi doğrudan öteleyen iş zinciridir." },
    { p: "Programı bu mantıkla kurup haftalık güncelliyoruz. Hangi kalemin neyi beklediğini ve nerede olduğumuzu her zaman görebiliyorsunuz." },
    { p: "Kuruma süreleri ve malzeme temin süreleri de programda ayrı satırlardır. Bunlar görünmüyorsa takvim baştan gerçekçi değildir." },

    { h2: "Karar tarihleri" },
    { p: "Uzun temin süreli kalemler için \"şu tarihe kadar seçilmezse teslim şu kadar kayar\" cümlesi sözleşmeye yazılır. Bu, gecikmenin sebebini sonradan tartışmaktan kurtarır." },
    { p: "Karar listesini baştan veriyoruz: hangi kalem, hangi tarihe kadar, kimden. Böylece seçim yapmanız gereken şeyleri önceden biliyorsunuz." },

    { h2: "Ara kabuller ve kayıt" },
    { p: "Tesisat kapanmadan, şap dökülmeden ve tavan kapanmadan önce ara kontroller yapılır: basınç testi, pano ölçümü, su yalıtımı testi, donatı kontrolü." },
    { p: "Her kontrolün kaydı ve fotoğrafı dosyalanır. Bunlar teslimde size verilir; duvarın arkasında ne olduğunu yıllar sonra bilmek her işi kolaylaştırır." },
    { p: "Bu kayıtlar aynı zamanda bir güvence belgesidir: neyin nasıl yapıldığı yazılıdır, sonradan tartışılmaz." },

    { h2: "Ekip koordinasyonu" },
    { p: "Bir tadilatta elektrikçi, su tesisatçısı, sıvacı, seramikçi, boyacı, marangoz ve montajcı çalışır. Bunların sırası ve zamanlaması yönetilmediğinde herkes birbirini bekler." },
    { p: "Koordinasyonu tek elde toplamak, ev sahibinin koordinatör rolüne düşmesini önler. \"Kim ne zaman gelecek\" sorusunun muhatabı tek kişidir." },
    { p: "Kendi ustalarınızla çalışıyorsanız sadece yönetim hizmeti de alabilirsiniz: metraj, program, koordinasyon ve kontrol tarafını üstleniriz." },

    { h2: "Teslim ve sonrası" },
    { p: "İş bittiğinde birlikte dolaşılır, eksik listesi çıkarılır ve süre verilir. Liste kapatıldıktan sonra son ödeme yapılır; bu madde sözleşmede yazılıdır." },
    { p: "Teslim sonrası ortaya çıkan eksikler için bir dönem boyunca ücretsiz dönülür. Süre ve kapsam sözleşmede yazılıdır; sözlü söz vermiyoruz." },
    { p: "Teslim dosyasında kapanan hatların fotoğrafları, test kayıtları, pano şeması, malzeme listesi ve garanti belgeleri yer alır." },
  ],
};
