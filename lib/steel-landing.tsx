import type { Metadata } from "next";
import { LocalizedSteelLandingPage } from "@/components/pages/LocalizedSteelLandingPage";
import { buildPageMetadata } from "@/lib/seo";

export type SteelLandingConfig = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  introLead: string;
  areaHeading: string;
  areaBody: string;
  areaBodySecondary?: string;
  ctaHeading: string;
  faqCostQuestion: string;
  faqAreaAnswer: string;
  areaServedPrimary: string;
  heroImage: { src: string; alt: string; altEn: string };
  secondaryImage: { src: string; alt: string; altEn: string };
  featuredProjects: { href: string; title: string; description: string }[];
};

export function buildSteelLandingMetadata(config: SteelLandingConfig): Metadata {
  return buildPageMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: `/progettazione-strutture-acciaio-${config.slug}`,
    image: config.ogImage,
    keywords: [...config.keywords],
  });
}

export function SteelLandingPage({ config }: { config: SteelLandingConfig }) {
  return <LocalizedSteelLandingPage config={config} />;
}

export const steelLandingBrescia: SteelLandingConfig = {
  slug: "brescia",
  city: "Brescia",
  metaTitle: "Progettazione strutture in acciaio a Brescia e in Lombardia",
  metaDescription:
    "Studio di ingegneria specializzato in progettazione di strutture in acciaio a Brescia e in Lombardia: ville, capannoni, sopraelevazioni, carpenteria metallica. Calcolo strutturale NTC 2018, disegni d'officina, direzione lavori. 40+ anni di esperienza ad Adro (BS).",
  keywords: [
    "progettazione strutture in acciaio Brescia",
    "strutture in acciaio Lombardia",
    "calcolo strutturale acciaio Brescia",
    "ingegnere strutturista Brescia",
    "carpenteria metallica progettazione",
    "capannoni in acciaio Brescia",
    "ville in acciaio Franciacorta",
    "sopraelevazioni in acciaio",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/residenziale/ingegneria-civile-brescia.webp",
  introLead:
    "Studio Capoferri è uno studio di ingegneria strutturale specializzato nelle strutture in acciaio, con oltre 40 anni di esperienza e più di 1000 progetti realizzati. Con sede ad Adro, in provincia di Brescia, nel cuore della Franciacorta, progettiamo ville in acciaio, capannoni industriali, sopraelevazioni e carpenteria metallica in tutta la Lombardia e nel Nord Italia.",
  areaHeading: "Dove operiamo: Brescia, Bergamo, Milano e tutta la Lombardia",
  areaBody:
    "Lo studio ha sede ad Adro (BS), in provincia di Brescia, in posizione strategica tra Franciacorta, Val Calepio e Lago d'Iseo. Interveniamo rapidamente su Brescia e provincia — Franciacorta, Val Trompia, Garda bresciano, pianura bresciana — e in tutta la Lombardia: Bergamo, Milano, Monza, Cremona, Mantova, Lecco e Como.",
  areaBodySecondary:
    "Per i cantieri fuori regione operiamo regolarmente anche in Veneto, Piemonte ed Emilia-Romagna.",
  ctaHeading: "Hai un progetto in acciaio a Brescia o in Lombardia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Brescia?",
  faqAreaAnswer:
    "Sì. Lo studio ha sede ad Adro (BS), in provincia di Brescia, e opera in tutta la Lombardia — Brescia, Bergamo, Milano e relative province — oltre che in Veneto, Piemonte ed Emilia-Romagna.",
  areaServedPrimary: "Provincia di Brescia",
  heroImage: {
    src: "/assets/residenziale/ingegneria-civile-brescia.webp",
    alt: "Progettazione di strutture in acciaio a Brescia — villa residenziale con telaio metallico",
    altEn: "Steel structure design in Brescia — residential villa with steel frame",
  },
  secondaryImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
    alt: "Carpenteria metallica per strutture in acciaio in provincia di Brescia — travi e pilastri",
    altEn: "Steel fabrication for structures in the Brescia province — beams and columns",
  },
  featuredProjects: [
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "struttura calcolata per due carroponti, pannelli sandwich e disegni d'officina",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme (PR)",
      description: "fondazioni su pali, telaio in acciaio e copertura fotovoltaica integrale",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-veneto",
      title: "Residenza privata in acciaio in Veneto",
      description: "progettazione strutturale e architettonica integrata",
    },
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano",
      description: "nuova struttura in acciaio alta circa 16 metri e consolidamenti strutturali",
    },
  ],
};

