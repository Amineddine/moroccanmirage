"use client";

import { motion } from "framer-motion";

const pillars = [
  { title: "Zero Wait Time", text: "Your chauffeur arrives before you do — every single time." },
  { title: "Expert Drivers", text: "Multilingual professionals who know every road and every story." },
  { title: "Pristine Fleet", text: "Mercedes V‑Class, Range Rover, Audi Q7 — meticulously maintained." },
  { title: "Fixed Pricing", text: "Transparent pricing. No surprises, no hidden fees, ever." },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full flex flex-col items-center overflow-x-hidden bg-obsidian py-48 lg:py-72 text-alabaster">
      {/* Block of space between Experiences and The Standard */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[25vh] w-full bg-obsidian" />
      
      <div className="w-full max-w-[1440px] px-6 lg:px-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32 flex flex-col items-center justify-center text-center w-full"
        >
          <span className="mb-8 block font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-sandstone">
            The Standard
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-[5.5rem] leading-[1.1]">
            Why Travelers
            <br />
            <span className="italic text-sandstone">Choose Us</span>
          </h2>
        </motion.div>

        {/* Brutalist Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-alabaster/10 w-full place-items-center justify-center text-center">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group flex flex-col items-center justify-center text-center border-alabaster/10 p-12 lg:p-20 transition-colors duration-700 hover:bg-alabaster/[0.02] ${
                i !== pillars.length - 1 ? "md:border-r" : ""
              } ${i > 1 && i !== 3 ? "border-t md:border-t-0" : ""} ${i === 1 ? "border-t md:border-t-0" : ""}`}
            >
              <span className="font-serif text-[7.5rem] lg:text-[10rem] text-alabaster/[0.03] transition-colors duration-700 group-hover:text-sandstone/10 select-none leading-none">
                0{i + 1}
              </span>
              
              <div className="mt-12 w-full flex flex-col items-center">
                <h3 className="mb-6 font-serif text-3xl xl:text-4xl text-alabaster">{p.title}</h3>
                <p className="font-sans text-[15px] font-light leading-[1.9] text-alabaster/60 max-w-[250px]">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
