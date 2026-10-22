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
import {
  steelLandingCopyEn,
  steelWhyIt,
  type SteelLandingCitySlug,
} from "@/lib/steel-landing-copy";
import { ui } from "@/lib/ui";

export function LocalizedSteelLandingPage({ config }: { config: SteelLandingConfig }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const cityLabel = isEn && config.city === "Milano" ? "Milan" : config.city;
  const steelPath = `/progettazione-strutture-acciaio-${config.slug}`;
  const absolutePageUrl = seoPageUrl(steelPath, locale);
  const cityCopy = isEn ? steelLandingCopyEn.cities[config.slug as SteelLandingCitySlug] : null;
  const sectionHeading = ui.longFormSectionHeading;
  const faq = isEn
    ? ([
        [steelLandingCopyEn.faqFixed[0][0], steelLandingCopyEn.faqFixed[0][1]],
        [steelLandingCopyEn.faqFixed[1][0], steelLandingCopyEn.faqFixed[1][1]],
        ["Do you design steel structures across Lombardy?", cityCopy?.faqAreaAnswer ?? config.faqAreaAnswer],
        [steelLandingCopyEn.faqFixed[2][0], steelLandingCopyEn.faqFixed[2][1]],
        [steelLandingCopyEn.faqFixed[3][0], steelLandingCopyEn.faqFixed[3][1]],
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
                ? steelLandingCopyEn.heroTitle(cityLabel)
                : `Progettazione di strutture in acciaio a ${config.city} e in Lombardia`}
            </h1>
            <p className={`mb-4 ${ui.body}`}>{isEn ? cityCopy?.introLead : config.introLead}</p>
            <p className={`mb-6 ${ui.body}`}>
              {isEn ? (
                steelLandingCopyEn.process
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
              <h2 className={sectionHeading}>{isEn ? steelLandingCopyEn.whyTitle : "Perché scegliere una struttura in acciaio"}</h2>
              <FeatureList items={isEn ? steelLandingCopyEn.whyBullets : steelWhyIt} />
            </section>

            <section className={scrollAnchorClass}>
              <h2 className={sectionHeading}>
                {isEn ? steelLandingCopyEn.scopeTitle : "Cosa progettiamo: dal residenziale all'industriale"}
              </h2>
              <p className={`mb-4 ${ui.bodyMuted}`}>
                {isEn
                  ? steelLandingCopyEn.scopeLead
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
                {isEn ? steelLandingCopyEn.faqTitle : "Domande frequenti sulla progettazione di strutture in acciaio"}
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
