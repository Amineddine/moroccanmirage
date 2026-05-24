"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button"

function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const inc = end / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += inc
      if (cur >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(cur))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, end])
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const cards = [
  { num:"01", title:"Moroccan Tours", desc:"Multi-day adventures from the Sahara to the imperial cities. Luxury Land Cruisers, expert guides, unforgettable routes.", img:"/Moroccantours.jpeg", cta:"Explore Tours", href:"/tours" },
  { num:"02", title:"Excursions & Activities", desc:"Day escapes to Chefchaouen, Ouzoud, Agafay, and beyond.", img:"/Excursions And activities.jpg", cta:"View Excursions", href:"/excursions" },
  { num:"03", title:"Private Airport Transfer", desc:"Seamless meet-and-greet service. Mercedes V-Class and Range Rover comfort.", img:"/Private Airport Transfer.jpg", cta:"Inquire", href:"/contact" },
  { num:"04", title:"Customize Your Trip", desc:"Tell us your vision. Our concierge team will design a tailor-made itinerary.", img:"/Customize Your Trip.jpg", cta:"Start Planning", href:"/customize" },
]

const stats = [
  { end:1247, suffix:"+", label:"Happy Clients", sub:"From over 40 countries." },
  { end:3580, suffix:"+", label:"Trips Completed", sub:"Across Morocco's iconic routes." },
  { end:8, suffix:"", label:"Years in Service", sub:"Founded in Marrakech, 2018." },
  { end:98, suffix:"%", label:"Satisfaction Rate", sub:"Measured across every journey." },
]

const pillars = [
  { title:"Zero Wait Time", body:"Your chauffeur arrives before you do — every single time." },
  { title:"Expert Drivers", body:"Multilingual professionals who know every road and every story." },
  { title:"Pristine Fleet", body:"Mercedes V‑Class, Range Rover, Audi Q7 — meticulously maintained." },
  { title:"Fixed Pricing", body:"Transparent pricing. No surprises, no hidden fees, ever." },
]

const scenes = [
  { title:"High Atlas", subtitle:"Where peaks touch silence", body:"Trails carved into rock by Berber hands — unchanged for a thousand years.", img:"/IMLIL.jpg", alt:"Imlil village in the High Atlas Mountains" },
  { title:"Agafay Desert", subtitle:"Infinity in ochre", body:"Stone desert stretching beyond sight. A landscape that empties the mind.", img:"/AGAFAY.jpeg", alt:"Agafay stone desert near Marrakech" },
  { title:"Chefchaouen", subtitle:"A city dreamt in blue", body:"Labyrinthine alleys painted the colour of sky and sea.", img:"/CHEFCHAOUEN.avif", alt:"The blue streets of Chefchaouen" },
  { title:"Atlantic Coast", subtitle:"Where Africa meets the open ocean", body:"Wind-scoured ramparts, silver light, and the sound of eternal surf.", img:"/ESSAOUIRA.jpg", alt:"Essaouira ramparts on the Atlantic coast" },
]

const cities = [
  { name:"Marrakech", sub:"The Red City", img:"/TOURS FROM MARRAKECH.jpg", tours:7, href:"/tours/marrakech" },
  { name:"Casablanca", sub:"The White City", img:"/TOURS FROM CASABLANCA.avif", tours:5, href:"/tours/casablanca" },
  { name:"Tangier", sub:"The Gateway", img:"/TOURS FROM TANGIER.jpg", tours:4, href:"/tours/tangier" },
  { name:"Fes", sub:"The Ancient Capital", img:"/TOURS FROM FES.avif", tours:6, href:"/tours/fes" },
]

const quotes = [
  { quote:"A masterpiece of a journey. The driver anticipated every need, and the desert camp was pure magic under the stars.", author:"Eleanor Whitfield", location:"London" },
  { quote:"Flawless execution from start to finish. Moroccan Mirage transformed our vacation into something truly cinematic.", author:"James Sterling", location:"New York" },
  { quote:"The definition of luxury travel. From the seamless airport transfer to the Atlas retreats — absolute perfection.", author:"Sophia Laurent", location:"Paris" },
]

