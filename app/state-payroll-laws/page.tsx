import { Metadata } from "next";

export const metadata: Metadata = {
  title: "State Payroll Laws & Paycheck Guides",
  description:
    "Browse PayRulesHub's state payroll law guides for final paychecks, PTO payout, overtime, late wages, and take-home pay estimates.",
  alternates: { canonical: "https://payruleshub.com/state-payroll-laws" },
};

const stateGuides = [
  ["California", [
    ["/blog/california-final-paycheck-calculator", "California Final Paycheck Calculator"],
    ["/blog/california-overtime-calculator", "California Overtime Calculator"],
    ["/blog/california-pto-payout-calculator", "California PTO Payout Calculator"],
  ]],
  ["Texas", [
    ["/blog/texas-overtime-calculator", "Texas Overtime Calculator"],
    ["/blog/texas-pto-payout-calculator", "Texas PTO Payout Calculator"],
  ]],
  ["Massachusetts", [
    ["/blog/massachusetts-take-home-pay-calculator", "Massachusetts Take-Home Pay Calculator"],
  ]],
  ["Rhode Island", [
    ["/blog/rhode-island-take-home-pay-calculator", "Rhode Island Take-Home Pay Calculator"],
  ]],
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
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
        <h2 className="text-2xl font-bold text-slate-900">Popular nationwide guide</h2>
        <p className="mt-2 text-slate-700">
          If your paycheck is late, start with our state-by-state overview before checking your state's agency rules.
        </p>
        <a className="mt-4 inline-block font-semibold text-blue-800 hover:text-teal-700" href="/blog/late-paycheck-laws-by-state">
          Late Paycheck Laws by State →
        </a>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {stateGuides.map(([state, guides]) => (
          <div key={state as string} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900">{state as string}</h2>
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
      </section>

      <section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
        <h2 className="text-xl font-bold">Important disclaimer</h2>
        <p className="mt-2">
          State employment and wage laws can depend on facts such as employee classification, industry,
          employer size, collective bargaining agreements, and local ordinances. PayRulesHub is educational
          only and does not provide legal, tax, payroll, or HR advice.
        </p>
      </section>
    </div>
  );
}
