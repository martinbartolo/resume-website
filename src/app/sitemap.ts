import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://martinbartolo.com";
  const now = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/projects/bopkit`,
      lastModified: new Date("2026-02-21"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
