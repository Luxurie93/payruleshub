import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indiana Final Paycheck Calculator: Estimate Final Wages",
  description:
    "Estimate an Indiana final paycheck with unpaid wages, overtime, commissions, vacation policy notes, deductions, and next-payday timing rules.",
  alternates: {
    canonical: "https://payruleshub.com/blog/indiana-final-paycheck-calculator",
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
            <h1>Indiana Final Paycheck Calculator: Estimate Final Wages</h1>
            <p><strong>Last updated:</strong> September 2026</p>
            <p>
              An Indiana final paycheck estimate should start with earned wages through the last day worked, then add any
              overtime, commissions, bonus amounts, or vacation/PTO payout that is due under a policy or agreement. This guide
              gives workers and small employers a practical worksheet for estimating gross final pay before reviewing a pay stub,
              asking payroll for details, or preparing an Indiana wage-claim file.
            </p>
            <p>
              This page is for general education only. It is not legal, tax, payroll, HR, accounting, or financial advice, and it
              does not guarantee a paycheck amount, tax result, wage-claim result, or legal outcome. Confirm current Indiana and
              federal rules with official agencies or a qualified professional before relying on a final-pay estimate.
            </p>

            <h2>Indiana final paycheck timing basics</h2>
            <p>
              Indiana final-pay timing is commonly discussed under Indiana Code Title 22, Article 2, including the wage-payment
              rules in <a href="https://iga.in.gov/laws/2025/ic/titles/22#22-2-5-1">IC 22-2-5-1</a> and the separated-employee
              rule in <a href="https://iga.in.gov/laws/2025/ic/titles/22#22-2-9-2">IC 22-2-9-2</a>. In practical terms, earned
              wages are generally expected to be paid by the next regular payday for the pay period involved, subject to the
              details of the employment relationship and any dispute over what was earned.
            </p>
            <p>
              If wages remain unpaid, the Indiana Department of Labor provides an
              <a href="https://www.in.gov/dol/wage-and-hour/online-wage-claim-form/"> online wage claim form</a>. That form asks
              for employee and employer contact information, the gross amount claimed, dates of employment, type of claim, and
              dates and hours worked for non-payment claims. It also includes examples for non-payment of paychecks, vacation, and
              payroll deductions.
            </p>

            <h2>What to include in an Indiana final paycheck estimate</h2>
            <p>
              Build the estimate from gross pay first, then separately estimate deductions. Depending on the facts and the pay
              documents, an Indiana final paycheck estimate may include:
            </p>
            <ul>
              <li>Unpaid regular hourly wages or salary earned through the final workday</li>
              <li>Overtime owed to nonexempt employees for eligible hours over 40 in a workweek</li>
              <li>Shift differentials, piece-rate earnings, tipped-wage make-up pay, or promised premium pay</li>
              <li>Earned commissions or nondiscretionary bonuses due under a commission plan or compensation agreement</li>
              <li>Vacation or PTO payout if required by the employer&apos;s policy, contract, handbook, or established practice</li>
              <li>Reimbursements or allowances if they are handled separately from wages</li>
              <li>Federal income tax withholding, Social Security and Medicare, Indiana withholding, garnishments, benefit deductions, and authorized payroll deductions</li>
            </ul>

            <h2>Indiana vacation and PTO payout notes</h2>
            <p>
              Indiana does not have a one-size-fits-all rule that every unused leave balance must be paid in every separation.
              The key question is usually what the employer promised in a written policy, employment agreement, handbook, offer
              letter, or consistent practice. The Indiana DOL wage-claim form specifically shows a vacation example, but whether a
              particular balance is owed can depend on policy wording, eligibility conditions, accrual caps, and whether the leave
              is classified as vacation, PTO, sick leave, or another benefit.
            </p>
            <p>
              Before assuming PTO is owed or forfeited, save the applicable policy, check whether the policy requires notice or
              active employment on a payout date, and compare the balance shown in the HR system to the accrual method in the
              handbook. If the policy is unclear, ask payroll or HR for the written basis for the final-pay decision.
            </p>

            <h2>Indiana final paycheck calculator worksheet</h2>
            <p>Use this simple worksheet to organize the estimate:</p>
            <ol>
              <li><strong>Unpaid regular wages:</strong> <code>unpaid regular hours × hourly rate</code></li>
              <li><strong>Overtime wages:</strong> <code>eligible overtime hours × regular rate × 1.5</code></li>
              <li><strong>Payable vacation or PTO:</strong> <code>payable unused hours × hourly rate</code></li>
              <li><strong>Other earned compensation:</strong> add commissions, bonuses, shift premiums, piece-rate pay, or severance that is due</li>
              <li><strong>Estimated gross final paycheck:</strong> add items 1 through 4</li>
              <li><strong>Estimated net final paycheck:</strong> subtract federal withholding, FICA, Indiana withholding, garnishments, and authorized deductions</li>
            </ol>
            <p>
              PayRulesHub&apos;s <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> can help estimate final-week
              overtime, the <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> can organize unused leave balances,
              and the <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a> can help approximate net pay after
              taxes and deductions.
            </p>

            <h2>Example Indiana final paycheck estimate</h2>
            <p>Assume an Indiana hourly employee separates with this final-period information:</p>
            <ul>
              <li>Hourly rate: $23</li>
              <li>Unpaid regular hours: 32</li>
              <li>Eligible overtime hours: 4</li>
              <li>Policy-payable unused vacation: 20 hours</li>
              <li>Earned commission due under the plan: $250</li>
            </ul>
            <p>Estimated gross final paycheck:</p>
            <ul>
              <li>Regular wages: <code>32 × $23 = $736</code></li>
              <li>Overtime wages: <code>4 × $34.50 = $138</code></li>
              <li>Vacation payout: <code>20 × $23 = $460</code></li>
              <li>Commission: <code>$250</code></li>
              <li><strong>Estimated gross final paycheck: <code>$1,584</code></strong></li>
            </ul>
            <p>
              The actual net payment may differ because of withholding elections, pre-tax deductions, garnishments, year-to-date
              wage limits, repayment authorizations, corrected time records, or a disagreement about whether a commission,
              vacation balance, bonus, or deduction is valid.
            </p>

            <h2>Checklist before filing or disputing an Indiana wage claim</h2>
            <ul>
              <li>Save offer letters, pay-rate notices, handbooks, PTO/vacation policies, commission plans, schedules, timecards, and pay stubs.</li>
              <li>Identify the pay period that included the final workday and the next regular payday for that period.</li>
              <li>Separate unpaid wages from disputed vacation, sick pay, reimbursements, bonuses, or severance because different rules and proof may apply.</li>
              <li>Ask payroll for a written explanation of any missing hours, unpaid overtime, unpaid commission, PTO decision, or deduction.</li>
              <li>Review the <a href="https://www.in.gov/dol/wage-and-hour/online-wage-claim-form/">Indiana DOL wage-claim instructions</a> if the amount remains unpaid.</li>
            </ul>

            <h2>Related PayRulesHub resources</h2>
            <ul>
              <li><a href="/blog/late-paycheck-laws-by-state">Late Paycheck Laws by State</a></li>
              <li><a href="/blog/how-to-calculate-overtime-pay">How to Calculate Overtime Pay</a></li>
              <li><a href="/blog/pto-accrual-explained">How PTO Accrual Works</a></li>
              <li><a href="/state-payroll-laws">State Payroll Laws &amp; Paycheck Guides</a></li>
            </ul>

            <h2>FAQ</h2>
            <h3>When is a final paycheck due in Indiana?</h3>
            <p>
              Indiana final wages are generally handled through the regular wage-payment cycle, and separated-employee timing is
              addressed in IC 22-2-9-2. Many final checks should be paid by the next regular payday for the applicable pay period,
              but you should verify the current statute, agency guidance, and payroll facts for the specific situation.
            </p>
            <h3>Does Indiana require unused PTO or vacation payout?</h3>
            <p>
              It depends on the policy or agreement. Indiana DOL&apos;s wage-claim materials include vacation as a possible claim type,
              but whether a specific balance is payable usually depends on the employer&apos;s written policy, contract terms, and facts
              of separation.
            </p>
            <h3>Can deductions reduce an Indiana final paycheck?</h3>
            <p>
              Some deductions may be required or authorized, such as taxes, garnishments, benefit deductions, or other lawful
              payroll deductions. If a deduction looks unusual, request the written authorization or legal basis before assuming it
              is valid.
            </p>
            <h3>How do I estimate taxes on an Indiana final paycheck?</h3>
            <p>
              Start with estimated gross final pay, then subtract expected federal income tax withholding, Social Security,
              Medicare, Indiana withholding, local withholding if applicable, garnishments, and authorized deductions. Treat the
              number as a planning estimate, not a guaranteed tax calculation.
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
            <h2 className="font-bold">Estimate Indiana final pay</h2>
            <p className="text-sm text-gray-600">
              Add unpaid wages, overtime, payable PTO, commissions, and deductions before reviewing your final Indiana pay stub.
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
