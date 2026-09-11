"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { chromeCopy, getNavLabel, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

const footerServices = {
  it: [
    { href: "/servizi#progettazione-strutturale", label: "Progettazione strutturale" },
    { href: "/servizi#urbanistica-architettura", label: "Urbanistica e architettura" },
    { href: "/servizi#direzione-lavori", label: "Direzione lavori" },
    { href: "/servizi#servizi-tecnici", label: "Servizi tecnici" },
    { href: "/servizi#sicurezza-cantieri", label: "Sicurezza cantieri" },
    { href: "/servizi#assistenza-immobiliare", label: "Assistenza immobiliare" },
  ],
  en: [
    { href: "/servizi#progettazione-strutturale", label: "Structural design" },
    { href: "/servizi#urbanistica-architettura", label: "Planning and architecture" },
    { href: "/servizi#direzione-lavori", label: "Construction supervision" },
    { href: "/servizi#servizi-tecnici", label: "Technical services" },
    { href: "/servizi#sicurezza-cantieri", label: "Site safety" },
    { href: "/servizi#assistenza-immobiliare", label: "Property support" },
  ],
} as const;

export function SiteFooter() {
  const locale = useLocale();
  const copy = chromeCopy[locale].footer;
  const localizedFooterServices = footerServices[locale];
  const footerTagline = locale === "en" ? "Engineering - Architecture - Urban Planning" : site.tagline;

  return (
    <footer className={`mt-12 border-t border-[#3d5a7a]/35 ${ui.brandGradient} py-10 text-white sm:mt-16 sm:py-14`}>
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            <div>
              <p className={`font-display mb-3 text-lg font-medium tracking-tight sm:mb-4 sm:text-xl`}>{copy.services}</p>
              <ul className="space-y-0.5 text-sm text-white/82">
                {localizedFooterServices.map((item) => (
                  <li key={item.href}>
                    <Link className={ui.footerLink} href={localizeHref(item.href, locale)} title={linkTitles.servizio(item.label, locale)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={`font-display mb-3 text-lg font-medium tracking-tight sm:mb-4 sm:text-xl`}>{copy.company}</p>
              <ul className="space-y-0.5 text-sm text-white/82">
                <li>
                  <Link className={ui.footerLink} href={localizeHref("/chi-siamo", locale)} title={linkTitles.pagina(getNavLabel(locale, "about"))}>
                    {getNavLabel(locale, "about")}
                  </Link>
                </li>
                <li>
                  <Link className={ui.footerLink} href={localizeHref("/progetti", locale)} title={linkTitles.pagina(getNavLabel(locale, "projects"))}>
                    {getNavLabel(locale, "projects")}
                  </Link>
                </li>
                <li>
                  <Link className={ui.footerLink} href={localizeHref("/contatti", locale)} title={linkTitles.pagina(getNavLabel(locale, "contacts"))}>
                    {getNavLabel(locale, "contacts")}
                  </Link>
                </li>
                <li>
                  <Link className={ui.footerLink} href={localizeHref("/privacy-policy", locale)} title={linkTitles.privacy}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className={`font-display mb-3 text-lg font-medium tracking-tight sm:mb-4 sm:text-xl`}>{copy.contacts}</p>
              <ul className="space-y-0.5 text-sm text-white/82">
                <li className="py-1.5">{site.addressLine}</li>
                <li>
                  <a className={ui.footerLink} href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, locale)}>
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a className={ui.footerLink} href={`mailto:${site.email}`} title={linkTitles.email(site.email, locale)}>
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={linkTitles.linkedin(locale)}
              aria-label={copy.followLinkedin}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-white/75 sm:mt-8 sm:pt-8">
            <p>
              &copy; {new Date().getFullYear()} {site.legalName} - {copy.rights} |{" "}
              <Link className={`${ui.footerLink} underline underline-offset-2`} href={localizeHref("/privacy-policy", locale)} title={linkTitles.privacy}>
                Privacy policy
              </Link>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/85">{footerTagline}</p>
            <p className="mt-1">P.IVA {site.piva}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
