import Image from "next/image";
import Coordinates from "@/components/atlas/Coordinates";
import Reveal from "@/components/ui/Reveal";

type Props = {
  image: string;
  alt: string;
  label: string;
  title: React.ReactNode;
  sub?: string;
  coordinates?: string;
  meta?: React.ReactNode;
  horizon?: string;
};

/** Shared interior-page opener — a captioned plate from the atlas. */
export default function PageHero({
  image,
  alt,
  label,
  title,
  sub,
  coordinates,
  meta,
  horizon = "70,0,SHEET",
}: Props) {
  return (
    <section
      data-horizon={horizon}
      className="relative flex min-h-[78svh] items-end overflow-hidden bg-abyss"
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/75 via-night/20 to-night" />
      <div
        aria-hidden
        className="corner-ticks pointer-events-none absolute inset-5 hidden border border-bone/10 md:block"
      />

      {coordinates && (
        <div className="absolute right-8 top-[100px] md:right-14">
          <Coordinates value={coordinates} />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-6 pb-16 pt-44 lg:px-12 lg:pb-20">
        <Reveal>
          <p className="plate-label mb-6">{label}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display max-w-5xl text-[clamp(2.6rem,6.4vw,6.2rem)] font-light leading-[1.02] tracking-[-0.01em] text-bone">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-relaxed text-bone-dim">{sub}</p>
          </Reveal>
        )}
        {meta && (
          <Reveal delay={0.22}>
            <div className="mt-9">{meta}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
