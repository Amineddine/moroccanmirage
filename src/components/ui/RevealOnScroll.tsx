"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  stagger?: boolean;
  staggerDelay?: number;
  once?: boolean;
}

const directionVariants = {
  up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  down: { hidden: { y: -40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
}) {
  const variants = directionVariants[direction];
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
