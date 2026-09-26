import localFont from "next/font/local";

/** Self-hosted latin subsets. Google Fonts file URLs no longer end in .woff2, which crashes next/font/google at build time. */
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

export const fontDisplay = localFont({
  src: [
    { path: "../fonts/newsreader-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/newsreader-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-title",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
