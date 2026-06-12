"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Mono coordinate stamp that types itself in when scrolled into view. */
export default function Coordinates({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || reduced) return;
    if (count >= value.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 34);
    return () => clearTimeout(t);
  }, [started, count, value.length, reduced]);

  const shown = reduced ? value : started ? value.slice(0, count) : "";

  return (
    <span
      ref={ref}
      className={`font-mono text-[11px] tracking-[0.22em] text-gold uppercase ${className}`}
    >
      {shown}
      {!reduced && started && count < value.length && (
        <span className="animate-pulse">▏</span>
      )}
    </span>
  );
}
