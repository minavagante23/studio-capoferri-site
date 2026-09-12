import type { Metadata } from "next";
import { LocalizedPrivacyPageContent } from "@/components/pages/LocalizedSimplePages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy policy",
  description: "Informativa privacy e cookie - Studio Capoferri SRL STP.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LocalizedPrivacyPageContent />;
}
