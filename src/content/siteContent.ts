export type Locale = "nl" | "en";

export type Place = {
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  address: string;
};

type SiteCopy = {
  nav: {
    spots: string;
    categories: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  featured: {
    title: string;
    intro: string;
  };
  categories: {
    title: string;
    items: string[];
  };
  about: {
    title: string;
    body: string;
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
  };
  footer: string;
  placeTypeLabel: string;
  places: Place[];
};

export const siteContent: Record<Locale, SiteCopy> = {
  nl: {
    nav: {
      spots: "Plekken",
      categories: "Categorieen",
      about: "Over",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Amsterdam Curated",
      title: "Coole plekken in Amsterdam.",
      subtitle:
        "dam.cool is een minimalistische gids voor plekken met karakter: van koffie en platen tot kunst, nacht en onverwachte hoekjes.",
      ctaPrimary: "Bekijk plekken",
      ctaSecondary: "Lees meer",
    },
    featured: {
      title: "Uitgelichte plekken",
      intro: "Kleine selectie om mee te starten.",
    },
    categories: {
      title: "Categorieen",
      items: ["Koffie", "Eten", "Vinyl", "Kunst", "Nacht", "Buiten"],
    },
    about: {
      title: "Over dam.cool",
      body: "Geen ruis, geen eindeloze lijsten. Alleen plekken waar je echt heen wil. Snel, visueel en makkelijk doorzoekbaar.",
    },
    contact: {
      title: "Tip insturen",
      body: "Ken je een plek die hier thuishoort? Stuur een korte tip.",
      emailLabel: "Mail ons",
    },
    footer: "dam.cool - coole plekken in Amsterdam",
    placeTypeLabel: "Plek",
    places: [
      {
        name: "Schellingwouderbrug uitzichtpunt",
        category: "Buiten",
        neighborhood: "Noord",
        description: "Wind, water en skyline op vijf minuten van de drukte.",
        address: "Schellingwouderbrug, Amsterdam",
      },
      {
        name: "Lab111",
        category: "Kunst",
        neighborhood: "Oud-West",
        description: "Eigenzinnige films, expo's en een cafe in oud laboratorium.",
        address: "Arie Biemondstraat 111, Amsterdam",
      },
      {
        name: "Rush Hour",
        category: "Vinyl",
        neighborhood: "Centrum",
        description: "Iconische platenwinkel met lokale en internationale selectie.",
        address: "Spuistraat 116, Amsterdam",
      },
    ],
  },
  en: {
    nav: {
      spots: "Spots",
      categories: "Categories",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Amsterdam Curated",
      title: "Cool places in Amsterdam.",
      subtitle:
        "dam.cool is a minimalist city guide for places with character, from coffee and vinyl to art, night life and unexpected corners.",
      ctaPrimary: "Explore spots",
      ctaSecondary: "Read about us",
    },
    featured: {
      title: "Featured spots",
      intro: "A small handpicked starter selection.",
    },
    categories: {
      title: "Categories",
      items: ["Coffee", "Food", "Vinyl", "Art", "Night", "Outdoor"],
    },
    about: {
      title: "About dam.cool",
      body: "No noise, no endless lists. Just places worth your time. Fast, visual and easy to browse.",
    },
    contact: {
      title: "Send a tip",
      body: "Know a place that belongs here? Send a short recommendation.",
      emailLabel: "Email us",
    },
    footer: "dam.cool - cool places in Amsterdam",
    placeTypeLabel: "Place",
    places: [
      {
        name: "Schellingwouderbrug viewpoint",
        category: "Outdoor",
        neighborhood: "Noord",
        description: "Wind, water and skyline a few minutes from the crowds.",
        address: "Schellingwouderbrug, Amsterdam",
      },
      {
        name: "Lab111",
        category: "Art",
        neighborhood: "Oud-West",
        description:
          "Bold film programming, exhibitions and a cafe in a former lab.",
        address: "Arie Biemondstraat 111, Amsterdam",
      },
      {
        name: "Rush Hour",
        category: "Vinyl",
        neighborhood: "Centrum",
        description:
          "Iconic record store with local and international curation.",
        address: "Spuistraat 116, Amsterdam",
      },
    ],
  },
};
