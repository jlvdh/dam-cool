import type { Locale } from "@/content/siteContent";

export const locales: Locale[] = ["nl", "en"];

export const reviewCategories = [
  "restaurant",
  "bar",
  "cafe",
  "museum",
  "club",
  "hotel",
  "other",
] as const;

export type ReviewCategory = (typeof reviewCategories)[number];

export type VenueReview = {
  slug: string;
  category: ReviewCategory;
  name: string;
  neighborhood: string;
  rating: number;
  publishedAt: string;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string>;
  images?: {
    src: string;
    alt: Record<Locale, string>;
    caption?: Record<Locale, string>;
  }[];
};

export const venueReviews: VenueReview[] = [
  {
    slug: "little-collins-amsterdam",
    category: "restaurant",
    name: "Little Collins",
    neighborhood: "De Pijp",
    rating: 4.4,
    publishedAt: "2026-05-06",
    excerpt: {
      nl: "All-day brunch spot met creatieve Australisch-geïnspireerde gerechten.",
      en: "All-day brunch spot with creative Australian-inspired dishes.",
    },
    body: {
      nl: "Little Collins in De Pijp is een sterke keuze voor brunch met veel smaak en goede koffie. Het restaurant wordt gerund door een Australische eigenaar en het personeel is ook Australisch, wat zorgt voor een authentieke brunch-ervaring.\n\nHet eten is fantastisch voor een brunch restaurant, met interessante combinaties die duidelijk geïnspireerd zijn op iemands reisverleden. Een hoogtepunt is de gefrituurde halloumi met cornbread - hun vegetarische take op de Southern classic 'waffle chicken'. De kaart wisselt regelmatig en toont creativiteit met een internationale twist.\n\nDit restaurant is zeer populair op TripAdvisor en wordt daarom veel gevonden door toeristen. Voor een local vibe hoef je hier niet te komen - de sfeer is relaxed maar levendig, met een internationale crowd. Verwacht dat je in de rij moet staan in het weekend tussen 11:00 en 13:00. De populariteit is terecht: de kwaliteit is consistent en de koffie is uitstekend.",
      en: "Little Collins in De Pijp is a strong brunch pick with bold flavors and solid coffee. The restaurant is run by an Australian owner with Australian staff, bringing an authentic brunch experience to Amsterdam.\n\nThe food is fantastic for a brunch restaurant, with interesting combinations clearly inspired by someone's travel history. A highlight is the fried halloumi with cornbread - their vegetarian take on the Southern classic 'waffle chicken'. The menu rotates often and shows creativity with an international twist.\n\nThis restaurant is very popular on TripAdvisor and therefore frequently found by tourists. Don't come here for a local vibe - the atmosphere is relaxed yet lively with an international crowd. Expect to queue on weekends between 11:00 and 13:00. The popularity is well-deserved: quality is consistent and the coffee is excellent.",
    },
    images: [
      {
        src: "/little-collins-halloumi-cornbread.jpg",
        alt: {
          nl: "Gefrituurde halloumi met cornbread - Little Collins' vegetarische versie van waffle chicken",
          en: "Fried halloumi with cornbread - Little Collins' vegetarian take on waffle chicken",
        },
        caption: {
          nl: "Gefrituurde halloumi met cornbread - een vegetarische twist op de Southern classic",
          en: "Fried halloumi with cornbread - a vegetarian twist on the Southern classic",
        },
      },
    ],
  },
  {
    slug: "de-kas-amsterdam",
    category: "restaurant",
    name: "De Kas",
    neighborhood: "Oost",
    rating: 4.6,
    publishedAt: "2026-05-06",
    excerpt: {
      nl: "Kas-restaurant met seizoensmenu en verrassend rustige setting.",
      en: "Greenhouse restaurant with seasonal menus in a calm setting.",
    },
    body: {
      nl: "De Kas is perfect voor een lange lunch of rustig diner. De focus op seizoensproducten maakt de kaart strak maar spannend.",
      en: "De Kas works well for long lunches and relaxed dinners. The seasonal approach keeps the menu focused but exciting.",
    },
  },
  {
    slug: "hiding-in-plain-sight",
    category: "bar",
    name: "Hiding in Plain Sight",
    neighborhood: "Centrum",
    rating: 4.5,
    publishedAt: "2026-05-03",
    excerpt: {
      nl: "Cocktailbar met klassieke basis en creatieve twists.",
      en: "Cocktail bar balancing classic foundations with creative twists.",
    },
    body: {
      nl: "De sfeer is intiem en de kaart is sterk gecureerd. Fijn voor date night of een rustige start van je avond.",
      en: "The atmosphere is intimate and the menu is tightly curated. Great for a date night or a calm start to your evening.",
    },
  },
  {
    slug: "stedelijk-museum",
    category: "museum",
    name: "Stedelijk Museum",
    neighborhood: "Zuid",
    rating: 4.4,
    publishedAt: "2026-05-01",
    excerpt: {
      nl: "Sterke vaste collectie met altijd een interessante tijdelijke expo.",
      en: "Strong permanent collection with consistently interesting temporary exhibitions.",
    },
    body: {
      nl: "Het Stedelijk blijft een vaste aanrader als je moderne en hedendaagse kunst wilt combineren in een bezoek.",
      en: "Stedelijk remains a reliable recommendation when you want modern and contemporary art in one visit.",
    },
  },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isReviewCategory(value: string): value is ReviewCategory {
  return reviewCategories.includes(value as ReviewCategory);
}
