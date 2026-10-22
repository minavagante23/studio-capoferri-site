import type { Metadata } from "next";
import { itAreaByEn, itCaseByEn, localizedPathname, toItalianPath } from "@/lib/locale-paths";
import { projectCaseStudies } from "@/lib/projects";
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
  const documentTitle = `${site.name} - ${pageTitle}`;
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
    title: "Structural engineers in Northern Italy",
    description:
      "Structural engineers in Adro, near Brescia, for steel buildings in Northern Italy: calculations, fabrication shop drawings and site support. Project discussions in English.",
    path: "/",
    keywords: [
      "structural engineer Northern Italy",
      "structural engineer Italy",
      "shop drawings steel structures",
      "fabrication drawings structural steel",
      "steel buildings Lombardy",
    ],
  },
  "chi-siamo": {
    title: "Structural engineers in Northern Italy",
    description:
      "Studio Capoferri works with general contractors, architects and engineering offices from Adro near Brescia: steel buildings, shop drawings and site support across Northern Italy.",
    path: "/chi-siamo",
    keywords: [
      "structural engineering practice Italy",
      "structural engineer Brescia",
      "general contractors Northern Italy",
      "steel engineering Northern Italy",
    ],
  },
  servizi: {
    title: "Structural engineers for steel design and shop drawings",
    description:
      "Structural engineers in Northern Italy for general contractors: steel design to NTC and Eurocodes, fabrication shop drawings, construction supervision and site safety.",
    path: "/servizi",
    keywords: [
      "structural engineer Italy",
      "general contractors structural design",
      "fabrication shop drawings",
      "shop drawings steel structures",
      "Eurocode structural design Italy",
      "construction supervision Northern Italy",
    ],
  },
  progetti: {
    title: "Steel structure projects in Northern Italy",
    description:
      "Projects by structural engineers in Northern Italy: steel houses, industrial halls, crane buildings and event venues across Lombardy.",
    path: "/progetti",
    keywords: [
      "structural engineer Italy projects",
      "industrial steel building Northern Italy",
      "steel villa Italy",
      "steel structure Milan",
    ],
  },
  contatti: {
    title: "Contact our structural engineers in Italy",
    description:
      "Write to structural engineers in Adro, near Brescia, for steel design, fabrication shop drawings and site support on projects in Italy.",
    path: "/contatti",
    keywords: [
      "structural engineer Italy",
      "contact structural engineer Northern Italy",
      "shop drawings quote Italy",
    ],
  },
  "clienti-internazionali": {
    title: "Structural engineers for projects in Italy",
    description:
      "Structural engineers in Northern Italy for general contractors and EU partners building in Italy: steel structures, fabrication shop drawings, Eurocodes, NTC and site support.",
    path: "/clienti-internazionali",
    keywords: [
      "general contractors Italy",
      "structural engineer Italy",
      "structural engineer Northern Italy",
      "shop drawings steel structures",
      "fabrication drawings Italy",
      "Eurocode steel design Italy",
    ],
  },
  "progettazione-strutturale-acciaio-italia": {
    title: "Structural engineers in Italy for fabricators",
    description:
      "Structural engineers in Northern Italy for general contractors and fabricators in Germany, the Netherlands, Belgium and Denmark building in Italy: steel design, fabrication shop drawings, Eurocodes and NTC.",
    path: "/progettazione-strutturale-acciaio-italia",
    keywords: [
      "general contractors Italy",
      "structural engineer Italy",
      "shop drawings steel structures",
      "fabrication drawings structural steel",
      "structural engineer for fabricators Italy",
      "Eurocode structural engineer Italy",
    ],
  },
  "progettazione-strutturale-per-general-contractor": {
    title: "Structural engineers for general contractors in Italy",
    description:
      "Structural engineers in Northern Italy for general contractors and main contractors: steel design, fabrication shop drawings and construction supervision in Lombardy.",
    path: "/progettazione-strutturale-per-general-contractor",
    keywords: [
      "general contractor Brescia",
      "structural design for general contractors Italy",
      "shop drawings for general contractors",
      "structural engineer Lombardy contractors",
      "main contractor structural engineer Italy",
    ],
  },
  "progettazione-strutturale-per-carpenterie": {
    title: "Structural engineers for EN 1090 steel fabricators",
    description:
      "Structural engineers in Northern Italy for EN 1090 workshops: analysis, 3D/Tekla and fabrication drawings. Request a quote — sample shop drawings download with the form.",
    path: "/progettazione-strutturale-per-carpenterie",
    keywords: [
      "structural engineer for steel fabricators Italy",
      "shop drawings steel workshop",
      "EN 1090 structural design partner",
      "Tekla fabrication drawings Italy",
      "steel canopy stair shop drawings",
    ],
  },
  "privacy-policy": {
    title: "Privacy policy",
    description: "Privacy and cookie information for Studio Capoferri SRL STP.",
    path: "/privacy-policy",
  },
  "progettazione-strutture-acciaio-brescia": {
    title: "Structural engineer in Brescia",
    description:
      "Structural engineer in Brescia and Lombardy for steel buildings: villas, industrial halls, vertical extensions and fabrication shop drawings. Based in Adro, province of Brescia.",
    path: "/progettazione-strutture-acciaio-brescia",
    keywords: [
      "structural engineer Brescia",
      "structural engineer Brescia Italy",
      "steel buildings Brescia",
      "shop drawings Brescia",
      "industrial steel building Brescia",
    ],
  },
  "progettazione-strutture-acciaio-bergamo": {
    title: "Structural engineer in Bergamo",
    description:
      "Structural engineer in Bergamo and Lombardy for steel buildings: villas, industrial halls, vertical extensions and fabrication shop drawings. Office in Adro, near Bergamo.",
    path: "/progettazione-strutture-acciaio-bergamo",
    keywords: [
      "structural engineer Bergamo",
      "structural engineer Bergamo Italy",
      "steel buildings Bergamo",
      "shop drawings Bergamo",
      "industrial steel Bergamo",
    ],
  },
  "progettazione-strutture-acciaio-milano": {
    title: "Structural engineer in Milan",
    description:
      "Structural engineer in Milan for steel buildings: residences, industrial halls, event venues and fabrication shop drawings across the metropolitan area.",
    path: "/progettazione-strutture-acciaio-milano",
    keywords: [
      "structural engineer Milan",
      "structural engineer Milan Italy",
      "steel buildings Milan",
      "shop drawings Milan",
      "event venue steel structure Milan",
    ],
  },
};

