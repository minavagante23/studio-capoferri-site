/** Copy for /clienti-internazionali and /en/international-clients. */

export const internationalHub = {
  it: {
    title: "Clienti internazionali",
    lead:
      "Partner esteri e imprese UE che realizzano progetti in Italia: progettazione strutturale, strutture in acciaio, disegni d'officina e supporto in cantiere, con confronti tecnici in inglese.",
    sections: [
      {
        id: "per-chi",
        heading: "Per chi lavoriamo",
        body: [
          "Ingegneri e architetti stranieri, general contractor e fabricator europei, in particolare da Germania, Paesi Bassi, Belgio e Danimarca, che devono coordinare opere in Italia e cercano uno studio strutturale di riferimento sul territorio.",
          "Interveniamo spesso su carpenterie in capannoni e edifici industriali esistenti a Milano e nel Nord Italia: strutture secondarie, soppalchi e piattaforme per logistica, produzione, data center, clean room e altri fit-out tecnici.",
          "I confronti di progetto possono svolgersi in inglese direttamente con i nostri ingegneri, non solo con un referente commerciale.",
        ],
      },
      {
        id: "cosa-facciamo",
        heading: "Cosa offriamo",
        items: [
          [
            "Strutture in acciaio",
            "Ville, capannoni, sopraelevazioni, carpenterie speciali e strutture secondarie in edifici esistenti.",
          ],
          ["Disegni d'officina", "Tavole di fabbricazione e montaggio per carpenterie italiane ed europee."],
          [
            "Eurocodici e NTC",
            "Progettazione conforme alle norme italiane e agli Eurocodici, comprese le verifiche sismiche richieste per costruire in Italia.",
          ],
          ["Supporto in cantiere", "Assistenza al montaggio, chiarimenti esecutivi e direzione lavori strutturale."],
        ],
      },
      {
        id: "come-lavoriamo",
        heading: "Come lavoriamo a distanza",
        body: [
          "Partiamo da un brief chiaro (obiettivi, vincoli, carichi, tempi). Definiamo scope, deliverable e interfacce con il vostro team o il fabricator. Restiamo sul progetto dal calcolo al cantiere.",
          "Sede ad Adro (BS), nel Nord Italia, con copertura forte su Lombardia (Brescia, Bergamo, Milano) e regioni vicine.",
        ],
      },
    ],
    ctaTitle: "Scrivici in inglese o in italiano",
    ctaDescription:
      "Raccontaci il progetto: ti rispondiamo con una valutazione preliminare su fattibilità, tempi e percorso tecnico.",
  },
  en: {
    title: "International clients",
    lead:
      "English-speaking structural engineering in Northern Italy for partners in Germany, the Netherlands, Belgium, Denmark and across the EU, steel structures, shop drawings and site support for projects built in Italy.",
    sections: [
      {
        id: "who",
        heading: "Who we work with",
        body: [
          "Foreign engineers and architects, general contractors and EU fabricators, especially from Germany, the Netherlands, Belgium and Denmark, who need a local structural partner for projects in Italy.",
          "We often work on steelwork inside existing industrial buildings in Milan and Northern Italy: secondary structures, mezzanines and platforms for logistics, manufacturing, data centres, cleanrooms and other technical fit-outs.",
          "Project discussions are handled in English by our engineers, not only the first commercial contact.",
        ],
      },
      {
        id: "offer",
        heading: "What we deliver",
        items: [
          [
            "Steel structures",
            "Villas, industrial halls, vertical extensions, specialist steelwork and secondary structures in existing buildings.",
          ],
          [
            "Fabrication shop drawings",
            "Executive drawings for Italian and EU fabricators, aligned with erection sequences on site.",
          ],
          [
            "Eurocodes and NTC",
            "Design to Italian NTC and Eurocodes, including the seismic checks required for works built in Italy.",
          ],
          ["Site support", "Erection assistance, clarification of details and structural construction supervision."],
        ],
      },
      {
        id: "remote",
        heading: "How remote coordination works",
        body: [
          "We start from a clear brief (goals, constraints, loads, programme). We agree scope, deliverables and interfaces with your team or fabricator, then stay on the job from calculation through site support.",
          "Based in Adro near Brescia, we cover Lombardy (Brescia, Bergamo, Milan) and neighbouring Northern Italian regions with strong response times.",
        ],
      },
    ],
    ctaTitle: "Speak with our engineers in English",
    ctaDescription:
      "Tell us about scope, drawings and programme, you will receive a focused technical first reply from our engineering team.",
  },
} as const;
