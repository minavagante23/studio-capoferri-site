"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroHome() {
  const locale = useLocale();
  const copy = chromeCopy[locale].hero;
  const reduceMotion = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.06, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100svh-72px)] overflow-hidden sm:min-h-[calc(100svh-78px)] md:min-h-[calc(100svh-94px)]"
      aria-label={copy.introLabel}
    >
      <div className={`absolute inset-0 ${ui.brandGradient}`} aria-hidden />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY, scale: imageScale }}>
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease }}
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
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/28 to-black/22 md:bg-[linear-gradient(to_top,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.18)_100%),linear-gradient(to_left,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.12)_48%,transparent_78%)]"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-[calc(100svh-72px)] flex-col justify-end gap-5 px-4 pb-10 pt-20 sm:min-h-[calc(100svh-78px)] sm:gap-7 sm:px-5 sm:pb-12 sm:pt-24 md:min-h-[calc(100svh-94px)] md:px-5 md:pb-20 md:pt-28 ${layoutContentMaxClass}`}
      >
        <div className="max-w-[min(100%,28rem)] text-left sm:max-w-[36rem] md:ml-auto md:max-w-[46rem] md:text-right">
          <motion.p
            className="eyebrow mb-3 inline-flex max-w-full items-center gap-3 text-[#e8b478] drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)] md:ml-auto md:flex-row-reverse"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: reduceMotion ? 0 : 0.12 }}
          >
            <span className="h-px w-8 shrink-0 bg-[#e8b478]" aria-hidden />
            <span className="min-w-0">{copy.location}</span>
          </motion.p>

          <motion.h1
            className="font-display section-title text-[clamp(1.95rem,9.5vw,2.45rem)] leading-[1.04] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:text-[clamp(2.45rem,8vw,4.6rem)]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: reduceMotion ? 0 : 0.2 }}
          >
            <span className="block whitespace-nowrap">{copy.line1}</span>
            <span className="mt-1 block whitespace-nowrap text-white">{copy.line2}</span>
          </motion.h1>

          <motion.p
            className="mt-4 border-t border-[#e8b478]/45 pt-3 text-[0.85rem] leading-snug text-[#e8b478] drop-shadow-[0_1px_12px_rgba(0,0,0,0.75)] sm:whitespace-nowrap sm:text-[0.9rem] md:ml-auto md:border-t-0 md:border-r md:border-[#e8b478]/55 md:pr-3.5 md:pt-0 md:text-[1rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: reduceMotion ? 0 : 0.32 }}
          >
            {copy.support}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
