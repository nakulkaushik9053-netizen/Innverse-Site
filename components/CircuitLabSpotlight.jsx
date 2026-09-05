"use client";
import Link from 'next/link';
import { SITE_DATA } from '../data/siteContent';

export default function CircuitLabSpotlight() {
  const p = SITE_DATA.product;

  return (
    <section className="product-spotlight">
      <div className="wrap product-grid">
        <div className="product-copy">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{p.heading}</h2>
          <p>{p.description}</p>

          <div className="product-feats">
            {p.features.map((feat, idx) => (
              <div key={idx} className="feat-item">
                <span className="feat-check">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="cta-wrap">
            <Link href={p.liveUrl} className="btn btn-orange">
              Try CircuitLab Live ↗
            </Link>
          </div>
        </div>

        <div className="product-visual">
          <div className="simulator-mockup">
            <div className="mockup-header">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="mockup-url">circuitlab.innverse.tech / arduino_sim</span>
            </div>

            <div className="mockup-body">
              <div className="code-preview">
                <div><span className="kw">#include</span> &lt;Servo.h&gt;</div>
                <div><span className="kw">const int</span> trigPin = <span className="str">9</span>;</div>
                <div><span className="kw">const int</span> echoPin = <span className="str">10</span>;</div>
                <div><span className="kw">void</span> <span className="fn">setup</span>() &#123;</div>
                <div>&nbsp;&nbsp;Serial.<span className="fn">begin</span>(<span className="str">9600</span>);</div>
                <div>&nbsp;&nbsp;pinMode(trigPin, <span className="kw">OUTPUT</span>);</div>
                <div>&#125;</div>
                <div><span className="kw">void</span> <span className="fn">loop</span>() &#123;</div>
                <div>&nbsp;&nbsp;<span className="fn">readSensor</span>(); <span className="str">// 18.4 cm obstacle detected</span></div>
                <div>&nbsp;&nbsp;<span className="fn">servo</span>.<span className="fn">write</span>(<span className="str">90</span>); <span className="str">// Opening Lid</span></div>
                <div>&#125;</div>
              </div>

              <div className="sim-status">
                <div className="status-badge">
                  <span className="pulse-dot" /> SIMULATING ACTIVE (Arduino UNO R3)
                </div>
                <div className="component-badges">
                  <span>HC-SR04</span>
                  <span>Servo SG90</span>
                  <span>LDR</span>
                  <span>LCD 16x2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sim-status {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 14px;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .status-badge {
          font-size: 11px;
          font-weight: 700;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 10px var(--teal);
        }

        .component-badges {
          display: flex;
          gap: 6px;
        }

        .component-badges span {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  );
}
