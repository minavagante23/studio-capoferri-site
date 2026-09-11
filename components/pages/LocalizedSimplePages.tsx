"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactForm } from "@/components/ContactForm";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MapEmbed } from "@/components/MapEmbed";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { chiSiamoPage, progettiIndexIntro } from "@/lib/content";
import { chiSiamoEnParagraphs } from "@/lib/about-copy";
import { chiSiamoPageImage, projectPreview } from "@/lib/images";
import { localizeHref } from "@/lib/i18n";
import { contactPageJsonLd, servicesPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site, steelLandingPages } from "@/lib/site";
import { ui } from "@/lib/ui";

const englishProjectCards = [
  ["Residential structures", "Residential structures", "/assets/progetti-ambito-residenziale.webp", "Residential steel structure project", "/progetti/residenziali"],
  ["Industrial structures", "Industrial structures", "/assets/progetto2.webp", "Industrial building with steel structure", "/progetti/industriali"],
  ["Public-space structures", "Public-space structures", "/assets/progetto-ricettivo.webp", "Event venue structural design project", "/progetti/ricettivi"],
] as const;

export function LocalizedAboutPageContent() {
  const isEn = useLocale() === "en";

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="home-plate home-plate--well">
              <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{chiSiamoPage.title}</h1>
              <div className={`space-y-5 sm:space-y-6 ${ui.body}`}>
                {chiSiamoPage.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className={`${ui.contentImage} mt-8 aspect-[16/9] w-full sm:mt-12`}>
                <Image src={chiSiamoPageImage.src} alt={chiSiamoPageImage.alt} fill className="object-cover" sizes="(min-width:800px) 800px, 100vw" />
              </div>
            </div>
            <ContactCtaSection locale="it" className="mt-10 sm:mt-14" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="home-plate home-plate--well">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{isEn ? "About" : chiSiamoPage.title}</h1>
            <div className={`space-y-5 sm:space-y-6 ${ui.body}`}>
              {isEn
                ? chiSiamoEnParagraphs.map((p, i) => <p key={i}>{p}</p>)
                : chiSiamoPage.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className={`${ui.contentImage} mt-8 aspect-[16/9] w-full sm:mt-12`}>
              <Image
                src={chiSiamoPageImage.src}
                alt={isEn ? "Studio Capoferri team during a technical meeting in Adro" : chiSiamoPageImage.alt}
                fill
                className="object-cover"
                sizes="(min-width:800px) 800px, 100vw"
              />
            </div>
          </div>
          <ContactCtaSection locale={isEn ? "en" : "it"} className="mt-10 sm:mt-14" />
        </div>
      </div>
    </main>
  );
}

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
                  Italy-based administrative services are available when the brief requires them.
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

export function LocalizedContactsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const contactTagline = isEn ? "Engineering - Architecture - Urban Planning" : site.tagline;
  const openingHours = isEn ? "Mon - Fri: 08:30 - 18:00" : site.openingHoursDisplay;
  const contactLd = contactPageJsonLd(locale);

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="home-plate home-plate--well mb-6 max-w-[780px] sm:mb-8">
              <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>Contatti</h1>
              <p className={ui.body}>
                Siamo disponibili per valutazioni preliminari, preventivi e supporto tecnico su progettazione strutturale in acciaio,
                direzione lavori e consulenza specialistica.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
              <section aria-labelledby="recapiti-heading" className="home-plate home-plate--well">
                <h2 id="recapiti-heading" className={`font-display ${ui.cardHeading} mb-4 sm:mb-5`}>Recapiti</h2>
                <p className="mb-4 text-[0.95rem] font-semibold text-[#2a2a2a] sm:mb-6 sm:text-[1.02rem]">
                  {site.name} - {site.tagline}
                </p>
                <ul className="space-y-2 text-[0.95rem] text-[#333] sm:space-y-3 sm:text-[1.03rem]">
                  <li><strong>Indirizzo:</strong> {site.addressLine}</li>
                  <li><strong>Telefono:</strong> <a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">{site.phoneDisplay}</a></li>
                  <li><strong>Email:</strong> <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">{site.email}</a></li>
                  <li><strong>Orari:</strong> {site.openingHoursDisplay}</li>
                </ul>
                <div className="mt-5 border-t border-[#2a3f54]/10 pt-4 sm:mt-7 sm:pt-6">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={linkTitles.linkedin("it")}
                    aria-label="Seguici su LinkedIn - Studio Capoferri"
                    className="inline-flex min-h-[44px] items-center gap-2 py-1 text-sm font-semibold text-[#2a3f54] underline-offset-2 transition hover:text-[#b87333] hover:underline"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#2a3f54]/15 bg-[#2a3f54]/5 text-[#2a3f54]">
                      <LinkedInIcon className="h-4 w-4" />
                    </span>
                    Seguici su LinkedIn
                  </a>
                </div>
              </section>

              <section aria-labelledby="mappa-heading" className="home-plate home-plate--well">
                <h2 id="mappa-heading" className={`font-display ${ui.cardHeading} mb-3 px-1 sm:mb-4 sm:px-2`}>
                  Dove siamo
                </h2>
                <MapEmbed />
              </section>
            </div>

            <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
              <div className="home-plate home-plate--well">
                <h2 className={`font-display ${ui.cardHeading} mb-2 sm:mb-3`}>Contattaci</h2>
                <p className={`mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
                  Compila il form con i dettagli del tuo intervento. Riceverai un riscontro tecnico puntuale dal nostro team.
                </p>
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="home-plate home-plate--well mb-6 max-w-[780px] sm:mb-8">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{isEn ? "Contact" : "Contatti"}</h1>
            <p className={ui.body}>
              {isEn
                ? "We support international clients on projects in Italy with Eurocode-compliant structural and steel design. Contact us in English for preliminary assessments, quotations and technical consultancy."
                : "Siamo disponibili per valutazioni preliminari, preventivi e supporto tecnico su progettazione strutturale in acciaio, direzione lavori e consulenza specialistica."}
            </p>
          </div>

          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
            <section aria-labelledby="recapiti-heading" className="home-plate home-plate--well">
              <h2 id="recapiti-heading" className={`font-display ${ui.cardHeading} mb-4 sm:mb-5`}>{isEn ? "Details" : "Recapiti"}</h2>
              <p className="mb-4 text-[0.95rem] font-semibold text-[#2a2a2a] sm:mb-6 sm:text-[1.02rem]">
                {site.name} - {contactTagline}
              </p>
              <ul className="space-y-2 text-[0.95rem] text-[#333] sm:space-y-3 sm:text-[1.03rem]">
                <li>
                  <strong>{isEn ? "Address" : "Indirizzo"}:</strong> {site.addressLine}
                </li>
                <li>
                  <strong>{isEn ? "Phone" : "Telefono"}:</strong>{" "}
                  <a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, isEn ? "en" : "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <strong>{isEn ? "Hours" : "Orari"}:</strong> {openingHours}
                </li>
              </ul>
              <div className="mt-5 border-t border-[#2a3f54]/10 pt-4 sm:mt-7 sm:pt-6">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={linkTitles.linkedin(isEn ? "en" : "it")}
                  aria-label={isEn ? "Follow us on LinkedIn - Studio Capoferri" : "Seguici su LinkedIn - Studio Capoferri"}
                  className="inline-flex min-h-[44px] items-center gap-2 py-1 text-sm font-semibold text-[#2a3f54] underline-offset-2 transition hover:text-[#b87333] hover:underline"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#2a3f54]/15 bg-[#2a3f54]/5 text-[#2a3f54]">
                    <LinkedInIcon className="h-4 w-4" />
                  </span>
                  {isEn ? "Follow us on LinkedIn" : "Seguici su LinkedIn"}
                </a>
              </div>
            </section>

            <section aria-labelledby="mappa-heading" className="home-plate home-plate--well">
              <h2 id="mappa-heading" className={`font-display ${ui.cardHeading} mb-3 px-1 sm:mb-4 sm:px-2`}>
                {isEn ? "Where we are" : "Dove siamo"}
              </h2>
              <MapEmbed />
            </section>
          </div>

          <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
            <div className="home-plate home-plate--well">
              <h2 className={`font-display ${ui.cardHeading} mb-2 sm:mb-3`}>{isEn ? "Contact us" : "Contattaci"}</h2>
              <p className={`mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
                {isEn
                  ? "Complete the form with the details of your project — we reply in English. You will receive a focused technical response from our team."
                  : "Compila il form con i dettagli del tuo intervento. Riceverai un riscontro tecnico puntuale dal nostro team."}
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export function LocalizedProjectsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const italianCards = projectPreview.map((p) => [p.title, p.caption, p.image, p.alt, p.href]) as [string, string, string, string, string][];
  const cards = isEn ? englishProjectCards : italianCards;

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="home-plate home-plate--well mb-8 sm:mb-14">
              <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>Progetti realizzati</h1>
              <p className={`reveal-block max-w-none text-pretty ${ui.bodyMuted}`}>{progettiIndexIntro}</p>
            </div>
            <div className="fine-divider mb-6 sm:mb-10" />
            <div className="lazy-section grid gap-6 sm:gap-10 md:grid-cols-3">
              {projectPreview.map((p) => (
                <div key={p.href} className="reveal-block">
                  <ProjectPreviewCard href={localizeHref(p.href, locale)} title={p.title} caption={p.caption} image={p.image} alt={p.alt} />
                </div>
              ))}
            </div>
            <ContactCtaSection locale="it" title="Vuoi realizzare un progetto con noi?" description="Dalla fattibilità al cantiere: raccontaci obiettivi, tempi e vincoli del tuo intervento." />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="home-plate home-plate--well mb-8 sm:mb-14">
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{isEn ? "Completed projects" : "Progetti realizzati"}</h1>
            <p className={`reveal-block max-w-none text-pretty ${ui.bodyMuted}`}>
              {isEn
                ? "A selection of our most significant work, organised by area of intervention. This classification offers a clearer and more targeted reading of our activity, making it easier to identify projects by intended use."
                : progettiIndexIntro}
            </p>
          </div>
          <div className="fine-divider mb-6 sm:mb-10" />
          <div className="lazy-section grid gap-6 sm:gap-10 md:grid-cols-3">
            {cards.map(([title, caption, image, alt, href]) => (
              <div key={href} className="reveal-block">
                <ProjectPreviewCard href={localizeHref(href, locale)} title={title} caption={caption} image={image} alt={alt} />
              </div>
            ))}
          </div>
          <ContactCtaSection
            locale={isEn ? "en" : "it"}
            title={isEn ? "Would you like to develop a project with us?" : "Vuoi realizzare un progetto con noi?"}
            description={isEn ? "From feasibility to construction: tell us about the objectives, timing and constraints of your intervention." : "Dalla fattibilità al cantiere: raccontaci obiettivi, tempi e vincoli del tuo intervento."}
          />
        </div>
      </div>
    </main>
  );
}

