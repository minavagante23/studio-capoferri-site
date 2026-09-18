/**
 * Compress images under assets/ for static export (no Next image optimizer).
 * - Hero: max 1920px long edge, WebP q65
 * - Other photos: max 1200px, WebP q60
 * - JPEG/JPG converted to WebP (same basename)
 * Writes via buffer to avoid Windows/OneDrive rename locks.
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

async function main() {
  const sharp = require("sharp");
  const root = path.join(__dirname, "..", "assets");
  if (!fs.existsSync(root)) {
    console.error("assets/ missing");
    process.exit(1);
  }

  const exts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const files = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      if (name.startsWith(".")) continue;
      const p = path.join(dir, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) walk(p);
      else if (exts.has(path.extname(name).toLowerCase())) files.push(p);
    }
  }
  walk(root);

  let saved = 0;
  let touched = 0;
  let converted = 0;
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "sc-img-"));

  for (const file of files) {
    const before = fs.statSync(file).size;
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file);
    const stem = base.slice(0, -ext.length);
    const isLogo = /logo/i.test(base);
    const isHero = /hero/i.test(base);
    const toWebp = ext === ".jpg" || ext === ".jpeg";
    const outExt = toWebp ? ".webp" : ext;
    const outFile = toWebp ? path.join(path.dirname(file), stem + ".webp") : file;
    const tmp = path.join(outDir, `${touched}-${stem}${outExt}`);

    try {
      const input = fs.readFileSync(file);
      let img = sharp(input, { failOn: "none" });
      const meta = await img.metadata();
      const w = meta.width || 0;
      const h = meta.height || 0;
      const long = Math.max(w, h);
      const maxLong = isHero ? 1920 : isLogo ? long : 1200;

      if (long > maxLong) {
        img = img.resize({
          width: w >= h ? maxLong : undefined,
          height: h > w ? maxLong : undefined,
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      const quality = isHero ? 65 : 60;

      if (outExt === ".webp") {
        await img.webp({ quality, effort: 6 }).toFile(tmp);
      } else if (ext === ".png") {
        await img.png({ compressionLevel: 9, palette: isLogo }).toFile(tmp);
      } else {
        await img.jpeg({ quality, mozjpeg: true }).toFile(tmp);
      }

      const after = fs.statSync(tmp).size;
      const worthIt = toWebp || after < before * 0.98;
      if (!worthIt) continue;

      fs.writeFileSync(outFile, fs.readFileSync(tmp));
      if (toWebp && outFile !== file && fs.existsSync(file)) {
        fs.unlinkSync(file);
        converted += 1;
      }
      saved += Math.max(0, before - after);
      touched += 1;
      const rel = path.relative(root, file);
      const relOut = path.relative(root, outFile);
      console.log(
        `OK ${rel}${toWebp ? ` → ${relOut}` : ""} ${Math.round(before / 1024)}→${Math.round(after / 1024)} KiB`
      );
    } catch (err) {
      console.warn("skip", path.relative(root, file), err.message);
    }
  }

  const logoPng = path.join(root, "logo-studio-ingegneria-removebg-preview.png");
  const logoWebp = path.join(root, "logo-studio-ingegneria.webp");
  if (fs.existsSync(logoPng)) {
    const buf = await sharp(fs.readFileSync(logoPng))
      .resize({ height: 140, withoutEnlargement: true })
      .webp({ quality: 85, alphaQuality: 90, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoWebp, buf);
    console.log(
      `logo webp ${Math.round(fs.statSync(logoPng).size / 1024)}→${Math.round(buf.length / 1024)} KiB`
    );
  }

  fs.rmSync(outDir, { recursive: true, force: true });
  for (const file of files) {
    for (const junk of [file + ".tmp", path.join(path.dirname(file), "." + path.basename(file) + ".opt")]) {
      if (fs.existsSync(junk)) fs.unlinkSync(junk);
    }
  }

  console.log(
    `Done. Touched ${touched} files (${converted} JPEG→WebP), saved ~${Math.round(saved / 1024)} KiB`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
