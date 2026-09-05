"use client";
import { useState } from 'react';
import { SITE_DATA } from '../data/siteContent';

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'iot', label: 'IoT & Smart Systems' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'ai', label: 'AI & Vision' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section className="projects-section">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Student Innovation Showcase</span>
          <h2>Real Projects Built By Students</h2>
          <p>Explore hands-on hardware models, autonomous robots, and IoT monitoring systems designed by students in INNVERSE school labs.</p>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setActiveModalProject(project)}
            >
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <span className="project-diff">{project.difficulty}</span>
              </div>
              <div className="project-body">
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Project Detail */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>
            <div className="modal-header">
              <span className="modal-icon">{activeModalProject.icon}</span>
              <div>
                <h3>{activeModalProject.title}</h3>
                <span className="project-diff">{activeModalProject.difficulty}</span>
              </div>
            </div>
            <p className="modal-desc">{activeModalProject.desc}</p>

            <div className="modal-components">
              <h5>Hardware Components Used:</h5>
              <div className="comp-list">
                {activeModalProject.components.map((comp, idx) => (
                  <span key={idx} className="comp-chip">
                    ⚙️ {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-orange"
                onClick={() => setActiveModalProject(null)}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          background: rgba(7, 23, 38, 0.4);
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .modal-icon {
          font-size: 40px;
        }

        .modal-header h3 {
          font-size: 1.5rem;
        }

        .modal-desc {
          font-size: 1rem;
          color: var(--ink-soft);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .modal-components h5 {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--orange);
          margin-bottom: 10px;
        }

        .comp-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .comp-chip {
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </section>
  );
}
