// Su kaynağı tarafı: depo dolumu, emişte hava ve kuyu açtırma kararı.

export const suKaynagiPosts = [
  {
    slug: "depoya-su-dolmuyor",
    title: "Depoya su dolmuyor: nereden başlamalı?",
    category: "Bakım",
    published: "2026-08-12",
    reading: 9,
    metaTitle: "Depoya Su Dolmuyor | Şamandıra ve Giriş Hattı",
    metaDesc:
      "Su deposu dolmuyorsa şebeke, şamandıra, giriş filtresi ve vanalar hangi sırayla kontrol edilir? Elektrikli seviye kontrolü ve taşma sorunları.",
    keywords: [
      "depoya su dolmuyor",
      "su deposu şamandıra",
      "seviye şalteri",
      "depo taşıyor",
      "su deposu dolum",
    ],
    excerpt:
      "Depo boş, musluklar susuz. Panik yapmadan önce üç şeye bakmak yeterli: şebekede su var mı, şamandıra çalışıyor mu, giriş hattı açık mı?",
    services: ["su-deposu-temizligi", "hidrofor-pompa-sistemleri", "sihhi-tesisat"],
    intro:
      "Depolu sistemlerde su kesintisi çoğu zaman şebekeden değil, deponun kendi dolum düzeninden kaynaklanır. Şamandıra takılır, filtre tıkanır, bir vana yarı kapalı kalır. Hepsi küçük şeyler; ama depo boşaldığında sonuç aynı: evde su yok ve pompa susuz çalışma riskiyle karşı karşıya.",
    body: [
      {
        p: "Sırayla üç şeye bakın: şebekede su var mı, deponun giriş vanası açık mı, şamandıra veya seviye kontrolü çalışıyor mu? Depo dolum sorunlarının büyük bölümü bu üç adımda çözülür.",
      },
      {
        p: "Depo boşaldıysa ikinci bir konu daha var: pompanın kuru çalışma koruması. Koruma yoksa pompa susuz çalışmış olabilir; su geldiğinde sistemi çalıştırmadan önce pompanın durumu kontrol edilmeli.",
      },

      { h2: "1. Şebekede su var mı?" },
      {
        p: "En basit ve en çok atlanan adım. Bölgesel bir kesinti varsa depo doğal olarak dolmaz. Komşuya sormak veya idarenin duyurularına bakmak birkaç dakika sürer.",
      },
      {
        p: "Kesinti yoksa binanın ana vanasına bakılır. Bir tadilat veya arıza sonrası kapatılıp açılması unutulan ana vanalar, sahada sık karşılaştığımız bir durum.",
      },
      {
        p: "Şebeke basıncının çok düştüğü saatler de dolumu durdurabilir. Bu durumda depo gece saatlerinde dolar, gündüz hiç dolmuyormuş gibi görünür.",
      },

      { h2: "2. Giriş hattı ve vanalar" },
      {
        p: "Deponun girişinde genelde bir vana, çoğu sistemde de bir filtre bulunur. Vananın tam açık olduğu ve filtrenin tıkalı olmadığı doğrulanmalı.",
      },
      {
        ul: [
          "Giriş vanası yarı kapalı bırakılmış olabilir; kolun konumu tam açık olmalı.",
          "Filtre kartuşu tıkandığında dolum gözle görülür ölçüde yavaşlar.",
          "Çekvalf ters takılmışsa su hiç geçmez.",
          "Bağlantı hortumu kıvrılmış veya ezilmiş olabilir.",
          "Sayaç sonrası ara musluk kapalı kalmış olabilir.",
        ],
      },
      {
        p: "Filtre kaynaklı yavaşlama sinsi ilerler: dolum süresi haftalar içinde uzar, kimse fark etmez, sonra bir gün depo yetişemez hâle gelir. O yüzden ilk kurulumda dolum süresini ölçüp not etmek işe yarıyor.",
      },

      { h2: "3. Şamandıra çalışıyor mu?" },
      {
        p: "Mekanik şamandıra, suyla birlikte yükselen bir yüzücü ve ona bağlı bir valften oluşur. Su seviyesi yükseldikçe valf kapanır, düştükçe açılır. Basit ama hareketli bir parça olduğu için takılabilir.",
      },
      {
        table: {
          head: ["Belirti", "Muhtemel neden"],
          rows: [
            ["Depo hiç dolmuyor, su gelmiyor", "Valf kapalı takılmış, kireçlenmiş"],
            ["Depo doluyor ama duruyor, taşıyor", "Valf açık takılmış, yüzücü delinmiş"],
            ["Dolum çok yavaş", "Valf yarı açık, filtre tıkalı"],
            ["Yüzücü su içinde batmış", "Yüzücü su almış, değişmeli"],
            ["Valf sızdırıyor", "Conta yıpranmış"],
          ],
        },
      },
      {
        p: "Yüzücünün su alması çok yaygın bir arıza. Dışarıdan sağlam görünür ama elinize aldığınızda ağırlığından anlaşılır; içinde su varsa yükselemez ve valfi kapatamaz.",
      },

      { h2: "Elektrikli seviye kontrolü" },
      {
        p: "Daha büyük sistemlerde dolum, elektrot veya seviye şalteri ile yönetilir. Kontrol rölesi suyun iletkenliğini ölçer ve giriş vanasını elektrikli olarak açıp kapatır. Bu sistemlerde en sık görülen arıza elektrot uçlarının kireçlenmesidir. Röle suyu göremez hâle gelir ve ya sürekli dolum yapar ya da hiç yapmaz.",
      },
      {
        p: "İkinci sık neden kumanda kablosunun kopması veya nemden etkilenmesidir. Elektrot kabloları depo dışında, kuru ve neme dayanıklı bir kutuda toplanmalıdır.",
      },

      { h2: "Kuyudan depoya dolan sistemler" },
      {
        p: "Depo şebekeden değil kuyudan besleniyorsa, kontrol listesi değişir. Böyle olunca dolumu yapan pompadır ve sorun büyük ihtimalle pompa tarafındadır.",
      },
      {
        ol: [
          "Panoya enerji geliyor mu, sigortalar sağlam mı?",
          "Koruma elemanları atmış mı: termik, faz koruma, kuru çalışma?",
          "Kontaktör çekiyor mu?",
          "Kuyu su seviyesi düşmüş olabilir mi?",
          "Depo seviye elektrodu pompayı durdurmuş olabilir mi?",
          "Çıkış hattında kapalı bir vana var mı?",
        ],
      },
      {
        p: "Bu sistemlerde depo boşaldığında iki risk aynı anda doğar: evde su kalmaması ve pompanın susuz çalışması. kuru çalışma koruması, kuyudan depoya çalışan her sistemde bulunmalı.",
      },

      { h2: "Depo taşıyorsa" },
      {
        p: "Ters yöndeki sorun da aynı mekanizmanın arızasıdır: şamandıra kapanmıyorsa depo dolar ve taşma borusundan boşalmaya başlar. Su israfı sessizce sürer.",
      },
      {
        p: "Taşma borusu tam da bunun için vardır: suyu güvenli bir noktaya yönlendirir ve bodrumun su basmasını önler. Ancak taşmanın kendisi bir arıza işaretidir, normal kabul edilmemelidir.",
      },
      {
        p: "Taşma borusunun ucunun görünür bir yere yönlendirilmesi bu sebeple faydalı. Gözden uzak bir gidere bağlandığında, arıza aylarca fark edilmiyor.",
      },

      { h2: "Dolum süresini ölçmek" },
      {
        p: "Sistem sağlıklıyken deponun ne kadar sürede dolduğunu bir kez ölçün ve not edin. Bu değer, ileride yaşanacak yavaşlamaları fark etmenin en pratik yolu.",
      },
      {
        p: "Ölçüm basit: depo boşken giriş açılır ve dolum süresi tutulur. Aynı ölçüm bir yıl sonra tekrarlandığında süre epeyce uzamışsa, giriş tarafında birikim var demektir.",
      },
      {
        p: "Apartmanlarda bu değerin yönetim tarafından kayıt altına alınması, arıza günlerinde tartışmayı kısaltıyor: sistemin normalde nasıl çalıştığı biliniyor.",
      },

      { h2: "Şebeke basıncı ve dolum saatleri" },
      {
        p: "Bazı bölgelerde şebeke basıncı gün içinde epeyce değişir. Sabah ve akşam yoğunluğunda düşen basınç, deponun o saatlerde hiç dolmamasına yol açabilir. Bu durumda depo gece dolar ve gündüz dolmuyormuş gibi görünür. Ayırt etmek kolay: gece geç saatte deponun seviyesine bakmak yeterli.",
      },
      {
        p: "Kalıcı çözüm, giriş hattının çapını büyütmek veya depo hacmini tüketime göre yeniden değerlendirmek. Gece dolan bir depo, gündüz talebi karşılayacak kadar büyük olmalı.",
      },

      { h2: "Depo hacmi yetiyor mu?" },
      {
        p: "Bazen sorun dolumda değil, hacmin küçük kalmasındadır. Hane halkı büyüdüğünde, bahçe sulaması eklendiğinde veya bir daire daha aynı depodan beslendiğinde mevcut hacim yetmez hâle gelir.",
      },
      {
        p: "Belirtisi tanıdıktır: depo doluyor ama akşam saatlerinde bitiyor. Bu bir arıza değil, kapasite sorunudur ve dolum tarafını kurcalayarak çözülmez.",
      },
      {
        p: "Hacmi büyütürken suyun bekleme süresi de hesaba katılmalı. Gereğinden büyük depoda su uzun süre bekler ve kalitesi düşer; doğru hacim, günlük tüketimle orantılı olandır.",
      },

      { h2: "Kışın donma riski" },
      {
        p: "Malatya kışında dış mekâna veya soğuk bir bodruma yerleştirilmiş depoların giriş hatları donabilir. Donan bir hat, depo dolmuyor şikâyetinin mevsimlik nedenidir.",
      },
      {
        ul: [
          "Dış hatlar yalıtılmalı; gerekiyorsa ısıtıcı kablo kullanılmalı.",
          "Kullanılmayan mevsimlik depolar kış öncesi boşaltılmalı.",
          "Depo odasının havalandırması soğuk hava akımı yaratmamalı.",
          "Şamandıra ve vana gövdeleri de donmaya karşı korunmalı.",
        ],
      },
      {
        p: "Donma şüphesi varsa hat asla alevle ısıtılmamalı. Isıtma yavaş ve kontrollü yapılmalı; ani ısıtma, donmuş bölümün çatlamasına yol açıyor.",
      },

      { h2: "Kontrol sırası" },
      {
        ol: [
          "Şebekede su var mı? Komşuya sorun, ana vanayı kontrol edin.",
          "Deponun giriş vanası tam açık mı?",
          "Giriş filtresi tıkalı mı? Sökün, bakın.",
          "Şamandıra elle hareket ediyor mu? Yüzücü su almış mı?",
          "Elektrikli sistemde elektrotlar temiz mi, kumanda kablosu sağlam mı?",
          "Kuyudan besleniyorsa pano ve koruma elemanlarını kontrol edin.",
          "Donma ihtimali var mı?",
          "Hiçbiri değilse dolum süresini ölçün ve karşılaştırın.",
        ],
      },
      {
        p: "Bu sekiz adım, dolum sorunlarının neredeyse tamamını kapsıyor. İlk dördü alet gerektirmeden yapılabiliyor ve çağrıların büyük bölümü orada kapanıyor.",
      },

      { h2: "Depo boşaldıysa pompayı kontrol edin" },
      {
        p: "Susuz kalan bir pompa, birkaç dakika içinde salmastra hasarı görebilir. Su geldikten sonra sistemi doğrudan çalıştırmak yerine önce pompaya bakmak gerekir.",
      },
      {
        p: "Bakılacaklar: pompa gövdesinde ısınma veya yanık kokusu, salmastradan damlama, çalıştırıldığında ses değişimi ve basıncın eski değerine ulaşıp ulaşmadığı.",
      },
      {
        p: "Kuru çalışma koruması yoksa, bu olay onu takmak için en iyi gerekçe. Koruma elemanının bedeli, bir salmastra değişiminin çok altında kalıyor.",
      },

      { h2: "Depo yerine doğrudan şebeke olur mu?" },
      {
        p: "Şebeke basıncı ve süreklilik yeterliyse depo kullanmadan doğrudan beslenmek mümkündür. Ancak bu, kesinti riskini tamamen kabul etmek anlamına gelir. Ayrıca şebekeden doğrudan emiş yapan bir pompa, komşu abonelerin basıncını düşürebilir ve genelde uygun görülmez. Bu nedenle basınç artırımı gerekiyorsa doğru kurgu depo–hidrofor düzenidir.",
      },
      {
        p: "Kesintinin nadir olduğu yerlerde küçük hacimli bir yedek depo iyi bir orta yol: gündelik kullanımda şebeke doğrudan besler, kesintide devreye girer.",
      },

      { h2: "Kalıcı çözüm: izlenebilirlik" },
      {
        p: "Depo dolum sorunlarının ortak yanı, geç fark edilmeleri. Sisteme küçük bir görünürlük eklemek bu gecikmeyi ortadan kaldırıyor.",
      },
      {
        table: {
          head: ["Eleman", "Ne sağlar"],
          rows: [
            ["Seviye göstergesi", "Depodaki suyu bakmadan görme"],
            ["Alt seviye ikaz lambası", "Depo boşalmadan uyarı"],
            ["Taşma borusu görünür ucu", "Taşmayı hemen fark etme"],
            ["Giriş manometresi", "Şebeke basıncını izleme"],
            ["Sayaç", "Dolum miktarını ölçme"],
          ],
        },
      },
      {
        p: "Bunların hepsi ucuz elemanlar ve bir arada takıldığında sistemi tahmin edilebilir hâle getiriyor. Özellikle ikaz lambası, kesinti dönemlerinde çok işe yarıyor.",
      },

      { h2: "Kesintiye hazırlıklı olmak" },
      {
        p: "Depolu sistemin asıl amacı kesintide susuz kalmamak. Bunun işe yaraması için deponun kesinti başladığında dolu olması gerekir; yani seviyenin düzenli izlenmesi.",
      },
      {
        ul: [
          "Planlı kesinti duyurusu geldiğinde deponun dolu olduğundan emin olun.",
          "Alt seviye ikaz lambası varsa çalıştığını doğrulayın.",
          "Kesinti sırasında pompanın kuru çalışma korumasının devrede olduğundan emin olun.",
          "Uzun kesintilerde tüketimi öncelik sırasına göre planlayın.",
          "Kesinti sonrası ilk suyu bulanık gelebileceği için bir süre akıtın.",
        ],
      },
      {
        p: "Listedeki son kalem çoğu binada atlanıyor: kesinti sonrası şebekede hareketlenen tortu doğrudan depoya giriyor. Girişte bir filtre bulunması, bu tortunun tesisata yayılmasını önlüyor.",
      },

      { h2: "İki depolu sistemlerde" },
      {
        p: "İkiz depo düzeninde dolum sorunları bazen tek depoda görülür. Bunun nedeni genelde depolar arası bağlantı vanasının kapalı kalması ya da dengeleme hattının tıkanmasıdır.",
      },
      {
        p: "Bu sistemlerde her deponun kendi giriş ve seviye kontrolü olabilir; biri arızalandığında diğeri çalışmaya devam ettiği için sorun geç fark edilir. Seviye farkı görülüyorsa vana ve şamandıralar ayrı ayrı kontrol edilmeli.",
      },
      {
        p: "Bakım sonrası vanaların eski konumuna getirilmesi de önemli. Temizlik için kapatılan bir vananın açılması unutulduğunda, bina yarım kapasiteyle çalışmaya devam ediyor.",
      },

      { h2: "Ne zaman usta çağırmalı?" },
      {
        p: "Şamandıra değişimi ve filtre temizliği çoğu kişinin yapabileceği işler. Aşağıdaki durumlarda ise yerinde bakılması gerekir:",
      },
      {
        p: "Elektrikli seviye kontrolünde arıza varsa, kuyudan besleme yapan sistemde pompa devreye girmiyorsa, depo taşması tekrarlıyorsa ya da dolum süresi hiçbir müdahaleye rağmen uzuyorsa sorun tek bir parçadan ibaret değildir.",
      },
      {
        p: "Bu durumlarda sistem bütün olarak değerlendirilir: giriş hattı çapı, şebeke basıncı, depo hacmi ve tüketim birlikte bakılır. Tek parça değiştirerek çözülmeye çalışılan sorunların çoğu buradan çıkıyor.",
      },
    ],
    faqs: [
      {
        q: "Depo dolmuyorsa ilk neye bakmalıyım?",
        a: "Önce şebekede su olup olmadığını doğrulayın; komşuya sormak yeterli. Sonra deponun giriş vanasının tam açık olduğunu ve giriş filtresinin tıkalı olmadığını kontrol edin. Bu üç adım, dolum sorunlarının büyük bölümünü çözer ve hiçbiri alet gerektirmez.",
      },
      {
        q: "Şamandıranın bozuk olduğunu nasıl anlarım?",
        a: "Yüzücüyü elinizle yukarı kaldırın: su kesilmiyorsa valf kapanmıyordur. Aşağı indirdiğinizde su gelmiyorsa valf açılmıyordur. Yüzücü beklenenden ağırsa içine su almıştır ve değişmelidir. Kireçlenmiş valfler de sık görülür.",
      },
      {
        q: "Depo neden taşıyor?",
        a: "Şamandıra veya seviye kontrolü kapanmıyordur. Taşma borusu suyu güvenli bir noktaya yönlendirdiği için su baskını olmaz, ama israf sessizce sürer. Taşma bir koruma mekanizmasıdır; devreye girmişse arıza zaten başlamıştır ve giderilmelidir.",
      },
      {
        q: "Dolum çok yavaşladı, sebebi ne olabilir?",
        a: "En yaygın neden giriş filtresinin tıkanmasıdır; birikim yavaş olduğu için fark edilmez. Şebeke basıncının düşmesi, vananın yarı kapalı kalması ve şamandıra valfinin kısmen kireçlenmesi diğer nedenlerdir. Kurulumda ölçülen dolum süresi karşılaştırma için değerlidir.",
      },
      {
        q: "Depo boşaldıysa pompaya zarar gelir mi?",
        a: "Kuru çalışma koruması yoksa gelebilir. Susuz çalışan pompada salmastra birkaç dakika içinde zarar görür. Su geldikten sonra sistemi doğrudan çalıştırmadan önce pompada ısınma, koku, damlama ve ses değişimi kontrol edilmelidir.",
      },
      {
        q: "Elektrikli seviye kontrolü neden arıza yapar?",
        a: "En sık neden elektrot uçlarının kireçlenmesidir; röle suyun varlığını ölçemez hâle gelir. İkinci neden kumanda kablosunun kopması veya nemden etkilenmesidir. Elektrot kabloları depo dışında, kuru ve neme dayanıklı bir kutuda toplanmalıdır.",
      },
      {
        q: "Kışın depo hattı donarsa ne yapmalı?",
        a: "Kesinlikle alevle ısıtmayın. Isıtma yavaş ve kontrollü yapılmalıdır; ani ısıtma donmuş bölümün çatlamasına yol açar. Kalıcı çözüm, dış hatların yalıtılması ve gerekiyorsa ısıtıcı kablo kullanılmasıdır. Mevsimlik depolar kış öncesi boşaltılmalıdır.",
      },
      {
        q: "Şebeke girişindeki filtre dolumu yavaşlatır mı?",
        a: "Yavaşlatır. Girişteki tortu filtresi zamanla dolar ve ilk anda fark edilmeyen bir debi kaybı yaratır; depo eskiden bir saatte dolarken artık yarısına ancak gelir. Filtre kabı şeffafsa gözle bakmak yeter. Değilse kartuş sökülüp temizlenir, sonra dolum süresi yeniden ölçülür.",
      },
      {
        q: "Depo girişine ayrı vana koymanın faydası ne?",
        a: "Arıza aramayı kısaltır. Kolay ulaşılan bir küresel vana varsa hattı depoya çıkmadan kapatıp açabilir, dolum testini tek başınıza yapabilirsiniz. Aynı vana temizlik sırasında depoyu şebekeden ayırmak için de kullanılır.",
      },
      {
        q: "Deponun dolduğunu bakmadan nasıl anlarım?",
        a: "Seviye göstergesi ve alt seviye ikaz lambası bu işi görür. İkisi de ucuz elemanlardır ve depo boşalmadan önce uyarı verir. Kesinti dönemlerinde özellikle işe yarar; ayrıca taşma borusunun ucunun görünür bir yere yönlendirilmesi de arızayı erken gösterir.",
      },
    ],
    related: ["su-deposu-hidrofor-birlikte", "su-deposu-secimi", "kuru-calisma-korumasi"],
  },

  {
    slug: "pompa-hava-yapiyor",
    title: "Pompa hava yapıyor: emiş hattına hava nereden girer?",
    category: "Pompa",
    published: "2026-07-19",
    reading: 9,
    metaTitle: "Pompa Hava Yapıyor | Emiş Hattında Hava Kaçağı",
    metaDesc:
      "Kesikli akış, gürültü ve düşen basınç: emiş hattına hava girmesinin nedenleri, test yöntemleri ve kalıcı çözümler. Dip klepe ve emiş yüksekliği.",
    keywords: [
      "pompa hava yapıyor",
      "emiş hattı hava kaçağı",
      "dip klepe",
      "pompa su çekmiyor",
      "emiş yüksekliği",
    ],
    excerpt:
      "Musluktan kesik kesik, beyaz köpüklü su geliyorsa pompa suyla birlikte hava da çekiyordur. Hava, tesisatın en zor bulunan ama en ucuz çözülen sorunudur.",
    services: ["hidrofor-tamiri", "hidrofor-pompa-sistemleri", "mekanik-tesisat"],
    intro:
      "Bir pompa suyu itmekte iyidir, çekmekte ise sınırlıdır. Emiş tarafındaki en küçük açıklık bile suyun yerine hava almasına yol açar. İşin can sıkıcı yanı şu: emiş hattındaki bir kaçak dışarıya su sızdırmadığı için gözle görülmez; sadece belirtileriyle kendini gösterir.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "Pompa hava yapıyorsa kaçak, pompanın emiş tarafındadır: dışarı su sızdırmaz, içeri hava çeker. En sık noktalar: rakor ve dişli bağlantılar, pislik tutucu contası, dip klepe (ayak vanası) ve pompa salmastrası. İkinci büyük neden emiş yüksekliğinin veya hat direncinin sınırı zorlamasıdır. Öyle bir durumda hiçbir yerde kaçak olmadan da pompa hava yapar; suyun içindeki çözünmüş hava basınç düşünce serbest kalır.",
      },

      { h2: "Belirtiler" },
      {
        ul: [
          "Musluktan kesik kesik, tıslayarak akan su.",
          "Bardağa alındığında beyaz görünen, birkaç saniyede berraklaşan su.",
          "Pompanın devir devir yükselip düşen sesi.",
          "Manometrede sürekli oynayan basınç.",
          "Pompanın uzun süre çalışıp hedef basınca ulaşamaması.",
          "İlk çalıştırmada su gelmesi, birkaç dakika sonra kesilmesi.",
        ],
      },
      {
        p: "Bu belirtiler tesisat arızalarıyla karıştırılabilir; ama ortak nokta hepsinin pompa çalışırken ortaya çıkması ve pompa durunca kaybolmasıdır. Bu, sorunun emiş tarafında olduğunun en güçlü işareti.",
      },

      { h2: "Hava nereden girer?" },
      {
        table: {
          head: ["Nokta", "Neden", "Belirti"],
          rows: [
            ["Rakor ve dişli bağlantılar", "Conta yorulmuş, teflon eksik", "Sürekli hava, başlangıçta hafif"],
            ["Pislik tutucu kapağı", "Conta ezilmiş veya kaçık oturmuş", "Temizlik sonrası başlayan hava"],
            ["Dip klepe (ayak vanası)", "Tutmuyor, hat boşalıyor", "Duruş sonrası ilk çalışmada hava"],
            ["Pompa salmastrası", "Yıpranmış", "Pompa gövdesinde damlama + hava"],
            ["Emiş hattı çatlağı", "PVC/PE hatta ince çatlak", "Zamanla artan hava"],
            ["Depo emiş ağzı", "Su seviyesi ağzın altına düşüyor", "Depo azalınca başlayan hava"],
            ["Vana mili", "Salmastrası kurumuş", "Vana çevrildiğinde değişen ses"],
          ],
        },
      },
      {
        p: "Tablodaki üçüncü satır en karakteristik olanı: dip klepe tutmadığında pompa durduğu sürece emiş hattı boşalır ve her çalıştırmada pompa önce havayı basmak zorunda kalır.",
      },

      { h2: "Emiş yüksekliğinin sınırı" },
      {
        p: "Yüzey pompaları suyu emerken atmosfer basıncından yararlanır ve bu fiziksel bir sınır getirir. Pratikte emiş yüksekliği yaklaşık yedi–sekiz metreyle sınırlıdır; hat direnci ve sıcaklık bu sınırı daha da düşürür.",
      },
      {
        p: "Sınıra yaklaşan sistemlerde pompa \"hava yapıyor\" gibi davranır. Dışarıdan hava girmiyordur; suyun içindeki çözünmüş gazlar düşük basınçta serbest kalır ve aynı sonucu doğurur.",
      },
      {
        p: "Bu durumun tek kalıcı çözümü emiş yüksekliğini azaltmaktır: pompayı su kaynağına yaklaştırmak veya dalgıç tipi bir çözüme geçmek. Bağlantıları kaç kez sıksanız da sonuç değişmiyor.",
      },

      { h2: "Emiş hattı nasıl olmalı?" },
      {
        ol: [
          "Çap, basma hattından bir kademe büyük seçilmeli.",
          "Hat mümkün olan en kısa güzergâhta ilerlemeli.",
          "Dirsek sayısı en aza indirilmeli.",
          "Hat, pompaya doğru sürekli yükselen eğimde olmalı; hava cebi oluşmamalı.",
          "Yatay bölümlerde çukur ve tepe yapılmamalı.",
          "Bağlantılarda uygun conta ve sızdırmazlık malzemesi kullanılmalı.",
          "Emiş ağzı, depo tabanından birkaç santim yukarıda konumlanmalı.",
        ],
      },
      {
        p: "Dördüncü madde en sık ihlal edileni. Hattın ortasında oluşan bir tepe noktası havayı hapseder; pompa ne kadar çalışırsa çalışsın o hava dışarı çıkmaz ve akış düzensiz kalır.",
      },

      { h2: "Dip klepe ve çekvalf" },
      {
        p: "Dip klepe, emiş hattının ucundaki tek yönlü vanadır. Pompa durduğunda suyun geri kaçmasını engeller ve hattı dolu tutar. Tutmadığında hat boşalır, pompa her çalıştırmada kendini yeniden doldurmak zorunda kalır.",
      },
      {
        p: "Kum, tortu ve kireç bu vananın sızdırmazlık yüzeyine oturur. Kuyularda ve tortulu depolarda ömrü iyice kısalır; düzenli kontrol gerektiren bir parçadır.",
      },
      {
        quote:
          "Sabah ilk açılışta hava yapıp sonra düzelen bir sistemde ilk şüpheli her zaman dip klepedir.",
      },
      {
        p: "Klepe değişimi sırasında süzgeç kısmının da temizlenmesi gerekir. Tıkalı bir süzgeç, klepe sağlam olsa bile emişi zorlaştırarak benzer belirtiler yaratıyor.",
      },

      { h2: "Pompayı doldurmak (priming)" },
      {
        p: "Kendinden emişli olmayan pompalar, çalışmaya başlamadan önce gövdesinin ve emiş hattının suyla dolu olmasını ister. Boş çalıştırılan pompa suyu çekemez ve salmastra kuru sürtünmeyle zarar görür. Doldurma işlemi, pompa üzerindeki dolum tapasından yapılır: hava tamamen çıkana kadar su eklenir, tapa kapatılır ve pompa çalıştırılır.",
      },
      {
        p: "Doldurmaya rağmen su gelmiyorsa ya dip klepe tutmuyordur ya emiş hattında hava kaçağı vardır. İkisi de aynı yere işaret ediyor: emiş tarafı.",
      },

      { h2: "Kendinden emişli pompalar" },
      {
        p: "Kendinden emişli (self-priming) pompalar, gövdelerinde bir miktar su tuttukları için hattaki havayı kendileri tahliye edebilir. Bu, ilk çalıştırmayı kolaylaştırır ama hava kaçağını çözmez.",
      },
      {
        p: "Yani bu tip bir pompa, sızdıran bir bağlantıya rağmen çalışmaya devam eder; sorun görünmez hâle gelir ama ortadan kalkmaz. Verim düşer, motor daha uzun çalışır ve enerji tüketimi artar.",
      },
      {
        p: "Belirtiler hafiflediği için arıza geç fark ediliyor. Bu pompalarda da emiş hattı, sızdırmazlık açısından aynı dikkatle kurulmalı.",
      },

      { h2: "Kavitasyonla karıştırmayın" },
      {
        p: "Kavitasyon da emişle ilgilidir ama farklı bir olaydır: emiş basıncı çok düştüğünde su içinde buhar kabarcıkları oluşur ve çark üzerinde patlar. Sesi çakıl taşı çekiliyormuş gibidir.",
      },
      {
        p: "Hava kaçağında ise ses daha çok gurultu ve düzensiz akış şeklindedir. Ayrım önemli: kavitasyon çarkı fiziksel olarak aşındırır ve müdahale ertelenmemelidir.",
      },
      {
        p: "İki durumun çözümü de büyük ölçüde aynı yerde buluşuyor: emiş hattını rahatlatmak. Çap büyütmek, hattı kısaltmak ve süzgeci temizlemek her ikisini de iyileştiriyor.",
      },

      { h2: "Pislik tutucu ve süzgeçler" },
      {
        p: "Emiş hattındaki pislik tutucu, pompayı korumak için vardır; ama tıkandığında tam tersi etkiyi yapar. Akış zorlanır, emiş basıncı düşer ve sistem hava yapıyormuş gibi davranır. Bu parça temizlik sonrası da sorun kaynağı olabiliyor: kapağı kaçık oturduğunda veya contası ezildiğinde içeri hava çeker. Temizlikten hemen sonra başlayan hava şikâyetlerinin klasik nedeni budur.",
      },
      {
        p: "Kapak sıkılırken conta yuvasının temiz olduğundan emin olun ve contayı zorlanmış görüyorsanız yenisiyle değiştirin. Birkaç liralık bir parça, günlerce sürebilecek bir arıza aramasını önlüyor.",
      },

      { h2: "Salmastradan gelen hava" },
      {
        p: "Pompanın mil salmastrası yıprandığında iki yönlü çalışır: durduğunda dışarı damlar, çalışırken içeri hava çeker. O nedenle gövde altında ıslaklık varsa hava sorununun kaynağı orada olabilir.",
      },
      {
        p: "Mekanik salmastralar tamir edilmez, değiştirilir. Değişim sırasında milin yüzeyi de kontrol edilmeli; çizik bir mil, yeni salmastrayı kısa sürede bitiriyor.",
      },
      {
        p: "Salmastra ömrünü en çok kısaltan şey kuru çalışmadır. salmastra değişiminde kuru çalışma korumasının varlığı da gözden geçirilmeli; yoksa aynı arıza tekrar eder.",
      },

      { h2: "Test yöntemleri" },
      {
        p: "Emiş kaçağı gözle görülmediği için test gerekir. Sahada kullandığımız pratik yöntemler:",
      },
      {
        ul: [
          "Sabunlu su: bağlantılara sürülür; pompa çalışırken içeri çekilen hava sabun tabakasında hareket yaratır.",
          "Vakum ölçümü: emiş tarafına vakummetre takılır, sınır değere yaklaşan bir vakum hat direncinin yüksek olduğunu gösterir.",
          "Basınçlandırma testi: emiş hattı izole edilip düşük basınçla doldurulur, basınç düşüyorsa kaçak vardır.",
          "Gözlem: pompa çalışırken bağlantıların birer birer sıkılması, sesin değiştiği noktayı gösterir.",
        ],
      },
      {
        p: "Basınçlandırma testi en kesin sonucu verir; çünkü emiş hattı normalde vakum altında olduğu için kaçak dışarı su vermez, ancak basınç altında verir.",
      },

      { h2: "Yeni kurulumda emiş hattı planı" },
      {
        p: "Hava sorunlarının büyük bölümü işletmede değil, kurulum aşamasında doğuyor. Emiş hattı planlanırken alınan kararlar, sistemin sonraki yıllarını belirliyor.",
      },
      {
        ol: [
          "Pompanın konumu, su kaynağına mümkün olan en yakın noktaya alınır.",
          "Emiş yüksekliği hesaplanır ve sınıra pay bırakılır.",
          "Çap bir kademe büyük seçilir, hat kısa tutulur.",
          "Güzergâh pompaya doğru sürekli yükselir; tepe noktası bırakılmaz.",
          "Dip klepe ve süzgeç erişilebilir bir konuma yerleştirilir.",
          "Bağlantılarda uygun conta kullanılır, gereksiz rakor sayısından kaçınılır.",
          "Devreye alırken vakum ölçümü yapılıp kaydedilir.",
        ],
      },
      {
        p: "Şu sonuncusu ileride çok işe yarıyor: sistem sağlıklıyken ölçülen vakum değeri, yıllar sonra bir sorun çıktığında karşılaştırma noktası oluyor.",
      },

      { h2: "Depolu sistemlerde emiş kotu" },
      {
        p: "Depodan emiş yapan sistemlerde, su seviyesi emiş ağzının altına düştüğünde pompa hava çeker. Belirtisi çok tipiktir: depo dolduğunda düzelen, azaldığında başlayan hava.",
      },
      {
        p: "Emiş ağzının konumu tabandan birkaç santim yukarıda olmalı; hem tortuyu çekmemek hem hava çekmemek için bu denge önemlidir.",
      },
      {
        p: "Kalıcı çözüm olarak seviye kontrolü kullanılır: su belirlenen kotun altına indiğinde pompa durur. Böylece hem hava sorunu hem kuru çalışma riski aynı anda ortadan kalkar.",
      },

      { h2: "Sulama sistemlerinde hava" },
      {
        p: "Sulama hatlarında hava yalnızca pompadan gelmez; hat boşaldığında da içeri dolar. Program başladığında bu hava yüksek hızla ilerler ve hat sonunda basınç darbesi yaratır. Bunu önlemek için hava tahliye vanaları kullanılır. Hattın yüksek noktalarına konan bu vanalar, dolum sırasında havayı dışarı atar ve boşalma sırasında vakum oluşmasını engeller.",
      },
      {
        p: "Vakum kırıcı olmayan hatlarda kapanış anında laterallere toprak çekilebiliyor; damlatıcı tıkanmalarının bir bölümü doğrudan bu nedenden kaynaklanıyor.",
      },

      { h2: "Kalıcı çözüm: pompayı suya yaklaştırmak" },
      {
        p: "Emişte sürekli sorun yaşanan sistemlerde en sağlam çözüm, pompanın konumunu değiştirmektir. Pompa su seviyesinin altına alınırsa emiş yapmak zorunda kalmaz; su ona kendi basıncıyla gelir.",
      },
      {
        p: "Bu düzenlemede pompa artık \"emmez\", sadece basar. Hava kaçağı riski büyük ölçüde ortadan kalkar, gürültü azalır ve verim artar. Yer değişikliği mümkün değilse ikinci en iyi seçenek emiş hattını kısaltmak ve çapı bir kademe büyütmektir; dirsek sayısını azaltmak da aynı kapıya çıkar.",
      },
      {
        p: "Yer koşulları buna izin vermiyorsa dalgıç tipi pompa alternatifi değerlendirilir. Kuyularda zaten standart olan bu çözüm, derin depolarda da uygulanabiliyor.",
      },

      { h2: "Hava yapan sistemde ne yapılmamalı?" },
      {
        p: "Belirtiler ortaya çıktığında yapılan bazı müdahaleler sorunu büyütüyor. En yaygın üçü şunlar:",
      },
      {
        ul: [
          "Pompayı su gelene kadar çalışır durumda bırakmak: susuz çalışan pompa salmastrasını yakar.",
          "Emiş vanasını kısarak akışı düzeltmeye çalışmak: emiş basıncını daha da düşürür, durumu kötüleştirir.",
          "Basınç şalterini yükseltmek: pompa hedefe hiç ulaşamaz ve termikten atana kadar çalışır.",
        ],
      },
      {
        p: "Doğru refleks, pompayı durdurup emiş tarafını kontrol etmek. Hava sorununda çalıştırmaya devam etmek, birkaç dakika içinde onarım maliyetini büyütüyor.",
      },

      { h2: "Ne zaman usta çağırmalı?" },
      {
        p: "Bağlantı sıkma, dolum yapma ve süzgeç temizliği çoğu kullanıcının yapabileceği işler. Aşağıdaki durumlarda ise sistem bütün olarak değerlendirilmeli:",
      },
      {
        p: "Bağlantılar sıkıldığı hâlde hava devam ediyorsa, pompa hedef basınca hiç ulaşamıyorsa, gövdeden damlama başlamışsa veya çakıl sesi duyuluyorsa mesele tek bir contadan ibaret değildir.",
      },
      {
        p: "Bu durumlarda emiş yüksekliği, hat çapı, güzergâh ve pompa seçimi birlikte gözden geçirilir. Sahada gördüğümüz kalıcı hava sorunlarının çoğu, kurulum aşamasında verilmiş bir karardan kaynaklanıyor.",
      },
    ],
    faqs: [
      {
        q: "Pompanın hava yaptığını nasıl anlarım?",
        a: "Musluktan kesik kesik ve tıslayarak akan su, bardakta beyaz görünüp saniyeler içinde berraklaşan su, pompanın devir devir değişen sesi ve manometrede sürekli oynayan basınç tipik belirtilerdir. Belirtiler pompa çalışırken çıkıp durunca kayboluyorsa sorun emiş tarafındadır.",
      },
      {
        q: "Emiş hattındaki kaçak neden su sızdırmaz?",
        a: "Emiş hattı pompa çalışırken vakum altındadır; yani içerideki basınç dışarıdan düşüktür. Bu yüzden açıklıktan su dışarı çıkmaz, hava içeri girer. Kaçağı bulmak için hattın basınçlandırılması gerekir; ancak o zaman dışarı su verir.",
      },
      {
        q: "Dip klepe nedir, neden bozulur?",
        a: "Emiş hattının ucundaki tek yönlü vanadır; pompa durduğunda suyun geri kaçmasını engeller. Kum, tortu ve kireç sızdırmazlık yüzeyine oturduğunda tutmaz hâle gelir. Sabah ilk çalıştırmada hava yapıp sonra düzelen sistemlerde ilk şüpheli budur.",
      },
      {
        q: "Pompa ne kadar yüksekten su emebilir?",
        a: "Yüzey pompalarında pratik sınır yaklaşık yedi–sekiz metredir; hat direnci, dirsek sayısı ve su sıcaklığı bu sınırı düşürür. Sınıra yaklaşan sistemlerde dışarıdan hava girmese bile suyun içindeki çözünmüş gazlar serbest kalarak aynı belirtileri yaratır.",
      },
      {
        q: "Pompayı doldurmama rağmen su gelmiyor, neden?",
        a: "İki ihtimal var: dip klepe tutmuyordur ve doldurduğunuz su geri kaçmıştır ya da emiş hattında hava kaçağı vardır. Üçüncü ihtimal, emiş süzgecinin tıkalı olmasıdır. Üçü de emiş tarafında olduğu için kontrol oradan başlamalıdır.",
      },
      {
        q: "Depo azalınca hava başlıyor, sebebi ne?",
        a: "Su seviyesi emiş ağzının altına düşüyordur. Emiş ağzı depo tabanından birkaç santim yukarıda olmalıdır: daha aşağıda tortu çeker, daha yukarıda erken hava yapar. Kalıcı çözüm, seviye kontrolüyle pompayı belirlenen kotun altında durdurmaktır.",
      },
      {
        q: "Hava yapan pompa zarar görür mü?",
        a: "Evet. Su hem soğutucu hem yağlayıcı olduğu için hava çeken pompada salmastra ısınır ve aşınır. Uzun süren durumlarda çark ve gövde de etkilenir. Ayrıca sürekli çalışıp hedef basınca ulaşamayan motor ısınır ve termikten atabilir.",
      },
    ],
    related: ["hidrofor-ses-ve-titresim", "kuru-calisma-korumasi", "hidrofor-tank-havasi-ayari"],
  },

  {
    slug: "kuyu-actirmadan-once",
    title: "Kuyu açtırmadan önce bilinmesi gerekenler",
    category: "Pompa",
    published: "2026-07-18",
    reading: 10,
    metaTitle: "Kuyu Açtırmadan Önce | İzin, Yer Seçimi ve Sondaj",
    metaDesc:
      "Kuyu açtırma kararında izin süreci, yer seçimi, sondaj, filtre borusu, kuyu geliştirme ve debi testi. Pompa seçimi neden sonra yapılmalı?",
    keywords: [
      "kuyu açtırma",
      "sondaj kuyusu",
      "kuyu ruhsatı",
      "kuyu logu",
      "kuyu debisi",
    ],
    excerpt:
      "Kuyu, sonradan düzeltilmesi en zor yatırımlardan biri. Doğru kararların neredeyse tamamı sondaj başlamadan önce veriliyor.",
    services: ["tarimsal-sulama-sistemleri", "hidrofor-pompa-sistemleri", "kayisi-bahcesi-sulama"],
    intro:
      "Bir kuyu açıldıktan sonra yeri değişmez, derinliği kolay kolay artmaz, filtre borusunun konumu düzeltilemez. Bunun için kuyu işinde asıl iş sondajda değil, sondaj öncesindeki kararlardadır. Bu yazıda o kararları ve sonradan pişmanlık yaratan atlamaları anlatıyoruz.",
    body: [
      { h2: "Sondajdan önce dört karar" },
      {
        p: "Kuyu açtırmadan önce dört şey netleşmelidir: gerekli izinler, kuyunun yeri, hedeflenen su ihtiyacı ve sondaj sonrası yapılacak testler. Pompa seçimi bu listenin en sonunda gelir; kuyunun ne verdiği bilinmeden pompa alınmaz. Yeraltı suyu kullanımı izne tabidir. İzinsiz açılan kuyular yasal sorun yaratabildiği gibi, belge olmadığı için elektrik aboneliğinden tarımsal desteklere kadar her aşamada engelle karşılaşır. Süreç ve gerekli belgeler için bağlı olduğunuz idareye başvurmak ilk adımdır.",
      },

      { h2: "İzin süreci" },
      {
        p: "İzin başvurusunda genelde arazinin tapu bilgileri, kullanım amacı (sulama, kullanma suyu, ticari) ve planlanan çekim miktarı istenir. Amaç, bölgedeki yeraltı su rezervinin kontrolsüz tüketilmesini önlemektir.",
      },
      {
        p: "Bölgeye göre kısıtlamalar farklıdır. Bazı havzalarda yeni kuyu açımı sınırlanmış olabilir; bu bilgi ancak yetkili idareden öğrenilir. Sondaj firmasının sözüne değil, resmî yanıta göre hareket edilmeli.",
      },
      {
        p: "İzin süreci zaman alabildiği için, sulama sezonuna yetiştirme planı buna göre yapılmalı. Sezon başlamadan hemen önce başlatılan süreçler çoğunlukla o yıla yetişmiyor.",
      },

      { h2: "Yer seçimi" },
      {
        p: "Kuyunun yeri hem su verimini hem işletme kolaylığını belirler. Karar verirken bakılan başlıklar:",
      },
      {
        ul: [
          "Kirletici kaynaklara mesafe: foseptik, gübre ve yakıt depoları, hayvan barınakları.",
          "Komşu kuyulara mesafe: çok yakın kuyular birbirinin verimini düşürür.",
          "Sondaj makinesinin ve sonraki bakım araçlarının erişebileceği bir konum.",
          "Elektrik hattına ve pano konumuna yakınlık.",
          "Sulanacak alana göre konum; uzun hat, gereksiz basınç kaybı demektir.",
          "Arazi eğimi ve sel/su birikme riski taşımayan bir kot.",
        ],
      },
      {
        p: "Erişim maddesi sonradan çok pahalıya mal oluyor: bakım gerektiğinde vinç yanaşamayan bir kuyu, her müdahalede ek maliyet ve zaman kaybı yaratıyor.",
      },

      { h2: "Bölge verisi toplamak" },
      {
        p: "En değerli bilgi kaynağı komşu kuyulardır. Yakındaki kuyuların derinliği, su seviyesi, verdiği debi ve suyun kalitesi, sizin kuyunuz için gerçekçi bir beklenti oluşturur.",
      },
      {
        p: "Sorulacak sorular basit: kaç metrede su bulundu, kaç metreye inildi, yaz ortasında seviye ne kadar düşüyor, pompa hangi kota indirildi, su kumlu mu?",
      },
      {
        p: "Bu bilgiler hem derinlik tahminini hem bütçeyi netleştiriyor. Bölgede kuyu yoksa ya da veriler çelişkiliyse, jeolojik değerlendirme yaptırmak isabet oranını artırıyor.",
      },

      { h2: "Sondaj: neye dikkat edilir?" },
      {
        p: "Sondaj sırasında geçilen zemin katmanları kaydedilmelidir. Bu kayıt, kuyunun ileriki yıllardaki her kararında kullanılacak temel belgedir.",
      },
      {
        table: {
          head: ["Aşama", "Ne yapılır", "Neden önemli"],
          rows: [
            ["Delme", "Zemin katmanları geçilir", "Su taşıyan katman burada belirlenir"],
            ["Loglama", "Geçilen katmanlar kaydedilir", "Filtre borusunun yeri buna göre konur"],
            ["Kaplama borusu", "Kuyu cidarı desteklenir", "Göçük ve kirlenme önlenir"],
            ["Filtre borusu", "Su alınacak kotlara yerleştirilir", "Su verimi ve kum kontrolü"],
            ["Çakıl zarfı", "Filtre çevresine serilir", "İnce taneleri tutar"],
            ["Geliştirme", "İnce malzeme dışarı alınır", "Temiz su ve yüksek verim"],
            ["Debi testi", "Kuyunun verimi ölçülür", "Pompa seçiminin temeli"],
          ],
        },
      },
      {
        p: "Bu yedi aşamanın her biri kuyunun ömrünü etkiler; ama sonradan telafisi en zor olanı filtre borusunun konumudur. Yanlış kotta yerleştirilen filtre, kuyunun potansiyelini kalıcı olarak düşürür.",
      },

      { h2: "Kuyu geliştirme neden atlanmamalı?" },
      {
        p: "Sondajdan sonra filtre çevresinde ince malzeme kalır. Geliştirme işlemi bu malzemeyi kontrollü biçimde dışarı alır. Doğru yapıldığında kuyu temiz su verir ve verimi artar. Atlandığında ya da yetersiz yapıldığında ise kum yıllarca gelmeye devam eder. Pompa çarkı aşınır, damlatıcılar tıkanır, armatürler bozulur; her yıl ödenen sessiz bir fatura oluşur.",
      },
      {
        p: "Geliştirme sonrası suyun berraklaşması gözle takip edilebilir. Teslim alırken bu aşamanın yapıldığını ve suyun ne kadar sürede berraklaştığını görmek doğal bir talep.",
      },

      { h2: "Debi testi: en kritik ölçüm" },
      {
        p: "Kuyunun saatte ne kadar su verebildiği, tüm sistemin temelidir. Test sırasında kuyudan kontrollü şekilde su çekilir ve dinamik su seviyesinin nasıl düştüğü izlenir.",
      },
      {
        p: "Bu testten iki değer çıkar: güvenli çekim debisi ve dinamik su seviyesi. İlki sulama planını, ikincisi pompanın hangi kota indirileceğini belirler.",
      },
      {
        p: "Test yapılmadan pompa seçildiğinde iki hata mümkün: pompa kuyunun verebileceğinden fazlasını çeker ve kuyu boşalır; ya da gereğinden küçük seçilir ve kapasite boşa gider. İkisi de sonradan pahalıya düzeliyor.",
      },

      { h2: "Kuyu logunu saklayın" },
      {
        p: "Kuyu logu; hangi derinlikte hangi zeminin geçildiğini, filtre borusunun konumunu ve statik su seviyesini gösteren kayıttır. Kuyunun kimlik belgesi gibidir.",
      },
      {
        ul: [
          "Pompanın hangi kota indirileceği bu belgeyle belirlenir.",
          "İleride verim düştüğünde neyin değiştiği log üzerinden yorumlanır.",
          "Kum sorunu çıktığında filtre konumu buradan kontrol edilir.",
          "Kuyu temizliği ve geliştirme planı log ile yapılır.",
          "Arazi satışında kuyunun değerini belgeleyen dokümandır.",
        ],
      },
      {
        p: "Log kaybolduğunda her karar tahmine dönüşüyor. Bir kopyasını dijital olarak saklamak, kâğıdın yıllar içinde kaybolma ihtimaline karşı basit bir önlem.",
      },

      { h2: "Pompa en son seçilir" },
      {
        p: "Kuyunun debisi ve dinamik seviyesi bilinmeden pompa seçilemez. Seçim; çekilecek debi, basma yüksekliği ve hat kayıpları hesaplanarak yapılır.",
      },
      {
        p: "Aynı hesap kablo kesitini ve pano ekipmanını da belirler. elektrik altyapısı, pompa kararından sonra planlanır; önce çekilen bir kablo sıklıkla yetersiz kalır.",
      },
      {
        p: "Pompayla birlikte planlanması gereken elemanlar: kuru çalışma koruması, faz koruma rölesi, emniyet halatı, kablo kelepçeleri ve kuyu ağzı sızdırmaz kapağı. Hepsi küçük kalemler ama sistemin ömrünü belirliyorlar.",
      },

      { h2: "Kuyu ağzı ve saha düzeni" },
      {
        p: "Sondaj bittiğinde iş bitmiş sayılmaz. Kuyu ağzının nasıl bırakıldığı, kuyunun uzun vadeli sağlığını etkiler.",
      },
      {
        ul: [
          "Kuyu ağzı zemin seviyesinin üzerinde bitirilmeli; yüzey suyu içeri akmamalı.",
          "Sızdırmaz ve kilitlenebilir bir kapak takılmalı.",
          "Çevresine beton bir bilezik dökülerek yüzey suyunun sızması engellenmeli.",
          "Pano ve elektrik bağlantıları kuyu ağzına yakın ama korunaklı konumlanmalı.",
          "Çıkış hattında sayaç ve manometre için yer bırakılmalı.",
        ],
      },
      {
        p: "Yüzey suyunun kuyuya sızması, mikrobiyolojik kirlenmenin bir numaralı yolu. Beton bilezik ve yükseltilmiş ağız, maliyeti çok düşük ama etkisi kalıcı iki önlem.",
      },

      { h2: "Su analizi" },
      {
        p: "Kuyu suyunun ne için kullanılacağı analiz ihtiyacını belirler. Sulama için tuzluluk ve sertlik, içme–kullanma için mikrobiyolojik ve kimyasal analiz gerekir. Analiz sonucu yalnızca kullanım kararını değil, sistem seçimini de etkiler: filtre tipi, gübreleme programı ve gerekiyorsa arıtma çözümü bu sonuca göre planlanır.",
      },
      {
        p: "Sığ kuyularda yüzey sularının karışma ihtimali nedeniyle analizin tekrarlanması gerekir. Tek seferlik bir sonuç, özellikle yağışlı dönemlerden sonra geçerliliğini kaybedebiliyor.",
      },

      { h2: "Maliyeti belirleyen kalemler" },
      {
        table: {
          head: ["Kalem", "Etkisi"],
          rows: [
            ["Derinlik", "Metre başına sondaj bedelini belirler"],
            ["Zemin yapısı", "Sert formasyon ilerlemeyi yavaşlatır"],
            ["Kuyu çapı", "Boru ve çakıl miktarını değiştirir"],
            ["Kaplama borusu cinsi", "Ömür ve maliyet dengesi"],
            ["Erişim", "Makinenin sahaya girişi ve kurulum süresi"],
            ["Geliştirme ve test", "Atlanmamalı; sonraki yıllara yansır"],
            ["Elektrik altyapısı", "Hat uzunluğu ve pano ekipmanı"],
          ],
        },
      },
      {
        p: "Teklifleri karşılaştırırken kalem kalem bakmak şart. Bir teklifte geliştirme ve debi testi varken diğerinde yoksa, aradaki fark indirim değil eksik kapsamdır.",
      },

      { h2: "Teslim alırken istenecekler" },
      {
        p: "Sondaj firmasından iş bitiminde alınması gereken belgeler var. Bunlar olmadan kuyu teslim alınmış sayılmaz:",
      },
      {
        table: {
          head: ["Belge / bilgi", "Ne işe yarar"],
          rows: [
            ["Kuyu logu", "Katman, filtre konumu, statik seviye"],
            ["Debi testi sonucu", "Güvenli çekim ve dinamik seviye"],
            ["Boru dizilim şeması", "Hangi kotta hangi boru var"],
            ["Geliştirme kaydı", "İşlemin yapıldığının teyidi"],
            ["Su analizi", "Kullanım kararı ve sistem seçimi"],
            ["İzin belgeleri", "Yasal ve idari süreçler"],
          ],
        },
      },
      {
        p: "Bu altı kalem bir klasörde toplandığında kuyu, yıllar sonra bile yönetilebilir bir varlık olarak kalıyor. Eksik olduğunda ise her müdahale tahminle başlıyor.",
      },

      { h2: "Sık yapılan hatalar" },
      {
        ul: [
          "İzin süreci başlamadan sondaja girişmek.",
          "Yer seçimini erişim ve kirletici mesafesi düşünmeden yapmak.",
          "Kuyu geliştirmeyi atlamak veya yarım bırakmak.",
          "Debi testi yaptırmadan pompa satın almak.",
          "Kuyu logunu almamak veya kaybetmek.",
          "Kuyu ağzını açık ya da sızdıran bir kapakla bırakmak.",
          "Emniyet halatı ve kuru çalışma korumasından tasarruf etmek.",
        ],
      },
      {
        p: "Altıncı madde hem güvenlik hem su kalitesi meselesi: açık bırakılan bir kuyu ağzı, hem düşme riski hem de kuyuya yabancı madde girme yolu. Sızdırmaz ve kilitlenebilir kapak standart olmalı.",
      },

      { h2: "Kuyu ile sistem arasındaki bağ" },
      {
        p: "Kuyu tek başına bir yatırım değil; kendisinden sonra gelen her şeyi belirleyen bir başlangıç noktası. Debisi sulama planını, dinamik seviyesi pompayı, suyun kalitesi filtre seçimini şekillendirir.",
      },
      {
        p: "Dolayısıyla kuyu kararı verilirken sadece sondaj bedeline değil, kuracağınız sistemin tamamına bakmak gerekir. Yetersiz debili bir kuyu, arkasına ne kurarsanız kurun sınırı belirlemeye devam eder.",
      },
      {
        p: "Tersi de geçerli: iyi bir kuyu, yıllar içinde eklenecek yeni alanlara imkân tanır. Manifold üzerinde bırakılan yedek çıkışlar gibi, kuyu tarafında bırakılan kapasite payı da ileride değer kazanıyor.",
      },

      { h2: "Kuyunun bakımı ve ömrü" },
      {
        p: "Kuyu, açıldıktan sonra kendi hâline bırakılan bir yapı değildir. Yıllar içinde filtre çevresinde birikim olur, dipte tortu toplanır ve verim düşer.",
      },
      {
        p: "Düzenli olarak izlenmesi gereken üç değer var: statik ve dinamik su seviyesi, pompa çıkış basıncı ve suyun berraklığı. Bu üçü birkaç yıl kaydedildiğinde kuyunun eğilimi ortaya çıkar.",
      },
      {
        p: "Verimde düşüş görüldüğünde kuyu temizliği ve yeniden geliştirme gündeme gelir. Erken yapıldığında sonuç veren bu işlem, çok geç kalındığında kuyunun kullanılamaz hâle gelmesine kadar gidebiliyor.",
      },

      { h2: "Malatya'da tipik tablo" },
      {
        p: "Bölgede kuyuların önemli bölümü kayısı bahçelerini ve tarımsal sulamayı besliyor. Sulama sezonunda bölgesel yeraltı su seviyesi düşüyor; kuyular yaz ortasında kışa göre epey farklı davranıyor. Debi testinin mümkünse sezon koşullarını yansıtacak şekilde değerlendirilmesi gerekiyor. Kışın ölçülen bir debiye göre kurulan sistem, temmuzda yetersiz kalabiliyor.",
      },
      {
        p: "İkinci yaygın durum, komşu kuyuların birbirini etkilemesi. Aynı bölgede aynı saatlerde çalışan çok sayıda pompa, hattın sonundaki kuyunun verimini düşürüyor; sulama saatlerini bölmek fark yaratıyor.",
      },
    ],
    faqs: [
      {
        q: "Kuyu açtırmak için izin gerekiyor mu?",
        a: "Evet, yeraltı suyu kullanımı izne tabidir. İzinsiz açılan kuyular yasal sorun yaratabildiği gibi, belge olmadığı için elektrik aboneliğinden desteklere kadar sonraki aşamalarda engelle karşılaşır. Süreç ve gerekli belgeler için bağlı olduğunuz idareye başvurmak ilk adımdır.",
      },
      {
        q: "Kuyunun yerini neye göre seçmeliyim?",
        a: "Kirletici kaynaklara mesafe (foseptik, gübre ve yakıt depoları), komşu kuyulara uzaklık, sondaj ve bakım araçlarının erişebilmesi, elektrik hattına yakınlık ve sulanacak alana göre konum belirleyicidir. Erişim en çok atlanan ve sonradan en pahalıya mal olan başlıktır.",
      },
      {
        q: "Kaç metre derinlik gerekir?",
        a: "Bunu önceden söylemek mümkün değildir; su taşıyan katmanın derinliğine bağlıdır. En güvenilir öngörü, komşu kuyuların verilerinden çıkar: kaç metrede su bulunduğu, ne kadar inildiği ve yaz ortasında seviyenin ne kadar düştüğü sorulmalıdır.",
      },
      {
        q: "Kuyu geliştirme şart mı?",
        a: "Şarttır. Sondajdan sonra filtre çevresinde kalan ince malzeme bu işlemle dışarı alınır. Atlandığında kum yıllarca gelmeye devam eder: pompa çarkı aşınır, damlatıcılar tıkanır, armatürler bozulur. İlk yıl ucuz görünen bu tasarruf sonraki yıllarda pompa parasıyla ödenir.",
      },
      {
        q: "Pompayı ne zaman seçmeliyim?",
        a: "Debi testinden sonra. Kuyunun güvenli çekim debisi ve dinamik su seviyesi bilinmeden yapılan seçim ya kuyuyu boşaltır ya kapasiteyi boşa harcar. Aynı hesap kablo kesitini ve pano ekipmanını da belirlediği için elektrik altyapısı da bu aşamadan sonra planlanır.",
      },
      {
        q: "Kuyu logu ne işe yarar?",
        a: "Hangi derinlikte hangi zeminin geçildiğini, filtre borusunun konumunu ve statik su seviyesini gösterir. Pompanın hangi kota indirileceği, kum sorunu çıktığında nereye bakılacağı ve ileride verim düştüğünde neyin değiştiği bu belgeyle yorumlanır. Dijital kopyasını saklayın.",
      },
      {
        q: "Kuyu suyu içilebilir mi?",
        a: "Ancak analizle karar verilir. İçme–kullanma amacıyla mikrobiyolojik ve kimyasal analiz gerekir; sulama için tuzluluk ve sertlik değerleri önemlidir. Sığ kuyularda yüzey sularının karışma ihtimali nedeniyle analiz düzenli tekrarlanmalıdır.",
      },
      {
        q: "Komşunun kuyusu kaç metredeyse benimki de o derinlikte mi olur?",
        a: "Yakın parselde benzer bir tablo çıkma ihtimali yüksektir, garanti değildir. Aynı köyde 60 metrede su veren bir formasyon iki yüz metre ötede fay ya da kil merceği yüzünden aynı kotta kuru çıkabilir. Komşu kuyunun logu iyi bir başlangıç verisidir; karar kendi sahanızdaki sonuçla netleşir.",
      },
      {
        q: "Kuyunun verimi zamanla düşer mi?",
        a: "Düşebilir. Filtre çevresinde birikim olur, dipte tortu toplanır. Statik ve dinamik su seviyesi, pompa çıkış basıncı ve suyun berraklığı birkaç yıl kaydedildiğinde eğilim görülür. Verim düşüşünde kuyu temizliği ve yeniden geliştirme erken yapılırsa sonuç verir.",
      },
    ],
    related: ["kuyu-suyu-kumlu-geliyor", "dalgic-pompa-kablo-kesiti", "kuyu-pompasi-secimi"],
  },
];
