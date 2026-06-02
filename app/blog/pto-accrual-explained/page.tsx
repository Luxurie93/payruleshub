import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How PTO Accrual Works for Hourly and Salaried Employees",
  description:
    "Understand the three main PTO accrual methods with step-by-step formulas, industry benchmarks, state law considerations, and tips for tracking your balance accurately.",
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
            <h1>How PTO Accrual Works for Hourly and Salaried Employees</h1>

            <p>
              Paid time off (PTO) is one of the most misunderstood parts of a compensation package. Many
              employees do not fully understand how fast their balance accumulates, when they can use it,
              or what happens if they leave the company. This guide explains the three main accrual methods
              with step-by-step formulas, shows worked examples for both hourly and salaried workers, covers
              state law considerations, and gives you the framework to track your own balance accurately.
            </p>

            <h2>What Is PTO Accrual?</h2>
            <p>
              PTO accrual is the process of gradually earning paid time off based on hours worked or time
              employed. Instead of receiving a lump sum of vacation days on January 1st, you build up your
              balance incrementally — usually with each pay period.
            </p>
            <p>
              "PTO" is a broad term that can include vacation days, sick leave, personal days, or any
              combination of these in a single bank. Some employers keep these separate; others consolidate
              everything into one PTO pool. Your employee handbook will specify which system applies.
            </p>

            <h2>The Three Main PTO Accrual Methods</h2>

            <h3>Method 1: Per-Hour Accrual (Most Common for Hourly Workers)</h3>
            <p>
              You earn a fixed number of PTO hours for each hour worked. This is the most straightforward
              method and scales naturally with part-time and variable schedules.
            </p>
            <p>
              <strong>Formula:</strong>{" "}
              <code>PTO Earned = Hours Worked × Accrual Rate</code>
            </p>
            <p>
              The accrual rate is usually expressed as a decimal (e.g., 0.0385 hours of PTO per hour worked).
              Where does that number come from?
            </p>
            <ul>
              <li>If your employer grants 80 hours (2 weeks) of PTO per year…</li>
              <li>And you work 2,080 hours per year (40 hrs × 52 weeks)…</li>
              <li>Then: 80 ÷ 2,080 = <strong>0.0385 PTO hours per hour worked</strong></li>
            </ul>
            <p>
              If you work 80 hours in a pay period: 80 × 0.0385 = 3.08 hours of PTO earned that period.
            </p>

            <h3>Method 2: Per-Pay-Period Accrual (Most Common for Salaried Workers)</h3>
            <p>
              A fixed amount of PTO is added to your balance each pay period, regardless of exact hours
              worked. This is simpler to administer and common in salaried environments.
            </p>
            <p>
              <strong>Formula:</strong>{" "}
              <code>PTO per Period = Annual PTO Allowance ÷ Number of Pay Periods</code>
            </p>
            <p>
              For 80 hours/year annual PTO allowance:
            </p>
            <ul>
              <li>Biweekly (26 periods): 80 ÷ 26 = <strong>3.08 hours per check</strong></li>
              <li>Semimonthly (24 periods): 80 ÷ 24 = <strong>3.33 hours per check</strong></li>
              <li>Monthly (12 periods): 80 ÷ 12 = <strong>6.67 hours per check</strong></li>
            </ul>

            <h3>Method 3: Front-Loaded (Lump Sum) PTO</h3>
            <p>
              The employer deposits your entire annual PTO balance at the start of each year — or when
              you are hired (sometimes prorated). There is no gradual accrual; the full amount is available
              immediately.
            </p>
            <p>
              Front-loaded PTO is simple and transparent, but it creates risk for both parties: if you
              use all your PTO in January and resign in March, the employer may try to recover the unused
              portion. If you join in August and the employer front-loads a full year's PTO at hire, you
              may get more than other employees on a proration basis.
            </p>

            <h2>Worked Examples</h2>

            <h3>Example 1: Hourly Employee, 15 Days PTO/Year, 40 hrs/week</h3>
            <ul>
              <li>Annual PTO: 15 days × 8 hrs = 120 hours</li>
              <li>Annual hours worked: 40 × 52 = 2,080 hours</li>
              <li>Accrual rate: 120 ÷ 2,080 = 0.0577 hrs/hour worked</li>
              <li>PTO earned per 80-hour biweekly period: 80 × 0.0577 = <strong>4.62 hours</strong></li>
              <li>After 6 months (13 periods): 13 × 4.62 = <strong>~60 hours accrued</strong></li>
            </ul>

            <h3>Example 2: Salaried Employee, 10 Days PTO/Year, Biweekly Pay</h3>
            <ul>
              <li>Annual PTO: 10 days × 8 hrs = 80 hours</li>
              <li>Biweekly accrual: 80 ÷ 26 = 3.08 hours per pay period</li>
              <li>After 3 months (6 pay periods): 6 × 3.08 = <strong>18.46 hours (~2.3 days)</strong></li>
            </ul>

            <h3>Example 3: Tenure-Based Accrual (Years of Service Tiers)</h3>
            <p>
              Many employers increase PTO accrual rate after 2–5 years of service. Example policy:
            </p>
            <ul>
              <li>Years 1–2: 80 hours/year (3.08 hrs/biweekly period)</li>
              <li>Years 3–5: 120 hours/year (4.62 hrs/biweekly period)</li>
              <li>6+ years: 160 hours/year (6.15 hrs/biweekly period)</li>
            </ul>
            <p>
              If you are in year 4 and your policy just bumped you to 120 hours/year, your remaining
              accrual for the year recalculates at the higher rate going forward.
            </p>

            <h2>PTO Caps and "Use-It-or-Lose-It" Policies</h2>
            <p>
              Most employers place a cap on maximum accrued PTO — often 1.5× to 2× the annual allowance.
              Once you hit the cap, accrual stops until you use some PTO. This incentivizes employees to
              take time off.
            </p>
            <p>
              "Use-it-or-lose-it" policies require employees to use all PTO by a certain date (usually
              December 31st) or forfeit the remainder. These policies are legal under federal law and most
              states, but some states restrict or prohibit them:
            </p>
            <ul>
              <li><strong>California:</strong> Prohibits use-it-or-lose-it. Accrued PTO is considered earned wages and must be paid out upon termination.</li>
              <li><strong>Colorado:</strong> Similar protection — accrued PTO is earned wages.</li>
              <li><strong>Montana:</strong> Accrued vacation is earned wages after the probationary period.</li>
              <li><strong>Illinois:</strong> Accrued PTO must be paid out on termination unless a written policy states otherwise with clear advance notice.</li>
              <li><strong>Most other states:</strong> Use-it-or-lose-it is permitted with proper notice in the written policy.</li>
            </ul>

            <h2>PTO Payout Upon Termination</h2>
            <p>
              Whether you get paid for unused PTO when you leave depends on state law and your employer's
              written policy. In states like California and Colorado, accrued PTO is earned compensation
              and must always be paid out. In at-will states like Texas and Florida, the employer's
              written policy governs.
            </p>
            <p>
              <strong>Before giving notice:</strong> review your employee handbook to understand your
              employer's PTO payout policy. If your state requires payout, your employer must comply
              regardless of what their handbook says.
            </p>

            <h2>Industry Benchmarks: How Much PTO Is Normal?</h2>
            <p>
              According to Bureau of Labor Statistics data, median PTO allowances by years of service:
            </p>
            <ul>
              <li><strong>Under 1 year:</strong> 8–10 days (private sector), 13 days (government)</li>
              <li><strong>1–5 years:</strong> 10–15 days</li>
              <li><strong>5–10 years:</strong> 15–18 days</li>
              <li><strong>10+ years:</strong> 18–25+ days</li>
            </ul>
            <p>
              Technology and professional services companies often offer "unlimited PTO" policies. Despite
              the name, employees at unlimited-PTO companies frequently take less time off than those with
              defined accrual policies.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded p-4 mt-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                PTO laws vary significantly by state and are subject to change. This guide is for
                informational purposes only and does not constitute legal or HR advice. Verify your
                state's requirements with your state Department of Labor and review your employer's
                written PTO policy.
              </p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Does PTO accrue during unpaid leave?</h3>
            <p>
              Under most employer policies, PTO does not accrue during unpaid leave (including FMLA leave).
              FMLA does not require employers to continue benefits accrual during unpaid leave, though some
              do. Check your employee handbook or ask HR directly.
            </p>

            <h3>Can my employer reduce my PTO accrual rate without notice?</h3>
            <p>
              Generally, employers can change PTO policies prospectively (going forward) with reasonable
              notice, but they usually cannot take away already-accrued PTO — especially in states that
              treat it as earned wages. Any reduction should be documented in writing.
            </p>

            <h3>What happens to my PTO if my company is acquired?</h3>
            <p>
              Accrued PTO treatment in a merger or acquisition depends on the deal structure and the
              successor company's policies. In many cases the acquiring company honors accrued balances,
              but this is not guaranteed. Confirm in writing what happens to your accrued PTO as part of
              any transition.
            </p>

            <h3>Can I take PTO before it fully accrues (negative balance)?</h3>
            <p>
              Some employers allow advances on PTO — letting employees use days not yet accrued. This is
              at the employer's discretion and is typically covered in the written PTO policy. If you
              leave with a negative PTO balance in most states (except those with wage-protection rules),
              the employer may deduct the advance from your final paycheck.
            </p>

            <h3>How do I track my PTO balance if HR's system seems wrong?</h3>
            <p>
              Keep your own running tally using your pay stubs (most show current PTO balance) and your
              personal records of time taken. Use our <a href="/tools/pto-accrual-calculator">PTO accrual
              calculator</a> to independently verify your expected balance. If there is a discrepancy,
              bring both records to HR with documentation.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related Tools &amp; Articles</h3>
            <ul className="space-y-2">
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/blog/biweekly-vs-semimonthly-pay">→ Biweekly vs Semimonthly Pay</a></li>
              <li><a href="/tools/hourly-to-salary-calculator">→ Hourly to Salary Calculator</a></li>
              <li><a href="/tools">→ Take-Home Pay Estimator</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">Typical Rates</h3>
            <p className="text-sm"><strong>10 days/yr:</strong> 3.08 hrs per biweekly period</p>
            <p className="text-sm"><strong>15 days/yr:</strong> 4.62 hrs per biweekly period</p>
            <p className="text-sm"><strong>20 days/yr:</strong> 6.15 hrs per biweekly period</p>
            <hr />
            <p className="text-sm"><strong>CA/CO/MT:</strong> Accrued PTO = earned wages (must pay out)</p>
            <p className="text-sm"><strong>Most states:</strong> Use-it-or-lose-it OK with written policy</p>
            <hr />
            <p className="text-sm font-semibold">Tools</p>
            <ul className="text-sm space-y-1">
              <li><a href="/tools/pto-accrual-calculator">PTO Calculator →</a></li>
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
