"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll";

const principles = [
  { num: "01", title: "Silence is a destination", body: "We seek stillness in movement. The finest journeys leave you speechless — not from exhaustion, but from wonder." },
  { num: "02", title: "Time is the rarest luxury", body: "We do not fill itineraries. We curate them. Every hour is intentional. Every stop, deliberate. Nothing is by accident." },
  { num: "03", title: "Comfort should never compromise soul", body: "A five-star room means nothing if the journey to reach it was forgettable. Authenticity and luxury are not opposites." },
  { num: "04", title: "The road is the destination", body: "Morocco reveals itself slowly, through windows and winding roads. We believe the drive is where the real travel begins." },
];

const fleet = [
  { name: "Mercedes V-Class", tag: "Presidential Silence", desc: "Seven-seat executive configuration. Acoustic glass, captain chairs, climate zones. The quietest way to cross a mountain range.", img: "/Private Airport Transfer.jpg" },
  { name: "Range Rover Sport", tag: "Engineered for the Atlas", desc: "Terrain Response system meets handstitched leather. For the Tizi n'Tichka in the morning and a riad courtyard by evening.", img: "/marrakech tour 5.jpg" },
  { name: "Audi Q7", tag: "Effortless Precision", desc: "German precision meets desert light. Long-wheelbase comfort with the chassis response to handle every gradient the Atlas demands.", img: "/tangier tour 2.jpg" },
];

