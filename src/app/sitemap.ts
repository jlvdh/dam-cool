import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dam.cool";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          nl: `${baseUrl}/?lang=nl`,
          en: `${baseUrl}/?lang=en`,
        },
      },
    },
  ];
}
