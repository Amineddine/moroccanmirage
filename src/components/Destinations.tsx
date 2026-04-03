"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    name: "Marrakech",
    desc: "The bustling Red City where vibrant souks meet the serene Palmeraie.",
    img: "https://images.unsplash.com/photo-1597211684565-dca64d72bc38?q=80&w=2600&auto=format&fit=crop",
    colSpan: "md:col-span-8",
    height: "h-[500px]",
    speed: 0,
  },
  {
    name: "Casablanca",
    desc: "A modern metropolis defined by striking Art Deco and grand mosques.",
    img: "https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=2600&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    height: "h-[400px]",
    speed: 20,
  },
  {
    name: "Fes",
    desc: "The cultural and spiritual heart of Morocco, steeped in medieval charm.",
    img: "https://images.unsplash.com/photo-1552084110-4ed5145b206f?q=80&w=2600&auto=format&fit=crop",
    colSpan: "md:col-span-5",
    height: "h-[450px]",
    speed: -10,
  },
  {
    name: "Tangier",
    desc: "Where the Mediterranean meets the Atlantic, a historic gateway.",
    img: "https://images.unsplash.com/photo-1629853381617-6f9172289c09?q=80&w=2600&auto=format&fit=crop",
    colSpan: "md:col-span-7",
    height: "h-[550px]",
    speed: 10,
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-20 bg-background-light">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 text-center md:text-left"
      >
        <span className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
          Curated Locales
        </span>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-atlas mb-6">
          The Crown Jewels of <span className="italic font-light text-sahara">Morocco</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.name}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className={`${dest.colSpan} relative rounded-[2rem] overflow-hidden group cursor-pointer ${dest.height} shadow-xl shadow-atlas/5`}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                 style={{ backgroundImage: `url('${dest.img}')` }} />
            
            {/* Arched Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-atlas/90 via-atlas/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
              <h3 className="text-3xl font-semibold text-white mb-3">{dest.name}</h3>
              <p className="text-white/80 font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                {dest.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
