import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { CITY_IDS, TOURS } from "@/data/tours";
import { EXCURSIONS } from "@/data/excursions";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...["/tours", "/excursions", "/customize", "/contact"].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/tours/the-grand-traverse`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...CITY_IDS.map((city) => ({
      url: `${SITE_URL}/tours/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...TOURS.map((t) => ({
      url: `${SITE_URL}/tours/${t.city}/${t.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...EXCURSIONS.map((e) => ({
      url: `${SITE_URL}/excursions/${e.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
