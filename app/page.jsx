'use client';

import Link from 'next/link';
import HeroCanvas from '../components/HeroCanvas';
import NodeExplorer from '../components/NodeExplorer';
import ImpactStats from '../components/ImpactStats';
import CircuitLabSpotlight from '../components/CircuitLabSpotlight';
import SchoolSpotlight3D from '../components/SchoolSpotlight3D';
import ProjectsShowcase from '../components/ProjectsShowcase';
import LabPackages from '../components/LabPackages';
import InnovationJourney from '../components/InnovationJourney';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import { SITE_DATA } from '../data/siteContent';

export default function Home() {
  const h = SITE_DATA.hero;

  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="hero-wrapper">
        <HeroCanvas />
        <div className="wrap hero-content-grid">
          <div className="hero-copy">
            <span className="hero-tag">AI • Robotics • Coding • IoT • Electronics</span>
            <h1 className="hero-title">
              BUILDING <span className="hl">FUTURE-READY</span> INNOVATORS.
            </h1>
            <p className="hero-sub">{h.subheading}</p>

            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-orange">
                Build Your Innovation Lab ↗
              </Link>
              <Link href="/about" className="btn btn-outline">
                Explore INNVERSE
              </Link>
            </div>
          </div>

          <div className="hero-node-wrapper">
            <NodeExplorer />
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats />

      {/* PRODUCT SPOTLIGHT: CIRCUITLAB */}
      <CircuitLabSpotlight />

      {/* PARTNER SCHOOL SPOTLIGHT: REAL STUDENTS & ROBOTS */}
      <SchoolSpotlight3D />

      {/* STUDENT PROJECTS GALLERY */}
      <ProjectsShowcase />

      {/* SCHOOL INNOVATION LAB PACKAGES */}
      <LabPackages />

      {/* 8-STEP INNOVATION JOURNEY */}
      <InnovationJourney />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* SCHOOL CONTACT / ENQUIRY FORM */}
      <ContactForm />
    </main>
  );
}
