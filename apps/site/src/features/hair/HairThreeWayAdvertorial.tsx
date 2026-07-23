"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Award, Check, CheckCircle2, ChevronRight, ShieldCheck, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { GreenStarRating } from "@/components/GreenStarRating";
import { OutboundLoader } from "@/components/OutboundLoader";
import {
  MUUHU_COMB_URL,
  MUUHU_EBOOK_URL,
  MUUHU_HAIR_URL,
  MUUHU_PACKAGING_URL,
  dysonSharkMuuhuPage,
  hairImages
} from "@/data/hair";
import type { PageMarketContext } from "@/lib/marketContext";
import type { RankedProduct } from "@trustpilotreview/shared";

function stripLead(text: string) {
  const index = text.indexOf(":");
  if (index > -1 && index < 72) {
    return text.slice(index + 1).trim();
  }
  return text;
}

function OutboundButton({
  href,
  children,
  className,
  ariaLabel
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const [loading, setLoading] = useState(false);
  const disabled = href === "#";

  return (
    <a
      href={disabled ? undefined : href}
      aria-label={ariaLabel}
      data-outbound="muuhu-hair"
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        setLoading(true);
        window.setTimeout(() => setLoading(false), 2600);
      }}
      className={`${className ?? ""} ${disabled ? "pointer-events-none opacity-70" : ""}`}
    >
      {loading ? <OutboundLoader /> : children}
    </a>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-center justify-between text-sm font-bold text-slate-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-emerald-500"
        />
      </div>
    </div>
  );
}

