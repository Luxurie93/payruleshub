import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Estimate Take-Home Pay in 2026",
  description:
    "Estimate your net pay after taxes with a simple breakdown of deductions.",
  keywords: "take-home pay, net pay, tax calculator, paycheck calculator",
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
            <h1>How to Estimate Take-Home Pay in 2026</h1>

            <h2>What Reduces Your Paycheck?</h2>
            <p>
              <strong>Federal Income Tax:</strong> Typically 10–22% depending on
              bracket.
            </p>
            <p>
              <strong>State Income Tax:</strong> 0–13% depending on state.
            </p>
            <p>
              <strong>Social Security:</strong> 6.2% of gross (capped at ~$168K).
            </p>
            <p>
              <strong>Medicare:</strong> 1.45% of gross.
            </p>
            <p>
              <strong>Pre-Tax Deductions:</strong> 401(k), HSA, health insurance.
            </p>

            <h2>Simple Estimation Formula</h2>
            <p>
              <code>Take-Home ≈ Gross × (1 - 0.30 to 0.40)</code>
            </p>
            <p>
              Most people see 30–40% total deduction. Federal bracket and state
              affect this significantly.
            </p>

            <h2>2026 Tax Brackets (Estimated)</h2>
            <p>
              Federal rates adjusted annually for inflation. Consult IRS.gov for
              current brackets.
            </p>

            <h2>Estimate Your Take-Home</h2>
            <p>
              Use our{" "}
              <a href="/tools/take-home-pay-estimator">
                take-home pay estimator
              </a>{" "}
              for a quick calculation.
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
                <a href="/tools/take-home-pay-estimator">
                  → Take-Home Pay Estimator
                </a>
              </li>
              <li>
                <a href="/tools/hourly-to-salary-calculator">
                  → Salary Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
            <h3 className="font-bold mb-4">Quick Rule</h3>
            <p className="text-sm">Most earn 60-70% of gross pay after all deductions.</p>
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
