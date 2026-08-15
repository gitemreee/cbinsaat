// Hizmet sayfası derinlik blokları — 4. parti.

export const serviceExtra4 = {
  "petek-temizligi": [
    { h2: "Petek neden kirlenir?" },
    { p: "Kapalı bir ısıtma tesisatında su sürekli aynı devrede dolaşır. Zamanla borulardan çözünen demir, sudaki kireç ve tesisata giren oksijen birleşerek koyu renkli bir çamur oluşturur." },
    { p: "Bu çamur en ağır olduğu için peteğin alt kısmında birikir. Sonuç tipiktir: peteğin üstü sıcak, altı soğuk. Isıtma yüzeyinin bir kısmı devre dışı kaldığı için oda geç ısınır." },
    { p: "Tesisata sık su eklemek bu süreci hızlandırır. Her yeni su, beraberinde yeni oksijen ve kireç getirir. Basıncı ayda bir tamamlamak zorunda kalıyorsanız asıl sorun sızıntıdadır." },

    { h2: "Temizlik zamanının işaretleri" },
    { ul: [
      "Peteğin altı soğuk, üstü sıcak",
      "Aynı odada bazı petekler ısınıyor bazıları ısınmıyor",
      "Kombi eskisinden uzun süre yanıyor ama ev geç ısınıyor",
      "Havalandırırken çıkan su koyu renkli",
      "Tesisatta ıslık ve gurultu sesi arttı",
      "Son temizlikten bu yana 4–6 yıl geçmiş",
    ] },
    { p: "Bu belirtilerden ikisi ve fazlası varsa temizlik zamanı gelmiştir. Petek değiştirmeden önce mutlaka temizlik denenmelidir; çoğu durumda sorun çözülür." },

    { h2: "Yöntemler" },
    { p: "**Basınçlı su ile yıkama**: petekler tesisata bağlıyken, kontrollü basınç ve hava darbeleriyle yıkanır. Çamur sökülüp tahliye edilir. En yaygın yöntemdir ve peteği sökmeyi gerektirmez." },
    { p: "**Kimyasal temizlik**: tesisata özel kimyasal verilir, bir süre sirküle ettirilip boşaltılır. Kireç ağırlıklı kirlenmede etkilidir; çamur ağırlıklı kirlenmede basınçlı yıkamayla birlikte kullanılır." },
    { p: "**Sökerek yıkama**: sadece bir veya iki petekte sorun varsa daha ekonomik olabilir. Petek sökülür, ters yönde yıkanır ve geri takılır." },

    { h2: "Temizlikten sonra yapılması gerekenler" },
    { p: "Sistem yeniden doldurulur, havası alınır ve basınç 1,5 bara tamamlanır. Bu adım atlandığında petekler yine soğuk kalır ve temizlik yapılmamış gibi görünür." },
    { p: "Manyetik filtre takmak, temizliğin ömrünü uzatır. Filtre, dolaşımdaki metal parçacıkları tutar ve peteklere ulaşmasını engeller. Yılda bir temizlenmesi yeterlidir." },
    { p: "Tesisat koruyucu kimyasal eklemek de korozyonu yavaşlatır. Özellikle yeni tesisat ve yeni kombi kurulumlarında öneriyoruz." },

    { h2: "Yeni kombiye eski tesisat" },
    { p: "Kombi değişiminde en sık yapılan hata, yeni cihazı çamurlu eski tesisata bağlamaktır. Yeni kombinin eşanjörü çok daha dar kanallıdır ve kısa sürede tıkanır." },
    { p: "Bunun için cihaz değişiminde tesisatın yıkanması ve manyetik filtre takılması, yeni cihazın ömrünü aynı ölçüde uzatır. Çoğu teklifte bu iki kalem yoktur; biz ayrı satır olarak yazıyor ve nedenini anlatıyoruz." },
  ],

  "kombi-bakim-ariza": [
    { h2: "Bakımın karşılığı üç yerde görünür" },
    { p: "Birincisi gaz tüketimi. Kurumla kaplanmış bir eşanjör, aynı sıcak suyu üretmek için brülörün daha uzun yanmasını gerektirir. Bu fark faturada doğrudan görünür." },
    { p: "İkincisi güvenlik. Baca ve tahliye yolundaki tıkanma, yanma gazlarının içeri dönmesine yol açabilir. Karbonmonoksit renksiz ve kokusuzdur; fark edilmesi mümkün değildir." },
    { p: "Üçüncüsü arıza riski. Sezon başında yapılan bakım, ilk soğukta cihazın çalışmama ihtimalini epeyce düşürür. Kasım ayında arıza yoğunluğunun neden arttığı buradan anlaşılır." },

    { h2: "Basınç düşmesi: üç ihtimali ayırmak" },
    { p: "Kombiyi tamamen kapatın, basıncı 1,5 bara tamamlayın ve 24 saat çalıştırmadan bekleyin. Basınç düşerse tesisatta fiziksel sızıntı vardır. Düşmezse sorun ısınma sırasında ortaya çıkıyordur." },
    { p: "İkinci durumda iki ihtimal kalır: genleşme tankı havasını kaybetmiştir ya da emniyet ventili sızdırıyordur. Tankın havası gittiğinde su ısınınca basınç fırlar, ventil suyu atar, soğuyunca basınç düşük kalır." },
    { p: "Ventil sızıntısını doğrulamak kolaydır: tahliye çıkışının altına kuru bir kap koyun. Bir gün içinde su birikiyorsa ventil değişmelidir." },

    { h2: "Yoğuşmalı kombide farklı olanlar" },
    { p: "Yoğuşmalı cihazlarda baca gazındaki su buharı yoğuşturularak ek ısı elde edilir. Bu, verim artışı demektir ama beraberinde bir tahliye ihtiyacı getirir: kondens suyu." },
    { p: "Kondens sifonu tıkandığında cihaz kilitlenir. Bakımda bu sifonun temizlenmesi standart adımdır ve klasik kombide olmayan bir kalemdir." },
    { p: "Yoğuşmalı cihaz en yüksek verimini düşük dönüş suyu sıcaklığında verir. Dolayısıyla kalorifer suyu sıcaklığını sürekli en üstte tutmak, yoğuşmalı bir kombide verimi düşürür." },

    { h2: "Hata kodları: dört grup" },
    { ul: [
      "Düşük su basıncı → basıncı tamamlayın, tekrar ediyorsa sızıntı arayın",
      "Ateşleme yok / alev algılanmıyor → gaz vanası, elektrot, alev sensörü",
      "Baca / fan / tahliye → güvenlikle ilgili, ısrarla resetlemeyin",
      "Aşırı ısınma / sensör → dolaşım eksikliği, pompa ya da kapalı vanalar",
    ] },
    { p: "Bir kez reset makuldür. Aynı kod kısa sürede tekrar ediyorsa reset üstüne reset yapmak sorunu maskeler ve bazı durumlarda cihaza zarar verir." },

    { h2: "Bütün petek vanalarını kapatmayın" },
    { p: "Kombi çalışırken tüm petek vanalarının kapalı olması, cihazı kapalı devrede çalıştırmak demektir. Su dolaşamaz, sıcaklık hızla yükselir ve limit termostat devreye girer." },
    { p: "En az bir peteğin (genelde banyodaki havlupanın) vanası açık bırakılmalıdır. Termostatik başlıklı sistemlerde bu petek başlıksız ya da bypass hattı ile çözülür." },

    { h2: "Tamir mi değişim mi?" },
    { p: "Karar üç rakama bakılarak verilir: cihazın yaşı, arızalı parçanın maliyeti ve kurulumlu yeni cihaz bedeli. Pratikte kullandığımız eşik şudur: tamir maliyeti yeni cihazın %40'ını aşıyorsa değişimi konuşuruz." },
    { p: "0–8 yaş arası cihazlarda neredeyse her arıza tamir edilir. 15 yaş üstünde ise ana kart, ana eşanjör veya fan gibi büyük bir parça gittiğinde değişim çoğu zaman daha doğrudur." },
    { p: "Yeni kombi öneriyorsak nedenini yazıyoruz. Sadece satmak için değişim önermiyoruz; iki rakamı yan yana koyup kararı size bırakıyoruz." },
  ],

  "yerden-isitma": [
    { h2: "Sistem nasıl çalışır?" },
    { p: "Yerden ısıtmada sıcak su, zemine gömülü serpantin borularda dolaşır ve ısıyı geniş bir yüzeyden yayar. Petek 60–75 derece suyla çalışırken, yerden ısıtma 35–45 derece suyla aynı konforu verir." },
    { p: "Düşük su sıcaklığı iki şey demektir: yoğuşmalı kombide daha yüksek verim ve ısı pompası gibi alternatif kaynaklarla uyum. Bu yüzden yeni yapılarda tercih edilme oranı artıyor." },
    { p: "Isı, ayak seviyesinden yukarı doğru dağılır. Petekte sıcak hava önce tavana çıkıp sonra soğuyarak iner; yerden ısıtmada sıcaklık dağılımı daha dengelidir." },

    { h2: "Kat yüksekliği ve kaplama" },
    { p: "Yalıtım levhası, serpantin ve şap zemini birlikte 6–8 cm yükseltir. Kapı altları, balkon eşiği ve merdiven basamağı buna göre planlanmazsa kapıları kesmek gerekir." },
    { p: "Alçak tavanlı dairelerde ince şaplı sistemler kullanılabilir; yükseklik kaybı 4 cm'e iner ama maliyet artar. Karar tadilatın başında verilmelidir." },
    { p: "Kaplama seçimi de verimi belirler. Seramik ve doğal taş ısıyı iyi iletir; kalın halı ve bazı laminat türleri yalıtkan davranıp sistemin faydasını azaltır." },

    { h2: "Zon planı ve kolektör" },
    { p: "Her oda ayrı bir zon olarak planlanır ve kolektörden ayrı devreyle beslenir. Böylece her odanın sıcaklığı ayrı ayarlanabilir; kullanılmayan oda kısılabilir." },
    { p: "Bir devrenin boru uzunluğu sınırlıdır; çok uzun devrede basınç kaybı artar ve devrenin sonu ısınmaz. Geniş odalar o yüzden birden fazla devreye bölünür." },
    { p: "Kolektörde her devrenin debisi debimetreyle ayarlanır. Bu ayar yapılmadığında kısa devreler çok, uzun devreler az su alır ve odalar arasında sıcaklık farkı oluşur." },

    { h2: "Şap dökümü: basınç altında" },
    { p: "Serpantin döşendikten sonra hat basınç altına alınır ve şap bu basınçla dökülür. Amaç, döküm sırasında bir yere darbe gelirse anında fark edilmesidir." },
    { p: "Şap kuruduktan sonra ortaya çıkan bir kaçak, o zemini yeniden sökmek demektir. Test basıncını ölçüp fotoğraflıyor, dosyaya koyuyoruz." },
    { p: "Şap kuruduktan sonra sistem kademeli devreye alınır; üreticinin ısıtma programına uyulur. Aniden tam güçle çalıştırmak şapta çatlak yapar." },

    { h2: "Islak hacimlerde yerden ısıtma" },
    { p: "Banyo, yerden ısıtmanın en çok fark yarattığı yerdir; çıplak ayakla temas edilen tek zemindir. Kısmi uygulama olarak sadece banyoya yapmak da mümkündür." },
    { p: "Böyle bir durumda serpantin, su yalıtımının üstüne değil altına gelir. Sıralama şudur: zemin hazırlığı → yalıtım levhası → serpantin → şap → su yalıtımı → seramik." },

    { h2: "Kimin için uygun değil?" },
    { p: "Haftada bir gidilen yazlık ve bağ evlerinde yerden ısıtma iyi bir tercih değildir; yavaş ısındığı için vardığınızda ev saatlerce soğuk kalır. Bu tür yerlerde petek daha uygundur." },
    { p: "Sağlam bir zemini sadece yerden ısıtma için sökmek de çoğu evde ekonomik değildir. Tadilat zaten yapılacaksa ek maliyeti sınırlı kalır; kararı bu yüzden tadilat kararıyla birlikte veriyoruz." },
  ],

  "avize-aydinlatma": [
    { h2: "Aydınlatmayı üç katmanda düşünün" },
    { p: "İyi bir aydınlatma tek armatürle olmaz. Genel aydınlatma mekânı görünür kılar, görev aydınlatması belirli bir iş için ışık verir, vurgu aydınlatması ise duvar, tablo ya da nişi öne çıkarır." },
    { p: "Şikâyetlerin çoğu bu katmanlardan birinin eksikliğinden çıkar: salonda okuma ışığı yoktur, mutfakta tezgâh gölgede kalır, koridor karanlıktır." },
    { p: "Üç katmanı ayrı anahtar gruplarına bağlamak, aynı mekânı farklı kullanımlara uyarlar. Akşam sadece vurgu aydınlatması açık kalabilir." },

    { h2: "Renk sıcaklığı seçimi" },
    { ul: [
      "2700–3000K sıcak beyaz → salon, yatak odası, koridor",
      "3000–4000K doğal beyaz → mutfak, banyo, çalışma odası",
      "4000K ve üzeri → atölye, depo, teknik alan",
    ] },
    { p: "Aynı mekânda farklı renk sıcaklıkları karıştırılmamalıdır; göz bunu hemen fark eder ve rahatsız edici bulur. Armatür alırken kutunun üzerindeki K değerine bakmak gerekir." },
    { p: "Renksel geriverim (CRI) de önemlidir. CRI 80 altındaki armatürlerde renkler soluk görünür; mutfak, banyo ve giyinme alanlarında CRI 90 ve üzeri tercih edilmelidir." },

    { h2: "Spot yerleşimi" },
    { p: "Spotları tavana eşit aralıklarla dağıtmak yaygındır ama her zaman doğru değildir. Işığın nereye gerekli olduğuna göre yerleştirmek daha iyi sonuç verir." },
    { p: "Duvara yakın yerleştirilen spotlar duvarı yıkayarak mekânı geniş gösterir. Tam ortaya toplanan spotlar ise köşeleri karanlık bırakır ve odayı küçültür." },
    { p: "Mutfakta spotlar tezgâhın önüne değil üstüne gelmelidir; arkaya kaçtığında kendi gölgenizde çalışırsınız. Tezgâh altı bant aydınlatma bu sorunu tamamen çözer." },

    { h2: "Avize seçimi ve asma yüksekliği" },
    { p: "Yemek masası üzerindeki avize, masa yüzeyinden 70–85 cm yukarıda asılır. Daha yüksekte ışık dağılır, daha alçakta karşıdakinin yüzünü kapatır." },
    { p: "Salon avizesinin çapı, odanın uzunluk ve genişliğinin toplamına göre kabaca seçilir. Küçük odada büyük avize mekânı ezer, büyük odada küçük avize kaybolur." },
    { p: "Ağır avizelerde tavan bağlantısı önemlidir. Alçıpan tavana ağır avize asılacaksa profil arası takviye montaj sırasında konmalıdır; sonradan güvenli bir çözüm bulmak zordur." },

    { h2: "Dimmer ve LED uyumu" },
    { p: "Her LED dimmerlenmez. Uyumsuz kombinasyonda titreme, uğultu ve kısılmama sorunları çıkar. Ürün seçimini birlikte yapmak bu sorunu baştan önler." },
    { p: "Dimmerlenebilir armatür ile dimmerin gücü de uyumlu olmalıdır. Dimmerin minimum yük değeri, bağlanan LED'lerin toplam gücünden yüksekse sistem düzgün çalışmaz." },

    { h2: "Gizli (bant) aydınlatma" },
    { p: "Kademeli asma tavanda gizlenen LED bant, dolaylı ve yumuşak bir ışık verir. Ana aydınlatma olarak değil, tamamlayıcı katman olarak kullanılmalıdır." },
    { p: "Bandın besleme noktası ve trafo yeri revizyon kapağıyla erişilebilir olmalıdır. Kapak bırakılmadığında ilk arızada tavan kesilerek açılır ve bir daha eski hâline dönmez." },
    { p: "Bant seçiminde IP sınıfı da önemlidir; banyo ve mutfakta nem korumalı ürün gerekir. Ayrıca bandın metre başına gücü, istenen ışık seviyesine göre seçilmelidir." },
  ],

  "topraklama-paratoner": [
    { h2: "Topraklama ne işe yarar?" },
    { p: "Topraklama, arıza anında kaçak akıma güvenli bir yol açar. Metal gövdeli bir cihazın içinde yalıtım bozulduğunda akım gövdeye geçer; topraklama varsa akım toprağa akar ve koruma devreye girer." },
    { p: "Topraklama olmayan bir tesisatta o akım, cihaza dokunan kişi üzerinden geçer. Kaçak akım rölesi olsa bile, topraklama yoksa röle her durumda beklenen hızda devreye giremez." },
    { p: "Prizde toprak fişinin görünmesi, arkada gerçekten bir hat olduğu anlamına gelmez. 1990 öncesi tesisatların büyük bölümünde uçlar boşta bırakılmıştır." },

    { h2: "Topraklama var mı, nasıl anlaşılır?" },
    { p: "Ucuz bir priz test cihazıyla prizde toprak olup olmadığı saniyeler içinde anlaşılır. Ama bu cihaz sadece varlığını gösterir; direncinin yeterli olup olmadığını göstermez." },
    { p: "Asıl ölçüm topraklama direnci ölçümüdür. Özel cihazla yapılır ve sonucu belgelenir. Direnç yüksekse topraklama var görünse de görevini yapmıyordur." },
    { p: "Yaptığımız her işte bu ölçümü yapıp sonucu yazılı veriyoruz. \"Topraklama var\" demek yerine kaç ohm olduğunu söylüyoruz." },

    { h2: "Topraklama nasıl yapılır?" },
    { p: "Yeni yapılarda en sağlıklısı temel topraklamasıdır: temel betonuna gömülen iletken, binanın topraklama sistemini oluşturur. Beton dökülmeden yerleştirilmesi gerekir." },
    { p: "Mevcut yapılarda çubuk (kazık) topraklama uygulanır. Bakır kaplı çelik çubuklar toprağa çakılır ve ana potansiyel dengeleme barasına bağlanır." },
    { p: "Toprağın direnci nemine ve yapısına göre değişir. Kayalık ve kuru zeminlerde tek çubuk yetmez; birden fazla çubuk ya da özel iletken dolgu gerekir. Bu, ölçümle belirlenir." },

    { h2: "Potansiyel dengeleme" },
    { p: "Topraklama tek başına yeterli değildir. Binadaki metal borular, kalorifer tesisatı, su tesisatı ve metal konstrüksiyon aynı potansiyele getirilmelidir." },
    { p: "Bu yapılmadığında iki metal yüzey arasında potansiyel farkı oluşabilir. Banyoda duş alırken metal armatüre dokunulduğunda hissedilen karıncalanmanın sebebi çoğu zaman budur." },
    { p: "Potansiyel dengeleme barası genelde bina girişinde ya da kazan dairesinde bulunur. Yeni yapılan tesisatlarda bu bağlantıların yapılmış olması gerekir." },

    { h2: "Paratoner: kim için gerekli?" },
    { p: "Paratoner, yıldırımı kontrollü bir yoldan toprağa iletir. Yüksek yapılarda, açık arazideki tek yapılarda ve yıldırım riski yüksek bölgelerde anlamlıdır." },
    { p: "Bağ evi, sera, tarımsal tesis ve uzun arazi enerji hattı bulunan yerlerde özellikle önerilir; uzun hat, yıldırımın tesisata girmesi için doğrudan bir yol oluşturur." },
    { p: "Paratoner tek başına çalışmaz; kendi topraklama sistemi ve iniş iletkeni ile bir bütündür. Ayrıca tesisatta parafudr bulunması, indüklenen gerilime karşı cihazları korur." },

    { h2: "Periyodik kontrol" },
    { p: "Topraklama direnci zamanla değişir; toprağın nemi, çubuğun korozyonu ve bağlantıların gevşemesi etkiler. O yüzden periyodik ölçüm önerilir." },
    { p: "İş yerleri ve sanayi tesislerinde bu ölçüm zaten mevzuat gereği yapılır. Konutlarda zorunlu değildir ama birkaç yılda bir ölçtürmek, görünmeyen bir riski görünür kılar." },
  ],

  "kamera-guvenlik-sistemleri": [
    { h2: "Kamera seçiminde bakılacaklar" },
    { p: "Çözünürlük tek başına yeterli bir ölçüt değildir. Aynı çözünürlükte iki kameradan, sensörü büyük ve lensi kaliteli olan gece epeyce daha iyi görüntü verir." },
    { p: "Gece görüşü iki türlüdür: kızılötesi (siyah-beyaz) ve renkli gece görüşü (beyaz ışık ya da yüksek hassasiyetli sensör). Plaka ve yüz tanınması gereken yerlerde renkli gece görüşü fark yaratır." },
    { p: "Görüş açısı da amaca göre seçilir. Geniş açı çok alan görür ama detayı küçültür; dar açı az alan görür ama uzaktaki detayı yakalar. Giriş kapısında dar, otoparkta geniş açı mantıklıdır." },

    { h2: "Kamera nereye konur?" },
    { ul: [
      "Bina/işletme girişi: giren çıkanı yüz hizasında görecek şekilde",
      "Kasa ve para alanı: ürünü ve eli görecek açıda",
      "Depo ve arka kapı, en çok gözden uzak kalan nokta",
      "Otopark ve araç girişi: plaka okuyacak açı ve mesafede",
      "Koridor ve merdiven (hareket güzergâhını kapsayacak şekilde)",
    ] },
    { p: "Kamerayı çok yükseğe koymak yaygın bir hatadır; tepeden bakan kamera kafa üstü görüntüsü verir, yüz tanınmaz. Giriş kamerası 2,2–2,5 m yükseklikte en iyi sonucu verir." },

    { h2: "Kayıt cihazı ve depolama" },
    { p: "Kayıt süresi çözünürlük, kamera sayısı ve disk kapasitesine bağlıdır. Kaç günlük kayıt istediğinizi baştan söylemeniz, disk boyutunu doğru seçmemizi sağlar." },
    { p: "Kayıt cihazının yeri güvenlik açısından kritiktir. Kasanın hemen altına ya da göz önüne konan bir cihaz, hırsızlık anında ilk götürülen şey olur. Kilitli ve gizli bir noktada olmalıdır." },
    { p: "Buluta yedekleme ya da ikinci bir yerde kayıt, cihaz çalınsa bile görüntünün kalmasını sağlar. Değerli iş yerlerinde bunu öneriyoruz." },

    { h2: "Kablolama: sonradan çekmek zordur" },
    { p: "Kamera kabloları duvar kapanmadan önce çekilmelidir. Sonradan çekilen kablolar kanal içinde görünür kalır ve kesilmeye açıktır." },
    { p: "PoE (kablo üzerinden besleme) sistemlerde tek kablo hem görüntü hem enerji taşır; montaj sadeleşir. Analog sistemlerde ise ayrı besleme hattı gerekir." },
    { p: "Kablo güzergâhında yedek boru bırakmak da faydalıdır. İleride kamera eklemek istediğinizde duvar açmak gerekmez." },

    { h2: "Uzaktan izleme ve bildirim" },
    { p: "Telefondan izleme artık standart bir özelliktir. Ama kurulumda dikkat edilmesi gereken nokta güvenliktir: varsayılan şifreler mutlaka değiştirilmeli, cihaz yazılımı güncel tutulmalıdır." },
    { p: "Hareket algılamalı bildirim, sürekli izlemekten çok daha kullanışlıdır. Bölge tanımlayarak (sadece kapı önü gibi) yanlış alarmları azaltmak mümkündür." },

    { h2: "Yasal çerçeve" },
    { p: "Kamera kaydı kişisel veri kapsamındadır. İş yerlerinde görünür yerde bilgilendirme levhası bulundurulması ve kayıtların amaç dışında kullanılmaması gerekir." },
    { p: "Kamerayı komşunun bahçesini, penceresini ya da ortak alanı gereksiz biçimde görecek şekilde konumlandırmamak gerekir. Montaj sırasında açıları buna göre ayarlıyor, gerekiyorsa maskeleme uyguluyoruz." },
  ],

  "bahce-sulama": [
    { h2: "Zon planı: sistemin temeli" },
    { p: "Bahçenin tamamı aynı anda sulanamaz. Kaynağın (şebeke ya da pompa) verebileceği debi sınırlıdır; başlıklar gruplara bölünüp sırayla çalıştırılır. Her gruba zon denir." },
    { p: "Zon sayısı, toplam su ihtiyacının kaynak kapasitesine bölünmesiyle çıkar. Bu hesap yapılmadan kurulan sistemde başlıklar tam açılmaz, bazı bölgeler kuru kalır." },
    { p: "Önce kaynağın debisini ölçüyoruz: bir kovayı doldurma süresinden basit bir hesapla saatlik debi çıkar. Bu rakam olmadan sistem tasarlanmaz." },

    { h2: "Bitki tipine göre ayırmak" },
    { p: "Çim, çalı ve ağaçların su ihtiyacı farklıdır. Hepsini aynı zonda toplamak, birini fazla diğerini az sulamak demektir. Fazla su köklerde çürüme, az su kurumaya yol açar." },
    { p: "Doğru yaklaşım: çim alanlar rotor veya sprey başlıklarla ayrı zonda, çalı ve ağaçlar damlama hattıyla ayrı zonda. Güneş alan ve gölgede kalan bölgeler de ayrılır." },
    { p: "Aynı zonda sprey ve rotor başlık karıştırılmamalıdır; su verme hızları farklı olduğu için biri fazla diğeri az su alır." },

    { h2: "Başlık seçimi ve yerleşim" },
    { ul: [
      "Sprey (fıskiye): küçük ve düzensiz alanlar, 2–5 m mesafe",
      "Rotor: geniş çim alanlar, 5–12 m mesafe",
      "Damlama hattı: çalı, çiçeklik, ağaç dipleri",
      "Bubbler: ağaç çanağı sulaması",
    ] },
    { p: "Başlıklar, komşu başlığın merkezine kadar su atacak şekilde yerleştirilir (baş başa örtüşme). Bu kural uygulanmadığında başlıklar arasında kuru halkalar oluşur." },

    { h2: "Vana kutusu ve kontrol" },
    { p: "Solenoid vanalar erişilebilir kutularda toplanır. Kutunun yeri bakım için kolay ulaşılır, araç trafiğinden uzak ve su birikmeyen bir noktada olmalıdır." },
    { p: "Kontrol ünitesi zonları sırayla çalıştırır. Yağmur sensörü eklendiğinde yağışlı günlerde sulama otomatik atlanır; küçük bir ek ama su tasarrufu gerçek." },
    { p: "Programlamada en verimli zaman sabaha karşıdır. Buharlaşma düşük, rüzgâr azdır ve bitki gün boyunca suyu kullanabilir. Akşam sulaması yaprakların gece ıslak kalmasına ve mantar hastalığına yol açabilir." },

    { h2: "Mevcut bahçeye sonradan kurmak" },
    { p: "Kurulabiliyor. Çim varsa kanal açma yöntemiyle minimum hasarla çalışılır; açılan ince kanal birkaç haftada kapanır." },
    { p: "Yine de en ekonomik zaman bahçe düzenlemesiyle birlikte kurmaktır. Kilit taşı ve çim serilmeden önce boruları döşemek, sonradan sökmekten çok daha ucuzdur." },
    { p: "Şimdilik istemediğiniz bölgeler için bile boş boru bırakmayı öneriyoruz; ileride genişletmek kolay olur." },

    { h2: "Kış hazırlığı" },
    { p: "Malatya kışında borular donabilir. Sezon sonunda ana vana kapatılır, hat en alçak noktadan ya da kompresörle boşaltılır, vana kutusu ve kontrol ünitesi kış moduna alınır." },
    { p: "Donmuş bir hat, ilkbaharda bulunması zor kaçaklar bırakır. Bu işlemleri yazılı veriyoruz; isterseniz kendiniz yapabilir, isterseniz sezon sonu bakımına biz gelebiliriz." },
  ],

  "priz-tamiri": [
    { h2: "Priz neden ısınır?" },
    { p: "Normal çalışan bir priz ısınmaz. Isınma, o noktada kötü bir temas olduğunu gösterir. Gevşek temas direnç üretir, direnç ısı üretir, ısı da zamanla yalıtımı bozar." },
    { p: "Gevşemenin iki ana sebebi vardır: mekanizmanın yaylarının yorulması ve arka bağlantı vidalarının gevşemesi. İkisi de kullanım yılı arttıkça yaygınlaşır." },
    { p: "Kararmış, sararmış ya da erimiş bir priz artık geç kalınmış bir uyarıdır. O prizi ve arkasındaki kablo ucunu değiştirmek gerekir; aynı hatta birden fazla prizde bu belirti varsa hattın tamamı gözden geçirilmelidir." },

    { h2: "Priz mekanizması: markadan çok sınıf" },
    { p: "Priz seçiminde belirleyici olan markadan çok mekanizma sınıfıdır. Ucuz mekanizmaların yaylı temasları kısa sürede gevşer; gevşek temas doğrudan ısınma demektir." },
    { p: "Vidalı klemensli mekanizmalar, yaylı (klipsli) olanlara göre daha güvenli bağlantı sağlar; özellikle yüksek çekişli cihazların bağlandığı prizlerde tercih edilmelidir." },
    { p: "Çerçeve ve kapak grubu tamamen estetiktir ve sonradan değiştirilebilir. Bütçe sıkışırsa çerçeveden inin, mekanizmadan inmeyin." },

    { h2: "Çoklu priz ve uzatma kablosu" },
    { p: "Evde çoklu priz sayısı artıyorsa sorun cihaz sayısında değil hat planındadır. Çoklu prizler, tek bir duvar prizinden beslenen yükü artırır ve o noktayı sürekli sınırında çalıştırır." },
    { p: "Isıtıcı, ütü, elektrikli soba ve su ısıtıcısı gibi yüksek çekişli cihazlar çoklu prizden çalıştırılmamalıdır. Bunlar doğrudan duvar prizine bağlanmalıdır." },
    { p: "Kalıcı çözüm, ihtiyacın olduğu yerlere yeni priz noktası açmaktır. Tadilat sırasında bu neredeyse maliyetsizdir; tadilat yoksa kablo kanalıyla da yapılabilir." },

    { h2: "Islak hacim ve dış mekân prizleri" },
    { p: "Banyoda priz konumu, su kaynaklarına mesafeye göre kurala bağlıdır. Duş ve küvet yakınına priz konmaz; banyo hattı mutlaka kaçak akım korumalı olmalıdır." },
    { p: "Balkon, bahçe ve teras prizlerinde kapaklı ve nem korumalı (en az IP44) ürün kullanılır. İç mekân prizi dış mekânda birkaç ayda su alır ve kısa devre yapar." },
    { p: "Dış mekân prizleri ayrı bir kaçak akım korumalı hattan beslenmelidir; bir arıza durumunda evin içi etkilenmez." },

    { h2: "Yeni priz noktası açmak" },
    { p: "Alçıpan duvarda yeni priz açmak kolaydır; kablo profil arasından geçirilir, sıva onarımı gerekmez. Tuğla duvarda ise kanal açmak, kablo çekmek ve sıva–boya onarımı yapmak gerekir." },
    { p: "Kanal, en yakın buattan ya da mevcut bir prizden beslenir. Ama mevcut hattın yükü kontrol edilmelidir; zaten sınırında çalışan bir hatta yeni priz eklemek sigorta atmasına yol açar." },
    { p: "Priz eklerken yükseklik ve konumu mobilya yerleşimine göre belirliyoruz. Yatak başı, çalışma masası ve TV ünitesi en çok ihtiyaç duyulan noktalardır." },

    { h2: "USB ve akıllı prizler" },
    { p: "USB'li prizler pratiktir ama şarj teknolojisi hızlı değişir; birkaç noktayla sınırlı tutmak mantıklıdır. Yatak başı ve çalışma masası en çok işe yarayan yerlerdir." },
    { p: "Akıllı prizler uzaktan açma–kapama ve tüketim ölçme sağlar. Yüksek güçlü cihazlarda kullanılacaksa cihazın gücüne uygun model seçilmelidir; standart akıllı prizlerin çoğu ısıtıcı gibi yükler için uygun değildir." },
  ],
};
