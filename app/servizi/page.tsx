import type { Metadata } from "next";
import { LocalizedServicesPageContent } from "@/components/pages/LocalizedServicesPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servizi di progettazione e ingegneria",
  description:
    "Progettazione strutturale, direzione lavori, consulenze tecniche, sicurezza cantieri e assistenza immobiliare a Brescia e provincia.",
  path: "/servizi",
});

export default function ServiziPage() {
  return <LocalizedServicesPageContent />;
}
