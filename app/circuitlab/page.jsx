'use client';

import Link from 'next/link';
import { SITE_DATA } from '../../data/siteContent';
import SchoolSpotlight3D from '../../components/SchoolSpotlight3D';

export default function CircuitLabPage() {


  const p = SITE_DATA.product;

  return (
    <div className="circuitlab-page" style={{ paddingTop: '100px' }}>
      <section className="subpage-hero">
        <div className="wrap center">
          <span className="eyebrow">Interactive Hardware Simulation</span>
          <h1 className="hero-title">CIRCUITLAB SIMULATOR</h1>
          <p className="hero-sub center" style={{ margin: '0 auto 24px' }}>
            {p.description}
          </p>

          <div className="cta-row center" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a
              href="/innverse-website.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange"
            >
              Launch Live Simulator ↗
            </a>
            <Link href="/contact" className="btn btn-outline">
              Request School License
            </Link>
          </div>
        </div>
      </section>

      <section className="sim-features-section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">Key Capabilities</span>
            <h2>Why Schools & Students Love CircuitLab</h2>
          </div>

          <div className="feats-grid">
            <div className="glass-card feat-box">
              <span className="feat-ic">⚡</span>
              <h3>14+ Hardware Components</h3>
              <p>Simulate LDRs, MQ-2 gas sensors, ultrasonic HC-SR04, servo motors, relays, LCD 16x2 screens, and push buttons.</p>
            </div>

            <div className="glass-card feat-box">
              <span className="feat-ic">📚</span>
              <h3>18 Ready-Made Projects</h3>
              <p>Explore built-in starter templates for automatic dustbins, street lights, gas alarms, and line-following logic.</p>
            </div>

            <div className="glass-card feat-box">
              <span className="feat-ic">💻</span>
              <h3>Real-Time C++ Execution</h3>
              <p>Students write standard Arduino C++ code in the browser and see pin outputs, Serial Monitor logs, and motor movements instantly.</p>
            </div>

            <div className="glass-card feat-box">
              <span className="feat-ic">🌐</span>
              <h3>Zero Setup Required</h3>
              <p>Runs natively in modern web browsers across Chromebooks, tablets, laptops, and smartboards with zero installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL STUDENTS & ROBOTS SPOTLIGHT */}
      <SchoolSpotlight3D />

      <style jsx>{`
        .subpage-hero {
          padding: 80px 0 50px;
          background: radial-gradient(circle at top, rgba(0, 174, 239, 0.2) 0%, rgba(7, 23, 38, 1) 70%);
        }

        .sim-features-section {
          padding: 80px 0;
        }

        .feats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .feat-box {
          display: flex;
          flex-direction: column;
        }

        .feat-ic {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .feat-box h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .feat-box p {
          font-size: 0.9rem;
          color: var(--ink-soft);
        }
      `}</style>
    </div>
  );
}
