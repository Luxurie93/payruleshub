import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'California PTO Payout Calculator: Estimate Unused Vacation Pay',
  description: 'Estimate California unused PTO or vacation payout at separation. Learn what counts, how to calculate gross payout, and where taxes may apply.',
  alternates: { canonical: 'https://payruleshub.com/blog/california-pto-payout-calculator' },
};

const articleHtml = `<h1>California PTO Payout Calculator: Estimate Unused Vacation Pay</h1>
<p>If you are leaving a job in California, unused vacation or PTO can be a major part of your final paycheck. California generally treats earned vacation as wages, which means accrued vacation typically must be paid out when employment ends.</p>
<h2>California PTO payout formula</h2>
<p>Use this simple estimate:</p>
<p><code>Unused PTO hours × hourly rate = gross PTO payout</code></p>
<p>For salaried employees, estimate hourly rate as:</p>
<p><code>Annual salary ÷ 2,080 = approximate hourly rate</code></p>
<p>Then multiply by unused PTO hours.</p>
<h2>Example PTO payout</h2>
<p>Assume:</p>
<ul>
<li>Salary: $72,800</li>
<li>Estimated hourly rate: <code>$72,800 ÷ 2,080 = $35</code></li>
<li>Unused PTO: 48 hours</li>
</ul>
<p>Estimated gross PTO payout:</p>
<p><code>48 × $35 = $1,680</code></p>
<p>Taxes and deductions can reduce the net amount you receive.</p>
<h2>What counts as payable PTO?</h2>
<p>Payable time often includes earned vacation or PTO that functions like vacation. Sick leave is different. California paid sick leave usually does not have to be paid out at separation unless your employer&#x27;s policy combines sick time into a general PTO bank or promises payout.</p>
<h2>Can a California employer use &quot;use it or lose it&quot; vacation rules?</h2>
<p>California generally does not allow forfeiture of earned vacation wages. Employers can usually cap accrual going forward, but they typically cannot take away vacation time already earned.</p>
<h2>Related PayRulesHub resources</h2>
<ul>
<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>
<li><a href="/blog/california-final-paycheck-calculator">California Final Paycheck Calculator</a></li>
<li><a href="/blog/late-paycheck-laws-by-state">Final Paycheck Laws by State</a></li>
</ul>
<h2>FAQ</h2>
<h3>Is PTO paid out when you quit in California?</h3>
<p>Generally, earned vacation/PTO must be paid out whether you quit or are fired.</p>
<h3>Is PTO payout taxed?</h3>
<p>Yes. PTO payout is generally taxable wage income.</p>
<h3>How do I estimate PTO payout after taxes?</h3>
<p>Calculate gross PTO first, then use a take-home pay estimator to approximate tax withholding.</p>
<p><em>This page is general information, not legal advice.</em></p>`;

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: articleHtml }} />

          <div className="my-8">
            <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related PayRulesHub resources</h3>
            <ul className="space-y-2">
              <li><a href="/tools/pto-accrual-calculator">→ Use the related PayRulesHub calculator</a></li>
              <li><a href="/tools/overtime-pay-calculator">→ Overtime Pay Calculator</a></li>
              <li><a href="/tools/pto-accrual-calculator">→ PTO Accrual Calculator</a></li>
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">PayRulesHub tools</h3>
            <p className="text-sm text-gray-600">Estimate pay, overtime, PTO, and take-home income before making payroll decisions.</p>
            <a href="/tools/pto-accrual-calculator" className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</a>
            <hr />
            <p className="text-xs text-gray-500">General information only — not tax, legal, or payroll advice. Verify current rules with official agencies or a qualified professional.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
