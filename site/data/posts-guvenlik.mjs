// Güvenlik sistemleri ve aydınlatma seçimi yazıları.

export const guvenlikPosts = [
  {
    slug: "kamera-kayit-suresi-ve-disk",
    title: "Güvenlik kamerasında kayıt kaç gün durur?",
    category: "Güvenlik",
    published: "2026-08-16",
    reading: 10,
    metaTitle: "Kamera Kayıt Süresi ve Disk Hesabı | CB İnşaat",
    metaDesc:
      "Kaç gün geriye dönük kayıt kalır? Bitrate, çözünürlük, fps ve sıkıştırma nasıl etkiliyor, kaç TB disk gerekir? Örnek hesaplarla anlattık.",
    keywords: [
      "kamera kayıt süresi",
      "güvenlik kamerası disk hesabı",
      "NVR disk kapasitesi",
      "bitrate hesabı",
      "gözetleme diski",
    ],
    excerpt:
      "Kamera aldıran herkesin bir gün sorduğu soru aynı: olay üç hafta önce oldu, kayıt duruyor mu? Cevap kamera markasında değil, dört sayının çarpımında.",
    services: ["kamera-guvenlik-sistemleri", "elektrik-tesisati", "uzaktan-kumanda-otomasyon"],
    intro:
      "Kamera kurulurken en az konuşulan konu kayıt süresi oluyor. Oysa sistemin işe yarayıp yaramadığı çoğu kez o güne bağlı: hırsızlık fark edildiğinde, komşuyla tartışma çıktığında ya da bir kaza sonrası görüntü istendiğinde kayıt hâlâ diskte duruyor mu? Bu yazıda süreyi neyin belirlediğini ve kaç terabaytla ne kadar geriye gidilebildiğini hesapla gösteriyoruz.",
    body: [
      { h2: "Süreyi belirleyen dört sayı" },
      {
        p: "Kayıt süresi tek bir ayara değil, dört değerin çarpımına bağlı: kamera sayısı, her kameranın saniyede ürettiği veri miktarı (bitrate), günde kaç saat kayıt yapıldığı ve diskin boyutu. Marka, model ve fiyat bu dördünü değiştirdiği ölçüde süreyi değiştiriyor, başka bir yoldan değil.",
      },
      {
        p: "Hesap kabaca şöyle işliyor: bitrate megabit cinsindendir, sekize bölünce megabayta iner. Bir kameranın günlük veri üretimi bu değerin saniye sayısıyla çarpımıdır. Kamera sayısıyla çarpıp disk kapasitesine bölünce kaç gün geriye gidebileceğiniz çıkar.",
      },

      { h2: "Basit bir örnek" },
      {
        p: "Sekiz kameralı, her biri 4 Mbit/s üreten bir sistem düşünün. Bir kamera saniyede 0,5 megabayt, günde yaklaşık 43 gigabayt veri üretir. Sekiz kamerada bu günlük 345 gigabayta çıkar. 4 terabaytlık bir diskte yaklaşık on bir günlük kayıt tutulabilir.",
      },
      {
        table: {
          head: ["Kamera", "Bitrate", "Günlük veri", "4 TB diskte"],
          rows: [
            ["4 adet", "4 Mbit/s", "172 GB", "23 gün"],
            ["8 adet", "4 Mbit/s", "345 GB", "11 gün"],
            ["8 adet", "2 Mbit/s", "172 GB", "23 gün"],
            ["16 adet", "4 Mbit/s", "691 GB", "5 gün"],
            ["16 adet", "2 Mbit/s", "345 GB", "11 gün"],
          ],
        },
      },
      {
        p: "Tablodaki asıl mesaj şu: bitrate'i yarıya indirmek süreyi iki katına çıkarıyor. Disk almadan önce bakılacak yer burası.",
      },

      { h2: "Bitrate ne demek?" },
      {
        p: "Bitrate, kameranın saniyede ürettiği görüntü verisinin miktarı. Yüksek bitrate daha temiz, daha az bozulmuş bir görüntü demek; düşük bitrate daha uzun kayıt demek. Aradaki dengeyi kameranın baktığı sahne belirliyor.",
      },
      {
        p: "Hareketsiz bir depo koridoru düşük bitrate'te bile temiz kalır. Rüzgârda sallanan ağaçlara, geçen araçlara ya da yağmura bakan bir kamera aynı değerde blok blok bozulmaya başlar. O yüzden bitrate her kameraya ayrı verilir; tek bir değeri sisteme dayatmak bazı kameralarda israf, bazılarında yetersizlik yaratıyor.",
      },

      { h2: "Çözünürlük ve kare hızı" },
      {
        p: "Çözünürlük arttıkça aynı görüntü kalitesi için gereken bitrate de artıyor. 2 megapiksel bir kamerayla 8 megapiksel bir kamera arasında dört kat piksel farkı var; veri farkı bu kadar keskin olmasa da hissedilir.",
      },
      {
        p: "Kare hızı ise çoğu kurulumda gereğinden yüksek bırakılıyor. Saniyede 25 kare, hareketli bir aracın plakasını okumak için anlamlı. Kapı önü, depo, koridor gibi noktalarda 12–15 kare fazlasıyla yeter ve veriyi neredeyse yarıya indirir.",
      },
      {
        ul: [
          "Giriş ve kasa kamerası: yüksek çözünürlük, yüksek kare hızı.",
          "Koridor ve depo: orta çözünürlük, düşük kare hızı.",
          "Otopark ve plaka: yüksek kare hızı, dar açı.",
          "Genel görüş kamerası: düşük bitrate yeter, ayrıntı beklenmez.",
        ],
      },

      { h2: "H.264 mü, H.265 mi?" },
      {
        p: "Sıkıştırma yöntemi kayıt süresini en ucuz yoldan uzatan ayar. H.265, aynı görüntüyü H.264'e göre kabaca yarı veriyle saklıyor. Yeni cihazların çoğu destekliyor ama fabrika ayarında H.264 açık gelebiliyor.",
      },
      {
        p: "Değiştirmeden önce bir noktaya bakmak gerekiyor: telefondan izlemede kullandığınız uygulama ve tarayıcı H.265 çözebiliyor mu? Eski cihazlarda uyumsuzluk çıkabiliyor. Kurulumda ikisi de denenip hangisinin sorunsuz çalıştığı görülür.",
      },

      { h2: "Hareket algılamalı kayıt" },
      {
        p: "Sürekli kayıt yerine yalnızca hareket olduğunda kaydetmek, süreyi birkaç katına çıkarabiliyor. Gece kimsenin girmediği bir dükkânda kazanç çok büyük.",
      },
      {
        p: "Ama tek başına bırakılmaz. Hareket eşiği yanlış ayarlandığında ya sinek geçince kayıt başlıyor ya da gerçekten biri girdiğinde başlamıyor. Sağlıklı düzen şu: kritik kameralar sürekli kayıtta kalır, kalanlar hareketle çalışır. Ayrıca hareket öncesi birkaç saniyeyi de kaydeden ön kayıt özelliği açılır; olayın başlangıcı böyle kaçmıyor.",
      },

      { h2: "Neden özel gözetleme diski?" },
      {
        p: "Bilgisayar diski ile kamera diski aynı şey değil. Masaüstü diskleri günde birkaç saat çalışacak şekilde tasarlanıyor; kamera kaydı ise yılın her saati kesintisiz yazma demek. Gözetleme için üretilen diskler bu yükü kaldıracak, aynı anda birden çok akışı yazacak biçimde yapılıyor.",
      },
      {
        p: "Ucuz diskle kurulan sistemlerde tipik son şu oluyor: ilk yıl sorunsuz geçiyor, ikinci yılda görüntülerde bozulmalar başlıyor, bir gün cihaz diski hiç görmüyor. Görüntü tam da lazım olduğunda kayıp çıkıyor.",
      },

      { h2: "Kaç disk gerekir?" },
      {
        p: "Kayıt cihazının kaç disk alabildiği baştan bilinmeli. Dört diskli bir cihazda 4 TB'lik dört disk 16 TB eder ve on altı kameralık bir sistemde yirmi güne yaklaşır. Tek diskli küçük cihazlarda ise büyütmenin sınırı diskin en büyük boyutu kadardır.",
      },
      {
        p: "Kritik yerlerde iki diski aynı anda yazan yedekli düzen kurulabiliyor. Bu düzende bir disk arızalansa da kayıt duruyor, ama kullanılabilir alan yarıya iniyor. Karar, kaybın maliyetine göre veriliyor.",
      },

      { h2: "Tipik kurulumlar" },
      {
        table: {
          head: ["Yer", "Kamera", "Önerilen kayıt", "Disk"],
          rows: [
            ["Daire girişi, bahçe", "2–4", "Sürekli", "1–2 TB"],
            ["Küçük dükkân", "4–6", "Sürekli + gece hareket", "2–4 TB"],
            ["Market, kafe", "8–12", "Sürekli", "4–8 TB"],
            ["Depo, atölye", "8–16", "Karma", "8–16 TB"],
            ["Site, apartman", "12–24", "Sürekli", "16 TB+"],
          ],
        },
      },
      {
        p: "Site ve apartmanlarda kayıt süresi yönetim kararıyla belirleniyor; bir aya çıkarmak isteyen yönetimler için disk kapasitesi baştan geniş tutulur.",
      },

      { h2: "Ne kadar geriye dönmek gerekir?" },
      {
        p: "Pratikte en çok işe yarayan süre iki ile dört hafta arası. Bir hırsızlık çoğunlukla ertesi gün fark ediliyor ama araç çizilmesi, kaybolan bir kargo ya da komşuyla çıkan bir anlaşmazlık haftalar sonra gündeme gelebiliyor.",
      },
      {
        p: "Kayıtta kişisel veri bulunduğu için süreyi gereğinden uzun tutmanın da bir maliyeti var. Amaca yetecek kadar saklamak, hem disk hem sorumluluk açısından daha rahat bir düzen kuruyor.",
      },

      { h2: "Kayıt kaybının sık nedenleri" },
      {
        ol: [
          "Disk dolduğunda üzerine yazma kapalı kalmış; cihaz kayıt almayı durdurmuş.",
          "Elektrik kesintisinde cihaz düzgün kapanmamış, dosya sistemi bozulmuş.",
          "Disk arızalanmış ama kimse uyarıya bakmadığı için haftalarca fark edilmemiş.",
          "Saat ayarı yanlış; kayıt var ama aranan tarihte bulunamıyor.",
          "Kamera ağdan düşmüş, kayıt cihazı o kanalı hiç yazmamış.",
        ],
      },
      {
        p: "Bunların hepsi cihazın uyarı ekranında görünüyor ama kimse bakmıyor. Ayda bir kayıt cihazına girip son bir haftanın görüntüsünü rastgele bir saatten açmak, bu beş maddeyi de kapatan en pratik alışkanlık.",
      },

      { h2: "Kesintisiz güç kaynağı" },
      {
        p: "Kayıt cihazı ile ağ anahtarını küçük bir kesintisiz güç kaynağına almak, hem ani kesintilerde dosya bozulmasını önlüyor hem de elektrik gidince kameraların bir süre daha çalışmasını sağlıyor. Kasten kesilen elektrik durumunda bu birkaç dakika, olayın kaydedilmesi için yeterli olabiliyor.",
      },

      { h2: "Görüntüyü dışarı almak" },
      {
        p: "Bir görüntü resmî bir yere verilecekse cihazın kendi biçiminde değil, yaygın bir video biçiminde dışa aktarılması gerekiyor. Cihazların çoğunda bu seçenek var ama menüde derinde duruyor.",
      },
      {
        p: "Kurulum günü bir kez birlikte deneyip nasıl yapıldığını görmek işi kolaylaştırıyor. Görüntüye ihtiyaç duyulan gün menüyle boğuşmak istemezsiniz.",
      },

      { h2: "Uzaktan izleme" },
      {
        p: "Telefondan izlemek artık standart ama iki noktaya dikkat gerekiyor. Birincisi yükleme hızı: internet paketinizin karşıya veri gönderme hızı düşükse uzaktan izleme takılıyor, kayıt yine de sağlıklı sürüyor. İkincisi şifre: cihazların fabrika şifresi ile bırakılması en sık görülen güvenlik açığı.",
      },
      {
        p: "Kurulumda yönetici şifresi değiştirilir, mümkünse kamera ağı ev ağından ayrılır. Bu ikisi, dışarıdan erişim denemelerinin büyük kısmını baştan kesiyor.",
      },

      { h2: "Kurulumda atlananlar" },
      {
        ul: [
          "Kablo güzergâhının krokiye işlenmemesi; sonraki müdahalede kablo aranıyor.",
          "Kameranın çok yükseğe konması; tepeden bakan görüntüde yüz tanınmıyor.",
          "Güneşe karşı bakan konum; gün içinde saatlerce görüntü beyaza yanıyor.",
          "Gece aydınlatmasının hesaba katılmaması; kızılötesi tek başına yetmeyebiliyor.",
          "Kayıt cihazının kolay ulaşılan bir yerde bırakılması; giren kişi diski alıp gidiyor.",
        ],
      },
      {
        p: "Şu son maddeye ayrıca dikkat edin. Kayıt cihazı kilitli bir dolapta ya da ayrı bir hacimde durursa sistem asıl işini yapıyor.",
      },

      { h2: "Malatya'da tipik tablo" },
      {
        p: "Merkezde en çok kurduğumuz düzen dört ile sekiz kameralı, 4 TB diskli sistemler; bu ölçek bir dükkân ya da müstakil ev için iki–üç haftalık kayıt veriyor. Sanayi bölgelerinde ve depolarda kamera sayısı arttığı için disk kapasitesi baştan geniş planlanıyor.",
      },
      {
        p: "Kırsal mahallelerde ise internetin yükleme hızı sınırlı olabiliyor. Böyle yerlerde uzaktan izlemeyi düşük çözünürlüklü ikinci akış üzerinden kuruyoruz; kayıt yüksek kalitede diskte duruyor, telefona hafif görüntü gidiyor.",
      },

      { h2: "Sistemi ayakta tutmak" },
      {
        ul: [
          "Ayda bir kayıt cihazından rastgele bir saati açıp izleyin.",
          "Disk sağlık uyarısını ve saat ayarını aynı kontrolde görün.",
          "Yılda bir kamera camlarını silin; toz ve örümcek ağı gece görüşünü bitiriyor.",
          "Kayıt süresini bir kez ölçün: en eski kayıt hangi tarihte, not edin.",
          "Şifreyi yılda bir değiştirin, eski çalışanların erişimini kapatın.",
        ],
      },
      {
        p: "Bu beş maddeyi yılda bir saat ayırarak yapmak, sistemin lazım olduğu gün çalışmasını neredeyse garantiliyor.",
      },

      { h2: "Gece görüşü ve aydınlatma" },
      {
        p: "Kızılötesi aydınlatma karanlıkta siyah beyaz bir görüntü veriyor ve menzili sınırlı. Katalogda yazan otuz metre, boş bir alanda ölçülen değer; ağaç, direk ya da duvar araya girdiğinde menzil hızla düşüyor.",
      },
      {
        p: "Renkli gece görüntüsü isteniyorsa sahnenin bir miktar aydınlatılması gerekiyor. Küçük bir projektör, kızılötesinden çok daha iyi sonuç veriyor; hem renk hem ayrıntı kalıyor. Sensörlü bir projektör bunu elektrik yakmadan çözüyor.",
      },
      {
        p: "Cam arkasından bakan kameralarda ise kızılötesi hiç çalışmıyor; ışık cama çarpıp geri dönüyor ve görüntü bembeyaz oluyor. Cam arkasına konan kameralarda kızılötesi kapatılıp odanın kendi ışığına güvenmek gerekiyor.",
      },

      { h2: "Kablo tarafı" },
      {
        p: "IP kameralarda tek bir ağ kablosu hem görüntüyü taşıyor hem kamerayı besliyor. Bu düzende kablo uzunluğu doksan metreyi geçmemeli; uzun mesafelerde araya yükseltici ya da fiber giriyor.",
      },
      {
        p: "Analog sistemlerde koaksiyel kablo ile ayrı besleme hattı çekiliyor. Eski binalarda zaten çekilmiş koaksiyel hat varsa, üzerinden yüksek çözünürlüklü analog kameralar çalıştırılabiliyor; kabloyu yenilemeden çözünürlük artıyor.",
      },
      {
        p: "Dış hatlarda kabloyu doğrudan güneşe ve suya açık bırakmamak gerekiyor. Spiral boru içinden geçen bir kablo, açıkta duran kabloya göre kat kat uzun ömürlü oluyor.",
      },

      { h2: "Kayıt cihazı mı, buluta mı?" },
      {
        table: {
          head: ["Konu", "Yerel kayıt", "Bulut"],
          rows: [
            ["Aylık ücret", "Yok", "Var"],
            ["Internet kesintisi", "Kayıt sürer", "Kayıt durur"],
            ["Cihaz çalınırsa", "Kayıt gider", "Kayıt durur"],
            ["Kamera sayısı", "Sınırsıza yakın", "Pakete bağlı"],
            ["Kayıt süresi", "Diske bağlı", "Pakete bağlı"],
          ],
        },
      },
      {
        p: "Pratikte en sağlam düzen ikisinin birlikte kullanılması: kayıt diske gidiyor, kritik kameraların olay anındaki görüntüsü ayrıca buluta yükleniyor. Böylece cihaz çalınsa bile elde bir kayıt kalıyor.",
      },
    ],
    faqs: [
      {
        q: "Kaç TB disk almalıyım?",
        a: "Kamera sayısını, kamera başına bitrate'i ve hedeflediğiniz gün sayısını bilmek yeterli. Sekiz kameralı 4 Mbit/s bir sistem günde yaklaşık 345 GB üretir; üç hafta için 8 TB uygun olur. Bitrate'i düşürürseniz aynı diskle süre iki katına çıkar.",
      },
      {
        q: "Kayıt süresi neden yazdığından kısa çıkıyor?",
        a: "Genelde bitrate fabrika ayarında yüksek bırakıldığı için. Kamera menüsünde her kanalın gerçek bitrate değerini görebilirsiniz. Hareketli sahneye bakan kameralarda cihaz değişken bitrate kullanır ve hesabın üstüne çıkar.",
      },
      {
        q: "Hareket algılamayla kayıt güvenli mi?",
        a: "Tek başına bırakılırsa risklidir. Eşik yanlışsa gerçek hareketi kaçırabiliyor. Kritik kameraları sürekli kayıtta tutup kalanlarda hareket kullanmak dengeli bir düzen kuruyor. Ön kayıt seçeneğini de açın, olayın ilk saniyeleri böyle kaçmıyor.",
      },
      {
        q: "Normal bilgisayar diski kullanılabilir mi?",
        a: "Çalışır ama ömrü kısa olur. Masaüstü diskleri günde birkaç saat çalışmak üzere yapılıyor, kamera kaydı ise kesintisiz yazma demek. Gözetleme için üretilen diskler bu yükü kaldırıyor ve arıza oranı gözle görülür ölçüde düşük kalıyor.",
      },
      {
        q: "Kayıt süresini uzatmanın en ucuz yolu ne?",
        a: "Sıkıştırmayı H.265'e almak ve kare hızını sahneye göre düşürmek. İkisi birlikte çoğu sistemde süreyi iki katına yaklaştırıyor, üstelik disk almadan. Uygulamadan sonra görüntüyü bir kez kontrol edin.",
      },
      {
        q: "Elektrik kesintisinde kayıt bozulur mu?",
        a: "Bozulabiliyor. Cihaz yazma sırasında elektriksiz kalırsa dosya sistemi zarar görebiliyor. Kayıt cihazını ve ağ anahtarını küçük bir kesintisiz güç kaynağına almak bu riski büyük ölçüde bitiriyor.",
      },
      {
        q: "Diskin dolduğunu nasıl anlarım?",
        a: "Cihaz normalde en eskiyi silip üzerine yazar; bu ayar kapalıysa kayıt durur ve ekranda uyarı çıkar. Ayda bir yapılan kontrolde hem bu ayarı hem en eski kayıt tarihini görmek yeterli oluyor.",
      },
    ],
    related: ["guvenlik-kamerasi-secim-rehberi", "ic-mekan-priz-plani", "elektrik-panosu-bakimi"],
  },

  {
    slug: "diafon-mu-goruntulu-interkom-mu",
    title: "Diafon mu, görüntülü interkom mu?",
    category: "Güvenlik",
    published: "2026-08-16",
    reading: 9,
    metaTitle: "Diafon mu Görüntülü İnterkom mu? | Seçim Rehberi",
    metaDesc:
      "Sesli diafon ile görüntülü interkom arasındaki farklar, apartman ve müstakil ev için seçim, kablo altyapısı, IP sistemler ve değişim maliyeti.",
    keywords: [
      "diafon",
      "görüntülü interkom",
      "apartman diafon sistemi",
      "IP interkom",
      "kapı otomatiği",
    ],
    excerpt:
      "Kapıyı açmadan kimin geldiğini görmek, bir daire için küçük ama günlük hayatı değiştiren bir fark. Karar da çoğu durumda cihazda değil, binanın mevcut kablosunda düğümleniyor.",
    services: ["diafon-goruntulu-konusma", "kamera-guvenlik-sistemleri", "elektrik-tesisati"],
    intro:
      "Eski binalarda diafon çoğunlukla ya çalışmıyor ya cızırtılı. Yenileme gündeme geldiğinde de ilk soru şu oluyor: sesli sistemle devam mı edelim, görüntülüye mi geçelim? Cevap dairenin ihtiyacından çok binanın kablo altyapısına bağlı; o yüzden karara oradan başlıyoruz.",
    body: [
      { h2: "İki sistem arasındaki fark" },
      {
        p: "Sesli diafon, kapı panelinden daire içindeki ahizeye ses taşır ve kapı kilidini açar. Görüntülü interkom aynı işi yapar, üstüne kapıdaki kişinin görüntüsünü ekrana getirir. Kullanım farkı basit görünüyor ama kapıyı açma kararını değiştiriyor: sesle tanımadığınız birine kapıyı açmadan önce bakabiliyorsunuz.",
      },
      {
        p: "İkinci fark kayıt tarafında. Görüntülü sistemlerin çoğu, evde kimse yokken kapıya gelen kişinin fotoğrafını saklıyor. Kargo, komşu ya da tanımadığınız biri; döndüğünüzde kim gelmiş görüyorsunuz.",
      },

      { h2: "Yan yana karşılaştırma" },
      {
        table: {
          head: ["Konu", "Sesli diafon", "Görüntülü interkom"],
          rows: [
            ["Kapıdaki kişiyi görme", "Yok", "Var"],
            ["Ziyaretçi kaydı", "Yok", "Çoğu modelde var"],
            ["Kablo ihtiyacı", "2–4 damar", "Sisteme göre 4 damar veya ağ kablosu"],
            ["Daire içi ünite", "Ahize", "Ekranlı ünite"],
            ["Telefondan cevaplama", "Yok", "IP modellerde var"],
            ["Arıza sıklığı", "Düşük", "Düşük, ekran ömrü sınırlı"],
          ],
        },
      },
      {
        p: "Tablodaki kablo satırı çoğu binada kararı tek başına veriyor. Mevcut hat neye izin veriyorsa iş oradan başlıyor.",
      },

      { h2: "Önce mevcut kabloya bakılır" },
      {
        p: "Eski apartmanlarda kolon boyunca çekilmiş iki ya da dört damarlı bir hat bulunuyor. Bazı görüntülü sistemler bu iki damar üzerinden hem görüntü hem ses taşıyabiliyor; bunlara iki telli sistem deniyor ve yenilemede en çok işe yarayan çözüm bu oluyor.",
      },
      {
        p: "Mevcut hat çürümüş, kopmuş ya da yetersizse yeni kablo çekmek gerekiyor. Kolon boşluğu açıksa iş birkaç saatte bitiyor; kapalıysa kırım gündeme geliyor ve maliyet buradan büyüyor. Keşifte ilk baktığımız şey bu.",
      },

      { h2: "İki telli sistemler" },
      {
        p: "Kutupsuz iki tel üzerinden çalışan sistemler, eski binalarda yenilemenin en pratik yolu. Aynı hat üzerinden birçok daire besleniyor, ayrı bir güç hattı çekmek gerekmiyor.",
      },
      {
        p: "Sınırı şu: aynı anda kaç dairenin görüşebildiği ve hat uzunluğu üreticiye göre belirleniyor. On beş katlı bir binada hat sonundaki dairede görüntü zayıflıyorsa araya yükseltici konuyor. Bu detay projede belirlenir, sonradan eklemek de mümkün ama panoya erişim gerekiyor.",
      },

      { h2: "IP tabanlı sistemler" },
      {
        p: "Ağ kablosu üzerinden çalışan interkomlar, kapı panelini bir kameraya yaklaştırıyor. Görüntü daha net, telefondan cevaplama ve dışarıdan kapı açma gibi özellikler geliyor.",
      },
      {
        p: "Karşılığında bina içinde bir ağ altyapısı gerekiyor: anahtar, kablo, kesintisiz güç. Yeni yapılarda bu altyapı zaten kuruluyor, eski binalarda ek bir iş çıkıyor. Karar burada bina yönetiminin bütçesine göre veriliyor.",
      },

      { h2: "Müstakil evde durum farklı" },
      {
        p: "Müstakil ev ve villalarda mesafe uzun, kapı ile ev arası bazen elli metreyi geçiyor. Burada kablo kesiti ve tipi önem kazanıyor; ince kabloyla çekilen uzun hatlarda görüntü karlanıyor, ses cızırdıyor.",
      },
      {
        p: "Bahçe kapısı, garaj kapısı ve ev girişi için üç ayrı panel isteniyorsa sistem baştan çok panelli seçiliyor. Sonradan ikinci panel eklemek çoğu modelde mümkün ama merkezi ünitenin kapasitesi buna uygun olmalı.",
      },

      { h2: "Kapı kilidi tarafı" },
      {
        p: "İnterkomun kapıyı açtığı parça ayrı bir mekanizma. Elektrikli kilit, manyetik kilit ve motorlu kilit farklı yerlerde kullanılıyor:",
      },
      {
        ul: [
          "Elektrikli kilit karşılığı: apartman giriş kapılarında en yaygın, ucuz ve tamiri kolay.",
          "Manyetik kilit: cam kapı ve yüksek geçiş trafiğinde tercih edilir, elektrik kesilince açılır.",
          "Motorlu kilit: rüzgâra ve zorlamaya dayanıklı, bahçe kapılarında iş görüyor.",
          "Buton ve acil çıkış: yangın yönetmeliğinin gerektirdiği yerlerde ayrıca planlanır.",
        ],
      },
      {
        p: "Kilit seçimi kapının malzemesine ve kullanım yoğunluğuna göre yapılıyor. Yanlış kilit, interkom sağlam olsa bile sistemi sürekli arızalı gösteriyor.",
      },

      { h2: "Apartmanda ortak karar" },
      {
        p: "Diafon değişimi ortak alan işi olduğu için yönetim kararıyla yürüyor. Pratikte en çok tıkanan nokta, bazı dairelerin görüntülüye geçmek istemesi, bazılarının seslide kalmak istemesi oluyor.",
      },
      {
        p: "Çözüm çoğu sistemde mevcut: kolon ve panel görüntülü kurulur, daire içi üniteler isteğe göre seçilir. Sesli ünite takan daire sonradan görüntülüye geçmek isterse yalnızca kendi ünitesini değiştiriyor, binada iş çıkmıyor.",
      },

      { h2: "Ne kadar sürüyor?" },
      {
        table: {
          head: ["İş", "Tipik süre"],
          rows: [
            ["Tek dairede ünite değişimi", "1 saat"],
            ["Mevcut hat üzerinden bina yenilemesi", "1–2 gün"],
            ["Yeni kablo çekilerek yenileme", "3–5 gün"],
            ["Müstakil ev, tek panel", "Yarım gün"],
            ["Villa, çok panelli IP sistem", "2–3 gün"],
          ],
        },
      },
      {
        p: "Yeni kablo gereken binalarda sürenin çoğu kabloyu çekmeye gidiyor; cihaz montajı işin küçük kısmı.",
      },

      { h2: "Sık görülen arızalar" },
      {
        ol: [
          "Panel butonunun suyla bozulması; saçak altına alınmayan panellerde sık görülüyor.",
          "Kilit karşılığının aşınması; kapı sertçe çarpıldığında ömrü kısalıyor.",
          "Güç kaynağının zayıflaması; birden çok daire aynı anda konuşunca ses düşüyor.",
          "Hat ekleri; buatlarda gevşemiş bağlantı cızırtının bir numaralı sebebi.",
          "Ekranlı ünitenin ömrünü tamamlaması; on yıl civarında normal karşılanıyor.",
        ],
      },
      {
        p: "Bu listedeki ilk dört madde tamir edilebilir kalemler. Komple sistem değişimine karar vermeden önce bir kez bakılması hem zaman hem para kazandırıyor.",
      },

      { h2: "Kablo çekerken" },
      {
        p: "Yeni hat çekiliyorsa güzergâhı elektrik kolonundan ayrı tutmak gerekiyor. Güç kablosuyla yan yana ilerleyen zayıf akım hattı parazit alıyor, seste uğultu oluşuyor.",
      },
      {
        p: "Bir de yedek damar bırakmak iyi oluyor. Bugün sesli sistem kurulsa bile ileride görüntülüye geçilmek istendiğinde o yedek damar tüm işi kolaylaştırıyor.",
      },

      { h2: "Panel nereye konur?" },
      {
        p: "Panelin yüksekliği göz hizasının biraz altında, yaklaşık 1,4–1,5 metre olacak şekilde ayarlanıyor. Daha yükseğe konan panellerde kamera açısı yüzü değil saçları görüyor.",
      },
      {
        p: "Karşıdan gelen ışık da hesaba katılıyor. Doğrudan güneş alan bir panelde görüntü gün içinde saatlerce beyaza yanıyor; küçük bir saçak ya da açı değişimi bunu çözüyor.",
      },

      { h2: "Karar nasıl verilir?" },
      {
        table: {
          head: ["Durum", "Öneri"],
          rows: [
            ["Eski bina, hat sağlam", "İki telli görüntülü sistem"],
            ["Eski bina, hat çürük", "Yeni kablo + görüntülü"],
            ["Yeni yapı", "IP interkom, ağ altyapısıyla"],
            ["Müstakil ev, kısa mesafe", "Görüntülü, tek panel"],
            ["Villa, çok girişli", "Çok panelli sistem"],
            ["Bütçe dar, hat sağlam", "Sesli sistemle yenileme"],
          ],
        },
      },
      {
        p: "Bütçe dar olsa bile kabloyu görüntülüye uygun çekmek mantıklı oluyor; cihazı sonra değiştirmek kolay, kabloyu değiştirmek zor.",
      },

      { h2: "Malatya'da ne çıkıyor?" },
      {
        p: "Merkezdeki eski apartmanların çoğunda mevcut hat iki telli sistemler için yeterli çıkıyor; bu da yenilemeyi kırım yapmadan bitirmemizi sağlıyor. Kolon boşluğu kapatılmış binalarda ise güzergâh yeniden planlanıyor.",
      },
      {
        p: "Bahçeli müstakil evlerde en sık kurduğumuz düzen, bahçe kapısı ve ev girişi için iki panelli sistem. Malatya'nın sıcak yazlarında panelin güneş görmeyen tarafa alınması, cihaz ömrü açısından gözle görülür fark yaratıyor.",
      },

      { h2: "Panel malzemesi ve dayanıklılık" },
      {
        p: "Kapı paneli, sistemin dışarıda duran tek parçası. Yağmur, kar, güneş ve zaman zaman darbe görüyor. Plastik gövdeli paneller ucuz ama güneşte birkaç yılda sararıp kırılganlaşıyor.",
      },
      {
        p: "Alüminyum ya da paslanmaz gövdeli paneller apartman girişlerinde çok daha uzun gidiyor. Vandalizme açık noktalarda butonların gömme olduğu modeller tercih ediliyor; dışarı taşan butonlar en çabuk kırılan parça.",
      },

      { h2: "Zil sesi ve ses düzeyi" },
      {
        p: "Daire içi ünitede ses düzeyinin ayarlanabilir olması küçük ama önemli bir ayrıntı. Bebekli evlerde ve gece vardiyasında çalışan kişilerin evinde zil sesinin kısılabilmesi ya da tamamen susturulabilmesi isteniyor.",
      },
      {
        p: "Sessize alınan ünitelerde ekranın yanıp sönmesi ya da telefona bildirim gitmesi çözüm oluyor. Kapıya gelen kaçmıyor, ev de rahatsız olmuyor.",
      },

      { h2: "Kat sayısı ve besleme" },
      {
        p: "Kolon uzadıkça hattaki gerilim düşüyor. Alt katlarda sorunsuz çalışan bir sistem üst katlarda cızırtı yapıyorsa sebep genelde bu. Çözüm ya kesiti büyütmek ya ara besleme noktası eklemek.",
      },
      {
        p: "Çok katlı binalarda merkezi güç kaynağı kapasitesi baştan hesaplanıyor. Aynı anda kaç dairenin konuşabileceği bu kapasiteye bağlı; yetersiz kaynakta ikinci konuşma başlayınca ses düşüyor.",
      },

      { h2: "Yenileme sırası" },
      {
        ol: [
          "Mevcut hat ölçülür; damar sayısı ve süreklilik kontrol edilir.",
          "Panel ve merkezi ünite yeri belirlenir, güç noktası planlanır.",
          "Daire sayısına göre sistem kapasitesi seçilir.",
          "Kolon üzerinde kat kat ünite değişimi yapılır.",
          "Kapı kilidi ve karşılığı gözden geçirilir, gerekiyorsa yenilenir.",
          "Her daire tek tek denenir, bölge planı yönetime bırakılır.",
        ],
      },
      {
        p: "Beşinci madde çoğu yenilemede atlanıyor. Yeni interkom takılıp eski yorgun kilit karşılığı bırakıldığında, sistem yeni olmasına rağmen kapı açılmıyor.",
      },

      { h2: "Maliyeti belirleyen kalemler" },
      {
        ul: [
          "Daire sayısı ve buna bağlı ünite adedi.",
          "Mevcut hattın kullanılıp kullanılamayacağı.",
          "Sesli mi görüntülü mü, ekran boyutu.",
          "Panel malzemesi ve buton tipi.",
          "Kapı kilidinin de değişip değişmeyeceği.",
          "IP sistemde ağ altyapısının mevcut olup olmadığı.",
        ],
      },
      {
        p: "Bu altı kalem içinde en çok oynayan ikinci sıradaki. Hat kullanılabiliyorsa iş bir–iki günde bitiyor; yeni kablo gerekiyorsa hem süre hem tutar büyüyor.",
      },

      { h2: "Kartlı geçişle birleştirmek" },
      {
        p: "Apartman girişlerinde interkomun yanına kartlı ya da şifreli geçiş eklemek yaygınlaşıyor. Sakinler anahtar taşımadan giriyor, ziyaretçi yine zille geliyor.",
      },
      {
        p: "Kart sisteminin faydası kaybolan anahtarda ortaya çıkıyor: kayıp kart tek tuşla iptal ediliyor, bina kilidi değiştirmek zorunda kalmıyor. Kiracı değişiminin sık olduğu binalarda bu fark büyük.",
      },
      {
        p: "Kurulum sırasında kart okuyucunun beslemesi ve kilit kumandası, interkom paneliyle aynı hattan planlanıyor. Sonradan eklemek mümkün ama ikinci kez kablo çekmek gerekiyor.",
      },

      { h2: "Ziyaretçi güvenliği" },
      {
        p: "Görüntülü sistemin en somut faydası, kapıyı açmadan önce bakabilmek. Bunu işe yarar kılan iki şey var: panelin yüz hizasında olması ve gece görüşünün çalışması.",
      },
      {
        p: "Gece görüşü olmayan bir panelde akşamdan sonra ekranda karanlık bir siluet görünüyor; sistem tam da en gerekli olduğu saatte iş görmüyor. Panel seçerken kızılötesi ya da beyaz ışıklı aydınlatması olan modeller tercih edilir.",
      },

      { h2: "Yaşlı ve engelli kullanım" },
      {
        p: "Ekranlı ünitenin yüksekliği çoğu kurulumda alışkanlıkla 1,5 metreye konuyor. Tekerlekli sandalye kullanan biri için bu yükseklik ekranı görmeyi zorlaştırıyor; 1,1–1,2 metre daha rahat oluyor.",
      },
      {
        p: "İşitme güçlüğü olan haneler için ışıklı zil uyarısı takılabiliyor. Kapı çaldığında ünitedeki ışığın yanıp sönmesi ya da ayrı bir lambanın tetiklenmesi, sesi duyulmayan zili görünür kılıyor.",
      },
      {
        p: "Bu iki ayrıntı sonradan da eklenebiliyor ama kablo çekilirken düşünülürse hiçbir ek iş çıkarmıyor. Keşifte hane halkını sormamızın sebeplerinden biri bu.",
      },
      {
        p: "Aynı mantık kapı otomatiği için de geçerli. Ağır bir bina kapısını itmekte zorlanan biri varsa, interkomla birlikte kurulan otomatik kapı açıcı günlük hayatı hissedilir ölçüde kolaylaştırıyor ve kablosu zaten çekilmiş oluyor.",
      },
    ],
    faqs: [
      {
        q: "Mevcut diafon kablomla görüntülüye geçebilir miyim?",
        a: "Çoğu binada geçilebiliyor. İki telli görüntülü sistemler, mevcut sesli diafon hattı üzerinden çalışacak şekilde üretiliyor. Hattın sağlamlığı keşifte ölçülüyor; kopuk ya da çürük çıkarsa yeni kablo gerekiyor.",
      },
      {
        q: "Sadece benim dairem görüntülü olabilir mi?",
        a: "Olabilir. Kapı paneli ve kolon görüntülüyse daire içi üniteler ayrı ayrı seçilebiliyor. Panel seslikaldığı sürece tek dairede görüntü alınamaz; o durumda panelin de değişmesi gerekiyor.",
      },
      {
        q: "Telefondan kapıyı açabilir miyim?",
        a: "IP tabanlı sistemlerde açılabiliyor. İki telli klasik sistemlerde bu özellik yok ama araya eklenen bir modülle bazı modellerde sağlanabiliyor. Modelin bunu destekleyip desteklemediği baştan sorulur.",
      },
      {
        q: "Görüntülü interkom kayıt tutar mı?",
        a: "Çoğu modelde tutuyor. Kapıya gelen kişinin fotoğrafı ya da kısa videosu ünitenin hafızasında saklanıyor. Kapasite sınırlı olduğu için en eskisinin üzerine yazılıyor; kart takılabilen modellerde süre uzuyor.",
      },
      {
        q: "Diafon cızırtı yapıyor, komple değişmesi mi gerekiyor?",
        a: "Genelde gerekmiyor. Cızırtının en sık sebebi buatlardaki gevşek ek ve zayıflamış güç kaynağı. İkisi de tek tek kontrol edilip düzeltilebiliyor; komple değişim ancak hat çürüdüyse gündeme geliyor.",
      },
      {
        q: "Kaç yıl kullanılır?",
        a: "Panel ve kolon on beş yılı rahat görüyor. Daire içindeki ekranlı ünitenin ömrü on yıl civarında; ekran yaşlandığında yalnız o ünite değişiyor, sistemin geri kalanı kalıyor. Panel malzemesi metal seçilirse dış koşullarda ömür daha da uzuyor, plastik gövdeli modeller güneşte birkaç yılda sararmaya başlıyor.",
      },
      {
        q: "Kapı otomatiğiyle birlikte kurulabilir mi?",
        a: "Kurulabiliyor ve birlikte yapıldığında hem kablo hem işçilik ortak oluyor. Bahçe kapısı otomatiği, interkom paneliyle aynı hat üzerinden kumanda edilecek şekilde planlanıyor.",
      },
      {
        q: "Elektrik kesilince kapı ne oluyor?",
        a: "Kilidin tipine bağlı. Elektrikli kilit karşılığı kesintide kilitli kalır, manyetik kilit açılır. Apartman girişlerinde yaygın olan elektrikli karşılıkta kapı anahtarla açılmaya devam eder.",
      },
      {
        q: "Panel dışarıda, yağmurdan bozulur mu?",
        a: "Saçak altına alınan paneller uzun yıllar sorunsuz gidiyor. Açıkta kalan ve doğrudan yağmur alan panellerde buton ve kamera camı ilk yıpranan yerler. Küçük bir yağmurluk ya da saçak, panel ömrünü kat kat uzatıyor.",
      },
    ],
    related: ["guvenlik-kamerasi-secim-rehberi", "apartman-ortak-alan-yenileme", "elektrik-tesisati-yenileme-belirtileri"],
  },

  {
    slug: "is-yeri-alarm-sistemi",
    title: "İş yerine alarm sistemi: hangi sensör nereye?",
    category: "Güvenlik",
    published: "2026-08-16",
    reading: 10,
    metaTitle: "İş Yeri Alarm Sistemi | Sensör Yerleşimi ve Kurulum",
    metaDesc:
      "Hareket, manyetik kontak, cam kırılma ve titreşim sensörü nereye konur? Bölge planı, yanlış alarm nedenleri ve kamerayla birlikte çalışma.",
    keywords: [
      "iş yeri alarm sistemi",
      "hırsız alarmı",
      "PIR hareket sensörü",
      "manyetik kontak",
      "alarm bölge planı",
    ],
    excerpt:
      "Alarm sisteminin işe yarayıp yaramaması cihaz markasına değil, sensörlerin nereye konduğuna bağlı. Yanlış yerleştirilmiş bir sensör, ya sürekli boşuna çalıyor ya da gereken anda susuyor.",
    services: ["kamera-guvenlik-sistemleri", "elektrik-tesisati", "uzaktan-kumanda-otomasyon"],
    intro:
      "Dükkân, depo ve ofislerde alarm sistemi çoğu durumda bir hırsızlık olayından sonra gündeme geliyor. Kurulum kararı verildikten sonra da bütün konuşma cihaz markasında geçiyor. Oysa sistemin gerçekten koruyup korumadığını belirleyen şey, hangi sensörün nereye konduğu ve bölgelerin nasıl ayrıldığı.",
    body: [
      { h2: "Sistem neyden oluşuyor?" },
      {
        p: "Bir alarm sisteminin merkezinde panel var; sensörler ona bağlanıyor, o da siren, ışık ve haber verme birimini çalıştırıyor. Kullanıcı tarafında keypad ya da telefon uygulaması bulunuyor.",
      },
      {
        p: "Sensör çeşidi az sayıda ve her biri farklı bir olayı yakalıyor. Doğru sistem, tek tip sensörü çoğaltmak değil, yere uygun olanı seçmek üzerine kuruluyor.",
      },

      { h2: "Sensör tipleri" },
      {
        table: {
          head: ["Sensör", "Ne yakalar", "Nereye uygun"],
          rows: [
            ["Hareket (PIR)", "Isı veren hareketli cisim", "Koridor, salon, depo içi"],
            ["Manyetik kontak", "Kapı veya pencerenin açılması", "Giriş, arka kapı, kepenk"],
            ["Cam kırılma", "Cam kırılma sesi", "Vitrin, geniş pencereli cephe"],
            ["Titreşim", "Duvar veya kasaya darbe", "Kasa, duvar, ATM çevresi"],
            ["Perde tipi PIR", "Dar bir hat boyunca geçiş", "Pencere önü, cephe boyu"],
            ["Duman ve su", "Yangın ve su baskını", "Depo, sunucu odası, mutfak"],
          ],
        },
      },
      {
        p: "Son satır alarm sisteminin az bilinen faydası: aynı panel hırsızlıkla birlikte yangın ve su baskınını da haber verebiliyor. Depolarda bu iki sensör, hırsız sensörlerinden daha çok iş görüyor.",
      },

      { h2: "Önce çevre, sonra iç" },
      {
        p: "Sağlıklı bir plan dıştan içe kuruluyor. Birinci halka kapı ve pencerelerdeki manyetik kontaklar; giren kişiyi daha içeri girmeden yakalıyor. İkinci halka içerideki hareket sensörleri; ilk halkayı atlayan biri buraya takılıyor.",
      },
      {
        p: "Yalnızca hareket sensörüyle kurulan sistemlerde hırsız zaten içeri girmiş oluyor. Yalnızca kontakla kurulanlarda ise camdan giren kişi hiç algılanmıyor. İki halka birlikte kurulduğunda sistem gerçekten kapanıyor.",
      },

      { h2: "Hareket sensörü nereye?" },
      {
        p: "PIR sensörler ısı farkını görüyor ve en iyi, hareketin önlerinden yana doğru geçtiği açıda çalışıyor. Doğrudan üzerlerine yürüyen bir kişiyi geç algılıyorlar.",
      },
      {
        ul: [
          "Köşeye, 2,2–2,4 metre yüksekliğe konur; oda geniş açıyla taranır.",
          "Kapıya doğrudan bakmak yerine kapıdan içeri giren yolu keserek yerleştirilir.",
          "Klima, ısıtıcı ve doğrudan güneş gören pencerelerin karşısına konmaz.",
          "Deponun raf aralarında görüş kapanıyorsa perde tipi sensör tercih edilir.",
          "Yüksek tavanlı yerlerde menzil düşer; sensör sayısı artırılır.",
        ],
      },
      {
        p: "Üçüncü madde yanlış alarmın bir numaralı sebebi. Isınan bir kalorifer ya da öğleden sonra hareket eden güneş lekesi, sensöre hareket gibi görünüyor.",
      },

      { h2: "Vitrinli dükkânlarda" },
      {
        p: "Cam cepheli dükkânlarda camın kırılması, kapının açılmasından daha olası. Burada cam kırılma sensörü ya da cephe boyunca perde tipi PIR kullanılıyor.",
      },
      {
        p: "Cam kırılma sensörünün menzili sınırlı; camdan uzağa konduğunda sesi yakalamıyor. Vitrin genişse birden fazla sensör gerekiyor. Kepenk varsa kepenge ayrı bir kontak takmak da işe yarıyor; kepenk kaldırıldığı anda alarm çalışıyor.",
      },

      { h2: "Bölge ayrımı neden önemli?" },
      {
        p: "Panel, sensörleri bölgelere ayırıyor. Bunun iki faydası var: alarm çaldığında hangi noktadan geldiği bilinir, ve iş yerinin bir bölümü açıkken diğeri korumada kalabilir.",
      },
      {
        p: "Mesela deposu ayrı olan bir dükkânda, gündüz dükkân açıkken depo bölgesi devrede kalabiliyor. Ofislerde de mesai sonrası bir kişi çalışmaya devam ederken sadece o kat devre dışı bırakılıyor.",
      },

      { h2: "Giriş gecikmesi ayarı" },
      {
        p: "Sistem kurulduktan sonra kapıdan giren kişinin şifreyi girmesi için bir süre tanınıyor. Bu süre çok uzun tutulursa sistem işe yaramıyor, çok kısa tutulursa her sabah alarm çalıyor.",
      },
      {
        p: "Pratikte otuz saniye çoğu yer için yeterli. Keypad kapıya yakın konursa süre daha da kısaltılabiliyor. Keypad'in kapıdan görünmeyecek bir noktada olması da ayrıca önemli.",
      },

      { h2: "Kablolu mu, kablosuz mu?" },
      {
        table: {
          head: ["Konu", "Kablolu", "Kablosuz"],
          rows: [
            ["Kurulum", "Kablo çekimi gerekir", "Hızlı, kırım yok"],
            ["Kiralık yerde", "Zor", "Uygun"],
            ["Pil bakımı", "Yok", "Yılda bir kontrol"],
            ["Sinyal kesintisi", "Yok", "Uzak noktalarda olabilir"],
            ["Genişletme", "Kablo gerekir", "Sensör eklemek kolay"],
            ["Uzun ömür", "Daha yüksek", "Pil ve modül ömrüne bağlı"],
          ],
        },
      },
      {
        p: "Yeni yapıda ya da tadilat sırasında kablolu sistem daha sağlam bir düzen kuruyor. Kiralık bir dükkânda ya da hazır bir yerde kablosuz sistem çok daha pratik oluyor.",
      },

      { h2: "Haber verme yolu" },
      {
        p: "Alarmın yalnızca siren çalması artık yetmiyor. Sistem, olayı sahibine ve gerekiyorsa izleme merkezine ulaştırmalı. Bunun iki yolu var: internet üzerinden bildirim ve mobil şebeke üzerinden arama ya da mesaj.",
      },
      {
        p: "İkisinin birlikte kurulması en sağlam düzen. İnternet kesilirse mobil hat devreye giriyor. Kablo kesilerek yapılan girişimlerde bu ikili yapı sistemin sessiz kalmasını önlüyor.",
      },

      { h2: "Kamerayla birlikte çalışma" },
      {
        p: "Alarm bir olay olduğunu söylüyor, kamera ne olduğunu gösteriyor. İkisi bağlandığında alarm anında ilgili kameranın görüntüsü telefona düşüyor ve gerçek bir olay mı, yanlış alarm mı, saniyeler içinde anlaşılıyor.",
      },
      {
        p: "Bu bağlantı, boşuna yola çıkmayı da bitiriyor. Gece yarısı çalan her alarm için dükkâna gitmek zorunda kalmıyorsunuz.",
      },

      { h2: "Yanlış alarmın nedenleri" },
      {
        ol: [
          "Sensörün klima, ısıtıcı ya da güneş gören yüzeyi görmesi.",
          "Sallanan tabela, perde ya da asılı malzeme.",
          "Kemirgen ve kuş hareketi; depolarda sık görülüyor.",
          "Zayıflamış pil; kablosuz sensörlerde ilk belirti düzensiz tetikleme.",
          "Kapının tam kapanmaması; kontak arada bir açılıp kapanıyor.",
        ],
      },
      {
        p: "Yanlış alarm sadece rahatsız edici değil, sistemi işlevsiz de bırakıyor. Birkaç kez boşuna çaldıktan sonra insanlar alarmı kurmaz oluyor. O yüzden ilk haftada çıkan her yanlış alarmın sebebi tek tek bulunup düzeltilir.",
      },

      { h2: "Sirenin yeri" },
      {
        p: "Dış siren, ulaşılması zor bir yüksekliğe ve mümkünse cadde tarafına konuyor. İç siren ise giren kişiyi rahatsız edecek şekilde içeride kalıyor; yüksek ses tek başına caydırıcı oluyor.",
      },
      {
        p: "Sirenin kendi pili olması da önemli. Kablosu kesildiğinde susan bir siren, sistemin en zayıf halkası hâline geliyor.",
      },

      { h2: "Kurulum sonrası" },
      {
        ul: [
          "Her sensör tek tek test edilir; bölge numarasıyla eşleştiği görülür.",
          "Şifreler kullanıcı bazında ayrılır, kim ne zaman kurmuş görülebilir.",
          "Haber verme yolu gerçek bir tetiklemeyle denenir.",
          "Kesintide sistemin ne kadar dayandığı ölçülür.",
          "Bölge planı bir kâğıda çizilip panonun yanında bırakılır.",
        ],
      },
      {
        p: "Sondaki kâğıt, yıllar sonra bir arıza çıktığında hangi sensörün nerede olduğunu aramaktan kurtarıyor.",
      },

      { h2: "Bakım" },
      {
        p: "Yılda bir bütün sensörlerin test edilmesi, kablosuz olanların pil durumunun görülmesi ve panel akümülatörünün ölçülmesi yeterli. Akü ömrü sıklıkla üç–dört yıl; bittiğinde sistem elektrik kesintisinde koruma dışı kalıyor.",
      },
      {
        p: "Depolarda ayrıca sensörlerin önünü kapatan raf düzeni değişmiş mi, ona bakılıyor. Yeni gelen bir raf, koca bir bölgeyi kör edebiliyor.",
      },

      { h2: "Malatya'da tipik kurulumlar" },
      {
        p: "Merkezdeki dükkânlarda en çok kurduğumuz düzen kepenk kontağı, vitrin için cam kırılma sensörü ve içeride iki hareket sensöründen oluşuyor. Sanayi bölgesindeki atölyelerde ise perde tipi sensörler ve kamera bağlantısı öne çıkıyor.",
      },
      {
        p: "Kırsaldaki depo ve ahırlarda internet kesintisi sık olduğu için mobil hat üzerinden haber verme neredeyse zorunlu. Bu bölgelerde su ve duman sensörünü de aynı panele bağlamak, sistemi tek amaçlı olmaktan çıkarıyor.",
      },

      { h2: "Sabotaja karşı koruma" },
      {
        p: "İyi bir panel, sensörün kablosu kesildiğinde ya da kapağı açıldığında da alarm veriyor. Buna sabotaj koruması deniyor ve sistem devrede değilken bile çalışıyor.",
      },
      {
        p: "Kablosuz sistemlerde ayrıca sinyal karıştırma tespiti bulunuyor. Panel, kendisine ulaşan sinyalin bozulduğunu görürse uyarı üretiyor. Bu özelliklerin açık olup olmadığı kurulumda kontrol edilir; bazı cihazlarda fabrika ayarında kapalı geliyor.",
      },

      { h2: "Şifre düzeni" },
      {
        p: "Herkesin aynı şifreyi kullandığı sistemlerde kimin ne zaman kurup kaldırdığı bilinmiyor. Çalışan başına ayrı şifre vermek, hem sorumluluğu netleştiriyor hem işten ayrılan kişinin erişimini tek hamlede kapatıyor.",
      },
      {
        p: "Bir de baskı şifresi var: zorla sistemi kapattırılan kişi bu şifreyi girdiğinde alarm sessizce merkeze gidiyor. Nakit tutan iş yerlerinde bu özellik anlamlı hâle geliyor.",
      },

      { h2: "Panel nereye konur?" },
      {
        p: "Panelin kendisi giriş kapısından görünmeyen, kolay ulaşılamayan bir yerde durmalı. Girer girmez göze çarpan bir panel, ilk hedef oluyor.",
      },
      {
        p: "Keypad ise tersine, kapıya yakın ve rahat ulaşılır olmalı; giriş gecikmesi bu mesafeye göre ayarlanıyor. İkisini ayırmak, hem kullanım kolaylığı hem güvenlik açısından doğru düzen.",
      },

      { h2: "Yangın ve su sensörü" },
      {
        p: "Alarm panelini yalnızca hırsızlık için kullanmak, sistemin yarısını boş bırakmak oluyor. Aynı panele bağlanan duman sensörü gece çıkan bir yangını, su sensörü ise patlamış bir boruyu saatler önce haber veriyor.",
      },
      {
        p: "Depolarda ve sunucu odalarında bu iki sensör, hırsız sensörlerinden daha sık iş görüyor. Maliyeti de düşük; mevcut panele sensör eklemek yeni bir sistem kurmayı gerektirmiyor.",
      },

      { h2: "Sisteme ne zaman ekleme yapılır?" },
      {
        ul: [
          "Yerin planı değiştiğinde; yeni bölme, yeni kapı, taşınan raflar.",
          "Yeni bir dış kapı ya da pencere açıldığında.",
          "Depo ya da ek bina eklendiğinde; ayrı bölge olarak tanımlanır.",
          "Çalışan sayısı arttığında; şifre düzeni yeniden kurulur.",
          "Kamera eklendiğinde; alarm–kamera bağlantısı güncellenir.",
        ],
      },
      {
        p: "Bu değişikliklerin çoğu mevcut panele sensör eklemekle çözülüyor. Panelin kaç bölgeye kadar büyüyebildiği ilk kurulumda sorulursa ileride bu esneklik elde kalıyor.",
      },

      { h2: "Kurulum maliyetini belirleyenler" },
      {
        ul: [
          "Sensör sayısı ve tipi; cam kırılma ve titreşim sensörleri daha pahalı.",
          "Kablolu mu kablosuz mu; kablolu sistemde işçilik, kablosuzda cihaz ağır basıyor.",
          "Bölge sayısı ve panelin kapasitesi.",
          "Haber verme yolu; mobil modül ek kalem.",
          "Kamera bağlantısı yapılıp yapılmayacağı.",
          "İzleme merkezi aboneliği isteniyor mu.",
        ],
      },
      {
        p: "Bu listede en çok değişen birinci madde. Aynı büyüklükteki iki dükkânda, cam cephesi olan ile olmayan arasında sensör düzeni bambaşka çıkıyor.",
      },

      { h2: "Alarm kurmayı alışkanlık hâline getirmek" },
      {
        p: "En iyi sistem bile kurulmadığı zaman işe yaramıyor. Pratikte en çok işe yarayan çözüm, sistemi kapanış rutinine bağlamak: son çıkan kişi kepengi indirip alarmı kuruyor.",
      },
      {
        p: "Telefon uygulaması bu alışkanlığı destekliyor. Sistem kurulmadan belli bir saat geçerse hatırlatma gönderen paneller var; unutulan gecelerin çoğunu bu küçük özellik kapatıyor.",
      },
      {
        p: "Bir de kurulum onayı önemli: sistem kurulduğunda keypad kısa bir ses veriyor ve telefona bildirim gidiyor. Kapıdan çıkarken kurulup kurulmadığını merak etmek kalmıyor.",
      },

      { h2: "Sigorta ve kayıt tarafı" },
      {
        p: "İş yeri sigortası yaptıran çoğu kişi, poliçedeki güvenlik önlemleri maddesini okumadan geçiyor. Bazı poliçelerde alarm sisteminin varlığı ve türü, hasar sonrası ödemeyi etkileyebiliyor.",
      },
      {
        p: "Kurulum sonrası cihaz listesi, sensör yerleşim planı ve montaj tarihini içeren bir belge dosyada dursun. Hem sigorta görüşmesinde hem ileride sistem büyütülürken işe yarıyor.",
      },
      {
        p: "Sistemin ürettiği olay kaydı da benzer biçimde değerli. Panel, kim ne zaman kurdu kaldırdı, hangi bölge tetiklendi, hepsini tutuyor. Bir olay sonrası ilk bakılacak yer burası oluyor.",
      },
    ],
    faqs: [
      {
        q: "Kaç sensör gerekir?",
        a: "Yerin planına bağlı. Kaba ölçü şu: her dış kapı ve açılan pencereye bir kontak, her bağımsız hacme bir hareket sensörü, geniş vitrine cam kırılma sensörü. Küçük bir dükkânda 5–7 sensör yeterli oluyor.",
      },
      {
        q: "Kablosuz sistem güvenli mi?",
        a: "Güncel sistemler şifreli haberleşiyor ve sinyal kesilirse panel uyarı veriyor. Kiralık yerlerde ve kırım istenmeyen kurulumlarda rahatlıkla kullanılıyor. Tek bakım kalemi pil; yılda bir kontrol yeterli.",
      },
      {
        q: "Evcil hayvan varsa alarm çalar mı?",
        a: "Standart sensörde çalar. Evcil hayvana duyarsız modeller belli bir ağırlığın altındaki hareketi yok sayıyor. Sensörün yüksekliği ve açısı da bu ayrımı destekleyecek şekilde ayarlanıyor.",
      },
      {
        q: "Elektrik kesilirse sistem çalışır mı?",
        a: "Panelde akümülatör var, kesintide sistem çalışmaya devam ediyor. Süre akünün durumuna göre değişiyor; sağlıklı bir akü sekiz saatin üzerinde taşıyor. Akü ömrü üç–dört yıl, sonrasında değişmesi gerekiyor.",
      },
      {
        q: "Alarm ve kamerayı aynı sistemde toplayabilir miyim?",
        a: "Toplayabilirsiniz. Alarm tetiklendiğinde ilgili kameranın görüntüsü telefona düşüyor. Bu bağlantı yanlış alarmla gerçek olayı ayırmayı kolaylaştırıyor ve boşuna yola çıkmayı bitiriyor.",
      },
      {
        q: "İzleme merkezine bağlanmak şart mı?",
        a: "Şart değil. Küçük iş yerlerinde telefona bildirim sıklıkla yetiyor. Gece kimsenin ulaşamayacağı uzak bir yer söz konusuysa izleme merkezi anlamlı hâle geliyor.",
      },
      {
        q: "Mevcut sisteme sensör eklenebilir mi?",
        a: "Panelin bölge kapasitesi elverdiği sürece eklenebiliyor. Kablosuz sistemlerde yeni sensör panele tanıtılıyor, iş yarım saatte bitiyor. Kablolu sistemde hat çekmek gerekiyor; kapasite dolduysa genişletme modülü ekleniyor.",
      },
      {
        q: "Alarm sesi ne kadar sürüyor?",
        a: "Siren çoğu kez birkaç dakika çalıp susuyor, sonra sistem tekrar tetiklenmeye hazır bekliyor. Sürekli çalan siren hem çevreyi rahatsız ediyor hem aküyü bitiriyor. Süre panelden ayarlanıyor.",
      },
    ],
    related: ["guvenlik-kamerasi-secim-rehberi", "dukkan-tadilati-elektrik-aydinlatma", "elektrik-panosu-bakimi"],
  },

  {
    slug: "led-panel-mi-spot-mu",
    title: "Asma tavanda LED panel mi, spot mu?",
    category: "Aydınlatma",
    published: "2026-08-16",
    reading: 9,
    metaTitle: "LED Panel mi Spot mu? | Asma Tavan Aydınlatma Seçimi",
    metaDesc:
      "Asma tavanda panel ve spot arasındaki fark, ışık dağılımı, kaç adet gerekir, renk sıcaklığı, göz kamaşması ve ofis ile ev için ayrı öneriler.",
    keywords: [
      "LED panel",
      "spot aydınlatma",
      "asma tavan aydınlatma",
      "lümen hesabı",
      "renk sıcaklığı",
    ],
    excerpt:
      "Aynı odaya aynı toplam ışığı iki farklı şekilde koyabilirsiniz. Biri yüzeyi eşit yayar, diğeri lekeli bir zemin bırakır. Fark cihazda değil, ışığın nasıl dağıldığında.",
    services: ["avize-aydinlatma", "alcipan-asma-tavan", "elektrik-tesisati"],
    intro:
      "Asma tavan yapılırken aydınlatma kararı genelde en sona kalıyor ve alışkanlıkla spot seçiliyor. Oysa panel ile spot bambaşka iki ışık davranışı üretiyor; hangisinin doğru olduğu odanın işine, tavan yüksekliğine ve istenen atmosfere göre değişiyor.",
    body: [
      { h2: "İki ürün ne yapıyor?" },
      {
        p: "LED panel geniş bir yüzeyden yumuşak ışık veriyor; gölgeleri yumuşatıyor, tavanı eşit aydınlatıyor. Spot ise dar bir açıdan noktasal ışık atıyor; altında parlak bir alan, aralarda daha karanlık bölgeler bırakıyor.",
      },
      {
        p: "Bu fark, ikisinin farklı işlere uygun olduğunu gösteriyor. Ofis, mutfak ve çalışma alanı gibi eşit aydınlık isteyen yerlerde panel; vurgu, derinlik ve atmosfer istenen yerlerde spot öne çıkıyor.",
      },

      { h2: "Yan yana karşılaştırma" },
      {
        table: {
          head: ["Konu", "LED panel", "Spot"],
          rows: [
            ["Işık dağılımı", "Geniş ve eşit", "Noktasal"],
            ["Gölge", "Yumuşak", "Belirgin"],
            ["Adet ihtiyacı", "Az", "Fazla"],
            ["Kablo işçiliği", "Az nokta", "Çok nokta"],
            ["Vurgu yapma", "Zayıf", "Güçlü"],
            ["Tavan görünümü", "Düz ve sade", "Ritmik"],
          ],
        },
      },
      {
        p: "Karma çözüm de yaygın: temel aydınlığı panel veriyor, mobilya ve duvar vurguları için birkaç spot ekleniyor. Ev projelerinde en çok bu düzen tutuyor.",
      },

      { h2: "Ne kadar ışık gerekiyor?" },
      {
        p: "Hesap lümen üzerinden yapılıyor. Odanın metrekaresi, o işe uygun aydınlık düzeyiyle çarpılıyor ve gereken toplam lümen çıkıyor.",
      },
      {
        table: {
          head: ["Mekân", "Hedef", "20 m² için"],
          rows: [
            ["Salon", "150 lüks", "3000 lümen"],
            ["Mutfak tezgâhı", "300 lüks", "6000 lümen"],
            ["Ofis, çalışma", "400 lüks", "8000 lümen"],
            ["Yatak odası", "100 lüks", "2000 lümen"],
            ["Dükkân satış alanı", "500 lüks", "10000 lümen"],
            ["Depo, koridor", "100 lüks", "2000 lümen"],
          ],
        },
      },
      {
        p: "Tabloyu okumanın yolu şu: 60×60 bir panel yaklaşık 3600 lümen veriyor, 7 watt bir spot yaklaşık 600 lümen. Yirmi metrekarelik bir ofis için iki panel yetiyor, aynı iş için on üç spot gerekiyor.",
      },

      { h2: "Tavan yüksekliğinin etkisi" },
      {
        p: "Spotun altındaki aydınlık, mesafeyle hızla azalıyor. 2,5 metre tavanda iş gören bir spot düzeni, 3,5 metrede zemine yeterli ışık indirmiyor.",
      },
      {
        p: "Yüksek tavanlarda ya spot sayısı artıyor ya daha dar açılı, güçlü armatürlere geçiliyor. Panel bu konuda daha affedici; geniş yüzeyi sayesinde yükseklik arttıkça aydınlık daha yavaş düşüyor.",
      },

      { h2: "Spot aralığı nasıl belirlenir?" },
      {
        p: "Pratik kural, spotlar arasındaki mesafeyi tavan yüksekliğinin yaklaşık yarısı kadar tutmak. 2,7 metre tavanda 1,2–1,4 metre aralık çoğunlukla dengeli bir zemin veriyor.",
      },
      {
        p: "Duvara olan mesafe ise yarım aralık kadar bırakılıyor. Duvara çok yaklaşan spotlar duvarda parlak bir yıkama etkisi yapıyor; bu bazen istenen bir şey, bazen kusurlu duvarı ele veren bir hata.",
      },

      { h2: "Renk sıcaklığı" },
      {
        p: "Kelvin değeri ışığın sarılığını ya da beyazlığını belirliyor. Aynı odada farklı kelvin değerleri kullanmak, mekânı dağınık gösteren en sık hata.",
      },
      {
        ul: [
          "2700–3000 K: sıcak beyaz. Salon, yatak odası, restoran.",
          "4000 K: doğal beyaz. Mutfak, banyo, koridor, ofis.",
          "5000–6500 K: gün ışığı. Atölye, depo, teknik alan.",
          "Aynı hacimde tek değer kullanılır; geçişler kapı hizasında yapılır.",
        ],
      },
      {
        p: "Ev projelerinde en çok yapılan düzeltme şu: mutfakta 4000 K, salonda 3000 K. İkisi arası geçiş açık bir plan şemasındaysa tek değere inmek daha temiz duruyor.",
      },

      { h2: "Göz kamaşması" },
      {
        p: "Ucuz spotlarda LED yüzeyi doğrudan görünüyor ve odaya girdiğinizde gözünüz kamaşıyor. Aynı sorun kalitesiz panellerde de var; yüzey difüzörü zayıfsa panel bir parlaklık lekesi gibi duruyor.",
      },
      {
        p: "Çözüm, LED'i içeri gömen gövdeli armatürler ya da difüzörü kaliteli paneller. Ofis ve okuma alanlarında bu detay konforu birebir belirliyor; ekrana bakılan yerlerde ise neredeyse zorunlu.",
      },

      { h2: "Sürücü tarafı" },
      {
        p: "Hem panel hem spot bir sürücüyle çalışıyor ve arızaların çoğu LED'de değil sürücüde çıkıyor. Sürücüsü değiştirilebilir armatür seçmek, birkaç yıl sonra tüm armatürü atmaktan kurtarıyor.",
      },
      {
        p: "Asma tavanda sürücülerin ulaşılabilir olması da önemli. Tavan içine gömülüp erişilemeyen sürücüler arızalandığında alçıpan kesmek gerekiyor. Denetim kapağı ya da armatür deliğinden erişim baştan planlanır.",
      },

      { h2: "Kısılabilir olsun mu?" },
      {
        p: "Işık şiddetini ayarlayabilmek, salon ve yatak odasında konforu gözle görülür ölçüde artırıyor. Ama hem armatürün hem sürücünün hem anahtarın uyumlu olması gerekiyor.",
      },
      {
        p: "Uyumsuz bir üçlüde ışık titriyor ya da alt seviyede tamamen sönüyor. O yüzden kısılabilir sistem kurulacaksa üçlü baştan birlikte seçilir; sonradan yalnız anahtar değiştirerek sonuç alınamıyor.",
      },

      { h2: "Ofis ve dükkânda" },
      {
        p: "Ticari alanlarda hesap sadece aydınlık değil, tüketim de. Panel, aynı ışığı daha az armatürle verdiği için çoğu durumda daha ekonomik çıkıyor. Ayrıca temizlik ve bakım kalemi de azalıyor.",
      },
      {
        p: "Buna karşılık ürün vurgusu isteyen mağazalarda spot vazgeçilmez. Yaygın düzen şu: genel aydınlığı panel ya da lineer armatür veriyor, raf ve vitrin üstüne ray spot ekleniyor.",
      },

      { h2: "Kablo ve nokta planı" },
      {
        p: "Spot sayısı arttıkça tavandaki bağlantı noktası da artıyor. Her nokta bir buat, bir ek ve olası bir arıza noktası demek.",
      },
      {
        ol: [
          "Armatür yerleri alçıpan kesilmeden önce tavan planına çizilir.",
          "Havalandırma menfezi, sprinkler ve perde kutusu aynı plana işlenir.",
          "Anahtar grupları oda kullanımına göre ayrılır.",
          "Sürücü konumları erişilebilir noktalara alınır.",
          "Plan bir kopya olarak ev sahibine bırakılır.",
        ],
      },
      {
        p: "Bu plan olmadan yapılan tavanlarda menfezle spot çakışıyor ve armatür yeri son anda kaydırılıyor; ritim bozuluyor.",
      },

      { h2: "Sık yapılan hatalar" },
      {
        ul: [
          "Odayı tek bir merkez armatürle aydınlatmaya çalışmak.",
          "Spot sayısını gözle belirleyip lümen hesabını atlamak.",
          "Mutfakta tezgâhın üstüne değil, tam arkasına spot koymak; gölge tezgâha düşüyor.",
          "Aynı hacimde farklı renk sıcaklıkları karıştırmak.",
          "Bütün aydınlatmayı tek anahtara bağlamak.",
        ],
      },
      {
        p: "Üçüncü madde mutfaklarda en sık karşılaştığımız kusur. Tezgâh aydınlatması ya dolap altına alınıyor ya spot tezgâhın önüne kaydırılıyor.",
      },

      { h2: "Karar tablosu" },
      {
        table: {
          head: ["Mekân", "Öneri"],
          rows: [
            ["Ofis, çalışma odası", "Panel"],
            ["Salon", "Panel veya gizli ışık + birkaç spot"],
            ["Mutfak", "Panel + tezgâh altı şerit"],
            ["Koridor, hol", "Spot"],
            ["Mağaza satış alanı", "Panel veya lineer + ray spot"],
            ["Depo, atölye", "Yüksek tavan armatürü"],
          ],
        },
      },
      {
        p: "Tablodaki hiçbir satır katı değil; odanın kullanımı değiştiğinde öneri de değişiyor. Karar verirken en iyi soru şu: bu odada en çok hangi iş yapılıyor?",
      },

      { h2: "Malatya'da neye dikkat ediyoruz?" },
      {
        p: "Yeni yapılarda tavan yüksekliği çoğunlukla 2,6–2,8 metre; bu aralık panel için de spot için de rahat çalışıyor. Eski binalarda tavan alçaldığı için panelin yüzeyden verdiği yumuşak ışık daha ferah bir sonuç veriyor.",
      },
      {
        p: "Bir de yaz sıcağı var. Tavan arasının çok ısındığı üst katlarda sürücü ömrü kısalıyor; buralarda havalandırması iyi, gövdesi metal armatürler daha uzun dayanıyor.",
      },

      { h2: "Renk geriverimi neden konuşulmuyor?" },
      {
        p: "Lümen ve kelvin herkesin baktığı iki değer. Üçüncüsü olan renk geriverimi (CRI) ise etikette küçük yazıyor ama mekânın nasıl göründüğünü birebir belirliyor.",
      },
      {
        p: "Düşük CRI'lı bir armatürün altında ahşap ölü, deri solgun, kumaş renksiz duruyor. Ev ve mağaza aydınlatmasında 90 ve üzeri bir değer aranır; depo ve teknik alanda 80 yeterli oluyor. Aynı lümende iki armatür arasındaki fiyat farkının sebebi çoğu kez bu.",
      },

      { h2: "Gizli ışık ve bant aydınlatma" },
      {
        p: "Asma tavanın kenarına gizlenen LED şerit, tavanı yıkayarak dolaylı bir aydınlık veriyor. Tek başına yeterli olmuyor ama panelin ya da spotun sertliğini kırıyor.",
      },
      {
        p: "Gizli ışıkta iki şey belirleyici: şeridin metre başına watt değeri ve kanalın derinliği. Sığ bir kanalda şerit tek tek nokta gibi görünüyor; en az beş–altı santim derinlik bırakmak bu izi yok ediyor.",
      },

      { h2: "Acil aydınlatma" },
      {
        p: "Dükkân, ofis ve ortak alanlarda elektrik kesildiğinde çıkış yolunu gösteren armatürler gerekiyor. Bunlar kendi pilleriyle çalışıyor ve kesintide otomatik yanıyor.",
      },
      {
        p: "Asma tavan planı yapılırken bu armatürlerin yeri de aynı plana işleniyor. Sonradan eklendiğinde ya ritmi bozuyor ya kablo çekmek için tavan kesiliyor.",
      },

      { h2: "Anahtar grupları" },
      {
        p: "Bir odanın bütün aydınlatmasını tek anahtara bağlamak, en sık pişman olunan karar. Salon örneğinde üç grup çoğu evde yetiyor: genel aydınlık, oturma alanı vurgusu, gizli ışık.",
      },
      {
        p: "Gruplar arttıkça anahtar da büyüyor; dört grubu geçen odalarda ya çoklu anahtar ya basit bir kumanda sistemi tercih ediliyor. Bu karar, kablo çekilmeden önce verilmeli.",
      },

      { h2: "Değişim ve bakım" },
      {
        ul: [
          "Armatürün modeli ve rengi bir kâğıda not edilir; yıllar sonra aynısını bulmak kolaylaşıyor.",
          "Bir–iki yedek armatür alınır; aynı seri sonradan bulunamayabiliyor.",
          "Yılda bir difüzörler silinir; toz ışığın gözle görülür kısmını yutuyor.",
          "Arızada önce sürücü kontrol edilir, LED nadiren bozuluyor.",
          "Aynı odada armatür değişirken renk sıcaklığı eskisiyle eşleştirilir.",
        ],
      },
      {
        p: "Sondaki kalem önemsiz görünüyor ama tek bir farklı armatür bütün tavanı yamalı gösteriyor.",
      },

      { h2: "Panelin arkasındaki boşluk" },
      {
        p: "Gömme panel için asma tavan ile beton arasında yeterli boşluk gerekiyor. Çoğu panelde altı–sekiz santim yetiyor ama sürücü de aynı boşluğa giriyor.",
      },
      {
        p: "Tavanın çok alçaldığı yerlerde ince gövdeli paneller ya da sıva üstü modeller devreye giriyor. Bu karar alçıpan iskelesi kurulmadan verilmeli; iskele yapıldıktan sonra boşluk değiştirilemiyor.",
      },
      {
        p: "Havalandırma kanalı, sprinkler borusu ve perde kutusu da aynı boşluğu paylaşıyor. Tavan planında bunların hepsi üst üste çizilirse çakışmalar montaj gününden önce görülüyor.",
      },

      { h2: "Doğal ışıkla ilişki" },
      {
        p: "Pencereye yakın armatürlerle iç taraftakileri aynı anahtara bağlamak, gündüz gereksiz yere ışık yakmak demek. Pencere hattını ayrı gruba almak basit ama etkili bir düzen.",
      },
      {
        p: "Büyük ofislerde bu iş ışık sensörüyle otomatikleştiriliyor: dışarıdan gelen ışık arttıkça pencere hattındaki armatürler kısılıyor. Konfor sabit kalıyor, tüketim düşüyor.",
      },

      { h2: "Aydınlatmayı kâğıt üzerinde denemek" },
      {
        p: "Armatür alınmadan önce planı basit bir çizimle denemek mümkün. Odanın planına armatürleri koyup her birinin altına dairesel bir aydınlık alanı çizmek, karanlık kalan bölgeleri gösteriyor.",
      },
      {
        p: "Daha kesin sonuç isteyen projelerde aydınlatma hesabı yazılımla yapılıyor; zemindeki aydınlık dağılımı renkli bir harita olarak çıkıyor. Ofis ve mağaza gibi belli bir lüks değerinin tutturulması gereken yerlerde bu hesap işi garantiye alıyor.",
      },
      {
        p: "Konutta ise bu kadar ileri gitmeye gerek kalmıyor. Metrekare başına lümen hesabı ve armatür aralığı kuralı, çoğu daire için yeterince iyi bir sonuç veriyor.",
      },

      { h2: "Bir armatür örneği alın" },
      {
        p: "Toplu siparişten önce tek bir armatür alıp odada denemek, kataloğa bakarak verilen kararların çoğunu düzeltiyor. Etikette yazan kelvin değeri ile gözün gördüğü ton her zaman örtüşmüyor.",
      },
      {
        p: "Denemeyi akşam, odanın kendi duvar ve mobilya renkleriyle yapmak gerekiyor. Koyu duvarlı bir oda, aynı armatürün altında açık renkli bir odadan gözle görülür ölçüde karanlık duruyor; hesap aynı olsa bile his farklı.",
      },
      {
        p: "Bu deneme özellikle renk geriverimi için değerli. İki armatürü yan yana koyup ahşaba ve kumaşa bakmak, sayıların anlatamadığı farkı bir bakışta gösteriyor.",
      },
    ],
    faqs: [
      {
        q: "20 metrekarelik odaya kaç spot gerekir?",
        a: "Kullanıma bağlı. Salon için 150 lüks hedeflenirse yaklaşık 3000 lümen gerekir; 600 lümenlik spotla beş adet eder. Aynı oda çalışma odası olacaksa hedef 400 lükse çıkar ve sayı on üçe yaklaşır.",
      },
      {
        q: "Panel ışığı soğuk mu duruyor?",
        a: "Kelvin değerine bağlı, panel olmasıyla ilgisi yok. 3000 K bir panel salonda sıcak bir ışık verir. Soğuk görünen paneller genelde 6500 K seçilmiş oluyor.",
      },
      {
        q: "Spotlar arası mesafe ne olmalı?",
        a: "Tavan yüksekliğinin yaklaşık yarısı iyi bir başlangıç. 2,7 metre tavanda 1,2–1,4 metre dengeli bir zemin veriyor. Duvara olan mesafe bunun yarısı kadar bırakılıyor.",
      },
      {
        q: "LED armatür kaç yıl gider?",
        a: "LED'in kendisi uzun ömürlü; arıza sıklıkla sürücüde çıkıyor. Sürücüsü değiştirilebilen armatürlerde tek parça değişimiyle sistem devam ediyor. Sıcak tavan aralarında ömür kısalıyor.",
      },
      {
        q: "Kısılabilir yapmak için sonradan anahtar değiştirsem yeter mi?",
        a: "Yetmiyor. Armatür, sürücü ve anahtarın üçünün de uyumlu olması gerekiyor. Uyumsuz kurulumda ışık titriyor ya da alt seviyede sönüyor. Kısma düşünülüyorsa üçlü baştan birlikte seçilir.",
      },
      {
        q: "Mutfakta tezgâh neden karanlık kalıyor?",
        a: "Spot tezgâhın arkasına, yani sizin arkanıza denk geldiği için gölge tam çalıştığınız yere düşüyor. Çözüm spotu tezgâhın ön hizasına kaydırmak ya da dolap altına LED şerit eklemek.",
      },
      {
        q: "Asma tavan olmadan panel takılabilir mi?",
        a: "Takılabiliyor. Sıva üstü kasalı paneller doğrudan tavana monte ediliyor, gömme boşluk gerekmiyor. Görünüm biraz daha kalın oluyor ama alçıpan yapmadan aynı ışık dağılımı elde ediliyor.",
      },
      {
        q: "Sürücüler tavan içinde kalırsa sorun olur mu?",
        a: "Arızalandığında sorun oluyor; alçıpan kesmek gerekiyor. Sürücüler armatür deliğinden ulaşılabilecek konuma alınır ya da bir denetim kapağı bırakılır. Bu ayrıntı montaj sırasında planlanıyor.",
      },
    ],
    related: ["ic-mekan-aydinlatma-planlama", "avize-secim-rehberi", "alcipan-nerede-kullanilir"],
  },

  {
    slug: "sensorlu-aydinlatma-nerede",
    title: "Sensörlü aydınlatma nerede işe yarar?",
    category: "Aydınlatma",
    published: "2026-08-16",
    reading: 9,
    metaTitle: "Sensörlü Aydınlatma | Nerede Kurulur, Nasıl Ayarlanır",
    metaDesc:
      "Hareket ve varlık sensörü farkı, merdiven ve otopark uygulamaları, gecikme süresi ayarı, LED uyumu ve sensörün yanlış çalıştığı yerler.",
    keywords: [
      "sensörlü aydınlatma",
      "hareket sensörü",
      "merdiven otomatiği",
      "varlık sensörü",
      "fotosel",
    ],
    excerpt:
      "Sensörlü lamba doğru yere konduğunda kimse varlığını fark etmiyor. Yanlış yere konduğunda ise günde otuz kez insanı sinirlendiren bir şeye dönüşüyor.",
    services: ["avize-aydinlatma", "elektrik-tesisati", "uzaktan-kumanda-otomasyon"],
    intro:
      "Sensörlü aydınlatma iki şey vaat ediyor: elini kullanmadan ışık ve boşa yanmayan lamba. İkisi de doğru; ama sensörün tipi, yeri ve gecikme süresi yanlış seçildiğinde aynı sistem ışığı yürürken söndüren, karanlıkta el sallatan bir şeye dönüşüyor. Bu yazıda hangi sensör nereye uyar, ayarlar nasıl yapılır, ona bakıyoruz.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "Sensörlü aydınlatma, insanın kısa süre kaldığı ve elinin dolu olduğu geçiş alanlarında en çok işe yarıyor: merdiven, koridor, otopark, depo, bahçe yolu, banyo–tuvalet girişi.",
      },
      {
        p: "Uzun süre oturulan yerlerde ise hareket sensörü yerine varlık sensörü kullanılır, yoksa hareketsiz kalınca ışık sönüyor. Bu ayrım sistemin sevilip sevilmemesini belirliyor.",
      },

      { h2: "Hareket sensörü mü, varlık sensörü mü?" },
      {
        p: "İkisi de kızılötesi ile ısı hareketini görüyor ama duyarlılıkları farklı. Hareket sensörü, yürüyen bir insanı yakalayacak kadar hassas. Varlık sensörü ise masada oturan, yalnızca kolunu oynatan birini de algılayacak kadar hassas.",
      },
      {
        p: "Ofiste hareket sensörü kullanılırsa çalışan kişi yirmi dakika sonra karanlıkta kalıyor ve kolunu sallamak zorunda kalıyor. Bu sahne, sensörlü sistemlerin en bilinen şikâyeti.",
      },

      { h2: "Nereye hangisi?" },
      {
        table: {
          head: ["Yer", "Sensör", "Gecikme"],
          rows: [
            ["Apartman merdiveni", "Hareket", "2–3 dakika"],
            ["Koridor, hol", "Hareket", "1–2 dakika"],
            ["Otopark", "Hareket", "3–5 dakika"],
            ["Depo, arşiv", "Hareket", "5–10 dakika"],
            ["Ofis, çalışma odası", "Varlık", "15–20 dakika"],
            ["Tuvalet, banyo", "Varlık", "5 dakika"],
            ["Bahçe yolu", "Hareket + fotosel", "1–2 dakika"],
          ],
        },
      },
      {
        p: "Son satırdaki fotosel önemli: gündüz hareket olduğunda ışığın yanmasını engelliyor. Dış mekânda bu ikisi hep birlikte kullanılıyor.",
      },

      { h2: "Merdiven otomatiği" },
      {
        p: "Apartmanlarda klasik çözüm zaman ayarlı merdiven otomatiği; butona basılıyor, ışık bir süre yanıp sönüyor. Sensörle değiştirildiğinde butona basma ihtiyacı da kalkıyor.",
      },
      {
        p: "Burada kritik ayar, süreyi en yavaş kişinin en üst kata çıkmasına yetecek kadar tutmak. Kısa kalan sürede insanlar merdiven ortasında karanlıkta kalıyor. Her katta ayrı sensör kullanmak bu sorunu tamamen bitiriyor: kişi ilerledikçe önündeki ışık yanıyor.",
      },

      { h2: "Gecikme süresi nasıl seçilir?" },
      {
        p: "Süre iki şeye göre belirleniyor: insanın orada ne kadar kaldığı ve lambanın açılıp kapanmaktan ne kadar yıprandığı. LED armatürlerde açma–kapama yıpratıcı değil ama çok sık anahtarlama sürücü ömrünü kısaltıyor.",
      },
      {
        p: "Yoğun geçiş olan bir koridorda süreyi kısa tutmak, lambanın gün boyu inip kalkmasına yol açıyor. Böyle yerlerde süreyi biraz uzun bırakmak hem konforlu hem armatür için daha iyi.",
      },

      { h2: "Sensör LED ile uyumlu mu?" },
      {
        p: "Eski sensörlerin bir kısmı LED armatürlerle sorun çıkarıyor: ışık sönmüyor, hafif parlıyor ya da açılırken titriyor. Sebebi sensörün minimum yük değeri; akkor ampule göre tasarlanmış bir sensör, birkaç watt çeken LED'i yük olarak görmüyor.",
      },
      {
        p: "Çözüm LED uyumlu sensör kullanmak. Mevcut sensör değiştirilmek istenmiyorsa araya konan küçük bir yük direnci de işi çözüyor ama bu geçici bir çözüm; kalıcısı doğru sensör.",
      },

      { h2: "Menzil ve açı" },
      {
        p: "Katalogda yazan menzil, sensörün önünden yana doğru geçen bir insan için geçerli. Doğrudan sensöre doğru yürüyen kişi çok daha yakında algılanıyor.",
      },
      {
        ul: [
          "Koridorda sensör, yürüme yönünü kesecek şekilde yerleştirilir.",
          "Tavana konan sensörler dairesel tarar; duvara konanlar öne bakar.",
          "Yükseklik arttıkça tarama alanı büyür, duyarlılık düşer.",
          "Cam, ince duvar ve raf sensörün görüşünü keser.",
          "Sıcak yüzeyler ve klima yanlış tetiklemeye yol açar.",
        ],
      },
      {
        p: "Depolarda raf düzeni değiştiğinde sensörün gördüğü alan da değişiyor; yeni raf koyduktan sonra bir kez kontrol etmek yeterli.",
      },

      { h2: "Dış mekânda" },
      {
        p: "Bahçe, giriş ve otopark aydınlatmasında sensör iki işi birden yapıyor: hem konfor hem caydırıcılık. Ansızın yanan bir ışık, gece bahçeye giren birini rahatsız ediyor.",
      },
      {
        p: "Dış mekânda armatürün koruma sınıfı önem kazanıyor; su ve toza dayanıklı olmayan sensörler bir kışı zor çıkarıyor. Ayrıca sensörün yağmur ve rüzgârda sallanan dalları görmemesi için açısı ayarlanıyor.",
      },

      { h2: "Yanlış çalışma nedenleri" },
      {
        ol: [
          "Klima, ısıtıcı ya da güneş gören yüzeyin sensörün görüş alanında olması.",
          "Sensörün yürüme yönüne doğru bakması; kişi çok geç algılanıyor.",
          "Fotosel eşiğinin yanlış ayarı; gündüz de yanıyor ya da akşam geç yanıyor.",
          "LED uyumsuzluğu; sönmeyen ya da titreyen ışık.",
          "Menzilin yetmediği geniş hacimde tek sensör kullanılması.",
        ],
      },
      {
        p: "İlk üç madde kurulum günü on dakikada ayarlanabilen şeyler. Sensörün kendisi kusurlu diye değiştirilen cihazların çoğu aslında yanlış ayarlanmış.",
      },

      { h2: "Ne kadar kazandırıyor?" },
      {
        p: "Kazanç, ışığın normalde ne kadar boşa yandığına bağlı. Gün boyu açık kalan bir depo koridorunda sensör tüketimi büyük ölçüde düşürüyor. Zaten kısa süre yanan bir holde kazanç neredeyse yok; oradaki fayda konfor.",
      },
      {
        p: "Apartman merdivenlerinde ortak gider açısından fark ediliyor. Özellikle butona basılmadığı için gece boyunca yanık kalan eski düzenlerde değişim kendini hızlı geri ödüyor.",
      },

      { h2: "Anahtarla birlikte kullanmak" },
      {
        p: "Sensörü tamamen otomatiğe bırakmak her yerde iyi sonuç vermiyor. Ofis ve salonlarda araya bir el anahtarı koymak, gerektiğinde ışığı sürekli açık ya da kapalı tutma imkânı veriyor.",
      },
      {
        p: "Üç konumlu anahtarlar bu işi görüyor: otomatik, sürekli açık, kapalı. Toplantı, film izleme ya da temizlik gibi durumlarda bu esneklik sistemi kullanılabilir kılıyor.",
      },

      { h2: "Kurulumda dikkat" },
      {
        ul: [
          "Sensör yüksekliği kataloğa göre ayarlanır; çoğu kez 2,2–2,5 metre.",
          "Ayarlar kurulum günü gerçek kullanımla denenir, gece de kontrol edilir.",
          "Fotosel eşiği akşamüstü ayarlanır; gündüz yapılan ayar tutmuyor.",
          "Aynı hacimde birden çok sensör paralel bağlanabiliyor.",
          "Sensörün beslemesi ayrı sigortadan alınırsa arıza ayırması kolaylaşıyor.",
        ],
      },
      {
        p: "İkinci madde çoğu kurulumda atlanıyor. Öğlen yapılan bir ayar gece bambaşka davranıyor; bir kez akşam gelip bakmak sonraki şikâyetleri bitiriyor.",
      },

      { h2: "Malatya'da nerede kuruyoruz?" },
      {
        p: "En çok apartman merdivenlerinde ve giriş holünde. Eski binalarda merdiven otomatiği zaten arızalı olduğu için sensöre geçmek tadilat gerektirmeden yapılabiliyor.",
      },
      {
        p: "Bahçeli evlerde giriş ve garaj yolu ikinci sırada. Kırsal mahallelerde ise ahır, depo ve avlu aydınlatmasında sensör hem elektrik hem konfor açısından hızlı fark yaratıyor. Bir de kışın soğukta eldivenle anahtar aramayı bitiriyor.",
      },

      { h2: "Sensör tipleri" },
      {
        table: {
          head: ["Tip", "Nasıl çalışır", "Nerede"],
          rows: [
            ["PIR", "Isı hareketini görür", "İç mekân, koridor, bahçe"],
            ["Mikrodalga", "Yansıyan dalgayı ölçer", "Yüksek tavan, engel arkası"],
            ["Ultrasonik", "Ses dalgasıyla tarar", "Bölmeli ofis, tuvalet"],
            ["Karma", "İki yöntemi birlikte", "Yanlış alarma duyarlı yerler"],
            ["Fotosel", "Ortam ışığını ölçer", "Dış aydınlatma"],
          ],
        },
      },
      {
        p: "Mikrodalga sensörler ince bölmenin arkasını da görebiliyor; bu bazen avantaj, bazen sorun. Yan odadaki hareketle ışığın yandığı durumlarda duyarlılık düşürülüyor ya da PIR'a geçiliyor.",
      },

      { h2: "Otoparkta uygulama" },
      {
        p: "Kapalı otoparklarda bütün armatürleri söndürmek yerine kademeli düzen kuruluyor: hareket yokken armatürler düşük seviyede yanıyor, hareket algılandığında tam güce çıkıyor.",
      },
      {
        p: "Bunun iki faydası var. Alan hiçbir zaman zifiri karanlık kalmıyor, kamera görüntüsü sürekli kullanılabilir oluyor; buna karşılık tüketim yine de düşük kalıyor. Kısılabilir armatür ve uyumlu sensör gerektiriyor.",
      },

      { h2: "Banyo ve tuvalette" },
      {
        p: "Bu hacimlerde hareket sensörü sık sorun çıkarıyor; kişi hareketsiz kaldığında ışık sönüyor. Varlık sensörü ya da ultrasonik tip daha uygun oluyor.",
      },
      {
        p: "Ayrıca aspiratörün ışıkla birlikte çalıştığı düzenlerde, ışık söndükten sonra fanın bir süre daha dönmesini sağlayan gecikmeli röle kullanılıyor. Nem böylece dışarı atılıyor.",
      },

      { h2: "Depoda ve arşivde" },
      {
        p: "Raf aralarında görüş kapandığı için tek sensör yetmiyor. Her koridora ayrı sensör konuyor ve gecikme süresi uzun tutuluyor; raf arasında çalışan kişi karanlıkta kalmıyor.",
      },
      {
        p: "Yüksek raflı depolarda tavana konan sensörün görüşü de kısıtlanıyor. Burada koridor boyunca bakan perde tipi sensörler daha iyi sonuç veriyor.",
      },

      { h2: "Sensör mü, zaman saati mi?" },
      {
        table: {
          head: ["Durum", "Uygun çözüm"],
          rows: [
            ["Değişken geçiş, merdiven", "Sensör"],
            ["Her akşam aynı saatte, tabela", "Zaman saati"],
            ["Mevsime göre değişen dış ışık", "Fotosel"],
            ["Gece belli saatler arası", "Fotosel + zaman saati"],
            ["Uzun süre oturulan oda", "Varlık sensörü + el anahtarı"],
          ],
        },
      },
      {
        p: "Dış aydınlatmada en dengeli düzen fotosel ile zaman saatinin birlikte çalışması: karanlık basınca yanıyor, gece yarısından sonra sönüyor, sabaha karşı tekrar yanmıyor.",
      },

      { h2: "Kurulum sonrası ince ayar" },
      {
        ul: [
          "Duyarlılık, gerçek kullanımda bir hafta gözlenip düzeltilir.",
          "Yanlış tetikleme not edilir; saati ve yeri sebebi gösteriyor.",
          "Gecikme süresi kullanıcıya sorulup birlikte belirlenir.",
          "Fotosel eşiği akşam saatinde ayarlanır.",
          "Ayar vidalarının konumu bir kâğıda not edilir.",
        ],
      },
      {
        p: "Bir haftalık gözlem, kurulumun en değerli kısmı. İlk gün doğru görünen ayar, farklı hava ve mevsim koşullarında başka davranıyor.",
      },

      { h2: "Sensörü kumandayla birleştirmek" },
      {
        p: "Otomasyon sistemlerinde sensör yalnızca ışığı değil, başka şeyleri de tetikleyebiliyor. Bahçe kapısındaki hareket, hem yol aydınlatmasını yakıp hem telefona bildirim gönderebiliyor.",
      },
      {
        p: "Aynı mantık iç mekânda da işliyor: kimse yokken ışıkla birlikte klimanın ve prizin de kesilmesi, otel odalarında yıllardır kullanılan bir düzen. Konutta bu genelde tek bir hacimde, mesela çalışma odasında uygulanıyor.",
      },

      { h2: "Kışın ve yazın davranış farkı" },
      {
        p: "PIR sensörler ısı farkını gördüğü için ortam sıcaklığı yükseldikçe duyarlılıkları düşüyor. Yaz sıcağında insan vücuduyla ortam arasındaki fark azalıyor ve sensör geç algılıyor.",
      },
      {
        p: "Kışın ise tersi oluyor; sensör daha duyarlı çalışıyor, bazen fazla duyarlı. Yılın iki ucunda bir kez kontrol etmek, bütün yıl dengeli çalışan bir ayar bulmayı sağlıyor.",
      },
      {
        p: "Dış mekânda ayrıca kar ve yağmurun sensör camını kirletmesi var. Yılda bir silmek, gecikmiş algılamaların büyük kısmını çözüyor.",
      },

      { h2: "Ortak alanlarda karar" },
      {
        p: "Apartmanlarda sensöre geçiş kararı yönetimden çıkıyor ve çoğunlukla iki gerekçeyle alınıyor: elektrik gideri ve arızalı merdiven otomatiği.",
      },
      {
        p: "Uygulamada en kolay yol, mevcut otomatiğin yerine sensörlü modül koymak; kablo düzeni aynı kalıyor. Kat sayısı fazlaysa her kata ayrı sensör konması hem konforu hem tasarrufu artırıyor.",
      },
      {
        p: "Bir de sakinlerin alışması için ilk hafta süreleri biraz uzun tutuyoruz. Şikâyet gelmezse kademeli olarak kısaltılıyor; böylece sistem baştan sevilmeden reddedilmiyor.",
      },

      { h2: "Maliyet ve geri dönüş" },
      {
        p: "Sensörün kendisi ucuz bir parça; asıl kalem işçilik ve gerekiyorsa armatür değişimi. Mevcut anahtar yerine sensör konabiliyorsa iş yarım saatte bitiyor.",
      },
      {
        p: "Geri dönüş süresi tamamen ışığın ne kadar boşa yandığına bağlı. Gece boyunca yanık kalan bir merdiven aydınlatmasında birkaç ay, zaten kısa süre yanan bir holde ise hiç. İkinci durumda karar tasarruf değil konfor üzerinden veriliyor.",
      },
      {
        p: "Toplu değişimlerde armatürü de LED'e çevirmek mantıklı oluyor; iki kazanç birleşiyor ve ikinci kez merdivene çıkmak gerekmiyor.",
      },
      {
        p: "Bir de şu var: sensörlü düzene geçen binalarda ampul değişimi neredeyse bitiyor. Günde on saat yerine bir saat yanan bir LED armatür, yıllarca elden geçmeden çalışıyor.",
      },
    ],
    faqs: [
      {
        q: "Ofiste sensörlü aydınlatma neden sönüyor?",
        a: "Hareket sensörü takılmış olabilir. Masada oturup az hareket eden birini algılamıyor. Ofis ve çalışma odalarında varlık sensörü kullanılır; küçük hareketleri de görüyor ve gecikme süresi de daha uzun tutuluyor.",
      },
      {
        q: "Sensör LED ampulle çalışmıyor, neden?",
        a: "Eski sensörlerin minimum yük değeri LED'in çektiği gücün üstünde kalıyor. Işık sönmüyor ya da titriyor. Çözüm LED uyumlu sensöre geçmek; ara çözüm olarak yük direnci kullanılıyor ama kalıcı değil.",
      },
      {
        q: "Merdivende süre ne kadar olmalı?",
        a: "En yavaş kişinin en üst kata çıkmasına yetecek kadar; çoğu durumda 2–3 dakika. Her katta ayrı sensör kullanılırsa süre kısalabiliyor, çünkü kişi ilerledikçe önündeki ışık yanıyor.",
      },
      {
        q: "Gündüz de yanıyor, nasıl engellerim?",
        a: "Fotosel eşiğini ayarlamak gerekiyor. Bu ayar akşamüstü, gerçek ışık koşulunda yapılır; gündüz yapılan ayar tutmuyor. Çoğu sensörde küçük bir vida ile ayarlanıyor.",
      },
      {
        q: "Sensör evcil hayvanı algılar mı?",
        a: "Standart sensörler algılıyor. Yükseklik ve açı ayarıyla azaltılabiliyor, evcil hayvana duyarsız modeller de var. Bahçede en sık yanlış tetikleme sebebi kedi ve kuş hareketi.",
      },
      {
        q: "Bir odaya birden fazla sensör konabilir mi?",
        a: "Konabiliyor ve geniş hacimlerde gerekiyor. Sensörler paralel bağlanır; herhangi biri hareket görünce ışık yanıyor. Tek sensörle taranamayan L şeklindeki koridorlarda bu düzen kullanılıyor.",
      },
      {
        q: "Mevcut anahtarın yerine sensör takılabilir mi?",
        a: "Çoğu durumda takılabiliyor; sıva altı kasaya oturan sensör modelleri var. Kasada nötr hattı yoksa bazı modeller çalışmıyor, o zaman tavana ya da duvara ayrı sensör konuyor.",
      },
      {
        q: "Yazın geç algılıyor, normal mi?",
        a: "Normal. PIR sensörler ısı farkını görüyor; sıcak havada insan vücuduyla ortam arasındaki fark azaldığı için duyarlılık düşüyor. Yılın iki ucunda bir kez duyarlılık ayarına bakmak dengeli bir sonuç veriyor.",
      },
    ],
    related: ["ic-mekan-aydinlatma-planlama", "bahce-aydinlatmasi-nasil-planlanir", "apartman-ortak-alan-yenileme"],
  },
];
