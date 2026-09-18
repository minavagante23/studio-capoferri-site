/**
 * Compress images under assets/ for static export (no Next image optimizer).
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
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "sc-img-"));

  for (const file of files) {
    const before = fs.statSync(file).size;
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file);
    const tmp = path.join(outDir, `${touched}-${base}`);

    try {
      const input = fs.readFileSync(file);
      let img = sharp(input, { failOn: "none" });
      const meta = await img.metadata();
      const w = meta.width || 0;
      const h = meta.height || 0;
      const long = Math.max(w, h);

      if (long > 1920) {
        img = img.resize({
          width: w >= h ? 1920 : undefined,
          height: h > w ? 1920 : undefined,
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      if (ext === ".webp") {
        await img.webp({ quality: 72, effort: 6 }).toFile(tmp);
      } else if (ext === ".png") {
        await img.png({ compressionLevel: 9, palette: base.includes("logo") }).toFile(tmp);
      } else {
        await img.jpeg({ quality: 72, mozjpeg: true }).toFile(tmp);
      }

      const after = fs.statSync(tmp).size;
      if (after < before * 0.98) {
        fs.writeFileSync(file, fs.readFileSync(tmp));
        saved += before - after;
        touched += 1;
        console.log(
          `OK ${path.relative(root, file)} ${Math.round(before / 1024)}→${Math.round(after / 1024)} KiB`
        );
      }
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
  // leftover opt/tmp from earlier runs
  for (const file of files) {
    for (const junk of [file + ".tmp", path.join(path.dirname(file), "." + path.basename(file) + ".opt")]) {
      if (fs.existsSync(junk)) fs.unlinkSync(junk);
    }
  }

  console.log(`Done. Touched ${touched} files, saved ~${Math.round(saved / 1024)} KiB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
