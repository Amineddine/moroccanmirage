import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, Star } from "lucide-react";

export default async function CityToursPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const city = resolvedParams.city.toLowerCase();
  
  const toursData: Record<string, any[]> = {
    tangier: [
      { id: "tangier-8-days", name: "8 Days Sahara tour from Tangier", duration: "8 Days 7 Nights", end: "Marrakech", start: "Tangier", reviews: 132, image: "/tangier tour 1.jpg" },
      { id: "tangier-10-days", name: "10 Days Tour from Tangier", duration: "10 Days 9 Nights", end: "Marrakech", start: "Tangier", reviews: 251, image: "/tangier tour 2.jpg" },
      { id: "tangier-14-days", name: "14 Days Tour From Tangier to Casablanca", duration: "14 Days 13 Nights", end: "Casablanca", start: "Tangier", reviews: 182, image: "/tangier tour 3.jpg" },
      { id: "tangier-12-days", name: "12 Days Tour From Tangier", duration: "12 Days 11 Nights", end: "Tangier", start: "Tangier", reviews: 189, image: "/tangier tour 4.jpg" },
    ],
    marrakech: [
      { id: "marrakech-3-days-desert", name: "3 Days Desert Tour From Marrakech", duration: "3 Days 2 Nights", end: "Marrakech", start: "Marrakech", reviews: 295, image: "/marrakech tour 1.jpg" },
      { id: "marrakech-3-days-fes", name: "3 Days Tour from Marrakech to Fes", duration: "3 Days 2 Nights", end: "Fes", start: "Marrakech", reviews: 212, image: "/marrakech tour 2.jpg" },
      { id: "marrakech-4-days", name: "4 Days tour from Marrakech", duration: "4 Days 3 Nights", end: "Marrakech", start: "Marrakech", reviews: 185, image: "/marrakech tour 3.jpg" },
      { id: "marrakech-5-days", name: "5 Days Sahara tour from Marrakech", duration: "5 Days 4 Nights", end: "Marrakech", start: "Marrakech", reviews: 188, image: "/marrakech tour 4.jpg" },
      { id: "marrakech-6-days", name: "6 Days tour from Marrakech", duration: "6 Days 5 Nights", end: "Marrakech", start: "Marrakech", reviews: 252, image: "/marrakech tour 5.jpg" },
      { id: "marrakech-8-days", name: "8 Days Morocco Tour from Marrakech", duration: "8 Days 7 Nights", end: "Casablanca", start: "Marrakech", reviews: 185, image: "/marrakech tour 6.jpeg" },
      { id: "marrakech-10-days", name: "10 Days Morocco Tours from Marrakech", duration: "10 Days 9 Nights", end: "Marrakech", start: "Marrakech", reviews: 130, image: "/marrakech tour 7.jpg" },
    ],
    casablanca: [
      { id: "casablanca-15-days", name: "15 Days Grand Tour From Casablanca", duration: "15 Days 14 Nights", end: "Casablanca", start: "Casablanca", reviews: 301, image: "/casablanca tour 1.avif" },
      { id: "casablanca-6-days", name: "6 Days Tour From Casablanca", duration: "6 Days 5 Nights", end: "Marrakech", start: "Casablanca", reviews: 232, image: "/casablanca tour 2.jpg" },
      { id: "casablanca-8-days", name: "8 Days tour departing from Casablanca", duration: "8 Days 7 Nights", end: "Marrakech", start: "Casablanca", reviews: 218, image: "/casablanca tour 3.jpg" },
      { id: "casablanca-10-days", name: "10 Days tour from Casablanca", duration: "10 Days 9 Nights", end: "Marrakech", start: "Casablanca", reviews: 211, image: "/casablanca tour 4.jpg" },
      { id: "casablanca-12-days", name: "12 Days Tour from Casablanca", duration: "12 Days 11 Nights", end: "Marrakech", start: "Casablanca", reviews: 216, image: "/casablanca tour 5.jpg" },
    ],
    fes: [
      { id: "fes-4-days-desert", name: "4 Days Desert Tour From Fes", duration: "4 Days 3 Nights", end: "Fes", start: "Fes", reviews: 54, image: "/fes tour 1.jpg" },
      { id: "fes-10-days", name: "10 Days Morocco Tour From Fes", duration: "10 Days 9 Nights", end: "Fes", start: "Fes", reviews: 210, image: "/fes tour 2.jpg" },
      { id: "fes-6-days", name: "6 Days Tour From Fes", duration: "6 Days 5 Nights", end: "Marrakech", start: "Fes", reviews: 232, image: "/fes tour 3.jpg" },
      { id: "fes-3-days-merzouga", name: "3 Days Tour from Fes To Merzouga", duration: "3 Days 2 Nights", end: "Fes", start: "Fes", reviews: 179, image: "/fes tour 4.jpg" },
      { id: "fes-3-days-desert", name: "3 Days Desert Tour From Fes", duration: "3 Days 2 Nights", end: "Marrakech", start: "Fes", reviews: 169, image: "/fes tour 5.avif" },
      { id: "fes-4-days-marrakech", name: "4 days Desert Tour Fes To Marrakech", duration: "4 Days 3 Nights", end: "Marrakech", start: "Fes", reviews: 203, image: "/fes tour 6.jpg" },
    ]
  };

  const currentTours = toursData[city];

  if (!currentTours) {
    notFound();
  }

  return (
    <div className="bg-obsidian min-h-screen text-alabaster font-sans selection:bg-sandstone shadow-2xl">
      
      {/* Spacer Between Top and Title */}
      <div className="h-[20vh] w-full" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        <div className="flex flex-col items-center text-center w-full mb-0">
          <Link href="/tours" className="text-sandstone hover:text-white uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold mb-8 inline-block transition-colors">&larr; Back to Regions</Link>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] text-alabaster capitalize tracking-tight">Tours from <span className="text-sandstone italic lg:ml-4 block md:inline">{city}</span></h1>
          <div className="h-[2px] w-16 bg-sandstone mt-12 mb-0"></div>
        </div>

        {/* Spacer Between Title and Cards */}
        <div className="h-[12vh] lg:h-[15vh] w-full" />

        <div className="flex flex-wrap justify-center items-stretch gap-8 lg:gap-12 w-full max-w-7xl mb-0">
          {currentTours.map((tour) => (
            <Link key={tour.id} href={`/tours/${city}/${tour.id}`} className="group relative flex flex-col justify-end min-h-[480px] w-full max-w-[420px] p-8 lg:p-10 border border-white/5 overflow-hidden shadow-2xl rounded-sm hover:-translate-y-2 transition-transform duration-700 text-left">
              
              {/* Background Image Setup */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${tour.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/10 group-hover:via-obsidian/50 transition-colors duration-700"></div>
              
              <div className="relative z-10 w-full">
                <div className="flex items-center gap-1 mb-6 text-sandstone">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-sandstone" />
                  ))}
                  <span className="text-alabaster/60 font-medium text-[10px] ml-3 tracking-widest uppercase">({tour.reviews} Reviews)</span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-3xl lg:text-[2rem] text-alabaster group-hover:text-sandstone transition-colors leading-[1.15] mb-8 min-h-[6rem] tracking-tight">{tour.name}</h3>
              
                <div className="space-y-4 border-t border-white/20 pt-6 pr-4">
                   <div className="flex items-center gap-4 text-alabaster/80 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">
                     <Clock size={16} className="text-sandstone shrink-0" strokeWidth={2} />
                     {tour.duration}
                   </div>
                   
                   <div className="flex items-center gap-4 text-alabaster/80 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">
                     <MapPin size={16} className="text-sandstone shrink-0" strokeWidth={2} />
                     <span className="truncate whitespace-nowrap"><span className="text-alabaster/40 mr-2">START:</span> <span className="text-alabaster font-bold">{tour.start}</span></span>
                   </div>
                   
                   <div className="flex items-center gap-4 text-alabaster/80 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">
                     <MapPin size={16} className="text-sandstone shrink-0" strokeWidth={2} />
                     <span className="truncate whitespace-nowrap"><span className="text-alabaster/40 mr-4">END:</span> <span className="text-alabaster font-bold">{tour.end}</span></span>
                   </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-sandstone to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out z-20"></div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Spacer Between Cards and Footer */}
      <div className="h-[20vh] lg:h-[30vh] w-full" />
    </div>
  );
}
