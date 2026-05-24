"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const noHover = window.matchMedia("(hover: none)").matches
    if (noHover) {
      setVisible(false)
      return
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setReducedMotion(reduced)

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest("a, button")) setHovered(true)
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest("a, button")) setHovered(false)
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseenter", onEnter, true)
    document.addEventListener("mouseleave", onLeave, true)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseenter", onEnter, true)
      document.removeEventListener("mouseleave", onLeave, true)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        className="rounded-full pointer-events-none fixed z-[9999]"
        style={{
          width: 12,
          height: 12,
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#C2B2A3",
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        className="rounded-full border border-sandstone pointer-events-none fixed z-[9998]"
        style={{ width: 40, height: 40 }}
        animate={
          reducedMotion
            ? { x: position.x - 20, y: position.y - 20, scale: hovered ? 1.6 : 1 }
            : { x: position.x - 20, y: position.y - 20, scale: hovered ? 1.6 : 1 }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", damping: 30, stiffness: 200 }
        }
      />
    </>
  )
}
