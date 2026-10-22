import Link from "next/link";
import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import { localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function HomeContactsSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <section id="contatti" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleCls}>{t.contactsTitle}</h2>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          <article className="home-plate reveal-block">
            <h3 className={`font-display mb-1.5 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg`}>Email</h3>
            <a
              href={`mailto:${site.email}`}
              title={linkTitles.email(site.email, locale)}
              className="text-[0.88rem] text-[#444] underline-offset-2 transition hover:text-[#b01010] hover:underline sm:text-[0.95rem]"
            >
              {site.email}
            </a>
          </article>
          <article className="home-plate reveal-block">
            <h3 className={`font-display mb-1.5 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg`}>{t.phone}</h3>
            <a
              href={`tel:${site.phoneTel}`}
              title={linkTitles.telefono(site.phoneDisplay, locale)}
              className="text-[0.88rem] text-[#444] underline-offset-2 transition hover:text-[#b01010] hover:underline sm:text-[0.95rem]"
            >
              {site.phoneDisplay}
            </a>
          </article>
          <article className="home-plate reveal-block">
            <h3 className={`font-display mb-1.5 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg`}>{t.office}</h3>
            <address className="not-italic text-[0.88rem] leading-relaxed text-[#444] sm:text-[0.95rem]">{site.addressLine}</address>
          </article>
        </div>
        <p className="mt-8 sm:mt-12">
          <Link
            href={localizeHref("/contatti#form-contatti", locale)}
            className={`${ui.btnPrimary} inline-flex w-full sm:w-auto`}
            title={linkTitles.formContatti(locale)}
          >
            {t.writeUs}
          </Link>
        </p>
      </div>
    </section>
  );
}
