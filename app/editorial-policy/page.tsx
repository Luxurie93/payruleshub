import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Learn how PayRulesHub researches, writes, reviews, updates, and corrects its payroll calculators and employment guides.",
  alternates: { canonical: "https://payruleshub.com/editorial-policy" },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-sm max-w-none">
        <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide">Editorial standards</p>
        <h1>Editorial Policy</h1>
        <p><strong>Last updated:</strong> June 2026</p>
        <p>
          PayRulesHub publishes free payroll calculators and plain-English employment guides for U.S.
          workers, job seekers, small business owners, and managers. Our goal is to make common pay
          questions easier to understand while clearly explaining the limits of any estimate.
        </p>

        <h2>How We Choose Topics</h2>
        <p>
          We focus on practical wage and payroll questions that people search for before making a work,
          budgeting, or employment decision. Common topics include overtime, PTO accrual, final paychecks,
          take-home pay, severance, pay schedules, and wage timing rules.
        </p>

        <h2>How We Research Content</h2>
        <p>
          We prioritize primary and authoritative sources where available, including the U.S. Department
          of Labor, IRS publications, state labor agency websites, state wage payment statutes, and official
          government guidance. When rules vary by state or employer policy, we state that limitation clearly.
        </p>

        <h2>Calculator Assumptions</h2>
        <p>
          Calculators use simplified formulas to produce educational estimates. Each calculator is designed
          to make the math transparent, but results may differ from actual payroll because of tax elections,
          deductions, employer policies, local law, benefit plans, collective bargaining agreements, or other
          individual facts.
        </p>

        <h2>Review and Updates</h2>
        <p>
          We review high-traffic calculators and state-specific guides for clarity, accuracy, and usefulness.
          Pages may be updated when laws change, when users report errors, or when we find better ways to
          explain a calculation.
        </p>
        <p>
          Each update is intended to improve the reader's ability to understand the calculation or next step.
          We may revise examples, add official-source links, clarify assumptions, remove outdated phrasing,
          or add state-specific notes when a general answer could mislead a reader.
        </p>

        <h2>Source and Citation Standards</h2>
        <p>
          When a page discusses wage rules, taxes, or state-specific payroll issues, we try to rely on sources
          such as official state labor departments, the U.S. Department of Labor, IRS publications, state statutes,
          or agency FAQs. If a topic depends heavily on employer policy, such as PTO payout or severance, we say so
          rather than implying that one calculator can decide every situation.
        </p>

        <h2>Human Usefulness Standard</h2>
        <p>
          We do not publish pages only to target a keyword. A useful PayRulesHub page should help a reader make
          a practical next move: run a calculation, compare a pay stub, understand what information to gather,
          identify which state rule may matter, or decide when to contact HR, payroll, a state agency, or a professional.
        </p>

        <h2>Corrections</h2>
        <p>
          If you believe a page is inaccurate or outdated, contact us at <strong>support@payruleshub.com</strong>.
          Please include the page URL, the specific statement or formula in question, and any official source
          that may help us review the correction.
        </p>

        <h2>Advertising and Editorial Independence</h2>
        <p>
          PayRulesHub may display ads to keep the site free. Advertising does not determine our calculator
          formulas, topic selection, or editorial conclusions.
        </p>

        <h2>Not Professional Advice</h2>
        <p>
          PayRulesHub is educational only. We are not a law firm, accounting firm, payroll provider, or HR
          consultancy. Always verify important payroll, tax, or employment decisions with a qualified
          professional or official agency.
        </p>
      </article>
    </div>
  );
}
