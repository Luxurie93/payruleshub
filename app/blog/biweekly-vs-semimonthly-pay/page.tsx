import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biweekly vs Semimonthly Pay: What Is the Difference?",
  description:
    "Compare biweekly and semimonthly payroll schedules with simple examples.",
  keywords: "biweekly vs semimonthly, pay schedule, payroll frequency",
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
            <h1>Biweekly vs Semimonthly Pay: What Is the Difference?</h1>

            <h2>Definition Comparison</h2>
            <p>
              <strong>Biweekly:</strong> Paid every 2 weeks. 26 pay periods per
              year.
            </p>
            <p>
              <strong>Semimonthly:</strong> Paid twice per month (usually 1st and
              15th). 24 pay periods per year.
            </p>

            <h2>Pros and Cons</h2>
            <h3>Biweekly</h3>
            <p>
              ✅ More frequent pay cycles
              <br />
              ❌ Variable take-home (2 paychecks some months, 3 in others)
            </p>

            <h3>Semimonthly</h3>
            <p>
              ✅ Predictable twice-monthly schedule
              <br />
              ❌ Less frequent pay (only 24/year vs 26)
            </p>

            <h2>Conversion Examples</h2>
            <p>
              Annual $52,000 salary:
              <ul>
                <li>
                  <strong>Biweekly:</strong> $52,000 ÷ 26 = $2,000 per check
                </li>
                <li>
                  <strong>Semimonthly:</strong> $52,000 ÷ 24 = $2,166.67 per
                  check
                </li>
              </ul>
            </p>

            <h2>Convert Your Pay</h2>
            <p>
              Use our{" "}
              <a href="/tools/hourly-to-salary-calculator">
                salary calculator
              </a>{" "}
              to compare.
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
                <a href="/tools/hourly-to-salary-calculator">
                  → Salary Calculator
                </a>
              </li>
              <li>
                <a href="/tools/take-home-pay-estimator">
                  → Take-Home Pay Estimator
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
            <h3 className="font-bold mb-4">Quick Math</h3>
            <p className="text-sm">26 checks (biweekly) &gt; 24 checks (semimonthly)</p>
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
