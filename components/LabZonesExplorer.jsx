"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../data/siteContent';

export default function LabZonesExplorer() {
  const data = SITE_DATA.labZones;
  const [selectedZone, setSelectedZone] = useState(data.zones[0]);

  return (
    <section className="lab-zones-section" id="lab-zones">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
          <p>{data.subtext}</p>
        </div>

        <div className="zones-layout">
          {/* Left Zone Selector */}
          <div className="zone-nav-col">
            {data.zones.map((zone) => {
              const isActive = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  className={`zone-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedZone(zone)}
                  style={{
                    borderLeftColor: isActive ? zone.accent : 'transparent'
                  }}
                >
                  <div className="zone-num-ic">
                    <span className="z-num">{zone.number}</span>
                    <span className="z-icon">{zone.icon}</span>
                  </div>
                  <div className="z-info">
                    <h4>{zone.name}</h4>
                    <span className="z-hint">Explore equipment & setup ↗</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed View */}
          <div className="zone-display-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedZone.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="zone-card glass-card"
                style={{ borderTop: `4px solid ${selectedZone.accent}` }}
              >
                <div className="zone-card-top">
                  <span className="zone-badge" style={{ color: selectedZone.accent, background: `${selectedZone.accent}20` }}>
                    Zone {selectedZone.number} • Specialized Maker Area
                  </span>
                  <div className="zone-title-row">
                    <span className="zone-big-ic">{selectedZone.icon}</span>
                    <h3>{selectedZone.name}</h3>
                  </div>
                  <p className="zone-desc">{selectedZone.desc}</p>
                </div>

                <div className="equipment-section">
                  <h5>Institutional Equipment & Workstations:</h5>
                  <div className="eq-grid">
                    {selectedZone.equipment.map((eq, i) => (
                      <div key={i} className="eq-card">
                        <span className="eq-bullet" style={{ color: selectedZone.accent }}>✦</span>
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="zone-footer-callout">
                  <span>⚡ Designed for safety, multi-student collaboration, and zero clutter.</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lab-zones-section {
          padding: 100px 0;
          background: linear-gradient(180deg, rgba(7, 15, 30, 0.95) 0%, rgba(11, 25, 44, 0.9) 100%);
          border-top: 1px solid var(--line);
        }

        .zones-layout {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 32px;
        }

        .zone-nav-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .zone-nav-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 4px solid transparent;
          border-radius: 12px;
          padding: 18px 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .zone-nav-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateX(4px);
        }

        .zone-nav-btn.active {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .zone-num-ic {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .z-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--ink-soft);
        }

        .z-icon {
          font-size: 1.6rem;
        }

        .z-info h4 {
          font-size: 1.05rem;
          color: var(--white);
          margin-bottom: 2px;
        }

        .z-hint {
          font-size: 0.75rem;
          color: var(--ink-soft);
        }

        /* Detail Card */
        .zone-card {
          padding: 36px;
          border-radius: 20px;
          background: rgba(11, 25, 44, 0.85);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .zone-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 14px;
          margin-bottom: 12px;
        }

        .zone-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .zone-big-ic {
          font-size: 2.2rem;
        }

        .zone-title-row h3 {
          font-size: 1.6rem;
          color: var(--white);
        }

        .zone-desc {
          font-size: 1rem;
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .equipment-section h5 {
          font-size: 0.95rem;
          color: var(--white);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .eq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .eq-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 14px;
          border-radius: 8px;
          font-size: 0.88rem;
          color: #E2E8F0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .eq-bullet {
          font-size: 1rem;
        }

        .zone-footer-callout {
          margin-top: 30px;
          padding: 12px 18px;
          background: rgba(0, 174, 239, 0.08);
          border-radius: 8px;
          font-size: 0.82rem;
          color: var(--electric);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .zones-layout {
            grid-template-columns: 1fr;
          }
          .eq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
