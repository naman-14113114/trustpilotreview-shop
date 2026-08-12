"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  Play,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarRating } from "@/components/GreenStarRating";

const JUUJO_URL =
  "https://grounding.juujo.com/products/grounding-fitted-sheets";

const BAREEARTH_URL =
  "https://offer.bareearthlife.com/groundedsheets/landing?uid=3061&oid=858&affid=96&source_id=solus_bgs&sub1=688870942&sub2=a02912bb679d17fd2b9e78c7e4864b2d&sub3=1344705269804653&sub4=84044360745504&sub5=12&utm_source=bing&msclkid=a02912bb679d17fd2b9e78c7e4864b2d&utm_medium=cpc&utm_campaign=383_solus_bgs%7CS%7CUS&utm_term=grounding%20bed%20sheet%20reviews&utm_content=Generic";

const BAREEARTH_TRUSTPILOT_URL =
  "https://www.trustpilot.com/review/bareearth-life.com";

type Metric = {
  label: string;
  value: string;
};

type RankedProduct = {
  rank: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  compareAt?: string;
  rating: number;
  ratingLabel: string;
  grade: string;
  badge: string;
  ctaUrl: string;
  ctaLabel: string;
  sourceLinks: { label: string; href: string }[];
  metrics: Metric[];
  pros: string[];
  cons: string[];
  review: string[];
  proof?: ReactNode;
};

const evaluationCriteria = [
  "Fitted stability",
  "Conductive material",
  "Silver or steel composition",
  "Setup clarity",
  "Care durability",
  "Trial and returns",
  "Price and bundle value",
  "Shipping and stock clarity",
  "Customer-review risk",
  "Best US buyer fit",
];

const gifts = [
  {
    name: "Grounding Mat",
    value: "$69 value",
    image: "/img/grounding-sheets/juujo-grounding-mat-gift.webp",
  },
  {
    name: "Premium Sleep Mask",
    value: "$69 value",
    image: "/img/grounding-sheets/juujo-premium-eye-mask.png",
  },
  {
    name: "Grounding Pillowcase",
    value: "$49 value",
    image: "/img/grounding-sheets/juujo-grounding-pillowcase-gift.webp",
  },
];

