import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Final Paycheck Laws by State (2026 Guide) | PayRulesHub",
  description:
    "When does your last paycheck have to be paid? See final paycheck laws by state for quit vs. fired employees, plus PTO payout rules. Free calculator.",
  keywords:
    "final paycheck laws, final paycheck laws by state, when do you get your last paycheck, final paycheck rules, PTO payout laws, last paycheck after quitting",
  openGraph: {
    title: "Final Paycheck Laws by State (2026 Guide)",
    description:
      "When is your last paycheck due? State-by-state rules for quit vs. fired, plus PTO payout laws.",
  },
  alternates: {
    canonical: "https://payruleshub.com/blog/final-paycheck-laws",
  },
};

const LAST_UPDATED = "June 2026";

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Final Paycheck Laws by State: When Your Last Check Is Due (2026)",
    description:
      "State-by-state guide to final paycheck deadlines for quit vs. fired employees, PTO payout requirements, and what to do if your employer pays late.",
    url: "https://payruleshub.com/blog/final-paycheck-laws",
    dateModified: "2026-06-01",
    publisher: {
      "@type": "Organization",
      name: "PayRulesHub",
      url: "https://payruleshub.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does an employer have to pay your final paycheck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your state and whether you quit or were fired. Federally, final wages are due by the next regular payday under the FLSA. Many states go further — California requires immediate payment upon termination, Texas within 6 calendar days if fired, and most other states by the next scheduled payday.",
        },
      },
      {
        "@type": "Question",
        name: "Can an employer withhold a final paycheck?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Employers generally cannot withhold earned wages, even if you owe them money, failed to return equipment, or are under investigation. They must follow state deduction rules. Withholding final wages is a wage theft violation in all states.",
        },
      },
      {
        "@type": "Question",
        name: "Is unused vacation paid in a final check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In some states, yes — earned PTO is treated as wages and must be paid out on separation. California, Colorado, Illinois, Massachusetts, and Nebraska are examples. In most other states, it depends on the employer's written policy. Check your employee handbook and your state's labor law.",
        },
      },
      {
        "@type": "Question",
        name: "What can I do if my final paycheck is late?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Document your last day and hours worked, request payment in writing from your employer, and file a wage claim with your state labor department. Many states (like California) add daily penalty wages if the employer willfully fails to pay on time.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <article className="prose prose-sm max-w-none">
              <h1>Final Paycheck Laws by State: When Your Last Check Is Due (2026)</h1>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 not-prose mb-4">
                <span>Last updated: {LAST_UPDATED}</span>
                <span>·</span>
                <a
                  href="https://www.dol.gov/general/topic/wages/lastpaycheck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Source: U.S. DOL / Final Paycheck
                </a>
                <span>·</span>
                <a
                  href="https://www.dol.gov/agencies/whd/flsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  FLSA Reference
                </a>
              </div>

              <p>
                Losing or leaving a job is stressful enough without wondering <em>when you'll actually
                get paid</em>. The short answer: it depends on your state, and whether you quit or were
                fired. Some states require your employer to hand you your final paycheck the same day.
                Others give them until the next regular payday.
              </p>
              <p>
                This guide breaks down <strong>final paycheck laws by state</strong>, explains the
                difference between quitting and being terminated, and covers whether unused PTO has to be
                paid out. Use our{" "}
                <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> to add up regular
                and overtime hours, and the{" "}
                <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a> to see the net
                amount after taxes.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-700 rounded p-4 not-prose my-4">
                <p className="text-sm font-semibold text-blue-900 mb-1">Quick disclaimer</p>
                <p className="text-sm text-blue-800">
                  This is general information, not legal advice. Laws change and exceptions exist. For
                  your specific situation, check with your{" "}
                  <a
                    href="https://www.dol.gov/agencies/whd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    state labor department
                  </a>{" "}
                  or an employment attorney.
                </p>
              </div>

              <h2>The Two Questions That Decide Your Final Paycheck</h2>
              <p>Every state's final paycheck rule comes down to two things:</p>
              <ul>
                <li>
                  <strong>Did you quit or were you fired?</strong> Many states set different deadlines
                  for each. Involuntary termination (fired/laid off) often triggers a faster payout than
                  voluntarily quitting.
                </li>
                <li>
                  <strong>Does your state require PTO payout?</strong> Some states treat earned vacation
                  as wages that <em>must</em> be paid. Others let employers keep it if their policy says so.
                </li>
              </ul>

              <h2>Federal Law: The Baseline (FLSA)</h2>
              <p>
                There is <strong>no federal law</strong> requiring employers to give you your final
                paycheck immediately. Under the Fair Labor Standards Act (FLSA), your final wages are
                simply due by the <strong>next regular payday</strong> for that pay period.
              </p>
              <p>
                That's the floor. Many states go further and require faster payment — which is why where
                you work matters so much.
              </p>

              <h2>Final Paycheck Laws by State</h2>
              <p>
                Below is a general overview of when final wages are due. "Next payday" means your
                employer can wait until the next scheduled pay date.
              </p>

              <h3>States Requiring Immediate Payment When Fired</h3>
              <ul>
                <li>
                  <strong>California:</strong> Immediately if fired; within 72 hours if you quit
                  (immediately if you gave 72 hours' notice).
                </li>
                <li>
                  <strong>Colorado:</strong> Immediately upon termination; next payday if you quit.
                </li>
                <li>
                  <strong>Massachusetts:</strong> Day of discharge if fired; next payday if you quit.
                </li>
                <li>
                  <strong>Montana:</strong> Immediately if fired (within 4 hours or end of business
                  day); next payday if you quit.
                </li>
                <li>
                  <strong>Hawaii:</strong> Immediately or next business day if fired; next payday (or
                  immediately with notice) if you quit.
                </li>
              </ul>

              <h3>States With a Short Deadline (24–72 hours / a few days)</h3>
              <ul>
                <li>
                  <strong>Texas:</strong> Within 6 calendar days if fired; next payday if you quit.
                </li>
                <li>
                  <strong>Illinois:</strong> Next regular payday for both, at the latest.
                </li>
                <li>
                  <strong>Oregon:</strong> End of next business day if fired; varies by notice if you quit.
                </li>
                <li>
                  <strong>Nevada:</strong> Within 3 days if fired; next payday or 7 days (whichever is
                  earlier) if you quit.
                </li>
                <li>
                  <strong>New Mexico:</strong> Within 5 days if fired; next payday if you quit.
                </li>
              </ul>

              <h3>States That Follow "Next Regular Payday"</h3>
              <p>
                Many states — including <strong>Florida, Georgia, Alabama, New York, Pennsylvania, Ohio,
                Virginia, North Carolina, and Washington</strong> — generally require final wages by the
                next scheduled payday, sometimes with small variations for quit vs. fired.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded p-4 not-prose my-4">
                <p className="text-sm text-amber-800">
                  <strong>Don't see your state's exact rule above?</strong> State labor departments publish
                  the official deadlines. Always confirm with your state's Department of Labor — this is a
                  starting point, not the final word.
                </p>
              </div>

              <h2>Do Employers Have to Pay Out Unused PTO?</h2>
              <p>
                This is where workers lose the most money, so pay attention.
              </p>
              <ul>
                <li>
                  <strong>States where earned PTO must be paid out</strong> (treated as wages):
                  California, Colorado, Illinois, Massachusetts, Nebraska, and others. In these states,
                  "use it or lose it" policies that forfeit <em>earned</em> vacation are generally not
                  allowed.
                </li>
                <li>
                  <strong>States where it depends on company policy:</strong> Most other states let the
                  employer decide. If the written policy says unused PTO is forfeited at separation,
                  that's usually enforceable.
                </li>
              </ul>
              <p>
                <strong>Bottom line:</strong> Read your employee handbook. If your state protects earned
                PTO, your final check should include it. See our{" "}
                <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to estimate your
                earned balance.
              </p>

              <h2>What If Your Employer Pays You Late?</h2>
              <p>If your employer misses the legal deadline, you may have options:</p>
              <ol>
                <li>
                  <strong>Document everything</strong> — your last day, hours worked, accrued PTO, and
                  any communication.
                </li>
                <li>
                  <strong>Contact your employer in writing</strong> — a simple, polite request often
                  resolves it.
                </li>
                <li>
                  <strong>File a wage claim</strong> with your state labor department — most states have
                  a free online process.
                </li>
                <li>
                  <strong>Penalties may apply</strong> — some states (like California with its "waiting
                  time penalty") make the employer owe you extra wages for each day they're late.
                </li>
              </ol>

              <h2>Estimate Your Final Paycheck</h2>
              <p>Want a number before that check arrives? Use our free tools to add it up:</p>
              <ul>
                <li>
                  <a href="/tools/overtime-pay-calculator">
                    <strong>Overtime Pay Calculator</strong>
                  </a>{" "}
                  — calculate regular and overtime hours worked in your final pay period
                </li>
                <li>
                  <a href="/tools/pto-accrual-calculator">
                    <strong>PTO Accrual Calculator</strong>
                  </a>{" "}
                  — estimate accrued, unused PTO owed (where payout is required)
                </li>
                <li>
                  <a href="/tools/take-home-pay-estimator">
                    <strong>Take-Home Pay Estimator</strong>
                  </a>{" "}
                  — see your net amount after federal and state taxes
                </li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded p-4 not-prose mt-6">
                <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
                <p className="text-sm text-amber-700">
                  Final paycheck rules vary significantly by state and individual employment situation.
                  This guide is for general informational purposes only and is not legal advice. Always
                  verify with your{" "}
                  <a
                    href="https://www.dol.gov/agencies/whd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    state Department of Labor
                  </a>{" "}
                  or consult an employment attorney for your specific situation.
                </p>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>How long does an employer have to pay your final paycheck?</h3>
              <p>
                It depends on your state and whether you quit or were fired. Federally, final wages are
                due by the next regular payday. Many states go further — California requires immediate
                payment upon termination, Texas within 6 calendar days if fired, and most others by the
                next scheduled payday. Always check your state's specific rule.
              </p>

              <h3>Can an employer withhold a final paycheck?</h3>
              <p>
                No. Employers generally cannot withhold earned wages, even if you owe them money or
                didn't return equipment. They must follow their state's deduction rules. Withholding final
                wages is a wage theft violation in every state and can trigger penalties and legal action.
              </p>

              <h3>Is unused vacation paid in a final check?</h3>
              <p>
                In some states, yes — earned PTO is treated as wages and must be paid on separation.
                California, Colorado, Illinois, Massachusetts, and Nebraska are notable examples where
                "use it or lose it" policies on <em>earned</em> vacation are not permitted. In other
                states, it depends entirely on the employer's written policy. Use our{" "}
                <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to estimate your
                earned balance.
              </p>

              <h3>What can I do if my final paycheck is late?</h3>
              <p>
                Document the delay (your last day, hours owed, any communication), request payment in
                writing from your employer, and file a wage claim with your state labor department. Most
                states have a free process. Some states — most notably California — add daily penalty wages
                the employer must pay you for each day the final check is willfully withheld.
              </p>
            </article>

            <div className="my-8">
              <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Tools &amp; Articles</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/tools/overtime-pay-calculator" className="text-teal-700 hover:underline">→ Overtime Pay Calculator</a></li>
                <li><a href="/tools/pto-accrual-calculator" className="text-teal-700 hover:underline">→ PTO Accrual Calculator</a></li>
                <li><a href="/tools/take-home-pay-estimator" className="text-teal-700 hover:underline">→ Take-Home Pay Estimator</a></li>
                <li><a href="/tools/severance-pay-calculator" className="text-teal-700 hover:underline">→ Severance Pay Calculator</a></li>
                <li><a href="/blog/severance-pay-guide" className="text-teal-700 hover:underline">→ How Severance Pay Is Calculated</a></li>
                <li><a href="/blog/pto-accrual-explained" className="text-teal-700 hover:underline">→ How PTO Accrual Works</a></li>
                <li><a href="/blog/overtime-rules-by-state" className="text-teal-700 hover:underline">→ Overtime Rules by State</a></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20 space-y-3">
              <h3 className="font-bold text-slate-900">Final Paycheck Cheatsheet</h3>
              <div className="text-sm space-y-1">
                <p><strong>Immediate (if fired):</strong></p>
                <p className="text-gray-700 pl-2">CA, CO, MA, MT, HI</p>
              </div>
              <div className="text-sm space-y-1">
                <p><strong>Short deadline (days):</strong></p>
                <p className="text-gray-700 pl-2">TX (6 days), NV (3 days), OR (next biz day), NM (5 days)</p>
              </div>
              <div className="text-sm space-y-1">
                <p><strong>Next regular payday:</strong></p>
                <p className="text-gray-700 pl-2">FL, GA, NY, PA, OH, VA, NC, WA + most others</p>
              </div>
              <hr />
              <div className="text-sm space-y-1">
                <p><strong>PTO must be paid out:</strong></p>
                <p className="text-gray-700 pl-2">CA, CO, IL, MA, NE (and others)</p>
              </div>
              <div className="text-sm">
                <p><strong>Federal floor:</strong> Next regular payday (FLSA)</p>
              </div>
              <hr />
              <p className="text-sm font-semibold text-slate-800">Free Calculators</p>
              <ul className="text-sm space-y-1">
                <li><a href="/tools/overtime-pay-calculator" className="text-teal-700 hover:underline">OT Calculator →</a></li>
                <li><a href="/tools/pto-accrual-calculator" className="text-teal-700 hover:underline">PTO Calculator →</a></li>
                <li><a href="/tools/take-home-pay-estimator" className="text-teal-700 hover:underline">Take-Home Estimator →</a></li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded text-xs text-blue-800">
                Content current as of {LAST_UPDATED}. Verify with your{" "}
                <a
                  href="https://www.dol.gov/agencies/whd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  state DOL
                </a>{" "}
                for the latest rules.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 3)</div>
        </div>
      </div>
    </>
  );
}
