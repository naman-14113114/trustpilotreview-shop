import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { articles } from '@/data/old/articles';
import { hairImages } from '@/data/hair';
import { hairGuideGroups, hairGuides, type HairGuideSlug } from '@/data/hairGuides';
import { groundingGuideGroups } from '@/data/groundingGuides';
import { buudyEditorialHomeCards } from '@/data/buudyEditorialPages';
import { Calendar, ChevronRight } from 'lucide-react';

function hairGuideImage(slug: HairGuideSlug) {
  if (slug === 'dyson-vs-shark-vs-muuhu-uk') return hairImages.threeWay;
  if (slug.includes('dyson')) return hairImages.vsDyson;
  if (slug.includes('shark')) return hairImages.vsShark;
  if (slug.includes('ghd')) return hairImages.vsGhd;
  return hairImages.topFive;
}

function hairCardsForGroup(groupTitle: string, guides: HairGuideSlug[]) {
  const cards = guides.map((slug) => {
    const guide = hairGuides[slug];
    return {
      href: `/${slug}`,
      code: guide.cardCode,
      title: guide.cardTitle,
      description: guide.cardDescription,
      image: hairGuideImage(slug)
    };
  });

  if (groupTitle !== 'Hair Type Guides') return cards;

  return [
    {
      href: '/best-hair-dryer-uk-2026',
      code: 'TOP 5',
      title: 'Best Hair Dryer UK 2026',
      description: "Compare Muuhu, Dyson Supersonic Nural, Cloud Nine, Shark SpeedStyle Pro and ghd for drying speed, heat protection, attachments and value.",
      image: hairImages.topFive
    },
    ...cards
  ];
}

export default function Home() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="w-full">
      <Helmet>
        <title>Trustpilot Review Shop | LED Face Mask Reviews & Buyer Guides</title>
        <meta name="description" content="Honest product reviews and buyer guides for LED face masks and light therapy devices available in the UK. Compare features, prices, and real user experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-16 pb-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://img.thesitebase.net/10677/10677322/themes/177107744580dd01d13d.png')",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase mb-6">Featured Article</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-serif">
              {featured.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {featured.excerpt}
            </p>
            <Link 
              to={`/blog/${featured.slug}`}
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:scale-105 transition-transform duration-300"
            >
              Read Full Article <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="flex-1 hidden md:block">
             <img src={featured.image} alt={featured.title} className="rounded-2xl shadow-2xl border border-slate-700/50" />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-3xl font-bold text-slate-900 font-serif">Latest Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link key={article.id} to={`/blog/${article.slug}`} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative border-b border-slate-100">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                  <Calendar size={14} /> {article.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
                  Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparisons & Guides Section */}
      <section className="bg-slate-100 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase mb-4">Expert Reviews</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Comparisons & Guides</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">In-depth head-to-head comparisons and expert guides to help you choose the right LED face mask for your skin.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buudyEditorialHomeCards.map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link} 
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative border-b border-slate-100">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    card.badge === 'Top 5' ? 'bg-emerald-500 text-white' :
                    'bg-slate-800 text-white'
                  }`}>
                    {card.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {card.description}
                  </p>
                  <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
                    Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grounding Sheets Guide Section */}
      <section className="bg-slate-100 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase mb-4">Sleep &amp; Wellness Guide</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Grounding Sheets Buying Guides</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">US rankings, comparisons and practical guides covering fit, materials, setup, care and complete bundle value.</p>
          </div>

          <div className="space-y-14">
            {groundingGuideGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-7 border-b border-slate-300 pb-4">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">{group.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">{group.description}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.pages.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-52 overflow-hidden border-b border-slate-100 bg-slate-50">
                        <img
                          src={page.image}
                          alt={page.title}
                          loading="lazy"
                          className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">{page.code}</div>
                      </div>
                      <div className="flex flex-grow flex-col p-6">
                        <h4 className="mb-3 font-serif text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-emerald-600 md:text-2xl">{page.title}</h4>
                        <p className="mb-6 text-sm leading-relaxed text-slate-600">{page.description}</p>
                        <div className="mt-auto flex items-center text-sm font-bold text-emerald-600">
                          Read Guide <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Dryer Buying Guides Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase mb-4">Hair Dryer Guides</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Hair Dryer Buying Guides</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">UK hair dryer reviews and brand comparisons for shoppers comparing speed, styling range, heat control, attachments and value.</p>
          </div>

          <div className="space-y-12">
            {hairGuideGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-serif">{group.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {hairCardsForGroup(group.title, group.guides).map((card) => {
                    return (
                      <Link
                        key={card.href}
                        to={card.href}
                        className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="h-48 overflow-hidden relative border-b border-slate-100 bg-slate-50">
                          <img src={card.image} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-emerald-500 text-white">
                            {card.code}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors leading-tight">
                            {card.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {card.description}
                          </p>
                          <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
                            Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
