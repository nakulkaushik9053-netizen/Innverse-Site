"use client";
import { SITE_DATA } from '../data/siteContent';

export default function HardwareKitsShowcase() {
  const data = SITE_DATA.hardwareKits;

  return (
    <section className="kits-section" id="hardware-kits">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
          <p>{data.subtext}</p>
        </div>

        <div className="kits-grid">
          {data.kits.map((kit) => (
            <div key={kit.id} className="kit-card glass-card">
              <div className="kit-top">
                <span className="kit-badge">{kit.badge}</span>
                <span className="kit-cat">{kit.category}</span>
              </div>

              <div className="kit-title-row">
                <span className="kit-ic">{kit.icon}</span>
                <h3>{kit.name}</h3>
              </div>

              <p className="kit-desc">{kit.desc}</p>

              <div className="kit-features-box">
                <h5>Key Hardware Highlights:</h5>
                <ul>
                  {kit.features.map((feat, i) => (
                    <li key={i}>✓ {feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .kits-section {
          padding: 100px 0;
          background: rgba(11, 25, 44, 0.4);
          border-top: 1px solid var(--line);
        }

        .kits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .kit-card {
          padding: 30px;
          border-radius: 16px;
          background: rgba(11, 25, 44, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .kit-card:hover {
          transform: translateY(-4px);
          border-color: var(--orange);
        }

        .kit-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .kit-badge {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--orange);
          background: rgba(245, 130, 32, 0.12);
          padding: 3px 10px;
          border-radius: 12px;
        }

        .kit-cat {
          font-size: 0.78rem;
          color: var(--ink-soft);
          font-weight: 600;
        }

        .kit-title-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .kit-ic {
          font-size: 1.8rem;
          line-height: 1;
        }

        .kit-title-row h3 {
          font-size: 1.2rem;
          color: var(--white);
          line-height: 1.3;
        }

        .kit-desc {
          font-size: 0.9rem;
          color: #94A3B8;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .kit-features-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 16px;
          border-radius: 10px;
          margin-top: auto;
        }

        .kit-features-box h5 {
          font-size: 0.82rem;
          color: var(--electric);
          text-transform: uppercase;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .kit-features-box ul {
          list-style: none;
          display: grid;
          gap: 8px;
        }

        .kit-features-box li {
          font-size: 0.82rem;
          color: #CBD5E1;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}
