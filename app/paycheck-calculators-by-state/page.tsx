import { Metadata } from "next";
import { statePayrollGuides } from "../data/statePayrollGuides";

export const metadata: Metadata = {
  title: "Paycheck Calculators by State | PayRulesHub",
  description:
    "Compare paycheck calculators and payroll guides by state for take-home pay, overtime, final paychecks, PTO payout, severance, and wage rules.",
  keywords:
    "paycheck calculator by state, state paycheck calculator, payroll laws by state, final paycheck calculator by state, PTO payout calculator by state",
  alternates: { canonical: "https://payruleshub.com/paycheck-calculators-by-state" },
};

const calculatorTypes = [
  {
    title: "Take-home pay",
    href: "/tools/take-home-pay-estimator",
    description:
      "Estimate net pay after federal withholding, FICA, state tax assumptions, and common deductions.",
  },
  {
    title: "Overtime pay",
    href: "/tools/overtime-pay-calculator",
    description:
      "Estimate time-and-a-half, double-time, and weekly overtime before checking state-specific rules.",
  },
  {
    title: "PTO accrual and payout",
    href: "/tools/pto-accrual-calculator",
    description:
      "Estimate accrued paid time off, then review whether your state or employer policy affects payout.",
  },
  {
    title: "Severance pay",
    href: "/tools/severance-pay-calculator",
    description:
      "Estimate severance using common salary-and-tenure formulas before reviewing your agreement.",
  },
];

export default function Page() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Paycheck calculators by state",
    itemListElement: statePayrollGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${guide.name} paycheck calculator and payroll law guide`,
      url: `https://payruleshub.com/states/${guide.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do paycheck calculator results differ by state?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State income tax, local tax, overtime rules, final paycheck timing, PTO payout rules, and wage deduction rules can all change the estimate. PayRulesHub starts with calculators, then points users to state-specific payroll guides and official resources.",
        },
      },
      {
        "@type": "Question",
        name: "Which states currently have PayRulesHub payroll law guides?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `PayRulesHub currently has state payroll hubs for ${statePayrollGuides.map((guide) => guide.name).join(", ")}. More state guides can be added as they receive state-specific law summaries, official sources, examples, and FAQs.`,
        },
      },
      {
        "@type": "Question",
        name: "Are PayRulesHub paycheck calculators legal or tax advice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. PayRulesHub provides educational estimates only. Users should verify important payroll, tax, HR, or legal decisions with official agencies or qualified professionals.",
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="mb-6 text-sm text-slate-600">
        <a className="font-semibold text-blue-900 hover:text-teal-700" href="/tools">Payroll tools</a>
        <span className="mx-2">/</span>
        <span>Paycheck calculators by state</span>
      </nav>

      <section className="rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 p-8 text-white shadow-lg">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-200">State paycheck calculator hub</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
          Paycheck Calculators by State
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-blue-100">
          Competitor paycheck tools often stop at tax withholding. PayRulesHub connects calculators with
          state-specific payroll rules for overtime, final paychecks, PTO payout, wage deductions, and official agency resources.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="rounded-lg bg-white px-5 py-3 font-bold text-blue-950 hover:bg-blue-50" href="/tools/take-home-pay-estimator">
            Start with take-home pay
          </a>
          <a className="rounded-lg border border-blue-200 px-5 py-3 font-bold text-white hover:bg-blue-900" href="/state-payroll-laws">
            Browse state payroll laws
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {calculatorTypes.map((type) => (
          <a key={type.href} href={type.href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md">
            <h2 className="text-lg font-bold text-blue-900">{type.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{type.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700">Open calculator →</span>
          </a>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">State paycheck calculator and payroll law guides</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Each state hub includes paycheck factors, overtime notes, final paycheck timing, PTO/vacation payout guidance,
          official resources, examples, and links to related calculators or deep-dive guides.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-slate-900 text-sm font-bold text-white md:grid-cols-4">
            <div className="p-4">State</div>
            <div className="p-4">Best starting calculator</div>
            <div className="p-4">State-specific issue</div>
            <div className="p-4">Guide</div>
          </div>
          {statePayrollGuides.map((guide) => (
            <div key={guide.slug} className="grid grid-cols-1 border-t border-slate-200 text-sm md:grid-cols-4">
              <div className="p-4 font-bold text-slate-900">{guide.name}</div>
              <div className="p-4 text-slate-700">
                {guide.name === "California" ? "Overtime + final paycheck" : guide.name === "Florida" || guide.name === "Texas" ? "Take-home pay + overtime" : "Final paycheck + take-home pay"}
              </div>
              <div className="p-4 text-slate-700">{guide.paycheckFactors[0]}</div>
              <div className="p-4">
                <a className="font-bold text-blue-900 hover:text-teal-700" href={`/states/${guide.slug}`}>
                  Open {guide.abbreviation} guide →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">How to use a state paycheck calculator</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
            <li>Start with gross pay: hourly rate, salary, pay period, hours worked, overtime hours, or PTO hours.</li>
            <li>Estimate the pay component: overtime, PTO accrual, severance, or take-home pay.</li>
            <li>Open your state guide to check final paycheck timing, PTO payout rules, state tax factors, and official resources.</li>
            <li>Save your estimate with pay stubs, time records, policy pages, and written payroll communication.</li>
          </ol>
        </div>
        <div className="rounded-xl bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">Why this hub helps SEO and users</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Searchers often look for a calculator and a rule at the same time: “California final paycheck calculator,”
            “Texas PTO payout calculator,” or “Massachusetts take-home pay calculator.” This hub gives Google and users
            a crawlable map from calculator intent to state-specific payroll guidance without creating thin doorway pages.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Paycheck calculator FAQ</h2>
        <div className="mt-5 space-y-5">
          <div>
            <h3 className="font-bold text-slate-900">Why do paycheck calculator results differ by state?</h3>
            <p className="mt-1 text-slate-700">State income tax, local tax, overtime rules, final paycheck timing, PTO payout rules, and deduction rules can all change the estimate.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Should I use a calculator or a state law guide first?</h3>
            <p className="mt-1 text-slate-700">Use the calculator to estimate dollars, then use the state guide to check deadlines, payout rules, and official agency links.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Is PayRulesHub a payroll provider?</h3>
            <p className="mt-1 text-slate-700">No. PayRulesHub is an educational calculator and payroll guide site, not a payroll provider, law firm, tax advisor, or HR consultant.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
