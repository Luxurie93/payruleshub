import { Metadata } from "next";
import OvertimeCalculator from "@/components/calculators/OvertimeCalculator";

export const metadata: Metadata = {
  title: "Overtime Pay Calculator — Daily & Weekly | Free | PayRulesHub",
  description:
    "Calculate overtime pay instantly. Enter your hourly rate and hours worked to see regular pay, overtime pay, and weekly total. Includes state-specific notes for CA, NY, TX, and more.",
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
    url: "https://payruleshub.com/tools/overtime-pay-calculator",
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
            <OvertimeCalculator />

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Results are estimates based on the inputs provided. Actual overtime pay depends on your
                employment classification, applicable state law, bonuses included in your regular rate,
                and your employer's payroll practices. Verify overtime eligibility and rules with your
                HR department or the U.S. Department of Labor (dol.gov).
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a
                  href="/tools/pto-accrual-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>PTO Accrual Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate PTO accrual for hourly employees</p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">Convert hourly rate to annual salary</p>
                </a>
                <a
                  href="/tools"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Take-Home Pay Estimator</strong>
                  <p className="text-sm text-gray-600">Estimate net pay after taxes</p>
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
                  <h4 className="font-semibold">What is overtime pay?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Overtime pay is compensation at a higher rate — at least 1.5× the regular rate —
                    for hours worked beyond the standard threshold. Under federal FLSA, the threshold
                    is 40 hours per workweek for non-exempt employees.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Who qualifies for overtime?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Non-exempt employees covered by the Fair Labor Standards Act are entitled to
                    overtime. Most hourly workers qualify. Salaried employees may also qualify if
                    their weekly salary falls below the FLSA exemption threshold (~$684/week) or if
                    their job duties do not meet an exemption test.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Does California have different overtime rules?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Yes. California requires daily overtime (1.5× after 8 hours/day, 2× after 12
                    hours/day) in addition to the weekly 40-hour threshold. This can significantly
                    increase overtime pay for employees working long days even without a 40-hour week.
                    See our{" "}
                    <a href="/blog/overtime-rules-by-state">overtime rules by state guide</a>.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Do bonuses affect my overtime rate?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Yes. Non-discretionary bonuses (production bonuses, attendance bonuses) must be
                    included in the "regular rate" used to calculate overtime. Simply multiplying your
                    base hourly rate by 1.5 will under-calculate overtime if you also receive regular
                    bonuses.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Can my employer give me comp time instead of overtime pay?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Private-sector employees generally cannot waive their right to overtime pay in
                    exchange for comp time under FLSA. Public-sector employers have more flexibility.
                    If your employer is substituting comp time for required overtime pay, you may be
                    owed back wages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/how-to-calculate-overtime-pay">→ How to Calculate Overtime Pay</a></li>
                <li><a href="/blog/overtime-rules-by-state">→ Overtime Rules by State</a></li>
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
