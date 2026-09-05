"use client";
import Link from 'next/link';
import { SITE_DATA } from '../../data/siteContent';
import LabPackages from '../../components/LabPackages';

export default function ProgramsPage() {

  const p = SITE_DATA.programs;

  return (
    <div className="programs-subpage">
      <section className="subpage-hero">
        <div className="wrap center">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1 className="hero-title">{p.heading}</h1>
          <p className="hero-sub center" style={{ margin: '0 auto 30px' }}>
            From setting up hardware spaces to providing grade-wise curriculum and faculty training, INNVERSE equips schools with complete innovation systems.
          </p>
        </div>
      </section>

      <section className="programs-grid-section">
        <div className="wrap">
          <div className="programs-detail-grid">
            {p.items.map((item) => (
              <div key={item.id} className="glass-card program-detail-card" id={item.id}>
                <div className="card-top">
                  <span className="prog-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
                <div className="highlights-list">
                  <h5>Key Deliverables:</h5>
                  <ul>
                    {item.highlights.map((h, i) => (
                      <li key={i}>✓ {h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB PACKAGES COMPARISON */}
      <LabPackages />

      <section className="cta-banner">
        <div className="wrap center">
          <h2>Ready To Empower Your Students?</h2>
          <p>Get a custom school proposal tailored to your batch size and lab space.</p>
          <Link href="/contact" className="btn btn-orange">
            Schedule School Consultation ↗
          </Link>
        </div>
      </section>

      <style jsx>{`
        .programs-subpage {
          padding-top: 100px;
        }

        .subpage-hero {
          padding: 80px 0 40px;
          background: radial-gradient(circle at top, rgba(0, 174, 239, 0.15) 0%, rgba(7, 23, 38, 1) 70%);
        }

        .programs-detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 30px;
        }

        .program-detail-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .prog-icon {
          font-size: 36px;
        }

        .card-top h3 {
          font-size: 1.4rem;
        }

        .highlights-list {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .highlights-list h5 {
          font-size: 12px;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .highlights-list ul {
          list-style: none;
        }

        .highlights-list li {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 6px;
        }

        .cta-banner {
          padding: 80px 0;
          background: linear-gradient(135deg, rgba(11, 35, 65, 0.9), rgba(7, 23, 38, 0.95));
          border-top: 1px solid var(--line);
        }

        .cta-banner h2 {
          font-size: 2.4rem;
          margin-bottom: 12px;
        }

        .cta-banner p {
          color: var(--ink-soft);
          margin-bottom: 24px;
        }
      `}</style>
    </div>
  );
}
