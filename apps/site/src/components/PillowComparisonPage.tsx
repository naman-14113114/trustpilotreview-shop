import {
  ArrowRight,
  Check,
  CheckCircle2,
  ExternalLink,
  Minus,
  ShieldCheck,
  Star,
} from "lucide-react";
import { PillowOutboundLink } from "@/components/PillowOutboundLink";
import {
  juujoProductUrl,
  methodologyPoints,
  pillowProducts,
  type PillowComparisonProduct,
} from "@/data/pillows";

const checkedDate = "31 July 2026";

function EditorialStars() {
  return (
    <span className="pillow-stars" aria-label="Five editorial stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} aria-hidden="true" fill="currentColor" />
      ))}
    </span>
  );
}

function ProductCard({ product }: { product: PillowComparisonProduct }) {
  return (
    <article
      className={`pillow-product-card ${product.isWinner ? "is-winner" : ""}`}
    >
      {product.isWinner && (
        <div className="pillow-winner-strip">
          <ShieldCheck aria-hidden="true" />
          Our number one pick
        </div>
      )}
      <div className="pillow-product-media">
        <span className="pillow-rank">#{product.rank}</span>
        <img src={product.image} alt={product.imageAlt} />
        <span className="pillow-badge">{product.badge}</span>
      </div>
      <div className="pillow-product-copy">
        <div className="pillow-product-heading">
          <div>
            <p className="pillow-kicker">Ranked #{product.rank}</p>
            <h2>{product.name}</h2>
          </div>
          <div className="pillow-score">
            <strong>{product.score}</strong>
            <EditorialStars />
            <span>Editorial score</span>
          </div>
        </div>
        <p className="pillow-best-for">{product.bestFor}</p>
        <p className="pillow-summary">{product.summary}</p>

        <dl className="pillow-spec-grid">
          {product.specifications.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="pillow-pros-cons">
          <section>
            <h3>Advantages</h3>
            <ul>
              {product.pros.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Considerations</h3>
            <ul>
              {product.cons.map((item) => (
                <li key={item}>
                  <Minus aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="pillow-product-footer">
          <div>
            <span>Price checked {checkedDate}</span>
            <strong>{product.price}</strong>
          </div>
          {product.isWinner ? (
            <PillowOutboundLink className="pillow-cta">
              Visit Juujo
              <ArrowRight aria-hidden="true" />
            </PillowOutboundLink>
          ) : (
            <a
              className="pillow-source-link"
              href={product.sourceUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Check source
              <ExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function PillowComparisonPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 5 Pillows for Side Sleepers in the UK 2026",
    dateModified: "2026-07-31",
    inLanguage: "en-GB",
    mainEntityOfPage:
      "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026",
    author: {
      "@type": "Organization",
      name: "Trustpilot Review Shop editorial desk",
    },
    publisher: {
      "@type": "Organization",
      name: "Trustpilot Review Shop",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.trustpilotreview.shop/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Best pillows for side sleepers UK",
        item:
          "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026",
      },
    ],
  };

  return (
    <main className="pillow-compare">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="pillow-masthead">
        <div className="pillow-shell">
          <p className="pillow-masthead-kicker">UK sleep comparison</p>
          <h1>Top 5 Pillows for Side Sleepers</h1>
          <p className="pillow-masthead-country">United Kingdom · 2026</p>
          <p className="pillow-updated">
            <CheckCircle2 aria-hidden="true" />
            Prices and product details checked {checkedDate}
          </p>
        </div>
      </header>

      <section className="pillow-hero">
        <div className="pillow-shell pillow-hero-grid">
          <div className="pillow-hero-copy">
            <p className="pillow-kicker">Five UK options, compared clearly</p>
            <h2>The right height matters more when you sleep on your side.</h2>
            <p>
              We compared profile choice, shoulder clearance, materials,
              washable covers, current UK prices and buyer protection. Juujo
              ranked first for combining a defined six-zone contour with a
              straightforward £49.99 offer.
            </p>
            <PillowOutboundLink className="pillow-cta">
              See our number one pick
              <ArrowRight aria-hidden="true" />
            </PillowOutboundLink>
          </div>
          <figure>
            <img
              src="/img/pillows/juujo-colours.png"
              alt="Four plain ergonomic pillows in White, Grey, Baby Blue and Navy Blue"
            />
            <figcaption>
              Juujo CloudAlign is available in four cover colours.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pillow-methodology">
        <div className="pillow-shell pillow-methodology-grid">
          <div>
            <p className="pillow-kicker">How we compared</p>
            <h2>One consistent scorecard for all five pillows.</h2>
            <p>
              Product facts and prices were checked against each brand&apos;s
              current UK product page. Editorial ranking reflects the criteria
              below; it is not a laboratory or medical assessment.
            </p>
          </div>
          <ol>
            {methodologyPoints.map((point, index) => (
              <li key={point}>
                <span>{index + 1}</span>
                {point}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pillow-ranking">
        <div className="pillow-shell">
          <div className="pillow-ranking-heading">
            <p className="pillow-kicker">The 2026 ranking</p>
            <h2>Five strong choices, with different reasons to buy.</h2>
          </div>
          <div className="pillow-product-list">
            {pillowProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="pillow-verdict">
        <div className="pillow-shell pillow-verdict-grid">
          <img
            src="/img/pillows/juujo-bedroom.png"
            alt="Plain white and navy CloudAlign pillows in a blue bedroom"
          />
          <div>
            <p className="pillow-kicker">Editor&apos;s verdict</p>
            <h2>Juujo is the easiest side-sleeper option to understand.</h2>
            <p>
              Instead of asking you to rebuild the pillow, CloudAlign offers a
              finished Regular or High profile, six clearly defined zones and
              four washable-cover colours. At £49.99, it also sits close to the
              mainstream alternatives rather than the premium-brand price.
            </p>
            <ul>
              <li>
                <Check aria-hidden="true" /> £49.99 for one pillow
              </li>
              <li>
                <Check aria-hidden="true" /> Two-pillow bundle £88.99
              </li>
              <li>
                <Check aria-hidden="true" /> Free tracked UK delivery
              </li>
            </ul>
            <PillowOutboundLink className="pillow-cta">
              Check Juujo availability
              <ArrowRight aria-hidden="true" />
            </PillowOutboundLink>
          </div>
        </div>
      </section>

      <section className="pillow-sources">
        <div className="pillow-shell">
          <h2>Editorial method and source notes</h2>
          <p>
            Prices, dimensions, care information, trials and guarantees were
            checked on {checkedDate}. Retail offers can change after
            publication. Scores are editorial judgements based on the published
            method, not customer-star ratings. Product images for comparison
            products are sourced from their official UK product pages.
          </p>
          <div>
            {pillowProducts.map((product) => (
              <a
                key={product.name}
                href={product.sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {product.name}
                <ExternalLink aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="pillow-footer">
        <div className="pillow-shell">
          <strong>Trustpilot Review Shop</strong>
          <p>
            Affiliate disclosure: we may receive compensation when a reader
            visits a featured retailer. This does not change the reader&apos;s
            price.
          </p>
        </div>
      </footer>

      <div className="pillow-mobile-cta">
        <span>
          <strong>Juujo CloudAlign</strong>
          <small>£49.99 · No. 1 pick</small>
        </span>
        <PillowOutboundLink className="pillow-cta">
          Visit Juujo
          <ArrowRight aria-hidden="true" />
        </PillowOutboundLink>
      </div>
    </main>
  );
}
