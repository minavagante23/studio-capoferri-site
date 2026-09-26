"use client";

import { useLocale } from "@/components/LocaleProvider";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { progettiIndexIntro } from "@/lib/content";
import { localizeHref } from "@/lib/i18n";
import { projectPreview } from "@/lib/images";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const englishProjectCards = [
  ["Residential structures", "Steel villas and homes, concept to erection support", "/assets/progetti-ambito-residenziale.webp", "Residential steel structure project", "/progetti/residenziali"],
  ["Industrial projects", "Production halls, crane loads and shop drawings", "/assets/progetto2.webp", "Industrial building with steel structure", "/progetti/industriali"],
  ["Structures for events", "Exhibitions, seminars and conferences", "/assets/progetto-ricettivo.webp", "Event venue structural design project", "/progetti/ricettivi"],
] as const;

export function LocalizedProjectsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const italianCards = projectPreview.map((p) => [p.title, p.caption, p.image, p.alt, p.href]) as [string, string, string, string, string][];
  const cards = isEn ? englishProjectCards : italianCards;

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="home-plate home-plate--well mb-8 sm:mb-14">
              <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>Progetti realizzati</h1>
              <p className={`reveal-block max-w-none text-pretty ${ui.bodyMuted}`}>{progettiIndexIntro}</p>
            </div>
            <div className="fine-divider mb-6 sm:mb-10" />
            <div className="lazy-section grid gap-6 sm:gap-10 md:grid-cols-3">
              {projectPreview.map((p) => (
                <div key={p.href} className="reveal-block">
                  <ProjectPreviewCard href={localizeHref(p.href, locale)} title={p.title} caption={p.caption} image={p.image} alt={p.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="home-plate home-plate--well mb-8 sm:mb-14">
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{isEn ? "Completed projects" : "Progetti realizzati"}</h1>
            <p className={`reveal-block max-w-none text-pretty ${ui.bodyMuted}`}>
              {isEn
                ? "Work from the studio: steel structures, on their own or combined with reinforced concrete and masonry, and commissions on steel products such as decking for concrete slabs. Grouped by field: houses and villas, industry, and spaces for exhibitions and conferences."
                : progettiIndexIntro}
            </p>
          </div>
          <div className="fine-divider mb-6 sm:mb-10" />
          <div className="lazy-section grid gap-6 sm:gap-10 md:grid-cols-3">
            {cards.map(([title, caption, image, alt, href]) => (
              <div key={href} className="reveal-block">
                <ProjectPreviewCard href={localizeHref(href, locale)} title={title} caption={caption} image={image} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
