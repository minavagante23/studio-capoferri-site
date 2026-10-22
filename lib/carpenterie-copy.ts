/** Copy for /progettazione-strutturale-per-carpenterie
 *  and /en/structural-design-for-steel-fabricators.
 */

/** Anonymized sample shop-drawing pack (cartigli cleaned). */
export const carpenterieDownloadHref: string | null =
  "/assets/downloads/studio-capoferri-esempi-elaborati-officina.zip";

export const carpenterieCopy = {
  it: {
    title: "Progettazione strutturale per carpenterie metalliche",
    lead:
      "Partner di progettazione per officine certificate EN 1090: dal calcolo agli elaborati firmati, al modello 3D e ai disegni d'officina (disegni di montaggio, assemblaggi e file NC per controllo numerico). Direzione lavori e pratiche, se richieste, si definiscono caso per caso.",
    downloadHeading: "Esempi di elaborati d'officina",
    downloadBody:
      "Esempi di tavole d'officina consegnate dallo studio. Solo a scopo di valutazione dello standard elaborati, non per uso costruttivo.",
    downloadLocked:
      "Potete scaricare gli esempi di elaborati compilando la",
    downloadCta: "Esempi elaborati (ZIP)",
    downloadSoon: "Pacchetto in preparazione",
    formHeading: "Richiesta di preventivo o collaborazione",
    formLead:
      "Compilate il modulo: dopo l'invio si sblocca il download degli esempi elaborati e la richiesta arriva allo studio.",
    sections: [
      {
        id: "cosa-facciamo",
        heading: "Cosa possiamo seguire per voi",
        items: [
          ["Calcolo strutturale", "Relazioni e elaborati secondo NTC / Eurocodici."],
          ["Modello 3D", "Modellazione per officina in Tekla Structures."],
          ["Disegni d'officina", "Disegni di montaggio, assemblaggi e file NC (controllo numerico)."],
          ["Continuità", "Rapporto di partner su più commesse, non solo un singolo incarico isolato."],
        ],
      },
      {
        id: "come-lavoriamo",
        heading: "Come lavoriamo con l'officina",
        body: [
          "Voi restate il riferimento per produzione e, tipicamente, per direzione lavori e pratiche verso committenza e enti. Noi consegniamo il pacchetto progettuale e costruttivo necessario a fabbricare e montare in sicurezza.",
        ],
      },
    ],
    faqHeading: "Domande frequenti",
    faq: [
      [
        "Potete mandare esempi di tavole d'officina?",
        "Sì: dopo l'invio della richiesta si sblocca il download di un pacchetto ZIP con tavole tipologiche (casa, scala, soppalco).",
      ],
      [
        "Lavorate con Tekla?",
        "Sì: usiamo Tekla Structures per modellazione e elaborati d'officina.",
      ],
      [
        "Seguite anche direzione lavori e pratiche?",
        "Spesso restano a carico dell'officina o del committente. Se servono, segnalatelo nella richiesta: si valuta per singola commessa.",
      ],
    ],
    form: {
      successTitle: "Richiesta inviata",
      successBody:
        "Vi risponderemo al più presto. Il download degli esempi di elaborati parte in automatico; se serve, potete ripeterlo dal pulsante qui sotto.",
      successDownload: "Scarica esempi elaborati (ZIP)",
      successDownloadStarted: "Download avviato…",
      company: "Azienda",
      name: "Nome e cognome",
      email: "Email",
      phone: "Telefono",
      location: "Luogo",
      scope: "Cosa chiedete allo studio",
      scopes: [
        { id: "calcolo", label: "Calcolo / elaborati firmati" },
        { id: "modello3d", label: "Modello 3D / Tekla" },
        { id: "officina", label: "Disegni d'officina" },
        { id: "altro", label: "Altro" },
      ],
      message: "Dettagli della richiesta",
      messagePlaceholder: "Scrivi qui i dettagli della tua richiesta",
      privacyLead: "Ho letto e accetto la",
      privacyLink: "privacy policy",
      submit: "Invia richiesta",
      submitting: "Invio in corso…",
      error: "Invio non riuscito. Riprova o scrivi a",
      errors: {
        name: "Inserisci nome e cognome.",
        email: "Email non valida.",
        message: "Messaggio troppo breve (min. 20 caratteri).",
        privacy: "Accetta la privacy per inviare.",
      },
    },
  },
  en: {
    title: "Structural design for steel fabricators",
    lead:
      "Design partner for EN 1090-certified workshops: analysis and digitally signed deliverables, 3D models and fabrication drawings (general arrangement, assemblies and NC files for numerical control). Site supervision and filings, where needed, are agreed case by case.",
    downloadHeading: "Sample fabrication drawings",
    downloadBody:
      "Examples of shop drawings delivered by the practice. For evaluation of drawing standard only, not for construction use.",
    downloadLocked: "You can download the sample drawings by completing the",
    downloadCta: "Sample drawings (ZIP)",
    downloadSoon: "Pack in preparation",
    formHeading: "Quote or collaboration enquiry",
    formLead:
      "Submit the form: the sample drawings download unlocks on screen, and the studio is notified.",
    sections: [
      {
        id: "what-we-do",
        heading: "What we can cover for you",
        items: [
          ["Structural analysis", "Reports and drawings to NTC / Eurocodes."],
          ["3D model", "Workshop modelling in Tekla Structures."],
          ["Shop drawings", "General arrangement drawings, assemblies and NC files (numerical control)."],
          ["Ongoing partner", "A working relationship across jobs, not only one-off commissions."],
        ],
      },
      {
        id: "how-we-work",
        heading: "How we work with the workshop",
        body: [
          "You typically remain the lead for fabrication and often for site supervision and filings. We deliver the design and fabrication package needed to manufacture and erect safely.",
        ],
      },
    ],
    faqHeading: "FAQ",
    faq: [
      [
        "Can you send sample shop drawings?",
        "Yes — after you send the enquiry, a ZIP download unlocks with typical drawings (house, stair, mezzanine).",
      ],
      [
        "Do you work in Tekla?",
        "Yes — we use Tekla Structures for modelling and fabrication drawings.",
      ],
      [
        "Do you also handle site supervision and filings?",
        "Often those stay with the fabricator or client. If you need them, say so in the enquiry — we assess per job.",
      ],
    ],
    form: {
      successTitle: "Enquiry sent",
      successBody:
        "We will get back to you shortly. The sample drawings download starts automatically; you can repeat it from the button below if needed.",
      successDownload: "Download sample drawings (ZIP)",
      successDownloadStarted: "Download started…",
      company: "Company",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      location: "Location",
      scope: "What you need from us",
      scopes: [
        { id: "calcolo", label: "Analysis / signed deliverables" },
        { id: "modello3d", label: "3D / Tekla" },
        { id: "officina", label: "Shop drawings" },
        { id: "altro", label: "Other" },
      ],
      message: "Request details",
      messagePlaceholder: "Write the details of your enquiry here",
      privacyLead: "I have read and accept the",
      privacyLink: "privacy policy",
      submit: "Send enquiry",
      submitting: "Sending…",
      error: "Send failed. Please try again or email",
      errors: {
        name: "Enter your full name.",
        email: "Invalid email.",
        message: "Message too short (min. 20 characters).",
        privacy: "Accept the privacy policy to send.",
      },
    },
  },
} as const;
