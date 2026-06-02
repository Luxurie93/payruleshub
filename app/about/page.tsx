import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PayCalc | Free Payroll Calculators",
  description: "Learn about PayCalc and our mission to provide accurate, free payroll calculators.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1>About PayCalc</h1>

      <section className="mt-8 prose prose-sm max-w-none">
        <h2>Our Mission</h2>
        <p>
          PayCalc exists to make payroll calculations simple, free, and
          accessible to everyone. Whether you're an employee calculating your
          take-home pay, an employer estimating PTO, or someone planning for
          severance, we've got tools that help.
        </p>

        <h2>Why We Built This</h2>
        <p>
          Payroll confusion costs employees time and money. Our calculators aim
          to demystify common payroll scenarios with quick, accurate estimates.
          All calculations happen in your browser—no data collection, no
          signup, no tracking.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Overtime Pay Calculator</strong> — Instant calculations with
            state-specific notes
          </li>
          <li>
            <strong>PTO Accrual Calculator</strong> — Plan your paid time off
            accurately
          </li>
          <li>
            <strong>Hourly to Salary Converter</strong> — Quick wage conversions
          </li>
          <li>
            <strong>Take-Home Pay Estimator</strong> — Estimate net pay after
            taxes
          </li>
          <li>
            <strong>Severance Pay Calculator</strong> — Calculate potential
            severance packages
          </li>
        </ul>

        <h2>Important Disclaimer</h2>
        <p>
          PayCalc is <strong>not a substitute for professional advice.</strong>{" "}
          Our calculators are informational tools only. Always verify results
          with your HR, payroll, tax professional, or employer. Tax laws and
          employment rules vary significantly by state and company.
        </p>

        <h2>Privacy First</h2>
        <p>
          We don't store, sell, or track your personal data. All calculations
          happen securely in your browser. See our{" "}
          <a href="/privacy">privacy policy</a> for details.
        </p>

        <h2>Questions?</h2>
        <p>
          Contact us at <strong>support@example.com</strong> for feedback,
          suggestions, or issues.
        </p>
      </section>
    </div>
  );
}
