"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    designation: '',
    city: '',
    phone: '',
    email: '',
    requirement: 'Innovation Lab Setup',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Partner With Us</span>
            <h2>Bring Innovation To Your School</h2>
            <p>
              Transform your school's technology education into an active building ecosystem. Reach out to schedule a lab demonstration, request a custom proposal, or consult with our STEM directors.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Location & Coverage</strong>
                  <p>Serving forward-thinking K-12 schools across India</p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">✉️</span>
                <div>
                  <strong>Direct Email</strong>
                  <p>
                    <a href="mailto:info@innverse.tech">info@innverse.tech</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Phone & WhatsApp</strong>
                  <p>
                    <a href="tel:+919915114333">+91 99151 14333</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="quick-actions">
              <a
                href="https://wa.me/919915114333"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-electric"
              >
                💬 Instant WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="glass-card">
            {submitted ? (
              <div className="success-message center">
                <div className="success-icon">✅</div>
                <h3>Thank You — Message Received</h3>
                <p>
                  Our school innovation team will contact you within 24 hours to discuss your school's vision.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>School Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Modern Public School"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Designation</label>
                    <input
                      type="text"
                      placeholder="Principal / Coordinator / Trustee"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field full">
                    <label>Primary Requirement</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option>Innovation Lab Setup</option>
                      <option>AI, Robotics & Coding Program</option>
                      <option>IoT & Electronics Workshop</option>
                      <option>Teacher Training & Enablement</option>
                      <option>CircuitLab Simulator Integration</option>
                      <option>General School Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field full">
                    <label>Message / Details</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about student strength, target grades, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-orange form-submit">
                  Request School Proposal ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: rgba(7, 23, 38, 0.9);
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 28px 0;
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: rgba(11, 35, 65, 0.5);
          padding: 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .info-icon {
          font-size: 20px;
        }

        .info-card strong {
          display: block;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .info-card p {
          font-size: 13px;
          color: var(--ink-soft);
          margin: 0;
        }

        .success-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .form-submit {
          margin-top: 10px;
          width: 100%;
        }
      `}</style>
    </section>
  );
}
