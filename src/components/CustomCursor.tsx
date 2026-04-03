"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="cursor-glow hidden md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.1,
      }}
    />
  );
}
