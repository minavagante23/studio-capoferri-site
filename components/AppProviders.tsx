"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { AnalyticsClickTracker } from "@/components/AnalyticsClickTracker";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ViewTransitionBridge } from "@/components/ViewTransitionBridge";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LocaleProvider>
        <ViewTransitionBridge />
        <AnalyticsClickTracker />
        {children}
      </LocaleProvider>
    </MotionConfig>
  );
}
