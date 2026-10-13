import type { Metadata } from "next";
import { LocalizedGeneralContractorPage } from "@/components/pages/LocalizedGeneralContractorPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Progettazione strutturale per general contractor",
  description:
    "Progettazione strutturale per general contractor e imprese generali a Brescia e in Lombardia: calcolo, disegni d'officina e direzione lavori.",
  path: "/progettazione-strutturale-per-general-contractor",
  keywords: [
    "general contractor Brescia",
    "impresa generale costruzione Brescia",
    "progettazione strutturale per imprese generali",
    "disegni d'officina per general contractor",
    "direzione lavori strutturale Lombardia",
    "general contractor Bergamo Milano",
  ],
});

export default function ProgettazioneStrutturalePerGeneralContractorPage() {
  return <LocalizedGeneralContractorPage />;
}
