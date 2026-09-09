"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function QuickActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="floating-quick-bar">
      <a
        href="https://wa.me/919915114333"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-btn btn-wa"
        title="Chat with STEM Director on WhatsApp"
      >
        <span className="btn-ic">💬</span>
        <span className="btn-txt">WhatsApp</span>
      </a>

      <Link href="/contact" className="quick-btn btn-proposal" title="Request School Proposal">
        <span className="btn-ic">📋</span>
        <span className="btn-txt">Get Proposal</span>
      </Link>

      <a href="tel:+919915114333" className="quick-btn btn-call" title="Call School Helpdesk">
        <span className="btn-ic">📞</span>
        <span className="btn-txt">+91 99151 14333</span>
      </a>

      <style jsx>{`
        .floating-quick-bar {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(7, 15, 30, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 12px;
          border-radius: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quick-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          transition: transform 0.2s, background 0.2s;
        }

        .quick-btn:hover {
          transform: translateY(-2px);
        }

        .btn-wa {
          background: #25D366;
          color: #000;
        }

        .btn-proposal {
          background: var(--orange);
          color: #fff;
        }

        .btn-call {
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
        }

        .btn-call:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 600px) {
          .floating-quick-bar {
            bottom: 16px;
            right: 16px;
            left: 16px;
            justify-content: space-around;
          }
          .btn-txt {
            display: none;
          }
          .quick-btn {
            padding: 10px 14px;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
