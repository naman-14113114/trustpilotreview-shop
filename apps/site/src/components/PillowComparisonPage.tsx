import {
  ArrowRight,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ExternalLink,
  Info,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { GreenStarRating } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { PillowOutboundLink } from "@/components/PillowOutboundLink";
import {
  checkedDate,
  pillowProducts,
  type PillowComparisonProduct,
} from "@/data/pillows";

const canonical =
  "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026";

const updatedDate = "16 August 2026";

const comparisonCriteria = [
  "Shoulder clearance and arm room",
  "Neck support and spinal alignment",
  "Height choices and fit clarity",
  "Pressure relief and foam response",
  "Cooling and breathability",
  "Cover removal and wash care",
  "Current UK price and bundle value",
  "Trial, guarantee and returns",
  "Delivery and current availability",
  "Ease of choosing the right profile",
] as const;

function RankRibbon({ rank, featured = false }: { rank: number; featured?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 z-20 ${
        featured ? "h-28 w-28 md:h-32 md:w-32" : "h-24 w-24"
      }`}
    >
      <div
        className={`absolute inset-0 rounded-tl-3xl bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-800 [clip-path:polygon(0_0,100%_0,0_100%)] ${
          featured
            ? "shadow-[0_18px_28px_rgba(5,150,105,0.28),inset_0_2px_0_rgba(255,255,255,0.35)]"
            : "shadow-[0_10px_18px_rgba(5,150,105,0.18)]"
        }`}
      />
      <span className="absolute left-4 top-4 font-serif text-2xl font-black leading-none text-white drop-shadow-md md:left-5 md:top-5 md:text-3xl">
        #{rank}
      </span>
    </div>
  );
}

function ProductCard({ product }: { product: PillowComparisonProduct }) {
  const winner = Boolean(product.isWinner);

  return (
    <article
      id={`rank-${product.rank}`}
      className={`relative scroll-mt-24 rounded-3xl border bg-white p-6 pt-24 shadow-sm md:p-10 md:pt-24 ${
        winner
          ? "border-emerald-500 ring-4 ring-emerald-50"
          : "border-slate-200"
      }`}
    >
      <RankRibbon rank={product.rank} featured={winner} />

      {winner && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-extrabold uppercase text-emerald-700 md:right-8 md:top-7 md:text-sm">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Editor&apos;s choice
        </div>
      )}

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-center lg:col-span-4">
          <div className="flex w-full flex-col items-center lg:sticky lg:top-8">
            <h2 className="mb-3 text-center font-serif text-2xl font-bold leading-tight text-slate-900 lg:hidden">
              #{product.rank} {product.name}
            </h2>
            <p className="mb-5 rounded-full bg-emerald-50 px-4 py-2 text-center text-xs font-extrabold uppercase text-emerald-700 lg:hidden">
              {product.badge}
            </p>

            <div className="mb-6 w-full">
              {winner ? (
                <PillowOutboundLink
                  className="group block w-full"
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-square w-full rounded-2xl border border-slate-100 bg-white object-contain shadow-md transition-shadow duration-300 group-hover:shadow-xl"
                  />
                </PillowOutboundLink>
              ) : (
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group block w-full"
                  aria-label={`Open the official ${product.name} website`}
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="eager"
                    decoding="async"
                    className="aspect-square w-full rounded-2xl border border-slate-100 bg-white object-contain p-2 shadow-md transition-shadow duration-300 group-hover:shadow-xl"
                  />
                </a>
              )}
            </div>

            <div className="mb-5 w-full text-center">
              <div className="mb-2 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                <span className="text-3xl font-extrabold text-slate-900">
                  {product.price}
                </span>
                {product.previousPrice && (
                  <span className="text-lg font-medium text-slate-400 line-through">
                    {product.previousPrice}
                  </span>
                )}
              </div>
              <GreenStarRating rating={product.score} size={24} className="mb-2" />
              <p className="text-sm font-medium text-slate-500">
                Editorial rating {product.score.toFixed(1)}
              </p>
              {product.availabilityNote && (
                <p className="mt-2 text-xs font-bold text-red-700">
                  {product.availabilityNote}
                </p>
              )}
            </div>

            <div className="hidden w-full lg:block">
              {winner ? (
                <PillowOutboundLink className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-lg font-black text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600">
                  Official Website
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </PillowOutboundLink>
              ) : (
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-7 py-4 text-base font-black text-white transition hover:bg-slate-950"
                >
                  Official product page
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 className="mb-4 hidden font-serif text-3xl font-bold leading-tight text-slate-900 lg:block lg:text-4xl">
            #{product.rank} {product.name}
          </h2>
          <p className="mb-5 hidden w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-extrabold uppercase text-emerald-700 lg:block">
            {product.badge}
          </p>
          <p className="mb-4 text-lg font-bold leading-relaxed text-slate-800">
            {product.bestFor}
          </p>
          <p className="mb-7 text-[17px] leading-8 text-slate-700 md:text-lg">
            {product.summary}
          </p>

          <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              Key product facts
            </h3>
            <dl className="grid gap-3 sm:grid-cols-2">
              {product.specifications.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700"
                >
                  <dt className="mb-1 font-extrabold text-slate-900">{label}</dt>
                  <dd className="leading-6">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mb-8 flex flex-col gap-6">
            <section className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-3 py-5 md:p-6">
              <h3 className="-mx-3 -mt-5 mb-5 rounded-t-2xl bg-emerald-500 px-3 py-3 text-center text-2xl font-bold text-white md:-mx-6 md:-mt-6 md:mb-6 md:px-6">
                Pros
              </h3>
              <ul className="space-y-4">
                {product.pros.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-slate-700"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-red-100 bg-red-50/50 px-3 py-5 md:p-6">
              <h3 className="-mx-3 -mt-5 mb-5 rounded-t-2xl bg-red-500 px-3 py-3 text-center text-2xl font-bold text-white md:-mx-6 md:-mt-6 md:mb-6 md:px-6">
                Cons
              </h3>
              <ul className="space-y-4">
                {product.cons.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-slate-700"
                  >
                    <XCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {product.whyBelowWinner && (
            <div className="mb-8 rounded-xl border-l-4 border-emerald-500 bg-slate-50 px-5 py-4">
              <p className="mb-1 text-sm font-black uppercase text-emerald-700">
                Why it ranks below Juujo
              </p>
              <p className="text-base leading-7 text-slate-700">
                {product.whyBelowWinner}
              </p>
            </div>
          )}

          <div className="lg:hidden">
            {winner ? (
              <PillowOutboundLink className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                Official Website
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </PillowOutboundLink>
            ) : (
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-7 py-4 text-base font-black text-white"
              >
                Official product page
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
      "A UK comparison of side-sleeper pillows using current official product details and a published editorial method.",
    datePublished: "2026-08-12",
    dateModified: "2026-08-16",
    inLanguage: "en-GB",
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: "TrustpilotReview.shop editorial team",
    },
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
        item: canonical,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      {[articleSchema, itemListSchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="border-b border-emerald-600 bg-emerald-500 px-4 pb-6 pt-5 md:pb-8 md:pt-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mx-[-0.25rem] font-serif text-[clamp(1.3rem,6.6vw,2.5rem)] font-extrabold leading-[1.08] tracking-tight text-white md:mx-0 md:text-5xl lg:text-6xl">
            <span className="block">Top 5 Pillows for Side Sleepers</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <MarketFlag market="uk" />
              <span>United Kingdom - 2026</span>
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-base font-bold text-white md:mt-6 md:gap-2.5 md:text-lg">
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            Last updated - {updatedDate}
          </div>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-6xl text-center">
          <img
            src="/img/pillows/juujo-bedroom.png"
            alt="Side-sleeper pillow comparison featuring the Juujo CloudAlign pillow"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="mx-auto mb-10 aspect-[16/7] w-full max-w-5xl rounded-3xl border border-slate-100 object-cover shadow-xl md:mb-12"
          />

          <section className="mx-auto max-w-5xl rounded-sm border border-slate-100 bg-white p-6 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:p-8">
            <div className="flex w-full flex-col items-center text-center md:block md:text-left">
              <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
                <div className="mb-2 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 md:mb-0">
                  <BookOpenCheck className="h-11 w-11" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 underline md:text-2xl">
                    TrustpilotReview Editorial Team
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-sm">
                    Consumer sleep-products review
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-700 md:text-base">
                For this guide, our editorial team researched five shortlisted
                pillows using their published dimensions, materials, height
                options, wash-care instructions, current UK prices, trial terms
                and guarantees. The aim is to make the side-sleeper trade-offs
                clear before a buyer reaches a product page. We did not conduct
                laboratory testing, and the ratings below are editorial scores.
              </p>

              <hr className="mb-4 w-full border-slate-200" />

              <div className="flex items-start gap-2 text-left text-xs italic leading-5 text-slate-600 md:justify-end md:text-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  Commercial disclosure: the publisher has a commercial interest
                  in Juujo and may benefit when readers visit or buy from Juujo.
                </span>
              </div>
            </div>
          </section>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="prose prose-lg prose-slate mb-16 w-full max-w-none space-y-6">
          <p>
            Side sleepers often need more than a soft place to rest their head.
            The pillow must fill the space between shoulder and mattress without
            pushing the neck too high, while still leaving enough room for the
            shoulder and upper arm.
          </p>
          <p>
            That is why a pillow that works well for a back sleeper can feel
            completely wrong on the side. Height, shoulder clearance, pressure
            relief, temperature and the ease of choosing the correct profile all
            matter together.
          </p>
          <p>
            We compared five relevant UK options across those practical buying
            points. The shortlist includes finished contour pillows, manually
            adjustable designs and premium rectangular alternatives, with prices
            ranging from <strong>£40.50 to £165</strong> when checked.
          </p>
          <p>
            Juujo ranks first because its wide sculpted surface, dedicated
            shoulder zones, two finished height choices and entry price from
            £49.99 create the clearest overall proposition for side sleepers.
            The other four remain credible alternatives for shoppers who place
            more value on manual adjustment, brand familiarity, cooling or a
            conventional pillow shape.
          </p>
        </section>

        <section className="mb-10 w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mb-16 md:rounded-3xl md:p-10">
          <h2 className="mb-5 text-center font-serif text-[1.35rem] font-bold leading-tight text-slate-900 md:mb-8 md:text-3xl">
            We evaluated side-sleeper pillows based on 10 criteria
          </h2>
          <div className="mb-5 grid grid-cols-1 gap-2.5 md:mb-8 md:grid-cols-2 md:gap-4">
            {comparisonCriteria.map((criterion) => (
              <div key={criterion} className="flex items-start gap-2.5 md:gap-3">
                <ShieldCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-500 md:h-5 md:w-5" />
                <span className="text-[15px] font-semibold leading-snug text-slate-700 md:text-base">
                  {criterion}
                </span>
              </div>
            ))}
          </div>
          <p className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center text-[14px] leading-snug text-slate-600 md:p-4 md:text-base md:leading-relaxed">
            Product facts and prices were checked on the brands&apos; official UK
            pages on <strong>{checkedDate}</strong>. The ranking uses the same
            published-information method for every product; editorial scores are
            not customer ratings or medical claims.
          </p>
        </section>

        <section aria-labelledby="ranking-heading">
          <div className="mb-9 text-center md:mb-12">
            <p className="text-xs font-black uppercase text-emerald-600">
              The 2026 ranking
            </p>
            <h2
              id="ranking-heading"
              className="mt-2 font-serif text-3xl font-black leading-tight text-slate-950 md:text-5xl"
            >
              The five side-sleeper pillows that stood out
            </h2>
          </div>

          <div className="space-y-12 md:space-y-16">
            {pillowProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>
      </main>

      <section className="bg-emerald-950 px-4 py-14 text-white">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg bg-white text-slate-900 shadow-2xl lg:grid-cols-2">
          <img
            src="/img/pillows/juujo-model.png"
            alt="Model holding the white Juujo CloudAlign pillow"
            loading="eager"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="p-6 sm:p-10">
            <p className="text-xs font-black uppercase text-emerald-600">
              Editor&apos;s verdict
            </p>
            <h2 className="mt-2 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Juujo makes the side-sleeper decision simpler.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Groove offers more manual combinations, TEMPUR brings premium
              material, Simba focuses on cooling and Panda uses a bamboo cover.
              Juujo is our overall pick because it combines a wider sculpted
              surface, dedicated shoulder geometry, two finished profiles and a
              lower starting price.
            </p>
            <ul className="mt-6 space-y-3 text-base font-bold text-slate-800 md:text-[17px]">
              <li className="flex gap-3">
                <Check className="h-6 w-6 shrink-0 text-emerald-600" />
                68.5 x 37 cm sculpted side-sleeper surface
              </li>
              <li className="flex gap-3">
                <Check className="h-6 w-6 shrink-0 text-emerald-600" />
                Regular 8.9 cm or High 10.9 cm
              </li>
              <li className="flex gap-3">
                <Check className="h-6 w-6 shrink-0 text-emerald-600" />
                Four removable-cover colours
              </li>
              <li className="flex gap-3">
                <Check className="h-6 w-6 shrink-0 text-emerald-600" />
                Free tracked UK delivery
              </li>
            </ul>
            <PillowOutboundLink className="group mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-black text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600">
              Check Juujo availability
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </PillowOutboundLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl font-black">
            Sources and editorial notes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Prices, dimensions, care information, trials, guarantees and
            availability were checked on {checkedDate}. Retail offers can change
            after publication. This comparison is general shopping information,
            not medical advice.
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

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 text-center text-slate-300">
        <p className="mx-auto max-w-5xl text-sm leading-6">
          TrustpilotReview.shop is a comparison publisher and is not affiliated
          with Trustpilot A/S. The publisher has a commercial interest in Juujo
          and may receive compensation from featured links. This does not change
          the price paid by readers.
        </p>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-between gap-3 rounded-lg border border-emerald-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="flex min-w-0 items-center gap-2.5">
          <img
            src="/img/pillows/juujo-side-sleeper.png"
            alt=""
            className="h-11 w-11 shrink-0 rounded-md border border-slate-200 object-cover"
            aria-hidden="true"
          />
          <span className="min-w-0">
            <strong className="block truncate text-sm font-black">
              Juujo CloudAlign
            </strong>
            <small className="block text-xs text-slate-600">
              From £49.99 - No. 1 pick
            </small>
          </span>
        </div>
        <PillowOutboundLink className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full bg-emerald-500 px-4 py-3 text-sm font-black text-white">
          Official site
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </PillowOutboundLink>
      </div>
    </div>
  );
}