const storyBlocks = [
  {
    label: "The Origin",
    heading: "Born in the\nRed City",
    body: "In 2018, from a single Land Cruiser and a profound belief that Moroccan travel was being done wrong — too rushed, too packaged, too disconnected from the country's actual soul — Moroccan Mirage was founded in Marrakech.\n\nWe had no offices. No brochures. Only an intimate understanding of every road in the kingdom and an obsession with getting the details right.",
    img: "/TOURS FROM MARRAKECH.jpg",
    alt: "Marrakech city viewed from above at golden hour",
    imgRight: false,
  },
  {
    label: "The Philosophy",
    heading: "Editorial\nLuxury",
    body: "The word 'editorial' is deliberate. We curate the way a magazine art director curates a shoot — with obsessive attention to light, timing, sequence, and feeling.\n\nEvery itinerary is a narrative arc. There are peaks of intensity and valleys of stillness. There are moments you will photograph and moments you will simply inhabit, too present to reach for your phone.",
    img: "/AGAFAY.jpeg",
    alt: "Agafay desert landscape at dusk",
    imgRight: true,
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-obsidian text-alabaster">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden grain">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/TOURS FROM MARRAKECH.jpg"
            alt="Marrakech rooftops at golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-obsidian/30 to-obsidian" />

        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
            <SectionLabel light className="mb-6">Est. 2018 · Marrakech, Morocco</SectionLabel>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-6xl lg:text-9xl italic text-alabaster leading-none"
              initial={{ y: 80 }} animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0, 0, 1] }}
            >
              The Art of
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-6xl lg:text-9xl italic text-sandstone leading-none"
              initial={{ y: 80 }} animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.25, 0, 0, 1] }}
            >
              the Journey.
            </motion.h1>
          </div>
          <motion.p
            className="font-body text-alabaster/60 text-lg max-w-md mt-8 leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
          >
            We are a small team of Moroccan travel obsessives who believe luxury isn&apos;t about price — it&apos;s about the precision of experience.
          </motion.p>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-sandstone py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              {["EDITORIAL LUXURY", "PRECISION SERVICE", "MOROCCAN SOUL", "BESPOKE JOURNEYS", "FOUNDED 2018", "MARRAKECH"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  <span className="font-body text-xs font-medium uppercase tracking-[0.4em] text-obsidian">{t}</span>
                  <span className="w-1 h-1 rounded-full bg-obsidian/40 shrink-0" />
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── MANIFESTO ── */}
      <section className="py-28 lg:py-40 bg-obsidian-light grain">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <RevealOnScroll direction="fade">
            <span className="font-display text-7xl lg:text-9xl text-sandstone/15 leading-none">&ldquo;</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="font-display text-3xl lg:text-5xl italic text-alabaster leading-tight -mt-6 lg:-mt-10">
              Travel is not a transaction.<br />
              It is a translation —<br />
              <span className="text-sandstone">of self, of wonder,</span><br />
              of what it means to be alive.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3} className="mt-10">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-alabaster/30">— The Moroccan Mirage Founding Ethos</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── STORY BLOCKS ── */}
      {storyBlocks.map((block) => (
        <section key={block.label} className="bg-obsidian">
          <div className={`max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${block.imgRight ? "" : "lg:[&>*:first-child]:order-2"}`}>
            <RevealOnScroll direction={block.imgRight ? "right" : "left"} className="space-y-6">
              <SectionLabel>{block.label}</SectionLabel>
              <h2 className="font-display text-5xl lg:text-6xl italic text-alabaster leading-tight whitespace-pre-line">
                {block.heading}
              </h2>
              {block.body.split("\n\n").map((para, i) => (
                <p key={i} className="font-body text-alabaster/60 leading-relaxed text-base">{para}</p>
              ))}
            </RevealOnScroll>
            <RevealOnScroll direction={block.imgRight ? "left" : "right"}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={block.img} alt={block.alt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      ))}

      {/* ── STATS ── */}
      <section className="bg-obsidian-light py-24 lg:py-32 grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="mb-16">
            <SectionLabel>By the Numbers</SectionLabel>
          </RevealOnScroll>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-sandstone/10 border-t border-sandstone/10">
            {[
              { num: "1,247+", label: "Happy Clients", note: "40+ nationalities" },
              { num: "3,580+", label: "Trips Completed", note: "Across all of Morocco" },
              { num: "8 Yrs", label: "In Service", note: "Founded 2018, Marrakech" },
              { num: "98%", label: "Satisfaction", note: "Measured every journey" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="px-6 lg:px-10 py-12 first:pl-0">
                  <p className="font-display text-5xl lg:text-6xl font-bold text-sandstone">{s.num}</p>
                  <p className="font-display text-xl italic text-alabaster mt-3 mb-1">{s.label}</p>
                  <p className="font-body text-xs text-alabaster/40 tracking-wide">{s.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="bg-obsidian py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <div>
              <SectionLabel className="mb-4">What We Believe</SectionLabel>
              <h2 className="font-display text-4xl lg:text-6xl italic text-alabaster">The Code</h2>
            </div>
            <p className="font-body text-alabaster/40 text-sm max-w-xs leading-relaxed">
              Four principles that govern every itinerary we design, every vehicle we send, every moment we orchestrate.
            </p>
          </RevealOnScroll>

          <StaggerContainer className="space-y-0 divide-y divide-sandstone/10 border-t border-sandstone/10">
            {principles.map((p) => (
              <StaggerItem key={p.num}>
                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-4 lg:gap-12 py-10 items-start group">
                  <span className="font-display text-4xl font-bold text-sandstone/30 group-hover:text-sandstone transition-colors duration-500">{p.num}</span>
                  <h3 className="font-display text-2xl lg:text-3xl italic text-alabaster group-hover:text-sandstone transition-colors duration-500 leading-tight">{p.title}</h3>
                  <p className="font-body text-alabaster/50 text-sm leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section className="bg-obsidian-light py-24 lg:py-32 grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="mb-16">
            <SectionLabel className="mb-4">The Fleet</SectionLabel>
            <h2 className="font-display text-4xl lg:text-6xl italic text-alabaster max-w-lg leading-tight">
              Your vehicle is the first impression of your Morocco.
            </h2>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleet.map((v) => (
              <StaggerItem key={v.name}>
                <div className="group relative overflow-hidden border border-sandstone/10 hover:border-sandstone/30 transition-colors duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={v.img} alt={v.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="font-body text-xs text-sandstone uppercase tracking-widest mb-2">{v.tag}</p>
                    <h3 className="font-display text-2xl italic text-alabaster mb-3">{v.name}</h3>
                    <p className="font-body text-sm text-alabaster/50 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-40 overflow-hidden grain">
        <Image src="/ESSAOUIRA.jpg" alt="Essaouira Atlantic coast" fill className="object-cover" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <SectionLabel light className="mb-6 justify-center">Begin Your Story</SectionLabel>
            <h2 className="font-display text-5xl lg:text-7xl italic text-alabaster mb-6 leading-tight">
              Ready to Begin<br />Your Moroccan Chapter?
            </h2>
            <p className="font-body text-alabaster/60 max-w-lg mx-auto mb-12 leading-relaxed">
              Our travel concierge team is available to design your journey from the first conversation to the final farewell.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" showArrow>Plan My Journey</Button>
              <Button href="/customize" variant="ghost">Customize Your Trip</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
