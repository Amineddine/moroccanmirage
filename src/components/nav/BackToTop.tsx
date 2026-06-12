"use client";

import { useLenis } from "lenis/react";

export default function BackToTop() {
  const lenis = useLenis();

  return (
    <button
      onClick={() => {
        if (lenis) lenis.scrollTo(0, { duration: 1.8 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group flex h-fit items-center gap-3 self-start font-mono text-[10px] tracking-[0.3em] text-gold uppercase transition-colors hover:text-amber"
    >
      Back to Top
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
      >
        ↑
      </span>
    </button>
  );
}
