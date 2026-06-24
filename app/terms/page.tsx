import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms for using PayRulesHub's free payroll calculators, employment guides, educational wage resources, and advertising-supported content.",
  alternates: { canonical: "https://payruleshub.com/terms" },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose prose-sm max-w-none">
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated:</strong> June 2026
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using PayRulesHub, including our calculators, guides,
          templates, examples, and related content, you agree to these terms. If
          you do not agree, please do not use this site.
        </p>

        <h2>2. Informational Use Only</h2>
        <p>
          PayRulesHub provides general educational information and estimation
          tools. The site is not a law firm, accounting firm, payroll provider,
          tax advisor, or HR consultancy. Content and calculator results are not
          legal, tax, financial, accounting, payroll, or HR advice.
        </p>

        <h2>3. Calculator Estimates</h2>
        <p>
          Calculator results are estimates based on the information you enter and
          simplified formulas. Actual pay, withholding, PTO, overtime, severance,
          final paycheck timing, or wage claim outcomes may differ based on
          employer policies, state law, local law, tax elections, benefits,
          deductions, contracts, and individual facts.
        </p>

        <h2>4. Verify Before Making Decisions</h2>
        <p>
          You should verify important employment, payroll, tax, or legal
          decisions with your employer, payroll provider, state labor agency,
          accountant, attorney, or another qualified professional.
        </p>

        <h2>5. Permitted Use</h2>
        <p>
          You may use PayRulesHub for personal, educational, and internal
          business reference purposes. You may link to our pages, but you may not
          copy, republish, scrape, or redistribute substantial portions of the
          site without permission.
        </p>

        <h2>6. Accuracy and Corrections</h2>
        <p>
          We work to keep our calculators and guides useful and accurate, but
          payroll and employment rules change. If you find an error or outdated
          information, contact us at <strong>support@payruleshub.com</strong> so
          we can review it.
        </p>

        <h2>7. Advertising</h2>
        <p>
          PayRulesHub may display advertising to keep the site free. Ads do not
          change our calculator formulas or editorial standards.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          We may link to government agencies, official publications, and other
          external resources. Those sites are controlled by third parties, and we
          are not responsible for their content, availability, or policies.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          PayRulesHub is provided "as is" without warranties. To the fullest
          extent permitted by law, we are not liable for losses or damages that
          may result from use of the site or reliance on its content.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site
          after updates means you accept the revised terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these terms, contact us at
          <strong> support@payruleshub.com</strong>.
        </p>
      </div>
    </div>
  );
}
