import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["500","600","700","800"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"], weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cbinsaat.com"),
  title: { default: "CB İnşaat | Malatya Elektrik, Sıhhi Tesisat ve İnşaat", template: "%s | CB İnşaat Malatya" },
  description: "Malatya elektrikçi, sıhhi tesisat, mekanik tesisat, su deposu temizliği, avize ve anahtar teslim inşaat hizmetleri. Malatya geneli keşif ve uygulama.",
  keywords: ["Malatya elektrikçi","Malatya sıhhi tesisat","Malatya sucu","Malatya inşaat","Malatya su deposu temizliği","Malatya avize"],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type:"website", locale:"tr_TR", siteName:"CB İnşaat", title:"CB İnşaat | Bir yapının her işi, tek ekipte.", description:"Malatya genelinde elektrik, sıhhi tesisat, mekanik ve anahtar teslim inşaat çözümleri.", images:[{url:"/og.png",width:1732,height:909,alt:"CB İnşaat — Bir yapının her işi, tek ekipte."}] },
  twitter: { card:"summary_large_image", title:"CB İnşaat Malatya", description:"Elektrik, mekanik, sıhhi tesisat ve yapı çözümleri.", images:["/og.png"] }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const schema = {"@context":"https://schema.org","@type":"GeneralContractor","name":"CB İnşaat","url":"https://cbinsaat.com","email":"info@cbinsaat.com","telephone":"+905307346000","areaServed":{"@type":"AdministrativeArea","name":"Malatya"},"serviceType":["Elektrik tesisatı","Sıhhi tesisat","Mekanik tesisat","Anahtar teslim inşaat","Su deposu temizliği","Aydınlatma"]};
  return <html lang="tr"><body className={`${display.variable} ${body.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}<a className="whatsapp-float" href="https://wa.me/905307346000?text=Merhaba%20CB%20%C4%B0n%C5%9Faat%2C%20usta%20ile%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum." target="_blank" rel="noreferrer" aria-label="WhatsApp üzerinden usta ile görüş"><span>◔</span><i><small>WHATSAPP</small><b>Usta ile görüş</b></i></a></body></html>;
}
