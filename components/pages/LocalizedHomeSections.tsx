import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { HomeCertificationsSection } from "@/components/home/HomeCertificationsSection";
import { HomeContactsSection } from "@/components/home/HomeContactsSection";
import { HomeProjectsSection } from "@/components/home/HomeProjectsSection";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeZoneSection } from "@/components/home/HomeZoneSection";
import { StatsSection } from "@/components/home/StatsSection";
import type { Locale } from "@/lib/i18n";

/**
 * Home body sections. Clients strip (dark) sits between About and Services when enabled —
 * wire `<ClientsStrip />` locally until client logos are committed.
 */
export function LocalizedHomeSections({ locale }: { locale: Locale }) {
  return (
    <>
      <HomeAboutSection locale={locale} />
      <HomeServicesSection locale={locale} />
      <HomeProjectsSection locale={locale} />
      <HomeCertificationsSection locale={locale} />
      <HomeZoneSection locale={locale} />
      <StatsSection locale={locale} />
      <HomeContactsSection locale={locale} />
    </>
  );
}
