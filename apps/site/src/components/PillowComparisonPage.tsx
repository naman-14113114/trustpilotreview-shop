import {
  ArrowRight,
  Check,
  CheckCircle2,
  ExternalLink,
  Info,
  Minus,
  ShieldCheck,
} from "lucide-react";
import { GreenStarRating } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { PillowOutboundLink } from "@/components/PillowOutboundLink";
import {
  checkedDate,
  methodologyPoints,
  pillowProducts,
  type PillowComparisonProduct,
} from "@/data/pillows";

const canonical =
  "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026";

function RankRibbon({ rank, featured = false }: { rank: number; featured?: boolean }) {
  const size = featured ? "h-24 w-24 md:h-32 md:w-32" : "h-20 w-20 md:h-24 md:w-24";
  return (
    <div className={`pointer-events-none absolute left-0 top-0 z-20 ${size}`}>
      <div
        className={`absolute inset-0 rounded-tl-[28px] bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-800 [clip-path:polygon(0_0,100%_0,0_100%)] ${
          featured
            ? "shadow-[0_18px_28px_rgba(5,150,105,0.32),inset_0_2px_0_rgba(255,255,255,0.35)]"
            : "shadow-[0_10px_18px_rgba(5,150,105,0.2)]"
        }`}
      />
      <span className="absolute left-4 top-3 font-serif text-2xl font-black leading-none text-white drop-shadow-md md:left-5 md:top-4 md:text-3xl">
        #{rank}
      </span>
    </div>
  );
}

