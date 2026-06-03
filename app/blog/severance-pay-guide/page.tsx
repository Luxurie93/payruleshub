import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Severance Pay Is Calculated: A Practical 2026 Guide",
  description:
    "Learn the common severance formulas, what's typically included in a package, how to negotiate, how taxes apply, and what the WARN Act means for your situation.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <article className="prose prose-sm max-w-none">
            <h1>How Severance Pay Is Calculated: A Practical 2026 Guide</h1>

            <p>
              Losing a job is stressful enough without also being confused about what you are owed.
              Severance pay is one of the most misunderstood parts of a separation — partly because there
              is no federal law requiring it, partly because the formulas vary widely by employer and
              role, and partly because what is in writing in your contract often differs from what is
              actually negotiable. This guide explains how severance is typically calculated, what package
              components to look for, how to approach negotiations, and how severance is taxed.
            </p>

            <h2>Is Severance Pay Required by Law?</h2>
            <p>
              Under federal law, severance pay is <strong>not required</strong> unless it is specified in:
            </p>
            <ul>
              <li>Your employment contract or offer letter</li>
              <li>A collective bargaining agreement (union contract)</li>
              <li>The company's written employee handbook or severance policy</li>
              <li>A standalone severance agreement</li>
            </ul>
            <p>
              The exception is the <strong>WARN Act</strong> (Worker Adjustment and Retraining Notification
              Act), which requires employers with 100+ employees to give 60 days notice before mass layoffs
              or plant closings. If proper notice is not given, affected workers are entitled to 60 days
              of pay and benefits as a penalty — this is sometimes called "WARN Act pay," not traditional
              severance.
            </p>
            <p>
              Some states have their own mini-WARN Acts with lower thresholds or longer notice requirements
              (New York, California, New Jersey, and others). Check your state's Department of Labor for
              details.
            </p>

            <h2>Common Severance Formulas</h2>

            <h3>Formula 1: One Week Per Year of Service (Most Common)</h3>
            <p>
              The most widely used formula for hourly and entry-level employees. Each year of completed
              service earns one week of severance pay.
            </p>
            <p>
              <code>Severance = Weekly Salary × Years of Service</code>
            </p>
            <p>
              Example: You earn $55,000/year ($1,057.69/week) and have 6 years of service.
            </p>
            <ul>
              <li>Severance: $1,057.69 × 6 = <strong>$6,346.14</strong></li>
            </ul>

            <h3>Formula 2: Two Weeks Per Year (Management/Professional)</h3>
            <p>
              More generous, common for manager-level and above, or in industries with competitive
              talent markets.
            </p>
            <p>
              Example: You earn $85,000/year ($1,634.62/week) and have 8 years of service.
            </p>
            <ul>
              <li>Severance: $1,634.62 × 2 × 8 = <strong>$26,153.92</strong></li>
            </ul>

            <h3>Formula 3: Monthly Salary Per Year of Service</h3>
            <p>
              Used by some large corporations and for executive-level roles. 1 month of base salary per
              year of service.
            </p>
            <p>
              Example: You earn $120,000/year ($10,000/month) and have 10 years of service.
            </p>
            <ul>
              <li>Severance: $10,000 × 10 = <strong>$100,000</strong></li>
            </ul>

            <h3>Formula 4: Fixed-Period Floor + Variable Component</h3>
            <p>
              Some policies guarantee a minimum floor (e.g., 4 weeks minimum) plus a tenure multiplier.
              This protects short-tenured employees while still rewarding longevity.
            </p>
            <p>
              Example policy: Maximum of either 4 weeks or 1 week per year of service. A 2-year employee
              gets 4 weeks (floor); a 7-year employee gets 7 weeks.
            </p>

            <h2>What Else Is Typically in a Severance Package?</h2>
            <p>
              Cash severance is only one component. A full separation package can include:
            </p>
            <ul>
              <li>
                <strong>Continued health insurance (COBRA subsidy):</strong> Some employers pay some
                or all of COBRA premiums for 1–6 months. Without a subsidy, COBRA can cost $600–$1,800+/month.
              </li>
              <li>
                <strong>Vesting acceleration:</strong> Some agreements accelerate unvested stock options
                or RSUs as part of severance, especially in tech.
              </li>
              <li>
                <strong>Outplacement services:</strong> Career coaching, resume review, and job placement
                assistance — common in larger companies.
              </li>
              <li>
                <strong>Non-disparagement and reference agreements:</strong> Terms about what each
                party can say publicly. A positive reference letter can have real monetary value.
              </li>
              <li>
                <strong>Accrued PTO payout:</strong> In states like California and Colorado, accrued
                vacation must be paid regardless. Others may include it voluntarily.
              </li>
              <li>
                <strong>Bonus proration:</strong> If you are terminated before a bonus pay date, some
                packages include a prorated portion of the annual bonus.
              </li>
            </ul>

            <h2>How to Negotiate Your Severance Package</h2>
            <p>
              Severance is almost always negotiable, even if it does not feel that way. A few principles:
            </p>
            <ul>
              <li>
                <strong>Do not sign immediately.</strong> You are usually given 21 days to consider a
                severance offer (45 days for group layoffs under the ADEA Waiver rules). Use the time.
              </li>
              <li>
                <strong>Identify your leverage.</strong> Do you have specialized knowledge? A large
                customer relationship? Stock unvested in the next 90 days? These are negotiating points.
              </li>
              <li>
                <strong>Ask for more cash or benefits, not just one.</strong> Asking for an extended
                healthcare subsidy may be more achievable than a higher cash number.
              </li>
              <li>
                <strong>Review the release of claims.</strong> Severance agreements almost always require
                you to release legal claims against the employer. If you believe you have been wrongfully
                terminated or discriminated against, consult an employment attorney before signing.
              </li>
              <li>
                <strong>Negotiate the reference.</strong> Get the reference agreement in writing. A
                positive, specific reference from your former manager is worth negotiating hard for.
              </li>
            </ul>

            <h2>How Is Severance Pay Taxed?</h2>
            <p>
              Severance pay is <strong>treated as ordinary income</strong> and is subject to federal and
              state income taxes, Social Security tax, and Medicare tax — the same as regular wages. Many
              employees are surprised when their severance check is significantly lower than expected after
              withholding.
            </p>
            <p>
              The withholding method matters:
            </p>
            <ul>
              <li>
                <strong>Aggregate method:</strong> The severance is added to your regular pay for the
                period and taxed at the combined rate. This can result in significant withholding if paid
                as a lump sum.
              </li>
              <li>
                <strong>Flat supplemental rate:</strong> The IRS allows (and some employers use) a flat
                22% federal withholding on supplemental wages under $1 million. This may over- or
                under-withhold depending on your actual bracket.
              </li>
            </ul>
            <p>
              You will reconcile all withholding on your annual tax return. If you expect to be in a lower
              bracket for the year (due to job loss), your actual tax may be lower than withheld.
            </p>

            <h2>Worked Example: Full Package Valuation</h2>
            <p>
              You earn $72,000/year, have 5 years of service, and are offered:
            </p>
            <ul>
              <li>5 weeks cash severance: 5 × ($72,000 ÷ 52) = $6,923.08</li>
              <li>3 months COBRA subsidy: ~$500/month × 3 = $1,500</li>
              <li>Outplacement services: $1,200 value</li>
              <li>PTO payout (80 hours): 80 × ($72,000 ÷ 2,080) = $2,769.23</li>
            </ul>
            <p>
              <strong>Total package value: ~$12,392</strong> — before taxes on cash components.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded p-4 mt-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Severance law and taxation are complex and vary by state and employment situation. This
                guide is for informational purposes only and is not legal or tax advice. Consult an
                employment attorney before signing any severance agreement and a CPA for tax guidance.
              </p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Can I collect unemployment while receiving severance pay?</h3>
            <p>
              It depends on your state. Some states offset unemployment benefits by the amount of severance
              received during the same period. Others allow both. The timing of your severance payment
              (lump sum vs. salary continuation) can also affect eligibility. Contact your state's
              unemployment agency immediately after separation for guidance.
            </p>

            <h3>What is a "garden leave" and is it the same as severance?</h3>
            <p>
              Garden leave means you are still technically employed (and collecting salary and benefits)
              during your notice period but are not required — or permitted — to come to work. It is not
              the same as severance, which is paid after employment ends. Garden leave is more common in
              the UK but occasionally appears in U.S. contracts for senior employees.
            </p>

            <h3>What happens to my 401(k) when I am laid off?</h3>
            <p>
              Your vested 401(k) balance is yours to keep regardless of termination. You can leave it
              with your former employer's plan (usually for at least 60 days), roll it to your new
              employer's plan, or roll it into an IRA. Taking a cash distribution triggers income tax
              plus a 10% early withdrawal penalty if you are under 59½.
            </p>

            <h3>If I am fired for cause, do I get severance?</h3>
            <p>
              Typically not. Most severance policies explicitly exclude employees terminated for cause
              (serious misconduct, fraud, policy violations). However, "cause" must usually meet a legal
              or policy definition. If you believe your termination was wrongful, consult an employment
              attorney before accepting or declining any severance offer.
            </p>

            <h3>Does the WARN Act apply to my situation?</h3>
            <p>
              The federal WARN Act applies to employers with 100+ full-time employees who lay off 50+
              employees at a single location (or 1/3 of the workforce) within a 30-day period. If your
              employer meets these thresholds and failed to give 60 days notice, you may be owed back pay.
              Many states have lower thresholds — check your state's mini-WARN statute.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related Tools &amp; Articles</h3>
            <ul className="space-y-2">
              <li><a href="/tools/severance-pay-calculator">→ Severance Pay Calculator</a></li>
              <li><a href="/tools/take-home-pay-estimator">→ Take-Home Pay Estimator</a></li>
              <li><a href="/tools/hourly-to-salary-calculator">→ Hourly to Salary Calculator</a></li>
              <li><a href="/blog/how-to-estimate-take-home-pay-in-2026">→ How to Estimate Take-Home Pay in 2026</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
            <h3 className="font-bold">Common Formulas</h3>
            <p className="text-sm"><strong>Standard:</strong> 1 week pay × years of service</p>
            <p className="text-sm"><strong>Management:</strong> 2 weeks × years of service</p>
            <p className="text-sm"><strong>Executive:</strong> 1 month × years of service</p>
            <hr />
            <p className="text-sm"><strong>Taxed as:</strong> ordinary income (same as wages)</p>
            <p className="text-sm"><strong>Required by law?</strong> Only if in your contract or WARN Act applies</p>
            <hr />
            <p className="text-sm font-semibold">Tools</p>
            <ul className="text-sm space-y-1">
              <li><a href="/tools/severance-pay-calculator">Severance Calculator →</a></li>
              <li><a href="/tools/take-home-pay-estimator">Take-Home Estimator →</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 3)</div>
      </div>
    </div>
  );
}
