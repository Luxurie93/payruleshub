import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'New York PTO Payout Calculator: Estimate Unused Vacation Pay',
  description: 'Estimate New York PTO or vacation payout at separation based on unused hours, hourly rate, and employer policy language.',
  alternates: { canonical: 'https://payruleshub.com/blog/new-york-pto-payout-calculator' },
};

const articleHtml = '<h1>New York PTO Payout Calculator: Estimate Unused Vacation Pay</h1>\n<p><strong>Last updated:</strong> June 2026</p>\n<p>New York PTO payout is highly policy-driven. Some employers pay unused vacation at separation, while others limit or forfeit payout through written policy. This guide helps you calculate the amount if the policy says payout is owed.</p>\n<p>This page is designed to be practical: use it as a worksheet, then open the related PayRulesHub calculator to estimate the math. Because payroll rules depend on facts, employer policy, and current law, always verify important decisions with an official agency or qualified professional.</p>\n<h2>What to review for New York</h2>\n<ul><li>Review the employee handbook, offer letter, PTO policy, and any separation agreement.</li><li>If vacation is earned and the policy promises payout, calculate unused hours times the applicable pay rate.</li><li>If the policy clearly limits payout, the policy language may control.</li></ul>\n<h2>How to estimate the amount</h2>\n<ol>\n<li>Collect your latest pay stub, hourly rate or salary, pay period, and year-to-date deduction information.</li>\n<li>List unpaid regular hours, overtime hours, earned commissions or bonuses, and any unused PTO or vacation balance.</li>\n<li>Calculate gross pay first, then estimate federal, state, local, FICA, and benefit deductions where applicable.</li>\n<li>Compare your estimate to the employer pay stub and note any gap you need to ask about.</li>\n</ol>\n<h2>New York example estimate</h2>\n<ul><li><strong>Unused PTO hours:</strong> 32</li><li><strong>Hourly rate:</strong> $29</li><li><strong>Gross PTO payout:</strong> 32 × $29 = $928</li><li><strong>Estimated net pay:</strong> Use the take-home pay estimator for taxes</li></ul>\n<p>These examples are simplified. Actual payroll may include pretax deductions, tax elections, benefit deductions, garnishments, retroactive adjustments, or employer-specific rules.</p>\n<h2>Documents to keep</h2>\n<ul>\n<li>Recent pay stubs and time records</li>\n<li>Employee handbook or PTO policy</li>\n<li>Offer letter, commission plan, or separation agreement</li>\n<li>Emails or written notices about final pay, PTO, or schedule changes</li>\n<li>Copies of any wage claim or agency correspondence</li>\n</ul>\n<h2>Related calculators and guides</h2>\n<ul>\n<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>\n<li><a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></li>\n<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>\n<li><a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a></li>\n<li><a href="/state-payroll-laws">State Payroll Laws Hub</a></li>\n</ul>\n<h2>FAQ</h2>\n<h3>Does New York automatically require PTO payout?</h3><p>Not always. PTO payout usually depends on the employer policy or agreement.</p><h3>How do I calculate payout for salary pay?</h3><p>A common estimate is annual salary divided by 2,080 to approximate an hourly rate.</p><h3>Can taxes reduce the payout?</h3><p>Yes. PTO payout is generally wage income and may be subject to payroll taxes.</p>\n<h2>Important disclaimer</h2>\n<p><em>PayRulesHub provides educational payroll calculators and general information only. This page is not legal, tax, payroll, HR, or financial advice. State rules can change and individual facts matter, so verify with official agencies or a qualified professional before relying on any estimate.</em></p>';

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
