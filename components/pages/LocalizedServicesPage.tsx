"use client";

import Link from "next/link";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { FeatureList } from "@/components/FeatureList";
import { useLocale } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import { servicesPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { servicesCopy } from "@/lib/services-copy";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedServicesPageContent() {
  const locale = useLocale();
  const copy = servicesCopy[locale];
  const servicesLd = servicesPageJsonLd(locale);
  const sectionHeading = ui.longFormSectionHeading;

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className={`reveal-block home-plate home-plate--well ${ui.articleMax}`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{copy.title}</h1>
            <p className={ui.body}>{copy.lead}</p>
            {"fabricatorsNote" in copy && copy.fabricatorsNote ? (
              <p className={`mt-4 ${ui.body}`}>
                {copy.fabricatorsNote}{" "}
                <Link
                  href={localizeHref("/progettazione-strutturale-per-carpenterie", locale)}
                  title={linkTitles.fabricators(locale)}
                  className="link-accent"
                >
                  {locale === "en"
                    ? "structural design for steel fabricators"
                    : "progettazione strutturale per carpenterie"}
                </Link>
                .
              </p>
            ) : null}
            {"gcNote" in copy && copy.gcNote ? (
              <p className={`mt-4 ${ui.body}`}>
                {copy.gcNote}{" "}
                <Link
                  href={localizeHref("/progettazione-strutturale-per-general-contractor", locale)}
                  title={linkTitles.generalContractor(locale)}
                  className="link-accent"
                >
                  {locale === "en" ? "structural design for general contractors" : "progettazione strutturale per general contractor"}
                </Link>
                .
              </p>
            ) : null}
            {"internationalNote" in copy && copy.internationalNote ? (
              <p className={`mt-4 ${ui.body}`}>
                {copy.internationalNote}{" "}
                <Link href={localizeHref("/clienti-internazionali", locale)} title={linkTitles.international(locale)} className="link-accent">
                  {locale === "en" ? "International clients" : "Clienti internazionali"}
                </Link>
                .
              </p>
            ) : null}

            {copy.sections.map((section) => (
              <section key={section.id} id={section.id} className={scrollAnchorClass}>
                <h2 className={sectionHeading}>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className={`mb-4 ${ui.bodyMuted}`}>
                    {p}
                  </p>
                ))}
                <FeatureList items={section.items} />
              </section>
            ))}
          </article>

          <ContactCtaSection locale={locale} title={copy.ctaTitle} description={copy.ctaDescription} />
        </div>
      </div>
    </main>
  );
}
