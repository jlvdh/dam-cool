export type Locale = "nl" | "en";

type SiteCopy = {
  nav: {
    home: string;
    categories: string;
    recentReviews: string;
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
  about: {
    title: string;
    body: string;
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
  };
  spotlight: {
    readReview: string;
  };
  footer: string;
};

export const siteContent: Record<Locale, SiteCopy> = {
  nl: {
    nav: {
      home: "Home",
      categories: "Categorieen",
      recentReviews: "Recente reviews",
      about: "Over",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Dam Cool",
      title: "Damn cool places in Amsterdam.",
      subtitle:
        "Geen geplastificeerde top-tienlijsten en geen 'echt Amsterdam'-theater. Dit gaat om zaken met nog een hartslag: koffie die je fietsrit waard is, kratten platen waar je doorheen wroet, kunst met bijt, nachten die langer duren dan de laatste tram, en hoeken die deze stad nog niet heeft klaargestoomd voor je feed.",
      ctaPrimary: "Bekijk reviews",
      ctaSecondary: "Lees meer",
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
    spotlight: {
      readReview: "Lees review",
    },
    footer: "dam.cool - coole plekken in Amsterdam",
  },
  en: {
    nav: {
      home: "Home",
      categories: "Categories",
      recentReviews: "Recent reviews",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Dam Cool",
      title: "Damn cool places in Amsterdam.",
      subtitle:
        "Forget the laminated top tens and the 'authentic Amsterdam' racket. dam.cool chases rooms that still have a pulse — coffee worth walking for, crates of vinyl you actually dig through, art with teeth, nights that outlast the last tram, and corners this city hasn't packaged for the feed yet.",
      ctaPrimary: "Browse reviews",
      ctaSecondary: "Read about us",
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
    spotlight: {
      readReview: "Read review",
    },
    footer: "dam.cool - cool places in Amsterdam",
  },
};
