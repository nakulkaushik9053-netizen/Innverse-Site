"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {t:'Smart Dustbin', cat:'iot', desc:'An ultrasonic sensor detects a hand nearby and opens the lid automatically — a first hands-on IoT build.', comp:'Arduino UNO · Ultrasonic HC-SR04 · Servo Motor', tags:['IoT','Sensors'], diff:'Beginner', ic:'🗑️', c:'var(--teal-deep)'},
  {t:'Gas Detection System', cat:'electronics', desc:'An MQ-2 sensor watches for gas leaks and triggers a buzzer alarm the moment levels cross a safe threshold.', comp:'Arduino UNO · MQ-2 Gas Sensor · Buzzer', tags:['Electronics','MQ-2'], diff:'Intermediate', ic:'🚨', c:'var(--orange)'},
  {t:'Automatic Street Light', cat:'electronics', desc:'An LDR sensor reads ambient light and switches the LED streetlight on at dusk, off at dawn — no manual switch.', comp:'Arduino UNO · LDR · LED', tags:['LDR','Automation'], diff:'Beginner', ic:'💡', c:'var(--electric)'},
  {t:'Line Following Robot', cat:'robotics', desc:'IR sensors track a black line on the floor, steering the robot\'s motors to follow the path automatically.', comp:'Arduino UNO · IR Sensors · DC Motors', tags:['Robotics','IR Sensor'], diff:'Intermediate', ic:'🤖', c:'var(--navy)'},
  {t:'Smart Irrigation', cat:'iot', desc:'A soil moisture sensor decides when the soil is actually dry, and switches the water pump on only when needed.', comp:'Arduino UNO · Soil Moisture Sensor · Relay + Pump', tags:['IoT','Soil Sensor'], diff:'Intermediate', ic:'🌱', c:'var(--teal-deep)'},
  {t:'Home Automation', cat:'iot', desc:'A relay module lets a microcontroller switch real household appliances on and off from a simple control signal.', comp:'Arduino UNO · Relay Module · Push Button', tags:['IoT','Relay'], diff:'Advanced', ic:'🏠', c:'var(--electric)'},
  {t:'Obstacle Avoiding Robot', cat:'robotics', desc:'An ultrasonic sensor measures distance in real time, steering the robot away from walls and obstacles on its own.', comp:'Arduino UNO · Ultrasonic HC-SR04 · DC Motors', tags:['Robotics','Ultrasonic'], diff:'Intermediate', ic:'🚗', c:'var(--navy)'},
  {t:'AI Vision Project', cat:'ai', desc:'A camera feed is passed through a simple trained model so the system can recognize and label what it sees.', comp:'Camera Module · Trained Vision Model · Microcontroller', tags:['AI','Camera'], diff:'Advanced', ic:'👁️', c:'var(--orange-deep)'},
];

const CATS = [['all','All'],['robotics','Robotics'],['ai','AI'],['iot','IoT'],['electronics','Electronics'],['coding','Coding']];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.cat === filter);

  return (
    <div style={{ paddingTop: '100px', background: 'var(--offwhite)', minHeight: '100vh' }}>
      <section id="projects">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">Student Creations</div>
            <h2>Project Gallery</h2>
            <p>From simple circuits to AI vision models, see what students build when they have the right tools and guidance.</p>
          </div>
          
          <div className="filter-row">
            {CATS.map(([k, l]) => (
              <button 
                key={k} 
                className={`filter-btn ${k === filter ? 'active' : ''}`}
                onClick={() => setFilter(k)}
              >
                {l}
              </button>
            ))}
          </div>

          <motion.div layout className="proj-grid">
            <AnimatePresence>
              {filteredProjects.map((p, i) => (
                <motion.div 
                  key={p.t}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="proj-card"
                >
                  <div className="proj-thumb" style={{ background: `var(--${p.c.split('--')[1].split(')')[0]})` }}>
                    <svg className="proj-thumb-pattern" viewBox="0 0 200 140" preserveAspectRatio="none">
                      <path d="M0 20 H60 V0 M60 20 V50 H120 M120 20 V0 M140 0 V40 H200 M0 100 H40 V140 M80 100 H80 V140 M160 90 V140 M180 100 H140 V70" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.2"/>
                      <circle cx="60" cy="20" r="3" fill="#fff" opacity="0.5"/>
                      <circle cx="120" cy="50" r="3" fill="#fff" opacity="0.5"/>
                      <circle cx="140" cy="40" r="3" fill="#fff" opacity="0.5"/>
                      <circle cx="180" cy="100" r="3" fill="#fff" opacity="0.5"/>
                    </svg>
                    <span className="proj-thumb-ic">{p.ic}</span>
                  </div>
                  <div className="proj-body">
                    <h4>{p.t}</h4>
                    <p className="proj-desc">{p.desc}</p>
                    <div className="proj-comp">🔧 {p.comp}</div>
                    <div className="proj-tags">
                      {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                    </div>
                    <div className="proj-diff">{p.diff}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .filter-row { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 40px; }
        .filter-btn { padding: 10px 20px; border-radius: 30px; border: 1.5px solid var(--line); background: #fff; font-size: 13.5px; font-weight: 600; color: var(--ink-soft); transition: all .2s; }
        .filter-btn:hover { border-color: var(--navy); color: var(--navy); }
        .filter-btn.active { background: var(--navy); border-color: var(--navy); color: #fff; }
        
        .proj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; }
        .proj-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column; }
        .proj-thumb { position: relative; height: 160px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .proj-thumb-pattern { position: absolute; inset: 0; width: 100%; height: 100%; }
        .proj-thumb-ic { font-size: 52px; position: relative; z-index: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,.2)); }
        .proj-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
        .proj-body h4 { font-size: 19px; color: var(--navy); margin-bottom: 10px; }
        .proj-desc { font-size: 14px; color: var(--ink-soft); line-height: 1.6; margin-bottom: 16px; flex: 1; }
        .proj-comp { font-size: 12.5px; font-weight: 500; color: var(--ink); margin-bottom: 16px; padding: 10px; background: var(--offwhite); border-radius: 8px; }
        .proj-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
        .proj-tag { font-size: 11.5px; font-weight: 600; color: var(--electric); padding: 4px 10px; border: 1px solid rgba(0,174,239,.3); border-radius: 20px; }
        .proj-diff { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--orange); }
      `}</style>
    </div>
  );
}
