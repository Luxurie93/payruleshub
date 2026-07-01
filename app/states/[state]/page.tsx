import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStatePayrollGuide, statePayrollGuides } from "../../data/statePayrollGuides";

export const dynamic = "force-static";

export function generateStaticParams() {
  return statePayrollGuides.map((guide) => ({ state: guide.slug }));
}

type StatePageParams = Promise<{ state: string }>;

export async function generateMetadata({ params }: { params: StatePageParams }): Promise<Metadata> {
  const { state } = await params;
  const guide = getStatePayrollGuide(state);
  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `https://payruleshub.com/states/${guide.slug}` },
  };
}

export default async function StatePayrollPage({ params }: { params: StatePageParams }) {
  const { state } = await params;
  const guide = getStatePayrollGuide(state);
  if (!guide) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: { "@type": "Organization", name: "PayRulesHub" },
    publisher: { "@type": "Organization", name: "PayRulesHub" },
    mainEntityOfPage: `https://payruleshub.com/states/${guide.slug}`,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <nav className="mb-6 text-sm text-slate-600">
        <a className="font-semibold text-blue-900 hover:text-teal-700" href="/state-payroll-laws">State Payroll Laws</a>
        <span className="mx-2">/</span>
        <span>{guide.name}</span>
      </nav>

      <section className="rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 p-8 text-white shadow-lg">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-200">{guide.abbreviation} payroll guide</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{guide.title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-blue-100">{guide.heroSummary}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="rounded-lg bg-white px-5 py-3 font-bold text-blue-950 hover:bg-blue-50" href="/tools/overtime-pay-calculator">
            Calculate overtime
          </a>
          <a className="rounded-lg border border-blue-200 px-5 py-3 font-bold text-white hover:bg-blue-900" href="/tools/take-home-pay-estimator">
            Estimate take-home pay
          </a>
        </div>
      </section>

      <div className="my-8">
        <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <main className="lg:col-span-2 space-y-8">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Key {guide.name} payroll rules to check</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {guide.paycheckFactors.map((factor) => (
                <div key={factor} className="rounded-lg bg-slate-50 p-4 text-slate-700">
                  {factor}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{guide.name} overtime rules</h2>
            <p className="mt-3 text-slate-700 leading-7">{guide.overtimeRule}</p>
            <p className="mt-4 text-slate-700 leading-7">{guide.exampleScenario}</p>
            <a className="mt-4 inline-block font-bold text-blue-900 hover:text-teal-700" href="/tools/overtime-pay-calculator">
              Open the Overtime Pay Calculator →
            </a>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{guide.name} final paycheck timing</h2>
            <p className="mt-3 text-slate-700 leading-7">{guide.finalPayRule}</p>
            <div className="mt-5 rounded-lg bg-amber-50 p-4 text-sm text-amber-950">
              <strong>Tip:</strong> Save pay stubs, timecards, commission plans, PTO balances, handbook pages, resignation or termination documents, and any payroll emails before contacting HR or an agency.
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{guide.name} PTO and vacation payout</h2>
            <p className="mt-3 text-slate-700 leading-7">{guide.ptoRule}</p>
            <a className="mt-4 inline-block font-bold text-blue-900 hover:text-teal-700" href="/tools/pto-accrual-calculator">
              Estimate accrued PTO →
            </a>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Official {guide.name} payroll resources</h2>
            <p className="mt-3 text-slate-700">
              Use PayRulesHub as a worksheet, then verify the current rule with official agencies before making a payroll, legal, or tax decision.
            </p>
            <ul className="mt-4 space-y-3">
              {guide.officialResources.map((resource) => (
                <li key={resource.href}>
                  <a className="font-semibold text-blue-900 hover:text-teal-700" href={resource.href} rel="noopener noreferrer" target="_blank">
                    {resource.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{guide.name} payroll FAQ</h2>
            <div className="mt-4 space-y-5">
              {guide.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-1 text-slate-700 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-slate-900">{guide.name} calculators</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="font-semibold text-blue-900 hover:text-teal-700" href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></li>
              <li><a className="font-semibold text-blue-900 hover:text-teal-700" href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a></li>
              <li><a className="font-semibold text-blue-900 hover:text-teal-700" href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>
              <li><a className="font-semibold text-blue-900 hover:text-teal-700" href="/tools/hourly-to-salary-calculator">Hourly to Salary Calculator</a></li>
            </ul>
            <hr className="my-5" />
            <h3 className="font-bold text-slate-900">Related {guide.name} guides</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {guide.relatedGuides.map((related) => (
                <li key={related.href}>
                  <a className="font-semibold text-blue-900 hover:text-teal-700" href={related.href}>{related.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
            <h2 className="font-bold">Educational only</h2>
            <p className="mt-2">PayRulesHub is not a law firm, payroll provider, tax advisor, or HR consultant. Rules can change and exceptions can apply.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
