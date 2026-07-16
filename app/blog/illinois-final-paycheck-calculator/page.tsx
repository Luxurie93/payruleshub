import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Illinois Final Paycheck Calculator: Estimate Your Last Check',
  description: 'Estimate an Illinois final paycheck with unpaid wages, commissions, bonuses, vacation pay, deductions, and next-payday timing rules.',
  alternates: { canonical: 'https://payruleshub.com/blog/illinois-final-paycheck-calculator' },
};

const articleHtml = `<h1>Illinois Final Paycheck Calculator: Estimate Your Last Check</h1>
<p>If you left a job in Illinois, your final paycheck can include more than regular hours from your last week. Illinois final compensation may include unpaid wages, earned commissions, earned bonuses, vacation pay, and other compensation owed under an employment agreement or policy.</p>
<p>This guide explains how to estimate a final check for planning purposes, which items to review, and where to verify the rule with official Illinois sources. It is educational only and is not legal, tax, HR, or payroll advice.</p>
<h2>Illinois final paycheck deadline</h2>
<p>The Illinois Department of Labor says final compensation, including bonus payments, vacation pay, wages, and commissions, must be paid on the next regularly scheduled payday after you quit or are fired. The Illinois statute says employers should pay in full at separation if possible, but no later than the next regular payday.</p>
<p>Official sources: the <a href="https://labor.illinois.gov/faqs/wage-payment-faq.html">Illinois Wage Payment and Collection Act FAQ</a>, the <a href="https://labor.illinois.gov/laws-rules/fls/wage-payment-collection.html">Illinois Department of Labor WPCA page</a>, and <a href="https://www.ilga.gov/documents/legislation/ilcs/documents/082001150K5.htm">820 ILCS 115/5</a>.</p>
<h2>What to include in an Illinois final paycheck estimate</h2>
<p>Start with gross final compensation before taxes. Depending on your situation and written policies, the estimate may include:</p>
<ul>
<li>Regular hourly wages or salary earned through your last day worked</li>
<li>Overtime earned in the final workweek but not yet paid</li>
<li>Earned commissions or bonuses that are due under the commission plan, bonus plan, offer letter, or agreement</li>
<li>Unused vacation or PTO that qualifies as earned vacation under the employer policy</li>
<li>Other owed compensation, such as holiday pay or fringe benefits promised by an agreement</li>
<li>Reimbursements if your employer separately owes approved business expenses</li>
</ul>
<h2>Quick Illinois final paycheck formula</h2>
<p>Use this simple worksheet to estimate gross final pay:</p>
<ol>
<li><strong>Unpaid regular wages:</strong> <code>regular hours × hourly rate</code></li>
<li><strong>Overtime:</strong> <code>overtime hours × overtime rate</code></li>
<li><strong>Vacation/PTO value:</strong> <code>eligible unused hours × hourly rate</code></li>
<li><strong>Other earned amounts:</strong> add commissions, bonuses, holiday pay, or agreed compensation</li>
<li><strong>Gross final compensation:</strong> add items 1 through 4</li>
<li><strong>Estimated net final check:</strong> subtract expected federal tax withholding, FICA, Illinois withholding, and authorized deductions</li>
</ol>
<p>For a rough net-pay estimate after federal and state withholding assumptions, use PayRulesHub's <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a>. If you also need overtime math, use the <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a>.</p>
<h2>Example Illinois final paycheck calculation</h2>
<p>Assume an Illinois hourly employee leaves after working part of a pay period:</p>
<ul>
<li>Hourly rate: $28</li>
<li>Unpaid regular hours: 38</li>
<li>Overtime hours: 3 at time-and-a-half</li>
<li>Eligible unused vacation: 16 hours</li>
<li>Earned commission due under plan: $250</li>
</ul>
<p>Estimated gross final compensation:</p>
<ul>
<li>Regular wages: <code>38 × $28 = $1,064</code></li>
<li>Overtime: <code>3 × $42 = $126</code></li>
<li>Vacation payout: <code>16 × $28 = $448</code></li>
<li>Commission: <code>$250</code></li>
<li><strong>Estimated gross final pay: <code>$1,888</code></strong></li>
</ul>
<p>The actual paycheck may differ because of tax withholding elections, benefit deductions, wage garnishments, commission-plan terms, employer records, or disputes about what was earned.</p>
<h2>Vacation and PTO payout in Illinois</h2>
<p>Illinois treats earned vacation as a form of compensation when an employer provides vacation. The Illinois Department of Labor's vacation FAQ explains how vacation policies, accrual rules, and "use it or lose it" language can affect whether vacation is considered earned and payable.</p>
<p>If your policy combines vacation and sick time into one PTO bank, review the policy carefully. If the policy separates paid sick leave from vacation, sick leave may have different payout rules. For official guidance, see the <a href="https://labor.illinois.gov/faqs/vacation-faq.html">Illinois Department of Labor Vacation FAQ</a>.</p>
<h2>Checklist before contacting payroll</h2>
<ul>
<li>Save your final pay stub, timesheets, schedule, and separation notice.</li>
<li>Download the vacation/PTO policy and any commission or bonus plan before losing system access.</li>
<li>Compare your last check date to the next regularly scheduled payday.</li>
<li>List unpaid regular hours, overtime hours, vacation hours, commissions, and deductions separately.</li>
<li>If the check seems short, ask payroll for a written wage statement or itemized explanation.</li>
</ul>
<h2>Related PayRulesHub resources</h2>
<ul>
<li><a href="/blog/late-paycheck-laws-by-state">Late Paycheck Laws by State</a></li>
<li><a href="/blog/california-final-paycheck-calculator">California Final Paycheck Calculator</a></li>
<li><a href="/blog/new-york-final-paycheck-calculator">New York Final Paycheck Calculator</a></li>
<li><a href="/state-payroll-laws">State Payroll Laws &amp; Paycheck Guides</a></li>
</ul>
<h2>FAQ</h2>
<h3>When is my final paycheck due in Illinois?</h3>
<p>Illinois final compensation is generally due by the next regularly scheduled payday after separation. The statute says payment should be made at separation if possible, but no later than that next payday.</p>
<h3>Does an Illinois final paycheck include unused vacation?</h3>
<p>It can. Illinois Department of Labor guidance says final compensation can include vacation pay, and the statute addresses earned vacation under employment contracts or policies. The exact result depends on the employer policy and what vacation was earned.</p>
<h3>Are commissions and bonuses included in Illinois final compensation?</h3>
<p>They may be included when they are earned and owed under the applicable plan or agreement. Review the commission plan, bonus terms, and final wage statement.</p>
<h3>Can my employer deduct money from my final paycheck?</h3>
<p>Illinois wage-payment rules restrict deductions from wages or final compensation without proper authorization or legal basis. Check the Illinois Department of Labor WPCA resources if a deduction appears unexpected.</p>
<p><em>Educational disclaimer: PayRulesHub provides general payroll calculators and guides for planning. We do not provide legal, tax, payroll, HR, or financial advice. Verify current Illinois rules with official agencies or a qualified professional before making decisions.</em></p>`;

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: articleHtml }} />

          <div className="my-8">
            <div className="ad-placeholder h-24"></div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related PayRulesHub resources</h3>
            <ul className="space-y-2">
              <li><a href="/tools/take-home-pay-estimator">→ Estimate net pay after withholding</a></li>
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/state-payroll-laws">→ State Payroll Laws Hub</a></li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">Estimate your final pay</h3>
            <p className="text-sm text-gray-600">Use PayRulesHub tools to estimate wages, overtime, PTO value, and net take-home pay before reviewing a final paycheck.</p>
            <a href="/tools/take-home-pay-estimator" className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</a>
            <hr />
            <p className="text-xs text-gray-500">General information only — not tax, legal, payroll, HR, or financial advice. Verify current rules with official agencies or a qualified professional.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
