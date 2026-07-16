import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Massachusetts PTO Payout Calculator: Estimate Unused Vacation Pay',
  description: 'Estimate Massachusetts unused vacation or PTO payout using earned hours, pay rate, and final wage considerations.',
  alternates: { canonical: 'https://payruleshub.com/blog/massachusetts-pto-payout-calculator' },
};

const articleHtml = '<h1>Massachusetts PTO Payout Calculator: Estimate Unused Vacation Pay</h1>\n<p><strong>Last updated:</strong> June 2026</p>\n<p>Massachusetts treats earned vacation seriously in wage payment situations. If unused vacation is owed, estimating the payout starts with unused earned hours and your regular rate of pay.</p>\n<p>This page is designed to be practical: use it as a worksheet, then open the related PayRulesHub calculator to estimate the math. Because payroll rules depend on facts, employer policy, and current law, always verify important decisions with an official agency or qualified professional.</p>\n<h2>What to review for Massachusetts</h2>\n<ul><li>Earned vacation may be treated as wages in Massachusetts.</li><li>Final wage timing can be strict, especially for discharged employees.</li><li>Sick time and vacation/PTO can have different payout treatment, so read the policy carefully.</li></ul>\n<h2>How to estimate the amount</h2>\n<ol>\n<li>Collect your latest pay stub, hourly rate or salary, pay period, and year-to-date deduction information.</li>\n<li>List unpaid regular hours, overtime hours, earned commissions or bonuses, and any unused PTO or vacation balance.</li>\n<li>Calculate gross pay first, then estimate federal, state, local, FICA, and benefit deductions where applicable.</li>\n<li>Compare your estimate to the employer pay stub and note any gap you need to ask about.</li>\n</ol>\n<h2>Massachusetts example estimate</h2>\n<ul><li><strong>Unused vacation hours:</strong> 35</li><li><strong>Hourly rate:</strong> $31</li><li><strong>Gross vacation payout:</strong> 35 × $31 = $1,085</li><li><strong>Estimated net pay:</strong> Use the take-home pay estimator</li></ul>\n<p>These examples are simplified. Actual payroll may include pretax deductions, tax elections, benefit deductions, garnishments, retroactive adjustments, or employer-specific rules.</p>\n<h2>Documents to keep</h2>\n<ul>\n<li>Recent pay stubs and time records</li>\n<li>Employee handbook or PTO policy</li>\n<li>Offer letter, commission plan, or separation agreement</li>\n<li>Emails or written notices about final pay, PTO, or schedule changes</li>\n<li>Copies of any wage claim or agency correspondence</li>\n</ul>\n<h2>Related calculators and guides</h2>\n<ul>\n<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>\n<li><a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></li>\n<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>\n<li><a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a></li>\n<li><a href="/state-payroll-laws">State Payroll Laws Hub</a></li>\n</ul>\n<h2>FAQ</h2>\n<h3>Does Massachusetts require vacation payout?</h3><p>Earned vacation can be treated as wages, so unused earned vacation may be owed at separation.</p><h3>Is sick time paid out too?</h3><p>Sick time and vacation are not always treated the same. Check the employer policy and current state guidance.</p><h3>How do salary employees estimate vacation payout?</h3><p>Divide annual salary by 2,080 for a rough hourly estimate, then multiply by unused earned hours.</p>\n<h2>Important disclaimer</h2>\n<p><em>PayRulesHub provides educational payroll calculators and general information only. This page is not legal, tax, payroll, HR, or financial advice. State rules can change and individual facts matter, so verify with official agencies or a qualified professional before relying on any estimate.</em></p>';

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
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/state-payroll-laws">→ State Payroll Laws Hub</a></li>
              <li><a href="/blog/late-paycheck-laws-by-state">→ Late Paycheck Laws by State</a></li>
              <li><a href="/methodology">→ Calculator Methodology</a></li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">PayRulesHub tools</h3>
            <p className="text-sm text-gray-600">Estimate pay, overtime, PTO, and take-home income before making payroll decisions.</p>
            <a href="/tools/pto-accrual-calculator" className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</a>
            <hr />
            <p className="text-xs text-gray-500">General information only — not tax, legal, payroll, HR, or financial advice. Verify current rules with official agencies or a qualified professional.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
