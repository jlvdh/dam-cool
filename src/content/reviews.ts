import type { Locale } from "@/i18n/routing";

export const locales: Locale[] = ["nl", "en"];

const reviewCategories = [
  "restaurant",
  "bar",
  "cafe",
  "lunch",
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
    slug: "bottle-shop-wibautstraat",
    category: "restaurant",
    name: "Bottle Shop",
    neighborhood: "Oost",
    address: "Wibautstraat 125, 1091 GP Amsterdam",
    rating: 4.6,
    publishedAt: "2026-05-06",
    excerpt: {
      nl: "Een wijnzaak die je fatsoenlijk te eten geeft. Omar Sanchez snapt het — en dat proef je in elk gerecht.",
      en: "A wine shop that feeds you properly. Omar Sanchez gets it — and you taste it in every dish.",
    },
    body: {
      nl: "Er is een moment wanneer je Bottle Shop binnenloopt en je begrijpt dat hier iemand echt zijn best heeft gedaan. Niet het soort doen-alsof dat je op foodstagram ziet, maar het echte werk — het soort dat terugkomt in elke beslissing, van de natuurwijnen op de plank tot de manier waarop Omar Sanchez twee oesters met tajín en jalapeño de deur uit stuurt alsof het de normaalste zaak van de wereld is. Wat het, als je er goed over nadenkt, ook is.\n\nDe Wibautstraat was ooit Amsterdams enigszins trieste poging tot een boulevard — het soort straat dat te hard zijn best deed en tekortschoot. Maar de buurt heeft zichzelf stilletjes en koppig opnieuw uitgevonden, en plekken als Bottle Shop zijn de reden. Dit is een wijnzaak die je fatsoenlijk te eten geeft, want wie ook heeft bedacht dat je die twee ervaringen zou moeten scheiden, begreep er duidelijk geen van beiden.\n\nLaten we het over de tartaar hebben. Hij komt op een masa tostada, met een gezouten eidooier de kleur van barnsteen. Simpel in theorie. In de uitvoering is het het soort gerecht dat je je vork neer laat leggen om even na te denken over waar je bent en hoe gelukkig je bent er te zijn. Het textuurcontrast tussen het met de hand gesneden vlees en de knapperige tostada is leerboek — niet omdat iemand een leerboek heeft bestudeerd, maar omdat iemand heeft opgelet.\n\nDe gestoofde short rib op witte bonen en kruidenolie is geduld op een bord. Vlees wordt niet zo mals zonder respect voor het proces. En de geroosterde cichorei op maïscrème — geschaafde harde kaas erbovenop, bladeren die hun bittere kant vasthouden — is het soort groentegerecht waardoor je vergeet dat je eerst het vlees had besteld.\n\nKom hier voor de wijn. Blijf voor het eten. Kom terug omdat Amsterdam meer van dit soort plekken nodig heeft — plekken met een standpunt, een keuken die zich niet achter de menukaart verschuilt, en een kok die duidelijk heeft geleerd koken op een plek die er toe deed.",
      en: "There's a moment when you walk into Bottle Shop and you understand that someone here gave a damn. Not the kind of performative giving-a-damn you see on food Instagram, but the real thing — the kind that shows up in every decision, from the natural wines on the shelf to the way Omar Sanchez sends out two oysters dusted with tajín and jalapeño like it's the most natural thing in the world. Which, come to think of it, it is.\n\nWibautstraat was once Amsterdam's sorry attempt at a boulevard — the kind of street that tried too hard and fell short. But the neighborhood has been quietly, stubbornly reinventing itself, and places like Bottle Shop are why. This is a wine shop that feeds you properly, because whoever thought you should separate the two experiences clearly never understood either one.\n\nLet's talk about the tartare. It arrives on a masa tostada, crowned with a cured egg yolk the color of amber. Simple in theory. In execution, it's the kind of dish that makes you put your fork down and think about where you are and how lucky you are to be there. The texture contrast between the hand-cut beef and the crispy tostada is textbook — not because someone studied a textbook, but because someone paid attention.\n\nThe braised short rib on white beans and herb oil is patience on a plate. You don't get meat that tender without respecting the process. And the roasted chicory on corn cream — hard cheese shaved on top, the leaves still holding their bitter edge — is the kind of vegetable dish that makes you forget you ordered the meat first.\n\nCome here for the wine. Stay for the food. Return because Amsterdam needs more of this — places with a point of view, a kitchen that doesn't hide behind the menu, and a chef who clearly learned to cook somewhere that mattered.",
    },
    images: [
      {
        src: "https://images.dam.cool/reviews/IMG_1762.jpeg",
        alt: {
          nl: "Oesters met tajín en jalapeño op ijs — Bottle Shop",
          en: "Oysters with tajín and jalapeño on ice — Bottle Shop",
        },
        caption: {
          nl: "Oesters met tajín, jalapeño en rode saus — simpel en precies goed",
          en: "Oysters with tajín, jalapeño and red sauce — simple and exactly right",
        },
      },
      {
        src: "https://images.dam.cool/reviews/IMG_1763.jpeg",
        alt: {
          nl: "Bieftartaar op masa tostada met gezouten eidooier — Bottle Shop",
          en: "Beef tartare on masa tostada with cured egg yolk — Bottle Shop",
        },
        caption: {
          nl: "Bieftartaar op masa tostada met gezouten eidooier — geduld en precisie",
          en: "Beef tartare on masa tostada with cured egg yolk — patience and precision",
        },
      },
      {
        src: "https://images.dam.cool/reviews/IMG_1764.jpeg",
        alt: {
          nl: "Gestoofde short rib op witte bonen met kruidenolie — Bottle Shop",
          en: "Braised short rib on white beans with herb oil — Bottle Shop",
        },
        caption: {
          nl: "Short rib gestoofd tot hij vanzelf uiteenvalt — geduld op een bord",
          en: "Short rib braised until it falls apart — patience on a plate",
        },
      },
      {
        src: "https://images.dam.cool/reviews/IMG_1765.jpeg",
        alt: {
          nl: "Geroosterde cichorei op maïscrème met geschaafde kaas — Bottle Shop",
          en: "Roasted chicory on corn cream with shaved cheese — Bottle Shop",
        },
        caption: {
          nl: "Geroosterde cichorei op maïscrème — het groentegerecht dat je bij blijft",
          en: "Roasted chicory on corn cream — the vegetable dish you won't forget",
        },
      },
      {
        src: "https://images.dam.cool/reviews/IMG_1766.jpeg",
        alt: {
          nl: "Krokant gefrituurde kroket in roomsaus met venkel — Bottle Shop",
          en: "Crispy fried croquette in cream sauce with fennel — Bottle Shop",
        },
        caption: {
          nl: "Knapperige kroket in een fluweelzachte roomsaus — comfort zonder concessies",
          en: "Crispy croquette in a velvety cream sauce — comfort without compromise",
        },
      },
      {
        src: "https://images.dam.cool/reviews/IMG_1767.jpeg",
        alt: {
          nl: "Wibautstraat — sfeerimpressie Bottle Shop",
          en: "Wibautstraat — Bottle Shop atmosphere",
        },
        caption: {
          nl: "De zaak op de Wibaut: wijnzaak en restaurant in één",
          en: "The Wibaut spot: wine shop and restaurant in one",
        },
      },
      {
        src: "https://images.dam.cool/reviews/IMG_1768.jpeg",
        alt: {
          nl: "Natuurwijn en flessen bij Bottle Shop",
          en: "Natural wine and bottles at Bottle Shop",
        },
        caption: {
          nl: "Kom voor de wijn — de planken maken duidelijk waarom",
          en: "Come for the wine — the shelves make it obvious why",
        },
      },
    ],
  },
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
    slug: "alberto-pozzetto-de-pijp",
    category: "lunch",
    name: "Alberto Pozzetto",
    neighborhood: "De Pijp",
    address: "1e Van der Helststraat 57, 1073 AD Amsterdam",
    rating: 4.5,
    publishedAt: "2026-05-09",
    excerpt: {
      nl: "Broodjes, traiteur en koffie voor Italiaanse prijzen — een Pijper die het concept van brunch nooit heeft hoeven leren.",
      en: "Sandwiches, deli counter, coffee at Italian prices — a De Pijp institution that never had to \"learn brunch.\"",
    },
    body: {
      nl: "Ik weet nog dat ik hier voor het eerst binnenkwam — of eigenlijk: ik weet het vooral zo omdat de herinnering zó doorsnee is dat hij scherp bleef hangen: geurtje van espresso, gekletter van schaaltjes, iemand voor je die tijd heeft maar geen geduld voor gezwets. Alberto Pozzetto is geen adres voor een date met twaalf gerechten fotograferen; het is waar je naartoe gaat als je buik zegt 'broodje' en je hoofd nog steeds, tegen beter weten in, een beetje Noord-Italiaans wil worden.\n\nOfficieel zijn ze dit en dat — broodjeszaak hier, traiteur daar — maar in de praktijk voelt het als zo'n echte Amsterdamse klassieker die zich niet voor je persoonlijke merk hoeft te verontschuldigen. De Pijp om je heen doet tegenwoordig veel moeite om leuk te zijn; deze zaak hoeft alleen maar te zijn zoals die altijd al was: gevuld met vleeswaren achter glas, kazen waar je hoofdpijn van zou moeten krijgen van keuzestress maar die dat niet doen, en dat roffeltje aan vaste gasten waar je jezelf automatisch tussen schuift als je wilt horen hoe een buurt zichzelf beschermt tegen te veel succes.\n\nEn die koffie dan. Niet groot, geen schattig foamhartje erop — gewoon kop en prijs waar je nog kunt inhaleren voordat je morrelend aan je virtuele spaarrekening blijft. Het is waar we het tegenwoordig maar zelden over durven te hebben, omdat het te veel klinkt als een opiniestuk: 'Italiaanse prijzen' in een stad die je voor een halve latte soms meer laat aftikken dan je wilt toegeven.\n\nPak een broodje, neem plaats op de stoep of níet — maakt niet uit. Je komt niet voor het plaatje. Je komt omdat er nog ergens wordt gezeten waar lunch geen 'experience' hoeft te zijn maar gewoon eten tussen twee momenten door — met smaak die niet vraagt om applaus. Als je daar warm van wordt, ben je géén sucker; je bent gewoon nog iemand voor wie eten nog mag bestaan.",
      en: "You want the honest version? Amsterdam will sell you coffee like it owes you therapy — steamed milk, latte art heart, existential price tag. Alberto Pozzetto is something else entirely: counter, deli, Old World rhythm. Traiteur, sandwich shop, whichever label stops you from overthinking lunch.\n\nDe Pijp has spent the last decade learning to love itself on Instagram. This place skipped class. Behind the glass there's mortadella that doesn't need copywriting, olives that survived the commute from somewhere sunnier than our collective mood, pasta salads that know their job isn't reinventing starch. Nobody here is grooming you into a TikTok reel. You're here to chew, swallow, caffeinate, repeat.\n\nThe coffee — small, fierce, stubbornly inexpensive by local standards — is the quiet argument the whole strip makes against the racket three doors down. You're not chasing \"third wave\"; you're reminding your wallet it still remembers what a cup costs when nobody's pretending the beans were raised on poetry.\n\nStand at the counter. Order in whatever language fragments you have handy. Eat your broodje with the focused concentration usually reserved for smuggling pastries through airport security. Leave before you confuse reliability with boredom — they're cousins, but only one of them gets you fed while the brunch waitlist outside multiplies like mildew.\n\nThis is the Amsterdam that didn't ask permission to survive the tastemakers. Long may it hiss behind the espresso machine.",
    },
  },
  {
    slug: "de-predetarier-de-pijp",
    category: "lunch",
    name: "De Predetariër",
    neighborhood: "De Pijp",
    address: "Gerard Doustraat 180H, 1073 XA Amsterdam",
    rating: 4.5,
    publishedAt: "2026-05-10",
    excerpt: {
      nl: "Wild op je broodje midden in de Pijp — vlees dat ergens heeft gelopen voordat het op je afkwam.",
      en: "Game on a ciabatta in the heart of De Pijp — meat with a past, not a marketing department.",
    },
    body: {
      nl: "Binnen ruikt het naar rook en vet en iets wat je niet direct een naam wilt geven maar wel herkent: bos, kilte, een dier dat geen rekenschap heeft afgelegd van je schema in Google Agenda.\n\nDe Predetariër staat daar waar de Gerard Doustraat doet alsof ze gezellig is, terwijl er onder de huid van de stad altijd andere dingen zijn geweest: dingen met poten, met longen. Hier snijden ze wild alsof het geen gimmick is. Je bestelt rendang van hert, pastrami van gans, coppa van everzwijn — elk broodje een klein dossier tegen de industrie waar we onszelf zo graag in verschuilen.\n\nJe hoeft niet te geloven in hun filosofie om te weten dat het klopt tussen je kiezen door: smaak breed en donker en een beetje onbeholpen eerlijk, zoals echte smaak daar soms bij hoort als hij niet heeft leren lachen naar de-camera. Er is ook plantaardig; het voelt niet als camouflage maar als tegenwicht — alsof ze weten dat eten meer is dan jezelf rechtzetten tegen de wereld.\n\nIk sla geen trom voor jachtromantiek hier. Ik zeg dit: tussen de mokka's en bitterballen-hotspots is dit een plaats waar het vlees niet doet alsof het nooit geleefd heeft. Als je daar bang voor bent, sla je deze zaak maar over.\n\nWie blijft, eet met handen die eventjes trillen van kou of honger of van iets dat je van vroeger kent en nooit helemaal stil is geworden. Daarna loop je de straat weer in en proeft de stad scherper — alsof iemand het glas een slag heeft gegeven zonder dat je het zag aankomen.",
      en: "Walk in and the air hits you — smoke, fat, the metallic undertone of something that used to run. This is De Predetariër: half wild butcher, half sandwich counter, all the way down Gerard Doustraat like a dare to the neighborhood's brunch industrial complex.\n\nThey'll put game on ciabatta like it's the most natural lunch in the world — venison rendang, goose pastrami, wild boar coppa — and in a way, it is. The menu reads like a manifesto if you're the kind of person who reads menus for ideology; if you're not, it still reads like lunch that tasted something before it met the bread.\n\nHere's the part where I don't waste your time with a seminar. Some people want their protein to arrive with amnesia — no history, no mud, no weather. This place doesn't do that. There's a plant-based option too, and it doesn't feel like a hostage situation; it feels like adults making choices without turning lunch into a purity contest.\n\nI'm not here to sell you on hunting cosplay. I'm here because the flavors are wild in the old sense: dark, stubborn, a little rough around the edges. That's what happens when meat isn't raised in a spreadsheet.\n\nOrder. Eat. Wipe your mouth. Step back onto the street with your urban armor a little cracked — in the good way, the hungry way, the way that reminds you you're still an animal who occasionally remembers it.",
    },
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

const reviewCategorySet = new Set(
  venueReviews.map((review) => review.category),
);

/** Categories with at least one review — use for links; empty categories stay out of the UI. */
export const reviewCategoriesWithReviews: ReviewCategory[] =
  reviewCategories.filter((category) => reviewCategorySet.has(category));

/** First reviews that have imagery (e.g. homepage spotlight grid). */
export function venueReviewsWithImages(limit = 2): VenueReview[] {
  return venueReviews.filter((review) => review.images?.length).slice(0, limit);
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isReviewCategory(value: string): value is ReviewCategory {
  return reviewCategories.includes(value as ReviewCategory);
}
