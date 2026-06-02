import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Overtime Pay (Step-by-Step with Examples)",
  description:
    "Learn overtime pay formulas with practical examples and common payroll mistakes to avoid.",
  keywords: "overtime pay calculation, overtime formula, how to calculate overtime",
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
            <h1>How to Calculate Overtime Pay (Step-by-Step with Examples)</h1>

            <h2>What Counts as Overtime?</h2>
            <p>
              Under the Fair Labor Standards Act (FLSA), overtime is any work
              beyond 40 hours per week. Employers must pay non-exempt employees
              at least 1.5 times their regular rate for overtime hours.
            </p>

            <h2>The Basic Overtime Formula</h2>
            <p>
              <code>
                Overtime Pay = (Regular Hourly Rate × 1.5) × Overtime Hours
              </code>
            </p>

            <h2>Worked Examples</h2>
            <h3>Example 1: Standard 40-Hour Threshold</h3>
            <p>
              You earn $20/hour and work 45 hours this week:
              <ul>
                <li>Regular: 40 × $20 = $800</li>
                <li>Overtime: 5 × $20 × 1.5 = $150</li>
                <li>Total: $950</li>
              </ul>
            </p>

            <h2>State Variations</h2>
            <p>
              <strong>California:</strong> Mandatory OT for 8+ hrs/day
            </p>
            <p>
              <strong>New York:</strong> Overtime at 1.5× for 40+ hrs/week
            </p>

            <h2>Use Our Calculator</h2>
            <p>
              Try our{" "}
              <a href="/tools/overtime-pay-calculator">
                overtime pay calculator
              </a>{" "}
              for instant results.
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
                <a href="/blog/overtime-rules-by-state">
                  → Overtime Rules by State
                </a>
              </li>
              <li>
                <a href="/tools/overtime-pay-calculator">
                  → Overtime Pay Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
            <h3 className="font-bold mb-4">Quick Tip</h3>
            <p className="text-sm">Overtime = Rate × 1.5 × Hours Over 40</p>
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
