import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const excursions = [
  {
    id: "imlil",
    title: "1 Day Trip from Marrakech to Imlil",
    destination: "Imlil, High Atlas",
    duration: "Full Day (8 Hours)",
    image: "/IMLIL.jpg",
    shortDesc: "Discover the breathtaking High Atlas mountains and authentic Berber hospitality.",
  },
  {
    id: "ourika",
    title: "1 Day trip to Ourika",
    destination: "Ourika Valley",
    duration: "Full Day (7 Hours)",
    image: "/OURIKA.avif",
    shortDesc: "Escape to lush riverside landscapes and famous cascading waterfalls.",
  },
  {
    id: "agafay",
    title: "1 Day trip from Marrakech to Agafay desert",
    destination: "Agafay Desert",
    duration: "Half / Full Day",
    image: "/AGAFAY.jpeg",
    shortDesc: "Experience the ultimate desert twilight just a short drive from Marrakech.",
  },
  {
    id: "chefchaouen",
    title: "1 Day Trip To Chefchaouen",
    destination: "Chefchaouen",
    duration: "Full Day (12+ Hours)",
    image: "/CHEFCHAOUEN.avif",
    shortDesc: "Wander the mesmerizing, photography-perfect blue streets of the Rif mountains.",
  },
  {
    id: "essaouira",
    title: "1 Day Trip To Essaouira",
    destination: "Essaouira Coast",
    duration: "Full Day (9 Hours)",
    image: "/ESSAOUIRA.jpg",
    shortDesc: "A serene coastal escape blending Portuguese fortresses and Moroccan medinas.",
  },
  {
    id: "ait-ben-haddou",
    title: "1 Day Trip To Ait Ben Haddou",
    destination: "Ait Ben Haddou",
    duration: "Full Day (11 Hours)",
    image: "/AIT%20BEN%20HADDOU.jpg",
    shortDesc: "Step into cinematic history at Morocco's most magnificent ancient Kasbah.",
  },
  {
    id: "ouzoud",
    title: "1 Day trip Marrakech to Ouzoud Waterfalls",
    destination: "Ouzoud Falls",
    duration: "Full Day (9 Hours)",
    image: "/OUZOUD.jpg",
    shortDesc: "Witness the sheer power of North Africa's highest cascading waterfalls.",
  }
];

export default function ExcursionsIndex() {
  return (
    <div className="bg-obsidian min-h-screen text-alabaster font-sans flex flex-col pt-32 pb-4">
      {/* Space between top and title */}
      <div className="h-[10vh] lg:h-[15vh] w-full" />

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        
        <div className="text-center flex flex-col items-center w-full">
          <p className="text-sandstone tracking-[0.4em] text-[11px] uppercase mb-8 font-semibold">Single Day Escapes</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-white leading-[1.05] tracking-tight max-w-4xl">
            Curated <span className="text-sandstone italic font-light">Excursions</span>
          </h1>
          <p className="mt-8 text-white/50 font-light max-w-xl mx-auto leading-loose">
            Immerse yourself deeply for just a day. From cascading waterfalls to ancient red-clay citadels, these exclusive short journeys are designed for maximal impact.
          </p>
          
          <div className="mt-12">
            <Link href="/" className="inline-block border border-sandstone/30 text-sandstone px-10 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-sandstone hover:text-obsidian transition-all duration-500">
              BACK TO HOME
            </Link>
          </div>
        </div>

        {/* Space between title and cards */}
        <div className="h-[10vh] lg:h-[15vh] w-full" />

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-[1400px] mx-auto w-full">
          {excursions.map((trip) => (
            <Link key={trip.id} href={`/excursions/${trip.id}`} className="group block relative overflow-hidden bg-[#0a0a0a] border border-white/5 pb-12 hover:bg-white/5 hover:border-sandstone/30 transition-all duration-700 w-full sm:max-w-[calc(50%-2rem)] lg:max-w-[calc(33%-2rem)]">
              <div className="w-full aspect-[4/3] relative overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
              </div>
              
              <div className="px-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-sandstone font-bold">{trip.destination}</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-none tracking-tight group-hover:text-sandstone transition-colors duration-500 min-h-[4rem]">{trip.title}</h2>
                <p className="text-white/40 font-light text-sm mb-10 leading-relaxed min-h-[3rem]">{trip.shortDesc}</p>
                
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60 group-hover:text-white transition-colors duration-500">
                  <span>Explore Trip</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-sandstone/50 to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          ))}
        </div>

        {/* Space between cards and footer */}
        <div className="h-[15vh] lg:h-[25vh] w-full" />

      </div>
    </div>
  );
}
