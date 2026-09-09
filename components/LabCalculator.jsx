"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function LabCalculator() {
  const [students, setStudents] = useState(600);
  const [gradeTier, setGradeTier] = useState('middle_high'); // 'middle', 'middle_high', 'k12'
  const [labPackage, setLabPackage] = useState('advanced'); // 'starter', 'advanced', 'coe'

  // Calculations
  const batchSize = labPackage === 'starter' ? 30 : labPackage === 'advanced' ? 45 : 60;
  const kitRatio = labPackage === 'coe' ? 2 : 2; // 2 students per kit
  const kitsNeeded = Math.ceil(batchSize / kitRatio);
  const weeklyBatches = Math.ceil(students / batchSize);
  const recommendedSpace = labPackage === 'starter' ? '350 - 500 sq ft' : labPackage === 'advanced' ? '650 - 900 sq ft' : '1000 - 1500 sq ft';
  const facultyTrainingHours = labPackage === 'starter' ? '16 Hours' : labPackage === 'advanced' ? '36 Hours' : '60+ Hours (Year-Round)';

  return (
    <section className="calculator-section" id="roi-calculator">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Interactive School Planner</span>
          <h2>School Innovation Lab & Budget Calculator</h2>
          <p>
            Estimate required hardware kits, optimal room size, weekly scheduling, and NEP-2020 compliance for your school strength.
          </p>
        </div>

        <div className="calc-card glass-card">
          <div className="calc-inputs">
            {/* Input 1: Student Strength */}
            <div className="calc-field">
              <div className="field-header">
                <label>Total Student Strength (Grades 3 - 12)</label>
                <span className="val-badge">{students.toLocaleString()} Students</span>
              </div>
              <input
                type="range"
                min="150"
                max="3000"
                step="50"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="slider"
              />
              <div className="slider-labels">
                <span>150 Students</span>
                <span>1,500 Students</span>
                <span>3,000+ Students</span>
              </div>
            </div>

            {/* Input 2: Grade Span */}
            <div className="calc-field">
              <label>Target Grade Span</label>
              <div className="tier-pills">
                <button
                  type="button"
                  className={`pill-btn ${gradeTier === 'middle' ? 'active' : ''}`}
                  onClick={() => setGradeTier('middle')}
                >
                  Grades 6 - 8 (Middle School)
                </button>
                <button
                  type="button"
                  className={`pill-btn ${gradeTier === 'middle_high' ? 'active' : ''}`}
                  onClick={() => setGradeTier('middle_high')}
                >
                  Grades 6 - 10 (Secondary)
                </button>
                <button
                  type="button"
                  className={`pill-btn ${gradeTier === 'k12' ? 'active' : ''}`}
                  onClick={() => setGradeTier('k12')}
                >
                  Grades 3 - 12 (Full K-12 STEM)
                </button>
              </div>
            </div>

            {/* Input 3: Package Level */}
            <div className="calc-field">
              <label>Select Preferred Lab Tier</label>
              <div className="package-options">
                <div
                  className={`pkg-select-box ${labPackage === 'starter' ? 'selected' : ''}`}
                  onClick={() => setLabPackage('starter')}
                >
                  <div className="pkg-radio">{labPackage === 'starter' && <div className="dot" />}</div>
                  <div>
                    <strong>Starter STEM Lab</strong>
                    <p>Core Arduino & Robotics</p>
                  </div>
                </div>

                <div
                  className={`pkg-select-box popular ${labPackage === 'advanced' ? 'selected' : ''}`}
                  onClick={() => setLabPackage('advanced')}
                >
                  <span className="pop-tag">Recommended</span>
                  <div className="pkg-radio">{labPackage === 'advanced' && <div className="dot" />}</div>
                  <div>
                    <strong>Advanced Innovation Lab</strong>
                    <p>AI, IoT & 3D Prototyping</p>
                  </div>
                </div>

                <div
                  className={`pkg-select-box ${labPackage === 'coe' ? 'selected' : ''}`}
                  onClick={() => setLabPackage('coe')}
                >
                  <div className="pkg-radio">{labPackage === 'coe' && <div className="dot" />}</div>
                  <div>
                    <strong>Center of Excellence</strong>
                    <p>Research & Flagship Maker Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display Panel */}
          <div className="calc-results">
            <div className="results-header">
              <span className="res-badge">Dynamic Blueprint</span>
              <h3>Recommended Lab Configuration</h3>
              <p>Tailored specifically for {students.toLocaleString()} students</p>
            </div>

            <div className="res-grid">
              <div className="res-item">
                <span className="res-label">Batch Capacity</span>
                <span className="res-val">{batchSize} Students</span>
                <small>Ideal 2:1 hands-on station ratio</small>
              </div>

              <div className="res-item">
                <span className="res-label">Hardware Kits</span>
                <span className="res-val">{kitsNeeded} Active Kits</span>
                <small>Modular microcontrollers & sensors</small>
              </div>

              <div className="res-item">
                <span className="res-label">Recommended Space</span>
                <span className="res-val">{recommendedSpace}</span>
                <small>Custom 2D/3D layout included</small>
              </div>

              <div className="res-item">
                <span className="res-label">Weekly Schedule</span>
                <span className="res-val">{weeklyBatches} Batches / Wk</span>
                <small>1 period/week per class section</small>
              </div>

              <div className="res-item">
                <span className="res-label">Faculty Training</span>
                <span className="res-val">{facultyTrainingHours}</span>
                <small>Masterclass & slide decks included</small>
              </div>

              <div className="res-item">
                <span className="res-label">NEP Compliance</span>
                <span className="res-val" style={{ color: '#10B981' }}>100% Aligned</span>
                <small>CBSE Subject Code 417 Ready</small>
              </div>
            </div>

            <div className="res-cta-box">
              <div>
                <strong>Want an official institutional proposal with quotation?</strong>
                <p>We provide a formal school board proposal with itemized kits and floor plans.</p>
              </div>
              <Link href="/contact" className="btn btn-orange">
                Download School Proposal ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calculator-section {
          background: radial-gradient(circle at center, rgba(15, 181, 166, 0.08) 0%, rgba(7, 15, 30, 0.95) 70%);
          padding: 100px 0;
          border-top: 1px solid var(--line);
        }

        .calc-card {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 36px;
          padding: 40px;
          border-radius: 20px;
          background: rgba(11, 25, 44, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .calc-field {
          margin-bottom: 28px;
        }

        .field-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .calc-field label {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--white);
        }

        .val-badge {
          background: rgba(0, 174, 239, 0.15);
          color: var(--electric);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 800;
          font-size: 0.9rem;
          border: 1px solid rgba(0, 174, 239, 0.3);
        }

        .slider {
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.15);
          outline: none;
          accent-color: var(--orange);
          cursor: pointer;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--ink-soft);
          margin-top: 6px;
        }

        .tier-pills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .pill-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--ink-soft);
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          text-align: center;
          transition: all 0.2s;
        }

        .pill-btn.active {
          background: rgba(245, 130, 32, 0.15);
          color: var(--orange);
          border-color: var(--orange);
        }

        .package-options {
          display: grid;
          gap: 12px;
          margin-top: 10px;
        }

        .pkg-select-box {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.2s;
        }

        .pkg-select-box:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .pkg-select-box.selected {
          border-color: var(--electric);
          background: rgba(0, 174, 239, 0.08);
        }

        .pkg-select-box.popular.selected {
          border-color: var(--orange);
          background: rgba(245, 130, 32, 0.08);
        }

        .pop-tag {
          position: absolute;
          top: -8px;
          right: 14px;
          background: var(--orange);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 10px;
          text-transform: uppercase;
        }

        .pkg-radio {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pkg-select-box.selected .pkg-radio {
          border-color: var(--electric);
        }

        .pkg-select-box.popular.selected .pkg-radio {
          border-color: var(--orange);
        }

        .pkg-radio .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--electric);
        }

        .pkg-select-box.popular.selected .pkg-radio .dot {
          background: var(--orange);
        }

        .pkg-select-box strong {
          display: block;
          font-size: 0.95rem;
          color: var(--white);
        }

        .pkg-select-box p {
          font-size: 0.78rem;
          color: var(--ink-soft);
          margin: 0;
        }

        /* Results Right Panel */
        .calc-results {
          background: rgba(7, 15, 30, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.2);
          border-radius: 14px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .res-badge {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--electric);
          background: rgba(0, 174, 239, 0.1);
          padding: 3px 10px;
          border-radius: 12px;
        }

        .results-header h3 {
          font-size: 1.35rem;
          margin: 10px 0 4px;
        }

        .results-header p {
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin-bottom: 20px;
        }

        .res-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .res-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 14px;
          border-radius: 8px;
        }

        .res-label {
          display: block;
          font-size: 0.75rem;
          color: var(--ink-soft);
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .res-val {
          display: block;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--white);
          font-family: 'Space Grotesk', sans-serif;
        }

        .res-item small {
          font-size: 0.72rem;
          color: var(--ink-soft);
        }

        .res-cta-box {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .res-cta-box strong {
          font-size: 0.88rem;
          display: block;
        }

        .res-cta-box p {
          font-size: 0.78rem;
          color: var(--ink-soft);
          margin: 2px 0 0;
        }

        @media (max-width: 900px) {
          .calc-card {
            grid-template-columns: 1fr;
            padding: 24px;
          }
          .res-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
