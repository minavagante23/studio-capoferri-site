"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
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
  const sectionHeading = `font-display ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`;

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="home-plate home-plate--well max-w-[860px]">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>{copy.title}</h1>
            <p className={ui.body}>{copy.lead}</p>
            {"internationalNote" in copy && copy.internationalNote ? (
              <p className={`mt-4 ${ui.body}`}>
                {copy.internationalNote}{" "}
                <Link href={localizeHref("/clienti-internazionali", locale)} title={linkTitles.international(locale)} className="link-accent">
                  {locale === "en" ? "International clients" : "Clienti internazionali"}
                </Link>.
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
                <ul className="list-none space-y-3 pl-0">
                  {section.items.map(([name, text]) => (
                    <li key={name} className={ui.bodyMuted}>
                      <strong className="font-semibold text-[#1c1e21]">{name}.</strong> {text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </article>

          <ContactCtaSection locale={locale} title={copy.ctaTitle} description={copy.ctaDescription} />
        </div>
      </div>
    </main>
  );
}
