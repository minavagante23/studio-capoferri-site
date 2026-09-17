/** Padding orizzontale sul contenitore esterno (stesso pattern delle `.section-shell` della home). */
export const layoutGutterXClass = "px-4 sm:px-5 md:px-10";

/**
 * Colonna contenuto centrata nel gutter. Usare dentro un wrapper con `layoutGutterXClass`
 * così header, footer e pagine allineano logo e menu ai bordi delle sezioni (stesso schema della home).
 */
export const layoutContentMaxClass = "mx-auto w-full max-w-[1140px]";

/** Offset per anchor link sotto header sticky */
export const scrollAnchorClass = "scroll-anchor";

export const steelLandingPages = [
  { href: "/progettazione-strutture-acciaio-brescia", label: "Progettazione acciaio — Brescia" },
  { href: "/progettazione-strutture-acciaio-bergamo", label: "Progettazione acciaio — Bergamo" },
  { href: "/progettazione-strutture-acciaio-milano", label: "Progettazione acciaio — Milano" },
] as const;

/** URL pubblico (canonical, OG). In CI per GitHub Pages impostare NEXT_PUBLIC_SITE_URL al dominio reale del deploy. */
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studiocapoferri.eu";

export const site = {
  name: "Studio Capoferri",
  /** Must match Google Business Profile exactly. */
  gmbName: "Studio Capoferri - Ingegneria e Architettura",
  legalName: "Studio Capoferri SRL STP",
  tagline: "Ingegneria - Architettura - Urbanistica",
  url: publicSiteUrl,
  email: "info@studiocapoferri.eu",
  phoneDisplay: "+39 030 7357263",
  phoneTel: "+390307357263",
  addressLine: "Via Piave 35 – 25030 Adro (BS), Italia",
  address: {
    street: "Via Piave 35",
    postalCode: "25030",
    locality: "Adro",
    province: "BS",
    region: "Lombardia",
    country: "IT",
  },
  /** Exact Google Business / Maps place pin. */
  geo: { latitude: 45.6179772, longitude: 9.9641795 },
  mapsUrl:
    "https://www.google.com/maps/place/Studio+Capoferri+-+Ingegneria+e+Architettura/@45.6179772,9.9641795,10z/data=!4m6!3m5!1s0x4781689f7af0d03b:0xf05e95b5cb5391fe!8m2!3d45.6179772!4d9.9641795!16s%2Fg%2F1w0p4gwq",
  /** Embed zoomed to Franciacorta (~40 km span); pin stays on the Adro office. */
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40000!2d9.9641795!3d45.6179772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781689f7af0d03b%3A0xf05e95b5cb5391fe!2sStudio%20Capoferri%20-%20Ingegneria%20e%20Architettura!5e0!3m2!1sit!2sit!4v1726400000000!5m2!1sit!2sit",
  /** Opening hours — same split as Google Business Profile. */
  openingHoursDisplay: "Lun – Ven: 08:30–12:00, 14:30–18:30",
  openingHoursDisplayEn: "Mon – Fri: 08:30–12:00, 14:30–18:30",
  linkedin: "https://www.linkedin.com/company/studio-capoferri-ingegneria",
  piva: "04732710985",
  formspreeId: "mqapdvrr",
  /** Google Analytics 4 measurement ID (loaded only after cookie consent). */
  gaMeasurementId: "G-53HR1FFCQC",
} as const;

export const navItems = [
  { href: "/chi-siamo", key: "about" },
  { href: "/progetti", key: "projects" },
  { href: "/servizi", key: "services" },
  { href: "/contatti", key: "contacts" },
] as const;
