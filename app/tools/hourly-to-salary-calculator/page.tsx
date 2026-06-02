import { Metadata } from "next";
import HourlyToSalaryCalculator from "@/components/calculators/HourlyToSalaryCalculator";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator — Annual, Monthly & Biweekly | PayRulesHub",
  description:
    "Convert your hourly wage to annual, monthly, biweekly, and weekly salary equivalents instantly. Adjust for part-time hours or unpaid weeks. Free and no signup required.",
  keywords: "salary calculator, hourly to salary, wage conversion",
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hourly to Salary Calculator",
    description: "Convert hourly wage to annual salary and other pay frequencies",
    url: "https://payruleshub.com/tools/hourly-to-salary-calculator",
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
            <HourlyToSalaryCalculator />

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Results are gross (pre-tax) estimates. Actual take-home pay depends on federal and
                state tax rates, benefits deductions, and your W-4 elections. Use the{" "}
                <a href="/tools">Take-Home Pay Estimator</a> to estimate net pay.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a
                  href="/tools/overtime-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Overtime Pay Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate overtime pay for any hourly rate</p>
                </a>
                <a
                  href="/tools"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Take-Home Pay Estimator</strong>
                  <p className="text-sm text-gray-600">Estimate net pay after taxes and deductions</p>
                </a>
                <a
                  href="/tools/pto-accrual-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>PTO Accrual Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate earned paid time off</p>
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
                  <h4 className="font-semibold">How do I calculate annual salary from hourly rate?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Multiply your hourly rate × hours per week × 52. For a standard full-time schedule
                    (40 hrs/week): $20/hr × 40 × 52 = $41,600/year. Adjust the hours figure if you
                    work part-time or variable hours.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Should I use 52 weeks or account for vacation?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    It depends on what you are calculating. For gross annual earnings (what you are
                    paid), use 52 weeks — your employer pays you even when you are on vacation. For
                    actual hours worked (relevant for labor cost analysis), subtract vacation weeks.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">How do I compare an hourly offer to a salaried offer?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Convert both to annual figures using the same hours assumption (usually 2,080
                    hours = 40 hrs × 52 weeks). Then compare total compensation including benefits —
                    a salaried role with better health insurance may be worth more than its salary
                    difference from an hourly role implies.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">What is a biweekly equivalent salary?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Biweekly salary = Annual salary ÷ 26. For $50,000/year: $50,000 ÷ 26 =
                    $1,923.08 per biweekly check (gross). See our{" "}
                    <a href="/blog/biweekly-vs-semimonthly-pay">biweekly vs semimonthly guide</a>{" "}
                    for more on how pay frequency affects your budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/biweekly-vs-semimonthly-pay">→ Biweekly vs Semimonthly</a></li>
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
