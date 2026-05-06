import type { MetadataRoute } from "next";
import { locales, reviewCategories, venueReviews } from "@/content/reviews";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dam.cool";
  const now = new Date();

  const reviewIndexEntries: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: `${baseUrl}/${lang}/reviews`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const reviewCategoryEntries: MetadataRoute.Sitemap = locales.flatMap((lang) =>
    reviewCategories.map((category) => ({
      url: `${baseUrl}/${lang}/reviews/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  );

  const reviewDetailEntries: MetadataRoute.Sitemap = locales.flatMap((lang) =>
    venueReviews.map((review) => ({
      url: `${baseUrl}/${lang}/reviews/${review.category}/${review.slug}`,
      lastModified: new Date(review.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          nl: `${baseUrl}/?lang=nl`,
          en: `${baseUrl}/?lang=en`,
        },
      },
    },
    ...reviewIndexEntries,
    ...reviewCategoryEntries,
    ...reviewDetailEntries,
  ];
}
