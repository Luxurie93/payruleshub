import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overtime Rules by State: Quick Reference Guide",
  description:
    "A simple overtime-by-state guide with practical notes and links to payroll calculators.",
  keywords: "overtime by state, state overtime rules, overtime laws",
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
            <h1>Overtime Rules by State: Quick Reference Guide</h1>

            <h2>Federal Baseline (FLSA)</h2>
            <p>
              All states follow the Fair Labor Standards Act: 1.5× pay for
              hours over 40/week. State rules may be more generous.
            </p>

            <h2>State-by-State Quick Notes</h2>
            <h3>California</h3>
            <p>
              Most stringent: Daily OT (8+ hrs), Weekly OT (40+ hrs), 7th-day
              premium. Always check current regulations.
            </p>

            <h3>New York</h3>
            <p>
              1.5× for 40+ hrs/week. Industry variations (hospitality,
              healthcare) apply.
            </p>

            <h3>Texas</h3>
            <p>
              Federal FLSA only. No state-specific OT premium beyond federal
              requirements.
            </p>

            <h3>Florida</h3>
            <p>Federal FLSA applies; no additional state premium.</p>

            <h3>Illinois</h3>
            <p>1.5× for 40+ hrs/week; prevailing wage rules may apply.</p>

            <h2>When to Consult Official Sources</h2>
            <p>
              Always check your state's Department of Labor website for current
              rules. Overtime laws change frequently.
            </p>

            <h2>Calculate Your Overtime</h2>
            <p>
              Use our{" "}
              <a href="/tools/overtime-pay-calculator">
                overtime calculator
              </a>{" "}
              for state-specific notes.
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
                <a href="/blog/how-to-calculate-overtime-pay">
                  → How to Calculate Overtime Pay
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
            <h3 className="font-bold mb-4">Key Reminder</h3>
            <p className="text-sm">
              State rules may be MORE generous than federal. Check your state.
            </p>
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
