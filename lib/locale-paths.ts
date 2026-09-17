import { projectAreas, projectCategories, type ProjectArea } from "@/lib/projects";

type Locale = "it" | "en";

/** Canonical Italian path → English path (no `/en` prefix). */
export const itToEnPath: Record<string, string> = {
  "/": "/",
  "/chi-siamo": "/about",
  "/servizi": "/services",
  "/contatti": "/contact",
  "/privacy-policy": "/privacy-policy",
  "/clienti-internazionali": "/international-clients",
  "/progettazione-strutturale-acciaio-italia": "/structural-steel-design-italy",
  "/progetti": "/projects",
  "/progettazione-strutture-acciaio-brescia": "/steel-structure-design-brescia",
  "/progettazione-strutture-acciaio-bergamo": "/steel-structure-design-bergamo",
  "/progettazione-strutture-acciaio-milano": "/steel-structure-design-milano",
  "/progetti/residenziali": "/projects/residential",
  "/progetti/industriali": "/projects/industrial",
  "/progetti/ricettivi": "/projects/public-spaces",
  "/progetti/residenziali/villa-acciaio-veneto": "/projects/residential/steel-villa-veneto",
  "/progetti/residenziali/villa-acciaio-salsomaggiore": "/projects/residential/steel-villa-salsomaggiore",
  "/progetti/industriali/copertura-edificio-verniciatura-maranello":
    "/projects/industrial/paint-shop-roof-structure-maranello",
  "/progetti/industriali/lamiere-da-getto-spinelli": "/projects/industrial/steel-decking-spinelli",
  "/progetti/industriali/capannone-erbusco": "/projects/industrial/industrial-warehouse-erbusco",
  "/progetti/industriali/ampliamento-complesso-zootecnico": "/projects/industrial/livestock-complex-extension",
  "/progetti/industriali/centro-direzionale-provaglio-diseo": "/projects/industrial/office-complex-provaglio-diseo",
  "/progetti/ricettivi/superstudio-village": "/projects/public-spaces/superstudio-village",
  "/progetti/ricettivi/superstudio-maxi": "/projects/public-spaces/superstudio-maxi",
};

export const enAreaByIt: Record<ProjectArea, string> = {
  residenziali: "residential",
  industriali: "industrial",
  ricettivi: "public-spaces",
};

export const itAreaByEn: Record<string, ProjectArea> = {
  residential: "residenziali",
  industrial: "industriali",
  "public-spaces": "ricettivi",
};

export const enCaseByIt: Record<string, string> = {
  "villa-acciaio-veneto": "steel-villa-veneto",
  "villa-acciaio-salsomaggiore": "steel-villa-salsomaggiore",
  "copertura-edificio-verniciatura-maranello": "paint-shop-roof-structure-maranello",
  "lamiere-da-getto-spinelli": "steel-decking-spinelli",
  "capannone-erbusco": "industrial-warehouse-erbusco",
  "ampliamento-complesso-zootecnico": "livestock-complex-extension",
  "centro-direzionale-provaglio-diseo": "office-complex-provaglio-diseo",
  "superstudio-village": "superstudio-village",
  "superstudio-maxi": "superstudio-maxi",
};

export const itCaseByEn: Record<string, string> = Object.fromEntries(
  Object.entries(enCaseByIt).map(([it, en]) => [en, it])
);

const enToItPath: Record<string, string> = Object.fromEntries(
  Object.entries(itToEnPath).map(([it, en]) => [en, it])
);

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const bare = path.startsWith("/") ? path : `/${path}`;
  return bare.length > 1 && bare.endsWith("/") ? bare.slice(0, -1) : bare;
}

/** Convert an Italian canonical path to the path used for a locale (still without `/en`). */
export function pathForLocale(itPath: string, locale: Locale): string {
  const normalized = normalizePath(itPath);
  if (locale === "it") return normalized;
  return itToEnPath[normalized] ?? normalized;
}

/** Convert any site path (IT or EN segment form, with or without `/en`) to the Italian canonical path. */
export function toItalianPath(pathname: string): string {
  let bare = pathname || "/";
  if (bare === "/en") return "/";
  if (bare.startsWith("/en/")) bare = bare.slice(3);
  bare = normalizePath(bare);
  if (bare in enToItPath) return enToItPath[bare];
  if (bare in itToEnPath) return bare;
  return bare;
}

/** Full localized href path including `/en` prefix when needed. */
export function localizedPathname(itPath: string, locale: Locale): string {
  const local = pathForLocale(itPath, locale);
  if (locale === "it") return local;
  return local === "/" ? "/en" : `/en${local}`;
}

export type EnglishRoute =
  | { kind: "home" }
  | { kind: "static"; key: string }
  | { kind: "steel"; city: "brescia" | "bergamo" | "milano" }
  | { kind: "projects" }
  | { kind: "project-area"; area: ProjectArea }
  | { kind: "project-case"; area: ProjectArea; slug: string };

/** Resolve English URL slug segments (without `en`) to an internal route + Italian keys. */
export function resolveEnglishSlug(slug: string[]): EnglishRoute | null {
  if (slug.length === 0) return { kind: "home" };

  if (slug.length === 1) {
    switch (slug[0]) {
      case "about":
        return { kind: "static", key: "chi-siamo" };
      case "services":
        return { kind: "static", key: "servizi" };
      case "contact":
        return { kind: "static", key: "contatti" };
      case "privacy-policy":
        return { kind: "static", key: "privacy-policy" };
      case "international-clients":
        return { kind: "static", key: "clienti-internazionali" };
      case "structural-steel-design-italy":
        return { kind: "static", key: "progettazione-strutturale-acciaio-italia" };
      case "projects":
        return { kind: "projects" };
      case "steel-structure-design-brescia":
        return { kind: "steel", city: "brescia" };
      case "steel-structure-design-bergamo":
        return { kind: "steel", city: "bergamo" };
      case "steel-structure-design-milano":
        return { kind: "steel", city: "milano" };
      default:
        return null;
    }
  }

  if (slug[0] === "projects" && slug.length === 2) {
    const area = itAreaByEn[slug[1]];
    if (!area) return null;
    return { kind: "project-area", area };
  }

  if (slug[0] === "projects" && slug.length === 3) {
    const area = itAreaByEn[slug[1]];
    const itSlug = itCaseByEn[slug[2]];
    if (!area || !itSlug) return null;
    return { kind: "project-case", area, slug: itSlug };
  }

  return null;
}

export function englishStaticParams(): { slug: string[] }[] {
  const staticPaths = Object.values(itToEnPath)
    .filter((enPath) => !enPath.startsWith("/projects/") || enPath === "/projects")
    .map((enPath) => {
      if (enPath === "/") return [] as string[];
      return enPath.replace(/^\//, "").split("/");
    });

  const projectPaths = projectAreas.flatMap((area) => {
    const enArea = enAreaByIt[area];
    const categoryPaths = [["projects", enArea]];
    const casePaths = projectCategories[area].cases.map((item) => [
      "projects",
      enArea,
      enCaseByIt[item.slug] ?? item.slug,
    ]);
    return [...categoryPaths, ...casePaths];
  });

  const seen = new Set<string>();
  return [...staticPaths, ...projectPaths]
    .filter((slug) => {
      const key = slug.join("/");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((slug) => ({ slug }));
}
