"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {q:'The lab changed how our students see technology — they build first, then understand the theory.', n:'Sample Testimonial', r:'Principal, Placeholder School'},
  {q:'Teachers finally feel confident running robotics sessions on their own, week after week.', n:'Sample Testimonial', r:'Academic Coordinator, Placeholder School'},
  {q:'Students who never spoke up in class are now presenting their own IoT projects to visitors.', n:'Sample Testimonial', r:'Teacher, Placeholder School'},
];

const RESOURCES = [
  {ic:'🧠', tag:'AI in Education', t:'How Schools Can Introduce AI Without Overwhelming Students', d:'A practical, grade-wise approach to bringing AI concepts into the classroom without turning it into another exam subject.'},
  {ic:'🤖', tag:'Robotics', t:'Choosing the Right First Robotics Kit for Grades 6–8', d:'What actually matters when picking a starter kit — durability, part availability, and how well it scales as skills grow.'},
  {ic:'🏗️', tag:'Innovation Labs', t:'What Makes an Innovation Lab Actually Get Used', d:'Most labs go quiet after the launch event. Here is what keeps a lab active every single week instead.'},
  {ic:'🎓', tag:'Teacher Training', t:'Building Teacher Confidence in Hands-on Tech Classrooms', d:'A simple framework for helping non-technical teachers feel confident running a robotics or coding session.'},
  {ic:'🔬', tag:'STEM Education', t:'Moving From STEM Activities to STEM Systems', d:'The difference between a one-off workshop and a structured program that compounds skills year over year.'},
  {ic:'🚀', tag:'Future Skills', t:'The Skills Employers Will Actually Look For in 2035', d:'Beyond coding syntax — the durable problem-solving and design-thinking skills that outlast any single technology.'},
];

export default function About() {
  const [testiIdx, setTestiIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestiIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      
      <section id="testimonials" style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div className="section-head center">
            <div className="eyebrow" style={{ color: 'var(--electric)' }}>Voices</div>
            <h2 style={{ color: '#fff' }}>What Schools Say</h2>
          </div>
          
          <div className="testi-container" style={{ position: 'relative', minHeight: '260px' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={testiIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="testi-card"
              >
                <div className="testi-quote">"{TESTIMONIALS[testiIdx].q}"</div>
                <div className="testi-name">{TESTIMONIALS[testiIdx].n}</div>
                <div className="testi-role">{TESTIMONIALS[testiIdx].r}</div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="testi-nav">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i} 
                className={`testi-dot ${i === testiIdx ? 'active' : ''}`}
                onClick={() => setTestiIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" style={{ background: 'var(--offwhite)' }}>
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Knowledge Base</div>
            <h2>Resources & Insights</h2>
            <p>Practical guides for schools looking to implement real tech education.</p>
          </div>
          <div className="res-grid">
            {RESOURCES.map((r, i) => (
              <motion.div 
                key={i} 
                className="res-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="res-tag">
                  <span className="res-ic">{r.ic}</span>
                  <span>{r.tag}</span>
                </div>
                <h4>{r.t}</h4>
                <p className="res-desc">{r.d}</p>
                <a className="res-link" href="/contact">Read More →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .testi-card { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); padding: 40px; border-radius: 20px; text-align: center; }
        .testi-quote { font-family: 'Space Grotesk'; font-size: 24px; font-weight: 500; line-height: 1.5; color: #fff; margin-bottom: 24px; }
        .testi-name { font-size: 15px; font-weight: 700; color: var(--electric); margin-bottom: 4px; }
        .testi-role { font-size: 13.5px; color: rgba(255,255,255,.6); }
        .testi-nav { display: flex; justify-content: center; gap: 12px; margin-top: 32px; }
        .testi-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,.2); border: none; padding: 0; cursor: pointer; transition: all .2s; }
        .testi-dot.active { background: var(--orange); transform: scale(1.3); }

        .res-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; }
        .res-card { background: #fff; padding: 32px; border-radius: 16px; box-shadow: var(--shadow); display: flex; flex-direction: column; transition: transform .2s, box-shadow .2s; }
        .res-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(11,35,65,.1); }
        .res-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--teal-deep); margin-bottom: 16px; }
        .res-ic { font-size: 16px; }
        .res-card h4 { font-size: 20px; color: var(--navy); margin-bottom: 12px; }
        .res-desc { font-size: 14.5px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 24px; flex: 1; }
        .res-link { font-size: 13.5px; font-weight: 700; color: var(--orange); display: inline-flex; align-items: center; transition: color .2s; }
        .res-link:hover { color: var(--orange-deep); }
      `}</style>
    </div>
  );
}
