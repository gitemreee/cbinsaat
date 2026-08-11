// Hidrofor ve basınç yönetimi yazıları.
// Arama verisinde en çok gösterim alan küme burası: hidrofor sürekli çalışma,
// tank havası, şalter ayarı, gürültü ve frekans kontrolü.

export const hidroforPosts = [
  {
    slug: "hidrofor-tank-havasi-ayari",
    title: "Hidrofor tankına hava nasıl basılır?",
    category: "Pompa",
    published: "2026-08-11",
    reading: 9,
    metaTitle: "Hidrofor Tankına Hava Basma | Kaç Bar, Nasıl Ayarlanır",
    metaDesc:
      "Hidrofor basınç tankının havası nasıl ölçülür, kaç bar basılır, membran yırtıksa nasıl anlaşılır? Sahada uyguladığımız sıra ve en sık yapılan hatalar.",
    keywords: [
      "hidrofor tank havası",
      "basınç tankı hava basıncı",
      "hidrofor kaç bar olmalı",
      "membran yırtılması",
      "hidrofor ayarı",
    ],
    excerpt:
      "Pompayı değiştirmeden önce yapılacak on dakikalık bir ölçüm var: tank havası. Hidrofor arızalarının büyük bölümü burada başlıyor ve çoğu zaman yine burada bitiyor.",
    services: ["hidrofor-tamiri", "hidrofor-pompa-sistemleri", "su-deposu-temizligi"],
    intro:
      "Musluğu açar açmaz pompanın devreye girdiğini duyuyorsanız, arızalı olan büyük ihtimalle pompa değil. Basınç tankının içindeki hava yastığı zamanla kaçar ve sistem \"yayını\" kaybeder. Ölçümü on dakika, düzeltmesi beş dakika sürer; ama yapılmadığında pompanın ömrünü yıllarla ölçülen bir şekilde kısaltır.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Basınç tankının hava basıncı, pompanın devreye girme basıncının yaklaşık 0,2 bar altına ayarlanır.</strong> Devreye girme (P1) 2 bar olan bir sistemde tank havası 1,8 bar olmalıdır. Ölçüm mutlaka sistem basıncı boşaltılmış, yani tank içinde su yokken yapılır; dolu sistemde okunan değer yanıltıcıdır.",
      },
      {
        p: "Sibobtan hava yerine su geliyorsa membran yırtılmıştır ve tank değişmelidir. Sadece havası azalmışsa, araç lastiği pompasıyla hava basmak yeterlidir; tankı değiştirmek gerekmez. Bu ayrım, maliyeti belirleyen tek soru.",
      },

      { h2: "Basınç tankı gerçekte ne yapar?" },
      {
        p: "Tankın içi iki bölmeye ayrılmıştır: bir tarafta su, diğer tarafta sıkıştırılmış hava; ikisini esnek bir membran ayırır. Pompa çalıştığında su tanka dolar ve havayı sıkıştırır. Musluğu açtığınızda ise pompa hemen devreye girmez, önce bu sıkışmış hava suyu geri iter.",
      },
      {
        p: "Yani tank bir su deposu değil, bir enerji deposudur. Elleri yıkamak, sifonu çekmek, bir bardak su almak gibi kısa kullanımlarda pompanın hiç çalışmamasını sağlar. Sistemin sessizliği de, pompanın ömrü de bu küçük hava yastığına bağlıdır.",
      },
      {
        p: "Hava zamanla kaçar. Membranın geçirgenliği, sibobun mikro sızıntısı ve suya karışan hava bunu yavaş yavaş gerçekleştirir. Bu bir arıza değil, normal bir davranıştır; bu yüzden yılda bir kez ölçülmesi gerekir.",
      },

      { h2: "Havası kaçmış tankın belirtileri" },
      {
        p: "Belirtiler oldukça tipiktir ve birbirine karıştırılmaz. Aşağıdaki tablo, sahada en sık duyduğumuz şikâyetleri ayırt etmek için kullandığımız kısa yol:",
      },
      {
        table: {
          head: ["Şikâyet", "Ne anlama gelir", "İlk kontrol"],
          rows: [
            ["Musluk açılır açılmaz pompa kalkıyor", "Tank havası düşük veya bitmiş", "Sibobtan hava basıncı ölçümü"],
            ["Pompa saniyeler içinde açılıp kapanıyor", "Tank devre dışı, sistem hafızasız", "Hava ölçümü, membran testi"],
            ["Sibobtan su geliyor", "Membran yırtılmış", "Tank değişimi"],
            ["Basınç dalgalanıyor, duş ısısı değişiyor", "Aşırı ön yükleme veya şalter ayarı", "Hava değeri ve şalter aralığı"],
            ["Tank gövdesi tamamen soğuk ve boş geliyor", "Su tarafına hiç su girmiyor", "Giriş vanası ve bağlantı kontrolü"],
            ["Tank altında pas ve nem", "Gövde delinmiş", "Tank değişimi"],
          ],
        },
      },
      {
        p: "Bu belirtilerin hiçbiri pompanın kendisinin bozuk olduğunu göstermez. Pompa değişimine karar vermeden önce tank ölçümü yapılmalı; aksi halde yeni pompa da aynı şekilde sık devreye girer.",
      },

      { h2: "Ölçüme başlamadan önce" },
      { p: "İşlem basit ama sırası önemli. Aşağıdaki hazırlık yapılmadan yapılan ölçüm yanlış sonuç verir:" },
      {
        ul: [
          "Pompanın elektriğini kesin; sadece şalteri kapatmak yeterli değilse sigortayı indirin.",
          "Hidrofor çıkışındaki vanayı kapatın.",
          "En alt kattaki musluğu veya tahliye vanasını açıp sistemdeki basıncı tamamen boşaltın.",
          "Manometre sıfırı gösterene kadar bekleyin; sızıntı varsa akış tamamen kesilene kadar akıtın.",
          "Araç lastiği için kullanılan manometreli el pompası veya küçük kompresör hazır olsun.",
          "Tankın üstündeki plastik kapağı çıkarıp sibobu (araç lastiği supabına benzeyen valf) bulun.",
        ],
      },
      {
        p: "Sistem basıncı boşaltılmadan yapılan ölçümde, membranın su tarafındaki basınç okumaya karışır ve tank havası olduğundan yüksek görünür. Bu yüzden \"ölçtüm, 2,5 bar çıktı, sorun yok\" denilen tankların yarısı aslında bomboştur.",
      },

      { h2: "Adım adım hava basma" },
      {
        ol: [
          "Elektriği kesin, çıkış vanasını kapatın ve sistemi tahliye edin.",
          "Sibobun kapağını açın, ucundaki tozu temizleyin.",
          "Manometreli pompayı sibobun üzerine tam oturtun ve mevcut değeri okuyun.",
          "Sibobtan su geliyorsa işlemi durdurun: membran yırtıktır, hava basmanın anlamı yok.",
          "Değer hedefin altındaysa yavaşça hava basın; her 0,2–0,3 barda bir durup okuyun.",
          "Hedefi geçtiyseniz sibobun iğnesine hafifçe bastırarak fazlayı boşaltın.",
          "Hedef değere ulaşınca pompayı çekin ve sibobu sabunlu suyla kontrol edin; kabarcık varsa supap sızdırıyordur.",
          "Sibop kapağını takın, tahliyeyi kapatın, çıkış vanasını açın.",
          "Elektriği verin ve sistemin dolmasını bekleyin; ilk dolumda pompa bir süre kesintisiz çalışır, bu normaldir.",
          "Bir musluğu açıp kapatarak pompanın kaç saniyede bir devreye girdiğini gözleyin.",
        ],
      },
      {
        p: "İşlem doğru yapıldığında fark hemen anlaşılır: musluk açıldığında pompa birkaç saniye beklemeye başlar ve kısa kullanımlarda hiç devreye girmez.",
      },

      { h2: "Kaç bar basılmalı?" },
      {
        p: "Hedef değer, pompanın devreye girme basıncına bağlıdır; tankın üzerinde yazan fabrika değerine değil. Fabrika değeri genelde 1,5 bardır ve sizin sisteminizin ayarına uymayabilir.",
      },
      {
        table: {
          head: ["Devreye girme (P1)", "Durma (P2)", "Tank hava basıncı"],
          rows: [
            ["1,5 bar", "3,0 bar", "1,3 bar"],
            ["2,0 bar", "3,5 bar", "1,8 bar"],
            ["2,5 bar", "4,0 bar", "2,3 bar"],
            ["3,0 bar", "4,5 bar", "2,8 bar"],
          ],
        },
      },
      {
        p: "Şalter ayarını değiştirdiyseniz tank havasını da değiştirmeniz gerekir. En sık atlanan nokta bu: basınç yetersiz diye şalter yukarı çekilir, tank eski değerinde kalır ve sistem eskisinden de kötü çalışır.",
      },
      {
        p: "Hava değerini P1'in çok altına düşürmek de doğru değil. O durumda tank hep suyla dolu kalır, hava yastığı sıkışmaya fırsat bulamaz ve tank yine görevini yapamaz.",
      },

      { h2: "Membran yırtıksa ne olur?" },
      {
        p: "Membran yırtıldığında hava ile su aynı hacmi paylaşmaya başlar. Hava suya karışır, musluktan bir süre beyaz köpüklü su gelir ve tank kısa sürede tamamen su dolar. Bu noktadan sonra tank, içi su dolu bir metal kaptan ibarettir.",
      },
      {
        p: "Yırtık membran tamir edilmez. Bazı büyük tanklarda membran değiştirilebilir; konut tipi 19–100 litrelik tanklarda ise komple değişim hem daha ucuz hem daha kalıcıdır. Değişimde gövde hacmini küçültmemek önemli.",
      },
      {
        quote:
          "Sibobtan su gelen bir tanka hava basmak, delik lastiğe hava basmaya benzer. Birkaç gün idare eder, sonra aynı yere geri dönersiniz.",
      },
      {
        p: "Yeni tank seçerken membran malzemesine bakın. İçme suyu hattında gıdayla temasa uygun EPDM membranlı, sertifikalı tanklar tercih edilmelidir; ucuz membranlar suya koku ve tat verebiliyor.",
      },

      { h2: "Tank hacmi doğru mu?" },
      {
        p: "Hava basıncı doğru olduğu hâlde pompa hâlâ sık devreye giriyorsa, tank hacmi ihtiyaca göre küçük olabilir. Tankın gerçek işlevi, pompanın saatteki kalkış sayısını sınırlamaktır; hacim küçüldükçe bu sayı artar.",
      },
      {
        ul: [
          "Tek daire, düşük debili pompa: 19–24 litre çoğu zaman yeterli.",
          "Müstakil ev, bahçe kullanımı olan sistem: 50–60 litre daha rahat çalışır.",
          "Apartman ve site grupları: 100 litre ve üzeri, çoğu zaman birden fazla tank.",
          "Dalgıç pompalı kuyu sistemleri: motor kalkış sayısı sınırlı olduğu için hacim bir kademe büyük seçilir.",
        ],
      },
      {
        p: "Hacmi büyütmek pompayı yormaz, aksine dinlendirir. Yerden tasarruf gerekiyorsa iki küçük tankı paralel bağlamak da geçerli bir çözümdür; toplam hacim toplanır.",
      },

      { h2: "Basınç tankı ile genleşme tankı aynı şey değil" },
      {
        p: "Kazan dairelerinde iki farklı tank yan yana durabilir ve sık karıştırılır. Isıtma tesisatındaki genleşme tankı (genelde kırmızı), ısınan suyun hacim artışını karşılar. Hidrofordaki basınç tankı (genelde mavi) ise içme suyu hattında enerji depolar.",
      },
      {
        p: "İkisinin membran malzemesi ve sertifikası farklıdır. Isıtma tankı içme suyu hattında kullanılmaz; içindeki membran gıdayla temasa uygun değildir ve suya tat, koku verebilir. Ayarları da farklı mantıkla yapılır.",
      },
      {
        p: "Karışıklık genelde ikinci el veya elde kalmış parça kullanıldığında ortaya çıkıyor. Tank alırken üzerindeki etikette içme suyu uygunluğunun yazdığından emin olmak, sonradan çözülmesi zor bir sorunu baştan engelliyor.",
      },

      { h2: "Sık yapılan beş hata" },
      {
        ul: [
          "Sistem basıncı boşaltılmadan ölçüm yapmak — en yaygın hata, sonucu tamamen yanlış gösterir.",
          "Tankın üzerindeki fabrika değerini hedef sanmak; hedef sizin şalter ayarınıza bağlıdır.",
          "Şalter ayarını değiştirip tank havasını unutmak.",
          "Sibobtan su geldiği hâlde hava basmaya devam etmek.",
          "Kompresörle bir anda yüksek basınç vermek; membran zorlanır, ömrü kısalır.",
        ],
      },
      {
        p: "Bunlara bir altıncısını ekleyelim: ölçümden sonra sibop kapağını takmamak. Kapak sadece toz için değil, sibobun ikinci bir sızdırmazlık bariyeri olarak da görev yapar.",
      },

      { h2: "Tank havası ile pompa ömrü arasındaki ilişki" },
      {
        p: "Pompanın ömrünü belirleyen en önemli sayı, toplam çalışma saati değil; toplam kalkış sayısıdır. Her kalkışta motor nominal akımının birkaç katını çeker, salmastra kuru sürtünmeyle karşılaşır ve kontaktör bir kez daha ark yapar. Sabit devirde çalışmak pompayı yormaz; sürekli açılıp kapanmak yorar.",
      },
      {
        p: "Basit bir örnek: havası bitmiş tankla çalışan bir sistemde, bir bulaşık yıkama sırasında pompa on beş kez devreye girebilir. Aynı işlem, tankı doğru ayarlanmış bir sistemde iki kalkışla tamamlanır. Günlük fark yüzlerce kalkışa, yıllık fark ise on binlerce kalkışa çıkar.",
      },
      {
        p: "Bu yüzden tank havası ölçümünü \"küçük bakım\" saymıyoruz. Yapılan işin süresi on dakika; etkisi ise pompanın kaç yıl dayanacağını belirleyecek kadar büyük.",
      },

      { h2: "Tankın yeri ve montaj biçimi" },
      {
        p: "Tank, pompanın çıkışına, çekvalften sonra ve basınç şalterinin okuduğu noktaya yakın bağlanır. Aradaki mesafe uzadıkça ve araya dirsek girdikçe, tankın basıncı yumuşatma etkisi azalır.",
      },
      {
        ul: [
          "Dikey tanklar az yer kaplar ve tabandan bağlanır; küçük hacimlerde pratiktir.",
          "Yatay tanklar genelde pompanın üzerine kaide olarak konumlanır; büyük hacimlerde tercih edilir.",
          "Tankın altına drenaj payı bırakın; membran değişiminde ve tahliyede işi kolaylaştırır.",
          "Sibobun ulaşılabilir olması şart; duvara dayalı monte edilen tanklarda ölçüm yapılamaz.",
          "Bağlantıya küçük bir küresel vana koymak, tankı sistemi durdurmadan sökmenizi sağlar.",
        ],
      },
      {
        p: "Sibobun ulaşılamadığı montajlar sahada sık karşımıza çıkıyor. Ölçüm yapılamayan tank, pratikte bakımı hiç yapılmayan tank demek; bu yüzden montaj aşamasında bırakılan birkaç santimlik boşluk yıllar boyunca işe yarıyor.",
      },

      { h2: "Malatya'da yılda bir kontrol yeterli" },
      {
        p: "Malatya şebekesinde suyun sertliği bölgeye göre değişiyor; kireç oranı yüksek olan yerlerde şalter ve çekvalf üzerinde kireç birikmesi hızlanıyor. Tank havası ölçümünü yıllık bakımın bir parçası hâline getirmek, hem hidroforun hem de bağlı olduğu tesisatın ömrünü uzatıyor.",
      },
      {
        p: "En uygun zaman ilkbahar sonu. Yaz aylarında su kullanımı artıyor, bahçesi olan evlerde pompa çok daha fazla çalışıyor. Sezon öncesi yapılan on dakikalık kontrol, sezon ortasında gelen arıza çağrılarının önemli bölümünü ortadan kaldırıyor.",
      },
      {
        p: "Kendiniz ölçmek istemiyorsanız ya da sibobtan su geldiğini gördüyseniz, tankı ve şalter ayarını birlikte değerlendirmek gerekir. Bu iki parça birbirine bağlı çalışır; biri değişince diğeri de yeniden ayarlanmalıdır.",
      },
    ],
    faqs: [
      {
        q: "Hidrofor tankına ne kadar sıklıkla hava basılmalı?",
        a: "Yılda bir kontrol çoğu konut sistemi için yeterlidir. Kontrolde değer hedefin 0,2 barından fazla altındaysa takviye yapılır. Yılda birden fazla hava kaçıran bir tankta sorun havanın kendisinde değil, sibopta veya membrandadır; o durumda parça değişimi gerekir.",
      },
      {
        q: "Tank havasını ölçerken sistem neden boşaltılmalı?",
        a: "Sistem doluyken membranın su tarafındaki basınç, hava tarafındaki ölçümü etkiler ve değer olduğundan yüksek okunur. Boşaltılmış sistemde okunan değer ise sadece hava yastığını gösterir. Bu yüzden \"ölçtüm, normaldi\" denilen tankların bir kısmı aslında havasızdır.",
      },
      {
        q: "Sibobtan su geliyor, hava basmaya devam edebilir miyim?",
        a: "Hayır. Su gelmesi membranın yırtıldığını gösterir; basılan hava doğrudan suya karışır ve musluktan köpüklü su gelir. Ayrıca tankın iç yüzeyi suyla temas ettiği için gövde paslanmaya başlar. Bu durumda tek doğru çözüm tank değişimidir.",
      },
      {
        q: "Fabrika değeri 1,5 bar yazıyor, onu mu esas almalıyım?",
        a: "Hayır, o değer tankın nakliye ayarıdır. Doğru değer sizin pompanızın devreye girme basıncına bağlıdır ve onun 0,2 bar altındadır. Devreye girme basıncı 2,5 bar olan bir sistemde tankı 1,5 barda bırakmak, tankın kapasitesinin önemli bölümünü kullanılamaz hâle getirir.",
      },
      {
        q: "Hava basınca su basıncım artar mı?",
        a: "Hayır, musluktaki basıncı belirleyen basınç şalteri ayarıdır. Tank havası yalnızca pompanın ne sıklıkla devreye gireceğini belirler. Basınç düşük geliyorsa şalter ayarına, kirlenmiş filtrelere ve boru çapına bakmak gerekir; tank havası bu şikâyeti çözmez.",
      },
      {
        q: "Tankı büyütmek elektrik tüketimini düşürür mü?",
        a: "Dolaylı olarak evet. Büyük tank, pompanın kalkış sayısını azaltır; her kalkışta motorun çektiği yüksek başlangıç akımı ortadan kalkar. Asıl kazanç ise mekanik: daha az kalkış, daha az yıpranma ve belirgin şekilde uzun pompa ömrü anlamına gelir.",
      },
      {
        q: "Bisiklet pompasıyla hava basılabilir mi?",
        a: "Küçük tanklarda teknik olarak mümkün ama zahmetlidir ve çoğu bisiklet pompasının manometresi bu aralıkta hassas değildir. Araç lastiği için satılan manometreli ayak pompası hem daha hızlı hem daha doğru sonuç verir. Kompresör kullanılacaksa basınç yavaş yükseltilmelidir.",
      },
      {
        q: "Tank havası doğru ama pompa hâlâ sık kalkıyorsa ne yapmalı?",
        a: "Sırasıyla üç şeye bakılır: tesisatta damlayan bir nokta var mı, çekvalf sızdırıyor mu ve şalterin devreye girme–durma aralığı çok mu dar. Hidrofor çıkışındaki vana kapatıldığında pompa hâlâ kalkıyorsa sorun tank–çekvalf tarafında, kalkmıyorsa tesisattaki kaçaktadır.",
      },
    ],
    related: ["hidrofor-surekli-calisiyor", "hidrofor-basinc-salteri-ayari", "su-deposu-hidrofor-birlikte"],
  },

  {
    slug: "hidrofor-basinc-salteri-ayari",
    title: "Hidrofor basınç şalteri ayarı nasıl yapılır?",
    category: "Pompa",
    published: "2026-08-10",
    reading: 9,
    metaTitle: "Basınç Şalteri Ayarı | Hidroforda P1 ve P2 Nasıl Kurulur",
    metaDesc:
      "Hidrofor basınç şalterinde büyük ve küçük vidanın görevi, devreye girme ve durma basıncı nasıl ayarlanır, hangi aralık doğru? Adım adım ayar ve güvenlik.",
    keywords: [
      "basınç şalteri ayarı",
      "hidrofor basınç ayarı",
      "prestcontrol ayarı",
      "hidrofor kaç bara ayarlanır",
      "pompa devreye girme basıncı",
    ],
    excerpt:
      "İki vida, bir manometre ve on beş dakika. Basınç şalteri ayarı doğru yapıldığında hem duş basıncı düzeliyor hem pompanın kalkış sayısı yarıya iniyor.",
    services: ["hidrofor-tamiri", "hidrofor-pompa-sistemleri", "sihhi-tesisat"],
    intro:
      "Hidrofor şikâyetlerinin önemli bölümü arıza değil, ayar meselesi. Basınç yetersiz geliyorsa, pompa saniye başı açılıp kapanıyorsa ya da duşta sıcak–soğuk dalgalanma varsa, önce basınç şalterinin iki vidasına bakmak gerekir. Bu yazıda hangi vidanın ne yaptığını ve ayarın hangi sırayla yapıldığını anlatıyoruz.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Basınç şalterinde büyük vida (yay) her iki basıncı birden yukarı–aşağı kaydırır; küçük vida yalnızca durma basıncını değiştirerek aradaki farkı açar veya daraltır.</strong> Konutlarda tipik ayar, devreye girme 2 bar ve durma 3,5 bar civarındadır; aradaki fark 1,2–1,5 bar tutulur.",
      },
      {
        p: "Ayar değiştirildiğinde basınç tankının hava basıncı da yeniden ayarlanmalıdır: tank havası, yeni devreye girme değerinin 0,2 bar altına getirilir. Bu iki ayar birlikte yapılmazsa sonuç eskisinden kötü olur.",
      },

      { h2: "Basınç şalteri ne yapar?" },
      {
        p: "Basınç şalteri, hat basıncını mekanik bir yay üzerinden izleyen basit bir anahtardır. Basınç belirlenen alt sınıra (P1) düştüğünde kontakları kapatır ve pompayı çalıştırır; üst sınıra (P2) ulaştığında kontakları açar ve pompayı durdurur.",
      },
      {
        p: "Yani şalter, sistemin beyni değil refleksidir. Ne kadar su harcandığını bilmez, sadece basıncı ölçer. Bu basitlik hem avantaj hem sınırdır: ucuz ve dayanıklıdır, ama sabit basınç veremez ve pompayı sürekli açıp kapatarak çalışır.",
      },
      {
        p: "Kapağı açıldığında iki ayar vidası görülür. Büyük olan ana yayı, küçük olan fark (diferansiyel) yayını sıkar. Birçok markada büyük vidanın yanında bir ok ve \"+ / −\" işareti bulunur.",
      },

      { h2: "İki vida, iki farklı iş" },
      {
        table: {
          head: ["Vida", "Etkisi", "Sonuç"],
          rows: [
            ["Büyük vida sıkılır", "P1 ve P2 birlikte yükselir", "Genel basınç artar, fark korunur"],
            ["Büyük vida gevşetilir", "P1 ve P2 birlikte düşer", "Genel basınç azalır"],
            ["Küçük vida sıkılır", "Sadece P2 yükselir", "Fark açılır, pompa daha seyrek kalkar"],
            ["Küçük vida gevşetilir", "Sadece P2 düşer", "Fark daralır, pompa daha sık kalkar"],
          ],
        },
      },
      {
        p: "Ayar yaparken tek seferde çok tur atmayın. Her vidada çeyrek tur çevirip sonucu ölçmek, hem şalterin zarar görmesini önler hem hedefi şaşırmadan bulmanızı sağlar.",
      },

      { h2: "Ayardan önce güvenlik" },
      {
        ul: [
          "Şalterin kapağı açıkken içinde şebeke gerilimi bulunur; ayar öncesi elektriği kesin.",
          "Ölçüm için pompanın enerjisi gerekiyorsa kapağı takıp öyle çalıştırın, açık kapakla çalışan sisteme elinizi sokmayın.",
          "Manometrenin doğru çalıştığından emin olun; hatalı manometre tüm ayarı bozar.",
          "Şalterin altındaki bağlantı kireç yapmışsa önce temizleyin; tıkalı kanal, gerçek basıncı şaltere iletmez.",
          "Kontak yüzeyleri yanmış, kararmış bir şalterde ayar yapmayın; o şalter değişmelidir.",
        ],
      },
      {
        p: "Kireçlenmiş bağlantı kanalı, sahada en çok yanıltan durumlardan biri. Şalter doğru ayarda görünür ama basıncı geç algılar; pompa geç kalkar, geç durur ve sistem düzensiz çalışır.",
      },

      { h2: "Adım adım ayar" },
      {
        ol: [
          "Mevcut değerleri yazın: pompa hangi basınçta kalkıyor, hangi basınçta duruyor? Bir musluk açıp manometreyi izleyerek okuyun.",
          "Elektriği kesin ve şalterin kapağını açın.",
          "Önce hedef devreye girme basıncını belirleyin; evin en üst noktasına göre karar verilir.",
          "Büyük vidayı çeyrek tur çevirip kapağı takın, elektriği verin ve yeni P1–P2 değerlerini ölçün.",
          "Hedef P1'e ulaşana kadar bu adımı tekrarlayın.",
          "Aradaki fark 1,2–1,5 bar değilse küçük vidayla farkı ayarlayın.",
          "Son ayardan sonra pompayı birkaç kez devreye sokup değerlerin tekrarlandığını doğrulayın.",
          "Elektriği kesin, sistemi boşaltın ve tank havasını yeni P1'in 0,2 bar altına getirin.",
          "Sistemi doldurup son bir kez basınçları kontrol edin.",
        ],
      },
      {
        p: "Son iki adım atlanırsa ayar yarım kalır. Şalter yeni değerlerde, tank eski değerinde çalışan bir sistem, ayar öncesindeki hâlinden daha sık devreye girer.",
      },

      { h2: "Hangi basınç doğru?" },
      {
        p: "Devreye girme basıncı, evin en yüksek musluğunda kabul edilebilir bir basınç bırakacak kadar yüksek olmalıdır. Kaba bir hesapla her 10 metre yükseklik 1 bar basınç yer; buna ek olarak musluğun ucunda en az 1 bar kalması istenir.",
      },
      {
        table: {
          head: ["Yapı", "Önerilen P1", "Önerilen P2"],
          rows: [
            ["Tek katlı daire, kısa hat", "1,5 bar", "3,0 bar"],
            ["İki katlı müstakil ev", "2,0 bar", "3,5 bar"],
            ["Üç kat + çatı katı", "2,5 bar", "4,0 bar"],
            ["Bahçe sulaması olan ev", "2,5 bar", "4,0 bar"],
            ["Apartman kolon hattı", "3,0 bar", "4,5 bar"],
          ],
        },
      },
      {
        p: "Üst sınırda bir kural daha var: durma basıncı, pompanın kapalı vana basıncının altında kalmalıdır. Pompa hedefe ulaşamıyorsa hiç durmaz ve termikten atana kadar çalışır. Ayarı yükseltirken bu sınır mutlaka gözetilmeli.",
      },
      {
        p: "Tesisatın kendisi de sınır koyar. Eski galvaniz borulu binalarda 4 barın üzerine çıkmak, zayıf noktalardan kaçak başlatabilir. Basınç ihtiyacı yüksekse önce hattın durumu değerlendirilmelidir.",
      },

      { h2: "Fark (diferansiyel) neden önemli?" },
      {
        p: "P1 ile P2 arasındaki fark, tanktan çekilebilecek su miktarını belirler. Fark daraldıkça tank aynı hacimde daha az kullanılabilir su verir ve pompa daha sık kalkar. 0,5 barlık bir farkla çalışan sistemde tank neredeyse hiç iş görmez.",
      },
      {
        p: "Farkı açmak ise konforu düşürür: musluk basıncı 2 bar ile 4 bar arasında gidip gelir, duşta sıcak–soğuk dengesi bozulur. Bu yüzden 1,2–1,5 bar, konfor ile pompa ömrü arasındaki dengeli aralık olarak kabul edilir.",
      },
      {
        quote:
          "Dar fark pompayı yorar, geniş fark kullanıcıyı rahatsız eder. Doğru ayar, ikisinin ortasında ve sisteme özel bulunur.",
      },

      { h2: "Ayar sonrası üç test" },
      {
        p: "Vidayı çevirip kapağı kapatmak işi bitirmez. Ayarın gerçekten oturduğunu görmek için üç kısa test yapıyoruz ve sonuçlarını not ediyoruz.",
      },
      {
        ol: [
          "Kalkış–duruş testi: bir musluk açılır, pompanın hangi basınçta kalktığı ve hangi basınçta durduğu üç kez tekrarlanarak doğrulanır. Değerler her seferinde aynı olmalıdır.",
          "Sızdırmazlık testi: tüm musluklar kapatılır, manometre yarım saat izlenir. Basınç düşüyorsa kaçak veya çekvalf sorunu vardır; bu ayarla çözülmez.",
          "Konfor testi: en üst kattaki duş açılırken alt katta bir musluk açılır. Basınç kabul edilebilir seviyede kalıyorsa ayar uygundur.",
        ],
      },
      {
        p: "Bu üç test on beş dakika sürer ve ayarın kalıcı olup olmadığını gösterir. Özellikle ikinci test, \"ayar bozuluyor\" diye tekrar tekrar çağrılan sistemlerin çoğunda asıl sorunu ortaya çıkarır: ayar bozulmuyor, tesisat sızdırıyor.",
      },

      { h2: "Değerleri kaydetmek neden işe yarıyor?" },
      {
        p: "Pano kapağının içine yapıştırılan küçük bir etiket, sonraki her müdahaleyi kolaylaştırır. Üzerinde şu değerler bulunmalı: devreye girme basıncı, durma basıncı, tank hava basıncı ve son ayar tarihi.",
      },
      {
        p: "Sistem zamanla kendiliğinden ayardan çıkmaz; birisi müdahale ettiğinde ya da bir parça yıprandığında değişir. Kayıt varsa, bir sonraki kontrolde değerlerin sapıp sapmadığı saniyeler içinde anlaşılır ve arıza aramaya nereden başlanacağı belli olur.",
      },
      {
        p: "Apartmanlarda bu etiket ayrıca yönetim değişikliklerinde bilgi kaybını önlüyor. Aynı sistemi yıllar sonra farklı bir ekip açtığında, hangi değerlerde çalışması gerektiğini tahmin etmek zorunda kalmıyor.",
      },

      { h2: "Ayarla çözülmeyen durumlar" },
      {
        p: "Bazı şikâyetler ne kadar ayar yapılırsa yapılsın düzelmez, çünkü kaynağı başka yerdedir:",
      },
      {
        ul: [
          "Pompa hedef basınca hiç ulaşamıyorsa: çark aşınmış, emişte hava var veya pompa yetersiz seçilmiş.",
          "Musluk kapalıyken basınç yavaşça düşüyorsa: çekvalf sızdırıyor veya tesisatta kaçak var.",
          "Basınç ani düşüp yükseliyorsa: tank havası bitmiş.",
          "Şalter kontakları ark yapıyor, yanık kokuyorsa: şalter değişmeli.",
          "Sadece üst katta basınç düşükse: kolon çapı veya kireçlenme sorunu.",
        ],
      },
      {
        p: "Bu ayrımı yapmak zaman kazandırır. Ayarla çözülmeyecek bir sorunu ayarla çözmeye çalışmak, çoğu zaman şalterin yayını da bozarak yeni bir arıza ekler.",
      },

      { h2: "Şalter tipleri: hangisi sizde var?" },
      {
        p: "Piyasada birbirine benzeyen ama farklı çalışan üç eleman var ve ayar mantıkları aynı değil. Hangisinin takılı olduğunu bilmeden yapılan müdahale sonuç vermez.",
      },
      {
        table: {
          head: ["Eleman", "Nasıl çalışır", "Ayar imkânı"],
          rows: [
            ["Mekanik basınç şalteri", "Yaylı kontak, iki basınç değeri", "İki vidayla tam ayarlanır"],
            ["Elektronik basınç şalteri", "Sensör + kart, dijital eşik", "Menüden değer girilir"],
            ["Akış anahtarı (press control)", "Basınç düşünce çalışır, akış kesilince durur", "Tek eşik, sınırlı ayar"],
            ["İnvertör (frekans sürücü)", "Devir ayarlayarak sabit basınç", "Parametre üzerinden"],
          ],
        },
      },
      {
        p: "Akış anahtarlı sistemlerde tank çoğu zaman bulunmaz; cihaz akış kesildiğinde pompayı durdurur. Bu tip elemanlarda \"fark ayarı\" yoktur, dolayısıyla sık kalkma şikâyeti farklı yöntemlerle çözülür.",
      },

      { h2: "Manometreyi doğru okumak" },
      {
        p: "Ayarın doğruluğu, ölçümün doğruluğuna bağlıdır. Manometre pompa çıkışına, tanka yakın bir noktaya takılmalıdır. Kolon hattının ortasına veya uzak bir noktaya takılan manometre, akış sırasındaki basınç kaybını da gösterdiği için şalterin gördüğü değerden farklı okur.",
      },
      {
        p: "Ölçüm sırasında tüm musluklar kapalı olmalıdır. Akış varken okunan değer, dinamik basınçtır ve şalterin devreye girme noktasını temsil etmez. Kalkış ve duruş anlarını yakalamak için manometreyi izlerken bir kişinin musluğu kontrollü açıp kapatması en pratik yöntemdir.",
      },
      {
        p: "İğnesi sıfıra dönmeyen, camı buğulanmış veya darbe almış manometreler değiştirilmelidir. Birkaç yüz gramlık bir parça yüzünden tüm sistemi yanlış ayarlamak, sahada en çok karşılaştığımız gereksiz iş kaynaklarından biri.",
      },

      { h2: "Apartmanda tek ayar herkese yeter mi?" },
      {
        p: "Tek bir hidrofor grubu tüm binayı besliyorsa, ayar en üst kattaki musluğa göre yapılır. Bu durumda alt katlarda basınç gereğinden yüksek olur; armatürler zorlanır, su darbesi artar ve su tüketimi yükselir.",
      },
      {
        p: "Çözüm, ayarı düşürmek değil; alt katlara basınç düşürücü vana takmaktır. Böylece üst kat yeterli basınç alırken alt katlar makul aralıkta çalışır. Yeni yapılan binalarda bu vana daire girişlerine standart olarak konuluyor.",
      },
      {
        p: "Çok katlı yapılarda ikinci bir yöntem de zonlama: bina iki bölgeye ayrılır ve her bölge kendi basıncında beslenir. Yatırım gerektirir ama hem konforu hem su tüketimini dengeler.",
      },

      { h2: "Şalter mi, invertör mü?" },
      {
        p: "Basınç şalteri ucuz, dayanıklı ve tamir edilebilir bir çözümdür. Buna karşılık sabit basınç veremez ve pompayı sürekli açıp kapatır. Kullanım yoğunsa ya da konfor beklentisi yüksekse, frekans kontrollü sistemler basıncı sabit tutar ve kalkış sayısını neredeyse sıfırlar.",
      },
      {
        p: "Karar verirken kullanım profiline bakıyoruz: günde birkaç kez su kullanılan bir dairede şalter yeterlidir. Çok katlı bir binada, bahçe sulaması olan bir evde veya iş yerinde ise invertörlü çözüm hem konfor hem ömür açısından öne geçiyor.",
      },
    ],
    faqs: [
      {
        q: "Basınç şalterinde hangi vida neyi ayarlar?",
        a: "Büyük vida ana yayı sıkar ve devreye girme ile durma basıncını birlikte kaydırır. Küçük vida ise fark yayını ayarlar; sadece durma basıncını değiştirerek aradaki aralığı açar veya daraltır. Önce büyük vidayla alt sınır bulunur, sonra küçük vidayla fark ayarlanır.",
      },
      {
        q: "Hidrofor kaç bara ayarlanmalı?",
        a: "Yapının yüksekliğine bağlıdır. İki katlı bir evde devreye girme 2 bar, durma 3,5 bar tipik bir ayardır. Her 10 metre yükseklik yaklaşık 1 bar basınç tükettiği için üst katlarda değerler yükseltilir. Üst sınırı pompanın kapasitesi ve tesisatın dayanımı belirler.",
      },
      {
        q: "Basıncı yükseltmek pompaya zarar verir mi?",
        a: "Pompanın kapasitesi içinde kalındığı sürece hayır. Ancak durma basıncı, pompanın üretebileceği en yüksek basınca yaklaşırsa pompa hedefe ulaşamaz ve hiç durmadan çalışır. Bu durumda motor ısınır, termik atar ve zamanla sargı zarar görür.",
      },
      {
        q: "Şalteri ayarladım, pompa yine sık kalkıyor. Neden?",
        a: "Büyük ihtimalle tank havası eski değerinde kalmıştır. Şalter ayarı değiştiğinde tank havası da yeni devreye girme basıncının 0,2 bar altına getirilmelidir. Bu yapıldığı hâlde sorun sürüyorsa çekvalf sızıntısı veya tesisatta küçük bir kaçak aranır.",
      },
      {
        q: "Manometre var ama iğnesi titriyor, ayar yapabilir miyim?",
        a: "Titreme genelde pompa çalışırken normaldir; ancak iğne sürekli zıplıyor ve okuma yapılamıyorsa manometre yıpranmıştır veya hatta hava vardır. Ayar öncesi manometrenin değiştirilmesi daha doğrudur; yanlış okunan 0,5 bar, tüm ayarı anlamsız kılar.",
      },
      {
        q: "Basınç şalteri ne kadar ömürlüdür?",
        a: "Kalkış sayısına bağlı olarak birkaç yıldan on yıla kadar değişir. Kontaklar her açılıp kapanmada bir miktar aşınır; günde yüzlerce kez devreye giren bir sistemde şalter çok daha hızlı yorulur. Kontaklarda kararma, ark sesi veya yapışma varsa değiştirilmelidir.",
      },
      {
        q: "Kuru çalışma koruması şalterle aynı şey mi?",
        a: "Hayır. Basınç şalteri hattaki basıncı izler; kuru çalışma koruması ise emişte su olup olmadığını izler. Depo boşaldığında basınç şalteri bunu anlamaz ve pompayı çalıştırmaya devam eder. İkisi ayrı elemanlardır ve birlikte kullanılmaları gerekir.",
      },
      {
        q: "Ayarı kendim yapabilir miyim?",
        a: "Elektrik kesildikten sonra vidaları çevirmek teknik olarak basittir. Ancak ölçümün pompa çalışırken yapılması gerekir ve kapağı açık şalter üzerinde şebeke gerilimi bulunur. Elektrikle çalışmaya alışkın değilseniz, ayarı tank havası kontrolüyle birlikte yaptırmak daha güvenli olur.",
      },
    ],
    related: ["hidrofor-tank-havasi-ayari", "hidrofor-surekli-calisiyor", "evde-su-basinci-dusuk"],
  },

  {
    slug: "hidrofor-ses-ve-titresim",
    title: "Hidrofor neden ses yapar? Gürültünün kaynağını bulmak",
    category: "Pompa",
    published: "2026-08-06",
    reading: 9,
    metaTitle: "Hidrofor Ses Yapıyor | Gürültü ve Titreşim Nedenleri",
    metaDesc:
      "Uğultu, vurma, ıslık, tıkırtı: hidrofor gürültüsünün her türü farklı bir nedene işaret eder. Sesi tanıma tablosu ve kalıcı çözüm yöntemleri.",
    keywords: [
      "hidrofor ses yapıyor",
      "hidrofor gürültüsü",
      "pompa titreşimi",
      "kavitasyon",
      "su darbesi",
    ],
    excerpt:
      "Hidroforun çıkardığı ses bir arıza raporudur. Uğultu başka, vurma başka, ıslık başka bir şey anlatır; doğru okunduğunda arızanın yerini neredeyse adresiyle söyler.",
    services: ["hidrofor-tamiri", "hidrofor-pompa-sistemleri", "mekanik-tesisat"],
    intro:
      "Apartmanlarda en çok şikâyet edilen konulardan biri hidrofor gürültüsü. Çoğu zaman \"pompa eskidi\" diye değiştiriliyor ve ses aynı şekilde devam ediyor. Çünkü sesin kaynağı genelde pompanın kendisi değil; montaj, emiş hattı veya basınç ayarıdır.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Hidrofor gürültüsünün üç ana kaynağı vardır: yapıya iletilen titreşim, emişteki kavitasyon ve vana–çekvalf kaynaklı su darbesi.</strong> Sesin türü hangisi olduğunu söyler; sürekli uğultu montaj kaynaklı, çakıl sesine benzeyen cızırtı kavitasyon, tek seferlik güm sesi ise su darbesidir.",
      },
      {
        p: "Çözüm sırası da buna göre değişir. Titreşim takozu ve esnek bağlantı montaj sesini keser; emiş hattı düzeltmesi kavitasyonu bitirir; yavaş kapanan vana veya darbe emici su darbesini önler.",
      },

      { h2: "Sesi tanıma tablosu" },
      {
        p: "Sahaya çıkmadan önce telefonda bile ayırt edebildiğimiz sesler var. Aşağıdaki tablo, kendi sisteminizi dinlerken işinize yarayacak:",
      },
      {
        table: {
          head: ["Duyduğunuz ses", "Muhtemel kaynak", "İlk müdahale"],
          rows: [
            ["Sürekli, boğuk uğultu", "Titreşimin yapıya iletilmesi", "Takoz, esnek bağlantı, kaide"],
            ["Çakıl taşı / cızırtı sesi", "Kavitasyon, emişte hava", "Emiş hattı ve vana kontrolü"],
            ["Kapanışta tek bir güm", "Su darbesi", "Darbe emici, yavaş kapanan vana"],
            ["Metalik tıkırtı, ritmik", "Çark içinde yabancı cisim", "Pompa gövdesi açılıp temizlenir"],
            ["Islık, tiz ses", "Vana kısıklığı veya dar kesit", "Vana açıklığı, çap kontrolü"],
            ["Motor uğulduyor ama dönmüyor", "Kondansatör veya faz sorunu", "Elektriksel kontrol"],
            ["Boru boyunca yayılan hışırtı", "Yüksek akış hızı", "Çap büyütme, basınç düşürme"],
          ],
        },
      },
      {
        p: "Sesi tek başına dinlemek yetmez; ne zaman ortaya çıktığı da bilgi verir. Sadece gece duyuluyorsa muhtemelen ses hep vardı, gündüz arka plan gürültüsünde kayboluyordu. Yeni ortaya çıktıysa bir şey değişmiş demektir.",
      },

      { h2: "Titreşim: en yaygın sebep" },
      {
        p: "Pompa çalışırken küçük ama sürekli bir titreşim üretir. Bu titreşim sert bir zemine veya doğrudan boruya iletildiğinde, bina yapısı bir hoparlör gibi davranır ve sesi katlara taşır. Pompanın kendisi sessizken bile üst kattaki daire uğultu duyabilir.",
      },
      {
        ul: [
          "Pompa, betona doğrudan değil; kauçuk takoz veya titreşim yastığı üzerine oturtulmalı.",
          "Emiş ve basma hattında esnek bağlantı (kompansatör) kullanılmalı.",
          "Boru askıları lastik contalı olmalı, boru duvara metal metale temas etmemeli.",
          "Pompa kaidesi duvara bitişik olmamalı; birkaç santimlik boşluk sesi belirgin azaltır.",
          "Zemin çok inceyse ayrı bir beton kaide dökülmesi ses yalıtımını artırır.",
        ],
      },
      {
        p: "Bu önlemler ucuz ve geri dönüşü hızlı çözümlerdir. Apartman gürültü şikâyetlerinin büyük bölümünü, pompaya hiç dokunmadan sadece montajı düzelterek bitiriyoruz.",
      },

      { h2: "Kavitasyon: pompayı yiyen ses" },
      {
        p: "Kavitasyon, emiş tarafındaki basıncın çok düşmesi sonucu suyun içinde buhar kabarcıklarının oluşması ve bu kabarcıkların çark üzerinde patlamasıdır. Kulağa çakıl çekilen bir su sesi gibi gelir ve masum değildir: çarkın yüzeyini zamanla oyar.",
      },
      { p: "Emiş tarafında kavitasyonu tetikleyen tipik hatalar şunlar:" },
      {
        ul: [
          "Emiş hattının basma hattıyla aynı veya daha küçük çapta seçilmesi.",
          "Emişte çok sayıda dirsek ve gereksiz uzunluk.",
          "Tıkanmış pislik tutucu veya yarı kapalı emiş vanası.",
          "Deponun pompadan çok aşağıda olması ve emiş yüksekliğinin sınırı zorlaması.",
          "Emiş hattındaki bir bağlantıdan hava emilmesi.",
        ],
      },
      {
        p: "Kavitasyon sesi duyuluyorsa müdahale ertelenmemeli. Ses giderek azalabilir; bu iyileşme değil, çarkın aşınarak performans kaybetmesi anlamına gelir. Aşınan çark aynı devirde daha az basınç üretir ve pompa daha uzun süre çalışmaya başlar.",
      },

      { h2: "Su darbesi: tek seferlik güm" },
      {
        p: "Bir musluk veya elektrikli vana hızlı kapandığında, hareket hâlindeki su kütlesi aniden durur ve enerjisini boruya basınç dalgası olarak aktarır. Buna su darbesi (koç darbesi) denir. Sesi tek bir vuruştur ve genelde çamaşır makinesi, bulaşık makinesi ya da sulama vanası kapanırken duyulur.",
      },
      {
        p: "Zararı yalnızca gürültü değildir: tekrarlayan darbeler bağlantıları gevşetir, contaları yorar ve zamanla kaçak başlatır. Kalıcı çözüm, darbe emici (hava odacığı) eklemek veya vanayı yavaş kapanan tipte seçmektir.",
      },
      {
        quote:
          "Su darbesi olan bir tesisatta yıllar sonra ortaya çıkan sızıntıların yeri neredeyse hep aynıdır: darbenin en sert hissedildiği dirsekler ve makine bağlantıları.",
      },
      {
        p: "Basıncın gereğinden yüksek ayarlanması darbeyi şiddetlendirir. Bu yüzden gürültü şikâyetlerinde basınç şalteri ayarını da gözden geçiriyoruz; 5 bara ayarlanmış bir sistemi 3,5 bara indirmek bazen tek başına yeterli oluyor.",
      },

      { h2: "Tank ve şalter kaynaklı sesler" },
      {
        p: "Basınç tankının havası bittiğinde pompa saniyeler içinde açılıp kapanır. Bu durumda duyulan ses, tek bir sürekli uğultu değil; art arda gelen kalkış–duruş serisidir. Şalter kontakları da her seferinde klik sesi çıkarır.",
      },
      {
        p: "Bu ses türü, ekipmanın en hızlı yıprandığı çalışma biçimine işaret ettiği için önceliklidir. Tank havasının ölçülmesi ve şalter farkının açılması, hem sesi hem yıpranmayı aynı anda azaltır.",
      },
      {
        p: "Kontaklardan gelen cızırtı ve yanık kokusu ise ayrı bir uyarıdır: şalter değişmelidir. Ark yapan kontak, kısa sürede tamamen yapışabilir ve pompa durmadan çalışmaya devam eder.",
      },

      { h2: "Titreşim yalıtımında ne kullanılır?" },
      {
        p: "Malzeme seçimi, sesin ne kadar kesileceğini doğrudan belirler. Ucuz bir sünger parçası birkaç ayda ezilir ve pompa yine betona oturur; doğru malzeme yıllarca görev yapar.",
      },
      {
        table: {
          head: ["Malzeme", "Nerede kullanılır", "Not"],
          rows: [
            ["Kauçuk titreşim takozu", "Pompa ayakları", "Ağırlığa uygun sertlikte seçilmeli"],
            ["Esnek bağlantı (kompansatör)", "Emiş ve basma hattı", "Titreşimin boruya geçişini keser"],
            ["Lastik contalı boru kelepçesi", "Duvar askıları", "Metal metale temas engellenir"],
            ["Titreşim yastığı / mat", "Kaide altı", "Zemin inceyse etkili"],
            ["Akustik panel", "Duvar ve tavan", "Havayla yayılan sesi emer"],
          ],
        },
      },
      {
        p: "Takoz seçiminde en yaygın hata, pompanın ağırlığına göre çok sert bir takoz kullanmaktır. Sert takoz sıkışmaz ve titreşimi aynen iletir; doğru seçilen takoz ise yük altında bir miktar ezilerek yalıtım görevini yapar.",
      },

      { h2: "Ne zaman pompa gerçekten değişmeli?" },
      {
        p: "Montaj ve ayar tarafı düzeltildiği hâlde ses devam ediyorsa, sıra pompanın kendisine gelir. Rulman sesi, mil eğriliği veya çark aşınması bu aşamada ölçümle ayırt edilir.",
      },
      {
        ul: [
          "Motor gövdesinden gelen kuru, metalik sürtünme sesi: rulman ömrünü doldurmuş olabilir.",
          "Çalışırken gözle görülür titreme: mil veya kaplin hizası bozulmuş olabilir.",
          "Kapasitede düşüş + ses: çark aşınmıştır, pompa artık eski basıncı üretmiyordur.",
          "Isınma ve koku: motor sargısında sorun başlamış olabilir.",
        ],
      },
      {
        p: "Bu belirtiler varken pompayı çalıştırmaya devam etmek, arızayı büyütür. Rulman kaynaklı bir ses erken müdahaleyle rulman değişimiyle çözülürken, geç kalındığında mil ve gövde hasarına dönüşerek komple değişime çıkabilir.",
      },

      { h2: "Ses ölçmeden karar vermeyin" },
      {
        p: "Gürültü şikâyetlerinde en pahalı yol tahminle parça değiştirmektir. Sesin nerede yükseldiğini bulmak için pompa dairesinde, boru hattı boyunca ve şikâyetin geldiği dairede ayrı ayrı dinleme yapıyoruz. Aynı ses üç noktada farklı şiddette duyuluyorsa, iletim yolu bellidir.",
      },
      {
        p: "Basit bir yöntem: pompa çalışırken emiş vanasını çok az kısın. Ses artıyorsa kavitasyon güçlü bir ihtimaldir. Pompayı elle hafifçe kaldırdığınızda (mümkünse) ses azalıyorsa titreşim iletimi baskındır.",
      },
      {
        p: "Ölçüm yapılmadan yapılan pompa değişimlerinin bir kısmı, sesi hiç azaltmadan sadece maliyet ekliyor. Yeni pompa da aynı emiş hattına, aynı sert zemine bağlandığı için aynı sesi üretiyor.",
      },

      { h2: "Pompa dairesinin akustiği" },
      {
        p: "Ses yalnızca borulardan değil, havadan da yayılır. Pompa dairesinin kapısı altında bir parmak boşluk varsa, o boşluk sesi merdiven boşluğuna taşıyan bir bacadır. Kapı fitili ve eşik altı bandı, maliyeti en düşük ses önlemlerinden biridir.",
      },
      {
        p: "Duvarlarda çıplak beton yüzey sesi yansıtır. Akustik sünger veya taşyünü panel kaplaması, yansımaları emerek dairenin içindeki ses seviyesini düşürür. Bu kaplama pompanın üzerine değil, duvarlara ve tavana uygulanır.",
      },
      {
        p: "Havalandırma menfezi kapatılmamalıdır. Motorun soğuması hava akışına bağlı; ses için havalandırmayı kapatmak, birkaç ay sonra çok daha pahalı bir motor arızası olarak geri döner. Menfez, ses tuzağı biçiminde (labirentli) yapılırsa hem hava geçer hem ses kırılır.",
      },

      { h2: "Ne kadar ses normal?" },
      {
        p: "Konut tipi bir hidrofor, pompa dairesinin içinde yaklaşık bir bulaşık makinesi kadar ses üretir. Bu sesin dairelerde duyulmaması gerekir. Yatak odasında fark edilebilir bir uğultu varsa, sorun pompanın gürültü seviyesi değil; sesin yapıya iletiliyor olmasıdır.",
      },
      {
        p: "Karşılaştırma için pratik bir ölçü: pompa dairesinin kapısı kapalıyken koridorda normal sesle konuşmak zorlaşıyorsa, seviye yüksektir ve önlem gerekir. Telefonların ses ölçer uygulamaları hassas olmasa da, önce–sonra karşılaştırması için yeterli fikir verir.",
      },
      {
        p: "Yeni kurulumlarda gürültüyü baştan engellemek, sonradan çözmekten çok daha ucuz. Bu yüzden proje aşamasında pompa dairesini yatak odalarının altına veya bitişiğine yerleştirmemeye özen gösteriyoruz.",
      },

      { h2: "Apartmanda gürültü tartışmasını yönetmek" },
      {
        p: "Gürültü şikâyetleri çoğu zaman teknik olmaktan çıkıp komşuluk meselesine dönüşüyor. İşi kolaylaştıran yaklaşım, ölçülebilir bir plan sunmak: sesin kaynağı tespit edilir, yapılacak işler ve beklenen sonuç yazılı olarak paylaşılır.",
      },
      {
        p: "Uygulama sonrası aynı noktalarda tekrar dinleme yapılması, tartışmayı bitiren adımdır. Çoğu binada takoz, esnek bağlantı ve basınç ayarı üçlüsünden sonra şikâyet kapanıyor; kalan durumlarda ise sorun pompada değil, bina içindeki boru askılarında çıkıyor.",
      },
      {
        p: "Bir de zamanlama tarafı var: sulama veya depo doldurma gibi programlanabilir işlemler gece saatlerinden gündüze alındığında, teknik bir müdahaleye gerek kalmadan şikâyetin önemli bölümü ortadan kalkabiliyor.",
      },

      { h2: "Kalıcı sessizlik için yapılacaklar" },
      {
        ol: [
          "Titreşim takozu ve esnek bağlantı ile pompayı yapıdan mekanik olarak ayırın.",
          "Emiş hattını bir çap büyük ve mümkün olan en kısa güzergâhta yeniden kurun.",
          "Pislik tutucuyu temizleyin, emiş vanasını tam açık konumda bırakın.",
          "Basınç tankının havasını ölçün ve doğru değere getirin.",
          "Şalter farkını 1,2–1,5 bar aralığına ayarlayın, gereksiz yüksek basınçtan kaçının.",
          "Makine ve sulama vanası bağlantılarına darbe emici ekleyin.",
          "Pompa dairesinin kapısına sızdırmazlık fitili takın; hava boşluğu sesi doğrudan taşır.",
          "Kullanım yoğunsa frekans kontrollü sisteme geçmeyi değerlendirin.",
        ],
      },
      {
        p: "Bu adımların çoğu tek bir ziyarette tamamlanabilir. Sıralamayı bozmamak önemli: montaj düzeltilmeden yapılan diğer müdahaleler, sesin ana taşıyıcısını yerinde bıraktığı için sonuç vermiyor.",
      },
    ],
    faqs: [
      {
        q: "Hidrofor gürültüsü tamamen yok edilebilir mi?",
        a: "Tamamen sessiz bir mekanik sistem olmaz, ancak komşu daireden duyulmayacak seviyeye indirmek çoğu binada mümkündür. Titreşim yalıtımı, doğru emiş hattı ve makul basınç ayarı üçlüsü uygulandığında ses genelde pompa dairesinin dışına çıkmaz.",
      },
      {
        q: "Pompadan çakıl sesi geliyor, ne yapmalıyım?",
        a: "Bu tipik kavitasyon sesidir ve emiş tarafında bir sorun olduğunu gösterir. Pislik tutucuyu temizleyin, emiş vanasının tam açık olduğunu doğrulayın ve emiş hattında hava kaçağı olup olmadığını kontrol edin. Ses devam ediyorsa emiş hattının çapı ve güzergâhı yeniden düzenlenmelidir.",
      },
      {
        q: "Gece duyulan uğultu neden gündüz duyulmuyor?",
        a: "Ses gündüz de vardır; ortam gürültüsü içinde fark edilmez. Gece arka plan sesi düştüğü için düşük frekanslı uğultu belirginleşir. Bu tür sesler genellikle yapıya iletilen titreşimden kaynaklanır ve takoz ile esnek bağlantı uygulandığında belirgin şekilde azalır.",
      },
      {
        q: "Su darbesi tesisata zarar verir mi?",
        a: "Evet. Tekrarlanan basınç dalgaları bağlantı noktalarını yorar, contaları sertleştirir ve zamanla sızıntı başlatır. Ayrıca gömme tesisatta ortaya çıkan kaçaklar geç fark edildiği için maliyetli olur. Darbe emici ve yavaş kapanan vana bu riski büyük ölçüde ortadan kaldırır.",
      },
      {
        q: "Frekans kontrollü hidrofor daha mı sessiz?",
        a: "Genellikle evet. Pompa tam devirde açılıp kapanmak yerine ihtiyaca göre devir ayarlayarak çalışır; kalkış sayısı ve ani debi değişimleri azalır. Bu da hem mekanik sesi hem su darbesini düşürür. Ancak montaj kötüyse invertörlü sistem de titreşimi yapıya iletir.",
      },
      {
        q: "Pompayı yalıtım malzemesiyle sarabilir miyim?",
        a: "Motorun soğutması hava akışına bağlı olduğu için pompanın kendisi sarılmamalıdır. Bunun yerine pompa dairesinin duvarları akustik malzemeyle kaplanabilir, kapı sızdırmazlığı yapılabilir. Isınan bir motorun ömrü kısalır; ses için soğutmadan ödün verilmez.",
      },
      {
        q: "Ses yeni başladıysa neye bakmalıyım?",
        a: "Yeni başlayan seste ilk üç şüpheli şunlardır: basınç tankının havasının bitmesi, pislik tutucunun tıkanması ve emiş hattına hava girmesi. Üçü de kısa sürede kontrol edilebilir. Ses bir tadilat veya bakım sonrası başladıysa, o işlemde değişen bağlantılar öncelikle incelenmelidir.",
      },
      {
        q: "Apartmanda gürültü şikâyeti için ne yapılabilir?",
        a: "Önce sesin türü tespit edilir, sonra iletim yolu kesilir. Uygulamada en etkili paket; titreşim takozu, esnek bağlantı, lastik contalı boru askısı ve makul basınç ayarıdır. Bu paket çoğu binada tek günlük bir çalışmayla tamamlanır ve şikâyeti bitirir.",
      },
    ],
    related: ["hidrofor-tank-havasi-ayari", "hidrofor-surekli-calisiyor", "frekans-kontrollu-hidrofor"],
  },

  {
    slug: "frekans-kontrollu-hidrofor",
    title: "Frekans kontrollü hidrofor mu, klasik hidrofor mu?",
    category: "Pompa",
    published: "2026-08-01",
    reading: 9,
    metaTitle: "Frekans Kontrollü Hidrofor mu Klasik Hidrofor mu?",
    metaDesc:
      "İnvertörlü ve şalterli hidrofor arasındaki fark nedir, hangisi hangi binada mantıklı? Konfor, enerji, ömür ve maliyet açısından karşılaştırma.",
    keywords: [
      "frekans kontrollü hidrofor",
      "invertörlü hidrofor",
      "sabit basınçlı hidrofor",
      "hidrofor seçimi",
      "hidrofor enerji tüketimi",
    ],
    excerpt:
      "İnvertörlü hidrofor her binada mantıklı değil, ama doğru yerde kullanıldığında hem duş basıncını hem pompanın ömrünü değiştiriyor. Karar hangi sorulara bağlı?",
    services: ["hidrofor-pompa-sistemleri", "hidrofor-tamiri", "elektrik-panosu"],
    intro:
      "Klasik hidrofor pompayı açar ve kapatır; frekans kontrollü hidrofor ise pompanın devrini ayarlar. Aradaki fark kulağa küçük geliyor ama sonuçları büyük: basınç dalgalanması, gürültü, kalkış sayısı ve pompa ömrü doğrudan bu tercihle belirleniyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Frekans kontrollü (invertörlü) hidrofor, pompanın devrini ihtiyaca göre değiştirerek sabit basınç tutar; klasik sistemde ise pompa tam devirde çalışıp durur ve basınç iki değer arasında dalgalanır.</strong> İnvertörlü çözüm; çok katlı binalarda, değişken debili kullanımlarda ve gürültünün sorun olduğu yerlerde açık farkla öne geçer.",
      },
      {
        p: "Tek daireli, günde birkaç kez su kullanılan basit bir sistemde klasik hidrofor hâlâ mantıklıdır. İlk maliyeti düşüktür, tamiri kolaydır ve yedek parçası her yerde bulunur.",
      },

      { h2: "İki sistem nasıl çalışır?" },
      {
        p: "Klasik hidroforda basınç şalteri bir anahtar gibi davranır: basınç alt sınıra düşünce pompa tam devirde çalışır, üst sınıra çıkınca durur. Musluktaki basınç bu iki değer arasında sürekli gidip gelir.",
      },
      {
        p: "Frekans kontrollü sistemde ise hatta bir basınç sensörü vardır ve sürücü, ölçülen basıncı hedef değerde tutmak için motorun devrini sürekli ayarlar. Az su çekildiğinde pompa yavaş, çok su çekildiğinde hızlı döner. Basınç neredeyse sabit kalır.",
      },
      {
        p: "Bu fark en çok duşta hissedilir. Klasik sistemde biri mutfakta musluk açtığında duştaki basınç düşer ve su ısısı değişir; invertörlü sistemde pompa devri artırarak açığı kapatır.",
      },

      { h2: "Yan yana karşılaştırma" },
      {
        table: {
          head: ["Ölçüt", "Klasik (şalterli)", "Frekans kontrollü"],
          rows: [
            ["Basınç davranışı", "İki değer arasında dalgalı", "Sabit, hedef değerde"],
            ["Kalkış sayısı", "Yüksek, tanka bağlı", "Çok düşük"],
            ["Gürültü", "Kalkış–duruş sesi belirgin", "Daha sessiz, kademeli"],
            ["Enerji", "Her kalkışta yüksek akım", "Kısmi yükte belirgin tasarruf"],
            ["Su darbesi", "Sık görülür", "Nadir"],
            ["İlk maliyet", "Düşük", "Yüksek"],
            ["Yedek parça ve tamir", "Basit, her yerde", "Elektronik kart, servis gerekir"],
            ["Şebeke dalgalanmasına duyarlılık", "Düşük", "Yüksek, koruma gerekir"],
          ],
        },
      },
      {
        p: "Tablo tek başına karar verdirmez; hangi satırın sizin için ağır bastığı önemlidir. İlk maliyet belirleyiciyse klasik, konfor ve ömür belirleyiciyse invertörlü öne çıkar.",
      },

      { h2: "Enerji tasarrufu gerçek mi?" },
      {
        p: "Frekans kontrolünün tasarruf iddiası, santrifüj pompaların temel davranışına dayanır: devir düştüğünde güç tüketimi devirle orantılı değil, çok daha hızlı azalır. Yarı debide çalışan bir pompa, tam gücün çok altında bir enerjiyle iş görür.",
      },
      {
        p: "Ancak bu kazanç, sistemin kısmi yükte ne kadar zaman geçirdiğine bağlıdır. Gün boyu değişken debiyle çalışan bir apartman sisteminde tasarruf anlamlıdır. Günde toplam yarım saat çalışan bir daire hidroforunda ise fatura farkı fark edilmez.",
      },
      {
        p: "Bu yüzden invertörlü sistemi \"elektrik faturasını düşürür\" diye değil, \"pompayı ve tesisatı korur, konforu artırır\" diye öneriyoruz. Enerji kazancı bunların yanında ikincil bir sonuçtur.",
      },

      { h2: "Konfor farkı nerede hissedilir?" },
      {
        p: "Teknik karşılaştırmalar bir yana, kullanıcı farkı üç noktada fark eder: duşta sıcaklık dengesi, aynı anda birden fazla musluk kullanımı ve gece sessizliği.",
      },
      {
        p: "Klasik sistemde duş alırken çamaşır makinesi su aldığında basınç düşer ve karışım bozulur. İnvertörlü sistemde pompa devri artırarak açığı kapatır; sıcaklık dalgalanması büyük ölçüde ortadan kalkar.",
      },
      {
        p: "Gece tarafı da önemli: klasik sistemde tek bir sifon çekilişi pompayı uyandırır ve tüm bina bunu duyar. İnvertörlü sistemde küçük kullanımlar tank tarafından karşılanır, pompa çoğu zaman hiç devreye girmez.",
      },

      { h2: "Hangi binada hangisi?" },
      {
        ul: [
          "Tek daire, tek banyo, düşük kullanım: klasik hidrofor yeterli.",
          "İki–üç katlı müstakil ev, birden fazla banyo: invertörlü sistem konforu belirgin artırır.",
          "Apartman ve site: invertörlü, tercihen çift pompalı grup.",
          "Gürültü şikâyeti olan binalar: invertörlü sistem kalkış sesini büyük ölçüde ortadan kaldırır.",
          "Bahçe sulaması olan evler: debisi sürekli değişen sistem, invertörden en çok fayda görenlerden.",
          "Şebeke geriliminin çok dalgalandığı kırsal hatlar: invertör kullanılacaksa koruma ekipmanı zorunlu.",
        ],
      },
      {
        p: "Apartmanlarda çift pompalı grup ayrı bir avantaj sağlar: pompalar dönüşümlü çalışır, biri arızalandığında diğeri devreye girer ve yoğun talepte ikisi birlikte çalışır. Yönetim açısından en değerli kazanım, binanın susuz kalmamasıdır.",
      },

      { h2: "İnvertör pompanın kapasitesini artırır mı?" },
      {
        p: "Hayır. Sürücü, motorun devrini nominal değerin altında ayarlar; pompayı olduğundan güçlü yapmaz. Yetersiz seçilmiş bir pompa invertörle de yetersiz kalır, sadece daha düzenli çalışır.",
      },
      {
        p: "Bu yüzden invertörlü sete geçerken pompanın debi ve basma yüksekliği yeniden hesaplanmalıdır. Binanın en üst noktası, aynı anda kaç musluğun açılabileceği ve boru hattındaki kayıplar birlikte değerlendirilir.",
      },
      {
        p: "Sahada gördüğümüz yaygın hayal kırıklığı buradan doğuyor: basınç sorunu olan bir sisteme invertör takılıyor, sorun çözülmüyor ve suç elektronikte aranıyor. Halbuki eksik olan kapasite; çözüm de doğru pompa seçimi.",
      },

      { h2: "İnvertörlü sistemde de tank gerekir mi?" },
      {
        p: "Evet, ama daha küçüğü. Frekans kontrollü sistemde tank, pompanın kalkış sayısını sınırlamak için değil; küçük sızıntı ve damlamalarda pompanın gereksiz devreye girmesini önlemek ve basınç dalgalanmasını yumuşatmak için kullanılır.",
      },
      {
        p: "Bu nedenle 8–24 litrelik bir membranlı tank çoğu uygulama için yeterlidir. Tankın hava basıncı, hedef basıncın yaklaşık %70'i civarına ayarlanır; üretici talimatı varsa ona uyulur.",
      },
      {
        p: "Tanksız kurulan invertörlü sistemlerde, gece damlayan tek bir musluk bile pompayı sürekli uyandırabilir. Küçük tank bu sorunu ucuza çözer.",
      },

      { h2: "İnvertörlü sistemde sık görülen hatalar" },
      {
        p: "Sürücüler arıza durumunda ekranda bir kod gösterir. Kodların isimleri markaya göre değişse de altta yatan nedenler ortaktır ve çoğu, pompayla değil çevre koşullarıyla ilgilidir.",
      },
      {
        table: {
          head: ["Belirti", "Muhtemel neden", "Bakılacak yer"],
          rows: [
            ["Düşük gerilim hatası", "Şebeke dalgalanması, zayıf besleme", "Gerilim ölçümü, kablo kesiti"],
            ["Aşırı akım hatası", "Mekanik sıkışma, çark tıkanıklığı", "Pompa gövdesi, emiş hattı"],
            ["Kuru çalışma hatası", "Depo boş, emişte hava", "Seviye kontrolü, emiş bağlantıları"],
            ["Hedef basınca ulaşamıyor", "Aşınmış çark veya yetersiz pompa", "Kapasite ölçümü"],
            ["Sürekli açılıp kapanıyor", "Küçük kaçak veya tanksız kurulum", "Tesisat kaçağı, tank ilavesi"],
            ["Basınç dalgalanıyor", "Sensör yeri veya parametre hatası", "Sensör konumu, ayar değerleri"],
          ],
        },
      },
      {
        p: "Kod okumadan kart değiştirmek, bu sistemlerde en pahalı yanlış adım. Hataların önemli bölümü besleme gerilimi, emiş hattı veya ayar parametresi düzeltilerek çözülüyor.",
      },

      { h2: "Geçiş kararı öncesi kontrol listesi" },
      {
        ol: [
          "Mevcut pompanın yaşı ve mekanik durumu değerlendirildi mi?",
          "Binanın en üst noktasındaki basınç ihtiyacı hesaplandı mı?",
          "Aynı anda kaç noktadan su çekildiği (eş zamanlılık) düşünüldü mü?",
          "Pano yeri, kablo kesiti ve topraklama uygun mu?",
          "Şebeke gerilimi kararlı mı, koruma ekipmanı gerekiyor mu?",
          "Küçük hacimli basınç tankı planlandı mı?",
          "Kuru çalışma koruması ve seviye kontrolü var mı?",
          "Devreye alma sonrası parametrelerin yazılı kaydı tutulacak mı?",
        ],
      },
      {
        p: "Bu listenin tamamı olumlu yanıtlanabiliyorsa geçiş sorunsuz ilerler. Olumsuz yanıt çıkan her madde, sistem çalışmaya başladıktan sonra çözülmesi çok daha zahmetli bir soruna dönüşme eğiliminde.",
      },

      { h2: "Mevcut hidrofor invertörle güncellenebilir mi?" },
      {
        p: "Çoğu durumda evet. Motorun sürücüye uygunluğu, basınç sensörü ilavesi ve pano düzenlemesi gerekir. Üç fazlı motorlar bu dönüşüme daha uygundur; tek fazlı motorlarda uygun sürücü seçimi daha sınırlıdır.",
      },
      { p: "Dönüşüm kararı verilirken bakılan noktalar:" },
      {
        ul: [
          "Motorun etiket değerleri ve yalıtım sınıfı sürücüyle uyumlu mu?",
          "Pompanın mekanik durumu iyi mi? Aşınmış bir çark, invertörle de eski performansını vermez.",
          "Pano yeri, kablo kesiti ve topraklama uygun mu?",
          "Motor kablosu uzunsa filtre gerekiyor mu?",
          "Sistemde ani gerilim düşmelerine karşı koruma var mı?",
        ],
      },
      {
        p: "Pompa zaten ömrünün sonuna gelmişse dönüşüm yerine komple invertörlü set almak genelde daha mantıklı. Karar, mevcut pompanın kalan ömrüne bağlı.",
      },

      { h2: "Kurulumda belirleyici altı nokta" },
      {
        p: "İnvertörlü sistemlerde memnuniyetsizliğin kaynağı genelde ürün değil, kurulum oluyor. Aşağıdaki başlıklar doğru kurulduğunda sistem beklendiği gibi çalışır:",
      },
      {
        ol: [
          "Basınç sensörünün yeri: pompa çıkışına yakın, türbülanslı bölgeden uzak bir noktaya konumlandırılır.",
          "Hedef basınç: binanın en üst noktasına göre belirlenir, gereksiz yükseğe kurulmaz.",
          "Uyku (stand-by) eşiği: pompanın hangi debinin altında duracağını belirler; yanlış ayarda sistem ya hiç durmaz ya erken durur.",
          "Kuru çalışma koruması: sürücünün akım izlemeli koruması aktif edilir, deponun seviye şalteriyle desteklenir.",
          "Topraklama ve ekranlı motor kablosu: uzun kablolarda hem koruma hem parazit açısından gerekir.",
          "Yeniden başlatma davranışı: elektrik kesintisi sonrası sistemin otomatik devreye girmesi ayarlanır.",
        ],
      },
      {
        p: "Bu parametreler markadan markaya farklı isimlerle geçer ama mantık aynıdır. Devreye alma sırasında değerlerin bir kâğıda yazılıp pano kapağının içine yapıştırılması, ileride yapılacak servisleri kolaylaştırır.",
      },

      { h2: "Yatırımı nasıl değerlendirmeli?" },
      {
        p: "İnvertörlü sisteme geçiş kararını sadece ilk maliyetle vermek yanıltıcı olur. Karşılaştırmaya şu kalemlerin girmesi gerekir: pompanın beklenen ömrü, yıllık bakım ve parça değişimleri, elektrik tüketimi, konfor ve gürültü.",
      },
      {
        table: {
          head: ["Kalem", "Klasik sistemde", "İnvertörlü sistemde"],
          rows: [
            ["Yıllık kalkış sayısı", "On binlerce", "Birkaç yüz"],
            ["Şalter/kontaktör değişimi", "Birkaç yılda bir", "Nadiren"],
            ["Salmastra ömrü", "Kalkış sayısına bağlı, kısa", "Belirgin uzun"],
            ["Konfor", "Dalgalı basınç", "Sabit basınç"],
            ["Arıza maliyeti", "Düşük ama sık", "Yüksek ama seyrek"],
          ],
        },
      },
      {
        p: "Bu tabloyu kendi kullanımınıza göre doldurduğunuzda karar netleşir. Günde birkaç kez su kullanan bir dairede klasik sistem hâlâ makul; ortak kullanımlı, yoğun ve gürültünün rahatsız ettiği yapılarda ise invertörlü sistem kısa sürede kendini savunur.",
      },

      { h2: "Bakım ve arıza farkı" },
      {
        p: "Klasik sistemde arızalar mekanik ve basittir: şalter, tank, çekvalf. Parçalar ucuzdur ve çoğu yerde bulunur. İnvertörlü sistemde ise elektronik kart devreye girer; arıza teşhisi kod okumayla yapılır ve kart arızası daha maliyetlidir.",
      },
      {
        p: "Buna karşılık invertörlü sistemde arıza sıklığı düşüktür, çünkü mekanik yıpranmanın ana kaynağı olan kalkış–duruş döngüsü neredeyse ortadan kalkar. Kalkış sayısı düştükçe salmastra, rulman ve kontaktör ömrü uzar.",
      },
      {
        quote:
          "Klasik sistemde parça ucuz ama sık değişir; invertörlü sistemde parça pahalı ama nadiren değişir. Toplam sahip olma maliyeti çoğu binada ikincisinde daha düşük çıkıyor.",
      },
      {
        p: "İnvertörlü sistemlerde bir de kurulum kalitesi belirleyici. Sensör yeri, parametre ayarları ve topraklama doğru yapılmadığında sistem hedef basıncı tutmakta zorlanır; bu bir ürün sorunu değil, uygulama sorunudur.",
      },
    ],
    faqs: [
      {
        q: "Frekans kontrollü hidrofor elektrik faturasını ne kadar düşürür?",
        a: "Tasarruf, sistemin kısmi yükte geçirdiği süreye bağlıdır. Gün boyu değişken debiyle çalışan apartman sistemlerinde kazanç anlamlıdır; günde yarım saat çalışan bir daire hidroforunda ise fark hissedilmez. Asıl kazanç genelde faturada değil, uzayan ekipman ömründe ortaya çıkar.",
      },
      {
        q: "İnvertörlü sistem daha mı çok arıza yapar?",
        a: "Arıza sayısı genelde daha azdır, çünkü pompanın kalkış–duruş döngüsü ortadan kalkar. Ancak arıza olduğunda elektronik kart devreye girdiği için maliyet daha yüksek olabilir. Gerilim dalgalanmasının yüksek olduğu hatlarda koruma ekipmanı kullanmak bu riski belirgin azaltır.",
      },
      {
        q: "Tek daire için invertörlü hidrofor gereksiz mi?",
        a: "Gereksiz demek doğru olmaz, ama çoğu tek dairede klasik sistem yeterlidir. Banyo sayısı birden fazlaysa, aynı anda su kullanımı sık oluyorsa veya gürültü rahatsızlık veriyorsa invertörlü sistem farkını hissettirir. Karar, kullanım alışkanlığına bakılarak verilmelidir.",
      },
      {
        q: "İnvertörlü hidroforda basınç tankı gerekli mi?",
        a: "Küçük hacimli bir membranlı tank önerilir. Görevi kalkış sayısını sınırlamak değil, küçük sızıntılarda pompanın boş yere uyanmasını önlemek ve basıncı yumuşatmaktır. 8–24 litre çoğu uygulama için yeterlidir; hava basıncı üretici talimatına göre ayarlanır.",
      },
      {
        q: "Mevcut pompama invertör takabilir miyim?",
        a: "Motorun sürücüye uygunluğu, kablo kesiti, topraklama ve pano düzeni uygunsa mümkündür. Üç fazlı motorlarda dönüşüm daha kolaydır. Pompanın mekanik durumu kötüyse dönüşüm beklenen sonucu vermez; aşınmış bir çark invertörle de eski basıncını üretmez.",
      },
      {
        q: "Sabit basınç kaç bara ayarlanmalı?",
        a: "Binanın en üst noktasındaki musluğa yeterli basınç bırakacak değer seçilir. Her 10 metre yükseklik yaklaşık 1 bar tükettiği için üç katlı bir yapıda 3,5 bar civarı tipiktir. Gereğinden yüksek ayar hem enerji harcar hem tesisatı ve armatürleri zorlar.",
      },
      {
        q: "İnvertörlü sistem gerilim düşmesinde ne yapar?",
        a: "Çoğu sürücü düşük gerilimde kendini korumaya alır ve hata vererek durur. Kırsal hatlarda bu durum sık yaşandığı için, sistemin gerilim koruma rölesiyle desteklenmesi ve hata sonrası otomatik yeniden başlatma ayarının doğru yapılması gerekir.",
      },
      {
        q: "Çift pompalı grup gerçekten gerekli mi?",
        a: "Apartman ve iş yerlerinde kesinlikle önerilir. Pompalar dönüşümlü çalıştığı için ikisi de eşit yıpranır, yoğun talepte birlikte devreye girer ve biri arızalandığında bina susuz kalmaz. Yönetim açısından en somut fayda, arıza gününde hizmetin kesilmemesidir.",
      },
    ],
    related: ["hidrofor-surekli-calisiyor", "hidrofor-ses-ve-titresim", "hidrofor-secimi-nasil-yapilir"],
  },
];
