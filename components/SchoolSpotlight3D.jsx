"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../data/siteContent';

export default function SchoolSpotlight3D() {
  const spot = SITE_DATA.schoolSpotlight;
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="school-spotlight-section">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{spot.eyebrow}</span>
          <h2>{spot.heading}</h2>
          <p>{spot.subtext}</p>
        </div>

        {/* 3D/4D Image Gallery Grid */}
        <div className="spotlight-3d-grid">
          {spot.gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{
                rotateY: (idx % 2 === 0 ? 4 : -4),
                rotateX: (idx < 2 ? -4 : 4),
                scale: 1.03,
                translateZ: 20
              }}
              className="card-3d-wrapper"
              onClick={() => setActiveItem(item)}
            >
              <div className="card-3d-inner">
                <div className="img-frame">
                  <img src={item.image} alt={item.title} className="spotlight-img" />
                  <div className="img-overlay">
                    <span className="badge-3d">{item.badge}</span>
                    <span className="location-tag">📍 {item.location}</span>
                  </div>
                </div>

                <div className="card-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="click-hint">🔍 Tap to expand view</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Quote Banner */}
        <div className="quote-banner-3d">
          <div className="banner-badge">Official INNVERSE x Global Wisdom Poster</div>
          <h3>"{spot.quote}"</h3>
          <p>
            Coding &amp; Robotics teach students how to think logically, solve real-world challenges, and transform creative ideas into working physical systems.
          </p>
          <div className="partner-logos-row">
            <span className="partner-chip">🏫 Global Wisdom International School (Dera Bassi)</span>
            <span className="partner-chip glow">⚡ Powered by INNVERSE</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActiveItem(null)}>
                ✕
              </button>
              <div className="lightbox-img-wrap">
                <img src={activeItem.image} alt={activeItem.title} className="lightbox-img" />
              </div>
              <div className="lightbox-info">
                <span className="badge-3d" style={{ display: 'inline-block', marginBottom: '8px' }}>
                  {activeItem.badge}
                </span>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.desc}</p>
                <div className="lightbox-footer">
                  <span>📍 {activeItem.location}</span>
                  <span>Partner: Global Wisdom International School</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .school-spotlight-section {
          padding: 90px 0;
          background: radial-gradient(circle at center, rgba(11, 35, 65, 0.9) 0%, rgba(7, 23, 38, 1) 100%);
          position: relative;
          overflow: hidden;
        }

        .spotlight-3d-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          perspective: 1200px;
        }

        .card-3d-wrapper {
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-3d-inner {
          background: rgba(11, 35, 65, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .img-frame {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #000;
        }

        .spotlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card-3d-wrapper:hover .spotlight-img {
          transform: scale(1.08);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7, 23, 38, 0.9) 100%);
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .badge-3d {
          align-self: flex-start;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(245, 130, 32, 0.85);
          color: #fff;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(245, 130, 32, 0.4);
        }

        .location-tag {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }

        .card-caption {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-caption h4 {
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 8px;
        }

        .card-caption p {
          font-size: 0.88rem;
          color: var(--ink-soft);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .click-hint {
          font-size: 11px;
          font-weight: 700;
          color: var(--electric);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quote-banner-3d {
          margin-top: 56px;
          background: linear-gradient(135deg, rgba(245, 130, 32, 0.15), rgba(0, 174, 239, 0.15));
          border: 1px solid rgba(245, 130, 32, 0.3);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .banner-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--orange);
          background: rgba(245, 130, 32, 0.2);
          padding: 4px 16px;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .quote-banner-3d h3 {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .quote-banner-3d p {
          font-size: 1.05rem;
          color: var(--ink-soft);
          max-width: 720px;
          margin: 0 auto 24px;
        }

        .partner-logos-row {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .partner-chip {
          font-size: 12px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .partner-chip.glow {
          border-color: var(--orange);
          color: var(--orange);
          background: rgba(245, 130, 32, 0.15);
        }

        /* Lightbox */
        .lightbox-content {
          background: #0B2341;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          max-width: 760px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
          position: relative;
        }

        .lightbox-img-wrap {
          width: 100%;
          max-height: 440px;
          overflow: hidden;
          background: #000;
        }

        .lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .lightbox-info {
          padding: 28px;
        }

        .lightbox-info h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 8px;
        }

        .lightbox-info p {
          color: var(--ink-soft);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .lightbox-footer {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--orange);
          font-weight: 700;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 14px;
        }
      `}</style>
    </section>
  );
}