function CriteriaGrid() {
  return (
    <section className="mb-14 rounded-sm border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-600">Editorial Review</p>
          <h2 className="mt-1 font-serif text-2xl font-extrabold text-slate-900 md:text-3xl">What we compared</h2>
        </div>
        <div className="hidden rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 md:block">
          12-point checklist
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {dysonSharkMuuhuPage.criteria?.map((criterion, index) => (
          <div key={criterion.label} className="flex items-start gap-3 rounded-sm border border-slate-100 bg-slate-50 p-4">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white">
              {index + 1}
            </div>
            <p className="text-sm font-semibold leading-relaxed text-slate-700">{criterion.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroComparisonStrip() {
  const items = [
    { rank: "#1", name: "Muuhu", price: "£149", image: hairImages.muuhu, accent: "bg-emerald-500 text-white" },
    { rank: "#2", name: "Shark", price: "£199+", image: hairImages.shark, accent: "bg-cyan-500 text-white" },
    { rank: "#3", name: "Dyson", price: "£399.99", image: hairImages.dyson, accent: "bg-violet-500 text-white" }
  ];

  return (
    <div className="mx-auto mb-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-100 bg-[#f5efdf] shadow-xl md:mb-12">
      <div className="bg-emerald-500 px-4 py-4 text-center">
        <p className="font-serif text-[clamp(1.35rem,5.6vw,2.8rem)] font-extrabold uppercase leading-tight tracking-wide text-white">
          Dyson vs Shark vs Muuhu
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3 sm:gap-4 sm:p-5 md:p-8">
        {items.map((item) => (
          <div key={item.name} className="relative rounded-2xl border border-slate-200 bg-white p-2 text-center shadow-sm sm:p-4">
            <div className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-black sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs ${item.accent}`}>
              {item.rank}
            </div>
            <div className="mb-2 flex h-24 items-center justify-center sm:h-36 md:h-52">
              <img src={item.image} alt={`${item.name} hair styler`} loading="eager" decoding="async" className="max-h-full w-full object-contain" />
            </div>
            <h2 className="text-xs font-black leading-tight text-slate-900 sm:text-base md:text-xl">{item.name}</h2>
            <p className="mt-1 text-sm font-black text-slate-900 sm:text-lg md:text-2xl">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GiftOffer() {
  const gifts = [
    {
      title: "Luxury Case",
      value: "Normally £19",
      image: hairImages.packaging,
      href: MUUHU_PACKAGING_URL,
      alt: "Muuhu premium packaging"
    },
    {
      title: "Muuhu Comb",
      value: "Normally £79",
      image: hairImages.comb,
      href: MUUHU_COMB_URL,
      alt: "Muuhu comb"
    },
    {
      title: "Haircare E-Book",
      value: "Normally £29",
      image: hairImages.ebook,
      href: MUUHU_EBOOK_URL,
      alt: "Muuhu haircare ebook"
    }
  ];

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-xl shadow-blue-100/50 md:p-8">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-bold uppercase tracking-wider text-blue-700">
        Editor's Tip
      </div>
      <h4 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
        Active offer found: <span className="inline-block rounded-md bg-blue-100 px-2 text-blue-600">£127 in free gifts</span>
      </h4>
      <p className="mb-8 text-base leading-relaxed text-slate-700 md:text-lg">
        Muuhu currently bundles three useful extras with the hair dryer offer, which makes the £149 buying case easier to understand beside Dyson and Shark.
      </p>
      <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-6">
        {gifts.map((gift) => (
          <a
            key={gift.title}
            href={gift.href}
            data-outbound="muuhu-hair-gift"
            className="relative block rounded-xl border border-blue-100 bg-white p-1 text-center shadow-lg transition-transform hover:-translate-y-1 sm:rounded-2xl sm:p-4"
            aria-label={`View ${gift.title}`}
          >
            <div className="absolute -right-1 -top-2 z-20 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white shadow-lg sm:-right-2 sm:-top-4 sm:px-4 sm:py-1.5 sm:text-base">
              FREE
            </div>
            <div className="relative mb-1.5 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 sm:mb-3 sm:rounded-xl">
              <span className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-1 py-0.5 text-[8px] font-bold text-slate-900 line-through shadow-sm sm:bottom-2 sm:px-3 sm:py-1 sm:text-xs">
                {gift.value}
              </span>
              <img src={gift.image} alt={gift.alt} loading="lazy" decoding="async" className="aspect-square w-full rounded-lg object-cover sm:rounded-xl" />
            </div>
            <p className="text-[10px] font-extrabold leading-tight text-slate-900 sm:text-lg">{gift.title}</p>
          </a>
        ))}
      </div>
      <OutboundButton
        href={MUUHU_HAIR_URL}
        ariaLabel="Check Muuhu Hair Dryer availability"
        className="block w-full rounded-2xl border-2 border-blue-500 bg-blue-600 py-3.5 text-center text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] hover:bg-blue-700 sm:py-4 sm:text-lg md:py-5 md:text-xl"
      >
        <span className="flex items-center justify-center gap-2">
          Check Availability <ChevronRight size={22} />
        </span>
      </OutboundButton>
    </div>
  );
}

function ProductCard({ product }: { product: RankedProduct }) {
  const metrics = product.metrics ?? [];
  const pros = product.pros ?? [];
  const cons = product.cons ?? [];
  const descriptions = product.description ?? (product.summary ? [product.summary] : []);

  return (
    <article
      className={`mb-10 overflow-hidden rounded-sm border bg-white shadow-sm ${
        product.isWinner ? "border-emerald-500 ring-2 ring-emerald-500/10" : "border-slate-200"
      }`}
    >
      <div className={`px-5 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-white ${
        product.isWinner ? "bg-emerald-500" : "bg-slate-800"
      }`}>
        {product.isWinner ? "#1 Editor's Choice" : `${product.rank} Reviewed Pick`}
      </div>

      <div className="grid gap-0 md:grid-cols-[minmax(260px,0.92fr)_1.45fr]">
        <div className="border-b border-slate-100 bg-slate-50 p-6 md:border-b-0 md:border-r md:p-8">
          <div className="mb-5 rounded-sm bg-white p-5 shadow-inner">
            <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="mx-auto aspect-square max-h-72 w-full object-contain" />
          </div>
          <div className="mb-4 flex items-center justify-center gap-2">
            <GreenStarRating rating={product.rating} />
            <span className="text-sm font-bold text-slate-700">{product.rating}</span>
          </div>
          <div className="mb-5 text-center">
            <p className="text-sm font-semibold text-slate-500">Current UK price</p>
            <div className="mt-1 flex items-baseline justify-center gap-2">
              <span className="text-3xl font-black text-slate-900">{product.price}</span>
              {product.originalPrice && <span className="text-lg font-bold text-slate-400 line-through">{product.originalPrice}</span>}
            </div>
          </div>
          <OutboundButton
            href={product.link ?? "#"}
            ariaLabel={product.isWinner ? "Visit official Muuhu Hair Dryer website" : `Review ${product.name}`}
            className={`block w-full rounded-sm px-5 py-4 text-center text-base font-black uppercase tracking-wide text-white shadow-lg transition-all ${
              product.isWinner ? "bg-emerald-500 shadow-emerald-500/25 hover:bg-emerald-600" : "bg-slate-800 shadow-slate-900/15"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {product.isWinner ? "Official Website" : "Reviewed"} <ChevronRight size={19} />
            </span>
          </OutboundButton>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-700">
              {product.badge}
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Best for: {product.bestFor}</span>
          </div>
          <h3 className="mb-4 font-serif text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">{product.name}</h3>
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            {descriptions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="my-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-emerald-100 bg-emerald-50 p-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-emerald-800">
                <CheckCircle2 size={18} /> Pros
              </h4>
              <ul className="space-y-3">
                {pros.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-emerald-950">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{stripLead(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-red-100 bg-red-50 p-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-red-800">
                <XCircle size={18} /> Cons
              </h4>
              <ul className="space-y-3">
                {cons.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-red-950">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                    <span>{stripLead(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-sm border border-slate-100 bg-slate-50 p-5">
            {metrics.map((metric) => (
              <MetricBar key={metric.label} label={metric.label} value={metric.value} />
            ))}
          </div>

          {product.isWinner && <GiftOffer />}
        </div>
      </div>
    </article>
  );
}

export default function HairThreeWayAdvertorial({ context }: { context: PageMarketContext }) {
  const products = dysonSharkMuuhuPage.products ?? [];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <div className="border-b border-emerald-600 bg-emerald-500 px-4 pb-6 pt-5 md:pb-8 md:pt-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mx-[-0.25rem] mb-4 text-center font-serif text-[clamp(1.65rem,7vw,2.85rem)] font-extrabold leading-[1.08] tracking-tight text-white md:mx-0 md:mb-6 md:text-5xl lg:text-6xl">
            Dyson vs Shark vs Muuhu UK
          </h1>
          <div className="flex items-center justify-center gap-2 text-base font-bold text-white md:text-lg">
            <CheckCircle2 size={20} className="shrink-0 text-white" />
            Last updated - {context.updatedDate}
          </div>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-6xl text-center">
          <HeroComparisonStrip />

          <div className="mx-auto max-w-5xl rounded-sm border border-slate-100 bg-white p-6 text-left text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:p-8">
            <div className="mb-6 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <img src={hairImages.editor} alt="Amara Wright" className="h-24 w-24 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 underline md:text-2xl">Amara Wright</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-sm">Beauty Technology Editor</p>
                <p className="mt-2 text-sm font-semibold text-emerald-700">12 years covering hair styling tools</p>
              </div>
            </div>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 md:text-xl">
              Dyson owns prestige, Shark owns familiarity, and Muuhu makes the strongest value case for UK shoppers who want a complete styling kit.
            </p>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              This editorial comparison weighs the three products UK shoppers most often compare before buying a premium hair styler: price, included kit, styling outcomes, heat-control confidence, buyer hesitation and overall offer clarity.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <CriteriaGrid />

        <section className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
            <Award size={18} /> Three-way verdict
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            The three products worth comparing
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            This page keeps the comparison tight: Muuhu for value, Shark for familiarity, Dyson for prestige. No extra unrelated rankings are needed.
          </p>
        </section>

        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}

        <section className="mt-14 rounded-sm border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
            <img src={hairImages.trust} alt="Editorial review desk for hair dryer comparison" loading="lazy" decoding="async" className="mx-auto h-36 w-36 rounded-full object-cover md:h-44 md:w-44" />
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-black uppercase tracking-wide text-emerald-700">
                <ShieldCheck size={17} /> Final verdict
              </div>
              <h2 className="mb-4 font-serif text-2xl font-extrabold text-slate-900 md:text-3xl">Muuhu is the strongest first click for value-focused UK shoppers.</h2>
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Muuhu is the best value choice in this three-way comparison because the offer is easiest to understand: £149, seven attachments, 2-year warranty, 90-day guarantee and free gifts. Shark is still a good familiar alternative, and Dyson is still the prestige product, but Muuhu gives the strongest price-to-kit case for paid-search visitors.
              </p>
              <OutboundButton
                href={MUUHU_HAIR_URL}
                ariaLabel="Check Muuhu Hair Dryer availability"
                className="mt-6 inline-flex rounded-sm bg-emerald-500 px-6 py-4 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600"
              >
                <span className="flex items-center justify-center gap-2">
                  Check Availability <ChevronRight size={19} />
                </span>
              </OutboundButton>
            </div>
          </div>
        </section>

        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-slate-500">
          Disclosure: This review page may contain affiliate links. Our ranking is based on editorial comparison, offer clarity, product features and value for UK buyers.
        </p>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-600 bg-white p-3 shadow-[0_-6px_24px_rgba(15,23,42,0.18)] md:hidden">
        <OutboundButton
          href={MUUHU_HAIR_URL}
          ariaLabel="Check Muuhu Hair Dryer availability"
          className="block w-full rounded-sm bg-emerald-500 px-5 py-3.5 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-500/25"
        >
          <span className="flex items-center justify-center gap-2">
            Check Availability <ChevronRight size={18} />
          </span>
        </OutboundButton>
      </div>
    </div>
  );
}