export const steelLandingBergamo: SteelLandingConfig = {
  slug: "bergamo",
  city: "Bergamo",
  metaTitle: "Progettazione strutture in acciaio a Bergamo e in Lombardia",
  metaDescription:
    "Progettazione strutture in acciaio a Bergamo e provincia: ville, capannoni, sopraelevazioni e carpenteria metallica. Calcolo strutturale NTC 2018, disegni d'officina, direzione lavori. Studio Capoferri, 40+ anni di esperienza in Lombardia.",
  keywords: [
    "progettazione strutture in acciaio Bergamo",
    "strutture in acciaio Bergamo",
    "calcolo strutturale acciaio Bergamo",
    "ingegnere strutturista Bergamo",
    "carpenteria metallica Bergamo",
    "capannoni in acciaio Bergamo",
    "ville in acciaio Val Seriana",
    "sopraelevazioni in acciaio Bergamo",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/residenziale/strutture-acciaio-bergamo.webp",
  introLead:
    "Studio Capoferri è uno studio di ingegneria strutturale specializzato nelle strutture in acciaio, con oltre 40 anni di esperienza e più di 1000 progetti realizzati. Con sede ad Adro (BS), a pochi chilometri dalla provincia di Bergamo, progettiamo ville in acciaio, capannoni industriali, sopraelevazioni e carpenteria metallica su Bergamo, in Lombardia e nel Nord Italia.",
  areaHeading: "Dove operiamo: Bergamo, Brescia, Milano e tutta la Lombardia",
  areaBody:
    "Lo studio si trova ad Adro (BS), al confine con la provincia di Bergamo, in posizione strategica tra Franciacorta e Val Calepio. Interveniamo rapidamente su Bergamo e provincia — Val Seriana, Val Brembana, Isola Bergamasca, pianura bergamasca — e in tutta la Lombardia: Brescia, Milano, Monza, Cremona, Mantova, Lecco e Como.",
  areaBodySecondary:
    "Per i cantieri fuori regione operiamo regolarmente anche in Veneto, Piemonte ed Emilia-Romagna.",
  ctaHeading: "Hai un progetto in acciaio a Bergamo o in Lombardia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Bergamo?",
  faqAreaAnswer:
    "Sì. Lo studio ha sede ad Adro (BS), al confine con la provincia di Bergamo, e opera in tutta la Lombardia — Bergamo, Brescia, Milano e relative province — oltre che in Veneto, Piemonte ed Emilia-Romagna.",
  areaServedPrimary: "Provincia di Bergamo",
  heroImage: {
    src: "/assets/residenziale/strutture-acciaio-bergamo.webp",
    alt: "Progettazione di strutture in acciaio a Bergamo — villa residenziale con telaio metallico",
    altEn: "Steel structure design in Bergamo — residential villa with steel frame",
  },
  secondaryImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
    alt: "Carpenteria metallica per strutture in acciaio in provincia di Bergamo — travi e pilastri",
    altEn: "Steel fabrication for structures in the Bergamo province — beams and columns",
  },
  featuredProjects: [
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "struttura calcolata per due carroponti, pannelli sandwich e disegni d'officina",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme (PR)",
      description: "fondazioni su pali, telaio in acciaio e copertura fotovoltaica integrale",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-veneto",
      title: "Residenza privata in acciaio in Veneto",
      description: "progettazione strutturale e architettonica integrata",
    },
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano Bovisa",
      description: "nuova struttura in acciaio alta circa 16 metri e consolidamenti strutturali",
    },
  ],
};

