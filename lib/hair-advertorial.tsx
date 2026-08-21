import type { HairMetric, HairPageData, HairProduct } from "./hair-pages";
import { MUUHU_COMB_URL, MUUHU_EBOOK_URL, MUUHU_HAIR_URL, MUUHU_PACKAGING_URL } from "./hair-pages";

function OutboundButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={MUUHU_HAIR_URL}
      aria-label="Check Muuhu hair dryer availability"
      data-outbound-button="true"
      data-loading="false"
      className={`hair-cta ${className}`}
    >
      <span data-outbound-content="true">{children}</span>
      <span aria-hidden="true">›</span>
    </a>
  );
}

function Stars() {
  return <div className="hair-stars" aria-label="5 displayed stars">★★★★★</div>;
}

function MetricBar({ metric }: { metric: HairMetric }) {
  return (
    <div className="hair-metric">
      <div className="hair-metric-head">
        <span>{metric.label}</span>
        <span>{metric.value}%</span>
      </div>
      <div className="hair-bar">
        <span style={{ width: `${metric.value}%` }} />
      </div>
    </div>
  );
}

function GiftOffer() {
  return (
    <div className="hair-offer">
      <p className="hair-section-label">Editor's tip</p>
      <h3>
        Active Offer Found: £99 in <span>FREE GIFTS</span>
      </h3>
      <p>
        While checking the official Muuhu UK product page, we found the current hair dryer offer includes premium packaging,
        the Muuhu ScalpPro and a Haircare E-book alongside the main styler. These links now go to the official Muuhu gift pages.
      </p>
      <div className="hair-gifts">
        <a className="hair-gift" href={MUUHU_PACKAGING_URL} data-outbound-button="true">
          <img src="/img/hair/muuhu-luxury-case.webp" alt="Muuhu premium packaging" loading="lazy" decoding="async" />
          <strong>Premium Packaging</strong>
          <span>FREE £25</span>
        </a>
        <a className="hair-gift" href={MUUHU_COMB_URL} data-outbound-button="true">
          <img src="/img/hair/muuhu-comb.webp" alt="Muuhu ScalpPro" loading="lazy" decoding="async" />
          <strong>Muuhu ScalpPro</strong>
          <span>FREE £59</span>
        </a>
        <a className="hair-gift" href={MUUHU_EBOOK_URL} data-outbound-button="true">
          <img src="/img/hair/muuhu-expert-hair-ebook.webp" alt="Muuhu haircare e-book" loading="lazy" decoding="async" />
          <strong>Haircare E-book</strong>
          <span>FREE £15</span>
        </a>
      </div>
      <OutboundButton>Check Availability</OutboundButton>
    </div>
  );
}

