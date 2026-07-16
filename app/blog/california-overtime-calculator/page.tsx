import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'California Overtime Calculator: Daily and Weekly Overtime Rules',
  description: 'Estimate California overtime pay with daily overtime, weekly overtime, double time, and seventh-day rules explained in plain English.',
  alternates: { canonical: 'https://payruleshub.com/blog/california-overtime-calculator' },
};

const articleHtml = `<h1>California Overtime Calculator: Daily and Weekly Overtime Rules</h1>
<p>California overtime is more detailed than federal overtime. Many workers can earn overtime after more than 8 hours in a day, more than 40 hours in a week, and double time in certain situations.</p>
<p>Use the <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> to estimate pay, then apply California-specific rules below.</p>
<h2>California overtime basics</h2>
<p>For many non-exempt employees:</p>
<ul>
<li>More than 8 hours in one workday: 1.5× regular rate</li>
<li>More than 40 hours in one workweek: 1.5× regular rate</li>
<li>More than 12 hours in one workday: 2× regular rate</li>
<li>First 8 hours on the seventh consecutive workday: 1.5×</li>
<li>More than 8 hours on the seventh consecutive workday: 2×</li>
</ul>
<p>Exemptions and industry-specific rules can apply.</p>
<h2>Example daily overtime calculation</h2>
<p>Assume:</p>
<ul>
<li>Hourly rate: $24</li>
<li>Monday hours: 11</li>
</ul>
<p>Estimated Monday pay:</p>
<ul>
<li>First 8 hours: <code>8 × $24 = $192</code></li>
<li>Overtime hours 9–11: <code>3 × $36 = $108</code></li>
<li>Total: <code>$300</code></li>
</ul>
<h2>Example double time calculation</h2>
<p>Assume:</p>
<ul>
<li>Hourly rate: $24</li>
<li>One workday: 13 hours</li>
</ul>
<p>Estimated pay:</p>
<ul>
<li>First 8 hours: <code>$192</code></li>
<li>Hours 9–12: <code>4 × $36 = $144</code></li>
<li>Hour 13: <code>1 × $48 = $48</code></li>
<li>Total: <code>$384</code></li>
</ul>
<h2>Related PayRulesHub resources</h2>
<ul>
<li><a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></li>
<li><a href="/blog/how-to-calculate-overtime-pay">How to Calculate Overtime Pay</a></li>
<li><a href="/blog/overtime-rules-by-state">Overtime Rules by State</a></li>
</ul>
<h2>FAQ</h2>
<h3>Does California overtime start after 8 hours or 40 hours?</h3>
<p>For many non-exempt workers, both daily and weekly overtime rules can matter.</p>
<h3>What is double time in California?</h3>
<p>Double time is usually twice the regular rate and can apply after more than 12 hours in a day or after more than 8 hours on a seventh consecutive workday.</p>
<h3>Do salaried employees get overtime in California?</h3>
<p>Some salaried employees are non-exempt and may still qualify. Exemption status depends on duties, salary level, and law.</p>

<h2>How to use this estimate</h2>
<p>Use this page as a worksheet, not a final payroll decision. Start by writing down the pay period, hourly rate or salary, hours worked, deductions, and the state involved. Then compare the estimate with your actual pay stub, employer policy, offer letter, time records, or separation documents.</p>
<p>If the number looks different from what your employer paid, look for the cause before assuming the paycheck is wrong. Common differences include pretax deductions, local taxes, benefit elections, PTO caps, waiting periods, exempt versus non-exempt classification, commission rules, bonuses, reimbursements, or a different payroll calendar.</p>
<p>For state-specific questions, verify the current rule with the official state labor agency or the U.S. Department of Labor. Payroll and wage rules can change, and exceptions may apply based on job duties, industry, employer size, union agreements, or written company policies.</p>
<p><em>This page is general information, not legal advice.</em></p>`;

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
              <li><a href="/tools/overtime-pay-calculator">→ Use the related PayRulesHub calculator</a></li>
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
            <a href="/tools/overtime-pay-calculator" className="block text-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</a>
            <hr />
            <p className="text-xs text-gray-500">General information only — not tax, legal, or payroll advice. Verify current rules with official agencies or a qualified professional.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
