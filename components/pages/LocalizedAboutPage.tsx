"use client";

import Image from "next/image";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { useLocale } from "@/components/LocaleProvider";
import { chiSiamoPage } from "@/lib/content";
import { chiSiamoEnParagraphs } from "@/lib/about-copy";
import { professionisti } from "@/lib/professionisti";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedAboutPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const title = isEn ? "Structural engineers near Brescia" : chiSiamoPage.title;
  const paragraphs = isEn ? chiSiamoEnParagraphs : chiSiamoPage.paragraphs;
  const peopleTitle = isEn ? "Engineers" : "Professionisti";
  const linkedinLabel = isEn ? "LinkedIn profile" : "Profilo LinkedIn";
  const sectionHeading = ui.longFormSectionHeading;

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className={`reveal-block home-plate home-plate--well ${ui.articleMax}`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{title}</h1>
            {paragraphs.map((p, i) => (
              <p key={i} className={`mb-4 last:mb-0 ${ui.body}`}>
                {p}
              </p>
            ))}

            <section id="professionisti" className={scrollAnchorClass} aria-labelledby="professionisti-heading">
              <h2 id="professionisti-heading" className={sectionHeading}>
                {peopleTitle}
              </h2>
              <ul className="m-0 grid list-none grid-cols-1 gap-12 p-0 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
                {professionisti.map((person) => {
                  const bio = isEn ? person.bioEn : person.bioIt;
                  return (
                    <li key={person.id} className="reveal-block min-w-0">
                      <figure className="m-0 w-full max-w-[21rem]">
                        <div className={`${ui.contentImage} relative aspect-[3/4] w-full bg-[#e4e6eb]`}>
                          <Image
                            src={person.src}
                            alt={isEn ? person.altEn : person.altIt}
                            fill
                            className="object-cover object-top"
                            sizes="(min-width:640px) 21rem, 88vw"
                            unoptimized={person.src.endsWith(".svg")}
                          />
                        </div>
                        <figcaption className="mt-4 w-full">
                          <p className="font-display text-xl font-medium tracking-tight text-[#1c1e21] sm:text-2xl">
                            {person.name}
                          </p>
                          <p className="mt-1 text-[0.92rem] font-medium text-[#555]">
                            {isEn ? person.roleEn : person.roleIt}
                          </p>
                          {bio ? <p className={`mt-3 ${ui.bodyMuted}`}>{bio}</p> : null}
                          {person.linkedin ? (
                            <p className="mt-3">
                              <a
                                href={person.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-accent text-sm"
                                title={linkedinLabel}
                              >
                                LinkedIn
                              </a>
                            </p>
                          ) : null}
                        </figcaption>
                      </figure>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>

          <ContactCtaSection locale={locale} />
        </div>
      </div>
    </main>
  );
}
