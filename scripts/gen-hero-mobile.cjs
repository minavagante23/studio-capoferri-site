/**
 * Regenerates assets/hero-struttura-new-720.webp from the full hero plate (mobile LCP).
 * Run: node scripts/gen-hero-mobile.cjs
 */
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const src = path.join(root, "assets", "hero-struttura-new.webp");
const dest = path.join(root, "assets", "hero-struttura-new-720.webp");

sharp(src)
  .resize(720, null, { withoutEnlargement: true })
  .webp({ quality: 65 })
  .toFile(dest)
  .then((info) => {
    console.log(`[gen-hero-mobile] ${path.relative(root, dest)} (${info.width}x${info.height}, ${info.size} bytes)`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
