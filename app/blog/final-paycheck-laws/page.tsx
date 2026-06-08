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

const STATE_TABLE = [
  { state: "Alabama",        fired: "No state law — next payday",                          quit: "No state law — next payday" },
  { state: "Alaska",         fired: "Within 3 working days",                               quit: "Next payday (at least 3 days after notice)" },
  { state: "Arizona",        fired: "7 working days or next payday, whichever is first",   quit: "Next payday" },
  { state: "Arkansas",       fired: "Within 7 days",                                       quit: "Next payday" },
  { state: "California",     fired: "Immediately",                                         quit: "Within 72 hours (immediately if 72-hr notice given)" },
  { state: "Colorado",       fired: "Immediately",                                         quit: "Next payday" },
  { state: "Connecticut",    fired: "Next business day",                                   quit: "Next payday" },
  { state: "Delaware",       fired: "Next payday",                                         quit: "Next payday" },
  { state: "D.C.",           fired: "Next business day",                                   quit: "Next payday or within 7 days, whichever is first" },
  { state: "Florida",        fired: "No state law — next payday",                          quit: "No state law — next payday" },
  { state: "Georgia",        fired: "No state law — next payday",                          quit: "No state law — next payday" },
  { state: "Hawaii",         fired: "Immediately or next business day",                    quit: "Next payday (immediately if notice given)" },
  { state: "Idaho",          fired: "Next payday or within 10 days, whichever is first*",  quit: "Same as fired*" },
  { state: "Illinois",       fired: "Next payday (as soon as possible)",                   quit: "Next payday" },
  { state: "Indiana",        fired: "Next payday",                                         quit: "Next payday" },
  { state: "Iowa",           fired: "Next payday",                                         quit: "Next payday" },
  { state: "Kansas",         fired: "Next payday",                                         quit: "Next payday" },
  { state: "Kentucky",       fired: "Next payday or within 14 days, whichever is later",   quit: "Same as fired" },
  { state: "Louisiana",      fired: "Next payday or within 15 days, whichever is first",   quit: "Same as fired" },
  { state: "Maine",          fired: "Next payday or within 2 weeks of demand",             quit: "Same as fired" },
  { state: "Maryland",       fired: "Next payday",                                         quit: "Next payday" },
  { state: "Massachusetts",  fired: "Day of discharge",                                    quit: "Next payday" },
  { state: "Michigan",       fired: "Next payday",                                         quit: "Next payday" },
  { state: "Minnesota",      fired: "Immediately (within 24 hrs of demand)",               quit: "Next payday (or within 20 days)" },
  { state: "Mississippi",    fired: "No state law — next payday",                          quit: "No state law — next payday" },
  { state: "Missouri",       fired: "Day of discharge",                                    quit: "Next payday" },
  { state: "Montana",        fired: "Immediately (within 4 hrs or end of business day)",   quit: "Next payday or within 15 days" },
  { state: "Nebraska",       fired: "Next payday or within 2 weeks, whichever is first",   quit: "Same as fired" },
  { state: "Nevada",         fired: "Immediately (within 3 days)",                         quit: "Next payday or within 7 days, whichever is first" },
  { state: "New Hampshire",  fired: "Within 72 hours",                                     quit: "Next payday (within 72 hrs if notice given)" },
  { state: "New Jersey",     fired: "Next payday",                                         quit: "Next payday" },
  { state: "New Mexico",     fired: "Within 5 days",                                       quit: "Next payday" },
  { state: "New York",       fired: "Next payday",                                         quit: "Next payday" },
  { state: "North Carolina", fired: "Next payday",                                         quit: "Next payday" },
  { state: "North Dakota",   fired: "Next payday",                                         quit: "Next payday" },
  { state: "Ohio",           fired: "Next payday or within 15 days, whichever is first",   quit: "Same as fired" },
  { state: "Oklahoma",       fired: "Next payday",                                         quit: "Next payday" },
  { state: "Oregon",         fired: "End of next business day",                            quit: "Immediately if 48-hr notice; else within 5 days or next payday" },
  { state: "Pennsylvania",   fired: "Next payday",                                         quit: "Next payday" },
  { state: "Rhode Island",   fired: "Next payday (24 hrs if business closes/relocates)",   quit: "Next payday" },
  { state: "South Carolina", fired: "Within 48 hours or next payday",                      quit: "Same as fired" },
  { state: "South Dakota",   fired: "Next payday (or until employee returns property)",    quit: "Same as fired" },
  { state: "Tennessee",      fired: "Next payday or within 21 days, whichever is later",   quit: "Same as fired" },
  { state: "Texas",          fired: "Within 6 calendar days",                              quit: "Next payday" },
  { state: "Utah",           fired: "Within 24 hours",                                     quit: "Next payday" },
  { state: "Vermont",        fired: "Within 72 hours",                                     quit: "Next payday (or next Friday if none scheduled)" },
  { state: "Virginia",       fired: "Next payday",                                         quit: "Next payday" },
  { state: "Washington",     fired: "Next payday",                                         quit: "Next payday" },
  { state: "West Virginia",  fired: "Next payday",                                         quit: "Next payday" },
  { state: "Wisconsin",      fired: "Next payday (or within 1 month)",                     quit: "Same as fired" },
  { state: "Wyoming",        fired: "Next payday",                                         quit: "Next payday" },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Final Paycheck Laws by State: When Your Last Check Is Due (2026)",
    description:
      "Complete 50-state guide to final paycheck deadlines for quit vs. fired employees, PTO payout requirements, and what to do if your employer pays late.",
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
          text: "It depends on your state and whether you quit or were fired. Federally, final wages are due by the next regular payday under the FLSA. Many states go further — California requires immediate payment upon termination, Texas within 6 calendar days if fired, Utah within 24 hours if fired, and most other states by the next scheduled payday.",
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
          text: "In some states, yes — earned PTO is treated as wages and must be paid out on separation. California, Colorado, Illinois, Massachusetts, Nebraska, and North Dakota are examples. In most other states, it depends on the employer's written policy.",
        },
      },
      {
        "@type": "Question",
        name: "What can I do if my final paycheck is late?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Document your last day and hours worked, request payment in writing from your employer, and file a wage claim with your state labor department. Some states add daily penalty wages — California's 'waiting time penalty' can run up to 30 days of wages if the employer willfully fails to pay on time.",
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
                get paid</em>. The short answer: it depends on your state, and on whether you quit or
                were fired. Some states require your employer to hand you your final paycheck the same
                day. Others give them until the next regular payday.
              </p>
              <p>
                This guide breaks down <strong>final paycheck laws by state</strong> for all 50 states
                and D.C., explains the difference between quitting and being terminated, and covers
                whether unused PTO has to be paid out. Use our{" "}
                <a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a> to add up regular
                and overtime hours worked, and the{" "}
                <a href="/tools/take-home-pay-estimator">Take-Home Pay Estimator</a> to see the net
                amount after taxes.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-700 rounded p-4 not-prose my-4">
                <p className="text-sm font-semibold text-blue-900 mb-1">Disclaimer</p>
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
                  for each. Involuntary termination (fired or laid off) often triggers a faster payout
                  than voluntarily quitting.
                </li>
                <li>
                  <strong>Does your state require PTO payout?</strong> Some states treat earned vacation
                  as wages that <em>must</em> be paid. Others let employers keep it if their written
                  policy says so.
                </li>
              </ul>

              <h2>Federal Law: The Baseline (FLSA)</h2>
              <p>
                There is <strong>no federal law</strong> requiring employers to give you your final
                paycheck immediately. Under the Fair Labor Standards Act (FLSA), your final wages are
                simply due by the <strong>next regular payday</strong> for that pay period. That's the
                floor — many states go further, which is why where you work matters so much.
              </p>

              <h2>Final Paycheck Laws by State (All 50 + D.C.)</h2>
              <p>
                Below is the deadline for each state when you are fired or laid off versus when you
                quit. "Next payday" means the employer can wait until the next regularly scheduled pay
                date.
              </p>
            </article>

            {/* Full 50-state table — outside prose for full-width rendering */}
            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold w-1/4">State</th>
                    <th className="text-left px-4 py-3 font-semibold w-[37.5%]">If Fired / Laid Off</th>
                    <th className="text-left px-4 py-3 font-semibold w-[37.5%]">If You Quit</th>
                  </tr>
                </thead>
                <tbody>
                  {STATE_TABLE.map((row, i) => (
                    <tr
                      key={row.state}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-2.5 font-medium text-slate-800 border-t border-gray-100">
                        {row.state}
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 border-t border-gray-100">
                        {row.fired}
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 border-t border-gray-100">
                        {row.quit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <article className="prose prose-sm max-w-none">
              <p className="text-xs text-gray-500">
                *Idaho: if the employee submits a written request for earlier payment, wages are due
                within 48 hours. State rules carry exceptions and change over time — always confirm
                with your state Department of Labor.
              </p>

              <h2>Do Employers Have to Pay Out Unused PTO?</h2>
              <p>This is where workers lose the most money, so pay attention.</p>
              <ul>
                <li>
                  <strong>States where earned PTO must be paid out</strong> (it's treated as wages):
                  California, Colorado, Illinois, Massachusetts, Nebraska, North Dakota, and others.
                  In these states, "use it or lose it" policies that forfeit <em>earned</em> vacation
                  are generally not allowed.
                </li>
                <li>
                  <strong>States where it depends on company policy:</strong> Most other states let
                  the employer decide. If the written policy says unused PTO is forfeited at
                  separation, that's usually enforceable.
                </li>
              </ul>
              <p>
                <strong>Bottom line:</strong> Read your employee handbook. If your state protects
                earned PTO, your final check should include it. Use our{" "}
                <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to estimate your
                earned balance before separation.
              </p>

              <h2>What If Your Employer Pays You Late?</h2>
              <ol>
                <li>
                  <strong>Document everything</strong> — your last day, hours worked, accrued PTO,
                  and any communication.
                </li>
                <li>
                  <strong>Contact your employer in writing</strong> — a polite, clear request often
                  resolves it.
                </li>
                <li>
                  <strong>File a wage claim</strong> with your state labor department — most states
                  offer a free process.
                </li>
                <li>
                  <strong>Penalties may apply</strong> — some states (like California's "waiting time
                  penalty") make the employer owe extra wages for each day they're late, up to 30 days.
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
                  PayRulesHub provides free, easy-to-use payroll and wage calculators. Final paycheck
                  rules change frequently — always verify with your{" "}
                  <a
                    href="https://www.dol.gov/agencies/whd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    state Department of Labor
                  </a>{" "}
                  for your specific situation. Last reviewed: {LAST_UPDATED}.
                </p>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>How long does an employer have to pay your final paycheck?</h3>
              <p>
                It depends on your state and whether you quit or were fired. Federally, it's due by
                the next regular payday, but many states require immediate or near-immediate payment
                when an employee is terminated. California requires same-day payment; Utah requires
                within 24 hours; Texas within 6 calendar days. See the full table above for your state.
              </p>

              <h3>Can an employer withhold a final paycheck?</h3>
              <p>
                No. Employers generally cannot withhold earned wages, even if you owe them money or
                didn't return equipment. They must follow their state's deduction rules. Withholding
                final wages is a wage theft violation in every state and can trigger penalties and
                legal action.
              </p>

              <h3>Is unused vacation paid in a final check?</h3>
              <p>
                In some states, yes — earned PTO is treated as wages and must be paid on separation.
                California, Colorado, Illinois, Massachusetts, Nebraska, and North Dakota are notable
                examples where "use it or lose it" policies on <em>earned</em> vacation are not
                permitted. In other states, it depends entirely on the employer's written policy. Use
                our{" "}
                <a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a> to estimate your
                earned balance.
              </p>

              <h3>What can I do if my final paycheck is late?</h3>
              <p>
                Document the delay (your last day, hours owed, any communication), request payment in
                writing from your employer, and file a wage claim with your state labor department.
                Most states have a free process. Some states add significant daily penalties — California's
                "waiting time penalty" can reach up to 30 days of wages if the employer willfully
                withholds the final check.
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
              <h3 className="font-bold text-slate-900">Quick Reference</h3>
              <div className="text-sm space-y-1">
                <p className="font-medium">Immediate (if fired):</p>
                <p className="text-gray-700 pl-2">CA, CO, MA, MN, MO, MT, HI</p>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-medium">Within 24–72 hrs (if fired):</p>
                <p className="text-gray-700 pl-2">CT, D.C., NH, NV, UT, VT</p>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-medium">Within days (if fired):</p>
                <p className="text-gray-700 pl-2">AK (3), AZ (7), AR (7), NM (5), OR (next biz day), SC (48 hrs), TX (6), UC (24 hrs)</p>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-medium">Next payday (most states):</p>
                <p className="text-gray-700 pl-2">FL, GA, IL, IN, IA, KS, MD, MI, NJ, NY, NC, PA, VA, WA + others</p>
              </div>
              <hr />
              <div className="text-sm space-y-1">
                <p className="font-medium">PTO must be paid out:</p>
                <p className="text-gray-700 pl-2">CA, CO, IL, MA, NE, ND (and others)</p>
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
              <div className="mt-2 p-3 bg-blue-50 rounded text-xs text-blue-800">
                Last reviewed: {LAST_UPDATED}. Always verify with your{" "}
                <a
                  href="https://www.dol.gov/agencies/whd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  state DOL
                </a>
                .
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
