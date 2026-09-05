"use client";
import { SITE_DATA } from '../data/siteContent';

export default function ImpactStats() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats-grid">
          {SITE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-num">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          padding: 60px 0;
          background: linear-gradient(180deg, rgba(7, 23, 38, 0.8) 0%, rgba(11, 35, 65, 0.9) 100%);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
      `}</style>
    </section>
  );
}
