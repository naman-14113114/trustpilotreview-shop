import type { NextConfig } from "next";
import path from "node:path";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];

const redirectToAdvertorial = "/best-led-face-mask-uk-2026";

const nextConfig: NextConfig = {
  transpilePackages: ["@trustpilotreview/ui", "@trustpilotreview/shared"],
  poweredByHeader: false,
  turbopack: {
    root: path.join(process.cwd(), "../..")
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.bestledfacemask.org" },
      { protocol: "https", hostname: "img.thesitebase.net" },
      { protocol: "https", hostname: "img.shopbase.com" },
      { protocol: "https", hostname: "assets.thesitebase.net" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "lawngreen-kingfisher-468763.hostingersite.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.buudy.co.uk" }
    ]
  },
  async redirects() {
    return [
      { source: "/new", destination: redirectToAdvertorial, permanent: true },
      { source: "/best-led-face-mask-in-uk", destination: redirectToAdvertorial, permanent: true },
      { source: "/best-red-light-therapy-mask", destination: redirectToAdvertorial, permanent: true },
      { source: "/best-red-light-therapy-mask/:path*", destination: redirectToAdvertorial, permanent: true },
      { source: "/top-5-led-mask", destination: redirectToAdvertorial, permanent: true },
      { source: "/top-5-led-mask/:path*", destination: redirectToAdvertorial, permanent: true },
      { source: "/pages/buudy-led-mask", destination: redirectToAdvertorial, permanent: true },
      { source: "/pages/buudy-led-mask/:path*", destination: redirectToAdvertorial, permanent: true },
      { source: "/pages/buudy-led-face-mask", destination: redirectToAdvertorial, permanent: true },
      { source: "/pages/buudy-led-face-mask/:path*", destination: redirectToAdvertorial, permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: "/best-led-face-mask-uk-2026-previous",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      },
      {
        source: "/best-led-face-mask-uk-2026-video-test",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
      },
      {
        source: "/robots.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }]
      },
      {
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }]
      },
      {
        source: "/llms-full.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }]
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "Content-Type", value: "application/xml; charset=utf-8" }]
      },
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
