import type { ItineraryDay } from "./tours";

/**
 * Itinerary scenes — the shared enrichment layer that brings every city-tour
 * day up to the Grand Traverse presentation: a drive figure, a plate
 * photograph and highlight chips.
 *
 * The 22 tours reuse the same legs over and over (Fes → Merzouga, Dades →
 * Marrakech via Aït Ben Haddou…), so days are matched by title against an
 * ordered rule list — first match wins — instead of hand-annotating all
 * ~164 day entries. A day can still override any field in tours.ts; its own
 * values always beat the matched scene.
 *
 * ⚠︎ VERIFY all drive distances/times before publishing — they are
 * good-faith route approximations ("approx." throughout), not measured
 * figures. City tours show km; the Grand Traverse alone uses miles
 * (per client, for the US market).
 */

export type DayScene = {
  drive?: string;
  image?: { src: string; alt: string };
  highlights?: string[];
};

type Rule = { match: RegExp; scene: DayScene };

const RULES: Rule[] = [
  /* ── Sahara returns & sunrise legs (most specific first) ── */
  {
    match: /sahara sunrise.*(agdz|draa)/i,
    scene: {
      drive: "approx. 560 km / ~9h with stops",
      image: { src: "/generated/it-draa.jpg", alt: "The Draa Valley's palm corridor threading between dark ridges near Agdz" },
      highlights: ["Sahara sunrise", "Draa Valley palmery", "Agdz kasbah road", "Tizi n'Tichka"],
    },
  },
  {
    match: /sahara sunrise.*marrakech/i,
    scene: {
      drive: "approx. 560 km / ~9h with stops",
      image: { src: "/generated/it-sunrise.jpg", alt: "Sunrise from the crest of an Erg Chebbi dune, sand ripples glowing gold" },
      highlights: ["Dune-crest sunrise", "Draa-Tafilalet road", "Ouarzazate", "Tizi n'Tichka"],
    },
  },
  {
    match: /sahara sunrise.*fes/i,
    scene: {
      drive: "approx. 460 km / ~7.5h with stops",
      image: { src: "/generated/it-sunrise.jpg", alt: "First light over the Erg Chebbi dunes, long violet shadows on the sand" },
      highlights: ["Dune-crest sunrise", "Ziz Valley", "Midelt", "Middle Atlas"],
    },
  },
  {
    match: /sahara sunrise.*midelt|merzouga to midelt/i,
    scene: {
      drive: "approx. 265 km / ~4h with stops",
      image: { src: "/generated/it-midelt.jpg", alt: "The high plains of Midelt beneath the snow-dusted Ayachi massif" },
      highlights: ["Sunrise over the erg", "Rissani souk", "Ziz gorges", "Midelt"],
    },
  },
  {
    match: /merzouga to marrakech/i,
    scene: {
      drive: "approx. 560 km / ~9h with stops",
      image: { src: "/generated/it-sunrise.jpg", alt: "Sunrise over the Sahara before the long scenic road west to Marrakech" },
      highlights: ["One last sunrise", "Alnif fossil country", "Ouarzazate", "The Atlas pass"],
    },
  },
  {
    match: /midelt to fes/i,
    scene: {
      drive: "approx. 210 km / ~3.5h",
      image: { src: "/generated/it-cedar.jpg", alt: "A Barbary macaque among the ancient cedars of the Azrou forest" },
      highlights: ["Cedar forests", "Barbary macaques", "Ifrane", "Arrival in Fes"],
    },
  },

  /* ── the Kasbah Road ── */
  {
    match: /marrakech to dades/i,
    scene: {
      drive: "approx. 320 km / ~6.5h with stops",
      image: { src: "/generated/it-tichka.jpg", alt: "The switchbacks of the Tizi n'Tichka pass climbing the High Atlas" },
      highlights: ["Tizi n'Tichka (2,260 m)", "Aït Ben Haddou", "Valley of Roses", "Dades Gorge"],
    },
  },
  {
    match: /dades to merzouga|todra gorge to (the )?(erg chebbi|merzouga)/i,
    scene: {
      drive: "approx. 260 km / ~4.5h with stops",
      image: { src: "/generated/gt-todgha.jpg", alt: "Sheer canyon walls of the Todra Gorge above its shallow clear river" },
      highlights: ["Todra Gorge", "Tinghir palmery", "Camel trek at dusk", "Desert camp"],
    },
  },
  {
    match: /merzouga to dades/i,
    scene: {
      drive: "approx. 260 km / ~4.5h with stops",
      image: { src: "/generated/it-dades.jpg", alt: "The eroded 'monkey fingers' cliffs above the Dades Valley" },
      highlights: ["Sahara sunrise", "Todra Gorge", "Dades rock formations"],
    },
  },
  {
    match: /deep desert|dunes, nomads|desert day/i,
    scene: {
      drive: "4×4 circuit around the erg",
      image: { src: "/generated/it-camp-night.jpg", alt: "Firelight and drums at a Sahara camp beneath the Milky Way" },
      highlights: ["Khamlia Gnawa village", "Nomad families", "Fossil plateaus", "Sandboarding", "Second Sahara night"],
    },
  },
  {
    match: /marrakech to (ouarzazate|ait ben haddou)/i,
    scene: {
      drive: "approx. 200 km / ~4.5h with stops",
      image: { src: "/generated/it-ouarzazate.jpg", alt: "The crenellated earthen towers of the Taourirt Kasbah in Ouarzazate" },
      highlights: ["Tizi n'Tichka", "Aït Ben Haddou", "Ouarzazate"],
    },
  },
  {
    match: /(skoura|roses).*dades|ouarzazate to dades/i,
    scene: {
      drive: "approx. 130 km / ~2.5h with stops",
      image: { src: "/generated/it-roses.jpg", alt: "Damask roses in bloom along the irrigation channels of the Valley of Roses" },
      highlights: ["Skoura oasis", "Kasbah Amridil", "Valley of Roses", "Dades Gorge"],
    },
  },
  {
    match: /dades to ouarzazate/i,
    scene: {
      drive: "approx. 130 km / ~2.5h with stops",
      image: { src: "/generated/it-skoura.jpg", alt: "Kasbah Amridil rising from the Skoura palm oasis" },
      highlights: ["Valley of Roses", "Skoura palmery", "Taourirt Kasbah"],
    },
  },
  {
    match: /ouarzazate to marrakech/i,
    scene: {
      drive: "approx. 200 km / ~4.5h with stops",
      image: { src: "/generated/gt-ait-benhaddou.jpg", alt: "Aït Benhaddou reflected in the Ounila river at blue hour" },
      highlights: ["Aït Ben Haddou", "Tizi n'Tichka", "Arrival in Marrakech"],
    },
  },
  {
    match: /dades to marrakech/i,
    scene: {
      drive: "approx. 330 km / ~6.5h with stops",
      image: { src: "/generated/hero-ait-ben-haddou.jpg", alt: "The fortified ksar of Aït Ben Haddou stacked against its hillside" },
      highlights: ["Valley of Roses", "Aït Ben Haddou", "Tizi n'Tichka"],
    },
  },

  /* ── Fes ↔ the desert & the Middle Atlas ── */
  {
    match: /merzouga to fes/i,
    scene: {
      drive: "approx. 460 km / ~7.5h with stops",
      image: { src: "/generated/gt-ziz.jpg", alt: "Date palms of the Ziz Valley oasis beneath red canyon walls" },
      highlights: ["Ziz Valley", "Midelt", "Azrou cedars", "Ifrane"],
    },
  },
  {
    match: /fes to merzouga/i,
    scene: {
      drive: "approx. 460 km / ~7.5h with stops",
      image: { src: "/generated/gallery-dune-caravan.jpg", alt: "A camel caravan crossing the dunes toward camp at golden hour" },
      highlights: ["Ifrane", "Azrou cedar forest", "Ziz Valley", "Camel trek into Erg Chebbi"],
    },
  },
  {
    match: /fes to marrakech/i,
    scene: {
      drive: "approx. 480 km / ~7h",
      image: { src: "/generated/unveiled-high-atlas.jpg", alt: "High Atlas ridgelines on the interior road between Fes and Marrakech" },
      highlights: ["Ifrane", "Azrou cedars", "Beni Mellal plains"],
    },
  },
  {
    match: /fes exploration|fes — the ancient capital/i,
    scene: {
      drive: "on foot within the medina",
      image: { src: "/generated/gt-fes.jpg", alt: "Carved cedar and zellige courtyard of the Bou Inania Madrasa in Fes" },
      highlights: ["Al Quaraouiyine", "Chouara tanneries", "Bou Inania Madrasa", "Artisan souks"],
    },
  },
  {
    match: /arrival in fes/i,
    scene: {
      drive: "airport welcome & transfer",
      image: { src: "/generated/hero-city-fes.jpg", alt: "The rooftops and minarets of the Fes medina at dusk" },
      highlights: ["Riad check-in", "Bab Boujloud", "First medina stroll"],
    },
  },

  /* ── the blue north ── */
  {
    match: /fes to chefchaouen/i,
    scene: {
      drive: "approx. 200 km / ~4h",
      image: { src: "/generated/unveiled-chefchaouen.jpg", alt: "Indigo lanes of Chefchaouen climbing toward the Rif" },
      highlights: ["Rif foothills", "The blue medina", "Spanish Mosque sunset"],
    },
  },
  {
    match: /chefchaouen to fes.*meknes|casablanca to fes/i,
    scene: {
      drive: "approx. 250 km / ~4.5h with stops",
      image: { src: "/generated/it-meknes.jpg", alt: "The monumental Bab Mansour gate of imperial Meknes" },
      highlights: ["Volubilis (UNESCO)", "Imperial Meknes", "Arrival in Fes"],
    },
  },
  {
    match: /chefchaouen to fes.*volubilis/i,
    scene: {
      drive: "approx. 200 km / ~4h with stops",
      image: { src: "/generated/gt-volubilis.jpg", alt: "Roman mosaics among the ruins of Volubilis in evening light" },
      highlights: ["Volubilis (UNESCO)", "Meknes", "Arrival in Fes"],
    },
  },
  {
    match: /chefchaouen to fes/i,
    scene: {
      drive: "approx. 200 km / ~4h",
      image: { src: "/generated/hero-city-fes.jpg", alt: "Evening falling over the ancient medina of Fes" },
      highlights: ["Blue-city morning", "Rif foothills", "Arrival in Fes"],
    },
  },
  {
    match: /chefchaouen — a day in blue/i,
    scene: {
      drive: "on foot — a full day in the blue medina",
      image: { src: "/generated/gt-chefchaouen.jpg", alt: "A carved blue doorway with potted flowers on an indigo stairway in Chefchaouen" },
      highlights: ["The Kasbah", "Ras El Maa spring", "Plaza Uta el-Hammam", "Spanish Mosque viewpoint"],
    },
  },
  {
    match: /tangier to chefchaouen/i,
    scene: {
      drive: "approx. 115 km / ~2.5h",
      image: { src: "/generated/hero-chefchaouen.jpg", alt: "The blue-washed town of Chefchaouen beneath the Rif peaks" },
      highlights: ["Rif mountain road", "Blue medina evening"],
    },
  },
  {
    match: /arrival in tangier/i,
    scene: {
      drive: "port / airport welcome & transfer",
      image: { src: "/generated/it-tangier.jpg", alt: "Tangier's white kasbah overlooking the Strait of Gibraltar" },
      highlights: ["The kasbah", "Strait of Gibraltar", "Medina lanes"],
    },
  },
  {
    match: /tangier — caps & caves/i,
    scene: {
      drive: "approx. 30 km coastal circuit",
      image: { src: "/generated/unveiled-coast.jpg", alt: "Atlantic light on the wild coast near Cap Spartel" },
      highlights: ["Cap Spartel", "Caves of Hercules", "Legation quarter"],
    },
  },
  {
    match: /return to tangier/i,
    scene: {
      drive: "approx. 45 km / ~1h",
      image: { src: "/generated/hero-city-tangier.jpg", alt: "Tangier rising above the meeting of two seas" },
      highlights: ["Asilah ramparts", "Coastal road", "Closing the loop"],
    },
  },

  /* ── the Atlantic capitals ── */
  {
    match: /chefchaouen to casablanca/i,
    scene: {
      drive: "approx. 330 km / ~5h with stops",
      image: { src: "/generated/gt-rabat.jpg", alt: "Blue-and-white lane of the Kasbah of the Udayas in Rabat" },
      highlights: ["Hassan Tower", "Kasbah of the Udayas", "Atlantic corniche"],
    },
  },
  {
    match: /chefchaouen to rabat/i,
    scene: {
      drive: "approx. 250 km / ~4.5h",
      image: { src: "/generated/gt-rabat.jpg", alt: "The Kasbah of the Udayas descending toward the Bou Regreg river" },
      highlights: ["Rif descent", "Hassan Tower", "Kasbah of the Udayas"],
    },
  },
  {
    match: /rabat to chefchaouen/i,
    scene: {
      drive: "approx. 250 km / ~4.5h",
      image: { src: "/generated/hero-chefchaouen.jpg", alt: "Lantern light beginning to glow in Chefchaouen's blue lanes" },
      highlights: ["Rif climb", "Golden hour in the blue medina"],
    },
  },
  {
    match: /casablanca to rabat — onward north/i,
    scene: {
      drive: "approx. 300 km / ~4.5h with stops",
      image: { src: "/generated/gallery-atlantic-ramparts.jpg", alt: "Whitewashed ramparts above the Atlantic on the northern coast road" },
      highlights: ["Hassan Tower", "The Udayas", "Asilah's ramparts"],
    },
  },
  {
    match: /casablanca to rabat/i,
    scene: {
      drive: "approx. 90 km / ~1.5h",
      image: { src: "/generated/gt-rabat.jpg", alt: "The blue-and-white Kasbah of the Udayas above the river mouth in Rabat" },
      highlights: ["Hassan II Mosque", "Hassan Tower", "Chellah necropolis"],
    },
  },
  {
    match: /casablanca to chefchaouen/i,
    scene: {
      drive: "approx. 330 km / ~5.5h with stops",
      image: { src: "/generated/hero-chefchaouen.jpg", alt: "The bluest town in the world glowing in Rif evening light" },
      highlights: ["Rabat's monuments", "Rif climb", "Blue-city evening"],
    },
  },
  {
    match: /arrival in casablanca/i,
    scene: {
      drive: "airport welcome & transfer",
      image: { src: "/generated/gt-casablanca.jpg", alt: "The minaret of the Hassan II Mosque towering over its ocean esplanade" },
      highlights: ["Hassan II Mosque", "The Corniche", "Art Deco centre"],
    },
  },
  {
    match: /rabat to marrakech/i,
    scene: {
      drive: "approx. 330 km / ~4.5h",
      image: { src: "/generated/gt-casablanca.jpg", alt: "The ocean-set Hassan II Mosque en route south from the capital" },
      highlights: ["Hassan II Mosque", "Atlantic plains", "Arrival in the red city"],
    },
  },
  {
    match: /marrakech to casablanca/i,
    scene: {
      drive: "approx. 240 km / ~3h",
      image: { src: "/generated/gt-casablanca.jpg", alt: "Dusk at the Hassan II Mosque on Casablanca's ocean edge" },
      highlights: ["The northern road", "Hassan II Mosque", "The Corniche"],
    },
  },

  /* ── the windswept coast ── */
  {
    match: /marrakech to essaouira/i,
    scene: {
      drive: "approx. 190 km / ~3h",
      image: { src: "/generated/gt-essaouira.jpg", alt: "Goats perched in an argan tree on the road to Essaouira" },
      highlights: ["Argan groves", "Skala ramparts", "Fishing harbour"],
    },
  },
  {
    match: /essaouira — the windy city/i,
    scene: {
      drive: "on foot within the medina",
      image: { src: "/generated/hero-essaouira.jpg", alt: "Blue fishing boats and gulls at Essaouira's working harbour" },
      highlights: ["Skala cannons", "The blue boats", "Thuya-wood ateliers", "The endless beach"],
    },
  },
  {
    match: /essaouira to casablanca/i,
    scene: {
      drive: "approx. 350 km / ~5h with stops",
      image: { src: "/generated/hero-city-casablanca.jpg", alt: "Casablanca's shoreline at the end of the Atlantic coast road" },
      highlights: ["Oualidia lagoons", "El Jadida's citadel", "Arrival in Casablanca"],
    },
  },
  {
    match: /essaouira to marrakech/i,
    scene: {
      drive: "approx. 190 km / ~3h",
      image: { src: "/generated/hero-city-marrakech.jpg", alt: "The red city of Marrakech beneath the Koutoubia at day's end" },
      highlights: ["Seaside morning", "Argan country", "Farewell Marrakech"],
    },
  },

  /* ── Marrakech city days ── */
  {
    match: /arrival in marrakech/i,
    scene: {
      drive: "airport welcome & transfer",
      image: { src: "/generated/gallery-lantern-souk.jpg", alt: "Lanterns glowing in the Marrakech souk at nightfall" },
      highlights: ["Riad check-in", "Jemaa el-Fnaa at night"],
    },
  },
  {
    match: /marrakech sightseeing/i,
    scene: {
      drive: "on foot — city touring",
      image: { src: "/generated/gt-marrakech.jpg", alt: "The arcaded courtyard of the Bahia Palace in warm evening light" },
      highlights: ["Bahia Palace", "Saadian Tombs", "Koutoubia", "The souks"],
    },
  },
  {
    match: /marrakech — farewell/i,
    scene: {
      drive: "morning touring, then departure transfer",
      image: { src: "/generated/gallery-medina-light.jpg", alt: "Morning light falling through the lanes of the medina" },
      highlights: ["Guided morning", "The souks", "Departure transfer"],
    },
  },
];

/** Merge a day with its matched scene — the day's own fields always win. */
export function enrichDay(day: ItineraryDay): ItineraryDay {
  const rule = RULES.find((r) => r.match.test(day.title));
  if (!rule) return day;
  return { ...rule.scene, ...day };
}
