import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  isLocale,
  isReviewCategory,
  locales,
  reviewCategories,
  venueReviews,
} from "@/content/reviews";

type PageProps = {
  params: Promise<{ lang: string; category: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    reviewCategories.map((category) => ({ lang, category })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, category } = await params;
  return {
    title:
      lang === "nl"
        ? `${category} reviews Amsterdam`
        : `${category} reviews Amsterdam`,
    description:
      lang === "nl"
        ? `Alle ${category} reviews op dam.cool.`
        : `All ${category} reviews on dam.cool.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { lang, category } = await params;
  if (!isLocale(lang) || !isReviewCategory(category)) notFound();

  const reviews = venueReviews.filter((review) => review.category === category);

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-12 pt-8">
      <div className="mb-4 flex justify-end">
        <LanguageSwitcher
          locale={lang}
          nlHref={`/nl/reviews/${category}`}
          enHref={`/en/reviews/${category}`}
        />
      </div>
      <p className="text-sm text-dam-muted">/{lang}/reviews/{category}</p>
      <h1 className="font-display mt-2 text-6xl">{category}</h1>

      <ul className="mt-8 grid gap-4">
        {reviews.map((review) => (
          <li key={review.slug}>
            <article className="rounded-card p-4">
              <h2 className="font-display text-3xl">{review.name}</h2>
              <p className="mt-1 text-dam-muted">{review.excerpt[lang]}</p>
              <Link
                href={`/${lang}/reviews/${category}/${review.slug}`}
                className="mt-2 inline-block underline underline-offset-4"
              >
                {lang === "nl" ? "Lees review" : "Read review"}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
