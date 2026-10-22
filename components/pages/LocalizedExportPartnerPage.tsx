"use client";

import Link from "next/link";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { FeatureList } from "@/components/FeatureList";
import { useLocale } from "@/components/LocaleProvider";
import { exportPartnerCopy } from "@/lib/export-partner-copy";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedExportPartnerPage() {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = exportPartnerCopy[isEn ? "en" : "it"];
  const sectionHeading = ui.longFormSectionHeading;

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className={`reveal-block home-plate home-plate--well ${ui.articleMax}`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{copy.title}</h1>
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
                {"items" in section && section.items ? <FeatureList items={section.items} /> : null}
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
                    <Link href={localizeHref("/progetti", locale)} title={linkTitles.tuttiProgetti(locale)} className="link-accent">
                      all projects
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
                    <Link href={localizeHref("/progetti", locale)} title={linkTitles.tuttiProgetti(locale)} className="link-accent">
                      tutti i progetti
                    </Link>
                    .
                  </>
                )}
              </p>
            </section>

            <p className={`mt-10 ${ui.bodyMuted}`}>
                {isEn ? (
                <>
                  Also see{" "}
                  <Link href={localizeHref("/clienti-internazionali", locale)} title={linkTitles.international(locale)} className="link-accent">
                    international clients
                  </Link>
                  ,{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-per-general-contractor", locale)}
                    title={linkTitles.generalContractor(locale)}
                    className="link-accent"
                  >
                    general contractors in Northern Italy
                  </Link>{" "}
                  and{" "}
                  <Link href={localizeHref("/servizi", locale)} title={linkTitles.scopriServizi(locale)} className="link-accent">
                    services
                  </Link>
                  .
                </>
              ) : (
                <>
                  Vedi anche{" "}
                  <Link href={localizeHref("/clienti-internazionali", locale)} title={linkTitles.international(locale)} className="link-accent">
                    clienti internazionali
                  </Link>
                  ,{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-per-general-contractor", locale)}
                    title={linkTitles.generalContractor(locale)}
                    className="link-accent"
                  >
                    general contractor in Italia
                  </Link>{" "}
                  e{" "}
                  <Link href={localizeHref("/servizi", locale)} title={linkTitles.scopriServizi(locale)} className="link-accent">
                    servizi
                  </Link>
                  .
                </>
              )}
            </p>
          </article>

          <ContactCtaSection locale={locale} title={copy.ctaTitle} description={copy.ctaDescription} />
        </div>
      </div>
    </main>
  );
}
