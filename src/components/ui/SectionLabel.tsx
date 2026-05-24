"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`block h-px w-8 ${light ? "bg-sandstone-light" : "bg-sandstone"}`} />
      <span
        className={`font-body text-xs font-medium uppercase tracking-[0.3em] ${
          light ? "text-sandstone-light" : "text-sandstone"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
