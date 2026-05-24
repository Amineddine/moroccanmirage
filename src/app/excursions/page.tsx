import type { Metadata } from "next"
import Image from "next/image"
import { excursions } from "@/data/excursions"
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Excursions — Moroccan Mirage",
  description:
    "Curated single-day excursions from Marrakech to the most iconic destinations in Morocco.",
}

export default function ExcursionsPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <RevealOnScroll>
          <SectionLabel className="mb-4">Single Day Escapes</SectionLabel>
          <h1 className="font-display text-5xl lg:text-7xl italic text-alabaster mb-6">
            Curated Excursions
          </h1>
          <p className="font-body text-lg text-alabaster/60 max-w-2xl leading-relaxed">
            Immerse yourself deeply for just a day. From cascading waterfalls to ancient red-clay
            citadels, these exclusive short journeys are designed for maximal impact.
          </p>
        </RevealOnScroll>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {excursions.map((exc) => (
            <StaggerItem key={exc.id}>
              <div className="group bg-obsidian-light border border-sandstone/10 hover:border-sandstone/30 transition-colors duration-500 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={exc.image}
                    alt={exc.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-obsidian/80 backdrop-blur-sm text-sandstone text-xs font-body uppercase tracking-widest px-3 py-1">
                    {exc.duration}
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-xs text-sandstone uppercase tracking-widest mb-2">
                    {exc.location}
                  </p>
                  <h3 className="font-display text-2xl italic text-alabaster mb-3 group-hover:text-sandstone transition-colors duration-300">
                    {exc.title}
                  </h3>
                  <p className="font-body text-sm text-alabaster/60 leading-relaxed mb-6">
                    {exc.description}
                  </p>
                  <Button href="/contact" variant="ghost" className="text-xs py-3 px-6">
                    Inquire Now
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* CTA Banner */}
      <RevealOnScroll className="mt-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-obsidian-light border border-sandstone/20 p-12 text-center grain">
          <SectionLabel className="mb-4 justify-center">Book an Excursion</SectionLabel>
          <h2 className="font-display text-3xl lg:text-5xl italic text-alabaster mb-6">
            Ready for Your Day Escape?
          </h2>
          <Button href="/contact" variant="primary" showArrow>
            Contact Our Team
          </Button>
        </div>
      </RevealOnScroll>
    </div>
  )
}
