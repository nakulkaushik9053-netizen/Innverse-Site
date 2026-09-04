"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroScene() {
  const meshRef = useRef();
  const innerMeshRef = useRef();
  const pointsRef = useRef();

  // Generate particles
  const count = 140;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [new THREE.Color(0x00AEEF), new THREE.Color(0xF58220), new THREE.Color(0x0FB5A6)];
  
  for(let i=0; i<count; i++) {
    const r = 3.2 + Math.random() * 3.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i*3+2] = r * Math.cos(phi);
    const c = palette[i % palette.length];
    colors[i*3] = c.r; colors[i*3+1] = c.g; colors[i*3+2] = c.b;
  }

  useFrame((state, delta) => {
    if(meshRef.current) {
      meshRef.current.rotation.y += delta * 0.13;
      meshRef.current.rotation.x += delta * 0.06;
    }
    if(innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.11;
      innerMeshRef.current.rotation.x += delta * 0.08;
    }
    if(pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.04;
    }
    
    // Slight parallax on mouse move
    const mouseX = (state.pointer.x * 1.1 - state.camera.position.x) * 0.03;
    const mouseY = (state.pointer.y * 1.1 - state.camera.position.y) * 0.03;
    state.camera.position.x += mouseX;
    state.camera.position.y += mouseY;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[2.6, 1]}>
        <meshBasicMaterial color={0x00AEEF} wireframe transparent opacity={0.32} />
      </Icosahedron>
      <Icosahedron ref={innerMeshRef} args={[1.43, 0]}>
        <meshBasicMaterial color={0xF58220} wireframe transparent opacity={0.22} />
      </Icosahedron>
      <Points ref={pointsRef} positions={positions} colors={colors}>
        <PointMaterial size={0.085} vertexColors transparent opacity={0.85} sizeAttenuation />
      </Points>
    </group>
  );
}
