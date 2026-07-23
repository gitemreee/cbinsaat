import Link from "next/link";
import { districts, posts, services } from "./site-data";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return <main>
    <div className="topbar">
      <div><span>●</span> Malatya’nın 13 ilçesine hizmet</div>
      <div><a href="mailto:info@cbinsaat.com">✉ info@cbinsaat.com</a><span className="sep">|</span><b>Pzt–Cmt 08:00–19:00</b></div>
    </div>
    <Header />

    <section className="hero">
      <div className="hero-inner">
        <div className="hero-kicker"><span>⚡</span> MALATYA ELEKTRİK · TESİSAT · İNŞAAT</div>
        <h1>Yapınızın<br /><mark>tüm teknik işleri</mark><br />tek ekipte.</h1>
        <p>Elektrik, sıhhi tesisat, mekanik sistemler ve anahtar teslim inşaat. Keşiften uygulamaya, işi eksiksiz teslim ediyoruz.</p>
        <div className="hero-buttons">
          <Link className="btn yellow" href="/teklif">PROJENİ ANLAT, TEKLİF AL <Arrow /></Link>
          <Link className="btn outline" href="#hizmetler">HİZMETLERİMİZ</Link>
        </div>
        <div className="hero-proof">
          <div className="faces"><i>CB</i><i>⚡</i><i>✓</i></div>
          <div><b>Tek ekip, tek muhatap</b><small>Malatya geneli planlı uygulama</small></div>
        </div>
      </div>
      <div className="hero-side-label">ELEKTRİK • MEKANİK • YAPI</div>
    </section>

    <section className="quick-strip">
      <div><span>01</span><i>ϟ</i><b>Elektrik Arıza</b><small>Güvenli tespit ve onarım</small></div>
      <div><span>02</span><i>◉</i><b>Sıhhi Tesisat</b><small>Kaçak, tıkanıklık, montaj</small></div>
      <div><span>03</span><i>⌂</i><b>Anahtar Teslim</b><small>Sıfırdan yapım ve tadilat</small></div>
      <Link href="/teklif"><small>İŞİNİZİ ANLATIN</small><b>Hızlı teklif alın</b><Arrow /></Link>
    </section>

    <section className="section services" id="hizmetler">
      <SectionTitle eyebrow="NELER YAPIYORUZ?" title={<>Malatya’da profesyonel<br /><mark>teknik servis.</mark></>} text="Küçük bir arızadan komple yapı uygulamasına kadar ihtiyacınız olan tüm ekipler aynı çatı altında." />
      <div className="service-grid">
        {services.map((s, i) => <Link href={`/hizmetler/${s.slug}`} className="service-card" key={s.slug}>
          <div className="service-photo"><span>{s.icon}</span><small>0{i + 1}</small></div>
          <div className="service-body"><h3>{s.title}</h3><p>{s.short}</p><b>HİZMETİ İNCELE <Arrow /></b></div>
        </Link>)}
      </div>
    </section>

    <section className="about">
      <div className="about-photo">
        <div className="experience"><strong>10+</strong><span>YILDIR<br />SAHADAYIZ</span></div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">CB İNŞAAT HAKKINDA</p>
        <h2>İşi bilen ekip,<br /><mark>sözünün arkasında.</mark></h2>
        <p>Ev, iş yeri, mağaza ve şantiyelerde elektrik, su, mekanik ve yapı işlerini birbirinden koparmadan yönetiyoruz. Doğru keşif, uygun malzeme ve temiz işçilikle kalıcı çözümler üretiyoruz.</p>
        <div className="about-points">
          <div><i>✓</i><b>Yerinde keşif</b><small>İhtiyacı doğru tespit ederiz.</small></div>
          <div><i>✓</i><b>Net iş kapsamı</b><small>Ne yapılacağını baştan bilirsiniz.</small></div>
          <div><i>✓</i><b>Koordineli ekip</b><small>Farklı ustalarla uğraşmazsınız.</small></div>
          <div><i>✓</i><b>Kontrollü teslim</b><small>Test eder, temiz teslim ederiz.</small></div>
        </div>
        <a href="#teklif" className="text-button">BİZİMLE ÇALIŞIN <Arrow /></a>
      </div>
    </section>

    <section className="stats">
      <div><strong>13</strong><span>İLÇEDE<br />HİZMET</span></div>
      <div><strong>6</strong><span>UZMANLIK<br />ALANI</span></div>
      <div><strong>360°</strong><span>UÇTAN UCA<br />ÇÖZÜM</span></div>
      <div><strong>1</strong><span>TEK<br />MUHATAP</span></div>
    </section>

    <section className="products section">
      <div className="product-head">
        <div><p className="eyebrow">AYDINLATMA MAĞAZASI</p><h2>Evinize yakışan<br /><mark>doğru ışık.</mark></h2></div>
        <p>Avize, aplik, spot, LED ve elektrik malzemelerinde ürün seçimi, satış ve güvenli montaj hizmeti.</p>
      </div>
      <div className="product-showcase">
        <div className="product-main"><div className="hanging-lamp"><i/><span/><b/></div><small>DEKORATİF AYDINLATMA</small><h3>Avize & Sarkıt</h3><a href="#teklif">ÜRÜN DANIŞMANLIĞI <Arrow /></a></div>
        <div className="product-list">
          {["LED & Spot Aydınlatma","Aplik & Bahçe Aydınlatma","Anahtar · Priz · Elektrik Malzemesi"].map((x,i)=><div key={x}><span>0{i+2}</span><h3>{x}</h3><Arrow /></div>)}
        </div>
      </div>
    </section>

    <section className="locations">
      <div className="location-copy"><p className="eyebrow">HİZMET BÖLGELERİ</p><h2>Malatya’nın<br /><mark>her noktasındayız.</mark></h2><p>Merkez mahallelerden kırsal yerleşimlere kadar keşif, bakım, onarım ve uygulama desteği.</p><Link href="/malatya" className="btn yellow">TÜM BÖLGELER <Arrow /></Link></div>
      <div className="district-list">{districts.map((d,i)=><Link href={`/malatya/${d.slug}`} key={d.slug}><small>{String(i+1).padStart(2,"0")}</small><b>{d.name}</b><Arrow /></Link>)}</div>
    </section>

    <section className="section blog">
      <SectionTitle eyebrow="USTA REHBERİ" title={<>Eviniz için<br /><mark>yararlı bilgiler.</mark></>} text="Elektrik güvenliğinden su tesisatına, doğru ürün seçiminden periyodik bakıma pratik bilgiler." />
      <div className="post-grid">{posts.slice(0,3).map((p,i)=><Link href={`/blog/${p.slug}`} key={p.slug} className="post"><div className={`post-cover cover-${i}`}><span>{p.category}</span></div><div><small>{p.reading} DK OKUMA</small><h3>{p.title}</h3><p>{p.excerpt}</p><b>DEVAMINI OKU <Arrow /></b></div></Link>)}</div>
    </section>

    <section className="quote" id="teklif">
      <div className="quote-copy"><p className="eyebrow">ÜCRETSİZ KEŞİF TALEBİ</p><h2>İşinizi anlatın,<br /><mark>biz çözelim.</mark></h2><p>Formu doldurun; işinizin kapsamını konuşmak ve uygun keşif zamanını belirlemek için sizinle iletişime geçelim.</p><a href="mailto:info@cbinsaat.com">✉ info@cbinsaat.com</a></div>
      <form action="mailto:info@cbinsaat.com" method="post" encType="text/plain">
        <div><label>ADINIZ SOYADINIZ<input name="ad" required placeholder="Adınız Soyadınız" /></label><label>TELEFON<input name="telefon" required inputMode="tel" placeholder="05__ ___ __ __" /></label></div>
        <label>HİZMET<select name="hizmet" defaultValue=""><option value="" disabled>Hizmet seçin</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></label>
        <label>İŞİNİZİ KISACA ANLATIN<textarea name="mesaj" rows={3} placeholder="Örn. daire elektrik tesisatı yenilenecek..." /></label>
        <button className="btn yellow">TALEBİ GÖNDER <Arrow /></button>
      </form>
    </section>
    <Footer />
  </main>
}

