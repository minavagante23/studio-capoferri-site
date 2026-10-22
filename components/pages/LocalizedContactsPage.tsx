"use client";

import { ContactForm } from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MapEmbed } from "@/components/MapEmbed";
import { useLocale } from "@/components/LocaleProvider";
import { contactPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedContactsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const openingHours = isEn ? site.openingHoursDisplayEn : site.openingHoursDisplay;
  const contactLd = contactPageJsonLd(locale);
  const cardH2 = `font-display ${ui.sectionHeadingAccent} mb-4 sm:mb-5`;

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className={`reveal-block home-plate home-plate--well mb-6 ${ui.articleMax} sm:mb-8`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>
              {isEn ? "Contact structural engineers in Italy" : "Contatti"}
            </h1>
          </div>

          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
            <section aria-labelledby="recapiti-heading" className="reveal-block home-plate home-plate--well">
              <h2 id="recapiti-heading" className={cardH2}>
                {isEn ? "Details" : "Recapiti"}
              </h2>
              <p className={`mb-4 font-semibold text-[#1c1e21] sm:mb-6 ${ui.body}`}>{site.gmbName}</p>
              <ul className={`space-y-2 sm:space-y-3 ${ui.bodyMuted}`}>
                <li>
                  <strong className="font-semibold text-[#1c1e21]">{isEn ? "Address" : "Indirizzo"}</strong>:{" "}
                  <address className="inline not-italic">{site.addressLine}</address>
                </li>
                <li>
                  <strong className="font-semibold text-[#1c1e21]">{isEn ? "Phone" : "Telefono"}</strong>:{" "}
                  <a
                    href={`tel:${site.phoneTel}`}
                    title={linkTitles.telefono(site.phoneDisplay, locale)}
                    className="inline-block min-h-[44px] py-1 underline-offset-2 hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-[#1c1e21]">Email</strong>:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    title={linkTitles.email(site.email, locale)}
                    className="inline-block min-h-[44px] py-1 underline-offset-2 hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-[#1c1e21]">{isEn ? "Hours" : "Orari"}</strong>: {openingHours}
                </li>
              </ul>
              <div className="mt-5 border-t border-[#1c1e21]/10 pt-4 sm:mt-7 sm:pt-6">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={linkTitles.linkedin(locale)}
                  aria-label={isEn ? "Follow us on LinkedIn - Studio Capoferri" : "Seguici su LinkedIn - Studio Capoferri"}
                  className="inline-flex min-h-[44px] items-center gap-2 py-1 text-sm font-semibold text-[#1c1e21] underline-offset-2 transition hover:text-[#b01010] hover:underline"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#1c1e21]/15 bg-[#1c1e21]/5 text-[#1c1e21]">
                    <LinkedInIcon className="h-4 w-4" />
                  </span>
                  {isEn ? "Follow us on LinkedIn" : "Seguici su LinkedIn"}
                </a>
              </div>
            </section>

            <section aria-labelledby="mappa-heading" className="reveal-block home-plate home-plate--well">
              <h2 id="mappa-heading" className={cardH2}>
                {isEn ? "Where we are" : "Dove siamo"}
              </h2>
              <MapEmbed />
            </section>
          </div>

          <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
            <div className="reveal-block home-plate home-plate--well">
              <h2 className={`font-display ${ui.sectionHeadingAccent} mb-2 sm:mb-3`}>
                {isEn ? "Contact us" : "Contattaci"}
              </h2>
              <p className={`mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
                {isEn
                  ? "Scope, programme and constraints. We reply in English."
                  : "Compila il form con i dettagli del tuo intervento. Riceverai un riscontro tecnico puntuale dal nostro team."}
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
