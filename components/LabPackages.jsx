"use client";
import Link from 'next/link';
import { SITE_DATA } from '../data/siteContent';

export default function LabPackages() {
  const l = SITE_DATA.labs;

  return (
    <section className="labs-section" id="labs">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{l.eyebrow}</span>
          <h2>{l.heading}</h2>
          <p>Whether setting up your first robotics classroom or building a regional Center of Excellence, INNVERSE provides end-to-end lab packages.</p>
        </div>

        <div className="packages-grid">
          {l.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{pkg.name}</h3>
              <p className="package-tagline">{pkg.tagline}</p>

              <div className="package-specs">
                <span>👥 {pkg.capacity}</span>
                <span>📐 {pkg.space}</span>
              </div>

              <ul className="package-list">
                {pkg.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`btn ${pkg.popular ? 'btn-orange' : 'btn-outline'}`}
              >
                Request Proposal ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
