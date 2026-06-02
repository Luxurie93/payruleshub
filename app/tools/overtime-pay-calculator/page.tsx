import { Metadata } from "next";
import OvertimeCalculator from "@/components/calculators/OvertimeCalculator";

export const metadata: Metadata = {
  title:
    "Overtime Pay Calculator (Daily and Weekly) | Free | PayRulesHub",
  description:
    "Calculate overtime pay fast with regular rate, overtime multipliers, and weekly totals. Free payroll helper tool.",
  keywords: "overtime calculator, overtime pay, payroll calculator",
  openGraph: {
    title: "Overtime Pay Calculator",
    description: "Calculate overtime pay with state rule notes.",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Overtime Pay Calculator",
    description: "Free overtime pay calculator with state-specific rules",
    url: "https://example.com/tools/overtime-pay-calculator",
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
            <OvertimeCalculator />

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a
                  href="/tools/pto-accrual-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>PTO Accrual Calculator</strong>
                  <p className="text-sm text-gray-600">
                    Calculate PTO accrual for hourly employees
                  </p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">
                    Convert hourly rate to annual salary
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
              <h3 className="text-lg font-bold mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="faq-item">
                  <h4 className="font-semibold">
                    What is overtime pay?
                  </h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Overtime pay is compensation paid at a higher rate (usually
                    1.5x or 2x regular rate) for hours worked beyond the
                    standard threshold, typically 40 hours per week under U.S.
                    federal law.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">
                    Who is eligible for overtime?
                  </h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Non-exempt employees covered by the Fair Labor Standards Act
                    (FLSA) are generally eligible. Exempt employees (salaried
                    management, professional roles) are not.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog/how-to-calculate-overtime-pay">
                    → How to Calculate Overtime Pay
                  </a>
                </li>
                <li>
                  <a href="/blog/overtime-rules-by-state">
                    → Overtime Rules by State
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
