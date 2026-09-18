import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { StatsSection } from "@/components/home/StatsSection";
import {
  certifications as originalCertifications,
  certificationsIntro as originalCertificationsIntro,
  homeChiSiamo,
  homeProgettiIntro,
  homeServiceCards,
  homeServiziIntro,
  zoneContent,
  zoneDescription as originalZoneDescription,
  zoneFooter as originalZoneFooter,
} from "@/lib/content";
import { homeChiSiamoImages } from "@/lib/images";
import { localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

const titleCls = `font-display ${ui.homeSectionTitle}`;
const titleInvertedCls = `font-display ${ui.homeSectionTitleInverted}`;

type AboutBlock = {
  text: ReactNode;
  textMobile?: ReactNode;
  image: keyof typeof homeChiSiamoImages;
};

const copy = {
  it: {
    aboutTitle: homeChiSiamo.title,
    aboutBlocks: homeChiSiamo.blocks.map((block) => ({
      text: block.text,
      textMobile: block.textMobile,
      image: block.image,
    })) as AboutBlock[],
    servicesTitle: "Servizi",
    servicesIntro: homeServiziIntro,
    serviceCards: homeServiceCards.map((card) => [card.title, card.description, card.href]) as [string, string, string][],
    allServices: "Tutti i servizi",
    projectsTitle: "Progetti",
    projectsIntro: homeProgettiIntro,
    projectsCta: "Tutti i progetti",
    certificationsTitle: "Abilitazioni professionali",
    certificationsIntro: originalCertificationsIntro,
    certifications: originalCertifications.map((item) => [item.title, item.text]) as [string, string][],
    zoneTitle: zoneContent.title,
    zoneHeading: zoneContent.heading,
    zoneDescription: originalZoneDescription,
    zoneFooter: originalZoneFooter,
    contactsTitle: "Contatti",
    office: "Sede",
    phone: "Telefono",
    writeUs: "Scrivici",
  },
  en: {
    aboutTitle: "About",
    aboutBlocks: [
      {
        text: (
          <>
            <strong>Studio Capoferri</strong> is a civil and structural engineering practice in Adro (Brescia), Italy.
            For more than forty years we have designed steel, reinforced-concrete and masonry structures across
            Franciacorta and Northern and North-Central Italy. Calculation, shop drawings, site supervision.
            Architecture and planning when the commission needs them.
          </>
        ),
        textMobile: (
          <>
            <strong>Studio Capoferri</strong> is a civil and structural engineering practice in Adro (Brescia), Italy.
            For more than forty years we have designed steel, reinforced-concrete and masonry structures across
            Franciacorta and Northern and North-Central Italy.
          </>
        ),
        image: "struttura",
      },
      {
        text: (
          <>
            Mostly residential and industrial work: steel houses and villas, halls, vertical extensions, steelwork and
            interventions on existing buildings. Based in Adro; commissions across Lombardy (Brescia, Bergamo, Milan)
            and neighbouring regions. Fire design when the brief asks for it.
          </>
        ),
        image: "cantiere",
      },
    ] as AboutBlock[],
    servicesTitle: "Services",
    servicesIntro:
      "Steel and structural design, BIM modelling, shop drawings and site supervision first. Architecture, planning and Italian permits when the project needs them.",
    serviceCards: [
      ["Structural design", "Steel structures, reinforced concrete and masonry. FEM analysis, BIM modelling, seismic checks and fire design.", "/servizi#progettazione-strutturale"],
      ["Construction supervision", "Technical supervision, site support, structural assessments and technical reports.", "/servizi#direzione-lavori"],
      ["Site safety", "Safety coordination (CSP/CSE), safety plans and risk management.", "/servizi#sicurezza-cantieri"],
      ["Planning and architecture", "Architectural design, implementation plans, planning amendments and compliance analysis.", "/servizi#urbanistica-architettura"],
      ["Italy-based technical services", "Building permits (SCIA/CILA), cadastral filings and related Italian procedures.", "/servizi#servizi-tecnici"],
      ["Property support", "Technical support for transactions, appraisals, valuations and due diligence.", "/servizi#assistenza-immobiliare"],
    ] as [string, string, string][],
    allServices: "All services",
    projectsTitle: "Projects",
    projectsIntro:
      "Industrial halls, steel houses, vertical extensions and specialist steelwork, selected by sector.",
    projectsCta: "All projects",
    certificationsTitle: "Professional qualifications",
    certificationsIntro: "All activities are carried out by professionals holding the qualifications required by sector regulations.",
    certifications: [
      ["CSP/CSE qualification", "Qualified professionals for the CSP and CSE safety coordination roles on site"],
      ["Fire prevention", "Professionals listed by the Italian Ministry of the Interior under article 16 of Legislative Decree no. 139 of March 8, 2006"],
      ["Energy certification", "Energy certification services for issuing Building Energy Performance Certificates (APE)"],
      ["Professional software", "CAD, FEM analysis, structural calculation, BIM modelling."],
    ] as [string, string][],
    zoneTitle: "Where we work",
    zoneHeading: "Northern Italy",
    zoneDescription: (
      <>
        We operate throughout Northern and North-Central Italy (Lombardy, Veneto, Piedmont, Emilia-Romagna and Tuscany), with a
        particular focus on the provinces of{" "}
        <Link
          href={localizeHref("/progettazione-strutture-acciaio-brescia", "en")}
          title={linkTitles.acciaio("Brescia", "en")}
          className="link-accent"
        >
          Brescia
        </Link>
        ,{" "}
        <Link
          href={localizeHref("/progettazione-strutture-acciaio-bergamo", "en")}
          title={linkTitles.acciaio("Bergamo", "en")}
          className="link-accent"
        >
          Bergamo
        </Link>{" "}
        and{" "}
        <Link
          href={localizeHref("/progettazione-strutture-acciaio-milano", "en")}
          title={linkTitles.acciaio("Milan", "en")}
          className="link-accent"
        >
          Milan
        </Link>
        . Based in Adro, near Brescia.
      </>
    ),
    zoneFooter: (
      <>
        International contractors and EU partners: speak with our engineers in English on scope, drawings and site issues.{" "}
        <Link href={localizeHref("/clienti-internazionali", "en")} title={linkTitles.international("en")} className="link-accent">
          International clients
        </Link>{" "}
        ·{" "}
        <Link href={localizeHref("/contatti#form-contatti", "en")} title={linkTitles.contatti("en")} className="link-accent">
          Get in touch
        </Link>
        .
      </>
    ),
    contactsTitle: "Contact",
    office: "Office",
    phone: "Phone",
    writeUs: "Write to us",
  },
} as const;

const previews = {
  it: [
    ["Strutture per il residenziale", "Ville e case in acciaio", "/assets/progetti-ambito-residenziale.webp", "Progetto residenziale con struttura in acciaio", "/progetti/residenziali"],
    ["Progetti per l'industria", "Capannoni, carichi da carroponte, disegni d'officina", "/assets/progetto2.webp", "Capannone industriale con struttura portante in acciaio", "/progetti/industriali"],
    ["Strutture per eventi", "Mostre, seminari, convegni", "/assets/progetto-ricettivo.webp", "Spazio per eventi con progettazione strutturale", "/progetti/ricettivi"],
  ],
  en: [
    ["Residential structures", "Steel villas and homes, concept to erection support", "/assets/progetti-ambito-residenziale.webp", "Residential steel structure project", "/progetti/residenziali"],
    ["Industrial projects", "Production halls, crane loads and shop drawings", "/assets/progetto2.webp", "Industrial building with steel structure", "/progetti/industriali"],
    ["Structures for events", "Exhibitions, seminars and conferences", "/assets/progetto-ricettivo.webp", "Event venue structural design project", "/progetti/ricettivi"],
  ],
} as const;

export function LocalizedHomeSections({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <section id="chi-siamo" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.aboutTitle}</h2>
            </div>
            <div className="home-split-header__right space-y-4 sm:space-y-5">
              {t.aboutBlocks.map((block, idx) => (
                <p key={idx}>
                  {block.textMobile ? (
                    <>
                      <span className="md:hidden">{block.textMobile}</span>
                      <span className="hidden md:block">{block.text}</span>
                    </>
                  ) : (
                    block.text
                  )}
                </p>
              ))}
            </div>
          </div>
          <figure className="m-0">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-[#1c1e21]/12 bg-[#1c1e21]/25 sm:grid-cols-2">
              {(["struttura", "cantiere"] as const).map((key) => {
                const img = homeChiSiamoImages[key];
                return (
                  <div key={key} className="relative aspect-[4/3] bg-[#e8e6e1] sm:aspect-[5/4]">
                    <Image
                      src={img.src}
                      alt={locale === "en" ? img.altEn : img.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:640px) 50vw, 100vw"
                    />
                  </div>
                );
              })}
            </div>
            <figcaption className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[#6a6a6a]">
              {locale === "en" ? "Steel structures" : "Strutture in acciaio"}
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="servizi" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.servicesTitle}</h2>
            </div>
            <p className="home-split-header__right">{t.servicesIntro}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
            {t.serviceCards.map(([title, description, href]) => (
              <Link
                key={title}
                href={localizeHref(href, locale)}
                className="home-plate group reveal-block flex flex-col"
                title={linkTitles.servizio(title, locale)}
              >
                <h3 className={`font-display mb-2 text-xl font-medium tracking-tight text-[#1c1e21] transition-colors group-hover:text-[#b01010] sm:mb-3 sm:text-2xl`}>{title}</h3>
                <p className="copy-rhythm mb-0 flex-1 text-sm text-[#444]">{description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href={localizeHref("/servizi", locale)} className={`${ui.btnOutline} inline-flex w-full sm:w-auto`} title={linkTitles.scopriServizi(locale)}>
              {t.allServices}
            </Link>
          </p>
        </div>
      </section>

      <section id="progetti" className={`lazy-section ${scrollAnchorClass} ${ui.brandGradient} px-4 py-14 text-white sm:px-5 sm:py-20 md:px-10`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleInvertedCls}>{t.projectsTitle}</h2>
            </div>
            <p className="home-split-header__right home-split-header__right--inverted">{t.projectsIntro}</p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {previews[locale].map(([title, caption, image, alt, href]) => (
              <div key={href} className="reveal-block">
                <ProjectPreviewCard href={localizeHref(href, locale)} title={title} caption={caption} image={image} alt={alt} variant="dark" />
              </div>
            ))}
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href={localizeHref("/progetti", locale)} className={`${ui.btnOnDark} inline-flex w-full sm:w-auto`} title={linkTitles.tuttiProgetti(locale)}>
              {t.projectsCta}
            </Link>
          </p>
        </div>
      </section>

      <section id="certificazioni" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.certificationsTitle}</h2>
            </div>
            <p className="home-split-header__right">{t.certificationsIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4">
            {t.certifications.map(([title, text]) => (
              <article key={title} className="home-plate reveal-block text-left">
                <h3 className={`font-display mb-2 text-base font-medium tracking-tight text-[#1c1e21] sm:mb-3 sm:text-lg md:text-xl`}>{title}</h3>
                <p className="text-[0.88rem] leading-relaxed text-[#444] sm:text-[0.95rem] md:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zone-servite" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.zoneTitle}</h2>
            </div>
            <div className="home-split-header__right">{t.zoneDescription}</div>
          </div>
          <div className="home-plate reveal-block">
            <h3 className={`font-display text-lg font-medium tracking-tight text-[#1c1e21] sm:text-xl`}>{t.zoneHeading}</h3>
            <div className={`mt-2 ${ui.bodyMuted}`}>{t.zoneFooter}</div>
          </div>
        </div>
      </section>

      <StatsSection locale={locale} />

      <section id="contatti" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.contactsTitle}</h2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            <article className="home-plate reveal-block"><h3 className={`font-display mb-1.5 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg`}>Email</h3><a href={`mailto:${site.email}`} title={linkTitles.email(site.email, locale)} className="text-[0.88rem] text-[#444] underline-offset-2 transition hover:text-[#b01010] hover:underline sm:text-[0.95rem]">{site.email}</a></article>
            <article className="home-plate reveal-block"><h3 className={`font-display mb-1.5 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg`}>{t.phone}</h3><a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, locale)} className="text-[0.88rem] text-[#444] underline-offset-2 transition hover:text-[#b01010] hover:underline sm:text-[0.95rem]">{site.phoneDisplay}</a></article>
            <article className="home-plate reveal-block"><h3 className={`font-display mb-1.5 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg`}>{t.office}</h3><address className="not-italic text-[0.88rem] leading-relaxed text-[#444] sm:text-[0.95rem]">{site.addressLine}</address></article>
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href={localizeHref("/contatti#form-contatti", locale)} className={`${ui.btnPrimary} inline-flex w-full sm:w-auto`} title={linkTitles.formContatti(locale)}>
              {t.writeUs}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
