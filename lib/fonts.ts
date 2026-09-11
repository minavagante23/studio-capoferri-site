import { IBM_Plex_Sans, Newsreader } from "next/font/google";

export const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fontDisplay = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-title",
  display: "swap",
});