const englishProjectAreaMetadata: Record<string, BaseMetadataInput> = {
  residenziali: {
    title: "Steel houses and residential structures in Northern Italy",
    description:
      "Structural engineers for houses and steel villas in Lombardy and Northern Italy: frames, foundations and fabrication drawings.",
    path: "/progetti/residenziali",
    keywords: ["steel villa Italy", "residential steel structure Northern Italy", "steel house design Lombardy"],
  },
  industriali: {
    title: "Industrial steel buildings in Northern Italy",
    description:
      "Structural engineers for industrial halls, crane buildings, silos and logistics structures in Northern Italy, including fabrication shop drawings.",
    path: "/progetti/industriali",
    keywords: ["industrial steel building Italy", "steel warehouse design Northern Italy", "crane steel structure design"],
  },
  ricettivi: {
    title: "Structures for exhibitions and events in Northern Italy",
    description:
      "Structural engineers for exhibition halls, seminar rooms and event venues in Milan and Northern Italy.",
    path: "/progetti/ricettivi",
    keywords: ["event venue steel structure Milan", "exhibition hall structural design Italy", "seminar venue structure Italy"],
  },
};

const englishProjectCaseMetadata: Record<string, BaseMetadataInput> = Object.fromEntries(
  Object.entries(projectCaseStudies).map(([key, cs]) => [
    key,
    {
      title: cs.en.heading,
      description: cs.en.metaDescription,
      path: `/progetti/${key}`,
    },
  ]),
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
