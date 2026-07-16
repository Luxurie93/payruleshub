import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'California Final Paycheck Calculator: Estimate Your Last Check',
  description: 'Use this California final paycheck calculator guide to estimate final wages, PTO, overtime, and waiting-time penalty exposure after quitting or being fired.',
  alternates: { canonical: 'https://payruleshub.com/blog/california-final-paycheck-calculator' },
};

const articleHtml = `<h1>California Final Paycheck Calculator: Estimate Your Last Check</h1>
<p>California has some of the strictest final paycheck rules in the country. If you were fired, your employer generally must pay your final wages immediately. If you quit, payment is usually due within 72 hours unless you gave at least 72 hours of notice, in which case final wages are due on your last day.</p>
<p>Use this guide with PayRulesHub&#x27;s paycheck tools to estimate what your final check may include.</p>
<h2>What to include in a California final paycheck</h2>
<p>A California final paycheck may include:</p>
<ul>
<li>Regular wages through your last day worked</li>
<li>Overtime or double-time earned but not yet paid</li>
<li>Commissions or bonuses that are earned and calculable</li>
<li>Accrued, unused vacation/PTO if your employer provides it</li>
<li>Reimbursements owed under company policy or California law</li>
</ul>
<p>California generally treats earned vacation as wages. That means accrued vacation usually cannot be forfeited at separation.</p>
<h2>Quick calculation formula</h2>
<p>Estimate your final check like this:</p>
<ol>
<li>Add unpaid regular hours: <code>hours × hourly rate</code></li>
<li>Add overtime: <code>overtime hours × overtime rate</code></li>
<li>Add unused vacation/PTO: <code>unused PTO hours × hourly rate</code></li>
<li>Add earned commissions, bonuses, or reimbursements</li>
<li>Subtract expected taxes and authorized deductions</li>
</ol>
<p>For a rough number, use the <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a>, then separately add PTO and other earned wages.</p>
<h2>California waiting-time penalty basics</h2>
<p>If an employer willfully fails to pay final wages on time, California waiting-time penalties may apply. The penalty can equal one day of wages for each day the final paycheck is late, up to 30 days.</p>
<p>This does not mean every late check automatically qualifies. Disputes, timing, and whether wages were actually due all matter. For official details, check the California Labor Commissioner&#x27;s Office.</p>
<h2>Example</h2>
<p>Assume:</p>
<ul>
<li>Hourly rate: $25</li>
<li>Unpaid regular hours: 32</li>
<li>Unused vacation: 20 hours</li>
<li>Overtime: 4 hours at time-and-a-half</li>
</ul>
<p>Estimated gross final wages:</p>
<ul>
<li>Regular wages: <code>32 × $25 = $800</code></li>
<li>Vacation payout: <code>20 × $25 = $500</code></li>
<li>Overtime: <code>4 × $37.50 = $150</code></li>
<li>Estimated gross final pay: <code>$1,450</code></li>
</ul>
<h2>Related PayRulesHub resources</h2>
<ul>
<li><a href="/blog/late-paycheck-laws-by-state">Final Paycheck Laws by State</a></li>
<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>
<li><a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></li>
</ul>
<h2>FAQ</h2>
<h3>When is a final paycheck due in California if fired?</h3>
<p>Generally immediately at termination.</p>
<h3>When is a final paycheck due in California if I quit?</h3>
<p>Generally within 72 hours, or on your last day if you gave at least 72 hours of notice.</p>
<h3>Does California require unused vacation payout?</h3>
<p>Generally yes. Earned vacation is usually treated as wages and must be paid at separation.</p>
<h3>Can sick leave be paid out too?</h3>
<p>California paid sick leave is usually not paid out at separation unless an employer policy or contract says otherwise.</p>
<p><em>This page is general information, not legal advice. Verify rules with the California Labor Commissioner&#x27;s Office.</em></p>`;

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
              <li><a href="/tools/take-home-pay-estimator">→ Use the related PayRulesHub calculator</a></li>
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
            <a href="/tools/take-home-pay-estimator" className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</a>
            <hr />
            <p className="text-xs text-gray-500">General information only — not tax, legal, or payroll advice. Verify current rules with official agencies or a qualified professional.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
