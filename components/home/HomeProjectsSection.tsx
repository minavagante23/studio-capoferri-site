import Link from "next/link";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { homeTitleInvertedCls } from "@/components/home/titleClasses";
import { homeCopy, homeProjectPreviews } from "@/lib/home-copy";
import { localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function HomeProjectsSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <section id="progetti" className={`lazy-section ${scrollAnchorClass} ${ui.brandGradient} px-4 py-14 text-white sm:px-5 sm:py-20 md:px-10`}>
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleInvertedCls}>{t.projectsTitle}</h2>
          </div>
          <p className="home-split-header__right home-split-header__right--inverted">{t.projectsIntro}</p>
        </div>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {homeProjectPreviews[locale].map(([title, caption, image, alt, href]) => (
            <div key={href} className="reveal-block">
              <ProjectPreviewCard
                href={localizeHref(href, locale)}
                title={title}
                caption={caption}
                image={image}
                alt={alt}
                variant="dark"
              />
            </div>
          ))}
        </div>
        <p className="mt-8 sm:mt-12">
          <Link
            href={localizeHref("/progetti", locale)}
            className={`${ui.btnOnDark} inline-flex w-full sm:w-auto`}
            title={linkTitles.tuttiProgetti(locale)}
          >
            {t.projectsCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
