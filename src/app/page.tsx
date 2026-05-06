import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { venueReviewsWithImages } from "@/content/reviews";
import { siteContent, type Locale } from "@/content/siteContent";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale: Locale = lang === "en" ? "en" : "nl";
  const copy = siteContent[locale];
  const spotlightReviews = venueReviewsWithImages(2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "dam.cool",
        url: "https://dam.cool",
        inLanguage: ["nl", "en"],
        description: copy.hero.title,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-6">
      <header className="rounded-card flex flex-col items-center gap-4 p-6">
        <Link
          href={locale === "nl" ? "/?lang=nl" : "/?lang=en"}
          className="flex justify-center hover:opacity-90"
        >
          <Image
            src="/logo-dam-cool.png"
            alt="dam.cool logo lettering"
            width={280}
            height={94}
            priority
          />
        </Link>
        <LanguageSwitcher locale={locale} nlHref="/?lang=nl" enHref="/?lang=en" />
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
              href={`/${locale}/reviews`}
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
                const href = `/${locale}/reviews/${review.category}/${review.slug}`;
                const caption =
                  heroImage.caption?.[locale] ?? heroImage.alt[locale];
                return (
                  <article key={review.slug}>
                    <Link href={href} className="group block">
                      <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-16/11 md:min-h-[280px]">
                        <Image
                          src={heroImage.src}
                          alt={heroImage.alt[locale]}
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

      <SiteFooter locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
