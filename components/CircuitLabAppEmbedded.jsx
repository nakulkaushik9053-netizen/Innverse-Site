"use client";
import React, { useState } from 'react';

export default function CircuitLabAppEmbedded() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section className="circuitlab-app-container" id="circuitlab-demo">
      <div className="wrap">
        <div className="app-frame-card glass-card">
          <div className="app-frame-header">
            <div className="header-left">
              <span className="live-dot" />
              <span className="app-title">INNVERSE CircuitLab — Full Interactive Simulator</span>
            </div>

            <div className="header-actions">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="btn btn-sm btn-outline"
                title="Toggle Fullscreen Mode"
              >
                {isFullscreen ? '↙ Exit Fullscreen' : '⤢ Fullscreen View'}
              </button>
              <a
                href="/circuitlab.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-orange"
              >
                Open Standalone App ↗
              </a>
            </div>
          </div>

          <div className={`iframe-wrapper ${isFullscreen ? 'fullscreen-active' : ''}`}>
            {isFullscreen && (
              <button
                onClick={() => setIsFullscreen(false)}
                className="close-fullscreen-btn"
              >
                ✕ Close Fullscreen
              </button>
            )}
            <iframe
              src="/circuitlab.html"
              title="INNVERSE CircuitLab Simulator"
              className="circuitlab-iframe"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .circuitlab-app-container {
          padding: 20px 0 60px;
        }

        .app-frame-card {
          padding: 0;
          overflow: hidden;
          border: 1px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 20px 50px rgba(7, 23, 38, 0.5);
          border-radius: 16px;
          background: #071726;
        }

        .app-frame-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: rgba(11, 35, 65, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 12px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 10px var(--teal);
        }

        .app-title {
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .iframe-wrapper {
          position: relative;
          width: 100%;
          height: 820px;
          background: #000;
        }

        .circuitlab-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .fullscreen-active {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 99999;
          border-radius: 0;
        }

        .close-fullscreen-btn {
          position: absolute;
          top: 16px;
          right: 24px;
          z-index: 100000;
          background: var(--orange);
          color: #000;
          font-weight: 700;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 768px) {
          .iframe-wrapper {
            height: 700px;
          }
        }
      `}</style>
    </section>
  );
}
