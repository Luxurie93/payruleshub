import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Work & Paycheck Calculators | PayCalc",
  description:
    "Calculate overtime, PTO, hourly-to-salary, take-home pay, and severance in seconds. No signup. Fast, free, and easy to use.",
  keywords:
    "overtime calculator, PTO calculator, salary calculator, paycheck calculator",
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PayCalc",
    url: "https://paycalc.app",
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

      {/* Ad slot */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 1)
        </div>
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
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 2)
        </div>
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
                title: "How to Calculate Overtime Pay",
                link: "/blog/how-to-calculate-overtime-pay",
              },
              {
                title: "Overtime Rules by State",
                link: "/blog/overtime-rules-by-state",
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
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 3)
        </div>
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
