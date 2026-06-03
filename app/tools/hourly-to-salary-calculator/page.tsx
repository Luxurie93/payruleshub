import { Metadata } from "next";
import HourlyToSalaryCalculator from "@/components/calculators/HourlyToSalaryCalculator";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator — Annual, Monthly & Biweekly | PayRulesHub",
  description:
    "Convert your hourly wage to annual, monthly, biweekly, and weekly salary equivalents instantly. Adjust for part-time hours or unpaid weeks. Free and no signup required.",
  keywords:
    "hourly to salary calculator, hourly to annual salary, wage calculator, salary converter, hourly rate to yearly salary",
  alternates: {
    canonical: "https://payruleshub.com/tools/hourly-to-salary-calculator",
  },
};

const LAST_UPDATED = "June 2026";

export default function Page() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hourly to Salary Calculator",
    description: "Convert hourly wage to annual salary and other pay frequencies",
    url: "https://payruleshub.com/tools/hourly-to-salary-calculator",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate annual salary from hourly rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiply your hourly rate × hours per week × 52. For a standard full-time schedule (40 hrs/week): $20/hr × 40 × 52 = $41,600/year. Adjust the hours figure if you work part-time or variable hours.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use 52 weeks or account for vacation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on what you are calculating. For gross annual earnings (what you are paid), use 52 weeks — your employer pays you even when you are on vacation. For actual hours worked (relevant for labor cost analysis), subtract vacation weeks.",
        },
      },
      {
        "@type": "Question",
        name: "How do I compare an hourly offer to a salaried offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Convert both to annual figures using the same hours assumption (usually 2,080 hours = 40 hrs × 52 weeks). Then compare total compensation including benefits — a salaried role with better health insurance may be worth more than its salary difference from an hourly role implies.",
        },
      },
      {
        "@type": "Question",
        name: "What is a biweekly equivalent salary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biweekly salary = Annual salary ÷ 26. For $50,000/year: $50,000 ÷ 26 = $1,923.08 per biweekly check (gross).",
        },
      },
      {
        "@type": "Question",
        name: "What is 2,080 hours and why does it matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2,080 hours is the standard full-time work year: 40 hours/week × 52 weeks. It's the baseline used by employers and the IRS to convert hourly rates to annual salaries. Part-time employees use fewer hours (e.g., 1,040 for 20 hrs/week).",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Hourly to Salary Calculator
          </h1>
          <p className="text-gray-600 mb-3">
            Convert any hourly wage to annual, monthly, biweekly, and weekly salary equivalents. Adjust for part-time schedules or unpaid weeks.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>·</span>
            <a
              href="https://www.bls.gov/oes/current/oes_nat.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              Source: BLS Wage Data
            </a>
            <span>·</span>
            <a
              href="https://www.irs.gov/publications/p15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              IRS Pub. 15 (Withholding)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <HourlyToSalaryCalculator />

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Results are gross (pre-tax) estimates. Actual take-home pay depends on federal and
                state tax rates, benefits deductions, and your W-4 elections. Use the{" "}
                <a href="/tools/take-home-pay-estimator" className="underline">
                  Take-Home Pay Estimator
                </a>{" "}
                to estimate net pay.
              </p>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 1)</div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Related Calculators</h2>
              <div className="space-y-3">
                <a
                  href="/tools/overtime-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Overtime Pay Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate overtime pay for any hourly rate</p>
                </a>
                <a
                  href="/tools/take-home-pay-estimator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Take-Home Pay Estimator</strong>
                  <p className="text-sm text-gray-600">Estimate net pay after taxes and deductions</p>
                </a>
                <a
                  href="/tools/pto-accrual-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>PTO Accrual Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate earned paid time off</p>
                </a>
                <a
                  href="/tools/severance-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Severance Pay Calculator</strong>
                  <p className="text-sm text-gray-600">Estimate your severance package</p>
                </a>
              </div>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24">Advertisement (Google AdSense Slot 2)</div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="faq-item">
                  <h3 className="font-semibold">How do I calculate annual salary from hourly rate?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Multiply your hourly rate × hours per week × 52. For a standard full-time schedule
                    (40 hrs/week): $20/hr × 40 × 52 = $41,600/year. Adjust the hours figure if you
                    work part-time or variable hours.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">Should I use 52 weeks or account for vacation?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    It depends on what you are calculating. For gross annual earnings (what you are
                    paid), use 52 weeks — your employer pays you even when you are on vacation. For
                    actual hours worked (relevant for labor cost analysis), subtract vacation weeks.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">How do I compare an hourly offer to a salaried offer?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Convert both to annual figures using the same hours assumption (usually 2,080
                    hours = 40 hrs × 52 weeks). Then compare total compensation including benefits —
                    a salaried role with better health insurance may be worth more than its salary
                    difference from an hourly role implies.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">What is a biweekly equivalent salary?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Biweekly salary = Annual salary ÷ 26. For $50,000/year: $50,000 ÷ 26 =
                    $1,923.08 per biweekly check (gross). See our{" "}
                    <a href="/blog/biweekly-vs-semimonthly-pay" className="text-teal-600 hover:underline">
                      biweekly vs semimonthly guide
                    </a>{" "}
                    for more on how pay frequency affects your budget.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">What is 2,080 hours and why does it matter?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    2,080 hours is the standard full-time work year: 40 hours/week × 52 weeks. It's
                    the baseline used by employers and the IRS to convert hourly rates to annual
                    salaries. Part-time employees use fewer hours (e.g., 1,040 for 20 hrs/week).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/biweekly-vs-semimonthly-pay" className="text-teal-700 hover:underline">→ Biweekly vs Semimonthly Pay</a></li>
                <li><a href="/blog/how-to-estimate-take-home-pay-in-2026" className="text-teal-700 hover:underline">→ Take-Home Pay Guide 2026</a></li>
                <li><a href="/tools/take-home-pay-estimator" className="text-teal-700 hover:underline">→ Take-Home Pay Estimator</a></li>
                <li><a href="/tools/overtime-pay-calculator" className="text-teal-700 hover:underline">→ Overtime Pay Calculator</a></li>
              </ul>
              <div className="mt-6 p-3 bg-blue-50 rounded text-xs text-blue-800">
                <strong>Note:</strong> Results are gross estimates. Use the{" "}
                <a href="/tools/take-home-pay-estimator" className="underline">
                  Take-Home Pay Estimator
                </a>{" "}
                to see net pay after taxes.
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
