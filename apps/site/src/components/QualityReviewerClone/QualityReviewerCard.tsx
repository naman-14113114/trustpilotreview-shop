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
    <section className="my-16 bg-white">
      {/* Thick dark purple line */}
      <div className="h-[6px] w-full bg-[#3601FF] mb-6"></div>

      {/* Title & Badge */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-[#3601FF] font-[family-name:var(--font-oswald)] text-[32px] font-semibold leading-tight">
            {product.rank}. {product.name}
          </h2>
          <div className="mt-1 text-[#4B4F58] font-[family-name:var(--font-arimo)] text-lg">
            By <a href={product.brandUrl} className="text-[#008BFF] hover:underline font-bold">{product.brand}</a>
          </div>
        </div>
        <div className="shrink-0 ml-4 relative w-[60px] h-[60px] md:w-[75px] md:h-[75px]">
          <Image src={`/images/quality-reviewer/badge-${product.rank}.png`} alt={`Rank ${product.rank}`} fill className="object-contain" />
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="border border-[#EEEEEE] rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-8 mt-8 mb-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-[250px] h-[250px]">
            <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
          </div>
        </div>

        {/* Middle: Rating Circle */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
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
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center md:border-l border-[#EEEEEE] pt-8 md:pt-0">
          <div className="font-[family-name:var(--font-oswald)] text-[83px] font-medium text-[#3A3A3A] leading-none">
            {product.grade}
          </div>
          <div className="font-[family-name:var(--font-oswald)] text-[24px] font-medium text-[#4B4F58] mt-3">
            TOTAL GRADE
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mb-10 max-w-[850px] mx-auto px-4">
        {product.bars.map((bar, idx) => (
          <AnimatedRatingBar key={idx} label={bar.label} score={bar.score} percentage={bar.percentage} />
        ))}
      </div>

      {/* Thin line */}
      <hr className="border-[#EEEEEE] mb-10" />

      {/* Split Content */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        {/* Pros & Cons */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-oswald)] text-[32px] font-semibold text-[#3A3A3A] mb-5 uppercase">Pros</h3>
            <ul className="flex flex-col gap-4">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-4 text-[#4B4F58] font-[family-name:var(--font-arimo)] text-[18px]">
                  <svg className="shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="#83D221">
                    <circle cx="12" cy="12" r="10" fill="#83D221"/>
                    <path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FFF"/>
                  </svg>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-oswald)] text-[32px] font-semibold text-[#3A3A3A] mb-5 uppercase">Cons</h3>
            <ul className="flex flex-col gap-4">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-4 text-[#4B4F58] font-[family-name:var(--font-arimo)] text-[18px]">
                  <svg className="shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="#dc143c">
                    <circle cx="12" cy="12" r="10" fill="#dc143c"/>
                    <path d="M15.89 8.11C15.5 7.72 14.87 7.72 14.48 8.11L12 10.59 9.52 8.11C9.13 7.72 8.5 7.72 8.11 8.11C7.72 8.5 7.72 9.13 8.11 9.52L10.59 12 8.11 14.48C7.72 14.87 7.72 15.5 8.11 15.89C8.5 16.28 9.13 16.28 9.52 15.89L12 13.41 14.48 15.89C14.87 16.28 15.5 16.28 15.89 15.89C16.28 15.5 16.28 14.87 15.89 14.48L13.41 12 15.89 9.52C16.28 9.13 16.28 8.5 15.89 8.11Z" fill="#FFF"/>
                  </svg>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden lg:block w-[1px] bg-[#EEEEEE]"></div>

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
        <a href={product.learnMoreUrl} className="bg-[#008BFF] text-[#FFFFFF] font-bold text-xl py-4 px-16 rounded hover:bg-blue-600 transition-colors">
          Learn More
        </a>
      </div>
    </section>
  );
}
