"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { caseCopyEn, caseCardCaptionEn } from "@/lib/case-copy-en";
import { areaCopy } from "@/lib/project-area-copy";
import { projectCategories, type ProjectArea } from "@/lib/projects";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedProjectAreaPage({ area }: { area: ProjectArea }) {
  const locale = useLocale();
  const t = areaCopy[locale][area];
  const shared = areaCopy[locale];
  const cases = projectCategories[area].cases;

  if (locale === "it") {
    const c = projectCategories[area];
    return (
      <main id="main-content" className="section-shell">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
              <Link href="/progetti" title={linkTitles.breadcrumbProgetti("it")} className="font-medium text-[#2a3f54] hover:underline">
                Progetti
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <span className="text-[#444]">{c.heading}</span>
            </nav>

            <div className="reveal-block home-plate home-plate--well mb-12">
              <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{c.heading}</h1>
              <div className={`${ui.bodyMuted} text-pretty`}>{c.intro}</div>
            </div>

            <h2 className={`font-display reveal-title ${ui.gallerySectionTitle} mb-6`}>Progetti in evidenza</h2>
            <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.cases.map((p) => (
                <div key={p.slug} className="reveal-block">
                  <ProjectPreviewCard href={p.href} title={p.title} caption={p.caption} image={p.cover} alt={p.alt} />
                </div>
              ))}
            </div>
            <ContactCtaSection locale="it" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Breadcrumb">
            <Link href={localizeHref("/progetti", locale)} title={linkTitles.breadcrumbProgetti(locale)} className="font-medium text-[#2a3f54] hover:underline">
              {shared.breadcrumbProjects}
            </Link>
            <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
            <span className="text-[#444]">{t.heading}</span>
          </nav>
          <div className="reveal-block home-plate home-plate--well mb-12">
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{t.heading}</h1>
            <div className={`${ui.bodyMuted} text-pretty`}>
              {t.intro.map((p) => <p key={p} className="mb-4 last:mb-0">{p}</p>)}
            </div>
          </div>
          <h2 className={`font-display reveal-title ${ui.gallerySectionTitle} mb-6`}>{shared.featured}</h2>
          <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((p) => {
              const caseKey = `${area}/${p.slug}` as keyof typeof caseCopyEn;
              const enTitle = caseKey in caseCopyEn ? caseCopyEn[caseKey].heading : p.title;
              const enCaption = caseCardCaptionEn[`${area}/${p.slug}`] ?? enTitle;
              return (
              <div key={p.slug} className="reveal-block">
                <ProjectPreviewCard
                  href={localizeHref(p.href, locale)}
                  title={enTitle}
                  caption={enCaption}
                  image={p.cover}
                  alt={locale === "en" ? enTitle : p.alt}
                />
              </div>
              );
            })}
          </div>
          <ContactCtaSection locale={locale} />
        </div>
      </div>
    </main>
  );
}
