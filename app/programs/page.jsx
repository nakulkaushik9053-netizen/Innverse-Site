"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const PROGRAMS = [
  {ic:'🤖', t:'Robotics', d:'Build robots, automation systems and intelligent machines from scratch.', ex:'Builds: line-following bots, robotic arms'},
  {ic:'🧠', t:'Artificial Intelligence', d:'Understand AI through practical applications and hands-on projects.', ex:'Builds: image recognition, chatbots'},
  {ic:'💻', t:'Coding', d:'Develop computational thinking through structured programming.', ex:'Builds: games, apps, automation scripts'},
  {ic:'📡', t:'IoT', d:'Connect sensors, devices and real-world systems together.', ex:'Builds: smart irrigation, home automation'},
  {ic:'🔌', t:'Electronics', d:'Understand circuits, components and embedded systems.', ex:'Builds: alarm circuits, sensor modules'},
  {ic:'🧊', t:'3D Design', d:'Design, model and prototype ideas from concept to object.', ex:'Builds: enclosures, custom parts, models'},
  {ic:'🧩', t:'Computational Thinking', d:'Develop structured problem-solving and logical reasoning.', ex:'Builds: flowcharts, algorithms, logic puzzles'},
];

const LAB_STAGES = [
  {k:'space', t:'Space', d:'We audit the room, plan layout, power, seating and workflow so the lab supports real building — not just storage.'},
  {k:'curriculum', t:'Curriculum', d:'A structured, grade-wise curriculum across AI, Robotics, Coding, IoT and Electronics, mapped to learning outcomes.'},
  {k:'tools', t:'Tools', d:'The right kits, boards, sensors and software — selected for durability, safety and classroom scale, not gimmicks.'},
  {k:'training', t:'Training', d:'Teachers are trained and supported continuously, so the lab keeps running long after installation day.'},
  {k:'execution', t:'Execution', d:'Weekly sessions, projects, challenges and exhibitions that keep the lab active and visible across the school.'},
  {k:'outcomes', t:'Outcomes', d:'Measurable growth in problem-solving, creativity and technical skill — tracked project by project.'},
];

