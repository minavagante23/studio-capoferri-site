/**
 * Rewrite out/sitemap.xml after Next export so lastmod matches the
 * date-only format used on our other GitHub Pages sites that GSC accepts.
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "out", "sitemap.xml");
if (!fs.existsSync(file)) {
  console.warn("[normalize-sitemap] out/sitemap.xml missing, skip");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
let xml = fs.readFileSync(file, "utf8");
xml = xml.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(file, xml);
console.log(`[normalize-sitemap] lastmod → ${today}`);
