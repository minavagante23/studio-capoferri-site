import type { ReactNode } from "react";

export const projectAreas = ["residenziali", "industriali", "ricettivi"] as const;
export type ProjectArea = (typeof projectAreas)[number];

export function isProjectArea(s: string): s is ProjectArea {
  return (projectAreas as readonly string[]).includes(s);
}

export type ProjectCasePreview = {
  slug: string;
  title: string;
  caption: string;
  cover: string;
  alt: string;
  href: string;
};

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
      "Progettazione strutturale residenziale: abitazioni unifamiliari, complessi e soluzioni innovative — Studio Capoferri.",
    heading: "Strutture residenziali",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          La progettazione strutturale in ambito residenziale richiede armonia tra comfort, funzionalità e integrazione architettonica.
          Realizziamo strutture per abitazioni unifamiliari, complessi residenziali e edifici multipiano, con attenzione alla qualità della vita e
          alle norme su sicurezza, sostenibilità ed efficienza energetica.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Ogni intervento è studiato sul contesto e sull&apos;identità architettonica desiderata, con un approccio personalizzato.
        </p>
      </>
    ),
    cases: [
      {
        slug: "villa-acciaio-veneto",
        title: "Residenza privata - Veneto",
        caption: "Residenza privata - Veneto",
        cover: "/assets/residenza-privata-acciaio.webp",
        alt: "Residenza privata in acciaio nel Veneto — progettazione strutturale Studio Capoferri",
        href: "/progetti/residenziali/villa-acciaio-veneto",
      },
      {
        slug: "villa-acciaio-salsomaggiore",
        title: "Villa in acciaio — Salsomaggiore Terme (PR)",
        caption: "Villa in acciaio - Salsomaggiore",
        cover: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
        alt: "Montaggio del telaio in carpenteria metallica — villa in acciaio a Salsomaggiore Terme",
        href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      },
    ],
  },
  industriali: {
    metaTitle: "Progetti in ambito industriale",
    metaDescription:
      "Strutture industriali in acciaio, capannoni e logistica — progettazione strutturale Studio Capoferri.",
    heading: "Strutture industriali",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          In ambito industriale la progettazione richiede soluzioni robuste e ad alte prestazioni. Affrontiamo edifici per produzione, stoccaggio e
          logistica, con tempi di esecuzione rapidi e ottimizzazione degli spazi. L&apos;acciaio è spesso il materiale strategico per resistenza,
          montaggio e adattamento a esigenze funzionali complesse.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Ogni progetto nasce dall&apos;analisi delle necessità operative del cliente e si sviluppa con soluzioni su misura, pensate per durare e
          accompagnare la crescita dell&apos;attività.
        </p>
      </>
    ),
    cases: [
      {
        slug: "capannone-erbusco",
        title: "Capannone industriale — Erbusco (BS)",
        caption: "Capannone industriale - Erbusco",
        cover: "/assets/industriale/capannone-erbusco/progettazione-strutture-adro.webp",
        alt: "Capannone industriale in acciaio a Erbusco (BS) — progettazione strutturale Studio Capoferri",
        href: "/progetti/industriali/capannone-erbusco",
      },
      {
        slug: "ampliamento-complesso-zootecnico",
        title: "Ampliamento complesso zootecnico",
        caption: "Complesso zootecnico",
        cover: "/assets/industriale/ampliamento-complesso-zootecnico/vista-aerea-ampliamento-complesso-zootecnico.webp",
        alt: "Vista aerea delle capriate metalliche per l'ampliamento di un complesso zootecnico",
        href: "/progetti/industriali/ampliamento-complesso-zootecnico",
      },
      {
        slug: "centro-direzionale-provaglio-diseo",
        title: "Centro direzionale — Provaglio d'Iseo (BS)",
        caption: "Centro direzionale - Provaglio d'Iseo (BS)",
        cover: "/assets/industriale/centro-direzionale-provaglio-diseo/vista-generale-soppalco-centro-direzionale-provaglio-diseo.webp",
        alt: "Soppalco in carpenteria metallica in fase di montaggio — centro direzionale a Provaglio d'Iseo (BS)",
        href: "/progetti/industriali/centro-direzionale-provaglio-diseo",
      },
    ],
  },
  ricettivi: {
    metaTitle: "Progetti ricettivi e spazi pubblici",
    metaDescription:
      "Progetti per spazi pubblici, ricettivo e manifestazioni — Superstudio e interventi strutturali Studio Capoferri.",
    heading: "Strutture per spazi pubblici",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Per i luoghi aperti al pubblico cerchiamo un equilibrio tra estetica, funzionalità e comfort. Le strutture che realizziamo pongono attenzione
          all&apos;esperienza degli utenti e alle norme di sicurezza e accessibilità.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Sviluppiamo soluzioni flessibili e innovative, studiate sull&apos;uso degli spazi e sull&apos;identità del luogo.
        </p>
      </>
    ),
    cases: [
      {
        slug: "superstudio-village",
        title: "Superstudio Village — Milano Bovisa",
        caption: "Superstudio Village - Milano Bovisa",
        cover: "/assets/progetto-superstudio.webp",
        alt: "Superstudio Village a Milano Bovisa — progettazione strutturale del complesso edilizio",
        href: "/progetti/ricettivi/superstudio-village",
      },
      {
        slug: "superstudio-maxi",
        title: "Superstudio Maxi — Famagosta",
        caption: "Superstudio Maxi - Famagosta",
        cover: "/assets/superstudio-maxi/antincendio-adro.webp",
        alt: "Superstudio Maxi a Milano Famagosta — recupero strutturale di capannone industriale",
        href: "/progetti/ricettivi/superstudio-maxi",
      },
    ],
  },
};

