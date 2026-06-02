import { Metadata } from "next";
import PTOCalculator from "@/components/calculators/PTOCalculator";

export const metadata: Metadata = {
  title: "PTO Accrual Calculator for Hourly and Salaried Employees",
  description:
    "Estimate PTO accrual by pay period, monthly, or yearly schedule. Free and easy PTO calculator.",
  keywords: "pto calculator, paid time off, accrual calculator",
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PTO Accrual Calculator",
    description: "Free PTO accrual calculator for employees",
    url: "https://example.com/tools/pto-accrual-calculator",
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
            <PTOCalculator />

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a
                  href="/tools/overtime-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Overtime Pay Calculator</strong>
                  <p className="text-sm text-gray-600">
                    Calculate overtime compensation
                  </p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">
                    Convert hourly wage to salary
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
                  <h4 className="font-semibold">What is PTO accrual?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    PTO accrual is the process of earning paid time off based on
                    hours worked or tenure. Employees build up PTO gradually
                    throughout the year or accrual period.
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
                  <a href="/blog/pto-accrual-explained">
                    → How PTO Accrual Works
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
