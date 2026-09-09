"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../data/siteContent';

export default function FaqSection() {
  const data = SITE_DATA.faq;
  const [activeTab, setActiveTab] = useState('principals');
  const [openIndex, setOpenIndex] = useState(0);

  const currentQuestions = data.questions[activeTab] || [];

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.heading}</h2>
        </div>

        {/* Tab Selector */}
        <div className="faq-tabs">
          {data.tabs.map((t) => (
            <button
              key={t.id}
              className={`faq-tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(t.id);
                setOpenIndex(0);
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions */}
        <div className="faq-accordion">
          {currentQuestions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="faq-question">
                  <h4>{item.q}</h4>
                  <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="faq-answer"
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 100px 0;
          background: rgba(11, 25, 44, 0.5);
          border-top: 1px solid var(--line);
        }

        .faq-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .faq-tab-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--ink-soft);
          padding: 10px 22px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.88rem;
          transition: all 0.2s;
        }

        .faq-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .faq-tab-btn.active {
          background: var(--electric);
          color: #fff;
          border-color: var(--electric);
          box-shadow: 0 4px 16px rgba(0, 174, 239, 0.35);
        }

        .faq-accordion {
          max-width: 860px;
          margin: 0 auto;
          display: grid;
          gap: 14px;
        }

        .faq-item {
          padding: 20px 24px;
          border-radius: 12px;
          background: rgba(11, 25, 44, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .faq-item:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .faq-item.open {
          border-color: var(--electric);
          background: rgba(17, 34, 58, 0.85);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .faq-question h4 {
          font-size: 1.05rem;
          color: var(--white);
          margin: 0;
          line-height: 1.4;
        }

        .toggle-icon {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--electric);
          line-height: 1;
        }

        .faq-answer {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .faq-answer p {
          font-size: 0.92rem;
          color: #CBD5E1;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
