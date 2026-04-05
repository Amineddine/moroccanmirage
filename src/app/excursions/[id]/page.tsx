import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, CheckCircle } from "lucide-react";

export const excursionsData: Record<string, { title: string, duration: string, destination: string, image: string, shortDesc: string, highlights: string[], program: string }> = {
  "imlil": {
    title: "1 Day Trip from Marrakech to Imlil",
    destination: "Imlil, High Atlas",
    duration: "Full Day (8 Hours)",
    image: "/IMLIL.jpg",
    shortDesc: "Discover the breathtaking High Atlas mountains and authentic Berber hospitality.",
    program: "Escape the energy of Marrakech and ascend into the cool, pristine air of the High Atlas Mountains. Your private transfer brings you to Imlil, the renowned mountaineering base-camp for Mount Toubkal. Experience absolute serenity as you undertake a gentle trek customized to your pace, breathing in the scent of lush walnut groves. The day culminates with an authentic, home-cooked Berber lunch in a traditional village house with sweeping panoramic mountain valley views.",
    highlights: [
      "Scenic hike through ancient walnut groves and traditional Berber villages.",
      "Stunning unhindered views of Mount Toubkal, North Africa's highest peak.",
      "Traditional lunch prepared warmly in a local Berber family home.",
      "Picturesque winding drives through the foothills of the High Atlas."
    ]
  },
  "ourika": {
    title: "1 Day trip to Ourika",
    destination: "Ourika Valley",
    duration: "Full Day (7 Hours)",
    image: "/OURIKA.avif",
    shortDesc: "Escape to lush riverside landscapes and famous cascading waterfalls.",
    program: "Journey just an hour outside Marrakech into the emerald embrace of the Ourika Valley. This excursion follows the meandering Ourika River through terraced landscapes dotted with charming rustic habitations. You'll stop at an authentic women's cooperative to witness the traditional extraction of liquid gold Argan oil. Conclude with a guided climb to the famous Setti Fatma waterfalls, rewarding yourself afterwards with a riverside tagine.",
    highlights: [
      "Guided hike up to the beautiful and refreshing Setti Fatma waterfalls.",
      "Stroll through aromatic, lush green terraced river valleys.",
      "Visit an authentic women's Argan oil cooperative and learn their craft.",
      "Relaxed riverside dining with your feet practically touching the water."
    ]
  },
  "agafay": {
    title: "1 Day trip from Marrakech to Agafay desert",
    destination: "Agafay Desert",
    duration: "Half / Full Day",
    image: "/AGAFAY.jpeg",
    shortDesc: "Experience the ultimate desert twilight just a short drive from Marrakech.",
    program: "When time doesn't permit a journey to the deep Sahara, the Agafay Desert provides a spectacular, rugged alternative just 45 minutes from the city limits. This rocky, moon-like expanse feels a world away. Traverse the barren, beautiful stone dunes via ATV or atop a camel dressed in traditional nomadic blue. As the sun dips, casting golden fire over the snow-capped Atlas backdrop, retreat to a luxury tent for mint tea and an unforgettable dinner beneath a tapestry of stars.",
    highlights: [
      "Dramatic rocky desert landscapes directly contrasting with snowy Atlas peaks.",
      "Sunset camel rides dressed in authentic traditional Tuareg attire.",
      "Luxury desert camp access for Moroccan mint tea and deep relaxation.",
      "Thrilling ATV quad biking across the undulating stone dunes."
    ]
  },
  "chefchaouen": {
    title: "1 Day Trip To Chefchaouen",
    destination: "Chefchaouen",
    duration: "Full Day (12+ Hours)",
    image: "/CHEFCHAOUEN.avif",
    shortDesc: "Wander the mesmerizing, photography-perfect blue streets of the Rif mountains.",
    program: "Hidden high in the dramatic peaks of the Rif Mountains lies the surreal 'Blue Pearl' of Morocco. This extensively picturesque town is an immersive canvas of cobalt, indigo, and azure alleys. Accompanied by your guide, you'll wander the steep cobblestone streets, dipping into leather and weaving workshops. Stop for mint tea at Plaza Uta el-Hammam in the shadow of the red-walled Kasbah, and hike up to the cascading Ras El Maa waterfall.",
    highlights: [
      "Extensive walking tour of the world-famous completely blue-washed Medina.",
      "Visit the cascading Ras El Maa waterfall just outside the historic walls.",
      "Explore the 15th-century Kasbah and its Andalusian gardens.",
      "Relax in the lively Plaza Uta el-Hammam with traditional Rif tea."
    ]
  },
  "essaouira": {
    title: "1 Day Trip To Essaouira",
    destination: "Essaouira Coast",
    duration: "Full Day (9 Hours)",
    image: "/ESSAOUIRA.jpg",
    shortDesc: "A serene coastal escape blending Portuguese fortresses and Moroccan medinas.",
    program: "Leave the heat of the inland behind and head west to the refreshing Atlantic breezes of Essaouira, Morocco's 'Windy City'. En route, keep your eyes peeled for the legendary goats balancing effortlessly in Argan trees. Once there, stroll the imposing 18th-century seafront ramparts (Skala de la Ville) lined with vintage Portuguese brass cannons. Dive into the art-filled, UNESCO-listed Medina, and conclude your day enjoying freshly caught seafood right on the active fishing dock.",
    highlights: [
      "Walk the historic Skala ramparts with original vintage bronze cannons.",
      "Explore the relaxed vibes of the deeply artistic, UNESCO-listed Medina.",
      "Savor freshly caught seafood grilled right at the bustling harbor.",
      "Spot the famous and bizarre tree-climbing goats on the scenic drive."
    ]
  },
  "ait-ben-haddou": {
    title: "1 Day Trip To Ait Ben Haddou",
    destination: "Ait Ben Haddou",
    duration: "Full Day (11 Hours)",
    image: "/AIT%20BEN%20HADDOU.jpg",
    shortDesc: "Step into cinematic history at Morocco's most magnificent ancient Kasbah.",
    program: "A journey of pure cinematic history scaling the majestic High Atlas mountains via the dizzying Tizi n'Tichka pass. Arrive at the spectacular, earth-toned citadel of Aït Benhaddou. This UNESCO World Heritage site is a striking example of southern Moroccan mud-brick architecture and has served as a dramatic backdrop for epics like 'Gladiator', 'Lawrence of Arabia', and 'Game of Thrones'. Explore its labyrinthine, stacked dwellings that have stood proudly for centuries.",
    highlights: [
      "Cross the dramatic Tizi n'Tichka mountain pass across the High Atlas.",
      "Guided exploration of the UNESCO massive mud-brick citadel.",
      "Walk directly in the footsteps of legendary film and television casts.",
      "Breathtaking photography opportunities against the red clay ruins."
    ]
  },
  "ouzoud": {
    title: "1 Day trip Marrakech to Ouzoud Waterfalls",
    destination: "Ouzoud Falls",
    duration: "Full Day (9 Hours)",
    image: "/OUZOUD.jpg",
    shortDesc: "Witness the sheer power of North Africa's highest cascading waterfalls.",
    program: "Venture deep into the Atlas Mountains to witness one of Morocco's most spectacular natural wonders. Plunging 110 meters into the canyon below, the Ouzoud Waterfalls create an impressive multi-tiered display of raw natural power. Hike down shaded olive-tree-lined paths to the basin, where you can take a traditional wooden boat ride right up to the roaring, misty cascade. Keep an eye out for the friendly wild Barbary macaques that inhabit the surrounding cliffs.",
    highlights: [
      "Hike down to the base of the dramatic multi-tiered 110-meter waterfalls.",
      "Take a traditional wooden boat ride right up to the misty roaring cascade.",
      "Observe wild Barbary macaques playing freely in the surrounding olive trees.",
      "Stunning rainbow views and lunch from the clifftop terraced cafes."
    ]
  }
};

