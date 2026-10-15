import localFont from "next/font/local";

/**
 * Only two faces are preloaded (critical path / LCP on mobile).
 * Extra UI weights (500/600) synthesize from 400 until we reintroduce them with preload: false.
 */
export const fontSans = localFont({
  src: [{ path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" }],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: "Arial",
});

/** H1 / .section-title use font-weight 500 */
export const fontDisplay = localFont({
  src: [{ path: "../fonts/newsreader-latin-500-normal.woff2", weight: "500", style: "normal" }],
  variable: "--font-title",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
