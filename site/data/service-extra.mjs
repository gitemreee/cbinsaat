// Hizmet sayfalarına eklenen derinlik blokları.
//
// Neden ayrı dosya: hizmet verisi (kapsam, fiyat kalemleri, SSS) sabit kalırken
// anlatı içeriği burada büyüyor. Bir hizmete blok eklemek için slug'ını yazıp
// { h2 } / { p } / { ul } / { ol } / { table } bloklarını ekleyin; servicePage
// bunları ana metnin sonuna, "Teklif nasıl hazırlanıyor" bölümünden önce ekler.

import { serviceExtra2 } from "./service-extra-2.mjs";
import { serviceExtra3 } from "./service-extra-3.mjs";
import { serviceExtra4 } from "./service-extra-4.mjs";
import { serviceExtra5 } from "./service-extra-5.mjs";
import { serviceExtra6 } from "./service-extra-6.mjs";
import { serviceExtra7 } from "./service-extra-7.mjs";

const batch1 = {
  "elektrik-tesisati": [
    { h2: "Kablo kesiti neye göre seçilir?" },
    { p: "Kesit seçimi tahminle değil hesapla yapılır. Üç şey belirleyicidir: hattın taşıyacağı akım, hattın uzunluğu ve döşeme şekli. Aynı akımı taşıyan iki hattan uzun olanı daha kalın kesit ister, çünkü uzunluk arttıkça gerilim düşümü artar." },
    { p: "Konutta yaygın uygulama şudur: aydınlatma hatları 1,5 mm², priz hatları 2,5 mm², elektrikli su ısıtıcısı ve fırın gibi yüksek çekişli cihazlar için 4 mm² ve üzeri. Ancak bunlar başlangıç değerleridir; hat uzunsa bir üst kesite çıkmak gerekir." },
    { p: "Sigortanın görevi kabloyu korumaktır. Bu yüzden sigorta, kablonun taşıyabileceğinden büyük seçilemez. \"Sigorta atıyor, büyütelim\" yaklaşımı korumayı devre dışı bırakır ve kabloyu yakma riskini doğurur." },

    { h2: "Buat: tesisatın en çok sorun çıkaran noktası" },
    { p: "Arızaların büyük kısmı kablonun ortasında değil, eklerin yapıldığı buatlarda çıkar. Burada iki hata sık görülür: uçların burularak bantlanması ve buata kapasitesinin üstünde ek sığdırılması." },
    { p: "Burularak yapılan ek zamanla gevşer. Gevşek bağlantı direnç, direnç ısı üretir; ısınan nokta önce yalıtımı bozar, sonra kararır. Klemens ya da uygun bağlantı elemanı kullanmak bu zinciri baştan keser." },
    { p: "Buatların erişilebilir kalması da önemlidir. Sıvanın altına gömülüp kapağı kapatılan buata bir daha ulaşılamaz; arıza çıktığında duvarı kırmak gerekir. Biz buat yerlerini fotoğraflayıp güzergâh planıyla birlikte size bırakıyoruz." },

    { h2: "Kaçak akım rölesi ne yapar, ne yapmaz?" },
    { p: "Kaçak akım rölesi (RCD), hattan giden ve dönen akımı karşılaştırır. Aradaki fark bir eşiği geçtiğinde — yani akımın bir kısmı topraktan veya insan üzerinden kaçtığında — devreyi keser. Konutta kullanılan 30 mA'lik röle, can güvenliği için tasarlanmıştır." },
    { p: "Ama röle her şeyi çözmez. Aşırı yüke karşı korumaz, o sigortanın işidir. Faz–nötr arasında oluşan bir temasta da devreye girmez, çünkü akım dengesi bozulmaz. Bu yüzden röle ile sigorta birbirinin alternatifi değil, tamamlayıcısıdır." },
    { p: "Rölenin çalışıp çalışmadığını ayda bir test tuşuyla kontrol edin. Basıldığında atmıyorsa röle görevini yapmıyor demektir; değişmesi gerekir. Bu, 10 saniyelik ama hayat kurtaran bir alışkanlıktır." },

    { h2: "Hat planı: kaç hat, nereye?" },
    { p: "İyi bir tesisatta hatlar işlevlerine göre ayrılır. Bir hattın arızası tüm evi karartmaz, bir cihazın çekişi diğerini etkilemez." },
    { ul: [
      "Aydınlatma hatları ayrı (mümkünse kat/bölge bazında iki hat)",
      "Genel priz hatları ayrı",
      "Mutfak prizleri kendi hattında",
      "Fırın, ankastre ocak ve bulaşık makinesi için ayrı hatlar",
      "Çamaşır makinesi ve kurutucu için ayrı hat",
      "Banyo hattı ayrı ve kaçak akım korumalı",
      "Klima ve elektrikli su ısıtıcısı için ayrı hatlar",
      "Balkon ve dış mekân prizleri korumalı ayrı hat",
    ] },
    { p: "Panoda ayrıca birkaç boş yer bırakılır. İleride bir hat eklendiğinde panonun tamamen değişmesi gerekmesin diye." },

    { h2: "Sıva altı mı, sıva üstü mü?" },
    { p: "Sıva altı tesisat görünmez ve kalıcıdır; tadilatla birlikte yapıldığında ek maliyeti sınırlıdır. Sıva üstü kanal ise kırım gerektirmez, oturulan evde tek gün içinde bitirilebilir ama görünürdür." },
    { p: "Karar genelde şuna bağlıdır: duvar zaten açılacak mı? Tadilat varsa sıva altı; yoksa ve bütçe kısıtlıysa kanal makul bir çözümdür. Kiralık daire ve iş yerlerinde kanal sık tercih edilir." },
    { p: "Ara bir yol da var: kritik hatları (mutfak, banyo, klima) sıva altına almak, geri kalanı kanalla çözmek. Kırımı azaltıp en çok yük taşıyan hatları düzgün kurmayı sağlar." },

    { h2: "Yenilemede evde oturmak mümkün mü?" },
    { p: "Kısmi yenilemede evet. Oda oda ilerlenir, gün sonunda kalan hatlara enerji verilir, akşam evde ışık ve buzdolabı çalışır. Toz kontrolü için çalışılan oda perdeyle ayrılır." },
    { p: "Komple yenilemede ise kırım, toz ve gün boyu elektriksizlik nedeniyle birkaç gün boşaltmak daha sağlıklıdır. Tadilat zaten yapılıyorsa bu soru kendiliğinden çözülür." },

    { h2: "Teslimde ne veriyoruz?" },
    { ul: [
      "Kapanan hatların ve buat yerlerinin fotoğrafları",
      "Pano şeması ve etiketlenmiş sigorta listesi",
      "Yalıtım direnci ve topraklama ölçüm sonuçları",
      "Kaçak akım rölesi test kaydı",
      "Kullanılan kablo ve malzemenin marka/sınıf listesi",
    ] },
    { p: "Bu dosya, yıllar sonra duvara raf takarken ya da yeni bir hat eklerken en çok işinize yarayan şey oluyor. Evi satarken de alıcının en çok merak ettiği kalemi baştan kapatıyor." },
  ],

  "sihhi-tesisat": [
    { h2: "Boru malzemesi: hangisi nerede?" },
    { p: "Bugün konutta üç malzeme yaygın: PPRC (yeşil boru), PEX ve çok katmanlı kompozit boru. Üçü de doğru uygulandığında uzun ömürlüdür; fark uygulama şeklinde ve tamir edilebilirliğindedir." },
    { p: "PPRC ısıl kaynakla birleştirilir, ek yerleri boru kadar sağlamdır ve ekonomiktir. PEX ve kompozit borular ise kıvrılabildiği için duvarda daha az ek gerektirir; kolektörlü sistemlerde her musluğa kesintisiz tek boru gider." },
    { p: "Kolektörlü sistemin avantajı şudur: duvar içinde ek yoktur. Bir sorun çıktığında sadece o hattın vanası kapatılır, evin geri kalanı su almaya devam eder. Maliyeti biraz yüksektir ama duvar açma ihtimalini büyük ölçüde ortadan kaldırır." },

    { h2: "Galvaniz boru neden değişmeli?" },
    { p: "1990 öncesi yapıların çoğunda galvaniz çelik boru vardır. Bu borular dışarıdan sağlam görünse de iç yüzeyleri zamanla pas ve kireçle daralır. Sonuç: basınç düşer, suyun rengi bozulur, sabah açıldığında bulanık akar." },
    { p: "Daralma dışarıdan görülmez; ancak boru kesildiğinde iç kesitin ne kadar kapandığı anlaşılır. Bu yüzden eski dairelerde tadilat sırasında bir parça boru kesip içine bakmak, karar için en net yöntemdir." },
    { p: "Galvaniz boru, diğer belirtiler olmasa bile tadilat kapsamına alınmalıdır. Duvar bir daha bu kadar kolay açılmayacaktır." },

    { h2: "Gider hattında eğim" },
    { p: "Atık su hattı basınçla değil yerçekimiyle çalışır. Bu yüzden eğim kritiktir. Eğim azsa su ilerlemez ve katı atık birikir; fazlaysa su hızla akıp katı atığı geride bırakır. İkisi de tıkanma demektir." },
    { p: "Konutta yaygın uygulama metrede 2–3 cm eğimdir. Tekrarlayan tıkanmaların önemli bir kısmının kaynağı, tıkanan noktanın kendisi değil, o hattın eğimidir." },
    { p: "Bir başka sık sebep, gider hattına havalandırma bırakılmamasıdır. Havalandırmasız hatta akan su vakum yaratır, sifonlardaki suyu çeker ve lavabodan koku gelmeye başlar." },

    { h2: "Su darbesi ve gürültü" },
    { p: "Musluk kapandığında borularda duyulan gümbürtü, suyun ani duruşundan kaynaklanır. Uzun vadede rakorları gevşetir ve ek yerlerini yorar." },
    { p: "Çözüm üç adımdır: boruların askılarla düzgün sabitlenmesi, gerekiyorsa darbe emici konması ve basıncın makul aralıkta tutulması. Şebeke basıncı yüksekse basınç düşürücü kullanılır." },

    { h2: "Basınç: az da sorun, çok da" },
    { p: "Düşük basınç konfor sorunu; yüksek basınç ise tesisat sorunudur. 6 barın üzerindeki basınç conta ve rakorları hızla yorar, ani arızalara yol açar." },
    { p: "Basıncı ölçmek birkaç dakikalık iştir. Yüksek çıkarsa daire girişine basınç düşürücü konur; düşük çıkarsa önce şebeke tarafı, sonra hidrofor değerlendirilir." },

    { h2: "Testler olmadan kapatmıyoruz" },
    { p: "Temiz su hattı, duvar kapanmadan önce basınç altına alınır ve manometre izlenir. Basınç düşmüyorsa hat sızdırmıyor demektir. Bu testin kaydı dosyaya girer." },
    { p: "Islak hacimlerde ayrıca su yalıtımı sonrası 24 saatlik su testi yapılır. İki test de geçilmeden seramiğe ve sıvaya geçilmez." },
  ],

  "daire-tadilati": [
    { h2: "Söküm: neyi çıkarıp neyi bırakmalı?" },
    { p: "Sökümde en pahalı hata, gereğinden fazla kırmaktır. Sağlam bir şap, düzgün bir sıva ya da terazisinde duran bir kapı kasası korunabiliyorsa korunmalıdır; her kırılan metrekare hem moloz hem yeniden yapım demektir." },
    { p: "Buna karşılık ıslak hacimlerde yarım söküm çoğu zaman işe yaramaz. Banyoda seramiği bırakıp sadece vitrifiye değiştirmek, altındaki yalıtımsız katmanı olduğu gibi bırakmak anlamına gelir." },
    { p: "Kararı keşifte veriyoruz: hangi imalat kalabilir, hangisi gitmeli, listeyi yazılı çıkarıyoruz. Böylece moloz hacmi ve maliyet baştan belli oluyor." },

    { h2: "Tesisat: duvar açıkken karar verilecekler" },
    { p: "Duvar bir kez kapandığında geri dönmek pahalıdır. Bu yüzden söküm bittiğinde şu soruları bir kerede cevaplıyoruz: priz ve anahtarlar nereye, klima nereye, TV ünitesi hangi duvara, mutfakta ankastre nereye gelecek." },
    { p: "\"Şimdilik olmasın ama ileride isteyebilirim\" dediğiniz noktalar için boş boru bırakıyoruz. Maliyeti neredeyse yok; sonradan kazandırdığı çok." },

    { h2: "Toz kontrolü ve komşuluk" },
    { p: "Apartmanda tadilatın teknik kısmı kolay, sosyal kısmı yönetim ister. Çalışılan alanı naylon bariyerle ayırıyor, kapı aralıklarını bantlıyor, tozlu işlerde toz emiciyle çalışıyoruz." },
    { p: "Merdiven ve asansör güzergâhı örtülüyor, her günün sonunda süpürülüyor. Moloz merdivende bekletilmiyor. Bu üç alışkanlık, komşu şikâyetlerinin büyük kısmını baştan siliyor." },

    { h2: "Program: neyin neyi beklediği" },
    { p: "Tadilatta gecikmenin bir numaralı sebebi kuruma sürelerinin programa yazılmamasıdır. Şap kuruması, su yalıtımı testi ve boya kat araları gerçek sürelerdir; sıkıştırılamazlar." },
    { p: "İkinci sebep uzun temin süreli kalemlerdir: mutfak dolabı 12–18 gün, özel doğrama 2–4 hafta. Bu kalemlerin karar tarihini programa yazıyoruz ve geciktiğinde teslimin ne kadar kayacağını baştan söylüyoruz." },

    { h2: "Bütçe sıkışırsa nereden kısılır?" },
    { p: "Kısılamayacaklar bellidir: elektrik tesisatı, su borusu, su yalıtımı ve zemin hazırlığı. Bunlar duvarın içinde kalır ve sonradan değiştirilemez." },
    { p: "Kısılabilecekler ise malzeme sınıfıyla ilgilidir: seramik serisi, mutfak kapak malzemesi, iç kapı modeli, armatürler. Aynı işçilikle daha uygun malzeme kullanmak, işin kalitesini düşürmez." },
    { p: "Metraj listesini size veriyoruz; hangi kalemden ne kadar kısıldığını rakamla görüyorsunuz. Tahminle karar vermek yerine listeye bakarak karar veriyorsunuz." },
  ],

  "banyo-tadilati": [
    { h2: "Su yalıtımı: işin görünmeyen ama belirleyici katmanı" },
    { p: "Banyoda seramik bir kaplamadır, bariyer değildir. Derzler ve köşe birleşimleri zamanla su geçirir. Altta yalıtım varsa su orada durur ve gidere yönelir; yoksa şapa geçer, şap doyar ve alt kata iner." },
    { p: "Yalıtım zemine, duvarlara 20–30 cm yukarı, duş alanında ise 180–200 cm yüksekliğe kadar uygulanır. Köşelere takviye bant, gider çevresine özel manşet konur." },
    { p: "Uygulama kuruduktan sonra gider tıkanır, alan su tutulur ve 24 saat beklenir. Test geçilmeden seramiğe başlanmaz. Testin fotoğrafı dosyaya girer." },

    { h2: "Eğim ve gider tipi" },
    { p: "Zemin gidere doğru eğimli olmalıdır. Klasik nokta süzgeçte eğim dört yönden merkeze, lineer (çizgi) süzgeçte ise tek yöne verilir. İkisinin uygulaması farklıdır ve kaplama seçiminden önce karar verilmesi gerekir." },
    { p: "Eğimi yanlış verilen banyoda su köşede birikir ve yalıtımın zayıf noktasını arar. Zemine bir bardak su döküp gidere yönelip yönelmediğine bakmak, teslimde yapılabilecek en basit kontroldür." },

    { h2: "Havalandırma: küfün asıl sebebi" },
    { p: "Banyodaki küf çoğu zaman su kaçağından değil, buharın dışarı atılamamasından çıkar. Penceresi olmayan banyolarda aspiratör zorunludur; olan banyolarda bile duş sonrası havalandırma yetersiz kalabilir." },
    { p: "Aspiratörün bacaya bağlanması ve ışıkla birlikte gecikmeli çalışacak şekilde kurulması en pratik çözümdür. Duş bittikten sonra birkaç dakika daha çalışıp nemi atar." },

    { h2: "Tek banyolu evde iş programı" },
    { p: "Tek banyolu dairelerde program buna göre kurulur: klozet ve lavabo mümkün olan en son güne kadar kullanılabilir bırakılır, kapalı kalınan süre en aza indirilir." },
    { p: "Söküm ve yalıtım aşamasında banyo birkaç gün kullanılamaz. Bu süreyi baştan söylüyoruz ki planınızı ona göre yapabilesiniz." },

    { h2: "Malzeme seçiminde pratik notlar" },
    { ul: [
      "Zeminde kaymaz yüzey sınıfı seçin; yaşlı ve çocuklu evlerde önemli",
      "Büyük ebat karo derz sayısını azaltır, temizliği kolaylaştırır",
      "Epoksi derz leke tutmaz; maliyeti yüksek ama banyoda değer",
      "Gömme rezervuar yer kazandırır, taşıyıcı kasa gerektirir",
      "Havlupan ölçüsünü banyonun ısı ihtiyacına göre seçin",
      "Duş alanında niş, raf ihtiyacını ortadan kaldırır",
    ] },
  ],

  "anahtar-teslim-tadilat": [
    { h2: "\"Anahtar teslim\" ne demek, ne değil?" },
    { p: "Anahtar teslim, işin tamamının tek sözleşmeyle ve tek muhatapla yürütülmesi demektir. Söküm, tesisat, ince işler, montajlar, temizlik ve teslim; hepsi tek programda toplanır." },
    { p: "Anahtar teslim, kapsamın belirsiz olduğu anlamına gelmez. Tam tersine: kapsam ne kadar net yazılırsa iş o kadar sorunsuz yürür. Teklifte hangi kalemin dahil, hangisinin hariç olduğu satır satır yazılır." },
    { p: "Mobilya, beyaz eşya, klima ve çelik kapı gibi kalemler proje kapsamında yer alabilir; bunlar ayrı hizmet başlıkları olarak değil, anahtar teslim projenin içinde ele alınır." },

    { h2: "Tek ekip neyi değiştiriyor?" },
    { p: "Klasik akışta elektrikçi sıvacıyı, sıvacı seramikçiyi bekler. Her bekleme hem süre hem maliyet ekler. Bir aksaklık çıktığında da sorumluluk taraflar arasında dolaşır." },
    { p: "Elektrik, su, mekanik ve yapı ekipleri aynı firmada olduğunda bu bekleme ortadan kalkar. Aynı duvar iki kez açılmaz, aynı sıva iki kez yapılmaz. En önemlisi: muhatabınız tektir." },

    { h2: "Sözleşmede olması gerekenler" },
    { ul: [
      "Metrajlı iş kalemi listesi (miktar + birim fiyat)",
      "Dahil olmayan kalemlerin yazılı listesi",
      "Malzeme marka ve sınıfları",
      "İş programı ve karar tarihleri",
      "Hakediş esaslı ödeme planı",
      "Sürpriz çıktığında izlenecek yol (yazılı bildirim + onay)",
      "Teslim sonrası destek süresi ve kapsamı",
    ] },
    { p: "Bu yedi maddeyi yazılı alabildiğiniz bir teklif, birkaç bin lira daha yüksek olsa bile genelde daha ucuza mal olur." },

    { h2: "Etaplı yapmak mümkün mü?" },
    { p: "Mümkün ve çoğu zaman mantıklı. Yalnız etap sırası doğru kurulmalı: duvarın içinde kalacak işler (tesisat, yalıtım, zemin hazırlığı) önce, yüzey işleri (boya, kapı, montaj) sonra." },
    { p: "Sıra bozulduğunda ikinci etap birincisini bozar. Etap planını baştan yazılı çıkarıyoruz; ikinci etaba geldiğimizde birincide neyin nerede bırakıldığı belli oluyor." },

    { h2: "Teslim nasıl oluyor?" },
    { p: "İş bittiğinde birlikte dolaşılır ve eksik listesi çıkarılır. Liste kapatıldıktan sonra son ödeme yapılır; bu madde sözleşmede yazılıdır." },
    { p: "Teslimde ayrıca kapanan hatların fotoğrafları, test kayıtları, pano şeması ve kullanılan malzeme listesi size verilir. Yıllar sonra tadilat yaparken ya da satarken bu dosya işe yarar." },
  ],

  "dogalgaz-ic-tesisat": [
    { h2: "Kolon hattından kombiye: güzergâh nasıl belirlenir?" },
    { p: "Güzergâhı belirleyen üç şey vardır: kolon çıkışının yeri, kombinin duracağı nokta ve bacanın konumu. Bu üçü belli olduğunda hattın nereden geçeceği büyük ölçüde kendiliğinden ortaya çıkar." },
    { p: "En kısa görünen güzergâh çoğu zaman en çok kırım gerektirenidir. Görünür geçiş, kanal içine alma ve tavandan dolaşma seçeneklerinin maliyeti farklıdır; üçünü de konuşup karar veriyoruz." },
    { p: "Gaz hattı üzerinde ek yapılmaz, boru bütün geçirilir. Vana ve bağlantı noktaları erişilebilir kalmalıdır; sıvanın altına gömülen bir vana ileride ulaşılamaz hâle gelir." },

    { h2: "Petek hattını gazla aynı anda çekmek" },
    { p: "Sobadan doğalgaza geçen evlerde en sık yapılan hata, önce gazı çektirip petekleri sonraya bırakmaktır. İki iş ayrı zamanlarda yapıldığında aynı duvar iki kez açılır, sıva ve boya iki kez yapılır." },
    { p: "Birlikte planlandığında ayrıca kombinin kapasitesi peteklerin toplam gücüne göre doğru seçilebilir. Önce kombi alıp sonra petek eklemek, çoğu evde yetersiz ısınmayla sonuçlanır." },

    { h2: "Kolektörlü sistem mi, klasik hat mı?" },
    { p: "Klasik hatta borular petekten peteğe devam eder; kolektörlü sistemde ise her peteğe merkezden ayrı boru gider. Kolektörlü sistemde her odanın debisi ayrı ayarlanabilir ve bir arıza tüm hattı etkilemez." },
    { p: "Yerden ısıtma düşünülüyorsa kolektör zaten zorunludur. Klasik petekli sistemde de kolektör kullanmak, dengeleme ve ileride müdahale açısından belirgin avantaj sağlar." },

    { h2: "Baca: kombiyi almadan önce netleşmeli" },
    { p: "Hermetik kombide baca zorunlu değildir ama duvar delme yeri ve tahliye yönü kurala bağlıdır. Bacalı kombide ise bacanın kesiti ve çekişi kontrol edilmeden montaj yapılmaz." },
    { p: "Eski binalarda ortak baca çoğu zaman uygun çıkmaz ve hermetiğe geçmek gerekir. Bunu kombiyi aldıktan sonra öğrenmek, tesisat maliyetinden daha can sıkıcı bir sürprizdir." },

    { h2: "Süreçte kim ne yapıyor?" },
    { p: "Proje ve gaz açma, dağıtım şirketinin yetkilendirdiği sertifikalı firma üzerinden yürür. Bunun kısayolu yoktur; olmadığını söyleyen varsa uzak durun." },
    { p: "Biz bu firmayla süreci birlikte yürütür, evrak ve randevu takibini üstleniriz. Güzergâh, kırım ve kanal, petek tesisatı, kolektör, sıva onarımı ve sonrasındaki tadilat işi bizdedir. Kimin neyi imzaladığı baştan bellidir." },
  ],

  "kaba-insaat": [
    { h2: "Beton neden yeterince dayanım almaz?" },
    { p: "Sahada betonun dayanımını düşüren üç şey vardır: fazla su, yetersiz vibrasyon ve eksik kür. Üçü de dökümü kolaylaştırdığı için tercih edilir ama üçü de betonu zayıflatır." },
    { p: "Fazla su, betonun işlenebilirliğini artırır ama kuruduğunda boşluk bırakır. İşlenebilirlik gerekiyorsa su değil katkı kullanılır. Bu, sahada en sık verilen ve en pahalıya mal olan tavizdir." },
    { p: "Kür, dökümden sonra betonun nem kaybetmemesidir. Sıcak havada sulanmadan bırakılan beton yüzeyden kurur ve tasarlanan dayanıma ulaşamaz. Malatya yazında bu özellikle önemlidir." },

    { h2: "Paspayı: yıllar sonra ortaya çıkan hata" },
    { p: "Donatının beton yüzeyine olan mesafesine paspayı denir. Yetersiz paspayı, demirin nemle temas etmesine ve zamanla paslanmasına yol açar. Paslanan demir genleşir ve betonu dışarı iter; yüzeyde dökülme başlar." },
    { p: "Bu hasar dökümden yıllar sonra görünür ve onarımı zordur. Plastik veya beton takozlarla sağlanan paspayı, saniyeler süren ama ömür boyu etkili bir detaydır." },

    { h2: "Kalıp söküm süresi neden kısaltılamaz?" },
    { p: "Beton dayanımını zamanla kazanır. Yeterli dayanıma ulaşmadan sökülen kalıp, kirişte sehim ve döşemede kalıcı çatlak bırakır. Süre hava sıcaklığına göre değişir; soğukta uzar." },
    { p: "İşin en çok acele edilen adımı budur. Kalıp erken sökülünce iş hızlanmış gibi görünür ama sonuç yapıda kalır. Bu süreyi kısaltmıyoruz." },

    { h2: "Tesisat boşlukları kaba inşaatta bırakılır" },
    { p: "Elektrik buatları, boru geçişleri ve tesisat kanalları döküm öncesi yerleştirilir. Sonradan beton kırmak hem taşıyıcıyı zayıflatır hem maliyet ekler." },
    { p: "Elektrik ve su ekibi bizde olduğu için bu adım kendiliğinden çözülür. Kaba inşaatı ayrı firmaya verecekseniz bile güzergâhları önceden konuşmanızı öneriyoruz." },

    { h2: "Belgeler: sonradan işinize yarayacaklar" },
    { ul: [
      "Beton irsaliyeleri ve numune sonuçları",
      "Demir sertifikaları",
      "Döküm tarihleri ve hava koşulları kaydı",
      "Donatı yerleşim fotoğrafları (döküm öncesi)",
      "Tesisat güzergâh fotoğrafları",
    ] },
    { p: "Bu dosyayı size teslim ediyoruz. Yapının satışında, kredi sürecinde ve ileride yapılacak her tadilatta işinize yarıyor." },
  ],

  "cati-yapimi": [
    { h2: "Sızıntı neden göründüğü yerden gelmez?" },
    { p: "Su, örtünün altına girdikten sonra ahşap karkas üzerinde eğim boyunca ilerler ve en zayıf noktadan aşağı iner. Tavandaki lekenin hemen üstünü onarmak bu yüzden çoğu zaman işe yaramaz." },
    { p: "Doğru yöntem çatı arasına çıkıp ahşap üzerindeki su izlerini takip etmektir. İzler suyun geldiği yönü gösterir. Çatı arası yoksa dışarıdan bölge bölge su verilerek test yapılır." },

    { h2: "Detaylar: baca, dere, mahya" },
    { p: "Sızıntıların büyük kısmı örtüden değil birleşim detaylarından çıkar. Baca dibi, dere ve mahya; üçü de çatının su geçirme riskinin yoğunlaştığı noktalardır." },
    { p: "Baca, çatı örtüsünü kesen bir elemandır ve birleşiminde su geçirmez metal etek gerekir. Çoğu çatıda bu detay sadece harçla geçiştirilmiştir; harç çatlar ve su girer." },
    { p: "Dere, çatının en çok su taşıyan bölümüdür. Genişliği ve bindirme mesafesi yağış yoğunluğuna göre olmalıdır; dar yapılmış dere şiddetli yağışta taşar." },

    { h2: "Kar yükü ve kar tutucu" },
    { p: "Çatı karkası bölgenin kar yüküne göre boyutlanır. Malatya'da ve özellikle yüksek rakımlı ilçelerde bu değer merkeze göre yüksektir; makas aralığı ve kesit buna göre seçilir." },
    { p: "Kar kütlesinin toplu kayması hem olukları söker hem altından geçenler için tehlike yaratır. Yola ve girişe bakan çatılarda saçak üstüne kar tutucu konması gerekir." },

    { h2: "Havalandırma: yalıtımın görünmeyen şartı" },
    { p: "Yalıtım ile örtü arasında hava geçişi bırakılmalıdır. Nefes almayan çatıda yoğuşma oluşur ve ahşap karkas zamanla çürür." },
    { p: "Bu boşluk saçaktan girip mahyadan çıkacak şekilde tasarlanır. Çatı yalıtımı yapılırken en sık atlanan detay budur ve etkisi yıllar sonra ortaya çıkar." },

    { h2: "Aktarma mı, komple yenileme mi?" },
    { p: "Karkas sağlam ve örtü yer yer bozulmuşsa aktarma yeterlidir: kiremitler sökülür, altyapı onarılır, örtü yenilenip geri dizilir. Maliyeti komple yenilemenin belirgin altındadır." },
    { p: "Ahşap karkasta çürüme, sehim ya da böcek zararı varsa aktarma para kaybıdır. Karkasa çıkıp bakmadan bu kararı vermiyoruz." },
  ],

  "dis-cephe-mantolama": [
    { h2: "Isı köprüsü: yalıtımın kesintiye uğradığı yer" },
    { p: "Isı, en az direnç gösteren yoldan gider. Yalıtımın kesildiği her nokta bir kaçak yolu oluşturur. Yalıtım yapılmış bir binada küfün hâlâ köşelerde çıkmasının sebebi budur." },
    { p: "En yaygın ısı köprüleri: balkon döşemesi, pencere ve kapı kenarları, denizlik altları, çatı saçağı, parapet ve bodrum–zemin birleşimi." },
    { p: "Bu noktalara özel detay uygulanmazsa, cephenin geri kalanına yapılan yalıtımın etkisi belirgin şekilde azalır. Detay kalemleri teklifte ayrı ayrı yazılmalıdır." },

    { h2: "Levha kalınlığı ve tipi" },
    { p: "Kalınlık iklim bölgesine ve duvar yapısına göre belirlenir; Malatya için tipik uygulama 5–8 cm aralığındadır. İnce levha maliyeti düşürür ama tasarrufu da düşürür." },
    { p: "İşçilik ve iskele maliyeti kalınlıktan bağımsız olduğu için ince levha tercih etmek çoğu zaman yanlış hesaptır. Aynı emeğe daha az kazanç demektir." },
    { p: "EPS ekonomik ve yaygındır; taş yünü yangın dayanımı ve ses yalıtımı açısından öne çıkar; XPS ise nem alan bölgelerde (bodrum, subasman) kullanılır." },

    { h2: "Uygulama kalitesini belirleyen detaylar" },
    { ul: [
      "Levhalar şaşırtmalı dizilmeli, aralarında boşluk kalmamalı",
      "Dübel sayısı ve dağılımı kurallara uygun olmalı",
      "File, sıva içinde tam gömülmeli (yüzeyde görünmemeli)",
      "Köşelere ve pencere kenarlarına profil konmalı",
      "Denizlik altına damlalık yapılmalı",
      "Subasman profili ile alt kenar kapatılmalı",
    ] },
    { p: "Levha araları boş bırakıldığında o boşluklar hava kanalı gibi çalışır. Gözle görülmeyen ama performansı doğrudan düşüren bir kusurdur." },

    { h2: "Nem ve küf: mantolama artırır mı?" },
    { p: "Doğru uygulanan mantolama nem sorununu azaltır, çünkü duvarın iç yüzey sıcaklığı yükselir ve yoğuşma azalır. Küf, yüzey sıcaklığının çiy noktasının altına düştüğü yerde oluşur." },
    { p: "Sorun, detayların atlandığı ve havalandırmanın yetersiz olduğu binalarda çıkar. Yalıtımla birlikte iç ortam havalandırmasının da düşünülmesi gerekir." },

    { h2: "İskele varken yapılacaklar" },
    { p: "Cephe işlerinde maliyetin küçümsenmeyecek bir kısmı iskeledir. Bu yüzden mantolama, cephe boyası, oluk değişimi, çatı onarımı ve korkuluk boyası varsa hepsini aynı iskele döneminde yapmak ciddi tasarruf sağlar." },
    { p: "Keşifte \"bu iskele varken başka ne yapılmalı\" sorusunu mutlaka soruyoruz. Bir yıl sonra tekrar iskele kurmak istemezsiniz." },
  ],

  "kayisi-bahcesi-sulama": [
    { h2: "Kuyu verimi ölçülmeden pompa seçilmez" },
    { p: "Pompa seçimi katalogdan değil kuyudan yapılır. Kuyunun saatte kaç ton verdiği ve pompa çalışırken su seviyesinin ne kadar düştüğü (dinamik seviye) ölçülür." },
    { p: "Kuyunun veremediği debiyi çeken pompa kuyuyu boşaltır ve susuz çalışıp yanar. \"Büyük pompa daha iyi\" yaklaşımı, bu işte en pahalı yanlış inançtır." },
    { p: "Ölçüm birkaç saatlik bir işlemdir. Bu ölçüm yapılmadan pompa önermiyoruz." },

    { h2: "Filtre istasyonu: damlamanın ömrünü belirler" },
    { p: "Damlatıcı delikleri çok küçüktür; kum, tortu ve alg kısa sürede tıkanmaya yol açar. Kuyu ve gölet suyunda filtre istasyonu zorunludur." },
    { p: "Yaygın kurulum hidrosiklon (kum ayırıcı) ile disk veya eleman filtrenin birlikte kullanılmasıdır. Filtrelerin düzenli temizliği sistemin ömrünü doğrudan belirler." },
    { p: "Basınç göstergesi filtrenin öncesine ve sonrasına konur. Aradaki fark büyüdüğünde filtrenin temizlenme zamanı gelmiş demektir; bu, tahmin yerine ölçümle bakım yapmayı sağlar." },

    { h2: "Zon planı ve damlatıcı yerleşimi" },
    { p: "Bahçenin tamamı tek zonda sulanamaz; kaynağın verebileceği debi sınırlıdır. Toplam su ihtiyacı kaynak kapasitesine bölünerek zon sayısı çıkarılır." },
    { p: "Ağaç başına damlatıcı sayısı toprak yapısına göre belirlenir. Kumlu toprakta su hızlı süzülür, daha sık ve kısa sulama gerekir; killi toprakta daha seyrek ve uzun sulama uygundur." },
    { p: "Genç ağaçta damlatıcı gövdeye yakın, olgun ağaçta taç izdüşümüne doğru kaydırılır. Kök nerede su buluyorsa oraya doğru gelişir." },

    { h2: "Arazi enerji hattı ve gerilim düşümü" },
    { p: "Kuyudan panoya ve panodan enerji kaynağına kadar olan mesafede gerilim düşümü hesaplanmalıdır. Yetersiz kablo kesiti, motorun düşük gerilimle çalışıp ısınmasına yol açar." },
    { p: "Arazi hatlarında mesafe uzun olduğu için bu hesap kritiktir. Doğru kesit seçilmediğinde sorun pompada değil kabloda olur ama fatura pompaya çıkar." },

    { h2: "Koruma ekipmanı olmadan otomasyon kurulmaz" },
    { ul: [
      "Kuru çalışma koruması (seviye elektrodu veya akım rölesi)",
      "Faz koruma rölesi",
      "Termik manyetik koruma",
      "Uygun yol verme ekipmanı",
      "Panoda kilitlenebilir ana şalter",
    ] },
    { p: "Korumasız bir sisteme sadece uzaktan kumanda takmıyoruz. Uzaktan çalıştırılan bir pompanın susuz kaldığını kimse görmez; koruma yoksa motor gider." },

    { h2: "Kış hazırlığı" },
    { p: "Sezon sonunda hat boşaltılır, filtreler temizlenir, vana kutusu ve kontrol ünitesi kış moduna alınır. Donan bir hat ilkbaharda arayıp bulunması zor kaçaklar bırakır." },
    { p: "Bu işlemleri yazılı olarak veriyoruz; isterseniz kendiniz yapabilirsiniz, isterseniz sezon sonu bakımına biz geliyoruz." },
  ],
};

export const serviceExtra = { ...batch1, ...serviceExtra2, ...serviceExtra3, ...serviceExtra4, ...serviceExtra5, ...serviceExtra6, ...serviceExtra7 };

export const extraFor = (slug) => serviceExtra[slug] || [];
export const extraCount = Object.keys(serviceExtra).length;
