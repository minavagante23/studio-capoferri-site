import type { Metadata } from "next";
import { caseCopyEn } from "@/lib/case-copy-en";
import { itAreaByEn, itCaseByEn, localizedPathname, toItalianPath } from "@/lib/locale-paths";
import { site } from "@/lib/site";

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
        "x-default": pageUrl(path, "en"),
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
    title: "Steel structures and site support in Northern Italy",
    description:
      "Studio Capoferri in Adro, near Brescia, Italy: steel structures, shop drawings and site support for projects in Northern Italy. Talk to our engineers in English.",
    path: "/",
    keywords: [
      "structural engineer Northern Italy",
      "steel structure design Italy",
      "English speaking engineer Brescia",
      "shop drawings Italy",
      "steel fabrication drawings EU",
    ],
  },
  "chi-siamo": {
    title: "About",
    description:
      "Studio Capoferri: structural and steel engineering practice in Adro near Brescia. English project talks with our engineers for international and EU partners.",
    path: "/chi-siamo",
    keywords: [
      "Studio Capoferri",
      "structural engineering firm Italy",
      "English speaking structural engineer",
      "steel engineering Northern Italy",
    ],
  },
  servizi: {
    title: "Engineering and design services",
    description:
      "Steel structures, FEM and BIM, fabrication shop drawings, construction supervision and site safety for projects in Northern Italy — English-speaking engineering team.",
    path: "/servizi",
    keywords: [
      "steel structure design services Italy",
      "fabrication shop drawings Italy",
      "structural engineering Eurocodes",
      "construction supervision Northern Italy",
      "BIM FEM structural design",
    ],
  },
  progetti: {
    title: "Projects",
    description:
      "Selected Studio Capoferri projects: steel residences, industrial halls and public venues across Lombardy and Northern Italy.",
    path: "/progetti",
    keywords: [
      "steel structure projects Italy",
      "industrial steel building Northern Italy",
      "steel villa Italy",
      "seismic upgrade steel structure Milan",
    ],
  },
  contatti: {
    title: "Contact",
    description:
      "Contact Studio Capoferri in English for a technical first reply: quotations, shop-drawing scope and site support for projects in Italy.",
    path: "/contatti",
    keywords: [
      "contact structural engineer Italy",
      "steel design quote Northern Italy",
      "English speaking engineer Adro Brescia",
    ],
  },
  "clienti-internazionali": {
    title: "International clients — steel engineering in Italy",
    description:
      "English-speaking structural engineers in Northern Italy for partners in Germany, the Netherlands, Belgium, Denmark and the EU: steel structures, shop drawings, Eurocodes/NTC and site support.",
    path: "/clienti-internazionali",
    keywords: [
      "international structural engineer Italy",
      "English speaking structural engineer Italy",
      "steel shop drawings Italy EU fabricator",
      "hire Italian structural engineer",
      "Eurocode steel design Italy",
      "steel structure design Northern Italy",
      "structural engineer Germany Netherlands Belgium Denmark Italy",
    ],
  },
  "progettazione-strutturale-acciaio-italia": {
    title: "Structural steel design services in Italy for EU partners",
    description:
      "Outsource structural steel design and shop drawings to an English-speaking engineering partner in Northern Italy — for contractors and fabricators in Germany, the Netherlands, Belgium and Denmark building in Italy.",
    path: "/progettazione-strutturale-acciaio-italia",
    keywords: [
      "structural steel design services Italy",
      "outsource steel detailing Europe",
      "engineering partner Italy steel",
      "steel shop drawings Germany Netherlands Belgium Denmark",
      "Eurocode structural engineer Italy",
      "English speaking steel engineer Northern Italy",
      "hire structural engineer Italy EU project",
    ],
  },
  "privacy-policy": {
    title: "Privacy policy",
    description: "Privacy and cookie information for Studio Capoferri SRL STP.",
    path: "/privacy-policy",
  },
  "progettazione-strutture-acciaio-brescia": {
    title: "Steel structure design in Brescia and Lombardy",
    description:
      "Structural engineering practice specialised in steel structures in Brescia and across Lombardy: steel villas, industrial sheds, vertical extensions and fabrication drawings. English project coordination available.",
    path: "/progettazione-strutture-acciaio-brescia",
    keywords: [
      "steel structure design Brescia",
      "structural engineer Brescia Italy",
      "steel villa Lombardy",
      "industrial steel building Brescia",
      "shop drawings Brescia",
      "English speaking engineer Brescia",
    ],
  },
  "progettazione-strutture-acciaio-bergamo": {
    title: "Steel structure design in Bergamo and Lombardy",
    description:
      "Steel structure design in Bergamo and its province: villas, industrial buildings, vertical extensions and steelwork engineering by Studio Capoferri. English-speaking engineers for international partners.",
    path: "/progettazione-strutture-acciaio-bergamo",
    keywords: [
      "steel structure design Bergamo",
      "structural engineer Bergamo Italy",
      "industrial steel Bergamo",
      "shop drawings Bergamo",
      "English speaking engineer Bergamo",
    ],
  },
  "progettazione-strutture-acciaio-milano": {
    title: "Steel structure design in Milan and Lombardy",
    description:
      "Steel structure design in Milan and its metropolitan area: residential buildings, industrial sheds, event venues and steelwork engineering by Studio Capoferri. English project talks available.",
    path: "/progettazione-strutture-acciaio-milano",
    keywords: [
      "steel structure design Milan",
      "structural engineer Milan Italy",
      "event venue steel structure Milan",
      "shop drawings Milan",
      "English speaking engineer Milan",
    ],
  },
};

