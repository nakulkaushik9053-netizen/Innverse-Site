"use client";
import Link from 'next/link';
import { SITE_DATA } from '../../data/siteContent';
import ImpactStats from '../../components/ImpactStats';
import InnovationJourney from '../../components/InnovationJourney';
import TestimonialsSection from '../../components/TestimonialsSection';

export default function AboutPage() {

  const a = SITE_DATA.about;

  return (
    <div className="about-subpage" style={{ paddingTop: '100px' }}>
      <section className="subpage-hero">
        <div className="wrap center">
          <span className="eyebrow">{a.eyebrow}</span>
          <h1 className="hero-title">{a.heading}</h1>
          <p className="hero-sub center" style={{ margin: '0 auto 30px' }}>
            {a.description}
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="pillars-section">
        <div className="wrap">
          <div className="pillars-grid">
            {a.pillars.map((p, idx) => (
              <div key={idx} className="glass-card pillar-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats />

      {/* 8-STEP METHODOLOGY */}
      <InnovationJourney />

      {/* CURRICULUM RESOURCES & DOWNLOADS */}
      <section className="resources-section" id="resources">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">Downloads & Guides</span>
            <h2>School Leadership & Faculty Resources</h2>
            <p>Download curriculum maps, lab planning guides, and educator handbooks.</p>
          </div>

          <div className="resources-grid">
            {SITE_DATA.resources.map((res, idx) => (
              <div key={idx} className="glass-card resource-card">
                <div className="res-badge">{res.type} • {res.size}</div>
                <h4>{res.title}</h4>
                <p>{res.desc}</p>
                <Link href="/contact" className="btn btn-outline" style={{ marginTop: '16px' }}>
                  Request Document ↗
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      <style jsx>{`
        .subpage-hero {
          padding: 70px 0 40px;
          background: radial-gradient(circle at top, rgba(245, 130, 32, 0.15) 0%, rgba(7, 23, 38, 1) 70%);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .pillar-card {
          border-left: 4px solid var(--electric);
        }

        .pillar-card h3 {
          font-size: 1.4rem;
          color: var(--electric);
          margin-bottom: 10px;
        }

        .resources-section {
          padding: 80px 0;
          background: rgba(7, 23, 38, 0.5);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .resource-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .res-badge {
          font-size: 11px;
          font-weight: 700;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .resource-card h4 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }

        .resource-card p {
          font-size: 0.9rem;
          color: var(--ink-soft);
        }
      `}</style>
    </div>
  );
}
