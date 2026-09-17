/** Path pubblici dopo sync: cartella `assets/` → `public/assets/` (URL `/assets/...`) */

export const heroFirstImageSrc = "/assets/hero-struttura-new.webp";

export const homeChiSiamoImages = {
  team: {
    src: "/assets/home-chi-siamo-struttura-acciaio-chiuduno.webp",
    alt: "Intradosso delle travature reticolari in acciaio a Chiuduno — progettazione strutturale Studio Capoferri",
    altEn:
      "Underside of steel lattice trusses in Chiuduno — structural design by Studio Capoferri",
  },
  cantiere: {
    src: "/assets/home-chi-siamo-travature-ombre-chiuduno.webp",
    alt: "Dettaglio di tiranti e colonne reticolari in acciaio a Chiuduno — progettazione strutturale Studio Capoferri",
    altEn:
      "Detail of steel tension rods and lattice columns in Chiuduno — structural design by Studio Capoferri",
  },
} as const;

export const chiSiamoPageImage = {
  src: "/assets/ingegneria-civile-e-ambientale-adro-chi-siamo.webp",
  alt: "Team di ingegneri e architetti dello Studio Capoferri durante una riunione tecnica ad Adro, Brescia",
} as const;

export const projectPreview = [
  {
    href: "/progetti/residenziali",
    title: "Strutture per il residenziale",
    caption: "Strutture per il residenziale",
    image: "/assets/progetti-ambito-residenziale.webp",
    alt: "Progetto residenziale con struttura in acciaio — Studio Capoferri, ingegneria strutturale in Lombardia",
  },
  {
    href: "/progetti/industriali",
    title: "Progetti per l'industria",
    caption: "Progetti per l'industria",
    image: "/assets/progetto2.webp",
    alt: "Capannone industriale con struttura portante in acciaio — progetti industriali Studio Capoferri, provincia di Brescia",
  },
  {
    href: "/progetti/ricettivi",
    title: "Strutture per spazi pubblici",
    caption: "Strutture per spazi pubblici",
    image: "/assets/progetto-ricettivo.webp",
    alt: "Spazio per eventi Superstudio a Milano — progettazione strutturale per spazi pubblici e ricettivi, Studio Capoferri",
  },
] as const;
