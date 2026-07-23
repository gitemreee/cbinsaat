export const services = [
  { slug: "elektrik-tesisati", title: "Elektrik Tesisatı", icon: "ϟ", short: "Sıfır tesisat, arıza, pano, kaçak akım, zayıf akım ve bina elektrik yenileme.", detail: "Konut, iş yeri, mağaza ve şantiyelerde elektrik altyapısını güvenlik, kapasite ve kullanım ihtiyaçlarına göre planlıyor; sıfırdan kurulum, yenileme ve arıza müdahalesi yapıyoruz." },
  { slug: "sihhi-tesisat", title: "Sıhhi Tesisat", icon: "◉", short: "Temiz ve atık su hatları, su kaçağı, tıkanıklık, armatür ve vitrifiye montajı.", detail: "Temiz su ve atık su tesisatı, kaçak tespiti, boru yenileme, tıkanıklık giderme, musluk, lavabo, klozet ve duş sistemleri için uygulama ve onarım sunuyoruz." },
  { slug: "mekanik-tesisat", title: "Mekanik Sistemler", icon: "⌁", short: "Isıtma, soğutma, havalandırma, hidrofor, pompa ve tesisat koordinasyonu.", detail: "Yapının ısıtma, soğutma, havalandırma ve basınçlandırma ihtiyaçlarını değerlendirerek uygulanabilir, bakımı kolay mekanik sistem çözümleri geliştiriyoruz." },
  { slug: "anahtar-teslim-insaat", title: "Anahtar Teslim İnşaat", icon: "⌂", short: "Kaba yapıdan ince işlere, elektrik ve mekanik dahil tek elden proje yönetimi.", detail: "Yeni yapı, tadilat ve dönüşüm projelerini keşif, bütçe, iş programı, ekip koordinasyonu ve teslim süreçleriyle tek merkezden yönetiyoruz." },
  { slug: "su-deposu-temizligi", title: "Su Deposu Temizliği", icon: "◇", short: "Bina ve işletme depolarında boşaltma, tortu temizliği ve hijyen uygulaması.", detail: "Apartman, site ve işletme su depolarında kontrollü boşaltma, yüzey ve tortu temizliği ile hijyen odaklı bakım hizmeti veriyoruz." },
  { slug: "avize-aydinlatma", title: "Avize & Aydınlatma", icon: "✦", short: "Avize, aplik, spot ve LED ürün seçimi, satışı, güvenli montajı.", detail: "Mekânın ölçüsü, tavan yüksekliği ve kullanım amacına uygun avize ve aydınlatma ürünlerinin seçimi, tedariği ve montajını birlikte çözüyoruz." },
];

export const districts = [
  ["Akçadağ","akcadag"],["Arapgir","arapgir"],["Arguvan","arguvan"],["Battalgazi","battalgazi"],["Darende","darende"],["Doğanşehir","dogansehir"],["Doğanyol","doganyol"],["Hekimhan","hekimhan"],["Kale","kale"],["Kuluncak","kuluncak"],["Pütürge","puturge"],["Yazıhan","yazihan"],["Yeşilyurt","yesilyurt"]
].map(([name,slug])=>({name,slug}));

export const posts = [
  { slug:"elektrik-tesisati-yenileme-belirtileri", category:"ELEKTRİK", title:"Elektrik tesisatının yenilenmesi gerektiğini gösteren 7 işaret", excerpt:"Sık atan sigorta, ısınan priz ve yetersiz hatlar ne anlatır? Güvenli bir kontrol listesi.", reading:6 },
  { slug:"su-kacagi-erken-belirtileri", category:"SIHHİ TESİSAT", title:"Gizli su kaçağı nasıl anlaşılır?", excerpt:"Kabaran boya, artan fatura ve rutubet kokusu gibi erken belirtileri gözden kaçırmayın.", reading:5 },
  { slug:"avize-secim-rehberi", category:"AYDINLATMA", title:"Odaya göre doğru avize nasıl seçilir?", excerpt:"Salon, mutfak ve yatak odasında ölçü, renk sıcaklığı ve ışık gücü için pratik rehber.", reading:4 },
  { slug:"su-deposu-ne-zaman-temizlenmeli", category:"BAKIM", title:"Su deposu ne sıklıkla temizlenmeli?", excerpt:"Tortu, koku ve renk değişimini beklemeden periyodik bakım planı oluşturmanın önemi.", reading:4 },
];
