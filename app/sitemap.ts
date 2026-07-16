import { MetadataRoute } from "next";
import { statePayrollGuides } from "./data/statePayrollGuides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://payruleshub.com";
  const stateHubRoutes = statePayrollGuides.map((guide) => ({
    path: `/states/${guide.slug}`,
    changeFrequency: 'monthly',
    priority: 0.78,
  }));
  const routes = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/tools', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/paycheck-calculators-by-state', changeFrequency: 'weekly', priority: 0.86 },
    { path: '/tools/overtime-pay-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tools/pto-accrual-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tools/hourly-to-salary-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tools/take-home-pay-estimator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tools/severance-pay-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/state-payroll-laws', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/about', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/editorial-policy', changeFrequency: 'yearly', priority: 0.55 },
    { path: '/methodology', changeFrequency: 'yearly', priority: 0.55 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
    ...stateHubRoutes,
    { path: '/blog/calculate-pay-and-overtime', changeFrequency: 'monthly', priority: 0.74 },
    { path: '/blog/illinois-final-paycheck-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/california-final-paycheck-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/new-york-final-paycheck-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/florida-final-paycheck-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/massachusetts-final-paycheck-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/rhode-island-final-paycheck-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/late-paycheck-laws-by-state', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/california-overtime-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/texas-overtime-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/massachusetts-overtime-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/rhode-island-overtime-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/california-pto-payout-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/texas-pto-payout-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/new-york-pto-payout-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/florida-pto-payout-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/massachusetts-pto-payout-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/rhode-island-pto-payout-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/massachusetts-take-home-pay-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/rhode-island-take-home-pay-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/new-york-take-home-pay-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/florida-take-home-pay-calculator', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/how-to-calculate-overtime-pay', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/overtime-rules-by-state', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/pto-accrual-explained', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/biweekly-vs-semimonthly-pay', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/severance-pay-guide', changeFrequency: 'monthly', priority: 0.72 },
    { path: '/blog/how-to-estimate-take-home-pay-in-2026', changeFrequency: 'monthly', priority: 0.72 }
  ];

  return routes.map((route) => ({
    url: route.path === "/" ? baseUrl : `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }));
}
