/**
 * Regenerates assets/hero-struttura-new-960.webp from the full hero plate.
 * Run: node scripts/gen-hero-960.cjs
 */
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const src = path.join(root, "assets", "hero-struttura-new.webp");
const dest = path.join(root, "assets", "hero-struttura-new-960.webp");

sharp(src)
  .resize(960, null, { withoutEnlargement: true })
  .webp({ quality: 72 })
  .toFile(dest)
  .then((info) => {
    console.log(`[gen-hero-960] ${path.relative(root, dest)} (${info.width}x${info.height}, ${info.size} bytes)`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
