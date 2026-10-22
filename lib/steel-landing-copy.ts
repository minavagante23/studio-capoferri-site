/** Shared EN copy + IT why-bullets for steel city landings. */

export const steelLandingCopyEn = {
  heroTitle: (city: string) => `Structural engineer in ${city} for steel buildings`,
  process:
    "From structural calculations in accordance with NTC 2018 and Eurocodes to fabrication shop drawings, site supervision and final testing, we follow every phase of the project, from the initial idea through to the construction site.",
  whyTitle: "Why choose a steel structure",
  whyBullets: [
    ["Seismic performance", "lightness and ductility make steel ideal in seismic areas."],
    ["Faster construction", "steelwork is prefabricated in the workshop and dry-assembled on site."],
    ["Architectural freedom", "large spans, cantilevers and open volumes without intermediate columns."],
    ["Vertical extensions", "reduced weight makes steel ideal for adding levels to existing buildings."],
    ["Sustainability", "fully recyclable material suitable for high-efficiency envelopes and PV-ready roofs."],
  ] as const,
  scopeTitle: "What we design: from residential to industrial",
  scopeLead:
    "We design steel structures for every intended use: villas and private residences, multi-storey buildings, industrial sheds with overhead cranes, commercial buildings and event spaces. Some recent projects include:",
  faqTitle: "Questions for a structural engineer",
  cities: {
    brescia: {
      introLead:
        "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. From our base in Adro, in the province of Brescia and in the heart of Franciacorta, we design steel villas, industrial buildings, vertical extensions and steelwork structures throughout Lombardy and Northern Italy.",
      areaHeading: "Where we work: Brescia, Bergamo, Milan and all of Lombardy",
      areaBody:
        "The practice is based in Adro, in the province of Brescia, in a strategic position between Franciacorta, Val Calepio and Lake Iseo. We can respond quickly across Brescia and its province, including Franciacorta, Val Trompia, the Brescia side of Lake Garda and the Brescia plain, and throughout Lombardy: Bergamo, Milan, Monza, Cremona, Mantua, Lecco and Como.",
      areaBodySecondary:
        "For projects outside the region, we also work regularly in Veneto, Piedmont and Emilia-Romagna.",
      ctaHeading: "Do you have a steel project in Brescia or Lombardy?",
      faqAreaAnswer:
        "Yes. Our office is based in Adro, in the province of Brescia, and we operate throughout Lombardy, including Brescia, Bergamo and Milan and their respective provinces, as well as in Veneto, Piedmont and Emilia-Romagna.",
      featuredProjects: [
        ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
        ["Steel villa in Salsomaggiore Terme (PR)", "piled foundations, steel frame and full photovoltaic roof"],
        ["Private steel residence in Pollenza (MC)", "integrated structural and architectural design"],
        ["Superstudio Village in Milan", "new steel structure around 16 metres high and structural strengthening works"],
      ] as const,
    },
    bergamo: {
      introLead:
        "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. From our base in Adro (Brescia), just a short distance from the province of Bergamo, we design steel villas, industrial buildings, vertical extensions and steelwork structures across Bergamo, Lombardy and Northern Italy.",
      areaHeading: "Where we work: Bergamo, Brescia, Milan and all of Lombardy",
      areaBody:
        "The practice is located in Adro (Brescia), on the border with the province of Bergamo, in a strategic position between Franciacorta and Val Calepio. We can respond quickly across Bergamo and its province, including Val Seriana, Val Brembana, Isola Bergamasca and the Bergamo plain, and throughout Lombardy: Brescia, Milan, Monza, Cremona, Mantua, Lecco and Como.",
      areaBodySecondary:
        "For projects outside the region, we also work regularly in Veneto, Piedmont and Emilia-Romagna.",
      ctaHeading: "Do you have a steel project in Bergamo or Lombardy?",
      faqAreaAnswer:
        "Yes. Our office is based in Adro (Brescia), on the border with the province of Bergamo, and we operate throughout Lombardy, including Bergamo, Brescia and Milan and their respective provinces, as well as in Veneto, Piedmont and Emilia-Romagna.",
      featuredProjects: [
        ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
        ["Steel villa in Salsomaggiore Terme (PR)", "piled foundations, steel frame and full photovoltaic roof"],
        ["Private steel residence in Pollenza (MC)", "integrated structural and architectural design"],
        ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high and structural strengthening works"],
      ] as const,
    },
    milano: {
      introLead:
        "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. We design steel villas, industrial buildings, vertical extensions and steelwork structures in Milan, across the wider Milan hinterland and throughout Lombardy, with work on public venues, residential buildings and industrial facilities.",
      areaHeading: "Where we work: Milan, Brescia, Bergamo and all of Lombardy",
      areaBody:
        "We operate across the city of Milan and its province, including Bovisa, Famagosta and the northern and southern hinterland, as well as Monza Brianza and the wider metropolitan area. Our office in Adro (Brescia) is strategically positioned for quick access to Milanese construction sites and also supports projects across Brescia, Bergamo, Cremona, Mantua, Lecco and Como.",
      areaBodySecondary:
        "Among the most significant projects in Milan are Superstudio Village in Bovisa and Superstudio Maxi in Famagosta, involving steel structures, strengthening works and seismic upgrading.",
      ctaHeading: "Do you have a steel project in Milan or Lombardy?",
      faqAreaAnswer:
        "Yes. We work regularly across Milan and its province, as well as Brescia, Bergamo and the whole of Lombardy. Our base in Adro (Brescia) allows rapid intervention across the wider Milan metropolitan area and throughout Northern Italy.",
      featuredProjects: [
        ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high, strengthening and reconstruction works"],
        ["Superstudio Maxi in Famagosta", "conversion of an industrial shed with seismic upgrading and new steel structures"],
        ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
        ["Steel villa in Salsomaggiore Terme (PR)", "piled foundations, steel frame and full photovoltaic roof"],
      ] as const,
    },
  },
  faqFixed: [
    [
      "How much does a structural engineer charge for a steel building?",
      "Costs depend on size, complexity and the intended use of the building. After an initial inspection or technical call, we provide a detailed, no-obligation quotation for structural design, fabrication drawings and site supervision.",
    ],
    [
      "What advantages does steel offer compared with reinforced concrete?",
      "Steel combines lightness, seismic performance, faster site operations through workshop prefabrication and major architectural flexibility. It is also recyclable and well suited to sustainable construction.",
    ],
    [
      "Do you also handle construction supervision and steel erection support?",
      "Yes. We follow the full process: structural calculations to NTC 2018 and Eurocodes, fabrication drawings, site erection assistance and structural site supervision up to final testing.",
    ],
    [
      "Can a steel extension be added on top of an existing building?",
      "Yes. The low self-weight of steel makes it ideal for vertical extensions. We first verify the structural suitability of the existing building, then design the new addition while minimising extra loads.",
    ],
  ] as const,
} as const;

export const steelWhyIt = [
  ["Resistenza sismica", "leggerezza e duttilità rendono l'acciaio ideale nelle zone sismiche della Lombardia."],
  ["Tempi di cantiere ridotti", "la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere."],
  ["Libertà architettonica", "grandi luci, sbalzi e volumi aperti senza pilastri intermedi."],
  ["Sopraelevazioni", "il peso contenuto consente di ampliare in altezza edifici esistenti."],
  ["Sostenibilità", "materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture fotovoltaiche."],
] as const;

export type SteelLandingCitySlug = keyof typeof steelLandingCopyEn.cities;
