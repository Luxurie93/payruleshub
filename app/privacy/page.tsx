import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how PayRulesHub handles privacy, analytics, cookies, advertising, and user data for its free payroll calculators and employment guides.",
  alternates: { canonical: "https://payruleshub.com/privacy" },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose prose-sm max-w-none">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> June 2026
        </p>

        <h2>Overview</h2>
        <p>
          PayRulesHub ("we," "us," or "our") operates this website and its
          free payroll calculators and employment guides. This privacy policy
          explains what information may be collected, how it is used, and how
          advertising and analytics tools may operate on the site.
        </p>

        <h2>Calculator Inputs</h2>
        <p>
          Calculator inputs are processed in your browser. PayRulesHub does not
          collect, store, sell, or transmit the wages, hours, salary figures,
          deduction amounts, or other calculator values you enter.
        </p>

        <h2>Analytics</h2>
        <p>
          We use Google Analytics to understand aggregate website usage, such as
          page views, traffic sources, device type, and general engagement. This
          helps us improve content quality, navigation, and calculator usability.
          Analytics data is used in aggregate and is not used to identify
          individual users.
        </p>

        <h2>Advertising and Cookies</h2>
        <p>
          PayRulesHub may display ads served by Google AdSense or similar ad
          partners. Advertising providers may use cookies or similar
          technologies to serve, measure, and improve ads. You can control or
          disable cookies through your browser settings and may review Google ad
          personalization controls through your Google account.
        </p>

        <h2>Information You Voluntarily Send</h2>
        <p>
          If you contact us by email, we may receive your email address and the
          contents of your message. We use that information only to respond to
          your question, investigate corrections, or improve the site.
        </p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To improve website performance and user experience</li>
          <li>To identify popular topics and calculators</li>
          <li>To diagnose technical issues</li>
          <li>To review corrections or feedback submitted by users</li>
          <li>To support advertising and analytics services</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. Aggregated analytics and ad
          measurement data may be processed by third-party services such as
          Google Analytics and Google AdSense according to their own policies.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our guides may link to government agencies, tax resources, or other
          third-party websites. We are not responsible for the privacy practices
          or content of external sites.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          PayRulesHub is intended for a general audience and is not directed to
          children under 13. We do not knowingly collect personal information
          from children.
        </p>

        <h2>Contact Us</h2>
        <p>
          For privacy questions, corrections, or data-related requests, contact
          us at <strong>support@payruleshub.com</strong>.
        </p>
      </div>
    </div>
  );
}