function ProductCard({ product }: { product: HairProduct }) {
  return (
    <article className={`hair-product ${product.isWinner ? "is-winner" : ""}`}>
      {product.isWinner ? <div className="hair-ribbon">No. 1 Pick</div> : null}
      <div className="hair-product-media">
        <img src={product.image} alt={product.name} loading={product.isWinner ? "eager" : "lazy"} decoding="async" />
        <p className="hair-badge">{product.badge}</p>
        <div className="hair-price-row">
          <span className="hair-price">{product.price}</span>
          {product.wasPrice ? <span className="hair-was">{product.wasPrice}</span> : null}
        </div>
        <Stars />
        <p className="hair-rating-text">Overall rating {product.rating}</p>
        {product.isWinner ? <OutboundButton>Official Website</OutboundButton> : null}
      </div>

      <div>
        <p className="hair-product-rank">#{product.rank}</p>
        <h2>{product.name}</h2>
        <span className="hair-best-for">{product.bestFor}</span>
        <p className="hair-summary">{product.summary}</p>

        <div className="hair-metrics">
          <h3>Performance Metrics</h3>
          {product.metrics.map((metric) => (
            <MetricBar key={`${product.name}-${metric.label}`} metric={metric} />
          ))}
        </div>

        <div className="hair-proscons">
          <div className="hair-panel pros">
            <h3>Pros</h3>
            <ul>
              {product.pros.map((item) => (
                <li key={item}>
                  <span className="hair-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hair-panel cons">
            <h3>Cons</h3>
            <ul>
              {product.cons.map((item) => (
                <li key={item}>
                  <span className="hair-x">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {product.isWinner ? <GiftOffer /> : null}
      </div>
    </article>
  );
}

export default function HairAdvertorialPage({ page }: { page: HairPageData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.trustpilotreview.shop/#organization",
        "name": "Trustpilot Review Shop",
        "url": "https://www.trustpilotreview.shop/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://img.thesitebase.net/10677/10677322/themes/17688355473bc9b44aac.png",
        },
        "description": "Trustpilot Review Shop publishes UK beauty technology comparisons, buyer guides, and specification reviews.",
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.trustpilotreview.shop/#website",
        "name": "Trustpilot Review Shop",
        "url": "https://www.trustpilotreview.shop/",
        "publisher": {
          "@id": "https://www.trustpilotreview.shop/#organization",
        },
        "inLanguage": "en-GB",
      },
      {
        "@type": "Person",
        "@id": "https://www.trustpilotreview.shop/#author-amara-wright",
        "name": "Amara Wright",
        "jobTitle": "Haircare and hair style expert",
        "worksFor": {
          "@id": "https://www.trustpilotreview.shop/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.trustpilotreview.shop${page.canonical}#webpage`,
        "url": `https://www.trustpilotreview.shop${page.canonical}`,
        "name": page.title,
        "isPartOf": {
          "@id": "https://www.trustpilotreview.shop/#website",
        },
        "about": [
          "best hair dryer",
          "best hair dryers uk",
          "hair dryer best",
          "7 in 1 hair styler",
          "high speed brushless hair dryer",
        ],
        "inLanguage": "en-GB",
      },
      {
        "@type": "Article",
        "@id": `https://www.trustpilotreview.shop${page.canonical}#article`,
        "mainEntityOfPage": {
          "@id": `https://www.trustpilotreview.shop${page.canonical}#webpage`,
        },
        "headline": page.title,
        "description": page.description,
        "image": page.heroImage,
        "author": {
          "@id": "https://www.trustpilotreview.shop/#author-amara-wright",
        },
        "publisher": {
          "@id": "https://www.trustpilotreview.shop/#organization",
        },
        "keywords": [
          "best hair dryer",
          "best hair dryers",
          "hair dryer best",
          "best hair dryer uk",
          "top 5 hair dryers uk",
          "7 in 1 hair styler",
        ],
      },
      {
        "@type": "Product",
        "@id": "https://www.trustpilotreview.shop/best-hair-dryer-uk-2026#product-muuhu",
        "name": "Muuhu 7-in-1 Hair Dryer & Multi-Styler",
        "image": "https://uk.muuhu.com/images/products/muuhu-hair-dryer/00-travel-friendly-styler.webp",
        "description": "110,000 RPM high-speed hair dryer and 7-in-1 multi-styler with Coanda auto-wrap curling barrels, smoothing brush, round volumising brush, concentrator, and diffuser.",
        "brand": {
          "@type": "Brand",
          "name": "Muuhu",
        },
        "offers": {
          "@type": "Offer",
          "url": "https://uk.muuhu.com/products/muuhu-hair-dryer",
          "priceCurrency": "GBP",
          "price": "149.00",
          "priceValidUntil": "2027-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Muuhu UK",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
          "bestRating": "5",
          "worstRating": "1",
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.9",
            "bestRating": "5",
          },
          "author": {
            "@id": "https://www.trustpilotreview.shop/#author-amara-wright",
          },
          "reviewBody": "Ranked #1 Editor Value Pick for its 110,000 RPM brushless motor, 7 styling attachments, and complete routine coverage at £149.",
        },
      },
      {
        "@type": "ItemList",
        "@id": `https://www.trustpilotreview.shop${page.canonical}#ranking`,
        "name": "Best Hair Dryer UK 2026 Comparison Ranking",
        "numberOfItems": page.products.length,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": page.products.map((p, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": p.name,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.trustpilotreview.shop${page.canonical}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best hair dryer in the UK in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on listed specifications, included attachments, motor speed (110,000 RPM), and pricing, the Muuhu 7-in-1 Hair Dryer is ranked as the #1 editor value pick for versatile everyday styling.",
            },
          },
          {
            "@type": "Question",
            "name": "How does a high-speed brushless hair dryer prevent heat damage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 110,000 RPM high-speed motor relies on high-velocity controlled airflow rather than extreme heat to dry hair quickly, preserving hair moisture and preventing thermal damage.",
            },
          },
          {
            "@type": "Question",
            "name": "What styling attachments are included with multi-styler hair dryers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Comprehensive kits like the Muuhu 7-in-1 include auto-wrap curling barrels using the Coanda effect, smoothing brushes, round volumising brushes, concentrator nozzles, and diffusers for curly or wavy hair.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="hair-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hair-topbar">
        <div className="hair-shell">
          <p className="hair-kicker">Independent UK hair dryer comparison</p>
          <h1>{page.headline}</h1>
          <p className="hair-subtitle">{page.subheadline}</p>
        </div>
      </section>

      <header className="hair-intro">
        <div className="hair-shell hair-intro-grid">
          <div className="hair-editor-card">
            <div className="hair-editor-head">
              <img src="/img/hair/doc_pic.webp" alt="Haircare and hair style expert portrait" loading="eager" decoding="async" />
              <div>
                <h2>Amara Wright</h2>
                <p className="hair-editor-role">Haircare and hair style expert</p>
              </div>
            </div>
            <p>{page.editorIntro}</p>
          </div>

          <figure className="hair-hero-image">
            <img src={page.heroImage} alt={page.heroAlt} loading="eager" fetchPriority="high" decoding="async" />
            <figcaption className="hair-hero-caption">
              <span>UK comparison page</span>
              <strong>Muuhu ranked No. 1</strong>
            </figcaption>
          </figure>
        </div>
      </header>

      <main className="hair-main">
        <div className="hair-shell">
          <section className="hair-copy">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="hair-section hair-card">
            <p className="hair-section-label">Evaluation criteria</p>
            <h2 className="hair-heading">{page.criteriaTitle}</h2>
            <div className="hair-criteria-grid">
              {page.criteria.map((criterion) => (
                <div className="hair-criterion" key={criterion}>
                  <span className="hair-check">✓</span>
                  <span>{criterion}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="hair-section">
            <p className="hair-section-label">Product rankings</p>
            <h2 className="hair-heading">{page.productsTitle}</h2>
            <p className="hair-summary">{page.productsIntro}</p>
            <div className="hair-product-list hair-section">
              {page.products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </section>

          <section className="hair-section hair-verdict">
            <div>
              <img src="/img/hair/muuhu_product_1x1.webp" alt="Muuhu 7-in-1 hair dryer" loading="lazy" decoding="async" />
            </div>
            <div>
              <p className="hair-section-label">Editor's Verdict</p>
              <h2 className="hair-heading">Muuhu 7-in-1 Hair Dryer</h2>
              <p>{page.verdict}</p>
              <Stars />
              <OutboundButton>Check Availability</OutboundButton>
            </div>
          </section>
        </div>
      </main>

      <footer className="hair-footer">
        <div style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", fontSize: "11px" }}>
          <a href="/privacy" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</a>
          <span style={{ color: "#475569" }}>•</span>
          <a href="/terms" style={{ color: "#94a3b8", textDecoration: "none" }}>Terms of Service</a>
          <span style={{ color: "#475569" }}>•</span>
          <a href="/disclosure" style={{ color: "#94a3b8", textDecoration: "none" }}>Advertising Disclosure</a>
          <span style={{ color: "#475569" }}>•</span>
          <a href="/contact" style={{ color: "#94a3b8", textDecoration: "none" }}>Contact Us</a>
        </div>
        <strong>Best Hair Dryer</strong>
        <p>© 2026 Best Hair Dryer. All rights reserved.</p>
        <div className="hair-disclosure">
          <p>
            <strong>Affiliate disclosure:</strong> We may receive compensation for clicks on or purchases of products
            featured on this site. This comes at no additional cost to you.
          </p>
          <p>
            <strong>Individual results:</strong> Experiences with hair styling devices vary. Product information and
            examples do not guarantee a particular result.
          </p>
        </div>
      </footer>

      <div className="hair-mobile-cta">
        <OutboundButton>Take me to the winning hair dryer</OutboundButton>
      </div>
    </div>
  );
}
