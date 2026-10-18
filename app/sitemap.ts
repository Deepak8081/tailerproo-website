import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: site.url,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${site.url}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${site.url}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${site.url}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];
}

