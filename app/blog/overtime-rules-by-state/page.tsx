import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overtime Rules by State: 2026 Quick Reference Guide",
  description:
    "State-by-state overtime law summary for 2026. See which states have daily OT thresholds, higher multipliers, or industry-specific rules — plus how to verify current law for your situation.",
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
            <h1>Overtime Rules by State: 2026 Quick Reference Guide</h1>

            <p>
              Federal overtime law (the Fair Labor Standards Act) sets a national floor: non-exempt employees
              must be paid at least 1.5 times their regular rate for hours over 40 in a workweek. But that
              is only the minimum. Several states have enacted stronger protections — including daily overtime
              thresholds, higher multipliers for certain conditions, and industry-specific rules that go well
              beyond the federal baseline. This guide covers 15 states in detail, explains when state law
              takes precedence, and tells you how to find the authoritative current rule for your location.
            </p>

            <h2>The Federal Baseline: FLSA Overtime Rules</h2>
            <p>
              The Fair Labor Standards Act applies to most private employers in the United States. The key
              federal rules:
            </p>
            <ul>
              <li>Overtime threshold: <strong>40 hours per workweek</strong> (not per day, not averaged across weeks)</li>
              <li>Overtime rate: <strong>1.5× the regular rate of pay</strong> (minimum)</li>
              <li>Workweek: Any fixed, recurring 168-hour (7-day) period defined by the employer</li>
              <li>Who is covered: Non-exempt employees — most hourly workers and salaried employees below the salary threshold (~$684/week)</li>
            </ul>
            <p>
              When state law is more generous than federal, the state rule applies to workers in that state.
              Employers cannot use the less-protective standard just because federal law is technically satisfied.
            </p>

            <h2>State-by-State Overtime Rules</h2>

            <h3>California — Strictest in the Nation</h3>
            <p>California has a multi-layer overtime system:</p>
            <ul>
              <li><strong>Daily OT:</strong> 1.5× for hours 8–12 in a single day</li>
              <li><strong>Daily double time:</strong> 2× for hours over 12 in a single day</li>
              <li><strong>Weekly OT:</strong> 1.5× for hours over 40 in a workweek</li>
              <li><strong>7th consecutive day:</strong> 1.5× for first 8 hours; 2× for hours over 8</li>
            </ul>
            <p>
              Most California employers are covered by state law via the Industrial Welfare Commission
              wage orders. Some industries (agriculture, healthcare, domestic workers) have modified rules.
            </p>

            <h3>Alaska</h3>
            <p>
              Alaska requires overtime after <strong>8 hours in a day</strong> or 40 hours in a week —
              whichever produces more OT pay. The daily threshold mirrors California's, making Alaska the
              only other state with a strict daily OT rule comparable to California's baseline.
            </p>

            <h3>Nevada</h3>
            <p>
              Nevada has a daily overtime rule, but it is conditional. Employees earning less than 1.5
              times the Nevada minimum wage per hour qualify for daily OT (after 8 hours). Higher earners
              follow the federal weekly threshold only. Check Nevada's Department of Business &amp; Industry
              for current minimum wage figures.
            </p>

            <h3>Colorado</h3>
            <p>
              Colorado's COMPS Order (Colorado Overtime and Minimum Pay Standards) requires OT after{" "}
              <strong>12 hours in a workday</strong> or 40 hours in a workweek, whichever is greater. The
              daily threshold is less strict than California or Alaska, but stricter than federal law. Most
              Colorado employees are covered; some agricultural exemptions apply.
            </p>

            <h3>New York</h3>
            <p>
              New York follows the federal 40-hour weekly threshold for most industries. The state does
              have higher minimum wages that affect the regular rate calculation, and certain industries
              have their own wage orders:
            </p>
            <ul>
              <li>Hospitality: Separate minimum wage and overtime rules via NYDOL Hospitality Wage Order</li>
              <li>Building service workers: Additional protections under the Building Service Industry Wage Order</li>
            </ul>

            <h3>Texas</h3>
            <p>
              Texas follows federal FLSA with no additional state-specific overtime provisions. The standard
              40-hour weekly threshold applies. Employers in Texas must still comply with all FLSA
              requirements, including correct regular rate calculations and exempt employee classifications.
            </p>

            <h3>Florida</h3>
            <p>
              Florida has no state overtime law. Federal FLSA governs all covered employees. Florida does
              have a higher minimum wage than federal ($13/hour in 2025, rising $1/year), which affects
              the baseline regular rate for overtime calculations.
            </p>

            <h3>Illinois</h3>
            <p>
              Illinois follows the federal 40-hour workweek threshold. The state's One Day Rest In Seven
              Act provides additional protections for rest days, but does not change the OT rate or
              threshold. Illinois also has prevailing wage rules for public construction workers that can
              affect effective overtime rates.
            </p>

            <h3>Washington</h3>
            <p>
              Washington state follows the 40-hour federal threshold but has its own minimum wage (higher
              than federal) and strong enforcement mechanisms via the Department of Labor &amp; Industries.
              Washington's agricultural worker protections are notably stronger than federal law and include
              overtime rights that the FLSA historically exempted.
            </p>

            <h3>Oregon</h3>
            <p>
              Oregon follows the 40-hour federal threshold for most workers. Oregon's Bureau of Labor and
              Industries (BOLI) enforces state wage laws. Manufacturing employees in Oregon have additional
              protections: employers must get bureau permission for certain extended-shift arrangements.
            </p>

            <h3>Massachusetts</h3>
            <p>
              Massachusetts follows the 40-hour weekly threshold. State law also restricts Sunday and
              holiday work requirements in some retail industries. Retail employees may be entitled to a
              premium (not technically OT, but a higher rate) for working certain holidays.
            </p>

            <h3>Pennsylvania</h3>
            <p>
              Pennsylvania follows the 40-hour federal threshold. The state's Minimum Wage Act mirrors
              federal overtime rules. Pennsylvania recently updated its exempt salary threshold to align
              more closely with federal rules — verify the current figure with the PA Department of Labor.
            </p>

            <h3>Arizona</h3>
            <p>
              Arizona follows federal FLSA with no additional daily OT rules. Arizona has a higher minimum
              wage than federal law, which affects the regular rate base. No state-specific overtime law
              beyond FLSA.
            </p>

            <h3>Georgia</h3>
            <p>
              Georgia follows federal FLSA. Georgia's state minimum wage is actually lower than the federal
              rate, but federal law applies. No state overtime law adds to FLSA protections.
            </p>

            <h3>Michigan</h3>
            <p>
              Michigan follows the 40-hour weekly threshold under state wage law (the WOWA — Workforce
              Opportunity Wage Act). The state minimum wage exceeds the federal rate. No daily OT rule.
            </p>

            <h2>Industries with Special Overtime Rules</h2>
            <p>
              Even in states that otherwise follow FLSA, certain industries have special rules:
            </p>
            <ul>
              <li><strong>Healthcare:</strong> Under federal law, hospitals can use an 8/80 system — 8 hours/day or 80 hours in a 14-day period, whichever triggers OT first. Requires a written agreement.</li>
              <li><strong>Trucking/Transportation:</strong> Motor carrier exemption applies under federal law for drivers affecting interstate commerce.</li>
              <li><strong>Agriculture:</strong> Federal exemptions apply to farm workers; California and Washington have added protections.</li>
              <li><strong>Seasonal/Recreational:</strong> Specific FLSA exemptions for amusement parks and seasonal businesses.</li>
            </ul>

            <h2>How to Verify Your State's Current Rules</h2>
            <p>
              Overtime laws are updated regularly — sometimes annually. The only authoritative sources are:
            </p>
            <ul>
              <li>Your <strong>state's Department of Labor website</strong> for state-specific rules</li>
              <li><strong>dol.gov</strong> for FLSA federal baseline rules</li>
              <li>Your employer's HR department for company-specific policies</li>
              <li>An employment attorney for specific dispute situations</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded p-4 mt-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                This guide is a summary reference only. Overtime laws change frequently and vary by
                industry, employer size, and employment classification. Always verify current rules with
                official state and federal labor agencies. This is not legal or payroll advice.
              </p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>If my state has daily OT, does my employer have to pay both daily and weekly overtime?</h3>
            <p>
              No — you receive whichever calculation results in more OT pay, but not both on the same
              hours. In California, for example, if you work 10 hours/day for 4 days (40 total hours),
              you owe daily OT (2 hrs/day × 4 = 8 OT hours) even though weekly hours do not exceed 40.
              You do not receive both daily and weekly OT on the same hours.
            </p>

            <h3>My company is headquartered in Texas but I work remotely from California. Which rules apply?</h3>
            <p>
              Generally, the law of the state where you physically perform work applies. If you work from
              California, California's overtime rules apply regardless of where your employer is based.
              This is a common issue for remote workers — verify your situation with an employment attorney
              if there is any ambiguity.
            </p>

            <h3>Can I waive overtime pay in exchange for a higher base rate?</h3>
            <p>
              No. Non-exempt employees cannot legally waive their right to overtime pay under FLSA. An
              agreement to work overtime without time-and-a-half is not enforceable, regardless of whether
              the employee agreed to it.
            </p>

            <h3>Does paid time off count toward the 40-hour overtime threshold?</h3>
            <p>
              Under federal FLSA, only hours actually worked count toward the 40-hour threshold. Paid
              holidays, vacation, and sick days not worked do not count. Some state laws and collective
              bargaining agreements may differ — check your specific situation.
            </p>

            <h3>Are independent contractors entitled to overtime?</h3>
            <p>
              No — independent contractors are not covered by FLSA overtime rules. However, misclassification
              of employees as contractors is a significant legal issue. If you believe you have been
              misclassified, contact your state's Department of Labor or the federal DOL Wage and Hour Division.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related Tools &amp; Articles</h3>
            <ul className="space-y-2">
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/blog/how-to-calculate-overtime-pay">→ How to Calculate Overtime Pay</a></li>
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
              <li><a href="/tools/hourly-to-salary-calculator">→ Hourly to Salary Calculator</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">State OT Cheatsheet</h3>
            <p className="text-sm"><strong>Daily OT states:</strong> CA, AK, NV (conditional), CO (12 hrs)</p>
            <p className="text-sm"><strong>Weekly only (40 hrs):</strong> TX, FL, NY, IL, GA, AZ</p>
            <p className="text-sm"><strong>Federal floor:</strong> 1.5× for hours over 40/week — always</p>
            <hr />
            <p className="text-sm">State rule always wins if more generous than federal.</p>
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
