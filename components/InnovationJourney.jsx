"use client";
import { SITE_DATA } from '../data/siteContent';

export default function InnovationJourney() {
  const p = SITE_DATA.process;

  return (
    <section className="journey-section">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{p.heading}</h2>
          <p>Our practical methodology trains students to think systematically, debug code, and refine physical prototypes.</p>
        </div>

        <div className="process-grid">
          {p.steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="quote-box">
          <p>"{p.quote}"</p>
        </div>
      </div>

      <style jsx>{`
        .journey-section {
          background: rgba(11, 35, 65, 0.3);
        }

        .quote-box {
          margin-top: 50px;
          text-align: center;
          padding: 24px;
          border-radius: 16px;
          background: rgba(245, 130, 32, 0.1);
          border: 1px dashed rgba(245, 130, 32, 0.3);
        }

        .quote-box p {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--orange);
          font-style: italic;
        }
      `}</style>
    </section>
  );
}
