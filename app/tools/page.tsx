import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Payroll & Paycheck Calculators",
  description:
    "Browse free calculators for overtime pay, PTO accrual, hourly-to-salary conversion, severance pay, and take-home pay estimates.",
  keywords:
    "payroll calculators, paycheck calculator, overtime calculator, PTO calculator, take home pay estimator, severance calculator",
  alternates: { canonical: "https://payruleshub.com/tools" },
};

const tools = [
  {
    href: "/tools/overtime-pay-calculator",
    title: "Overtime Pay Calculator",
    text: "Estimate time-and-a-half, double-time, weekly overtime, and state-specific overtime scenarios.",
  },
  {
    href: "/tools/pto-accrual-calculator",
    title: "PTO Accrual Calculator",
    text: "Estimate paid time off accrual by pay period, month, or year based on your policy.",
  },
  {
    href: "/tools/hourly-to-salary-calculator",
    title: "Hourly to Salary Calculator",
    text: "Convert hourly wages into annual, monthly, biweekly, weekly, and daily pay equivalents.",
  },
  {
    href: "/tools/take-home-pay-estimator",
    title: "Take-Home Pay Estimator",
    text: "Estimate net pay after federal taxes, FICA, state tax assumptions, and deductions.",
  },
  {
    href: "/tools/severance-pay-calculator",
    title: "Severance Pay Calculator",
    text: "Estimate severance using common formulas based on tenure, salary, and payout structure.",
  },
];

const guides = [
  ["/blog/how-to-calculate-overtime-pay", "How to Calculate Overtime Pay"],
  ["/blog/overtime-rules-by-state", "Overtime Rules by State"],
  ["/blog/pto-accrual-explained", "PTO Accrual Explained"],
  ["/blog/late-paycheck-laws-by-state", "Late Paycheck Laws by State"],
  ["/blog/how-to-estimate-take-home-pay-in-2026", "How to Estimate Take-Home Pay"],
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-10">
        <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide">
          Free payroll tools
        </p>
        <h1 className="text-4xl font-bold text-slate-900 mt-2">
          Free Payroll & Paycheck Calculators
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Use PayRulesHub to estimate common paycheck questions in your browser:
          overtime, PTO accrual, hourly-to-salary conversions, take-home pay, and
          severance. Calculator inputs stay on your device and results are meant
          for educational planning, not legal or tax advice.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-blue-900">{tool.title}</h2>
            <p className="mt-3 text-sm text-slate-700">{tool.text}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700">
              Open calculator →
            </span>
          </a>
        ))}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">How to use these calculators</h2>
          <ol className="mt-4 space-y-3 text-slate-700 list-decimal pl-5">
            <li>Choose the calculator that matches your question.</li>
            <li>Enter only the fields needed for the estimate.</li>
            <li>Review assumptions and examples on the calculator page.</li>
            <li>Verify important payroll, tax, or legal decisions with a qualified professional.</li>
          </ol>
        </div>
        <div className="rounded-xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-slate-900">Helpful payroll guides</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {guides.map(([href, label]) => (
              <li key={href}>
                <a className="font-semibold text-blue-800 hover:text-teal-700" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
        <h2 className="text-xl font-bold">Important disclaimer</h2>
        <p className="mt-2">
          PayRulesHub provides educational estimates only. It is not a substitute
          for advice from a payroll provider, accountant, tax professional, HR
          professional, or employment attorney. Rules vary by state, employer,
          industry, and individual facts.
        </p>
      </section>
    </div>
  );
}
