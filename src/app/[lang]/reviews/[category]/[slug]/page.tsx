import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import {
  isLocale,
  isReviewCategory,
  locales,
  venueReviews,
} from "@/content/reviews";

type PageProps = {
  params: Promise<{ lang: string; category: string; slug: string }>;
};

const baseUrl = "https://dam.cool";
const fallbackImage = "/logo-dam-cool.png";

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
  const locale = lang === "en" ? "en" : "nl";
  const review = venueReviews.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!review) return {};

  const path = `/${locale}/reviews/${category}/${slug}`;
  const title = `${review.name} Amsterdam review`;
  const description = review.excerpt[locale];
  const image = review.images?.[0]?.src ?? fallbackImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        nl: `/nl/reviews/${category}/${slug}`,
        en: `/en/reviews/${category}/${slug}`,
        "x-default": `/nl/reviews/${category}/${slug}`,
      },
    },
    openGraph: {
      title: `${title} | dam.cool`,
      description,
      url: `${baseUrl}${path}`,
      type: "article",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      alternateLocale: locale === "nl" ? ["en_US"] : ["nl_NL"],
      publishedTime: review.publishedAt,
      images: [
        {
          url: image,
          alt: review.images?.[0]?.alt[locale] ?? `${review.name} review`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | dam.cool`,
      description,
      images: [image],
    },
  };
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { lang, category, slug } = await params;
  if (!isLocale(lang) || !isReviewCategory(category)) notFound();
  setRequestLocale(lang);
  const t = await getTranslations({locale: lang, namespace: "Reviews"});

  const review = venueReviews.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!review) notFound();

  const path = `/${lang}/reviews/${category}/${slug}`;
  const reviewUrl = `${baseUrl}${path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "dam.cool",
            item: `${baseUrl}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "nl" ? "Reviews" : "Reviews",
            item: `${baseUrl}/${lang}/reviews`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category,
            item: `${baseUrl}/${lang}/reviews/${category}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: review.name,
            item: reviewUrl,
          },
        ],
      },
      {
        "@type": "Review",
        "@id": `${reviewUrl}#review`,
        url: reviewUrl,
        name: `${review.name} Amsterdam review`,
        inLanguage: lang,
        datePublished: review.publishedAt,
        reviewBody: review.body[lang],
        author: {
          "@type": "Organization",
          name: "dam.cool",
          url: baseUrl,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: {
          "@type": category === "restaurant" ? "Restaurant" : "LocalBusiness",
          name: review.name,
          address: review.address,
          areaServed: "Amsterdam",
          image: review.images?.[0]?.src,
        },
      },
    ],
  };

  return (
    <>
    <main className="mx-auto max-w-[760px] px-5 pb-12 pt-8">
      <div className="mb-4 flex justify-end">
        <LanguageSwitcher
          locale={lang}
          pathname={`/reviews/${category}/${slug}`}
        />
      </div>
      <Link href={`/reviews/${category}`} className="underline underline-offset-4">
        {t("backToCategory")}
      </Link>
      <p className="mt-6 text-sm text-dam-muted">
        {review.category} · {review.neighborhood} · {review.rating}
      </p>
      <h1 className="font-display mt-2 text-6xl">{review.name}</h1>
      <p className="mt-2 text-sm text-dam-muted">{review.address}</p>
      <p className="mt-4 leading-7 text-dam-muted">{review.excerpt[lang]}</p>
      
      {review.images && review.images.length > 0 && (
        <div className="mt-8 space-y-6">
          {review.images.map((image, index) => (
            <figure key={index} className="overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt[lang]}
                width={760}
                height={507}
                className="h-auto w-full object-cover"
                priority={index === 0}
              />
              {image.caption && (
                <figcaption className="mt-2 text-center text-sm text-dam-muted">
                  {image.caption[lang]}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
      
      <article className="mt-8 space-y-4 leading-8">
        {review.body[lang].split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </main>
    <SiteFooter locale={lang} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    </>
  );
}