const englishProjectAreaMetadata: Record<string, BaseMetadataInput> = {
  residenziali: {
    title: "Residential structures",
    description:
      "Residential structural design by Studio Capoferri: private homes, steel villas, residential complexes and multi-storey buildings in Lombardy and Northern Italy.",
    path: "/progetti/residenziali",
    keywords: ["steel villa Italy", "residential steel structure Northern Italy", "steel house design Lombardy"],
  },
  industriali: {
    title: "Industrial structures",
    description:
      "Industrial steel structures, production buildings, logistics facilities and high-performance structural design by Studio Capoferri.",
    path: "/progetti/industriali",
    keywords: ["industrial steel building Italy", "steel warehouse design Northern Italy", "crane steel structure design"],
  },
  ricettivi: {
    title: "Structures for public venues",
    description:
      "Structural design for public venues, event spaces and hospitality-related buildings, including complex steel and seismic upgrading works.",
    path: "/progetti/ricettivi",
    keywords: ["event venue steel structure Milan", "public building structural design Italy", "seismic upgrade steel structure"],
  },
};

const englishProjectCaseMetadata: Record<string, BaseMetadataInput> = Object.fromEntries(
  Object.entries(caseCopyEn).map(([key, copy]) => [
    key,
    {
      title: copy.heading,
      description: copy.metaDescription,
      path: `/progetti/${key}`,
    },
  ])
);

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
    const itPath = toItalianPath(`/${slug[0]}`);
    const itKey = itPath === "/" ? "" : itPath.replace(/^\//, "");
    if (itKey in englishStaticMetadata) {
      return buildPageMetadata({ ...englishStaticMetadata[itKey], locale: "en" });
    }
  }

  if (slug[0] === "projects" && slug.length === 2) {
    const area = itAreaByEn[slug[1]];
    if (area && area in englishProjectAreaMetadata) {
      return buildPageMetadata({ ...englishProjectAreaMetadata[area], locale: "en" });
    }
  }

  if (slug[0] === "projects" && slug.length === 3) {
    const area = itAreaByEn[slug[1]];
    const itSlug = itCaseByEn[slug[2]];
    if (area && itSlug) {
      const key = `${area}/${itSlug}`;
      if (key in englishProjectCaseMetadata) {
        return buildPageMetadata({ ...englishProjectCaseMetadata[key], locale: "en" });
      }
    }
  }

  return {};
}
