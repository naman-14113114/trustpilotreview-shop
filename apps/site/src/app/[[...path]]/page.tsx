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
  "/best-led-face-mask-uk-2026",
  "/best-hair-removal-device-uk-2026",
  "/best-led-face-mask-uk-2026-previous",
  "/best-led-face-mask-uk-2026-video-test",
  "/new-advertorial",
  "/theraface-vs-other-masks",
  "/deluxeskin-vs-buudy",
  "/qureskincare-vs-buudy",
  "/currentbody-vs-buudy",
  "/silicone-led-mask-dangers",
  "/floating-head-warning",
  "/missing-colors-expose",
  "/led-density-scam",
  "/brand-name-premium",
  "/privacy",
  "/terms",
  "/disclosure",
  "/contact",
  "/blog/red-light-therapy-ultimate-guide"
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
