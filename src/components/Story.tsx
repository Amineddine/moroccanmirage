"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="story" ref={ref} className="bg-alabaster py-48 lg:py-72 text-obsidian relative overflow-hidden">
      {/* Background massive watermark */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none opacity-[0.02]">
        <span className="font-serif text-[20vw] italic leading-none tracking-tighter whitespace-nowrap">
          The Philosophy
        </span>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Images Left */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 w-full h-[600px] lg:h-[800px] items-start">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img
              src="https://images.unsplash.com/photo-1549449339-ff677b1029c4?w=1200&q=80"
              alt="Morocco desert sunset"
              className="h-full w-full object-cover grayscale transition-all duration-[2s] hover:grayscale-0 rounded-sm"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1533816692135-2605e505a74e?w=1000&q=80"
              alt="Moroccan architecture"
              className="h-4/5 w-full object-cover grayscale transition-all duration-[2s] hover:grayscale-0 self-end mt-24 rounded-sm shadow-2xl"
            />
          </div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <span className="mb-8 block font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-sandstone-dark">
              Our Philosophy
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight">
              More than a ride.
              <br />
              <span className="italic text-sandstone-dark block mt-2">A journey inside.</span>
            </h2>
            <div className="mt-12 space-y-8 font-sans text-[14px] font-light leading-[1.9] text-obsidian/70">
              <p>
                We believe how you travel matters as much as where you go. From the
                moment you land, every detail is orchestrated — so you can lose
                yourself in the golden light of the dunes, not the logistics.
              </p>
              <p>
                Our fleet is an extension of modern Moroccan hospitality. Silence,
                discretion, and absolute comfort are the cornerstones of our service.
              </p>
            </div>
            
            <div className="mt-16 flex items-center gap-6">
              <div className="h-px w-24 bg-obsidian/20" />
              <span className="font-serif text-xs italic tracking-[0.2em] text-obsidian/60">
                Est. 2018
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
