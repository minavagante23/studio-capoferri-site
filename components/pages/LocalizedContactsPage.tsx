"use client";

import { useLocale } from "@/components/LocaleProvider";
import { ContactForm } from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MapEmbed } from "@/components/MapEmbed";
import { contactPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedContactsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const openingHours = isEn ? site.openingHoursDisplayEn : site.openingHoursDisplay;
  const contactLd = contactPageJsonLd(locale);

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="home-plate home-plate--well mb-6 max-w-[780px] sm:mb-8">
              <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>Contatti</h1>
            </div>

            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
              <section aria-labelledby="recapiti-heading" className="home-plate home-plate--well">
                <h2 id="recapiti-heading" className={`font-display ${ui.cardHeading} mb-4 sm:mb-5`}>Recapiti</h2>
                <p className="mb-4 text-[0.95rem] font-semibold text-[#2a2a2a] sm:mb-6 sm:text-[1.02rem]">
                  {site.gmbName}
                </p>
                <ul className="space-y-2 text-[0.95rem] text-[#333] sm:space-y-3 sm:text-[1.03rem]">
                  <li>
                    <strong>Indirizzo:</strong>{" "}
                    <address className="inline not-italic">{site.addressLine}</address>
                  </li>
                  <li><strong>Telefono:</strong> <a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">{site.phoneDisplay}</a></li>
                  <li><strong>Email:</strong> <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">{site.email}</a></li>
                  <li><strong>Orari:</strong> {site.openingHoursDisplay}</li>
                </ul>
                <div className="mt-5 border-t border-[#1c1e21]/10 pt-4 sm:mt-7 sm:pt-6">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={linkTitles.linkedin("it")}
                    aria-label="Seguici su LinkedIn - Studio Capoferri"
                    className="inline-flex min-h-[44px] items-center gap-2 py-1 text-sm font-semibold text-[#1c1e21] underline-offset-2 transition hover:text-[#b01010] hover:underline"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#1c1e21]/15 bg-[#1c1e21]/5 text-[#1c1e21]">
                      <LinkedInIcon className="h-4 w-4" />
                    </span>
                    Seguici su LinkedIn
                  </a>
                </div>
              </section>

              <section aria-labelledby="mappa-heading" className="home-plate home-plate--well">
                <h2 id="mappa-heading" className={`font-display ${ui.cardHeading} mb-3 px-1 sm:mb-4 sm:px-2`}>
                  Dove siamo
                </h2>
                <MapEmbed />
              </section>
            </div>

            <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
              <div className="home-plate home-plate--well">
                <h2 className={`font-display ${ui.cardHeading} mb-2 sm:mb-3`}>Contattaci</h2>
                <p className={`mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
                  Compila il form con i dettagli del tuo intervento. Riceverai un riscontro tecnico puntuale dal nostro team.
                </p>
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="home-plate home-plate--well mb-6 max-w-[780px] sm:mb-8">
            <h1 className={`font-display ${ui.pageTitle} ${ui.pageTitleLead}`}>Contact</h1>
          </div>

          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
            <section aria-labelledby="recapiti-heading" className="home-plate home-plate--well">
              <h2 id="recapiti-heading" className={`font-display ${ui.cardHeading} mb-4 sm:mb-5`}>{isEn ? "Details" : "Recapiti"}</h2>
              <p className="mb-4 text-[0.95rem] font-semibold text-[#2a2a2a] sm:mb-6 sm:text-[1.02rem]">
                {site.gmbName}
              </p>
              <ul className="space-y-2 text-[0.95rem] text-[#333] sm:space-y-3 sm:text-[1.03rem]">
                <li>
                  <strong>{isEn ? "Address" : "Indirizzo"}:</strong>{" "}
                  <address className="inline not-italic">{site.addressLine}</address>
                </li>
                <li>
                  <strong>{isEn ? "Phone" : "Telefono"}:</strong>{" "}
                  <a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, isEn ? "en" : "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <strong>{isEn ? "Hours" : "Orari"}:</strong> {openingHours}
                </li>
              </ul>
              <div className="mt-5 border-t border-[#1c1e21]/10 pt-4 sm:mt-7 sm:pt-6">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={linkTitles.linkedin(isEn ? "en" : "it")}
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

            <section aria-labelledby="mappa-heading" className="home-plate home-plate--well">
              <h2 id="mappa-heading" className={`font-display ${ui.cardHeading} mb-3 px-1 sm:mb-4 sm:px-2`}>
                {isEn ? "Where we are" : "Dove siamo"}
              </h2>
              <MapEmbed />
            </section>
          </div>

          <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
            <div className="home-plate home-plate--well">
              <h2 className={`font-display ${ui.cardHeading} mb-2 sm:mb-3`}>{isEn ? "Contact us" : "Contattaci"}</h2>
              <p className={`mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
                {isEn
                  ? "Scope, programme and constraints. We reply in English."
                  : "Oggetto, tempi e vincoli. Rispondiamo noi."}
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
