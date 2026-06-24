import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Calculator Methodology",
  description:
    "See how PayRulesHub's payroll calculators estimate overtime, PTO accrual, hourly-to-salary conversion, take-home pay, and severance.",
  alternates: { canonical: "https://payruleshub.com/methodology" },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-sm max-w-none">
        <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide">Calculator transparency</p>
        <h1>Payroll Calculator Methodology</h1>
        <p><strong>Last updated:</strong> June 2026</p>
        <p>
          This page explains the general assumptions behind PayRulesHub calculators. Our calculators are
          built for fast educational estimates, not final payroll processing, tax filing, or legal decisions.
        </p>

        <h2>Overtime Pay Calculator</h2>
        <p>
          The overtime calculator starts with regular hourly pay and hours worked. For typical federal
          overtime scenarios, it estimates time-and-a-half for eligible hours over 40 in a workweek. Where
          state examples are discussed, we explain that state rules may include daily overtime, double time,
          exemptions, or industry-specific differences.
        </p>
        <p><strong>Basic formula:</strong> overtime hours × hourly rate × overtime multiplier.</p>

        <h2>PTO Accrual Calculator</h2>
        <p>
          The PTO calculator estimates earned paid time off based on a stated accrual rate or annual PTO
          allowance. It can help compare per-pay-period, monthly, or annual accrual patterns, but actual PTO
          balances depend on employer policy, caps, waiting periods, carryover rules, and usage history.
        </p>

        <h2>Hourly to Salary Calculator</h2>
        <p>
          The hourly-to-salary calculator multiplies an hourly rate by expected weekly hours and annualizes
          the result. It also breaks estimated pay into monthly, biweekly, weekly, and daily equivalents.
          The estimate assumes a consistent schedule and does not guarantee exempt/nonexempt status.
        </p>

        <h2>Take-Home Pay Estimator</h2>
        <p>
          The take-home pay estimator uses simplified withholding assumptions to approximate net pay after
          federal taxes, FICA, state tax assumptions, and deductions. Actual take-home pay can change based
          on W-4 elections, filing status, credits, pretax benefits, retirement contributions, local taxes,
          and payroll provider calculations.
        </p>

        <h2>Severance Pay Calculator</h2>
        <p>
          The severance calculator estimates payouts using common formulas such as one week or two weeks
          of pay per year of service. Severance is not guaranteed by the calculator and depends on employer
          policy, agreements, releases, tenure, and applicable law.
        </p>

        <h2>State-Specific Guides</h2>
        <p>
          State pages are written to explain general concepts and point readers toward relevant issues, such
          as final paycheck deadlines, PTO payout rules, overtime standards, or wage claim steps. They are
          not a substitute for official state agency guidance or professional advice.
        </p>

        <h2>Why Results May Differ From Actual Payroll</h2>
        <ul>
          <li>Employer-specific policies and payroll calendars</li>
          <li>Federal, state, and local tax elections or exemptions</li>
          <li>Pretax deductions, benefits, retirement plans, and garnishments</li>
          <li>Industry-specific wage rules or exemptions</li>
          <li>Manual payroll corrections, bonuses, commissions, or retroactive pay</li>
        </ul>

        <h2>Questions or Corrections</h2>
        <p>
          If a formula looks wrong or a state-specific note appears outdated, contact us at
          <strong> support@payruleshub.com</strong> and include the page URL plus the source you are comparing.
        </p>
      </article>
    </div>
  );
}
