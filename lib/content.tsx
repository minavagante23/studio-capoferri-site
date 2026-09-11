import Link from "next/link";
import type { ReactNode } from "react";

/** Testi riportati dalle pagine HTML attuali (index, chi-siamo, progetti index). */

export type homeChiSiamoBlock = {
  text: ReactNode;
  image: "team" | "cantiere";
};

export const homeChiSiamo: { title: string; blocks: homeChiSiamoBlock[] } = {
  title: "Chi siamo",
  blocks: [
    {
      text: (
        <>
          <strong>Studio Capoferri</strong> è uno studio di <strong>ingegneria civile</strong> ad Adro (Brescia) con oltre quarant&apos;anni di esperienza
          nella <strong>progettazione strutturale, architettonica e urbanistica</strong> e nelle <strong>strutture in acciaio</strong> in Franciacorta e nel
          Nord e Centro Italia. Un team multidisciplinare per soluzioni integrate e personalizzate su ogni intervento.
        </>
      ),
      image: "team",
    },
    {
      text: (
        <>
          Operiamo soprattutto in ambito <strong>residenziale e industriale</strong>, con soluzioni tecniche aggiornate a esigenze funzionali, estetiche e
          normative. Presenza consolidata in Lombardia (Brescia, Bergamo, Milano) e nel Nord-Centro Italia, con competenze anche in sicurezza antincendio.
        </>
      ),
      image: "cantiere",
    },
  ],
};

export const homeServiziIntro =
  "Offriamo una gamma completa di servizi di ingegneria, architettura e consulenza tecnica, garantendo soluzioni innovative e conformi alle normative vigenti.";

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
  "Abbiamo una consolidata esperienza nella realizzazione di strutture per una vasta gamma di applicazioni, tra cui capannoni industriali, edifici residenziali, sopraelevazioni e carpenterie speciali. Ogni intervento viene affrontato con un approccio personalizzato, studiando soluzioni tecniche su misura per rispondere in modo puntuale alle specifiche esigenze del progetto.";

export const progettiIndexIntro =
  "Una selezione dei nostri lavori più significativi suddivisi per ambito di intervento. Questa classificazione permette una lettura più ordinata e mirata del nostro operato, facilitando l'individuazione dei progetti in base alla destinazione d'uso.";

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
    text: "Utilizziamo software specializzati e dedicati per ogni tipo di necessità progettuale: CAD, analisi strutturale FEM, calcolo strutturale, modellazione BIM, modellazione 3D e rendering, garantendo precisione e conformità normativa.",
  },
] as const;

export const zoneContent = {
  title: "Dove operiamo",
  heading: "Nord e Centro Nord Italia",
};

export const zoneDescription = (
  <>
    Operiamo in tutto il <strong>Nord e Centro Nord Italia</strong> (Lombardia, Veneto, Piemonte, Emilia-Romagna, Toscana), in particolare nelle province di{" "}
    <Link
      href="/progettazione-strutture-acciaio-brescia"
      title="Progettazione strutture in acciaio a Brescia — Studio Capoferri"
      className="link-accent"
    >
      Brescia
    </Link>
    ,{" "}
    <Link
      href="/progettazione-strutture-acciaio-bergamo"
      title="Progettazione strutture in acciaio a Bergamo — Studio Capoferri"
      className="link-accent"
    >
      Bergamo
    </Link>{" "}
    e{" "}
    <Link
      href="/progettazione-strutture-acciaio-milano"
      title="Progettazione strutture in acciaio a Milano — Studio Capoferri"
      className="link-accent"
    >
      Milano
    </Link>
    . La nostra sede ad Adro (BS) ci permette di servire efficacemente queste aree e le zone limitrofe, garantendo interventi tempestivi e una conoscenza approfondita delle normative locali.
  </>
);

export const zoneFooter = (
  <>
    Accettiamo commesse in tutta Italia e all&apos;estero. Serviamo anche altre province del Nord e Centro Nord Italia.{" "}
    <Link href="/contatti#form-contatti" title="Contattaci — Studio Capoferri" className="link-accent">
      Contattaci
    </Link>{" "}
    per verificare la copertura nella tua zona, oppure consulta le nostre pagine dedicate a{" "}
    <Link
      href="/progettazione-strutture-acciaio-brescia"
      title="Progettazione strutture in acciaio a Brescia — Studio Capoferri"
      className="link-accent"
    >
      Brescia
    </Link>
    ,{" "}
    <Link
      href="/progettazione-strutture-acciaio-bergamo"
      title="Progettazione strutture in acciaio a Bergamo — Studio Capoferri"
      className="link-accent"
    >
      Bergamo
    </Link>{" "}
    e{" "}
    <Link
      href="/progettazione-strutture-acciaio-milano"
      title="Progettazione strutture in acciaio a Milano — Studio Capoferri"
      className="link-accent"
    >
      Milano
    </Link>
    .
  </>
);

export const contattiIntro =
  "Per informazioni, preventivi o consulenze tecniche, il nostro team è a disposizione per rispondere a ogni vostra esigenza.";

export const stats = [
  { value: 40, suffix: "+", label: "Anni di esperienza" },
  { value: 1000, suffix: "+", label: "Progetti completati" },
  { value: 300, suffix: "+", label: "Clienti soddisfatti" },
] as const;

export const chiSiamoPage = {
  title: "Chi siamo",
  paragraphs: [
    <>
      <strong>Studio Capoferri</strong> è una realtà tecnica indipendente nata dalla passione per l&apos;edilizia in ogni sua forma e sfaccettatura. Con una solida esperienza maturata sul campo, affianchiamo imprese, architetti e studi tecnici per realizzare soluzioni strutturali affidabili, innovative e sempre conformi alle normative.
    </>,
    <>
      La nostra metodologia si basa su precisione, efficienza e cura del dettaglio. Crediamo nella collaborazione come chiave del successo progettuale, integrando competenze multidisciplinari per affrontare ogni sfida strutturale con approccio pratico e personalizzato.
    </>,
    <>
      Dal piccolo intervento locale ai grandi impianti industriali, mettiamo la stessa dedizione per garantire qualità e sicurezza in ogni progetto.
    </>,
  ],
};
