"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/programs', label: 'Programs & Labs' },
    { href: '/projects', label: 'Student Projects' },
    { href: '/circuitlab', label: 'CircuitLab' },
    { href: '/about', label: 'About & Impact' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap navbar">
          <Link href="/" className="nav-brand">
            <img 
              src="/images/innverse-official-logo.jpg" 
              alt="INNVERSE Official Logo" 
              className="brand-logo-img"
            />
            <span className="brand-logo-text">
              <span className="text-inn">INN</span>
              <span className="text-verse">VERSE</span>
            </span>
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-right">
            <Link href="/contact" className="btn-cta">
              Partner With Us ↗
            </Link>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-cta mobile-cta"
            >
              Partner With Us ↗
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 22px 0;
          transition: all 0.3s ease;
          background: rgba(11, 35, 65, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .site-header.scrolled {
          padding: 12px 0;
          background: rgba(11, 35, 65, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px rgba(7, 23, 38, 0.4);
          border-bottom: 1px solid rgba(0, 174, 239, 0.25);
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 0.06em;
          text-decoration: none;
        }

        .brand-logo-img {
          height: 38px;
          width: auto;
          border-radius: 8px;
          box-shadow: 0 0 16px rgba(245, 130, 32, 0.3);
          transition: transform 0.3s ease;
        }

        .nav-brand:hover .brand-logo-img {
          transform: scale(1.06);
        }

        .text-inn {
          color: var(--orange); /* #F58220 */
        }

        .text-verse {
          color: #FFFFFF;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--orange);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--orange);
          border-radius: 2px;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-cta {
          background: var(--orange);
          color: #FFFFFF;
          padding: 10px 22px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: all 0.25s ease;
          box-shadow: var(--glow-orange);
          border: none;
        }

        .btn-cta:hover {
          background: var(--orange-deep);
          transform: translateY(-2px);
          box-shadow: var(--glow-electric);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-drawer {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: var(--navy-deep);
          backdrop-filter: blur(20px);
          padding: 100px 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-link {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-cta {
          margin-top: 20px;
          text-align: center;
          padding: 14px;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
