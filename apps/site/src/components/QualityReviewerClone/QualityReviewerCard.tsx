import React from 'react';
import AnimatedRatingBar from './AnimatedRatingBar';
import AnimatedRatingCircle from './AnimatedRatingCircle';
import Image from 'next/image';

interface ProductProps {
  rank: number;
  name: string;
  brand: string;
  brandUrl: string;
  imageUrl: string;
  votes: string;
  score: string;
  percentage: number;
  grade: string;
  price: string;
  originalPrice?: string;
  bars: Array<{ label: string; score: string; percentage: number }>;
  pros: string[];
  cons: string[];
  review: React.ReactNode;
  learnMoreUrl: string;
}

export default function QualityReviewerCard({ product }: { product: ProductProps }) {
  return (
    <section className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#E2E8F0] overflow-hidden">
      {/* Thick dark purple line */}
      <div className="h-[6px] w-full bg-[#3601FF]"></div>

      <div className="p-6 md:p-8">
        {/* Title & Badge */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-[#3601FF] font-[family-name:var(--font-oswald)] text-[32px] font-semibold leading-tight">
              {product.rank === 1 ? (
                <a
                  href={product.learnMoreUrl}
                  className="hover:underline text-[#3601FF]"
                >
                  {product.rank}. {product.name}
                </a>
              ) : (
                <>{product.rank}. {product.name}</>
              )}
            </h2>
            <div className="mt-1 text-[#4B4F58] font-[family-name:var(--font-arimo)] text-lg">
              By <a href={product.brandUrl} className="text-[#008BFF] hover:underline font-bold">{product.brand}</a>
            </div>
          </div>
          <div className="shrink-0 ml-4 relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image src={`/images/quality-reviewer/badge-${product.rank}.png`} alt={`Rank ${product.rank}`} fill className="object-contain" />
          </div>
        </div>

        {/* 3-Column Grid Table */}
        <div className="border border-[#CCCCCC] grid grid-cols-1 md:grid-cols-3 mt-8 mb-10">
          {/* Left: Image */}
          <div className="flex items-center justify-center p-6 md:p-8">
            <a href={product.learnMoreUrl} className="relative w-[250px] h-[250px] block cursor-pointer hover:opacity-90 transition-opacity">
              <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
            </a>
          </div>

          {/* Middle: Rating Circle */}
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#CCCCCC] p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-oswald)] text-[32px] font-semibold text-[#3A3A3A] mb-4 uppercase">RATING</h3>
            <AnimatedRatingCircle votes={product.votes} score={product.score} percentage={product.percentage} />
            <div className="mt-6 font-[family-name:var(--font-oswald)] text-[32px] text-[#3A3A3A] font-medium flex items-center justify-center gap-2">
              <span>{product.price}</span>
              {product.originalPrice && (
                <span className="text-[20px] text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Right: Grade Letter */}
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#CCCCCC] p-6 md:p-8">
            <div className="font-[family-name:var(--font-oswald)] text-[83px] font-medium text-[#3A3A3A] leading-none">
              {product.grade}
            </div>
            <div className="font-[family-name:var(--font-oswald)] text-[24px] font-medium text-[#4B4F58] mt-3">
              TOTAL GRADE
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mb-10 w-full">
          {product.bars.map((bar, idx) => (
            <AnimatedRatingBar key={idx} label={bar.label} score={bar.score} percentage={bar.percentage} />
          ))}
        </div>

        {/* Thin line */}
        <hr className="border-[#CCCCCC] mb-10" />

        {/* Split Content */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          {/* Pros & Cons */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-oswald)] text-[32px] font-semibold text-[#3A3A3A] mb-5 uppercase">Pros</h3>
              <ul className="flex flex-col gap-1">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4B4F58] font-[family-name:var(--font-arimo)] text-[18px]">
                    <svg className="shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#83D221" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-oswald)] text-[32px] font-semibold text-[#3A3A3A] mb-5 uppercase">Cons</h3>
              <ul className="flex flex-col gap-1">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4B4F58] font-[family-name:var(--font-arimo)] text-[18px]">
                    <svg className="shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea1045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6" />
                      <path d="M9 9l6 6" />
                    </svg>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block w-[1px] bg-[#CCCCCC] self-stretch"></div>

          {/* Review */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-[family-name:var(--font-oswald)] text-[32px] font-semibold text-[#3A3A3A] mb-5 uppercase">Review</h3>
            <div className="text-[15px] text-[#4B4F58] font-sans leading-[24.75px] space-y-5">
              {product.review}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <a href={product.learnMoreUrl} className="bg-[#008BFF] text-[#FFFFFF] font-bold text-xl py-4 px-16 rounded-[8px] hover:bg-blue-600 transition-colors">
            Learn More
          </a>
        </div>

        {/* Free Gifts Discovery Section (Rank 1 / Muuhu only) */}
        {product.rank === 1 && (
          <div className="mt-12 border-2 border-[#008BFF] bg-blue-50/40 rounded-[8px] p-6 md:p-8 relative overflow-hidden shadow-sm">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#008BFF] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <span className="text-base">💡</span> Editor&apos;s Tip
            </div>

            <h3 className="font-[family-name:var(--font-oswald)] text-[26px] md:text-[30px] font-bold text-[#3A3A3A] mb-3 leading-tight uppercase">
              Active Offer Found: £129 in{" "}
              <span className="text-[#008BFF] bg-blue-100 px-2 py-0.5 rounded inline-block">
                FREE GIFTS
              </span>
            </h3>

            <p className="text-[#4B4F58] font-[family-name:var(--font-arimo)] text-[16px] md:text-[18px] leading-relaxed mb-8">
              While researching, we found Muuhu is running a limited-time offer bundling these 3 premium accessories free with every hair dryer purchase.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {/* Gift 1: Premium Packaging */}
              <a
                href={product.learnMoreUrl}
                className="bg-white rounded-[8px] p-4 border border-[#CCCCCC] hover:border-[#008BFF] shadow-sm text-center transform hover:-translate-y-1 transition-all relative block group"
              >
                <div className="absolute -top-2.5 -right-2.5 bg-[#008BFF] text-white font-bold text-xs sm:text-sm px-3 py-1 rounded-full shadow-md z-20">
                  FREE
                </div>
                <div className="relative mb-3 rounded-md overflow-hidden bg-gray-50 border border-slate-100 aspect-square">
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-700 font-bold line-through z-10 bg-white/95 px-2.5 py-0.5 rounded-full text-xs shadow-sm whitespace-nowrap">
                    £35
                  </span>
                  <img
                    src="/img/hair/muuhu-luxury-case.webp"
                    alt="Premium Packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-[family-name:var(--font-oswald)] font-bold text-[#3A3A3A] text-base md:text-lg leading-tight uppercase">
                  Premium Packaging
                </p>
              </a>

              {/* Gift 2: Muuhu ScalpPro */}
              <a
                href={product.learnMoreUrl}
                className="bg-white rounded-[8px] p-4 border border-[#CCCCCC] hover:border-[#008BFF] shadow-sm text-center transform hover:-translate-y-1 transition-all relative block group"
              >
                <div className="absolute -top-2.5 -right-2.5 bg-[#008BFF] text-white font-bold text-xs sm:text-sm px-3 py-1 rounded-full shadow-md z-20">
                  FREE
                </div>
                <div className="relative mb-3 rounded-md overflow-hidden bg-gray-50 border border-slate-100 aspect-square">
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-700 font-bold line-through z-10 bg-white/95 px-2.5 py-0.5 rounded-full text-xs shadow-sm whitespace-nowrap">
                    £79
                  </span>
                  <img
                    src="/img/hair/muuhu-comb.webp"
                    alt="Muuhu ScalpPro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-[family-name:var(--font-oswald)] font-bold text-[#3A3A3A] text-base md:text-lg leading-tight uppercase">
                  Muuhu ScalpPro
                </p>
              </a>

              {/* Gift 3: Haircare E-Book */}
              <a
                href={product.learnMoreUrl}
                className="bg-white rounded-[8px] p-4 border border-[#CCCCCC] hover:border-[#008BFF] shadow-sm text-center transform hover:-translate-y-1 transition-all relative block group"
              >
                <div className="absolute -top-2.5 -right-2.5 bg-[#008BFF] text-white font-bold text-xs sm:text-sm px-3 py-1 rounded-full shadow-md z-20">
                  FREE
                </div>
                <div className="relative mb-3 rounded-md overflow-hidden bg-gray-50 border border-slate-100 aspect-square">
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-700 font-bold line-through z-10 bg-white/95 px-2.5 py-0.5 rounded-full text-xs shadow-sm whitespace-nowrap">
                    £15
                  </span>
                  <img
                    src="/img/hair/muuhu-expert-hair-ebook.webp"
                    alt="Haircare E-book"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-[family-name:var(--font-oswald)] font-bold text-[#3A3A3A] text-base md:text-lg leading-tight uppercase">
                  Haircare E-book
                </p>
              </a>
            </div>

            <div className="flex justify-center">
              <a
                href={product.learnMoreUrl}
                className="w-full sm:w-auto text-center bg-[#008BFF] hover:bg-blue-600 text-white font-[family-name:var(--font-oswald)] font-bold text-lg md:text-xl py-3.5 px-8 md:px-12 rounded-[8px] shadow-md transition-colors uppercase tracking-wider"
              >
                Check If Free Gifts Are Still Available &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
