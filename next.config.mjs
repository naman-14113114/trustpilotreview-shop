const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  outputFileTracingIncludes: {
    '/*': [
      './*.html',
      './*.txt',
      './*.xml',
      './*.pdf',
      './assets/**/*',
      './gallery/**/*',
      './img/**/*',
      './pages/**/*',
      './videos/**/*',
      './buudy-led-mask-uk/**/*',
      './therabody-vs-buudy/**/*',
      './top-5-hair-dryer-uk/**/*',
    ],
  },
  outputFileTracingExcludes: {
    '/*': [
      './.git/**/*',
      './.next/**/*',
      './unzipped/**/*',
      './unzipped_new_pages/**/*',
      './audit-video-test/**/*',
      './*.png',
      './*.zip',
    ],
  },
  async redirects() {
    return [
      {
        source: '/new',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/best-led-face-mask-in-uk',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/best-red-light-therapy-mask',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/best-red-light-therapy-mask/:path*',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/top-5-led-mask',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/top-5-led-mask/:path*',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/pages/buudy-led-mask',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/pages/buudy-led-mask/:path*',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/pages/buudy-led-face-mask',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
      {
        source: '/pages/buudy-led-face-mask/:path*',
        destination: '/best-led-face-mask-uk-2026',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/best-led-face-mask-uk-2026-previous',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/best-led-face-mask-uk-2026-video-test',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
        ],
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
