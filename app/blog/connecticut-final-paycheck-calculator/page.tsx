import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connecticut Final Paycheck Calculator: Estimate Final Wages",
  description:
    "Estimate a Connecticut final paycheck with unpaid wages, overtime, PTO policy notes, deductions, and discharge vs resignation timing rules.",
  alternates: {
    canonical: "https://payruleshub.com/blog/connecticut-final-paycheck-calculator",
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
            <h1>Connecticut Final Paycheck Calculator: Estimate Final Wages</h1>
            <p><strong>Last updated:</strong> September 2026</p>
            <p>
              A Connecticut final paycheck estimate should start with every wage item earned through the last day of work, then
              separate what is gross pay from what may be withheld or deducted. For a practical estimate, gather regular hours,
              overtime hours, commissions, bonuses, shift premiums, payable PTO or vacation under policy, reimbursements, tax
              withholding, benefit deductions, wage garnishments, and any written separation documents.
            </p>
            <p>
              This guide is general education for paycheck planning and pay-stub review. It is not legal, tax, payroll, HR,
              accounting, or financial advice. Connecticut wage rules, tax withholding, policy language, exemptions, and the facts
              of a separation can change the final result, so verify important decisions with official agencies or a qualified
              professional.
            </p>

            <h2>Connecticut final paycheck timing: fired, laid off, or resigned</h2>
            <p>
              Connecticut General Statutes section 31-71c is the main official source for payment of wages when employment ends.
              The statute generally distinguishes between an employee who is discharged and an employee who voluntarily leaves.
              When an employee is discharged, unpaid wages are generally due not later than the business day next succeeding the
              date of discharge. When an employee quits or otherwise voluntarily leaves, unpaid wages are generally due on the
              next regular payday.
            </p>
            <p>
              Start with the official statute text in the Connecticut General Assembly&apos;s <a href="https://www.cga.ct.gov/current/pub/chap_558.htm#sec_31-71c">Chapter 558 wage law, Sec. 31-71c</a>.
              For wage disputes or unpaid wage claims, the Connecticut Department of Labor provides <a href="https://portal.ct.gov/dol/divisions/wage-and-workplace-standards/wage-complaint?language=en_US">Wage and Workplace Standards complaint instructions</a>.
            </p>

            <h2>What to include in a Connecticut final paycheck estimate</h2>
            <p>
              A calculator-style worksheet is useful because the final check can include more than the base hourly wages from the
              final pay period. Build the estimate in layers:
            </p>
            <ul>
              <li><strong>Unpaid regular wages:</strong> hourly wages or salary earned through the final day worked.</li>
              <li><strong>Overtime:</strong> eligible overtime earned in the final workweek, usually reviewed under both Connecticut and federal wage rules.</li>
              <li><strong>Commissions and bonuses:</strong> amounts earned under a written plan, offer letter, contract, or established payroll practice.</li>
              <li><strong>Shift differentials and premiums:</strong> promised weekend, night, hazard, or role-based premiums.</li>
              <li><strong>Unused PTO or vacation:</strong> include only if the employer policy, handbook, agreement, or separation document makes it payable.</li>
              <li><strong>Deductions and withholding:</strong> federal withholding, FICA, Connecticut withholding, benefits, garnishments, and other lawful deductions.</li>
            </ul>

            <h2>Quick Connecticut final paycheck formula</h2>
            <ol>
              <li><strong>Regular wages:</strong> <code>unpaid regular hours × regular hourly rate</code></li>
              <li><strong>Overtime wages:</strong> <code>eligible overtime hours × overtime rate</code></li>
              <li><strong>Payable PTO or vacation:</strong> <code>eligible unused hours × hourly rate</code></li>
              <li><strong>Other earned pay:</strong> add commissions, bonuses, premiums, or other wage items due under the applicable plan</li>
              <li><strong>Estimated gross final pay:</strong> add items 1 through 4</li>
              <li><strong>Estimated net final pay:</strong> subtract tax withholding, FICA, benefits, garnishments, and other lawful deductions</li>
            </ol>
            <p>
              Use PayRulesHub&apos;s <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> if the final week includes
              more than 40 hours, the <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to estimate unused paid
              leave value, and the <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a> to review net-pay assumptions.
            </p>

            <h2>Example Connecticut final paycheck estimate</h2>
            <p>
              Suppose a Connecticut hourly employee is discharged on Tuesday and payroll needs to estimate the final check before
              withholding:
            </p>
            <ul>
              <li>Hourly rate: $28</li>
              <li>Unpaid regular hours: 34</li>
              <li>Eligible overtime from the final workweek: 4 hours at time and a half</li>
              <li>Unused vacation payable under the employer policy: 12 hours</li>
              <li>Earned commission due under the commission plan: $300</li>
            </ul>
            <p>Estimated gross final pay:</p>
            <ul>
              <li>Regular wages: <code>34 × $28 = $952</code></li>
              <li>Overtime: <code>4 × $42 = $168</code></li>
              <li>Vacation payout: <code>12 × $28 = $336</code></li>
              <li>Commission: <code>$300</code></li>
              <li><strong>Estimated gross final paycheck: <code>$1,756</code></strong></li>
            </ul>
            <p>
              The actual net payment can be lower after withholding and deductions. It can also change if the commission plan has
              conditions, the PTO policy excludes payout, a deduction is disputed, or the employee&apos;s final hours are corrected.
            </p>

            <h2>Connecticut PTO and vacation payout notes</h2>
            <p>
              Do not assume every unused PTO, sick leave, or vacation balance automatically pays out. Connecticut final pay
              questions often turn on the employer&apos;s written policy, handbook, employment agreement, collective bargaining
              agreement, or separation terms. Save a copy of the policy that was in effect when the time was earned and compare it
              with the final pay stub.
            </p>
            <p>
              If the policy promises payout, include the eligible unused hours in your gross final pay estimate. If the policy is
              silent, conditional, or unclear, treat the calculator result as a planning number and verify the rule before relying
              on it.
            </p>

            <h2>Official Connecticut and federal sources</h2>
            <ul>
              <li>Connecticut General Assembly: <a href="https://www.cga.ct.gov/current/pub/chap_558.htm#sec_31-71c">Sec. 31-71c, Payment of wages on termination of employment</a></li>
              <li>Connecticut General Assembly: <a href="https://www.cga.ct.gov/current/pub/chap_558.htm#sec_31-71e">Sec. 31-71e, Withholding of part of wages</a></li>
              <li>Connecticut General Assembly: <a href="https://www.cga.ct.gov/current/pub/chap_558.htm#sec_31-76c">Sec. 31-76c, Length of workweek</a></li>
              <li>Connecticut Department of Labor: <a href="https://portal.ct.gov/dol/divisions/wage-and-workplace-standards/wage-complaint?language=en_US">Wage complaint forms and instructions</a></li>
              <li>U.S. Department of Labor: <a href="https://www.dol.gov/agencies/whd/overtime">Overtime Pay</a></li>
            </ul>

            <h2>Final paycheck checklist for Connecticut workers</h2>
            <ul>
              <li>Confirm whether the separation was a discharge, layoff, resignation, or another voluntary departure.</li>
              <li>Record the final day worked, final time punches, and the next regular payday.</li>
              <li>Save wage notices, offer letters, commission plans, bonus terms, handbooks, PTO policies, and separation paperwork.</li>
              <li>Compare the final pay stub against regular hours, overtime, premiums, commissions, PTO payout, and deductions.</li>
              <li>Ask payroll for an itemized explanation if a wage item, deduction, or PTO balance looks wrong.</li>
              <li>If wages appear unpaid, review the Connecticut Department of Labor wage complaint process.</li>
            </ul>

            <h2>Related PayRulesHub resources</h2>
            <ul>
              <li><a href="/states/connecticut">Connecticut Payroll Laws Guide</a></li>
              <li><a href="/blog/late-paycheck-laws-by-state">Late Paycheck Laws by State</a></li>
              <li><a href="/blog/overtime-rules-by-state">Overtime Rules by State</a></li>
              <li><a href="/blog/how-to-estimate-take-home-pay-in-2026">How to Estimate Take-Home Pay</a></li>
              <li><a href="/state-payroll-laws">State Payroll Laws Hub</a></li>
            </ul>

            <h2>FAQ</h2>
            <h3>When is a final paycheck due in Connecticut after discharge?</h3>
            <p>
              Connecticut General Statutes section 31-71c generally says unpaid wages are due not later than the business day
              next succeeding the date of discharge. Check the current statute and facts before acting.
            </p>
            <h3>When is a final paycheck due in Connecticut after resignation?</h3>
            <p>
              For an employee who voluntarily leaves, Connecticut section 31-71c generally points to payment in full on the next
              regular payday.
            </p>
            <h3>Does Connecticut require unused PTO or vacation payout?</h3>
            <p>
              PTO and vacation payout often depends on the employer&apos;s policy, agreement, or separation terms. Include unused
              leave in your estimate only when it appears payable under the applicable policy or agreement.
            </p>
            <h3>Can PayRulesHub calculate my exact Connecticut final paycheck?</h3>
            <p>
              No. PayRulesHub provides educational calculators and guides for planning. Exact final pay depends on current law,
              employer policy, payroll records, tax withholding, deductions, and the facts of the separation.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24"></div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Related PayRulesHub resources</h2>
            <ul className="space-y-2">
              <li><a href="/states/connecticut">→ Connecticut Payroll Laws Guide</a></li>
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
              <li><a href="/blog/late-paycheck-laws-by-state">→ Late Paycheck Laws by State</a></li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h2 className="font-bold">Estimate Connecticut final pay</h2>
            <p className="text-sm text-gray-600">
              Add unpaid wages, overtime, eligible PTO or vacation, commissions, and deductions before reviewing your final check.
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
