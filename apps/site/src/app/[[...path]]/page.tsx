import type { Metadata } from "next";
import LegacyRouteClient from "@/features/legacy/LegacyRouteClient";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

type RouteParams = {
  path?: string[];
};

type PageProps = {
  params: Promise<RouteParams>;
};

const staticRoutes = [
  "/",
  "/best-hair-removal-device-uk-2026",
  "/best-led-face-mask-uk-2026-previous",
  "/best-led-face-mask-uk-2026-video-test",
  "/best-led-face-mask-video-review-uk",
  "/new-advertorial",
  "/new-led-face-mask-review-uk",

  // Direct comparison routes
  "/currentbody-vs-buudy",
  "/currentbody-skin-led-light-therapy-mask-review-uk",
  "/deluxeskin-vs-buudy",
  "/deluxskin-led-facial-mask-review-uk",
  "/qureskincare-vs-buudy",
  "/qure-skincare-light-therapy-mask-review-uk",
  "/theraface-vs-other-masks",
  "/theraface-vs-buudy",
  "/theraface-mask-review-uk",

  // Warning and educational guide routes
  "/silicone-led-mask-dangers",
  "/silicon-led-mask-warning-uk",
  "/floating-head-warning",
  "/floating-head-led-mask-warning-uk",
  "/missing-colors-expose",
  "/missing-colors-led-mask-expose-uk",
  "/led-density-scam",
  "/led-density-scam-uk",
  "/brand-name-premium",
  "/brand-name-premium-led-mask-uk",

  // All 6 Blog Articles
  "/blog/red-light-therapy-ultimate-guide",
  "/blog/blue-red-light-blemish-prone-skin",
  "/blog/led-masks-for-mature-skin",
  "/blog/led-mask-face-neck-coverage-guide",
  "/blog/choosing-safe-led-mask",
  "/blog/understanding-led-light-colours",

  // Legal routes
  "/privacy",
  "/terms",
  "/disclosure",
  "/contact"
];

function pathnameFromSegments(path?: string[]) {
  if (!path?.length) {
    return "/";
  }

  return `/${path.map((segment) => decodeURIComponent(segment)).join("/")}`;
}

function routeParams(pathname: string) {
  if (!pathname.startsWith("/blog/")) {
    return undefined;
  }

  return { slug: pathname.replace(/^\/blog\//, "") };
}

export function generateStaticParams() {
  return staticRoutes.map((route) => ({
    path: route === "/" ? [] : route.replace(/^\//, "").split("/")
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return metadataForPath(pathnameFromSegments(resolvedParams.path));
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const pathname = pathnameFromSegments(resolvedParams.path);

  return (
    <LegacyRouteClient
      pathname={pathname}
      params={routeParams(pathname)}
      context={getUkPageContext()}
    />
  );
}
