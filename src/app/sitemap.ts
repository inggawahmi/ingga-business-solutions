import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { SOLUTIONS_MAP_BILINGUAL } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = Object.keys(
    SOLUTIONS_MAP_BILINGUAL
  ).map((slug) => ({
    url: `${SITE_URL}/solusi/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
