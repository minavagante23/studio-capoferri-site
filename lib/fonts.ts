import localFont from "next/font/local";

/**
 * IBM Plex Sans — unica famiglia tipografica.
 * 400 corpo, 500 titoli (Medium), 600 UI / Semibold.
 */
export const fontSans = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: "Arial",
});

/** Alias: titoli usano la stessa famiglia (pesi 500/600 via CSS). */
export const fontDisplay = fontSans;
