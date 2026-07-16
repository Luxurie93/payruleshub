import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculate Pay and Overtime: Free Overtime Pay Calculator",
  description:
    "Calculate regular and overtime pay from hourly rate and hours worked. Learn the formula, review examples, and use our free overtime calculator.",
  alternates: {
    canonical: "https://payruleshub.com/blog/calculate-pay-and-overtime",
  },
  openGraph: {
    title: "Calculate Pay and Overtime: Free Overtime Pay Calculator",
    description:
      "Calculate regular pay, overtime pay, and estimated gross weekly pay with simple examples and a free overtime calculator.",
    url: "https://payruleshub.com/blog/calculate-pay-and-overtime",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 prose prose-sm max-w-none">
          <p className="text-sm text-gray-500 mb-2">Payroll calculator guide</p>
          <h1>Calculate Pay and Overtime: Free Overtime Pay Calculator</h1>

          <p>
            If you worked more than your regular schedule, the fastest way to estimate your paycheck is to
            separate <strong>regular pay</strong> from <strong>overtime pay</strong>. This guide shows the basic
            formula, common examples, and when state rules or extra earnings can change the result.
          </p>

          <div className="not-prose bg-primary text-white rounded-lg p-5 my-6">
            <h2 className="text-xl font-bold mb-2 text-white">Need the quick answer?</h2>
            <p className="mb-4 text-blue-50">
              Use PayRulesHub's free overtime calculator to estimate regular pay, overtime pay, and gross
              weekly pay from your hourly rate and hours worked.
            </p>
            <a
              href="/tools/overtime-pay-calculator"
              className="inline-block bg-white text-primary px-5 py-2 rounded font-semibold hover:bg-blue-50"
            >
              Open the Overtime Pay Calculator
            </a>
          </div>

          <h2>Basic pay and overtime formula</h2>
          <p>
            For most non-exempt hourly employees under federal overtime rules, overtime starts after 40 hours
            worked in a single workweek. The federal overtime rate is at least 1.5 times the employee's
            regular rate of pay.
          </p>

          <ul>
            <li><strong>Regular pay:</strong> regular hours × hourly rate</li>
            <li><strong>Overtime rate:</strong> hourly rate × 1.5</li>
            <li><strong>Overtime pay:</strong> overtime hours × overtime rate</li>
            <li><strong>Total gross pay:</strong> regular pay + overtime pay</li>
          </ul>

          <div className="not-prose bg-gray-50 border rounded-lg p-4 my-6">
            <p className="font-semibold mb-2">Simple formula</p>
            <p className="font-mono text-sm bg-white border rounded p-3">
              Total pay = (regular hours × hourly rate) + (overtime hours × hourly rate × 1.5)
            </p>
          </div>

          <h2>Example: calculate pay and overtime for a 47-hour week</h2>
          <p>
            Say you earn <strong>$20 per hour</strong> and worked <strong>47 hours</strong> in one workweek.
            Under the standard federal weekly overtime rule, the first 40 hours are regular hours and the
            remaining 7 hours are overtime hours.
          </p>
          <ul>
            <li>Regular pay: 40 × $20 = $800</li>
            <li>Overtime rate: $20 × 1.5 = $30 per hour</li>
            <li>Overtime pay: 7 × $30 = $210</li>
            <li><strong>Total gross pay: $800 + $210 = $1,010</strong></li>
          </ul>

          <h2>What if you worked under 40 hours?</h2>
          <p>
            If your state follows the federal weekly threshold only, and you worked 40 or fewer hours in the
            workweek, you usually do not have overtime hours. In that case, gross pay is simply hours worked
            multiplied by your hourly rate. Some states, such as California, can require daily overtime even
            when total weekly hours are below 40.
          </p>

          <h2>When the overtime calculation can change</h2>
          <p>
            The simple time-and-a-half calculation works for many hourly workers, but payroll rules can become
            more complicated when different pay types or state-specific rules apply.
          </p>
          <ul>
            <li>
              <strong>State overtime rules:</strong> California, Alaska, Colorado, Nevada, and some other
              jurisdictions can have daily overtime or other special thresholds.
            </li>
            <li>
              <strong>Bonuses and commissions:</strong> certain non-discretionary bonuses, commissions, shift
              differentials, or incentive pay may need to be included in the regular rate.
            </li>
            <li>
              <strong>Salaried non-exempt workers:</strong> some salaried employees still qualify for overtime,
              depending on salary level, duties, and classification.
            </li>
            <li>
              <strong>Exempt employees:</strong> properly classified exempt employees may not be eligible for
              overtime even if they work more than 40 hours.
            </li>
          </ul>

          <h2>Use official overtime sources</h2>
          <p>
            PayRulesHub is designed for paycheck planning and education. For official rules, review the U.S.
            Department of Labor's overtime resources and your state labor agency. Federal rules are based on
            the Fair Labor Standards Act, but states can create more protective rules for workers.
          </p>
          <ul>
            <li>
              <a href="https://www.dol.gov/agencies/whd/overtime" rel="nofollow">
                U.S. Department of Labor overtime information
              </a>
            </li>
            <li>
              <a href="https://www.dol.gov/agencies/whd/flsa" rel="nofollow">
                Fair Labor Standards Act overview
              </a>
            </li>
          </ul>

          <h2>Related PayRulesHub calculators and guides</h2>
          <ul>
            <li><a href="/tools/overtime-pay-calculator">Free overtime pay calculator</a></li>
            <li><a href="/blog/how-to-calculate-overtime-pay">How to calculate overtime pay step by step</a></li>
            <li><a href="/blog/overtime-rules-by-state">Overtime rules by state</a></li>
            <li><a href="/tools/take-home-pay-estimator">Take-home pay estimator</a></li>
          </ul>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded p-4 mt-6">
            <p className="text-sm font-semibold text-amber-800 mb-1">Educational disclaimer</p>
            <p className="text-sm text-amber-700">
              This page provides general payroll education and calculator guidance. It is not legal, tax, or
              payroll advice. Actual pay can vary based on state law, employer policy, classification, benefits,
              deductions, bonuses, commissions, and withholding elections. Verify official rules with the U.S.
              Department of Labor, your state labor agency, or a qualified payroll professional.
            </p>
          </div>

          <h2>Frequently asked questions</h2>

          <h3>How do I calculate overtime pay?</h3>
          <p>
            Multiply your hourly rate by 1.5, then multiply that overtime rate by the number of overtime hours.
            Add that amount to your regular pay for the workweek.
          </p>

          <h3>Is overtime based on hours per day or per week?</h3>
          <p>
            Under federal FLSA rules, overtime is generally based on hours over 40 in a workweek. Some states
            have daily overtime rules, so the answer depends on where you work and which rule is more protective.
          </p>

          <h3>Does overtime affect take-home pay?</h3>
          <p>
            Yes. Overtime increases gross pay, which can also affect taxes and deductions. Use the overtime
            calculator for gross pay, then review deductions or use a take-home pay estimator for net pay planning.
          </p>

          <h3>Can I use this for salary overtime?</h3>
          <p>
            It depends. Some salaried workers are non-exempt and qualify for overtime, while properly classified
            exempt workers usually do not. If you are salaried but non-exempt, your regular rate may be calculated
            from your weekly salary and applicable hours.
          </p>
        </article>

        <aside className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-4">
            <h2 className="text-lg font-bold">Pay &amp; overtime shortcuts</h2>
            <a href="/tools/overtime-pay-calculator" className="block p-3 bg-blue-50 border rounded hover:shadow-sm">
              <strong>Overtime Pay Calculator</strong>
              <p className="text-sm text-gray-600">Calculate regular pay, overtime pay, and gross weekly pay.</p>
            </a>
            <a href="/blog/overtime-rules-by-state" className="block p-3 bg-gray-50 border rounded hover:shadow-sm">
              <strong>Overtime Rules by State</strong>
              <p className="text-sm text-gray-600">Check state-specific overtime rules and exceptions.</p>
            </a>
            <a href="/tools/take-home-pay-estimator" className="block p-3 bg-gray-50 border rounded hover:shadow-sm">
              <strong>Take-Home Pay Estimator</strong>
              <p className="text-sm text-gray-600">Estimate net pay after common taxes and deductions.</p>
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <div className="ad-placeholder h-24"></div>
      </div>
    </div>
  );
}
