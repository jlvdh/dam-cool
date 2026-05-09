import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import {
  isLocale,
  isReviewCategory,
  locales,
  reviewCategoriesWithReviews,
  venueReviews,
} from "@/content/reviews";

type PageProps = {
  params: Promise<{ lang: string; category: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    reviewCategoriesWithReviews.map((category) => ({ lang, category })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, category } = await params;
  const locale = lang === "en" ? "en" : "nl";
  const path = `/${locale}/reviews/${category}`;
  const title =
    locale === "nl"
      ? `${category} reviews in Amsterdam`
      : `${category} reviews in Amsterdam`;
  const description =
    locale === "nl"
      ? `Alle ${category} reviews op dam.cool, met adressen en eerlijke tips voor Amsterdam.`
      : `All ${category} reviews on dam.cool, with addresses and honest Amsterdam tips.`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        nl: `/nl/reviews/${category}`,
        en: `/en/reviews/${category}`,
        "x-default": `/nl/reviews/${category}`,
      },
    },
    openGraph: {
      title: `${title} | dam.cool`,
      description,
      url: path,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { lang, category } = await params;
  if (!isLocale(lang) || !isReviewCategory(category)) notFound();

  const reviews = venueReviews.filter((review) => review.category === category);
  if (reviews.length === 0) notFound();

  return (
    <>
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
    <SiteFooter locale={lang} />
    </>
  );
}