const products: RankedProduct[] = [
  {
    rank: 1,
    name: "Juujo Grounding Fitted Sheet",
    brand: "Juujo",
    image: "/img/grounding-sheets/best-page-image.webp",
    price: "$99",
    compareAt: "$199",
    rating: 4.9,
    ratingLabel: "Editorial rating",
    grade: "A+",
    badge: "Best Overall",
    ctaUrl: JUUJO_URL,
    ctaLabel: "Check Availability",
    sourceLinks: [{ label: "Official Juujo product page", href: JUUJO_URL }],
    metrics: [
      { label: "Fit", value: "Fitted wrap" },
      { label: "Blend", value: "90% cotton / 10% silver" },
      { label: "Trial", value: "120 nights" },
      { label: "Entry price", value: "$99" },
      { label: "Best for", value: "Most US buyers" },
    ],
    pros: [
      "Fitted-sheet construction stays in place better than flat panels.",
      "10% conductive silver share is higher than the 5% silver sheets listed by Terra and GroundingWell.",
      "Cotton-led feel keeps the sheet closer to normal bedding.",
      "120-night trial gives more time than Terra's 30-night guarantee and GroundingWell's 90-day guarantee.",
      "Clear $99 entry offer makes the total value easier to compare.",
      "Bundle includes Premium Sleep Mask, grounding mat and grounding pillowcase.",
      "Setup is direct: fit the sheet, connect the cord and use a grounded outlet.",
    ],
    cons: [
      "Online-only purchase means no in-store feel test before buying.",
      "Sale value depends on the current $99 offer remaining available.",
      "Popular sizes can create stock pressure during promotional periods.",
    ],
    review: [
      "Juujo is the cleanest top pick for US shoppers because it solves the two issues that come up again and again in grounding sheets: keeping the sheet stable on the bed and making the whole kit feel simple. The fitted design matters. It wraps the mattress instead of asking the buyer to keep a narrow panel aligned overnight.",
      "It also wins on bundle value. The current offer combines the fitted sheet with useful gifts and a longer 120-night trial, so shoppers have more time to judge comfort, setup and everyday fit. We still treat grounding as a wellness category rather than a medical fix, but Juujo has the best mix of bedding practicality, conductive material and buyer protection in this list.",
    ],
  },
  {
    rank: 2,
    name: "Terra Grounding Bed Sheet",
    brand: "The Grounding Co",
    image: "/img/grounding-sheets/terra-grounding-bed-sheet-new.webp",
    price: "$159.95",
    rating: 4.1,
    ratingLabel: "Editorial rating",
    grade: "B+",
    badge: "Runner Up",
    ctaUrl: "https://thegrounding.co/products/the-terra-grounding-bed-sheet",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Terra product page",
        href: "https://thegrounding.co/products/the-terra-grounding-bed-sheet",
      },
      {
        label: "The Grounding Co Trustpilot",
        href: "https://uk.trustpilot.com/review/thegrounding.co",
      },
    ],
    metrics: [
      { label: "Fit", value: "Fitted sheet" },
      { label: "Blend", value: "95% cotton / 5% silver" },
      { label: "Trial", value: "30 nights" },
      { label: "Listed price", value: "$159.95" },
      { label: "Review risk", value: "16% one-star" },
    ],
    pros: [
      "Uses a fitted-sheet format, which is more bed-friendly than a loose panel.",
      "95% cotton base should feel familiar for shoppers who dislike technical fabric.",
      "Available in common bed sizes and multiple color choices.",
      "Simple cord-based setup makes the concept easy to understand.",
      "Public Trustpilot review volume is large enough to spot patterns.",
    ],
    cons: [
      "Shorter 30-night guarantee gives less real sleep-trial time than Juujo's 120-night trial.",
      "Free shipping is listed only over $100, so the shipping promise is threshold-based.",
      "The listed 95% cotton / 5% silver blend has a lower silver share than Juujo's 10% silver blend.",
      "The displayed $159.95 price is higher than Juujo's $99 entry offer.",
      "Sold-out and low-stock messaging can make size and color choice feel less dependable.",
      "Broad wellness claims, including inflammation and ache language, should be treated cautiously by buyers.",
      "The public Trustpilot profile shows a 16% one-star share, which creates review-risk friction.",
      "Some public one-star review themes mention return, refund and care-policy frustration.",
    ],
    review: [
      "Terra is the strongest competitor because it stays close to what US shoppers usually want: a fitted sheet, familiar cotton feel and straightforward setup. If a buyer mainly wants a recognizable fitted grounding-sheet format, Terra deserves to stay high on the shortlist.",
      "The gaps are mostly value and risk signals. A 30-night guarantee is much shorter, the silver share is lower, and the public Trustpilot one-star share is high enough that careful shoppers should read the critical reviews before ordering. Terra is credible, but Juujo gives more buyer runway and a stronger overall value package.",
    ],
  },
  {
    rank: 3,
    name: "GroundingWell Bedsheet",
    brand: "GroundingWell",
    image: "/img/grounding-sheets/groundingwell-bedsheet.webp",
    price: "$99.90",
    rating: 3.8,
    ratingLabel: "Editorial rating",
    grade: "B",
    badge: "Budget Panel",
    ctaUrl: "https://www.groundingwell.com/products/groundingwell-bedsheet",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "GroundingWell product page",
        href: "https://www.groundingwell.com/products/groundingwell-bedsheet",
      },
      {
        label: "GroundingWell Trustpilot",
        href: "https://www.trustpilot.com/review/groundingwell.com",
      },
    ],
    metrics: [
      { label: "Fit", value: "104.3 x 19.7 in panel" },
      { label: "Blend", value: "95% cotton / 5% silver" },
      { label: "Guarantee", value: "90 days" },
      { label: "Care", value: "Strict limits" },
      { label: "Review risk", value: "20% one-star" },
    ],
    pros: [
      "Lower displayed bundle-style pricing may appeal to price-first shoppers.",
      "Ships from the USA according to the product page.",
      "Free shipping messaging is visible on the product page.",
      "90-day money-back guarantee is longer than Terra's 30-night guarantee.",
      "Panel format can work across several mattress sizes without buying a fitted size.",
    ],
    cons: [
      "The listed 95% cotton / 5% silver blend has a lower silver share than Juujo's 10% silver blend.",
      "The 104.3 x 19.7 inch panel format is not full fitted-sheet coverage.",
      "A narrow panel can shift or miss contact depending on sleep position.",
      "Care guidance is stricter than normal bedding, including careful washing and drying limits.",
      "The 90-day guarantee is shorter than Juujo's 120-night trial.",
      "GroundingWell's public Trustpilot profile shows a 20% one-star share.",
      "Public review summaries include mixed-results comments and material concerns such as stiffness or scent.",
    ],
    review: [
      "GroundingWell earns third because it is widely visible and the panel can be a lower-cost way to try grounding. The problem is that it is not the same experience as a fitted sheet. A narrow panel may be acceptable for some sleepers, but it creates more placement risk than a fitted wrap.",
      "The review-risk signal is also heavier here. A 20% public one-star share and repeated mixed-result or material concerns do not automatically mean every buyer will have a poor experience, but they are real enough to include in the decision. For shoppers who want stable coverage and a stronger trial, Juujo remains the safer pick.",
    ],
  },
  {
    rank: 4,
    name: "Premium Grounding Sheets",
    brand: "Premium Grounding",
    image: "/img/grounding-sheets/premium-grounding-sheet.webp",
    price: "$249",
    rating: 3.5,
    ratingLabel: "Editorial rating",
    grade: "B-",
    badge: "Steel Option",
    ctaUrl:
      "https://premiumgrounding.com/products/grounding-earthing-sheet?variant=43910869352513",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Premium Grounding product page",
        href: "https://premiumgrounding.com/products/grounding-earthing-sheet?variant=43910869352513",
      },
      {
        label: "Premium Grounding Trustpilot",
        href: "https://www.trustpilot.com/review/premiumgrounding.au",
      },
    ],
    metrics: [
      { label: "Fit", value: "Flat under-sheet" },
      { label: "Material", value: "30% stainless steel" },
      { label: "Entry price", value: "$249" },
      { label: "Sizing", value: "Limited range" },
      { label: "Review base", value: "82 reviews" },
    ],
    pros: [
      "30% stainless-steel construction gives the product a clear conductive-material story.",
      "Under-sheet placement may suit shoppers who do not want direct skin contact.",
      "Can sit below a natural fitted sheet, according to the product page.",
      "Straightforward size selection keeps the buying process simple.",
      "Appeals to shoppers who prefer a technical grounding layer over a cotton-led fitted sheet.",
    ],
    cons: [
      "The $249 entry price is much higher than Juujo's $99 entry offer.",
      "The flat under-sheet format is not a fitted wrap and may not feel like normal bedding.",
      "Stainless-steel construction can feel more technical than a cotton-led sheet.",
      "Dimensional choices are more limited than a seven-size fitted-sheet range.",
      "The one-free-sheet-per-order offer note excludes Twin, which can weaken bundle value for Twin buyers.",
      "The public Trustpilot profile has a small review base, so patterns are less statistically settled.",
      "Some one-star public reviews mention return or support complaints.",
      "The product positioning still leans on wellness expectations that buyers should not treat as guaranteed outcomes.",
    ],
    review: [
      "Premium Grounding is different from the other picks because it is a technical under-sheet rather than a cotton-led fitted sheet. That can be a positive for shoppers who want a conductive layer below their regular bedding, but it is a worse match for buyers who specifically want a fitted grounding sheet.",
      "The biggest issue is the value equation. At $249, it has to justify a large jump over the lower-priced fitted options. The steel construction is clear, but the smaller public review base and return/support complaints in critical reviews make this a more cautious recommendation.",
    ],
  },
  {
    rank: 5,
    name: "BareEarth Grounding Sheets",
    brand: "BareEarth",
    image: "/img/grounding-sheets/bareearth-grounding-sheet.webp",
    price: "50% off offer",
    rating: 2.1,
    ratingLabel: "Editorial rating",
    grade: "D",
    badge: "High Review Risk",
    ctaUrl: BAREEARTH_URL,
    ctaLabel: "View BareEarth Offer",
    sourceLinks: [
      {
        label: "BareEarth offer page",
        href: BAREEARTH_URL,
      },
      {
        label: "BareEarth Trustpilot",
        href: BAREEARTH_TRUSTPILOT_URL,
      },
    ],
    metrics: [
      { label: "Public score", value: "1.3 TrustScore" },
      { label: "One-star share", value: "90%" },
      { label: "On-page claim", value: "4.9 / 201,191+" },
      { label: "Trial", value: "90 days" },
      { label: "Claim risk", value: "Very high" },
    ],
    pros: [
      "Offer page lists a fitted-sheet setup rather than a loose panel.",
      "Listed 10% silver blend matches the higher silver-share claim shoppers often compare.",
      "400 thread count cotton positioning may sound familiar to bedding shoppers.",
      "Offer page includes a tester kit and cord-based setup explanation.",
      "90-day refund language is visible on the offer page.",
    ],
    cons: [
      "BareEarth's public Trustpilot profile shows a 1.3 TrustScore.",
      "The same public profile shows a 90% one-star review share.",
      "There is a clear claim mismatch between the offer page's 4.9 / 201,191+ customer-review claim and the public Trustpilot profile.",
      "Public review summaries include reported refund friction and restocking-fee complaints.",
      "Public review summaries include support complaints from unhappy buyers.",
      "Public review summaries include delayed, incorrect and missing-item complaint themes.",
      "Public review summaries include product-quality and conductivity complaint themes.",
      "The offer page uses broad medical-style wellness language that buyers should treat cautiously.",
      "The landing-page format is aggressive and makes independent review checking especially important.",
    ],
    proof: <BareEarthProof />,
    review: [
      "BareEarth is the most difficult product to place because the offer page looks polished and includes several attractive specs, including a fitted design and 10% silver blend. Those details keep it in the top five, but the public review-risk signals are too serious to rank it higher.",
      "The main concern is the mismatch. The offer page presents a 4.9 rating and 201,191+ grounded-customer claim, while the public Trustpilot profile shows a 1.3 TrustScore and a 90% one-star share. That does not prove every order will go badly, but it is enough to make BareEarth a high-risk choice unless the buyer is comfortable reading critical reviews first.",
    ],
  },
];

function formatNewYorkDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(date);
}

function BareEarthProof() {
  return (
    <div
      data-testid="bareearth-trustpilot-proof"
      className="rounded-2xl border border-red-200 bg-red-50/60 p-4 md:p-5"
    >
      <a
        href={BAREEARTH_TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[18px] font-bold leading-7 text-red-800 underline underline-offset-4"
      >
        Public Trustpilot profile: 1.3 TrustScore and 90% one-star reviews
      </a>
      <div className="mt-4 overflow-hidden rounded-xl border border-red-200 bg-white">
        <Image
          src="/img/grounding-sheets/bareearth-trustpilot-score-distribution.png"
          alt="BareEarth Trustpilot score and rating distribution"
          width={360}
          height={500}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-3 text-[18px] leading-7 text-red-900/80">
        Captured from Trustpilot on August 12, 2026. Reviews are user opinions;
        use the linked profile for the latest public record.
      </p>
    </div>
  );
}

function handleOutboundClick(
  event: MouseEvent<HTMLAnchorElement>,
  setLoadingTarget: (target: string) => void,
  target: string,
) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  setLoadingTarget(target);
}

function OfficialButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  children,
  className = "",
  testId,
}: {
  href: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  children: ReactNode;
  className?: string;
  testId?: string;
}) {
  const isLoading = loadingTarget === targetId;

  return (
    <a
      href={href}
      rel="noopener noreferrer sponsored"
      data-testid={testId}
      onClick={(event) =>
        handleOutboundClick(event, setLoadingTarget, targetId)
      }
      className={`group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-6 py-4 text-center text-[18px] font-bold text-white shadow-xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            {children}
            <ChevronRight className="h-6 w-6 shrink-0" aria-hidden="true" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

function EvaluationCriteria() {
  return (
    <section className="mb-10 w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mb-16 md:rounded-3xl md:p-10">
      <h2 className="mb-5 text-center font-serif text-[1.35rem] font-bold leading-tight text-slate-900 md:mb-8 md:text-3xl">
        We evaluated grounding sheets based on 10 criteria
      </h2>
      <div className="mb-5 grid grid-cols-1 gap-2.5 md:mb-8 md:grid-cols-2 md:gap-4">
        {evaluationCriteria.map((criterion) => (
          <div key={criterion} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-500 md:h-5 md:w-5" />
            <span className="text-[17px] font-semibold leading-snug text-slate-700 md:text-[18px]">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center text-[18px] leading-8 text-slate-600">
        We reviewed public product specifications, return terms, care guidance,
        pricing, shipping information and public customer-review signals. These
        five products stood out for US shoppers, but the list does not treat
        wellness claims as guaranteed medical outcomes.
      </p>
    </section>
  );
}

function MetricBar({ label, value }: Metric) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 py-3 first:pt-0 last:border-b-0 last:pb-0">
      <span className="text-[17px] font-semibold leading-6 text-slate-700 md:text-[18px]">
        {label}
      </span>
      <span className="shrink-0 text-right text-[17px] font-bold text-emerald-700 md:text-[18px]">
        {value}
      </span>
    </div>
  );
}

function GiftPanel({
  loadingTarget,
  setLoadingTarget,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-xl shadow-blue-100/50 md:p-8">
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-bold uppercase tracking-wide text-blue-700">
          Included Juujo offer
        </div>
        <h3 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
          Active Offer Found: $187 in{" "}
          <span className="inline-block rounded-md bg-blue-100 px-2 text-blue-600">
            FREE GIFTS
          </span>
        </h3>
        <p className="mb-8 text-[18px] leading-8 text-slate-700">
          The current Juujo fitted-sheet bundle includes three practical extras
          with the sheet purchase.
        </p>
        <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-6">
          {gifts.map((gift) => (
            <a
              key={gift.name}
              href={JUUJO_URL}
              rel="noopener noreferrer sponsored"
              className="relative rounded-xl border border-blue-100 bg-white p-1 text-center shadow-lg transition-transform hover:-translate-y-1 sm:rounded-2xl sm:p-4"
            >
              <span className="absolute -right-1 -top-2 z-20 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white shadow-lg sm:-right-2 sm:-top-4 sm:px-4 sm:py-1.5 sm:text-base">
                FREE
              </span>
              <span className="block overflow-hidden rounded-lg border border-slate-100 bg-slate-50 sm:rounded-xl">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  width={260}
                  height={260}
                  className="aspect-square w-full object-cover"
                />
              </span>
              <span className="mt-2 block text-[11px] font-extrabold leading-tight text-slate-900 sm:text-[18px]">
                {gift.name}
              </span>
              <span className="mt-1 block text-[10px] font-bold text-blue-700 sm:text-sm">
                {gift.value}
              </span>
            </a>
          ))}
        </div>
        <OfficialButton
          href={JUUJO_URL}
          targetId="juujo-gift-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="juujo-cta-gifts"
          className="rounded-2xl border-2 border-blue-500 bg-blue-600 shadow-blue-600/30"
        >
          Check Availability
        </OfficialButton>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  loadingTarget,
  setLoadingTarget,
}: {
  product: RankedProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const isJuujo = product.rank === 1;
  const isBareEarth = product.rank === 5;
  const ctaTestId = isJuujo
    ? `juujo-cta-card-${product.rank}`
    : isBareEarth
      ? "bareearth-cta"
      : undefined;

  return (
    <article
      id={`rank-${product.rank}`}
      data-testid="old-style-ranked-card"
      data-product-rank={product.rank}
      className={`relative rounded-3xl border bg-white p-6 shadow-sm md:p-10 ${isJuujo ? "border-emerald-500 pt-10 ring-4 ring-emerald-50 md:pt-10" : "border-slate-200"}`}
    >
      {isJuujo ? (
        <div className="absolute -top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg md:-top-5 md:px-6 md:py-2 md:text-sm">
          <Award className="h-4 w-4 md:h-[18px] md:w-[18px]" />
          #1 Editor&apos;s Choice
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-16">
        <aside className="flex flex-col items-center lg:col-span-4">
          <div className="flex w-full flex-col items-center lg:sticky lg:top-8">
            <h2
              className={`mb-6 text-center text-2xl font-bold text-slate-900 lg:hidden ${isJuujo ? "mt-3" : ""}`}
            >
              #{product.rank} {product.name}
            </h2>
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              className="group mb-6 block w-full"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={620}
                height={620}
                className="aspect-square w-full rounded-2xl border border-slate-100 object-cover shadow-md transition-shadow duration-300 group-hover:shadow-xl"
              />
            </a>

            <div className="mb-4 w-full text-center lg:mb-6">
              <div className="mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl font-extrabold text-slate-900">
                  {product.price}
                </span>
                {product.compareAt ? (
                  <span className="text-lg font-medium text-slate-400 line-through">
                    {product.compareAt}
                  </span>
                ) : null}
              </div>
              <GreenStarRating
                rating={product.rating}
                size={24}
                className="mb-2"
              />
              <p className="text-[18px] font-medium text-slate-500">
                Overall rating {product.rating.toFixed(1)} / 5
              </p>
            </div>

            {product.proof}

            <OfficialButton
              href={product.ctaUrl}
              targetId={`product-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={ctaTestId}
            >
              {product.ctaLabel}
            </OfficialButton>

            <div className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-bold text-slate-700">
                Sources checked
              </div>
              <div className="mt-2 space-y-1">
                {product.sourceLinks.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 text-[16px] font-semibold leading-6 text-emerald-700 underline-offset-4 hover:underline"
                  >
                    <span>{source.label}</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <h2 className="mb-6 hidden font-serif text-3xl font-bold text-slate-900 lg:block lg:text-4xl">
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              className="transition-colors hover:text-emerald-600"
            >
              #{product.rank} {product.name}
            </a>
          </h2>

          <div className="mb-8 space-y-5 text-[18px] leading-8 text-slate-700">
            {product.review.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-5 md:p-6">
            <h3 className="mb-4 text-[20px] font-bold text-slate-900">
              Comparison details
            </h3>
            <div>
              {product.metrics.map((metric) => (
                <MetricBar
                  key={`${product.rank}-${metric.label}`}
                  {...metric}
                />
              ))}
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-6">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-3 py-5 md:p-6">
              <h3 className="-mx-3 -mt-5 mb-6 rounded-t-2xl bg-emerald-500 px-3 py-3 text-center text-2xl font-bold text-white md:-mx-6 md:-mt-6 md:px-6">
                Pros
              </h3>
              <ul className="space-y-4">
                {product.pros.map((pro) => (
                  <li
                    key={pro}
                    className="flex items-start gap-3 text-[18px] leading-8 text-slate-700"
                  >
                    <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50/50 px-3 py-5 md:p-6">
              <h3 className="-mx-3 -mt-5 mb-6 rounded-t-2xl bg-red-500 px-3 py-3 text-center text-2xl font-bold text-white md:-mx-6 md:-mt-6 md:px-6">
                Cons
              </h3>
              <ul className="space-y-4">
                {product.cons.map((con) => (
                  <li
                    key={con}
                    className="flex items-start gap-3 text-[18px] leading-8 text-slate-700"
                  >
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isJuujo ? (
            <GiftPanel
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ) : null}

          <div className="mt-8 lg:hidden">
            <OfficialButton
              href={product.ctaUrl}
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={isBareEarth ? "bareearth-cta-mobile" : undefined}
            >
              {product.ctaLabel}
            </OfficialButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function DeferredVerdictVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="verdict-video-section"
      className="relative mx-auto mb-10 mt-20 max-w-sm rounded-[1.5rem] border border-[#e8dccb] bg-[#f8f4e6] p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] md:mb-12 md:mt-24 md:max-w-5xl md:rounded-[2rem] md:p-12"
    >
      <h2 className="mb-6 text-center font-serif text-2xl font-bold text-[#8b1528] md:mb-10 md:text-4xl">
        Editor&apos;s Verdict
      </h2>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div>
          <div className="relative mx-auto max-w-[300px] overflow-hidden rounded-[1.35rem] border border-[#dfd1bd] bg-black shadow-xl md:rounded-[1.75rem]">
            <video
              ref={videoRef}
              data-testid="verdict-video"
              className="block aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/assets/juujo-grounding-fitted-sheet-review-poster.webp"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source
                src="/assets/juujo-grounding-fitted-sheet-review.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              onClick={playVideo}
              className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${
                isPlaying
                  ? "pointer-events-none scale-90 opacity-0"
                  : "scale-100 opacity-100"
              }`}
              aria-label="Play Juujo grounding fitted sheet review video"
            >
              <Play className="ml-1 h-8 w-8 fill-current" />
            </button>
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase text-[#8b1528] shadow-sm">
              Product demo
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-[320px] text-center text-[18px] leading-7 text-slate-600">
            See the fitted construction, connection cord and full-sheet setup in
            the same Juujo product walkthrough used in our review.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <h3 className="mb-3 font-serif text-2xl font-bold text-black md:mb-4 md:text-3xl lg:text-4xl">
            Juujo Grounding Fitted Sheet
          </h3>
          <div className="mx-auto mb-5 h-px w-28 bg-[#d4af37] md:mb-6 md:w-32" />
          <div className="mb-5 text-3xl font-bold text-[#8b1528] md:mb-8 md:text-4xl">
            Now from $99
          </div>
          <div className="mx-auto mb-6 inline-block rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm md:mb-8">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="text-[18px] font-bold text-black">
                Excellent
              </span>
              <GreenStarRating rating={4.9} size={22} />
            </div>
            <p className="text-[18px] leading-7 text-slate-600">
              Our #1 grounding-sheet pick for US buyers
            </p>
          </div>
          <a
            href={JUUJO_URL}
            rel="noopener noreferrer sponsored"
            data-testid="juujo-cta-verdict"
            className="mx-auto flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#1a7444] to-[#0d4a29] px-6 py-4 text-[18px] font-bold text-white shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-transform hover:-translate-y-1"
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </section>
  );
}

export default function GroundingSheetsInUsAdvertorial() {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatNewYorkDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  useEffect(() => {
    setUpdatedDate(formatNewYorkDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <header className="border-b border-emerald-600 bg-emerald-500 px-4 pb-6 pt-5 text-white shadow-lg">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-[clamp(1.75rem,7vw,3rem)] font-bold leading-tight">
            Best Grounding Sheets
            <span className="mt-1 flex items-center justify-center gap-2">
              <MarketFlag market="us" />
              <span>United States - 2026</span>
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-[18px] font-medium text-emerald-50">
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Updated {updatedDate}</span>
          </div>
        </div>
      </header>

      <header className="border-b border-slate-200 bg-white py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div
            data-testid="grounding-top-five-hero"
            className="grid grid-cols-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:rounded-3xl"
          >
            {products.map((product) => (
              <div
                key={`hero-${product.rank}`}
                className="relative aspect-[3/4] border-r border-slate-200 last:border-r-0 md:aspect-square"
              >
                <Image
                  src={product.image}
                  alt={`${product.name}, ranked number ${product.rank}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 20vw, 224px"
                  className="object-cover"
                />
                <span className="absolute left-1 top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-emerald-500 px-1.5 text-xs font-black text-white shadow md:left-3 md:top-3 md:h-9 md:min-w-9 md:text-base">
                  #{product.rank}
                </span>
              </div>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-md md:mt-10 md:rounded-3xl md:p-8">
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-8">
              <Image
                src="/img/grounding-sheets/dr-image.webp"
                alt="Dr. Rachel Morgan"
                width={104}
                height={104}
                className="h-24 w-24 shrink-0 rounded-full border-4 border-emerald-100 object-cover shadow-sm"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  <span className="underline decoration-emerald-500 decoration-2 underline-offset-4">
                    Dr. Rachel Morgan
                  </span>
                </h2>
                <div className="mt-1 text-sm font-bold uppercase text-emerald-600">
                  Medical Reviewer
                </div>
                <p className="mt-4 text-[18px] leading-8 text-slate-700">
                  This comparison weighs product specifications, public review
                  signals, return policies and buyer fit. Grounding sheets are
                  treated as wellness products, not substitutes for medical care
                  or guaranteed health outcomes.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="text-center text-[18px] font-semibold leading-8 text-slate-700">
                Our expert reviewer compared five popular options and recommends
                Juujo for the strongest mix of fitted stability, trial length,
                material specification and bundle value.
              </p>
            </div>
          </section>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section className="mx-auto mb-10 max-w-5xl space-y-5 text-[18px] leading-8 text-slate-700 md:mb-14">
          <p>
            Grounding sheets can look almost identical in advertising, but the
            products differ sharply in fit, conductive material, care rules,
            trial terms and public customer-review risk.
          </p>
          <p>
            We compared five grounding-sheet offers available to US shoppers.
            Our review favors practical bedding details first: whether the sheet
            stays put, what the conductive blend contains, how clearly it can be
            cared for and how much time the buyer has to test it.
          </p>
          <p>
            We also checked the product pages and public Trustpilot profiles
            listed with each entry. Public reviews are individual experiences,
            but repeated refund, support, material or delivery concerns are
            useful risk signals before ordering.
          </p>
          <p>
            After comparing all ten criteria, Juujo ranks first for most US
            buyers. The fitted construction, 10% silver blend, 120-night trial
            and included gifts create the strongest overall package in this
            group.
          </p>
        </section>

        <EvaluationCriteria />

        <div className="space-y-16">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ))}
        </div>

        <DeferredVerdictVideo />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a
          href={JUUJO_URL}
          rel="noopener noreferrer sponsored"
          data-testid="mobile-sticky-cta"
          onClick={(event) =>
            handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")
          }
          className="group relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-3 py-3.5 text-center text-[16px] font-bold text-white shadow-lg shadow-emerald-500/30"
          aria-busy={loadingTarget === "mobile-sticky-cta"}
        >
          {loadingTarget === "mobile-sticky-cta" ? (
            <OutboundLoader />
          ) : (
            <>
              <span className="relative z-10">
                Take me to the winning grounding sheet
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
