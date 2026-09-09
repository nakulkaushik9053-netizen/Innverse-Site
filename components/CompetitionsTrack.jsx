"use client";
import { SITE_DATA } from '../data/siteContent';

export default function CompetitionsTrack() {
  const data = SITE_DATA.competitions;

  return (
    <section className="competitions-section" id="competitions">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
          <p>{data.subtext}</p>
        </div>

        <div className="competitions-grid">
          {data.events.map((evt, idx) => (
            <div key={idx} className="comp-card glass-card">
              <div className="comp-top">
                <span className="comp-ic">{evt.icon}</span>
                <span className="comp-tag">{evt.tag}</span>
              </div>
              <h4>{evt.name}</h4>
              <p>{evt.desc}</p>
            </div>
          ))}
        </div>

        <div className="mentor-callout glass-card">
          <div className="callout-icon">🏆</div>
          <div className="callout-text">
            <strong>Championship Mentorship Guarantee:</strong>
            <p>{data.highlight}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .competitions-section {
          padding: 100px 0;
          background: radial-gradient(circle at center top, rgba(255, 184, 0, 0.08) 0%, rgba(7, 15, 30, 0.95) 70%);
          border-top: 1px solid var(--line);
        }

        .competitions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 36px;
        }

        .comp-card {
          padding: 24px;
          border-radius: 14px;
          background: rgba(11, 25, 44, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.2s, border-color 0.2s;
        }

        .comp-card:hover {
          transform: translateY(-3px);
          border-color: var(--gold);
        }

        .comp-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .comp-ic {
          font-size: 1.8rem;
        }

        .comp-tag {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--gold);
          background: rgba(255, 184, 0, 0.12);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .comp-card h4 {
          font-size: 1.05rem;
          color: var(--white);
          margin-bottom: 8px;
        }

        .comp-card p {
          font-size: 0.82rem;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        .mentor-callout {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 30px;
          border-radius: 14px;
          background: rgba(255, 184, 0, 0.08);
          border: 1px solid rgba(255, 184, 0, 0.25);
        }

        .callout-icon {
          font-size: 2.2rem;
        }

        .callout-text strong {
          font-size: 1rem;
          color: var(--gold);
          display: block;
          margin-bottom: 4px;
        }

        .callout-text p {
          font-size: 0.9rem;
          color: #E2E8F0;
          margin: 0;
        }

        @media (max-width: 768px) {
          .mentor-callout {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