function Header(){return <header className="nav"><Link href="/" className="brand"><span className="brand-bolt">ϟ</span><span><b>CB</b> İNŞAAT<small>ELEKTRİK • MEKANİK • YAPI</small></span></Link><nav><Link href="/">ANA SAYFA</Link><div className="nav-drop"><Link href="/#hizmetler">HİZMETLER <i>⌄</i></Link><div className="mega services-menu"><div><small>ELEKTRİK</small>{services.slice(0,4).map(s=><Link key={s.slug} href={`/hizmetler/${s.slug}`}><span>{s.icon}</span>{s.title}</Link>)}</div><div><small>SU & MEKANİK</small>{services.slice(4,10).map(s=><Link key={s.slug} href={`/hizmetler/${s.slug}`}><span>{s.icon}</span>{s.title}</Link>)}</div><div><small>YAPI & BAKIM</small>{services.slice(10).map(s=><Link key={s.slug} href={`/hizmetler/${s.slug}`}><span>{s.icon}</span>{s.title}</Link>)}<Link className="mega-cta" href="/teklif">Projenizi anlatın →</Link></div></div></div><div className="nav-drop"><Link href="/malatya">BÖLGELER <i>⌄</i></Link><div className="mega district-menu"><small>MALATYA’NIN 13 İLÇESİ</small><div>{districts.map(d=><Link href={`/malatya/${d.slug}`} key={d.slug}>{d.name}<span>→</span></Link>)}</div></div></div><div className="nav-drop"><Link href="/blog">BLOG <i>⌄</i></Link><div className="mega mini-menu"><small>USTA REHBERİ</small>{posts.slice(0,4).map(p=><Link href={`/blog/${p.slug}`} key={p.slug}>{p.title}</Link>)}</div></div><Link href="/teklif">TEKLİF AL</Link></nav><Link href="/teklif" className="header-cta"><small>PROJENİ ANLAT</small><b>Hemen Teklif Al</b><Arrow /></Link></header>}
function SectionTitle({eyebrow,title,text}:{eyebrow:string,title:React.ReactNode,text:string}){return <div className="section-title"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{text}</p></div>}
function Footer(){return <footer><div className="footer-main"><Link href="/" className="brand light"><span className="brand-bolt">ϟ</span><span><b>CB</b> İNŞAAT<small>ELEKTRİK • MEKANİK • YAPI</small></span></Link><p>Malatya’da elektrik, sıhhi tesisat, mekanik sistemler, aydınlatma ve anahtar teslim yapı çözümleri.</p></div><div><h4>HİZMETLER</h4>{services.slice(0,6).map(s=><Link href={`/hizmetler/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div><div><h4>KURUMSAL</h4><Link href="/malatya">Hizmet Bölgeleri</Link><Link href="/blog">Usta Rehberi</Link><Link href="/teklif">Projenizi Anlatın</Link></div><div><h4>İLETİŞİM</h4><a href="mailto:info@cbinsaat.com">info@cbinsaat.com</a><span>Malatya / Türkiye</span></div><small>© 2026 CB İnşaat. Tüm hakları saklıdır.</small></footer>}
