import Link from "next/link";
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
  className = "mt-10 sm:mt-14",
}: Props) {
  const copy = chromeCopy[locale].cta;
  const resolvedTitle = title ?? copy.defaultTitle;
  const resolvedDescription = description ?? copy.defaultDescription;

  return (
    <section className={className}>
      <div className="border-t border-[#1c1e21]/12 pt-8 sm:pt-10">
        <h2 className={`font-display ${ui.sectionHeadingAccent} mb-3`}>{resolvedTitle}</h2>
        <p className={`max-w-[36rem] ${ui.bodyMuted}`}>{resolvedDescription}</p>
        <p className="mt-4">
          <Link href={localizeHref("/contatti#form-contatti", locale)} className="link-accent" title={linkTitles.consulenza(locale)}>
            {copy.writeUs}
          </Link>
        </p>
      </div>
    </section>
  );
}
