"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy } from "@/lib/i18n";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/** Full-bleed plate + mobile-sized variant (static export has no Next image optimizer). */
const heroImage = {
  src: "/assets/hero-struttura-new.webp",
  srcMobile: "/assets/hero-struttura-new-720.webp",
  altIt: "Interno industriale con struttura in acciaio e luce naturale, progetto Studio Capoferri - progettazione strutturale in Lombardia",
  altEn: "Industrial interior with steel structure and natural light - Studio Capoferri structural engineers, Lombardy",
} as const;

export function HeroHome() {
  const locale = useLocale();
  const copy = chromeCopy[locale].hero;
  const reduceMotion = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  /** Gate scroll-linked styles until after mount (stable SSR). */
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    setMotionReady(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image stays static (LCP). Only copy + scrim move after mount.
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 0.28]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.35]);
  const enableScrollFx = motionReady && !reduceMotion;
  const alt = locale === "en" ? heroImage.altEn : heroImage.altIt;

  return (
    <section
      ref={sectionRef}
      className="hero-home relative"
      aria-label={copy.introLabel}
    >
      <div className={`absolute inset-0 ${ui.brandGradient}`} aria-hidden />

      <div className="absolute inset-0 overflow-hidden">
        {/* LCP image: no motion wrapper, sync decode, eager */}
        <picture className="absolute inset-0 block h-full w-full">
          <source media="(max-width: 639px)" srcSet={heroImage.srcMobile} type="image/webp" />
          <img
            src={heroImage.src}
            alt={alt}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
            decoding="sync"
            loading="eager"
          />
        </picture>

        {/* Base readability scrim — stronger bottom-right plate for type contrast */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_38%,rgba(0,0,0,0.22)_62%,rgba(0,0,0,0.18)_100%),linear-gradient(to_left,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_42%,transparent_72%)] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.16)_100%),linear-gradient(to_left,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.14)_48%,transparent_78%)]"
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={enableScrollFx ? { opacity: scrimOpacity } : { opacity: 0 }}
          aria-hidden
        />
      </div>

      <div
        className={`hero-home__content relative z-10 mx-auto flex flex-col justify-end px-5 pb-10 pt-20 sm:px-5 sm:pb-12 sm:pt-24 md:px-5 md:pb-20 md:pt-28 ${layoutContentMaxClass}`}
      >
        <motion.div
          className="w-full max-w-[20rem] text-left sm:max-w-[36rem] md:ml-auto md:max-w-[46rem] md:text-right"
          style={enableScrollFx ? { y: copyY, opacity: copyOpacity } : undefined}
        >
          <p className="eyebrow mb-3 inline-flex max-w-full items-center gap-2.5 text-[0.68rem] tracking-[0.14em] text-white/85 sm:mb-3 sm:gap-3 sm:text-[0.74rem] sm:tracking-[0.12em] sm:text-white/80 md:ml-auto md:flex-row-reverse">
            <span className="h-px w-6 shrink-0 bg-white/70 sm:w-8 sm:bg-white/55" aria-hidden />
            <span className="min-w-0 drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)] sm:hidden">{copy.locationMobile}</span>
            <span className="hidden min-w-0 drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] sm:inline">{copy.location}</span>
          </p>

          <h1 className="font-display section-title text-[clamp(1.55rem,6.2vw,1.85rem)] leading-[1.12] tracking-[-0.022em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] sm:text-[clamp(2.45rem,8vw,4.6rem)] sm:leading-[1.04] sm:tracking-[-0.03em]">
            <span className="block text-pretty sm:whitespace-nowrap">{copy.line1}</span>
            <span className="mt-1 block text-pretty sm:hidden">
              <span className="block">{copy.line2a}</span>
              <span className="block">{copy.line2b}</span>
            </span>
            <span className="mt-1.5 hidden text-pretty sm:mt-1 sm:block sm:whitespace-nowrap">{copy.line2}</span>
          </h1>

          <p className="mt-4 max-w-[18.5rem] border-t border-white/40 pt-3 text-[0.78rem] leading-[1.4] text-white/90 sm:mt-4 sm:max-w-none sm:whitespace-nowrap sm:border-white/30 sm:pt-3 sm:text-[0.9rem] sm:leading-snug sm:text-white/80 md:ml-auto md:border-t-0 md:border-r md:border-white/30 md:pr-3.5 md:pt-0 md:text-[1rem]">
            <span className="drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:hidden">{copy.supportMobile}</span>
            <span className="hidden sm:inline">{copy.support}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
