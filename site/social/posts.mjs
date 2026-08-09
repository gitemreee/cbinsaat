// Instagram gönderileri: görsel içeriği + açıklama metni.
// Dört hizmet grubunu da kapsar. Renkler siteyle aynı (theme.mjs).
//
// hook   : görselin üstündeki büyük satırlar (satır satır yazın, otomatik bölme yok)
// bullets: görseldeki maddeler (en fazla 3, kısa tutun)
// caption: Instagram açıklaması
// tags   : etiketler

const CTA = "Malatya genelinde hizmet veriyoruz. 0530 734 60 00";

const BASE_TAGS = ["malatya", "cbinsaat"];

export const posts = [
  {
    id: "01",
    group: "Elektrik",
    style: "dark",
    icon: "alert",
    kicker: "Elektrik",
    hook: ["SİGORTA", "SÜREKLİ", "ATIYORSA"],
    bullets: [
      "Aşırı yük: birkaç cihaz aynı anda açılınca atar",
      "Kısa devre: anında atar, kaldırınca tutmaz",
      "Kaçak akım: röle atar, sigortalar yerinde durur",
    ],
    caption: `Halk arasında hepsine "sigorta attı" denir ama üç ayrı durum vardır ve çözümleri farklıdır.

Aşırı yükte sigorta birkaç saniye sonra atar, kaldırınca tutar. Hat kapasitesi yetmiyordur.

Kısa devrede anında atar ve kaldırmaya çalışınca tekrar atar. Zorlamayın; arızalı noktada ark oluşur.

Kaçak akım rölesi atıyorsa sigortalarınız yerinde duruyordur. Bu bir arıza değil, korumanın çalıştığının göstergesidir. Röleyi asla devre dışı bırakmayın.

Hangisi olduğunu anlamanın pratik yolu: o hattaki tüm cihazların fişini çekin. Sigorta tutuyorsa sorun cihazlardan birinde, hâlâ atıyorsa hattadır.

${CTA}`,
    tags: ["elektrikci", "malatyaelektrikci", "sigorta", "elektrikariza", "elektriktesisati", "usta"],
  },

  {
    id: "02",
    group: "Elektrik",
    style: "light",
    icon: "plug",
    kicker: "Elektrik",
    hook: ["PRİZ", "ISINIYORSA", "BEKLEMEYİN"],
    bullets: [
      "Sağlam çalışan bir priz ısınmaz",
      "Kararma ve is izi varsa ark başlamıştır",
      "Yanık kokusunda sigortayı indirin",
    ],
    caption: `Elinizi dokundurduğunuzda sıcaklık hissediyorsanız orada enerjinin bir kısmı işe değil ısıya dönüşüyor demektir.

Sebep neredeyse her zaman kötü temastır: klemens vidası gevşemiştir ya da kontak yayları binlerce fiş takıp çıkarmadan sonra esnekliğini kaybetmiştir.

Belirtileri ciddiyet sırasına göre okuyun:
Fiş gevşek duruyor → planlı değişim
Hafif ısınma var → yakın zamanda kontrol
Kapak sararmış → kısa sürede değişim
Kararma, is izi → acil
Kıvılcım, koku → sigortayı indirin, hemen arayın

Bir uyarı: prizi değiştirdiğiniz hâlde ısınma sürüyorsa sorun mekanizmada değil. Kablo ucu yorulmuş, hattın kesiti yetersiz ya da ısınma buat içindeki bir ekten geliyor olabilir.

Evdeki tüm prizleri elle kontrol etmek beş dakika sürer. Yılda bir yapın.

${CTA}`,
    tags: ["elektrikci", "malatyaelektrikci", "priz", "guvenlik", "elektriktesisati", "evbakimi"],
  },

  {
    id: "03",
    group: "Elektrik",
    style: "dark",
    icon: "ground",
    kicker: "Elektrik",
    hook: ["PRİZDE ÜÇ UÇ", "VAR DİYE", "TOPRAKLAMA", "VAR SANMAYIN"],
    bullets: [
      "Eski tesisatta uçlar boşta bırakılmış olabilir",
      "Kaçak akım rölesi topraklamayla birlikte iş görür",
      "Kesin sonuç için ölçüm gerekir",
    ],
    caption: `En sık yanılgı bu: prizde toprak fişi görünmesi, arkada gerçekten bir hat olduğu anlamına gelmiyor.

1990 öncesi tesisatların büyük kısmında koruma topraklaması ya hiç yok ya da uçlar boşta bırakılmış. Daha kötüsü de var: bazı yerlerde nötr hattı toprak ucuna bağlanmış durumda. Bu, karşılaştığımız en tehlikeli uygulama; nötr koptuğunda cihazın gövdesine faz gerilimi biniyor.

Topraklama neden önemli? Cihazın içindeki yalıtım bozulup metal gövdeye temas ettiğinde, akımın toprağa ulaşmak için bulacağı yol ya bakır iletken olur ya da ona dokunan kişi. "Çarpma" dediğimiz şey tam olarak bu.

Basit bir priz test cihazıyla ilk kontrolü kendiniz yapabilirsiniz. Kesin sonuç için topraklama direnci ölçümü gerekir.

Çamaşır makinesi, bulaşık makinesi, elektrikli su ısıtıcısı olan her evde topraklama zorunlu kabul edilmeli.

${CTA}`,
    tags: ["elektrikci", "malatyaelektrikci", "topraklama", "elektrikguvenligi", "kacakakim", "evguvenligi"],
  },

  {
    id: "04",
    group: "Su ve Tesisat",
    style: "light",
    icon: "drop",
    kicker: "Su Kaçağı",
    hook: ["SU KAÇAĞINI", "10 DAKİKADA", "ANLAYIN"],
    bullets: [
      "Tüm muslukları ve makineleri kapatın",
      "Rezervuarın akmadığından emin olun",
      "Sayacın en küçük göstergesini izleyin",
    ],
    caption: `Bu test on dakikanızı alır ve temiz su hattında kaçak olup olmadığını net gösterir.

1. Evdeki tüm muslukları kapatın
2. Çamaşır ve bulaşık makinesini durdurun
3. Rezervuarların akmadığından emin olun
4. Sayacın en küçük göstergesine (kırmızı ibre veya yıldız disk) bakın
5. 5–10 dakika bekleyip tekrar kontrol edin

İbre kıpırdıyorsa temiz su hattında kaçak var. Hiç oynamıyorsa temiz suda sorun yok, ama atık su sızıntısı veya su yalıtımı problemi hâlâ mümkün.

Rezervuar ayrıca kontrol edilmeli: haznesine birkaç damla gıda boyası damlatın, yarım saat sifonu çekmeden bekleyin. Klozette renk görünüyorsa rezervuar akıyordur. Contası değişince faturada farkı hemen görürsünüz.

Kaçağı geciktirmenin maliyeti şu: ilk aylarda sadece faturaya yansır, sonra boya kabarır, duvar küflenir, parke şişer, alt katta hasar başlar. O noktada iş artık tesisat değil, tadilattır.

${CTA}`,
    tags: ["sukacagi", "tesisat", "malatyatesisat", "sutesisati", "sukacagitespiti", "evbakimi"],
  },

  {
    id: "05",
    group: "Su ve Tesisat",
    style: "dark",
    icon: "water",
    kicker: "Gider",
    hook: ["AYNI GİDER", "TEKRAR TEKRAR", "TIKANIYORSA"],
    bullets: [
      "Sorun kullanımda değil, hattın kendisindedir",
      "Yetersiz eğim, fazla dirsek veya kırık boru",
      "Bahçeli yapılarda ağaç kökü",
    ],
    caption: `Tıkanıklığı açmak işin kolay kısmı. Aynı gider üç ayda bir tıkanıyorsa bunu kullanım alışkanlığıyla açıklayamazsınız.

Yapısal nedenler:
• Yetersiz eğim — yatay hatta metrede 2–3 cm olmalı
• Fazla eğim — su hızla akar, katı madde geride kalır
• Dirsek fazlalığı — 90° yerine 45° parça tercih edilmeli
• Boru kırığı, çökme veya ağaç kökü

Bu durumlarda spiral makineyle açmak geçici çözüm kalır. Hattın kamerayla incelenip sorunun yerinin bulunması gerekir.

Kimyasal açıcılar konusunda net olalım: boruyu ve contaları yıpratıyor, üstelik açılmayan bir hatta biriken kimyasal sonraki müdahaleyi tehlikeli hâle getiriyor. Kullandıysanız gelen ustaya mutlaka söyleyin.

Apartmanlarda ana gider hattının yılda bir basınçlı suyla temizlenmesi, hem daire içi tıkanıklıkları hem bodrum su baskınlarını ciddi oranda azaltıyor.

${CTA}`,
    tags: ["giderackma", "tikaliklozet", "tesisat", "malatyatesisatci", "lavabo", "apartman"],
  },

  {
    id: "06",
    group: "Su ve Tesisat",
    style: "light",
    icon: "pipe",
    kicker: "Kış Hazırlığı",
    hook: ["KIŞ GELMEDEN", "ŞU 4 ŞEYİ", "YAPIN"],
    bullets: [
      "Dış duvar ve bodrumdaki hatları izole edin",
      "Bahçe musluğunun iç vanasını kapatıp boşaltın",
      "Sulama sistemini tahliye edin",
    ],
    caption: `Su donduğunda hacmi yaklaşık %9 büyür. Kapalı bir boru içinde bu genişleme gidecek yer bulamaz ve boruyu çatlatır. Kötü haber: çatlak genelde buz çözülene kadar fark edilmez.

Malatya kışında risk altındaki noktalar:
• Dış duvar boyunca giden izolasyonsuz hatlar
• Bodrum, çatı arası, kapalı olmayan garaj geçişleri
• Bahçe muslukları ve sulama hatları
• Uzun süre boş kalan bağ evleri ve yazlıklar

Boru donduysa: önce daire giriş vanasını kapatın, en yakın musluğu açın, sonra ortamı kademeli ısıtın. Boruyu musluğa yakın uçtan başlayarak ısıtın, ortadan değil.

Yapmayın: açık alevle ısıtmak, kaynar su dökmek, donmuş hattı basınç altına almak.

Uzun süre evden ayrılacaksanız en pratik çözüm ısıtmayı 10–12 °C'de açık bırakmak.

${CTA}`,
    tags: ["donanboru", "kishazirligi", "tesisat", "malatya", "sutesisati", "evbakimi"],
  },

  {
    id: "07",
    group: "Pompa ve Sulama",
    style: "dark",
    icon: "pump",
    kicker: "Hidrofor",
    hook: ["HİDROFOR", "SÜREKLİ", "DEVREYE", "GİRİYORSA"],
    bullets: [
      "Suçlu genelde pompa değil, basınç tankı",
      "Tankın havası kaçmış olabilir",
      "Kontrolü on dakika sürer",
    ],
    caption: `Hidrofor arızalarının büyük bölümü pompadan değil, çevresindeki üç parçadan kaynaklanır: basınç tankı, basınç şalteri ve çekvalf.

Tankın içinde bir membran, arkasında sıkıştırılmış hava var. Bu hava sistemin yayı gibi çalışıyor. Hava kaçtığında tank görevini yapamıyor ve pompa her musluk açılışında anında devreye giriyor.

Belirtiye göre ayırın:
• Musluk açınca hemen kalkıyor → tank havası kaçmış
• Musluk kapalıyken de kalkıyor → hatta damlama veya çekvalf sızdırıyor
• Hiç durmuyor → basınç ayarı yüksek, pompa hedefe ulaşamıyor
• Çalışıyor ama su basmıyor → emişte hava veya çark aşınmış

Pompanın ömrünü belirleyen en önemli şey devreye girme sayısıdır. Günde 200 kez kalkan bir pompa, 20 kez kalkandan çok daha hızlı yıpranır.

Yılda bir yapılan on dakikalık tank basıncı kontrolü, tüm tesisatta getirisi en yüksek bakımlardan biri.

${CTA}`,
    tags: ["hidrofor", "pompa", "malatya", "subasinci", "apartman", "tesisat"],
  },

  {
    id: "08",
    group: "Pompa ve Sulama",
    style: "light",
    icon: "leaf",
    kicker: "Sulama",
    hook: ["DAMLATICILAR", "TIKANMASIN"],
    bullets: [
      "Filtre olmadan damlama sistemi yaşamaz",
      "Hat sonlarını ayda bir yıkayın",
      "Sezon sonunda hatları boşaltın",
    ],
    caption: `Damlatıcı delikleri milimetrenin altında. En küçük partikül bile zamanla tıkanmaya yol açıyor. İyi haber: tıkanmaların neredeyse tamamı önlenebilir.

Üç tip tıkanma var, üçünün çözümü farklı:
• Fiziksel (kum, silt) → doğru filtreleme + hat yıkama
• Kimyasal (kireç, demir) → asit uygulaması
• Biyolojik (yosun, kök) → klor, kök bariyerli damlatıcı

Filtre seçimi su kaynağına göre yapılır. Kuyu suyunda hidrosiklon + eleman filtre, gölet veya kanal suyunda kum filtre gerekir. Filtrenin varlığı tek başına yetmez; kirlendiğinde by-pass yapıp kirli suyu hatta geçirir.

Ayda bir hat sonu yıkaması: sistemi çalıştırın, lateral uçlarını sırayla açın, su berraklaşana kadar akıtın. İki dakikalık iş, tıkanma çağrılarının çoğunu bitiriyor.

Sezon sonunda hatları boşaltmayı unutmayın. Yerüstü hatlarında kalan su donunca boru patlıyor.

${CTA}`,
    tags: ["damlamasulama", "sulamasistemi", "kayisi", "malatya", "tarim", "bahce"],
  },

  {
    id: "09",
    group: "Su ve Tesisat",
    style: "dark",
    icon: "radiator",
    kicker: "Isıtma",
    hook: ["PETEĞİN ALTI", "SOĞUKSA", "SEBEP", "TEK DEĞİL"],
    bullets: [
      "Üst soğuk, alt sıcak → hava var",
      "Üst sıcak, alt soğuk → tortu var",
      "Tamamı ılık → dolaşım sorunu",
    ],
    caption: `Her kış tekrarlanan şikâyet, ama altında üç farklı sorun yatıyor ve çözümleri tamamen farklı.

Peteğin üstü soğuk, altı sıcaksa: içeride hava toplanmış. Purjörden hava almanız yeterli, beş dakikalık iş.

Üstü sıcak, altı soğuksa: tabanda tortu birikmiş. Temizlik gerekiyor.

Peteğin tamamı ılıksa: sorun tortu değil dolaşım. Sirkülasyon pompası, vana açıklıkları ve sistem dengesi kontrol edilmeli.

Tortu nereden geliyor? Kapalı devrede su hep aynı kalır. Borulardan çözünen demir oksijenle birleşip çamurumsu bir tortu oluşturur ve ağır olduğu için tabanda birikir. Sık su takviyesi yapılan sistemlerde çok daha hızlı oluşuyor; çünkü her yeni su beraberinde oksijen getiriyor.

Sezon başında on dakikanızı ayırın: tüm peteklerden hava alın, kombi basıncını 1–1,5 bara getirin, vanaların tam açık olduğunu kontrol edin.

${CTA}`,
    tags: ["petektemizligi", "kalorifer", "kombi", "malatya", "isitma", "kishazirligi"],
  },

  {
    id: "10",
    group: "Yapı ve Tadilat",
    style: "light",
    icon: "drop",
    kicker: "Banyo Tadilatı",
    hook: ["BANYODA", "EN PAHALI", "HATA"],
    bullets: [
      "Su yalıtımını atlamak",
      "Seramik su geçirmez sanılır, derzler su alır",
      "Yalıtım sonrası 24 saat su testi şart",
    ],
    caption: `Banyo tadilatında en pahalıya patlayan hata, su yalıtımını atlamak.

Seramik su geçirmez sanılıyor ama derzler ve köşeler zamanla su alıyor. Yalıtım yapılmamış bir banyoda su döşemeden alt kata geçiyor ve fark edildiğinde hem sizin hem alt komşunun tavanı gitmiş oluyor.

Doğru uygulama:
• Zeminin tamamı ve duvarların en az 20 cm yüksekliği yalıtılır
• Duş alanında 180 cm'e çıkılır
• Köşe ve boru geçişlerinde bant ve manşet kullanılır
• Süzgeç çevresi ayrı dikkat ister, en sık sızan nokta orası

Sonra su testi: alan 24 saat su altında bırakılır, alt kat kontrol edilir. Ancak testten sonra seramiğe geçilir.

Bu test bir gün kaybettirir. Atlandığında kaybettirdiği tüm banyodur.

Bir de bütçe uyarısı: en yaygın hata, gözle görülen kalemlere (seramik, batarya) ağırlık verip görünmeyenlerden (yalıtım, tesisat) kısmak. Sorun her zaman görünmeyenden çıkıyor.

${CTA}`,
    tags: ["banyotadilati", "suyalitimi", "tadilat", "malatyatadilat", "insaat", "evyenileme"],
  },

  {
    id: "11",
    group: "Yapı ve Tadilat",
    style: "dark",
    icon: "home",
    kicker: "Tadilat",
    hook: ["TADİLATA", "NEREDEN", "BAŞLANIR?"],
    bullets: [
      "Söküm → tesisat → sıva → yalıtım",
      "Seramik → boya → montaj → teslim",
      "Kuruma sürelerini sıkıştırmayın",
    ],
    caption: `Tadilatta en pahalı hata işlerin sırasını karıştırmak. Sıva atıldıktan sonra hatırlanan bir priz, yeni yapılmış duvarın kırılması demek.

Doğru sıra:
1. Söküm ve moloz tahliyesi
2. Kaba yapı
3. Tesisat altyapısı (elektrik, su, atık)
4. Basınç testi
5. Sıva ve şap
6. Su yalıtımı + su testi
7. Seramik ve zemin
8. Alçı ve tavan
9. Boya
10. Montajlar
11. Temizlik ve teslim

Her aşamanın kendi kontrol noktası var ve o kontrol yapılmadan sonrakine geçilmemeli.

Kuruma sürelerine saygı gösterin. Nemli şap üzerine döşenen parke kabarır, kurumamış alçı üzerine atılan boya çatlar. Şap 7–21 gün, sıva 3–7 gün, yalıtım 24–48 saat ister ve bunlar sıkıştırılamaz.

Son bir tavsiye: bütçenin %10–15'i kadar pay ayırın. Söküm sonrası çürük boru, ıslanmış duvar veya çökmüş şap neredeyse her tadilatta bir miktar çıkıyor.

${CTA}`,
    tags: ["tadilat", "evtadilati", "malatyatadilat", "insaat", "renovasyon", "anahtarteslim"],
  },

  {
    id: "12",
    group: "Yapı ve Tadilat",
    style: "light",
    icon: "pin",
    // Panoramanın sağında başka bir markanın tabelası var; sol taraftan kırpıyoruz.
    photoPosition: "left",
    kicker: "Hizmet Bölgesi",
    hook: ["MALATYA'NIN", "13 İLÇESİNE", "GİDİYORUZ"],
    bullets: [
      "Elektrik, su ve mekanik aynı ekipte",
      "Yerinde keşif, kalem kalem yazılı teklif",
      "Kırsal mahallelere de aynı ekip",
    ],
    caption: `Battalgazi ve Yeşilyurt'un yanında Akçadağ, Arapgir, Arguvan, Darende, Doğanşehir, Doğanyol, Hekimhan, Kale, Kuluncak, Pütürge ve Yazıhan. Kırsal mahallelere de aynı ekip gidiyor, başka firmaya havale etmiyoruz.

Her ilçenin iş profili farklı:
• Akçadağ ve Yazıhan'da tarımsal sulama, kuyu pompası
• Yeşilyurt OSB'lerinde sanayi elektriği, kompanzasyon
• Battalgazi'nin eski mahallelerinde tesisat yenileme
• Kuluncak ve Hekimhan'da kışın donan hatlar
• Darende'de otel ve işletmelerin teknik bakımı

Nasıl çalışıyoruz? Telefonda kesin rakam vermiyoruz, versek yanıltıcı olur. Yerinde bakıyor, malzeme ve işçiliği ayrı ayrı yazdığımız teklifi elinize veriyoruz. Siz onaylamadan iş başlamıyor.

Uzak ilçelerde işleri toplu planlıyoruz. Aynı mahalleden birden fazla iş çıktığında hem randevu günü çabuk ayarlanıyor hem yol payı düşüyor; komşularınızla birlikte aramanızı öneririz.

${CTA}`,
    tags: ["malatya", "battalgazi", "yesilyurt", "darende", "elektrikci", "tesisatci"],
  },
];

export const allTags = (p) => [...BASE_TAGS, ...p.tags];
