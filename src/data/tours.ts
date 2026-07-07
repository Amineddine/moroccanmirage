export type CityId = "marrakech" | "casablanca" | "tangier" | "fes";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  /** optional per-day enrichment — usually supplied by itinerary-scenes.ts */
  drive?: string;
  image?: { src: string; alt: string };
  highlights?: string[];
};

export type Tour = {
  id: string;
  city: CityId;
  title: string;
  days: number;
  nights: number;
  start: string;
  end: string;
  reviews: number;
  image: string;
  hero: string;
  tagline: string;
  summary: string;
  itinerary: ItineraryDay[];
};

export const INCLUDED = [
  "Private car (SUV or Minivan) A/C",
  "Pick up and return to accommodation",
  "Luxury stay booked",
  "Local guides",
  "Camel trekking (camel per person)",
  "Sandboarding (if interested)",
  "Flexible stops",
] as const;

export const EXCLUDED = ["Lunch", "Drinks", "Tickets"] as const;

export const CITY_META: Record<
  CityId,
  { name: string; epithet: string; coordinates: string; image: string; hero: string; intro: string }
> = {
  marrakech: {
    name: "Marrakech",
    epithet: "The Red City",
    coordinates: "31.6295° N — 7.9811° W",
    image: "/TOURS FROM MARRAKECH.jpg",
    hero: "/generated/hero-city-marrakech.jpg",
    intro:
      "All roads in the south begin beneath the Koutoubia. From the red city, the High Atlas opens onto kasbah valleys, rose gardens, and the great dunes of Erg Chebbi.",
  },
  casablanca: {
    name: "Casablanca",
    epithet: "The White City",
    coordinates: "33.5731° N — 7.5898° W",
    image: "/TOURS FROM CASABLANCA.avif",
    hero: "/generated/hero-city-casablanca.jpg",
    intro:
      "Morocco's Atlantic gateway. Begin where the ocean meets Art Deco boulevards, then trace the full arc of the kingdom — imperial cities, blue mountains, golden desert.",
  },
  tangier: {
    name: "Tangier",
    epithet: "The Gateway",
    coordinates: "35.7595° N — 5.8340° W",
    image: "/TOURS FROM TANGIER.jpg",
    hero: "/generated/hero-city-tangier.jpg",
    intro:
      "Where two seas and two continents meet. From the straits of Gibraltar, descend through the Rif, the imperial heartland, and onward to the Sahara's edge.",
  },
  fes: {
    name: "Fes",
    epithet: "The Ancient Capital",
    coordinates: "34.0181° N — 5.0078° W",
    image: "/TOURS FROM FES.avif",
    hero: "/generated/hero-city-fes.jpg",
    intro:
      "The world's oldest living medina. From Fes, cedar forests and the Ziz Valley's million palms lead straight to the highest dunes in Morocco.",
  },
};

