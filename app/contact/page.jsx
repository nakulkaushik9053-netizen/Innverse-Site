"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '100px', background: 'var(--offwhite)', minHeight: '100vh' }}>
      <section id="contact" style={{ padding: '60px 0 120px' }}>
        <div className="wrap">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="eyebrow">Let's Connect</div>
              <h2>Build the Future at Your School</h2>
              <p>Ready to upgrade your school's tech ecosystem? Drop us a line and we'll get back to you within 24 hours to discuss how we can partner.</p>
              
              <div className="contact-details">
                <div className="cd-item">
                  <span className="cd-ic">✉️</span>
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:info@innverse.tech">info@innverse.tech</a>
                  </div>
                </div>
                <div className="cd-item">
                  <span className="cd-ic">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <a href="tel:+919915114333">+91 99151 14333</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>School / Institution Name</label>
                    <input type="text" required placeholder="Springfield High School" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" required placeholder="john@school.edu" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" required placeholder="+91 90000 00000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>How can we help?</label>
                    <select required>
                      <option value="">Select an option...</option>
                      <option value="lab">Set up an Innovation Lab</option>
                      <option value="curriculum">Implement Tech Curriculum</option>
                      <option value="training">Teacher Training</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message (Optional)</label>
                    <textarea rows={4} placeholder="Tell us a bit more about your requirements..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-orange" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-ic">✅</div>
                  <h3>Message Received</h3>
                  <p>Thank you for reaching out! Our team will get back to you within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: start; }
        .contact-info h2 { font-size: 38px; color: var(--navy); margin: 14px 0 20px; }
        .contact-info p { font-size: 16px; color: var(--ink-soft); line-height: 1.7; margin-bottom: 40px; max-width: 420px; }
        
        .contact-details { display: flex; flex-direction: column; gap: 24px; }
        .cd-item { display: flex; align-items: center; gap: 16px; }
        .cd-ic { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: #fff; border-radius: 12px; font-size: 20px; box-shadow: 0 4px 12px rgba(11,35,65,.05); }
        .cd-item div { display: flex; flex-direction: column; gap: 4px; }
        .cd-item strong { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--orange); }
        .cd-item a { font-size: 16px; font-weight: 600; color: var(--navy); transition: color .2s; }
        .cd-item a:hover { color: var(--teal-deep); }

        .contact-form-box { background: #fff; padding: 48px; border-radius: 24px; box-shadow: var(--shadow); }
        .form { display: flex; flex-direction: column; gap: 24px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 13px; font-weight: 600; color: var(--navy); }
        .form-group input, .form-group select, .form-group textarea {
          padding: 14px 16px; border: 1.5px solid var(--line); border-radius: 10px; font-family: inherit; font-size: 15px; color: var(--ink);
          transition: border-color .2s, box-shadow .2s; background: var(--offwhite);
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none; border-color: var(--electric); background: #fff; box-shadow: 0 0 0 4px rgba(0,174,239,.1);
        }
        
        .form-success { text-align: center; padding: 40px 20px; }
        .success-ic { font-size: 48px; margin-bottom: 20px; }
        .form-success h3 { font-size: 24px; color: var(--navy); margin-bottom: 12px; }
        .form-success p { font-size: 15px; color: var(--ink-soft); margin-bottom: 30px; }
        
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-form-box { padding: 32px 24px; }
          .form-row { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </div>
  );
}
