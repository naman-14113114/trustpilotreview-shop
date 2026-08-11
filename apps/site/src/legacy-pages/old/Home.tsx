import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const editorialSteps = [
  {
    number: '01',
    title: 'Set the scope',
    description:
      'We define the intended buyer, use case and decision criteria before forming an editorial view.'
  },
  {
    number: '02',
    title: 'Check published information',
    description:
      'We review relevant specifications, retailer details, pricing, warranty terms and return information.'
  },
  {
    number: '03',
    title: 'Explain the trade-offs',
    description:
      'Our guides separate published facts from editorial judgement and note when details may change.'
  }
];

const reviewChecks = [
  'Intended use and buyer fit',
  'Key specifications and limitations',
  'Price, warranty and return terms',
  'Support for material claims',
  'Availability and update dates'
];

export default function Home() {
  return (
    <div className="w-full bg-slate-50">
      <Helmet>
        <title>Trustpilot Review Shop | Practical UK Buyer Guides</title>
        <meta
          name="description"
          content="Practical UK buyer guides with clear criteria, transparent disclosures and useful questions to consider before making a purchase."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-slate-50 md:py-28 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-1 bg-emerald-400" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-300">
              UK buyer guidance
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-extrabold leading-[1.04] tracking-tight text-slate-50 md:text-6xl lg:text-7xl">
              Clearer choices start with better questions.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              We publish practical buying guides that help shoppers assess what matters before a purchase. Our pages focus on suitability, specifications, costs, warranty and return information, with commercial relationships clearly disclosed.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/disclosure"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-extrabold text-slate-950 transition-colors duration-200 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Read our disclosure <ArrowRight size={17} className="ml-2" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-7 py-3.5 text-sm font-bold text-slate-100 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Contact the editorial team
              </Link>
            </div>
          </div>

          <aside className="border-t border-slate-700 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="font-serif text-2xl font-bold text-slate-100">What we look for</h2>
            <ul className="mt-6 space-y-4">
              {reviewChecks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700">Our approach</p>
              <h2 className="mt-4 max-w-md font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                A useful guide should show its working.
              </h2>
            </div>

            <div className="border-t border-slate-300">
              {editorialSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-3 border-b border-slate-300 py-7 sm:grid-cols-[4rem_1fr] sm:gap-5 md:py-9"
                >
                  <span className="text-sm font-black tracking-[0.16em] text-emerald-700">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-4 py-20 text-emerald-50 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-200">Transparency</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-extrabold leading-tight md:text-5xl">
              Context before recommendation.
            </h2>
          </div>
          <div className="max-w-2xl text-base leading-7 text-emerald-50/80">
            <p>
              Buying guides are informational and cannot guarantee an individual result. Prices, offers and availability can change, so readers should confirm important details with the retailer before purchasing.
            </p>
            <p className="mt-5">
              Some pages may contain affiliate links. When they do, the relationship is disclosed, and using a link may result in compensation to this website at no additional cost to the reader.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold">
              <Link to="/disclosure" className="underline decoration-emerald-300/60 underline-offset-4 hover:decoration-emerald-200">
                Affiliate disclosure
              </Link>
              <Link to="/privacy" className="underline decoration-emerald-300/60 underline-offset-4 hover:decoration-emerald-200">
                Privacy policy
              </Link>
              <Link to="/terms" className="underline decoration-emerald-300/60 underline-offset-4 hover:decoration-emerald-200">
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
