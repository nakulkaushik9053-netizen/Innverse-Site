"use client";
import { SITE_DATA } from '../data/siteContent';

export default function SafetyCompliance() {
  const data = SITE_DATA.safetyCompliance;

  return (
    <section className="safety-section" id="safety">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
          <p>{data.subtext}</p>
        </div>

        <div className="safety-grid">
          {data.pillars.map((item, idx) => (
            <div key={idx} className="safety-card glass-card">
              <span className="safety-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .safety-section {
          padding: 80px 0;
          background: rgba(7, 15, 30, 0.7);
          border-top: 1px solid var(--line);
        }

        .safety-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .safety-card {
          padding: 30px;
          border-radius: 16px;
          background: rgba(11, 25, 44, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 3px solid var(--teal);
          transition: transform 0.2s ease;
        }

        .safety-card:hover {
          transform: translateY(-4px);
        }

        .safety-icon {
          font-size: 2.2rem;
          display: block;
          margin-bottom: 16px;
        }

        .safety-card h4 {
          font-size: 1.15rem;
          color: var(--white);
          margin-bottom: 10px;
        }

        .safety-card p {
          font-size: 0.88rem;
          color: var(--ink-soft);
          line-height: 1.55;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
