"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Info,
  Minus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  BUUDY_PRODUCT_URL,
  buudyProduct,
  getBuudyEditorialPage,
  type BuudyEditorialPage as EditorialPageData,
  type EditorialProduct,
} from "@/data/buudyEditorialPages";

const checkedDate = "3 August 2026";

function ProductImage({ product }: { product: EditorialProduct }) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? "/img/TOP 5 LED Mask uk.png" : product.image}
      alt={product.imageAlt}
      className="h-full w-full object-contain p-5"
      onError={() => setFailed(true)}
    />
  );
}

function ProductCard({
  product,
  recommended,
}: {
  product: EditorialProduct;
  recommended?: boolean;
}) {
  const isBuudy = product.shortName === "Buudy";

  return (
    <article
      className={`overflow-hidden rounded-[28px] border bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
        recommended ? "border-emerald-500 ring-1 ring-emerald-500" : "border-slate-200"
      }`}
    >
      <div className={`flex min-h-12 items-center justify-between px-5 py-3 text-xs font-extrabold uppercase tracking-[0.15em] ${recommended ? "bg-emerald-600 text-white" : "bg-slate-900 text-white"}`}>
        <span>{recommended ? "Our value pick" : "Also consider"}</span>
        <span>{product.shortName}</span>
      </div>

      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="min-h-64 border-b border-slate-100 bg-gradient-to-br from-stone-50 to-emerald-50/50 md:border-b-0 md:border-r">
          <ProductImage product={product} />
        </div>
        <div className="p-6 md:p-8">
          <h3 className="font-serif text-2xl font-bold leading-tight text-slate-950 md:text-3xl">{product.name}</h3>
          <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
            <span className="text-3xl font-black tracking-tight text-slate-950">{product.price}</span>
            {isBuudy ? <span className="pb-1 text-base text-slate-400 line-through">£449</span> : null}
          </div>
          <p className="mt-1 text-xs leading-5 text-slate-500">{product.priceNote}</p>

          <dl className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
            {product.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[112px_1fr] gap-3 py-3 text-sm leading-5">
                <dt className="font-bold text-slate-600">{fact.label}</dt>
                <dd className="text-slate-800">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="grid gap-6 border-t border-slate-100 p-6 md:grid-cols-2 md:p-8">
        <div>
          <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-emerald-700">
            <CheckCircle2 size={18} /> Strengths
          </h4>
          <ul className="mt-4 space-y-3">
            {product.strengths.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                <Check size={17} className="mt-1 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-amber-700">
            <Minus size={18} /> Considerations
          </h4>
          <ul className="mt-4 space-y-3">
            {product.considerations.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                <Minus size={17} className="mt-1 shrink-0 text-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 p-5 md:px-8">
        <a
          href={product.sourceUrl}
          className={isBuudy ? "flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 text-center text-base font-extrabold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.24)] transition hover:bg-emerald-400" : "inline-flex items-center gap-2 text-sm font-bold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-emerald-700"}
          rel={isBuudy ? "sponsored noopener" : "nofollow noopener"}
          data-buudy-cta={isBuudy ? "product-card" : undefined}
        >
          {isBuudy ? "Check Buudy’s current £179 offer" : `Check ${product.shortName}’s official page`}
          {isBuudy ? <ArrowRight size={19} /> : <ExternalLink size={15} />}
        </a>
      </div>
    </article>
  );
}

function EditorialHeader({ page }: { page: EditorialPageData }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-600 md:px-6">
          <a href="/" className="text-slate-950">Trustpilot Review</a>
          <span className="text-right">UK buyer guides · 2026</span>
        </div>
      </div>

      <header className="overflow-hidden bg-[#006b55] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-9 px-4 py-12 md:grid-cols-[1.08fr_0.92fr] md:px-6 md:py-16 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em]">
              <Sparkles size={14} /> {page.eyebrow}
            </div>
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-100">United Kingdom · Updated 2026</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-[64px]">{page.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50 md:text-xl">{page.dek}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/20 bg-white shadow-2xl">
              <img
                src={imageFailed ? "/img/TOP 5 LED Mask uk.png" : page.heroImage}
                alt={page.heroImageAlt}
                className="h-full w-full object-contain"
                onError={() => setImageFailed(true)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-slate-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 py-4 text-xs leading-5 text-slate-600 sm:grid-cols-3 md:px-6">
          <div className="flex items-center gap-2"><FileSearch size={16} className="shrink-0 text-emerald-700" /><span><strong className="text-slate-800">Editorial review:</strong> no paid product testing claimed</span></div>
          <div className="flex items-center gap-2"><ShieldCheck size={16} className="shrink-0 text-emerald-700" /><span><strong className="text-slate-800">Sources:</strong> official product pages</span></div>
          <div className="flex items-center gap-2"><Info size={16} className="shrink-0 text-emerald-700" /><span><strong className="text-slate-800">Facts checked:</strong> {checkedDate}</span></div>
        </div>
      </div>
    </>
  );
}

function FactTable({ page }: { page: EditorialPageData }) {
  const rows = page.guideFacts ?? [];

  return (
    <section className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white md:px-8">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">At a glance</p>
        <h2 className="mt-1 font-serif text-2xl font-bold md:text-3xl">What the specifications actually tell you</h2>
      </div>
      <dl className="divide-y divide-slate-100">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-2 px-6 py-5 sm:grid-cols-[180px_1fr] md:px-8">
            <dt className="font-extrabold text-slate-900">{row.label}</dt>
            <dd className="leading-7 text-slate-600">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function FAQ({ page }: { page: EditorialPageData }) {
  return (
    <section className="mt-16 border-t border-slate-200 pt-12">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Questions answered</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-slate-950 md:text-4xl">Frequently asked questions</h2>
      <div className="mt-7 divide-y divide-slate-200 rounded-[28px] border border-slate-200 bg-white px-6 md:px-8">
        {page.faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
              {item.question}
              <span className="text-xl text-emerald-700 transition group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-3xl pt-3 text-sm leading-7 text-slate-600 md:text-base">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function BuudyEditorialPage({ pathname }: { pathname: string }) {
  const page = getBuudyEditorialPage(pathname);

  if (!page) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div data-buudy-editorial-page={page.path} className="min-h-screen bg-[#f7f7f4] pb-24 text-slate-900 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EditorialHeader page={page} />

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 md:p-9">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800">
              <CheckCircle2 size={18} /> Bottom line
            </div>
            <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-slate-950 md:text-4xl">{page.verdictTitle}</h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">{page.verdict}</p>
          </div>

          <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Three things to know</p>
            <ul className="mt-5 space-y-4">
              {page.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check size={15} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {page.kind === "comparison" && page.competitor ? (
          <section className="mt-16">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Product comparison</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-950 md:text-5xl">See the complete offer, side by side</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Prices and specifications below were checked against each brand’s official product information. Promotions can change.</p>
            </div>
            <div className="mt-8 space-y-8">
              <ProductCard product={buudyProduct} recommended />
              <ProductCard product={page.competitor} />
            </div>
          </section>
        ) : (
          <FactTable page={page} />
        )}

        <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-12">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-700 md:text-lg">{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-[28px] bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:sticky lg:top-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Our current value pick</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Buudy 7 Colour LED Mask</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">£179 with face-and-neck coverage, seven visible colours, 830nm near-infrared, four intensities and a 90-day guarantee.</p>
            <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-200">
              <strong className="text-white">Current bundle:</strong> Premium Travel Box, Buudy LED Torch and Skincare E-book shown as gifts with a combined £128 stated value.
            </div>
            <a
              href={BUUDY_PRODUCT_URL}
              rel="sponsored noopener"
              data-buudy-cta="editorial-sidebar"
              className="mt-6 flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 text-center font-extrabold text-slate-950 transition hover:bg-emerald-300"
            >
              View the current offer <ArrowRight size={18} />
            </a>
            <p className="mt-3 text-center text-[11px] text-slate-400">Opens the official Buudy UK website</p>
          </aside>
        </section>

        {page.kind === "guide" ? (
          <section className="mt-16">
            <ProductCard product={buudyProduct} recommended />
          </section>
        ) : null}

        <FAQ page={page} />

        <section className="mt-16 rounded-[30px] bg-[#006b55] px-6 py-10 text-center text-white md:px-12 md:py-14">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Editor’s value pick</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-bold md:text-5xl">Face and neck coverage for £179</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50">Check the latest price, gift availability and full product instructions on Buudy’s official UK page.</p>
          <a
            href={BUUDY_PRODUCT_URL}
            rel="sponsored noopener"
            data-buudy-cta="editorial-footer"
            className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-8 font-extrabold text-slate-950 transition hover:bg-emerald-50"
          >
            Check Buudy’s official offer <ArrowRight size={19} />
          </a>
        </section>

        <footer className="mt-10 border-t border-slate-200 py-8 text-xs leading-6 text-slate-500">
          <p><strong className="text-slate-700">Editorial and affiliate disclosure:</strong> This comparison is based on publicly available product information and does not claim laboratory or medical testing by Trustpilot Review. We may receive a commission if you buy through selected links, at no extra cost to you. Prices and offers can change.</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-bold text-slate-600">
            <a href="/disclosure" className="hover:text-emerald-700">Affiliate disclosure</a>
            <a href="/privacy" className="hover:text-emerald-700">Privacy</a>
            <a href="/contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-200 bg-white/95 p-3 shadow-[0_-10px_35px_rgba(15,23,42,0.14)] backdrop-blur md:hidden">
        <a
          href={BUUDY_PRODUCT_URL}
          rel="sponsored noopener"
          data-buudy-cta="mobile-sticky"
          className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 text-center font-extrabold text-slate-950"
        >
          See Buudy’s £179 offer <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
