import Link from "next/link";
import { notFound } from "next/navigation";
import { toursDetailsData } from "@/data/toursDetails";
import { Check, X } from "lucide-react";

export default async function TourDetailsPage({ params }: { params: Promise<{ city: string, tourId: string }> }) {
  const { city, tourId } = await params;
  
  const tour = toursDetailsData[tourId];

  // If the dynamic route lacks data for the ID, trigger NextJS 404
  if (!tour) {
    notFound();
  }

  // Pick hero image depending on city gracefully
  let heroImage = "/marrakech tour 3.jpg";
  if (city === "casablanca") heroImage = "/TOURS FROM CASABLANCA.avif";
  if (city === "tangier") heroImage = "/tangier tour 2.jpg";
  if (city === "fes") heroImage = "/fes tour 1.jpg";

  return (
    <div className="bg-alabaster min-h-screen text-obsidian font-sans selection:bg-sandstone selection:text-white pb-32">
      {/* Hero Section */}
      <div className="h-[75vh] min-h-[600px] bg-obsidian relative flex items-end pb-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('${heroImage}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          <Link href={`/tours/${city}`} className="text-sandstone hover:text-white uppercase tracking-widest text-[10px] font-bold mb-10 inline-block transition-colors drop-shadow-md">
            &larr; Back to {city} Tours
          </Link>
          <span className="block text-sandstone font-sans tracking-[0.3em] text-[10px] uppercase mb-6 font-semibold">Tour Code: {tourId.toUpperCase()}</span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] text-white max-w-6xl leading-[1.05] tracking-tight mb-8">
            {tour.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative mt-24">
        <div className="lg:col-span-9 pr-0 lg:pr-10">
          <h2 className="text-obsidian/60 text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-10 border-b border-obsidian/10 pb-4 inline-block">The Experience</h2>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.8] text-obsidian/90 mb-24 font-light tracking-tight">
            {tour.shortDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-16 mb-32 bg-white p-12 md:p-16 border border-obsidian/5 shadow-xl">
            <div>
              <h3 className="text-obsidian/60 text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-12 border-b border-obsidian/10 pb-4 inline-block">Price Includes</h3>
              <ul className="space-y-8">
                {tour.priceIncludes.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-5">
                    <Check size={20} className="text-emerald-700 mt-1 shrink-0 bg-emerald-50 p-1 rounded" strokeWidth={2.5} />
                    <span className="font-light text-lg lg:text-xl text-obsidian/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-obsidian/60 text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-12 border-b border-obsidian/10 pb-4 inline-block">Price Excludes</h3>
              <ul className="space-y-8">
                {tour.priceExcludes.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-5">
                    <X size={20} className="text-rose-700 mt-1 shrink-0 bg-rose-50 p-1 rounded" strokeWidth={2.5} />
                    <span className="font-light text-lg lg:text-xl text-obsidian/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Spacer Between Inclusions and Program Header */}
          <div className="h-[10vh] lg:h-[15vh] w-full" />
          
          <div className="h-px w-full bg-obsidian/10"></div>
          
          <div className="h-[10vh] lg:h-[15vh] w-full" />
          
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-sandstone text-[10px] tracking-[0.4em] uppercase font-bold block mb-6">The Program</span>
                <h2 className="font-serif text-5xl lg:text-[4.5rem] text-obsidian leading-[0.9] tracking-tight">Day <span className="text-sandstone italic">by</span> Day</h2>
              </div>
              <p className="text-obsidian/40 uppercase tracking-[0.2em] text-[10px] font-bold max-w-xs md:text-right pb-2">
                A carefully crafted sequence of authentic encounters.
              </p>
            </div>
            
            {/* Spacer Between Day By Day Header and First Day Card */}
            <div className="h-[5vh] lg:h-[10vh] w-full" />
            
            <div className="space-y-8 lg:space-y-12">
              {tour.itinerary.map((day: any, idx: number) => {
                const dayNum = day.day.replace(/\D/g,''); // Extract raw numbers
                
                return (
                  <div key={idx} className="relative bg-white border border-obsidian/5 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.02)] p-10 md:p-14 lg:p-20 group hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-700">
                    
                    {/* Massive Background Number */}
                    <div className="absolute -bottom-12 -right-8 md:-bottom-20 md:-right-12 font-serif text-[12rem] md:text-[18rem] lg:text-[24rem] leading-none text-obsidian/[0.02] select-none pointer-events-none group-hover:text-obsidian/[0.04] group-hover:scale-105 transition-all duration-1000 origin-bottom-right">
                      {String(dayNum).padStart(2, '0')}
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
                      <div className="md:col-span-3 lg:col-span-3">
                        <span className="inline-block border-b-2 border-sandstone pb-4 text-obsidian font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                          {day.day}
                        </span>
                      </div>
                      <div className="md:col-span-9 lg:col-span-9">
                        <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-obsidian tracking-tight leading-[1.1] mb-8 group-hover:text-sandstone transition-colors duration-500">
                          {day.title}
                        </h4>
                        <p className="font-sans font-light text-obsidian/70 leading-[2.2] text-lg lg:text-xl max-w-3xl">
                          {day.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Booking Sidebar */}
        <div className="lg:col-span-3 relative mt-16 lg:mt-0">
          <div className="bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-obsidian/5 h-max sticky top-40">
            <h3 className="font-serif text-3xl mb-6 text-obsidian tracking-tight">Reserve<br/><span className="text-sandstone italic">This Tour</span></h3>
            <p className="font-light text-obsidian/60 mb-10 border-b border-obsidian/10 pb-10 tracking-wide mt-6">
               Starting from <strong className="text-[2rem] text-obsidian font-serif ml-2 block mt-2 leading-none">$---</strong> <span className="text-[10px] font-bold uppercase tracking-widest mt-2 block text-obsidian/40">/ person</span>
            </p>
            <div className="space-y-8 mb-12">
              <div className="flex flex-col text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-obsidian/5 pb-4 gap-2">
                <span className="text-obsidian/40">Departure</span>
                <span className="text-sandstone capitalize font-bold text-xs">{city}</span>
              </div>
              <div className="flex flex-col text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-obsidian/5 pb-4 gap-2">
                <span className="text-obsidian/40">Vehicle</span>
                <span className="text-obsidian font-bold text-xs">Luxury 4x4 / Minivan</span>
              </div>
              <div className="flex flex-col text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-obsidian/5 pb-4 gap-2">
                <span className="text-obsidian/40">Guide</span>
                <span className="text-obsidian font-bold text-xs">Local Expert</span>
              </div>
            </div>
            <button className="w-full bg-obsidian text-alabaster py-5 uppercase tracking-[0.2em] font-bold text-[11px] hover:bg-sandstone hover:text-obsidian transition-colors duration-500 shadow-xl">
              Inquire Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
