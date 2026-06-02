import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Severance Pay Is Calculated: Practical Guide",
  description:
    "Learn common severance formulas and estimate payout amounts quickly.",
  keywords: "severance pay, severance calculation, severance formula",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 1)
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <article className="prose prose-sm max-w-none">
            <h1>How Severance Pay Is Calculated: Practical Guide</h1>

            <h2>What Is Severance?</h2>
            <p>
              Severance is compensation paid by employers when terminating
              employment, typically based on tenure. It's discretionary unless
              specified in your contract.
            </p>

            <h2>Typical Formula Patterns</h2>
            <p>
              <strong>1 Week per Year of Service:</strong> Most common. 5 years
              = 5 weeks pay.
            </p>
            <p>
              <strong>2 Weeks per Year:</strong> More generous, often for
              management roles.
            </p>
            <p>
              <strong>Monthly Formula:</strong> 1 month per year of service = 12
              months pay for 12 years.
            </p>

            <h2>Negotiation and Policy Caveats</h2>
            <p>
              Severance is often negotiable. Check your employment agreement,
              employee handbook, or union contract for specific policies.
            </p>

            <h2>Calculate Your Severance</h2>
            <p>
              Use our{" "}
              <a href="/tools/severance-pay-calculator">
                severance calculator
              </a>{" "}
              to estimate your package.
            </p>
          </article>

          <div className="my-8">
            <div className="ad-placeholder h-24">
              Advertisement (Google AdSense Slot 2)
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Related</h3>
            <ul className="space-y-2">
              <li>
                <a href="/tools/severance-pay-calculator">
                  → Severance Calculator
                </a>
              </li>
              <li>
                <a href="/tools/hourly-to-salary-calculator">
                  → Salary Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
            <h3 className="font-bold mb-4">Not Guaranteed</h3>
            <p className="text-sm">
              Severance is discretionary. Always check your contract.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="ad-placeholder h-24">
          Advertisement (Google AdSense Slot 3)
        </div>
      </div>
    </div>
  );
}
