"use client";

import { useCallback, useEffect, useState } from "react";
import { CarpenterieRfqForm } from "@/components/CarpenterieRfqForm";
import { FaqList } from "@/components/FaqList";
import { FeatureList } from "@/components/FeatureList";
import { useLocale } from "@/components/LocaleProvider";
import { trackEvent } from "@/lib/analytics";
import { carpenterieCopy, carpenterieDownloadHref } from "@/lib/carpenterie-copy";
import { organizationId } from "@/lib/jsonld";
import { pageUrl } from "@/lib/seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const UNLOCK_KEY = "carpenterie-samples-unlocked";

export function LocalizedCarpenteriePage() {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = carpenterieCopy[isEn ? "en" : "it"];
  const sectionHeading = ui.longFormSectionHeading;
  const absolutePageUrl = pageUrl("/progettazione-strutturale-per-carpenterie", locale);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem(UNLOCK_KEY) === "1");
    } catch {
      /* private mode */
    }
  }, []);

  const unlock = useCallback(() => {
    try {
      sessionStorage.setItem(UNLOCK_KEY, "1");
    } catch {
      /* private mode */
    }
    setUnlocked(true);
  }, []);

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
      ? "Structural engineering for steel fabricators"
      : "Progettazione strutturale per carpenterie metalliche",
    description: copy.lead,
    provider: { "@id": organizationId() },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Lombardy" },
      { "@type": "Country", name: "Italy" },
    ],
    url: absolutePageUrl,
  };

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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

            <section id="esempi-elaborati" className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{copy.downloadHeading}</h2>
              <p className={ui.bodyMuted}>{copy.downloadBody}</p>
              {unlocked && carpenterieDownloadHref ? (
                <p className="mt-5">
                  <a
                    href={carpenterieDownloadHref}
                    className={ui.btnPrimary}
                    download
                    onClick={() =>
                      trackEvent("file_download", {
                        file_name: "studio-capoferri-esempi-elaborati-officina.zip",
                        link_text: copy.downloadCta,
                      })
                    }
                  >
                    {copy.downloadCta}
                  </a>
                </p>
              ) : (
                <p className={`mt-5 ${ui.bodyMuted}`}>
                  {copy.downloadLocked}{" "}
                  <a href="#richiesta" className="link-accent">
                    {copy.formHeading}
                  </a>
                  .
                </p>
              )}
            </section>

            <section id="faq" className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{copy.faqHeading}</h2>
              <FaqList items={copy.faq} />
            </section>

            <section id="richiesta" className={scrollAnchorClass}>
              <h2 className={sectionHeading}>{copy.formHeading}</h2>
              <p className={`mb-6 ${ui.bodyMuted}`}>{copy.formLead}</p>
              <CarpenterieRfqForm onUnlocked={unlock} />
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
