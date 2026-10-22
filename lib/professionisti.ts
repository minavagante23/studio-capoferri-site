export type Professionista = {
  id: string;
  name: string;
  roleIt: string;
  roleEn: string;
  bioIt: string;
  bioEn: string;
  /** Omit when no public profile yet */
  linkedin?: string;
  src: string;
  altIt: string;
  altEn: string;
};

export const professionisti: Professionista[] = [
  {
    id: "luigi-capoferri",
    name: "Ing. Luigi Capoferri",
    roleIt: "Ingegnere civile strutturista",
    roleEn: "Structural civil engineer",
    bioIt:
      "Ingegnere civile strutturista in Studio Capoferri dal 2016. Si occupa di calcolo strutturale e supporto in cantiere su opere in acciaio, cemento armato e muratura. Professionista antincendio iscritto agli elenchi del Ministero dell'Interno.",
    bioEn:
      "Structural civil engineer at Studio Capoferri since 2016. He works on structural analysis and site support for steel, reinforced-concrete and masonry structures. Fire-safety professional listed with the Italian Ministry of the Interior.",
    linkedin: "https://www.linkedin.com/in/luigi-capoferri-318aab101",
    src: "/assets/professionisti/ingegner-luigi-capoferri.webp",
    altIt: "Ing. Luigi Capoferri, strutturista - Studio Capoferri",
    altEn: "Eng. Luigi Capoferri, structural engineer - Studio Capoferri",
  },
  {
    id: "chiara-rebessi",
    name: "Ing. Chiara Rebessi",
    roleIt: "Ingegnere edile",
    roleEn: "Building engineer",
    bioIt:
      "Ingegnere edile dal 2016. Segue la progettazione edilizia e strutturale, la modellazione 3D delle strutture e la produzione dei disegni di officina. Formazione in Ingegneria Edile-Architettura all'Università degli Studi di Brescia.",
    bioEn:
      "Building engineer since 2016. She works on building and structural design, 3D structural modelling and fabrication shop drawings. Degree in Building Engineering–Architecture from the University of Brescia.",
    linkedin: "https://www.linkedin.com/in/chiara-rebessi-80b298b7",
    src: "/assets/professionisti/ingegner-chiara-rebessi.webp",
    altIt: "Ing. Chiara Rebessi, ingegnere edile - Studio Capoferri",
    altEn: "Eng. Chiara Rebessi, building engineer - Studio Capoferri",
  },
];
