"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { fontDisplay } from "@/lib/fonts";
import { chromeCopy, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { ui } from "@/lib/ui";

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

const defaultItalianTitle = "Hai un progetto in mente?";
const defaultItalianDescription =
  "Raccontaci la tua esigenza: analizziamo fattibilità, costi e tempi e ti proponiamo la soluzione strutturale più adatta.";

export function ContactCtaSection({
  title = defaultItalianTitle,
  description = defaultItalianDescription,
  className = "mt-10",
}: Props) {
  const locale = useLocale();
  const copy = chromeCopy[locale].cta;
  const resolvedTitle = title === defaultItalianTitle ? copy.defaultTitle : title;
  const resolvedDescription = description === defaultItalianDescription ? copy.defaultDescription : description;

  return (
    <section className={className}>
      <div className="frost-card rounded-2xl p-5 text-center sm:p-7 md:p-8">
        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{resolvedTitle}</h2>
        <p className={`copy-rhythm mx-auto mb-6 max-w-[560px] ${ui.bodyMuted}`}>{resolvedDescription}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={localizeHref("/contatti#form-contatti", locale)} className={ui.btnPrimary} title={linkTitles.consulenza(locale)}>
            {copy.requestConsultation}
          </Link>
          <Link href={localizeHref("/servizi#progettazione-strutturale", locale)} className={ui.btnOutline} title={linkTitles.servizio(locale === "en" ? "Structural design" : "Progettazione strutturale", locale)}>
            {copy.discoverServices}
          </Link>
        </div>
      </div>
    </section>
  );
}
