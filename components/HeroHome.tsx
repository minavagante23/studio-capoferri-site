"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { fontDisplay } from "@/lib/fonts";
import { chromeCopy, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/**
 * Hero SOTA budget:
 * - brand is in the header logo
 * - one large rotating H1 (primary visual)
 * - one short support line (SEO keywords)
 * - one CTA
 * - full-bleed image
 */
const heroSlidesByLocale = {
  it: [
    {
      src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp",
      alt: "Strutture in acciaio pre-fabbricate - progetti Studio Capoferri Nord Italia, Brescia, Bergamo, Milano",
      line1: "Progettazione integrata",
      line2: "dalla fattibilità al cantiere",
    },
    {
      src: "/assets/superstudio-village-sala-proiezione.webp",
      alt: "Strutture in acciaio per edilizia residenziale e industriale - Studio Capoferri Lombardia",
      line1: "Esperienza tecnica",
      line2: "per soluzioni su misura",
    },
    {
      src: "/assets/hero-struttura-new.webp",
      alt: "Strutture in acciaio - efficienza e rapidità",
      line1: "Strutture in acciaio",
      line2: "efficienza e rapidità",
    },
  ],
  en: [
    {
      src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp",
      alt: "Prefabricated steel structures - Studio Capoferri projects in Northern Italy",
      line1: "Steel structures",
      line2: "and site support",
    },
    {
      src: "/assets/superstudio-village-sala-proiezione.webp",
      alt: "Steel structures for residential and industrial buildings - Studio Capoferri Lombardy",
      line1: "Shop drawings",
      line2: "to erection assistance",
    },
    {
      src: "/assets/hero-struttura-new.webp",
      alt: "Steel structures - efficiency and speed",
      line1: "Northern Italy",
      line2: "talk to us in English",
    },
  ],
} as const;

export function HeroHome() {
  const locale = useLocale();
  const copy = chromeCopy[locale].hero;
  const heroSlides = heroSlidesByLocale[locale];
  const reduceMotion = !!useReducedMotion();
  const [i, setI] = useState(0);
  const [extraSlidesReady, setExtraSlidesReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, [reduceMotion, heroSlides.length]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setExtraSlidesReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const s = heroSlides[i];
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
                alt={slide.alt}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/18 to-black/24" aria-hidden />
        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0.1 }}
          animate={reduceMotion ? undefined : { opacity: [0.08, 0.12, 0.08] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at 70% 35%, black 12%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 35%, black 12%, transparent 70%)",
          }}
        />
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

          <h1
            className={`${fontDisplay.className} section-title text-[clamp(2rem,7vw,3.85rem)] leading-[0.98] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]`}
            aria-live="polite"
          >
            <span className="block sm:whitespace-nowrap">{s.line1}</span>
            <span className="mt-1 block text-white/95 sm:whitespace-nowrap">{s.line2}</span>
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
                aria-label={`Slide ${idx + 1}: ${slide.line1}`}
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
