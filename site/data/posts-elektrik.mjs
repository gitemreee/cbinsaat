// Blog: elektrik konulu yazılar.

export const elektrikPosts = [
  {
    slug: "elektrik-tesisati-yenileme-belirtileri",
    title: "Elektrik tesisatının yenilenmesi gerektiğini gösteren 7 işaret",
    category: "Elektrik",
    published: "2025-04-14",
    updated: "2026-03-02",
    reading: 7,
    metaTitle: "Elektrik Tesisatı Ne Zaman Yenilenmeli? 7 İşaret",
    metaDesc:
      "Sık atan sigorta, ısınan priz, topraklamasız hat… Elektrik tesisatının yenilenmesi gerektiğini gösteren 7 işaret ve her biri için ne yapmanız gerektiği.",
    keywords: ["elektrik tesisatı yenileme", "sigorta atıyor", "priz ısınıyor", "topraklama yok", "eski tesisat"],
    excerpt: "Sık atan sigorta, ısınan priz ve yetersiz hatlar ne anlatır? Tesisatınızın ömrünü bitirdiğini gösteren yedi işaret ve her biri için atmanız gereken adım.",
    services: ["elektrik-tesisati", "elektrik-panosu", "topraklama-paratoner"],
    intro:
      "Elektrik tesisatının belirli bir kullanım ömrü var, ama bu ömür takvimle değil belirtilerle ölçülür. Aşağıdaki yedi işaretten üçü ve fazlası sizde varsa, tesisat artık idare edilecek değil yenilenecek durumdadır.",
    body: [
      { h2: "1. Sigorta düzenli olarak atıyor" },
      { p: "Ayda birkaç kez sigorta atması, tesisatın kapasitesinin bugünkü kullanımınıza yetmediğini gösterir. Özellikle mutfakta iki cihazı aynı anda çalıştırdığınızda atıyorsa, o hat en baştan tek bir cihaz düşünülerek çekilmiştir." },
      { p: "Yapılacak şey sigortayı büyütmek değildir. Bu tam tersine tehlikelidir, çünkü sigortanın görevi kabloyu korumaktır. Doğru çözüm, yüksek çekişli cihazlar için panodan ayrı hat çekmek veya hattın kesitini büyütmektir." },

      { h2: "2. Priz veya anahtar ısınıyor" },
      { p: "Normal çalışan bir priz ısınmaz. Elinizle dokunduğunuzda sıcaklık hissediyorsanız, o noktada kötü bir temas var demektir. Kötü temas direnç, direnç ısı, ısı da zamanla erime ve yangın riski üretir." },
      { p: "Priz kararmış, sararmış veya erimişse artık geç kalınmış bir uyarıdır. O prizi ve arkasındaki kablo ucunu değiştirmek gerekir; aynı hatta birden fazla prizde bu belirti varsa hattın tamamı gözden geçirilmelidir." },

      { h2: "3. Toprak hattı yok veya bağlı değil" },
      { p: "1990 öncesi yapılmış tesisatların büyük bölümünde koruma topraklaması ya hiç yoktur ya da prizlerde uçları boşta bırakılmıştır. Prizde toprak fişinin görünmesi, arkada gerçekten bir hat olduğu anlamına gelmez." },
      { p: "Topraklama olmadan kaçak akım rölesi de tam işlevini göremez. Çamaşır makinesi, bulaşık makinesi ve elektrikli su ısıtıcısı gibi metal gövdeli cihazların bulunduğu her evde topraklama zorunlu kabul edilmelidir." },

      { h2: "4. Panoda hâlâ buşonlu (seramik) sigorta var" },
      { p: "Buşonlu sigortalar aşırı akıma karşı korur, ama kaçak akıma karşı hiçbir koruma sağlamaz. Ayrıca seçicilikleri düşük olduğu için bir arıza tüm daireyi karartır." },
      { p: "Pano değişimi, tesisatın tamamı yenilenmese bile yapılabilecek en yüksek getirili güvenlik adımıdır. Yarım günlük bir işle, kaçak akım koruması ve hat bazında ayrı sigortalama kazanılır." },

      { h2: "5. Evde çoklu priz ve uzatma kablosu çoğaldı" },
      { p: "Her odada birkaç çoklu priz varsa, sorun cihaz sayınızda değil hat planındadır. Çoklu prizler, tek bir duvar prizinden beslenen yükü artırır ve o noktayı sürekli sınırında çalıştırır." },
      { p: "Kalıcı çözüm, ihtiyacın olduğu yerlere yeni priz noktaları açmaktır. Tadilat yapılıyorsa bu iş neredeyse maliyetsizdir; tadilat yoksa bile kanal veya kablo kanalı ile yapılabilir." },

      { h2: "6. Işıklar titriyor veya kısılıyor" },
      { p: "Büyük bir cihaz çalıştığında ışıkların kısılması gerilim düşümünü gösterir. Bu, ya hattın kesitinin yetersiz olduğu ya da bir bağlantının gevşediği anlamına gelir. Titreme ise çoğu zaman nötr bağlantısında sorun olduğunu işaret eder." },
      { p: "Nötr sorunları özellikle tehlikelidir çünkü cihazlara normalin üzerinde gerilim bindirebilir. Bu belirtide bekletmeden ölçüm yaptırmak gerekir." },

      { h2: "7. Kablolarda alüminyum iletken var" },
      { p: "Eski tesisatlarda maliyet nedeniyle kullanılan alüminyum iletken, bakıra göre daha yüksek dirençlidir ve zamanla oksitlenerek bağlantı noktalarında ısınmaya yol açar. Kesildiğinde gümüş rengi görünen, bakır sarısı olmayan iletken alüminyumdur." },
      { p: "Alüminyum iletkenli bir tesisat, diğer belirtiler olmasa bile yenileme kapsamına alınmalıdır. Bu, tartışmasız değişim gerektiren tek kalemdir." },

      { h2: "Yenileme kararı verirken" },
      { p: "Tesisat yenilemesi mutlaka \"her şeyi kırıp baştan yapmak\" demek değildir. Mevcut boruların içi kullanılabilir durumdaysa kablo değişimi kırım gerektirmeden yapılabilir. Karar, birkaç noktadan yapılan basit kontrollerle veriliyor:" },
      { ul: [
        "Buat kapaklarının açılıp ek noktalarının incelenmesi",
        "Birkaç prizden kablo yalıtımının kontrol edilmesi",
        "Pano içindeki ısınma ve kararma izlerinin değerlendirilmesi",
        "Hat yalıtım direncinin ölçülmesi",
      ] },
      { p: "Bu kontroller yarım saat sürer ve size hem kapsam hem maliyet konusunda gerçekçi bir tablo verir. Tahminle karar vermek yerine ölçümle karar vermek, hem gereksiz masrafı hem eksik işi önlüyor." },
    ],
    faqs: [
      { q: "Elektrik tesisatının ömrü kaç yıldır?", a: "Malzeme kalitesine ve kullanım yoğunluğuna göre 25–40 yıl arasında değişir. Ancak takvim yaşından çok belirtiler belirleyicidir; 20 yaşındaki yorgun bir tesisat, 35 yaşındaki bakımlı bir tesisattan daha riskli olabilir." },
      { q: "Yenileme sırasında evde oturabilir miyim?", a: "Kısmi yenilemede genelde oturulabilir, oda oda ilerlenir ve akşamları enerji verilir. Komple yenilemede kırım ve toz nedeniyle birkaç gün boşaltılması daha sağlıklı olur." },
    ],
    related: ["sigorta-surekli-neden-atar", "priz-neden-isinir", "topraklama-neden-onemli"],
  },

  {
    slug: "sigorta-surekli-neden-atar",
    title: "Sigorta sürekli neden atar? Üç farklı neden ve ayırt etme yolu",
    category: "Elektrik",
    published: "2025-05-06",
    updated: "2026-01-20",
    reading: 6,
    metaTitle: "Sigorta Neden Atar? Aşırı Yük, Kısa Devre ve Kaçak Akım",
    metaDesc:
      "Sigorta atmasının üç ayrı nedeni vardır ve çözümleri farklıdır. Aşırı yük, kısa devre ve kaçak akımı belirtilerinden ayırt etmenin pratik yolu.",
    keywords: ["sigorta atıyor", "kaçak akım rölesi atıyor", "kısa devre", "aşırı yük", "sigorta neden atar"],
    excerpt: "Halk arasında hepsine \"sigorta attı\" denir ama üç ayrı durum vardır. Hangisi olduğunu evde nasıl anlarsınız ve her biri için ne yapılmalı?",
    services: ["elektrik-ariza", "elektrik-panosu", "elektrik-tesisati"],
    intro:
      "Sigortanın atması bir arıza değil, korumanın çalıştığının göstergesidir. Asıl soru neyi koruduğudur. Üç farklı durum var ve her birinin belirtisi, riski ve çözümü farklı.",
    body: [
      { h2: "Önce hangi eleman attı, ona bakın" },
      { p: "Panoda genelde iki tip koruma bulunur: otomatik sigortalar ve kaçak akım rölesi. Hangisinin attığı, sorunun tipini çoğunlukla belirler." },
      {
        table: {
          head: ["Atan eleman", "Ne oldu", "Olası neden"],
          rows: [
            ["Tek bir otomatik sigorta", "O hattaki akım sınırı aşıldı", "Aşırı yük veya kısa devre"],
            ["Kaçak akım rölesi", "Giden ve dönen akım eşit değil", "İzolasyon zayıflaması, nem, bozuk cihaz"],
            ["Ana şalter", "Toplam yük sınırı aşıldı", "Çok sayıda cihazın aynı anda çalışması"],
          ],
        },
      },

      { h2: "1. Aşırı yük: yavaş atar, tekrar kalkar" },
      { p: "Aşırı yükte sigorta anında atmaz; birkaç saniye ile birkaç dakika arasında bir gecikmeyle atar. Attıktan sonra kaldırdığınızda tutar, ta ki aynı cihazlar tekrar çalışana kadar." },
      { p: "Tipik senaryo: mutfakta su ısıtıcısı çalışırken tost makinesi devreye giriyor ve sigorta atıyor. Burada arıza yok, kapasite yetersiz. Çözüm, yüksek çekişli cihazlar için ayrı hat çekmek veya cihazları farklı hatlara dağıtmaktır." },

      { h2: "2. Kısa devre: anında atar, kalkmaz" },
      { p: "Kısa devrede sigorta gecikmeden atar ve kaldırmaya çalıştığınızda tekrar atar. Bazen atarken hafif bir ses veya panoda kısa bir kıvılcım duyulur." },
      { p: "En sık nedenler: yanmış bir cihaz, duvara çakılan çivi veya delinen bir matkap deliği, nem almış bir dış mekân hattı ve zamanla zedelenmiş kablo yalıtımı." },
      { quote: "Kısa devrede sigortayı zorlamayın. İkiden fazla kaldırma denemesi, arızalı noktada ark oluşmasına ve yangın başlangıcına yol açabilir." },
      { p: "Kısa devrenin yerini bulmak için o hattaki tüm cihazların fişi çekilir. Sigorta bu hâlde tutuyorsa sorun cihazlardan birindedir; hâlâ atıyorsa hattın kendisindedir ve ölçümle nokta tespiti gerekir." },

      { h2: "3. Kaçak akım: koruma çalışıyor demektir" },
      { p: "Kaçak akım rölesi, hatta giden akım ile dönen akımı karşılaştırır. Aradaki fark belirli bir değeri (genelde 30 mA) aşarsa, akımın bir kısmının başka bir yoldan, örneğin bir insan üzerinden, toprağa gittiğini varsayar ve devreyi keser." },
      { p: "Rölenin atması can güvenliğinizin korunduğu anlamına gelir. Onun için atıyor diye devre dışı bırakılması, yapılabilecek en tehlikeli müdahaledir." },
      { p: "Kaynağı bulmak için basit bir yöntem var: tüm cihazların fişini çekin ve röleyi kaldırın. Duruyorsa cihazları tek tek takarak hangisinde attığını bulabilirsiniz. Cihazsız hâlde de atıyorsa kaçak hattadır." },

      { h2: "Kaçak akımın en yaygın kaynakları" },
      { ul: [
        "Elektrikli su ısıtıcıları (rezistansta izolasyon zayıflaması)",
        "Çamaşır ve bulaşık makineleri (nem ve yaşlanma)",
        "Nem almış banyo, balkon ve bahçe hatları",
        "Yağmur sonrası dış mekân aydınlatma hatları",
        "Eski ve yıpranmış uzatma kabloları",
      ] },
      { p: "Özellikle yağmurlu havalarda ortaya çıkan kaçaklar, dış mekân hatlarını işaret eder. Belirli bir cihazda değil de belirli bir hava koşulunda atıyorsa bu bilgi tespiti çok hızlandırır." },

      { h2: "Test butonuna basmayı unutmayın" },
      { p: "Kaçak akım rölesinin üzerindeki test (T) butonuna altı ayda bir basılmalıdır. Bastığınızda röle atmıyorsa, koruma görevini yapmıyor demektir ve değişmesi gerekir. Bu kontrol otuz saniye sürer ve hiçbir maliyeti yoktur." },
      { p: "Rölenizin hiç atmamış olması iyi bir işaret değildir; test edilmemiş olması anlamına gelir. Düzenli test, bu koruma elemanının gerçekten çalıştığından emin olmanın tek yoludur." },
    ],
    faqs: [
      { q: "Sigortayı büyük amperajlıyla değiştirebilir miyim?", a: "Hayır. Sigortanın amperajı, kablonun taşıyabileceği akıma göre seçilir. Büyük sigorta takarsanız kablo, sigorta atmadan önce ısınmaya başlar; bu yangın riski demektir. Doğru çözüm hattı büyütmek veya yeni hat çekmektir." },
      { q: "Kaçak akım rölesi ne kadar sürede değişmeli?", a: "Belirli bir ömür süresi yoktur ancak test butonuna bastığınızda atmıyorsa hemen değişmelidir. Genel uygulama olarak 10 yılı geçmiş rölelerin, pano bakımı sırasında yenilenmesi öneriliyor." },
    ],
    related: ["elektrik-tesisati-yenileme-belirtileri", "kacak-akim-rolesi-neden-atar", "elektrik-panosu-bakimi"],
  },

  {
    slug: "priz-neden-isinir",
    title: "Priz neden ısınır, ne zaman değiştirilmelidir?",
    category: "Elektrik",
    published: "2025-05-28",
    updated: "2025-12-11",
    reading: 5,
    metaTitle: "Priz Neden Isınır? Belirtiler ve Ne Yapılmalı",
    metaDesc:
      "Isınan, kararan, kıvılcım yapan priz ne anlatır? Gevşek bağlantı, aşırı yük ve eski mekanizmanın oluşturduğu riskler ve yapılması gerekenler.",
    keywords: ["priz ısınıyor", "priz kararması", "priz değişimi", "priz kıvılcım", "çoklu priz riski"],
    excerpt: "Isınan priz küçük bir konfor sorunu değil, yangının ilk aşamasıdır. Nedenlerini ve hangi durumda beklemeden müdahale gerektiğini anlatıyoruz.",
    services: ["priz-tamiri", "elektrik-ariza", "elektrik-tesisati"],
    intro:
      "Sağlıklı çalışan bir priz ısınmaz. Elinizi dokundurduğunuzda sıcaklık hissediyorsanız, orada enerjinin bir kısmı işe değil ısıya dönüşüyor demektir. Bu her zaman bir sorunun göstergesidir.",
    body: [
      { h2: "Isınmanın fiziği: kötü temas" },
      { p: "Elektrik akımı geçerken temas yüzeyi küçüldükçe direnç artar. Direnç arttıkça o noktada ısı üretilir. Priz içinde bu daralma iki yerde olur: kablonun bağlandığı klemens vidasında ve fişin girdiği kontak yaylarında." },
      { p: "Klemens vidası zamanla gevşer; özellikle ısınma–soğuma döngüsü bunu hızlandırır. Kontak yayları ise binlerce fiş takma çıkarma sonucu esnekliğini kaybeder. İkisi de yavaş ilerleyen ama sonu belli süreçlerdir." },

      { h2: "Belirtileri ciddiyet sırasına göre okuyun" },
      {
        table: {
          head: ["Belirti", "Ne anlama gelir", "Aciliyet"],
          rows: [
            ["Fiş prizde gevşek duruyor", "Kontak yayları yorulmuş", "Planlı değişim"],
            ["Hafif ısınma var", "Bağlantı gevşemeye başlamış", "Yakın zamanda kontrol"],
            ["Priz kapağı sararmış", "Uzun süredir ısınıyor", "Kısa sürede değişim"],
            ["Kararma / is izi var", "Ark oluşuyor", "Acil"],
            ["Kıvılcım veya koku var", "Yangın riski aktif", "Sigortayı indirin, hemen müdahale"],
          ],
        },
      },

      { h2: "Priz değiştirmek her zaman yetmez" },
      { p: "Prizi yenilediğiniz hâlde ısınma sürüyorsa sorun mekanizmada değildir. Bu durumda üç ihtimal var: kablo ucu yorgun ve oksitlenmiş, hattın kesiti o cihaz için yetersiz ya da ısınma aslında buat içindeki bir ek noktasından geliyor." },
      { p: "İlk ihtimalde kablo ucu kesilip yeniden soyulur. İkincisinde cihaz için ayrı hat çekmek gerekir. Üçüncüsünde ise buat kapağı açılıp ek noktalarının kontrol edilmesi şarttır. Bu, gözden en çok kaçan nedendir." },

      { h2: "Çoklu prizler ve gerçek yük" },
      { p: "Bir duvar prizi tipik olarak 16 amper için tasarlanır; bu yaklaşık 3.500 watt demektir. Isıtıcı (2.000 W), su ısıtıcısı (2.000 W) ve ütü (1.800 W) gibi cihazlardan ikisini aynı çoklu prize takmak bu sınırı zorlar." },
      { p: "Çoklu prizler kapasiteyi artırmaz, sadece bağlantı noktası sayısını artırır. Elektrikli ısıtıcı ve benzeri yüksek çekişli cihazların doğrudan duvar prizine takılmasını, çoklu priz üzerinden beslenmemesini öneriyoruz." },
      { ul: [
        "Yüksek çekişli cihazları doğrudan duvar prizine takın",
        "Çoklu prizleri halı altından veya mobilya arkasından geçirmeyin",
        "Sararmış veya kararmış priz mekanizmalarını değiştirin",
        "Kullanılmayan prizleri (özellikle çocuk olan evlerde) kapaklı tiple yenileyin",
        "Islak alanlarda kapaklı ve uygun koruma sınıfında priz kullanın",
      ] },

      { h2: "Ne zaman beklemeden aramalısınız?" },
      { p: "Priz veya çevresinde kararma, is izi, plastik erimesi ya da yanık kokusu varsa bekleyecek durum yoktur. O hattın sigortasını indirip müdahale edilmesi gerekir. Bu belirtiler, ark oluşumunun başladığını gösterir ve ark bir kez oluşmaya başladıysa kendi kendine durmaz." },
      { p: "Evdeki tüm prizleri elle kontrol etmek beş dakika sürer. Yılda bir yapılan bu basit kontrol, en sık görülen elektrik kaynaklı yangın nedenini sıfırlıyor." },
    ],
    faqs: [
      { q: "Isınan prizi kendim değiştirebilir miyim?", a: "Sigortayı indirip kalem tipi kontakla teyit ettikten sonra teknik olarak mümkündür. Ancak ısınmanın nedeni prizin kendisi değil hat veya buat ise, değişim sorunu çözmez ve riski gizler. Isınma tekrarlıyorsa ölçüm yaptırın." },
      { q: "Hangi priz markası daha iyi?", a: "Mekanizmanın kontak kalitesi ve vida tutuşu belirleyicidir. Bilinen üreticilerin orta segment serileri, çok ucuz ürünlere göre gözle görülür şekilde uzun ömürlüdür. Kapak ve çerçeve neredeyse tamamen estetik tercihtir." },
    ],
    related: ["sigorta-surekli-neden-atar", "elektrik-tesisati-yenileme-belirtileri", "acil-elektrik-arizasinda-ne-yapilir"],
  },

  {
    slug: "kacak-akim-rolesi-neden-atar",
    title: "Kaçak akım rölesi neden atar? Kaynağı bulmanın adımları",
    category: "Elektrik",
    published: "2025-06-19",
    updated: "2026-02-08",
    reading: 6,
    metaTitle: "Kaçak Akım Rölesi Neden Atar? Adım Adım Kaynak Bulma",
    metaDesc:
      "Kaçak akım rölesi atıyorsa nedenini evde nasıl daraltırsınız? Cihaz arızası, nem ve hat kaçağını ayırt etmenin pratik yöntemi.",
    keywords: ["kaçak akım rölesi", "kaçak akım atıyor", "rezidüel akım", "kaçak akım nedenleri", "elektrik kaçağı"],
    excerpt: "Kaçak akım rölesinin atması arıza değil, korumanın çalışmasıdır. Kaynağını evde adım adım daraltmanın yolu ve en sık karşılaşılan nedenler.",
    services: ["elektrik-ariza", "elektrik-panosu", "topraklama-paratoner"],
    intro:
      "Kaçak akım rölesi, panodaki en değerli koruma elemanıdır. Görevi cihazı korumak değil, insanı korumaktır. Bu nedenle atmasına \"arıza\" demek yerine \"uyarı\" demek daha doğru.",
    body: [
      { h2: "Röle tam olarak neyi ölçer?" },
      { p: "Bir devrede faz üzerinden giden akım ile nötr üzerinden dönen akım normalde birbirine eşittir. Kaçak akım rölesi bu iki değeri sürekli karşılaştırır. Aradaki fark 30 miliamperi aştığında, akımın bir kısmının devre dışına, toprağa, bir metal gövdeye ya da bir insana, kaçtığını anlar ve devreyi keser." },
      { p: "30 mA değeri rastgele seçilmemiştir; insan kalbinde fibrilasyon riskinin başladığı eşiğin altında kalacak şekilde belirlenmiştir. Röle bu yüzden \"hayat koruma\" elemanı olarak anılır." },

      { h2: "Kaynağı daraltma: dört adım" },
      { ol: [
        "Evdeki tüm cihazların fişini çekin, sadece sabit tesisat kalsın (aydınlatma dahil kapatın).",
        "Röleyi kaldırın. Kalkıyorsa sorun cihazlardan birinde, kalkmıyorsa hatta demektir.",
        "Cihazları tek tek takın; her takıştan sonra birkaç dakika bekleyin. Röle hangisinde atarsa suçlu odur.",
        "Cihazsız hâlde de atıyorsa hat gruplarını sırayla devreye alın ve hangi grupta attığını belirleyin.",
      ] },
      { p: "Bu dört adım, çağrıların önemli bölümünde kaynağı evde bulmanızı sağlıyor. Bulduğunuz bilgiyi telefonda paylaştığınızda müdahale de kısalıyor." },

      { h2: "En sık suçlular" },
      { p: "Deneyimimizde kaçak akım çağrılarının büyük çoğunluğu şu kaynaklardan birine çıkıyor:" },
      { ul: [
        "Elektrikli su ısıtıcısı (termosifon), rezistans izolasyonu zayıflar, en yaygın neden budur",
        "Çamaşır ve bulaşık makinesi, su ve yaşlanma birlikte kaçak üretir",
        "Nem almış banyo veya balkon hattı, özellikle yağmurdan sonra ortaya çıkar",
        "Bahçe ve dış mekân aydınlatması, buat içine su girer",
        "Yıpranmış uzatma kablosu ve seyyar cihazlar",
        "Ankastre fırın, sızan yağ ve nem, zamanla izolasyonu bozar",
      ] },
      { p: "Yağmurlu havada atıp kuru havada atmıyorsa dış mekân hattına, sadece belirli bir cihaz çalışırken atıyorsa o cihaza odaklanmak gerekir. Bu iki bilgi tespiti epey hızlandırır." },

      { h2: "Birikimli kaçak: hiçbiri tek başına suçlu değilse" },
      { p: "Bazen tek bir cihazda değil, birkaç cihazın küçük kaçaklarının toplamında sorun olur. Her biri tek başına 8–10 mA kaçırıyorsa ve aynı anda çalışıyorlarsa toplam 30 mA'yı aşar ve röle atar. Bu durumda hangi cihazı çıkarsanız sorun geçiyormuş gibi görünür ama asıl mesele toplam kaçaktır." },
      { p: "Çözüm, hatları birden fazla röleye bölmektir. Aydınlatma ve priz gruplarının ayrı rölelere alınması hem bu sorunu çözer hem de bir kaçak oluştuğunda tüm dairenin karanlıkta kalmasını önler." },

      { h2: "Yapılmaması gerekenler" },
      { quote: "Kaçak akım rölesini devre dışı bırakmak, köprülemek veya daha yüksek eşikli bir röleyle değiştirmek, korumayı önler. Bu, karşılaştığımız en tehlikeli müdahaledir." },
      { p: "Röle sürekli atıyor ve yaşamı zorlaştırıyorsa doğru yol, kaçağı bulmaktır. Geçici olarak dahi devre dışı bırakılması kabul edilebilir değil; aynı gün ölçüm yaptırmak gerekir." },
    ],
    faqs: [
      { q: "Röle atıyor ama hiçbir cihazda bulamıyorum, ne yapmalıyım?", a: "Kaçak sabit tesisatta olabilir; bu durumda yalıtım direnci ölçümü gerekir. Ölçüm, hangi hattın izolasyonunun zayıfladığını sayısal olarak gösterir ve nokta tespitini mümkün kılar." },
      { q: "Kaçak akım rölesi olmadan yaşanmaz mı?", a: "Teknik olarak tesisat çalışır, ama en önemli can güvenliği koruması yok demektir. Islak hacimlerin bulunduğu her konutta 30 mA'lık kaçak akım rölesi bulunmalıdır; yoksa panoya ilavesi yarım günlük bir iştir." },
    ],
    related: ["sigorta-surekli-neden-atar", "topraklama-neden-onemli", "elektrik-panosu-bakimi"],
  },

  {
    slug: "topraklama-neden-onemli",
    title: "Topraklama neden önemlidir ve evinizde var mı nasıl anlarsınız?",
    category: "Elektrik",
    published: "2025-07-10",
    updated: "2026-01-05",
    reading: 6,
    metaTitle: "Topraklama Neden Önemli? Evde Kontrol Etme Yolları",
    metaDesc:
      "Topraklama nasıl çalışır, neden hayat kurtarır ve evinizde gerçekten var mı? Kontrol yöntemleri ve eksikse yapılması gerekenler.",
    keywords: ["topraklama", "topraklama var mı", "koruma topraklaması", "eş potansiyel", "topraklama ölçümü"],
    excerpt: "Prizde toprak fişinin görünmesi, arkada gerçekten bir hat olduğu anlamına gelmez. Topraklamanın nasıl çalıştığı ve evinizde var olup olmadığını anlamanın yolu.",
    services: ["topraklama-paratoner", "elektrik-tesisati", "elektrik-panosu"],
    intro:
      "Topraklama, elektrik tesisatının görünmeyen ama en çok hayat kurtaran parçası. Kaçak akım rölesi bile ancak sağlam bir topraklama ile birlikte tam işlevini görüyor.",
    body: [
      { h2: "Topraklama ne yapar?" },
      { p: "Bir cihazın içindeki kablo yalıtımı bozulup metal gövdeye temas ettiğinde, gövde tehlikeli bir gerilime çıkar. O gövdeye dokunan kişi, akımın toprağa ulaşmak için bulduğu yol hâline gelir. \"Çarpma\" dediğimiz şey tam olarak budur." },
      { p: "Topraklama iletkeni bu senaryoya çok daha kolay bir yol sunar: akım insan yerine bakır iletken üzerinden toprağa akar. Bu ani akım artışını kaçak akım rölesi ya da sigorta algılar ve devreyi keser. Zincirin tamamı ancak birlikte çalışır." },

      { h2: "Evinizde topraklama var mı?" },
      { p: "En sık yanılgı, prizde toprak fişi (yanlardaki metal tırnaklar) görünmesinin topraklama olduğu düşüncesidir. Eski tesisatlarda topraklamalı priz takılmış ama arkasında hat bırakılmamış olabilir; hatta bazı yerlerde nötr hattı toprak ucuna bağlanmıştır. Bu son durum tehlikelidir." },
      { ul: [
        "Basit priz test cihazı (fişli, ışıklı tip) ilk kontrolü verir; birkaç yüz liralık bu cihaz her evde bulunabilir",
        "Kesin sonuç için topraklama direnci ölçümü gerekir, bu özel cihazla yapılır",
        "Panoda ayrı bir toprak barası ve ona gelen sarı-yeşil iletkenler varsa bu iyi bir işarettir",
        "Bina ortak topraklama barası olup olmadığı yönetimden öğrenilebilir",
      ] },

      { h2: "Nötr, toprak yerine kullanılamaz" },
      { p: "Eski tesisatlarda maliyet nedeniyle bazen nötr hattı priz toprak ucuna bağlanmıştır. Bu uygulama normal koşullarda çalışıyormuş gibi görünür ama nötr hattında bir kopukluk olduğunda cihaz gövdesine faz gerilimi biner." },
      { quote: "Nötrü toprak yerine kullanmak, karşılaştığımız en tehlikeli hatalı uygulamadır. Tespit edildiğinde hemen düzeltilmesi gerekir." },

      { h2: "Eş potansiyel bağlantı: banyonun görünmez koruması" },
      { p: "Banyoda su boruları, kalorifer boruları, küvet ve metal duş teknesi gibi iletken parçalar birbirine ve topraklamaya bağlanır. Buna eş potansiyel bağlantı denir. Amaç, iki metal yüzey arasında gerilim farkı oluşmasını engellemektir, fark yoksa akım da geçmez." },
      { p: "Tadilatta metal borular plastikle değiştirildiğinde, eski hattın sağladığı doğal süreklilik de biter. Bu kalem, banyo tadilatlarında en çok atlanan güvenlik detayı." },

      { h2: "Topraklama yoksa ne yapılabilir?" },
      { p: "Boru güzergâhı uygunsa mevcut hatlara topraklama iletkeni ilave edilebilir. Uygun değilse kanal açılarak yeni hat çekilir. Her iki durumda da önce binada ortak topraklama barası olup olmadığına bakılır; yoksa bina genelinde bir çalışma gerekir." },
      { p: "Bina genelinde çözüm mümkün değilse, en azından kaçak akım rölesi ilavesi riski azaltır. Ancak bunun topraklamanın yerini tutmadığını açıkça söylemek gerekir; geçici bir iyileştirmedir, kalıcı çözüm değil." },

      { h2: "Kırsal ve taşlı zeminlerde durum" },
      { p: "Toprak direnci zeminin cinsine göre değişir. Malatya'nın kırsal mahallelerinde sık karşılaşılan taşlı ve kuru zeminlerde tek bir çubuk elektrot yeterli olmayabilir. Bu durumda birden fazla elektrot, derine inen uygulama veya zemin iyileştirmesi gerekir." },
      { p: "Ölçümün toprağın kuru olduğu dönemde yapılması önemlidir; yağmurdan hemen sonra alınan ölçüm gerçekte olduğundan iyi sonuç verir ve yanıltıcı olur." },
    ],
    faqs: [
      { q: "Apartmanda topraklama yoksa daire içinde çözebilir miyim?", a: "Kalıcı çözüm bina ortak topraklamasının kurulmasıdır. Daire içinde kaçak akım rölesi ilavesi riski azaltır ama topraklamanın yerini tutmaz. Bina yönetimiyle ortak çalışma yapılması gerekir." },
      { q: "Topraklama ölçümü ne sıklıkla yapılmalı?", a: "İş yeri ve sanayi tesislerinde genel uygulama yılda bir ölçüm ve raporlamadır. Konutlarda yasal bir periyot zorunluluğu yoktur; tesisat yenileme sonrasında ve yaklaşık 5 yılda bir kontrol öneriyoruz." },
    ],
    related: ["kacak-akim-rolesi-neden-atar", "elektrik-tesisati-yenileme-belirtileri", "elektrik-panosu-bakimi"],
  },

  {
    slug: "elektrik-panosu-bakimi",
    title: "Elektrik panosu bakımı neden gereklidir ve nasıl yapılır?",
    category: "Elektrik",
    published: "2025-08-04",
    updated: "2026-04-16",
    reading: 7,
    metaTitle: "Elektrik Panosu Bakımı | Ne Zaman, Nasıl, Neden",
    metaDesc:
      "Elektrik panosu bakımında neler kontrol edilir? Gevşek bağlantı, ısınma, yük dengesizliği ve koruma elemanlarının kontrolü hakkında pratik rehber.",
    keywords: ["elektrik panosu bakımı", "pano kontrolü", "termal kamera pano", "yük dengesi", "pano etiketleme"],
    excerpt: "Panonun içi yıllarca açılmadığında ne olur? Gevşeyen bağlantılar, ısınan klemensler ve yük dengesizliği. Ayrıca bunları önlemenin basit yolu.",
    services: ["elektrik-panosu", "elektrik-ariza", "kompanzasyon-panosu"],
    intro:
      "Elektrik panosu, kurulduktan sonra en az ilgilenilen ama arıza anında en çok başvurulan yerdir. Yılda bir yapılan basit bir bakım, hem plansız kesintileri hem de yangın riskini ciddi oranda azaltıyor.",
    body: [
      { h2: "Panoda zamanla ne değişir?" },
      { p: "Pano kurulduğunda tüm bağlantılar sıkıdır. Ancak akım geçtikçe iletkenler ısınır ve soğur; bu genleşme–büzülme döngüsü yıllar içinde vidaları gevşetir. Gevşeyen bağlantı direnç üretir, direnç ısı üretir ve süreç kendini hızlandırarak devam eder." },
      { p: "İkinci değişken tozdur. Pano içinde biriken toz, nemle birleştiğinde iletken bir tabaka oluşturabilir ve kaçak akıma yol açar. Üçüncüsü ise kullanımın değişmesidir: yıllar içinde eklenen cihazlar, panonun ilk tasarlandığı yük dağılımını bozar." },

      { h2: "Bakımda neler yapılır?" },
      { ol: [
        "Enerji kesilir, kesildiği teyit edilir ve pano önüne uyarı konur",
        "Görsel kontrol: kararma, is izi, erime, koku ve nem araştırılır",
        "Tüm klemens ve bara bağlantıları uygun torkla sıkılır",
        "Pano içi toz ve kir temizlenir",
        "Kaçak akım rölesi test butonuyla denenir",
        "Enerji verilir; yük altında faz akımları ölçülür",
        "Yük dengesizliği varsa hatlar yeniden dağıtılır",
        "Etiketler kontrol edilir, eksikler tamamlanır ve devre listesi güncellenir",
      ] },
      { p: "Konut panosunda bu işlem 1–2 saat sürer. İş yeri ve sanayi panolarında süre pano boyutuna göre uzar; termal kamera taraması da eklenir." },

      { h2: "Yük dengesi neden önemli?" },
      { p: "Üç fazlı beslenen bir binada veya iş yerinde yükün fazlara dengeli dağılması gerekir. Bir faz aşırı yüklenirken diğerleri boşta kalırsa nötr hattında akım artar, gerilim dalgalanır ve hassas cihazlar zarar görür." },
      { p: "Ölçüm, dengesizliği sayısal olarak gösterir. Düzeltme çoğu zaman ek malzeme gerektirmez; sadece hatların farklı fazlara dağıtılması yeterlidir. Buna rağmen enerji kalitesinde gözle görülür iyileşme sağlar." },

      { h2: "Ne sıklıkla?" },
      {
        table: {
          head: ["Yapı tipi", "Bakım periyodu", "Ek kontrol"],
          rows: [
            ["Konut", "3–5 yılda bir", "Kaçak akım rölesi testi: 6 ayda bir"],
            ["Apartman ortak pano", "Yılda bir", "Sayaç panosu ve kolon bağlantıları"],
            ["İş yeri / mağaza", "Yılda bir", "Aydınlatma ve kasa hattı ayrı kontrol"],
            ["Sanayi tesisi", "Yılda iki kez", "Termal kamera taraması, kompanzasyon ölçümü"],
          ],
        },
      },

      { h2: "Termal kamera: arıza çıkmadan görmek" },
      { p: "Termal kamera ile yapılan tarama, ısınmaya başlamış bağlantı noktalarını henüz arıza çıkmadan gösterir. Yük altında çekilen bir görüntüde, normalden 10–15 °C sıcak bir klemens hemen fark edilir." },
      { p: "Sanayi tesislerinde bu tarama, plansız duruşların önemli bir bölümünü önlüyor. Maliyeti bir saatlik üretim kaybının çok altında kalıyor." },

      { h2: "Etiketleme: en ucuz iyileştirme" },
      { p: "Hangi sigortanın nereyi beslediğinin yazılı olması, malzeme olarak neredeyse bedavadır. Ama su baskını, yangın başlangıcı veya acil bir tadilat anında doğru sigortayı saniyeler içinde bulmayı sağlar." },
      { p: "Her bakım sonrası panoyu kalıcı etiketlerle ve kapak içine yapıştırılan bir devre listesiyle teslim ediyoruz. Bu liste, sonraki bakımlarda da referans oluyor." },
    ],
    faqs: [
      { q: "Bakım sırasında elektrik ne kadar kesilir?", a: "Konut panosunda 1–2 saat, iş yeri panolarında 2–4 saat tipik süredir. Kritik yükleri olan işletmelerde bakımı bölümlere ayırarak kesinti süresini kısaltıyoruz." },
      { q: "Panoyu kendim temizleyebilir miyim?", a: "Enerji altında pano içine müdahale edilmemelidir. Görsel kontrol (kapağı açmadan koku, ses ve ısınma kontrolü) yapabilirsiniz, ancak temizlik ve sıkma işlemleri enerji kesilerek ve ölçüm cihazıyla teyit edilerek yapılmalıdır." },
    ],
    related: ["sigorta-surekli-neden-atar", "kompanzasyon-panosu-nedir", "topraklama-neden-onemli"],
  },

  {
    slug: "acil-elektrik-arizasinda-ne-yapilir",
    title: "Acil elektrik arızasında ilk ne yapılmalı?",
    category: "Elektrik",
    published: "2025-09-02",
    updated: "2026-05-11",
    reading: 5,
    metaTitle: "Acil Elektrik Arızasında İlk Adımlar | Güvenlik Rehberi",
    metaDesc:
      "Yanık kokusu, kıvılcım, su teması ve ani enerji kesintisinde ilk yapılması gerekenler. Güvenli müdahale sırası ve yapılmaması gerekenler.",
    keywords: ["acil elektrik arızası", "yanık kokusu elektrik", "elektrik kıvılcım", "ana şalter", "elektrik güvenliği"],
    excerpt: "Yanık kokusu, kıvılcım veya su teması olduğunda ilk otuz saniyede ne yaptığınız, sonucu belirler. Adım adım güvenli müdahale.",
    services: ["elektrik-ariza", "elektrik-panosu", "priz-tamiri"],
    intro:
      "Elektrik arızalarının çoğu planlı bir randevuyla çözülebilir. Ancak bazı belirtiler beklemeye izin vermez. Bu yazı, o durumlarda ne yapılacağını ve daha önemlisi ne yapılmayacağını anlatıyor.",
    body: [
      { h2: "Hemen ana şalteri indirmeniz gereken durumlar" },
      { ul: [
        "Priz, anahtar veya panodan yanık kokusu geliyorsa",
        "Herhangi bir noktada kıvılcım veya duman görüyorsanız",
        "Pano elle dokunulamayacak kadar ısınmışsa",
        "Su, elektrikli bir cihaza veya prize temas etmişse",
        "Kablo veya priz erimiş, plastik deforme olmuşsa",
      ] },
      { p: "Ana şalter genelde daire giriş panosunun en üstündeki büyük şalterdir. Nerede olduğunu şimdiden öğrenmek, o an aramaktan çok daha iyidir." },

      { h2: "Su baskını veya sızıntı varsa" },
      { p: "Su ile elektrik bir aradaysa öncelik enerjinin kesilmesidir. Ancak panoya giden yolda su birikintisi varsa üzerinden geçmeyin. Bu durumda mümkünse binanın ana kesicisinden veya sayaç panosundan enerji kestirilmeli." },
      { quote: "Islak zeminde durarak elektrikli bir cihaza, prize veya panoya dokunmayın. Enerji kesilmeden hiçbir müdahale yapılmamalıdır." },
      { p: "Alt kata sızıntı varsa komşuyu haberdar edin; onun dairesinde de enerji kesilmesi gerekebilir. Su kaynağını kesmek (daire giriş vanası) ikinci adımdır." },

      { h2: "Tüm daire enerjisiz kaldığında" },
      { ol: [
        "Komşularda da kesinti var mı öğrenin, varsa şebeke kaynaklıdır, dağıtım şirketine bildirilmelidir.",
        "Sadece sizde ise panoya bakın: atmış bir sigorta veya kaçak akım rölesi var mı?",
        "Atan elemanı bir kez kaldırmayı deneyin. Tekrar atıyorsa zorlamayın.",
        "Sayaç panosundaki sigortayı da kontrol edin; bazı binalarda ayrı bir kesici bulunur.",
        "Çözülmüyorsa ölçüm gerekir; müdahale etmeden arayın.",
      ] },

      { h2: "Yapılmaması gerekenler" },
      { p: "Acil durumlarda yapılan bazı refleksler, sorunu büyütüyor. En sık gördüklerimiz:" },
      { ul: [
        "Atan sigortayı defalarca kaldırmaya çalışmak, arızalı noktada ark oluşturur",
        "Sigortayı daha büyük amperajlıyla değiştirmek, kabloyu korumasız bırakır",
        "Kaçak akım rölesini köprülemek veya devre dışı bırakmak, can güvenliğini bitirir",
        "Yanan bir prize su dökmek, enerji kesilmeden kesinlikle yapılmamalı",
        "Enerji altında pano içine müdahale etmek",
      ] },

      { h2: "Aramadan önce hazırlayabilecekleriniz" },
      { p: "Telefonda paylaştığınız birkaç bilgi, ekibin doğru malzemeyle gelmesini sağlar ve ikinci bir gidiş gelişi sıfırlar:" },
      { ul: [
        "Belirti tam olarak ne: koku mu, kıvılcım mı, kesinti mi?",
        "Hangi cihaz çalışırken oldu?",
        "Panoda hangi eleman attı (sigorta mı, kaçak akım rölesi mi)?",
        "Kesinti tüm dairede mi, tek odada mı?",
        "Yakın zamanda bir tadilat, delme veya su sızıntısı yaşandı mı?",
        "Panonun fotoğrafı (mümkünse)",
      ] },

      { h2: "Acil olmayan durumlar" },
      { p: "Tek bir prizin çalışmaması, bir avizenin yanmaması, arada bir atan ama kolay kalkan sigorta veya cızırtısız çalışan eski bir anahtar, bunlar planlı randevu ile çözülebilir. Bu ayrımı yapmak, gereksiz acil ücreti ödemenizi de önler." },
      { p: "Aciliyet değerlendirmesini telefonda birlikte yapıyoruz. Durumu tarif ettiğinizde, beklenebilir mi yoksa aynı gün gelinmesi mi gerekir açıkça söylüyoruz." },
    ],
    faqs: [
      { q: "Gece veya hafta sonu geliyor musunuz?", a: "Gerçek acil durumlarda (yanık kokusu, kıvılcım, su teması, tüm dairenin enerjisiz kalması) mesai dışında da müdahale ediyoruz. Acil dışı işleri normal çalışma saatlerine planlıyoruz." },
      { q: "Ana şalterimin nerede olduğunu bilmiyorum, ne yapmalıyım?", a: "Genelde daire giriş kapısı yanındaki pano içinde, en üstteki büyük şalterdir. Bir sonraki ziyaretimizde size gösteriyor ve panoyu etiketliyoruz. Bu bilgi acil bir durumda çok değerli." },
    ],
    related: ["priz-neden-isinir", "sigorta-surekli-neden-atar", "kacak-akim-rolesi-neden-atar"],
  },

  {
    slug: "kompanzasyon-panosu-nedir",
    title: "Kompanzasyon panosu nedir, reaktif ceza nasıl önlenir?",
    category: "Sanayi Elektriği",
    published: "2025-09-24",
    updated: "2026-04-02",
    reading: 8,
    metaTitle: "Kompanzasyon Panosu Nedir? Reaktif Ceza Nasıl Önlenir",
    metaDesc:
      "Reaktif enerji nedir, faturaya neden yansır ve kompanzasyon panosu nasıl çalışır? Kondansatör ömrü, harmonik sorunu ve bakım rehberi.",
    keywords: ["kompanzasyon panosu", "reaktif ceza", "reaktif enerji", "kondansatör", "cos fi", "harmonik"],
    excerpt: "Faturaya sessizce eklenen reaktif bedeli nedir, nasıl kalmaz? Kompanzasyonun çalışma mantığı ve neden birkaç yılda etkisini yitirdiği.",
    services: ["kompanzasyon-panosu", "fabrika-elektrik-tesisati", "elektrik-panosu"],
    intro:
      "Reaktif ceza, birçok işletmenin farkında olmadan yıllarca ödediği bir kalem. Kompanzasyon panosu bunu önlemek için kurulur, ama kurulduğu gibi bırakıldığında birkaç yıl içinde işlevini kaybeder.",
    body: [
      { h2: "Reaktif enerji nedir?" },
      { p: "Motor, transformatör ve balast gibi endüktif yükler çalışabilmek için manyetik alan kurmak zorundadır. Bu alanı kurmak için şebekeden çekilen enerji iş üretmez ama hatları meşgul eder. Buna reaktif enerji denir." },
      { p: "Dağıtım şirketleri bu yükü sınırlamak için, çekilen aktif enerjiye oranla belirli bir eşiği aşan reaktif tüketimi faturaya yansıtır. Bu kalem, üretim yapmadığınız bir şey için ödeme yapmanız anlamına gelir." },

      { h2: "Kompanzasyon nasıl çözer?" },
      { p: "Kondansatörler, endüktif yüklerin ihtiyaç duyduğu reaktif enerjiyi tesisin içinde üretir. Böylece bu enerji şebekeden çekilmek zorunda kalmaz. Kompanzasyon panosu, kondansatörleri gruplar hâlinde (kademe) devreye alıp çıkararak anlık ihtiyacı takip eder." },
      { p: "Panonun beyni reaktif güç kontrol rölesidir. Akım trafosu üzerinden tesisin yükünü okur ve hangi kademelerin devreye gireceğine karar verir. Doğru ayarlanmış bir röle, gün içinde değişen yüke sürekli uyum sağlar." },

      { h2: "Neden birkaç yılda bozulur?" },
      { p: "Kondansatörler sarf malzemesidir. Sıcaklık, sık devreye girme ve harmonik bozulma altında kapasiteleri yıldan yıla düşer. Beş yıl önce 25 kVAr veren bir kondansatör bugün 15 kVAr veriyor olabilir, pano çalışıyor görünür ama ceza geri gelir." },
      { ul: [
        "Kondansatör kapasitesi zamanla düşer, etiket değerini vermez",
        "Kompanzasyon kontaktörleri günde onlarca kez devreye girer ve kontakları aşınır",
        "Deşarj dirençleri bozulduğunda kondansatör devreye girerken zorlanır",
        "İşletme yeni makine aldığında mevcut kademe yapısı yetersiz kalır",
      ] },

      { h2: "Harmonik: gizli düşman" },
      { p: "Sürücülü motorlar, invertörler, LED sürücüler ve UPS'ler şebekeye harmonik bozulma verir. Harmoniklerin yüksek olduğu tesislerde standart kondansatörler aşırı ısınır ve normalden çok daha hızlı bozulur." },
      { p: "Bir tesiste kondansatörler sürekli ve erken bozuluyorsa, sorun ürün kalitesinden çok harmonik olabilir. Bu durumda kondansatör önüne harmonik (detuned) reaktör konulması gerekir. Ölçüm yapılmadan bu ayrım anlaşılmaz." },

      { h2: "Yıllık bakımda ne yapılır?" },
      { ol: [
        "Son 12 ayın faturaları incelenir, reaktif değerlerin seyri çıkarılır",
        "Pano enerjisiz hâlde görsel kontrol edilir; şişme, kararma ve koku aranır",
        "Her kondansatörün kapasitesi ölçülür ve etiket değeriyle karşılaştırılır",
        "Kontaktör kontakları ve sigortalar kontrol edilir",
        "Röle ayarları (hedef cos φ, kademe süresi, C/K değeri) gözden geçirilir",
        "Akım trafosunun oranı ve bağlantı yönü doğrulanır",
        "Tesis yük altındayken ölçüm alınır ve rapor hazırlanır",
      ] },
      { p: "Bu bakımın maliyeti, çoğu işletmede bir–iki aylık reaktif ceza tutarına eşit çıkıyor. Yani bakım kendini ilk ay içinde amorti ediyor." },

      { h2: "Küçük işletmeler için gerekli mi?" },
      { p: "Tek fazlı beslenen, motor yükü olmayan küçük işletmelerde genelde gerekmez. Ancak soğutma kompresörü, büyük motorlu ekipman veya çok sayıda balastlı armatür varsa fatura kontrolü yapılmalıdır." },
      { p: "Karar için sadece son 12 ayın faturası yeterli. Reaktif kaleminde bir tutar görünüyorsa, bunun kompanzasyonla ortadan kaldırılıp kaldırılamayacağını hesaplayarak söyleyebiliyoruz." },
    ],
    faqs: [
      { q: "Kompanzasyon panosu ne kadar sürede kendini amorti eder?", a: "Reaktif ceza tutarına bağlı olarak genelde 6 ay ile 2 yıl arasında değişir. Ceza kalemi yüksek olan işletmelerde bu süre çok daha kısa olabilir. Hesabı fatura üzerinden birlikte yapabiliyoruz." },
      { q: "Bakım sırasında üretim durur mu?", a: "Hayır. Kompanzasyon panosunun beslemesi kesilerek çalışılır; tesis bu sırada kompanzasyonsuz çalışmaya devam eder. Birkaç saatlik sürenin faturaya etkisi sayılmayacak kadar azdır." },
    ],
    related: ["elektrik-panosu-bakimi", "fabrika-elektrik-tesisati-planlama", "jenerator-transfer-panosu"],
  },

  {
    slug: "jenerator-transfer-panosu",
    title: "Jeneratör transfer panosu nasıl çalışır?",
    category: "Enerji",
    published: "2025-10-15",
    updated: "2026-02-24",
    reading: 6,
    metaTitle: "Jeneratör Transfer Panosu (ATS) Nasıl Çalışır?",
    metaDesc:
      "Otomatik transfer panosu ne yapar, kritik yük nasıl belirlenir ve geri besleme neden ölümcül tehlike oluşturur? Jeneratör bağlantısı rehberi.",
    keywords: ["transfer panosu", "ATS panosu", "jeneratör bağlantısı", "kritik yük", "otomatik transfer"],
    excerpt: "Şebeke kesildiğinde jeneratörün devreye girmesi tek başına yeterli değil. Transfer panosunun asıl işlevi ve neden vazgeçilmez olduğu.",
    services: ["jenerator-ups", "elektrik-panosu", "fabrika-elektrik-tesisati"],
    intro:
      "Jeneratör satın almak, kesintisiz enerjinin sadece bir parçası. Asıl belirleyici olan, o enerjinin hangi hatlara ve nasıl aktarılacağı. Bu işi yapan eleman otomatik transfer panosudur.",
    body: [
      { h2: "Transfer panosu ne yapar?" },
      { p: "Otomatik transfer panosu (ATS) dört işi sırayla yürütür: şebeke kesintisini algılar, jeneratöre çalışma emri verir, gerilim kararlı hâle geldiğinde yükü jeneratöre aktarır ve şebeke geri geldiğinde işlemi tersine çevirir." },
      { p: "Bu süreçte kritik bir güvenlik işlevi de vardır: mekanik ve elektriksel kilitleme. Şebeke ile jeneratörün aynı anda hatta bağlanmasını fiziksel olarak imkânsız kılar." },

      { h2: "Geri besleme: neden ölümcül?" },
      { p: "Kilitleme olmadan yapılan bağlantılarda jeneratör enerjisi şebeke hattına geri basar. Dağıtım şirketinin, hattın kesik olduğunu varsayarak çalışan personeli için bu ölümcül bir tehlikedir." },
      { quote: "Prizden prize kablo çekerek jeneratör bağlamak, halk arasında \"ters besleme\" denen yöntem, hiçbir koşulda kabul edilebilir değildir." },
      { p: "Ayrıca şebeke geri geldiğinde iki kaynak senkronize olmadan birleşirse hem jeneratör hem tesis ciddi zarar görür. Transfer panosu bu iki riski birden önler." },

      { h2: "Kritik yük nasıl belirlenir?" },
      { p: "Her prizin jeneratörden beslenmesi gerekmez. Yükleri üç gruba ayırmak, hem yatırımı hem yakıt maliyetini düşürür." },
      {
        table: {
          head: ["Grup", "Beslenme şekli", "Örnek"],
          rows: [
            ["Kesintisiz olmalı", "UPS + jeneratör", "Sunucu, kasa sistemi, kontrol PLC'si, tıbbi cihaz"],
            ["Kısa kesinti kabul edilir", "Jeneratör", "Soğuk oda, üretim hattı, asansör, su pompası, yangın pompası"],
            ["Beslenmeyebilir", "Sadece şebeke", "Konfor prizleri, genel aydınlatmanın bir bölümü, klima"],
          ],
        },
      },
      { p: "Bu ayrım yapılmadan alınan jeneratör ya gereğinden büyük olur ve boşta yakıt yakar, ya gereğinden küçük olur ve yükü kaldıramaz." },

      { h2: "Devreye alma testi" },
      { p: "Kurulum sonrası mutlaka yük altında test yapılmalıdır. Şebeke gerçekten kesilir; jeneratörün çalışma süresi, transfer zamanı ve kritik hatların beslendiği ölçülerek doğrulanır. Kâğıt üzerinde doğru görünen sistemlerin bir kısmı bu testte eksik çıkıyor." },
      { p: "Test sonucunda ölçülen değerleri yazılı olarak teslim ediyoruz: kesinti algılama süresi, jeneratör kalkış süresi, transfer süresi ve geri dönüş süresi. Bu değerler sonraki kontrollerde referans oluyor." },

      { h2: "Periyodik çalıştırma neden şart?" },
      { p: "Hiç çalıştırılmayan bir jeneratör, ihtiyaç anında çalışmama eğilimindedir. Yakıt bozulur, akü boşalır, motor yağı çöker ve contalar kurur. Ayda bir, 15–20 dakika yük altında çalıştırma bu sorunların tamamını önler." },
      { p: "Otomatik test fonksiyonu olan panolarda bu işlem programlanabilir; belirlenen gün ve saatte jeneratör kendi kendine çalışır ve durur. Sonuçlar kaydedilirse sistemin durumu sürekli izlenmiş olur." },

      { h2: "Apartmanlarda jeneratör" },
      { p: "Apartmanlarda genelde tüm daireleri beslemek yerine ortak kritik yükler tercih ediliyor: asansör, hidrofor, ortak alan aydınlatması, yangın pompası ve güvenlik sistemi. Bu yaklaşım hem yatırımı hem yakıt maliyetini makul seviyede tutuyor." },
      { p: "Kritik yük listesini bina yönetimiyle birlikte çıkarmak, hem doğru kapasiteyi hem de gerçekçi bir bütçeyi ortaya koyuyor." },
    ],
    faqs: [
      { q: "Jeneratör kaç saniyede devreye girer?", a: "Tipik bir sistemde kesinti algılama 1–3 saniye, jeneratör kalkışı 5–15 saniye sürer. Toplam transfer süresi genelde 10–20 saniye arasındadır. Kesintisiz olması gereken yükler için bu süre bile fazladır; onlar UPS ile beslenir." },
      { q: "Mevcut jeneratörüme transfer panosu eklenebilir mi?", a: "Jeneratörde uzaktan çalıştırma girişi varsa çoğu durumda eklenebilir. Yoksa jeneratör kontrol paneline ilave gerekir. Mevcut sistemi inceleyerek uygulanabilirliğini söylüyoruz." },
    ],
    related: ["kompanzasyon-panosu-nedir", "elektrik-panosu-bakimi", "fabrika-elektrik-tesisati-planlama"],
  },

  {
    slug: "ev-elektrik-tesisati-maliyeti",
    title: "Sıfırdan ev elektrik tesisatı nasıl planlanır?",
    category: "Elektrik",
    published: "2025-11-06",
    updated: "2026-06-18",
    reading: 9,
    metaTitle: "Sıfırdan Ev Elektrik Tesisatı Planlama Rehberi",
    metaDesc:
      "Priz, aydınlatma, pano, güçlü cihaz hatları ve zayıf akım noktalarının planlanması. Tesisat kapanmadan önce karar verilmesi gereken her şey.",
    keywords: ["ev elektrik tesisatı", "priz planı", "elektrik projesi", "kablo kesiti", "zayıf akım altyapısı"],
    excerpt: "Duvar kapandıktan sonra yapılan her düzeltme kırım demektir. Tesisat kapanmadan önce karar vermeniz gereken kalemlerin tam listesi.",
    services: ["elektrik-tesisati", "elektrik-panosu", "avize-aydinlatma"],
    intro:
      "Elektrik tesisatı, bir yapının en uzun ömürlü ama en zor değiştirilen kısmı. Bu yazı, tesisat kapanmadan önce vermeniz gereken kararları ve her birinin sonradan ne kadara mal olduğunu anlatıyor.",
    body: [
      { h2: "Önce mekân kullanımı konuşulur" },
      { p: "Planlama, kablo değil mobilya ile başlar. Televizyon ünitesi hangi duvarda olacak, yatak nereye gelecek, çalışma masası hangi köşede duracak, mutfakta ankastre fırın ve bulaşık makinesi nereye yerleşecek? Bu soruların cevabı belli değilse priz planı da yapılamaz." },
      { p: "Kaba tesisat aşamasında yapılan on dakikalık bir konuşma, sonradan yapılacak yarım günlük kırımı bitiriyor. Bu, tesisatta en yüksek getirili on dakika." },

      { h2: "Hat ayrımı: hangi cihaz nereden beslenir?" },
      { p: "İyi bir tesisatta yükler ayrılmıştır. Amaç, bir hatta çıkan arızanın tüm daireyi etkilememesi ve yüksek çekişli cihazların birbirini zorlamamasıdır." },
      { ul: [
        "Aydınlatma hatları: oda gruplarına göre en az 2–3 ayrı hat",
        "Genel prizler: oda gruplarına göre ayrılmış hatlar",
        "Mutfak tezgâh üstü: kendi hattı, tercihen iki ayrı devre",
        "Ankastre fırın: bağımsız hat ve uygun kesit",
        "Çamaşır ve bulaşık makinesi: ayrı hat",
        "Klima: iç ünite başına ayrı hat",
        "Banyo: ayrı hat ve ayrı kaçak akım koruması",
      ] },

      { h2: "Kablo kesiti" },
      {
        table: {
          head: ["Kullanım", "Tipik kesit", "Not"],
          rows: [
            ["Aydınlatma", "1,5 mm²", "Uzun hatlarda 2,5 mm² tercih edilebilir"],
            ["Genel priz", "2,5 mm²", "Standart uygulama"],
            ["Ankastre fırın", "4 mm²", "Cihaz gücüne göre değişir"],
            ["Klima", "2,5 mm²", "Mesafe uzunsa üst kesite çıkılır"],
            ["Daire kolon hattı", "6–10 mm²", "Daire toplam yüküne göre hesaplanır"],
          ],
        },
      },
      { p: "Uzun mesafelerde gerilim düşümü hesaba katılarak bir üst kesite çıkılır. Kesitten tasarruf, tesisatta en yanlış tasarruf kalemidir; kablo maliyetinin toplam içindeki payı düşük, etkisi ise kalıcıdır." },

      { h2: "Priz sayısı: yeterli olan kaç tane?" },
      {
        table: {
          head: ["Mekân", "Önerilen priz", "Konum notu"],
          rows: [
            ["Salon", "8–10", "TV ünitesi arkasında 4'lü grup, kanepe yanlarında ikişer"],
            ["Mutfak", "8–12", "Tezgâh üstü ayrı hat, ankastreler için bağımsız besleme"],
            ["Yatak odası", "5–6", "Yatağın iki yanı, çalışma masası, TV"],
            ["Çocuk odası", "5–6", "Masa ve yatak başı öncelikli"],
            ["Banyo", "1–2", "Sıçrama alanı dışında, kapaklı tip"],
            ["Antre / koridor", "2–3", "Süpürge ve şarj noktası"],
            ["Balkon", "1–2", "Dış mekân tipi, kapaklı"],
          ],
        },
      },
      { p: "Kaba tesisatta on priz eklemenin maliyeti, sonradan tek bir priz eklemenin maliyetinden düşüktür. O yüzden priz sayısında cimri davranmamayı öneriyoruz." },

      { h2: "Zayıf akım: sonradan en pahalıya patlayan kalem" },
      { p: "Data, TV, diafon, kamera ve hoparlör hatları çoğu zaman \"kablosuz var nasılsa\" denilerek atlanıyor. Halbuki boş boru bırakmanın maliyeti neredeyse sıfır; sonradan çekmenin maliyeti ise kırım." },
      { ul: [
        "Her odaya en az bir Cat6 hattı veya boş boru",
        "Modem / router için merkezi bir teknik nokta ve orada priz",
        "Bina girişi ve otopark için kamera boruları",
        "TV ünitesi arkasında ek boş boru (ileride ne gerekeceği bilinmez)",
        "Alçıpan tavanlarda gizli aydınlatma için besleme bırakılması",
      ] },
      { quote: "Boş boru bırakmak, tesisatta yapabileceğiniz en ucuz gelecek yatırımıdır. Kullanılmazsa hiçbir şey kaybetmezsiniz; gerektiğinde ise kırım yapmadan hat çekilir." },

      { h2: "Pano planı" },
      { p: "Pano, hat sayısına göre değil hat sayısı artı yedek modül yerine göre seçilir. En az %25 boş modül yeri bırakılmasını öneriyoruz; ileride klima, elektrikli araç şarjı veya yeni bir hat eklendiğinde pano değiştirmek gerekmez." },
      { p: "Aydınlatma ve priz gruplarının ayrı kaçak akım rölelerine bağlanması, bir kaçakta dairenin tamamen karanlıkta kalmasını önler. Küçük bir maliyet farkıyla belirgin bir konfor kazanılır." },

      { h2: "Kapatmadan önce fotoğraflayın" },
      { p: "Sıva atılmadan önce tüm duvarların fotoğrafını çekin ve saklayın. İleride bir raf takarken, klima montajı yaptırırken veya tadilat sırasında bu fotoğraflar kablo güzergâhını gösterir ve delme kazalarını önler." },
      { p: "Biz her işte bu fotoğrafları çekip müşteriye teslim ediyoruz. Kendi işiniz için de aynısını yapmanızı öneriyoruz; maliyeti yok, faydası yıllarca sürüyor." },
    ],
    faqs: [
      { q: "Elektrik projesi yaptırmalı mıyım?", a: "Ruhsatlı yapılarda proje zaten zorunludur. Tadilat kapsamındaki işlerde ise resmî proje gerekmese bile bir yerleşim krokisi çıkarılması işi iyice kolaylaştırır ve eksikleri önler." },
      { q: "Akıllı ev altyapısı şimdiden bırakılmalı mı?", a: "Kablolu akıllı ev sistemi düşünüyorsanız evet, altyapı şimdi bırakılmalı. Kablosuz sistemler düşünüyorsanız ek kablo gerekmez, ancak anahtar kutularında nötr hattının bulunması önemlidir, birçok akıllı anahtar nötr ister." },
    ],
    related: ["elektrik-tesisati-yenileme-belirtileri", "elektrik-panosu-bakimi", "avize-secim-rehberi"],
  },
];
