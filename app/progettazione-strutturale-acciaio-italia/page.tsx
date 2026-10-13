import type { Metadata } from "next";
import { LocalizedExportPartnerPage } from "@/components/pages/LocalizedExportPartnerPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Progettazione strutturale in acciaio per partner europei",
  description:
    "Partner strutturale in Nord Italia per general contractor e imprese generali di Germania, Paesi Bassi, Belgio e Danimarca: design in acciaio, shop drawings, Eurocodici/NTC e supporto in cantiere.",
  path: "/progettazione-strutturale-acciaio-italia",
  keywords: [
    "general contractor Italia",
    "impresa generale costruzione strutture acciaio",
    "progettazione strutturale acciaio Italia partner UE",
    "disegni officina acciaio Germania Belgio Olanda Danimarca",
    "ingegnere strutturista inglese Italia",
    "steel design Italia Eurocodici",
  ],
});

export default function ProgettazioneStrutturaleAcciaioItaliaPage() {
  return <LocalizedExportPartnerPage />;
}
