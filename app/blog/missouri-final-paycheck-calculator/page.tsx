import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missouri Final Paycheck Calculator: Estimate Final Wages",
  description:
    "Estimate a Missouri final paycheck with unpaid wages, overtime, commissions, PTO policy notes, deductions, and discharge final-pay timing rules.",
  alternates: {
    canonical: "https://payruleshub.com/blog/missouri-final-paycheck-calculator",
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
            <h1>Missouri Final Paycheck Calculator: Estimate Final Wages</h1>
            <p><strong>Last updated:</strong> September 2026</p>
            <p>
              A Missouri final paycheck estimate starts with wages earned through the last day worked, then adds any earned
              overtime, commissions, bonuses, premiums, and PTO or vacation that is payable under the employer&apos;s written policy
              or agreement. Use this guide as a calculator-style worksheet before comparing your final pay stub with time records,
              payroll messages, handbook language, and Missouri wage-payment resources.
            </p>
            <p>
              This article is general education for paycheck planning. It is not legal, tax, payroll, HR, accounting, or financial
              advice. Missouri wage rules, federal exemptions, employer policy documents, tax withholding settings, and the facts
              of a separation can change the answer. Confirm important decisions with official sources or a qualified professional.
            </p>

            <h2>Missouri final paycheck timing: discharged employees</h2>
            <p>
              Missouri has a specific final-wage rule for employees who are discharged or refused further employment. Missouri
              Revised Statutes section 290.110 says unpaid wages earned at the contract rate become due and payable on the day of
              discharge. The Missouri Department of Labor also explains that if wages are not paid at dismissal, the employee may
              contact the former employer by certified mail, return receipt requested, asking for wages due. If the employer does
              not pay within seven days after that written request, additional wage exposure can continue until payment, capped at
              sixty days.
            </p>
            <p>
              For resignations, retirements, and job abandonment, do not assume the same same-day discharge rule applies. Missouri
              wage-payment law generally requires covered employers to pay wages as often as semimonthly within sixteen days after
              the close of the payroll period, with some monthly-pay exceptions for certain salaried, administrative, professional,
              executive, sales, or commission-paid employees. When you are unsure, compare the final paycheck with the regular
              payday, your separation paperwork, and current official guidance.
            </p>

            <h2>What to include in a Missouri final paycheck estimate</h2>
            <p>
              Separate gross wages from deductions so you can identify whether the disagreement is about hours, rates, earned
              compensation, PTO treatment, or net-pay withholding. A practical Missouri final-pay worksheet should include:
            </p>
            <ul>
              <li><strong>Unpaid regular wages:</strong> hourly wages or salary earned through the last day worked.</li>
              <li><strong>Overtime:</strong> eligible overtime for nonexempt employees, usually time and a half after 40 hours in a workweek under federal rules.</li>
              <li><strong>Commissions and bonuses:</strong> amounts that were earned under a commission plan, bonus agreement, offer letter, or established policy.</li>
              <li><strong>Shift differentials and premiums:</strong> weekend, night, hazard, on-call, or other premiums that apply to final-period work.</li>
              <li><strong>Unused vacation or PTO:</strong> include only amounts payable under a contract, handbook, written PTO policy, or consistent employer practice.</li>
              <li><strong>Deductions and withholding:</strong> federal income tax withholding, FICA, Missouri withholding, benefit deductions, wage garnishments, and other lawful deductions.</li>
            </ul>

            <h2>Quick Missouri final paycheck formula</h2>
            <ol>
              <li><strong>Regular wages:</strong> <code>unpaid regular hours × regular hourly rate</code></li>
              <li><strong>Overtime wages:</strong> <code>eligible overtime hours × overtime rate</code></li>
              <li><strong>Payable PTO or vacation:</strong> <code>payable unused hours × hourly rate</code></li>
              <li><strong>Other earned compensation:</strong> add earned commissions, bonuses, differentials, and premiums</li>
              <li><strong>Estimated gross final pay:</strong> add items 1 through 4</li>
              <li><strong>Estimated net final pay:</strong> subtract federal, FICA, Missouri withholding, benefits, garnishments, and other deductions</li>
            </ol>
            <p>
              Use the <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> for final weeks over 40 hours, the
              <a href="/tools/pto-accrual-calculator"> PTO Accrual Calculator</a> to value unused leave, and the
              <a href="/tools/take-home-pay-estimator"> Take-Home Pay Estimator</a> to review estimated net pay after withholding.
            </p>

            <h2>Example Missouri final paycheck estimate</h2>
            <p>
              Suppose a Missouri hourly employee is discharged and wants to estimate the gross wages to review before tax
              withholding and deductions:
            </p>
            <ul>
              <li>Hourly rate: $24</li>
              <li>Unpaid regular hours in the final pay period: 36</li>
              <li>Eligible overtime: 6 hours at time and a half</li>
              <li>Unused vacation payable under the written policy: 12 hours</li>
              <li>Earned shift differential from the final week: $75</li>
            </ul>
            <p>Estimated gross final pay:</p>
            <ul>
              <li>Regular wages: <code>36 × $24 = $864</code></li>
              <li>Overtime: <code>6 × $36 = $216</code></li>
              <li>Vacation payout: <code>12 × $24 = $288</code></li>
              <li>Shift differential: <code>$75</code></li>
              <li><strong>Estimated gross final paycheck: <code>$1,443</code></strong></li>
            </ul>
            <p>
              The net deposit can be lower after withholding and deductions. The result can also change if the vacation policy
              limits payout, the overtime hours are exempt or misclassified, a commission has not yet been earned under the plan,
              or payroll later corrects time records.
            </p>

            <h2>Missouri PTO and vacation payout notes</h2>
            <p>
              Missouri&apos;s Department of Labor says employers are not generally required to provide vacation pay, holiday pay,
              sick leave, or severance pay. Those benefits are typically discretionary unless an employer has created a contract,
              written policy, handbook promise, or other agreement establishing the benefit. For final-pay estimates, that means
              the PTO question is usually document-specific: what did the policy say about accrual, caps, use-it-or-lose-it rules,
              resignation notice, discharge, and payout at separation?
            </p>
            <p>
              Save the handbook version in effect when the PTO was earned, pay-stub balance reports, time-off approvals, offer
              letters, commission plans, bonus plans, and any separation documents. Treat sick leave separately unless the employer
              policy expressly converts it into a payable wage item.
            </p>

            <h2>Official Missouri and federal sources</h2>
            <ul>
              <li>Missouri Department of Labor: <a href="https://labor.mo.gov/dls/general/termination-final-wages">Wages, Hours and Dismissal Rights</a></li>
              <li>Missouri Revisor of Statutes: <a href="https://revisor.mo.gov/main/OneSection.aspx?section=290.110">Section 290.110, unpaid wages at discharge</a></li>
              <li>Missouri Revisor of Statutes: <a href="https://revisor.mo.gov/main/OneSection.aspx?section=290.080">Section 290.080, semimonthly wage payment</a></li>
              <li>U.S. Department of Labor: <a href="https://www.dol.gov/agencies/whd/overtime">Overtime Pay</a></li>
              <li>Missouri Department of Revenue: <a href="https://dor.mo.gov/taxation/individual/">Individual income tax resources</a></li>
            </ul>

            <h2>Missouri final paycheck checklist</h2>
            <ul>
              <li>Confirm whether the separation was a discharge, resignation, retirement, layoff, or refusal of further employment.</li>
              <li>Download time punches, schedules, pay stubs, wage notices, commission plans, bonus terms, and PTO balances.</li>
              <li>Calculate unpaid regular wages, overtime, premiums, commissions, and policy-based PTO separately.</li>
              <li>For a discharge, compare the payment date with Missouri&apos;s same-day wage rule and the seven-day written-request process.</li>
              <li>Review deductions line by line and ask payroll for an itemized explanation if a net-pay amount looks wrong.</li>
              <li>Keep copies of any certified-mail wage request, payroll response, pay-stub correction, or wage-claim record.</li>
            </ul>

            <h2>Related PayRulesHub resources</h2>
            <ul>
              <li><a href="/blog/late-paycheck-laws-by-state">Late Paycheck Laws by State</a></li>
              <li><a href="/blog/overtime-rules-by-state">Overtime Rules by State</a></li>
              <li><a href="/blog/pto-accrual-explained">How PTO Accrual Works</a></li>
              <li><a href="/blog/how-to-estimate-take-home-pay-in-2026">How to Estimate Take-Home Pay in 2026</a></li>
              <li><a href="/state-payroll-laws">State Payroll Laws Hub</a></li>
            </ul>

            <h2>FAQ</h2>
            <h3>When is a final paycheck due in Missouri after firing or discharge?</h3>
            <p>
              Missouri law says unpaid wages earned at the contract rate are due and payable on the day of discharge. If they are
              not paid, official Missouri guidance describes a certified-mail written request process and a seven-day employer
              response window that can affect additional wage exposure.
            </p>
            <h3>Does Missouri require PTO payout in a final paycheck?</h3>
            <p>
              Missouri does not generally require employers to provide vacation or PTO. Payout usually depends on the employer&apos;s
              contract, handbook, written policy, or agreement. Include unused PTO in your estimate only when the policy makes it
              payable or the employer has otherwise promised payout.
            </p>
            <h3>Does overtime belong in a Missouri final paycheck?</h3>
            <p>
              Yes, if the employee is nonexempt and earned overtime during the final workweek or pay period. Most covered
              nonexempt employees use a time-and-a-half calculation after 40 hours in a workweek, subject to exemptions and industry
              rules.
            </p>
            <h3>Can this calculator guide determine my exact Missouri final wages?</h3>
            <p>
              No. PayRulesHub provides educational calculators and checklists. Exact final wages depend on current law, employer
              policy, payroll records, tax withholding, deductions, and the facts of the separation.
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
            <h2 className="font-bold">Estimate Missouri final pay</h2>
            <p className="text-sm text-gray-600">
              Add unpaid wages, overtime, policy-based PTO, earned commissions, taxes, and deductions before reviewing your last check.
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
