import { pageUrl, type SeoLocale } from "@/lib/seo";
import { site } from "@/lib/site";
import type { ProjectArea } from "@/lib/projects";

const areaLabels: Record<SeoLocale, Record<ProjectArea, string>> = {
  it: {
    residenziali: "Strutture residenziali",
    industriali: "Strutture industriali",
    ricettivi: "Strutture per spazi pubblici",
  },
  en: {
    residenziali: "Residential structures",
    industriali: "Industrial structures",
    ricettivi: "Structures for public venues",
  },
};

const areaAbout: Record<SeoLocale, Record<ProjectArea, string[]>> = {
  it: {
    residenziali: ["Strutture in acciaio", "Progettazione residenziale", "Ville in acciaio"],
    industriali: ["Capannoni industriali", "Strutture in acciaio", "Carpenteria metallica"],
    ricettivi: ["Spazi per eventi", "Strutture in acciaio", "Miglioramento sismico"],
  },
  en: {
    residenziali: ["Steel structures", "Residential design", "Steel villas"],
    industriali: ["Industrial sheds", "Steel structures", "Steel fabrication"],
    ricettivi: ["Event venues", "Steel structures", "Seismic upgrading"],
  },
};

/** Location hints for case-study schema (contentLocation). */
const caseLocations: Record<string, { name: string; addressRegion: string; addressLocality?: string }> = {
  "residenziali/villa-acciaio-veneto": { name: "Veneto, Italy", addressRegion: "Veneto" },
  "residenziali/villa-acciaio-salsomaggiore": {
    name: "Salsomaggiore Terme (PR), Italy",
    addressRegion: "Emilia-Romagna",
    addressLocality: "Salsomaggiore Terme",
  },
  "industriali/capannone-erbusco": {
    name: "Erbusco (BS), Italy",
    addressRegion: "Lombardia",
    addressLocality: "Erbusco",
  },
  "industriali/ampliamento-complesso-zootecnico": {
    name: "Northern Italy",
    addressRegion: "Lombardia",
  },
  "industriali/centro-direzionale-provaglio-diseo": {
    name: "Provaglio d'Iseo (BS), Italy",
    addressRegion: "Lombardia",
    addressLocality: "Provaglio d'Iseo",
  },
  "ricettivi/superstudio-village": {
    name: "Milan Bovisa, Italy",
    addressRegion: "Lombardia",
    addressLocality: "Milano",
  },
  "ricettivi/superstudio-maxi": {
    name: "Milan Famagosta, Italy",
    addressRegion: "Lombardia",
    addressLocality: "Milano",
  },
};

export const offeredServices = [
  {
    nameIt: "Progettazione strutturale",
    nameEn: "Structural design",
    descriptionIt:
      "Strutture in acciaio, cemento armato e muratura. Analisi FEM, modellazione BIM, verifiche sismiche e progettazione antincendio secondo NTC 2018 ed Eurocodici.",
    descriptionEn:
      "Steel, reinforced concrete and masonry structures. FEM analysis, BIM modelling, seismic checks and fire design to NTC 2018 and Eurocodes.",
    path: "/servizi#progettazione-strutturale",
  },
  {
    nameIt: "Urbanistica e architettura",
    nameEn: "Planning and architecture",
    descriptionIt: "Progettazione architettonica, piani attuativi, varianti urbanistiche e analisi di conformità.",
    descriptionEn: "Architectural design, implementation plans, planning amendments and compliance analysis.",
    path: "/servizi#urbanistica-architettura",
  },
  {
    nameIt: "Direzione lavori",
    nameEn: "Construction supervision",
    descriptionIt: "Supervisione tecnica, assistenza in cantiere, verifiche strutturali e relazioni tecniche.",
    descriptionEn: "Technical supervision, site support, structural assessments and technical reports.",
    path: "/servizi#direzione-lavori",
  },
  {
    nameIt: "Servizi tecnici",
    nameEn: "Technical services",
    descriptionIt: "Pratiche edilizie, catastali, Sovrintendenza, collaudi amministrativi e successioni.",
    descriptionEn: "Building permits, cadastral filings, heritage authorisations and related Italian procedures.",
    path: "/servizi#servizi-tecnici",
  },
  {
    nameIt: "Sicurezza cantieri",
    nameEn: "Site safety",
    descriptionIt: "Coordinamento sicurezza (CSP/CSE), piani di sicurezza e gestione rischi.",
    descriptionEn: "Safety coordination (CSP/CSE), safety plans and risk management.",
    path: "/servizi#sicurezza-cantieri",
  },
  {
    nameIt: "Assistenza immobiliare",
    nameEn: "Property support",
    descriptionIt: "Supporto tecnico per compravendite, perizie, stime immobiliari e valutazioni.",
    descriptionEn: "Technical support for transactions, appraisals, valuations and due diligence.",
    path: "/servizi#assistenza-immobiliare",
  },
] as const;

