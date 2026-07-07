import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/atlas/PageHero";
import Reveal from "@/components/ui/Reveal";
import AtlasLink from "@/components/ui/AtlasLink";
import { CITY_IDS, CITY_META, TOURS_BY_CITY, type CityId } from "@/data/tours";

export function generateStaticParams() {
  return CITY_IDS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const meta = CITY_META[city as CityId];
  if (!meta) return {};
  return {
    title: `Tours from ${meta.name}`,
    description: meta.intro,
    alternates: { canonical: `/tours/${city}` },
    openGraph: {
      title: `Tours from ${meta.name} — Moroccan Mirage`,
      description: meta.intro,
      url: `/tours/${city}`,
      type: "website",
      images: [{ url: meta.hero, width: 1920, height: 1080, alt: `${meta.name} — ${meta.epithet}` }],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  if (!CITY_IDS.includes(city as CityId)) notFound();
  const cityId = city as CityId;
  const meta = CITY_META[cityId];
  const tours = TOURS_BY_CITY(cityId);

  return (
    <main>
      <PageHero
        image={meta.hero}
        alt={`${meta.name} — ${meta.epithet}`}
        label={`Chart — Departures from ${meta.name}`}
        title={
          <>
            {meta.name} <span className="italic text-amber">— {meta.epithet}</span>
          </>
        }
        sub={meta.intro}
        coordinates={meta.coordinates}
        horizon={`72,0,${meta.name.toUpperCase()}`}
      />

      <section data-horizon="46,-2,ROUTES" className="bg-night py-24 md:py-32">
        <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
          <Reveal>
            <p className="plate-label mb-14">
              {String(tours.length).padStart(2, "0")} itineraries — surveyed &amp; sequenced
            </p>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {tours.map((tour, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={tour.id}>
                  <article
                    className={`group grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 ${
                      flip ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* plate */}
                    <Link
                      href={`/tours/${cityId}/${tour.id}`}
                      className="corner-ticks block border border-bone/10 p-3 transition-colors duration-500 hover:border-gold/40"
                    >
                      <div className="img-grade relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          fill
                          sizes="(min-width: 1024px) 46vw, 92vw"
                          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                        />
                        <span className="absolute left-4 top-3 z-10 font-mono text-[10px] tracking-[0.3em] text-bone/90 uppercase">
                          Route {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </Link>

                    {/* ledger entry */}
                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="font-mono text-[11px] tracking-[0.26em] text-gold uppercase">
                          {tour.days} Days / {tour.nights} Nights
                        </span>
                        <span className="mono-note">
                          {tour.start} ⟶ {tour.end}
                        </span>
                        <span className="mono-note">★ {tour.reviews} reviews</span>
                      </div>

                      <h2 className="font-display mt-5 text-[clamp(1.9rem,3.4vw,3.2rem)] font-light leading-[1.1] text-bone transition-colors duration-500 group-hover:text-amber">
                        <Link href={`/tours/${cityId}/${tour.id}`}>{tour.title}</Link>
                      </h2>

                      <p className="font-display mt-4 text-lg italic text-amber/90">{tour.tagline}</p>
                      <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted">
                        {tour.summary}
                      </p>

                      <div className="mt-8">
                        <AtlasLink href={`/tours/${cityId}/${tour.id}`} variant="bare">
                          View full itinerary
                        </AtlasLink>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
