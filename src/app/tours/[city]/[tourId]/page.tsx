import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/atlas/PageHero";
import Reveal from "@/components/ui/Reveal";
import AtlasLink from "@/components/ui/AtlasLink";
import RouteItinerary from "@/components/tours/RouteItinerary";
import BookingWidget from "@/components/tours/BookingWidget";
import {
  TOURS,
  getTour,
  CITY_META,
  TOURS_BY_CITY,
  INCLUDED,
  EXCLUDED,
  type CityId,
} from "@/data/tours";

export function generateStaticParams() {
  return TOURS.map((t) => ({ city: t.city, tourId: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; tourId: string }>;
}): Promise<Metadata> {
  const { city, tourId } = await params;
  const tour = getTour(city as CityId, tourId);
  if (!tour) return {};
  return { title: tour.title, description: tour.summary };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ city: string; tourId: string }>;
}) {
  const { city, tourId } = await params;
  const tour = getTour(city as CityId, tourId);
  if (!tour) notFound();
  const cityMeta = CITY_META[tour.city];
  const siblings = TOURS_BY_CITY(tour.city).filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <main>
      <PageHero
        image={tour.hero}
        alt={tour.title}
        label={`Route Dossier — Departing ${cityMeta.name}`}
        title={tour.title}
        sub={tour.tagline}
        coordinates={cityMeta.coordinates}
        horizon="72,0,ROUTE DOSSIER"
        meta={
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Stat label="Duration" value={`${tour.days}D / ${tour.nights}N`} />
            <Stat label="Route" value={`${tour.start} ⟶ ${tour.end}`} />
            <Stat label="Reviews" value={`★ ${tour.reviews}`} />
            <Stat label="Vehicle" value="Luxury 4x4 / Minivan" />
          </div>
        }
      />

      <section data-horizon="46,-2,ITINERARY" className="bg-night py-20 md:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-16 px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:px-12">
          {/* the route */}
          <div>
            <Reveal>
              <p className="text-[16px] leading-[1.85] text-bone-dim">{tour.summary}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-16 mb-12 flex items-center gap-4">
                <span className="plate-label">The Route</span>
                <span className="rule-gold w-16" />
                <span className="mono-note">Day by Day</span>
              </div>
            </Reveal>

            <RouteItinerary itinerary={tour.itinerary} />
          </div>

          {/* the manifest rail */}
          <div className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <BookingWidget defaultCity={tour.city} />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-bone/10 p-7 md:p-9">
                <p className="plate-label">Provisions</p>
                <ul className="mt-6 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-bone-dim">
                      <span aria-hidden className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45 bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="plate-label mt-9 !text-clay">Not Included</p>
                <ul className="mt-5 space-y-3">
                  {EXCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-muted">
                      <span aria-hidden className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45 border border-faint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* sibling routes */}
      {siblings.length > 0 && (
        <section data-horizon="55,2,RELATED" className="border-t border-bone/[0.07] bg-abyss py-20 md:py-28">
          <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <h2 className="font-display text-3xl font-light text-bone md:text-4xl">
                  Other routes from <span className="italic text-amber">{cityMeta.name}</span>
                </h2>
                <AtlasLink href={`/tours/${tour.city}`} variant="bare">
                  All {cityMeta.name} departures
                </AtlasLink>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-px border border-bone/10 bg-bone/10 md:grid-cols-3">
              {siblings.map((s, i) => (
                <Link
                  key={s.id}
                  href={`/tours/${s.city}/${s.id}`}
                  className="group bg-night p-8 transition-colors duration-500 hover:bg-panel"
                >
                  <p className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">
                    {String(i + 1).padStart(2, "0")} — {s.days}D / {s.nights}N · {s.start} ⟶ {s.end}
                  </p>
                  <h3 className="font-display mt-4 text-xl font-light leading-snug text-bone transition-colors duration-300 group-hover:text-amber">
                    {s.title}
                  </h3>
                  <p className="mono-note mt-5 transition-colors group-hover:text-gold">
                    View itinerary →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mono-note">{label}</p>
      <p className="mt-1 font-mono text-[13px] tracking-[0.18em] text-gold uppercase">{value}</p>
    </div>
  );
}
