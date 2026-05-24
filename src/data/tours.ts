export interface Tour {
  id: string;
  city: string;
  citySlug: string;
  title: string;
  duration: string;
  nights: string;
  route: string;
  priceFrom: number;
  image: string;
  alt: string;
}

export interface City {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  alt: string;
  tourCount: number;
  href: string;
}

export const cities: City[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    subtitle: "The Red City",
    image: "/TOURS FROM MARRAKECH.jpg",
    alt: "Marrakech medina and Koutoubia Mosque at dusk",
    tourCount: 7,
    href: "/tours/marrakech",
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    subtitle: "The White City",
    image: "/TOURS FROM CASABLANCA.avif",
    alt: "Casablanca's Hassan II Mosque overlooking the Atlantic",
    tourCount: 5,
    href: "/tours/casablanca",
  },
  {
    slug: "tangier",
    name: "Tangier",
    subtitle: "The Gateway",
    image: "/TOURS FROM TANGIER.jpg",
    alt: "Tangier port and medina where the Atlantic meets the Mediterranean",
    tourCount: 4,
    href: "/tours/tangier",
  },
  {
    slug: "fes",
    name: "Fes",
    subtitle: "The Ancient Capital",
    image: "/TOURS FROM FES.avif",
    alt: "Fes el-Bali medina, the world's largest car-free urban area",
    tourCount: 6,
    href: "/tours/fes",
  },
];

