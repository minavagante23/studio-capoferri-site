"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { generalContractorCopy } from "@/lib/general-contractor-copy";
import { localizeHref } from "@/lib/i18n";
import { organizationId } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { pageUrl } from "@/lib/seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedGeneralContractorPage() {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = generalContractorCopy[isEn ? "en" : "it"];
  const sectionHeading = `font-display ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`;
  const absolutePageUrl = pageUrl("/progettazione-strutturale-per-general-contractor", locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absolutePageUrl}#service`,
    name: copy.title,
    serviceType: isEn
      ? "Structural engineering for general contractors"
      : "Progettazione strutturale per general contractor",
    description: copy.lead,
    provider: { "@id": organizationId() },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Lombardy" },
      { "@type": "AdministrativeArea", name: "Brescia" },
      { "@type": "AdministrativeArea", name: "Bergamo" },
      { "@type": "AdministrativeArea", name: "Milan" },
    ],
    url: absolutePageUrl,
  };

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="home-plate home-plate--well max-w-[860px]">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{copy.title}</h1>
            <p className={ui.body}>{copy.lead}</p>

            {copy.sections.map((section) => (
              <section key={section.id} id={section.id} className={scrollAnchorClass}>
                <h2 className={sectionHeading}>{section.heading}</h2>
                {"body" in section && section.body
                  ? section.body.map((p) => (
                      <p key={p} className={`mb-4 last:mb-0 ${ui.bodyMuted}`}>
                        {p}
                      </p>
                    ))
                  : null}
                {"items" in section && section.items ? (
                  <ul className="mt-2 list-none space-y-3 pl-0">
                    {section.items.map(([title, text]) => (
                      <li key={title}>
                        <strong>{title}</strong>: {text}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section id="proof" className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{copy.proofHeading}</h2>
              <p className={ui.bodyMuted}>{copy.proofBody}</p>
              <p className={`mt-4 ${ui.bodyMuted}`}>
                {isEn ? (
                  <>
                    See{" "}
                    <Link
                      href={localizeHref("/progetti/industriali/copertura-edificio-verniciatura-maranello", locale)}
                      title={linkTitles.progetto("Large-span space-truss canopy - Maranello (MO)", locale)}
                      className="link-accent"
                    >
                      Maranello (MO) space-truss canopy
                    </Link>
                    ,{" "}
                    <Link
                      href={localizeHref("/progetti/industriali/capannone-erbusco", locale)}
                      title={linkTitles.progetto("Industrial building - Erbusco (BS)", locale)}
                      className="link-accent"
                    >
                      Erbusco (BS) industrial hall
                    </Link>{" "}
                    and{" "}
                    <Link href={localizeHref("/progetti/industriali", locale)} title={linkTitles.pagina("Industrial projects")} className="link-accent">
                      industrial projects
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Vedi{" "}
                    <Link
                      href={localizeHref("/progetti/industriali/copertura-edificio-verniciatura-maranello", locale)}
                      title={linkTitles.progetto("Tettoia reticolare a grande luce - Maranello (MO)", locale)}
                      className="link-accent"
                    >
                      tettoia Maranello (MO)
                    </Link>
                    ,{" "}
                    <Link
                      href={localizeHref("/progetti/industriali/capannone-erbusco", locale)}
                      title={linkTitles.progetto("Capannone Erbusco (BS)", locale)}
                      className="link-accent"
                    >
                      capannone Erbusco (BS)
                    </Link>{" "}
                    e{" "}
                    <Link href={localizeHref("/progetti/industriali", locale)} title={linkTitles.pagina("Progetti industriali")} className="link-accent">
                      progetti industriali
                    </Link>
                    .
                  </>
                )}
              </p>
            </section>

            <section id="faq" className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{copy.faqTitle}</h2>
              <dl className="space-y-5">
                {copy.faq.map(([q, a]) => (
                  <div key={q}>
                    <dt className={`font-semibold text-[#1c1e21] ${ui.body}`}>{q}</dt>
                    <dd className={`mt-1 ${ui.bodyMuted}`}>{a}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <p className={`mt-10 ${ui.bodyMuted}`}>
              {isEn ? (
                <>
                  EU fabricators and overseas partners:{" "}
                  <Link href={localizeHref("/clienti-internazionali", locale)} title={linkTitles.international(locale)} className="link-accent">
                    international clients
                  </Link>{" "}
                  ·{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-acciaio-italia", locale)}
                    title={linkTitles.exportPartner(locale)}
                    className="link-accent"
                  >
                    steel design for EU partners
                  </Link>
                  . Also{" "}
                  <Link href={localizeHref("/servizi", locale)} title={linkTitles.scopriServizi(locale)} className="link-accent">
                    services
                  </Link>
                  .
                </>
              ) : (
                <>
                  Partner UE e clienti esteri:{" "}
                  <Link href={localizeHref("/clienti-internazionali", locale)} title={linkTitles.international(locale)} className="link-accent">
                    clienti internazionali
                  </Link>{" "}
                  ·{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-acciaio-italia", locale)}
                    title={linkTitles.exportPartner(locale)}
                    className="link-accent"
                  >
                    acciaio per partner UE
                  </Link>
                  . Vedi anche{" "}
                  <Link href={localizeHref("/servizi", locale)} title={linkTitles.scopriServizi(locale)} className="link-accent">
                    servizi
                  </Link>
                  .
                </>
              )}
            </p>
          </article>

          <ContactCtaSection locale={locale} title={copy.ctaTitle} description={copy.ctaDescription} className="mt-12" />
        </div>
      </div>
    </main>
  );
}
