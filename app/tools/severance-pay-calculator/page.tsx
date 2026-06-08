import { Metadata } from "next";
import SeveranceCalculator from "@/components/calculators/SeveranceCalculator";

export const metadata: Metadata = {
  title: "Severance Pay Calculator — Estimate Your Package | PayRulesHub",
  description:
    "Calculate your estimated severance pay based on years of service and weekly salary. Supports 1-week, 2-week, and monthly formulas. Free, instant, no signup required.",
  keywords:
    "severance pay calculator, severance calculator, severance package estimator, layoff pay calculator, weeks per year severance",
  openGraph: {
    title: "Severance Pay Calculator — Free Estimate | PayRulesHub",
    description: "Estimate your severance package based on tenure and salary.",
  },
  alternates: {
    canonical: "https://payruleshub.com/tools/severance-pay-calculator",
  },
};

const LAST_UPDATED = "June 2026";

export default function Page() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Severance Pay Calculator",
    description: "Free severance pay calculator — estimate your package by tenure and salary",
    url: "https://payruleshub.com/tools/severance-pay-calculator",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is severance pay required by law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not under federal law. Severance is required only if your employment contract, employee handbook, or the WARN Act mandates it. Most severance is discretionary and negotiable.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most common severance formula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One week of pay per year of service is the most common formula for hourly and salaried employees. Management and senior roles often use two weeks per year or one month per year formulas.",
        },
      },
      {
        "@type": "Question",
        name: "How is severance taxed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Severance is treated as ordinary income — the same as wages. Federal income tax, Social Security, and Medicare are all withheld. Your effective tax rate depends on your total income for the year.",
        },
      },
      {
        "@type": "Question",
        name: "Can I negotiate my severance package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — most packages are negotiable. Beyond the base cash amount, consider asking for an extended healthcare subsidy, vesting acceleration, outplacement services, or a positive written reference as part of the package.",
        },
      },
      {
        "@type": "Question",
        name: "What does the WARN Act require for severance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Worker Adjustment and Retraining Notification (WARN) Act requires employers with 100+ employees to give 60 days' advance notice of mass layoffs or plant closings. If they don't give notice, employees may be entitled to 60 days' pay and benefits.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Severance Pay Calculator
          </h1>
          <p className="text-gray-600 mb-3">
            Estimate your severance package based on years of service and weekly salary. Supports 1-week, 2-week, and monthly-per-year formulas.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>·</span>
            <a
              href="https://www.dol.gov/general/topic/wages/severancepay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              Source: U.S. DOL / Severance Pay
            </a>
            <span>·</span>
            <a
              href="https://www.dol.gov/agencies/eta/warn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              WARN Act Reference
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <SeveranceCalculator />

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Results are estimates based on the formula you select. Actual severance depends on your
                employment contract, company policy, state law, and negotiation. Severance is not required
                by federal law unless your contract or the WARN Act specifies it. Consult an employment
                attorney before signing any separation agreement.
              </p>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Related Calculators</h2>
              <div className="space-y-3">
                <a
                  href="/tools/take-home-pay-estimator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Take-Home Pay Estimator</strong>
                  <p className="text-sm text-gray-600">Estimate net pay after taxes</p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">Convert hourly rate to annual salary</p>
                </a>
                <a
                  href="/tools/overtime-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Overtime Pay Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate overtime compensation</p>
                </a>
                <a
                  href="/tools/pto-accrual-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>PTO Accrual Calculator</strong>
                  <p className="text-sm text-gray-600">See what PTO you've earned</p>
                </a>
              </div>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="faq-item">
                  <h3 className="font-semibold">Is severance pay required by law?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Not under federal law. Severance is required only if your employment contract,
                    employee handbook, or the WARN Act mandates it. Most severance is discretionary
                    and negotiable.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">What is the most common severance formula?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    One week of pay per year of service is the most common formula for hourly and
                    salaried employees. Management and senior roles often use two weeks per year or
                    one month per year formulas.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">How is severance taxed?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Severance is treated as ordinary income — the same as wages. Federal income tax,
                    Social Security, and Medicare are all withheld. Your effective tax rate depends
                    on your total income for the year. See our{" "}
                    <a href="/blog/how-to-estimate-take-home-pay-in-2026" className="text-teal-600 hover:underline">
                      take-home pay guide
                    </a>{" "}
                    for a tax estimate.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">Can I negotiate my severance package?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Yes — most packages are negotiable. Beyond the base cash amount, consider asking
                    for an extended healthcare subsidy, vesting acceleration, outplacement services,
                    or a positive written reference as part of the package.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">What does the WARN Act require for severance?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    The{" "}
                    <a
                      href="https://www.dol.gov/agencies/eta/warn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      WARN Act
                    </a>{" "}
                    requires employers with 100+ employees to give 60 days' advance notice of mass
                    layoffs or plant closings. If they don't give notice, employees may be entitled
                    to 60 days' pay and benefits as compensation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/severance-pay-guide" className="text-teal-700 hover:underline">→ Severance Pay Guide</a></li>
                <li><a href="/blog/final-paycheck-laws" className="text-teal-700 hover:underline">→ Final Paycheck Laws by State</a></li>
                <li><a href="/blog/how-to-estimate-take-home-pay-in-2026" className="text-teal-700 hover:underline">→ Take-Home Pay Guide 2026</a></li>
                <li><a href="/tools/take-home-pay-estimator" className="text-teal-700 hover:underline">→ Take-Home Pay Estimator</a></li>
                <li><a href="/tools/hourly-to-salary-calculator" className="text-teal-700 hover:underline">→ Hourly to Salary Calculator</a></li>
              </ul>
              <div className="mt-6 p-3 bg-blue-50 rounded text-xs text-blue-800">
                <strong>Legal note:</strong> Severance rules vary by contract and state. Consult an employment attorney before signing any separation agreement. Content current as of {LAST_UPDATED}.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 3)</div>
        </div>
      </div>
    </>
  );
}
