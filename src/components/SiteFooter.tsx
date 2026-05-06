import Link from "next/link";
import {
  reviewCategoriesWithReviews,
  venueReviews,
} from "@/content/reviews";
import { siteContent, type Locale } from "@/content/siteContent";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const copy = siteContent[locale];
  const homeReviews = venueReviews.slice(0, 3);
  const homeHref = locale === "nl" ? "/?lang=nl" : "/?lang=en";

  return (
    <footer className="mt-auto border-t border-dam-muted/25 pt-10 pb-10 text-dam-muted">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          <nav id="footer-categories" aria-labelledby="footer-categories-heading">
            <h2
              id="footer-categories-heading"
              className="font-display mb-4 text-xl leading-none tracking-tight text-dam-ink md:text-2xl"
            >
              {copy.nav.categories}
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              {reviewCategoriesWithReviews.map((category) => (
                <li key={category}>
                  <Link
                    href={`/${locale}/reviews/${category}`}
                    className="underline underline-offset-4 hover:text-dam-ink"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav id="footer-recent-reviews" aria-labelledby="footer-recent-heading">
            <h2
              id="footer-recent-heading"
              className="font-display mb-4 text-xl leading-none tracking-tight text-dam-ink md:text-2xl"
            >
              {copy.nav.recentReviews}
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              {homeReviews.map((review) => (
                <li key={review.slug}>
                  <Link
                    href={`/${locale}/reviews/${review.category}/${review.slug}`}
                    className="underline underline-offset-4 hover:text-dam-ink"
                  >
                    {review.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="sm:col-span-2 lg:col-span-1"
            id="footer-site"
            aria-labelledby="footer-site-heading"
          >
            <h2
              id="footer-site-heading"
              className="font-display mb-4 text-xl leading-none tracking-tight text-dam-ink md:text-2xl"
            >
              dam.cool
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href={homeHref} className="underline underline-offset-4 hover:text-dam-ink">
                  {copy.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/reviews`}
                  className="underline underline-offset-4 hover:text-dam-ink"
                >
                  {copy.hero.ctaPrimary}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@dam.cool"
                  className="underline underline-offset-4 hover:text-dam-ink"
                >
                  hello@dam.cool
                </a>
              </li>
            </ul>
            <p className="mt-6 max-w-[36ch] text-sm leading-6">{copy.footer}</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
