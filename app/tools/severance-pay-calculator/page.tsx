import { Metadata } from "next";
import TakeHomePayRulesHubulator from "@/components/calculators/TakeHomePayRulesHubulator";

export const metadata: Metadata = {
  title: "Take-Home Pay Estimator (Quick Net Pay Estimate)",
  description:
    "Estimate take-home pay from gross income with basic tax and deduction assumptions.",
  keywords: "take-home pay, net pay calculator, tax calculator",
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Take-Home Pay Estimator",
    description: "Estimate your net pay after taxes",
    url: "https://example.com/tools/take-home-pay-estimator",
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
          <div className="ad-placeholder h-24">
            Advertisement (Google AdSense Slot 1)
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <TakeHomePayRulesHubulator />

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Tools</h3>
              <div className="space-y-3">
                <a
                  href="/tools/overtime-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Overtime Pay Calculator</strong>
                  <p className="text-sm text-gray-600">
                    Calculate overtime pay
                  </p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">
                    Convert hourly to salary
                  </p>
                </a>
              </div>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24">
                Advertisement (Google AdSense Slot 2)
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">FAQ</h3>
              <div className="space-y-4">
                <div className="faq-item">
                  <h4 className="font-semibold">
                    Why is my actual take-home different?
                  </h4>
                  <p className="text-sm text-gray-700 mt-2">
                    This is a simplified estimate. Actual deductions depend on
                    W-4 withholding adjustments and state-specific rules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog/how-to-estimate-take-home-pay-in-2026">
                    → Take-Home Pay Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="ad-placeholder h-24">
            Advertisement (Google AdSense Slot 3)
          </div>
        </div>
      </div>
    </>
  );
}
