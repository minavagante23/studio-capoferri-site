import type { Metadata } from "next";
import { site } from "@/lib/site";
import { localizedPathname } from "@/lib/locale-paths";

export const defaultOgImage = "/assets/superstudio-village-acciaio-pre-fabbricato.webp";
export const steelLandingSlugs = ["brescia", "bergamo", "milano"] as const;
export type SeoLocale = "it" | "en";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Italian canonical path (e.g. `/chi-siamo`). */
  path: string;
  image?: string;
  keywords?: string[];
  locale?: SeoLocale;
};

type BaseMetadataInput = Omit<PageMetadataInput, "locale">;

export function pageUrl(path: string, locale: SeoLocale = "it"): string {
  const localized = localizedPathname(path, locale);
  const withSlash = localized.endsWith("/") ? localized : `${localized}/`;
  return `${site.url}${withSlash}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  keywords,
  locale = "it",
}: PageMetadataInput): Metadata {
  const url = pageUrl(path, locale);
  // Brand once at the start; absolute avoids root template appending it again.
  const pageTitle = title.replace(new RegExp(`\\s*[—–-]\\s*${site.name}\\s*$`, "i"), "").trim();
  const documentTitle = `${site.name} — ${pageTitle}`;
  const otherLocale = locale === "it" ? "en_US" : "it_IT";

  return {
    title: { absolute: documentTitle },
    description,
    alternates: {
      canonical: url,
      languages: {
        it: pageUrl(path, "it"),
        en: pageUrl(path, "en"),
        "x-default": pageUrl(path, "it"),
      },
    },
    ...(keywords ? { keywords } : {}),
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "it_IT",
      alternateLocale: [otherLocale],
      url,
      siteName: site.name,
      title: documentTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
      images: [image],
    },
    other: {
      "content-language": locale,
    },
  };
}

const englishStaticMetadata: Record<string, BaseMetadataInput> = {
  "": {
    title: "Civil engineering, architecture and steel structures",
    description:
      "Studio Capoferri in Adro, near Brescia, Italy: civil engineering, architecture and steel structures with over 40 years of experience across Brescia, Bergamo and Milan.",
    path: "/",
  },
  "chi-siamo": {
    title: "About",
    description:
      "Learn more about Studio Capoferri, our team of professionals, our history and the design approach that guides our engineering and architectural work in Adro, near Brescia, Italy.",
    path: "/chi-siamo",
  },
  servizi: {
    title: "Engineering and design services",
    description:
      "Structural design, construction supervision, technical consultancy, site safety and property support in Brescia, Bergamo, Milan and across Northern Italy.",
    path: "/servizi",
  },
  progetti: {
    title: "Projects",
    description:
      "A selection of Studio Capoferri projects: residential, industrial and public-venue structures designed from our base in Adro, near Brescia, Italy.",
    path: "/progetti",
  },
  contatti: {
    title: "Contact",
    description:
      "Contact Studio Capoferri to request a quotation or schedule a meeting. Office details, address and opening hours in Adro, near Brescia, Italy.",
    path: "/contatti",
  },
  "privacy-policy": {
    title: "Privacy policy",
    description: "Information on the processing of personal data and cookies for Studio Capoferri SRL STP.",
    path: "/privacy-policy",
  },
  "progettazione-strutture-acciaio-brescia": {
    title: "Steel structure design in Brescia and Lombardy",
    description:
      "Structural engineering practice specialised in steel structures in Brescia and across Lombardy: steel villas, industrial sheds, vertical extensions and fabrication drawings.",
    path: "/progettazione-strutture-acciaio-brescia",
  },
  "progettazione-strutture-acciaio-bergamo": {
    title: "Steel structure design in Bergamo and Lombardy",
    description:
      "Steel structure design in Bergamo and its province: villas, industrial buildings, vertical extensions and steelwork engineering by Studio Capoferri.",
    path: "/progettazione-strutture-acciaio-bergamo",
  },
  "progettazione-strutture-acciaio-milano": {
    title: "Steel structure design in Milan and Lombardy",
    description:
      "Steel structure design in Milan and its metropolitan area: residential buildings, industrial sheds, event venues and steelwork engineering by Studio Capoferri.",
    path: "/progettazione-strutture-acciaio-milano",
  },
};

const englishProjectAreaMetadata: Record<string, BaseMetadataInput> = {
  residenziali: {
    title: "Residential structures",
    description:
      "Residential structural design by Studio Capoferri: private homes, steel villas, residential complexes and multi-storey buildings in Lombardy and Northern Italy.",
    path: "/progetti/residenziali",
  },
  industriali: {
    title: "Industrial structures",
    description:
      "Industrial steel structures, production buildings, logistics facilities and high-performance structural design by Studio Capoferri.",
    path: "/progetti/industriali",
  },
  ricettivi: {
    title: "Structures for public venues",
    description:
      "Structural design for public venues, event spaces and hospitality-related buildings, including complex steel and seismic upgrading works.",
    path: "/progetti/ricettivi",
  },
};

const englishProjectCaseMetadata: Record<string, BaseMetadataInput> = {
  "residenziali/villa-acciaio-veneto": {
    title: "Private residence - Veneto",
    description:
      "Private steel residence with integrated structural and architectural design: efficiency, durability and landscape integration by Studio Capoferri.",
    path: "/progetti/residenziali/villa-acciaio-veneto",
  },
  "residenziali/villa-acciaio-salsomaggiore": {
    title: "Steel villa - Salsomaggiore Terme (PR)",
    description:
      "Steel villa in Salsomaggiore Terme with piled foundations, mixed reinforced-concrete and steel structure, dry construction systems and photovoltaic-ready roof.",
    path: "/progetti/residenziali/villa-acciaio-salsomaggiore",
  },
  "industriali/capannone-erbusco": {
    title: "Industrial building - Erbusco (BS)",
    description:
      "Extension of a heavy steel fabrication production area in Erbusco: steel structure, overhead cranes, sandwich panels and fabrication drawings.",
    path: "/progetti/industriali/capannone-erbusco",
  },
  "industriali/ampliamento-complesso-zootecnico": {
    title: "Livestock complex extension",
    description:
      "Structural design for a livestock complex extension with large-span steel trusses, fast erection and precise integration with the existing buildings.",
    path: "/progetti/industriali/ampliamento-complesso-zootecnico",
  },
  "industriali/centro-direzionale-provaglio-diseo": {
    title: "Headquarters - Provaglio d'Iseo (BS)",
    description:
      "Redevelopment of an industrial building in Provaglio d'Iseo (BS) as the main headquarters of a major listed electronics company — steel mezzanine of more than 5,000 square metres.",
    path: "/progetti/industriali/centro-direzionale-provaglio-diseo",
  },
  "ricettivi/superstudio-village": {
    title: "Superstudio Village - Milan Bovisa",
    description:
      "Structural design for a six-building complex in Milan Bovisa, including steel reconstruction, strengthening works and seismic upgrading.",
    path: "/progetti/ricettivi/superstudio-village",
  },
  "ricettivi/superstudio-maxi": {
    title: "Superstudio Maxi - Famagosta",
    description:
      "Recovery of a disused industrial shed in Milan Famagosta with seismic upgrading, strengthening of existing steel structures and new event spaces.",
    path: "/progetti/ricettivi/superstudio-maxi",
  },
};

export function getEnglishCaseMetadata(area: string, slug: string): BaseMetadataInput | undefined {
  return englishProjectCaseMetadata[`${area}/${slug}`];
}

export function getEnglishSteelDescription(city: string): string | undefined {
  return englishStaticMetadata[`progettazione-strutture-acciaio-${city}`]?.description;
}

export function getEnglishMetadataForSlug(slug: string[]): Metadata {
  if (slug.length === 0) {
    return buildPageMetadata({ ...englishStaticMetadata[""], locale: "en" });
  }

  if (slug.length === 1) {
    const byEnKey: Record<string, string> = {
      about: "chi-siamo",
      services: "servizi",
      contact: "contatti",
      "privacy-policy": "privacy-policy",
      projects: "progetti",
      "steel-structure-design-brescia": "progettazione-strutture-acciaio-brescia",
      "steel-structure-design-bergamo": "progettazione-strutture-acciaio-bergamo",
      "steel-structure-design-milano": "progettazione-strutture-acciaio-milano",
    };
    const itKey = byEnKey[slug[0]];
    if (itKey && itKey in englishStaticMetadata) {
      return buildPageMetadata({ ...englishStaticMetadata[itKey], locale: "en" });
    }
  }

  if (slug[0] === "projects" && slug.length === 2) {
    const areaByEn: Record<string, string> = {
      residential: "residenziali",
      industrial: "industriali",
      "public-spaces": "ricettivi",
    };
    const area = areaByEn[slug[1]];
    if (area && area in englishProjectAreaMetadata) {
      return buildPageMetadata({ ...englishProjectAreaMetadata[area], locale: "en" });
    }
  }

  if (slug[0] === "projects" && slug.length === 3) {
    const areaByEn: Record<string, string> = {
      residential: "residenziali",
      industrial: "industriali",
      "public-spaces": "ricettivi",
    };
    const caseByEn: Record<string, string> = {
      "steel-villa-veneto": "villa-acciaio-veneto",
      "steel-villa-salsomaggiore": "villa-acciaio-salsomaggiore",
      "industrial-warehouse-erbusco": "capannone-erbusco",
      "livestock-complex-extension": "ampliamento-complesso-zootecnico",
      "office-complex-provaglio-diseo": "centro-direzionale-provaglio-diseo",
      "superstudio-village": "superstudio-village",
      "superstudio-maxi": "superstudio-maxi",
    };
    const area = areaByEn[slug[1]];
    const itSlug = caseByEn[slug[2]];
    if (area && itSlug) {
      const key = `${area}/${itSlug}`;
      if (key in englishProjectCaseMetadata) {
        return buildPageMetadata({ ...englishProjectCaseMetadata[key], locale: "en" });
      }
    }
  }

  return {};
}
