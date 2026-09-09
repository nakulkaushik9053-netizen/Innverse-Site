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
import CurriculumRoadmap from '../components/CurriculumRoadmap';
import LabZonesExplorer from '../components/LabZonesExplorer';
import HardwareKitsShowcase from '../components/HardwareKitsShowcase';
import CompetitionsTrack from '../components/CompetitionsTrack';
import SafetyCompliance from '../components/SafetyCompliance';
import LabCalculator from '../components/LabCalculator';
import FaqSection from '../components/FaqSection';
import { SITE_DATA } from '../data/siteContent';

export default function Home() {
  const h = SITE_DATA.hero;

  return (
    <main className="home-page">
      {/* 1. HERO SECTION */}
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
              <a href="#roi-calculator" className="btn btn-outline">
                Lab Budget Calculator 📊
              </a>
            </div>
          </div>

          <div className="hero-node-wrapper">
            <NodeExplorer />
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS */}
      <ImpactStats />

      {/* 3. PROGRESSIVE CURRICULUM ROADMAP (GRADES 3-12) */}
      <CurriculumRoadmap />

      {/* 4. PRODUCT SPOTLIGHT: CIRCUITLAB */}
      <CircuitLabSpotlight />

      {/* 5. PARTNER SCHOOL SPOTLIGHT: REAL STUDENTS & ROBOTS */}
      <SchoolSpotlight3D />

      {/* 6. 360° LAB ZONES ARCHITECTURAL EXPLORER */}
      <LabZonesExplorer />

      {/* 7. STUDENT PROJECTS GALLERY */}
      <ProjectsShowcase />

      {/* 8. MODULAR HARDWARE KITS SHOWCASE */}
      <HardwareKitsShowcase />

      {/* 9. SCHOOL INNOVATION LAB PACKAGES */}
      <LabPackages />

      {/* 10. INTERACTIVE SCHOOL BUDGET & ROI CALCULATOR */}
      <LabCalculator />

      {/* 11. GLOBAL COMPETITIONS & OLYMPIADS TRACK */}
      <CompetitionsTrack />

      {/* 12. 8-STEP SIGNATURE INNOVATION JOURNEY */}
      <InnovationJourney />

      {/* 13. SAFETY, QUALITY & NEP COMPLIANCE PILLARS */}
      <SafetyCompliance />

      {/* 14. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 15. FREQUENTLY ANSWERED QUESTIONS (TABS FOR PRINCIPALS, TEACHERS, PARENTS) */}
      <FaqSection />

      {/* 16. SCHOOL CONTACT / ENQUIRY FORM */}
      <ContactForm />
    </main>
  );
}
