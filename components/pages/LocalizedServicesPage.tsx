"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { localizeHref } from "@/lib/i18n";
import { servicesPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, steelLandingPages } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedServicesPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const sectionHeading = `font-display ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`;
  const servicesLd = servicesPageJsonLd(locale);

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <article className="home-plate home-plate--well">
              <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>Servizi</h1>
              <p className={ui.body}>
                <strong>Studio Capoferri</strong> offre una gamma completa di servizi di ingegneria, architettura e consulenza tecnica a 360 gradi.
                Affianchiamo i clienti in ogni fase del progetto, garantendo qualità, precisione e soluzioni su misura.
              </p>

              <h2 id="progettazione-strutturale" className={sectionHeading}>Progettazione strutturale</h2>
              <p className={`mb-4 ${ui.bodyMuted}`}>
                Progettiamo strutture in acciaio, calcestruzzo e muratura per committenti in Lombardia e Nord Italia. Approfondimenti per area:{" "}
                {steelLandingPages.map((page, index) => (
                  <span key={page.href}>
                    {index > 0 ? (index === steelLandingPages.length - 1 ? " e " : ", ") : null}
                    <Link href={localizeHref(page.href, locale)} className="link-accent">
                      {page.label.replace("Progettazione acciaio — ", "")}
                    </Link>
                  </span>
                ))}
                .
              </p>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Strutture metalliche, cemento armato e muratura</strong> - Progettazione strutture NTC ed Eurocodici.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Modellazione FEM</strong> - Analisi agli elementi finiti per valutazioni statiche e dinamiche di strutture complesse.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Modellazione BIM</strong> - Modellazione informativa degli edifici per coordinamento progettuale, controllo interferenze e scambio dati con committenti e imprese.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Progettazione in condizioni di incendio</strong> - Verifiche di resistenza al fuoco per strutture portanti secondo normativa vigente.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Rinforzo e miglioramento sismico</strong> - Opere di rinforzo strutturale e miglioramento sismico per edifici esistenti. Interventi studiati per aumentare la sicurezza, la resistenza sismica e prolungare la vita utile delle strutture, in conformità con le normative tecniche vigenti.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Strutture civili e industriali</strong> - Sviluppo di soluzioni strutturali per edifici residenziali, commerciali, industriali e infrastrutture.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Disegni costruttivi d&apos;officina</strong> - Produzione di tavole esecutive per la fabbricazione e il montaggio delle strutture metalliche.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Collaudi strutturali</strong> - Verifica di conformità statica per opere nuove o esistenti.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Certificazioni strutture in ambienti di lavoro</strong> - Analisi e validazione di sicurezza per strutture soggette a normative su ambienti lavorativi.</li>
              </ul>

              <h2 id="urbanistica-architettura" className={sectionHeading}>Urbanistica e architettura</h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Progettazione architettonica</strong> - Sviluppo di soluzioni estetico-funzionali per nuove costruzioni, ristrutturazioni e riqualificazioni.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Urbanistica</strong> - Piani attuativi, varianti urbanistiche, analisi di conformità agli strumenti di pianificazione.</li>
              </ul>

              <h2 id="direzione-lavori" className={sectionHeading}>Direzione lavori e consulenza</h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Direzione lavori strutturali</strong> - Supervisione tecnica delle fasi di costruzione per garantire qualità e rispetto dei progetti.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Assistenza in cantiere</strong> - Supporto continuo alle imprese durante montaggi, modifiche e verifiche tecniche.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Verifiche strutturali su edifici esistenti</strong> - Diagnostica e valutazione della sicurezza e idoneità statica di costruzioni esistenti.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Relazioni tecniche e perizie</strong> - Redazione di relazioni asseverate, perizie giurate e consulenze tecniche di parte (CTP).</li>
              </ul>

              <h2 id="servizi-tecnici" className={sectionHeading}>Servizi tecnici e catastali</h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Pratiche edilizie</strong> - Redazione pratiche edilizie di permessi di costruire, SCIA, CILA e sanatorie.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Pratiche catastali</strong> - Volture, frazionamenti, accatastamenti, variazioni catastali e correzioni dati.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Pratiche per la Sovrintendenza ai Beni Culturali</strong> - Redazione di documentazione tecnica e supporto nelle richieste di autorizzazione per immobili vincolati.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Collaudi amministrativi</strong> - Verifica della regolarità tecnico-amministrativa di opere pubbliche e private.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Successioni e divisioni</strong> - Assistenza tecnica e documentale in pratiche di successione ereditaria e divisione patrimoniale.</li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Certificazioni energetiche (APE)</strong> - Redazione dell&apos;Attestato di Prestazione Energetica degli edifici, valutazione delle prestazioni energetiche e classificazione energetica secondo la normativa vigente.</li>
              </ul>

              <h2 id="sicurezza-cantieri" className={sectionHeading}>Sicurezza cantieri</h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Sicurezza cantieri</strong> - Coordinamento della sicurezza in fase di progettazione ed esecuzione (CSP e CSE), piani di sicurezza e gestione rischi.</li>
              </ul>

              <h2 id="assistenza-immobiliare" className={sectionHeading}>Assistenza immobiliare</h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Assistenza immobiliare</strong> - Supporto tecnico per compravendite, perizie, stime immobiliari e valutazione dello stato di fatto.</li>
              </ul>
            </article>
            <ContactCtaSection
              locale="it"
              title="Cerchi supporto tecnico per il tuo progetto?"
              description="Contattaci per una valutazione preliminare: ti indichiamo tempi, iter autorizzativi e il percorso progettuale più adatto."
              className="mt-10 sm:mt-14"
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="home-plate home-plate--well">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{isEn ? "Services" : "Servizi"}</h1>

            {isEn ? (
              <>
                <p className={ui.body}>
                  <strong>Studio Capoferri</strong> specialises in <strong>structural and steel engineering</strong>: FEM analysis, BIM modelling, Eurocode-compliant
                  design, fabrication shop drawings and construction supervision for industrial and civil projects. Architecture, planning and
                  Italy-based administrative services are available when the brief requires them. Overseas partners: see{" "}
                  <Link href={localizeHref("/clienti-internazionali", "en")} title={linkTitles.international("en")} className="link-accent">
                    International clients
                  </Link>
                  .
                </p>

                <h2 id="progettazione-strutturale" className={sectionHeading}>Structural design</h2>
                <p className={`mb-4 ${ui.bodyMuted}`}>
                  We design steel, reinforced-concrete and masonry structures for clients across Lombardy, Northern Italy and international partners
                  working on projects in Italy. Area-specific insights:{" "}
                  {steelLandingPages.map((page, index) => (
                    <span key={page.href}>
                      {index > 0 ? (index === steelLandingPages.length - 1 ? " and " : ", ") : null}
                      <Link href={localizeHref(page.href, locale)} className="link-accent">
                        {page.label.replace("Progettazione acciaio — ", "").replace("Milano", "Milan")}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Steel structures</strong> - Structural design of steel buildings and specialist steelwork to NTC standards and Eurocodes.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>FEM modelling</strong> - Finite-element analysis for static and dynamic assessment of complex structures.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>BIM modelling</strong> - Building information modelling for design coordination, clash detection and data exchange with clients and contractors.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Fabrication shop drawings</strong> - Production of executive drawings for the fabrication and erection of steel structures.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Reinforced-concrete and masonry structures</strong> - Structural design for civil and industrial buildings alongside steel solutions.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Design in fire conditions</strong> - Fire-resistance verification for load-bearing structures in accordance with current regulations.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Seismic strengthening and upgrading</strong> - Structural strengthening and seismic-improvement works for existing buildings, designed to increase safety, seismic resistance and service life in accordance with current technical regulations.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Structural testing and certification</strong> - Verification of structural compliance for new and existing works.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Structural certification for workplaces</strong> - Safety analysis and validation for structures subject to workplace regulations.</li>
                </ul>

                <h2 id="direzione-lavori" className={sectionHeading}>Construction supervision and consultancy</h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Structural site supervision</strong> - Technical supervision of construction phases to ensure quality and compliance with the design.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>On-site assistance</strong> - Continuous support to contractors during erection, changes and technical checks.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Structural checks on existing buildings</strong> - Diagnostics and assessment of the safety and structural suitability of existing constructions.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Technical reports and expert assessments</strong> - Preparation of certified reports, sworn expert opinions and party-appointed technical consultancy.</li>
                </ul>

                <h2 id="sicurezza-cantieri" className={sectionHeading}>Site safety</h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Site safety</strong> - Safety coordination during both design and construction phases (CSP and CSE), safety plans and risk management.</li>
                </ul>

                <h2 id="urbanistica-architettura" className={sectionHeading}>Planning and architecture</h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Architectural design</strong> - Development of aesthetic and functional solutions for new buildings, refurbishments and redevelopment works.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Urban planning</strong> - Implementation plans, planning variations and compliance analysis against local planning instruments.</li>
                </ul>

                <h2 id="servizi-tecnici" className={sectionHeading}>Italy-based technical and cadastral services</h2>
                <p className={`mb-4 ${ui.bodyMuted}`}>
                  These procedures apply to projects located in Italy (building permits, cadastre and related filings):
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Building applications</strong> - Preparation of permit applications, SCIA, CILA and retrospective regularisation files.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Cadastral procedures</strong> - Transfers, subdivisions, registrations, cadastral updates and data corrections.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Heritage authority procedures</strong> - Preparation of technical documentation and support for authorisation requests concerning protected properties.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Administrative testing</strong> - Verification of the technical and administrative regularity of public and private works.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Inheritance and division procedures</strong> - Technical and documentary support for inheritance and property-division matters.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Energy performance certificates (APE)</strong> - Preparation of building energy performance certificates, assessment of energy performance and energy classification in accordance with current regulations.</li>
                </ul>

                <h2 id="assistenza-immobiliare" className={sectionHeading}>Property support</h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Property support</strong> - Technical assistance for transactions, expert valuations, property appraisals and assessment of the existing condition.</li>
                </ul>
              </>
            ) : (
              <>
                <p className={ui.body}>
                  <strong>Studio Capoferri</strong> offre una gamma completa di servizi di ingegneria, architettura e consulenza tecnica a 360 gradi.
                  Affianchiamo i clienti in ogni fase del progetto, garantendo qualità, precisione e soluzioni su misura.
                </p>

                <h2 id="progettazione-strutturale" className={sectionHeading}>
                  Progettazione strutturale
                </h2>
                <p className={`mb-4 ${ui.bodyMuted}`}>
                  Progettiamo strutture in acciaio, calcestruzzo e muratura per committenti in Lombardia e Nord Italia. Approfondimenti per area:{" "}
                  {steelLandingPages.map((page, index) => (
                    <span key={page.href}>
                      {index > 0 ? (index === steelLandingPages.length - 1 ? " e " : ", ") : null}
                      <Link href={localizeHref(page.href, locale)} className="link-accent">
                        {page.label.replace("Progettazione acciaio — ", "")}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Strutture metalliche, cemento armato e muratura</strong> - Progettazione strutture NTC ed Eurocodici.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Modellazione FEM</strong> - Analisi agli elementi finiti per valutazioni statiche e dinamiche di strutture complesse.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Modellazione BIM</strong> - Modellazione informativa degli edifici per coordinamento progettuale, controllo interferenze e scambio dati con committenti e imprese.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Progettazione in condizioni di incendio</strong> - Verifiche di resistenza al fuoco per strutture portanti secondo normativa vigente.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Rinforzo e miglioramento sismico</strong> - Opere di rinforzo strutturale e miglioramento sismico per edifici esistenti. Interventi studiati per aumentare la sicurezza, la resistenza sismica e prolungare la vita utile delle strutture, in conformità con le normative tecniche vigenti.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Strutture civili e industriali</strong> - Sviluppo di soluzioni strutturali per edifici residenziali, commerciali, industriali e infrastrutture.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Disegni costruttivi d&apos;officina</strong> - Produzione di tavole esecutive per la fabbricazione e il montaggio delle strutture metalliche.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Collaudi strutturali</strong> - Verifica di conformità statica per opere nuove o esistenti.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Certificazioni strutture in ambienti di lavoro</strong> - Analisi e validazione di sicurezza per strutture soggette a normative su ambienti lavorativi.
                  </li>
                </ul>

                <h2 id="urbanistica-architettura" className={sectionHeading}>
                  Urbanistica e architettura
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Progettazione architettonica</strong> - Sviluppo di soluzioni estetico-funzionali per nuove costruzioni, ristrutturazioni e riqualificazioni.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Urbanistica</strong> - Piani attuativi, varianti urbanistiche, analisi di conformità agli strumenti di pianificazione.
                  </li>
                </ul>

                <h2 id="direzione-lavori" className={sectionHeading}>
                  Direzione lavori e consulenza
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Direzione lavori strutturali</strong> - Supervisione tecnica delle fasi di costruzione per garantire qualità e rispetto dei progetti.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Assistenza in cantiere</strong> - Supporto continuo alle imprese durante montaggi, modifiche e verifiche tecniche.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Verifiche strutturali su edifici esistenti</strong> - Diagnostica e valutazione della sicurezza e idoneità statica di costruzioni esistenti.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Relazioni tecniche e perizie</strong> - Redazione di relazioni asseverate, perizie giurate e consulenze tecniche di parte (CTP).
                  </li>
                </ul>

                <h2 id="servizi-tecnici" className={sectionHeading}>
                  Servizi tecnici e catastali
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Pratiche edilizie</strong> - Redazione pratiche edilizie di permessi di costruire, SCIA, CILA e sanatorie.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Pratiche catastali</strong> - Volture, frazionamenti, accatastamenti, variazioni catastali e correzioni dati.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Pratiche per la Sovrintendenza ai Beni Culturali</strong> - Redazione di documentazione tecnica e supporto nelle richieste di autorizzazione per immobili vincolati.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Collaudi amministrativi</strong> - Verifica della regolarità tecnico-amministrativa di opere pubbliche e private.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Successioni e divisioni</strong> - Assistenza tecnica e documentale in pratiche di successione ereditaria e divisione patrimoniale.
                  </li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Certificazioni energetiche (APE)</strong> - Redazione dell&apos;Attestato di Prestazione Energetica degli edifici, valutazione delle prestazioni energetiche e classificazione energetica secondo la normativa vigente.
                  </li>
                </ul>

                <h2 id="sicurezza-cantieri" className={sectionHeading}>
                  Sicurezza cantieri
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Sicurezza cantieri</strong> - Coordinamento della sicurezza in fase di progettazione ed esecuzione (CSP e CSE), piani di sicurezza e gestione rischi.
                  </li>
                </ul>

                <h2 id="assistenza-immobiliare" className={sectionHeading}>
                  Assistenza immobiliare
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                    <strong>Assistenza immobiliare</strong> - Supporto tecnico per compravendite, perizie, stime immobiliari e valutazione dello stato di fatto.
                  </li>
                </ul>
              </>
            )}
          </article>
          <ContactCtaSection
            locale={isEn ? "en" : "it"}
            title={isEn ? "Need technical support for your project?" : "Cerchi supporto tecnico per il tuo progetto?"}
            description={
              isEn
                ? "Contact us in English for an initial assessment: we can outline timing, design scope and the most suitable engineering path."
                : "Contattaci per una valutazione preliminare: ti indichiamo tempi, iter autorizzativi e il percorso progettuale più adatto."
            }
            className="mt-10 sm:mt-14"
          />
        </div>
      </div>
    </main>
  );
}
