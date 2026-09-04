"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import HeroScene from '@/components/HeroScene';
import { useEffect, useState, useRef } from 'react';

const IMPACT = [
  {n: 50, s: '+', l: 'Schools Reached'},
  {n: 10000, s: '+', l: 'Students Engaged'},
  {n: 500, s: '+', l: 'Projects Built'},
  {n: 200, s: '+', l: 'Workshops Delivered'},
  {n: 30, s: '+', l: 'Innovation Labs'},
  {n: 150, s: '+', l: 'Teachers Trained'}
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if(inView) {
      let cur = 0;
      const step = Math.max(1, Math.round(value / 60));
      const t = setInterval(() => {
        cur += step;
        if(cur >= value) {
          cur = value;
          clearInterval(t);
        }
        setCount(cur);
      }, 20);
      return () => clearInterval(t);
    }
  }, [inView, value]);

  return <div ref={ref} className="cnum">{count.toLocaleString()}{suffix}</div>;
}

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="blueprint-grid"></div>
        <div className="hero-grid wrap">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-tag">Welcome to Innverse</div>
            <h1>Empowering <span className="hl">Next-Gen</span> Innovators</h1>
            <p>We partner with schools to build complete ecosystems for AI, Robotics, Coding, IoT, and Electronics. Not just activities. Real systems.</p>
            <div className="hero-ctas">
              <Link href="/programs" className="btn btn-orange">Explore Programs</Link>
              <Link href="/contact" className="btn btn-outline-light">Partner With Us</Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ height: '500px', width: '100%', position: 'relative' }}
          >
            <Canvas camera={{ position: [0, 0, 8] }}>
              <HeroScene />
            </Canvas>
          </motion.div>
        </div>
      </section>

      <section id="why">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Why Innverse</div>
            <h2>Beyond the Theory</h2>
            <p>Most tech education stops at the screen. We bridge the gap between digital code and physical reality, giving students the tools and mindset to solve tangible problems.</p>
          </div>
          
          <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px' }}>
            {IMPACT.map((item, i) => (
              <motion.div 
                key={i} 
                className="impact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow)' }}
              >
                <AnimatedCounter value={item.n} suffix={item.s} />
                <div className="clabel" style={{ color: 'var(--ink-soft)', fontSize: '14px', fontWeight: '600', marginTop: '10px' }}>{item.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        #home {
          padding: 180px 0 120px;
          background:
            radial-gradient(ellipse 900px 500px at 82% 8%, rgba(245,130,32,.20), transparent 60%),
            radial-gradient(ellipse 700px 500px at 8% 90%, rgba(15,181,166,.18), transparent 60%),
            linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-soft) 100%);
          color: #fff; overflow: hidden; position: relative;
        }
        .blueprint-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(90deg, rgba(0,174,239,.10) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,174,239,.10) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 900px 600px at 60% 20%, #000 40%, transparent 80%);
        }
        .hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 60px; align-items: center; position: relative; z-index: 1; }
        .hero-copy h1 { font-size: 52px; font-weight: 800; color: #fff; margin: 18px 0 20px; }
        .hero-copy h1 .hl { color: var(--orange); }
        .hero-tag { font-size: 19px; font-weight: 600; color: var(--electric); margin-bottom: 14px; }
        .hero-copy p { font-size: 16.5px; color: rgba(255,255,255,.72); max-width: 520px; margin-bottom: 34px; line-height: 1.75; }
        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn {
          display: inline-flex; align-items: center; gap: 9px; padding: 15px 28px; border-radius: 9px;
          font-size: 14px; font-weight: 700; letter-spacing: .03em; text-transform: uppercase; border: none;
          transition: transform .15s, box-shadow .15s, background .15s; cursor: pointer; text-decoration: none;
        }
        .btn:active { transform: translateY(1px); }
        .btn-orange { background: var(--orange); color: #fff; box-shadow: 0 10px 26px rgba(245,130,32,.32); }
        .btn-orange:hover { background: var(--orange-deep); box-shadow: 0 12px 30px rgba(245,130,32,.4); }
        .btn-outline-light { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.5); }
        .btn-outline-light:hover { background: #fff; color: var(--navy); }
        .cnum { font-size: 42px; font-family: 'Space Grotesk'; font-weight: 800; color: var(--teal-deep); }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-copy p { margin: 0 auto 34px; }
          .hero-ctas { justify-content: center; }
        }
      `}</style>
    </>
  );
}
