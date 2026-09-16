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
          "Ingegneri e architetti stranieri, general contractor, fabricator europei — in particolare da Germania, Paesi Bassi e Belgio — e investitori che devono realizzare o coordinare opere in Italia e cercano uno studio strutturale di riferimento sul territorio.",
          "I confronti di progetto possono svolgersi in inglese direttamente con i nostri ingegneri — non solo con un referente commerciale.",
        ],
      },
      {
        id: "cosa-facciamo",
        heading: "Cosa offriamo",
        items: [
          ["Strutture in acciaio", "Ville, capannoni, sopraelevazioni e carpenterie speciali, dal calcolo agli esecutivi."],
          ["Disegni d'officina", "Tavole di fabbricazione e montaggio per carpenterie italiane ed europee."],
          ["Eurocodici e NTC", "Progettazione conforme alle norme italiane e agli Eurocodici, per partner che costruiscono in Italia."],
          ["Supporto in cantiere", "Assistenza al montaggio, chiarimenti esecutivi e direzione lavori strutturale."],
        ],
      },
      {
        id: "come-lavoriamo",
        heading: "Come lavoriamo a distanza",
        body: [
          "Partiamo da un brief chiaro (obiettivi, vincoli, tempi). Definiamo scope, deliverable e interfacce con il vostro team o il fabricator. Restiamo sul progetto dal calcolo al cantiere.",
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
      "English-speaking structural engineering in Northern Italy for partners in Germany, the Netherlands, Belgium and across the EU — steel structures, shop drawings and site support for projects built in Italy.",
    sections: [
      {
        id: "who",
        heading: "Who we work with",
        body: [
          "Foreign engineers and architects, general contractors, EU fabricators — especially from Germany, the Netherlands and Belgium — and investors who need a local structural partner for projects in Italy.",
          "Project discussions are handled in English by our engineers — not only the first commercial contact.",
        ],
      },
      {
        id: "offer",
        heading: "What we deliver",
        items: [
          ["Steel structures", "Villas, industrial halls, vertical extensions and specialist steelwork — from analysis to construction drawings."],
          ["Fabrication shop drawings", "Executive drawings for Italian and EU fabricators, aligned with erection sequences on site."],
          ["Eurocodes and NTC", "Design for works in Italy under Italian NTC and Eurocode frameworks."],
          ["Site support", "Erection assistance, clarification of details and structural construction supervision."],
        ],
      },
      {
        id: "remote",
        heading: "How remote coordination works",
        body: [
          "We start from a clear brief (goals, constraints, programme). We agree scope, deliverables and interfaces with your team or fabricator, then stay on the job from calculation through site support.",
          "Based in Adro near Brescia, we cover Lombardy (Brescia, Bergamo, Milan) and neighbouring Northern Italian regions with strong response times.",
        ],
      },
    ],
    ctaTitle: "Speak with our engineers in English",
    ctaDescription:
      "Tell us about scope, drawings and programme — you will receive a focused technical first reply from our engineering team.",
  },
} as const;
