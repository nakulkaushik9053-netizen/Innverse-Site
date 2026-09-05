"use client";
import ProjectsShowcase from '../../components/ProjectsShowcase';

export default function ProjectsPage() {

  return (
    <div className="projects-subpage" style={{ paddingTop: '100px' }}>
      <section className="subpage-hero" style={{ padding: '60px 0 20px', textAlignment: 'center' }}>
        <div className="wrap center">
          <span className="eyebrow">Student Innovation Gallery</span>
          <h1 className="hero-title">WHERE CURIOSITY BECOMES CREATION.</h1>
          <p className="hero-sub center" style={{ margin: '0 auto 20px' }}>
            Every project here was built, wired, coded, and tested by school students using real sensors, microcontrollers, and CAD models.
          </p>
        </div>
      </section>

      <ProjectsShowcase />
    </div>
  );
}
