import type { Metadata } from "next";
import { LocalizedCarpenteriePage } from "@/components/pages/LocalizedCarpenteriePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Progettazione strutturale per carpenterie metalliche",
  description:
    "Studio Capoferri partner di carpenterie EN 1090: calcolo, modello 3D/Tekla, disegni d'officina. Scarica esempi elaborati e richiedi preventivo.",
  path: "/progettazione-strutturale-per-carpenterie",
  keywords: [
    "progettazione per carpenteria metallica",
    "disegni d'officina carpenteria",
    "studio strutturale EN 1090",
    "Tekla disegni officina",
    "preventivo progettazione carpenteria",
    "ingegnere strutturista carpenteria Brescia",
  ],
});

export default function ProgettazioneStrutturalePerCarpenteriePage() {
  return <LocalizedCarpenteriePage />;
}
