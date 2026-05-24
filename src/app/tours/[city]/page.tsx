import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Star } from "lucide-react"
import { getToursByCity, getCityBySlug } from "@/data/tours"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button"
import RevealOnScroll, { StaggerContainer, StaggerItem } from "@/components/ui/RevealOnScroll"

export async function generateStaticParams() {
  return ["marrakech", "casablanca", "tangier", "fes"].map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) return { title: "Tours — Moroccan Mirage" }
  return {
    title: `${cityData.name} Tours — Moroccan Mirage`,
    description: `Luxury tours departing from ${cityData.name}. ${cityData.tourCount} curated itineraries across Morocco's most iconic landscapes.`,
  }
}

export default async function CityToursPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) notFound()
  const cityTours = getToursByCity(city)

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero banner */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        <Image
          src={cityData.image}
          alt={cityData.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 to-obsidian/80" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-body text-alabaster/50 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-sandstone transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/tours" className="hover:text-sandstone transition-colors">
              Tours
            </Link>
            <ChevronRight size={12} />
            <span className="text-sandstone">{cityData.name}</span>
          </nav>
          <SectionLabel light className="mb-3">
            Departing from {cityData.name}
          </SectionLabel>
          <h1 className="font-display text-4xl lg:text-6xl italic text-alabaster">
            {cityData.name} Tours
          </h1>
          <p className="font-body text-alabaster/60 mt-2">
            {cityData.tourCount} curated itineraries
          </p>
        </div>
      </div>

      {/* Tours grid */}
      <div className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityTours.map((tour) => (
            <StaggerItem key={tour.id}>
              <Link
                href={`/tours/${city}/${tour.id}`}
                className="group block bg-obsidian-light border border-sandstone/10 hover:border-sandstone/30 transition-colors duration-500 overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-sandstone text-obsidian text-xs font-body font-medium uppercase tracking-widest px-3 py-1">
                    {tour.duration} · {tour.nights}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl italic text-alabaster leading-tight mb-3 group-hover:text-sandstone transition-colors duration-300">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-body text-alabaster/50 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {tour.route}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={12} className="fill-sandstone text-sandstone" />
                      4.9
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-sandstone/10">
                    <span className="font-body text-xs text-alabaster/40 uppercase tracking-widest">
                      Contact for Price
                    </span>
                    <span className="text-sandstone text-xs font-body uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">
                      View Tour →
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA banner */}
        <RevealOnScroll className="mt-20">
          <div className="bg-obsidian-light border border-sandstone/20 p-12 text-center grain">
            <SectionLabel className="mb-4 justify-center">Ready to Book?</SectionLabel>
            <h2 className="font-display text-3xl lg:text-5xl italic text-alabaster mb-6">
              Let Us Craft Your Perfect Itinerary
            </h2>
            <p className="font-body text-alabaster/60 mb-8 max-w-lg mx-auto">
              Our concierge team is ready to tailor any tour to your exact requirements.
            </p>
            <Button href="/contact" variant="primary" showArrow>
              Inquire Now
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
