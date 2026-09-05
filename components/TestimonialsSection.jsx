"use client";
import { SITE_DATA } from '../data/siteContent';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Trust & Validation</span>
          <h2>What School Leaders Say About INNVERSE</h2>
          <p>Read feedback from principals, STEM coordinators, and technology educators partnering with INNVERSE.</p>
        </div>

        <div className="testimonials-grid">
          {SITE_DATA.testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <div>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-title">
                  {t.title} • {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