export const TOURS: Tour[] = [
  /* ───────────────────────── MARRAKECH ───────────────────────── */
  {
    id: "marrakech-3-days-desert",
    city: "marrakech",
    title: "3 Days Desert Tour From Marrakech",
    days: 3,
    nights: 2,
    start: "MRK",
    end: "MRK",
    reviews: 295,
    image: "/marrakech tour 1.jpg",
    hero: "/generated/hero-marrakech-3-days-desert.jpg",
    tagline: "The essential Sahara — kasbahs, gorges, and a night beneath the dunes.",
    summary:
      "The classic southern circuit, distilled. Cross the High Atlas at Tizi n'Tichka, sleep in the Dades Valley, walk the Todra canyon, and ride camels into Erg Chebbi for a night of firelight and stars before returning through Ouarzazate.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Dades Valley via Ait Ben Haddou",
        description:
          "Climb out of the red city over the Tizi n'Tichka pass (2,260 m), pausing at panoramic Berber villages before reaching the UNESCO ksar of Ait Ben Haddou. After Ouarzazate and the Valley of Roses, the day ends among the eroded cliffs of the Dades Gorge.",
      },
      {
        day: 2,
        title: "Dades to Merzouga — Todra Gorge & Camel Trek",
        description:
          "Morning light on the Dades 'monkey fingers' formations, then the sheer 300-metre canyon walls of Todra Gorge. Through Tinghir and Rissani to Merzouga, where camels carry you over the dunes of Erg Chebbi to a desert camp — dinner, drums, and a sky full of stars.",
      },
      {
        day: 3,
        title: "Sahara Sunrise — Return to Marrakech",
        description:
          "Wake before dawn to watch the dunes turn from violet to gold. After breakfast at camp, retrace the Draa-Tafilalet road through Ouarzazate and back across the Atlas, arriving in Marrakech by evening.",
      },
    ],
  },
  {
    id: "marrakech-3-days-fes",
    city: "marrakech",
    title: "3 Days Tour from Marrakech to Fes",
    days: 3,
    nights: 2,
    start: "MRK",
    end: "FES",
    reviews: 212,
    image: "/marrakech tour 2.jpg",
    hero: "/generated/hero-marrakech-3-days-fes.jpg",
    tagline: "Cross the kingdom — Atlas passes, Sahara dunes, and the ancient capital.",
    summary:
      "The great traverse. Three days connecting Morocco's two most storied cities by the most beautiful road possible: over the High Atlas, through the kasbah valleys, across the dunes of Erg Chebbi, and up the Ziz Valley to Fes.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Dades Gorge",
        description:
          "Over Tizi n'Tichka to the fortified ksar of Ait Ben Haddou — film set of Gladiator and Game of Thrones — then east through Ouarzazate, the Skoura palm oasis, and the Valley of Roses to a night in the Dades Gorge.",
      },
      {
        day: 2,
        title: "Todra Gorge to the Erg Chebbi Dunes",
        description:
          "Walk the cool canyon floor of Todra Gorge before crossing the Tafilalet to Merzouga. At golden hour, a camel caravan carries you into the dunes for sandboarding, a Berber dinner, and a night in a luxury desert camp.",
      },
      {
        day: 3,
        title: "Merzouga to Fes via the Ziz Valley",
        description:
          "Sunrise over the Sahara, then north along the Ziz Valley's ribbon of a million palms. Pause in Midelt, cross the cedar forests of Azrou — watch for Barbary macaques — and descend through alpine Ifrane to the medieval gates of Fes.",
      },
    ],
  },
  {
    id: "marrakech-4-days",
    city: "marrakech",
    title: "4 Days tour from Marrakech",
    days: 4,
    nights: 3,
    start: "MRK",
    end: "MRK",
    reviews: 185,
    image: "/marrakech tour 3.jpg",
    hero: "/generated/hero-marrakech-4-days.jpg",
    tagline: "The southern oases at an unhurried pace — with a full night in the dunes.",
    summary:
      "One extra day transforms the desert circuit. Linger in the Skoura oasis and the Valley of Roses, take the gorges slowly, and still have time for a long, golden evening in the Sahara before the Draa Valley road home.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate via Ait Ben Haddou",
        description:
          "A slow crossing of the High Atlas with stops at viewpoint villages, then an afternoon exploring the mud-brick towers of Ait Ben Haddou before a night in Ouarzazate, gateway to the desert.",
      },
      {
        day: 2,
        title: "Skoura Oasis & Valley of Roses to Dades",
        description:
          "Wander the thousand-palm oasis of Skoura and its Kasbah Amridil, breathe in the rose distilleries of Kelaat M'Gouna, and climb the hairpins of the Dades Gorge for sunset over the valley.",
      },
      {
        day: 3,
        title: "Todra Gorge to the Merzouga Dunes",
        description:
          "Morning in the towering Todra canyon, then across the black hamada to Merzouga. Camels at golden hour, sandboarding on the high dunes, and a candle-lit dinner at a luxury camp deep in Erg Chebbi.",
      },
      {
        day: 4,
        title: "Sahara Sunrise — Return via Agdz & the Draa",
        description:
          "Dawn over the dunes, then the long scenic return: the Draa Valley's palm corridor, the Agdz kasbah road, and a final crossing of Tizi n'Tichka into Marrakech by nightfall.",
      },
    ],
  },
  {
    id: "marrakech-5-days",
    city: "marrakech",
    title: "5 Days Sahara tour from Marrakech",
    days: 5,
    nights: 4,
    start: "MRK",
    end: "MRK",
    reviews: 188,
    image: "/marrakech tour 4.jpg",
    hero: "/generated/hero-marrakech-5-days.jpg",
    tagline: "Two nights in the deep Sahara — nomad camps, Gnawa music, hidden oases.",
    summary:
      "The connoisseur's desert tour. A full day around Merzouga by 4x4 — nomad families, the Gnawa village of Khamlia, fossil beds and seasonal lakes — bracketed by the great kasbah route and two unforgettable desert nights.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate",
        description:
          "Cross Tizi n'Tichka and step into the cinematic ksar of Ait Ben Haddou. Evening at a kasbah hotel in Ouarzazate, Morocco's Hollywood of the desert.",
      },
      {
        day: 2,
        title: "Roses Valley & Dades Gorge",
        description:
          "Through Skoura's palms and the rosewater town of Kelaat M'Gouna, then an afternoon walk among the Dades Gorge's surreal rock formations. Night at a gorge-side riad.",
      },
      {
        day: 3,
        title: "Todra Gorge to Erg Chebbi",
        description:
          "The canyon at Todra, lunch in Tinghir's palmery, then the dunes. A camel caravan delivers you to camp as the Sahara turns to fire — dinner under more stars than you have ever seen.",
      },
      {
        day: 4,
        title: "Deep Desert Day — Khamlia, Nomads & the Black Dunes",
        description:
          "A 4x4 circuit around the erg: tea with a nomad family, hypnotic Gnawa rhythms in Khamlia, abandoned mining villages, fossil plateaus, and sunset from the highest dune. A second night in the Sahara.",
      },
      {
        day: 5,
        title: "Merzouga to Marrakech",
        description:
          "One last sunrise, then the full sweep back — Alnif's fossil country, the Draa road, Ouarzazate, and the Atlas pass — arriving in Marrakech in the evening.",
      },
    ],
  },
  {
    id: "marrakech-6-days",
    city: "marrakech",
    title: "6 Days tour from Marrakech",
    days: 6,
    nights: 5,
    start: "MRK",
    end: "MRK",
    reviews: 252,
    image: "/marrakech tour 5.jpg",
    hero: "/generated/hero-marrakech-6-days.jpg",
    tagline: "Desert and Fes in one grand loop — the south road out, the cedar road home.",
    summary:
      "A complete southern circle: kasbahs and gorges on the way out, a Sahara night at Erg Chebbi, then north through the Ziz Valley to a full day in Fes before returning across the Middle Atlas and the plains of Beni Mellal.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate via Ait Ben Haddou",
        description:
          "The Tizi n'Tichka pass, Berber villages clinging to the slopes, and golden hour inside the walls of Ait Ben Haddou. Overnight in Ouarzazate.",
      },
      {
        day: 2,
        title: "Ouarzazate to Dades Valley",
        description:
          "Skoura's oasis kasbahs, the Valley of Roses, and the wind-carved cliffs of the Dades Gorge, with an evening walk to the famous switchback viewpoint.",
      },
      {
        day: 3,
        title: "Todra Gorge to Merzouga — Night in the Dunes",
        description:
          "Todra's vertical canyon, the desert towns of the Tafilalet, then camels into Erg Chebbi. Sandboarding, mint tea on the crest, and dinner by firelight at camp.",
      },
      {
        day: 4,
        title: "Merzouga to Fes via Midelt & the Ziz Valley",
        description:
          "Sunrise on the dunes, then the panoramic Ziz Valley north — a green river of palms between desert cliffs. Across Midelt's apple country and the Azrou cedar forest to Fes.",
      },
      {
        day: 5,
        title: "Fes — The Ancient Capital",
        description:
          "A guided day in the world's oldest living medina: Al Quaraouiyine, the Chouara tanneries, Medersa Bou Inania, and the blue gate of Bab Boujloud. Evening free in the souks.",
      },
      {
        day: 6,
        title: "Fes to Marrakech across the Middle Atlas",
        description:
          "The scenic interior road home — Ifrane's alpine streets, Azrou's cedars, the plains of Beni Mellal and the Tadla — arriving in Marrakech by early evening.",
      },
    ],
  },
  {
    id: "marrakech-8-days",
    city: "marrakech",
    title: "8 Days Morocco Tour from Marrakech",
    days: 8,
    nights: 7,
    start: "MRK",
    end: "CMN",
    reviews: 185,
    image: "/marrakech tour 6.jpeg",
    hero: "/generated/hero-marrakech-8-days.jpg",
    tagline: "Red city to white city — desert, Fes, and the blue pearl in between.",
    summary:
      "A one-way grand arc through Morocco's greatest hits: two days in Marrakech, the kasbah route and a Sahara night, the medieval depths of Fes, the blue lanes of Chefchaouen, and a coastal finale through Rabat to Casablanca.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Welcomed at the airport and transferred to a traditional riad. As night falls, an introductory stroll into the theatre of Jemaa el-Fnaa Square.",
      },
      {
        day: 2,
        title: "Marrakech Sightseeing",
        description:
          "Bahia Palace's painted ceilings, the Saadian Tombs, the Koutoubia gardens, and a guided drift through the souks' dyers and metalworkers.",
      },
      {
        day: 3,
        title: "Marrakech to Dades via Ait Ben Haddou",
        description:
          "Over the High Atlas to the great ksar, then east along the kasbah route through Skoura and the Valley of Roses to the Dades Gorge.",
      },
      {
        day: 4,
        title: "Todra Gorge to Merzouga — Desert Camp",
        description:
          "Canyon walls at Todra, then the dunes of Erg Chebbi by camel. Sunset from the crest, Berber drums after dinner, a night under the Milky Way.",
      },
      {
        day: 5,
        title: "Merzouga to Fes via the Ziz Valley",
        description:
          "Sahara sunrise, then north past the Ziz palm gorges, Midelt, and the cedar forests of the Middle Atlas, arriving in Fes by evening.",
      },
      {
        day: 6,
        title: "Fes Exploration",
        description:
          "A full guided day inside the UNESCO medina — Al Quaraouiyine University, the tanneries, fondouks and medersas — among ten thousand alleys.",
      },
      {
        day: 7,
        title: "Fes to Chefchaouen",
        description:
          "North through the Rif foothills to the blue city. An afternoon wandering indigo lanes, the Kasbah Museum, and sunset from the Spanish Mosque.",
      },
      {
        day: 8,
        title: "Chefchaouen to Casablanca via Rabat",
        description:
          "Descend to the Atlantic at Rabat — Hassan Tower and the Kasbah of the Udayas — then follow the coast to Casablanca for your onward journey.",
      },
    ],
  },
  {
    id: "marrakech-10-days",
    city: "marrakech",
    title: "10 Days Morocco Tours from Marrakech",
    days: 10,
    nights: 9,
    start: "MRK",
    end: "MRK",
    reviews: 130,
    image: "/marrakech tour 7.jpg",
    hero: "/generated/hero-marrakech-10-days.jpg",
    tagline: "The full circle of the kingdom — every landscape, one seamless journey.",
    summary:
      "Morocco in its entirety: the red city, the kasbah valleys, a night in the Sahara, imperial Fes, blue Chefchaouen, and the Atlantic capital — closing the loop back to Marrakech with a farewell dinner.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Welcomed and transferred to a traditional riad; evening stroll to Jemaa el-Fnaa Square as the food stalls and storytellers come alive.",
      },
      {
        day: 2,
        title: "Marrakech Sightseeing",
        description:
          "Bahia Palace, the Saadian Tombs, and the labyrinth of the souks with a private guide.",
      },
      {
        day: 3,
        title: "Marrakech to Ait Ben Haddou & Ouarzazate",
        description:
          "Cross the High Atlas via the Tizi n'Tichka Pass to the UNESCO ksar of Ait Ben Haddou, then on to Ouarzazate for the night.",
      },
      {
        day: 4,
        title: "Ouarzazate to Dades Valley",
        description:
          "The Skoura Oasis, the Valley of Roses, and an evening among the canyon walls of the Dades Gorge.",
      },
      {
        day: 5,
        title: "Dades to Merzouga",
        description:
          "Todra Gorge and Rissani's markets, then a sunset camel trek into the Sahara dunes for a night at a luxury desert camp.",
      },
      {
        day: 6,
        title: "Merzouga to Fes via Midelt",
        description:
          "Sahara sunrise, then north through the Ziz Valley palm groves and the Middle Atlas cedar country to Fes.",
      },
      {
        day: 7,
        title: "Fes Exploration",
        description:
          "A guided day in the UNESCO medina — Al Quaraouiyine University, the tanneries, and the artisan quarters of the world's oldest university city.",
      },
      {
        day: 8,
        title: "Fes to Chefchaouen",
        description:
          "Into the Rif Mountains to the Blue City — indigo alleys, the Kasbah Museum, and mint tea in Plaza Uta el-Hammam.",
      },
      {
        day: 9,
        title: "Chefchaouen to Rabat",
        description:
          "Down to the Atlantic capital: Hassan Tower, the Kasbah of the Udayas, and an evening walk along the ocean corniche.",
      },
      {
        day: 10,
        title: "Rabat to Marrakech",
        description:
          "The return south with scenic stops en route, arriving in Marrakech for a farewell dinner under the lanterns.",
      },
    ],
  },

  /* ───────────────────────── CASABLANCA ───────────────────────── */
  {
    id: "casablanca-15-days",
    city: "casablanca",
    title: "15 Days Grand Tour From Casablanca",
    days: 15,
    nights: 14,
    start: "CMN",
    end: "CMN",
    reviews: 301,
    image: "/casablanca tour 1.avif",
    hero: "/generated/hero-casablanca-15-days.jpg",
    tagline: "The definitive Morocco — every city, every landscape, nothing left unseen.",
    summary:
      "Our most complete journey. Two weeks tracing the entire kingdom: the imperial cities, the blue pearl of the Rif, two nights in the deep Sahara, the great gorges, Marrakech, and the windswept Atlantic at Essaouira — returning along the coast to Casablanca.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Met at Mohammed V airport and settled into your hotel. An evening introduction to the white city's Art Deco boulevards and ocean corniche.",
      },
      {
        day: 2,
        title: "Casablanca to Rabat",
        description:
          "Morning visit to the oceanside Hassan II Mosque, then north to the capital — Hassan Tower, the Chellah necropolis, and the blue-and-white Kasbah of the Udayas.",
      },
      {
        day: 3,
        title: "Rabat to Chefchaouen",
        description:
          "Through the green hills of the Rif to the blue city, arriving in time for golden hour in the indigo lanes.",
      },
      {
        day: 4,
        title: "Chefchaouen — A Day in Blue",
        description:
          "A slow day: the 15th-century Kasbah, weaving workshops, the Ras El Maa spring, and sunset from the Spanish Mosque overlooking the town.",
      },
      {
        day: 5,
        title: "Chefchaouen to Fes via Volubilis & Meknes",
        description:
          "South past the Roman mosaics of Volubilis and the monumental gates of imperial Meknes, reaching Fes by evening.",
      },
      {
        day: 6,
        title: "Fes Exploration",
        description:
          "A full guided day in the medina: Al Quaraouiyine, the Chouara tanneries, Nejjarine fondouk, and the potters' quarter.",
      },
      {
        day: 7,
        title: "Fes to Merzouga",
        description:
          "Across the Middle Atlas — Ifrane, the Azrou cedars, Midelt — and down the Ziz Valley to the edge of the dunes. Camel trek to a luxury desert camp.",
      },
      {
        day: 8,
        title: "Merzouga — Deep Desert Day",
        description:
          "A 4x4 day around Erg Chebbi: nomad encampments, Gnawa music in Khamlia, fossil beds, and a second sunset from the high dunes.",
      },
      {
        day: 9,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Out of the sands and into the canyons — the sheer walls of Todra, the palmeries of Tinghir, and a night in the Dades Gorge.",
      },
      {
        day: 10,
        title: "Dades to Ouarzazate — Roses & Kasbahs",
        description:
          "The Valley of Roses, Skoura's Kasbah Amridil, and an afternoon at the Atlas Film Studios or Taourirt Kasbah in Ouarzazate.",
      },
      {
        day: 11,
        title: "Ouarzazate to Marrakech via Ait Ben Haddou",
        description:
          "Morning inside the great ksar, then over the Tizi n'Tichka pass to the red city.",
      },
      {
        day: 12,
        title: "Marrakech Sightseeing",
        description:
          "Bahia Palace, the Saadian Tombs, Majorelle's cobalt garden, and an evening in the carnival of Jemaa el-Fnaa.",
      },
      {
        day: 13,
        title: "Marrakech to Essaouira",
        description:
          "West through argan country — goats in the trees — to the fortified port of Essaouira: ramparts, gulls, and Atlantic light.",
      },
      {
        day: 14,
        title: "Essaouira — The Windy City",
        description:
          "A free day inside the UNESCO medina: the Skala cannons, the fishing harbour's blue boats, thuya-wood ateliers, and seafood grilled at the dock.",
      },
      {
        day: 15,
        title: "Essaouira to Casablanca",
        description:
          "North along the Atlantic through Oualidia's lagoons and El Jadida's Portuguese citadel, arriving in Casablanca for your departure.",
      },
    ],
  },
  {
    id: "casablanca-6-days",
    city: "casablanca",
    title: "6 Days Tour From Casablanca",
    days: 6,
    nights: 5,
    start: "CMN",
    end: "MRK",
    reviews: 232,
    image: "/casablanca tour 2.jpg",
    hero: "/generated/hero-casablanca-6-days.jpg",
    tagline: "Coast to dunes to red city — the kingdom's essence in six days.",
    summary:
      "An efficient, beautiful line across Morocco: Casablanca and the capital, medieval Fes, a night in the Sahara at Erg Chebbi, and the kasbah route west to finish beneath the minarets of Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport welcome, the Hassan II Mosque at the ocean's edge, and an evening on the corniche.",
      },
      {
        day: 2,
        title: "Casablanca to Fes via Rabat & Meknes",
        description:
          "The capital's Hassan Tower and Udayas kasbah, the imperial gates of Meknes, and arrival in Fes by nightfall.",
      },
      {
        day: 3,
        title: "Fes Exploration",
        description:
          "A guided day in the oldest medina on earth — tanneries, medersas, and the spiritual heart of Al Quaraouiyine.",
      },
      {
        day: 4,
        title: "Fes to Merzouga — Night in the Sahara",
        description:
          "Over the Middle Atlas and down the Ziz Valley to the dunes. Camels at sunset, dinner and drums at a luxury desert camp.",
      },
      {
        day: 5,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Sunrise on the sands, then the great canyons — Todra's walls and the Dades Valley's castles of mud and rose.",
      },
      {
        day: 6,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "The kasbah route west, a final walk through Ait Ben Haddou, and the Tizi n'Tichka descent into Marrakech.",
      },
    ],
  },
  {
    id: "casablanca-8-days",
    city: "casablanca",
    title: "8 Days tour departing from Casablanca",
    days: 8,
    nights: 7,
    start: "CMN",
    end: "MRK",
    reviews: 218,
    image: "/casablanca tour 3.jpg",
    hero: "/generated/hero-casablanca-8-days.jpg",
    tagline: "The northern arc and the southern sands, ending in Marrakech.",
    summary:
      "Eight days that braid the blue north into the golden south: Rabat, Chefchaouen, and Fes, then the Sahara at Merzouga and the gorge country, closing with a full day in Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Welcome and transfer, with an evening visit to the illuminated esplanade of the Hassan II Mosque.",
      },
      {
        day: 2,
        title: "Casablanca to Chefchaouen via Rabat",
        description:
          "The capital's monuments at a measured pace, then the climb into the Rif to the bluest town in the world.",
      },
      {
        day: 3,
        title: "Chefchaouen to Fes",
        description:
          "A free blue-city morning, then south through the Rif foothills — with an optional stop at Volubilis' Roman ruins — to Fes.",
      },
      {
        day: 4,
        title: "Fes Exploration",
        description:
          "The UNESCO medina end to end: Al Quaraouiyine University, the Chouara tanneries, and the artisan souks.",
      },
      {
        day: 5,
        title: "Fes to Merzouga — Desert Camp",
        description:
          "Ifrane, the cedar forests, Midelt, and the Ziz Valley's palms — then by camel into Erg Chebbi for a night under the stars.",
      },
      {
        day: 6,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Dawn on the dunes, the canyon at Todra, and an evening walk in the Dades Gorge.",
      },
      {
        day: 7,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "Roses, kasbahs, the great ksar, and the Atlas pass — arriving in the red city by evening.",
      },
      {
        day: 8,
        title: "Marrakech — Farewell",
        description:
          "A guided morning among the palaces and souks, with the afternoon at leisure before your departure transfer.",
      },
    ],
  },
  {
    id: "casablanca-10-days",
    city: "casablanca",
    title: "10 Days tour from Casablanca",
    days: 10,
    nights: 9,
    start: "CMN",
    end: "MRK",
    reviews: 211,
    image: "/casablanca tour 4.jpg",
    hero: "/generated/hero-casablanca-10-days.jpg",
    tagline: "Imperial cities, two desert nights, and the long road to Marrakech.",
    summary:
      "The classic grand route with room to breathe: the Atlantic capitals, a full day in blue Chefchaouen, medieval Fes, two nights in the Sahara, and the gorges and kasbahs of the south before two final days in Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Airport welcome, hotel check-in, and a first taste of the white city's oceanfront.",
      },
      {
        day: 2,
        title: "Casablanca to Rabat",
        description:
          "The Hassan II Mosque's marble immensity, then the capital — Hassan Tower, Chellah, and the Udayas above the river mouth.",
      },
      {
        day: 3,
        title: "Rabat to Chefchaouen",
        description:
          "Into the Rif mountains; an evening arrival as the blue lanes glow under lantern light.",
      },
      {
        day: 4,
        title: "Chefchaouen to Fes",
        description:
          "Morning in the bluest streets on earth, then the road south to the ancient capital.",
      },
      {
        day: 5,
        title: "Fes Exploration",
        description:
          "A full guided day in the medina — tanneries, medersas, fondouks, and the world's oldest university.",
      },
      {
        day: 6,
        title: "Fes to Merzouga — First Desert Night",
        description:
          "The Middle Atlas cedar country and the Ziz Valley, then camels into Erg Chebbi at sunset.",
      },
      {
        day: 7,
        title: "Merzouga — Deep Desert Day",
        description:
          "4x4 exploration of the erg — Khamlia's Gnawa musicians, nomad tents, fossil plateaus — and a second night at camp.",
      },
      {
        day: 8,
        title: "Merzouga to Dades via Todra",
        description:
          "Out through Rissani's souks to the Todra canyon and an evening in the Dades Gorge.",
      },
      {
        day: 9,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "The rose valley, Skoura, the UNESCO ksar, and the Tizi n'Tichka descent into Marrakech.",
      },
      {
        day: 10,
        title: "Marrakech — Farewell",
        description:
          "Palaces, gardens, and souks with a guide, then a farewell dinner or departure transfer.",
      },
    ],
  },
  {
    id: "casablanca-12-days",
    city: "casablanca",
    title: "12 Days Tour from Casablanca",
    days: 12,
    nights: 11,
    start: "CMN",
    end: "MRK",
    reviews: 216,
    image: "/casablanca tour 5.jpg",
    hero: "/generated/hero-casablanca-12-days.jpg",
    tagline: "The grand route, extended to the Atlantic — Essaouira included.",
    summary:
      "Everything the ten-day journey offers, deepened with the ocean: after the imperial cities, the Sahara, and the gorges, the road bends west to windswept Essaouira before the finale in Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Welcome at Mohammed V airport and an evening on the corniche beneath the Hassan II minaret.",
      },
      {
        day: 2,
        title: "Casablanca to Rabat",
        description:
          "The great mosque at the ocean's lip, then the capital's Hassan Tower and the Kasbah of the Udayas.",
      },
      {
        day: 3,
        title: "Rabat to Chefchaouen",
        description:
          "North into the Rif to the blue pearl; sunset from the Spanish Mosque viewpoint.",
      },
      {
        day: 4,
        title: "Chefchaouen to Fes via Volubilis",
        description:
          "The Roman mosaics of Volubilis and imperial Meknes en route to the medieval capital.",
      },
      {
        day: 5,
        title: "Fes Exploration",
        description:
          "A full day in the UNESCO medina with a licensed guide — crafts, courtyards, and the call to prayer over ten thousand alleys.",
      },
      {
        day: 6,
        title: "Fes to Merzouga",
        description:
          "Cedars, macaques, and the Ziz palm gorge, then firelight and dunes at a luxury Sahara camp.",
      },
      {
        day: 7,
        title: "Merzouga — Deep Desert Day",
        description:
          "A 4x4 circuit of Erg Chebbi's hidden corners and a second night beneath the Milky Way.",
      },
      {
        day: 8,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "The high canyon walls, Tinghir's palmery, and the Dades Valley's rock cathedrals.",
      },
      {
        day: 9,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "Roses and kasbahs westward, the great ksar at midday, and the Atlas crossing into Marrakech.",
      },
      {
        day: 10,
        title: "Marrakech Sightseeing",
        description:
          "Bahia Palace, the Saadian Tombs, and an evening in Jemaa el-Fnaa's swirl of smoke and music.",
      },
      {
        day: 11,
        title: "Marrakech to Essaouira",
        description:
          "Through the argan groves to the Atlantic — ramparts, fishing boats, and the gull-cried light that drew Orson Welles.",
      },
      {
        day: 12,
        title: "Essaouira to Marrakech — Departure",
        description:
          "A slow seaside morning before the return to Marrakech for your farewell dinner or onward flight.",
      },
    ],
  },

  /* ───────────────────────── TANGIER ───────────────────────── */
  {
    id: "tangier-8-days",
    city: "tangier",
    title: "8 Days Sahara tour from Tangier",
    days: 8,
    nights: 7,
    start: "TNG",
    end: "MRK",
    reviews: 132,
    image: "/tangier tour 1.jpg",
    hero: "/generated/hero-tangier-8-days.jpg",
    tagline: "From the straits to the sands — the great north-south traverse.",
    summary:
      "Begin where Africa faces Europe and descend the whole kingdom: Chefchaouen's blue, Fes's medieval depths, the Sahara at Erg Chebbi, and the gorge-and-kasbah road into Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Welcomed at port or airport, then an evening in the white medina above the strait — Cap Spartel and the Caves of Hercules if time allows.",
      },
      {
        day: 2,
        title: "Tangier to Chefchaouen",
        description:
          "A short, beautiful drive into the Rif. An afternoon and evening in the blue-washed lanes of the pearl of the mountains.",
      },
      {
        day: 3,
        title: "Chefchaouen to Fes via Volubilis",
        description:
          "South past the Roman city of Volubilis and the gates of Meknes, arriving in Fes by evening.",
      },
      {
        day: 4,
        title: "Fes Exploration",
        description:
          "A guided day in the labyrinth — Al Quaraouiyine, the tanneries, and the artisan quarters of the world's oldest medina.",
      },
      {
        day: 5,
        title: "Fes to Merzouga — Desert Camp",
        description:
          "Across the Middle Atlas and down the Ziz Valley to the dunes; camels at golden hour and a night at a luxury camp.",
      },
      {
        day: 6,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Sahara sunrise, the Todra canyon at noon, and evening light on the Dades Valley's mud-brick castles.",
      },
      {
        day: 7,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "Roses, Skoura's palms, the UNESCO ksar, and the Tizi n'Tichka pass into the red city.",
      },
      {
        day: 8,
        title: "Marrakech — Farewell",
        description:
          "A guided morning in the palaces and souks before your departure transfer.",
      },
    ],
  },
  {
    id: "tangier-10-days",
    city: "tangier",
    title: "10 Days Tour from Tangier",
    days: 10,
    nights: 9,
    start: "TNG",
    end: "MRK",
    reviews: 251,
    image: "/tangier tour 2.jpg",
    hero: "/generated/hero-tangier-10-days.jpg",
    tagline: "The full descent — two desert nights and two days in Marrakech.",
    summary:
      "The north-to-south epic, given room to breathe: a full day in Chefchaouen, the depths of Fes, two nights in the Sahara with a 4x4 desert day, and the kasbah route to a two-day Marrakech finale.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Welcome to the gateway of Africa — an evening walk through the kasbah overlooking the meeting of two seas.",
      },
      {
        day: 2,
        title: "Tangier to Chefchaouen",
        description:
          "Via the cliffs of Cap Spartel into the Rif mountains, with the afternoon free in the blue medina.",
      },
      {
        day: 3,
        title: "Chefchaouen — A Day in Blue",
        description:
          "Slow morning light for photographers, the Kasbah Museum, Ras El Maa, and sunset above the town.",
      },
      {
        day: 4,
        title: "Chefchaouen to Fes via Volubilis & Meknes",
        description:
          "Roman mosaics, imperial gates, and arrival in the ancient capital by evening.",
      },
      {
        day: 5,
        title: "Fes Exploration",
        description:
          "A full guided day inside the UNESCO medina — the tanneries, the medersas, and souks unchanged for centuries.",
      },
      {
        day: 6,
        title: "Fes to Merzouga — First Desert Night",
        description:
          "Ifrane and the cedar forest, the Ziz Valley's palms, then camels into Erg Chebbi at dusk.",
      },
      {
        day: 7,
        title: "Merzouga — Deep Desert Day",
        description:
          "4x4 across the erg: nomad camps, Khamlia's Gnawa rhythms, fossil fields, sandboarding, and a second night under the stars.",
      },
      {
        day: 8,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "The canyon, the palmeries, and the rock formations of the Dades by evening.",
      },
      {
        day: 9,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "The kasbah route and the Atlas crossing, arriving in the red city at golden hour.",
      },
      {
        day: 10,
        title: "Marrakech — Farewell",
        description:
          "Bahia Palace, the souks, and Jemaa el-Fnaa before your departure transfer.",
      },
    ],
  },
  {
    id: "tangier-14-days",
    city: "tangier",
    title: "14 Days Tour From Tangier to Casablanca",
    days: 14,
    nights: 13,
    start: "TNG",
    end: "CMN",
    reviews: 182,
    image: "/tangier tour 3.jpg",
    hero: "/generated/hero-tangier-14-days.jpg",
    tagline: "Two weeks, two seas — the whole kingdom from strait to ocean.",
    summary:
      "Our longest northern departure: the Rif and the imperial cities, two Sahara nights, the great gorges, Marrakech, and the Atlantic at Essaouira — concluding along the coast at Casablanca.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Welcome and transfer; evening in the old medina above the strait.",
      },
      {
        day: 2,
        title: "Tangier — Caps & Caves",
        description:
          "Cap Spartel where the Mediterranean meets the Atlantic, the Caves of Hercules, and the legation quarter's storied lanes.",
      },
      {
        day: 3,
        title: "Tangier to Chefchaouen",
        description:
          "Into the Rif to the blue pearl, with the evening free under the lanterns.",
      },
      {
        day: 4,
        title: "Chefchaouen to Fes via Volubilis",
        description:
          "Roman Volubilis and imperial Meknes on the road to the ancient capital.",
      },
      {
        day: 5,
        title: "Fes Exploration",
        description:
          "A full guided day in the world's oldest living medina.",
      },
      {
        day: 6,
        title: "Fes to Merzouga",
        description:
          "The Middle Atlas and Ziz Valley south to the dunes — camels, camp, and constellations.",
      },
      {
        day: 7,
        title: "Merzouga — Deep Desert Day",
        description:
          "A 4x4 circuit of Erg Chebbi and its people, with a second Sahara night.",
      },
      {
        day: 8,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Canyon walls, palm rivers, and the castles of the Dades.",
      },
      {
        day: 9,
        title: "Dades to Ouarzazate",
        description:
          "The Valley of Roses and Skoura's kasbah oasis, with an evening at the desert's film capital.",
      },
      {
        day: 10,
        title: "Ouarzazate to Marrakech via Ait Ben Haddou",
        description:
          "The great ksar and the Tizi n'Tichka pass into the red city.",
      },
      {
        day: 11,
        title: "Marrakech Sightseeing",
        description:
          "Palaces, tombs, gardens, and the nightly theatre of Jemaa el-Fnaa.",
      },
      {
        day: 12,
        title: "Marrakech to Essaouira",
        description:
          "Through argan country to the fortified Atlantic port — ramparts, boats, and salt-bright light.",
      },
      {
        day: 13,
        title: "Essaouira — The Windy City",
        description:
          "A free day in the UNESCO medina and along the endless beach.",
      },
      {
        day: 14,
        title: "Essaouira to Casablanca",
        description:
          "North along the coast through Oualidia and El Jadida to Casablanca for departure.",
      },
    ],
  },
  {
    id: "tangier-12-days",
    city: "tangier",
    title: "12 Days Tour From Tangier",
    days: 12,
    nights: 11,
    start: "TNG",
    end: "TNG",
    reviews: 189,
    image: "/tangier tour 4.jpg",
    hero: "/generated/hero-tangier-12-days.jpg",
    tagline: "The complete loop — leave from the strait, return to the strait.",
    summary:
      "A full circle of Morocco beginning and ending at the gateway of Africa: Chefchaouen, Fes, the Sahara, the gorges, Marrakech, and the Atlantic capitals on the road home north.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tangier",
        description:
          "Welcome at the port or airport, with an evening stroll through the kasbah.",
      },
      {
        day: 2,
        title: "Tangier to Chefchaouen",
        description:
          "The Rif road to the blue city; afternoon among the indigo stairways.",
      },
      {
        day: 3,
        title: "Chefchaouen to Fes via Volubilis",
        description:
          "Roman ruins and imperial Meknes en route to the medieval capital.",
      },
      {
        day: 4,
        title: "Fes Exploration",
        description:
          "The UNESCO medina with a private guide — tanneries, fondouks, and sacred courtyards.",
      },
      {
        day: 5,
        title: "Fes to Merzouga",
        description:
          "Cedar forests and the Ziz palm valley to the edge of the erg; sunset camel trek to camp.",
      },
      {
        day: 6,
        title: "Merzouga — Deep Desert Day",
        description:
          "Nomads, Gnawa music, dune fields by 4x4, and a second night in the Sahara.",
      },
      {
        day: 7,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "From sand to stone — the great canyons and the Dades Valley's rock gardens.",
      },
      {
        day: 8,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "The kasbah route, the UNESCO ksar, and the Atlas pass into the red city.",
      },
      {
        day: 9,
        title: "Marrakech Sightseeing",
        description:
          "Bahia Palace, the Saadian Tombs, the souks, and an evening in Jemaa el-Fnaa.",
      },
      {
        day: 10,
        title: "Marrakech to Casablanca",
        description:
          "North to the white city and the ocean-set Hassan II Mosque.",
      },
      {
        day: 11,
        title: "Casablanca to Rabat — Onward North",
        description:
          "The capital's Hassan Tower and Udayas kasbah, continuing to Asilah's white-and-blue ramparts on the Atlantic.",
      },
      {
        day: 12,
        title: "Return to Tangier",
        description:
          "The coastal road home to the strait, closing the circle in time for your onward journey.",
      },
    ],
  },

  /* ───────────────────────── FES ───────────────────────── */
  {
    id: "fes-4-days-desert",
    city: "fes",
    title: "4 Days Desert Tour From Fes",
    days: 4,
    nights: 3,
    start: "FES",
    end: "FES",
    reviews: 54,
    image: "/fes tour 1.jpg",
    hero: "/generated/hero-fes-4-days-desert.jpg",
    tagline: "Deep into Erg Chebbi and back — with a full desert day.",
    summary:
      "The Fes desert loop at its best: the cedar road south, a full 4x4 day among the dunes and nomad country of Merzouga, a night under canvas, and a scenic return through Midelt's high plains.",
    itinerary: [
      {
        day: 1,
        title: "Fes to Merzouga",
        description:
          "South through alpine Ifrane and the Azrou cedar forest — pausing for the Barbary macaques — then over the high plains of Midelt and down the Ziz Valley to a kasbah lodge at the foot of the dunes.",
      },
      {
        day: 2,
        title: "Merzouga — Deep Desert Day & Camp",
        description:
          "A 4x4 circuit of Erg Chebbi: tea with nomad families, Gnawa music in Khamlia, fossil plateaus and seasonal lakes. At dusk, camels carry you to a luxury camp deep in the dunes.",
      },
      {
        day: 3,
        title: "Sahara Sunrise to Midelt",
        description:
          "Dawn from the dune crest, a morning in Rissani's ancient souk, then north along the Ziz gorges to Midelt beneath the Ayachi massif.",
      },
      {
        day: 4,
        title: "Midelt to Fes",
        description:
          "The Middle Atlas road home — cedar forests, mountain lakes, and Ifrane's gardens — arriving in Fes by mid-afternoon.",
      },
    ],
  },
  {
    id: "fes-10-days",
    city: "fes",
    title: "10 Days Morocco Tour From Fes",
    days: 10,
    nights: 9,
    start: "FES",
    end: "FES",
    reviews: 210,
    image: "/fes tour 2.jpg",
    hero: "/generated/hero-fes-10-days.jpg",
    tagline: "The grand circle from the ancient capital — north, west, and deep south.",
    summary:
      "A complete loop of the kingdom beginning in Fes: the blue Rif, the Atlantic capitals, Marrakech, the kasbah route, and the Sahara — returning over the Middle Atlas with every landscape of Morocco behind you.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Welcomed and settled into a riad in the ancient capital; an evening first taste of the medina from Bab Boujloud.",
      },
      {
        day: 2,
        title: "Fes to Chefchaouen",
        description:
          "North through the Rif foothills to the blue pearl, with sunset from the Spanish Mosque.",
      },
      {
        day: 3,
        title: "Chefchaouen to Rabat",
        description:
          "Down from the mountains to the Atlantic capital — Hassan Tower and the Kasbah of the Udayas.",
      },
      {
        day: 4,
        title: "Rabat to Marrakech via Casablanca",
        description:
          "The Hassan II Mosque at the ocean's edge, then south across the plains to the red city.",
      },
      {
        day: 5,
        title: "Marrakech Sightseeing",
        description:
          "Bahia Palace, the Saadian Tombs, the souks, and the nightly spectacle of Jemaa el-Fnaa.",
      },
      {
        day: 6,
        title: "Marrakech to Dades via Ait Ben Haddou",
        description:
          "Over Tizi n'Tichka to the UNESCO ksar, then the kasbah route east to the Dades Gorge.",
      },
      {
        day: 7,
        title: "Dades to Merzouga via Todra Gorge",
        description:
          "The Todra canyon at midday, then camels into Erg Chebbi for a night at a luxury desert camp.",
      },
      {
        day: 8,
        title: "Merzouga — Deep Desert Day",
        description:
          "A 4x4 day among the dunes, nomads, and Gnawa villages, with a second Sahara night.",
      },
      {
        day: 9,
        title: "Merzouga to Midelt",
        description:
          "Sunrise on the sands, Rissani's souk, and the Ziz gorges north to Midelt's apple country.",
      },
      {
        day: 10,
        title: "Midelt to Fes",
        description:
          "Cedars, macaques, and Ifrane's alpine calm on the final descent into Fes.",
      },
    ],
  },
  {
    id: "fes-6-days",
    city: "fes",
    title: "6 Days Tour From Fes",
    days: 6,
    nights: 5,
    start: "FES",
    end: "MRK",
    reviews: 232,
    image: "/fes tour 3.jpg",
    hero: "/generated/hero-fes-6-days.jpg",
    tagline: "Fes to Marrakech the long, beautiful way — desert and gorges between.",
    summary:
      "Two days in the medieval capital, then the great southern road: the Ziz Valley to a Sahara night at Erg Chebbi, the Todra and Dades canyons, the Valley of Roses, and the Atlas crossing into Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Fes",
        description:
          "Welcome and riad check-in, with an evening overview of the medina from the Marinid Tombs viewpoint.",
      },
      {
        day: 2,
        title: "Fes Exploration",
        description:
          "A full guided day in the UNESCO medina — Al Quaraouiyine, the Chouara tanneries, and the artisans' quarters.",
      },
      {
        day: 3,
        title: "Fes to Merzouga — Desert Camp",
        description:
          "South over the Middle Atlas and down the Ziz Valley; camels at sunset into Erg Chebbi and a night of firelight at camp.",
      },
      {
        day: 4,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Sahara sunrise, the sheer canyon at Todra, and evening among the Dades Valley's rock formations.",
      },
      {
        day: 5,
        title: "Dades to Ouarzazate — Roses & Kasbahs",
        description:
          "Kelaat M'Gouna's rose country and Skoura's oasis, with an evening at the Taourirt Kasbah in Ouarzazate.",
      },
      {
        day: 6,
        title: "Ouarzazate to Marrakech via Ait Ben Haddou",
        description:
          "A morning inside the great ksar, then the Tizi n'Tichka descent into the red city.",
      },
    ],
  },
  {
    id: "fes-3-days-merzouga",
    city: "fes",
    title: "3 Days Tour from Fes To Merzouga",
    days: 3,
    nights: 2,
    start: "FES",
    end: "FES",
    reviews: 179,
    image: "/fes tour 4.jpg",
    hero: "/generated/hero-fes-3-days-merzouga.jpg",
    tagline: "The quickest road to the great dunes — and back through the cedars.",
    summary:
      "A perfectly weighted desert escape: the Ziz Valley south, a sunset camel trek and a night at a luxury camp in Erg Chebbi, and the cedar-forest road home — three days, one unforgettable night.",
    itinerary: [
      {
        day: 1,
        title: "Fes to Merzouga via Ifrane & the Ziz Valley",
        description:
          "Through 'Moroccan Switzerland' at Ifrane and the Azrou cedars, over the Tizi n'Talghemt pass, and down the palm-filled Ziz Valley to a lodge beneath the dunes.",
      },
      {
        day: 2,
        title: "Erg Chebbi — Dunes, Nomads & Desert Camp",
        description:
          "A morning 4x4 loop to Khamlia's Gnawa musicians and the nomad routes, then the sunset camel caravan into the heart of the dunes — sandboarding, dinner, and drums at camp.",
      },
      {
        day: 3,
        title: "Sahara Sunrise — Return to Fes",
        description:
          "Dawn over the erg, breakfast at camp, and the scenic return north through Midelt and the Middle Atlas to Fes.",
      },
    ],
  },
  {
    id: "fes-3-days-desert",
    city: "fes",
    title: "3 Days Desert Tour From Fes",
    days: 3,
    nights: 2,
    start: "FES",
    end: "MRK",
    reviews: 169,
    image: "/fes tour 5.avif",
    hero: "/generated/hero-fes-3-days-desert.jpg",
    tagline: "Fes to Marrakech across the Sahara — the classic desert traverse.",
    summary:
      "The most scenic possible transfer between the two capitals of Moroccan culture: down the Ziz Valley to a night in the Erg Chebbi dunes, then west through the Todra and Dades canyons and over the Atlas to Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Fes to Merzouga — Night in the Dunes",
        description:
          "South through Ifrane's alpine streets, the Azrou cedar forest, and the Ziz Valley's million palms. At dusk, a camel caravan carries you into Erg Chebbi for dinner and a night at a luxury camp.",
      },
      {
        day: 2,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Sunrise from the dune crest, then west through Rissani and Tinghir to walk the Todra canyon floor, ending among the castles of the Dades Valley.",
      },
      {
        day: 3,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "The Valley of Roses and the Skoura oasis, a final walk through the UNESCO ksar of Ait Ben Haddou, and the Tizi n'Tichka pass into Marrakech.",
      },
    ],
  },
  {
    id: "fes-4-days-marrakech",
    city: "fes",
    title: "4 days Desert Tour Fes To Marrakech",
    days: 4,
    nights: 3,
    start: "FES",
    end: "MRK",
    reviews: 203,
    image: "/fes tour 6.jpg",
    hero: "/generated/hero-fes-4-days-marrakech.jpg",
    tagline: "The desert traverse, deepened — a full day among the dunes.",
    summary:
      "Four days from the ancient capital to the red city with the Sahara at its heart: a full 4x4 day around Erg Chebbi, a night under canvas, then the great gorge-and-kasbah road west over the Atlas.",
    itinerary: [
      {
        day: 1,
        title: "Fes to Merzouga",
        description:
          "Ifrane, the cedar forests, Midelt, and the Ziz Valley's palm gorge — arriving at a dune-side kasbah for sunset over the erg.",
      },
      {
        day: 2,
        title: "Erg Chebbi — Desert Day & Camp",
        description:
          "A 4x4 day among the dunes: nomad camps, Khamlia's Gnawa rhythms, fossil beds and oases. At golden hour, camels carry you to a luxury camp deep in the sands.",
      },
      {
        day: 3,
        title: "Merzouga to Dades via Todra Gorge",
        description:
          "Sahara sunrise, the canyon walls of Todra, and an evening walk beneath the Dades Gorge's rock cathedrals.",
      },
      {
        day: 4,
        title: "Dades to Marrakech via Ait Ben Haddou",
        description:
          "Roses, kasbahs, and the great ksar, then over the Tizi n'Tichka pass into Marrakech by evening.",
      },
    ],
  },
];

export const TOURS_BY_CITY = (city: CityId) => TOURS.filter((t) => t.city === city);

export const getTour = (city: CityId, id: string) =>
  TOURS.find((t) => t.city === city && t.id === id);

export const CITY_IDS: CityId[] = ["marrakech", "casablanca", "tangier", "fes"];
