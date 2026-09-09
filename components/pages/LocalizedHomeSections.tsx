import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { StatsSection } from "@/components/home/StatsSection";
import { IconUrban, ServiceIcon } from "@/components/home/ServiceIcons";
import {
  certifications as originalCertifications,
  certificationsIntro as originalCertificationsIntro,
  contattiIntro as originalContattiIntro,
  homeChiSiamo,
  homeProgettiIntro,
  homeServiceCards,
  homeServiziIntro,
  zoneContent,
  zoneDescription as originalZoneDescription,
  zoneFooter as originalZoneFooter,
} from "@/lib/content";
import { fontDisplay } from "@/lib/fonts";
import { homeChiSiamoImages } from "@/lib/images";
import { localizeHref, type Locale } from "@/lib/i18n";
import { chiSiamoEnIntro, chiSiamoEnParagraphs } from "@/lib/about-copy";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

const titleCls = `${fontDisplay.className} ${ui.homeSectionTitle}`;
const titleInvertedCls = `${fontDisplay.className} ${ui.homeSectionTitleInverted}`;

type AboutBlock = {
  text: ReactNode;
  image: keyof typeof homeChiSiamoImages;
  imageFirst: boolean;
};

const copy = {
  it: {
    aboutTitle: homeChiSiamo.title,
    aboutIntro:
      "Studio di ingegneria civile ad Adro (BS): architettura, progettazione strutturale e strutture in acciaio con oltre quarant'anni di esperienza.",
    aboutBlocks: homeChiSiamo.blocks.map((block, index) => ({
      text: block.text,
      image: block.image,
      imageFirst: index === 0,
    })) as AboutBlock[],
    servicesTitle: "Servizi",
    servicesIntro: homeServiziIntro,
    serviceCards: homeServiceCards.map((card) => [card.title, card.description, card.href]) as [string, string, string][],
    allServices: "Scopri tutti i nostri servizi",
    projectsTitle: "Progetti",
    projectsIntro: homeProgettiIntro,
    projectsCta: "Esplora tutti i progetti realizzati",
    certificationsTitle: "Abilitazioni professionali",
    certificationsIntro: originalCertificationsIntro,
    certifications: originalCertifications.map((item) => [item.title, item.text]) as [string, string][],
    zoneTitle: zoneContent.title,
    zoneHeading: zoneContent.heading,
    zoneDescription: originalZoneDescription,
    zoneFooter: originalZoneFooter,
    contactsTitle: "Contatti",
    contactsIntro: originalContattiIntro,
    office: "Sede",
    phone: "Telefono",
    writeUs: "Richiedi una consulenza",
  },
  en: {
    aboutTitle: "About",
    aboutIntro: chiSiamoEnIntro,
    aboutBlocks: [
      {
        text: chiSiamoEnParagraphs[0],
        image: "team",
        imageFirst: false,
      },
      {
        text: chiSiamoEnParagraphs[1],
        image: "cantiere",
        imageFirst: true,
      },
    ] as AboutBlock[],
    servicesTitle: "Services",
    servicesIntro:
      "Steel and structural design, shop drawings and site supervision first. Architecture, planning and Italian permits when the project needs them.",
    serviceCards: [
      ["Structural design", "Steel structures, reinforced concrete and masonry. FEM analysis, seismic checks and fire design.", "/servizi#progettazione-strutturale"],
      ["Construction supervision", "Technical supervision, site support, structural assessments and technical reports.", "/servizi#direzione-lavori"],
      ["Site safety", "Safety coordination (CSP/CSE), safety plans and risk management.", "/servizi#sicurezza-cantieri"],
      ["Planning and architecture", "Architectural design, implementation plans, planning amendments and compliance analysis.", "/servizi#urbanistica-architettura"],
      ["Italy-based technical services", "Building permits (SCIA/CILA), cadastral filings and related Italian procedures.", "/servizi#servizi-tecnici"],
      ["Property support", "Technical support for transactions, appraisals, valuations and due diligence.", "/servizi#assistenza-immobiliare"],
    ] as [string, string, string][],
    allServices: "Explore all services",
    projectsTitle: "Projects",
    projectsIntro:
      "Industrial buildings, steel residences, vertical extensions and specialist steelwork — selected work that shows how we design and support construction.",
    projectsCta: "Explore all completed projects",
    certificationsTitle: "Professional qualifications",
    certificationsIntro: "All activities are carried out by professionals holding the qualifications required by sector regulations.",
    certifications: [
      ["CSP/CSE qualification", "Qualified professionals for the CSP and CSE safety coordination roles on site"],
      ["Fire prevention", "Professionals listed by the Italian Ministry of the Interior under article 16 of Legislative Decree no. 139 of March 8, 2006"],
      ["Energy certification", "Energy certification services for issuing Building Energy Performance Certificates (APE)"],
      ["Professional software", "We use specialist and dedicated software for every type of design requirement: CAD, FEM structural analysis, structural calculation, 3D modelling and rendering, ensuring precision and regulatory compliance."],
    ] as [string, string][],
    zoneTitle: "Where we work",
    zoneHeading: "Northern Italy",
    zoneDescription: (
      <>
        We operate throughout <strong>Northern and North-Central Italy</strong> (Lombardy, Veneto, Piedmont, Emilia-Romagna and Tuscany), with a
        particular focus on the provinces of{" "}
        <Link
          href={localizeHref("/progettazione-strutture-acciaio-brescia", "en")}
          title={linkTitles.acciaio("Brescia", "en")}
          className="font-semibold text-[#2a3f54] underline underline-offset-2"
        >
          Brescia
        </Link>
        ,{" "}
        <Link
          href={localizeHref("/progettazione-strutture-acciaio-bergamo", "en")}
          title={linkTitles.acciaio("Bergamo", "en")}
          className="font-semibold text-[#2a3f54] underline underline-offset-2"
        >
          Bergamo
        </Link>{" "}
        and{" "}
        <Link
          href={localizeHref("/progettazione-strutture-acciaio-milano", "en")}
          title={linkTitles.acciaio("Milan", "en")}
          className="font-semibold text-[#2a3f54] underline underline-offset-2"
        >
          Milan
        </Link>
        . Our office in Adro, near Brescia, Italy, allows us to serve these areas and the surrounding territories effectively, ensuring rapid response times
        and in-depth knowledge of local regulations.
      </>
    ),
    zoneFooter: (
      <>
        International contractors and EU partners: speak with our <strong>engineers in English</strong> on scope, drawings and site issues, and we
        interface with <strong>Italian and EU fabricators</strong> through fabrication drawings and erection support.{" "}
        <Link href={localizeHref("/contatti#form-contatti", "en")} title={linkTitles.contatti("en")} className="font-semibold text-[#2a3f54] underline underline-offset-2">
          Get in touch
        </Link>{" "}
        or see{" "}
        <Link href={localizeHref("/progettazione-strutture-acciaio-brescia", "en")} title={linkTitles.acciaio("Brescia", "en")} className="font-semibold text-[#2a3f54] underline underline-offset-2">
          steel design in Brescia
        </Link>
        ,{" "}
        <Link href={localizeHref("/progettazione-strutture-acciaio-bergamo", "en")} title={linkTitles.acciaio("Bergamo", "en")} className="font-semibold text-[#2a3f54] underline underline-offset-2">
          Bergamo
        </Link>{" "}
        and{" "}
        <Link href={localizeHref("/progettazione-strutture-acciaio-milano", "en")} title={linkTitles.acciaio("Milan", "en")} className="font-semibold text-[#2a3f54] underline underline-offset-2">
          Milan
        </Link>
        .
      </>
    ),
    contactsTitle: "Contact",
    contactsIntro:
      "Write in English for a technical first reply from our engineering team — quotations, shop-drawing scope and site support for projects in Italy.",
    office: "Office",
    phone: "Phone",
    writeUs: "Request a consultation",
  },
} as const;

