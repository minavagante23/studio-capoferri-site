import Image from "next/image";
import { homeCopy } from "@/lib/home-copy";
import { homeChiSiamoImages } from "@/lib/images";
import type { Locale } from "@/lib/i18n";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { homeTitleCls } from "@/components/home/titleClasses";

export function HomeAboutSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <section id="chi-siamo" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="reveal-block">
          <h2 className={homeTitleCls}>{t.aboutTitle}</h2>
          <div className="mt-8 grid grid-cols-1 items-start gap-8 md:mt-10 md:grid-cols-2 md:gap-x-[clamp(2rem,4vw,3.5rem)] md:gap-y-0">
            <figure className="m-0 order-2 md:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#1c1e21]/12 bg-[#e8e6e1]">
                <Image
                  src={homeChiSiamoImages.cantiere.src}
                  alt={locale === "en" ? homeChiSiamoImages.cantiere.altEn : homeChiSiamoImages.cantiere.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 50vw, 100vw"
                  unoptimized
                />
              </div>
              <figcaption className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[#6a6a6a]">
                {locale === "en" ? "Steel structures" : "Strutture in acciaio"}
              </figcaption>
            </figure>
            <div className="home-split-header__right order-1 space-y-4 md:order-2 sm:space-y-5">
              {t.aboutBlocks.map((block, idx) => (
                <p key={idx} className="m-0">
                  {block.textMobile ? (
                    <>
                      <span className="md:hidden">{block.textMobile}</span>
                      <span className="hidden md:block">{block.text}</span>
                    </>
                  ) : (
                    block.text
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
