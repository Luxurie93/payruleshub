import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayRulesHub Blog",
  description: "Read helpful guides about payroll, overtime, PTO, final paychecks, and take-home pay.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog &amp; Guides</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Practical payroll guides, state-specific paycheck explainers, and calculator walkthroughs for workers and small teams.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'California Final Paycheck Calculator: Estimate Your Last Check',
            excerpt: 'Use this California final paycheck calculator guide to estimate final wages, PTO, overtime, and waiting-time penalty exposure after quitting or being fired.',
            link: '/blog/california-final-paycheck-calculator',
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
