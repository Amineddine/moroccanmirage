import Link from "next/link";

export default function ToursPage() {
  const cities = [
    { name: "From Marrakech", path: "marrakech", img: "/TOURS FROM MARRAKECH.jpg" },
    { name: "From Casablanca", path: "casablanca", img: "/TOURS FROM CASABLANCA.avif" },
    { name: "From Tangier", path: "tangier", img: "/TOURS FROM TANGIER.jpg" },
    { name: "From Fes", path: "fes", img: "/TOURS FROM FES.avif" },
  ];

  return (
    <div className="bg-obsidian min-h-screen relative font-sans text-alabaster flex flex-col items-center overflow-x-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
        >
          <source src="/backgroundvid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-6 lg:px-16 flex flex-col items-center pt-32 pb-32">
        
        {/* Space between top and title */}
        <div className="h-[10vh] lg:h-[15vh] w-full" />

        <h1 className="font-serif text-5xl lg:text-7xl mb-8 text-center text-alabaster tracking-tight">Discover Your <span className="text-sandstone">Morocco</span></h1>
        
        <div className="w-full max-w-3xl flex justify-center mb-10">
          <p className="text-center text-lg md:text-xl font-light opacity-80 leading-relaxed px-4 shadow-xl">
            Select your starting point and embark on an unforgettable journey across the dunes, mountains, and ancient medinas.
          </p>
        </div>

        <div className="mb-16">
          <Link href="/" className="inline-block border border-sandstone/30 text-sandstone px-10 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-sandstone hover:text-obsidian transition-all duration-500">
            BACK TO HOME
          </Link>
        </div>
        
        {/* Transparent block of space */}
        <div className="h-16 md:h-24 w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full">
          {cities.map((city) => (
            <Link key={city.name} href={`/tours/${city.path}`} className="group relative overflow-hidden aspect-[16/10] sm:aspect-[2/1] md:aspect-[16/11] bg-neutral-900 border border-white/5 hover:border-sandstone transition-all duration-700 rounded-lg w-full flex shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={city.img} alt={city.name} className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
              
              <div className="absolute bottom-10 left-0 w-full text-center z-10 px-6">
                <h3 className="font-serif text-3xl font-light tracking-wide group-hover:-translate-y-2 transition-transform duration-500">Tours <br/><span className="text-sandstone font-medium text-2xl">{city.name}</span></h3>
                <span className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-alabaster opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:translate-y-0 translate-y-2">Explore Regions &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Transparent block of space */}
        <div className="h-16 md:h-32 w-full" />
      </div>
    </div>
  );
}
