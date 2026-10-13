import type { Metadata } from "next";
import { LocalizedInternationalPageContent } from "@/components/pages/LocalizedInternationalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Clienti internazionali",
  description:
    "Studio Capoferri per general contractor, imprese generali e partner UE: strutture in acciaio, disegni d'officina e supporto in cantiere in Nord Italia, con confronti tecnici in inglese.",
  path: "/clienti-internazionali",
  keywords: [
    "general contractor Italia",
    "impresa generale costruzione partner strutturale",
    "studio ingegneria clienti internazionali",
    "strutture acciaio partner esteri Italia",
    "disegni officina fabricator UE",
    "ingegnere strutturista inglese Italia",
  ],
});

export default function ClientiInternazionaliPage() {
  return <LocalizedInternationalPageContent />;
}
