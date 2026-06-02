import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How PTO Accrual Works for Hourly Employees",
  description:
    "Understand PTO accrual methods, formulas, and planning tips for hourly workers.",
  keywords: "PTO accrual, paid time off, accrual formula, PTO calculation",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 1)
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <article className="prose prose-sm max-w-none">
            <h1>How PTO Accrual Works for Hourly Employees</h1>

            <h2>Common Accrual Methods</h2>
            <p>
              <strong>Per-Pay-Period Accrual:</strong> You earn PTO gradually
              with each paycheck. Most common for hourly workers.
            </p>
            <p>
              <strong>Front-Loaded:</strong> Employer gives you the full year's
              PTO upfront.
            </p>
            <p>
              <strong>Hybrid:</strong> Partial upfront + monthly accrual.
            </p>

            <h2>Formula Walkthrough</h2>
            <p>
              <code>Monthly PTO = (Accrual Rate ÷ 100) × Hours per Week × (52 ÷ 12)</code>
            </p>
            <p>
              Example: 5% accrual, 40 hrs/week = 0.05 × 40 × 4.33 ≈ 8.7 hours
              per month.
            </p>

            <h2>Employer Policy Differences</h2>
            <p>
              Some employers cap PTO (max 200 hours). Others have "use-it-or-lose-it"
              policies. Always check your employee handbook.
            </p>

            <h2>Calculate Your Accrual</h2>
            <p>
              Try our{" "}
              <a href="/tools/pto-accrual-calculator">
                PTO accrual calculator
              </a>
              .
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24">
              Advertisement (Google AdSense Slot 2)
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related</h3>
            <ul className="space-y-2">
              <li>
                <a href="/tools/pto-accrual-calculator">
                  → PTO Accrual Calculator
                </a>
              </li>
              <li>
                <a href="/blog/biweekly-vs-semimonthly-pay">
                  → Pay Schedule Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
            <h3 className="font-bold mb-4">Typical Rates</h3>
            <p className="text-sm">3-5% accrual = 1.5-2.6 weeks/year</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 3)
        </div>
      </div>
    </div>
  );
}
