import Reveal from "@/components/ui/Reveal";

type Props = {
  plate: string;
  label: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Atlas section heading — "PLATE 03 · DEPARTURES" over an editorial serif title. */
export default function PlateHeading({ plate, label, title, align = "left", className = "" }: Props) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <Reveal>
        <div
          className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}
        >
          <span className="plate-label">{plate}</span>
          <span className="rule-gold w-16" />
          <span className="mono-note">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-6 text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.02] font-light tracking-[-0.01em] text-bone">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
