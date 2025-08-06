// components/DustParticles.jsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const DustParticles = ({ count = 100 }) => {
  const meshRef = useRef();

  // Memoized particles position buffer
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(50); // spread across x
      const y = Math.random() * 50; // above scene
      const z = THREE.MathUtils.randFloatSpread(60);
      positions.push({ x, y, z, speed: Math.random() * 0.2 + 0.05 });
    }
    return positions;
  }, [count]);

  // Animate falling particles
  useFrame(() => {
    particles.forEach((p) => {
      p.y -= p.speed;
      if (p.y < -20) p.y = 30; // reset when out of view
    });

    // update geometry manually
    meshRef.current.geometry.setFromPoints(
      particles.map((p) => new THREE.Vector3(p.x, p.y, p.z))
    );
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial
        attach="material"
        color="#ffffff"
        size={0.4}
        sizeAttenuation
        transparent
        opacity={0.2}
      />
    </points>
  );
};

export default DustParticles;
