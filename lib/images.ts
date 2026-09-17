/** Path pubblici dopo sync: cartella `assets/` → `public/assets/` (URL `/assets/...`) */

export const heroFirstImageSrc = "/assets/hero-struttura-new.webp";

export const homeChiSiamoImages = {
  team: {
    src: "/assets/ingegneria-progettazione-brescia.webp",
    alt: "Ingegneri strutturisti dello Studio Capoferri durante una riunione tecnica — studio di ingegneria civile a Brescia, Bergamo e Milano",
    altEn:
      "Studio Capoferri structural engineers during a technical meeting — civil engineering practice serving Brescia, Bergamo and Milan",
  },
  cantiere: {
    src: "/assets/sicurezza-cantiere.webp",
    alt: "Sicurezza in cantiere e pianificazione — Studio Capoferri Nord Italia, province di Brescia, Bergamo e Milano",
    altEn:
      "Site safety and planning — Studio Capoferri Northern Italy, provinces of Brescia, Bergamo and Milan",
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