function ComparisonHero() {
  return (
    <div className="mx-auto grid max-w-[1180px] grid-cols-2 overflow-hidden rounded-[8px] bg-white shadow-xl sm:grid-cols-5">
      {pillowProducts.map((product, index) => (
        <div
          key={product.name}
          className={`relative flex min-h-[170px] items-end overflow-hidden border-white bg-slate-50 sm:min-h-[245px] ${
            index < 4 ? "sm:border-r-4" : ""
          } ${index === 0 ? "col-span-2 sm:col-span-1" : ""}`}
        >
          <img
            src={index === 0 ? "/img/pillows/juujo-colours-approved.png" : product.image}
            alt={product.imageAlt}
            className="absolute inset-0 h-full w-full object-contain p-3"
          />
          <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 px-2 py-2 text-center text-xs font-extrabold text-white backdrop-blur-sm sm:text-sm">
            {index === 0 && (
              <span className="mb-1 block text-[10px] uppercase text-emerald-300">
                Our top pick
              </span>
            )}
            {product.shortName}
          </div>
          {index > 0 && (
            <span className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded bg-red-600 px-2 py-1 text-sm font-black text-white sm:block">
              VS
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: PillowComparisonProduct }) {
  const winner = Boolean(product.isWinner);

  return (
    <article
      className={`relative overflow-hidden rounded-[28px] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)] ${
        winner ? "ring-4 ring-emerald-500" : "border border-slate-200"
      }`}
    >
      <RankRibbon rank={product.rank} featured={winner} />
      {winner && (
        <div className="bg-emerald-500 px-4 py-3 text-center text-sm font-black uppercase text-white md:text-base">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            Editor&apos;s choice: Best overall
          </span>
        </div>
      )}

      <div className="grid lg:grid-cols-[42%_58%]">
        <div className="relative flex min-h-[360px] items-center justify-center bg-slate-50 p-7 sm:min-h-[440px] lg:sticky lg:top-4 lg:h-[620px]">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading={winner ? "eager" : "lazy"}
            decoding="async"
            className="h-full max-h-[560px] w-full object-contain"
          />
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase text-emerald-700 shadow-md">
            {product.badge}
          </span>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-black uppercase text-emerald-600">
                Ranked #{product.rank} for UK side sleepers
              </p>
              <h2 className="font-serif text-[30px] font-black leading-[1.08] text-slate-950 sm:text-[38px]">
                {product.name}
              </h2>
              <p className="mt-3 text-lg font-bold leading-snug text-slate-700">
                {product.bestFor}
              </p>
            </div>
            <div className="min-w-[144px] rounded-[8px] bg-emerald-50 p-4 text-center">
              <strong className="block text-3xl font-black text-emerald-700">
                {product.score.toFixed(1)}
              </strong>
              <GreenStarRating rating={product.score} size={18} gap={2} />
              <span className="mt-1 block text-[11px] font-bold uppercase text-slate-600">
                Editorial rating
              </span>
            </div>
          </div>

          <p className="mb-7 text-[17px] leading-8 text-slate-700 sm:text-[18px]">
            {product.summary}
          </p>

          <section className="mb-7 overflow-hidden rounded-[8px] border border-slate-200">
            <h3 className="bg-emerald-500 px-5 py-3 text-xl font-black text-white">
              Key product facts
            </h3>
            <dl className="divide-y divide-slate-200">
              {product.specifications.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[38%_62%] px-5 py-3.5 text-sm sm:text-base">
                  <dt className="font-extrabold text-slate-900">{label}</dt>
                  <dd className="text-slate-700">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mb-7 grid gap-4 md:grid-cols-2">
            <section className="rounded-[8px] border border-emerald-200 bg-emerald-50/60 p-5">
              <h3 className="mb-4 text-xl font-black text-emerald-900">Why we like it</h3>
              <ul className="space-y-3">
                {product.pros.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-6 text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[8px] border border-red-200 bg-red-50/60 p-5">
              <h3 className="mb-4 text-xl font-black text-red-900">Where it falls short</h3>
              <ul className="space-y-3">
                {product.cons.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-6 text-slate-700">
                    <Minus className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {product.whyBelowWinner && (
            <div className="mb-7 rounded-[8px] border-l-4 border-emerald-500 bg-slate-50 px-5 py-4">
              <p className="mb-1 text-sm font-black uppercase text-emerald-700">
                Why it ranks below Juujo
              </p>
              <p className="text-[16px] leading-7 text-slate-700">{product.whyBelowWinner}</p>
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="block text-xs font-bold uppercase text-slate-500">
                Price checked {checkedDate}
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <strong className="text-3xl font-black text-slate-950">{product.price}</strong>
                {product.previousPrice && (
                  <span className="text-base text-slate-400 line-through">{product.previousPrice}</span>
                )}
              </div>
              {product.availabilityNote && (
                <p className="mt-1 text-xs font-bold text-red-700">{product.availabilityNote}</p>
              )}
            </div>

            {winner ? (
              <PillowOutboundLink className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-lg font-black text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600">
                Visit official website
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </PillowOutboundLink>
            ) : (
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-emerald-700"
              >
                Verify official product details
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
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
    description:
      "A UK comparison of side-sleeper pillows using current official product details and a published editorial scorecard.",
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    inLanguage: "en-GB",
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "TrustpilotReview.shop editorial desk" },
    publisher: { "@type": "Organization", name: "TrustpilotReview.shop" },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 5 pillows for side sleepers UK 2026",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: pillowProducts.length,
    itemListElement: pillowProducts.map((product) => ({
      "@type": "ListItem",
      position: product.rank,
      name: product.name,
      url: product.sourceUrl,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trustpilotreview.shop/" },
      { "@type": "ListItem", position: 2, name: "Best pillows for side sleepers UK", item: canonical },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f7f6] pb-24 text-slate-900 md:pb-0">
      {[articleSchema, itemListSchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <header className="border-b border-emerald-600 bg-emerald-500 px-4 pb-7 pt-5 text-white md:pb-9 md:pt-7">
        <div className="mx-auto max-w-[1280px] text-center">
          <h1 className="font-serif text-[38px] font-black leading-[1.03] sm:text-[50px] md:text-[64px]">
            Top 5 Pillows for Side Sleepers
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3 font-serif text-2xl font-bold sm:text-3xl md:text-[38px]">
            <MarketFlag market="uk" />
            <span>United Kingdom</span>
            <span aria-hidden="true">-</span>
            <span>2026</span>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold sm:text-lg">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            Last updated: {checkedDate}
          </p>
        </div>
      </header>

      <section className="px-4 pb-10 pt-8 md:pb-14 md:pt-12">
        <ComparisonHero />
      </section>

      <div className="mx-auto max-w-[1180px] space-y-8 px-4 pb-14">
        <section className="grid gap-6 rounded-[8px] bg-white p-5 shadow-lg sm:p-8 lg:grid-cols-[180px_1fr] lg:items-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <ShieldCheck className="h-16 w-16" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-black uppercase text-emerald-600">Editorial buying guide</p>
            <h2 className="mt-2 font-serif text-3xl font-black leading-tight sm:text-4xl">
              We compared the features that matter most when your shoulder meets the mattress.
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-slate-700">
              Side sleepers usually need enough height to fill the space between the mattress and the neck, but height alone is not the whole story. We compared shoulder clearance, head-and-neck geometry, profile choice, care, current UK price and published buyer protection across five widely relevant options.
            </p>
          </div>
        </section>

        <aside className="rounded-[8px] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>
              <strong>Commercial disclosure:</strong> The publisher has a commercial interest in Juujo and may benefit when readers visit or buy from Juujo. The ranking uses the published scorecard below and official product information; editorial scores are not customer ratings or laboratory results.
            </p>
          </div>
        </aside>

        <section className="rounded-[8px] bg-white p-5 shadow-lg sm:p-8">
          <div className="mb-7 text-center">
            <p className="text-xs font-black uppercase text-emerald-600">How we ranked them</p>
            <h2 className="mt-2 font-serif text-3xl font-black sm:text-4xl">Our side-sleeper scorecard</h2>
            <p className="mx-auto mt-3 max-w-3xl text-[16px] leading-7 text-slate-600">
              Every product was assessed against the same criteria. Product facts and live prices were checked on the brands&apos; official UK pages on {checkedDate}.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {methodologyPoints.map(([title, weight, detail]) => (
              <div key={title} className="rounded-[8px] border border-emerald-100 bg-emerald-50/60 p-4">
                <span className="text-2xl font-black text-emerald-600">{weight}</span>
                <h3 className="mt-2 text-base font-black text-slate-950">{title}</h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 text-center">
            <p className="text-xs font-black uppercase text-emerald-600">The 2026 ranking</p>
            <h2 className="mt-2 font-serif text-4xl font-black sm:text-5xl">
              Our Top 5, from best overall to specialist alternatives
            </h2>
          </div>
          <div className="space-y-10">
            {pillowProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-4 py-14 text-white">
        <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[8px] bg-white text-slate-900 shadow-2xl lg:grid-cols-2">
          <img
            src="/img/pillows/juujo-model.png"
            alt="Model holding the sculpted white Juujo CloudAlign pillow"
            loading="lazy"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="p-6 sm:p-10">
            <p className="text-xs font-black uppercase text-emerald-600">Editor&apos;s verdict</p>
            <h2 className="mt-2 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Juujo makes the side-sleeper decision simpler.
            </h2>
            <p className="mt-5 text-[18px] leading-8 text-slate-700">
              Groove gives you more manual combinations, TEMPUR gives you premium material, Simba focuses on cooling and Panda offers a bamboo cover. Juujo wins our overall ranking because it combines a wider sculpted surface, dedicated shoulder geometry, two finished height options and the clearest value proposition from \u00A349.99.
            </p>
            <ul className="mt-6 space-y-3 text-[17px] font-bold text-slate-800">
              <li className="flex gap-3"><Check className="h-6 w-6 shrink-0 text-emerald-600" />68.5 x 37 cm sculpted side-sleeper surface</li>
              <li className="flex gap-3"><Check className="h-6 w-6 shrink-0 text-emerald-600" />Regular 8.9 cm or High 10.9 cm</li>
              <li className="flex gap-3"><Check className="h-6 w-6 shrink-0 text-emerald-600" />Four washable-cover colours</li>
              <li className="flex gap-3"><Check className="h-6 w-6 shrink-0 text-emerald-600" />Free tracked UK delivery</li>
            </ul>
            <PillowOutboundLink className="group mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-black text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600">
              Check Juujo availability
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </PillowOutboundLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl font-black">Sources and editorial notes</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Prices, dimensions, care information, trials, guarantees and availability were checked on {checkedDate}. Retail offers can change after publication. Our scores are editorial judgements based on the published method above and should not be read as medical advice or customer-star ratings.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3">
            {pillowProducts.map((product) => (
              <a
                key={product.name}
                href={product.sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 underline underline-offset-4"
              >
                {product.shortName} source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-4 py-8 text-center text-slate-300">
        <p className="text-sm leading-6">
          TrustpilotReview.shop is a comparison publisher and is not affiliated with Trustpilot A/S. The publisher has a commercial interest in Juujo and may receive compensation from featured partners. This does not change the price paid by readers.
        </p>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-between gap-3 rounded-[8px] border border-emerald-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <span className="min-w-0">
          <strong className="block truncate text-sm font-black">Juujo CloudAlign</strong>
          <small className="block text-xs text-slate-600">From \u00A349.99 - No. 1 pick</small>
        </span>
        <PillowOutboundLink className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white">
          Visit Juujo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </PillowOutboundLink>
      </div>
    </main>
  );
}
