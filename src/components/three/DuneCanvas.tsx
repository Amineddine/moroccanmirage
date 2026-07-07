"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * A slowly breathing wireframe dune field — golden contour lines
 * over the void, like a survey map coming alive.
 */
function DuneField() {
  const ref = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(26, 14, 110, 60);
    geo.rotateX(-Math.PI / 2.25);
    return geo;
  }, []);

  const base = useMemo(() => {
    const arr = (geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    return Float32Array.from(arr);
  }, [geometry]);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime * 0.22;
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      const z = base[i * 3 + 2];
      const dune =
        Math.sin(x * 0.45 + t) * Math.cos(z * 0.5 - t * 0.6) * 0.85 +
        Math.sin(x * 1.4 - t * 0.4) * 0.18;
      pos.setY(i, base[i * 3 + 1] + dune);
    }
    pos.needsUpdate = true;

    // gentle drift toward pointer
    const px = state.pointer.x * 0.35;
    mesh.rotation.z += (px * 0.04 - mesh.rotation.z) * 0.03;
  });

  return (
    <mesh ref={ref} geometry={geometry} position={[0, -2.1, -2]}>
      <meshBasicMaterial
        color="#8f6f14"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default function DuneCanvas({ className = "" }: { className?: string }) {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  if (!desktop || reduced) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.4, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <fog attach="fog" args={["#ebe1ca", 4, 13]} />
        <DuneField />
      </Canvas>
    </div>
  );
}
