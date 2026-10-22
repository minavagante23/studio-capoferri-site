import type { ReactNode } from "react";
import type { ProjectArea, ProjectCasePreview } from "./types";

export const projectCategories: Record<
  ProjectArea,
  {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    intro: ReactNode;
    cases: ProjectCasePreview[];
  }
> = {
  residenziali: {
    metaTitle: "Progetti in ambito residenziale",
    metaDescription:
      "Ville, case e complessi in acciaio e misto, progettazione strutturale Studio Capoferri.",
    heading: "Strutture residenziali",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Ville, case, complessi, edifici a più piani. Acciaio, cemento armato, misto.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Il telaio, le luci, le fondazioni e il montaggio si definiscono insieme all&apos;architettura, sul lotto.
        </p>
      </>
    ),
    cases: [
      {
        slug: "villa-acciaio-pollenza",
        title: "Residenza privata - Pollenza (MC)",
        caption: "Residenza privata - Pollenza (MC)",
        cover: "/assets/residenza-privata-acciaio.webp",
        alt: "Residenza privata in acciaio a Pollenza (MC), progettazione strutturale Studio Capoferri",
        href: "/progetti/residenziali/villa-acciaio-pollenza",
      },
      {
        slug: "villa-acciaio-salsomaggiore",
        title: "Villa in acciaio - Salsomaggiore Terme (PR)",
        caption: "Villa in acciaio - Salsomaggiore Terme (PR)",
        cover: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
        alt: "Montaggio del telaio in carpenteria metallica, villa in acciaio a Salsomaggiore Terme (PR)",
        href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      },
    ],
  },
  industriali: {
    metaTitle: "Progetti in ambito industriale",
    metaDescription:
      "Capannoni, silos e opere industriali per imprese generali e general contractor: carroponte, grandi luci, disegni d'officina. Studio Capoferri.",
    heading: "Progetti industriali",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Capannoni, logistica, produzione, silos agricoli e industriali, sopraelevazioni. Carichi da carroponte, grandi
          luci, tempi di montaggio: committenze tipiche di imprese generali e general contractor.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          L&apos;acciaio è spesso il materiale giusto: resistenza, officina, adattamento all&apos;impianto esistente. Per
          il percorso tecnico dedicato vedi{" "}
          <a
            href="/progettazione-strutturale-per-general-contractor"
            title="Progettazione strutturale per general contractor - Studio Capoferri"
            className="link-accent"
          >
            progettazione strutturale per general contractor
          </a>
          .
        </p>
      </>
    ),
    cases: [
      {
        slug: "centro-raccolta-rifiuti-chiuduno",
        title: "Centro raccolta rifiuti - Chiuduno (BG)",
        caption: "Centro raccolta rifiuti - Chiuduno (BG)",
        cover:
          "/assets/industriale/centro-raccolta-rifiuti-chiuduno/copertura-reticolare-cielo-blu-chiuduno.webp",
        alt: "Struttura reticolare in acciaio del centro raccolta rifiuti a Chiuduno (BG) - Studio Capoferri",
        href: "/progetti/industriali/centro-raccolta-rifiuti-chiuduno",
      },
      {
        slug: "copertura-edificio-verniciatura-maranello",
        title: "Tettoia reticolare - Maranello (MO)",
        caption: "Tettoia reticolare - Maranello (MO)",
        cover:
          "/assets/industriale/copertura-edificio-verniciatura-maranello/struttura-reticolare-grande-luce-edificio-verniciatura-maranello.webp",
        alt: "Tettoia reticolare in acciaio a grande luce a Maranello (MO) - Studio Capoferri",
        href: "/progetti/industriali/copertura-edificio-verniciatura-maranello",
      },
      {
        slug: "capannone-erbusco",
        title: "Capannone industriale - Erbusco (BS)",
        caption: "Capannone industriale - Erbusco (BS)",
        cover: "/assets/industriale/capannone-erbusco/progettazione-strutture-adro.webp",
        alt: "Capannone industriale in acciaio a Erbusco (BS), progettazione strutturale Studio Capoferri",
        href: "/progetti/industriali/capannone-erbusco",
      },
      {
        slug: "ampliamento-complesso-zootecnico",
        title: "Complesso zootecnico - Castegnato (BS)",
        caption: "Complesso zootecnico - Castegnato (BS)",
        cover: "/assets/industriale/ampliamento-complesso-zootecnico/vista-aerea-ampliamento-complesso-zootecnico.webp",
        alt: "Vista aerea delle capriate metalliche per l'ampliamento di un complesso zootecnico a Castegnato (BS)",
        href: "/progetti/industriali/ampliamento-complesso-zootecnico",
      },
      {
        slug: "centro-direzionale-provaglio-diseo",
        title: "Centro direzionale - Provaglio d'Iseo (BS)",
        caption: "Centro direzionale - Provaglio d'Iseo (BS)",
        cover: "/assets/industriale/centro-direzionale-provaglio-diseo/vista-generale-soppalco-centro-direzionale-provaglio-diseo.webp",
        alt: "Soppalco in carpenteria metallica in fase di montaggio, centro direzionale a Provaglio d'Iseo (BS)",
        href: "/progetti/industriali/centro-direzionale-provaglio-diseo",
      },
      {
        slug: "lamiere-da-getto-spinelli",
        title: "Lamiere da getto in acciaio - Adro (BS)",
        caption: "Lamiere da getto in acciaio - Adro (BS)",
        cover:
          "/assets/industriale/lamiere-da-getto-spinelli/prova-carico-lamiera-getto-spinelli.webp",
        alt: "Prova di carico su lamiera da getto in acciaio con solaio collaborante, Adro (BS)",
        href: "/progetti/industriali/lamiere-da-getto-spinelli",
      },
    ],
  },
  ricettivi: {
    metaTitle: "Progetti ricettivi e spazi pubblici",
    metaDescription:
      "Mostre, seminari, spazi per eventi. Superstudio e altri interventi Studio Capoferri.",
    heading: "Strutture per eventi",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Mostre, seminari, convegni, spazi per eventi.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Sale e padiglioni, anche in edifici esistenti riconvertiti.
        </p>
      </>
    ),
    cases: [
      {
        slug: "superstudio-village",
        title: "Superstudio Village - Milano Bovisa",
        caption: "Superstudio Village - Milano Bovisa",
        cover: "/assets/progetto-superstudio.webp",
        alt: "Superstudio Village a Milano Bovisa, progettazione strutturale del complesso edilizio",
        href: "/progetti/ricettivi/superstudio-village",
      },
      {
        slug: "superstudio-maxi",
        title: "Superstudio Maxi - Famagosta",
        caption: "Superstudio Maxi - Famagosta",
        cover: "/assets/superstudio-maxi/antincendio-adro.webp",
        alt: "Superstudio Maxi a Milano Famagosta, recupero strutturale di capannone industriale",
        href: "/progetti/ricettivi/superstudio-maxi",
      },
    ],
  },
};
