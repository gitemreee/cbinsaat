import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { districts, services } from "../../site-data";

export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const s=services.find(x=>x.slug===slug); if(!s)return {};
  return {title:`Malatya ${s.title}`,description:`Malatya ${s.title.toLocaleLowerCase("tr-TR")} hizmeti. ${s.short} Yerinde keşif ve profesyonel uygulama.`,alternates:{canonical:`/hizmetler/${slug}`}};
}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const s=services.find(x=>x.slug===slug); if(!s)notFound();
  return <main className="inner"><SimpleHeader/><section className="inner-hero"><p className="eyebrow"><i/> MALATYA GENELİ</p><span className="big-icon">{s.icon}</span><h1>Malatya<br/><em>{s.title}</em></h1><p>{s.detail}</p><a className="button primary" href="mailto:info@cbinsaat.com">Keşif ve teklif al →</a></section><section className="content-grid"><div><h2>{s.title} hizmet kapsamı</h2><p>{s.short} İşe başlamadan önce ihtiyacı yerinde değerlendiriyor, kapsamı netleştiriyor ve uygulama sürecini planlıyoruz.</p><h3>Neden CB İnşaat?</h3><ul><li>Elektrik, mekanik ve yapı işlerinde koordineli ekip</li><li>İşe özel malzeme ve uygulama önerisi</li><li>Anlaşılır kapsam ve planlı çalışma</li><li>Malatya’nın 13 ilçesine hizmet</li></ul></div><aside><b>Hizmet bölgeleri</b>{districts.map(d=><Link href={`/malatya/${d.slug}`} key={d.slug}>{d.name}<span>→</span></Link>)}</aside></section><Cta/></main>
}
function SimpleHeader(){return <header className="nav"><Link href="/" className="brand"><span className="brand-mark">CB</span><span>CB <b>İNŞAAT</b><small>ELEKTRİK · MEKANİK · YAPI</small></span></Link><nav><Link href="/#hizmetler">Hizmetler</Link><Link href="/malatya">Bölgeler</Link><Link href="/blog">Rehber</Link></nav><a className="nav-cta" href="mailto:info@cbinsaat.com">Teklif al →</a></header>}
function Cta(){return <section className="mini-cta"><div><p className="eyebrow light"><i/> İHTİYACINIZI KONUŞALIM</p><h2>Yerinde keşif,<br/>net çözüm.</h2></div><a href="mailto:info@cbinsaat.com" className="button white">info@cbinsaat.com →</a></section>}
export {SimpleHeader,Cta};
