"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: "tours",
    label: "01",
    title: "Moroccan Tours",
    desc: "Multi-day adventures from the Sahara to the imperial cities. Luxury Land Cruisers, expert guides, unforgettable routes.",
    img: "/Moroccantours.jpeg",
    cta: "Explore Tours",
    ctaLink: "/tours",
    inquireService: "Moroccan Tours",
  },
  {
    id: "excursions",
    label: "02",
    title: "Excursions & Activities",
    desc: "Day escapes to Chefchaouen, Ouzoud, Agafay, and beyond. Immersive single-day journeys designed for maximum impact.",
    img: "/Excursions And activities.jpg",
    cta: "View Excursions",
    ctaLink: "/excursions",
    inquireService: "Excursions & Activities",
  },
  {
    id: "transfer",
    label: "03",
    title: "Private Airport Transfer",
    desc: "Seamless meet-and-greet service. Mercedes V-Class and Range Rover comfort, available around the clock.",
    img: "/Private Airport Transfer.jpg",
    cta: null,
    ctaLink: null,
    inquireService: "Private Airport Transfer",
  },
  {
    id: "customize",
    label: "04",
    title: "Customize Your Trip",
    desc: "Tell us your vision. Our concierge team will design a tailor-made itinerary built around your desires, timeline, and style.",
    img: "/tangier tour 4.jpg",
    cta: "Start Planning",
    ctaLink: "/customize",
    inquireService: "Customize My Trip",
  },
];

export default function ExperienceShowcase() {
  return (
    <section
      id="experiences"
      className="w-full bg-alabaster selection:bg-obsidian selection:text-sandstone overflow-x-hidden"
    >
      {/* Top spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]" />

      {/* Section Header */}
      <div className="w-full flex justify-center px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-24 md:mb-40 w-full max-w-[1440px]"
        >
          <p className="font-sans text-[10px] sm:text-sm font-semibold uppercase tracking-[0.6em] text-sandstone-dark mb-10">
            Curated Experiences
          </p>
          <h2 className="font-serif text-[3.5rem] sm:text-7xl lg:text-[8.5rem] leading-[1.02] text-obsidian tracking-[-0.03em]">
            Journeys Designed
            <br />
            <span className="italic text-sandstone-dark">for the Discerning</span>
          </h2>
          <p className="mt-16 max-w-2xl font-sans text-base lg:text-lg font-light leading-[2.2] text-obsidian/60 text-center">
            We don&apos;t just offer destinations — we craft emotional landscapes.
            Every journey is an intimate dialogue with Morocco&apos;s soul.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed Cinematic Cards */}
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Spacer between cards */}
            {i > 0 && <div className="h-6 lg:h-10 bg-alabaster" />}

            <div className="group relative w-full h-[75vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden cursor-pointer">
              {/* Full background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={exp.img}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.04]"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-obsidian/50 group-hover:bg-obsidian/40 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-obsidian/30" />

              {/* Top-left number */}
              <div className="absolute top-10 left-8 lg:top-16 lg:left-16 z-10">
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-alabaster/30">
                  {exp.label}
                </span>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <h3 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] text-alabaster tracking-[-0.02em] mb-8">
                    {exp.title}
                  </h3>

                  {/* Description — reveals on hover */}
                  <p className="max-w-lg font-sans text-sm sm:text-base font-light leading-[2] text-alabaster/70 mb-12 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out text-center">
                    {exp.desc}
                  </p>

                  {/* Thin divider */}
                  <div className="w-16 h-px bg-sandstone/50 mb-12 group-hover:w-24 transition-all duration-700" />

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link
                      href={`/contact?service=${encodeURIComponent(exp.inquireService)}&tour=${encodeURIComponent(exp.title)}`}
                      className="group/btn relative bg-alabaster/10 backdrop-blur-md border border-alabaster/20 px-10 py-4 font-sans text-[11px] uppercase tracking-[0.4em] text-alabaster font-medium transition-all duration-500 hover:bg-sandstone hover:border-sandstone hover:text-obsidian flex items-center gap-3"
                    >
                      Inquire Now
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>

                    {exp.ctaLink && (
                      <Link
                        href={exp.ctaLink}
                        className="font-sans text-[11px] uppercase tracking-[0.4em] text-alabaster/50 hover:text-alabaster font-medium transition-colors duration-300 flex items-center gap-2 group/link"
                      >
                        {exp.cta}
                        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sandstone via-sandstone/60 to-transparent group-hover:w-full transition-all duration-1000 ease-out z-10" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom spacer */}
      <div className="h-[8vh] sm:h-[12vh] lg:h-[18vh]" />
    </section>
  );
}