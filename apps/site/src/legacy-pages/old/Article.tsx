"use client";

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "@/data/old/articles";
import {
  EmeraldMasthead,
  ExpertReviewerCard,
  FreeGiftsBox,
  DermatologistVerdictSection,
  CompetitorComparisonTable,
  StickyMobileCta,
  MaskFooter,
  BUUDY_7_COLOR_DOTS,
  BUUDY_OFFICIAL_URL,
  CTAButton,
  EXPERT_PROFILE,
} from "@/features/mask-common/MaskAdvertorialCommon";
import { GreenStarRating } from "@/components/GreenStarRating";
import {
  Calendar,
  User,
  Clock,
  Sparkles,
  Award,
  Check,
  BookOpen,
} from "lucide-react";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.seoDescription} />
        <meta name="keywords" content={article.seoKeywords} />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
      </Helmet>

      {/* Emerald Top Header & Market Masthead */}
      <EmeraldMasthead
        title={article.title}
        subtitle={article.excerpt}
        badgeText="United Kingdom - 2026"
        alertBadge="CLINICAL EDITORIAL"
      />

      {/* Expert Reviewer Credential Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of clinical dermatology experience,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            evaluated this clinical phototherapy guide according to UK MHRA, CE, and NHS dermatology standards.
          </p>
        }
      />

      {/* Article Hero Banner */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-5">
            <BookOpen size={14} className="text-emerald-600" />
            <span>UK Clinical Guide · 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-serif">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <User size={16} className="text-emerald-600" />
              <span className="font-bold text-slate-800">{article.author}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <span>{article.date}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-slate-400" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Featured Article Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200/80 bg-slate-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="inline-block bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                Verified Medical-Grade Phototherapy Analysis
              </span>
            </div>
          </div>

          {/* Lead Excerpt */}
          <div className="bg-emerald-50/70 border-l-4 border-emerald-500 rounded-r-2xl p-6 text-left my-8">
            <p className="text-lg sm:text-xl font-serif text-slate-800 italic leading-relaxed">
              "{article.excerpt}"
            </p>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          {article.content.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
                {paragraph}
              </p>

              {/* Mid-Article Highlight Card: Our #1 Rated Buudy Mask with £128 Free Gifts */}
              {index === 2 && (
                <div className="my-12 rounded-3xl border-2 border-emerald-500 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-xl relative overflow-hidden not-prose">
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40 px-3 py-1 text-xs font-black uppercase tracking-wider shadow-sm">
                      <Sparkles size={13} className="text-amber-300" />
                      BIGGEST BLACK FRIDAY SALE
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      <Award size={14} className="text-emerald-700" />
                      #1 EDITOR'S CHOICE OVERALL
                    </span>
                  </div>

                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8 items-center">
                    <div className="relative mx-auto max-w-[280px]">
                      <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-white p-3 shadow-md">
                        <img
                          src="/img/57-w.webp"
                          alt="Buudy 7 Colour LED Face and Neck Mask"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <span className="text-[11px] font-semibold text-slate-500">
                          192 Medical LEDs · Full Face & Neck
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif leading-tight mb-2">
                        Buudy 7 Colour LED Mask
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <GreenStarRating rating={4.9} />
                        <span className="text-sm font-bold text-slate-800">4.9 / 5</span>
                        <span className="text-xs text-slate-500 font-medium">(4,277+ UK reviews)</span>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-3xl sm:text-4xl font-black text-slate-950">£179</span>
                        <span className="text-lg text-slate-400 line-through">£449</span>
                        <span className="rounded-full bg-emerald-600 text-white px-2.5 py-0.5 text-xs font-black uppercase">
                          SAVE 60%
                        </span>
                      </div>

                      {/* 8 Color Dots */}
                      <div className="mb-5">
                        <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
                          All 7 Visible Wavelengths + 830nm Near-Infrared:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {BUUDY_7_COLOR_DOTS.map((dot) => (
                            <span
                              key={dot.name}
                              className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-[11px] font-bold text-slate-700"
                            >
                              <span
                                className="w-2.5 h-2.5 rounded-full inline-block shadow-sm"
                                style={{ backgroundColor: dot.bg, border: dot.border ? "1px solid #cbd5e1" : "none" }}
                              />
                              {dot.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Pros */}
                      <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                        <li className="flex items-start gap-2">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Integrated Neck Panel:</strong> Covers face and neck in one wearable without expensive £300+ add-ons.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Cordless & Rechargeable:</strong> Up to 12 hands-free treatments per single charge.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>90-Day Money-Back Guarantee:</strong> 100% risk-free home clinical trial.</span>
                        </li>
                      </ul>

                      {/* £128 Free Gifts Box */}
                      <FreeGiftsBox />

                      <div className="mt-6">
                        <CTAButton
                          href={BUUDY_OFFICIAL_URL}
                          text="CHECK AVAILABILITY & CLAIM GIFTS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </article>

      {/* Dermatologist Verdict Section with HTML5 Video */}
      <DermatologistVerdictSection />

      {/* Full 5-Mask Comparison Table */}
      <CompetitorComparisonTable />

      {/* Sticky Mobile CTA & Footer */}
      <StickyMobileCta />
      <MaskFooter />
    </div>
  );
}