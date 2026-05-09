import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import {
  isLocale,
  locales,
  reviewCategoriesWithReviews,
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
  const locale = isNl ? "nl" : "en";
  const t = await getTranslations({locale, namespace: "Reviews"});
  const path = `/${isNl ? "nl" : "en"}/reviews`;
  const title = t("metadataTitle");
  const description = t("metadataDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        nl: "/nl/reviews",
        en: "/en/reviews",
        "x-default": "/nl/reviews",
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

export default async function ReviewsIndexPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  setRequestLocale(lang);
  const t = await getTranslations({locale: lang, namespace: "Reviews"});

  return (
    <>
    <main className="mx-auto max-w-[1080px] px-5 pb-12 pt-8">
      <div className="mb-4 flex justify-end">
        <LanguageSwitcher locale={lang} nlHref="/nl/reviews" enHref="/en/reviews" />
      </div>
      <h1 className="font-display text-6xl">{t("indexTitle")}</h1>

      <section className="mt-8">
        <h2 className="font-display text-3xl">{t("categories")}</h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {reviewCategoriesWithReviews.map((category) => (
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
        <h2 className="font-display text-3xl">{t("latest")}</h2>
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
    <SiteFooter locale={lang} />
    </>
  );
}
