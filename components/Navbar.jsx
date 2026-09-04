"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar">
          <Link href="/" className="nav-brand">
            <span>INNVERSE</span>
          </Link>
          <div className="nav-links">
            <Link href="/programs">Programs & Solutions</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About & Resources</Link>
          </div>
          <div className="nav-right">
            <Link href="/contact" className="nav-cta">Partner With Us</Link>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/programs" onClick={() => setMenuOpen(false)}>Programs</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Partner With Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 20px 0; transition: padding .25s ease, background .25s ease, box-shadow .25s ease;
        }
        header.scrolled {
          padding: 12px 0; background: rgba(11,35,65,.92); backdrop-filter: blur(10px); box-shadow: 0 6px 24px rgba(0,0,0,.18);
        }
        .navbar { display: flex; align-items: center; justify-content: space-between; max-width: var(--maxw); margin: 0 auto; padding: 0 28px; gap: 20px; }
        .nav-brand { display: flex; align-items: center; gap: 10px; flex: 0 0 auto; }
        .nav-brand span { font-family: 'Space Grotesk'; font-weight: 700; font-size: 19px; color: #fff; letter-spacing: .02em; }
        .nav-links { display: flex; align-items: center; gap: 20px; flex-wrap: nowrap; }
        .nav-links a { font-size: 13.5px; font-weight: 600; color: rgba(255,255,255,.82); letter-spacing: .02em; transition: color .15s; }
        .nav-links a:hover { color: #fff; }
        .nav-right { display: flex; align-items: center; gap: 16px; }
        .nav-cta { background: var(--orange); color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 12.5px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
        .nav-cta:hover { background: var(--orange-deep); }
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 6px; }
        .hamburger span { width: 24px; height: 2px; background: #fff; border-radius: 2px; }
        .mobile-menu {
          position: fixed; inset: 0; z-index: 99; background: var(--navy-deep);
          padding: 100px 32px 40px; display: flex; flex-direction: column; gap: 6px;
        }
        .mobile-menu a { font-size: 19px; font-weight: 600; color: #fff; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,.08); }
        .mobile-menu .nav-cta { margin-top: 20px; text-align: center; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </>
  );
}
