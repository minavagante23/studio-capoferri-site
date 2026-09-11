"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/**
 * Hero budget:
 * - brand is in the header logo
 * - fixed H1 + support line (message stays stable)
 * - carousel changes only the full-bleed image
 * - one CTA
 */
const heroSlides = [
  {
    src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp",
    altIt: "Strutture in acciaio pre-fabbricate - progetti Studio Capoferri Nord Italia, Brescia, Bergamo, Milano",
    altEn: "Prefabricated steel structures - Studio Capoferri projects in Northern Italy",
  },
  {
    src: "/assets/superstudio-village-sala-proiezione.webp",
    altIt: "Strutture in acciaio per edilizia residenziale e industriale - Studio Capoferri Lombardia",
    altEn: "Steel structures for residential and industrial buildings - Studio Capoferri Lombardy",
  },
  {
    src: "/assets/hero-struttura-new.webp",
    altIt: "Strutture in acciaio - efficienza e rapidità",
    altEn: "Steel structures - efficiency and speed",
  },
] as const;

export function HeroHome() {
  const locale = useLocale();
  const copy = chromeCopy[locale].hero;
  const reduceMotion = !!useReducedMotion();
  const [i, setI] = useState(0);
  const [extraSlidesReady, setExtraSlidesReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, [reduceMotion]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setExtraSlidesReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const subtleEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="relative min-h-[calc(100svh-72px)] overflow-hidden sm:min-h-[calc(100svh-78px)] md:min-h-[calc(100svh-94px)]"
      aria-label={copy.introLabel}
    >
      <div className={`absolute inset-0 ${ui.brandGradient}`} aria-hidden />

      <div className="absolute inset-0">
        {heroSlides.map((slide, idx) => {
          if (idx > 0 && !extraSlidesReady) return null;

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[1.4s] ease-in-out ${idx === i ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={slide.src}
                alt={locale === "en" ? slide.altEn : slide.altIt}
                fill
                className="object-cover brightness-[1.1] saturate-[1.04]"
                sizes="100vw"
                priority={idx === 0}
                fetchPriority={idx === 0 ? "high" : "auto"}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-black/10 to-black/14" aria-hidden />
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-[calc(100svh-72px)] flex-col justify-end gap-5 px-4 pb-10 pt-20 sm:min-h-[calc(100svh-78px)] sm:gap-7 sm:px-5 sm:pb-12 sm:pt-24 md:min-h-[calc(100svh-94px)] md:px-5 md:pb-20 md:pt-28 ${layoutContentMaxClass}`}
      >
        <motion.div
          className="max-w-[min(100%,28rem)] text-left sm:max-w-[36rem] md:ml-auto md:max-w-[46rem] md:text-right"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: subtleEase }}
        >
          <p className="eyebrow mb-3 text-white/70">{copy.location}</p>

          <h1 className="font-display section-title text-[clamp(2rem,7vw,3.85rem)] leading-[1.08] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]">
            <span className="block sm:whitespace-nowrap">{copy.line1}</span>
            <span className="mt-1 block text-white/95 sm:whitespace-nowrap">{copy.line2}</span>
          </h1>

          <p className="mt-4 text-[0.85rem] leading-snug tracking-[0.01em] text-white/82 sm:whitespace-nowrap sm:text-[0.9rem] md:ml-auto md:text-[1rem]">
            {copy.support}
          </p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.55, ease: subtleEase }}
          >
            <Link
              href={localizeHref("/contatti#form-contatti", locale)}
              className={`focus-ring mt-6 sm:mt-8 ${ui.btnOnDark}`}
              title={linkTitles.consulenza(locale)}
            >
              {copy.cta}
            </Link>
          </motion.div>
        </motion.div>

        {heroSlides.length > 1 ? (
          <div className="flex items-center justify-start gap-1 md:ml-auto md:justify-end" role="tablist" aria-label={copy.slidePicker}>
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={locale === "en" ? `Image ${idx + 1}` : `Immagine ${idx + 1}`}
                className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                  idx === i ? "bg-white/16" : "bg-white/6 hover:bg-white/12"
                }`}
                onClick={() => setI(idx)}
              >
                <span className={`block h-2.5 w-2.5 rounded-full transition ${idx === i ? "bg-white" : "bg-white/48 hover:bg-white/70"}`} />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
