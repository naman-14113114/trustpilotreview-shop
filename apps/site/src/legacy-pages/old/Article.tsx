"use client";

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "@/data/old/articles";
import {
  EmeraldMasthead,
  ExpertReviewerCard,
  BuudyWinnerProductCard,
  DermatologistVerdictSection,
  CompetitorComparisonTable,
  StickyMobileCta,
  MaskFooter,
  EXPERT_PROFILE,
} from "@/features/mask-common/MaskAdvertorialCommon";
import {
  Calendar,
  User,
  Clock,
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
        badgeText="United Kingdom - 2026"
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
      <article className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16">
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

              {/* Mid-Article Highlight Card: Canonical Winner Card from Best Mask Page */}
              {index === 2 && (
                <div className="not-prose my-12">
                  <BuudyWinnerProductCard />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </article>

      {/* Canonical Bottom Sections: Dermatologist Video Verdict + Top 5 Comparison Table */}
      <main className="max-w-6xl mx-auto px-4 pb-16 font-sans">
        <DermatologistVerdictSection />
        <CompetitorComparisonTable />
      </main>

      <MaskFooter />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta />
    </div>
  );
}