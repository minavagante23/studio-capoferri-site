import type { CaseStudyKey, ProjectCaseStudy } from "../types";

export const ricettiviCaseStudies = {
  "ricettivi/superstudio-village": {
    metaTitle: "Superstudio Village - Milano Bovisa",
    metaDescription:
      "Progettazione strutturale per complesso a Milano Bovisa: consolidamenti, demolizioni e ricostruzioni in acciaio e misto. Studio Capoferri.",
    heading: "Superstudio Village - Milano Bovisa",
    externalBrand: {
      href: "https://www.superstudioevents.com/it/",
      imageSrc: "/assets/superstudio_logo.svg",
      imageAlt: "Logo Superstudio Events",
    },
    body: (
      <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
        L&apos;attività di progettazione strutturale ha riguardato un complesso edilizio a <strong>Milano Bovisa</strong> per{" "}
        <a
          href="https://www.superstudioevents.com/it/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          Superstudio Events S.r.l.
        </a>
       , costituito da sei edifici con differenti tipologie di intervento. I lavori sono iniziati nel <strong>2023</strong>. In due edifici sono stati previsti interventi
        di consolidamento strutturale di volte e copertura. Un edificio è stato demolito e ricostruito con nuova struttura in acciaio (altezza massima
        circa <strong>16 m</strong>). Un altro è stato ricostruito con struttura mista in cemento armato e muratura portante; un ulteriore fabbricato con muratura
        portante e copertura collaborante; infine un adeguamento sismico su uno stabile esistente.
      </p>
    ),
    gallery: [
      {
        src: "/assets/superstudio-village-entrata-esterno.webp",
        alt: "Ingresso esterno del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-struttura-acciaio.webp",
        alt: "Dettaglio della struttura in acciaio pre-fabbricata, Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-vista-della-struttura.webp",
        alt: "Facciata e volumi del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-pavimentazione-interni.webp",
        alt: "Pavimentazione e finitura degli spazi interni, Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-ricerca-innovazione.webp",
        alt: "Render esterno del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-innovazione-tecnologica.webp",
        alt: "Sala proiezioni con struttura portante, Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp",
        alt: "Montaggio della struttura interna in acciaio, Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-eventi.webp",
        alt: "Sala eventi del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-sala-proiezione.webp",
        alt: "Sala proiezione con copertura e struttura in acciaio, Superstudio Village Milano",
      },
    ],
  },
  "ricettivi/superstudio-maxi": {
    metaTitle: "Superstudio Maxi - Famagosta",
    metaDescription:
      "Recupero capannone industriale a Milano Famagosta: adeguamento sismico, strutture in acciaio e sicurezza. Studio Capoferri.",
    heading: "Superstudio Maxi - Famagosta",
    externalBrand: {
      href: "https://www.superstudioevents.com/it/venues/superstudio-maxi/",
      imageSrc: "/assets/superstudio_logo.svg",
      imageAlt: "Logo Superstudio Events",
    },
    body: (
      <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
        L&apos;intervento strutturale ha riguardato il recupero di un capannone industriale dismesso, un tempo carpenteria metallica, in zona Famagosta a
        Milano. L&apos;edificio, riconvertito in sede per eventi (circa 7.200 m² coperti e 3.000 m² di piazzale), è stato oggetto di adeguamento sismico
        e consolidamento delle strutture esistenti in acciaio. Sono state realizzate nuove strutture in acciaio per funzioni congressuali, espositive e
        multimediali, valorizzando l&apos;identità di archeologia industriale del sito.
      </p>
    ),
    gallery: [
      {
        src: "/assets/superstudio-maxi/antincendio-adro.webp",
        alt: "Saletta interna del complesso Superstudio Maxi a Milano Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/strutture-acciaio-lombardia.webp",
        alt: "Vista esterna del recupero del capannone industriale, Superstudio Maxi Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/ingegneria-urbanistica-franciacorta.webp",
        alt: "Area interna con strutture consolidate, Superstudio Maxi Milano",
      },
      {
        src: "/assets/superstudio-maxi/progettazione-industriale-ricettivo.webp",
        alt: "Pavimentazione degli spazi espositivi, Superstudio Maxi Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/sicurezza-cantieri-franciacorta.webp",
        alt: "Render esterno del complesso Superstudio Maxi a Milano Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/strutture-acciaio-milano.webp",
        alt: "Sala proiezioni con nuova struttura in acciaio, Superstudio Maxi Milano",
      },
      {
        src: "/assets/superstudio-maxi/studio-ingegneria-brescia.webp",
        alt: "Dettaglio strutturale interno del complesso Superstudio Maxi a Milano",
      },
      {
        src: "/assets/superstudio-maxi/strutture-acciaio-milano-brescia.webp",
        alt: "Sala eventi con copertura in acciaio, Superstudio Maxi Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/architettura-urbanistica-brescia.webp",
        alt: "Sala proiezione del complesso Superstudio Maxi a Milano Famagosta",
      },
    ],
  },
} as Record<CaseStudyKey, ProjectCaseStudy>;

