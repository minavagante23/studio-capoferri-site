import type { Metadata } from "next";
import { LocalizedExportPartnerPage } from "@/components/pages/LocalizedExportPartnerPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Progettazione strutturale in acciaio per partner europei",
  description:
    "Partner strutturale in Nord Italia per imprese di Germania, Paesi Bassi e Belgio: structural steel design, shop drawings, Eurocodici/NTC e supporto in cantiere.",
  path: "/progettazione-strutturale-acciaio-italia",
  keywords: [
    "progettazione strutturale acciaio Italia partner UE",
    "disegni officina acciaio Germania Belgio Olanda",
    "ingegnere strutturista inglese Italia",
    "steel design Italia Eurocodici",
  ],
});

export default function ProgettazioneStrutturaleAcciaioItaliaPage() {
  return <LocalizedExportPartnerPage />;
}
