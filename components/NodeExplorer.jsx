"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../data/siteContent';

export default function NodeExplorer() {
  const [selectedNode, setSelectedNode] = useState(SITE_DATA.nodes[0]);

  return (
    <div className="node-interactive-card">
      <div className="node-card-header">
        <span className="eyebrow">Interactive Ecosystem</span>
        <h3>Tap a Domain to Explore</h3>
      </div>

      <div className="node-orbit-grid">
        {SITE_DATA.nodes.map((node) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <motion.button
              key={node.id}
              whileHover={{ scale: 1.06, translateY: -4 }}
              whileTap={{ scale: 0.96 }}
              className={`node-chip ${isSelected ? 'active' : ''}`}
              onClick={() => setSelectedNode(node)}
              style={{
                borderColor: isSelected ? node.color : undefined,
                boxShadow: isSelected ? `0 0 20px ${node.color}55` : undefined
              }}
            >
              <span className="node-icon">{node.icon}</span>
              <span className="node-label">{node.tag}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedNode && (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="node-detail-panel"
            style={{ borderLeft: `4px solid ${selectedNode.color}` }}
          >
            <h4>
              {selectedNode.icon} {selectedNode.title}
            </h4>
            <p>{selectedNode.desc}</p>

            <div className="node-build-section">
              <span className="build-title">Sample Student Builds:</span>
              <div className="node-build-list">
                {selectedNode.builds.map((build, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="node-build-tag"
                  >
                    ✓ {build}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .node-card-header {
          margin-bottom: 20px;
        }

        .node-card-header h3 {
          font-size: 1.4rem;
          margin-top: 4px;
        }

        .build-title {
          display: block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--orange);
          margin-bottom: 8px;
        }

        .node-build-section {
          margin-top: 14px;
        }
      `}</style>
    </div>
  );
}
