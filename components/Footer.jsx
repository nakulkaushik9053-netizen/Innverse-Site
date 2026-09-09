"use client";
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer pcb-bg-dark">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo-header">
              <img 
                src="/images/innverse-official-logo.jpg" 
                alt="INNVERSE Official Logo" 
                className="footer-logo-img"
              />
              <h3 className="brand-name">
                <span className="text-inn">INN</span>
                <span className="text-verse">VERSE</span>
              </h3>
            </div>
            <p className="brand-desc">
              Building next-generation technology ecosystems, robotics labs, and AI learning pathways for forward-thinking institutions.
            </p>
            <div className="brand-motto">
              <span>INNOVATE.</span>
              <span>INSPIRE.</span>
              <span>INFINITE.</span>
            </div>
          </div>

          <div className="footer-col">
            <h5>Solutions & Programs</h5>
            <Link href="/programs">Innovation Labs</Link>
            <Link href="/programs#ai-robotics">AI, Robotics & Coding</Link>
            <Link href="/programs#iot-electronics">IoT & Smart Systems</Link>
            <Link href="/programs#3d-design">3D Design & Prototyping</Link>
            <Link href="/circuitlab">CircuitLab Simulator</Link>
          </div>

          <div className="footer-col">
            <h5>Explore INNVERSE</h5>
            <Link href="/projects">Student Project Showcase</Link>
            <Link href="/about">About & Our Method</Link>
            <Link href="/about#impact">School Impact</Link>
            <Link href="/about#resources">Curriculum Resources</Link>
            <Link href="/contact">Partner With Us</Link>
          </div>

          <div className="footer-col">
            <h5>Institutional Contact</h5>
            <a href="mailto:info@innverse.tech" className="contact-link">
              ✉️ info@innverse.tech
            </a>
            <a href="tel:+919915114333" className="contact-link">
              📞 +91 99151 14333
            </a>
            <a
              href="https://wa.me/919915114333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp School Inquiry
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} INNVERSE Technologies. All rights reserved.</span>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/innverseindia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷 Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/innverse-india/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--navy);
          color: #FFFFFF;
          padding: 85px 0 36px;
          border-top: 1px solid var(--line);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.2fr 1.4fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .brand-logo-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-logo-img {
          height: 42px;
          width: auto;
          border-radius: 8px;
          box-shadow: 0 0 16px rgba(245, 130, 32, 0.3);
        }

        .brand-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 0.06em;
          margin-bottom: 0;
          color: #FFFFFF;
        }

        .text-inn {
          color: var(--orange);
        }

        .text-verse {
          color: #FFFFFF;
        }

        .brand-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.72);
          max-width: 340px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .brand-motto {
          display: flex;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--orange);
          text-transform: uppercase;
        }

        .brand-motto span {
          background: rgba(245, 130, 32, 0.12);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(245, 130, 32, 0.3);
        }

        .footer-col h5 {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 20px;
        }

        .footer-col a {
          display: block;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 12px;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: var(--electric);
        }

        .contact-link {
          word-break: break-all;
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(0, 174, 239, 0.15);
          border: 1px solid var(--electric);
          color: var(--electric) !important;
          font-weight: 700;
          font-size: 13px !important;
        }

        .btn-whatsapp:hover {
          background: var(--electric);
          color: #FFFFFF !important;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .footer-social a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          transition: color 0.2s;
        }

        .footer-social a:hover {
          color: var(--orange);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
