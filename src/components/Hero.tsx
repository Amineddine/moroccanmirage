"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-obsidian">
      {/* Background Video */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 h-[120%] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/backgroundvid.mp4" type="video/mp4" />
        </video>
        <div className="overlay-bottom absolute inset-0" />
        <div className="overlay-top absolute inset-0" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[1440px] text-center pl-2 lg:pl-[20px]"
        >
          <span className="mb-8 block font-sans text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.5em] text-sandstone">
            A Journey Into Silence
          </span>
          <h1 className="select-none font-serif text-[4rem] leading-[0.8] text-alabaster sm:text-7xl md:text-[8rem] lg:text-[11rem] xl:text-[13rem]">
            Moroccan
            <br />
            <span className="block text-sandstone -mt-2 sm:-mt-6 lg:-mt-10 lg:pl-40 xl:pl-56">
              Mirage
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-32 max-w-xs text-center font-sans text-[11px] font-light leading-[1.8] text-alabaster/60 sm:right-16 sm:text-right lg:right-24"
        >
          Curated luxury travel across Morocco&apos;s most iconic landscapes. 
          Where the golden Sahara meets the silence of the Atlas peaks.
        </motion.p>
        
        {/* Scroll Line */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.5 }}
           className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center"
        >
          <div className="h-24 w-px bg-gradient-to-b from-sandstone/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
