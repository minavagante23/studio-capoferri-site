"use client";

import { useLocale } from "@/components/LocaleProvider";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedPrivacyPageContent() {
  const isEn = useLocale() === "en";
  const h2 = `font-display ${ui.sectionHeadingAccent} mb-4 mt-12`;
  const h3 = `font-display mb-3 text-lg font-medium tracking-tight text-[#1c1e21]`;

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="max-w-[860px]">
            <div className="home-plate home-plate--well mb-7 sm:mb-10">
              <h1 className={`font-display ${ui.pageTitle} mb-0`}>
                {isEn ? "Privacy and cookie policy" : "Privacy e cookie policy"}
              </h1>
            </div>

            <p className={`mb-7 sm:mb-10 ${ui.body}`}>
              <strong>{isEn ? "Data controller" : "Titolare del trattamento"}:</strong> {site.legalName}, {site.addressLine},{" "}
              {isEn ? "VAT" : "P.IVA"} IT{site.piva}. Email:{" "}
              <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="link-accent">
                {site.email}
              </a>
            </p>

            <p className={ui.body}>
              {isEn
                ? "This notice describes how personal data are processed when you browse this website and when you contact us, pursuant to Articles 13–14 of Regulation (EU) 2016/679 (GDPR) and Italian Legislative Decree 196/2003 as amended."
                : "Questa informativa descrive come vengono trattati i dati personali quando navighi sul sito e quando ci contatti, ai sensi degli artt. 13–14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 e s.m.i."}
            </p>

            <h2 className={h2}>{isEn ? "Data we process" : "Dati trattati"}</h2>
            <ul className={`list-disc space-y-2 pl-5 ${ui.body}`}>
              <li>
                {isEn
                  ? "Browsing data: IP address, date/time, pages visited, device/browser information, collected via Google Analytics only after cookie consent."
                  : "Dati di navigazione: indirizzo IP, data/ora, pagine visitate, informazioni su dispositivo/browser, raccolti tramite Google Analytics solo dopo il consenso ai cookie."}
              </li>
              <li>
                {isEn
                  ? "Contact form data: name, email, optional subject/city, message content."
                  : "Dati del modulo di contatto: nome, email, oggetto/città (facoltativi), contenuto del messaggio."}
              </li>
              <li>
                {isEn
                  ? "Cookie preference: your accept/reject choice stored locally so we remember it on later visits."
                  : "Preferenza cookie: la scelta Accetta/Rifiuta salvata in locale per ricordarla nelle visite successive."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Purposes and legal bases" : "Finalità e basi giuridiche"}</h2>
            <ul className={`list-disc space-y-2 pl-5 ${ui.body}`}>
              <li>
                {isEn
                  ? "Replying to contact requests: legal basis: your consent (Art. 6(1)(a) GDPR) and/or steps prior to a contract (Art. 6(1)(b))."
                  : "Rispondere alle richieste di contatto: base giuridica: consenso (art. 6, par. 1, lett. a GDPR) e/o misure precontrattuali (art. 6, par. 1, lett. b)."}
              </li>
              <li>
                {isEn
                  ? "Site statistics with Google Analytics: legal basis: consent (Art. 6(1)(a) GDPR / ePrivacy). Without consent the analytics script is not loaded."
                  : "Statistiche di sito con Google Analytics: base giuridica: consenso (art. 6, par. 1, lett. a GDPR / ePrivacy). Senza consenso lo script analytics non viene caricato."}
              </li>
              <li>
                {isEn
                  ? "Embedding Google Maps on the contacts page: legal basis: consent. Without consent the map is not loaded."
                  : "Incorporamento di Google Maps nella pagina contatti: base giuridica: consenso. Senza consenso la mappa non viene caricata."}
              </li>
              <li>
                {isEn
                  ? "Technical operation of the site (including remembering cookie choice): legal basis: legitimate interest / necessity for the service requested (Art. 6(1)(f))."
                  : "Funzionamento tecnico del sito (incluso il ricordo della scelta cookie): base giuridica: legittimo interesse / necessità per il servizio richiesto (art. 6, par. 1, lett. f)."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Recipients and processors" : "Destinatari e responsabili"}</h2>
            <p className={ui.body}>
              {isEn
                ? "Data may be processed by providers acting as processors or independent controllers, in particular:"
                : "I dati possono essere trattati da fornitori che agiscono come responsabili del trattamento o titolari autonomi, in particolare:"}
            </p>
            <ul className={`mt-3 list-disc space-y-2 pl-5 ${ui.body}`}>
              <li>
                {isEn
                  ? "Formspree: receives contact-form submissions so we can read and reply to messages."
                  : "Formspree: riceve i messaggi del form di contatto per consentirci di leggerli e rispondere."}
              </li>
              <li>
                {isEn
                  ? `Google Ireland Ltd / Google LLC, Google Analytics (${site.gaMeasurementId}) and, if accepted, Google Maps embeds.`
                  : `Google Ireland Ltd / Google LLC, Google Analytics (${site.gaMeasurementId}) e, se accettato, l’embed di Google Maps.`}
              </li>
              <li>
                {isEn
                  ? "Hosting / infrastructure providers needed to publish the website."
                  : "Fornitori di hosting / infrastruttura necessari alla pubblicazione del sito."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Transfers outside the EU/EEA" : "Trasferimenti extra UE/SEE"}</h2>
            <p className={ui.body}>
              {isEn
                ? "Some providers (notably Google and Formspree) may process data in countries outside the European Economic Area. Where applicable, transfers rely on adequacy decisions or Standard Contractual Clauses and additional safeguards offered by those providers."
                : "Alcuni fornitori (in particolare Google e Formspree) possono trattare dati in Paesi fuori dallo Spazio economico europeo. Ove applicabile, i trasferimenti si basano su decisioni di adeguatezza o Clausole contrattuali tipo e sulle misure aggiuntive previste da tali fornitori."}
            </p>

            <h2 className={h2}>{isEn ? "Retention" : "Conservazione"}</h2>
            <ul className={`list-disc space-y-2 pl-5 ${ui.body}`}>
              <li>
                {isEn
                  ? "Contact messages: kept for the time needed to handle the request and related follow-up, then deleted or anonymised unless longer retention is required by law or ongoing dealings."
                  : "Messaggi di contatto: conservati per il tempo necessario a gestire la richiesta e il relativo follow-up, poi cancellati o anonimizzati salvo obblighi di legge o rapporti in corso."}
              </li>
              <li>
                {isEn
                  ? "Analytics data: retained according to the Google Analytics property settings configured by the controller."
                  : "Dati analytics: conservati secondo le impostazioni della proprietà Google Analytics configurate dal titolare."}
              </li>
              <li>
                {isEn
                  ? "Cookie preference: stored for up to 12 months, then you will be asked again."
                  : "Preferenza cookie: memorizzata fino a 12 mesi, poi la richiesta viene riproposta."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Your rights" : "Diritti dell’interessato"}</h2>
            <p className={ui.body}>
              {isEn
                ? "You may request access, rectification, erasure, restriction, portability, and object to processing where applicable (Arts. 15–22 GDPR). You may withdraw cookie/analytics consent at any time via “Change cookie preferences” below or the banner controls. Withdrawal does not affect processing already carried out."
                : "Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opporti al trattamento nei casi previsti (artt. 15–22 GDPR). Puoi revocare il consenso ai cookie/analytics in qualsiasi momento tramite “Modifica preferenze cookie” qui sotto o dal banner. La revoca non pregiudica i trattamenti già effettuati."}
            </p>
            <p className={`mt-3 ${ui.body}`}>
              {isEn
                ? "To exercise your rights, write to "
                : "Per esercitare i diritti, scrivi a "}
              <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="link-accent">
                {site.email}
              </a>
              {isEn
                ? ". You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, www.garanteprivacy.it)."
                : ". Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)."}
            </p>

            <h2 id="cookie" className={`font-display ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`}>
              {isEn ? "Cookies" : "Cookie"}
            </h2>
            <p className={`mb-6 ${ui.body}`}>
              {isEn
                ? "We use essential technical cookies and, only with your prior consent, non-essential third-party cookies/scripts. You can accept or reject non-essential cookies from the banner; refusal does not block browsing of the site."
                : "Utilizziamo cookie tecnici necessari e, solo con il tuo consenso preventivo, cookie/script di terze parti non necessari. Puoi accettare o rifiutare i cookie non necessari dal banner; il rifiuto non impedisce la navigazione del sito."}
            </p>

            <div className="space-y-5 sm:space-y-8">
              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Technical cookies (no consent required)" : "Cookie tecnici (senza consenso)"}</h3>
                <p className={ui.body}>
                  {isEn
                    ? "Preference cookie that stores whether you accepted or rejected non-essential cookies (localStorage / first-party cookie, about 12 months). Needed to remember your choice."
                    : "Cookie/preferenza che memorizza se hai accettato o rifiutato i cookie non necessari (localStorage / cookie di prima parte, circa 12 mesi). Serve a ricordare la tua scelta."}
                </p>
              </div>

              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Analytics: Google Analytics 4 (consent required)" : "Statistiche, Google Analytics 4 (consenso richiesto)"}</h3>
                <p className={ui.body}>
                  {isEn
                    ? `Provider: Google. Measurement ID: ${site.gaMeasurementId}. Purpose: aggregated statistics on visits and page use. Loaded only after “Accept”. If you refuse or have not chosen yet, the gtag.js script is not installed.`
                    : `Fornitore: Google. ID misurazione: ${site.gaMeasurementId}. Finalità: statistiche aggregate su visite e uso delle pagine. Caricato solo dopo “Accetta”. Se rifiuti o non hai ancora scelto, lo script gtag.js non viene installato.`}
                </p>
              </div>

              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Embedded content: Google Maps (consent required)" : "Contenuti incorporati, Google Maps (consenso richiesto)"}</h3>
                <p className={ui.body}>
                  {isEn
                    ? "On the contacts page, the map iframe loads only after consent. Without consent a placeholder is shown instead."
                    : "Nella pagina contatti, l’iframe della mappa si carica solo dopo il consenso. Senza consenso viene mostrato un segnaposto."}
                </p>
              </div>

              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Contact form: Formspree (not a tracking cookie)" : "Modulo di contatto, Formspree (non è un cookie di tracciamento)"}</h3>
                <p className={ui.body}>
                  {isEn
                    ? "When you submit the form after accepting this privacy notice, the message is sent to Formspree so we can receive it. This is processing of the request you make, not website audience tracking."
                    : "Quando invii il form dopo aver accettato questa informativa, il messaggio viene inviato a Formspree per consentirci di riceverlo. Si tratta del trattamento della richiesta che tu stesso effettui, non di tracciamento del pubblico del sito."}
                </p>
              </div>

              <div className={`rounded-sm p-4 sm:p-6 ${ui.brandGradientCompact} text-white`}>
                <h3 className={`font-display mb-3 text-lg font-medium tracking-tight`}>
                  {isEn ? "Manage cookie preferences" : "Gestione delle preferenze cookie"}
                </h3>
                <p className="mb-3 copy-rhythm text-[0.98rem] leading-relaxed text-white/95 sm:text-[1.05rem]">
                  {isEn
                    ? "You can change your choice at any time. Resetting preferences reloads the page and shows the banner again."
                    : "Puoi modificare la scelta in qualsiasi momento. Il reset delle preferenze ricarica la pagina e ripropone il banner."}
                </p>
                <div className="mt-5">
                  <CookiePreferencesButton />
                </div>
              </div>
            </div>

            <p className={`mt-12 text-sm text-[#666] ${ui.body}`}>
              {isEn
                ? "Last updated: September 2026."
                : "Ultimo aggiornamento: settembre 2026."}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
