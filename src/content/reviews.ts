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
  address: string;
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
    address: "Eerste Sweelinckstraat 19f, 1073 CL Amsterdam",
    rating: 4.4,
    publishedAt: "2026-05-06",
    excerpt: {
      nl: "Australische brunch spot waar ze weten wat ze doen. Geen gezeik, gewoon goed eten.",
      en: "Australian brunch spot that knows what it's doing. No BS, just good food.",
    },
    body: {
      nl: "Je vindt Little Collins in De Pijp, gerund door Australiërs die de brunch-game begrijpen op een niveau dat de meeste Amsterdammers niet eens weten dat bestaat. Het personeel is Aussie, de koffie is serieus, en de kaart leest als het reisdagboek van iemand die weet hoe je smaken combineert.\n\nNeem de gefrituurde halloumi met cornbread. Dit is hun vegetarische take op waffle chicken, die Southern comfort food classic. Klinkt gek? Is het ook. Maar het werkt. Crispy halloumi, zachte cornbread, een hele batterij aan smaken die je niet zag aankomen maar waar je meteen van houdt. Dit is wat er gebeurt wanneer iemand met smaak en lef een menu ontwerpt.\n\nDe kaart wisselt regelmatig, wat betekent dat deze mensen niet op safe spelen. Elke keer iets nieuws, altijd met die internationale twist die komt van iemand die de wereld heeft gezien en dat vertaalt naar wat je op je bord krijgt.\n\nMaar laten we eerlijk zijn: dit is TripAdvisor's lieveling, wat betekent dat de helft van de gasten toeristen zijn. Als je op zoek bent naar die échte Amsterdamse local vibe, ga dan ergens anders heen. En als je in het weekend tussen elf en één wilt komen? Reken op een rij. Geen reserveringen, geen shortcuts. Maar de kwaliteit is consistent en dat is waar het om gaat.\n\nGa voor de koffie, blijf voor het eten, en accepteer dat je misschien naast een stel Amerikanen zit die hun hele Instagram story hier aan het maken zijn. Dat is de prijs die je betaalt voor een zaak die het gewoon goed doet.",
      en: "You'll find Little Collins in De Pijp, run by Australians who understand the brunch game on a level most Amsterdammers don't even know exists. The staff is Aussie, the coffee is serious, and the menu reads like the travel diary of someone who knows how to combine flavors.\n\nTake the fried halloumi with cornbread. This is their vegetarian take on waffle chicken, that Southern comfort food classic. Sounds crazy? It is. But it works. Crispy halloumi, soft cornbread, a whole battery of flavors you didn't see coming but immediately love. This is what happens when someone with taste and guts designs a menu.\n\nThe menu changes regularly, which means these people aren't playing it safe. Something new every time, always with that international twist that comes from someone who's seen the world and translates it to what lands on your plate.\n\nBut let's be honest: this is TripAdvisor's favorite, which means half the guests are tourists. If you're looking for that authentic Amsterdam local vibe, go somewhere else. And if you want to come on the weekend between eleven and one? Expect a queue. No reservations, no shortcuts. But the quality is consistent and that's what matters.\n\nGo for the coffee, stay for the food, and accept that you might sit next to some Americans making their entire Instagram story here. That's the price you pay for a place that just does it right.",
    },
    images: [
      {
        src: "https://images.dam.cool/reviews/IMG_1845.jpeg",
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
    address: "Kamerlingh Onneslaan 3, 1097 DE Amsterdam",
    rating: 4.6,
    publishedAt: "2026-05-06",
    excerpt: {
      nl: "Eten uit de kas in een kas. Het concept is simpel, de uitvoering is alles behalve dat.",
      en: "Greenhouse food in a greenhouse. The concept is simple, the execution is anything but.",
    },
    body: {
      nl: "De Kas is een restaurant in een daadwerkelijke kas in Frankendael Park, wat ofwel briljant ofwel compleet over de top is, afhankelijk van je humeur. Maar hier is het ding: het werkt.\n\nZe verbouwen hun eigen groenten, kruiden en bloemen rond het restaurant. Wat 's ochtends nog in de grond zit, ligt 's middags op je bord. Het menu verandert met de seizoenen omdat het moet, niet omdat het marketing is. Dit is farm-to-table zonder de pretentie, gewoon omdat de farm letterlijk naast je tafel ligt.\n\nDe kaart is kort. Strak. Spannend. Je krijgt wat er klaar is, wat er goed is, wat er groeit. En dat is precies genoeg. Het is perfect voor die lange lunches waar je vergeet dat je eigenlijk nog dingen te doen hebt, of een rustig diner waar je eindelijk eens normaal kunt praten zonder geschreeuw van andere tafels.\n\nIs het duur? Ja. Is het het waard? Als je van echt seizoensgebonden eten houdt en niet zit te wachten op de zoveelste zaak die beweert 'local' te zijn terwijl ze hun groenten gewoon bij de groothandel halen - dan ja, absoluut.",
      en: "De Kas is a restaurant in an actual greenhouse in Frankendael Park, which is either brilliant or completely over the top, depending on your mood. But here's the thing: it works.\n\nThey grow their own vegetables, herbs and flowers around the restaurant. What's in the ground in the morning is on your plate at lunch. The menu changes with the seasons because it has to, not because it's marketing. This is farm-to-table without the pretension, simply because the farm is literally next to your table.\n\nThe menu is short. Tight. Exciting. You get what's ready, what's good, what's growing. And that's exactly enough. It's perfect for those long lunches where you forget you actually have things to do, or a quiet dinner where you can finally talk normally without shouting from other tables.\n\nIs it expensive? Yes. Is it worth it? If you love truly seasonal food and aren't waiting for the umpteenth place claiming to be 'local' while buying their vegetables from wholesale - then yes, absolutely.",
    },
  },
  {
    slug: "hiding-in-plain-sight",
    category: "bar",
    name: "Hiding in Plain Sight",
    neighborhood: "Centrum",
    address: "Rapenburg 18, 1011 TX Amsterdam",
    rating: 4.5,
    publishedAt: "2026-05-03",
    excerpt: {
      nl: "Cocktailbar die geen gimmicks nodig heeft. Ze weten wat ze doen en dat proef je.",
      en: "Cocktail bar that doesn't need gimmicks. They know what they're doing and you can taste it.",
    },
    body: {
      nl: "Hiding in Plain Sight is een van die zeldzame bars waar ze daadwerkelijk om cocktails geven in plaats van om Instagram content. De naam is waarschijnlijk ironisch bedoeld omdat half Amsterdam hier inmiddels over praat, maar de intieme sfeer blijft.\n\nDe kaart is strak gecureerd - geen eindeloze lijst met obscure namen, maar een selectie die laat zien dat iemand hier echt heeft nagedacht. Klassieke basis, creatieve twists, en dat allemaal zonder de pretentie van 'kijk mij eens bijzonder zijn'. De bartenders weten wat ze doen, en je proeft dat in elk glas.\n\nPerfect voor een date night als je iemand wilt imponeren zonder overkill, of voor een rustige start van je avond voordat je de stad in duikt. De sfeer is intiem zonder benauwd te zijn, en het is een plek waar je daadwerkelijk kunt praten zonder te moeten schreeuwen.\n\nReserveren wordt aangeraden, vooral met een groep. Want ja, het geheim is allang uit.",
      en: "Hiding in Plain Sight is one of those rare bars where they actually care about cocktails instead of Instagram content. The name is probably meant to be ironic because half of Amsterdam is talking about it by now, but the intimate atmosphere remains.\n\nThe menu is tightly curated - no endless list of obscure names, but a selection that shows someone really thought this through. Classic foundation, creative twists, and all without the pretension of 'look how special I am'. The bartenders know what they're doing, and you taste it in every glass.\n\nPerfect for a date night if you want to impress someone without overkill, or for a calm start to your evening before diving into the city. The atmosphere is intimate without being cramped, and it's a place where you can actually talk without having to shout.\n\nReservations are recommended, especially with a group. Because yes, the secret has long been out.",
    },
  },
  {
    slug: "stedelijk-museum",
    category: "museum",
    name: "Stedelijk Museum",
    neighborhood: "Zuid",
    address: "Museumplein 10, 1071 DJ Amsterdam",
    rating: 4.4,
    publishedAt: "2026-05-01",
    excerpt: {
      nl: "Modern en hedendaags in één keer. Geen gezeik met twee aparte museums, gewoon alles onder één dak.",
      en: "Modern and contemporary in one go. No messing around with two separate museums, just everything under one roof.",
    },
    body: {
      nl: "Het Stedelijk ligt aan het Museumplein en doet precies wat het moet doen: moderne en hedendaagse kunst laten zien zonder er een heel gebeuren van te maken. De vaste collectie is sterk genoeg om op terug te komen, en de tijdelijke expo's zijn meestal de moeite waard.\n\nWat het Stedelijk goed doet is niet proberen de hippe nieuwe kunsttempel te zijn. Het is gewoon solide. Je loopt er binnen, je ziet goede kunst, je loopt er weer uit. Geen pretentieuze galeriemedewerkers die je het gevoel geven dat je dom bent omdat je niet snapt waarom een lege kamer 'kunst' is.\n\nIs het revolutionary? Nee. Moet het dat zijn? Ook nee. Het is een betrouwbare plek waar je naartoe kunt als je moderne kunst wilt zien zonder dat je jezelf daarna moet verdedigen voor waarom je er was. En soms is 'betrouwbaar' precies wat je nodig hebt.\n\nGa op een doordeweekse ochtend, vermijd de weekenden als je niet zit te wachten op schoolklassen en selfie-sticks.",
      en: "The Stedelijk sits on Museumplein and does exactly what it needs to do: show modern and contemporary art without making a whole production of it. The permanent collection is strong enough to come back to, and the temporary exhibitions are usually worth it.\n\nWhat the Stedelijk does well is not trying to be the hip new art temple. It's just solid. You walk in, you see good art, you walk out. No pretentious gallery staff making you feel dumb because you don't understand why an empty room is 'art'.\n\nIs it revolutionary? No. Does it need to be? Also no. It's a reliable place you can go when you want to see modern art without having to defend yourself afterwards for why you were there. And sometimes 'reliable' is exactly what you need.\n\nGo on a weekday morning, avoid weekends if you don't want to deal with school groups and selfie sticks.",
    },
  },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isReviewCategory(value: string): value is ReviewCategory {
  return reviewCategories.includes(value as ReviewCategory);
}
