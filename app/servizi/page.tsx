import type { Metadata } from "next";
import { LocalizedServicesPageContent } from "@/components/pages/LocalizedServicesPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servizi di progettazione e ingegneria",
  description:
    "Progettazione strutturale per imprese generali e general contractor: direzione lavori, disegni d'officina, sicurezza cantieri a Brescia e in Lombardia.",
  path: "/servizi",
  keywords: [
    "progettazione strutturale imprese generali",
    "general contractor Brescia",
    "disegni d'officina Lombardia",
    "direzione lavori strutturale Brescia",
  ],
});

export default function ServiziPage() {
  return <LocalizedServicesPageContent />;
}
