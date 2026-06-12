export type Excursion = {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  hero: string;
  coordinates: string;
  blurb: string;
  program: string;
  highlights: string[];
};

export const EXCURSIONS: Excursion[] = [
  {
    id: "imlil",
    title: "1 Day Trip from Marrakech to Imlil",
    location: "Imlil, High Atlas",
    duration: "Full Day (8 Hours)",
    image: "/IMLIL.jpg",
    hero: "/generated/hero-imlil.jpg",
    coordinates: "31.1370° N — 7.9200° W",
    blurb: "Discover the breathtaking High Atlas mountains and authentic Berber hospitality.",
    program:
      "Escape the energy of Marrakech and ascend into the cool air of the High Atlas. Private transfer to Imlil, base-camp for Mount Toubkal. Gentle trek customized to your pace through walnut groves, ending with a home-cooked Berber lunch in a village house with panoramic valley views.",
    highlights: [
      "Scenic hike through ancient walnut groves and Berber villages",
      "Views of Mount Toubkal, North Africa's highest peak",
      "Traditional lunch in a local Berber family home",
      "Picturesque High Atlas foothill drives",
    ],
  },
  {
    id: "ourika",
    title: "1 Day trip to Ourika",
    location: "Ourika Valley",
    duration: "Full Day (7 Hours)",
    image: "/OURIKA.avif",
    hero: "/generated/hero-ourika.jpg",
    coordinates: "31.3260° N — 7.7900° W",
    blurb: "Escape to lush riverside landscapes and famous cascading waterfalls.",
    program:
      "An hour from Marrakech into the emerald Ourika Valley, following the river through terraced landscapes. Stop at a women's cooperative for traditional Argan oil extraction, then a guided climb to the Setti Fatma waterfalls and a riverside tagine.",
    highlights: [
      "Guided hike to Setti Fatma waterfalls",
      "Lush terraced river valleys",
      "Women's Argan oil cooperative",
      "Relaxed riverside dining",
    ],
  },
  {
    id: "agafay",
    title: "1 Day trip from Marrakech to Agafay desert",
    location: "Agafay Desert",
    duration: "Half / Full Day",
    image: "/AGAFAY.jpeg",
    hero: "/generated/hero-agafay.jpg",
    coordinates: "31.4660° N — 8.2110° W",
    blurb: "Experience the ultimate desert twilight just a short drive from Marrakech.",
    program:
      "The rocky, moon-like Agafay expanse 45 minutes from the city. Traverse stone dunes by ATV or camel in traditional nomadic blue. As the sun sets over the snow-capped Atlas backdrop, retreat to a luxury tent for mint tea and dinner beneath the stars.",
    highlights: [
      "Rocky desert contrasting snowy Atlas peaks",
      "Sunset camel rides in Tuareg attire",
      "Luxury desert camp with mint tea",
      "ATV quad biking",
    ],
  },
  {
    id: "chefchaouen",
    title: "1 Day Trip To Chefchaouen",
    location: "Chefchaouen",
    duration: "Full Day (12+ Hours)",
    image: "/CHEFCHAOUEN.avif",
    hero: "/generated/hero-chefchaouen.jpg",
    coordinates: "35.1688° N — 5.2636° W",
    blurb: "Wander the mesmerizing, photography-perfect blue streets of the Rif mountains.",
    program:
      "The surreal \"Blue Pearl\" high in the Rif Mountains — cobalt, indigo, and azure alleys. Guided wander through steep cobblestone streets, leather and weaving workshops, mint tea at Plaza Uta el-Hammam beneath the red-walled Kasbah, and a hike to the Ras El Maa waterfall.",
    highlights: [
      "Walking tour of the blue-washed Medina",
      "Ras El Maa waterfall",
      "15th-century Kasbah and Andalusian gardens",
      "Plaza Uta el-Hammam",
    ],
  },
  {
    id: "essaouira",
    title: "1 Day Trip To Essaouira",
    location: "Essaouira Coast",
    duration: "Full Day (9 Hours)",
    image: "/ESSAOUIRA.jpg",
    hero: "/generated/hero-essaouira.jpg",
    coordinates: "31.5085° N — 9.7595° W",
    blurb: "A serene coastal escape blending Portuguese fortresses and Moroccan medinas.",
    program:
      "West to the Atlantic breezes of Morocco's \"Windy City\" — watch for goats balancing in Argan trees en route. Stroll the 18th-century Skala ramparts lined with Portuguese brass cannons, dive into the art-filled UNESCO Medina, and finish with fresh seafood on the fishing dock.",
    highlights: [
      "Historic Skala ramparts with vintage bronze cannons",
      "UNESCO-listed Medina",
      "Fresh seafood at the harbor",
      "Tree-climbing goats on the scenic drive",
    ],
  },
  {
    id: "ait-ben-haddou",
    title: "1 Day Trip To Ait Ben Haddou",
    location: "Ait Ben Haddou",
    duration: "Full Day (11 Hours)",
    image: "/AIT BEN HADDOU.jpg",
    hero: "/generated/hero-ait-ben-haddou.jpg",
    coordinates: "31.0470° N — 7.1318° W",
    blurb: "Step into cinematic history at Morocco's most magnificent ancient Kasbah.",
    program:
      "Cross the High Atlas via the dizzying Tizi n'Tichka pass to the earth-toned citadel of Aït Benhaddou — UNESCO mud-brick architecture and backdrop for Gladiator, Lawrence of Arabia, and Game of Thrones. Explore its labyrinthine stacked dwellings.",
    highlights: [
      "Tizi n'Tichka mountain pass",
      "Guided UNESCO citadel exploration",
      "Walk in the footsteps of legendary film casts",
      "Breathtaking photography",
    ],
  },
  {
    id: "ouzoud",
    title: "1 Day trip Marrakech to Ouzoud Waterfalls",
    location: "Ouzoud Falls",
    duration: "Full Day (9 Hours)",
    image: "/OUZOUD.jpg",
    hero: "/generated/hero-ouzoud.jpg",
    coordinates: "32.0153° N — 6.7195° W",
    blurb: "Witness the sheer power of North Africa's highest cascading waterfalls.",
    program:
      "Deep into the Atlas to the 110-meter multi-tiered Ouzoud Waterfalls. Hike down olive-lined paths to the basin, take a traditional wooden boat ride to the roaring cascade, and watch for wild Barbary macaques on the cliffs.",
    highlights: [
      "Hike to the base of the 110m falls",
      "Wooden boat ride to the cascade",
      "Wild Barbary macaques",
      "Rainbow views and clifftop lunch",
    ],
  },
];

export const getExcursion = (id: string) => EXCURSIONS.find((e) => e.id === id);
