import type { MetadataRoute } from "next";
import { constellations } from "@/data/constellations";

const BASE_URL = "https://constellation-encyclopedia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const constellationUrls = constellations.flatMap((c) => [
    {
      url: `${BASE_URL}/constellation/${c.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ua/constellation/${c.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...constellationUrls,
  ];
}