export default async function ExcursionDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trip = excursionsData[id];

  if (!trip) {
    notFound();
  }

  return (
    <div className="bg-obsidian min-h-screen font-sans text-alabaster">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[600px] w-full flex items-end pb-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={trip.image} alt={trip.title} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-16 w-full">
          <Link href="/excursions" className="text-sandstone hover:text-white uppercase tracking-widest text-[10px] font-bold mb-8 inline-block transition-colors flex items-center gap-2">
            <ArrowLeft size={14} /> Back to Excursions
          </Link>
          <span className="block text-sandstone tracking-[0.3em] font-bold text-[10px] uppercase mb-4">{trip.destination}</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white max-w-5xl leading-[1.05] tracking-tight">
            {trip.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
        <div className="lg:col-span-7">
           <h2 className="text-sandstone text-[10px] tracking-[0.3em] uppercase font-bold mb-8">The Experience</h2>
           <p className="text-xl lg:text-2xl font-light text-white/80 leading-[1.8] mb-16 font-serif">
             {trip.shortDesc}
           </p>

           <div className="h-[1px] w-full bg-white/5 mb-16"></div>

           <h2 className="text-sandstone text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Program & Itinerary</h2>
           <p className="text-base font-light text-white/60 leading-[2.2] mb-16">
             {trip.program}
           </p>

           <h2 className="text-sandstone text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Key Highlights</h2>
           <ul className="space-y-6">
             {trip.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-6 items-start group">
                  <CheckCircle className="w-5 h-5 text-sandstone shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-lg font-light text-white/70 group-hover:text-white transition-colors">{highlight}</span>
                </li>
             ))}
           </ul>
        </div>

        <div className="lg:col-span-5 relative">
           <div className="sticky top-32 bg-[#0c0c0c] border border-white/5 p-10 md:p-12">
              <h3 className="font-serif text-3xl mb-10 pb-6 border-b border-white/5 text-white">Trip Details</h3>
              
              <div className="space-y-8 mb-12">
                 <div>
                   <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] font-semibold mb-2">Duration</span>
                   <div className="flex items-center gap-3 text-white">
                      <Clock size={18} className="text-sandstone" />
                      <span className="text-lg font-light">{trip.duration}</span>
                   </div>
                 </div>
                 <div>
                   <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] font-semibold mb-2">Location</span>
                   <div className="flex items-center gap-3 text-white">
                      <MapPin size={18} className="text-sandstone" />
                      <span className="text-lg font-light">{trip.destination}</span>
                   </div>
                 </div>
              </div>

              <button className="w-full bg-sandstone hover:bg-white text-obsidian uppercase tracking-widest text-[10px] font-bold py-5 transition-colors duration-300">
                Inquire About Availability
              </button>
           </div>
        </div>
      </div>

      {/* Spacing Block Before Footer */}
      <div className="h-[15vh] lg:h-[20vh] w-full" />
    </div>
  );
}
