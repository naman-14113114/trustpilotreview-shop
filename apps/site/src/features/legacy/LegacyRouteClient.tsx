"use client";

import type { ComponentType, ReactNode } from "react";
import LegacyLayout from "@/components/LegacyLayout";
import { getBuudyEditorialPage } from "@/data/buudyEditorialPages";
import BuudyEditorialPage from "@/features/buudy-comparisons/BuudyEditorialPage";
import BestLedFaceMaskAdvertorial from "@/legacy-pages/BestLedFaceMaskAdvertorial";
import Article from "@/legacy-pages/old/Article";
import Home from "@/legacy-pages/old/Home";
import Legal from "@/legacy-pages/old/Legal";
import BrandNamePremium from "@/legacy-pages/old/BrandNamePremium";
import CurrentbodyComparison from "@/legacy-pages/old/CurrentbodyComparison";
import DeluxeskinComparison from "@/legacy-pages/old/DeluxeskinComparison";
import FloatingHeadWarning from "@/legacy-pages/old/FloatingHeadWarning";
import LedDensityScam from "@/legacy-pages/old/LedDensityScam";
import MissingColorsExpose from "@/legacy-pages/old/MissingColorsExpose";
import NewAdvertorial from "@/legacy-pages/old/NewAdvertorial";
import QureskincareComparison from "@/legacy-pages/old/QureskincareComparison";
import SiliconMaskWarning from "@/legacy-pages/old/SiliconMaskWarning";
import TherafaceComparison from "@/legacy-pages/old/TherafaceComparison";
import VideoAdvertorial from "@/legacy-pages/old/VideoAdvertorial";
import { LegacyRouterProvider } from "@/lib/router-shim";
import type { PageMarketContext } from "@/lib/marketContext";
import HairRemovalBridge from "./HairRemovalBridge";

type Props = {
  pathname: string;
  params?: Record<string, string | undefined>;
  context: PageMarketContext;
};

const noShellPages: Record<string, ComponentType> = {
  // Advertorial variants
  "/new-advertorial": NewAdvertorial,
  "/new-led-face-mask-review-uk": NewAdvertorial,
  "/best-led-face-mask-uk-2026-previous": VideoAdvertorial,
  "/best-led-face-mask-uk-2026-video-test": VideoAdvertorial,
  "/best-led-face-mask-video-review-uk": VideoAdvertorial,

  // Direct comparison pages (canonical & legacy slugs)
  "/currentbody-vs-buudy": CurrentbodyComparison,
  "/currentbody-skin-led-light-therapy-mask-review-uk": CurrentbodyComparison,
  "/deluxeskin-vs-buudy": DeluxeskinComparison,
  "/deluxskin-led-facial-mask-review-uk": DeluxeskinComparison,
  "/qureskincare-vs-buudy": QureskincareComparison,
  "/qure-skincare-light-therapy-mask-review-uk": QureskincareComparison,
  "/theraface-vs-other-masks": TherafaceComparison,
  "/theraface-vs-buudy": TherafaceComparison,
  "/theraface-mask-review-uk": TherafaceComparison,

  // Warning and educational guide pages (canonical & legacy slugs)
  "/silicone-led-mask-dangers": SiliconMaskWarning,
  "/silicon-led-mask-warning-uk": SiliconMaskWarning,
  "/floating-head-warning": FloatingHeadWarning,
  "/floating-head-led-mask-warning-uk": FloatingHeadWarning,
  "/missing-colors-expose": MissingColorsExpose,
  "/missing-colors-led-mask-expose-uk": MissingColorsExpose,
  "/led-density-scam": LedDensityScam,
  "/led-density-scam-uk": LedDensityScam,
  "/brand-name-premium": BrandNamePremium,
  "/brand-name-premium-led-mask-uk": BrandNamePremium,
};

function Shell({ children }: { children: ReactNode }) {
  return <LegacyLayout>{children}</LegacyLayout>;
}

export default function LegacyRouteClient({ pathname, params, context }: Props) {
  if (pathname === "/best-hair-removal-device-uk-2026") {
    return <HairRemovalBridge />;
  }

  return (
    <LegacyRouterProvider pathname={pathname} params={params ?? {}}>
      {noShellPages[pathname] ? (
        (() => {
          const Page = noShellPages[pathname];
          return <Page />;
        })()
      ) : pathname === "/best-led-face-mask-uk-2026" ? (
        <BestLedFaceMaskAdvertorial market="uk" context={context} />
      ) : pathname.startsWith("/blog/") ? (
        <Article />
      ) : pathname === "/privacy" || pathname === "/terms" || pathname === "/disclosure" || pathname === "/contact" ? (
        <Shell>
          <Legal />
        </Shell>
      ) : getBuudyEditorialPage(pathname) ? (
        <BuudyEditorialPage pathname={pathname} />
      ) : (
        <Shell>
          <Home />
        </Shell>
      )}
    </LegacyRouterProvider>
  );
}
