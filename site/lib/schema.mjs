// JSON-LD üreticileri. Her sayfa kendi şemalarını dizi olarak verir.
import { site } from "../data/site.mjs";

const abs = (path = "/") => (path.startsWith("http") ? path : site.domain + path);

export const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

export const organization = (areaNames = []) => ({
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": abs("/#kurulus"),
  name: site.name,
  legalName: site.legalName,
  url: abs("/"),
  logo: abs("/assets/og.jpg"),
  image: [abs("/assets/og.jpg"), abs("/assets/hero.jpg")],
  description: site.shortDescription,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  foundingDate: String(site.founded),
  priceRange: site.priceRange,
  currenciesAccepted: "TRY",
  paymentAccepted: "Nakit, Havale/EFT, Kredi Kartı",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: areaNames.map((n) => ({ "@type": "AdministrativeArea", name: n })),
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.open,
    closes: h.close,
  })),
  sameAs: Object.values(site.social).filter(Boolean),
});

export const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": abs("/#site"),
  url: abs("/"),
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": abs("/#kurulus") },
});

export const breadcrumbs = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.label,
    item: abs(it.href),
  })),
});

export const serviceSchema = ({ name, description, url, areaNames = [], offers = [] }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(url),
  serviceType: name,
  provider: { "@id": abs("/#kurulus") },
  areaServed: areaNames.map((n) => ({ "@type": "AdministrativeArea", name: n })),
  ...(offers.length
    ? {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${name} kapsamı`,
          itemListElement: offers.map((o) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: o },
          })),
        },
      }
    : {}),
});

export const faqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: String(f.a).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() },
  })),
});

export const articleSchema = ({ title, description, url, published, modified, category, words }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: abs(url),
  mainEntityOfPage: abs(url),
  datePublished: published,
  dateModified: modified || published,
  articleSection: category,
  wordCount: words,
  inLanguage: "tr-TR",
  author: { "@type": "Organization", name: site.name, url: abs("/") },
  publisher: { "@id": abs("/#kurulus") },
});

export const itemList = (items = [], listName = "") => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: listName,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.label,
    url: abs(it.href),
  })),
});

export const howTo = ({ name, description, steps = [] }) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.text,
  })),
});
