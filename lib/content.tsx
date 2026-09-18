import Link from "next/link";
import type { ReactNode } from "react";

/** Testi riportati dalle pagine HTML attuali (index, chi-siamo, progetti index). */

export type homeChiSiamoBlock = {
  text: ReactNode;
  /** Versione più corta usata solo sotto md (mobile). */
  textMobile?: ReactNode;
  image: "struttura" | "cantiere";
};

export const homeChiSiamo: { title: string; blocks: homeChiSiamoBlock[] } = {
  title: "Chi siamo",
  blocks: [
    {
      text: (
        <>
          <strong>Studio Capoferri</strong> è uno studio di ingegneria civile ad Adro (Brescia), Italia. Da oltre quarant&apos;anni
          progettiamo strutture (acciaio, cemento armato, muratura) in Franciacorta e nel Nord e Centro Italia. Calcolo,
          disegni d&apos;officina, direzione lavori. Architettura e urbanistica quando l&apos;incarico lo richiede.
        </>
      ),
      textMobile: (
        <>
          <strong>Studio Capoferri</strong> è uno studio di ingegneria civile ad Adro (Brescia), Italia. Da oltre quarant&apos;anni
          progettiamo strutture in acciaio, cemento armato e muratura in Franciacorta e nel Nord e Centro Italia.
        </>
      ),
      image: "struttura",
    },
    {
      text: (
        <>
          Lavoriamo soprattutto sul residenziale e sull&apos;industriale: ville e case in acciaio, capannoni, sopraelevazioni,
          carpenterie, interventi su esistenti. Sede ad Adro; commesse in Lombardia (Brescia, Bergamo, Milano) e nelle
          regioni vicine. Progettazione antincendio quando il brief lo chiede.
        </>
      ),
      textMobile: (
        <>
          Residenziale e industriale: ville in acciaio, capannoni, sopraelevazioni, carpenterie. Lombardia e Nord-Centro
          Italia. Antincendio quando serve.
        </>
      ),
      image: "cantiere",
    },
  ],
};

export const homeServiziIntro =
  "Acciaio, cemento armato, muratura. Calcolo, disegni d'officina, direzione lavori. Architettura, pratiche e sicurezza di cantiere quando l'incarico lo richiede.";

export const homeServiceCards = [
  {
    title: "Progettazione strutturale",
    description:
      "Strutture in acciaio, cemento armato e muratura. Analisi FEM, modellazione BIM, verifiche sismiche e progettazione antincendio.",
    href: "/servizi#progettazione-strutturale",
  },
  {
    title: "Urbanistica e architettura",
    description: "Progettazione architettonica, piani attuativi, varianti urbanistiche e analisi di conformità.",
    href: "/servizi#urbanistica-architettura",
  },
  {
    title: "Direzione lavori",
    description: "Supervisione tecnica, assistenza in cantiere, verifiche strutturali e relazioni tecniche.",
    href: "/servizi#direzione-lavori",
  },
  {
    title: "Servizi tecnici",
    description: "Pratiche edilizie, catastali, Sovrintendenza, collaudi amministrativi e successioni.",
    href: "/servizi#servizi-tecnici",
  },
  {
    title: "Sicurezza cantieri",
    description: "Coordinamento sicurezza (CSP/CSE), piani di sicurezza e gestione rischi.",
    href: "/servizi#sicurezza-cantieri",
  },
  {
    title: "Assistenza immobiliare",
    description: "Supporto tecnico per compravendite, perizie, stime immobiliari e valutazioni.",
    href: "/servizi#assistenza-immobiliare",
  },
] as const;

export const homeProgettiIntro =
  "Capannoni, ville in acciaio, sopraelevazioni, carpenterie. Una selezione per ambito: residenziale, industriale, eventi.";

export const progettiIndexIntro =
  "Opere in acciaio e miste, suddivise per destinazione: residenziale, industriale, eventi.";

export const certificationsIntro =
  "Tutte le attività sono svolte da professionisti in possesso delle abilitazioni richieste dalla normativa di settore.";

export const certifications = [
  {
    title: "Abilitazione CSP/CSE",
    text: "Professionisti abilitati per il ruolo di CSP e CSE nei cantieri",
  },
  {
    title: "Pratiche di prevenzione incendi",
    text: "Professionisti iscritti agli elenchi del Ministero dell'interno di cui all'articolo 16 del decreto legislativo 8 marzo 2006, n. 139",
  },
  {
    title: "Certificazioni energetiche",
    text: "Certificazioni energetiche per redigere l'Attestato di Prestazione Energetica (APE) degli edifici",
  },
  {
    title: "Software professionali",
    text: "CAD, analisi FEM, calcolo strutturale, modellazione BIM.",
  },
] as const;

export const zoneContent = {
  title: "Dove operiamo",
  heading: "Nord e Centro Nord Italia",
};

export const zoneDescription = (
  <>
    Operiamo in tutto il Nord e Centro Nord Italia (Lombardia, Veneto, Piemonte, Emilia-Romagna, Toscana), in particolare nelle province di{" "}
    <Link
      href="/progettazione-strutture-acciaio-brescia"
      title="Progettazione strutture in acciaio a Brescia - Studio Capoferri"
      className="link-accent"
    >
      Brescia
    </Link>
    ,{" "}
    <Link
      href="/progettazione-strutture-acciaio-bergamo"
      title="Progettazione strutture in acciaio a Bergamo - Studio Capoferri"
      className="link-accent"
    >
      Bergamo
    </Link>{" "}
    e{" "}
    <Link
      href="/progettazione-strutture-acciaio-milano"
      title="Progettazione strutture in acciaio a Milano - Studio Capoferri"
      className="link-accent"
    >
      Milano
    </Link>
    . Sede ad Adro (BS).
  </>
);

export const zoneFooter = (
  <>
    Accettiamo commesse in Italia e all&apos;estero.{" "}
    <Link href="/contatti#form-contatti" title="Contattaci - Studio Capoferri" className="link-accent">
      Contattaci
    </Link>
    .
  </>
);

export const chiSiamoPage = {
  title: "Chi siamo",
  paragraphs: [
    <>
      <strong>Studio Capoferri</strong> è uno studio di ingegneria civile ad Adro (Brescia), Italia. Da oltre quarant&apos;anni
      progettiamo strutture in acciaio, cemento armato e muratura per imprese, architetti e studi tecnici: ville e case,
      capannoni, sopraelevazioni, carpenterie speciali e interventi su edifici esistenti. Lavoriamo soprattutto in
      Franciacorta e nel Nord e Centro Italia, con sedi operative e cantieri che richiedono risposta rapida e continuità
      sul progetto.
    </>,
    <>
      Restiamo sul lavoro dal modello al cantiere. Il calcolo strutturale segue NTC ed Eurocodici; produciamo disegni
      d&apos;officina e seguiamo il montaggio quando serve. Offriamo direzione lavori, verifiche su strutture esistenti e
      supporto in fase esecutiva. Architettura, urbanistica e pratiche edilizie entrano quando l&apos;incarico è
      integrato e non solo strutturale.
    </>,
    <>
      Le commesse vanno dal piccolo intervento al capannone industriale. Operiamo in Lombardia (Brescia, Bergamo,
      Milano) e nelle regioni vicine. Lo stesso team segue calcolo, officina e montaggio: meno passaggi intermedi, più
      chiarezza su tempi, dettagli e responsabilità.
    </>,
  ],
};
