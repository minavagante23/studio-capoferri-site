"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { ProjectImageLightbox } from "@/components/projects/ProjectImageLightbox";
import { localizeHref } from "@/lib/i18n";
import { caseStudyJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { caseCopyEn } from "@/lib/case-copy-en";
import { areaCopy } from "@/lib/project-area-copy";
import { projectCaseStudies, projectCategories, type ProjectArea } from "@/lib/projects";
import { galleryAltEnBySrc } from "@/lib/gallery-alts-en";
import { getEnglishCaseMetadata } from "@/lib/seo";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedProjectCasePage({ area, slug }: { area: ProjectArea; slug: string }) {
  const locale = useLocale();
  const key = `${area}/${slug}` as keyof typeof caseCopyEn;
  const cs = projectCaseStudies[`${area}/${slug}` as keyof typeof projectCaseStudies];
  const enMeta = getEnglishCaseMetadata(area, slug);
  const heading = locale === "en" && key in caseCopyEn ? caseCopyEn[key].heading : cs.heading;
  const catHeading = locale === "en" ? areaCopy.en[area].heading : projectCategories[area].heading;
  const body = locale === "en" && key in caseCopyEn ? caseCopyEn[key] : null;
  const gallery =
    locale === "en"
      ? cs.gallery.map((img) => ({
          ...img,
          alt: galleryAltEnBySrc[img.src] ?? img.alt,
        }))
      : cs.gallery;

  const jsonLd = caseStudyJsonLd({
    area,
    slug,
    metaTitle: locale === "en" ? (enMeta?.title ?? heading) : cs.metaTitle,
    metaDescription: locale === "en" ? (enMeta?.description ?? cs.metaDescription) : cs.metaDescription,
    gallery: cs.gallery,
    locale,
  });

  if (locale === "it") {
    const cat = projectCategories[area];
    return (
      <>
        {jsonLd.map((block) => (
          <script
            key={block["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
      <main id="main-content" className="section-shell">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="mx-auto w-full max-w-[900px]">
              <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
                <Link href="/progetti" title={linkTitles.breadcrumbProgetti("it")} className="font-medium text-[#2a3f54] hover:underline">
                  Progetti
                </Link>
                <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
                <Link href={`/progetti/${area}`} title={linkTitles.breadcrumbArea(cat.heading, "it")} className="font-medium text-[#2a3f54] hover:underline">
                  {cat.heading}
                </Link>
                <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
                <span className="text-[#444]">{cs.metaTitle}</span>
              </nav>

              <div className="home-plate home-plate--well mb-6 sm:mb-8">
                <h1 className={`font-display reveal-title ${ui.caseStudyTitle} mb-0`}>{cs.heading}</h1>
              </div>

              {cs.externalBrand ? (
                <div className="reveal-block mb-8 rounded-sm bg-[#2a2a2a] px-4 py-4 text-center">
                  <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" title={linkTitles.external(cs.externalBrand.imageAlt, "it")} className="inline-block">
                    <Image src={cs.externalBrand.imageSrc} alt={cs.externalBrand.imageAlt} width={280} height={80} className="mx-auto h-auto max-h-14 w-auto" />
                  </a>
                </div>
              ) : null}

              <div className="lazy-section">
                <article className="home-plate home-plate--well">
                  <div>{cs.body}</div>
                </article>

                <ProjectImageLightbox images={cs.gallery} className="mt-10" />
                <ContactCtaSection locale="it" title="Hai un progetto simile?" />
              </div>
            </div>
          </div>
        </div>
      </main>
      </>
    );
  }

  return (
    <>
      {jsonLd.map((block) => (
        <script
          key={block["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mx-auto w-full max-w-[900px]">
            <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Breadcrumb">
              <Link href={localizeHref("/progetti", locale)} title={linkTitles.breadcrumbProgetti(locale)} className="font-medium text-[#2a3f54] hover:underline">
                {locale === "en" ? "Projects" : "Progetti"}
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <Link href={localizeHref(`/progetti/${area}`, locale)} title={linkTitles.breadcrumbArea(catHeading, locale)} className="font-medium text-[#2a3f54] hover:underline">
                {catHeading}
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <span className="text-[#444]">{heading}</span>
            </nav>
            <div className="home-plate home-plate--well mb-6 sm:mb-8">
              <h1 className={`font-display reveal-title ${ui.caseStudyTitle} mb-0`}>{heading}</h1>
            </div>
            {cs.externalBrand ? (
              <div className="reveal-block mb-8 rounded-sm bg-[#2a2a2a] px-4 py-4 text-center">
                <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" title={linkTitles.external(cs.externalBrand.imageAlt, locale)} className="inline-block">
                  <Image src={cs.externalBrand.imageSrc} alt={cs.externalBrand.imageAlt} width={280} height={80} className="mx-auto h-auto max-h-14 w-auto" />
                </a>
              </div>
            ) : null}
            <div className="lazy-section">
              <article className="home-plate home-plate--well">
                {body ? (
                  <div>
                    {body.body.map((p) => <p key={p} className={`mb-4 last:mb-0 ${ui.bodyMuted}`}>{p}</p>)}
                    {body.bullets.length ? (
                      <ul className="mt-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                        {body.bullets.map(([title, text]) => (
                          <li key={title} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                            <strong>{title}</strong> - {text}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <div>{cs.body}</div>
                )}
              </article>
              <ProjectImageLightbox images={gallery} className="mt-10" />
              <ContactCtaSection locale={locale} title={locale === "en" ? "Do you have a similar project?" : "Hai un progetto simile?"} />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
