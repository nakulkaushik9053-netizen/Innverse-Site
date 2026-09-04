"use client";
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>INNVERSE</h3>
            <p>Building ecosystems, not activities. We partner with forward-thinking schools to make real innovation a weekly habit.</p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <Link href="/programs">Programs</Link>
            <Link href="/programs#labs">Innovation Labs</Link>
            <Link href="/projects">Student Projects</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About Innverse</Link>
            <Link href="/about#impact">Impact</Link>
            <Link href="/about#resources">Resources</Link>
            <Link href="/contact">Partner With Us</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="mailto:info@innverse.tech">info@innverse.tech</a>
            <a href="tel:+919915114333">+91 99151 14333</a>
            <a href="https://wa.me/919915114333" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} INNVERSE. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://www.instagram.com/innverseindia/" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://www.linkedin.com/company/innverse-india/" target="_blank" rel="noopener noreferrer">in</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer { background: var(--navy-deep); color: #fff; padding: 100px 0 40px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 80px; }
        .footer-brand h3 { font-size: 24px; font-weight: 700; letter-spacing: 2px; margin-bottom: 20px; color: #fff; }
        .footer-brand p { font-size: 14.5px; color: rgba(255,255,255,.6); max-width: 320px; line-height: 1.7; }
        .footer-col h5 { font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 20px; }
        .footer-col a { display: block; font-size: 14.5px; color: rgba(255,255,255,.8); margin-bottom: 12px; transition: color .2s; }
        .footer-col a:hover { color: var(--orange); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,.1); padding-top: 30px; display: flex; justify-content: space-between; align-items: center; font-size: 13.5px; color: rgba(255,255,255,.4); }
        .footer-social { display: flex; gap: 16px; }
        .footer-social a { color: rgba(255,255,255,.6); font-size: 16px; transition: color .2s; }
        .footer-social a:hover { color: #fff; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
