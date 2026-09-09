import type { MetadataRoute } from "next";
import { pageUrl, steelLandingSlugs } from "@/lib/seo";
import { projectAreas, projectCategories } from "@/lib/projects";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-19");

function entry(
  path: string,
  locale: "it" | "en",
  priority: number,
  changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[number] {
  return {
    url: pageUrl(path, locale),
    lastModified,
    changeFrequency: changefreq,
    priority,
    alternates: {
      languages: {
        it: pageUrl(path, "it"),
        en: pageUrl(path, "en"),
        "x-default": pageUrl(path, "it"),
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("/", "it", 1.0, "weekly"),
    entry("/", "en", 0.9, "weekly"),
    entry("/chi-siamo", "it", 0.8),
    entry("/chi-siamo", "en", 0.8),
    entry("/servizi", "it", 0.8),
    entry("/servizi", "en", 0.8),
    entry("/progetti", "it", 0.8),
    entry("/progetti", "en", 0.8),
    entry("/contatti", "it", 0.9),
    entry("/contatti", "en", 0.8),
    entry("/privacy-policy", "it", 0.3, "yearly"),
    entry("/privacy-policy", "en", 0.3, "yearly"),
    ...steelLandingSlugs.flatMap((slug) => [
      entry(`/progettazione-strutture-acciaio-${slug}`, "it", 0.8),
      entry(`/progettazione-strutture-acciaio-${slug}`, "en", 0.8),
    ]),
  ];

  const projectPages: MetadataRoute.Sitemap = [];
  for (const area of projectAreas) {
    projectPages.push(entry(`/progetti/${area}`, "it", 0.7));
    projectPages.push(entry(`/progetti/${area}`, "en", 0.7));
    for (const c of projectCategories[area].cases) {
      projectPages.push(entry(`/progetti/${area}/${c.slug}`, "it", 0.6));
      projectPages.push(entry(`/progetti/${area}/${c.slug}`, "en", 0.6));
    }
  }

  return [...staticPages, ...projectPages];
}
