import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://payruleshub.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/overtime-pay-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/pto-accrual-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/hourly-to-salary-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/take-home-pay-estimator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/severance-pay-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/california-final-paycheck-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/late-paycheck-laws-by-state`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/california-overtime-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/texas-overtime-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/california-pto-payout-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/texas-pto-payout-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/massachusetts-take-home-pay-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/rhode-island-take-home-pay-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/blog/how-to-calculate-overtime-pay`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/overtime-rules-by-state`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pto-accrual-explained`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/biweekly-vs-semimonthly-pay`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/severance-pay-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-estimate-take-home-pay-in-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/state-payroll-laws`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    }
  ];
}
