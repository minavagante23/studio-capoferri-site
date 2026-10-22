"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { FeatureList } from "@/components/FeatureList";
import { useLocale } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import { organizationId } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { getEnglishSteelDescription, pageUrl as seoPageUrl } from "@/lib/seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import type { SteelLandingConfig } from "@/lib/steel-landing";
import { ui } from "@/lib/ui";

const landingCopy = {
  en: {
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
  },
} as const;

const whyIt = [
  ["Resistenza sismica", "leggerezza e duttilità rendono l'acciaio ideale nelle zone sismiche della Lombardia."],
  ["Tempi di cantiere ridotti", "la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere."],
  ["Libertà architettonica", "grandi luci, sbalzi e volumi aperti senza pilastri intermedi."],
  ["Sopraelevazioni", "il peso contenuto consente di ampliare in altezza edifici esistenti."],
  ["Sostenibilità", "materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture fotovoltaiche."],
] as const;

export function LocalizedSteelLandingPage({ config }: { config: SteelLandingConfig }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const cityLabel = isEn && config.city === "Milano" ? "Milan" : config.city;
  const steelPath = `/progettazione-strutture-acciaio-${config.slug}`;
  const absolutePageUrl = seoPageUrl(steelPath, locale);
  const cityCopy = isEn ? landingCopy.en.cities[config.slug as keyof typeof landingCopy.en.cities] : null;
  const sectionHeading = ui.longFormSectionHeading;
  const faq = isEn
    ? ([
        [landingCopy.en.faqFixed[0][0], landingCopy.en.faqFixed[0][1]],
        [landingCopy.en.faqFixed[1][0], landingCopy.en.faqFixed[1][1]],
        ["Do you design steel structures across Lombardy?", cityCopy?.faqAreaAnswer ?? config.faqAreaAnswer],
        [landingCopy.en.faqFixed[2][0], landingCopy.en.faqFixed[2][1]],
        [landingCopy.en.faqFixed[3][0], landingCopy.en.faqFixed[3][1]],
      ] as const)
    : ([
        [
          config.faqCostQuestion,
          "Il costo dipende da dimensioni, complessità e destinazione d'uso dell'edificio. Dopo un primo sopralluogo o un colloquio tecnico forniamo un preventivo dettagliato e senza impegno per la progettazione strutturale, i disegni costruttivi d'officina e la direzione lavori.",
        ],
        [
          "Quali vantaggi offre una struttura in acciaio rispetto al cemento armato?",
          "L'acciaio garantisce leggerezza, resistenza sismica, tempi di cantiere ridotti grazie alla prefabbricazione in officina e grande flessibilità architettonica.",
        ],
        ["Progettate strutture in acciaio in tutta la Lombardia?", config.faqAreaAnswer],
        [
          "Seguite anche la direzione lavori e il montaggio della carpenteria metallica?",
          "Sì. Seguiamo l'intero processo, dal calcolo strutturale alla direzione lavori strutturale fino al collaudo.",
        ],
        [
          "È possibile realizzare una sopraelevazione in acciaio su un edificio esistente?",
          "Sì, la leggerezza dell'acciaio lo rende il materiale ideale per le sopraelevazioni.",
        ],
      ] as const);

  const featured = isEn
    ? (cityCopy
        ? config.featuredProjects.map((p, index) => ({
            ...p,
            title: cityCopy.featuredProjects[index]?.[0] ?? p.title,
            description: cityCopy.featuredProjects[index]?.[1] ?? p.description,
          }))
        : config.featuredProjects)
    : config.featuredProjects;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absolutePageUrl}#service`,
    name: isEn ? `Structural engineer in ${cityLabel}` : "Progettazione strutture in acciaio",
    serviceType: isEn ? "Structural engineering for steel buildings" : "Progettazione strutturale di strutture in acciaio",
    description: isEn ? (getEnglishSteelDescription(config.slug) ?? config.metaDescription) : config.metaDescription,
    provider: { "@id": organizationId() },
    areaServed: [
      { "@type": "AdministrativeArea", name: config.areaServedPrimary },
      { "@type": "AdministrativeArea", name: "Lombardy" },
    ],
    url: absolutePageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className={`reveal-block home-plate home-plate--well ${ui.articleMax}`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>
              {isEn
                ? landingCopy.en.heroTitle(cityLabel)
                : `Progettazione di strutture in acciaio a ${config.city} e in Lombardia`}
            </h1>
            <p className={`mb-4 ${ui.body}`}>{isEn ? cityCopy?.introLead : config.introLead}</p>
            <p className={`mb-6 ${ui.body}`}>
              {isEn ? (
                landingCopy.en.process
              ) : (
                <>
                  Dal calcolo strutturale secondo <strong>NTC 2018</strong> ed Eurocodici ai disegni costruttivi
                  d&apos;officina, fino alla direzione lavori e al collaudo: seguiamo ogni fase del progetto, dalla prima
                  idea al cantiere.
                </>
              )}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#richiesta-preventivo"
                className={ui.btnPrimary}
                title={isEn ? "Request a free quote — Studio Capoferri" : "Richiedi preventivo senza impegno — Studio Capoferri"}
              >
                {isEn ? "Request a free quote" : "Richiedi preventivo senza impegno"}
              </a>
              <a href={`tel:${site.phoneTel}`} className={ui.btnOutline} title={linkTitles.telefono(site.phoneDisplay, locale)}>
                {site.phoneDisplay}
              </a>
            </div>

            <section className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{isEn ? landingCopy.en.whyTitle : "Perché scegliere una struttura in acciaio"}</h2>
              <FeatureList items={isEn ? landingCopy.en.whyBullets : whyIt} />
            </section>

            <section className={scrollAnchorClass}>
              <h2 className={sectionHeading}>
                {isEn ? landingCopy.en.scopeTitle : "Cosa progettiamo: dal residenziale all'industriale"}
              </h2>
              <p className={`mb-4 ${ui.bodyMuted}`}>
                {isEn
                  ? landingCopy.en.scopeLead
                  : "Progettiamo strutture in acciaio per ogni destinazione d'uso: ville e residenze private, edifici multipiano, capannoni industriali con carroponte, edifici commerciali e spazi per eventi. Alcuni progetti recenti:"}
              </p>
              <ul className="mt-2 list-none space-y-3 pl-0">
                {featured.map((p) => (
                  <li key={p.href} className={ui.bodyMuted}>
                    <Link
                      href={localizeHref(p.href, locale)}
                      title={linkTitles.progetto(p.title, locale)}
                      className="link-accent font-semibold text-[#1c1e21]"
                    >
                      {p.title}
                    </Link>
                    : {p.description}
                  </li>
                ))}
              </ul>
            </section>

            <section className={`mt-14 ${scrollAnchorClass}`}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className={`${ui.contentImage} aspect-[4/3]`}>
                  <Image
                    src={config.heroImage.src}
                    alt={isEn ? config.heroImage.altEn : config.heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:640px) 50vw, 100vw"
                  />
                </div>
                <div className={`${ui.contentImage} aspect-[4/3]`}>
                  <Image
                    src={config.secondaryImage.src}
                    alt={isEn ? config.secondaryImage.altEn : config.secondaryImage.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:640px) 50vw, 100vw"
                  />
                </div>
              </div>
            </section>

            <section className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{isEn ? cityCopy?.areaHeading : config.areaHeading}</h2>
              <p className={`mb-4 ${ui.bodyMuted}`}>{isEn ? cityCopy?.areaBody : config.areaBody}</p>
              {(isEn ? cityCopy?.areaBodySecondary : config.areaBodySecondary) ? (
                <p className={`mb-0 ${ui.bodyMuted}`}>
                  {isEn ? cityCopy?.areaBodySecondary : config.areaBodySecondary}
                </p>
              ) : null}
            </section>

            <section className={scrollAnchorClass}>
              <h2 className={sectionHeading}>
                {isEn ? landingCopy.en.faqTitle : "Domande frequenti sulla progettazione di strutture in acciaio"}
              </h2>
              <FaqList items={faq} />
            </section>

            <section id="richiesta-preventivo" className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{isEn ? cityCopy?.ctaHeading : config.ctaHeading}</h2>
              <p className={`mb-6 max-w-[640px] ${ui.bodyMuted}`}>
                {isEn
                  ? `Request a no-obligation quote for structural design in ${cityLabel}. Share building type, approximate size and timeline — we reply within 1–2 working days.`
                  : `Richiedi un preventivo senza impegno per la progettazione strutturale a ${config.city}. Indica tipologia, dimensioni indicative e tempi: ti rispondiamo entro 1–2 giorni lavorativi.`}
              </p>
              <ContactForm
                formId="form-preventivo-acciaio"
                defaultCity={isEn && config.city === "Milano" ? "Milan" : config.city}
                defaultSubject={
                  isEn
                    ? `Steel structure design quote — ${cityLabel}`
                    : `Preventivo strutture in acciaio — ${config.city}`
                }
                messagePlaceholder={
                  isEn
                    ? "E.g. villa / warehouse / vertical extension, approx. sqm, municipality, preferred timeline…"
                    : "Es. villa / capannone / sopraelevazione, mq indicativi, comune, tempi desiderati…"
                }
                submitLabel={isEn ? "Request quote" : "Richiedi preventivo"}
                successMessage={
                  isEn
                    ? "Request sent. We will reply within 1–2 working days with the next steps."
                    : "Richiesta inviata. Ti rispondiamo entro 1–2 giorni lavorativi con i prossimi passi."
                }
              />
              <p className={`mt-5 text-sm ${ui.bodyMuted}`}>
                {isEn ? "Prefer to call?" : "Preferisci parlare subito?"}{" "}
                <a href={`tel:${site.phoneTel}`} className="link-accent" title={linkTitles.telefono(site.phoneDisplay, locale)}>
                  {site.phoneDisplay}
                </a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
