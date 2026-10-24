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
    id: "enzo-capoferri",
    name: "Ing. Enzo Capoferri",
    roleIt: "Ingegnere civile strutturista",
    roleEn: "Structural civil engineer",
    bioIt:
      "Socio fondatore dello Studio Associato Capoferri. Ingegnere civile con specializzazione in ambito strutturale. Si occupa di calcolo strutturale e supporto in cantiere su opere in acciaio, cemento armato e muratura. Svolge inoltre attività di progettazione edilizia e gestione delle relative pratiche autorizzative.",
    bioEn:
      "Founding partner of Studio Associato Capoferri. Civil engineer specialised in structural engineering. He works on structural analysis and site support for steel, reinforced-concrete and masonry structures. He also handles building design and related permitting procedures.",
    src: "/assets/professionisti/ingegner-enzo-capoferri.webp",
    altIt: "Ing. Enzo Capoferri, strutturista - Studio Capoferri",
    altEn: "Eng. Enzo Capoferri, structural engineer - Studio Capoferri",
  },
  {
    id: "franco-capoferri",
    name: "Arch. Franco Capoferri",
    roleIt: "Architetto",
    roleEn: "Architect",
    bioIt:
      "Socio fondatore dello Studio Associato Capoferri, si occupa principalmente di progettazione architettonica, edilizia e urbanistica. Le sue competenze comprendono anche la progettazione strutturale di opere in cemento armato e muratura.",
    bioEn:
      "Founding partner of Studio Associato Capoferri, he focuses mainly on architectural, building and urban design. His expertise also includes structural design of reinforced-concrete and masonry works.",
    src: "/assets/professionisti/architetto-franco-capoferri.webp",
    altIt: "Arch. Franco Capoferri, architetto - Studio Capoferri",
    altEn: "Arch. Franco Capoferri, architect - Studio Capoferri",
  },
  {
    id: "benedetta-capoferri",
    name: "Ing. Benedetta Capoferri",
    roleIt: "Ingegnere civile strutturista",
    roleEn: "Structural civil engineer",
    bioIt:
      "Ingegnere civile strutturista in Studio Capoferri. Si occupa di calcolo strutturale e supporto in cantiere su opere in acciaio, cemento armato e muratura, con attenzione al coordinamento tra progetto e realizzazione.",
    bioEn:
      "Structural civil engineer at Studio Capoferri. She works on structural analysis and site support for steel, reinforced-concrete and masonry structures, with a focus on coordination between design and construction.",
    src: "/assets/professionisti/ingegner-benedetta-capoferri.webp",
    altIt: "Ing. Benedetta Capoferri, strutturista - Studio Capoferri",
    altEn: "Eng. Benedetta Capoferri, structural engineer - Studio Capoferri",
  },
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
