import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayRulesHub Blog",
  description: "Read helpful guides about payroll, overtime, PTO, and salaries.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog & Guides</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "How to Calculate Overtime Pay",
            excerpt: "Learn overtime pay formulas with step-by-step examples.",
            link: "/blog/how-to-calculate-overtime-pay",
          },
          {
            title: "Overtime Rules by State",
            excerpt: "Quick reference guide to state-specific overtime laws.",
            link: "/blog/overtime-rules-by-state",
          },
          {
            title: "How PTO Accrual Works",
            excerpt: "Understand PTO accrual methods and formulas.",
            link: "/blog/pto-accrual-explained",
          },
          {
            title: "Biweekly vs Semimonthly Pay",
            excerpt: "Compare payroll frequencies and take-home differences.",
            link: "/blog/biweekly-vs-semimonthly-pay",
          },
          {
            title: "How Severance Is Calculated",
            excerpt: "Learn typical severance formulas and estimation tips.",
            link: "/blog/severance-pay-guide",
          },
          {
            title: "How to Estimate Take-Home Pay",
            excerpt: "Understand deductions and estimate your net paycheck.",
            link: "/blog/how-to-estimate-take-home-pay-in-2026",
          },
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
