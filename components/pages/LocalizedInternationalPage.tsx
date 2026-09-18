"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { internationalHub } from "@/lib/international-copy";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedInternationalPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = internationalHub[isEn ? "en" : "it"];
  const sectionHeading = `font-display ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`;
  const bullet =
    "relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#1c1e21]";

  return (
    <main id="main-content" className="section-shell">
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
                      <li key={title} className={bullet}>
                        <strong>{title}</strong>: {text}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <p className={`mt-10 ${ui.bodyMuted}`}>
              {isEn ? (
                <>
                  For steel design and shop-drawing outsourcing, see{" "}
                  <Link
                    href={localizeHref("/progettazione-strutturale-acciaio-italia", locale)}
                    title="Structural steel design services in Italy"
                    className="link-accent"
                  >
                    structural steel design services in Italy
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
                    title="Progettazione strutturale acciaio Italia"
                    className="link-accent"
                  >
                    progettazione strutturale in acciaio per partner europei
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

          <ContactCtaSection locale={isEn ? "en" : "it"} title={copy.ctaTitle} description={copy.ctaDescription} className="mt-10 sm:mt-14" />
        </div>
      </div>
    </main>
  );
}
