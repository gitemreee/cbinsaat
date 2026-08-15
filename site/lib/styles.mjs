// Tasarım sistemi. Tek CSS dosyası olarak /assets/site.css adresine yazılır.
// Not: okunabilirlik korunsun diye sıkıştırılmadı; gzip sonrası fark ihmal edilebilir.

export const css = String.raw`
/* ============================================================
   CB İnşaat — tasarım sistemi
   0. Yazı tipleri  1. Değişkenler  2. Reset  3. Tipografi
   4. Yerleşim  5. Bileşenler  6. Bölümler  7. Duyarlı  8. Yazdırma
   ============================================================ */

/* 0. Yazı tipleri --------------------------------------------------------
   Kendi sunucumuzdan servis ediliyor: üçüncü taraf bağlantısı (DNS + TLS)
   yok, dosyalar bir yıl önbelleklenebiliyor. Sitede kullanılan karakterlere
   indirgendiler; Türkçe harfler (ğ ı İ ş) ve ₺ dâhil.
   Inter değişken font olarak tek dosyada 400–800 aralığını kapsıyor. */
@font-face{
  font-family:"Inter";font-style:normal;font-weight:400 800;font-display:swap;
  src:url("/assets/fonts/inter.woff2") format("woff2");
}
@font-face{
  font-family:"Barlow Condensed";font-style:normal;font-weight:600;font-display:swap;
  src:url("/assets/fonts/barlow-condensed-600.woff2") format("woff2");
}
@font-face{
  font-family:"Barlow Condensed";font-style:normal;font-weight:700;font-display:swap;
  src:url("/assets/fonts/barlow-condensed-700.woff2") format("woff2");
}
@font-face{
  font-family:"Barlow Condensed";font-style:normal;font-weight:800;font-display:swap;
  src:url("/assets/fonts/barlow-condensed-800.woff2") format("woff2");
}
@font-face{
  font-family:"Caveat";font-style:normal;font-weight:700;font-display:swap;
  src:url("/assets/fonts/caveat-700.woff2") format("woff2");
}

/* 1. Değişkenler --------------------------------------------------------- */
:root{
  --ink:#0e1013;
  --ink-2:#1a1e23;
  --ink-3:#2a3038;
  --amber:#ffb300;
  --amber-dark:#c98a00;
  --amber-soft:#fff4d6;
  --paper:#f6f5f2;
  --paper-2:#efedE8;
  --white:#ffffff;
  --text:#1b1f24;
  --muted:#5f6873;
  --muted-2:#8a939e;
  --line:#e2e0da;
  --line-dark:#31373f;
  --ok:#1f9d55;
  --wa:#25d366;

  --f-hand:"Caveat","Segoe Script",cursive;
  --f-display:"Barlow Condensed",'Arial Narrow',Impact,sans-serif;
  --f-body:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;

  --max:1280px;
  --pad:clamp(20px,5vw,64px);
  --r:4px;
  --shadow:0 1px 2px rgba(14,16,19,.04),0 12px 32px rgba(14,16,19,.07);
  --shadow-lg:0 24px 60px rgba(14,16,19,.14);
  --t:.2s cubic-bezier(.4,0,.2,1);
}

/* 2. Reset --------------------------------------------------------------- */
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{
  margin:0;background:var(--paper);color:var(--text);
  font-family:var(--f-body);font-size:17px;line-height:1.7;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
  overflow-x:hidden;
}
img,video{max-width:100%;height:auto;display:block}
/* Satır içi ikonlar: açık boyut verilmediğinde metin boyutuna göre ölçeklenir.
   (Boyutsuz SVG kapsayıcının tamamına yayılıyordu.) */
svg{width:1.1em;height:1.1em;flex:none;display:inline-block;vertical-align:-.16em}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit;color:inherit}
ul,ol{margin:0;padding:0}
figure{margin:0}
hr{border:0;border-top:1px solid var(--line);margin:40px 0}
:focus-visible{outline:3px solid var(--amber);outline-offset:2px}
::selection{background:var(--amber);color:var(--ink)}

/* 3. Tipografi ----------------------------------------------------------- */
h1,h2,h3,h4,h5{
  font-family:var(--f-display);font-weight:700;margin:0;
  line-height:1.02;letter-spacing:-.015em;color:var(--ink);
  text-wrap:balance;
}
h1{font-size:clamp(2.6rem,6vw,4.6rem);line-height:.98}
h2{font-size:clamp(2rem,4vw,3.1rem)}
h3{font-size:clamp(1.35rem,2.2vw,1.85rem)}
h4{font-size:1.2rem}
p{margin:0 0 1.15em}
strong,b{font-weight:600}
small{font-size:.82rem}
.lead{font-size:clamp(1.05rem,1.6vw,1.24rem);line-height:1.65;color:var(--muted)}
.eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  font-family:var(--f-body);font-size:.8rem;font-weight:700;
  letter-spacing:.15em;text-transform:uppercase;color:var(--amber-dark);
  margin:0 0 18px;
}
.eyebrow::before{content:"";width:26px;height:2px;background:var(--amber);flex:none}
.eyebrow.on-dark{color:var(--amber)}
.text-muted{color:var(--muted)}

/* Uzun metin bloğu (blog, hizmet detay, mahalle içerik) */
.prose{max-width:72ch}
.prose h2{margin:2.4em 0 .6em;font-size:clamp(1.7rem,3vw,2.35rem)}
.prose h3{margin:1.8em 0 .5em;font-size:clamp(1.25rem,2vw,1.5rem)}
.prose p{margin:0 0 1.25em;color:#333a42}
.prose ul,.prose ol{margin:0 0 1.4em;padding-left:0;list-style:none}
.prose ol{counter-reset:n}
.prose li{position:relative;padding-left:30px;margin-bottom:.65em;color:#333a42}
.prose ul>li::before{
  content:"";position:absolute;left:4px;top:.72em;
  width:9px;height:9px;background:var(--amber);
}
.prose ol>li{counter-increment:n}
.prose ol>li::before{
  content:counter(n);position:absolute;left:0;top:.05em;
  font-family:var(--f-display);font-weight:700;font-size:1.05em;color:var(--amber-dark);
}
.prose a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--amber);text-underline-offset:3px;text-decoration-thickness:2px}
.prose a:hover{background:var(--amber-soft)}
.prose blockquote{
  margin:1.8em 0;padding:20px 24px;background:var(--white);
  border-left:4px solid var(--amber);font-size:1.05rem;
}
.prose blockquote p:last-child{margin:0}
.prose table{width:100%;border-collapse:collapse;margin:1.6em 0;font-size:.95rem}
.prose th,.prose td{border:1px solid var(--line);padding:12px 14px;text-align:left;vertical-align:top}
.prose th{background:var(--ink);color:#fff;font-family:var(--f-display);font-weight:600;font-size:1.05rem}
.prose tbody tr:nth-child(even){background:#fbfaf8}

/* 4. Yerleşim ------------------------------------------------------------ */
.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--pad)}
.section{padding:clamp(56px,8vw,110px) 0}
.section--tight{padding:clamp(40px,5vw,70px) 0}
.section--dark{background:var(--ink);color:#d9dde2}
.section--dark h1,.section--dark h2,.section--dark h3,.section--dark h4{color:#fff}
.section--dark .lead{color:#a7b0ba}
.section--paper2{background:var(--paper-2)}
/* Koyu bölümde arka plan fotoğrafı — siyahtan geçişli, metin okunaklı kalır */
.section--photo{position:relative;overflow:hidden;isolation:isolate}
.section--photo>.wrap{position:relative;z-index:2}
.section-bg{position:absolute;inset:0;z-index:0}
.section-bg picture{position:absolute;inset:0;display:block}
.section-bg img{width:100%;height:100%;object-fit:cover;object-position:70% center}
/* Metnin durduğu sol taraf siyaha yaklaşır, fotoğraf sağda görünür kalır */
.section-bg::after{
  content:"";position:absolute;inset:0;
  background:
    linear-gradient(180deg,var(--ink) 0%,rgba(14,16,19,.35) 22%,rgba(14,16,19,.35) 76%,var(--ink) 100%),
    linear-gradient(90deg,var(--ink) 0%,rgba(14,16,19,.94) 26%,rgba(14,16,19,.55) 58%,rgba(14,16,19,.28) 100%);
}
@media (max-width:900px){
  .section-bg::after{
    background:linear-gradient(180deg,var(--ink) 0%,rgba(14,16,19,.9) 18%,rgba(14,16,19,.88) 80%,var(--ink) 100%);
  }
}
.section--white{background:var(--white)}
.sec-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,26rem);gap:32px;align-items:end;margin-bottom:clamp(32px,4vw,54px)}
.sec-head p{margin:0}
.grid{display:grid;gap:20px}
.g-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.g-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.g-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.lead-sm{font-size:.95rem;color:var(--muted);margin:6px 0 0;max-width:70ch}
.tag-card{display:flex;flex-direction:column;gap:6px;padding:16px 16px 18px;background:var(--white);border:1px solid var(--line);border-radius:var(--r);text-decoration:none;color:inherit;transition:border-color var(--t),transform var(--t),box-shadow var(--t)}
.tag-card:hover{border-color:var(--amber);transform:translateY(-2px);box-shadow:var(--shadow)}
.tag-card-i{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;border-radius:var(--r);background:var(--amber-soft);color:var(--ink)}
.tag-card-i svg{width:18px;height:18px}
.tag-card strong{font-size:.95rem;line-height:1.3}
.tag-card span:last-child{font-size:.78rem;color:var(--muted-2);line-height:1.45}
.stack-lg{display:grid;gap:clamp(28px,4vw,48px)}

/* 5. Bileşenler ---------------------------------------------------------- */

/* Düğmeler */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:12px;
  padding:16px 26px;font-family:var(--f-body);font-weight:700;font-size:.86rem;
  letter-spacing:.05em;text-transform:uppercase;border:2px solid transparent;
  cursor:pointer;transition:var(--t);border-radius:var(--r);text-align:center;
}
.btn svg{width:17px;height:17px;flex:none}
.btn--primary{background:var(--amber);color:var(--ink);border-color:var(--amber)}
.btn--primary:hover{background:#ffc633;border-color:#ffc633;transform:translateY(-2px)}
.btn--dark{background:var(--ink);color:#fff;border-color:var(--ink)}
.btn--dark:hover{background:var(--ink-3);border-color:var(--ink-3);transform:translateY(-2px)}
.btn--ghost{border-color:var(--line);color:var(--ink);background:transparent}
.btn--ghost:hover{border-color:var(--ink);background:var(--ink);color:#fff}
.btn--ghost-light{border-color:rgba(255,255,255,.35);color:#fff}
.btn--ghost-light:hover{background:#fff;color:var(--ink);border-color:#fff}
.btn--wa{background:var(--wa);color:#07240f;border-color:var(--wa)}
.btn--wa:hover{background:#3ee27c;border-color:#3ee27c;transform:translateY(-2px)}
.btn--block{width:100%}
.btn-row{display:flex;flex-wrap:wrap;gap:12px}
/* Koyu bölümlerdeki genel bağlantı renkleri butonları ezmesin */
a.btn--primary,a.btn--primary:hover{color:var(--ink)}
a.btn--dark,a.btn--dark:hover{color:#fff}
a.btn--wa,a.btn--wa:hover{color:#062d13}

/* Bağlantı oku */
.arrow-link{
  display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:.84rem;
  letter-spacing:.04em;text-transform:uppercase;color:var(--ink);
  border-bottom:2px solid var(--amber);padding-bottom:4px;transition:var(--t);
}
.arrow-link:hover{gap:15px;color:var(--amber-dark)}
.on-dark .arrow-link,.section--dark .arrow-link{color:#fff}

/* Rozet */
.badge{
  display:inline-block;padding:5px 10px;background:var(--amber);color:var(--ink);
  font-size:.73rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase;border-radius:2px;
}
.badge--ghost{background:transparent;border:1px solid var(--line);color:var(--muted)}
.badge--dark{background:var(--ink);color:var(--amber)}

/* Başlık / navigasyon */
.header{background:var(--white);position:sticky;top:0;z-index:60;border-bottom:1px solid var(--line)}
.header-in{
  display:flex;align-items:center;justify-content:space-between;gap:18px;min-height:78px;min-width:0;
  /* Başlık gövdeden daha geniş: logo sol kenara yaklaşsın, menüye de yer kalsın */
  max-width:1560px;padding:0 clamp(16px,2vw,32px);
}
/* min-width:0 olmadan logo ve CTA küçülemiyor, dar ekranda sayfayı taşırıyorlar */
.logo{display:flex;align-items:center;flex:none;background:#000;border-radius:10px;padding:8px 14px}
.logo img{width:auto;object-fit:contain}
.logo .logo-wide{display:block;height:46px}

.logo-text{min-width:0}
/* Logo + el yazısı slogan tek blok. Geniş ekranda yan yana, menünün yer
   kapladığı orta bantta (1101–1499) logonun altına iner ki başlık taşmasın. */
.brand{display:flex;align-items:center;gap:12px;flex:none;min-width:0}
.logo-slogan{
  display:flex;flex-direction:column;font-family:var(--f-hand);font-weight:700;
  line-height:1;transform:rotate(-5deg);flex:none;
}
.logo-slogan b{font-weight:700;font-size:1.18rem;color:var(--ink);white-space:nowrap}
.logo-slogan i{font-style:normal;font-weight:700;font-size:1.34rem;color:var(--amber-dark);white-space:nowrap;margin-top:1px}
.footer-brand-top{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.logo-slogan--footer{display:flex;margin-left:10px;transform:rotate(-5deg)}
.logo-slogan--footer b{color:#fff;font-size:1.24rem}
.logo-slogan--footer i{color:var(--amber);font-size:1.4rem}
.logo--footer{background:transparent;padding:0;border-radius:0}
.logo--footer img{height:52px;width:auto}
.logo-text b{display:block;font-family:var(--f-display);font-weight:800;font-size:1.6rem;line-height:.95;letter-spacing:-.01em;color:var(--ink);white-space:nowrap}
.logo-text span{display:block;font-size:.62rem;font-weight:700;letter-spacing:.19em;text-transform:uppercase;color:var(--muted-2);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

.nav{display:flex;align-items:stretch;gap:4px;margin-left:auto}
.nav-item{position:relative;display:flex;align-items:center}
.nav-link{
  display:flex;align-items:center;gap:6px;padding:0 13px;min-height:78px;white-space:nowrap;
  font-size:.88rem;font-weight:600;color:var(--ink);
  border-bottom:3px solid transparent;transition:var(--t);
}
.nav-link:hover,.nav-item:hover>.nav-link,.nav-item:focus-within>.nav-link{border-bottom-color:var(--amber);color:var(--amber-dark)}
.nav-link[aria-current="page"]{border-bottom-color:var(--ink)}
.nav-link .chev{width:11px;height:11px;color:var(--muted-2);transition:var(--t)}
.nav-item:hover .chev{transform:rotate(180deg)}

/* Açılır panel: ekran genişliğinde, taşmasın diye içeride kaydırılır */
.nav-item{position:static}
.mega{
  position:absolute;top:100%;left:0;right:0;width:100%;
  background:var(--white);border-top:3px solid var(--amber);box-shadow:var(--shadow-lg);
  opacity:0;visibility:hidden;transform:translateY(8px);transition:var(--t);z-index:70;
  max-height:min(78vh,660px);overflow-y:auto;overscroll-behavior:contain;
}
.mega>.wrap{padding-top:26px;padding-bottom:26px}
.nav-item:hover>.mega,.nav-item:focus-within>.mega{opacity:1;visibility:visible;transform:translateY(0)}
.mega-title{font-size:.72rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--muted-2);margin:0 0 8px}
.mega-cols{display:grid;gap:20px 30px;align-items:start}
.mega a{display:block;padding:4px 0;font-size:.88rem;font-weight:500;color:var(--text);transition:var(--t);line-height:1.32}
.mega a:hover{color:var(--amber-dark);transform:translateX(3px)}
/* Hizmet listesi uzun: sütunlara akıtılır, panel makul yükseklikte kalır */
.mega--services .mega-cols{display:block;column-count:4;column-gap:34px}
.mega--services .mega-cols>div{break-inside:avoid;margin-bottom:20px}
.mega--regions .mega-cols{grid-template-columns:repeat(4,minmax(0,1fr))}
.mega-split{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:34px;align-items:start}
.mega-flow{column-count:3;column-gap:30px}
.mega-flow a{break-inside:avoid}
.mega--corporate .mega-cols{grid-template-columns:repeat(5,minmax(0,1fr))}
.mega-foot{margin-top:20px;padding-top:16px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
/* 1100–1400 arası: menü uzun, üst şerit taşmasın diye CTA daralır */
@media (max-width:1400px){
  .header-cta .btn{padding:13px 16px;font-size:.76rem;letter-spacing:.03em}
  .header-cta .btn svg{display:none}
  .header-phone small{display:none}
  .header-phone b{font-size:1.15rem}
  .nav-link{padding:0 9px;font-size:.84rem}
  .mega--services .mega-cols{column-count:3}
  .mega--regions .mega-cols{grid-template-columns:repeat(3,minmax(0,1fr))}
  .mega-flow{column-count:2}
  .mega--corporate .mega-cols{grid-template-columns:repeat(3,minmax(0,1fr))}
}

.header-cta{display:flex;align-items:center;gap:10px;flex:none}
.header-phone{display:flex;flex-direction:column;line-height:1.2;padding-right:6px}
.header-phone small{font-size:.71rem;letter-spacing:.13em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.header-phone b{font-family:var(--f-display);font-size:1.3rem;font-weight:700;color:var(--ink)}

.burger{
  display:none;width:46px;height:46px;border:1px solid var(--line);background:var(--white);
  align-items:center;justify-content:center;cursor:pointer;border-radius:var(--r);
}
.burger svg{width:22px;height:22px}
#mnav{display:none}
.mobile-nav{display:none;border-top:1px solid var(--line);background:var(--white);max-height:76vh;overflow-y:auto}
.mobile-nav a{display:block;padding:14px 0;border-bottom:1px solid var(--line);font-weight:600}
.mobile-nav details>summary{
  padding:14px 0;border-bottom:1px solid var(--line);font-weight:600;cursor:pointer;list-style:none;
  display:flex;justify-content:space-between;align-items:center;
}
.mobile-nav details>summary::-webkit-details-marker{display:none}
.mobile-nav details>summary::after{content:"+";font-family:var(--f-display);font-size:1.4rem;color:var(--amber-dark)}
.mobile-nav details[open]>summary::after{content:"–"}
.mobile-nav details a{padding:11px 0 11px 16px;font-weight:500;font-size:.92rem;color:var(--muted)}
.mobile-nav .m-sub{padding-left:12px;border-left:2px solid var(--amber-soft);margin:6px 0 4px}
.mobile-nav .m-sub>details>summary{
  padding:12px 0;font-size:.95rem;font-weight:700;border-bottom:1px solid var(--line);
}
.mobile-nav .m-sub>details>summary::after{font-size:1.25rem}
.mobile-nav .m-sub a{padding:10px 0 10px 14px;font-size:.9rem}
/* Uzun mahalle listeleri menüyü şişirmesin: kendi içinde kaysın */
.mobile-nav .m-links{max-height:46vh;overflow-y:auto;overscroll-behavior:contain}
/* Masaüstü Bölgeler mega menüsü: ilçe > mahalle iki seviyeli ağaç */
.reg-tree{columns:2;column-gap:28px}
.reg-tree>details{break-inside:avoid;margin-bottom:2px}
.reg-tree summary{
  display:flex;align-items:center;gap:8px;cursor:pointer;list-style:none;
  padding:9px 10px;border-radius:var(--r);font-weight:700;font-size:.95rem;color:var(--ink);
}
.reg-tree summary::-webkit-details-marker{display:none}
.reg-tree summary::before{content:"+";font-family:var(--f-display);font-size:1.25rem;color:var(--amber-dark);width:12px}
.reg-tree details[open]>summary{background:var(--amber-soft)}
.reg-tree details[open]>summary::before{content:"–"}
.reg-tree summary:hover{background:var(--paper)}
.reg-links{columns:2;column-gap:20px;padding:4px 0 10px 22px}
.reg-links a{
  display:block;break-inside:avoid;padding:5px 0;font-size:.86rem;color:var(--muted);
  font-weight:500;line-height:1.3;
}
.reg-links a:hover{color:var(--ink)}
.reg-links a strong{color:var(--ink);font-weight:700}
@media (max-width:1300px){ .reg-tree{columns:1} .reg-links{columns:3} }
.mobile-nav .m-links>a:last-child{border-bottom:0}
.mobile-nav .mobile-cta{
  display:flex;align-items:center;justify-content:center;gap:9px;margin:14px 0 4px;
  background:var(--amber);color:var(--ink);font-weight:800;border:0;border-radius:var(--r);
  padding:15px 16px;font-size:.92rem;text-transform:uppercase;letter-spacing:.04em;
}
#mnav:checked~.mobile-nav{display:block}

/* Kırıntı yolu */
.crumbs{background:var(--paper-2);border-bottom:1px solid var(--line);font-size:.8rem}
.crumbs ol{display:flex;flex-wrap:wrap;gap:8px;align-items:center;list-style:none;padding:12px 0;color:var(--muted)}
.crumbs li{display:flex;align-items:center;gap:8px}
.crumbs li+li::before{content:"›";color:var(--muted-2)}
.crumbs a:hover{color:var(--amber-dark)}
.crumbs [aria-current]{color:var(--ink);font-weight:600}

/* Kart — her kart kendi kategori rengini --c / --c-soft üzerinden alır */
.card{
  --c:var(--amber);--c-soft:var(--amber-soft);
  background:var(--white);border:1px solid var(--line);border-radius:var(--r);
  transition:var(--t);display:flex;flex-direction:column;height:100%;overflow:hidden;
}
.card:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:#cfccc4}
.card-body{padding:13px 15px 15px;display:flex;flex-direction:column;gap:5px;flex:1}
.card h3{font-size:1.02rem;line-height:1.18;letter-spacing:-.005em}
.card p{
  color:var(--muted);font-size:.83rem;line-height:1.5;margin:0;flex:1;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
}
.card-foot{margin-top:8px}
.card .arrow-link{font-size:.68rem;gap:6px;padding-bottom:3px;border-bottom-color:var(--c)}
.card .arrow-link svg{width:14px;height:14px}
.card:hover .arrow-link{color:var(--c)}

/* Kapak görseli — kategori renginde şeffaf zeminli çizim */
.cover{position:relative;aspect-ratio:5/2;overflow:hidden;background:var(--c-soft);flex:none;border-bottom:1px solid var(--line)}
/* WebP için <picture> sarmalayıcısı satır içi kutu üretir; yüzde yükseklik
   hesabının bozulmaması için kutuyu ebeveyni kadar açıyoruz. */
.cover picture,.lead-media picture{display:block;width:100%;height:100%}
.cover img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s cubic-bezier(.4,0,.2,1)}
.card:hover .cover img{transform:scale(1.04)}
.cover-tag{
  position:absolute;right:10px;top:10px;z-index:2;display:inline-flex;align-items:center;gap:5px;
  padding:4px 8px;background:rgba(255,255,255,.9);color:var(--c);border:1px solid var(--c);
  border-radius:99px;font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;
}
.cover-tag svg{width:12px;height:12px;color:var(--c)}

/* Hizmet kartı */
.svc-card{position:relative}
.svc-card .icon{
  width:30px;height:30px;display:grid;place-items:center;background:var(--c-soft);
  color:var(--c);border-radius:var(--r);flex:none;
}
.svc-card .icon svg{width:17px;height:17px}
.svc-card .head{display:flex;align-items:center;gap:9px}
.svc-card .head h3{flex:1}
.svc-card::after{content:"";position:absolute;left:0;top:0;width:0;height:3px;background:var(--c);transition:var(--t);z-index:3}
.svc-card:hover::after{width:100%}

/* Liste bağlantısı (mahalle, ilçe, hizmet listeleri) */
.link-list{display:grid;gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.link-list a{
  background:var(--white);padding:16px 18px;display:flex;align-items:center;
  justify-content:space-between;gap:12px;transition:var(--t);
}
.link-list a:hover{background:var(--ink);color:#fff}
.link-list a:hover .ll-sub{color:#98a1ab}
.link-list b{font-family:var(--f-display);font-weight:600;font-size:1.15rem;letter-spacing:0}
.ll-sub{font-size:.76rem;color:var(--muted-2);display:block;font-family:var(--f-body);font-weight:400;letter-spacing:.02em}
.link-list .arr{color:var(--amber);font-size:1.1rem;flex:none}

/* Etiket bulutu */
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chips a,.chips span{
  display:inline-block;padding:8px 13px;background:var(--white);border:1px solid var(--line);
  font-size:.83rem;font-weight:500;border-radius:2px;transition:var(--t);
}
.chips a:hover{background:var(--ink);color:#fff;border-color:var(--ink)}
.section--dark .chips a,.section--dark .chips span{background:var(--ink-2);border-color:var(--line-dark);color:#cfd6dd}
.section--dark .chips a:hover{background:var(--amber);color:var(--ink);border-color:var(--amber)}

/* Yan panel */
.aside-box{background:var(--white);border:1px solid var(--line);border-top:3px solid var(--amber);padding:24px;border-radius:var(--r)}
.aside-box+.aside-box{margin-top:20px}
.aside-box h3{font-size:1.25rem;margin-bottom:12px}
.aside-box ul{list-style:none}
.aside-box li{border-bottom:1px solid var(--line)}
.aside-box li:last-child{border:0}
.aside-box li a{display:flex;justify-content:space-between;gap:10px;padding:10px 0;font-size:.92rem;transition:var(--t)}
.aside-box li a:hover{color:var(--amber-dark);padding-left:5px}
.fact-list{list-style:none}
.fact-list li{display:flex;justify-content:space-between;gap:14px;padding:11px 0;font-size:.92rem;border-bottom:1px solid var(--line)}
.fact-list li:last-child{border:0}
.fact-list b{font-weight:600;text-align:right}
.aside-box--dark .fact-list li{border-color:var(--line-dark)}
.aside-box--dark .fact-list b{color:#fff}
.aside-box--dark{background:var(--ink);border-color:var(--ink);color:#b9c1ca}
.aside-box--dark h3{color:#fff}
.aside-box--dark li{border-color:var(--line-dark)}
.aside-box--dark p{font-size:.92rem}

/* SSS */
.faq{border-top:1px solid var(--line)}
.faq details{border-bottom:1px solid var(--line)}
.faq summary{
  padding:22px 40px 22px 0;cursor:pointer;list-style:none;position:relative;
  font-family:var(--f-display);font-weight:600;font-size:1.28rem;line-height:1.25;color:var(--ink);
}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{
  content:"";position:absolute;right:6px;top:28px;width:14px;height:14px;
  border-right:2px solid var(--amber-dark);border-bottom:2px solid var(--amber-dark);
  transform:rotate(45deg);transition:var(--t);
}
.faq details[open] summary::after{transform:rotate(225deg);top:32px}
.faq summary:hover{color:var(--amber-dark)}
.faq .faq-body{padding:0 40px 24px 0;color:var(--muted);max-width:78ch}
.faq .faq-body p:last-child{margin:0}

/* Süreç adımları */
.steps{counter-reset:s;display:grid;gap:1px;background:var(--line);border:1px solid var(--line)}
.steps>div{background:var(--white);padding:26px;counter-increment:s;position:relative}
.steps>div::before{
  content:"0" counter(s);font-family:var(--f-display);font-weight:800;font-size:2.4rem;
  color:var(--amber);line-height:1;display:block;margin-bottom:12px;
}
.steps h3{font-size:1.25rem;margin-bottom:8px}
.steps p{font-size:.92rem;color:var(--muted);margin:0}

/* İstatistik şeridi */
.stats{background:var(--amber);color:var(--ink)}
.stats .wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding-top:36px;padding-bottom:36px}
.stats div{display:flex;flex-direction:column;gap:2px}
.stats strong{font-family:var(--f-display);font-weight:800;font-size:clamp(2.2rem,4vw,3.2rem);line-height:1}
.stats span{font-size:.83rem;font-weight:600;letter-spacing:.03em}

/* Hero */
.hero{position:relative;background:var(--ink);color:#fff;overflow:hidden}
.hero-media{position:absolute;inset:0}
.hero-media picture{position:absolute;inset:0;display:block}
.hero-media img{
  width:100%;height:100%;object-fit:cover;object-position:70% center;
  opacity:0;animation:heroFade 36s linear infinite;
}
.hero-media picture:first-child img{opacity:1}
.hero-media picture:nth-child(1) img{animation-delay:-.8s}
.hero-media picture:nth-child(2) img{animation-delay:5.2s}
.hero-media picture:nth-child(3) img{animation-delay:11.2s}
.hero-media picture:nth-child(4) img{animation-delay:17.2s}
.hero-media picture:nth-child(5) img{animation-delay:23.2s}
.hero-media picture:nth-child(6) img{animation-delay:29.2s}
/* Slaytla senkron dönen hizmet etiketi */
.hero-rotator{
  position:relative;height:2.1em;margin:-6px 0 18px;
  font-family:var(--f-display);font-size:clamp(1.35rem,3vw,2rem);
  font-weight:700;letter-spacing:-.01em;color:var(--amber);
}
.hero-rotator span{
  position:absolute;left:0;top:0;display:inline-flex;align-items:center;gap:10px;
  white-space:nowrap;opacity:0;animation:heroFade 36s linear infinite;
}
.hero-rotator span svg{width:.72em;height:.72em;color:var(--amber)}
.hero-rotator .r-1{animation-delay:-.8s}
.hero-rotator .r-2{animation-delay:5.2s}
.hero-rotator .r-3{animation-delay:11.2s}
.hero-rotator .r-4{animation-delay:17.2s}
.hero-rotator .r-5{animation-delay:23.2s}
.hero-rotator .r-6{animation-delay:29.2s}
@media (prefers-reduced-motion:reduce){
  .hero-rotator span{opacity:0}
  .hero-rotator .r-1{opacity:1}
}
@keyframes heroFade{
  0%{opacity:0}
  2.2%{opacity:1}
  16.6%{opacity:1}
  18.8%{opacity:0}
  100%{opacity:0}
}
.hero-media::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(100deg,rgba(10,12,14,.97) 0%,rgba(10,12,14,.9) 34%,rgba(10,12,14,.45) 62%,rgba(10,12,14,.1) 100%);
}
.hero-in{position:relative;z-index:2;padding:clamp(60px,9vw,120px) 0 clamp(70px,9vw,130px);max-width:52rem}
.hero h1{color:#fff;font-size:clamp(2.9rem,7vw,5.4rem);letter-spacing:-.025em}
.hero h1 em{font-style:normal;color:var(--amber)}
/* :not(.eyebrow) — aksi hâlde bu kural, düşük özgüllüklü .eyebrow boyutunu ezer */
.hero p:not(.eyebrow){color:#c3cad2;font-size:clamp(1rem,1.5vw,1.16rem);max-width:38rem;margin:24px 0 30px}
.hero .eyebrow{color:var(--amber)}
.hero-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:34px;padding-top:26px;border-top:1px solid rgba(255,255,255,.14)}
.hero-tags span{font-size:.8rem;color:#aeb7c1;display:flex;align-items:center;gap:7px}
.hero-tags svg{width:15px;height:15px;color:var(--amber)}
.hero::after{content:"";position:absolute;left:0;right:0;bottom:0;height:5px;background:var(--amber);z-index:3}

/* Sayfa başlığı (iç sayfalar) — --c ile kategori rengini alır */
.phead{--c:var(--amber);background:var(--ink);color:#fff;position:relative;overflow:hidden}
.phead::before{
  content:"";position:absolute;right:-6%;top:-30%;width:44%;height:170%;
  background:var(--c);opacity:.13;transform:skewX(-13deg);
}
.phead::after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:var(--c)}
.phead-in{position:relative;z-index:2;padding:clamp(44px,6vw,80px) 0;max-width:56rem}
.phead h1{color:#fff}
.phead p:not(.eyebrow){color:#aab3bd;margin:20px 0 0;max-width:44rem;font-size:1.06rem}
.phead .eyebrow{color:var(--c)}
.phead .eyebrow::before{background:var(--c)}
.phead-meta{display:flex;flex-wrap:wrap;gap:10px 24px;margin-top:26px;font-size:.85rem;color:#98a1ab}
.phead-meta span{display:flex;align-items:center;gap:8px}
.phead-meta svg{width:15px;height:15px;color:var(--c)}
/* Başlıkta vurgulu kelime */
.hl{font-style:normal;color:var(--c,var(--amber))}

/* Hızlı iletişim şeridi */
.quickbar{background:var(--white);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--shadow);margin-top:-46px;position:relative;z-index:5;display:grid;grid-template-columns:repeat(3,1fr) auto;overflow:hidden}
.quickbar>div,.quickbar>a{padding:22px 24px;border-right:1px solid var(--line);display:flex;flex-direction:column;gap:3px}
.quickbar>*:last-child{border-right:0}
.quickbar small{font-size:.75rem;letter-spacing:.13em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.quickbar b{font-family:var(--f-display);font-size:1.35rem;font-weight:600;color:var(--ink);line-height:1.15}
.quickbar span{font-size:.83rem;color:var(--muted)}
.quickbar>a.qb-cta{background:var(--ink);color:#fff;justify-content:center;min-width:230px}
.quickbar>a.qb-cta b{color:#fff}
.quickbar>a.qb-cta small{color:var(--amber)}
.quickbar>a.qb-cta:hover{background:var(--amber)}
.quickbar>a.qb-cta:hover b{color:var(--ink)}
.quickbar>a.qb-cta:hover small{color:var(--ink-3)}

/* Öne çıkan / bölünmüş blok */
.split{display:grid;grid-template-columns:1fr 1fr;gap:0;align-items:stretch}
.split-media{position:relative;min-height:420px;background:var(--ink-2)}
.split-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.split-body{padding:clamp(36px,5vw,68px)}
.split-badge{
  position:absolute;right:-28px;bottom:44px;width:158px;height:158px;background:var(--amber);
  color:var(--ink);display:grid;place-content:center;text-align:center;padding:14px;
}
.split-badge strong{font-family:var(--f-display);font-size:3.4rem;font-weight:800;line-height:.85}
.split-badge span{font-size:.7rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;margin-top:8px;display:block}

/* Öne çıkan noktalar */
.points{display:grid;gap:22px;grid-template-columns:1fr 1fr;margin-top:32px}
.points>div{display:grid;grid-template-columns:26px 1fr;gap:12px;align-items:start}
.points .tick{width:22px;height:22px;background:var(--amber);color:var(--ink);display:grid;place-items:center;border-radius:50%;margin-top:3px}
.points .tick svg{width:13px;height:13px}
.points h4{font-family:var(--f-display);font-size:1.15rem;margin-bottom:4px}
.points p{font-size:.9rem;color:var(--muted);margin:0}
.section--dark .points p{color:#98a1ab}

/* CTA bloğu */
.cta{background:var(--amber);color:var(--ink)}
.cta .wrap{display:grid;grid-template-columns:1.4fr auto;gap:34px;align-items:center;padding-top:clamp(40px,5vw,64px);padding-bottom:clamp(40px,5vw,64px)}
.cta h2{font-size:clamp(1.9rem,4vw,3rem)}
.cta p{margin:12px 0 0;max-width:44rem;font-size:1rem}
.cta-dark{background:var(--ink);color:#c3cad2}
.cta-dark h2{color:#fff}

/* Blog kartı */
.post-card h3{font-size:1rem;line-height:1.22}
.post-meta{display:flex;flex-wrap:wrap;gap:10px;font-size:.68rem;color:var(--muted-2);text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.post-meta .cat{color:var(--c)}

/* Yazı / hizmet kapak bandı */
.lead-media{position:relative;aspect-ratio:7/2;overflow:hidden;border-radius:var(--r);margin:0 0 26px;background:var(--c-soft);border:1px solid var(--line)}
.lead-media img{width:100%;height:100%;object-fit:cover}
.region-banner{position:relative;aspect-ratio:24/7;overflow:hidden;background:var(--ink-2)}
.region-banner img{width:100%;height:100%;object-fit:cover;object-position:center 62%}
.region-banner::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(13,17,22,.72),rgba(13,17,22,.15))}
.region-banner b{
  position:absolute;left:var(--pad);bottom:22px;z-index:2;color:#fff;
  font-family:var(--f-display);font-size:clamp(1.4rem,3vw,2.2rem);font-weight:700;
}

/* Blog yazısı üstü */
.article-head{max-width:52rem}
.article-head h1{font-size:clamp(2.2rem,4.6vw,3.5rem);line-height:1.02;margin:16px 0 20px}
.toc{background:var(--paper-2);border-left:3px solid var(--amber);padding:22px 24px;margin:0 0 36px}
.toc b{display:block;font-family:var(--f-display);font-size:1.15rem;margin-bottom:10px}
.toc ol{list-style:none;counter-reset:t}
.toc li{counter-increment:t;padding:5px 0 5px 26px;position:relative;font-size:.94rem}
.toc li::before{content:counter(t) ".";position:absolute;left:0;color:var(--amber-dark);font-weight:700}
.toc a:hover{color:var(--amber-dark);text-decoration:underline}

/* İçerik + yan panel düzeni */
.with-aside{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:clamp(32px,5vw,64px);align-items:start}
.with-aside>aside{position:sticky;top:96px}

/* Form */
.form{background:var(--white);border:1px solid var(--line);padding:clamp(24px,3vw,38px);border-radius:var(--r);box-shadow:var(--shadow)}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.field{display:flex;flex-direction:column;gap:7px}
.field.full{grid-column:1/-1}
.field label{font-size:.78rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink)}
.field input,.field select,.field textarea{
  border:1px solid var(--line);background:#fbfaf8;padding:13px 14px;border-radius:var(--r);
  transition:var(--t);width:100%;font-size:.98rem;
}
.field input:focus,.field select:focus,.field textarea:focus{outline:0;border-color:var(--amber-dark);background:#fff;box-shadow:0 0 0 3px rgba(255,179,0,.18)}
.field textarea{resize:vertical;min-height:130px}
.field small{font-size:.78rem;color:var(--muted-2)}
.check{display:flex;gap:10px;align-items:flex-start;font-size:.86rem;color:var(--muted)}
.check input{width:18px;height:18px;margin-top:2px;flex:none;accent-color:var(--amber-dark)}
.form-sec{grid-column:1/-1;margin-top:8px;padding-top:20px;border-top:1px solid var(--line)}
.form-sec:first-child{border-top:0;padding-top:0;margin-top:0}
.form-sec h3{font-size:.78rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--amber-dark);margin:0 0 4px}
.form-sec p{font-size:.88rem;color:var(--muted-2);margin:0}
.opts{grid-column:1/-1;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
.opts .check{background:#fbfaf8;border:1px solid var(--line);border-radius:var(--r);padding:11px 13px;font-size:.9rem;color:var(--ink);align-items:center;cursor:pointer;transition:var(--t);margin:0}
.opts .check:hover{border-color:var(--amber-dark);background:#fff}
.field input[type=file]{padding:10px;background:#fbfaf8;font-size:.9rem}

/* WhatsApp hızlı iletişim paneli — okuyucu aşağı indiğinde açılır, kapatılabilir */
/* Sabit konum: etikete basıldığında tarayıcı kutuyu görünür kılmak için
   sayfayı kaydırmaya çalışmasın diye (absolute olduğunda en alta atıyordu). */
/* Yarı saydam: arkadaki sayfa bulanık olarak görünür. Bulanıklık desteklenmeyen
   tarayıcıda katmanlar opak kalsın diye @supports ile ayrıldı. */
#wa-chat{position:fixed;bottom:0;right:0;width:1px;height:1px;opacity:0;pointer-events:none;margin:0}
.wa-panel{
  position:fixed;right:20px;bottom:86px;z-index:96;width:min(300px,calc(100vw - 32px));
  background:var(--white);border-radius:16px;box-shadow:0 22px 60px rgba(0,0,0,.30);
  overflow:hidden;border:1px solid var(--line);
  opacity:0;visibility:hidden;transform:translateY(14px) scale(.98);
  transition:opacity .28s ease,transform .28s ease,visibility .28s;
}
#wa-chat:checked~.wa-panel{opacity:1;visibility:visible;transform:translateY(0) scale(1);transition-delay:.12s}
.wa-panel-head{display:flex;align-items:center;gap:10px;background:#075e54;color:#fff;padding:11px 12px}
.wa-panel-head .ic{width:33px;height:33px;border-radius:50%;background:var(--wa);display:grid;place-items:center;flex:none}
.wa-panel-head .ic svg{width:19px;height:19px;color:#fff}
.wa-who{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.wa-who b{font-size:.92rem;font-weight:700}
.wa-who small{font-size:.68rem;opacity:.85}
.wa-close{
  margin-left:auto;flex:none;width:30px;height:30px;border-radius:50%;
  display:grid;place-items:center;cursor:pointer;font-size:1.35rem;line-height:1;
  background:rgba(255,255,255,.14);color:#fff;transition:var(--t);
}
.wa-close:hover{background:rgba(255,255,255,.28)}
.wa-panel-body{padding:12px;background:#ece5dd}
.wa-bubble{
  background:#fff;border-radius:2px 12px 12px 12px;padding:9px 12px;margin:0 0 10px;
  font-size:.85rem;line-height:1.45;color:var(--text);box-shadow:0 1px 2px rgba(0,0,0,.10);
}
.wa-opt{
  display:flex;align-items:center;justify-content:space-between;gap:9px;
  background:#fff;border:1px solid var(--line);border-radius:9px;
  padding:10px 12px;margin-bottom:7px;font-size:.86rem;font-weight:600;line-height:1.3;
  color:var(--ink);transition:var(--t);
}
.wa-opt:last-child{margin-bottom:0}
.wa-opt svg{width:15px;height:15px;color:var(--wa);flex:none}
.wa-opt:hover{background:var(--wa);color:#052e13;border-color:var(--wa);transform:translateX(2px)}
.wa-opt:hover svg{color:#052e13}
.wa-panel-foot{
  display:flex;align-items:center;justify-content:space-between;gap:8px;
  padding:9px 12px;background:var(--white);border-top:1px solid var(--line);font-size:.76rem;color:var(--muted);
}
.wa-panel-foot .wa-other{color:var(--muted)}
.wa-panel-foot .wa-other svg{color:var(--wa)}
.wa-panel-foot a{display:inline-flex;align-items:center;gap:6px;font-weight:700;color:var(--ink)}
.wa-panel-foot svg{width:14px;height:14px;color:var(--amber-dark)}

/* Saydamlık katmanı: arkadaki sayfa bulanık olarak görünsün. Bulanıklığı
   desteklemeyen tarayıcıda yukarıdaki opak değerler geçerli kalır. */
@supports ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){
  .wa-panel{
    background:transparent;border-color:rgba(255,255,255,.30);
    -webkit-backdrop-filter:blur(14px) saturate(150%);backdrop-filter:blur(14px) saturate(150%);
  }
  .wa-panel-head{background:rgba(7,94,84,.80)}
  .wa-panel-body{background:rgba(236,229,221,.60)}
  .wa-bubble,.wa-opt{background:rgba(255,255,255,.82)}
  .wa-panel-foot{background:rgba(255,255,255,.74)}
}
/* Saydamlığı azaltılmış sistem ayarında düz zemine dön. */
@media (prefers-reduced-transparency:reduce){
  .wa-panel{background:var(--white);border-color:var(--line);-webkit-backdrop-filter:none;backdrop-filter:none}
  .wa-panel-head{background:#075e54}
  .wa-panel-body{background:#ece5dd}
  .wa-bubble,.wa-opt,.wa-panel-foot{background:#fff}
}

#wa-chat:checked~.wa-float .ic{background:var(--ink)}
#wa-chat:checked~.wa-float .ic svg{color:var(--wa)}

/* Yüzen WhatsApp + mobil arama çubuğu */
.wa-float{
  position:fixed;right:20px;bottom:20px;z-index:97;cursor:pointer;display:flex;align-items:center;gap:11px;
  background:var(--wa);color:#052e13;padding:11px 18px 11px 12px;border-radius:999px;
  box-shadow:0 10px 30px rgba(0,0,0,.28);transition:var(--t);font-weight:700;
}
.wa-float:hover{transform:translateY(-3px);background:#3ee27c}
.wa-float .ic{width:36px;height:36px;border-radius:50%;background:#fff;display:grid;place-items:center;flex:none}
.wa-float .ic svg{width:21px;height:21px;color:var(--wa)}
.wa-float i{font-style:normal;display:flex;flex-direction:column;line-height:1.15}
.wa-float small{font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;color:#0a3d1c;font-weight:800}
.wa-float b{font-family:var(--f-display);font-size:1.05rem;font-weight:700;color:#04240f}
.mobile-bar{display:none}

/* Ayırıcı başlık */
.divider{display:flex;align-items:center;gap:16px;margin:0 0 26px}
.divider h2,.divider h3{white-space:nowrap}
.divider::after{content:"";height:1px;background:var(--line);flex:1}

/* Alt bilgi */
.footer{background:var(--ink);color:#8e97a1;padding-top:clamp(48px,6vw,78px);font-size:.92rem}
.footer a{color:#c2c9d1}
.footer a:hover{color:var(--amber)}
/* Buton renkleri .footer a kuralına yenik düşmesin */
.footer a.btn--primary,.footer a.btn--primary:hover{color:var(--ink)}
.footer a.btn--dark,.footer a.btn--ghost-light,.footer a.btn--ghost-light:hover{color:#fff}
.footer a.btn--ghost-light:hover{color:var(--ink)}
.footer a.btn--wa,.footer a.btn--wa:hover{color:#062d13}
.footer h4{color:var(--amber);font-family:var(--f-display);font-size:1.2rem;margin-bottom:16px;letter-spacing:.02em}
.footer-top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.1fr;gap:38px;padding-bottom:44px}
.footer-brand p{margin:18px 0;max-width:30rem;line-height:1.7}
.footer ul{list-style:none;display:grid;gap:10px}
.footer-contact li{display:grid;grid-template-columns:20px 1fr;gap:10px;align-items:start}
.footer-contact svg{width:16px;height:16px;color:var(--amber);margin-top:4px}
.footer-seo{border-top:1px solid var(--line-dark);padding:32px 0;font-size:.84rem;line-height:1.9}
.footer-seo b{display:block;color:#c2c9d1;margin-bottom:8px;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase}
.footer-seo a{color:#7c858f}
.footer-seo a:hover{color:var(--amber)}
.footer-bottom{border-top:1px solid var(--line-dark);padding:20px 0 24px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:.82rem;color:#69727c}

/* 404 */
.nf{text-align:center;padding:clamp(60px,10vw,140px) 0}
.nf strong{font-family:var(--f-display);font-size:clamp(6rem,18vw,12rem);line-height:.85;color:var(--amber);display:block}

/* Yardımcılar */
.mt-0{margin-top:0}.mb-0{margin-bottom:0}
.mt-s{margin-top:14px}.mt-m{margin-top:26px}.mt-l{margin-top:44px}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.center{text-align:center}

/* 7. Duyarlı ------------------------------------------------------------- */
/* Dar masaüstü: logo + slogan + menü + CTA aynı satıra sığmalı.
   Bantlar daraldıkça sırayla slogan, menü ve logo küçülür. */
@media (min-width:1101px) and (max-width:1439px){
  .header-in{gap:12px}
  .brand{gap:9px}
  .header-in .logo-slogan b{font-size:.88rem}
  .header-in .logo-slogan i{font-size:1rem}
}
@media (min-width:1101px) and (max-width:1260px){
  .header-in{gap:10px}
  .brand{gap:8px}
  .nav-link{padding:0 6px;font-size:.82rem}
  .logo{padding:7px 11px}
  .logo .logo-wide{height:42px}
  .header-in .logo-slogan b{font-size:.8rem}
  .header-in .logo-slogan i{font-size:.92rem}
}
@media (max-width:1220px){
  .header-phone{display:none}
}
@media (max-width:1100px){
  .nav{display:none}
  .burger{display:flex}
  .with-aside{grid-template-columns:1fr}
  .with-aside>aside{position:static}
  .g-4{grid-template-columns:repeat(2,minmax(0,1fr))}
  .footer-top{grid-template-columns:1fr 1fr}
}
@media (max-width:900px){
  .sec-head{grid-template-columns:1fr;gap:18px}
  .g-3{grid-template-columns:repeat(2,minmax(0,1fr))}
  .split{grid-template-columns:1fr}
  .split-media{min-height:300px}
  .split-badge{right:20px;bottom:20px;width:126px;height:126px}
  /* Dar ekranda yatay gradyan fotoğrafı tamamen kapatıyor; dikey gradyana geçiliyor */
  .hero-media img{object-position:76% center}
  .hero-media::after{background:linear-gradient(180deg,rgba(10,12,14,.62) 0%,rgba(10,12,14,.86) 42%,rgba(10,12,14,.95) 100%)}
  .quickbar{grid-template-columns:1fr 1fr;margin-top:0;border-radius:0}
  .quickbar>div,.quickbar>a{border-bottom:1px solid var(--line)}
  .cta .wrap{grid-template-columns:1fr}
  .stats .wrap{grid-template-columns:repeat(2,1fr);gap:26px}
  .steps{grid-template-columns:1fr 1fr}
}
@media (max-width:640px){
  body{font-size:16px}
  .g-2,.g-3,.g-4,.points,.form-grid,.steps{grid-template-columns:1fr}
  .quickbar{grid-template-columns:1fr}
  /* Üst bar dar ekranda taşmasın: alt şeritte zaten Ara + WhatsApp var */
  .header-phone{display:none}
  .header-in{gap:10px;min-height:66px}
  .logo{padding:7px 12px;border-radius:9px}
  .logo .logo-wide{height:44px}
  .logo-slogan b{font-size:.95rem}
  .logo-slogan i{font-size:1.08rem}
  .header-cta{gap:8px}
  .header-cta .btn{padding:11px 14px;font-size:.74rem;letter-spacing:.03em}
  .burger{width:42px;height:42px}
  .hero-in{padding-bottom:56px}
  .faq summary{font-size:1.12rem;padding-right:34px}
  .wa-float i{display:none}
  .wa-float{padding:11px;bottom:76px;right:14px}
  .wa-panel{right:12px;left:12px;width:auto;bottom:136px}
  .footer-top{grid-template-columns:1fr;gap:30px}
  .mobile-bar{
    display:grid;grid-template-columns:1fr 1fr 1fr;position:fixed;left:0;right:0;bottom:0;z-index:95;
    box-shadow:0 -6px 22px rgba(0,0,0,.16);
  }
  .mobile-bar a{padding:14px 4px;text-align:center;font-weight:700;font-size:.78rem;display:flex;align-items:center;justify-content:center;gap:6px}
  .mobile-bar svg{width:17px;height:17px}
  .mobile-bar .call{background:var(--amber);color:var(--ink)}
  .mobile-bar .wa{background:var(--wa);color:#052e13}
  .mobile-bar .contact{background:var(--ink);color:#fff}
  body{padding-bottom:54px}
}

/* Çok dar ekranlarda slogan sığmıyor, gizlenir (footer'da görünmeye devam eder) */
@media (max-width:359px){ .header-in .logo-slogan{display:none} }

/* Çok dar ekranlar (iPhone SE ve altı) */
@media (max-width:430px){
  .header-cta .btn{display:none}   /* alt sabit şerit ara/WhatsApp'ı zaten veriyor */
  .logo{padding:6px 10px}
  .logo .logo-wide{height:34px}
  .logo-slogan b{font-size:.8rem}
  .logo-slogan i{font-size:.92rem}
  .hero h1{font-size:clamp(2.3rem,10vw,2.9rem)}
  .cover-tag{font-size:.58rem;padding:3px 6px}
  .btn{padding:14px 18px;font-size:.8rem}
  .region-banner{aspect-ratio:16/7}
}

/* 8. Yazdırma / erişilebilirlik ------------------------------------------ */
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}
@media print{
  .header,.footer,.wa-float,.mobile-bar,.cta,.crumbs{display:none}
  body{background:#fff;font-size:12pt}
  .section{padding:12pt 0}
}
`;