const gallery = [
  { src:"/casablanca tour 2.jpg", alt:"Casablanca Architecture" },
  { src:"/fes tour 6.jpg", alt:"Fes Medina View" },
  { src:"/marrakech tour 6.jpeg", alt:"Marrakech Lifestyle" },
  { src:"/AGAFAY.jpeg", alt:"Agafay Desert Expanse" },
  { src:"/OURIKA.avif", alt:"Ourika Valley Colors" },
  { src:"/tangier tour 3.jpg", alt:"Tangier Coast Escapes" },
]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const s0 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0])
  const s1 = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0])
  const s2 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0])
  const s3 = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1])
  const opacities = [s0, s1, s2, s3]

  const [activeIndex, setActiveIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const onResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  useEffect(() => {
    const t = setInterval(() => setActiveIndex(i => (i + 1) % quotes.length), 7000)
    return () => clearInterval(t)
  }, [])

  const dragLeft = windowWidth ? -((4 * 320 + 3 * 24) - windowWidth + 64) : -960

  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section className="relative h-screen overflow-hidden grain">
        <video ref={videoRef} autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/backgroundvid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <SectionLabel>A Journey Into Silence</SectionLabel>
            </motion.div>
            <motion.h1 className="font-display text-6xl lg:text-8xl text-alabaster mt-4 leading-none" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
              Moroccan
            </motion.h1>
            <motion.h1 className="font-display text-6xl lg:text-8xl text-sandstone italic leading-none" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
              Mirage
            </motion.h1>
            <motion.p className="font-body text-lg text-alabaster/70 max-w-lg mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
              Curated luxury travel across Morocco's most iconic landscapes. Where the golden Sahara meets the silence of the Atlas peaks.
            </motion.p>
            <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}>
              <Button href="/contact" variant="primary" showArrow>Begin Your Journey</Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="text-alabaster/60" size={28} />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — EXPERIENCE SHOWCASE */}
      <section className="bg-obsidian-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll><SectionLabel>Curated Experiences</SectionLabel></RevealOnScroll>
          <RevealOnScroll delay={0.1}><h2 className="font-display text-4xl lg:text-6xl italic text-alabaster mt-4 mb-6">Journeys Designed for the Discerning</h2></RevealOnScroll>
          <RevealOnScroll delay={0.2}><p className="font-body text-alabaster/60 max-w-2xl">We don't just offer destinations — we craft emotional landscapes. Every journey is an intimate dialogue with Morocco's soul.</p></RevealOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {cards.map(card => (
              <StaggerItem key={card.num}>
                <div className="group relative overflow-hidden bg-obsidian border border-sandstone/10 hover:border-sandstone/30 transition-colors duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={card.img} alt={card.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <div className="p-8">
                    <span className="font-display text-5xl text-sandstone/30 font-bold">{card.num}</span>
                    <h3 className="font-display text-2xl text-alabaster italic mt-2 mb-3">{card.title}</h3>
                    <p className="font-body text-sm text-alabaster/60 leading-relaxed mb-6">{card.desc}</p>
                    <Link href={card.href} className="inline-flex items-center gap-2 text-sandstone text-xs font-body font-medium uppercase tracking-widest group/link">
                      <span>{card.cta}</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 3 — STATS & PILLARS */}
      <section className="bg-obsidian py-24 lg:py-32 grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.15}>
                <div className="text-center lg:text-left">
                  <p className="font-display text-6xl lg:text-7xl font-bold text-sandstone"><CountUp end={s.end} suffix={s.suffix} /></p>
                  <p className="font-display text-xl italic text-alabaster mt-2 mb-1">{s.label}</p>
                  <p className="font-body text-xs text-alabaster/50">{s.sub}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="border-t border-sandstone/20 my-16" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map(p => (
              <StaggerItem key={p.title}>
                <div className="border-t-2 border-sandstone/40 pt-6">
                  <h3 className="font-display text-2xl italic text-alabaster mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-alabaster/60 leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 4 — STICKY SCROLL */}
      <section className="bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <SectionLabel>Morocco Unveiled</SectionLabel>
        </div>
        <div ref={containerRef} className="h-[400vh]">
          <div className="sticky top-0 h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-2 will-change-transform">
            <div className="flex flex-col justify-center px-12 lg:px-20 max-w-xl">
              {scenes.map((scene, i) => (
                <motion.div key={scene.title} style={{ opacity: opacities[i] }} className="absolute">
                  <p className="font-body text-xs text-sandstone uppercase tracking-widest mb-4">{scene.subtitle}</p>
                  <h2 className="font-display text-5xl lg:text-7xl italic text-alabaster mb-6">{scene.title}</h2>
                  <p className="font-body text-alabaster/60 leading-relaxed max-w-sm">{scene.body}</p>
                </motion.div>
              ))}
            </div>
            <div className="relative h-full">
              {scenes.map((scene, i) => (
                <motion.div key={scene.img} style={{ opacity: opacities[i] }} className="absolute inset-0 will-change-transform">
                  <Image src={scene.img} alt={scene.alt} fill loading="lazy" className="object-cover" sizes="50vw" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PHILOSOPHY */}
      <section className="bg-obsidian-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll><SectionLabel>Our Philosophy</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-4xl lg:text-6xl italic text-alabaster mt-4 mb-8">More than a ride.<br />A journey inside.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}><p className="font-body text-alabaster/60 leading-relaxed mb-4">We believe how you travel matters as much as where you go. From the moment you land, every detail is orchestrated — so you can lose yourself in the golden light of the dunes, not the logistics.</p></RevealOnScroll>
            <RevealOnScroll delay={0.3}><p className="font-body text-alabaster/60 leading-relaxed mb-8">Our fleet is an extension of modern Moroccan hospitality. Silence, discretion, and absolute comfort are the cornerstones of our service.</p></RevealOnScroll>
            <RevealOnScroll delay={0.4}><p className="font-display italic text-sandstone text-lg">Est. 2018</p></RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.2}>
            <div className="grid grid-rows-2 gap-4 h-[600px]">
              <div className="relative overflow-hidden">
                <Image src="/TOURS FROM MARRAKECH.jpg" alt="Marrakech luxury tour experience" fill loading="lazy" className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              <div className="relative overflow-hidden">
                <Image src="/CHEFCHAOUEN.avif" alt="Chefchaouen blue city" fill loading="lazy" className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 6 — CITIES HORIZONTAL SCROLL */}
      <section className="bg-obsidian py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <RevealOnScroll><SectionLabel>Departure Cities</SectionLabel></RevealOnScroll>
          <RevealOnScroll delay={0.1}><h2 className="font-display text-4xl lg:text-6xl italic text-alabaster mt-4">Where Will You Begin?</h2></RevealOnScroll>
        </div>
        <div className="px-6 lg:px-8">
          <motion.div className="flex gap-6 cursor-grab active:cursor-grabbing" drag="x" dragConstraints={{ right: 0, left: dragLeft }}>
            {cities.map(city => (
              <Link key={city.name} href={city.href} className="relative block w-80 shrink-0 h-[480px] overflow-hidden group border border-transparent hover:border-sandstone/40 transition-colors duration-500">
                <Image src={city.img} alt={city.name} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="320px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block bg-sandstone text-obsidian text-xs font-body font-medium uppercase tracking-widest px-3 py-1 mb-4">{city.tours} Tours</span>
                  <h3 className="font-display text-4xl italic text-alabaster leading-tight">{city.name}</h3>
                  <p className="font-body text-sm text-sandstone mt-1">{city.sub}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="bg-obsidian-light py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealOnScroll><SectionLabel>Voices of the Journey</SectionLabel></RevealOnScroll>
          <div className="mt-16 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                <span className="font-display text-8xl text-sandstone/20 leading-none">"</span>
                <p className="font-display text-2xl lg:text-4xl italic text-alabaster leading-relaxed -mt-8">{quotes[activeIndex].quote}</p>
                <div className="mt-8">
                  <p className="font-body font-medium text-sandstone">{quotes[activeIndex].author}</p>
                  <p className="font-body text-sm text-alabaster/50">{quotes[activeIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-3 mt-10">
            {quotes.map((_, i) => (
              <button key={i} onClick={() => setActiveIndex(i)} className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === activeIndex ? "bg-sandstone" : "bg-sandstone/20"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — GALLERY */}
      <section className="bg-obsidian py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll><SectionLabel>Vol. 01 — Essence of Morocco</SectionLabel></RevealOnScroll>
          <RevealOnScroll delay={0.1}><h2 className="font-display text-4xl lg:text-6xl italic text-alabaster mt-4 mb-2">Visual Diary</h2></RevealOnScroll>
          <RevealOnScroll delay={0.2}><p className="font-body text-alabaster/50 mb-12">A glimpse into the eternal soul of Morocco...</p></RevealOnScroll>
          <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {gallery.map(img => (
              <StaggerItem key={img.src}>
                <div className="relative overflow-hidden mb-4 group break-inside-avoid">
                  <Image src={img.src} alt={img.alt} width={600} height={400} loading="lazy" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/60 transition-all duration-500 flex items-center justify-center">
                    <span className="text-sandstone font-body text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.alt}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 9 — BOOKING CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0">
          <Image src="/AGAFAY.jpeg" alt="Agafay desert landscape" fill loading="lazy" className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-obsidian/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 lg:px-8">
          <RevealOnScroll><SectionLabel light>The Next Step</SectionLabel></RevealOnScroll>
          <RevealOnScroll delay={0.1}><h2 className="font-display text-5xl lg:text-7xl italic text-alabaster mt-6 mb-6">Ready to Begin?</h2></RevealOnScroll>
          <RevealOnScroll delay={0.2}><p className="font-body text-alabaster/70 leading-relaxed mb-10">Contact our concierges to craft a bespoke itinerary tailored entirely to your desires, timeline, and sense of wonder.</p></RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" showArrow>Plan My Journey</Button>
              <Button href="tel:+212777767855" variant="ghost">+212 777-767-855</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
