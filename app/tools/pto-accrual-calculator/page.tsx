import { Metadata } from "next";
import PTOCalculator from "@/components/calculators/PTOCalculator";

export const metadata: Metadata = {
  title: "PTO Accrual Calculator — Hourly & Salaried | PayRulesHub",
  description:
    "Calculate your PTO accrual balance by pay period, month, or year. Works for hourly and salaried employees on biweekly, semimonthly, or monthly pay schedules.",
  keywords: "pto calculator, paid time off, accrual calculator",
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PTO Accrual Calculator",
    description: "Free PTO accrual calculator for hourly and salaried employees",
    url: "https://payruleshub.com/tools/pto-accrual-calculator",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-slate-900">PTO Accrual Calculator</h1>
        <div className="mb-6">
          <div className="ad-placeholder h-24"></div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <PTOCalculator />

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
              <p className="text-sm text-amber-700">
                Results are estimates based on the accrual inputs provided. Your actual PTO balance
                depends on your employer's specific policy, any caps on accrual, waiting periods, and
                applicable state law. Always verify your balance against your official pay stubs and
                employee handbook.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-3">
                <a
                  href="/tools/overtime-pay-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Overtime Pay Calculator</strong>
                  <p className="text-sm text-gray-600">Calculate overtime compensation</p>
                </a>
                <a
                  href="/tools/hourly-to-salary-calculator"
                  className="block p-3 bg-white border rounded hover:shadow-md transition"
                >
                  <strong>Hourly to Salary Calculator</strong>
                  <p className="text-sm text-gray-600">Convert hourly wage to annual salary</p>
                </a>
              </div>
            </div>

            <div className="my-8">
              <div className="ad-placeholder h-24"></div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="faq-item">
                  <h4 className="font-semibold">What is PTO accrual?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    PTO accrual is the process of earning paid time off gradually over time —
                    usually per hour worked or per pay period. Instead of receiving all days upfront,
                    you build your balance incrementally throughout the year.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">How do I find my accrual rate?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Check your employee handbook or ask HR. Accrual rates are often listed as hours
                    earned per pay period (e.g., "3.08 hours per biweekly period") or as a total
                    annual allowance (e.g., "10 days per year"). To convert: annual hours ÷ number
                    of pay periods = per-period accrual.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Do I get paid for unused PTO when I leave?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    It depends on your state and employer policy. California, Colorado, and a few
                    other states treat accrued PTO as earned wages that must be paid out on
                    termination. Most other states allow employers to set their own payout policies —
                    check your employee handbook and state labor law.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">Does PTO accrue while I am on FMLA leave?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Under federal FMLA, employers are not required to continue PTO accrual during
                    unpaid leave. However, some employer policies do continue accrual during FMLA.
                    Check your specific company policy or ask HR before starting leave.
                  </p>
                </div>
                <div className="faq-item">
                  <h4 className="font-semibold">What is a PTO accrual cap?</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    A cap is the maximum PTO balance you can accumulate before accrual stops. Once
                    you hit the cap, you stop earning new PTO until you use some. Caps are typically
                    1.5× to 2× your annual PTO allowance. Using PTO before hitting the cap ensures
                    you never lose accrual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h3 className="text-lg font-bold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog/pto-accrual-explained">→ How PTO Accrual Works</a></li>
                <li><a href="/blog/biweekly-vs-semimonthly-pay">→ Biweekly vs Semimonthly Pay</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="ad-placeholder h-24"></div>
        </div>
      </div>
    </>
  );
}
