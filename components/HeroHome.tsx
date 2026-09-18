"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy } from "@/lib/i18n";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/** Single full-bleed plate: strongest structure shot for first impression. */
const heroImage = {
  src: "/assets/hero-struttura-new.webp",
  altIt: "Interno industriale con struttura in acciaio e luce naturale, progetto Studio Capoferri",
  altEn: "Industrial interior with steel structure and natural light - Studio Capoferri project",
} as const;

const heroMinHeight = "calc(100dvh - var(--header-h, 64px))";
/** Editorial ease: soft settle, no bounce. */
const ease = [0.16, 1, 0.3, 1] as const;

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

  // No scale/zoom: only a quiet vertical drift + deepening scrim.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 0.28]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.35]);
  const enableScrollFx = motionReady && !reduceMotion;

  return (
    <section
      ref={sectionRef}
      className="hero-home relative"
      style={{ minHeight: heroMinHeight }}
      aria-label={copy.introLabel}
    >
      <div className={`absolute inset-0 ${ui.brandGradient}`} aria-hidden />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-x-0 -top-[4%] h-[108%] will-change-transform"
          style={enableScrollFx ? { y: imageY } : undefined}
        >
          <Image
            src={heroImage.src}
            alt={locale === "en" ? heroImage.altEn : heroImage.altIt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            fetchPriority="high"
          />
        </motion.div>

        {/* Base readability scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 md:bg-[linear-gradient(to_top,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.18)_100%),linear-gradient(to_left,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.12)_48%,transparent_78%)]" aria-hidden />
        {/* Scroll: plate darkens slightly: depth without zoom */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={enableScrollFx ? { opacity: scrimOpacity } : { opacity: 0 }}
          aria-hidden
        />
      </div>

      <div
        className={`hero-home__content relative z-10 mx-auto flex flex-col justify-end px-5 pb-12 pt-24 sm:px-5 sm:pb-12 sm:pt-24 md:px-5 md:pb-20 md:pt-28 ${layoutContentMaxClass}`}
        style={{ minHeight: heroMinHeight }}
      >
        <motion.div
          className="w-full max-w-[22rem] text-left sm:max-w-[36rem] md:ml-auto md:max-w-[46rem] md:text-right"
          style={enableScrollFx ? { y: copyY, opacity: copyOpacity } : undefined}
        >
          <motion.p
            className="eyebrow mb-3.5 inline-flex max-w-full items-center gap-2.5 text-[0.68rem] tracking-[0.14em] text-white/55 sm:mb-3 sm:gap-3 sm:text-[0.74rem] sm:tracking-[0.12em] md:ml-auto md:flex-row-reverse"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: reduceMotion ? 0 : 0.08 }}
          >
            <span className="h-px w-6 shrink-0 bg-white/40 sm:w-8" aria-hidden />
            <span className="min-w-0 sm:hidden">{copy.locationMobile}</span>
            <span className="hidden min-w-0 sm:inline">{copy.location}</span>
          </motion.p>

          <motion.h1
            className="font-display section-title text-[clamp(1.8rem,7vw,2.1rem)] leading-[1.15] tracking-[-0.022em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-[clamp(2.45rem,8vw,4.6rem)] sm:leading-[1.04] sm:tracking-[-0.03em]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: reduceMotion ? 0 : 0.16 }}
          >
            <span className="block text-pretty sm:whitespace-nowrap">{copy.line1}</span>
            <span className="mt-1.5 block text-pretty sm:mt-1 sm:whitespace-nowrap">{copy.line2}</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-[20rem] border-t border-white/25 pt-3.5 text-[0.8125rem] leading-[1.45] text-white/70 sm:mt-4 sm:max-w-none sm:whitespace-nowrap sm:pt-3 sm:text-[0.9rem] sm:leading-snug md:ml-auto md:border-t-0 md:border-r md:border-white/25 md:pr-3.5 md:pt-0 md:text-[1rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: reduceMotion ? 0 : 0.28 }}
          >
            <span className="sm:hidden">{copy.supportMobile}</span>
            <span className="hidden sm:inline">{copy.support}</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
