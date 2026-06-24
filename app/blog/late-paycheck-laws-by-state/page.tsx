import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Late Paycheck Laws by State: What to Do If Wages Are Late',
  description: 'Learn what to do if your paycheck is late, how state wage laws differ, and when to file a wage claim for unpaid or delayed wages.',
  alternates: { canonical: 'https://payruleshub.com/blog/late-paycheck-laws-by-state' },
};

const articleHtml = `<h1>Late Paycheck Laws by State: What to Do If Wages Are Late</h1>
<p>A late paycheck can create immediate stress: rent, bills, groceries, and childcare do not wait. Payday laws vary by state, but employers generally must pay earned wages on the regular payday or within the deadline required by state law.</p>
<h2>First step: identify the type of late pay</h2>
<p>Late pay issues usually fall into one of these categories:</p>
<ul>
<li>Regular paycheck is late</li>
<li>Final paycheck is late after quitting or being fired</li>
<li>Overtime was missing</li>
<li>PTO or vacation payout was missing</li>
<li>Commission or bonus was not included</li>
<li>Unauthorized deductions reduced pay</li>
</ul>
<p>The right next step depends on which category applies.</p>
<h2>What to do if your paycheck is late</h2>
<ol>
<li>Confirm the scheduled payday and pay period.</li>
<li>Check direct deposit timing and bank processing delays.</li>
<li>Save pay stubs, schedules, timesheets, and messages.</li>
<li>Ask payroll or HR in writing for a correction date.</li>
<li>If unresolved, file a wage claim with your state labor department.</li>
</ol>
<h2>Final paycheck deadlines can be faster</h2>
<p>If the late check is a final paycheck, your state may require faster payment than a normal payday. Some states require same-day payment when an employee is fired. Others allow payment by the next regular payday.</p>
<p>See <a href="/blog/late-paycheck-laws-by-state">Final Paycheck Laws by State</a> for a state-by-state starting point.</p>
<h2>Related PayRulesHub resources</h2>
<p>A paycheck can be &quot;on time&quot; but still wrong. If overtime or PTO was missing, estimate what you expected first:</p>
<ul>
<li><a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></li>
<li><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></li>
<li><a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a></li>
</ul>
<h2>FAQ</h2>
<h3>Is it illegal for an employer to pay late?</h3>
<p>It can violate state wage payment laws depending on timing, reason, and state rules.</p>
<h3>Can I file a wage claim for a late paycheck?</h3>
<p>Usually yes if earned wages remain unpaid after the legal deadline.</p>
<h3>What proof should I keep?</h3>
<p>Keep offer letters, schedules, timesheets, pay stubs, bank records, and written communication.</p>
<h3>Are late final paychecks treated differently?</h3>
<p>Often yes. Many states have specific final paycheck deadlines after quitting or termination.</p>
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
