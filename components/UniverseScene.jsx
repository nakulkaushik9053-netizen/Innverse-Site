"use client";
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Stars, Float, Sparkles } from '@react-three/drei';
import HTMLContent from './HTMLContent';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function TechObjects() {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={group}>
      {/* Floating Icosahedrons representing Tech Nodes */}
      {[...Array(15)].map((_, i) => (
        <Float 
          key={i} 
          speed={1.5} 
          rotationIntensity={2} 
          floatIntensity={3}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20 - 5
          ]}
        >
          <mesh>
            <icosahedronGeometry args={[Math.random() * 0.5 + 0.2, 0]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#F58220" : "#00AEEF"} 
              wireframe 
              emissive={i % 3 === 0 ? "#F58220" : "#00AEEF"}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
      <Sparkles count={500} scale={20} size={2} speed={0.4} opacity={0.4} color="#0FB5A6" />
    </group>
  );
}

export default function UniverseScene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0B2341' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#071726']} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ScrollControls pages={5} damping={0.2}>
          {/* 3D Scene that moves with scroll */}
          <Scroll>
            <TechObjects />
          </Scroll>
          
          {/* HTML Overlays bound to scroll positions */}
          <Scroll html style={{ width: '100%' }}>
            <HTMLContent />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
