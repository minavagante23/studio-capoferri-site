"use client";

import Link from "next/link";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { FeatureList } from "@/components/FeatureList";
import { useLocale } from "@/components/LocaleProvider";
import { internationalHub } from "@/lib/international-copy";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedInternationalPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = internationalHub[isEn ? "en" : "it"];
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

            <p className={`mt-10 ${ui.bodyMuted}`}>
              {isEn ? (
                <>
                  For steel design and shop-drawing outsourcing, see{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-acciaio-italia", locale)}
                    title={linkTitles.exportPartner(locale)}
                    className="link-accent"
                  >
                    structural steel design for EU partners
                  </Link>
                  . For local general contractors in Northern Italy, see{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-per-general-contractor", locale)}
                    title={linkTitles.generalContractor(locale)}
                    className="link-accent"
                  >
                    structural design for general contractors
                  </Link>
                  . Explore{" "}
                  <Link href={localizeHref("/servizi", locale)} title={linkTitles.scopriServizi(locale)} className="link-accent">
                    services
                  </Link>{" "}
                  and{" "}
                  <Link href={localizeHref("/progetti", locale)} title={linkTitles.tuttiProgetti(locale)} className="link-accent">
                    projects
                  </Link>
                  .
                </>
              ) : (
                <>
                  Per partner UE su design e shop drawings:{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-acciaio-italia", locale)}
                    title={linkTitles.exportPartner(locale)}
                    className="link-accent"
                  >
                    progettazione strutturale in acciaio per partner europei
                  </Link>
                  . Per imprese generali e general contractor in Italia:{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-per-general-contractor", locale)}
                    title={linkTitles.generalContractor(locale)}
                    className="link-accent"
                  >
                    progettazione strutturale per general contractor
                  </Link>
                  . Approfondisci{" "}
                  <Link href={localizeHref("/servizi", locale)} title={linkTitles.scopriServizi(locale)} className="link-accent">
                    servizi
                  </Link>{" "}
                  e{" "}
                  <Link href={localizeHref("/progetti", locale)} title={linkTitles.tuttiProgetti(locale)} className="link-accent">
                    progetti
                  </Link>
                  .
                </>
              )}
            </p>
          </article>

          <ContactCtaSection locale={isEn ? "en" : "it"} title={copy.ctaTitle} description={copy.ctaDescription} />
        </div>
      </div>
    </main>
  );
}
