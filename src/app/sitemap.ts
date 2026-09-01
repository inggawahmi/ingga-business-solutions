import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { SOLUTIONS_MAP } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ];

  const solutionRoutes = Object.keys(SOLUTIONS_MAP).map((slug) => ({
    url: `${SITE_URL}/solusi/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...solutionRoutes];
}
