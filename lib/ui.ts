/**
 * Token UI condivisi: tipografia corpo, titoli, pulsanti, form.
 * I titoli display usano sempre `fontDisplay` da `@/lib/fonts` — comporre così:
 * `className={\`${fontDisplay.className} ${ui.pageTitle}\`}`.
 */
export const ui = {
  /** Sfondo gradient brand (footer, sezioni scure, hero fallback) */
  brandGradient: "bg-gradient-to-br from-[#2a3f54] via-[#24384b] to-[#1f2e3d]",
  /** Gradient brand senza via (CTA, card compatte) */
  brandGradientCompact: "bg-gradient-to-br from-[#2a3f54] to-[#1f2e3d]",
  /** Icona decorativa in card home */
  iconBox: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a3f54] to-[#3d5a7a] text-white sm:h-14 sm:w-14",
  /** Didascalia overlay card progetto */
  projectCardCaption: "text-base tracking-[0.01em] text-white sm:text-lg",
  /** Card progetto su sfondo chiaro — foto a vivo, meno chrome */
  projectCardLight:
    "group block overflow-hidden rounded-sm border border-[#2a3f54]/08 bg-transparent transition duration-500 hover:border-[#b87333]/35",
  /** Card progetto su sfondo scuro */
  projectCardDark:
    "group block overflow-hidden rounded-sm border border-white/10 bg-transparent transition duration-500 hover:border-[rgba(232,180,120,0.45)]",

  /** Paragrafi corpo su sfondo chiaro */
  body: "copy-rhythm text-[0.98rem] text-[#333] sm:text-[1.05rem]",
  /** Testo secondario (card, intro) */
  bodyMuted: "text-[0.98rem] text-[#444] sm:text-[1.05rem]",

  /** H1 pagine interne standard */
  pageTitle: "section-title text-[1.75rem] tracking-[0.02em] text-[#2a2a2a] sm:text-4xl md:text-5xl",

  /** H1 case study / progetto singolo */
  caseStudyTitle: "section-title text-[1.65rem] tracking-[0.02em] text-[#2a2a2a] sm:text-3xl md:text-4xl",

  /** H2 sezioni home (Chi siamo, Servizi, Contatti, …) — comporre con fontDisplay */
  homeSectionTitle: "section-title home-section-title reveal-title",
  /** H2 sezioni home su sfondo scuro (Progetti, Statistiche) */
  homeSectionTitleInverted: "section-title home-section-title home-section-title--inverted reveal-title",

  /** H2 sezione lunga (servizi, privacy, landing) */
  sectionHeadingAccent: "section-title text-2xl tracking-[0.02em] text-[#2a2a2a]",

  /** H2 galleria, “Progetti in evidenza” */
  gallerySectionTitle: "section-title text-xl tracking-[0.02em] text-[#2a2a2a] sm:text-2xl",

  /** H2 in card chiare (Recapiti, Dove siamo) */
  cardHeading: "section-title text-xl tracking-[0.02em] text-[#2a2a2a] sm:text-2xl",

  /** Link inline (navy → corten al hover) */
  linkAccent: "link-accent",

  /** Pulsante primario (gradient brand) */
  btnPrimary:
    "inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-br from-[#2a3f54] via-[#24384b] to-[#1f2e3d] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(184,115,51,0.55)] disabled:opacity-60",

  /** Pulsante outline — CTA secondari home e link “Esplora / Scopri / Scrivici” */
  btnOutline:
    "inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[#2a3f54] bg-white/90 px-8 py-3 text-sm font-semibold text-[#2a3f54] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b87333] hover:bg-[#b87333] hover:text-white hover:shadow-[0_12px_28px_rgba(184,115,51,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b87333] motion-reduce:hover:translate-y-0",

  /** Pulsante trasparente su sfondo scuro (privacy / barre) */
  btnGhostOnDark:
    "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",

  /** CTA su sfondo scuro (hero) */
  btnOnDark:
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-white/25 bg-white px-8 py-3 text-sm font-semibold text-[#1f2e3d] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(232,180,120,0.7)] sm:w-auto",

  /** Cookie: accetta (chiaro su barra scura) */
  cookieAccept:
    "min-h-[48px] flex-1 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#2a3f54] transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-6",

  /** Cookie: rifiuta */
  cookieReject:
    "min-h-[48px] flex-1 rounded-md border-2 border-white/60 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-6",

  /** Input / textarea form contatti */
  inputField:
    "w-full rounded-md border-2 border-[#2a3f54]/12 bg-white px-4 py-3 text-base text-[#333] outline-none transition placeholder:text-neutral-400 focus:border-[#b87333] focus:ring-2 focus:ring-[rgba(184,115,51,0.2)]",

  /** Link colonna footer */
  footerLink: "focus-ring inline-block min-h-[44px] py-1.5 leading-relaxed transition-colors hover:text-[#e8b478]",
} as const;
