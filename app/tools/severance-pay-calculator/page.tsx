import { Metadata } from "next";
import SeveranceCalculator from "@/components/calculators/SeveranceCalculator";

export const metadata: Metadata = {
  title: "Severance Pay Calculator — Estimate Your Package | PayRulesHub",
  description:
    "Calculate your estimated severance pay based on years of service and weekly salary. Supports 1-week, 2-week, and monthly formulas. Free, instant, no signup required.",
  openGraph: {
    title: "Severance Pay Calculator",
    description: "Estimate your severance package based on tenure and salary.",
  },
};

export default function Page() {
  const schemaData = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
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

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a
                  href="/tools"
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
              </div>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="faq-item">
                  <h4 className="font-semibold">Is severance pay required by law?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Not under federal law. Severance is required only if your employment contract,
                    employee handbook, or the WARN Act mandates it. Most severance is discretionary
                    and negotiable.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">What is the most common severance formula?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    One week of pay per year of service is the most common formula for hourly and
                    salaried employees. Management and senior roles often use two weeks per year or
                    one month per year formulas.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">How is severance taxed?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Severance is treated as ordinary income — the same as wages. Federal income tax,
                    Social Security, and Medicare are all withheld. Your effective tax rate depends
                    on your total income for the year.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Can I negotiate my severance package?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Yes — most packages are negotiable. Beyond the base cash amount, consider asking
                    for an extended healthcare subsidy, vesting acceleration, outplacement services,
                    or a positive written reference as part of the package.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/severance-pay-guide">→ Severance Pay Guide</a></li>
                <li><a href="/blog/how-to-estimate-take-home-pay-in-2026">→ Take-Home Pay Guide</a></li>
              </ul>
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