export function organizationId() {
  return `${site.url}/#organization`;
}

export function offerCatalogJsonLd() {
  return {
    "@type": "OfferCatalog",
    name: "Studio Capoferri services",
    itemListElement: offeredServices.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.nameIt,
        alternateName: service.nameEn,
        description: `${service.descriptionEn} / ${service.descriptionIt}`,
        url: `${site.url}${service.path}`,
        provider: { "@id": organizationId() },
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path?: string }[], locale: SeoLocale = "it") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: pageUrl(item.path, locale) } : {}),
    })),
  };
}

export function creativeWorkJsonLd({
  name,
  description,
  url,
  images,
  about,
  keywords,
  contentLocation,
  inLanguage,
}: {
  name: string;
  description: string;
  url: string;
  images: string[];
  about?: string[];
  keywords?: string;
  contentLocation?: { name: string; addressRegion: string; addressLocality?: string };
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    image: images.map((src) => `${site.url}${src}`),
    creator: { "@id": organizationId() },
    publisher: { "@id": organizationId() },
    isPartOf: { "@id": `${site.url}/#website` },
    ...(inLanguage ? { inLanguage } : {}),
    ...(about?.length
      ? {
          about: about.map((topic) => ({
            "@type": "Thing",
            name: topic,
          })),
        }
      : {}),
    ...(keywords ? { keywords } : {}),
    ...(contentLocation
      ? {
          contentLocation: {
            "@type": "Place",
            name: contentLocation.name,
            address: {
              "@type": "PostalAddress",
              addressCountry: "IT",
              addressRegion: contentLocation.addressRegion,
              ...(contentLocation.addressLocality ? { addressLocality: contentLocation.addressLocality } : {}),
            },
          },
        }
      : {}),
  };
}

export function caseStudyJsonLd({
  area,
  slug,
  metaTitle,
  metaDescription,
  gallery,
  locale = "it",
}: {
  area: ProjectArea;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  gallery: { src: string }[];
  locale?: SeoLocale;
}) {
  const path = `/progetti/${area}/${slug}`;
  const key = `${area}/${slug}`;
  const location = caseLocations[key];
  const about = areaAbout[locale][area];
  const keywords =
    locale === "en"
      ? `${about.join(", ")}, Studio Capoferri, Northern Italy`
      : `${about.join(", ")}, Studio Capoferri, Nord Italia`;

  return [
    breadcrumbJsonLd(
      [
        { name: locale === "en" ? "Projects" : "Progetti", path: "/progetti" },
        { name: areaLabels[locale][area], path: `/progetti/${area}` },
        { name: metaTitle },
      ],
      locale
    ),
    creativeWorkJsonLd({
      name: metaTitle,
      description: metaDescription,
      url: pageUrl(path, locale),
      images: gallery.map((g) => g.src),
      about,
      keywords,
      contentLocation: location,
      inLanguage: locale === "en" ? "en" : "it",
    }),
  ];
}

export function contactPageJsonLd(locale: SeoLocale = "it") {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl("/contatti", locale)}#contactpage`,
    url: pageUrl("/contatti", locale),
    name: locale === "en" ? "Contact Studio Capoferri" : "Contatti Studio Capoferri",
    description:
      locale === "en"
        ? "Contact Studio Capoferri in Adro (Brescia, Italy) for steel structure design, shop drawings and site support. English-speaking engineering team."
        : "Contatta Studio Capoferri ad Adro (BS) per progettazione strutture in acciaio, disegni d'officina e supporto in cantiere.",
    inLanguage: locale === "en" ? "en" : "it",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": organizationId() },
    mainEntity: { "@id": organizationId() },
  };
}

export function servicesPageJsonLd(locale: SeoLocale = "it") {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl("/servizi", locale)}#services`,
    url: pageUrl("/servizi", locale),
    name: locale === "en" ? "Engineering and design services" : "Servizi di ingegneria e progettazione",
    description:
      locale === "en"
        ? "Structural design, construction supervision, site safety, architecture and technical services by Studio Capoferri."
        : "Progettazione strutturale, direzione lavori, sicurezza cantieri, architettura e servizi tecnici di Studio Capoferri.",
    inLanguage: locale === "en" ? "en" : "it",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": organizationId() },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: offeredServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: locale === "en" ? service.nameEn : service.nameIt,
          description: locale === "en" ? service.descriptionEn : service.descriptionIt,
          url: `${pageUrl("/servizi", locale)}#${service.path.split("#")[1] ?? ""}`,
          provider: { "@id": organizationId() },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Lombardia" },
            { "@type": "AdministrativeArea", name: "Veneto" },
            { "@type": "AdministrativeArea", name: "Piemonte" },
            { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
            { "@type": "AdministrativeArea", name: "Toscana" },
          ],
        },
      })),
    },
  };
}
