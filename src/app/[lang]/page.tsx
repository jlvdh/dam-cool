import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { isLocale, locales, venueReviewsWithImages } from "@/content/reviews";
import { siteContent } from "@/content/siteContent";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const baseUrl = "https://dam.cool";
const logoImage = "/logo-dam-cool.png";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "nl";
  const copy = siteContent[locale];
  const path = `/${locale}`;
  const title =
    locale === "nl"
      ? "Coole plekken in Amsterdam"
      : "Cool places in Amsterdam";

  return {
    title,
    description: copy.hero.subtitle,
    alternates: {
      canonical: path,
      languages: {
        nl: "/nl",
        en: "/en",
        "x-default": "/nl",
      },
    },
    openGraph: {
      title: `${title} | dam.cool`,
      description: copy.hero.subtitle,
      url: `${baseUrl}${path}`,
      siteName: "dam.cool",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      alternateLocale: locale === "nl" ? ["en_US"] : ["nl_NL"],
      type: "website",
      images: [
        {
          url: logoImage,
          width: 1200,
          height: 630,
          alt: "dam.cool logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | dam.cool`,
      description: copy.hero.subtitle,
      images: [logoImage],
    },
  };
}

export default async function LocalizedHome({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const copy = siteContent[lang];
  const spotlightReviews = venueReviewsWithImages(2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: "dam.cool",
        url: baseUrl,
        inLanguage: ["nl", "en"],
        description: copy.hero.title,
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "dam.cool",
        url: baseUrl,
        logo: `${baseUrl}${logoImage}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-6">
      <header className="rounded-card flex flex-col items-center gap-4 p-6">
        <Link href={`/${lang}`} className="flex justify-center hover:opacity-90">
          <Image
            src={logoImage}
            alt="dam.cool logo lettering"
            width={280}
            height={94}
            priority
          />
        </Link>
        <LanguageSwitcher locale={lang} nlHref="/nl" enHref="/en" />
      </header>

      <main className="mt-6 grid gap-10">
        <section className="rounded-card p-section">
          <p className="font-display mb-3 text-4xl text-dam-muted">{copy.hero.eyebrow}</p>
          <h1 className="font-display mb-4 text-6xl leading-[0.9] tracking-tight md:text-8xl">
            {copy.hero.title}
          </h1>
          <p className="max-w-[65ch] leading-7 text-dam-muted">{copy.hero.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/reviews`}
              className="rounded-chip px-4 py-2 font-medium text-dam-ink underline underline-offset-4"
            >
              {copy.hero.ctaPrimary}
            </Link>
            <a
              href="#about"
              className="rounded-chip px-4 py-2 font-medium text-dam-muted underline underline-offset-4"
            >
              {copy.hero.ctaSecondary}
            </a>
          </div>
        </section>

        {spotlightReviews.length > 0 ? (
          <section id="spotlight-reviews" className="rounded-card p-section">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              {spotlightReviews.map((review, index) => {
                const heroImage = review.images![0];
                const href = `/${lang}/reviews/${review.category}/${review.slug}`;
                const caption =
                  heroImage.caption?.[lang] ?? heroImage.alt[lang];
                return (
                  <article key={review.slug}>
                    <Link href={href} className="group block">
                      <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-16/11 md:min-h-[280px]">
                        <Image
                          src={heroImage.src}
                          alt={heroImage.alt[lang]}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, calc(1080px / 2 - 2rem)"
                          priority={index < 2}
                        />
                      </div>
                      <div className="mt-5">
                        <p className="text-sm text-dam-muted">
                          {review.category} · {review.neighborhood}
                        </p>
                        <h3 className="font-display mt-2 text-4xl leading-none tracking-tight md:text-5xl">
                          {review.name}
                        </h3>
                        <p className="mt-3 max-w-[50ch] leading-7 text-dam-muted">{caption}</p>
                        <p className="mt-3 font-medium underline underline-offset-4 group-hover:text-dam-soft">
                          {copy.spotlight.readReview}
                        </p>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        ) : null}

        <Section id="about" title={copy.about.title}>
          <p className="max-w-[70ch] leading-7 text-dam-muted">{copy.about.body}</p>
        </Section>

        <Section id="contact" title={copy.contact.title}>
          <p className="max-w-[70ch] leading-7 text-dam-muted">{copy.contact.body}</p>
          <a
            className="mt-3 inline-block font-semibold underline underline-offset-4"
            href="mailto:hello@dam.cool"
          >
            {copy.contact.emailLabel}: hello@dam.cool
          </a>
        </Section>
      </main>

      <SiteFooter locale={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
