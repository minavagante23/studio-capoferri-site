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
          nella <strong>progettazione strutturale, architettonica e urbanistica</strong> e nelle <strong>strutture in acciaio</strong> in Franciacorta e in
          generale nel Nord e Centro Italia. Il nostro team è
          composto da professionisti qualificati, ognuno con competenze multidisciplinari specifiche, in grado di garantire un servizio di qualità e precisione
          sotto ogni aspetto progettuale. Grazie alla sinergia tra diverse expertise e alla consolidata esperienza maturata nel settore, offriamo soluzioni
          innovative e personalizzate per ogni tipo di intervento assicurando un approccio integrato e completo per tutti i progetti affidati al nostro studio.
        </>
      ),
      image: "team",
    },
    {
      text: (
        <>
          Operiamo in diversi ambiti, in particolar modo quello <strong>residenziale e industriale</strong>, offrendo soluzioni tecniche all&apos;avanguardia che
          rispondono a esigenze funzionali, estetiche e normative. La nostra presenza sul territorio del Nord e Centro Nord Italia
          (Lombardia, Veneto, Piemonte, Emilia-Romagna, Toscana), in particolare delle province di Brescia, Bergamo, Milano e altre zone
          limitrofe, ci permette di comprendere appieno le specificità normative e urbanistiche di ciascuna
          zona. Inoltre, abbiamo sviluppato competenze specifiche nell&apos;ambito della sicurezza antincendio, fornendo consulenza e progettazione secondo le più
          recenti disposizioni legislative e tecniche. Questa diversificazione ci consente di affrontare ogni progetto con una visione trasversale e consapevole,
          garantendo risultati di elevata qualità, pienamente conformi alle aspettative del cliente e alle normative vigenti.
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
      "Strutture in acciaio, cemento armato e muratura. Analisi FEM, verifiche sismiche e progettazione antincendio.",
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
    text: "Utilizziamo software specializzati e dedicati per ogni tipo di necessità progettuale: CAD, analisi strutturale FEM, calcolo strutturale, modellazione 3D e rendering, garantendo precisione e conformità normativa.",
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
    per verificare la copertura nella tua zona, oppure consulta le nostre pagine dedicate alla{" "}
    <Link
      href="/progettazione-strutture-acciaio-brescia"
      title="Progettazione strutture in acciaio a Brescia — Studio Capoferri"
      className="link-accent"
    >
      progettazione in acciaio a Brescia
    </Link>
    ,{" "}
    <Link
      href="/progettazione-strutture-acciaio-bergamo"
      title="Progettazione strutture in acciaio a Bergamo — Studio Capoferri"
      className="link-accent"
    >
      progettazione in acciaio a Bergamo
    </Link>{" "}
    e{" "}
    <Link
      href="/progettazione-strutture-acciaio-milano"
      title="Progettazione strutture in acciaio a Milano — Studio Capoferri"
      className="link-accent"
    >
      progettazione in acciaio a Milano
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
