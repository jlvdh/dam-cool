import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  isLocale,
  locales,
  reviewCategories,
  venueReviews,
} from "@/content/reviews";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isNl = lang === "nl";

  return {
    title: isNl ? "Reviews" : "Reviews",
    description: isNl
      ? "Reviews van restaurants, bars, cafes en andere venues in Amsterdam."
      : "Reviews for restaurants, bars, cafes and other Amsterdam venues.",
  };
}

export default async function ReviewsIndexPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const copy =
    lang === "nl"
      ? {
          title: "Venue Reviews",
          categories: "Categorieen",
          latest: "Nieuwste reviews",
        }
      : {
          title: "Venue Reviews",
          categories: "Categories",
          latest: "Latest reviews",
        };

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-12 pt-8">
      <div className="mb-4 flex justify-end">
        <LanguageSwitcher locale={lang} nlHref="/nl/reviews" enHref="/en/reviews" />
      </div>
      <h1 className="font-display text-6xl">{copy.title}</h1>

      <section className="mt-8">
        <h2 className="font-display text-3xl">{copy.categories}</h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {reviewCategories.map((category) => (
            <li key={category}>
              <Link
                href={`/${lang}/reviews/${category}`}
                className="underline underline-offset-4"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl">{copy.latest}</h2>
        <ul className="mt-3 grid gap-3">
          {venueReviews.map((review) => (
            <li key={review.slug}>
              <Link
                href={`/${lang}/reviews/${review.category}/${review.slug}`}
                className="underline underline-offset-4"
              >
                {review.name} ({review.category})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