const previews = {
  it: [
    ["Strutture per il residenziale", "Strutture per il residenziale", "/assets/progetti-ambito-residenziale.webp", "Progetto residenziale con struttura in acciaio", "/progetti/residenziali"],
    ["Strutture per l'industria", "Strutture per l'industria", "/assets/progetto2.webp", "Capannone industriale con struttura portante in acciaio", "/progetti/industriali"],
    ["Strutture per spazi pubblici", "Strutture per spazi pubblici", "/assets/progetto-ricettivo.webp", "Spazio per eventi con progettazione strutturale", "/progetti/ricettivi"],
  ],
  en: [
    ["Residential structures", "Residential structures", "/assets/progetti-ambito-residenziale.webp", "Residential steel structure project", "/progetti/residenziali"],
    ["Industrial structures", "Industrial structures", "/assets/progetto2.webp", "Industrial building with steel structure", "/progetti/industriali"],
    ["Public-space structures", "Public-space structures", "/assets/progetto-ricettivo.webp", "Event venue structural design project", "/progetti/ricettivi"],
  ],
} as const;

export function LocalizedHomeSections({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <section id="chi-siamo" className={`lazy-section section-shell ${scrollAnchorClass} bg-[#fafbfc] ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.aboutTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.aboutIntro}</p>
          </div>
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {t.aboutBlocks.map((block, idx) => {
              const img = homeChiSiamoImages[block.image];
              return (
                <div key={idx} className="reveal-block grid gap-6 sm:gap-10 md:grid-cols-2 md:items-stretch">
                  {block.imageFirst ? (
                    <>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:aspect-auto md:min-h-[300px] md:h-full">
                        <Image src={img.src} alt={locale === "en" ? img.altEn : img.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                        <div className="image-unify-overlay" aria-hidden />
                      </div>
                      <div className="home-section-body copy-rhythm reading-measure text-[0.98rem] sm:text-[1.05rem]">{block.text}</div>
                    </>
                  ) : (
                    <>
                      <div className="home-section-body copy-rhythm reading-measure text-[0.98rem] sm:text-[1.05rem]">{block.text}</div>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:aspect-auto md:min-h-[300px] md:h-full">
                        <Image src={img.src} alt={locale === "en" ? img.altEn : img.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                        <div className="image-unify-overlay" aria-hidden />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="servizi" className={`lazy-section section-shell ${scrollAnchorClass} bg-white ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.servicesTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.servicesIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {t.serviceCards.map(([title, description, href], idx) => (
              <article key={title} className="reveal-block frost-card group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[#2a3f54]/25 hover:shadow-[0_12px_32px_rgba(42,63,84,0.12)] sm:p-8">
                <div className={`${ui.iconBox} mb-4 sm:mb-5`}>
                  <ServiceIcon index={idx} className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a3f54] sm:mb-3 sm:text-xl`}>{title}</h3>
                <p className="copy-rhythm mb-5 flex-1 text-sm text-[#555] sm:mb-6">{description}</p>
                <Link href={localizeHref(href, locale)} className="touch-target mt-auto inline-block min-h-[44px] py-2 text-sm font-semibold text-[#2a3f54] underline-offset-4 transition group-hover:underline" title={linkTitles.scopriServizio(title, locale)}>
                  {locale === "en" ? `Explore ${title}` : `Scopri ${title.toLowerCase()}`}
                </Link>
              </article>
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
              <div className="home-section-accent home-section-accent--light" aria-hidden />
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

      <section id="certificazioni" className={`lazy-section section-shell ${scrollAnchorClass} bg-white ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.certificationsTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.certificationsIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {t.certifications.map(([title, text]) => (
              <article key={title} className="reveal-block frost-card rounded-xl p-4 text-left sm:rounded-2xl sm:p-6">
                <h3 className={`${fontDisplay.className} mb-2 text-base uppercase tracking-[0.06em] text-[#2a3f54] sm:mb-3 sm:text-lg md:text-xl`}>{title}</h3>
                <p className="text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem] md:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zone-servite" className={`lazy-section section-shell ${scrollAnchorClass} bg-[#fafbfc] ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.zoneTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <div className="home-split-header__right">{t.zoneDescription}</div>
          </div>
          <div className="reveal-block frost-card flex items-start gap-5 rounded-2xl p-6 sm:gap-6 sm:p-8">
            <div className={ui.iconBox} aria-hidden>
              <IconUrban className="h-7 w-7 sm:h-9 sm:w-9" />
            </div>
            <div className="min-w-0">
              <h3 className={`${fontDisplay.className} text-lg tracking-[0.04em] text-[#2a3f54] sm:text-xl`}>{t.zoneHeading}</h3>
              <div className="mt-2 text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem]">{t.zoneFooter}</div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section id="contatti" className={`lazy-section section-shell ${scrollAnchorClass} bg-white ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.contactsTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.contactsIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6"><h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>Email</h3><a href={`mailto:${site.email}`} title={linkTitles.email(site.email, locale)} className="text-[0.88rem] text-[#555] underline-offset-2 transition hover:text-[#2a3f54] hover:underline sm:text-[0.95rem]">{site.email}</a></article>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6"><h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>{t.phone}</h3><a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, locale)} className="text-[0.88rem] text-[#555] underline-offset-2 transition hover:text-[#2a3f54] hover:underline sm:text-[0.95rem]">{site.phoneDisplay}</a></article>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6"><h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>{t.office}</h3><p className="text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem]">{site.addressLine}</p></article>
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
