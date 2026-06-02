import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/.next",
    },
    sitemap: "https://paycalc.app/sitemap.xml",
  };
}
