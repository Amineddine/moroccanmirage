import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/tours"
import SectionLabel from "@/components/ui/SectionLabel"
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll"

export const metadata: Metadata = {
  title: "Morocco Tours — Moroccan Mirage",
  description:
    "Select your starting point and embark on an unforgettable journey across the dunes, mountains, and ancient medinas of Morocco.",
}

export default function ToursPage() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-20">
          <SectionLabel className="mb-4">Departure Cities</SectionLabel>
          <h1 className="font-display text-5xl lg:text-7xl italic text-alabaster mb-6">
            Discover Your Morocco
          </h1>
          <p className="font-body text-lg text-alabaster/60 max-w-2xl leading-relaxed">
            Select your starting point and embark on an unforgettable journey across the dunes,
            mountains, and ancient medinas.
          </p>
        </RevealOnScroll>

        {/* City cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city) => (
            <StaggerItem key={city.slug}>
              <Link
                href={city.href}
                className="group relative block overflow-hidden aspect-[3/4] border border-sandstone/10 hover:border-sandstone/40 transition-colors duration-500"
              >
                <Image
                  src={city.image}
                  alt={city.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-sandstone text-obsidian text-xs font-body font-medium uppercase tracking-widest px-3 py-1 mb-4">
                    {city.tourCount} Tours
                  </span>
                  <h2 className="font-display text-5xl italic text-alabaster leading-tight">
                    {city.name}
                  </h2>
                  <p className="font-body text-sm text-sandstone mt-2">{city.subtitle}</p>
                  <div className="flex items-center gap-2 mt-6 text-alabaster/60 text-xs font-body uppercase tracking-widest group-hover:text-sandstone transition-colors">
                    <span>Explore Tours</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
