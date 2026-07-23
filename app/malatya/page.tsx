import type { Metadata } from "next";
import Link from "next/link";
import { districts } from "../site-data";
import { SimpleHeader, Cta } from "../hizmetler/[slug]/page";
export const metadata:Metadata={title:"Malatya Elektrikçi ve Tesisatçı Hizmet Bölgeleri",description:"CB İnşaat Malatya'nın 13 ilçesinde elektrikçi, sucu, sıhhi tesisat, mekanik ve inşaat hizmeti sunar.",alternates:{canonical:"/malatya"}};
export default function Areas(){return <main className="inner"><SimpleHeader/><section className="inner-hero"><p className="eyebrow"><i/> 13 İLÇE · MALATYA</p><h1>Size yakın,<br/><em>işin başında.</em></h1><p>Malatya merkez, ilçeler, mahalleler ve kırsal yerleşimlerde elektrik, su tesisatı, mekanik ve inşaat ihtiyaçları için keşif ve uygulama desteği.</p></section><section className="area-list">{districts.map((d,i)=><Link href={`/malatya/${d.slug}`} key={d.slug}><small>{String(i+1).padStart(2,"0")}</small><h2>{d.name}</h2><p>Elektrik · Sıhhi tesisat · İnşaat</p><span>↗</span></Link>)}</section><Cta/></main>}
