import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {districts,services} from "../../site-data";

export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const s=services.find(x=>x.slug===slug); if(!s)return {};
  return {title:`Malatya ${s.title}`,description:`Malatya ${s.title.toLocaleLowerCase("tr-TR")} hizmeti: ${s.short} 13 ilçede keşif ve uygulama.`,alternates:{canonical:`/hizmetler/${slug}`}};
}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const s=services.find(x=>x.slug===slug); if(!s)notFound();
  const schema={"@context":"https://schema.org","@type":"Service","name":`Malatya ${s.title}`,"provider":{"@type":"GeneralContractor","name":"CB İnşaat"},"areaServed":{"@type":"AdministrativeArea","name":"Malatya"},"description":s.detail};
  return <main className="inner"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SimpleHeader/>
    <section className="inner-hero"><p className="eyebrow">MALATYA GENELİ HİZMET</p><span className="big-icon">{s.icon}</span><h1>Malatya<br/><em>{s.title}</em></h1><p>{s.detail}</p><Link className="btn yellow" href={`/teklif?hizmet=${s.slug}`}>PROJENİ ANLAT, TEKLİF AL →</Link></section>
    <section className="content-grid"><div><h2>{s.title} hizmet kapsamı</h2><p>{s.short} İşe başlamadan önce mevcut durumu, kullanım ihtiyacını ve uygulama koşullarını değerlendiriyor; iş kalemlerini netleştirerek çözüm öneriyoruz.</p><div className="scope-list">{s.bullets.map((b,i)=><div key={b}><small>0{i+1}</small><b>{b}</b></div>)}</div><h3>Hizmet süreci nasıl ilerler?</h3><p>Talebinizi ve konumunuzu aldıktan sonra ön değerlendirme yaparız. Gerekiyorsa yerinde keşif planlarız. Uygulama yöntemi, iş kapsamı ve kullanılacak temel malzemeler netleştikten sonra çalışma programını oluştururuz.</p><h3>Neden CB İnşaat?</h3><ul><li>Elektrik, mekanik ve yapı işlerinde koordineli ekip</li><li>İşe özel malzeme ve uygulama önerisi</li><li>Anlaşılır kapsam ve planlı çalışma</li><li>Malatya’nın 13 ilçesinde hizmet planlaması</li></ul></div><aside><b>Hizmet bölgeleri</b>{districts.map(d=><Link href={`/malatya/${d.slug}`} key={d.slug}>{d.name}<span>→</span></Link>)}</aside></section><Cta/></main>
}
function SimpleHeader(){return <><div className="topbar"><div><span>●</span> Malatya’nın 13 ilçesine hizmet</div><div><a href="mailto:info@cbinsaat.com">✉ info@cbinsaat.com</a></div></div><header className="nav"><Link href="/" className="brand"><span className="brand-bolt">ϟ</span><span><b>CB</b> İNŞAAT<small>ELEKTRİK • MEKANİK • YAPI</small></span></Link><nav><Link href="/#hizmetler">HİZMETLER</Link><Link href="/malatya">BÖLGELER</Link><Link href="/blog">BLOG</Link><Link href="/teklif">TEKLİF AL</Link></nav><Link className="header-cta" href="/teklif"><small>PROJENİ ANLAT</small><b>Teklif Talep Et</b><span>↗</span></Link></header></>}
function Cta(){return <section className="mini-cta"><div><p className="eyebrow">İHTİYACINIZI KONUŞALIM</p><h2>Projenizi anlatın,<br/><mark>teklif hazırlayalım.</mark></h2></div><Link href="/teklif" className="btn yellow">TEKLİF FORMUNA GİT →</Link></section>}
export {SimpleHeader,Cta};
