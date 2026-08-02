"use client";

import Image from "next/image";
import { useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Minus,
  X,
  XCircle,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarRating } from "@/components/GreenStarRating";
import {
  JUUJO_GROUNDING_URL,
  type GroundingGuide,
  type GroundingMetric,
  type GroundingPoint,
  type GroundingProduct,
} from "@/data/groundingGuides";

const gifts = [
  {
    name: "Premium Packaging",
    image: "/img/grounding-sheets/juujo-premium-packaging-gift.webp",
    value: "$79",
  },
  {
    name: "Grounding Mat",
    image: "/img/grounding-sheets/juujo-grounding-mat-gift.webp",
    value: "$59",
  },
  {
    name: "Sleep Monitoring App",
    image: "/img/grounding-sheets/juujo-sleep-monitoring-app-gift.webp",
    value: "$70",
  },
] as const;

function formatNewYorkDate() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

function OfficialButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prepareNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.dataset.loading = "true";
    event.currentTarget.setAttribute("aria-busy", "true");
  };

  return (
    <a
      href={JUUJO_GROUNDING_URL}
      onClick={prepareNavigation}
      data-outbound="juujo-grounding-fitted-sheet"
      data-outbound-button="true"
      data-loading="false"
      aria-busy="false"
      className={`relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-6 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600 ${className}`}
    >
      <span data-outbound-content="true" className="inline-flex items-center justify-center gap-2">
        {children}
      </span>
      <span data-outbound-loader="true" className="absolute inset-0 hidden items-center justify-center bg-emerald-600">
        <OutboundLoader />
      </span>
    </a>
  );
}

function PageHeader({ guide }: { guide: GroundingGuide }) {
  const [updatedDate] = useState(formatNewYorkDate);

  return (
    <header className="border-b border-emerald-600 bg-emerald-500 px-4 py-8 md:py-11">
      <div className="mx-auto max-w-6xl text-center text-white">
        <h1 className="font-serif text-[clamp(2.1rem,7vw,4rem)] font-extrabold leading-[1.04] tracking-normal">
          {guide.title}
        </h1>
        <div className="mt-3 font-serif text-[clamp(1.65rem,5vw,3rem)] font-extrabold leading-[1.08] tracking-normal">
          <span className="inline-flex items-center gap-2 align-middle md:gap-3">
            <MarketFlag market="us" />
            <span>{guide.subtitle}</span>
          </span>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-base font-bold md:text-lg">
          <CheckCircle2 size={20} />
          <span>
            Last updated - <span suppressHydrationWarning>{updatedDate}</span>
          </span>
        </div>
      </div>
    </header>
  );
}

function EditorCard({ summary }: { summary: string }) {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl rounded-sm border border-slate-100 bg-white p-6 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:p-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <Image
            src="/img/grounding-sheets/dr-image.webp"
            alt="Sleep and wellness editorial reviewer"
            width={112}
            height={112}
            priority
            className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
          />
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-950 md:text-3xl">
              Sleep &amp; Wellness Editorial Review
            </h2>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-500">
              US Grounding Sheet Guide
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-[17px] leading-8 text-slate-700 md:text-left md:text-lg md:leading-9">
          {summary}
        </p>
      </div>
    </section>
  );
}

