import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Payroll & Pay Calculators | PayRulesHub",
  description:
    "Free online pay calculators: overtime, PTO accrual, hourly-to-salary, take-home pay, and severance. No signup required. Results in seconds.",
  keywords:
    "payroll calculators, overtime calculator, pto calculator, salary calculator, take-home pay calculator, severance calculator",
  alternates: {
    canonical: "https://payruleshub.com/tools",
  },
};

const tools = [
  {
    href: "/tools/overtime-pay-calculator",
    title: "Overtime Pay Calculator",
    description:
      "Calculate regular pay, overtime pay, and weekly total for any hourly rate. Includes state-specific rules for CA, NY, TX, and more.",
    badge: "Most popular",
  },
  {
    href: "/tools/pto-accrual-calculator",
    title: "PTO Accrual Calculator",
    description:
      "Find out how much paid time off you earn per pay period, per month, and per year — for biweekly, semimonthly, or monthly schedules.",
  },
  {
    href: "/tools/hourly-to-salary-calculator",
    title: "Hourly to Salary Calculator",
    description:
      "Convert any hourly wage to annual, monthly, biweekly, and weekly salary equivalents. Adjust for part-time hours or unpaid weeks.",
  },
  {
    href: "/tools/take-home-pay-estimator",
    title: "Take-Home Pay Estimator",
    description:
      "Estimate net pay from gross income after federal tax, state tax, Social Security, and Medicare. Auto-fills state tax rates for all 50 states.",
  },
  {
    href: "/tools/severance-pay-calculator",
    title: "Severance Pay Calculator",
    description:
      "Estimate your severance package using 1-week, 2-week, or monthly per-year formulas based on your years of service and salary.",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">
        Free Payroll &amp; Pay Calculators
      </h1>
      <p className="text-gray-600 mb-10">
        All calculators run entirely in your browser — no signup, no data storage, no cost.
      </p>

      <div className="space-y-4">
        {tools.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            className="flex items-start justify-between p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-teal-400 transition group"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition">
                  {tool.title}
                </h2>
                {tool.badge && (
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium">
                    {tool.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
            <span className="ml-4 mt-1 text-teal-600 text-lg font-bold shrink-0">→</span>
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-base font-bold mb-3 text-slate-800">Related Guides</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="/blog/how-to-calculate-overtime-pay" className="text-teal-700 hover:underline">→ How to Calculate Overtime Pay</a></li>
          <li><a href="/blog/overtime-rules-by-state" className="text-teal-700 hover:underline">→ Overtime Rules by State</a></li>
          <li><a href="/blog/pto-accrual-explained" className="text-teal-700 hover:underline">→ How PTO Accrual Works</a></li>
          <li><a href="/blog/biweekly-vs-semimonthly-pay" className="text-teal-700 hover:underline">→ Biweekly vs Semimonthly Pay</a></li>
          <li><a href="/blog/severance-pay-guide" className="text-teal-700 hover:underline">→ Severance Pay Guide</a></li>
          <li><a href="/blog/how-to-estimate-take-home-pay-in-2026" className="text-teal-700 hover:underline">→ Take-Home Pay Guide 2026</a></li>
        </ul>
      </div>
    </div>
  );
}