export function LocalizedPrivacyPageContent() {
  const isEn = useLocale() === "en";

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="max-w-[860px]">
            <div className="home-plate home-plate--well mb-7 sm:mb-10">
              <h1 className={`font-display ${ui.pageTitle} mb-0`}>Privacy policy</h1>
            </div>
            <p className={`mb-7 sm:mb-10 ${ui.body}`}>
              <strong>{isEn ? "Data controller" : "Titolare del trattamento"}:</strong> Studio Capoferri SRL STP - Via Piave 35, Adro (BS) - VAT 04732710985 - Email: <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="link-accent">{site.email}</a>
            </p>
            <h2 className={`font-display ${ui.sectionHeadingAccent} mb-4 mt-12`}>{isEn ? "Purpose of processing" : "Finalità del trattamento"}</h2>
            <p className={ui.body}>{isEn ? "Personal data collected through the contact form is used exclusively to reply to user requests." : "I dati personali raccolti tramite il modulo di contatto vengono utilizzati esclusivamente per rispondere alle richieste inviate dagli utenti."}</p>
            <h2 className={`font-display ${ui.sectionHeadingAccent} mb-4 mt-12`}>{isEn ? "Legal basis" : "Base giuridica"}</h2>
            <p className={ui.body}>{isEn ? "Processing is based on the explicit consent of the data subject." : "Il trattamento è basato sul consenso esplicito dell'interessato."}</p>
            <h2 id="cookie" className={`font-display ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`}>Cookie</h2>
            <p className={`mb-10 ${ui.body}`}>{isEn ? "This website uses cookies to ensure proper operation and improve the browsing experience." : "Questo sito utilizza cookie per garantire il corretto funzionamento e migliorare l'esperienza di navigazione."}</p>
            <div className="space-y-5 sm:space-y-8">
              <div className="home-plate">
                <h3 className={`font-display mb-3 text-lg font-medium tracking-tight text-[#2a3f54]`}>{isEn ? "Technical cookies" : "Cookie tecnici"}</h3>
                <p className={ui.body}>{isEn ? "Essential cookies required for site functionality, including session and preference cookies." : "Cookie strettamente necessari per il funzionamento del sito, inclusi cookie di sessione e di preferenze."}</p>
              </div>
              <div className="home-plate">
                <h3 className={`font-display mb-3 text-lg font-medium tracking-tight text-[#2a3f54]`}>{isEn ? "Third-party services" : "Cookie di terze parti"}</h3>
                <p className={ui.body}>{isEn ? "Some pages use Google Maps and the contact form uses Formspree. Related cookies are loaded only where required by the configured consent flow." : "In alcune pagine del sito viene utilizzato Google Maps e il form di contatto usa Formspree."}</p>
              </div>
              <div className={`rounded-sm p-4 sm:p-6 ${ui.brandGradientCompact} text-white`}>
                <h3 className={`font-display mb-3 text-lg font-medium tracking-tight`}>{isEn ? "Cookie preferences" : "Gestione dei cookie"}</h3>
                <p className="mb-3 copy-rhythm text-[0.98rem] leading-relaxed text-white/95 sm:text-[1.05rem]">{isEn ? "You can manage cookie preferences through the banner shown on first access to the site." : "È possibile gestire le preferenze sui cookie attraverso il banner che appare al primo accesso al sito."}</p>
                <div className="mt-5"><CookiePreferencesButton /></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
