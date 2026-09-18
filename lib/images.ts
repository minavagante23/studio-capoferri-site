/** Path pubblici dopo sync: cartella `assets/` → `public/assets/` (URL `/assets/...`) */

export const heroFirstImageSrc = "/assets/hero-struttura-new.webp";

/** Home Chi siamo: due viste dello stesso intervento (struttura / ombre). */
export const homeChiSiamoImages = {
  struttura: {
    src: "/assets/home-chi-siamo-struttura-acciaio-chiuduno.webp",
    alt: "Intradosso delle travature reticolari in acciaio a Chiuduno, progettazione strutturale Studio Capoferri",
    altEn:
      "Underside of steel lattice trusses in Chiuduno, structural design by Studio Capoferri",
  },
  cantiere: {
    src: "/assets/industriale/centro-raccolta-rifiuti-chiuduno/vista-interna-travature-ombre-chiuduno.jpeg",
    alt: "Vista interna con travature reticolari e ombre a Chiuduno, progettazione strutturale Studio Capoferri",
    altEn:
      "Interior view of steel lattice trusses and shadows in Chiuduno, structural design by Studio Capoferri",
  },
} as const;

export const chiSiamoPageImage = {
  src: "/assets/ingegneria-civile-e-ambientale-adro-chi-siamo.webp",
  alt: "Facciata di edificio con serramento a tutta altezza, progetto seguito da Studio Capoferri ad Adro, Brescia",
  altEn:
    "Building façade with full-height glazing on a project overseen by Studio Capoferri in Adro, Brescia",
} as const;

export const projectPreview = [
  {
    href: "/progetti/residenziali",
    title: "Strutture per il residenziale",
    caption: "Ville e case in acciaio",
    image: "/assets/progetti-ambito-residenziale.webp",
    alt: "Progetto residenziale con struttura in acciaio - Studio Capoferri, ingegneria strutturale in Lombardia",
  },
  {
    href: "/progetti/industriali",
    title: "Progetti per l'industria",
    caption: "Capannoni, carichi da carroponte, disegni d'officina",
    image: "/assets/progetto2.webp",
    alt: "Capannone industriale con struttura portante in acciaio, progetti industriali Studio Capoferri, provincia di Brescia",
  },
  {
    href: "/progetti/ricettivi",
    title: "Strutture per eventi",
    caption: "Mostre, seminari, convegni",
    image: "/assets/progetto-ricettivo.webp",
    alt: "Spazio per eventi Superstudio a Milano, progettazione strutturale per mostre e seminari, Studio Capoferri",
  },
] as const;
