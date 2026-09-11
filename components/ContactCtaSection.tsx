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
  /** When true, skip the outer plate (e.g. already inside another plate). */
  plain?: boolean;
};

export function ContactCtaSection({
  locale,
  title,
  description,
  className = "mt-10",
  plain = false,
}: Props) {
  const copy = chromeCopy[locale].cta;
  const resolvedTitle = title ?? copy.defaultTitle;
  const resolvedDescription = description ?? copy.defaultDescription;

  const inner = (
    <>
      <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4`}>{resolvedTitle}</h2>
      <p className={`mb-6 max-w-[560px] ${ui.bodyMuted}`}>{resolvedDescription}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href={localizeHref("/contatti#form-contatti", locale)} className={ui.btnPrimary} title={linkTitles.consulenza(locale)}>
          {copy.requestConsultation}
        </Link>
        <Link
          href={localizeHref("/servizi#progettazione-strutturale", locale)}
          className={ui.btnOutline}
          title={linkTitles.servizio(locale === "en" ? "Structural design" : "Progettazione strutturale", locale)}
        >
          {copy.discoverServices}
        </Link>
      </div>
    </>
  );

  return (
    <section className={className}>
      {plain ? inner : <div className="home-plate home-plate--well">{inner}</div>}
    </section>
  );
}
