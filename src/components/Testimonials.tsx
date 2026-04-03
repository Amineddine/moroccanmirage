"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    quote: "A masterpiece of a journey. The driver anticipated every need, and the desert camp was pure magic under the stars.",
    name: "Eleanor Whitfield",
    from: "London",
  },
  {
    quote: "Flawless execution from start to finish. Moroccan Mirage transformed our vacation into something truly cinematic.",
    name: "James Sterling",
    from: "New York",
  },
  {
    quote: "The definition of luxury travel. From the seamless airport transfer to the Atlas retreats — absolute perfection.",
    name: "Sophia Laurent",
    from: "Paris",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % reviews.length), []);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-obsidian py-48 lg:py-72 relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-x-0 top-0 h-px bg-alabaster/10 mx-6 lg:mx-16" />
      
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16 text-center">
        <span className="mb-32 block font-sans text-sm font-semibold uppercase tracking-[0.5em] text-sandstone">
          Voices of the Journey
        </span>

        <div className="relative min-h-[600px] sm:min-h-[500px] lg:min-h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 w-full px-4 flex flex-col items-center"
            >
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.15] tracking-tight text-alabaster max-w-6xl mx-auto">
                &ldquo; <span className="italic font-light text-alabaster/90">{reviews[active].quote}</span> &rdquo;
              </h3>
              
              <div className="mt-40 xl:mt-56 flex flex-col items-center gap-6">
                <div className="h-16 w-px bg-sandstone/30" />
                <p className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-alabaster mt-8">
                  {reviews[active].name}
                </p>
                <p className="font-serif italic text-sandstone text-lg">
                  {reviews[active].from}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom brutalist progress indicators */}
        <div className="mt-24 flex justify-center gap-1">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-1000 ${
                i === active ? "w-16 bg-sandstone" : "w-16 bg-alabaster/10 hover:bg-alabaster/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
