import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PayRulesHub — Questions, Corrections & Feedback",
  description:
    "Get in touch with the PayRulesHub team for questions about our calculators, content corrections, or general feedback. We respond within 2 business days.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1>Contact Us</h1>

      <section className="mt-6 prose prose-sm max-w-none">
        <h2>Who This Contact Page Is For</h2>
        <p>
          This page is for anyone who wants to reach the PayRulesHub team directly:
        </p>
        <ul>
          <li><strong>Calculator questions</strong> — if a result looks wrong or you want to understand the formula used</li>
          <li><strong>Content corrections</strong> — if you spot an outdated law citation, a math error, or a factual inaccuracy in our guides</li>
          <li><strong>Feature requests</strong> — a calculator or topic you would like us to cover</li>
          <li><strong>General feedback</strong> — what is working well, what could be clearer</li>
          <li><strong>Business inquiries</strong> — partnerships, sponsorships, or licensing questions</li>
        </ul>
        <p>
          We are <strong>not</strong> a law firm, HR consultancy, or payroll provider. We cannot give
          specific legal, tax, or employment advice for your individual situation. For those needs,
          please contact an employment attorney, CPA, or your HR department directly.
        </p>

        <h2>How to Reach Us</h2>
        <p>
          Email us at:{" "}
          <a href="mailto:support@payruleshub.com">
            <strong>support@payruleshub.com</strong>
          </a>
        </p>
        <p>
          We typically respond within <strong>2 business days</strong>. For faster context,
          please include:
        </p>
        <ul>
          <li>The page or calculator URL you are asking about</li>
          <li>What you expected vs. what you saw</li>
          <li>Your state, if the question is about state-specific rules</li>
        </ul>

        <h2>Reporting a Bug or Error</h2>
        <p>
          If you believe a calculator is producing incorrect results, please email us the inputs
          you used and the output you received. We take accuracy seriously and will investigate
          and correct any confirmed errors promptly.
        </p>
        <p>
          Helpful examples include the hourly rate and hours entered, the pay period selected,
          the state involved, the PTO policy language you are comparing against, or the severance
          formula shown in an employer document. Please avoid sending Social Security numbers,
          bank information, full pay stubs, or other sensitive personal information.
        </p>

        <h2>Editorial Corrections</h2>
        <p>
          If one of our articles references an outdated law, regulation, or salary threshold, please
          include a link to the current authoritative source (e.g., dol.gov, your state's labor
          agency) so we can verify and update quickly.
        </p>

        <h2>What Happens After You Contact Us</h2>
        <p>
          We review messages for the specific page, calculator, or source issue raised. If the feedback
          identifies a clear error, we update the affected page and may add a clearer explanation so other
          readers can avoid the same confusion. If a question requires personalized legal, tax, HR, or payroll
          advice, we will direct you to consult a qualified professional instead of guessing.
        </p>

        <h2>Privacy Reminder</h2>
        <p>
          Please do not send Social Security numbers, bank account details, full pay stubs, tax returns,
          medical information, or confidential employer documents. For calculator troubleshooting, a simplified
          example with the relevant numbers is usually enough for us to reproduce and review the issue.
        </p>
        <p>
          If your concern is urgent because a paycheck is missing, a deadline is approaching, or you are being
          asked to sign a separation document, contact the appropriate employer representative, state agency,
          attorney, tax professional, or payroll provider directly. PayRulesHub can improve site content, but it
          cannot represent you or intervene in an individual employment dispute.
        </p>
      </section>
    </div>
  );
}
