import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maryland Final Paycheck Calculator: Estimate Final Wages",
  description:
    "Estimate a Maryland final paycheck with unpaid wages, overtime, policy-based vacation payout, deductions, and regular-payday final wage timing.",
  alternates: {
    canonical: "https://payruleshub.com/blog/maryland-final-paycheck-calculator",
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
            <h1>Maryland Final Paycheck Calculator: Estimate Final Wages</h1>
            <p><strong>Last updated:</strong> September 2026</p>
            <p>
              A Maryland final paycheck estimate starts with all wages earned through the last day worked, then adds any other
              earned compensation that should appear in the last check. For a calculator-style worksheet, collect regular hours,
              overtime hours, commissions, bonuses, shift premiums, reimbursable items, unused vacation that is payable under the
              employer&apos;s policy, tax withholding, benefit deductions, garnishments, and the scheduled payday for the final pay period.
            </p>
            <p>
              This guide is general education for paycheck planning and wage-record review. It is not legal, tax, payroll, HR,
              accounting, or financial advice. Maryland wage rules, employer policies, exemptions, withholding settings, and the
              facts of a separation can change the result, so confirm important decisions with official sources or a qualified
              professional.
            </p>

            <h2>Maryland final paycheck timing: the regular payday rule</h2>
            <p>
              Maryland&apos;s Department of Labor explains that employers must establish regular paydays and pay earned wages on time.
              Its termination pay guidance points workers back to the normal wage-payment schedule rather than a special same-day
              deadline for every separation. In practical terms, many Maryland final-paycheck reviews ask whether all earned wages
              were included on or before the regular payday for the pay period that includes the final work.
            </p>
            <p>
              Start with the Maryland Department of Labor&apos;s <a href="https://www.labor.maryland.gov/labor/wagepay/wppayonterm.shtml">Termination Pay</a>
              page and its <a href="https://www.labor.maryland.gov/labor/wagepay/wppaidontime.shtml">Wages: What I Need to Know</a>
              page. For unpaid wage issues, Maryland also maintains wage-payment resources through the <a href="https://www.labor.maryland.gov/labor/wagepay/">Maryland Guide to Wage Payment and Employment Standards</a>.
            </p>

            <h2>What to include in a Maryland final paycheck estimate</h2>
            <p>
              A useful estimate separates gross wage items from deductions. Review each category before comparing your final pay
              stub with your time records and policy documents:
            </p>
            <ul>
              <li><strong>Unpaid regular wages:</strong> hourly wages or salary earned through the final day worked.</li>
              <li><strong>Overtime:</strong> eligible overtime, often calculated for nonexempt employees after more than 40 hours in a workweek.</li>
              <li><strong>Commissions, bonuses, and premiums:</strong> amounts earned under a commission plan, bonus plan, offer letter, or established practice.</li>
              <li><strong>Unused vacation:</strong> include accrued vacation only when it appears payable under Maryland&apos;s policy-based vacation guidance.</li>
              <li><strong>Reimbursements or allowances:</strong> separately track expense reimbursements because they may not be treated the same as wages.</li>
              <li><strong>Withholding and deductions:</strong> federal withholding, FICA, Maryland withholding, benefit deductions, wage attachments, and other lawful deductions.</li>
            </ul>

            <h2>Quick Maryland final paycheck formula</h2>
            <ol>
              <li><strong>Regular wages:</strong> <code>unpaid regular hours × regular hourly rate</code></li>
              <li><strong>Overtime wages:</strong> <code>eligible overtime hours × overtime rate</code></li>
              <li><strong>Payable vacation:</strong> <code>eligible unused vacation hours × hourly rate</code></li>
              <li><strong>Other earned pay:</strong> add earned commissions, bonuses, differentials, or premiums</li>
              <li><strong>Estimated gross final pay:</strong> add items 1 through 4</li>
              <li><strong>Estimated net final pay:</strong> subtract federal, FICA, Maryland withholding, benefits, garnishments, and other deductions</li>
            </ol>
            <p>
              Use PayRulesHub&apos;s <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> for final weeks over 40 hours,
              the <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to value unused leave, and the <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a>
              to review the difference between gross final wages and estimated net pay.
            </p>

            <h2>Example Maryland final paycheck estimate</h2>
            <p>
              Suppose a Maryland hourly employee separates after a final workweek and needs to estimate the gross amount that
              should be reviewed before tax withholding:
            </p>
            <ul>
              <li>Hourly rate: $26</li>
              <li>Unpaid regular hours: 32</li>
              <li>Eligible overtime: 5 hours at time and a half</li>
              <li>Unused vacation payable under the written policy: 16 hours</li>
              <li>Earned shift premium from the final pay period: $90</li>
            </ul>
            <p>Estimated gross final pay:</p>
            <ul>
              <li>Regular wages: <code>32 × $26 = $832</code></li>
              <li>Overtime: <code>5 × $39 = $195</code></li>
              <li>Vacation payout: <code>16 × $26 = $416</code></li>
              <li>Shift premium: <code>$90</code></li>
              <li><strong>Estimated gross final paycheck: <code>$1,533</code></strong></li>
            </ul>
            <p>
              The actual net payment can be lower after withholding and deductions. The result can also change if the vacation
              policy contains a clearly communicated forfeiture rule, the overtime hours are not eligible, a commission has not
              been earned under the plan, or payroll later corrects time records.
            </p>

            <h2>Maryland vacation payout and PTO policy notes</h2>
            <p>
              Maryland&apos;s official unused-vacation guidance is policy-focused. The Maryland Department of Labor says the answer
              depends on the employer&apos;s written policy and whether that policy was communicated to the employee at hiring. If a
              written policy says unused vacation is lost or forfeited at termination, the employee may not be able to claim it.
              If there is no written policy limiting compensation for accrued leave, the employee may be entitled to the cash
              value of unused earned vacation that was otherwise usable.
            </p>
            <p>
              Because that rule is document-sensitive, save the handbook, offer letter, PTO balance reports, accrual records, and
              separation paperwork. Treat sick leave separately unless an employer policy converts it into a payable wage item.
            </p>

            <h2>Official Maryland and federal sources</h2>
            <ul>
              <li>Maryland Department of Labor: <a href="https://www.labor.maryland.gov/labor/wagepay/wppayonterm.shtml">Termination Pay</a></li>
              <li>Maryland Department of Labor: <a href="https://www.labor.maryland.gov/labor/wagepay/wppaidontime.shtml">Wages: What I Need to Know</a></li>
              <li>Maryland Department of Labor: <a href="https://labor.maryland.gov/labor/wagepay/wpunusedvacpay.shtml">Unused Vacation at Termination</a></li>
              <li>U.S. Department of Labor: <a href="https://www.dol.gov/agencies/whd/overtime">Overtime Pay</a></li>
              <li>Maryland Comptroller: <a href="https://www.marylandtaxes.gov/individual/income/">Individual income tax resources</a></li>
            </ul>

            <h2>Final paycheck checklist for Maryland workers</h2>
            <ul>
              <li>Confirm the final day worked and the normal payday for the final pay period.</li>
              <li>Download or photograph time punches, schedules, wage notices, and recent pay stubs.</li>
              <li>Save commission plans, bonus terms, PTO policies, handbook pages, and separation documents.</li>
              <li>Calculate regular wages, overtime, premiums, earned commissions, and any payable vacation separately.</li>
              <li>Compare gross pay and deductions on the final pay stub with your worksheet.</li>
              <li>Ask payroll for an itemized explanation if hours, rates, deductions, or vacation treatment look wrong.</li>
            </ul>

            <h2>Related PayRulesHub resources</h2>
            <ul>
              <li><a href="/blog/late-paycheck-laws-by-state">Late Paycheck Laws by State</a></li>
              <li><a href="/blog/overtime-rules-by-state">Overtime Rules by State</a></li>
              <li><a href="/blog/pto-accrual-explained">How PTO Accrual Works</a></li>
              <li><a href="/blog/how-to-estimate-take-home-pay-in-2026">How to Estimate Take-Home Pay</a></li>
              <li><a href="/state-payroll-laws">State Payroll Laws Hub</a></li>
            </ul>

            <h2>FAQ</h2>
            <h3>When is a final paycheck due in Maryland?</h3>
            <p>
              Maryland guidance generally focuses on paying earned wages on the established regular payday. For a final-pay review,
              compare the wages earned through separation with the regular payday for that pay period and check current Maryland
              Department of Labor guidance.
            </p>
            <h3>Does Maryland require unused vacation payout at termination?</h3>
            <p>
              It depends heavily on the employer&apos;s written policy and whether the policy was communicated at hiring. Maryland&apos;s
              Department of Labor says a clear written forfeiture policy can limit payout, while no written limiting policy may
              support payment of unused earned vacation that was otherwise usable.
            </p>
            <h3>Does Maryland overtime affect a final paycheck?</h3>
            <p>
              Yes, if the final workweek includes eligible overtime. Start with overtime after more than 40 hours in a workweek for
              covered nonexempt employees, then review exemptions, industry rules, and any federal or state guidance that applies.
            </p>
            <h3>Can PayRulesHub calculate my exact Maryland final paycheck?</h3>
            <p>
              No. PayRulesHub provides educational calculators and guides for planning. Exact final pay depends on current law,
              employer policy, payroll records, deductions, withholding, and the facts of the separation.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24"></div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Related PayRulesHub resources</h2>
            <ul className="space-y-2">
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
              <li><a href="/blog/late-paycheck-laws-by-state">→ Late Paycheck Laws by State</a></li>
              <li><a href="/blog/pto-accrual-explained">→ PTO Accrual Guide</a></li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h2 className="font-bold">Estimate Maryland final pay</h2>
            <p className="text-sm text-gray-600">
              Add unpaid wages, overtime, policy-based vacation payout, commissions, and deductions before reviewing your last check.
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
