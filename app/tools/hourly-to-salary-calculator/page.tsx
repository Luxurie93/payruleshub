import { Metadata } from "next";
import HourlyToSalaryCalculator from "@/components/calculators/HourlyToSalaryCalculator";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator (Annual, Monthly, Biweekly)",
  description:
    "Convert hourly wage to salary instantly. Includes annual, monthly, biweekly, and weekly estimates.",
  keywords: "salary calculator, hourly to salary, wage conversion",
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hourly to Salary Calculator",
    description: "Convert hourly wage to annual salary",
    url: "https://example.com/tools/hourly-to-salary-calculator",
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
            <HourlyToSalaryCalculator />

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
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
                  href="/tools/take-home-pay-estimator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Take-Home Pay Estimator</strong>
                  <p className="text-sm text-gray-600">
                    Estimate net pay
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
                    How do I calculate annual salary from hourly?
                  </h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Multiply hourly rate × hours per week × 52 weeks. Adjust for
                    vacation and unpaid time off.
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
                  <a href="/blog/biweekly-vs-semimonthly-pay">
                    → Biweekly vs Semimonthly
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
