import { Metadata } from "next";
import TakeHomePayCalculator from "@/components/calculators/TakeHomePayCalculator";

export const metadata: Metadata = {
  title: "Take-Home Pay Estimator — Net Pay After Taxes | PayRulesHub",
  description:
    "Estimate your take-home pay from gross income in seconds. Accounts for federal tax, state tax, Social Security, and Medicare. Free, no signup required.",
  keywords:
    "take-home pay calculator, net pay calculator, paycheck calculator, after-tax pay, salary after taxes",
  alternates: {
    canonical: "https://payruleshub.com/tools/take-home-pay-estimator",
  },
};

const LAST_UPDATED = "June 2026";

export default function Page() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Take-Home Pay Estimator",
    description: "Free take-home pay estimator — estimate net pay after federal and state taxes",
    url: "https://payruleshub.com/tools/take-home-pay-estimator",
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
        name: "Why is my actual take-home pay different from the estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This is a simplified estimate. Actual deductions depend on your W-4 withholding adjustments, credits, pre-tax deductions (401k, HSA, health insurance), and state-specific rules that vary by employer.",
        },
      },
      {
        "@type": "Question",
        name: "What about retirement or health insurance deductions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This calculator does not include pre-tax deductions like 401(k), HSA, or health insurance premiums. Add those separately: subtract your pre-tax deductions from gross pay before entering the gross pay figure for a closer estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How are Social Security and Medicare taxes calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Social Security is withheld at 6.2% on wages up to $168,600 (2024 wage base). Medicare is withheld at 1.45% on all wages, plus an additional 0.9% for wages over $200,000 (single). This calculator uses the standard 6.2% + 1.45% FICA rates.",
        },
      },
      {
        "@type": "Question",
        name: "What federal tax rate should I use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use your marginal tax bracket as a rough estimate, or use your effective rate (total tax paid ÷ gross income from last year's return). Common effective rates: 10–12% for incomes under $50k, 12–22% for $50k–$100k, 22–24% for $100k–$200k.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find my state income tax rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select your state from the dropdown and the calculator auto-fills an estimated blended rate. Nine states have no income tax (TX, FL, NV, WA, WY, SD, AK, TN, NH). Rates range from 0% to about 13.3% in California.",
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
            Take-Home Pay Estimator
          </h1>
          <p className="text-gray-600 mb-3">
            Enter your gross pay and filing details to instantly estimate your net take-home pay after federal tax, state tax, and FICA deductions.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>·</span>
            <a
              href="https://www.irs.gov/taxtopics/tc751"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              Source: IRS / Social Security & Medicare
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
            <TakeHomePayCalculator />

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Results are simplified estimates. Actual take-home pay depends on W-4 withholding
                elections, pre-tax deductions (401k, HSA, health insurance), tax credits, and
                state-specific rules. Consult a tax professional or use the{" "}
                <a
                  href="https://www.irs.gov/individuals/tax-withholding-estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  IRS Withholding Estimator
                </a>{" "}
                for precise results.
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
                  <p className="text-sm text-gray-600">Calculate overtime pay</p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">Convert hourly to annual salary</p>
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
                  <h3 className="font-semibold">Why is my actual take-home pay different from the estimate?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    This is a simplified estimate. Actual deductions depend on your W-4 withholding
                    adjustments, credits, pre-tax deductions (401k, HSA, health insurance), and
                    state-specific rules that vary by employer.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">What about retirement or health insurance deductions?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    This calculator does not include pre-tax deductions like 401(k), HSA, or health
                    insurance premiums. Add those separately: subtract your pre-tax deductions from
                    gross pay before entering the gross pay figure for a closer estimate.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">How are Social Security and Medicare taxes calculated?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Social Security is withheld at 6.2% on wages up to the annual wage base. Medicare
                    is withheld at 1.45% on all wages. This calculator uses the standard 6.2% +
                    1.45% FICA rates per the{" "}
                    <a
                      href="https://www.irs.gov/taxtopics/tc751"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      IRS (Topic 751)
                    </a>
                    .
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">What federal tax rate should I use?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Use your marginal tax bracket as a rough estimate, or your effective rate (total
                    tax paid ÷ gross income from last year's return). Common effective rates: 10–12%
                    for incomes under $50k; 12–22% for $50k–$100k; 22–24% for $100k–$200k.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">How do I find my state income tax rate?</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Select your state from the dropdown and the calculator auto-fills an estimated
                    blended rate. Nine states have no income tax (TX, FL, NV, WA, WY, SD, AK, TN,
                    NH). Rates range from 0% to about 13.3% in California.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/how-to-estimate-take-home-pay-in-2026" className="text-teal-700 hover:underline">→ Take-Home Pay Guide 2026</a></li>
                <li><a href="/blog/biweekly-vs-semimonthly-pay" className="text-teal-700 hover:underline">→ Biweekly vs Semimonthly Pay</a></li>
                <li><a href="/tools/hourly-to-salary-calculator" className="text-teal-700 hover:underline">→ Hourly to Salary Calculator</a></li>
                <li><a href="/tools/overtime-pay-calculator" className="text-teal-700 hover:underline">→ Overtime Pay Calculator</a></li>
              </ul>
              <div className="mt-6 p-3 bg-blue-50 rounded text-xs text-blue-800">
                <strong>Note:</strong> For precise withholding, use the official{" "}
                <a
                  href="https://www.irs.gov/individuals/tax-withholding-estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  IRS Withholding Estimator
                </a>
                . Content current as of {LAST_UPDATED}.
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
