import type { Locale } from "@/lib/i18n";
import { layoutContentMaxClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const figures = [
  {
    value: "40+",
    labelIt: "Anni di esperienza",
    labelEn: "Years of experience",
  },
  {
    value: "1000+",
    labelIt: "Progetti completati",
    labelEn: "Completed projects",
  },
] as const;

export function StatsSection({ locale }: { locale: Locale }) {
  const sectionLabel = locale === "en" ? "Key figures" : "Cifre chiave";

  return (
    <section
      className={`lazy-section ${ui.brandGradient} px-4 py-14 text-white sm:px-5 sm:py-16 md:px-10`}
      aria-label={sectionLabel}
    >
      <div className={layoutContentMaxClass}>
        <dl className="grid grid-cols-2 gap-8 sm:gap-16 md:gap-24">
          {figures.map((f) => (
            <div key={f.value} className="reveal-block text-left sm:text-center">
              <dt className="sr-only">{locale === "en" ? f.labelEn : f.labelIt}</dt>
              <dd>
                <p className="font-display text-4xl font-medium lining-nums tracking-tight text-white sm:text-5xl md:text-6xl">
                  {f.value}
                </p>
                <p className="mt-2 text-sm text-white/75 sm:mt-3 sm:text-base">
                  {locale === "en" ? f.labelEn : f.labelIt}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
