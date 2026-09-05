"use client";
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="brand-name">
              INNVERSE<span className="brand-dot">.</span>
            </h3>
            <p className="brand-desc">
              Building ecosystems, not one-off activities. We partner with forward-thinking schools to make hands-on innovation a weekly habit for students.
            </p>
            <div className="brand-tagline">Where Curiosity Becomes Creation.</div>
          </div>

          <div className="footer-col">
            <h5>Solutions & Programs</h5>
            <Link href="/programs">Innovation Labs</Link>
            <Link href="/programs#ai-robotics">AI, Robotics & Coding</Link>
            <Link href="/programs#iot-electronics">IoT & Smart Systems</Link>
            <Link href="/programs#3d-design">3D Design & Printing</Link>
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
            <h5>Contact & Support</h5>
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
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} INNVERSE. All rights reserved.</span>
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
          background: #040E18;
          color: #fff;
          padding: 80px 0 36px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.2fr 1.4fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .brand-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .brand-dot {
          color: var(--orange);
        }

        .brand-desc {
          font-size: 14px;
          color: var(--ink-soft);
          max-width: 340px;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .brand-tagline {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(245, 130, 32, 0.12);
        }

        .footer-col h5 {
          font-size: 12px;
          font-weight: 700;
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
          background: rgba(15, 181, 166, 0.2);
          border: 1px solid var(--teal);
          color: var(--teal) !important;
          font-weight: 700;
          font-size: 13px !important;
        }

        .btn-whatsapp:hover {
          background: var(--teal);
          color: #fff !important;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: var(--ink-soft);
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .footer-social a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          transition: color 0.2s;
        }

        .footer-social a:hover {
          color: #fff;
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
