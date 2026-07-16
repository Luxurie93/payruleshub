import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Work & Paycheck Calculators | PayRulesHub",
  description:
    "Calculate overtime, PTO, hourly-to-salary, take-home pay, and severance in seconds. No signup. Fast, free, and easy to use.",
  keywords:
    "overtime calculator, PTO calculator, salary calculator, paycheck calculator",
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PayRulesHub",
    url: "https://payruleshub.com",
    description: "Free work and paycheck calculators",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Free Work & Paycheck Calculators
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Calculate overtime, PTO, hourly-to-salary, take-home pay, and
            severance in seconds.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/tools/overtime-pay-calculator" className="btn-primary">
              Start with Overtime Calculator
            </a>
            <a
              href="/tools"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              View All Tools
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            No signup. Fast, free, and easy to use.
          </p>
        </div>
      </section>

      {/* Trust and process section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide">
              Built for paycheck questions
            </p>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-slate-900">
              What PayRulesHub helps you estimate
            </h2>
            <p className="text-slate-700 mb-4">
              PayRulesHub is a free calculator library for common work and payroll questions:
              how much overtime may be worth, how PTO accrues, what an hourly wage equals as
              a salary, how severance formulas work, and how gross pay can differ from take-home pay.
              The tools are designed for quick planning before you compare the estimate with a pay stub,
              offer letter, employer policy, or official agency guidance.
            </p>
            <p className="text-slate-700">
              We focus on transparent math. Each calculator explains the basic formula, common
              assumptions, and the situations where a real payroll result may be different, such as
              deductions, local taxes, benefit elections, state wage rules, or employer-specific policies.
            </p>
          </div>
          <div className="rounded-xl bg-blue-50 p-6 border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-900">Why users check us</h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              <li>No signup is required to run a calculator.</li>
              <li>Inputs stay in your browser for the calculator session.</li>
              <li>State guides link payroll math to practical wage questions.</li>
              <li>Every estimate is educational and should be verified before major decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="ad-placeholder h-24"></div>
      </div>

      {/* Featured tools */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Calculators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Overtime Pay Calculator",
              description:
                "Calculate regular and overtime pay with state-specific notes.",
              link: "/tools/overtime-pay-calculator",
            },
            {
              title: "PTO Accrual Calculator",
              description:
                "Estimate your paid time off accrual by pay period and year.",
              link: "/tools/pto-accrual-calculator",
            },
            {
              title: "Hourly to Salary Converter",
              description:
                "Convert hourly rate to annual, monthly, and weekly salary.",
              link: "/tools/hourly-to-salary-calculator",
            },
            {
              title: "Take-Home Pay Estimator",
              description: "Estimate net pay after federal and state taxes.",
              link: "/tools/take-home-pay-estimator",
            },
            {
              title: "Severance Pay Calculator",
              description: "Calculate expected severance based on tenure.",
              link: "/tools/severance-pay-calculator",
            },
            {
              title: "All Tools",
              description: "Browse the complete list of available calculators.",
              link: "/tools",
            },
          ].map((tool, i) => (
            <a
              key={i}
              href={tool.link}
              className="p-6 border rounded-lg hover:shadow-lg transition bg-white"
            >
              <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
              <div className="mt-4 text-blue-900 font-semibold text-sm">
                Open →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Ad slot */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="ad-placeholder h-24"></div>
      </div>

      {/* Popular guides */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Calculate Pay and Overtime",
                link: "/blog/calculate-pay-and-overtime",
              },
              {
                title: "How to Calculate Overtime Pay",
                link: "/blog/how-to-calculate-overtime-pay",
              },
              {
                title: "Overtime Rules by State",
                link: "/blog/overtime-rules-by-state",
              },
              {
                title: "Paycheck Calculators by State",
                link: "/paycheck-calculators-by-state",
              },
              {
                title: "State Payroll Laws & Paycheck Guides",
                link: "/state-payroll-laws",
              },
              {
                title: "How PTO Accrual Works",
                link: "/blog/pto-accrual-explained",
              },
              {
                title: "Biweekly vs Semimonthly Pay",
                link: "/blog/biweekly-vs-semimonthly-pay",
              },
            ].map((guide, i) => (
              <a
                key={i}
                href={guide.link}
                className="p-6 bg-white rounded-lg hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg text-primary mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm">Read the full guide →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="ad-placeholder h-24"></div>
      </div>

      {/* FAQ section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-bold text-lg mb-2">
              Are these calculators accurate?
            </h3>
            <p className="text-gray-700">
              Our calculators provide helpful estimates based on standard
              formulas. However, actual results may vary by employer, state,
              industry, and individual circumstances. Always verify with your HR
              or payroll department.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-bold text-lg mb-2">
              Do you store my personal information?
            </h3>
            <p className="text-gray-700">
              No. All calculations happen in your browser. We don't store,
              collect, or transmit your personal or financial data. See our{" "}
              <a href="/privacy" className="text-primary font-semibold">
                privacy policy
              </a>{" "}
              for details.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-bold text-lg mb-2">
              Is this professional tax advice?
            </h3>
            <p className="text-gray-700">
              No. Our tools are for informational purposes only. For tax,
              legal, or employment questions, consult a qualified professional.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="font-bold text-lg mb-2">
              Can I embed these calculators on my site?
            </h3>
            <p className="text-gray-700">
              Contact us for iframe or API access. Some tools may be available
              for embedding with attribution.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Review checklist
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Before relying on a paycheck estimate
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-blue-900">Check your pay period</h3>
              <p className="mt-2 text-sm text-slate-700">
                Weekly, biweekly, semimonthly, and monthly schedules can produce different
                per-check amounts even when the annual pay is the same.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">Confirm deductions</h3>
              <p className="mt-2 text-sm text-slate-700">
                Health insurance, retirement contributions, garnishments, and other deductions
                can change net pay beyond the calculator's simplified assumptions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">Verify state rules</h3>
              <p className="mt-2 text-sm text-slate-700">
                Overtime, final paycheck timing, and PTO payout rules vary. Use our state guides
                as a starting point, then confirm with official sources when money is at stake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to calculate?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Start with any calculator to get instant results.
          </p>
          <a
            href="/tools/overtime-pay-calculator"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Open Overtime Calculator
          </a>
        </div>
      </section>
    </>
  );
}
