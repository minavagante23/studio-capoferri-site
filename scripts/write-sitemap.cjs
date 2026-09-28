/**
 * Write out/sitemap.xml (and a tiny smoke test) in the same plain format
 * used on our other GitHub Pages sites that Search Console already accepts.
 * Runs after `next build` so we do not depend on Next's sitemap serializer.
 */
const fs = require("fs");
const path = require("path");

const SITE = "https://www.studiocapoferri.eu";
const outDir = path.join(__dirname, "..", "out");

const itToEn = {
  "/": "/",
  "/chi-siamo": "/about",
  "/servizi": "/services",
  "/contatti": "/contact",
  "/privacy-policy": "/privacy-policy",
  "/clienti-internazionali": "/international-clients",
  "/progettazione-strutturale-acciaio-italia": "/structural-steel-design-italy",
  "/progettazione-strutture-acciaio-brescia": "/structural-engineer-brescia",
  "/progettazione-strutture-acciaio-bergamo": "/structural-engineer-bergamo",
  "/progettazione-strutture-acciaio-milano": "/structural-engineer-milan",
  "/progetti": "/projects",
  "/progetti/residenziali": "/projects/residential",
  "/progetti/industriali": "/projects/industrial",
  "/progetti/ricettivi": "/projects/public-spaces",
  "/progetti/residenziali/villa-acciaio-pollenza": "/projects/residential/steel-villa-pollenza",
  "/progetti/residenziali/villa-acciaio-salsomaggiore": "/projects/residential/steel-villa-salsomaggiore",
  "/progetti/industriali/centro-raccolta-rifiuti-chiuduno":
    "/projects/industrial/waste-collection-centre-chiuduno",
  "/progetti/industriali/copertura-edificio-verniciatura-maranello":
    "/projects/industrial/paint-shop-roof-structure-maranello",
  "/progetti/industriali/lamiere-da-getto-spinelli": "/projects/industrial/steel-decking-spinelli",
  "/progetti/industriali/capannone-erbusco": "/projects/industrial/industrial-warehouse-erbusco",
  "/progetti/industriali/ampliamento-complesso-zootecnico":
    "/projects/industrial/livestock-complex-extension",
  "/progetti/industriali/centro-direzionale-provaglio-diseo":
    "/projects/industrial/office-complex-provaglio-diseo",
  "/progetti/ricettivi/superstudio-village": "/projects/public-spaces/superstudio-village",
  "/progetti/ricettivi/superstudio-maxi": "/projects/public-spaces/superstudio-maxi",
};

/** @type {{ path: string, priority: string, changefreq: string }[]} */
const entries = [
  { path: "/", priority: "1", changefreq: "weekly" },
  { path: "/chi-siamo", priority: "0.8", changefreq: "monthly" },
  { path: "/servizi", priority: "0.8", changefreq: "monthly" },
  { path: "/progetti", priority: "0.8", changefreq: "monthly" },
  { path: "/contatti", priority: "0.9", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/clienti-internazionali", priority: "0.8", changefreq: "monthly" },
  { path: "/progettazione-strutturale-acciaio-italia", priority: "0.9", changefreq: "monthly" },
  { path: "/progettazione-strutture-acciaio-brescia", priority: "0.8", changefreq: "monthly" },
  { path: "/progettazione-strutture-acciaio-bergamo", priority: "0.8", changefreq: "monthly" },
  { path: "/progettazione-strutture-acciaio-milano", priority: "0.8", changefreq: "monthly" },
  { path: "/progetti/residenziali", priority: "0.7", changefreq: "monthly" },
  { path: "/progetti/industriali", priority: "0.7", changefreq: "monthly" },
  { path: "/progetti/ricettivi", priority: "0.7", changefreq: "monthly" },
  { path: "/progetti/residenziali/villa-acciaio-pollenza", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/residenziali/villa-acciaio-salsomaggiore", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/industriali/centro-raccolta-rifiuti-chiuduno", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/industriali/copertura-edificio-verniciatura-maranello", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/industriali/lamiere-da-getto-spinelli", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/industriali/capannone-erbusco", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/industriali/ampliamento-complesso-zootecnico", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/industriali/centro-direzionale-provaglio-diseo", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/ricettivi/superstudio-village", priority: "0.6", changefreq: "monthly" },
  { path: "/progetti/ricettivi/superstudio-maxi", priority: "0.6", changefreq: "monthly" },
];

function abs(itPath, locale) {
  const bare = itPath === "/" ? "/" : itPath.endsWith("/") ? itPath : `${itPath}/`;
  if (locale === "it") return `${SITE}${bare === "/" ? "/" : bare}`;
  const en = itToEn[itPath];
  if (!en) throw new Error(`Missing EN path for ${itPath}`);
  if (en === "/") return `${SITE}/en/`;
  return `${SITE}/en${en.endsWith("/") ? en : `${en}/`}`;
}

function lastmod() {
  // Same shape as Gaia: midnight UTC with .000Z
  return `${new Date().toISOString().slice(0, 10)}T00:00:00.000Z`;
}

function renderUrl(loc, priority, changefreq, mod) {
  return [
    "<url>",
    `<loc>${loc}</loc>`,
    `<lastmod>${mod}</lastmod>`,
    `<changefreq>${changefreq}</changefreq>`,
    `<priority>${priority}</priority>`,
    "</url>",
  ].join("\n");
}

function renderSitemap(rows) {
  const mod = lastmod();
  const body = rows.map((r) => renderUrl(r.loc, r.priority, r.changefreq, mod)).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

if (!fs.existsSync(outDir)) {
  console.error("[write-sitemap] out/ missing — run after next build");
  process.exit(1);
}

const fullRows = [];
for (const e of entries) {
  fullRows.push({ loc: abs(e.path, "it"), priority: e.priority, changefreq: e.changefreq });
  fullRows.push({
    loc: abs(e.path, "en"),
    priority: e.path === "/" ? "0.9" : e.priority,
    changefreq: e.changefreq,
  });
}

const smokeRows = [
  { loc: abs("/", "it"), priority: "1", changefreq: "weekly" },
  { loc: abs("/chi-siamo", "it"), priority: "0.8", changefreq: "monthly" },
  { loc: abs("/contatti", "it"), priority: "0.9", changefreq: "monthly" },
];

fs.writeFileSync(path.join(outDir, "sitemap.xml"), renderSitemap(fullRows), "utf8");
fs.writeFileSync(path.join(outDir, "sitemap-smoke.xml"), renderSitemap(smokeRows), "utf8");
console.log(`[write-sitemap] sitemap.xml (${fullRows.length} urls), sitemap-smoke.xml (${smokeRows.length} urls)`);
