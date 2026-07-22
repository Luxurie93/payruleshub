import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayRulesHub Blog",
  description: "Read helpful guides about payroll, overtime, PTO, final paychecks, state paycheck laws, and take-home pay.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog &amp; Guides</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Practical payroll guides, state-specific paycheck explainers, PTO payout resources, overtime examples, and calculator walkthroughs for workers and small teams.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Pennsylvania Take-Home Pay Calculator: Estimate Net Pay',
            excerpt: 'Estimate Pennsylvania take-home pay with federal withholding, FICA, state income tax, local earned income tax, and deductions.',
            link: '/blog/pennsylvania-take-home-pay-calculator',
          },
          {
            title: 'Calculate Pay and Overtime: Free Overtime Pay Calculator',
            excerpt: 'Calculate regular pay, overtime pay, and gross weekly pay with formulas, examples, and a free overtime calculator.',
            link: '/blog/calculate-pay-and-overtime',
          },
          {
            title: 'Illinois Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Estimate an Illinois final paycheck with unpaid wages, overtime, commissions, bonuses, vacation pay, deductions, and next-payday timing rules.',
            link: '/blog/illinois-final-paycheck-calculator',
          },
          {
            title: 'California Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Use this California final paycheck calculator guide to estimate final wages, PTO, overtime, and waiting-time penalty exposure after quitting or being fired.',
            link: '/blog/california-final-paycheck-calculator',
          },
          {
            title: 'New York Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Estimate a New York final paycheck with unpaid wages, overtime, commissions, deductions, and unused PTO policy considerations.',
            link: '/blog/new-york-final-paycheck-calculator',
          },
          {
            title: 'Florida Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Estimate a Florida final paycheck with unpaid wages, overtime, bonuses, commissions, and PTO payout policy considerations.',
            link: '/blog/florida-final-paycheck-calculator',
          },
          {
            title: 'Massachusetts Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Estimate a Massachusetts final paycheck, including unpaid wages, overtime, earned commissions, and vacation pay considerations.',
            link: '/blog/massachusetts-final-paycheck-calculator',
          },
          {
            title: 'Rhode Island Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Estimate a Rhode Island final paycheck with unpaid wages, overtime, deductions, commissions, and PTO policy considerations.',
            link: '/blog/rhode-island-final-paycheck-calculator',
          },
          {
            title: 'Late Paycheck Laws by State: What to Do If Wages Are Late',
            excerpt: 'Learn what to do if your paycheck is late, how state wage laws differ, and when to file a wage claim for unpaid or delayed wages.',
            link: '/blog/late-paycheck-laws-by-state',
          },
          {
            title: 'California Overtime Calculator: Daily and Weekly Overtime Rules',
            excerpt: 'Estimate California overtime pay with daily overtime, weekly overtime, double time, and seventh-day rules explained in plain English.',
            link: '/blog/california-overtime-calculator',
          },
          {
            title: 'Texas Overtime Calculator: Estimate Time-and-a-Half Pay',
            excerpt: 'Use this Texas overtime calculator guide to estimate time-and-a-half pay after 40 hours, with examples for hourly and salaried non-exempt workers.',
            link: '/blog/texas-overtime-calculator',
          },
          {
            title: 'Massachusetts Overtime Calculator: Estimate Time-and-a-Half Pay',
            excerpt: 'Estimate Massachusetts overtime pay for nonexempt workers, including weekly overtime examples and paycheck planning tips.',
            link: '/blog/massachusetts-overtime-calculator',
          },
          {
            title: 'Rhode Island Overtime Calculator: Estimate Time-and-a-Half Pay',
            excerpt: 'Estimate Rhode Island overtime pay for eligible nonexempt workweeks over 40 hours, with examples and paycheck review tips.',
            link: '/blog/rhode-island-overtime-calculator',
          },
          {
            title: 'California PTO Payout Calculator: Estimate Unused Vacation Pay',
            excerpt: 'Estimate California unused PTO or vacation payout at separation. Learn what counts, how to calculate gross payout, and where taxes may apply.',
            link: '/blog/california-pto-payout-calculator',
          },
          {
            title: 'Texas PTO Payout Calculator: Estimate Unused Vacation Pay',
            excerpt: 'Estimate PTO payout in Texas and learn when unused vacation may be paid based on employer policy, written agreements, and final paycheck rules.',
            link: '/blog/texas-pto-payout-calculator',
          },
          {
            title: 'New York PTO Payout Calculator: Estimate Unused Vacation Pay',
            excerpt: 'Estimate New York PTO or vacation payout at separation based on unused hours, hourly rate, and employer policy language.',
            link: '/blog/new-york-pto-payout-calculator',
          },
          {
            title: 'Florida PTO Payout Calculator: Estimate Unused Vacation Pay',
            excerpt: 'Estimate unused PTO or vacation payout in Florida using your policy, unused hours, hourly rate, and expected payroll taxes.',
            link: '/blog/florida-pto-payout-calculator',
          },
          {
            title: 'Massachusetts PTO Payout Calculator: Estimate Unused Vacation Pay',
            excerpt: 'Estimate Massachusetts unused vacation or PTO payout using earned hours, pay rate, and final wage considerations.',
            link: '/blog/massachusetts-pto-payout-calculator',
          },
          {
            title: 'Rhode Island PTO Payout Calculator: Estimate Unused Vacation Pay',
            excerpt: 'Estimate Rhode Island PTO or vacation payout from unused hours, hourly rate, employer policy, and final pay assumptions.',
            link: '/blog/rhode-island-pto-payout-calculator',
          },
          {
            title: 'Massachusetts Take-Home Pay Calculator: Estimate Net Pay',
            excerpt: 'Estimate Massachusetts take-home pay from salary or hourly wages, including federal tax, Massachusetts state tax, FICA, and common deductions.',
            link: '/blog/massachusetts-take-home-pay-calculator',
          },
          {
            title: 'Rhode Island Take-Home Pay Calculator: Estimate Net Pay',
            excerpt: 'Estimate Rhode Island take-home pay from hourly wages or salary, including federal taxes, Rhode Island state tax, and paycheck deductions.',
            link: '/blog/rhode-island-take-home-pay-calculator',
          },
          {
            title: 'New York Take-Home Pay Calculator: Estimate Net Pay',
            excerpt: 'Estimate New York take-home pay after federal tax, FICA, New York state tax assumptions, city tax considerations, and deductions.',
            link: '/blog/new-york-take-home-pay-calculator',
          },
          {
            title: 'Florida Take-Home Pay Calculator: Estimate Net Pay',
            excerpt: 'Estimate Florida take-home pay after federal income tax, FICA, deductions, and benefits, with no Florida state income tax assumption.',
            link: '/blog/florida-take-home-pay-calculator',
          },
          {
            title: 'How to Calculate Overtime Pay',
            excerpt: 'Learn overtime pay formulas with step-by-step examples.',
            link: '/blog/how-to-calculate-overtime-pay',
          },
          {
            title: 'Overtime Rules by State',
            excerpt: 'Quick reference guide to state-specific overtime laws.',
            link: '/blog/overtime-rules-by-state',
          },
          {
            title: 'How PTO Accrual Works',
            excerpt: 'Understand PTO accrual methods and formulas.',
            link: '/blog/pto-accrual-explained',
          },
          {
            title: 'Biweekly vs Semimonthly Pay',
            excerpt: 'Compare payroll frequencies and take-home differences.',
            link: '/blog/biweekly-vs-semimonthly-pay',
          },
          {
            title: 'How Severance Is Calculated',
            excerpt: 'Learn typical severance formulas and estimation tips.',
            link: '/blog/severance-pay-guide',
          },
          {
            title: 'How to Estimate Take-Home Pay',
            excerpt: 'Understand deductions and estimate your net paycheck.',
            link: '/blog/how-to-estimate-take-home-pay-in-2026',
          }
        ].map((post, i) => (
          <a
            key={i}
            href={post.link}
            className="p-6 bg-white border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2 text-primary">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <p className="text-primary font-semibold text-sm">Read More →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
