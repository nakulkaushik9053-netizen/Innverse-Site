"use client";
import { SITE_DATA } from '../data/siteContent';
import { motion } from 'framer-motion';

export default function HTMLContent() {
  return (
    <div className="scroll-content">
      
      {/* PAGE 1: HERO (0 - 100vh) */}
      <section className="scroll-page hero-page">
        <div className="glass-card main-hero">
          <div className="eyebrow">{SITE_DATA.hero.eyebrow}</div>
          <h1 className="hero-title">{SITE_DATA.hero.heading}</h1>
          <p className="hero-sub">{SITE_DATA.hero.subheading}</p>
          <div className="tagline">{SITE_DATA.hero.tagline}</div>
        </div>
      </section>

      {/* PAGE 2: ABOUT (100vh - 200vh) */}
      <section className="scroll-page about-page">
        <div className="side-content left">
          <div className="eyebrow">{SITE_DATA.about.eyebrow}</div>
          <h2>{SITE_DATA.about.heading}</h2>
          <p>{SITE_DATA.about.description}</p>
          
          <div className="pillars">
            {SITE_DATA.about.pillars.map((p, i) => (
              <div key={i} className="pillar-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 3: PROGRAMS (200vh - 300vh) */}
      <section className="scroll-page programs-page">
        <div className="center-content">
          <div className="eyebrow">{SITE_DATA.programs.eyebrow}</div>
          <h2>{SITE_DATA.programs.heading}</h2>
          <div className="programs-grid">
            {SITE_DATA.programs.items.map((item, i) => (
              <div key={i} className="glass-card prog-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 4: PROCESS (300vh - 400vh) */}
      <section className="scroll-page process-page">
        <div className="side-content right">
          <div className="eyebrow">{SITE_DATA.process.eyebrow}</div>
          <h2>{SITE_DATA.process.heading}</h2>
          <div className="process-steps">
            {SITE_DATA.process.steps.map((step, i) => (
              <div key={i} className="step">
                <span className="step-num">0{i+1}</span>
                <span className="step-name">{step}</span>
              </div>
            ))}
          </div>
          <div className="quote">"{SITE_DATA.process.quote}"</div>
        </div>
      </section>

      {/* PAGE 5: SCHOOLS & CONTACT (400vh - 500vh) */}
      <section className="scroll-page schools-page">
        <div className="glass-card center-content">
          <div className="eyebrow">{SITE_DATA.schools.eyebrow}</div>
          <h2>{SITE_DATA.schools.heading}</h2>
          <ul className="benefits-list">
            {SITE_DATA.schools.benefits.map((b, i) => (
              <li key={i}>✓ {b}</li>
            ))}
          </ul>
          <div className="cta-container">
            <a href="mailto:info@innverse.tech" className="btn-primary">Email INNVERSE</a>
            <a href="https://wa.me/919915114333" target="_blank" rel="noreferrer" className="btn-secondary">WhatsApp</a>
          </div>
        </div>
      </section>

    </div>
  );
}
