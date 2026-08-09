// Pompa, sulama ve enerji grubu hizmetleri.

export const pompaServices = [
  {
    slug: "hidrofor-tamiri",
    title: "Hidrofor Tamiri",
    group: "Pompa ve Sulama",
    icon: "pump",
    featured: true,
    short: "Hidrofor, su pompası, basınç tankı ve kontrol ekipmanlarında arıza ve bakım.",
    metaTitle: "Malatya Hidrofor Tamiri ve Bakımı | Basınç Sorunları",
    metaDesc:
      "Malatya'da hidrofor tamiri, basınç tankı bakımı, pompa arızası ve su basmama sorunları. Apartman ve müstakil ev hidrofor servisi.",
    keywords: ["Malatya hidrofor tamiri", "hidrofor arızası", "su basıncı düşük", "basınç tankı", "hidrofor servisi"],
    intro:
      "Hidrofor arızalarının büyük bölümü pompanın kendisinden değil, çevresindeki üç parçadan kaynaklanır: basınç tankı, basınç şalteri ve çekvalf. Pompayı değiştirmeden önce bu üçlüyü kontrol etmek, çoğu zaman hem parayı hem zamanı kurtarıyor.",
    symptoms: [
      { title: "Hidrofor sürekli devreye giriyor", text: "Basınç tankının havası kaçmış veya hatta damlama var demektir." },
      { title: "Üst katlara su çıkmıyor", text: "Basınç ayarı, pompa aşınması veya emiş sorunu olabilir." },
      { title: "Pompa çalışıyor ama su basmıyor", text: "Emiş hattında hava veya çark aşınması vardır." },
      { title: "Çalışırken çok gürültülü", text: "Kavitasyon, rulman aşınması veya montaj titreşimi kaynaklıdır." },
    ],
    scope: [
      "Hidrofor arıza tespiti ve onarımı",
      "Basınç tankı hava basıncı kontrolü ve membran değişimi",
      "Basınç şalteri ayarı ve değişimi",
      "Çekvalf, vana ve rekor kontrolü",
      "Pompa çarkı, salmastra ve rulman bakımı",
      "Motor ve kondansatör kontrolü",
      "Kuru çalışma koruması ve seviye şalteri",
      "Yeni hidrofor seçimi ve montajı",
    ],
    body: [
      { h2: "Hidrofor nasıl çalışır?" },
      { p: "Hidrofor üç parçadan oluşur: pompa, basınç tankı ve basınç şalteri. Pompa suyu basar, tank basınçlı su depolar, şalter ise basınca göre pompayı çalıştırır veya durdurur. Musluk açıldığında önce tanktaki su kullanılır; basınç belirli seviyenin altına düşünce pompa devreye girer." },
      { p: "Tankın içinde bir membran ve arkasında sıkıştırılmış hava bulunur. Bu hava, sistemin \"yayı\" gibidir. Hava kaçtığında tank görevini yapamaz ve pompa her musluk açılışında anında devreye girer. Hidroforun sık devreye girmesi neredeyse her zaman bu nedenden kaynaklanır." },

      { h2: "En sık karşılaşılan dört arıza" },
      {
        table: {
          head: ["Belirti", "Muhtemel neden", "Müdahale"],
          rows: [
            ["Sık devreye giriyor", "Tank havası kaçmış / membran yırtılmış", "Hava basıncı ayarı veya membran değişimi"],
            ["Hiç durmuyor", "Hatta kaçak, çekvalf arızası, basınç ayarı yüksek", "Kaçak kontrolü, çekvalf ve şalter ayarı"],
            ["Çalışıyor su basmıyor", "Emişte hava, çark aşınmış, kuyu seviyesi düşmüş", "Emiş kontrolü, çark/salmastra bakımı"],
            ["Hiç çalışmıyor", "Kondansatör, motor sargısı, şalter kontağı, termik", "Elektriksel ölçüm ve parça değişimi"],
          ],
        },
      },
      { p: "Bu tablo, telefonda ilk değerlendirmeyi hızlandırdığı için ekibin doğru parçayla gelmesini sağlıyor." },

      { h2: "Basınç tankı bakımı: yılda bir, on dakika" },
      { p: "Tankın hava basıncı, pompanın devreye girme basıncının yaklaşık 0,2 bar altında olmalıdır. Kontrol için sistem basıncı boşaltılır ve tank üzerindeki sibobtan manometreli bir pompa ile ölçüm yapılır. Değer düşükse hava basılır." },
      { p: "Bu on dakikalık işlem, pompanın devreye girme sayısını gözle görülür şekilde azaltır. Az devreye giren pompa hem daha uzun ömürlü olur hem daha az elektrik harcar. Yılda bir yapılmasını öneriyoruz." },

      { h2: "Ne zaman tamir, ne zaman değişim?" },
      { p: "Basınç şalteri, çekvalf, kondansatör ve membran gibi parçalar değiştirilebilir ve maliyeti düşüktür; bu tür arızalarda tamir mantıklıdır. Motor sargısı yanmış, gövde çatlamış veya çark ile salyangoz birlikte aşınmışsa onarım maliyeti yeni cihaza yaklaşır." },
      { p: "10 yaşın üzerindeki bir hidroforda ikinci kez büyük arıza çıkıyorsa değişimi öneriyoruz. Yeni nesil frekans kontrollü hidroforlar hem daha sessiz çalışıyor hem de sabit basınç sağladığı için konfor farkı hissediliyor." },
    ],
    priceFactors: [
      "Arızalı parça ve değişim gereksinimi",
      "Hidrofor kapasitesi ve tipi",
      "Erişim zorluğu (bodrum, teknik hacim, kuyu başı)",
      "Elektriksel ölçüm ve pano kontrolü gereği",
      "Yeni cihaz montajı ise bağlantı ve tesisat düzenlemesi",
    ],
    faqs: [
      { q: "Hidrofor gürültüsü azaltılabilir mi?", a: "Çoğu durumda evet. Titreşim takozu, esnek bağlantı elemanı ve doğru montaj yüksekliği gürültüyü belirgin azaltır. Ses kavitasyondan geliyorsa emiş hattının çapı ve dirsek sayısı gözden geçirilmelidir." },
      { q: "Basınç tankı ne zaman değişir?", a: "Membran yırtıldığında tanktan hava yerine su gelir; bu durumda değişim gerekir. Gövdede pas ve şişme varsa da değişmelidir. Sadece havası kaçmışsa hava basmak yeterlidir, tank değişmez." },
      { q: "Frekans kontrollü hidrofor değer mi?", a: "Apartmanlarda ve basınç dalgalanmasından rahatsız olunan yerlerde belirgin fark yaratıyor. Pompa yavaş kalkıp yavaş durduğu için hem su darbesi hem gürültü azalıyor, elektrik tüketimi düşüyor. İlk maliyeti klasik sistemden yüksektir." },
      { q: "Apartman hidroforu için bakım anlaşması yapıyor musunuz?", a: "Evet. Yılda iki ziyaret, tank basıncı kontrolü, şalter ayarı ve genel bakım içeren bir program uyguluyoruz. Plansız arıza çağrıları bu programla iyice azalıyor." },
    ],
    localAngle: "üst kotlardaki mahallelerde şebeke basıncının düşük kalması ve depo–hidrofor birlikte kullanımının yaygınlığı",
    related: ["hidrofor-pompa-sistemleri", "su-deposu-temizligi", "sihhi-tesisat", "mekanik-tesisat"],
  },

  {
    slug: "hidrofor-pompa-sistemleri",
    title: "Hidrofor ve Pompa Sistemleri",
    group: "Pompa ve Sulama",
    icon: "pump",
    featured: true,
    core: true,
    short: "Bina, kuyu ve endüstriyel uygulamalarda pompa seçimi, montajı ve otomasyonu.",
    metaTitle: "Malatya Hidrofor ve Pompa Sistemleri | Seçim ve Montaj",
    metaDesc:
      "Malatya'da hidrofor, dalgıç pompa, drenaj ve sirkülasyon pompası seçimi, montajı ve pano otomasyonu. Bina, kuyu ve endüstriyel uygulamalar.",
    keywords: ["Malatya hidrofor", "dalgıç pompa Malatya", "drenaj pompası", "pompa panosu", "bina su basınçlandırma"],
    intro:
      "Pompa seçiminde tek bir kural var: debi ve basma yüksekliği doğru hesaplanmadan alınan pompa ya yetersiz kalır ya da gereğinden fazla enerji harcar. Katalogtaki en büyük değerler değil, sizin sisteminizin çalışma noktası önemlidir.",
    symptoms: [
      { title: "Üst katlarda basınç düşük", text: "Basma yüksekliği yetersiz veya sistem dengelenmemiştir." },
      { title: "Aynı anda birden fazla musluk açılınca su kesiliyor", text: "Debi yetersiz; kapasite yeniden hesaplanmalıdır." },
      { title: "Bodrumu su basıyor", text: "Drenaj pompası yok, yetersiz veya arızalıdır." },
      { title: "Kuyudan su çekilemiyor", text: "Su seviyesi düşmüş veya dalgıç pompa aşınmıştır." },
    ],
    scope: [
      "Debi ve basma yüksekliği hesabı",
      "Bina basınçlandırma (hidrofor) sistemleri",
      "Dalgıç ve derin kuyu pompaları",
      "Drenaj, foseptik ve pis su pompaları",
      "Sirkülasyon ve booster pompa grupları",
      "Pompa kumanda panosu ve otomasyon",
      "Kuru çalışma ve seviye kontrol koruması",
      "Basınç tankı, çekvalf ve emniyet ekipmanları",
    ],
    body: [
      { h2: "Debi ve basma yüksekliği nasıl hesaplanır?" },
      { p: "Basma yüksekliği (metre olarak) üç bileşenden oluşur: statik yükseklik, sürtünme kaybı ve istenen çıkış basıncı. Statik yükseklik, suyun alındığı seviye ile en üst kullanım noktası arasındaki kot farkıdır. Sürtünme kaybı boru çapına, uzunluğuna ve dirsek sayısına bağlıdır. Çıkış basıncı ise musluğun rahat çalışması için gereken 15–20 metre civarındaki ek değerdir." },
      { p: "Debi tarafında ise eşzamanlılık devreye girer. 12 dairelik bir binada tüm muslukların aynı anda açılmayacağı varsayımıyla, toplam ihtiyacın belirli bir oranı hesaba katılır. Bu oran fazla tutulursa pompa büyür ve gereksiz enerji harcar; az tutulursa yoğun saatlerde su kesilir." },

      { h2: "Uygulama tipine göre pompa seçimi" },
      {
        table: {
          head: ["Uygulama", "Pompa tipi", "Öne çıkan kriter"],
          rows: [
            ["Apartman su basınçlandırma", "Çok kademeli dikey hidrofor", "Sabit basınç, sessizlik, frekans kontrolü"],
            ["Derin kuyu", "Dalgıç pompa", "Kuyu çapı, dinamik su seviyesi, kablo kesiti"],
            ["Bodrum / asansör çukuru", "Drenaj pompası + flatör", "Otomatik çalışma, katı partikül geçişi"],
            ["Foseptik / pis su", "Parçalayıcılı pis su pompası", "Katı madde boyutu, korozyon dayanımı"],
            ["Isıtma devresi", "Sirkülasyon pompası", "Frekans kontrolü, düşük tüketim"],
            ["Tarımsal sulama", "Santrifüj veya dalgıç", "Debi önceliği, hat uzunluğu, filtre"],
          ],
        },
      },

      { h2: "Pompa panosu ve koruma" },
      { p: "Pompanın ömrünü belirleyen en önemli unsur, doğru korunmasıdır. Kuru çalışma koruması olmayan bir dalgıç pompa, su seviyesi düştüğünde birkaç dakika içinde sargısını yakabilir. Faz koruma rölesi olmayan bir üç fazlı pompa, tek faz kaybında zarar görür." },
      { ul: [
        "Termik koruma: motorun aşırı akıma karşı korunması",
        "Faz koruma rölesi: faz kaybı, sıralama ve düşük gerilim koruması",
        "Kuru çalışma koruması: seviye şalteri, elektrot veya akım izleme",
        "Yıldız-üçgen veya yumuşak yol verme: büyük motorlarda kalkış akımını sınırlar",
        "Çalışma saati sayacı: bakım planlaması için",
      ] },
      { p: "Bu korumaların maliyeti, pompanın kendisinin küçük bir yüzdesidir; buna karşılık en sık görülen arıza sebeplerinin çoğunu önler." },

      { h2: "İki pompalı çalışma (yedekli sistem)" },
      { p: "Kritik uygulamalarda tek pompa yerine iki pompalı grup tercih edilir. Pompalar dönüşümlü çalışır; biri arızalandığında diğeri devreye girer. Ayrıca yoğun talep anında ikisi birlikte çalışarak kapasiteyi artırır." },
      { p: "Apartmanlarda, otel ve yurtlarda, üretim tesislerinde bu yapıyı öneriyoruz. Dönüşümlü çalışma, iki pompanın da eşit yıpranmasını sağladığı için toplam ömrü uzatıyor." },
    ],
    priceFactors: [
      "Gerekli debi ve basma yüksekliği",
      "Tek pompa mı yedekli grup mu",
      "Frekans kontrolü (invertör) tercihi",
      "Pano otomasyon ve koruma kapsamı",
      "Boru, vana ve montaj işçiliği",
    ],
    faqs: [
      { q: "Pompayı büyük almak zararlı mı?", a: "Evet. Gereğinden büyük pompa çalışma noktasının dışında çalışır; verimi düşer, titreşim ve su darbesi artar, elektrik tüketimi yükselir. Doğru boyutlandırma hem konfor hem işletme maliyeti açısından belirleyicidir." },
      { q: "Kuyu pompası için kablo kesiti önemli mi?", a: "Çok önemlidir. Derin kuyularda uzun kablo boyunca gerilim düşümü olur; kesit yetersizse motor düşük gerilimde çalışır ve zamanla yanar. Kesit hesabını kuyu derinliği ve motor gücüne göre yapıyoruz." },
      { q: "Bodrum su basmasına karşı ne önerirsiniz?", a: "Otomatik flatörlü bir drenaj pompası, uygun kapasiteli bir toplama çukuru ve tercihen elektrik kesintisine karşı yedekli besleme. Pompanın yılda bir test edilmesi de programa dahil edilmelidir." },
      { q: "Mevcut pompamı invertörle kontrol edebilir miyim?", a: "Çoğu üç fazlı pompa frekans invertörüyle kontrol edilebilir. Motorun invertöre uygunluğu, basınç sensörü ilavesi ve pano düzenlemesi gerekir. Mevcut sistem üzerinde uygulanabilirliğini keşifte değerlendiriyoruz." },
    ],
    localAngle: "kuyu suyu kullanımının yaygın olduğu kırsal mahalleler ve üst kotlardaki binalarda basınçlandırma ihtiyacı",
    related: ["hidrofor-tamiri", "tarimsal-sulama-sistemleri", "mekanik-tesisat", "elektrik-panosu"],
  },

  {
    slug: "tarimsal-sulama-sistemleri",
    title: "Tarımsal Sulama Sistemleri",
    group: "Pompa ve Sulama",
    icon: "leaf",
    featured: true,
    short: "Bahçe, tarla ve sera için pompa, elektrik panosu ve sulama altyapısı.",
    metaTitle: "Malatya Tarımsal Sulama Sistemleri | Damlama ve Pompa",
    metaDesc:
      "Malatya'da tarımsal sulama sistemleri: damlama ve yağmurlama altyapısı, kuyu ve dalgıç pompa bağlantısı, sulama otomasyon panosu ve hat kurulumu.",
    keywords: ["Malatya damlama sulama", "tarımsal sulama sistemi", "kuyu pompası bağlantısı", "sulama panosu", "kayısı bahçesi sulama"],
    intro:
      "Sulama sisteminin başarısı, hattın döşenmesinden çok su kaynağının, basıncın ve filtrelemenin doğru kurgulanmasına bağlı. Malatya'da özellikle kayısı ve meyve bahçelerinde, doğru planlanmış bir damlama sistemi hem su tüketimini hem işçiliği gözle görülür şekilde azaltıyor.",
    symptoms: [
      { title: "Bahçenin uzak ucuna su gitmiyor", text: "Hat çapı veya pompa basıncı yetersizdir." },
      { title: "Damlatıcılar tıkanıyor", text: "Filtreleme eksik veya su kalitesi uygun değildir." },
      { title: "Pompa sık sık yanıyor", text: "Kuru çalışma koruması veya faz koruma eksik olabilir." },
      { title: "Sulama çok uzun sürüyor", text: "Debi yetersiz ya da sistem zonlara ayrılmamıştır." },
    ],
    scope: [
      "Su kaynağı ve arazi değerlendirmesi",
      "Damlama ve yağmurlama altyapısı planlama",
      "Ana hat, manifold ve lateral döşeme",
      "Kuyu, dalgıç ve santrifüj pompa bağlantısı",
      "Filtre istasyonu (eleman / kum / hidrosiklon)",
      "Sulama kumanda panosu ve otomasyon",
      "Enerji hattı çekimi ve pano montajı",
      "Gübreleme (fertigasyon) ünitesi bağlantısı",
    ],
    body: [
      { h2: "Planlama: önce su, sonra hat" },
      { p: "Sulama sistemi tasarımı su kaynağıyla başlar. Kuyunun verimi (saatte kaç m³ su verebildiği), dinamik su seviyesi ve suyun kalitesi belirlenmeden pompa seçilemez. Şebeke veya gölet suyu kullanılıyorsa basınç ve süreklilik değerlendirilir." },
      { p: "İkinci adım arazinin kendisidir: alan büyüklüğü, kot farkları, bitki türü ve sıra aralığı. Kot farkı olan arazilerde üst bölümlere ulaşmak için ek basınç gerekir; eğim aşağı yönde ise basınç fazlalığı damlatıcıları zorlayabilir ve basınç düzenleyici gerekir." },
      { p: "Ancak bunlar netleştikten sonra hat çapları, zon sayısı ve pompa kapasitesi hesaplanır. Bu sırayı atlayan sistemlerde, döşenmiş bir hattın sonradan değiştirilmesi gerekiyor." },

      { h2: "Zonlama neden gerekli?" },
      { p: "Bir pompanın verebileceği debi sınırlıdır. Tüm bahçeyi aynı anda sulamak istendiğinde her damlatıcıya düşen debi azalır ve uzak noktalara su ulaşmaz. Zonlama, araziyi pompanın kapasitesine uygun bölümlere ayırıp sırayla sulamaktır." },
      { p: "Zon sayısı, pompa debisi ile toplam su ihtiyacının oranından çıkar. Otomasyon panosu ile zonlar sırayla ve programlı biçimde çalıştırıldığında, gece saatlerinde insansız sulama mümkün oluyor; hem buharlaşma kaybı hem elektrik maliyeti düşüyor." },

      { h2: "Filtreleme: damlama sisteminin ömrü" },
      { p: "Damlatıcı delikleri milimetrenin altındadır; en küçük partikül bile zamanla tıkanmaya yol açar. Dolayısıyla filtre istasyonu, sistemin en belirleyici ve en çok ihmal edilen parçasıdır." },
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
      { p: "Filtrenin düzenli temizlenmesi şart. Otomatik geri yıkamalı sistemler bu işi kendisi yapar ve büyük alanlarda işçiliği bitirir." },

      { h2: "Elektrik tarafı ve koruma" },
      { p: "Tarımsal sulamada pompa arızalarının önemli bölümü elektrikseldir: faz kaybı, düşük gerilim, kuru çalışma ve yıldırım kaynaklı hasar. Arazi hatlarında gerilim dalgalanması şehir içinden daha yaygındır." },
      { ul: [
        "Faz koruma rölesi ve düşük gerilim koruması zorunlu kabul edilmeli",
        "Kuru çalışma koruması, kuyu seviyesi düştüğünde motoru durdurur",
        "Pano dış ortamda ise en az IP54 koruma sınıfında olmalı",
        "Topraklama ve parafudr, arazi hatlarında ihmal edilmemeli",
        "Enerji hattı kesiti mesafeye göre hesaplanmalı, gerilim düşümü kontrol edilmeli",
      ] },
      { p: "Bu kalemlerin toplam maliyeti pompanın küçük bir yüzdesidir; buna karşılık sezon ortasında yanan bir pompanın maliyeti sadece cihaz değil, kaybedilen sulama zamanıdır." },
    ],
    priceFactors: [
      "Arazi büyüklüğü ve zon sayısı",
      "Sulama yöntemi (damlama, yağmurlama, mini spring)",
      "Su kaynağı tipi ve pompa kapasitesi",
      "Filtre istasyonu ve otomasyon kapsamı",
      "Enerji hattı mesafesi ve pano ihtiyacı",
    ],
    faqs: [
      { q: "Kayısı bahçesi için damlama mı uygun?", a: "Ağaç sıralarında damlama, su tasarrufu ve kök bölgesine hedefli sulama açısından en yaygın tercih. Sıra üzerine çift lateral veya ağaç başına belirli sayıda damlatıcı planlanır. Ağaç yaşı ve sıra aralığına göre hesabı keşifte yapıyoruz." },
      { q: "Sistemi kışın nasıl korumalıyım?", a: "Sezon sonunda hatlar boşaltılmalı, filtreler temizlenip yerine takılmalı, pompa ve pano nemden korunmalıdır. Yerüstü hatlarında su kalırsa donma boruyu patlatır. Sezon kapatma işlemini de yapıyoruz." },
      { q: "Otomasyon şart mı?", a: "Küçük bahçelerde şart değil, ama orta ve büyük alanlarda kısa sürede kendini amorti ediyor. Programlı sulama işçilikten tasarruf sağlıyor, gece sulaması buharlaşmayı azaltıyor ve elektrik tarifesinden yararlanma imkânı veriyor." },
      { q: "Mevcut sistemimi genişletebilir misiniz?", a: "Mevcut pompanın debi ve basınç değerleri yeni alan için yeterliyse hat ilavesi yapılabilir. Yeterli değilse ya pompa yükseltilir ya da zon sayısı artırılarak sıralı sulamaya geçilir. Ölçüm yaparak hangisinin uygun olduğunu söylüyoruz." },
    ],
    localAngle: "kayısı ve meyve bahçelerinin yaygınlığı, kuyu suyuna dayalı sulama ve arazi enerji hatlarındaki gerilim dalgalanmaları",
    related: ["bahce-sulama", "hidrofor-pompa-sistemleri", "elektrik-panosu", "gunes-enerjisi-su-sistemi"],
  },

  {
    slug: "bahce-sulama",
    title: "Bahçe Sulama Sistemleri",
    group: "Pompa ve Sulama",
    icon: "leaf",
    featured: false,
    short: "Konut, site ve ticari peyzaj alanlarında otomatik sulama sistemleri.",
    metaTitle: "Malatya Otomatik Bahçe Sulama Sistemi Kurulumu",
    metaDesc:
      "Malatya'da otomatik bahçe sulama sistemi: sprinkler ve damlama hatları, vana kutusu, zamanlayıcı kurulumu, sulama kaçağı ve hat yenileme.",
    keywords: ["Malatya bahçe sulama", "otomatik sulama sistemi", "sprinkler montajı", "site peyzaj sulama", "sulama zamanlayıcısı"],
    intro:
      "Otomatik bahçe sulama, hortumla sulamanın yerini alan bir konfor çözümü olmasının yanında bitki sağlığı açısından da daha iyidir. Doğru zamanda, doğru miktarda ve kök bölgesine verilen su, hem çimin hem ağacın daha az hastalanmasını sağlıyor.",
    symptoms: [
      { title: "Çimde sarı lekeler oluşuyor", text: "Sulama dağılımı homojen değil; sprinkler yerleşimi gözden geçirilmeli." },
      { title: "Sprinkler tam açılmıyor", text: "Basınç yetersiz veya kafa tıkalı olabilir." },
      { title: "Su faturası yazın çok artıyor", text: "Program süreleri fazla veya hatta kaçak var demektir." },
      { title: "Vana kutusu su dolu", text: "Vana veya bağlantıda sızıntı vardır." },
    ],
    scope: [
      "Bahçe ölçümü ve zon planlaması",
      "Sprinkler ve rotor kafa yerleşimi",
      "Ağaç ve çalılar için damlama hattı",
      "Vana kutusu ve selenoid vana montajı",
      "Zamanlayıcı (kontrol ünitesi) kurulumu ve programlama",
      "Yağmur sensörü ve toprak nem sensörü",
      "Pompa ve basınç düzenleme",
      "Mevcut sistemde arıza, kaçak ve hat yenileme",
    ],
    body: [
      { h2: "Zon planlaması ve bitki grupları" },
      { p: "Bir bahçede tüm bitkiler aynı miktarda su istemez. Çim sık ve az miktarda su isterken, ağaç ve çalılar seyrek ama derin sulama ister. Bu iki grubu aynı zonda toplamak, ya çimi kurutur ya ağacın kökünü boğar." },
      { p: "Onun için zonlar bitki grubuna ve güneş alma durumuna göre ayrılır: güneşli çim, gölgeli çim, ağaç–çalı damlama hattı, saksı ve çiçeklik. Her zonun sulama süresi ayrı programlanır." },

      { h2: "Sprinkler yerleşiminde temel kural" },
      { p: "Sprinkler kafaları, her noktanın en az iki kafadan su alacağı şekilde yerleştirilir. Buna \"kafa kafaya örtüşme\" denir. Bir kafanın attığı suyun ucu, komşu kafaya ulaşmalıdır. Örtüşme sağlanmadığında aradaki bölgeler daha az su alır ve çimde sarı halkalar oluşur." },
      { ul: [
        "Aynı zonda aynı tip ve aynı debili kafalar kullanılır",
        "Köşe, kenar ve tam daire kafalar doğru açılarla seçilir",
        "Kafa yüksekliği çim seviyesiyle aynı olmalıdır",
        "Rüzgârlı bölgelerde daha düşük atış mesafeli kafalar tercih edilir",
        "Yaya geçişi olan yerlerde pop-up (gömme) tip zorunludur",
      ] },

      { h2: "Sulama zamanı ve süre" },
      { p: "En verimli sulama saati sabaha karşıdır (04:00–07:00). Bu saatte buharlaşma düşük, rüzgâr azdır ve yapraklar gün doğumuyla kurur; bu da mantar hastalığı riskini azaltır. Akşam geç saatte sulama, yaprakların gece boyu ıslak kalmasına neden olduğu için önerilmez." },
      { p: "Süre konusunda genel yaklaşım, sık ve kısa yerine seyrek ve uzun sulamadır. Derin sulama kökün aşağı inmesini teşvik eder; sık ve yüzeysel sulama ise kökü yüzeyde tutar ve bitkiyi sıcağa karşı zayıflatır." },

      { h2: "Kış hazırlığı" },
      { p: "Malatya'da kış sıcaklıkları sulama hatları için risklidir. Sezon kapanışında hatların basınçlı hava veya tahliye vanalarıyla boşaltılması, vana kutularının kontrol edilmesi ve kontrol ünitesinin kış moduna alınması gerekir." },
      { p: "Bu işlem yapılmadığında en sık zarar gören parçalar selenoid vanalar ve sprinkler gövdeleridir. Sezon açılışında hattı yeniden devreye alma ve kontrol hizmetini de veriyoruz." },
    ],
    priceFactors: [
      "Bahçe alanı ve zon sayısı",
      "Sprinkler / rotor kafa adedi",
      "Damlama hattı metrajı",
      "Kontrol ünitesi kanal sayısı ve sensör tercihi",
      "Kazı, hat döşeme ve çim onarımı",
    ],
    faqs: [
      { q: "Mevcut çimi bozmadan sistem kurulabilir mi?", a: "Dar kanal açan makinelerle çim çoğunlukla korunarak hat döşenebilir. Kesim hatları birkaç hafta içinde kapanır. Yine de yeni çim ekimiyle birlikte yapılan kurulum en temiz sonucu verir." },
      { q: "Şebeke suyu yeterli mi, pompa gerekir mi?", a: "Şebeke basıncı ve debisi ölçülerek karar verilir. Küçük bahçelerde şebeke genelde yeterlidir. Büyük alanlarda veya basıncın düşük olduğu bölgelerde depo ve pompa ile sabit basınç sağlanması gerekir." },
      { q: "Yağmur sensörü gerekli mi?", a: "Küçük bir maliyetle su israfını önlediği için öneriyoruz. Yağmur yağdığında programı otomatik iptal eder. Toprak nem sensörü daha hassas çalışır ancak bakım ister." },
      { q: "Sistem arızalandığında bakıyor musunuz?", a: "Kim kurmuş olursa olsun mevcut sistemlerde arıza, kaçak ve program sorunlarına bakıyoruz. Vana, kafa ve kontrol ünitesi değişimleri ile hat yenileme yapıyoruz." },
    ],
    localAngle: "site ve villa bahçelerinde peyzaj sulaması ile yazlık bağ evlerinin sezonluk sistem ihtiyacı",
    related: ["tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri", "sihhi-tesisat"],
  },

  {
    slug: "gunes-enerjisi-su-sistemi",
    title: "Güneş Enerjisi Su Sistemi",
    group: "Pompa ve Sulama",
    icon: "sun",
    featured: false,
    short: "Sıcak su güneş enerji sistemlerinde tesisat, pompa ve bağlantı çalışmaları.",
    metaTitle: "Malatya Güneş Enerjisi Su Sistemi | Montaj ve Onarım",
    metaDesc:
      "Malatya'da güneş enerjisi sıcak su sistemi montajı, kolektör ve depo bağlantısı, sirkülasyon, kaçak ve don hasarı onarımı.",
    keywords: ["Malatya güneş enerjisi", "güneş enerji sistemi montajı", "kolektör bağlantısı", "sıcak su deposu", "güneş enerjisi tamiri"],
    intro:
      "Güneş enerjili sıcak su sistemleri, kurulduktan sonra unutulmaya en müsait tesisatlardan biri. Oysa yılda bir yapılan basit bir kontrol; verim kaybını, don hasarını ve depo korozyonunu önlüyor.",
    symptoms: [
      { title: "Su yeterince ısınmıyor", text: "Kolektör kirli, sirkülasyon durmuş veya antifriz bozulmuş olabilir." },
      { title: "Depodan su damlıyor", text: "Emniyet ventili, rekor veya depo gövdesi kaynaklı olabilir." },
      { title: "Kışın sistem donuyor", text: "Antifriz oranı yetersiz veya tahliye yapılmamıştır." },
      { title: "Sıcak su bulanık geliyor", text: "Depo içinde tortu veya korozyon vardır." },
    ],
    scope: [
      "Kolektör ve depo montajı",
      "Sıcak-soğuk su boru hattı bağlantıları",
      "Sirkülasyon pompası ve otomasyon",
      "Antifriz (ısı transfer akışkanı) kontrolü ve değişimi",
      "Emniyet ventili ve genleşme kabı kontrolü",
      "Kaçak ve don hasarı onarımı",
      "Depo temizliği ve anot çubuğu kontrolü",
      "Kombi / elektrikli destek entegrasyonu",
    ],
    body: [
      { h2: "Sistemin çalışma mantığı" },
      { p: "Çatıdaki kolektör güneş ışığını ısıya çevirir ve içindeki akışkanı ısıtır. Bu ısı, depo içindeki serpantin aracılığıyla kullanma suyuna aktarılır. Doğal dolaşımlı (termosifon) sistemlerde akış sıcaklık farkıyla kendiliğinden olur; pompalı sistemlerde ise sirkülasyon pompası ve fark termostatı devreye girer." },
      { p: "Pompalı sistemler daha verimlidir ve deponun çatıda olma zorunluluğunu sıfırlar, ancak elektrik ve otomasyon gerektirir. Malatya'daki uygulamalarda her iki tip de yaygın kullanılıyor." },

      { h2: "Kış ve don koruması" },
      { p: "Malatya kışında donma, bu sistemlerin en büyük düşmanıdır. Donan akışkan hacim genişletir ve kolektör borularını çatlatır; bu, sistemin en pahalı parçasının değişmesi anlamına gelir." },
      { ul: [
        "Kapalı devrelerde antifriz oranı kış öncesi ölçülmeli",
        "Antifriz zamanla bozunur; 3–5 yılda bir yenilenmesi önerilir",
        "Açık sistemlerde kış öncesi tahliye yapılmalı",
        "Boru hatları, özellikle çatı ve dış cephedeki bölümler izole edilmeli",
        "Emniyet ventilinin tıkalı olmadığı kontrol edilmeli",
      ] },
      { p: "Kış öncesi yapılan bu kontrol, bir–iki saatlik bir iştir ve donma kaynaklı hasarların neredeyse tamamını önlüyor." },

      { h2: "Verim neden düşer?" },
      { p: "Yıllar içinde verim düşüşünün üç ana nedeni var. Birincisi kolektör camındaki toz ve kir tabakası; yılda bir yapılan temizlik gözle görülür fark yaratır. İkincisi ısı transfer akışkanının bozulması: antifriz zamanla asitleşir ve ısı taşıma kapasitesi düşer. Üçüncüsü depo içindeki kireç ve tortu birikimi; bu hem ısı transferini engeller hem depo hacmini azaltır." },
      { p: "Depolardaki magnezyum anot çubuğu ise gövdeyi korozyondan koruyan sarf malzemedir. Tükendiğinde koruma biter ve depo içten paslanmaya başlar. Kontrolü basittir, değişimi ucuzdur; ihmal edildiğinde ise depo değişimine kadar gider." },

      { h2: "Destek kaynağı ile birlikte çalışma" },
      { p: "Güneş enerjisi tek başına yıl boyu yeterli olmayabilir. Bulutlu günlerde ve kış aylarında kombi veya elektrikli rezistans destek olarak devreye girer. Burada püf nokta, destek kaynağının gereksiz yere çalışmamasıdır." },
      { p: "Doğru kurulmuş bir sistemde termostat, depo sıcaklığı yeterliyse desteği devre dışı bırakır. Yanlış bağlanmış sistemlerde ise elektrikli rezistans sürekli çalışır ve güneş enerjisinin sağladığı tasarruf tamamen kaybolur. Devreye alma sırasında bu ayarı mutlaka kontrol ediyoruz." },
    ],
    priceFactors: [
      "Sistem tipi (doğal dolaşımlı / pompalı)",
      "Kolektör alanı ve depo hacmi",
      "Çatı erişimi ve montaj zorluğu",
      "Boru hattı uzunluğu ve izolasyon",
      "Otomasyon ve destek kaynağı entegrasyonu",
    ],
    faqs: [
      { q: "Kaç kişilik aile için ne kadar depo gerekir?", a: "Kişi başı günlük 40–50 litre sıcak su tüketimi kabul edilirse, 4 kişilik bir aile için 200 litre depo tipik bir seçimdir. Kullanım alışkanlığı yoğunsa bir üst hacme çıkılır." },
      { q: "Kışın hiç çalışmaz mı?", a: "Çalışır, ancak verim düşer. Güneşli kış günlerinde su ön ısıtma yapar ve kombinin harcadığı enerjiyi azaltır. Kapalı ve karlı günlerde destek kaynağı devreye girer." },
      { q: "Mevcut sistemimi kombiye bağlayabilir misiniz?", a: "Evet, uygun bir seri bağlantı ve termostatik karışım vanasıyla mümkün. Bu bağlantıda asıl mesele, kombinin gereksiz devreye girmemesi için doğru sıcaklık ayarının yapılmasıdır." },
      { q: "Yılda bir bakım şart mı?", a: "Şart demiyoruz ama getirisi yüksek. Kolektör temizliği, antifriz kontrolü, anot çubuğu ve emniyet ventili kontrolünden oluşan bir bakım, hem verimi korur hem beklenmedik arızayı önler." },
    ],
    localAngle: "yüksek güneşlenme süresine karşılık sert kış koşullarında donma riski",
    related: ["mekanik-tesisat", "sihhi-tesisat", "hidrofor-tamiri"],
  },
];
