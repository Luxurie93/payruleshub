import { Metadata } from "next";
import { statePayrollGuides } from "../data/statePayrollGuides";

export const metadata: Metadata = {
  title: "State Payroll Laws & Paycheck Guides",
  description:
    "Browse PayRulesHub's state payroll law guides for final paychecks, PTO payout, overtime, late wages, and take-home pay estimates.",
  alternates: { canonical: "https://payruleshub.com/state-payroll-laws" },
};

const legacyGuides = [
  ["California", [
    ["/blog/california-final-paycheck-calculator", "California Final Paycheck Calculator"],
    ["/blog/california-overtime-calculator", "California Overtime Calculator"],
    ["/blog/california-pto-payout-calculator", "California PTO Payout Calculator"],
  ]],
  ["New York", [
    ["/blog/new-york-final-paycheck-calculator", "New York Final Paycheck Calculator"],
    ["/blog/new-york-pto-payout-calculator", "New York PTO Payout Calculator"],
    ["/blog/new-york-take-home-pay-calculator", "New York Take-Home Pay Calculator"],
  ]],
  ["Florida", [
    ["/blog/florida-final-paycheck-calculator", "Florida Final Paycheck Calculator"],
    ["/blog/florida-pto-payout-calculator", "Florida PTO Payout Calculator"],
    ["/blog/florida-take-home-pay-calculator", "Florida Take-Home Pay Calculator"],
  ]],
  ["Texas", [
    ["/blog/texas-overtime-calculator", "Texas Overtime Calculator"],
    ["/blog/texas-pto-payout-calculator", "Texas PTO Payout Calculator"],
  ]],
  ["Illinois", [
    ["/blog/illinois-final-paycheck-calculator", "Illinois Final Paycheck Calculator"],
  ]],
  ["Pennsylvania", [
    ["/blog/pennsylvania-take-home-pay-calculator", "Pennsylvania Take-Home Pay Calculator"],
  ]],
  ["Massachusetts", [
    ["/blog/massachusetts-final-paycheck-calculator", "Massachusetts Final Paycheck Calculator"],
    ["/blog/massachusetts-overtime-calculator", "Massachusetts Overtime Calculator"],
    ["/blog/massachusetts-pto-payout-calculator", "Massachusetts PTO Payout Calculator"],
    ["/blog/massachusetts-take-home-pay-calculator", "Massachusetts Take-Home Pay Calculator"],
  ]],
  ["Rhode Island", [
    ["/blog/rhode-island-final-paycheck-calculator", "Rhode Island Final Paycheck Calculator"],
    ["/blog/rhode-island-overtime-calculator", "Rhode Island Overtime Calculator"],
    ["/blog/rhode-island-pto-payout-calculator", "Rhode Island PTO Payout Calculator"],
    ["/blog/rhode-island-take-home-pay-calculator", "Rhode Island Take-Home Pay Calculator"],
  ]],
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-10">
        <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide">State payroll resources</p>
        <h1 className="text-4xl font-bold text-slate-900">State Payroll Laws & Paycheck Guides</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Payroll rules can change by state. Use this hub to find PayRulesHub guides on final paycheck
          timing, PTO payout, overtime, late wages, and take-home pay estimates. These resources are
          educational starting points and should be verified with official state agencies or qualified professionals.
        </p>
      </section>

      <section className="mb-10 rounded-xl bg-blue-50 p-6">
        <h2 className="text-2xl font-bold text-slate-900">New state payroll law hubs</h2>
        <p className="mt-2 text-slate-700">
          Start with a state hub for high-level payroll rules, official agency links, calculators, final paycheck timing, PTO/vacation notes, and related guides.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statePayrollGuides.map((guide) => (
            <a key={guide.slug} className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md" href={`/states/${guide.slug}`}>
              <h3 className="font-bold text-blue-900">{guide.name}</h3>
              <p className="mt-1 text-sm text-slate-600">Overtime, final pay, PTO, taxes, and calculators →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Calculator-first searchers</p>
        <h2 className="text-2xl font-bold text-slate-900">Paycheck calculators by state</h2>
        <p className="mt-2 text-slate-700">
          If you are starting with a dollar estimate instead of a legal question, use the state calculator hub to connect
          take-home pay, overtime, PTO, severance, and final paycheck tools with each available state guide.
        </p>
        <a className="mt-4 inline-block font-semibold text-blue-800 hover:text-teal-700" href="/paycheck-calculators-by-state">
          Open Paycheck Calculators by State →
        </a>
      </section>

      <section className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">How to use this hub</p>
        <h2 className="text-2xl font-bold text-slate-900">Start broad, then verify the state-specific detail</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-blue-900">1. Identify the pay issue</h3>
            <p className="mt-2 text-sm text-slate-700">
              Decide whether the question is about overtime, final wages, PTO or vacation payout, late wages,
              deductions, taxes, or a general paycheck estimate. That determines which guide and calculator to use first.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900">2. Check the state context</h3>
            <p className="mt-2 text-sm text-slate-700">
              State wage rules can turn on employment status, industry, separation type, written policy, or local ordinance.
              Read the state guide notes before treating a number as final.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900">3. Compare with official sources</h3>
            <p className="mt-2 text-sm text-slate-700">
              Use PayRulesHub as an educational starting point, then confirm deadlines and legal rights with the relevant
              state labor agency, the U.S. Department of Labor, payroll records, or a qualified professional.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-xl bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Popular nationwide guide</h2>
        <p className="mt-2 text-slate-700">
          If your paycheck is late, start with our state-by-state overview before checking your state's agency rules.
        </p>
        <a className="mt-4 inline-block font-semibold text-blue-800 hover:text-teal-700" href="/blog/late-paycheck-laws-by-state">
          Late Paycheck Laws by State →
        </a>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold text-slate-900">Detailed calculator and article guides</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {legacyGuides.map(([state, guides]) => (
            <div key={state as string} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900">{state as string}</h3>
              <ul className="mt-4 space-y-3">
                {(guides as string[][]).map(([href, label]) => (
                  <li key={href}>
                    <a className="font-semibold text-slate-800 hover:text-teal-700" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
        <h2 className="text-xl font-bold">Important disclaimer</h2>
        <p className="mt-2">
          State employment and wage laws can depend on facts such as employee classification, industry,
          employer size, collective bargaining agreements, and local ordinances. PayRulesHub is educational
          only and does not provide legal, tax, payroll, HR, or financial advice.
        </p>
      </section>
    </div>
  );
}
