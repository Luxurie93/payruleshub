import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PayRulesHub — Free Payroll Calculators & Employment Guides",
  description:
    "Learn how PayRulesHub creates free payroll calculators and plain-English employment guides for U.S. workers and small businesses.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1>About PayRulesHub</h1>

      <section className="mt-8 prose prose-sm max-w-none">
        <h2>Who This Site Is For</h2>
        <p>
          PayRulesHub is built for anyone who needs quick, reliable answers to everyday payroll questions:
        </p>
        <ul>
          <li><strong>Employees</strong> who want to understand their paycheck before it arrives</li>
          <li><strong>Job seekers</strong> comparing hourly vs. salaried offers or negotiating severance</li>
          <li><strong>Small business owners</strong> estimating overtime costs or PTO liabilities</li>
          <li><strong>HR generalists and managers</strong> who need a quick cross-check on payroll math</li>
          <li><strong>Students and new workers</strong> learning how pay, taxes, and deductions work in the U.S.</li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Payroll math should not require a spreadsheet, a call to HR, or a paid subscription to figure
          out. PayRulesHub exists to make the most common payroll calculations — overtime, PTO accrual,
          salary conversion, take-home pay, severance estimation — fast, free, and understandable for
          anyone.
        </p>
        <p>
          Every calculator on this site runs entirely in your browser. We do not collect your income
          figures, hours entered, or any other inputs. Nothing is stored or transmitted.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong><a href="/tools/overtime-pay-calculator">Overtime Pay Calculator</a></strong> —
            Calculate time-and-a-half and double-time pay with state-specific notes for CA, NY, TX,
            and more
          </li>
          <li>
            <strong><a href="/tools/pto-accrual-calculator">PTO Accrual Calculator</a></strong> —
            Estimate your paid time off balance by pay period, month, or year
          </li>
          <li>
            <strong><a href="/tools/hourly-to-salary-calculator">Hourly to Salary Calculator</a></strong> —
            Convert any hourly rate to annual, monthly, biweekly, and weekly equivalents
          </li>
          <li>
            <strong><a href="/tools">Take-Home Pay Estimator</a></strong> —
            Estimate net pay after federal taxes, FICA, state taxes, and pre-tax deductions
          </li>
          <li>
            <strong><a href="/tools/severance-pay-calculator">Severance Pay Calculator</a></strong> —
            Estimate severance using the most common formulas (1-week, 2-week, or monthly per year of service)
          </li>
        </ul>
        <p>
          We also publish plain-English guides on employment pay topics — overtime law, PTO policy,
          pay schedules, and more — in our <a href="/blog">blog</a>.
        </p>

        <h2>Our Editorial Standards</h2>
        <p>
          Every article and calculator on PayRulesHub is reviewed for accuracy against primary sources:
          the U.S. Department of Labor (dol.gov), IRS publications, and state labor agency websites.
          We update content when laws change and note the basis for any estimates or projections.
        </p>
        <p>
          We are a small independent site, not a law firm, accounting firm, or HR consultancy.
          Our content is informational — always verify critical payroll or employment decisions
          with a qualified professional.
        </p>

        <h2>Important Disclaimer</h2>
        <p>
          PayRulesHub calculators and articles are <strong>for informational and estimation purposes
          only</strong>. They are not legal, tax, or HR advice. Employment laws vary significantly
          by state, industry, company size, and individual employment agreements. Always verify
          results with your HR department, payroll provider, tax professional, or employment attorney
          before making decisions based on these estimates.
        </p>

        <h2>Privacy</h2>
        <p>
          We do not store, sell, or track any personal data you enter into our calculators. All
          calculations run in your browser. We use Google AdSense for advertising and Google Analytics
          for aggregate traffic analysis — see our <a href="/privacy">privacy policy</a> for details.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, corrections, or feedback? Reach us at{" "}
          <strong>support@payruleshub.com</strong>. We read every message and typically respond within
          2 business days.
        </p>
      </section>
    </div>
  );
}
