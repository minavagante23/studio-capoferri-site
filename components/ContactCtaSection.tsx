import Link from "next/link";
import { fontDisplay } from "@/lib/fonts";
import { chromeCopy, localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { ui } from "@/lib/ui";

type Props = {
  locale: Locale;
  title?: string;
  description?: string;
  className?: string;
};

export function ContactCtaSection({
  locale,
  title,
  description,
  className = "mt-10",
}: Props) {
  const copy = chromeCopy[locale].cta;
  const resolvedTitle = title ?? copy.defaultTitle;
  const resolvedDescription = description ?? copy.defaultDescription;

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
