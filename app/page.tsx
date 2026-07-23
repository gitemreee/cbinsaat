import Link from "next/link";
import { districts, services, posts } from "./site-data";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand" aria-label="CB İnşaat ana sayfa">
          <span className="brand-mark">CB</span>
          <span>CB <b>İNŞAAT</b><small>ELEKTRİK · MEKANİK · YAPI</small></span>
        </Link>
        <nav aria-label="Ana menü">
          <Link href="#hizmetler">Hizmetler</Link>
          <Link href="/malatya">Hizmet Bölgeleri</Link>
          <Link href="/blog">Rehber</Link>
          <Link href="#hakkimizda">Kurumsal</Link>
        </nav>
        <a className="nav-cta" href="#teklif">Ücretsiz keşif <span>→</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><i /> MALATYA GENELİ HİZMET</p>
          <h1>Bir yapının<br /><em>her işi,</em><br />tek ekipte.</h1>
          <p className="lead">Elektrik, sıhhi tesisat, mekanik sistemler ve anahtar teslim inşaat işlerinizi başından sonuna planlıyor, uyguluyor ve teslim ediyoruz.</p>
          <div className="hero-actions">
            <a href="#teklif" className="button primary">Keşif talebi oluştur <span>↗</span></a>
            <Link href="#hizmetler" className="button ghost">Hizmetleri incele</Link>
          </div>
          <div className="trust-row">
            <span><b>01</b><small>Tek muhatap</small></span>
            <span><b>02</b><small>Şeffaf teklif</small></span>
            <span><b>03</b><small>Planlı teslim</small></span>
          </div>
        </div>
        <div className="hero-art" aria-label="Elektrik ve su tesisatını temsil eden görsel düzen">
          <div className="blueprint">
            <span className="bp-label">PROJE / 01</span>
            <div className="wire wire-a" />
            <div className="wire wire-b" />
            <div className="junction j1">⚡</div>
            <div className="junction j2">●</div>
            <div className="metric"><small>UYGULAMA</small><b>360°</b></div>
            <div className="water-line" />
            <div className="helmet">CB</div>
          </div>
          <div className="floating-note"><b>Malatya’nın 13 ilçesinde</b><span>yerinde keşif ve uygulama</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Hizmet özeti">
        <span>ELEKTRİK TESİSATI</span><i>✦</i><span>SIHHİ TESİSAT</span><i>✦</i><span>MEKANİK</span><i>✦</i><span>ANAHTAR TESLİM</span><i>✦</i><span>AYDINLATMA</span>
      </section>

      <section className="services section" id="hizmetler">
        <div className="section-head">
          <div><p className="eyebrow"><i /> UZMANLIK ALANLARIMIZ</p><h2>Yapınız için<br />uçtan uca çözüm.</h2></div>
          <p>Arızadan sıfır tesisata, mağaza aydınlatmasından komple yapıya kadar farklı ustalarla uğraşmadan tek ekip, tek plan ve tek muhatap.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Link href={`/hizmetler/${service.slug}`} className="service-card" key={service.slug}>
              <span className="number">0{index + 1}</span>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <b>Detayları gör <span>→</span></b>
            </Link>
          ))}
        </div>
      </section>

      <section className="about" id="hakkimizda">
        <div className="about-dark">
          <p className="eyebrow light"><i /> NEDEN CB İNŞAAT?</p>
          <h2>Sorunu değil,<br /><em>çözümü</em> büyütürüz.</h2>
          <p>Keşiften malzeme seçimine, uygulamadan son kontrole kadar işin tamamını sahipleniriz. Konut, iş yeri, şantiye ve ticari alanlarda ihtiyaca uygun çözümler üretiriz.</p>
          <div className="checklist">
            <span>✓ Yerinde ihtiyaç analizi</span>
            <span>✓ Kalem kalem anlaşılır teklif</span>
            <span>✓ Elektrik + mekanik koordinasyonu</span>
            <span>✓ İş bitiminde kontrol ve teslim</span>
          </div>
        </div>
        <div className="process">
          <p className="eyebrow"><i /> NASIL ÇALIŞIYORUZ?</p>
          {[
            ["01", "Talebi dinliyoruz", "İhtiyacınızı, yapının durumunu ve hedefinizi netleştiriyoruz."],
            ["02", "Yerinde keşfediyoruz", "Ölçüleri, mevcut tesisatı ve uygulama koşullarını inceliyoruz."],
            ["03", "Planlayıp uyguluyoruz", "Net kapsam ve iş programıyla uzman ekibi sahaya alıyoruz."],
            ["04", "Kontrol edip teslim ediyoruz", "Sistemleri test ediyor, işi temiz ve kullanıma hazır bırakıyoruz."]
          ].map(row => <div className="step" key={row[0]}><b>{row[0]}</b><div><h3>{row[1]}</h3><p>{row[2]}</p></div></div>)}
        </div>
      </section>

      <section className="locations section">
        <div className="section-head compact">
          <div><p className="eyebrow"><i /> MALATYA HİZMET AĞI</p><h2>13 ilçede<br />aynı titizlik.</h2></div>
          <p>Merkez mahallelerden kırsal yerleşimlere kadar Malatya genelinde keşif, uygulama, bakım ve onarım hizmeti.</p>
        </div>
        <div className="districts">
          {districts.map((d, i) => <Link key={d.slug} href={`/malatya/${d.slug}`}><small>{String(i + 1).padStart(2, "0")}</small>{d.name}<span>↗</span></Link>)}
        </div>
        <Link className="text-link" href="/malatya">Tüm hizmet bölgelerini incele →</Link>
      </section>

      <section className="shop-callout">
        <div><p className="eyebrow light"><i /> AYDINLATMA & ELEKTRİK ÜRÜNLERİ</p><h2>Mekânınıza<br />doğru ışık.</h2><p>Avize, aplik, spot, LED aydınlatma ve elektrik malzemelerinde seçimden montaja kadar yanınızdayız.</p><a href="#teklif" className="button white">Ürün danışmanlığı al →</a></div>
        <div className="lamp" aria-hidden="true"><span className="cord" /><span className="shade" /><span className="glow" /></div>
      </section>

      <section className="blog section">
        <div className="section-head compact"><div><p className="eyebrow"><i /> USTA REHBERİ</p><h2>Bilmeniz gerekenler.</h2></div><Link className="text-link" href="/blog">Tüm yazılar →</Link></div>
        <div className="post-grid">{posts.slice(0,3).map(p => <Link href={`/blog/${p.slug}`} key={p.slug} className="post"><span>{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p><small>{p.reading} dk okuma · CB İnşaat</small></Link>)}</div>
      </section>

      <section className="contact section" id="teklif">
        <div><p className="eyebrow light"><i /> PROJENİZİ KONUŞALIM</p><h2>İşinizi<br /><em>sağlama</em> alalım.</h2><p>İhtiyacınızı kısaca anlatın. Ekibimiz keşif ve teklif için sizinle iletişime geçsin.</p><a href="mailto:info@cbinsaat.com">info@cbinsaat.com</a></div>
        <form action="mailto:info@cbinsaat.com" method="post" encType="text/plain">
          <label>Adınız soyadınız<input name="ad" required placeholder="Adınız Soyadınız" /></label>
          <label>Telefon numaranız<input name="telefon" required inputMode="tel" placeholder="05__ ___ __ __" /></label>
          <label>İhtiyacınız<select name="hizmet" defaultValue=""><option value="" disabled>Hizmet seçin</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></label>
          <label>Proje / arıza detayı<textarea name="mesaj" placeholder="Kısaca anlatın..." rows={4} /></label>
          <button className="button primary">Talebimi gönder <span>→</span></button>
          <small>Gönderdiğiniz bilgiler yalnızca talebinize dönüş yapmak için kullanılır.</small>
        </form>
      </section>

      <footer><Link href="/" className="brand"><span className="brand-mark">CB</span><span>CB <b>İNŞAAT</b><small>ELEKTRİK · MEKANİK · YAPI</small></span></Link><p>Malatya’da elektrik, sıhhi tesisat, mekanik ve anahtar teslim inşaat çözümleri.</p><div><Link href="/malatya">Hizmet Bölgeleri</Link><Link href="/blog">Blog</Link><a href="mailto:info@cbinsaat.com">İletişim</a></div><small>© 2026 CB İnşaat. Tüm hakları saklıdır.</small></footer>
    </main>
  );
}
