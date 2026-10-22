import Link from "next/link";
import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import { localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function HomeServicesSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <section id="servizi" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleCls}>{t.servicesTitle}</h2>
          </div>
          <p className="home-split-header__right">{t.servicesIntro}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {t.serviceCards.map(([title, description, href]) => (
            <Link
              key={title}
              href={localizeHref(href, locale)}
              className="home-plate group reveal-block flex flex-col"
              title={linkTitles.servizio(title, locale)}
            >
              <h3
                className={`font-display mb-2 text-xl font-medium tracking-tight text-[#1c1e21] transition-colors group-hover:text-[#b01010] sm:mb-3 sm:text-2xl`}
              >
                {title}
              </h3>
              <p className="copy-rhythm mb-0 flex-1 text-sm text-[#444]">{description}</p>
            </Link>
          ))}
        </div>
        <p className="mt-8 sm:mt-12">
          <Link
            href={localizeHref("/servizi", locale)}
            className={`${ui.btnOutline} inline-flex w-full sm:w-auto`}
            title={linkTitles.scopriServizi(locale)}
          >
            {t.allServices}
          </Link>
        </p>
      </div>
    </section>
  );
}
