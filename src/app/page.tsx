import Image from "next/image";
import Link from "next/link";
import { PlaceCard } from "@/components/PlaceCard";
import { Section } from "@/components/Section";
import { siteContent, type Locale } from "@/content/siteContent";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale: Locale = lang === "en" ? "en" : "nl";
  const copy = siteContent[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "dam.cool",
        url: "https://dam.cool",
        inLanguage: ["nl", "en"],
        description:
          locale === "nl"
            ? "Coole plekken in Amsterdam."
            : "Cool places in Amsterdam.",
      },
      {
        "@type": "ItemList",
        name: locale === "nl" ? "Uitgelichte plekken" : "Featured spots",
        itemListElement: copy.places.map((place, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "TouristAttraction",
            name: place.name,
            description: place.description,
            address: place.address,
            containedInPlace: "Amsterdam",
          },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-6">
      <header className="rounded-card p-4">
        <Link
          href={locale === "nl" ? "/?lang=nl" : "/?lang=en"}
          className="mb-4 flex justify-center"
        >
          <Image
            src="/logo-dam-cool.png"
            alt="dam.cool logo lettering"
            width={280}
            height={94}
            priority
          />
        </Link>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <nav
            aria-label="Primary"
            className="font-display flex flex-wrap justify-center gap-4 text-2xl"
          >
          <a href="#spots" className="underline-offset-4 hover:underline">
            {copy.nav.spots}
          </a>
          <a href="#categories" className="underline-offset-4 hover:underline">
            {copy.nav.categories}
          </a>
          <a href="#about" className="underline-offset-4 hover:underline">
            {copy.nav.about}
          </a>
          <a href="#contact" className="underline-offset-4 hover:underline">
            {copy.nav.contact}
          </a>
          </nav>
          <div className="inline-flex gap-2" aria-label="Language switcher">
            <Link
              href="/?lang=nl"
            className={`rounded-chip px-2.5 py-1 text-xs ${
              locale === "nl" ? "font-semibold text-dam-ink underline underline-offset-4" : "text-dam-muted"
              }`}
            >
              NL
            </Link>
            <Link
              href="/?lang=en"
            className={`rounded-chip px-2.5 py-1 text-xs ${
              locale === "en" ? "font-semibold text-dam-ink underline underline-offset-4" : "text-dam-muted"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </header>

      <main className="mt-6 grid gap-10">
        <section className="rounded-card p-section">
          <p className="font-display mb-3 text-4xl text-dam-muted">{copy.hero.eyebrow}</p>
          <h1 className="font-display mb-4 text-6xl leading-[0.9] tracking-tight md:text-8xl">
            {copy.hero.title}
          </h1>
          <p className="max-w-[65ch] leading-7 text-dam-muted">{copy.hero.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#spots"
              className="rounded-chip px-4 py-2 font-medium text-dam-ink underline underline-offset-4"
            >
              {copy.hero.ctaPrimary}
            </a>
            <a
              href="#about"
              className="rounded-chip px-4 py-2 font-medium text-dam-muted underline underline-offset-4"
            >
              {copy.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <Section id="spots" title={copy.featured.title} intro={copy.featured.intro}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
            {copy.places.map((place) => (
              <PlaceCard key={place.name} place={place} typeLabel={copy.placeTypeLabel} />
            ))}
          </div>
        </Section>

        <Section id="categories" title={copy.categories.title}>
          <ul className="flex flex-wrap gap-2">
            {copy.categories.items.map((item) => (
              <li
                key={item}
                className="rounded-full px-3 py-1.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

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

      <footer className="mt-5 text-center text-sm text-dam-muted">{copy.footer}</footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
