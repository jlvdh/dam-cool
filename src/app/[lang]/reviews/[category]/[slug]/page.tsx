import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  isLocale,
  isReviewCategory,
  locales,
  venueReviews,
} from "@/content/reviews";

type PageProps = {
  params: Promise<{ lang: string; category: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    venueReviews.map((review) => ({
      lang,
      category: review.category,
      slug: review.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, category, slug } = await params;
  const review = venueReviews.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!review) return {};

  return {
    title: `${review.name} review`,
    description: review.excerpt[lang === "nl" ? "nl" : "en"],
    alternates: {
      canonical: `/${lang}/reviews/${category}/${slug}`,
      languages: {
        nl: `/nl/reviews/${category}/${slug}`,
        en: `/en/reviews/${category}/${slug}`,
      },
    },
  };
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { lang, category, slug } = await params;
  if (!isLocale(lang) || !isReviewCategory(category)) notFound();

  const review = venueReviews.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!review) notFound();

  return (
    <main className="mx-auto max-w-[760px] px-5 pb-12 pt-8">
      <div className="mb-4 flex justify-end">
        <LanguageSwitcher
          locale={lang}
          nlHref={`/nl/reviews/${category}/${slug}`}
          enHref={`/en/reviews/${category}/${slug}`}
        />
      </div>
      <Link href={`/${lang}/reviews/${category}`} className="underline underline-offset-4">
        {lang === "nl" ? "Terug naar categorie" : "Back to category"}
      </Link>
      <p className="mt-6 text-sm text-dam-muted">
        {review.category} · {review.neighborhood} · {review.rating}
      </p>
      <h1 className="font-display mt-2 text-6xl">{review.name}</h1>
      <p className="mt-4 leading-7 text-dam-muted">{review.excerpt[lang]}</p>
      <article className="mt-8 leading-8">
        <p>{review.body[lang]}</p>
      </article>
    </main>
  );
}
