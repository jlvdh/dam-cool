import type { MetadataRoute } from "next";
import {
  locales,
  reviewCategoriesWithReviews,
  venueReviews,
} from "@/content/reviews";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dam.cool";
  const now = new Date();

  const homeEntries: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: {
      languages: {
        nl: `${baseUrl}/nl`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/nl`,
      },
    },
  }));

  const reviewIndexEntries: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: `${baseUrl}/${lang}/reviews`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: {
      languages: {
        nl: `${baseUrl}/nl/reviews`,
        en: `${baseUrl}/en/reviews`,
        "x-default": `${baseUrl}/nl/reviews`,
      },
    },
  }));

  const reviewCategoryEntries: MetadataRoute.Sitemap = locales.flatMap((lang) =>
    reviewCategoriesWithReviews.map((category) => ({
      url: `${baseUrl}/${lang}/reviews/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          nl: `${baseUrl}/nl/reviews/${category}`,
          en: `${baseUrl}/en/reviews/${category}`,
          "x-default": `${baseUrl}/nl/reviews/${category}`,
        },
      },
    })),
  );

  const reviewDetailEntries: MetadataRoute.Sitemap = locales.flatMap((lang) =>
    venueReviews.map((review) => ({
      url: `${baseUrl}/${lang}/reviews/${review.category}/${review.slug}`,
      lastModified: new Date(review.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          nl: `${baseUrl}/nl/reviews/${review.category}/${review.slug}`,
          en: `${baseUrl}/en/reviews/${review.category}/${review.slug}`,
          "x-default": `${baseUrl}/nl/reviews/${review.category}/${review.slug}`,
        },
      },
    })),
  );

  return [
    ...homeEntries,
    ...reviewIndexEntries,
    ...reviewCategoryEntries,
    ...reviewDetailEntries,
  ];
}