export type CaseStudyKey = `${ProjectArea}/${string}`;

export const projectCaseStudies: Record<
  CaseStudyKey,
  {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    body: ReactNode;
    gallery: { src: string; alt: string }[];
    externalBrand?: { href: string; imageSrc: string; imageAlt: string };
  }
> = {
  "residenziali/villa-acciaio-veneto": {
    metaTitle: "Residenza privata - Veneto",
    metaDescription:
      "Residenza privata in acciaio: progettazione strutturale e architettonica integrata — Studio Capoferri.",
    heading: "Residenza privata - Veneto",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Abbiamo progettato una villa che unisce innovazione, efficienza e design moderno. La struttura in acciaio garantisce resistenza, durata e
          sostenibilità, con ingegneria avanzata applicata all&apos;architettura residenziale.
        </p>
        <p className="copy-rhythm mb-6 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Il progetto mostra come la struttura possa integrarsi con la progettazione architettonica per un edificio funzionale e inserito nel paesaggio.
        </p>
        <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Struttura in acciaio</strong> — resistenza, leggerezza e tempi di costruzione contenuti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione integrata</strong> — spazi ottimizzati per vivibilità e integrazione paesaggistica.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Sostenibilità</strong> — efficienza energetica e standard ambientali elevati.
          </li>
        </ul>
      </>
    ),
    gallery: [
      {
        src: "/assets/residenziale/architettura-bergamo.webp",
        alt: "Volumi architettonici della residenza privata in acciaio nel Veneto",
      },
      {
        src: "/assets/residenziale/ingegneria-civile-brescia.webp",
        alt: "Montaggio della struttura in acciaio della villa residenziale nel Veneto",
      },
      {
        src: "/assets/residenziale/ingegneria-urbanistica.webp",
        alt: "Progettazione integrata della villa in acciaio con inserimento paesaggistico nel Veneto",
      },
      {
        src: "/assets/residenziale/progettazione-strutture-acciaio.webp",
        alt: "Interni con telaio in acciaio e grandi luci della residenza privata nel Veneto",
      },
      {
        src: "/assets/residenziale/progettazione-strutture-acciaio-franciacorta.webp",
        alt: "Dettaglio costruttivo della struttura portante in acciaio — residenza nel Veneto",
      },
      {
        src: "/assets/residenziale/strutture-acciaio-bergamo.webp",
        alt: "Carpenteria metallica in fase di realizzazione della villa in acciaio nel Veneto",
      },
      {
        src: "/assets/residenziale/studio-ingegneria-architettura-adro.webp",
        alt: "Cantiere della residenza privata in acciaio durante le fasi di costruzione nel Veneto",
      },
      {
        src: "/assets/residenziale/villa-acciaio-lusso.webp",
        alt: "Panoramica della struttura in acciaio integrata nel paesaggio veneto",
      },
    ],
  },
  "residenziali/villa-acciaio-salsomaggiore": {
    metaTitle: "Villa in acciaio — Salsomaggiore Terme (PR)",
    metaDescription:
      "Villa in acciaio a Salsomaggiore Terme: fondazioni su pali, struttura mista in cemento armato e acciaio, sistemi a secco — Studio Capoferri.",
    heading: "Villa in acciaio — Salsomaggiore Terme (PR)",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Studio Capoferri ha seguito la parte strutturale di un edificio residenziale in acciaio a{" "}
          <strong>Salsomaggiore Terme (PR)</strong>, dalla fase di progettazione alla costruzione. Le caratteristiche scadenti del terreno hanno
          richiesto una soluzione specifica: un sistema di <strong>fondazioni su pali</strong>, definito fin dalle prime fasi in coerenza con la
          struttura mista in cemento armato e acciaio prevista in elevazione.
        </p>
        <p className="copy-rhythm mb-6 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Sul basamento in calcestruzzo, con piano seminterrato parzialmente contro terra e nucleo del vano scala, si eleva il telaio in acciaio del
          piano primo e della copertura, progettata per accogliere una superficie integrale di pannelli fotovoltaici.
        </p>
        <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Fondazioni su pali</strong>: soluzione strutturale specifica per un terreno con caratteristiche scadenti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Carpenteria metallica</strong>: travi e pilastri definiscono i volumi con precisione millimetrica, unendo solidità e leggerezza.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Sistemi a secco</strong>: pareti con lana minerale ad alta densità per velocità d&apos;esecuzione e prestazioni termiche
            d&apos;eccellenza.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Efficienza energetica</strong>: copertura predisposta per l&apos;impianto fotovoltaico, cuore energetico dell&apos;abitazione.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione integrata</strong>: impianti e finiture eseguiti in parallelo, riducendo tempi morti e imprevisti di cantiere.
          </li>
        </ul>
      </>
    ),
    gallery: [
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/scavo-fondazioni-villa-acciaio-salsomaggiore.webp",
        alt: "Scavo e preparazione del terreno per le fondazioni — villa in acciaio a Salsomaggiore Terme (PR)",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/fondazioni-su-pali-villa-acciaio.webp",
        alt: "Getto di calcestruzzo delle fondazioni su pali — villa in acciaio a Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/murature-cemento-armato-seminterrato.webp",
        alt: "Murature in cemento armato del piano seminterrato e nucleo scala — Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/cantiere-villa-acciaio-salsomaggiore.webp",
        alt: "Vista del cantiere con fondazioni in cemento armato — villa in acciaio a Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
        alt: "Montaggio del telaio portante in carpenteria metallica — villa in acciaio a Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/struttura-acciaio-copertura-fotovoltaico.webp",
        alt: "Struttura in acciaio della copertura predisposta per pannelli fotovoltaici — Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/pareti-a-secco-lana-minerale-villa.webp",
        alt: "Posa delle pareti a secco con isolamento in lana minerale — villa in acciaio a Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/finiture-interne-cartongesso-villa-acciaio.webp",
        alt: "Finiture interne in cartongesso con posa impianti — villa in acciaio a Salsomaggiore Terme",
      },
      {
        src: "/assets/residenziale/villa-acciaio-salsomaggiore/finiture-esterne-terrazzo-villa-acciaio.webp",
        alt: "Finiture esterne e tracciature sul terrazzo a sbalzo — villa in acciaio a Salsomaggiore Terme",
      },
    ],
  },
  "industriali/capannone-erbusco": {
    metaTitle: "Capannone industriale — Erbusco (BS)",
    metaDescription:
      "Ampliamento zona produttiva per carpenteria metallica: struttura in acciaio, carroponti, pannelli sandwich — Studio Capoferri.",
    heading: "Capannone industriale — Erbusco (BS)",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Lo Studio Capoferri ha curato la <strong>progettazione strutturale, architettonica e urbanistica</strong> per l&apos;ampliamento della zona
          produttiva di un&apos;importante carpenteria metallica pesante a <strong>Erbusco (Brescia)</strong>.
        </p>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Progetto di ingegneria industriale avanzata per massimizzare efficienza operativa e sicurezza in un contesto produttivo intensivo. Il capannone
          è stato concepito per carichi pesanti e flussi di lavoro complessi.
        </p>
        <ul className="mb-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Struttura portante in acciaio</strong> — resistenza e affidabilità per l&apos;ambiente industriale.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione esecutiva</strong> — disegni costruttivi d&apos;officina per la realizzazione in acciaio.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Integrazione carroponti</strong> — struttura calcolata per <strong>due carroponti</strong> e movimentazione dei pezzi.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Efficienza e isolamento</strong> — <strong>pannelli sandwich</strong> per isolamento termico e acustico.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Gestione globale</strong> — urbanistica, architettura e calcoli strutturali esecutivi.
          </li>
        </ul>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          L&apos;ampliamento offre una zona produttiva più efficiente e duratura, in armonia con il contesto industriale bresciano.
        </p>
      </>
    ),
    gallery: [
      {
        src: "/assets/industriale/capannone-erbusco/capannone-industriale-erbusco.webp",
        alt: "Vista esterna del capannone industriale in acciaio a Erbusco (Brescia)",
      },
      {
        src: "/assets/industriale/capannone-erbusco/progettazione-strutture-adro.webp",
        alt: "Progettazione strutturale del capannone con carpenteria metallica — Erbusco (BS)",
      },
      {
        src: "/assets/industriale/capannone-erbusco/strutture-industriali-erbusco.webp",
        alt: "Telaio portante in acciaio del capannone industriale a Erbusco",
      },
      {
        src: "/assets/industriale/capannone-erbusco/vista-capannone-erbusco.webp",
        alt: "Panoramica dell'ampliamento produttivo in acciaio — capannone a Erbusco (BS)",
      },
      {
        src: "/assets/industriale/capannone-erbusco/strutture-industriali.webp",
        alt: "Dettaglio delle travi e connessioni strutturali del capannone industriale a Erbusco",
      },
      {
        src: "/assets/industriale/capannone-erbusco/ingegneria-civile-adro.webp",
        alt: "Interno del capannone industriale con struttura calcolata per carroponti — Erbusco (BS)",
      },
    ],
  },
  "industriali/ampliamento-complesso-zootecnico": {
    metaTitle: "Ampliamento complesso zootecnico",
    metaDescription:
      "Ampliamento con capriate metalliche a luce libera di quasi 16 metri: progettazione strutturale per complesso zootecnico — Studio Capoferri.",
    heading: "Ampliamento complesso zootecnico",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Intervenire sull&apos;esistente richiede equilibrio tra vincoli strutturali, logistica e continuità dell&apos;attività. Nel progetto di
          ampliamento di questo <strong>complesso zootecnico</strong>, l&apos;obiettivo era aumentare la superficie coperta e garantire la massima
          flessibilità interna.
        </p>
        <p className="copy-rhythm mb-6 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          La soluzione si concentra sullo sviluppo di <strong>nuove capriate metalliche</strong> con una luce libera di quasi{" "}
          <strong>16 metri</strong>. L&apos;assenza di sostegni intermedi permette di ottimizzare gli spazi per le esigenze operative del settore.
        </p>
        <ul className="mb-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Efficienza</strong>: grandi luci coperte con profili ottimizzati.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Velocità</strong>: tempi di montaggio ridotti per limitare l&apos;impatto sul sito.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Durabilità</strong>: soluzioni idonee a un contesto ambientale aggressivo.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Integrazione</strong>: perfetto innesto delle nuove opere sulle strutture preesistenti.
          </li>
        </ul>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          La progettazione strutturale non è solo calcolo. È lo strumento per trasformare le necessità del committente in soluzioni costruttive
          concrete.
        </p>
      </>
    ),
    gallery: [
      {
        src: "/assets/industriale/ampliamento-complesso-zootecnico/capriate-metalliche-grande-luce-complesso-zootecnico.webp",
        alt: "Capriate metalliche a grande luce in fase di montaggio — ampliamento complesso zootecnico",
      },
      {
        src: "/assets/industriale/ampliamento-complesso-zootecnico/carpenteria-metallica-basamento-cemento-zootecnico.webp",
        alt: "Carpenteria metallica su basamento in cemento armato — ampliamento complesso zootecnico",
      },
      {
        src: "/assets/industriale/ampliamento-complesso-zootecnico/vista-aerea-ampliamento-complesso-zootecnico.webp",
        alt: "Vista aerea delle nuove capriate metalliche integrate con le strutture preesistenti — complesso zootecnico",
      },
    ],
  },
  "industriali/centro-direzionale-provaglio-diseo": {
    metaTitle: "Centro direzionale — Provaglio d'Iseo (BS)",
    metaDescription:
      "Riqualificazione di edificio industriale a Provaglio d'Iseo (BS) come sede principale di un'importante azienda elettronica quotata in borsa — soppalco metallico oltre 5.000 mq.",
    heading: "Centro direzionale — Provaglio d'Iseo (BS)",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          L&apos;intervento riguarda la riqualificazione di un edificio industriale a <strong>Provaglio d&apos;Iseo (BS)</strong>, destinato a diventare
          la <strong>sede principale</strong> di un&apos;importante azienda del settore elettronica quotata in borsa, con uffici, laboratori e spazi di
          lavoro.
        </p>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Il progetto è partito da una base definitiva sviluppata dal progettista generale. Lo Studio Capoferri ha concentrato il proprio contributo su
          un&apos;ottimizzazione a 360°, adattando le soluzioni progettuali alle reali dinamiche costruttive del cantiere.
        </p>
        <p className="copy-rhythm mb-6 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Il cuore dell&apos;intervento è un <strong>soppalco in carpenteria metallica di oltre 5.000 mq</strong>, integrato nella struttura esistente
          per ampliarne la superficie utile. L&apos;attività ha riguardato:
        </p>
        <ul className="mb-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Ottimizzazione strutturale e geometrica</strong> delle carpenterie.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Coordinamento</strong> con le condizioni dell&apos;edificio preesistente.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Sviluppo dei dettagli costruttivi ed esecutivi</strong> necessari alla produzione.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Razionalizzazione delle fasi di montaggio</strong> per garantire fluidità operativa.
          </li>
        </ul>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Il confronto costante tra progettazione e costruzione ha permesso di sviluppare soluzioni efficienti e coerenti con la realtà del cantiere.
        </p>
      </>
    ),
    gallery: [
      {
        src: "/assets/industriale/centro-direzionale-provaglio-diseo/vista-generale-soppalco-centro-direzionale-provaglio-diseo.webp",
        alt: "Vista generale del soppalco in carpenteria metallica integrato nell'edificio esistente — Provaglio d'Iseo (BS)",
      },
      {
        src: "/assets/industriale/centro-direzionale-provaglio-diseo/carpenteria-metallica-soppalco-provaglio-diseo.webp",
        alt: "Montaggio del soppalco in acciaio con connessioni strutturali e lamiera grecata — centro direzionale Provaglio d'Iseo (BS)",
      },
      {
        src: "/assets/industriale/centro-direzionale-provaglio-diseo/progettazione-strutture-acciaio-industriali.jpeg",
        alt: "Apertura in copertura e carpenteria metallica sul piano del soppalco — centro direzionale Provaglio d'Iseo (BS)",
      },
      {
        src: "/assets/industriale/centro-direzionale-provaglio-diseo/strutture-in-acciaio-soppalco-direzionale.jpeg",
        alt: "Travi e capriate in acciaio integrate nella struttura preesistente — soppalco Provaglio d'Iseo (BS)",
      },
      {
        src: "/assets/industriale/centro-direzionale-provaglio-diseo/vista-copertura-progettazione-acciaio.jpeg",
        alt: "Vista dal basso dell'orditura metallica in fase di montaggio — centro direzionale Provaglio d'Iseo (BS)",
      },
    ],
  },
  "ricettivi/superstudio-village": {
    metaTitle: "Superstudio Village — Milano Bovisa",
    metaDescription:
      "Progettazione strutturale per complesso a Milano Bovisa: consolidamenti, demolizioni e ricostruzioni in acciaio e misto — Studio Capoferri.",
    heading: "Superstudio Village — Milano Bovisa",
    externalBrand: {
      href: "https://www.superstudioevents.com/it/",
      imageSrc: "/assets/superstudio_logo.svg",
      imageAlt: "Logo Superstudio Events",
    },
    body: (
      <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
        L&apos;attività di <strong>progettazione strutturale</strong> ha riguardato un complesso edilizio a <strong>Milano Bovisa</strong> per{" "}
        <a
          href="https://www.superstudioevents.com/it/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#2a3f54] underline underline-offset-2"
        >
          Superstudio Events S.r.l.
        </a>
        , costituito da sei edifici con differenti tipologie di intervento. I lavori sono iniziati nel 2023. In due edifici sono stati previsti interventi
        di consolidamento strutturale di volte e copertura. Un edificio è stato demolito e ricostruito con nuova struttura in acciaio (altezza massima
        circa 16 m). Un altro è stato ricostruito con struttura mista in cemento armato e muratura portante; un ulteriore fabbricato con muratura
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
        alt: "Dettaglio della struttura in acciaio pre-fabbricata — Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-vista-della-struttura.webp",
        alt: "Facciata e volumi del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-pavimentazione-interni.webp",
        alt: "Pavimentazione e finitura degli spazi interni — Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-ricerca-innovazione.webp",
        alt: "Render esterno del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-innovazione-tecnologica.webp",
        alt: "Sala proiezioni con struttura portante — Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp",
        alt: "Montaggio della struttura interna in acciaio — Superstudio Village Milano",
      },
      {
        src: "/assets/superstudio-village-eventi.webp",
        alt: "Sala eventi del complesso Superstudio Village a Milano Bovisa",
      },
      {
        src: "/assets/superstudio-village-sala-proiezione.webp",
        alt: "Sala proiezione con copertura e struttura in acciaio — Superstudio Village Milano",
      },
    ],
  },
  "ricettivi/superstudio-maxi": {
    metaTitle: "Superstudio Maxi — Famagosta",
    metaDescription:
      "Recupero capannone industriale a Milano Famagosta: adeguamento sismico, strutture in acciaio e sicurezza — Studio Capoferri.",
    heading: "Superstudio Maxi — Famagosta",
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
        alt: "Vista esterna del recupero del capannone industriale — Superstudio Maxi Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/ingegneria-urbanistica-franciacorta.webp",
        alt: "Area interna con strutture consolidate — Superstudio Maxi Milano",
      },
      {
        src: "/assets/superstudio-maxi/progettazione-industriale-ricettivo.webp",
        alt: "Pavimentazione degli spazi espositivi — Superstudio Maxi Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/sicurezza-cantieri-franciacorta.webp",
        alt: "Render esterno del complesso Superstudio Maxi a Milano Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/strutture-acciaio-milano.webp",
        alt: "Sala proiezioni con nuova struttura in acciaio — Superstudio Maxi Milano",
      },
      {
        src: "/assets/superstudio-maxi/studio-ingegneria-brescia.webp",
        alt: "Dettaglio strutturale interno del complesso Superstudio Maxi a Milano",
      },
      {
        src: "/assets/superstudio-maxi/strutture-acciaio-milano-brescia.webp",
        alt: "Sala eventi con copertura in acciaio — Superstudio Maxi Famagosta",
      },
      {
        src: "/assets/superstudio-maxi/architettura-urbanistica-brescia.webp",
        alt: "Sala proiezione del complesso Superstudio Maxi a Milano Famagosta",
      },
    ],
  },
};

export function getCaseStudyKey(area: ProjectArea, slug: string): CaseStudyKey | null {
  const k = `${area}/${slug}` as CaseStudyKey;
  return k in projectCaseStudies ? k : null;
}
