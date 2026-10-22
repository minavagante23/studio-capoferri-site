import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import type { Locale } from "@/lib/i18n";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export function HomeZoneSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <section id="zone-servite" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleCls}>{t.zoneTitle}</h2>
          </div>
          <div className="home-split-header__right">{t.zoneDescription}</div>
        </div>
        <div className="home-plate reveal-block">
          <h3 className={`font-display text-lg font-medium tracking-tight text-[#1c1e21] sm:text-xl`}>{t.zoneHeading}</h3>
          <div className={`mt-2 ${ui.bodyMuted}`}>{t.zoneFooter}</div>
        </div>
      </div>
    </section>
  );
}
