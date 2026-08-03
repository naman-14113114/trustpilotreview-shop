"use client";

import type { ComponentType, ReactNode } from "react";
import LegacyLayout from "@/components/LegacyLayout";
import { getBuudyEditorialPage } from "@/data/buudyEditorialPages";
import BuudyEditorialPage from "@/features/buudy-comparisons/BuudyEditorialPage";
import BestLedFaceMaskAdvertorial from "@/legacy-pages/BestLedFaceMaskAdvertorial";
import Article from "@/legacy-pages/old/Article";
import Home from "@/legacy-pages/old/Home";
import Legal from "@/legacy-pages/old/Legal";
import NewAdvertorial from "@/legacy-pages/old/NewAdvertorial";
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
  "/new-advertorial": NewAdvertorial,
  "/best-led-face-mask-uk-2026-previous": VideoAdvertorial,
  "/best-led-face-mask-uk-2026-video-test": VideoAdvertorial
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
      {getBuudyEditorialPage(pathname) ? (
        <BuudyEditorialPage pathname={pathname} />
      ) : pathname === "/best-led-face-mask-uk-2026" ? (
        <BestLedFaceMaskAdvertorial market="uk" context={context} />
      ) : pathname.startsWith("/blog/") ? (
        <Shell>
          <Article />
        </Shell>
      ) : pathname === "/privacy" || pathname === "/terms" || pathname === "/disclosure" || pathname === "/contact" ? (
        <Shell>
          <Legal />
        </Shell>
      ) : noShellPages[pathname] ? (
        (() => {
          const Page = noShellPages[pathname];
          return <Page />;
        })()
      ) : (
        <Shell>
          <Home />
        </Shell>
      )}
    </LegacyRouterProvider>
  );
}