function Introduction({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-6 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function PointList({ points, positive }: { points: GroundingPoint[]; positive: boolean }) {
  const Icon = positive ? Check : X;
  return (
    <ul className="space-y-3">
      {points.map((point) => (
        <li key={point.title} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700 md:text-[17px]">
          <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${positive ? "bg-emerald-500" : "bg-red-500"}`}>
            <Icon size={13} strokeWidth={3} />
          </span>
          <span>
            <strong className="text-slate-950">{point.title}:</strong> {point.body}
          </span>
        </li>
      ))}
    </ul>
  );
}

function RankRibbon({ rank }: { rank: number }) {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-20 h-20 w-24 overflow-hidden rounded-tl-lg" aria-label={`Rank ${rank}`}>
      <div className="absolute left-0 top-0 h-20 w-24 bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-800 [clip-path:polygon(0_0,100%_0,0_100%)]" />
      <span className="absolute left-3 top-3 font-serif text-2xl font-extrabold text-white drop-shadow-sm">#{rank}</span>
    </div>
  );
}

function ProductCard({ product, compact = false }: { product: GroundingProduct; compact?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-lg border bg-white shadow-sm ${product.juujo ? "border-2 border-emerald-500" : "border-slate-200"}`}>
      <RankRibbon rank={product.rank} />
      <div className={`grid gap-7 p-5 pt-16 md:p-7 md:pt-16 ${compact ? "lg:grid-cols-[260px_1fr]" : "lg:grid-cols-[300px_1fr]"}`}>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center lg:max-w-none">
          {product.juujo ? (
            <a href={JUUJO_GROUNDING_URL} className="block w-full" aria-label={`Open ${product.name}`}>
              <ProductImage product={product} />
            </a>
          ) : (
            <ProductImage product={product} />
          )}
          <div className="mt-4 text-center">
            <p className="text-2xl font-extrabold text-slate-950">{product.price}</p>
            <div className="mt-2 flex justify-center"><GreenStarRating rating={product.rating} size={22} /></div>
            <p className="mt-1 text-sm font-semibold text-slate-500">Editorial rating {product.rating.toFixed(1)} / 5</p>
          </div>
          {product.juujo && (
            <OfficialButton className="mt-5 w-full rounded-md">
              Official Website <ArrowUpRight size={19} className="shrink-0" />
            </OfficialButton>
          )}
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
            {product.juujo ? <a href={JUUJO_GROUNDING_URL} className="hover:text-emerald-700">{product.name}</a> : product.name}
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-slate-700">{product.summary}</p>
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-4">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-emerald-700">Strengths</p>
              <PointList points={product.strengths} positive />
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50/60 p-4">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-red-700">Limitations</p>
              <PointList points={product.limitations} positive={false} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductImage({ product }: { product: GroundingProduct }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-slate-100 bg-white">
      <Image
        src={product.image}
        alt={`${product.name} product view`}
        fill
        sizes="(max-width: 1023px) 90vw, 300px"
        className="object-contain p-2"
      />
    </div>
  );
}

function MetricBar({ metric }: { metric: GroundingMetric }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-4 text-[16px] font-semibold text-slate-800 md:text-[17px]">
        <span>{metric.label}</span><span>{metric.value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${metric.value}%` }} />
      </div>
    </div>
  );
}

function ProsCons({ pros, cons }: { pros: GroundingPoint[]; cons: GroundingPoint[] }) {
  return (
    <div className="flex flex-col gap-6">
      <section className="overflow-hidden rounded-lg border border-emerald-100 bg-emerald-50/50">
        <h3 className="bg-emerald-500 px-4 py-3 text-center font-serif text-2xl font-bold text-white">Pros</h3>
        <div className="p-5 md:p-6"><PointList points={pros} positive /></div>
      </section>
      <section className="overflow-hidden rounded-lg border border-red-100 bg-red-50/50">
        <h3 className="bg-red-500 px-4 py-3 text-center font-serif text-2xl font-bold text-white">Cons</h3>
        <div className="p-5 md:p-6"><PointList points={cons} positive={false} /></div>
      </section>
    </div>
  );
}

function GiftPanel() {
  return (
    <section className="mt-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-5 shadow-lg shadow-blue-100/50 md:p-7">
      <p className="text-center text-xs font-extrabold uppercase tracking-widest text-blue-700">Included with Juujo</p>
      <h3 className="mt-2 text-center font-serif text-2xl font-bold text-slate-950 md:text-3xl">Three Free Gifts</h3>
      <p className="mt-1 text-center text-base font-bold text-blue-700">$208 stated value</p>
      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
        {gifts.map((gift) => (
          <div key={gift.name} className="relative border border-blue-100 bg-white p-2 text-center shadow-sm sm:p-3">
            <span className="absolute right-1 top-1 z-10 rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-black text-white sm:text-xs">FREE</span>
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-slate-50">
              <Image src={gift.image} alt={gift.name} fill sizes="(max-width: 639px) 28vw, 150px" className="object-cover" />
            </div>
            <p className="mt-2 text-[11px] font-extrabold leading-tight text-slate-900 sm:text-base">{gift.name}</p>
            <p className="mt-1 text-[10px] text-slate-400 line-through sm:text-xs">{gift.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WinnerSection({ guide, heading }: { guide: GroundingGuide; heading?: string }) {
  const product = guide.products?.find((item) => item.juujo);
  if (!product) return null;

  return (
    <section className="bg-white px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="rounded-t-lg bg-emerald-500 px-5 py-5 text-center font-serif text-3xl font-bold text-white md:text-4xl">
          {heading ?? "BEST OVERALL GROUNDING SHEETS"}
        </h2>
        <article className="grid items-start rounded-b-lg border-2 border-t-0 border-emerald-500 bg-white lg:grid-cols-12">
          <aside className="border-b border-slate-200 p-6 md:p-8 lg:col-span-4 lg:self-stretch lg:border-b-0 lg:border-r">
            <div className="flex w-full flex-col items-center lg:sticky lg:top-8 lg:pb-8">
              <a href={JUUJO_GROUNDING_URL} className="block w-[90%]" aria-label="Open Juujo Grounding Fitted Sheet">
                <ProductImage product={product} />
              </a>
              <div className="mt-5 text-center">
                <p className="text-3xl font-extrabold text-slate-950">$99</p>
                <div className="mt-3 flex justify-center"><GreenStarRating rating={4.9} size={27} /></div>
                <p className="mt-2 text-base font-semibold text-slate-500">Overall rating 4.9 / 5</p>
              </div>
              <OfficialButton className="mt-6 hidden w-full rounded-md text-lg lg:inline-flex">
                Official Website <ArrowUpRight size={20} className="shrink-0" />
              </OfficialButton>
              <div className="w-full"><GiftPanel /></div>
            </div>
          </aside>
          <div className="p-6 md:p-9 lg:col-span-8 lg:p-10">
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              <a href={JUUJO_GROUNDING_URL} className="hover:text-emerald-700">{guide.winnerHeading}</a>
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
              {guide.winnerCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-7">
              <h3 className="mb-6 font-serif text-2xl font-bold text-slate-900">Performance Metrics</h3>
              <div className="space-y-5">{guide.winnerMetrics.map((metric) => <MetricBar key={metric.label} metric={metric} />)}</div>
            </section>
            <div className="mt-8"><ProsCons pros={guide.winnerPros} cons={guide.winnerCons} /></div>
            <section className="mt-8 grid items-center gap-6 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[210px_1fr] md:p-5">
              <Image
                src="/img/grounding-sheets/juujo-120-night-risk-free-trial-grounding-sheet.webp"
                alt="Juujo 120-night risk-free home trial"
                width={1254}
                height={1254}
                sizes="(max-width: 639px) 90vw, 210px"
                className="aspect-square w-full rounded-md object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-950">120-night home trial</h3>
                <p className="mt-3 text-[17px] leading-8 text-slate-700">Assess the fitted feel, mattress fit, setup and care in your own bedroom before making a final decision.</p>
              </div>
            </section>
            <OfficialButton className="mt-8 w-full rounded-md text-lg lg:hidden">
              Official Website <ArrowUpRight size={20} className="shrink-0" />
            </OfficialButton>
          </div>
        </article>
      </div>
    </section>
  );
}

function RankedContent({ guide }: { guide: GroundingGuide }) {
  return (
    <>
      <section className="border-y border-slate-200 bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-9 text-center font-serif text-3xl font-bold text-slate-950 md:text-4xl">Our Top 5 Picks</h2>
          <div className="space-y-6">{guide.products?.map((product) => <ProductCard key={product.name} product={product} compact />)}</div>
        </div>
      </section>
      <WinnerSection guide={guide} />
    </>
  );
}

function ComparisonTable({ guide }: { guide: GroundingGuide }) {
  return (
    <section className="border-y border-slate-200 bg-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-slate-950 md:text-4xl">What We Compared</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[17px] leading-8 text-slate-600">Twelve practical buyer points, with no unrelated products added.</p>
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-left text-[16px]">
            <thead className="bg-slate-900 text-white">
              <tr><th className="p-4">Comparison point</th><th className="p-4">Juujo</th><th className="p-4">{guide.competitorName}</th></tr>
            </thead>
            <tbody>
              {guide.comparisonRows?.map((row, index) => (
                <tr key={row.criterion} className={index % 2 ? "bg-slate-50" : "bg-white"}>
                  <th className="border-t border-slate-200 p-4 font-bold text-slate-950">{row.criterion}</th>
                  <td className={`border-t border-slate-200 p-4 ${row.advantage === "juujo" ? "font-bold text-emerald-700" : "text-slate-700"}`}>
                    <span className="inline-flex items-start gap-2">{row.advantage === "juujo" ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <Minus size={18} className="mt-0.5 shrink-0 text-slate-400" />}{row.juujo}</span>
                  </td>
                  <td className={`border-t border-slate-200 p-4 ${row.advantage === "competitor" ? "font-bold text-emerald-700" : "text-slate-700"}`}>
                    <span className="inline-flex items-start gap-2">{row.advantage === "competitor" ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <Minus size={18} className="mt-0.5 shrink-0 text-slate-400" />}{row.competitor}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 space-y-6">{guide.products?.map((product) => <ProductCard key={product.name} product={product} compact />)}</div>
      </div>
    </section>
  );
}

function KnowledgeContent({ guide }: { guide: GroundingGuide }) {
  return (
    <>
      <section className="border-y border-slate-200 bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          {guide.knowledgeSections?.map((section) => (
            <article key={section.heading} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
              <h2 className="font-serif text-3xl font-bold text-slate-950">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6"><PointList points={section.bullets} positive /></div>}
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full min-w-[620px] border-collapse text-left text-[16px]">
                    <thead className="bg-slate-900 text-white"><tr>{section.table.headers.map((header) => <th key={header} className="p-4">{header}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row, index) => <tr key={row.join("-")} className={index % 2 ? "bg-slate-50" : "bg-white"}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`} className="border-t border-slate-200 p-4 text-slate-700">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 border-y-2 border-emerald-500 bg-white px-5 py-8 md:grid-cols-[260px_1fr] md:px-8">
          <a href={JUUJO_GROUNDING_URL} className="block" aria-label="Open Juujo Grounding Fitted Sheet">
            <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-lg bg-white">
              <Image
                src="/img/grounding-sheets/best-page-image.webp"
                alt="Juujo Grounding Fitted Sheet"
                fill
                sizes="260px"
                loading="eager"
                className="object-contain"
              />
            </div>
          </a>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">Our practical recommendation</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-950 md:text-4xl">{guide.winnerHeading}</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">{guide.winnerCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <OfficialButton className="mt-6 rounded-md">Official Website <ArrowUpRight size={19} className="shrink-0" /></OfficialButton>
          </div>
        </div>
      </section>
    </>
  );
}

function Verdict({ guide }: { guide: GroundingGuide }) {
  return (
    <section className="bg-slate-100 px-4 py-14 md:py-20">
      <div className="mx-auto max-w-5xl border-l-4 border-emerald-500 bg-white p-6 shadow-sm md:p-9">
        <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">Final verdict</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-slate-950">What this means for US shoppers</h2>
        <p className="mt-5 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">{guide.verdict}</p>
        <OfficialButton className="mt-6 rounded-md">Official Website <ChevronRight size={20} className="shrink-0" /></OfficialButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 shadow-inner">
      <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
        <p className="mb-2 text-lg font-bold text-slate-800">Best Grounding Sheets</p>
        <p className="mb-6">&copy; 2026 Best Grounding Sheets. All rights reserved.</p>
        <div className="mx-auto max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-6 text-left text-sm leading-relaxed text-slate-700 md:p-7">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">Important disclosure</p>
          <p className="mb-4"><strong>Affiliate disclosure:</strong> We may receive compensation for clicks on or purchases of products featured on this site. This comes at no additional cost to you.</p>
          <p><strong>Individual experiences:</strong> Grounding products are wellness products and experiences vary. These editorial guides do not provide medical advice or guarantee a particular outcome.</p>
        </div>
      </div>
    </footer>
  );
}

export default function GroundingGuidePage({ guide }: { guide: GroundingGuide }) {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <PageHeader guide={guide} />
      <main>
        <EditorCard summary={guide.editorSummary} />
        <Introduction paragraphs={guide.intro} />
        {guide.template === "ranked" && <RankedContent guide={guide} />}
        {guide.template === "comparison" && (
          <><ComparisonTable guide={guide} /><WinnerSection guide={guide} heading="OUR HEAD-TO-HEAD WINNER" /></>
        )}
        {guide.template === "knowledge" && <KnowledgeContent guide={guide} />}
        <Verdict guide={guide} />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <OfficialButton className="w-full text-[15px] sm:text-base">View Our #1 Grounding Sheet <ArrowUpRight size={18} className="shrink-0" /></OfficialButton>
      </div>
    </div>
  );
}
