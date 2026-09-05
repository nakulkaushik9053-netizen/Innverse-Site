"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Torus, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroScene() {
  const outerMeshRef = useRef();
  const innerMeshRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();
  const coreRef = useRef();
  const pointsRef = useRef();

  // Generate multi-colored high-density particle galaxy
  const count = 350;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    new THREE.Color(0x00AEEF), // Electric Cyan
    new THREE.Color(0xF58220), // Sunset Orange
    new THREE.Color(0x0FB5A6), // Emerald Teal
    new THREE.Color(0xFFFFFF)  // Bright White
  ];

  for (let i = 0; i < count; i++) {
    const r = 2.8 + Math.random() * 5.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = palette[i % palette.length];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotations
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.y = time * 0.15;
      outerMeshRef.current.rotation.x = Math.sin(time * 0.2) * 0.3;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y = -time * 0.22;
      innerMeshRef.current.rotation.z = time * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.3) * 0.1;
      ringRef.current.rotation.y = time * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 4;
      ring2Ref.current.rotation.y = -time * 0.25;
    }
    if (coreRef.current) {
      const scale = 1 + Math.sin(time * 2) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.cos(time * 0.03) * 0.1;
    }

    // Smooth Interactive Camera Tilt with Inertia
    const targetX = (state.pointer.x * 1.5 - state.camera.position.x) * 0.05;
    const targetY = (state.pointer.y * 1.5 - state.camera.position.y) * 0.05;
    state.camera.position.x += targetX;
    state.camera.position.y += targetY;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      {/* Outer Wireframe Geodesic Sphere */}
      <Icosahedron ref={outerMeshRef} args={[2.8, 2]}>
        <meshStandardMaterial
          color="#00AEEF"
          wireframe
          transparent
          opacity={0.35}
          emissive="#00AEEF"
          emissiveIntensity={0.2}
        />
      </Icosahedron>

      {/* Inner Rotating Tech Core */}
      <Icosahedron ref={innerMeshRef} args={[1.6, 1]}>
        <meshStandardMaterial
          color="#F58220"
          wireframe
          transparent
          opacity={0.45}
          emissive="#F58220"
          emissiveIntensity={0.4}
        />
      </Icosahedron>

      {/* Orbiting Orbital Rings */}
      <Torus ref={ringRef} args={[3.2, 0.02, 16, 100]}>
        <meshBasicMaterial color="#0FB5A6" transparent opacity={0.6} />
      </Torus>

      <Torus ref={ring2Ref} args={[3.6, 0.015, 16, 100]}>
        <meshBasicMaterial color="#00AEEF" transparent opacity={0.4} />
      </Torus>

      {/* Glowing Pulsing Core */}
      <Sphere ref={coreRef} args={[0.5, 32, 32]}>
        <meshBasicMaterial color="#F58220" transparent opacity={0.7} />
      </Sphere>

      {/* High-density Particle Galaxy */}
      <Points ref={pointsRef} positions={positions} colors={colors}>
        <PointMaterial
          size={0.09}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
