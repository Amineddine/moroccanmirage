"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Moroccan Tours",
    desc: "Traverse golden dunes in luxury Land Cruisers under an infinite Saharan sky.",
    img: "/Moroccantours.jpeg",
    link: "/tours"
  },
  {
    title: "Excursions And Activities",
    desc: "Hidden medinas, private artisan workshops, and authentic heritage encounters.",
    img: "/Excursions And activities.jpg",
    link: "/excursions"
  },
  {
    title: "Private Airport Transfer",
    desc: "Seamless arrivals in Mercedes V‑Class and Range Rover comfort.",
    img: "/Private Airport Transfer.jpg",
    link: "#"
  },
  {
    title: "Customize Your Trip",
    desc: "Tailor-made itineraries designed exclusively for your unique travel desires throughout Morocco.",
    img: "/Customize Your Trip.jpg",
    link: "/customize"
  },
];

import Link from "next/link";

export default function ExperienceShowcase() {
  return (
    <section id="experiences" className="w-full flex flex-col items-center overflow-x-hidden bg-alabaster pb-48 lg:pb-64 selection:bg-obsidian selection:text-sandstone">
      {/* Reduced block of space directly underneath Hero */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[25vh] w-full bg-alabaster" />

      <div className="w-full max-w-[1440px] px-6 lg:px-16 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 md:mb-64 flex flex-col items-center justify-center text-center w-full"
        >
          <p className="mb-10 font-sans text-sm font-semibold uppercase tracking-[0.6em] text-sandstone-dark">
            Curated Experiences
          </p>
          <h2 className="font-serif text-[4rem] sm:text-7xl lg:text-[8.5rem] leading-[1.05] text-obsidian tracking-[-0.03em]">
            Journeys Designed
            <br />
            <span className="italic text-sandstone-dark">for the Discerning</span>
          </h2>
          <p className="mt-16 max-w-2xl mx-auto font-sans text-base lg:text-lg font-light leading-[2.2] text-obsidian/60">
            We don't just offer destinations; we craft emotional landscapes.
            Every journey is an intimate dialogue with Morocco's soul.
          </p>
        </motion.div>

        {/* Perfect Cinematic Centered Stack */}
        <div className="flex flex-col items-center justify-center text-center gap-16 lg:gap-32 w-full">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0.98, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden bg-obsidian w-full max-w-[1200px] aspect-square md:aspect-[16/9] lg:aspect-[21/9]"
            >
              <Link href={exp.link || "#"} className="absolute inset-0 z-30" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={exp.img}
                alt={exp.title}
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity transition-all duration-[2s] ease-out group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 lg:p-12 z-10 pointer-events-none">
                <div className="overflow-hidden">
                  <h3 className="font-serif text-[2rem] leading-none text-alabaster transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-4 sm:text-5xl lg:text-[4rem]">
                    {exp.title}
                  </h3>
                </div>
                <div className="mt-8 overflow-hidden h-20">
                  <p className="max-w-md mx-auto translate-y-full font-sans text-sm sm:text-base font-light leading-[2] text-alabaster/90 opacity-0 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:translate-y-0 group-hover:opacity-100">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-8 right-8 font-serif text-xl italic text-alabaster/40 z-10">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}