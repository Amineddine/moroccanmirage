/** Canonical production origin — used by metadata, JSON-LD, sitemap & robots. */
export const SITE_URL = "https://www.moroccanmirage.com";

export const BRAND = {
  name: "Moroccan Mirage",
  tagline: "Editorial Luxury",
  descriptor: "Curated luxury travel across Morocco's most iconic landscapes.",
  est: "Est. 2018",
  city: "Marrakech, Morocco",
  phone: "+212 777-767-855",
  phoneHref: "tel:+212777767855",
  email: "moroccomirage@gmail.com",
  logo: "/moroccanmiragelogo.png",
  heroVideo: "/backgroundvid.mp4",
} as const;

export const HERO = {
  eyebrow: "A Journey Into Silence",
  title: "Moroccan Mirage",
  sub: "Curated luxury travel across Morocco's most iconic landscapes. Where the golden Sahara meets the silence of the Atlas peaks.",
  coordinates: "31.6295° N — 7.9811° W",
} as const;

export type Service = {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Moroccan Tours",
    description:
      "Multi-day adventures from the Sahara to the imperial cities. Luxury Land Cruisers, expert guides, unforgettable routes.",
    href: "/tours",
    image: "/Moroccantours.jpeg",
  },
  {
    index: "02",
    title: "Excursions & Activities",
    description:
      "Day escapes to Chefchaouen, Ouzoud, Agafay, and beyond. Immersive single-day journeys designed for maximum impact.",
    href: "/excursions",
    image: "/Excursions And activities.jpg",
  },
  {
    index: "03",
    title: "Private Airport Transfer",
    description:
      "Seamless meet-and-greet service. Mercedes V-Class and Range Rover comfort, available around the clock.",
    href: "/contact",
    image: "/Private Airport Transfer.jpg",
  },
  {
    index: "04",
    title: "Customize Your Trip",
    description:
      "Tell us your vision. Our concierge team will design a tailor-made itinerary built around your desires, timeline, and style.",
    href: "/customize",
    image: "/Customize Your Trip.jpg",
  },
];

export const STATS = [
  { value: 1247, suffix: "+", label: "Happy Clients", note: "From over 40 countries." },
  { value: 3580, suffix: "+", label: "Trips Completed", note: "Across Morocco's iconic routes." },
  { value: 8, suffix: "", label: "Years in Service", note: "Founded in Marrakech, 2018." },
  { value: 98, suffix: "%", label: "Satisfaction Rate", note: "Measured across every journey." },
] as const;

export const PILLARS = [
  { title: "Zero Wait Time", note: "Your chauffeur arrives before you do — every single time." },
  { title: "Expert Drivers", note: "Multilingual professionals who know every road and every story." },
  { title: "Pristine Fleet", note: "Mercedes V‑Class, Range Rover, Audi Q7 — meticulously maintained." },
  { title: "Fixed Pricing", note: "Transparent pricing. No surprises, no hidden fees, ever." },
] as const;

export type Scene = {
  name: string;
  image: string;
  heading: string;
  caption: string;
  coordinates: string;
};

export const UNVEILED: Scene[] = [
  {
    name: "High Atlas",
    image: "/generated/unveiled-high-atlas.jpg",
    heading: "Where peaks touch silence",
    caption: "Trails carved into rock by Berber hands — unchanged for a thousand years.",
    coordinates: "31.1370° N — 7.9200° W",
  },
  {
    name: "Agafay Desert",
    image: "/generated/unveiled-agafay.jpg",
    heading: "Infinity in ochre",
    caption: "Stone desert stretching beyond sight. A landscape that empties the mind.",
    coordinates: "31.4660° N — 8.2110° W",
  },
  {
    name: "Chefchaouen",
    image: "/generated/unveiled-chefchaouen.jpg",
    heading: "A city dreamt in blue",
    caption: "Labyrinthine alleys painted the colour of sky and sea.",
    coordinates: "35.1688° N — 5.2636° W",
  },
  {
    name: "Atlantic Coast",
    image: "/generated/unveiled-coast.jpg",
    heading: "Where Africa meets the open ocean",
    caption: "Wind-scoured ramparts, silver light, and the sound of eternal surf.",
    coordinates: "31.5085° N — 9.7595° W",
  },
];

