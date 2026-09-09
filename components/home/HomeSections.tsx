import { LocalizedHomeSections } from "@/components/pages/LocalizedHomeSections";
import type { Locale } from "@/lib/i18n";

export function HomeSections({ locale = "it" }: { locale?: Locale }) {
  return <LocalizedHomeSections locale={locale} />;
}
