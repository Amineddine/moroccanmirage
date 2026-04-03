"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Map } from "lucide-react";

const tours = [
  {
    title: "The Grand Mirage",
    duration: "15 Days",
    stops: "Casablanca, Chefchaouen, Fes, Merzouga, Marrakech",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2600&auto=format&fit=crop",
  },
  {
    title: "Sahara Elegance",
    duration: "10 Days",
    stops: "Marrakech, Ait Benhaddou, Ouarzazate, Zagora dunes",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8e211?q=80&w=2600&auto=format&fit=crop",
  },
  {
    title: "Imperial Cities",
    duration: "8 Days",
    stops: "Rabat, Meknes, Fes, Marrakech",
    img: "https://images.unsplash.com/photo-1598426056637-25e1df339c0f?q=80&w=2600&auto=format&fit=crop",
  },
  {
    title: "Coastal Retreat",
    duration: "7 Days",
    stops: "Casablanca, El Jadida, Essaouira, Agadir",
    img: "https://images.unsplash.com/photo-1579009587445-57351c4a008c?q=80&w=2600&auto=format&fit=crop",
  }
];

export default function Tours() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section id="tours" ref={targetRef} className="relative h-[300vh] bg-atlas">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sahara font-medium tracking-widest uppercase text-sm mb-4 block">
              Signature Journeys
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              Curated <span className="italic font-light text-sahara">Excursions</span>
            </h2>
          </motion.div>
          <div className="hidden md:flex items-center gap-4 text-white/50">
            <span className="uppercase tracking-widest text-xs">Scroll to explore</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-12 w-[300vw] lg:w-[200vw]">
          {tours.map((tour, idx) => (
            <div key={idx} className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group cursor-pointer relative">
              <div className="relative h-[60vh] rounded-[2rem] overflow-hidden glass-dark shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-overlay"
                  style={{ backgroundImage: `url('${tour.img}')` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500">
                  <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-6 transform group-hover:-translate-y-4 transition-transform duration-500">{tour.title}</h3>
                  
                  <div className="flex flex-col gap-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-3 text-white/80">
                      <Clock className="w-5 h-5 text-sahara" />
                      <span className="text-lg font-light">{tour.duration}</span>
                    </div>
                    <div className="flex items-start gap-3 text-white/80">
                      <Map className="w-5 h-5 text-sahara mt-1" />
                      <span className="text-lg font-light leading-relaxed">{tour.stops}</span>
                    </div>
                    
                    <button className="mt-8 bg-white/10 hover:bg-sahara text-white border border-white/20 hover:border-transparent px-8 py-4 rounded-full w-max flex items-center gap-3 transition-colors backdrop-blur-md">
                      <span>View Detailed Itinerary</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
