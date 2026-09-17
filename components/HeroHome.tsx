"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy } from "@/lib/i18n";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/** Single full-bleed plate — strongest structure shot for first impression. */
const heroImage = {
  src: "/assets/hero-struttura-new.webp",
  altIt: "Interno industriale con struttura in acciaio e luce naturale — progetto Studio Capoferri",
  altEn: "Industrial interior with steel structure and natural light — Studio Capoferri project",
} as const;

const heroMinHeight = "calc(100dvh - var(--header-h, 64px))";

export function HeroHome() {
  const locale = useLocale();
  const copy = chromeCopy[locale].hero;

  return (
    <section
      className="hero-home relative"
      style={{ minHeight: heroMinHeight }}
      aria-label={copy.introLabel}
    >
      <div className={`absolute inset-0 ${ui.brandGradient}`} aria-hidden />

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroImage.src}
          alt={locale === "en" ? heroImage.altEn : heroImage.altIt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          fetchPriority="high"
        />
        {/* Mobile: stronger bottom scrim for type; desktop keeps split gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 md:hidden" aria-hidden />
        <div
          className="absolute inset-0 hidden md:block md:bg-[linear-gradient(to_top,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.18)_100%),linear-gradient(to_left,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.12)_48%,transparent_78%)]"
          aria-hidden
        />
      </div>

      <div
        className={`hero-home__content relative z-10 mx-auto flex flex-col justify-end px-5 pb-12 pt-24 sm:px-5 sm:pb-12 sm:pt-24 md:px-5 md:pb-20 md:pt-28 ${layoutContentMaxClass}`}
        style={{ minHeight: heroMinHeight }}
      >
        <div className="w-full max-w-[22rem] text-left sm:max-w-[36rem] md:ml-auto md:max-w-[46rem] md:text-right">
          <p className="eyebrow mb-3.5 inline-flex max-w-full items-center gap-2.5 text-[0.68rem] tracking-[0.14em] text-[#f0c48a] drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] sm:mb-3 sm:gap-3 sm:text-[0.74rem] sm:tracking-[0.12em] sm:text-[#e8b478] md:ml-auto md:flex-row-reverse">
            <span className="h-px w-6 shrink-0 bg-[#f0c48a] sm:w-8 sm:bg-[#e8b478]" aria-hidden />
            <span className="min-w-0 sm:hidden">{copy.locationMobile}</span>
            <span className="hidden min-w-0 sm:inline">{copy.location}</span>
          </p>

          <h1 className="font-display section-title text-[clamp(1.8rem,7vw,2.1rem)] leading-[1.15] tracking-[-0.022em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-[clamp(2.45rem,8vw,4.6rem)] sm:leading-[1.04] sm:tracking-[-0.03em]">
            <span className="block text-pretty sm:whitespace-nowrap">{copy.line1}</span>
            <span className="mt-1.5 block text-pretty sm:mt-1 sm:whitespace-nowrap">{copy.line2}</span>
          </h1>

          <p className="mt-5 max-w-[20rem] border-t border-[#e8b478]/40 pt-3.5 text-[0.8125rem] leading-[1.45] text-[#f3e6d4] drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)] sm:mt-4 sm:max-w-none sm:whitespace-nowrap sm:border-[#e8b478]/45 sm:pt-3 sm:text-[0.9rem] sm:leading-snug sm:text-[#e8b478] md:ml-auto md:border-t-0 md:border-r md:border-[#e8b478]/55 md:pr-3.5 md:pt-0 md:text-[1rem]">
            <span className="sm:hidden">{copy.supportMobile}</span>
            <span className="hidden sm:inline">{copy.support}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
