export interface Excursion {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  alt: string;
  description: string;
}

export const excursions: Excursion[] = [
  {
    id: "imlil",
    title: "1 Day Trip to Imlil",
    location: "Imlil, High Atlas",
    duration: "Full Day (8 Hours)",
    image: "/IMLIL.jpg",
    alt: "Imlil village nestled in the High Atlas Mountains",
    description:
      "Ascend into the Berber heartland of the High Atlas, where terraced valleys and ancient mule trails lead to the gateway of Mount Toubkal — North Africa's highest peak.",
  },
  {
    id: "ourika",
    title: "1 Day Trip to Ourika",
    location: "Ourika Valley",
    duration: "Full Day (7 Hours)",
    image: "/OURIKA.avif",
    alt: "Ourika Valley with its lush greenery and Berber villages",
    description:
      "Follow the Ourika River into a valley of rushing waterfalls, saffron fields, and Berber market villages — a refreshing escape from Marrakech's medina heat.",
  },
  {
    id: "agafay",
    title: "1 Day Trip to Agafay Desert",
    location: "Agafay Desert",
    duration: "Half/Full Day",
    image: "/AGAFAY.jpeg",
    alt: "Agafay stone desert stretching to the horizon near Marrakech",
    description:
      "Morocco's closest desert experience — a rocky, lunar expanse just 40 minutes from Marrakech. Quad biking, camel treks, and sunset dinners under open skies.",
  },
  {
    id: "chefchaouen",
    title: "1 Day Trip to Chefchaouen",
    location: "Chefchaouen",
    duration: "Full Day (12+ Hours)",
    image: "/CHEFCHAOUEN.avif",
    alt: "The blue-painted streets and buildings of Chefchaouen",
    description:
      "Morocco's legendary blue city — labyrinthine alleys washed in cobalt and indigo, cascading down the slopes of the Rif Mountains in endless photogenic splendour.",
  },
  {
    id: "essaouira",
    title: "1 Day Trip to Essaouira",
    location: "Essaouira Coast",
    duration: "Full Day (9 Hours)",
    image: "/ESSAOUIRA.jpg",
    alt: "Essaouira's historic ramparts overlooking the Atlantic Ocean",
    description:
      "A windswept Atlantic fortress city of whitewashed walls, ancient Portuguese ramparts, and silver light. Where Jimi Hendrix once walked and Orson Welles once filmed.",
  },
  {
    id: "ait-ben-haddou",
    title: "1 Day Trip to Ait Ben Haddou",
    location: "Ait Ben Haddou",
    duration: "Full Day (11 Hours)",
    image: "/AIT BEN HADDOU.jpg",
    alt: "The ancient UNESCO ksar of Ait Ben Haddou at golden hour",
    description:
      "A UNESCO World Heritage ksar of sun-dried earthen architecture — the same cinematic landscape that appeared in Gladiator, Game of Thrones, and Lawrence of Arabia.",
  },
  {
    id: "ouzoud",
    title: "1 Day Trip to Ouzoud Waterfalls",
    location: "Ouzoud Falls",
    duration: "Full Day (9 Hours)",
    image: "/OUZOUD.jpg",
    alt: "The magnificent Ouzoud Waterfalls cascading into rainbow mist",
    description:
      "North Africa's most spectacular waterfalls — three tiers of cascading water plunging into an emerald pool, framed by ancient olive groves and wild Barbary macaques.",
  },
];
