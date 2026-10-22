"""Package anonymized DISEGNI OFFICINA PDFs into the public download ZIP."""
from __future__ import annotations

import shutil
import zipfile
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "DISEGNI OFFICINA"
OUT_DIR = ROOT / "assets" / "downloads"
STAGING = OUT_DIR / "_pack"
ZIP_PATH = OUT_DIR / "studio-capoferri-esempi-elaborati-officina.zip"

MAPPING = [
    ("TIPOLOGICO_CASA.pdf", "01-tipologico-casa.pdf"),
    ("TIPOLOGICO_SCALA.pdf", "02-tipologico-scala.pdf"),
    ("TIPOLOGICO_SOPPALCO.pdf", "03-tipologico-soppalco.pdf"),
]


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing source folder: {SRC}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if STAGING.exists():
        shutil.rmtree(STAGING)
    STAGING.mkdir()

    for src_name, dest_name in MAPPING:
        src = SRC / src_name
        if not src.exists():
            raise SystemExit(f"Missing PDF: {src}")
        doc = fitz.open(src)
        doc.set_metadata({})
        try:
            doc.del_xml_metadata()
        except Exception:
            pass
        dest = STAGING / dest_name
        doc.save(dest, garbage=4, deflate=True, clean=True)
        doc.close()
        print(f"packed {dest_name} ({dest.stat().st_size // 1024} KB)")

    (STAGING / "LEGGIMI.txt").write_text(
        "Studio Capoferri — Esempi elaborati d'officina\n"
        "Tavole tipologiche (casa, scala, soppalco) con cartigli anonimizzati.\n"
        "Solo a scopo di valutazione dello standard disegni. Vietato uso costruttivo.\n"
        "info@studiocapoferri.eu — www.studiocapoferri.eu\n",
        encoding="utf-8",
    )

    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for p in sorted(STAGING.iterdir()):
            zf.write(p, arcname=p.name)

    shutil.rmtree(STAGING)
    preview = OUT_DIR / "_anon-preview"
    if preview.exists():
        shutil.rmtree(preview)

    print(f"ZIP {ZIP_PATH} ({ZIP_PATH.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