export default function Programs() {
  const [activeLab, setActiveLab] = useState(0);

  return (
    <>
      <div style={{ paddingTop: '100px' }}>
        <section id="product">
          <div className="wrap">
            <div className="product-grid">
              <motion.div 
                className="product-copy"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="eyebrow">Our Platform</div>
                <h2>CircuitLab</h2>
                <p>The ultimate browser-based simulation environment for learning electronics and coding. No hardware required to start building.</p>
                <div className="product-feats">
                  <div>Drag-and-drop component placement</div>
                  <div>Real-time circuit simulation</div>
                  <div>Integrated code editor (C++ / Arduino)</div>
                  <div>Pre-built project templates</div>
                </div>
              </motion.div>
              <motion.div 
                className="product-visual"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="browser-mock">
                  <div className="browser-bar">
                    <span/><span/><span/>
                    <div className="url">app.innverse.tech/circuitlab</div>
                  </div>
                  <div style={{ height: '300px', background: '#1c2836', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ color: '#fff' }}>[CircuitLab Simulation Canvas]</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="programs" style={{ background: 'var(--offwhite)' }}>
          <div className="wrap">
            <div className="section-head center">
              <div className="eyebrow">Curriculum</div>
              <h2>Programs</h2>
              <p>Structured, hands-on learning paths designed to build real-world skills.</p>
            </div>
            <div className="prog-grid">
              {PROGRAMS.map((p, i) => (
                <motion.div 
                  key={i} 
                  className="prog-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="prog-ic">{p.ic}</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                  <div className="prog-example">{p.ex}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="labs">
          <div className="wrap">
            <div className="section-head center">
              <div className="eyebrow">The System</div>
              <h2>Innovation Labs</h2>
              <p>Building a lab is easy. Keeping it active is hard. We do both.</p>
            </div>
            
            <div className="lab-container">
              <div className="lab-flow">
                {LAB_STAGES.map((s, i) => (
                  <button 
                    key={i} 
                    className={`lab-pill ${i === activeLab ? 'active' : ''}`}
                    onClick={() => setActiveLab(i)}
                  >
                    {s.t}
                  </button>
                ))}
              </div>
              <motion.div 
                className="lab-panel"
                key={activeLab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{LAB_STAGES[activeLab].t}</h3>
                <p>{LAB_STAGES[activeLab].d}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        #product { background: var(--navy); color: #fff; overflow: hidden; position: relative; padding: 120px 0; }
        .product-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 56px; align-items: center; position: relative; z-index: 1; }
        .product-copy .eyebrow { color: var(--electric); }
        .product-copy h2 { color: #fff; font-size: 34px; margin: 14px 0 16px; }
        .product-copy p { color: rgba(255,255,255,.7); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; }
        .product-feats { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
        .product-feats div { display: flex; align-items: center; gap: 10px; font-size: 13.5px; font-weight: 600; color: rgba(255,255,255,.85); }
        .product-feats div::before { content: "✓"; width: 22px; height: 22px; border-radius: 6px; background: rgba(15,181,166,.18); color: var(--teal); display: flex; align-items: center; justify-content: center; font-weight: 800; flex: 0 0 auto; }
        .product-visual { position: relative; perspective: 1200px; }
        .browser-mock { border-radius: 14px; overflow: hidden; background: #0E1620; box-shadow: 0 30px 70px rgba(0,0,0,.45); transition: transform .5s cubic-bezier(.2,.8,.2,1); transform: perspective(1200px) rotateY(-6deg) rotateX(2deg); }
        .browser-mock:hover { transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.01); }
        .browser-bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: #141d29; }
        .browser-bar span { width: 10px; height: 10px; border-radius: 50%; background: #3a4656; }
        .browser-bar .url { margin-left: 10px; font-size: 11px; color: rgba(255,255,255,.4); background: rgba(255,255,255,.05); padding: 4px 12px; border-radius: 6px; }
        
        .prog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
        .prog-card { background: #fff; padding: 32px; border-radius: 16px; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s; }
        .prog-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(11,35,65,.1); }
        .prog-ic { font-size: 32px; margin-bottom: 16px; display: inline-block; padding: 12px; background: var(--offwhite); border-radius: 12px; }
        .prog-card h4 { font-size: 20px; color: var(--navy); margin-bottom: 10px; }
        .prog-card p { font-size: 14px; color: var(--ink-soft); margin-bottom: 20px; }
        .prog-example { font-size: 12.5px; font-weight: 600; color: var(--teal-deep); padding: 8px 12px; background: rgba(15,181,166,.08); border-radius: 6px; }

        .lab-container { display: flex; gap: 40px; background: #fff; border-radius: 20px; box-shadow: var(--shadow); overflow: hidden; padding: 40px; }
        .lab-flow { display: flex; flex-direction: column; gap: 8px; flex: 0 0 240px; border-right: 1px solid var(--line); padding-right: 40px; }
        .lab-pill { text-align: left; padding: 14px 20px; border: none; background: transparent; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); border-radius: 8px; transition: all .2s; }
        .lab-pill:hover { background: var(--offwhite); }
        .lab-pill.active { background: var(--orange); color: #fff; box-shadow: 0 4px 14px rgba(245,130,32,.25); }
        .lab-panel { flex: 1; padding: 20px 0; }
        .lab-panel h3 { font-size: 28px; color: var(--navy); margin-bottom: 16px; }
        .lab-panel p { font-size: 16px; color: var(--ink-soft); line-height: 1.8; }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr; }
          .lab-container { flex-direction: column; padding: 24px; }
          .lab-flow { flex: auto; border-right: none; padding-right: 0; border-bottom: 1px solid var(--line); padding-bottom: 24px; }
        }
      `}</style>
    </>
  );
}
