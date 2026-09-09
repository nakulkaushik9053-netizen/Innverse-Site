"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../data/siteContent';

export default function CurriculumRoadmap() {
  const data = SITE_DATA.curriculumRoadmap;
  const [activeLevel, setActiveLevel] = useState(data.levels[1]); // Default to Grades 6-8

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
          <p>{data.subtext}</p>
        </div>

        {/* Tab Buttons */}
        <div className="curriculum-tabs">
          {data.levels.map((lvl) => {
            const isSelected = activeLevel.id === lvl.id;
            return (
              <button
                key={lvl.id}
                className={`tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveLevel(lvl)}
                style={{
                  borderColor: isSelected ? lvl.color : 'rgba(255, 255, 255, 0.12)',
                  color: isSelected ? '#fff' : 'var(--ink-soft)'
                }}
              >
                <span className="tab-badge" style={{ color: lvl.color }}>{lvl.badge}</span>
                <span className="tab-grade">{lvl.grade}</span>
                <span className="tab-title">{lvl.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Detailed View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="curriculum-detail-card glass-card"
            style={{ borderTop: `4px solid ${activeLevel.color}` }}
          >
            <div className="detail-header">
              <div>
                <span className="tier-tag" style={{ color: activeLevel.color, background: `${activeLevel.color}22` }}>
                  {activeLevel.grade} • {activeLevel.badge}
                </span>
                <h3>{activeLevel.title}</h3>
                <p className="theme-text">Pedagogical Theme: <em>"{activeLevel.theme}"</em></p>
              </div>
              <div className="hours-badge">
                <span>⏱️ {activeLevel.hours}</span>
              </div>
            </div>

            <div className="detail-grid">
              {/* Left Column: Topics */}
              <div className="detail-col">
                <h4>Core Syllabus & Learning Milestones:</h4>
                <ul className="topics-list">
                  {activeLevel.topics.map((t, i) => (
                    <li key={i}>
                      <span className="bullet" style={{ color: activeLevel.color }}>✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Tools, Capstone & Skills */}
              <div className="detail-col">
                <div className="capstone-box" style={{ borderColor: `${activeLevel.color}44` }}>
                  <span className="cap-label">🏆 Signature Capstone Build:</span>
                  <div className="cap-val">{activeLevel.capstoneProject}</div>
                </div>

                <div className="tools-block">
                  <h5>Tools & Software Used:</h5>
                  <div className="pills-row">
                    {activeLevel.tools.map((tool, i) => (
                      <span key={i} className="tool-pill">{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="skills-block">
                  <h5>Skills Graduated With:</h5>
                  <div className="pills-row">
                    {activeLevel.skills.map((skill, i) => (
                      <span key={i} className="skill-pill" style={{ color: activeLevel.color }}>✓ {skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .curriculum-section {
          padding: 100px 0;
          background: rgba(7, 15, 30, 0.5);
          border-top: 1px solid var(--line);
        }

        .curriculum-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-bottom: 30px;
        }

        .tab-btn {
          background: rgba(11, 25, 44, 0.7);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          padding: 18px 20px;
          border-radius: 12px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .tab-btn:hover {
          background: rgba(17, 34, 58, 0.9);
          transform: translateY(-2px);
        }

        .tab-btn.active {
          background: rgba(17, 34, 58, 1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .tab-badge {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .tab-grade {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .tab-title {
          font-size: 0.8rem;
          line-height: 1.3;
        }

        /* Detail Card */
        .curriculum-detail-card {
          padding: 40px;
          border-radius: 20px;
          background: rgba(11, 25, 44, 0.85);
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 24px;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .tier-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 8px;
        }

        .detail-header h3 {
          font-size: 1.6rem;
          color: var(--white);
          margin-bottom: 6px;
        }

        .theme-text {
          font-size: 0.9rem;
          color: var(--ink-soft);
        }

        .hours-badge span {
          background: rgba(255, 255, 255, 0.08);
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--white);
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .detail-col h4, .detail-col h5 {
          font-size: 1rem;
          color: var(--white);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .topics-list {
          list-style: none;
          display: grid;
          gap: 12px;
        }

        .topics-list li {
          display: flex;
          gap: 12px;
          font-size: 0.95rem;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .bullet {
          font-size: 1.1rem;
        }

        .capstone-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px dashed;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .cap-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--orange);
          display: block;
          margin-bottom: 4px;
        }

        .cap-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
        }

        .tools-block, .skills-block {
          margin-bottom: 20px;
        }

        .pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tool-pill {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 6px;
        }

        .skill-pill {
          background: rgba(255, 255, 255, 0.04);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 850px) {
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .curriculum-detail-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
