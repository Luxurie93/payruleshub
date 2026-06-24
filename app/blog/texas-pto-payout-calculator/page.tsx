import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Texas PTO Payout Calculator: Estimate Unused Vacation Pay',
  description: 'Estimate PTO payout in Texas and learn when unused vacation may be paid based on employer policy, written agreements, and final paycheck rules.',
  alternates: { canonical: 'https://payruleshub.com/blog/texas-pto-payout-calculator' },
};

const articleHtml = `<h1>Texas PTO Payout Calculator: Estimate Unused Vacation Pay</h1>
<p>Texas PTO payout usually depends on the employer&#x27;s written policy or employment agreement. Unlike California, Texas does not broadly require every employer to pay unused vacation automatically. The key question is what the company promised in writing.</p>
<h2>Texas PTO payout formula</h2>
<p>If your employer pays unused PTO, estimate gross payout with:</p>
<p><code>Unused PTO hours × hourly rate = gross PTO payout</code></p>
<p>For salary employees:</p>
<p><code>Annual salary ÷ 2,080 = approximate hourly rate</code></p>
<h2>Example</h2>
<p>Assume:</p>
<ul>
<li>Hourly rate: $22</li>
<li>Unused PTO: 30 hours</li>
</ul>
<p>Estimated gross payout:</p>
<p><code>30 × $22 = $660</code></p>
<h2>When Texas PTO may be paid</h2>
<p>Unused PTO may be paid if:</p>
<ul>
<li>The employee handbook promises payout</li>
<li>An offer letter or contract promises payout</li>
<li>A written policy says earned vacation is payable at separation</li>
<li>The employer has an established practice that supports payout</li>
</ul>
<p>Unused PTO may not be paid if the written policy clearly says it is forfeited at separation and that policy is lawful and properly communicated.</p>
<h2>Texas final paycheck timing</h2>
<p>Texas final wage timing is different from PTO entitlement. In general:</p>
<ul>
<li>If fired or laid off: final wages are generally due within 6 calendar days</li>
<li>If you quit: final wages are generally due by the next regular payday</li>
</ul>
<p>PTO payout depends on whether PTO is owed under policy or agreement.</p>
<h2>Related PayRulesHub resources</h2>
<ul>
<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>
<li><a href="/blog/late-paycheck-laws-by-state">Final Paycheck Laws by State</a></li>
<li><a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a></li>
</ul>
<h2>FAQ</h2>
<h3>Does Texas require PTO payout?</h3>
<p>Usually it depends on the employer&#x27;s written policy or agreement.</p>
<h3>Can a Texas employer refuse to pay unused vacation?</h3>
<p>It may be allowed if the written policy clearly says unused vacation is not paid at separation.</p>
<h3>Is PTO payout taxed in Texas?</h3>
<p>Texas has no state income tax, but PTO payout is generally subject to federal payroll taxes.</p>
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