export const PHILOSOPHY = {
  label: "Our Philosophy",
  heading: "More than a ride. A journey inside.",
  paragraphs: [
    "We believe how you travel matters as much as where you go. From the moment you land, every detail is orchestrated — so you can lose yourself in the golden light of the dunes, not the logistics.",
    "Our fleet is an extension of modern Moroccan hospitality. Silence, discretion, and absolute comfort are the cornerstones of our service.",
  ],
  note: "Est. 2018",
  image: "/generated/philosophy-courtyard.jpg",
} as const;

export type CityCard = {
  id: "marrakech" | "casablanca" | "tangier" | "fes";
  name: string;
  epithet: string;
  image: string;
  tourCount: number;
  href: string;
  coordinates: string;
};

export const CITIES: CityCard[] = [
  {
    id: "marrakech",
    name: "Marrakech",
    epithet: "The Red City",
    image: "/TOURS FROM MARRAKECH.jpg",
    tourCount: 7,
    href: "/tours/marrakech",
    coordinates: "31.6295° N — 7.9811° W",
  },
  {
    id: "casablanca",
    name: "Casablanca",
    epithet: "The White City",
    image: "/TOURS FROM CASABLANCA.avif",
    tourCount: 5,
    href: "/tours/casablanca",
    coordinates: "33.5731° N — 7.5898° W",
  },
  {
    id: "tangier",
    name: "Tangier",
    epithet: "The Gateway",
    image: "/TOURS FROM TANGIER.jpg",
    tourCount: 4,
    href: "/tours/tangier",
    coordinates: "35.7595° N — 5.8340° W",
  },
  {
    id: "fes",
    name: "Fes",
    epithet: "The Ancient Capital",
    image: "/TOURS FROM FES.avif",
    tourCount: 6,
    href: "/tours/fes",
    coordinates: "34.0181° N — 5.0078° W",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "A masterpiece of a journey. The driver anticipated every need, and the desert camp was pure magic under the stars.",
    name: "Eleanor Whitfield",
    place: "London",
  },
  {
    quote:
      "Flawless execution from start to finish. Moroccan Mirage transformed our vacation into something truly cinematic.",
    name: "James Sterling",
    place: "New York",
  },
  {
    quote:
      "The definition of luxury travel. From the seamless airport transfer to the Atlas retreats — absolute perfection.",
    name: "Sophia Laurent",
    place: "Paris",
  },
] as const;

export const GALLERY = {
  volume: "Vol. 01 — Essence of Morocco",
  label: "Visual Diary",
  caption:
    "A glimpse into the eternal soul of Morocco. Light, shadow, and the profound silence of the desert captured in highly curated cinematic frames.",
  frames: [
    { src: "/generated/gallery-dune-caravan.jpg", note: "Erg Chebbi, first light" },
    { src: "/generated/gallery-lantern-souk.jpg", note: "Lanterns after rain" },
    { src: "/generated/gallery-medina-light.jpg", note: "Medina light" },
    { src: "/generated/gallery-kasbah-dusk.jpg", note: "Kasbah at dusk" },
    { src: "/generated/gallery-atlantic-ramparts.jpg", note: "Atlantic ramparts" },
  ],
} as const;

export const CLOSING = {
  label: "The Next Step",
  heading: "Ready to Begin?",
  body: "Contact our concierges to craft a bespoke itinerary tailored entirely to your desires, timeline, and sense of wonder.",
  primary: { label: "Plan My Journey", href: "/contact" },
  secondary: { label: "+212 777-767-855", href: "tel:+212777767855" },
} as const;

export const FOOTER = {
  about:
    "Elevating your Moroccan journey with unparalleled luxury, bespoke itineraries, and elite professional transportation.",
  nav: [
    { label: "Tours", href: "/tours" },
    { label: "Excursions", href: "/excursions" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;
