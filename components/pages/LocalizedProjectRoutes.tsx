"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { ContactForm } from "@/components/ContactForm";
import { ProjectImageLightbox } from "@/components/projects/ProjectImageLightbox";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { fontDisplay } from "@/lib/fonts";
import { localizeHref } from "@/lib/i18n";
import { caseStudyJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { projectCaseStudies, projectCategories, type ProjectArea } from "@/lib/projects";
import { galleryAltEnBySrc } from "@/lib/gallery-alts-en";
import { getEnglishCaseMetadata, getEnglishSteelDescription, pageUrl as seoPageUrl } from "@/lib/seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import type { SteelLandingConfig } from "@/lib/steel-landing";
import { ui } from "@/lib/ui";

const areaCopy = {
  it: {
    residenziali: {
      heading: "Strutture residenziali",
      intro: [
        "La progettazione strutturale in ambito residenziale richiede armonia tra comfort, funzionalità e integrazione architettonica.",
        "Realizziamo strutture per abitazioni unifamiliari, complessi residenziali ed edifici multipiano con un approccio personalizzato.",
      ],
    },
    industriali: {
      heading: "Strutture industriali",
      intro: [
        "In ambito industriale la progettazione richiede soluzioni robuste e ad alte prestazioni, con attenzione a logistica, tempi e operatività.",
        "Ogni progetto nasce dall'analisi delle necessità operative del cliente e si sviluppa con soluzioni su misura.",
      ],
    },
    ricettivi: {
      heading: "Strutture per spazi pubblici",
      intro: [
        "Per i luoghi aperti al pubblico cerchiamo un equilibrio tra estetica, funzionalità e comfort.",
        "Sviluppiamo soluzioni flessibili e innovative, studiate sull'uso degli spazi e sull'identità del luogo.",
      ],
    },
    breadcrumbProjects: "Progetti",
    featured: "Progetti in evidenza",
  },
  en: {
    residenziali: {
      heading: "Residential structures",
      intro: [
        "Structural design for residential buildings requires a balance between comfort, functionality and architectural integration.",
        "We develop structures for private homes, residential complexes and multi-storey buildings, with careful attention to quality of life as well as to regulations governing safety, sustainability and energy efficiency.",
        "Each intervention is shaped around its context and the desired architectural identity, with a tailored approach to every project.",
      ],
    },
    industriali: {
      heading: "Industrial structures",
      intro: [
        "Industrial projects require robust, high-performance solutions. We work on buildings for production, storage and logistics, with fast execution times and careful optimisation of space.",
        "Steel is often the strategic material for this type of intervention because it combines strength, speed of assembly and adaptability to complex operational requirements.",
        "Each project starts from the client's real operating needs and develops into a tailored solution designed to last and support the growth of the business.",
      ],
    },
    ricettivi: {
      heading: "Structures for public venues",
      intro: [
        "For places open to the public, we seek a balance between aesthetics, functionality and comfort. The structures we design pay close attention to user experience as well as to safety and accessibility regulations.",
        "We develop flexible, innovative solutions shaped around the use of space and the identity of the venue.",
      ],
    },
    breadcrumbProjects: "Projects",
    featured: "Featured projects",
  },
} as const;

const caseCopy = {
  en: {
    "residenziali/villa-acciaio-veneto": {
      heading: "Private residence - Veneto",
      body: [
        "We designed a villa that combines innovation, efficiency and contemporary design. The steel structure ensures strength, durability and sustainability, applying advanced engineering to residential architecture.",
        "The project shows how the structure can be integrated with the architectural design to create a functional building that sits naturally within its landscape.",
      ],
      bullets: [
        ["Steel structure", "strength, lightness and controlled construction time."],
        ["Integrated design", "spaces optimised for liveability and landscape integration."],
        ["Sustainability", "high energy performance and ambitious environmental standards."],
      ],
    },
    "residenziali/villa-acciaio-salsomaggiore": {
      heading: "Steel villa - Salsomaggiore Terme (PR)",
      body: [
        "Studio Capoferri handled the structural side of a steel residential building in Salsomaggiore Terme, from the design stage through construction.",
        "Poor ground conditions required a dedicated solution from the very beginning: a system of piled foundations defined from the early stages in line with the mixed reinforced-concrete and steel structure planned above ground.",
        "Above the concrete base, with a partially buried lower floor and the stair core, rises the steel frame of the first floor and the roof, designed to accommodate a complete surface of photovoltaic panels.",
      ],
      bullets: [
        ["Piled foundations", "a targeted solution for poor soil conditions."],
        ["Steel frame", "beams and columns defining the volumes with precision, strength and lightness."],
        ["Dry construction systems", "high-density mineral wool walls for execution speed and strong thermal performance."],
        ["Energy efficiency", "roof prepared for a full photovoltaic installation."],
        ["Integrated design", "services and finishes coordinated in parallel to reduce delays and on-site uncertainty."],
      ],
    },
    "industriali/capannone-erbusco": {
      heading: "Industrial building - Erbusco (BS)",
      body: [
        "Studio Capoferri handled the structural, architectural and planning design for the extension of the production area of a major heavy steel fabrication company in Erbusco, near Brescia.",
        "This was an advanced industrial engineering project aimed at maximising operational efficiency and safety in an intensive production environment. The building was conceived for heavy loads and complex workflows.",
        "The extension delivers a more efficient and durable production area, in line with the requirements of the local industrial context.",
      ],
      bullets: [
        ["Steel primary structure", "strength and reliability for heavy industrial use."],
        ["Executive design", "shop drawings and construction detailing for steel fabrication."],
        ["Crane integration", "the structure was calculated for two overhead travelling cranes and internal handling flows."],
        ["Envelope efficiency", "sandwich panels providing thermal and acoustic insulation."],
        ["Integrated scope", "planning, architecture and executive structural design managed together."],
      ],
    },
    "industriali/ampliamento-complesso-zootecnico": {
      heading: "Livestock complex extension",
      body: [
        "Working on existing structures requires a balance between structural constraints, logistics and continuity of operations. In the extension of this livestock complex, the objective was to increase the covered area while ensuring maximum internal flexibility.",
        "The solution focuses on the development of new steel trusses with a clear span of almost 16 metres. The absence of intermediate supports makes it possible to optimise the space for the operational needs of the sector.",
        "Structural design is not only calculation. It is the tool that transforms the client's requirements into practical construction solutions.",
      ],
      bullets: [
        ["Efficiency", "large clear spans covered with optimised profiles."],
        ["Speed", "reduced assembly time to limit disruption on site."],
        ["Durability", "solutions suited to an aggressive operating environment."],
        ["Integration", "precise connection between the new works and the existing structures."],
      ],
    },
    "industriali/centro-direzionale-provaglio-diseo": {
      heading: "Headquarters - Provaglio d'Iseo (BS)",
      body: [
        "The project concerns the redevelopment of an industrial building in Provaglio d'Iseo (BS), converted into the main headquarters of a major listed electronics company, with offices, laboratories and workspaces.",
        "It started from an approved base scheme developed by the lead designer. Studio Capoferri focused its contribution on full optimisation, adapting the design solutions to the real construction dynamics of the site.",
        "The core of the intervention is a steel mezzanine of more than 5,000 square metres, integrated into the existing structure to expand the usable floor area.",
        "Constant dialogue between design and construction made it possible to develop solutions that are efficient and consistent with site reality.",
      ],
      bullets: [
        ["Structural and geometric optimisation", "of the steelwork package."],
        ["Coordination", "with the conditions of the existing building."],
        ["Executive detailing", "required for fabrication and production."],
        ["Assembly sequencing", "rationalised to maintain operational continuity on site."],
      ],
    },
    "ricettivi/superstudio-village": {
      heading: "Superstudio Village - Milan Bovisa",
      body: [
        "The structural design work concerned a building complex in Milan Bovisa for Superstudio Events, made up of six buildings with different types of intervention.",
        "Works began in 2023. Two buildings required structural strengthening of vaults and roofs. One building was demolished and rebuilt with a new steel structure reaching a maximum height of about 16 metres.",
        "Another building was reconstructed with a mixed reinforced-concrete and load-bearing masonry structure; a further building with load-bearing masonry and a composite roof system; and finally one existing building underwent seismic upgrading.",
      ],
      bullets: [],
    },
    "ricettivi/superstudio-maxi": {
      heading: "Superstudio Maxi - Famagosta",
      body: [
        "The structural intervention concerned the recovery of a disused industrial shed, once used for steel fabrication, in the Famagosta district of Milan.",
        "The building, converted into an event venue with about 7,200 square metres of covered space and 3,000 square metres of yard, underwent seismic upgrading and strengthening of the existing steel structures.",
        "New steel structures were created for congress, exhibition and multimedia functions.",
        "The intervention enhanced the site's industrial-archaeology identity while adapting it to its new use.",
      ],
      bullets: [],
    },
  },
} as const;

const landingCopy = {
  en: {
    heroTitle: (city: string) => `Steel structure design in ${city} and across Lombardy`,
    process:
      "From structural calculations in accordance with NTC 2018 and Eurocodes to fabrication shop drawings, site supervision and final testing, we follow every phase of the project, from the initial idea through to the construction site.",
    consultation: "Request a consultation",
    whyTitle: "Why choose a steel structure",
    whyBullets: [
      ["Seismic performance", "lightness and ductility make steel ideal in seismic areas."],
      ["Faster construction", "steelwork is prefabricated in the workshop and dry-assembled on site."],
      ["Architectural freedom", "large spans, cantilevers and open volumes without intermediate columns."],
      ["Vertical extensions", "reduced weight makes steel ideal for adding levels to existing buildings."],
      ["Sustainability", "fully recyclable material suitable for high-efficiency envelopes and PV-ready roofs."],
    ],
    scopeTitle: "What we design: from residential to industrial",
    scopeLead:
      "We design steel structures for every intended use: villas and private residences, multi-storey buildings, industrial sheds with overhead cranes, commercial buildings and event spaces. Some recent projects include:",
    faqTitle: "Frequently asked questions about steel structure design",
    ctaText:
      "Tell us about your idea: we analyse feasibility, costs and timing, then propose the most efficient structural solution.",
    contactNow: "Contact us now",
    allServices: "Explore all services",
    cities: {
      brescia: {
        introLead:
          "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. From our base in Adro, in the province of Brescia and in the heart of Franciacorta, we design steel villas, industrial buildings, vertical extensions and steelwork structures throughout Lombardy and Northern Italy.",
        areaHeading: "Where we work: Brescia, Bergamo, Milan and all of Lombardy",
        areaBody:
          "The practice is based in Adro, in the province of Brescia, in a strategic position between Franciacorta, Val Calepio and Lake Iseo. We can respond quickly across Brescia and its province, including Franciacorta, Val Trompia, the Brescia side of Lake Garda and the Brescia plain, and throughout Lombardy: Bergamo, Milan, Monza, Cremona, Mantua, Lecco and Como.",
        areaBodySecondary:
          "For projects outside the region, we also work regularly in Veneto, Piedmont and Emilia-Romagna.",
        ctaHeading: "Do you have a steel project in Brescia or Lombardy?",
        faqAreaAnswer:
          "Yes. Our office is based in Adro, in the province of Brescia, and we operate throughout Lombardy, including Brescia, Bergamo and Milan and their respective provinces, as well as in Veneto, Piedmont and Emilia-Romagna.",
        featuredProjects: [
          ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
          ["Steel villa in Salsomaggiore Terme", "piled foundations, steel frame and full photovoltaic roof"],
          ["Private steel residence in Veneto", "integrated structural and architectural design"],
          ["Superstudio Village in Milan", "new steel structure around 16 metres high and structural strengthening works"],
        ],
      },
      bergamo: {
        introLead:
          "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. From our base in Adro (Brescia), just a short distance from the province of Bergamo, we design steel villas, industrial buildings, vertical extensions and steelwork structures across Bergamo, Lombardy and Northern Italy.",
        areaHeading: "Where we work: Bergamo, Brescia, Milan and all of Lombardy",
        areaBody:
          "The practice is located in Adro (Brescia), on the border with the province of Bergamo, in a strategic position between Franciacorta and Val Calepio. We can respond quickly across Bergamo and its province, including Val Seriana, Val Brembana, Isola Bergamasca and the Bergamo plain, and throughout Lombardy: Brescia, Milan, Monza, Cremona, Mantua, Lecco and Como.",
        areaBodySecondary:
          "For projects outside the region, we also work regularly in Veneto, Piedmont and Emilia-Romagna.",
        ctaHeading: "Do you have a steel project in Bergamo or Lombardy?",
        faqAreaAnswer:
          "Yes. Our office is based in Adro (Brescia), on the border with the province of Bergamo, and we operate throughout Lombardy, including Bergamo, Brescia and Milan and their respective provinces, as well as in Veneto, Piedmont and Emilia-Romagna.",
        featuredProjects: [
          ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
          ["Steel villa in Salsomaggiore Terme", "piled foundations, steel frame and full photovoltaic roof"],
          ["Private steel residence in Veneto", "integrated structural and architectural design"],
          ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high and structural strengthening works"],
        ],
      },
      milano: {
        introLead:
          "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. We design steel villas, industrial buildings, vertical extensions and steelwork structures in Milan, across the wider Milan hinterland and throughout Lombardy, with work on public venues, residential buildings and industrial facilities.",
        areaHeading: "Where we work: Milan, Brescia, Bergamo and all of Lombardy",
        areaBody:
          "We operate across the city of Milan and its province, including Bovisa, Famagosta and the northern and southern hinterland, as well as Monza Brianza and the wider metropolitan area. Our office in Adro (Brescia) is strategically positioned for quick access to Milanese construction sites and also supports projects across Brescia, Bergamo, Cremona, Mantua, Lecco and Como.",
        areaBodySecondary:
          "Among the most significant projects in Milan are Superstudio Village in Bovisa and Superstudio Maxi in Famagosta, involving steel structures, strengthening works and seismic upgrading.",
        ctaHeading: "Do you have a steel project in Milan or Lombardy?",
        faqAreaAnswer:
          "Yes. We work regularly across Milan and its province, as well as Brescia, Bergamo and the whole of Lombardy. Our base in Adro (Brescia) allows rapid intervention across the wider Milan metropolitan area and throughout Northern Italy.",
        featuredProjects: [
          ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high, strengthening and reconstruction works"],
          ["Superstudio Maxi in Famagosta", "conversion of an industrial shed with seismic upgrading and new steel structures"],
          ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
          ["Steel villa in Salsomaggiore Terme", "piled foundations, steel frame and full photovoltaic roof"],
        ],
      },
    },
    faqFixed: [
      [
        "How much does steel structure design cost?",
        "Costs depend on size, complexity and the intended use of the building. After an initial inspection or technical call, we provide a detailed, no-obligation quotation for structural design, fabrication drawings and site supervision.",
      ],
      [
        "What advantages does steel offer compared with reinforced concrete?",
        "Steel combines lightness, seismic performance, faster site operations through workshop prefabrication and major architectural flexibility. It is also recyclable and well suited to sustainable construction.",
      ],
      [
        "Do you also handle construction supervision and steel erection support?",
        "Yes. We follow the full process: structural calculations to NTC 2018 and Eurocodes, fabrication drawings, site erection assistance and structural site supervision up to final testing.",
      ],
      [
        "Can a steel extension be added on top of an existing building?",
        "Yes. The low self-weight of steel makes it ideal for vertical extensions. We first verify the structural suitability of the existing building, then design the new addition while minimising extra loads.",
      ],
    ],
  },
} as const;

export function LocalizedProjectAreaPage({ area }: { area: ProjectArea }) {
  const locale = useLocale();
  const t = areaCopy[locale][area];
  const shared = areaCopy[locale];
  const cases = projectCategories[area].cases;

  if (locale === "it") {
    const c = projectCategories[area];
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
              <Link href="/progetti" title={linkTitles.breadcrumbProgetti("it")} className="font-medium text-[#2a3f54] hover:underline">
                Progetti
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <span className="text-[#444]">{c.heading}</span>
            </nav>

            <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>{c.heading}</h1>

            <div className="reveal-block frost-card mb-12 rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="copy-rhythm text-pretty text-left text-[0.98rem] text-[#444] sm:text-[1.05rem]">{c.intro}</div>
            </div>

            <h2 className={`${fontDisplay.className} reveal-title ${ui.gallerySectionTitle} mb-6`}>Progetti in evidenza</h2>
            <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.cases.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  title={linkTitles.progetto(p.title, "it")}
                  className="group block overflow-hidden rounded-2xl border border-[#2a3f54]/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(42,63,84,0.14)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={p.cover} alt={p.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, 100vw" />
                    <div className="image-unify-overlay" aria-hidden />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2e3d]/95 to-transparent px-4 py-3 sm:py-4">
                      <span className={`${fontDisplay.className} text-base tracking-[0.04em] text-white sm:text-lg`}>{p.caption}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Breadcrumb">
            <Link href={localizeHref("/progetti", locale)} title={linkTitles.breadcrumbProgetti(locale)} className="font-medium text-[#2a3f54] hover:underline">
              {shared.breadcrumbProjects}
            </Link>
            <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
            <span className="text-[#444]">{t.heading}</span>
          </nav>
          <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>{t.heading}</h1>
          <div className="reveal-block frost-card mb-12 rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="copy-rhythm text-pretty text-left text-[0.98rem] text-[#444] sm:text-[1.05rem]">
              {t.intro.map((p) => <p key={p} className="mb-4 last:mb-0">{p}</p>)}
            </div>
          </div>
          <h2 className={`${fontDisplay.className} reveal-title ${ui.gallerySectionTitle} mb-6`}>{shared.featured}</h2>
          <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((p) => {
              const caseKey = `${area}/${p.slug}` as keyof typeof caseCopy.en;
              const enTitle = caseKey in caseCopy.en ? caseCopy.en[caseKey].heading : p.title;
              return (
              <div key={p.slug} className="reveal-block">
                <ProjectPreviewCard
                  href={localizeHref(p.href, locale)}
                  title={enTitle}
                  caption={enTitle}
                  image={p.cover}
                  alt={locale === "en" ? enTitle : p.alt}
                />
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export function LocalizedProjectCasePage({ area, slug }: { area: ProjectArea; slug: string }) {
  const locale = useLocale();
  const key = `${area}/${slug}` as keyof typeof caseCopy.en;
  const cs = projectCaseStudies[`${area}/${slug}` as keyof typeof projectCaseStudies];
  const enMeta = getEnglishCaseMetadata(area, slug);
  const heading = locale === "en" && key in caseCopy.en ? caseCopy.en[key].heading : cs.heading;
  const catHeading = locale === "en" ? areaCopy.en[area].heading : projectCategories[area].heading;
  const body = locale === "en" && key in caseCopy.en ? caseCopy.en[key] : null;
  const gallery =
    locale === "en"
      ? cs.gallery.map((img) => ({
          ...img,
          alt: galleryAltEnBySrc[img.src] ?? img.alt,
        }))
      : cs.gallery;

  const jsonLd = caseStudyJsonLd({
    area,
    slug,
    metaTitle: locale === "en" ? (enMeta?.title ?? heading) : cs.metaTitle,
    metaDescription: locale === "en" ? (enMeta?.description ?? cs.metaDescription) : cs.metaDescription,
    gallery: cs.gallery,
    locale,
  });

  if (locale === "it") {
    const cat = projectCategories[area];
    return (
      <>
        {jsonLd.map((block) => (
          <script
            key={block["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="mx-auto w-full max-w-[900px]">
              <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
                <Link href="/progetti" title={linkTitles.breadcrumbProgetti("it")} className="font-medium text-[#2a3f54] hover:underline">
                  Progetti
                </Link>
                <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
                <Link href={`/progetti/${area}`} title={linkTitles.breadcrumbArea(cat.heading, "it")} className="font-medium text-[#2a3f54] hover:underline">
                  {cat.heading}
                </Link>
                <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
                <span className="text-[#444]">{cs.metaTitle}</span>
              </nav>

              <h1 className={`${fontDisplay.className} reveal-title ${ui.caseStudyTitle} mb-6 sm:mb-8`}>{cs.heading}</h1>

              {cs.externalBrand ? (
                <div className="reveal-block mb-8 rounded-xl bg-[#2a2a2a] px-4 py-4 text-center">
                  <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" title={linkTitles.external(cs.externalBrand.imageAlt, "it")} className="inline-block">
                    <Image src={cs.externalBrand.imageSrc} alt={cs.externalBrand.imageAlt} width={280} height={80} className="mx-auto h-auto max-h-14 w-auto" />
                  </a>
                </div>
              ) : null}

              <div className="lazy-section">
                <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <div>{cs.body}</div>
                </article>

                <ProjectImageLightbox images={cs.gallery} className="mt-10" />
                <ContactCtaSection title="Hai un progetto simile?" />
              </div>
            </div>
          </div>
        </div>
      </main>
      </>
    );
  }

  return (
    <>
      {jsonLd.map((block) => (
        <script
          key={block["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mx-auto w-full max-w-[900px]">
            <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Breadcrumb">
              <Link href={localizeHref("/progetti", locale)} title={linkTitles.breadcrumbProgetti(locale)} className="font-medium text-[#2a3f54] hover:underline">
                {locale === "en" ? "Projects" : "Progetti"}
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <Link href={localizeHref(`/progetti/${area}`, locale)} title={linkTitles.breadcrumbArea(catHeading, locale)} className="font-medium text-[#2a3f54] hover:underline">
                {catHeading}
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <span className="text-[#444]">{heading}</span>
            </nav>
            <h1 className={`${fontDisplay.className} reveal-title ${ui.caseStudyTitle} mb-6 sm:mb-8`}>{heading}</h1>
            {cs.externalBrand ? (
              <div className="reveal-block mb-8 rounded-xl bg-[#2a2a2a] px-4 py-4 text-center">
                <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" title={linkTitles.external(cs.externalBrand.imageAlt, locale)} className="inline-block">
                  <Image src={cs.externalBrand.imageSrc} alt={cs.externalBrand.imageAlt} width={280} height={80} className="mx-auto h-auto max-h-14 w-auto" />
                </a>
              </div>
            ) : null}
            <div className="lazy-section">
              <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                {body ? (
                  <div>
                    {body.body.map((p) => <p key={p} className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem] last:mb-0">{p}</p>)}
                    {body.bullets.length ? (
                      <ul className="mt-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                        {body.bullets.map(([title, text]) => (
                          <li key={title} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                            <strong>{title}</strong> - {text}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <div>{cs.body}</div>
                )}
              </article>
              <ProjectImageLightbox images={gallery} className="mt-10" />
              <ContactCtaSection title={locale === "en" ? "Do you have a similar project?" : "Hai un progetto simile?"} />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export function LocalizedSteelLandingPage({ config }: { config: SteelLandingConfig }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const steelPath = `/progettazione-strutture-acciaio-${config.slug}`;
  const absolutePageUrl = seoPageUrl(steelPath, locale);
  const cityCopy = isEn ? landingCopy.en.cities[config.slug as keyof typeof landingCopy.en.cities] : null;
  const faq = isEn
    ? [
        [landingCopy.en.faqFixed[0][0], landingCopy.en.faqFixed[0][1]],
        [landingCopy.en.faqFixed[1][0], landingCopy.en.faqFixed[1][1]],
        ["Do you design steel structures across Lombardy?", cityCopy?.faqAreaAnswer ?? config.faqAreaAnswer],
        [landingCopy.en.faqFixed[2][0], landingCopy.en.faqFixed[2][1]],
        [landingCopy.en.faqFixed[3][0], landingCopy.en.faqFixed[3][1]],
      ]
    : [
        [config.faqCostQuestion, "Il costo dipende da dimensioni, complessità e destinazione d'uso dell'edificio. Dopo un primo sopralluogo o un colloquio tecnico forniamo un preventivo dettagliato e senza impegno per la progettazione strutturale, i disegni costruttivi d'officina e la direzione lavori."],
        ["Quali vantaggi offre una struttura in acciaio rispetto al cemento armato?", "L'acciaio garantisce leggerezza, resistenza sismica, tempi di cantiere ridotti grazie alla prefabbricazione in officina e grande flessibilità architettonica."],
        ["Progettate strutture in acciaio in tutta la Lombardia?", config.faqAreaAnswer],
        ["Seguite anche la direzione lavori e il montaggio della carpenteria metallica?", "Sì. Seguiamo l'intero processo, dal calcolo strutturale alla direzione lavori strutturale fino al collaudo."],
        ["È possibile realizzare una sopraelevazione in acciaio su un edificio esistente?", "Sì, la leggerezza dell'acciaio lo rende il materiale ideale per le sopraelevazioni."],
      ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absolutePageUrl}#service`,
    name: isEn ? "Steel structure design" : "Progettazione strutture in acciaio",
    serviceType: isEn ? "Structural design of steel structures" : "Progettazione strutturale di strutture in acciaio",
    description: isEn ? (getEnglishSteelDescription(config.slug) ?? config.metaDescription) : config.metaDescription,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: config.areaServedPrimary },
      { "@type": "AdministrativeArea", name: "Lombardy" },
    ],
    url: absolutePageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  if (!isEn) {
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="mx-auto w-full max-w-[900px]">
              <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>
                Progettazione di strutture in acciaio a {config.city} e in Lombardia
              </h1>

              <article className="reveal-block frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{config.introLead}</p>
                <p className={`copy-rhythm mb-6 ${ui.bodyMuted}`}>
                  Dal <strong>calcolo strutturale secondo NTC 2018 ed Eurocodici</strong> ai <strong>disegni costruttivi d&apos;officina</strong>, fino alla direzione lavori e al collaudo: seguiamo ogni fase del progetto, dalla prima idea al cantiere.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#richiesta-preventivo" className={ui.btnPrimary} title="Richiedi preventivo senza impegno — Studio Capoferri">
                    Richiedi preventivo senza impegno
                  </a>
                  <a href={`tel:${site.phoneTel}`} className={ui.btnOutline} title={linkTitles.telefono(site.phoneDisplay, "it")}>{site.phoneDisplay}</a>
                </div>
              </article>

              <div className="lazy-section">
                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>Perché scegliere una struttura in acciaio</h2>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Resistenza sismica</strong> — leggerezza e duttilità rendono l&apos;acciaio ideale nelle zone sismiche della Lombardia.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Tempi di cantiere ridotti</strong> — la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Libertà architettonica</strong> — grandi luci, sbalzi e volumi aperti senza pilastri intermedi.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Sopraelevazioni</strong> — il peso contenuto consente di ampliare in altezza edifici esistenti.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Sostenibilità</strong> — materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture fotovoltaiche.</li>
                    </ul>
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>Cosa progettiamo: dal residenziale all&apos;industriale</h2>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>Progettiamo <strong>strutture in acciaio per ogni destinazione d&apos;uso</strong>: ville e residenze private, edifici multipiano, capannoni industriali con carroponte, edifici commerciali e spazi per eventi. Alcuni progetti recenti:</p>
                    <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                      {config.featuredProjects.map((p) => (
                        <li key={p.href} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                          <Link href={p.href} title={linkTitles.progetto(p.title, "it")} className="font-semibold text-[#2a3f54] underline underline-offset-2">{p.title}</Link> — {p.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="mt-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.heroImage.src} alt={config.heroImage.alt} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.secondaryImage.src} alt={config.secondaryImage.alt} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{config.areaHeading}</h2>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{config.areaBody}</p>
                    {config.areaBodySecondary ? <p className={`copy-rhythm ${ui.bodyMuted}`}>{config.areaBodySecondary}</p> : null}
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>Domande frequenti sulla progettazione di strutture in acciaio</h2>
                  <div className="space-y-4">
                    {faq.map(([q, a]) => (
                      <div key={q} className="frost-card rounded-2xl p-5 sm:p-6">
                        <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a2a2a]`}>{q}</h3>
                        <p className={`copy-rhythm ${ui.bodyMuted}`}>{a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="richiesta-preventivo" className={`mt-10 ${scrollAnchorClass}`}>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{config.ctaHeading}</h2>
                    <p className={`copy-rhythm mb-6 max-w-[640px] ${ui.bodyMuted}`}>
                      Richiedi un <strong>preventivo senza impegno</strong> per la progettazione strutturale a {config.city}.
                      Indica tipologia, dimensioni indicative e tempi: ti rispondiamo entro 1–2 giorni lavorativi.
                    </p>
                    <ContactForm
                      formId="form-preventivo-acciaio"
                      defaultCity={config.city}
                      defaultSubject={`Preventivo strutture in acciaio — ${config.city}`}
                      messagePlaceholder="Es. villa / capannone / sopraelevazione, mq indicativi, comune, tempi desiderati…"
                      submitLabel="Richiedi preventivo"
                      successMessage="Richiesta inviata. Ti rispondiamo entro 1–2 giorni lavorativi con i prossimi passi."
                    />
                    <p className={`mt-5 text-center text-sm ${ui.bodyMuted}`}>
                      Preferisci parlare subito?{" "}
                      <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#2a3f54] underline underline-offset-2" title={linkTitles.telefono(site.phoneDisplay, "it")}>
                        {site.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mx-auto w-full max-w-[900px]">
            <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>
              {landingCopy.en.heroTitle(config.city)}
            </h1>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-7 md:p-8">
              <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{cityCopy?.introLead}</p>
              <p className={`copy-rhythm mb-6 ${ui.bodyMuted}`}>{landingCopy.en.process}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#richiesta-preventivo" className={ui.btnPrimary} title="Request a free quote — Studio Capoferri">
                  Request a free quote
                </a>
                <a href={`tel:${site.phoneTel}`} className={ui.btnOutline} title={linkTitles.telefono(site.phoneDisplay, locale)}>{site.phoneDisplay}</a>
              </div>
            </article>
            <div className="lazy-section">
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{landingCopy.en.whyTitle}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                    {landingCopy.en.whyBullets.map(([title, text]) => (
                      <li key={title} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>{title}</strong> - {text}</li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{landingCopy.en.scopeTitle}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{landingCopy.en.scopeLead}</p>
                  <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                    {(cityCopy
                      ? config.featuredProjects.map((p, index) => ({
                          ...p,
                          title: cityCopy.featuredProjects[index]?.[0] ?? p.title,
                          description: cityCopy.featuredProjects[index]?.[1] ?? p.description,
                        }))
                      : config.featuredProjects).map((p) => (
                      <li key={p.href} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                        <Link href={localizeHref(p.href, locale)} title={linkTitles.progetto(p.title, locale)} className="font-semibold text-[#2a3f54] underline underline-offset-2">{p.title}</Link> - {p.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.heroImage.src} alt={config.heroImage.altEn} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.secondaryImage.src} alt={config.secondaryImage.altEn} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                </div>
              </section>
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{cityCopy?.areaHeading}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{cityCopy?.areaBody}</p>
                  {cityCopy?.areaBodySecondary ? <p className={`copy-rhythm ${ui.bodyMuted}`}>{cityCopy.areaBodySecondary}</p> : null}
                </div>
              </section>
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{landingCopy.en.faqTitle}</h2>
                <div className="space-y-4">
                  {faq.map(([q, a]) => (
                    <div key={q} className="frost-card rounded-2xl p-5 sm:p-6">
                      <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a2a2a]`}>{q}</h3>
                      <p className={`copy-rhythm ${ui.bodyMuted}`}>{a}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section id="richiesta-preventivo" className={`mt-10 ${scrollAnchorClass}`}>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{cityCopy?.ctaHeading}</h2>
                  <p className={`copy-rhythm mb-6 max-w-[640px] ${ui.bodyMuted}`}>
                    Request a <strong>no-obligation quote</strong> for structural design in {config.city}.
                    Share building type, approximate size and timeline — we reply within 1–2 working days.
                  </p>
                  <ContactForm
                    formId="form-preventivo-acciaio"
                    defaultCity={config.city === "Milano" ? "Milan" : config.city}
                    defaultSubject={`Steel structure design quote — ${config.city === "Milano" ? "Milan" : config.city}`}
                    messagePlaceholder="E.g. villa / warehouse / vertical extension, approx. sqm, municipality, preferred timeline…"
                    submitLabel="Request quote"
                    successMessage="Request sent. We will reply within 1–2 working days with the next steps."
                  />
                  <p className={`mt-5 text-center text-sm ${ui.bodyMuted}`}>
                    Prefer to call?{" "}
                    <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#2a3f54] underline underline-offset-2" title={linkTitles.telefono(site.phoneDisplay, locale)}>
                      {site.phoneDisplay}
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