export const tours: Tour[] = [
  // Marrakech
  {
    id: "marrakech-3-days-desert",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "3 Days Desert Tour From Marrakech",
    duration: "3 Days",
    nights: "2 Nights",
    route: "MRK → MRK",
    priceFrom: 295,
    image: "/marrakech tour 1.jpg",
    alt: "Sahara desert dunes at sunrise on the 3-day Marrakech desert tour",
  },
  {
    id: "marrakech-3-days-fes",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "3 Days Tour from Marrakech to Fes",
    duration: "3 Days",
    nights: "2 Nights",
    route: "MRK → FES",
    priceFrom: 212,
    image: "/marrakech tour 2.jpg",
    alt: "Road journey from Marrakech to Fes through the Atlas Mountains",
  },
  {
    id: "marrakech-4-days",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "4 Days Tour from Marrakech",
    duration: "4 Days",
    nights: "3 Nights",
    route: "MRK → MRK",
    priceFrom: 185,
    image: "/marrakech tour 3.jpg",
    alt: "4-day luxury tour covering Marrakech's iconic landscapes",
  },
  {
    id: "marrakech-5-days",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "5 Days Sahara Tour from Marrakech",
    duration: "5 Days",
    nights: "4 Nights",
    route: "MRK → MRK",
    priceFrom: 188,
    image: "/marrakech tour 4.jpg",
    alt: "5-day Sahara experience from Marrakech with luxury camp",
  },
  {
    id: "marrakech-6-days",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "6 Days Tour from Marrakech",
    duration: "6 Days",
    nights: "5 Nights",
    route: "MRK → MRK",
    priceFrom: 252,
    image: "/marrakech tour 5.jpg",
    alt: "6-day comprehensive Morocco tour from Marrakech",
  },
  {
    id: "marrakech-8-days",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "8 Days Morocco Tour from Marrakech",
    duration: "8 Days",
    nights: "7 Nights",
    route: "MRK → CMN",
    priceFrom: 185,
    image: "/marrakech tour 6.jpeg",
    alt: "8-day grand Morocco tour departing Marrakech to Casablanca",
  },
  {
    id: "marrakech-10-days",
    city: "Marrakech",
    citySlug: "marrakech",
    title: "10 Days Morocco Tours from Marrakech",
    duration: "10 Days",
    nights: "9 Nights",
    route: "MRK → MRK",
    priceFrom: 130,
    image: "/marrakech tour 7.jpg",
    alt: "10-day ultimate Morocco circuit from Marrakech",
  },
  // Casablanca
  {
    id: "casablanca-15-days",
    city: "Casablanca",
    citySlug: "casablanca",
    title: "15 Days Grand Tour From Casablanca",
    duration: "15 Days",
    nights: "14 Nights",
    route: "CMN → CMN",
    priceFrom: 301,
    image: "/casablanca tour 1.avif",
    alt: "15-day grand Morocco tour departing and returning to Casablanca",
  },
  {
    id: "casablanca-6-days",
    city: "Casablanca",
    citySlug: "casablanca",
    title: "6 Days Tour From Casablanca",
    duration: "6 Days",
    nights: "5 Nights",
    route: "CMN → MRK",
    priceFrom: 232,
    image: "/casablanca tour 2.jpg",
    alt: "6-day journey from Casablanca through Morocco's imperial cities",
  },
  {
    id: "casablanca-8-days",
    city: "Casablanca",
    citySlug: "casablanca",
    title: "8 Days Tour from Casablanca",
    duration: "8 Days",
    nights: "7 Nights",
    route: "CMN → MRK",
    priceFrom: 218,
    image: "/casablanca tour 3.jpg",
    alt: "8-day Morocco discovery tour from Casablanca to Marrakech",
  },
  {
    id: "casablanca-10-days",
    city: "Casablanca",
    citySlug: "casablanca",
    title: "10 Days Tour from Casablanca",
    duration: "10 Days",
    nights: "9 Nights",
    route: "CMN → MRK",
    priceFrom: 211,
    image: "/casablanca tour 4.jpg",
    alt: "10-day complete Morocco experience from Casablanca",
  },
  {
    id: "casablanca-12-days",
    city: "Casablanca",
    citySlug: "casablanca",
    title: "12 Days Tour from Casablanca",
    duration: "12 Days",
    nights: "11 Nights",
    route: "CMN → MRK",
    priceFrom: 216,
    image: "/casablanca tour 5.jpg",
    alt: "12-day luxury Morocco journey from Casablanca",
  },
  // Tangier
  {
    id: "tangier-8-days",
    city: "Tangier",
    citySlug: "tangier",
    title: "8 Days Sahara Tour from Tangier",
    duration: "8 Days",
    nights: "7 Nights",
    route: "TNG → MRK",
    priceFrom: 132,
    image: "/tangier tour 1.jpg",
    alt: "8-day Sahara journey from Tangier to Marrakech",
  },
  {
    id: "tangier-10-days",
    city: "Tangier",
    citySlug: "tangier",
    title: "10 Days Tour from Tangier",
    duration: "10 Days",
    nights: "9 Nights",
    route: "TNG → MRK",
    priceFrom: 251,
    image: "/tangier tour 2.jpg",
    alt: "10-day Morocco circuit departing from Tangier",
  },
  {
    id: "tangier-14-days",
    city: "Tangier",
    citySlug: "tangier",
    title: "14 Days Tour From Tangier to Casablanca",
    duration: "14 Days",
    nights: "13 Nights",
    route: "TNG → CMN",
    priceFrom: 182,
    image: "/tangier tour 3.jpg",
    alt: "14-day grand tour from Tangier to Casablanca",
  },
  {
    id: "tangier-12-days",
    city: "Tangier",
    citySlug: "tangier",
    title: "12 Days Tour From Tangier",
    duration: "12 Days",
    nights: "11 Nights",
    route: "TNG → TNG",
    priceFrom: 189,
    image: "/tangier tour 4.jpg",
    alt: "12-day Morocco circuit returning to Tangier",
  },
  // Fes
  {
    id: "fes-4-days-desert",
    city: "Fes",
    citySlug: "fes",
    title: "4 Days Desert Tour From Fes",
    duration: "4 Days",
    nights: "3 Nights",
    route: "FES → FES",
    priceFrom: 54,
    image: "/fes tour 1.jpg",
    alt: "4-day desert loop from Fes to the Sahara and back",
  },
  {
    id: "fes-10-days",
    city: "Fes",
    citySlug: "fes",
    title: "10 Days Morocco Tour From Fes",
    duration: "10 Days",
    nights: "9 Nights",
    route: "FES → FES",
    priceFrom: 210,
    image: "/fes tour 2.jpg",
    alt: "10-day Morocco grand circuit from Fes",
  },
  {
    id: "fes-6-days",
    city: "Fes",
    citySlug: "fes",
    title: "6 Days Tour From Fes",
    duration: "6 Days",
    nights: "5 Nights",
    route: "FES → MRK",
    priceFrom: 232,
    image: "/fes tour 3.jpg",
    alt: "6-day journey from Fes through Morocco's imperial cities to Marrakech",
  },
  {
    id: "fes-3-days-merzouga",
    city: "Fes",
    citySlug: "fes",
    title: "3 Days Tour from Fes To Merzouga",
    duration: "3 Days",
    nights: "2 Nights",
    route: "FES → FES",
    priceFrom: 179,
    image: "/fes tour 4.jpg",
    alt: "3-day Merzouga Sahara escape from Fes",
  },
  {
    id: "fes-3-days-desert",
    city: "Fes",
    citySlug: "fes",
    title: "3 Days Desert Tour From Fes",
    duration: "3 Days",
    nights: "2 Nights",
    route: "FES → MRK",
    priceFrom: 169,
    image: "/fes tour 5.avif",
    alt: "3-day desert tour from Fes ending in Marrakech",
  },
  {
    id: "fes-4-days-marrakech",
    city: "Fes",
    citySlug: "fes",
    title: "4 Days Desert Tour Fes To Marrakech",
    duration: "4 Days",
    nights: "3 Nights",
    route: "FES → MRK",
    priceFrom: 203,
    image: "/fes tour 6.jpg",
    alt: "4-day desert route from Fes to Marrakech via the Sahara",
  },
];

export function getToursByCity(citySlug: string): Tour[] {
  return tours.filter((t) => t.citySlug === citySlug);
}

export function getTourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
