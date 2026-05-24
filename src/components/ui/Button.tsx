"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  showArrow?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
  type = "button",
  disabled = false,
  showArrow = false,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLElement>(null);

  const baseStyles =
    "relative inline-flex items-center gap-2 px-8 py-4 text-sm font-body font-medium uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-sandstone text-obsidian hover:bg-sandstone-light border border-sandstone",
    ghost:
      "bg-transparent text-sandstone border border-sandstone hover:bg-sandstone hover:text-obsidian",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          className={`relative z-10 transition-transform duration-300 ${
            isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
          }`}
        />
      )}
    </>
  );

  const sharedProps = {
    className: `${baseStyles} ${variants[variant]} ${className} ${disabled ? "opacity-50 pointer-events-none" : ""}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...sharedProps} ref={buttonRef as React.RefObject<HTMLButtonElement>}>
      {content}
    </button>
  );
}
