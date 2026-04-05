"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/casablanca tour 2.jpg", alt: "Casablanca Architecture" },
  { src: "/fes tour 6.jpg", alt: "Fes Medina View" },
  { src: "/marrakech tour 6.jpeg", alt: "Marrakech Lifestyle" },
  { src: "/AGAFAY.jpeg", alt: "Agafay Desert Expanse" },
  { src: "/OURIKA.avif", alt: "Ourika Valley Colors" },
  { src: "/tangier tour 3.jpg", alt: "Tangier Coast Escapes" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="w-full flex flex-col items-center overflow-x-hidden bg-alabaster pb-48 lg:pb-64 selection:bg-obsidian selection:text-sandstone">
      {/* Block of space between Testimonials and Visual Diary */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[25vh] w-full bg-alabaster" />
      
      <div className="w-full max-w-[1440px] px-6 lg:px-16 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-48 md:mb-56 flex flex-col items-center justify-center text-center w-full"
        >
          <span className="mb-10 font-sans text-sm font-semibold uppercase tracking-[0.6em] text-sandstone-dark text-center w-full block">
            Vol. 01 — Essence of Morocco
          </span>
          <h2 className="font-serif text-[4rem] sm:text-7xl lg:text-[8rem] leading-[1.05] tracking-tight text-obsidian text-center w-full block">
            Visual Diary
          </h2>
          <p className="mt-16 max-w-2xl mx-auto font-sans text-base lg:text-lg font-light leading-[2.2] text-obsidian/60 text-center w-full block">
            A glimpse into the eternal soul of Morocco. Light, shadow, and the profound
            silence of the desert captured in highly curated cinematic frames.
          </p>
        </motion.div>
      </div>

      {/* Flush Masonry Contact Sheet */}
      <div className="w-full max-w-[1440px] px-6 lg:px-16 flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2 w-full">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, filter: "grayscale(100%) blur(10px)" }}
              whileInView={{ opacity: 1, filter: "grayscale(0%) blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative cursor-pointer overflow-hidden ${
                i === 0 || i === 3 ? "col-span-2 lg:col-span-1 aspect-[4/3] lg:aspect-square" : "aspect-[3/4] lg:aspect-square"
              }`}
              onClick={() => setLightbox(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/20" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-obsidian/95 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-8 top-8 text-alabaster/40 hover:text-alabaster transition-colors z-10 p-4"
              onClick={() => setLightbox(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-7xl px-6 lg:px-16 flex justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-h-[85vh] w-auto object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
