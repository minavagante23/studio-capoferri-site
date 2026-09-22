import type { Metadata } from "next";
import { AppProviders } from "@/components/AppProviders";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { LocalePreferenceRedirect } from "@/components/LocalePreferenceRedirect";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { offerCatalogJsonLd, organizationId } from "@/lib/jsonld";
import { defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const siteDescription =
  "Studio di ingegneria a Brescia e provincia: strutture in acciaio, architettura ad Adro (BS). Oltre 40 anni di esperienza.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Studio Capoferri - Ingegneria a Brescia e provincia",
    template: `${site.name} - %s`,
  },
  description: siteDescription,
  alternates: { canonical: `${site.url}/` },
  keywords: [
    "ingegneria civile Brescia",
    "ingegneria civile Bergamo",
    "ingegneria civile Milano",
    "progettazione strutturale Brescia",
    "progettazione strutturale Bergamo",
    "strutture acciaio",
    "studio ingegneria Adro",
    "Franciacorta",
    "ingegneria Nord Italia",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    siteName: site.name,
    title: `Studio Capoferri – ${site.tagline}`,
    description: siteDescription,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Progettazione strutture in acciaio - Studio Capoferri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Studio Capoferri – ${site.tagline}`,
    description: siteDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
  verification: { google: "DMhu8zo7VvJIGjVKh3LMDhcxJs174oNCUb41rzZNTCA" },
  other: { "theme-color": "#1c1e21" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": organizationId(),
  // Deve corrispondere esattamente al nome del profilo Google Business
  name: site.gmbName,
  alternateName: site.name,
  legalName: site.legalName,
  description:
    "Civil engineering, architecture and steel structures practice in Adro (Brescia, Italy). Structural design to Eurocodes, steelwork, shop drawings, construction supervision and site safety for projects in Northern Italy and across the EU. / Studio tecnico di ingegneria civile, architettura e strutture in acciaio ad Adro (Brescia). Progettazione strutturale, disegni d'officina, direzione lavori e sicurezza cantieri in Lombardia, Nord Italia e collaborazioni europee.",
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  vatID: `IT${site.piva}`,
  image: `${site.url}${defaultOgImage}`,
  logo: `${site.url}/assets/logo-studio-ingegneria.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:30",
      closes: "18:30",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Brescia" },
    { "@type": "AdministrativeArea", name: "Bergamo" },
    { "@type": "AdministrativeArea", name: "Milano" },
    { "@type": "AdministrativeArea", name: "Lombardia" },
    { "@type": "AdministrativeArea", name: "Veneto" },
    { "@type": "AdministrativeArea", name: "Piemonte" },
    { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
    { "@type": "AdministrativeArea", name: "Toscana" },
    { "@type": "Country", name: "Italy" },
    { "@type": "AdministrativeArea", name: "European Union" },
  ],
  availableLanguage: ["Italian", "English"],
  sameAs: [site.linkedin],
  knowsAbout: [
    "Structural engineering",
    "Steel structures",
    "Shop drawings",
    "FEM analysis",
    "BIM modelling",
    "Eurocodes",
    "NTC 2018",
    "Construction supervision",
    "Site safety",
    "Architecture",
    "Progettazione strutturale",
    "Modellazione BIM",
    "Strutture in acciaio",
    "Disegni costruttivi d'officina",
    "Architettura",
    "Urbanistica",
    "Direzione lavori",
    "Sicurezza cantieri",
    "Prevenzione incendi",
  ],
  hasOfferCatalog: offerCatalogJsonLd(),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phoneTel,
      email: site.email,
      contactType: "customer service",
      availableLanguage: ["Italian", "English"],
      areaServed: ["IT", "EU"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=location.pathname;if(p==='/en'||p.indexOf('/en/')===0)document.documentElement.lang='en';}catch(e){}})();",
          }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontDisplay.variable} ${fontSans.className} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              url: site.url,
              name: site.name,
              publisher: { "@id": organizationId() },
              inLanguage: ["it-IT", "en"],
            }),
          }}
        />
        <AppProviders>
          <SkipLink />
          <LocalePreferenceRedirect />
          <SiteHeader />
          <CookieBanner />
          <GoogleAnalytics />
          {children}
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
