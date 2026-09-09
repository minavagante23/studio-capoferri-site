/**
 * Static export keeps a single root <html lang="it">.
 * Patch English pages so crawlers see lang="en" without JS.
 */
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const enDir = path.join(outDir, "en");

if (!fs.existsSync(enDir)) {
  console.log("[fix-en-html-lang] out/en not found — skip (non-static build?)");
  process.exit(0);
}

let patched = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    const html = fs.readFileSync(full, "utf8");
    if (!html.includes('lang="it"')) continue;
    fs.writeFileSync(full, html.replace(/<html([^>]*)lang="it"/i, '<html$1lang="en"'));
    patched += 1;
  }
}

walk(enDir);
console.log(`[fix-en-html-lang] patched lang=en on ${patched} English HTML file(s).`);
