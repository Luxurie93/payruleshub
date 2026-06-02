import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StateProvider } from "@/context/StateContext";

const SITE_URL = "https://paycalc.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Free Work & Paycheck Calculators | PayCalc",
    template: "%s | PayCalc",
  },
  description:
    "Calculate overtime, PTO, hourly-to-salary, take-home pay, and severance in seconds. No signup. Fast, free, and easy to use.",
  keywords:
    "overtime calculator, PTO accrual, salary calculator, take-home pay, severance calculator",
  openGraph: {
    title: "Free Work & Paycheck Calculators | PayCalc",
    description:
      "Calculate overtime, PTO, hourly-to-salary, take-home pay, and severance in seconds.",
    url: SITE_URL,
    siteName: "PayCalc",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PayCalc — Free Work & Paycheck Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Work & Paycheck Calculators | PayCalc",
    description:
      "Calculate overtime, PTO, hourly-to-salary, take-home pay, and severance in seconds.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StateProvider>
          <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-900">PayCalc</div>
              <ul className="flex gap-6 text-sm">
                <li>
                  <a href="/" className="text-slate-700 hover:text-teal-600 transition">Home</a>
                </li>
                <li>
                  <a href="/tools" className="text-slate-700 hover:text-teal-600 transition">Tools</a>
                </li>
                <li>
                  <a href="/blog" className="text-slate-700 hover:text-teal-600 transition">Blog</a>
                </li>
                <li>
                  <a href="/about" className="text-slate-700 hover:text-teal-600 transition">About</a>
                </li>
              </ul>
            </nav>
          </header>

          <main className="min-h-screen">{children}</main>

          <footer className="bg-slate-900 text-white mt-12">
            <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Tools</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/tools/overtime-pay-calculator">Overtime Calculator</a>
                    </li>
                    <li>
                      <a href="/tools/pto-accrual-calculator">PTO Calculator</a>
                    </li>
                    <li>
                      <a href="/tools/hourly-to-salary-calculator">Salary Converter</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Guides</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/blog/how-to-calculate-overtime-pay">Overtime Guide</a>
                    </li>
                    <li>
                      <a href="/blog/pto-accrual-explained">PTO Explained</a>
                    </li>
                    <li>
                      <a href="/blog/biweekly-vs-semimonthly-pay">Pay Schedules</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Legal</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms">Terms of Service</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4 text-center text-xs text-slate-400">
                <p>© 2026 PayCalc. All rights reserved. Not professional tax advice.</p>
              </div>
            </div>
          </footer>
        </StateProvider>
      </body>
    </html>
  );
}