export const steelLandingMilano: SteelLandingConfig = {
  slug: "milano",
  city: "Milano",
  metaTitle: "Progettazione strutture in acciaio a Milano e in Lombardia",
  metaDescription:
    "Progettazione strutture in acciaio a Milano e hinterland: ville, capannoni, sopraelevazioni, spazi per eventi e carpenteria metallica. Calcolo strutturale NTC 2018, disegni d'officina, direzione lavori. Studio Capoferri, 40+ anni di esperienza.",
  keywords: [
    "progettazione strutture in acciaio Milano",
    "strutture in acciaio Milano",
    "calcolo strutturale acciaio Milano",
    "ingegnere strutturista Milano",
    "carpenteria metallica Milano",
    "capannoni in acciaio Milano",
    "ville in acciaio Milano",
    "sopraelevazioni in acciaio Milano",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/superstudio-maxi/strutture-acciaio-milano.webp",
  introLead:
    "Studio Capoferri è uno studio di ingegneria strutturale specializzato nelle strutture in acciaio, con oltre 40 anni di esperienza e più di 1000 progetti realizzati. Progettiamo ville in acciaio, capannoni industriali, sopraelevazioni e carpenteria metallica a Milano, nell'hinterland milanese e in tutta la Lombardia, con interventi su complessi ricettivi, edifici residenziali e strutture industriali.",
  areaHeading: "Dove operiamo: Milano, Brescia, Bergamo e tutta la Lombardia",
  areaBody:
    "Operiamo su Milano città e provincia — Bovisa, Famagosta, hinterland nord e sud — oltre che su Monza, Brianza e tutta l'area metropolitana. Lo studio ha sede ad Adro (BS), in posizione strategica per raggiungere rapidamente i cantieri milanesi, e interviene anche su Brescia, Bergamo, Cremona, Mantova, Lecco e Como.",
  areaBodySecondary:
    "Tra i progetti milanesi più significativi: Superstudio Village a Bovisa e Superstudio Maxi a Famagosta, con strutture in acciaio, consolidamenti e adeguamenti sismici.",
  ctaHeading: "Hai un progetto in acciaio a Milano o in Lombardia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Milano?",
  faqAreaAnswer:
    "Sì. Lo studio opera regolarmente su Milano e provincia, oltre che su Brescia, Bergamo e tutta la Lombardia. La sede ad Adro (BS) consente interventi tempestivi sull'area metropolitana milanese e su tutto il Nord Italia.",
  areaServedPrimary: "Provincia di Milano",
  heroImage: {
    src: "/assets/superstudio-maxi/strutture-acciaio-milano.webp",
    alt: "Progettazione di strutture in acciaio a Milano — struttura portante in acciaio",
    altEn: "Steel structure design in Milan — load-bearing steel structure",
  },
  secondaryImage: {
    src: "/assets/superstudio-village-struttura-acciaio.webp",
    alt: "Struttura in acciaio per edificio a Milano — Superstudio Village Bovisa",
    altEn: "Steel structure for a building in Milan — Superstudio Village Bovisa",
  },
  featuredProjects: [
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano Bovisa",
      description: "nuova struttura in acciaio alta circa 16 metri, consolidamenti e ricostruzioni",
    },
    {
      href: "/progetti/ricettivi/superstudio-maxi",
      title: "Superstudio Maxi a Famagosta",
      description: "recupero capannone industriale con adeguamento sismico e nuove strutture in acciaio",
    },
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "struttura calcolata per due carroponti, pannelli sandwich e disegni d'officina",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme (PR)",
      description: "fondazioni su pali, telaio in acciaio e copertura fotovoltaica integrale",
    },
  ],
};
