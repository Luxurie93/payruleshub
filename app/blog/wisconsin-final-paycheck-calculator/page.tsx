import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisconsin Final Paycheck Calculator: Estimate Final Wages",
  description:
    "Estimate a Wisconsin final paycheck with unpaid wages, overtime, commissions, PTO policy notes, deductions, and final wage timing rules.",
  alternates: {
    canonical: "https://payruleshub.com/blog/wisconsin-final-paycheck-calculator",
  },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="prose prose-sm max-w-none">
            <h1>Wisconsin Final Paycheck Calculator: Estimate Final Wages</h1>
            <p><strong>Last updated:</strong> September 2026</p>
            <p>
              A Wisconsin final paycheck estimate should start with wages already earned, then layer in overtime, commissions,
              bonus or fringe-benefit amounts that are due under an agreement or established policy, possible vacation/PTO payout,
              and ordinary payroll deductions. Use this guide as a practical worksheet before reviewing your final pay stub or
              asking payroll for an itemized explanation.
            </p>
            <p>
              This guide is educational only. It is not legal, tax, payroll, HR, accounting, or financial advice, and it does not
              guarantee a specific paycheck, tax result, wage-claim result, or legal outcome. Verify current Wisconsin and federal
              rules with official agencies or a qualified professional before making decisions.
            </p>

            <h2>Wisconsin final paycheck timing basics</h2>
            <p>
              Wisconsin wage-payment rules generally require most employers to pay earned wages at least monthly, with no longer
              than 31 days between pay periods. The Wisconsin Department of Workforce Development explains this rule in its
              <a href="https://dwd.wisconsin.gov/er/laborstandards/wages.htm"> Wage Payment and Collection</a> materials, and the
              statutory text appears in <a href="https://docs.legis.wisconsin.gov/statutes/statutes/109/03">Wisconsin Statutes section 109.03</a>.
              In practice, many final paychecks are handled on the next regular payday, but timing can depend on the pay period,
              the employer&apos;s normal payroll cycle, and any valid policy that affects final wages.
            </p>
            <p>
              DWD also notes that an employee who is not paid at the fixed payment time may be paid after demand, and wage claims
              can involve salaries, commissions, bonuses, vacation pay, illegal deductions, and other agreed-upon advantages. If
              wages remain unpaid, Wisconsin&apos;s wage-claim process and penalties under
              <a href="https://docs.legis.wisconsin.gov/statutes/statutes/109/11"> section 109.11</a> may become relevant.
            </p>

            <h2>What to include in a Wisconsin final paycheck estimate</h2>
            <p>
              Build the estimate from gross wages first. Depending on the employee&apos;s classification, pay agreement, handbook,
              and separation facts, a Wisconsin final paycheck estimate may include:
            </p>
            <ul>
              <li>Unpaid regular hourly wages or salary earned through the last day worked</li>
              <li>Overtime owed to nonexempt workers for eligible hours over 40 in a workweek under federal or applicable state rules</li>
              <li>Shift differentials, piece-rate earnings, tipped wages, or promised premium pay</li>
              <li>Earned commissions or nondiscretionary bonuses due under the compensation plan</li>
              <li>Vacation, PTO, holiday pay, severance, or other fringe benefits if due under an agreement or established policy</li>
              <li>Expense reimbursements if they are owed separately from wages</li>
              <li>Federal withholding, FICA, Wisconsin withholding, garnishments, benefit deductions, repayment deductions, and other authorized deductions</li>
            </ul>

            <h2>Wisconsin PTO and vacation payout notes</h2>
            <p>
              Wisconsin does not treat every leave balance the same way for every employee. The key question is usually whether
              vacation, PTO, holiday pay, severance, or a similar benefit is promised by contract, handbook, compensation plan, or
              established employer policy. DWD&apos;s wage-payment page lists vacation pay and similar agreed-upon advantages among the
              types of wage claims it may review, but a final answer often depends on the exact policy language and the facts of
              the separation.
            </p>
            <p>
              Before estimating a payout, save the version of the policy that applied while the time was earned, check whether the
              policy distinguishes vacation from sick leave or discretionary PTO, and look for conditions such as notice requirements,
              forfeiture language, accrual caps, or final-pay rate rules. DWD specifically warns that notice of quitting can affect
              fringe benefits like vacation or PTO and may affect final wages where a valid policy applies.
            </p>

            <h2>Wisconsin final paycheck calculator worksheet</h2>
            <p>Use this worksheet for a planning estimate:</p>
            <ol>
              <li><strong>Unpaid regular wages:</strong> <code>unpaid regular hours × hourly rate</code></li>
              <li><strong>Overtime wages:</strong> <code>eligible overtime hours × regular rate × 1.5</code></li>
              <li><strong>Payable PTO or vacation:</strong> <code>payable unused hours × hourly rate</code></li>
              <li><strong>Other earned compensation:</strong> add commissions, bonuses, piece-rate pay, shift premiums, severance, or holiday pay that is due</li>
              <li><strong>Estimated gross final paycheck:</strong> add items 1 through 4</li>
              <li><strong>Estimated net final paycheck:</strong> subtract federal income tax withholding, FICA, Wisconsin withholding, garnishments, and authorized deductions</li>
            </ol>
            <p>
              For the math, use PayRulesHub&apos;s <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> for final-week
              overtime, the <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to organize unused paid-time-off
              balances, and the <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a> for a rough net-pay estimate.
            </p>

            <h2>Example Wisconsin final paycheck estimate</h2>
            <p>Assume a Wisconsin hourly employee resigns and has the following final-period information:</p>
            <ul>
              <li>Hourly rate: $24</li>
              <li>Unpaid regular hours: 36</li>
              <li>Eligible overtime hours: 5</li>
              <li>Policy-payable unused vacation: 16 hours</li>
              <li>Earned commission due under the plan: $300</li>
            </ul>
            <p>Estimated gross final paycheck:</p>
            <ul>
              <li>Regular wages: <code>36 × $24 = $864</code></li>
              <li>Overtime wages: <code>5 × $36 = $180</code></li>
              <li>Vacation payout: <code>16 × $24 = $384</code></li>
              <li>Commission: <code>$300</code></li>
              <li><strong>Estimated gross final paycheck: <code>$1,728</code></strong></li>
            </ul>
            <p>
              The actual net paycheck can differ because of withholding elections, pre-tax benefits, supplemental wage treatment,
              year-to-date wage limits, garnishments, payroll corrections, or a dispute over whether a commission, bonus, or leave
              balance is due under the agreement or established policy.
            </p>

            <h2>Checklist before disputing a Wisconsin final paycheck</h2>
            <ul>
              <li>Save offer letters, wage notices, handbooks, PTO/vacation policies, commission plans, schedules, timecards, and final pay statements.</li>
              <li>Confirm the employer&apos;s normal pay period and whether the final wages were paid by the regular payday for those earned wages.</li>
              <li>Compare the pay stub against unpaid hours, overtime, pay rate, earned commissions, promised bonuses, and any payable leave balance.</li>
              <li>Ask payroll for a written explanation if vacation/PTO, commissions, deductions, or the final wage rate look different from the policy.</li>
              <li>Review current <a href="https://dwd.wisconsin.gov/er/laborstandards/wageclaim.htm">Wisconsin DWD wage-claim resources</a> if wages remain unpaid.</li>
            </ul>

            <h2>Related PayRulesHub resources</h2>
            <ul>
              <li><a href="/blog/late-paycheck-laws-by-state">Late Paycheck Laws by State</a></li>
              <li><a href="/blog/calculate-pay-and-overtime">Calculate Pay and Overtime</a></li>
              <li><a href="/blog/pto-accrual-explained">How PTO Accrual Works</a></li>
              <li><a href="/state-payroll-laws">State Payroll Laws &amp; Paycheck Guides</a></li>
            </ul>

            <h2>FAQ</h2>
            <h3>When is a final paycheck due in Wisconsin?</h3>
            <p>
              Wisconsin generally requires most employers to pay earned wages at least monthly, with no longer than 31 days between
              pay periods. Many final wages are paid through the next regular payroll cycle, but the exact timing should be checked
              against Wisconsin DWD guidance, section 109.03, and the employer&apos;s normal pay schedule.
            </p>
            <h3>Does Wisconsin require unused PTO or vacation payout?</h3>
            <p>
              It depends on the agreement or established employer policy. Wisconsin DWD lists vacation pay and similar agreed-upon
              advantages among wage-claim categories, but policy language can control whether a balance is payable at separation.
            </p>
            <h3>Can an employer reduce a Wisconsin final paycheck if notice was not given?</h3>
            <p>
              DWD states that notice of quitting may affect final wages or fringe-benefit payout if the employer has a policy,
              the employee was aware of it, and the policy applies. Review the exact policy and current agency guidance before
              assuming a deduction or reduced rate is valid.
            </p>
            <h3>How do I estimate taxes on a Wisconsin final paycheck?</h3>
            <p>
              Start with estimated gross final pay, then subtract expected federal withholding, Social Security and Medicare taxes,
              Wisconsin withholding, garnishments, and authorized deductions. Treat the result as a planning estimate, not a guaranteed tax calculation.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24"></div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Related PayRulesHub resources</h2>
            <ul className="space-y-2">
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/blog/late-paycheck-laws-by-state">→ Late Paycheck Laws by State</a></li>
              <li><a href="/state-payroll-laws">→ State Payroll Laws Hub</a></li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h2 className="font-bold">Estimate Wisconsin final pay</h2>
            <p className="text-sm text-gray-600">
              Add unpaid wages, overtime, payable PTO, commissions, and deductions before reviewing your final Wisconsin pay stub.
            </p>
            <a href="/tools/take-home-pay-estimator" className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</a>
            <hr />
            <p className="text-xs text-gray-500">
              General information only — not tax, legal, payroll, HR, accounting, or financial advice. Verify current rules with official agencies or a qualified professional.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
