import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Overtime Pay (Step-by-Step with Examples)",
  description:
    "Master the overtime pay formula with four worked examples covering standard weeks, California daily OT, blended rates, and salaried non-exempt employees. Includes common mistakes to avoid.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <article className="prose prose-sm max-w-none">
            <h1>How to Calculate Overtime Pay (Step-by-Step with Examples)</h1>

            <p>
              Overtime pay is one of the most frequently misunderstood parts of a paycheck. Employees sometimes
              believe they are being shorted; employers sometimes miscalculate the "regular rate" when multiple
              pay types are involved. This guide walks through the federal formula, state variations, four
              worked examples, and the most common mistakes that lead to errors on both sides.
            </p>

            <h2>What Counts as Overtime Under Federal Law?</h2>
            <p>
              Under the Fair Labor Standards Act (FLSA), overtime applies to any hours worked beyond{" "}
              <strong>40 hours in a single workweek</strong> for non-exempt employees. The minimum overtime
              rate is <strong>1.5 times the employee's regular rate of pay</strong> — commonly called
              "time-and-a-half."
            </p>
            <p>
              A workweek is any fixed, recurring 168-hour period (7 consecutive 24-hour days). Your employer
              sets when the workweek starts; it does not need to begin on Monday. Overtime cannot be averaged
              across two weeks — each workweek stands alone.
            </p>

            <h2>Exempt vs. Non-Exempt: Who Qualifies</h2>
            <p>
              Not all employees are entitled to overtime. The FLSA defines two categories:
            </p>
            <ul>
              <li>
                <strong>Non-exempt employees</strong> are covered by FLSA overtime rules. This includes most
                hourly workers and salaried employees earning below the federal salary threshold (currently
                $684/week as of the most recent update — verify at dol.gov).
              </li>
              <li>
                <strong>Exempt employees</strong> are not entitled to overtime. To qualify as exempt, an
                employee generally must meet both a salary-level test AND a duties test (executive,
                administrative, professional, outside sales, or computer employee exemptions). Job title
                alone does not determine exempt status.
              </li>
            </ul>
            <p>
              If you are unsure of your classification, check your offer letter or ask HR. Misclassification
              is one of the most common wage violations and can result in back-pay obligations for employers.
            </p>

            <h2>The Standard Overtime Formula</h2>
            <p>
              <code>Overtime Pay = Regular Hourly Rate × 1.5 × Overtime Hours</code>
            </p>
            <p>
              <code>Total Weekly Pay = (Regular Rate × 40) + (Regular Rate × 1.5 × OT Hours)</code>
            </p>

            <h2>Example 1: Standard Single-Rate Hourly Employee</h2>
            <p>
              You earn $18/hour and worked 47 hours this week.
            </p>
            <ul>
              <li>Regular pay: 40 × $18 = $720.00</li>
              <li>Overtime hours: 47 − 40 = 7 hours</li>
              <li>Overtime rate: $18 × 1.5 = $27.00/hour</li>
              <li>Overtime pay: 7 × $27.00 = $189.00</li>
              <li><strong>Total weekly pay: $720 + $189 = $909.00</strong></li>
            </ul>

            <h2>Example 2: California Daily Overtime</h2>
            <p>
              California has the strictest overtime rules in the country. Daily overtime (over 8 hours in a
              single day) triggers time-and-a-half before any weekly threshold is crossed. Double time
              (2×) applies after 12 hours in a day or after 8 hours on a seventh consecutive workday.
            </p>
            <p>
              You earn $20/hour in California and worked: Mon 10 hrs, Tue 9 hrs, Wed 8 hrs, Thu 8 hrs,
              Fri 8 hrs = 43 total hours.
            </p>
            <ul>
              <li>Monday: 8 reg + 2 OT = (8 × $20) + (2 × $30) = $160 + $60 = $220</li>
              <li>Tuesday: 8 reg + 1 OT = (8 × $20) + (1 × $30) = $160 + $30 = $190</li>
              <li>Wed/Thu/Fri: 8 reg each = $160 each = $480</li>
              <li><strong>Total: $220 + $190 + $480 = $890</strong></li>
            </ul>
            <p>
              Under federal (FLSA) rules, 43 hours would produce only 3 hours of OT. California's daily rule
              creates 3 hours of daily OT here — resulting in the same overtime pay amount in this case, but
              by a different calculation path. The daily vs weekly distinction can produce very different
              results depending on how hours are distributed.
            </p>

            <h2>Example 3: Employee with a Flat-Sum Bonus (Blended Rate)</h2>
            <p>
              When a non-discretionary bonus is part of compensation, it must be included in the "regular
              rate" before overtime is calculated. Simply multiplying base pay by 1.5 is not sufficient.
            </p>
            <p>
              You earn $16/hour, worked 48 hours this week, and received a $96 weekly attendance bonus.
            </p>
            <ul>
              <li>Total straight-time pay: 48 × $16 = $768</li>
              <li>Add bonus: $768 + $96 = $864</li>
              <li>Effective regular rate: $864 ÷ 48 hours = $18.00/hour</li>
              <li>Additional overtime premium: 8 OT hours × ($18 × 0.5) = 8 × $9 = $72</li>
              <li><strong>Total: $864 + $72 = $936</strong></li>
            </ul>
            <p>
              The additional $0.5 (not $1.5) is used because the straight-time portion for all 48 hours is
              already included in the $864 base calculation.
            </p>

            <h2>Example 4: Salaried Non-Exempt Employee</h2>
            <p>
              Some salaried employees are non-exempt and still entitled to overtime. Their regular rate is
              calculated by dividing their weekly salary by their expected weekly hours.
            </p>
            <p>
              You earn $800/week salary, are expected to work 40 hours, and worked 50 hours.
            </p>
            <ul>
              <li>Regular rate: $800 ÷ 40 = $20.00/hour</li>
              <li>Overtime hours: 10</li>
              <li>Overtime premium: 10 × ($20 × 0.5) = $100</li>
              <li><strong>Total: $800 + $100 = $900</strong></li>
            </ul>

            <h2>State Overtime Rules Beyond Federal</h2>
            <p>
              Several states have overtime rules that are more generous than the federal FLSA minimum.
              Employers in those states must follow whichever rule benefits the employee more.
            </p>
            <ul>
              <li><strong>California:</strong> Daily OT (8+ hrs/day), weekly OT (40+ hrs/week), double time after 12 hrs/day or on the 7th consecutive day.</li>
              <li><strong>Nevada:</strong> Daily OT for employees earning below 1.5× minimum wage.</li>
              <li><strong>Alaska:</strong> Daily OT after 8 hours in a day AND weekly after 40 hours.</li>
              <li><strong>Colorado:</strong> Daily OT after 12 hours in a day.</li>
              <li><strong>New York, Texas, Florida:</strong> Follow federal FLSA with no additional daily threshold.</li>
            </ul>
            <p>
              See our full <a href="/blog/overtime-rules-by-state">overtime rules by state guide</a> for a
              state-by-state breakdown.
            </p>

            <h2>Common Overtime Calculation Mistakes</h2>
            <ul>
              <li>
                <strong>Forgetting to include bonuses in the regular rate.</strong> Non-discretionary bonuses,
                commissions, and shift differentials must be factored in.
              </li>
              <li>
                <strong>Averaging hours across two workweeks.</strong> FLSA does not allow this. Each 7-day
                workweek is calculated independently.
              </li>
              <li>
                <strong>Using salary ÷ 52 ÷ 40 incorrectly for variable-hour employees.</strong> Use actual
                hours worked in the workweek, not assumed standard hours.
              </li>
              <li>
                <strong>Misclassifying employees as exempt.</strong> If an employee does not pass both the
                salary-level AND duties test, they are non-exempt regardless of their title.
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded p-4 mt-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Overtime laws are updated periodically and vary significantly by state, industry, and
                employment classification. Verify current rules with the U.S. Department of Labor
                (dol.gov) or your state's labor agency. This content is for informational purposes only
                and is not legal or payroll advice.
              </p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Do I get overtime if I work more than 8 hours in a day?</h3>
            <p>
              Under federal law, no — the FLSA threshold is weekly, not daily. However, California,
              Nevada, Alaska, and Colorado have daily overtime rules. Check your state's labor law or
              your employment contract for daily thresholds.
            </p>

            <h3>Can my employer give me comp time instead of overtime pay?</h3>
            <p>
              Private-sector employees generally cannot waive overtime pay in exchange for comp time under
              FLSA. State and local government employers have more flexibility for comp time arrangements.
              If you believe you are owed unpaid overtime, contact your state's Department of Labor.
            </p>

            <h3>What happens if my employer pays me salary — am I still eligible?</h3>
            <p>
              Not automatically. Salaried status does not equal exempt status. If your salary is below
              the FLSA threshold or your job duties do not meet the exemption test, you are non-exempt
              and entitled to overtime. Ask your HR department for your official FLSA classification.
            </p>

            <h3>Does holiday pay count toward the 40-hour overtime threshold?</h3>
            <p>
              Under FLSA, hours not actually worked (including paid holidays and vacation) do not count
              toward the 40-hour overtime threshold. Overtime is triggered only by actual hours worked.
              Some state laws or collective bargaining agreements may differ.
            </p>

            <h3>Can my employer change my start-of-workweek day to avoid overtime?</h3>
            <p>
              Employers can set — and occasionally change — their workweek definition, but only for
              legitimate business reasons. The DOL prohibits changing workweek start days solely to
              reduce overtime obligations. Such changes can trigger back-pay liability.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related Tools &amp; Articles</h3>
            <ul className="space-y-2">
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/blog/overtime-rules-by-state">→ Overtime Rules by State</a></li>
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
              <li><a href="/tools/hourly-to-salary-calculator">→ Hourly to Salary Calculator</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">Quick Formula</h3>
            <p className="text-sm font-mono bg-gray-50 p-2 rounded">OT Pay = Rate × 1.5 × Hours Over 40</p>
            <hr />
            <p className="text-sm"><strong>Federal:</strong> Weekly threshold only (40 hrs)</p>
            <p className="text-sm"><strong>California:</strong> Daily (8 hrs) + weekly</p>
            <p className="text-sm"><strong>Exempt employees:</strong> No OT rights</p>
            <hr />
            <p className="text-sm font-semibold">Calculators</p>
            <ul className="text-sm space-y-1">
              <li><a href="/tools/overtime-pay-calculator">OT Calculator →</a></li>
              <li><a href="/tools/take-home-pay-estimator">Take-Home Estimator →</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 3)</div>
      </div>
    </div>
  );
}
