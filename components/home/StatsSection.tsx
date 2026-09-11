"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { stats } from "@/lib/content";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

function Counter({
  target,
  suffix,
  reduced,
  active,
}: {
  target: number;
  suffix: string;
  reduced: boolean;
  active: boolean;
}) {
  // SSR / first paint must show the real target (not 0+) for SEO and no-JS.
  const [v, setV] = useState(target);

  useEffect(() => {
    if (reduced) {
      setV(target);
      return;
    }
    if (!active) return;
    setV(0);
    const duration = 1800;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const ease = 1 - (1 - p) ** 3;
      setV(Math.floor(target * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reduced]);

  return (
    <span className={`font-display text-3xl font-medium lining-nums tabular-nums tracking-tight text-white sm:text-4xl md:text-5xl`}>
      {v}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = !!useReducedMotion();
  const copy =
    locale === "en"
      ? {
          heading: "Statistics",
          intro: "Figures that reflect the practice's experience, delivery capacity and client trust over time.",
          labels: ["Years of experience", "Completed projects", "Satisfied clients"],
        }
      : {
          heading: "Statistiche",
          intro: "Numeri che raccontano esperienza, capacità di realizzazione e fiducia dei clienti nel tempo.",
          labels: ["Anni di esperienza", "Progetti completati", "Clienti soddisfatti"],
        };

  return (
    <section
      ref={ref}
      className={`lazy-section ${ui.brandGradient} px-4 py-14 text-white sm:px-5 sm:py-20 md:px-10`}
      aria-labelledby="stats-heading"
    >
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 id="stats-heading" className={`font-display ${ui.homeSectionTitleInverted}`}>
              {copy.heading}
            </h2>
            <div className="home-section-accent home-section-accent--light" aria-hidden />
          </div>
          <p className="home-split-header__right home-split-header__right--inverted">{copy.intro}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          {stats.map((s, index) => (
            <div
              key={s.label}
              className="reveal-block rounded-xl border border-white/15 bg-white/[0.07] px-3 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-6 sm:py-8"
            >
              <Counter target={s.value} suffix={s.suffix} reduced={reduced} active={inView} />
              <p className="mt-2 text-[0.78rem] font-medium tracking-normal text-white/85 sm:mt-3 sm:text-sm">
                {copy.labels[index] ?? s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
