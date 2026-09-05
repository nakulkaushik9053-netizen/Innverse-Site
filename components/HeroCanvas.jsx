"use client";
import dynamic from 'next/dynamic';

const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const HeroScene = dynamic(
  () => import('./HeroScene'),
  { ssr: false }
);

export default function HeroCanvas() {
  return (
    <div className="hero-canvas-container">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <HeroScene />
      </Canvas>
      <style jsx>{`
        .hero-canvas-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
