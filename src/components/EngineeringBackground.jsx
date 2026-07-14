import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/engineeringBackground.css';

/* ───────────────────────────────────────────────────────────
   ENGINEERING BACKGROUND v2 — "Floating Architectural Wireframes"

   Complete rewrite focused on:
   1. VISIBLE depth — large wireframe structures, not tiny dots
   2. Performance — no blur filters, no animated glow divs,
      single pointer listener, minimal springs
   3. Simplicity — ~30 DOM elements total, 3 spring values

   Architecture:
   - Static ambient gradients (one div, CSS only)
   - Perspective grid (CSS only, no JS animation)
   - 4 large wireframe frames (CSS 3D transforms)
   - 8 decorative nodes (static positioned)
   - 3 connection lines (1 with CSS dash animation)
   - Pointer parallax via 2 motion values → 3 depth transforms
   ─────────────────────────────────────────────────────────── */

/* ── Reduced node set: 8 nodes, more visible ─────────────── */
const NODES = [
  { id: 'n1', x: 15, y: 12,  type: 'dot',    depth: 'far' },
  { id: 'n2', x: 75, y: 18,  type: 'square', depth: 'far' },
  { id: 'n3', x: 48, y: 42,  type: 'ring',   depth: 'far' },
  { id: 'n4', x: 10, y: 58,  type: 'cross',  depth: 'mid' },
  { id: 'n5', x: 88, y: 35,  type: 'dot',    depth: 'mid' },
  { id: 'n6', x: 55, y: 65,  type: 'square', depth: 'mid' },
  { id: 'n7', x: 22, y: 78,  type: 'ring',   depth: 'near' },
  { id: 'n8', x: 72, y: 82,  type: 'cross',  depth: 'near' },
];

/* ── 3 connections — 1 with flow animation ───────────────── */
const CONNECTIONS = [
  { x1: 15, y1: 12,  x2: 10, y2: 58,  hasFlow: true },
  { x1: 75, y1: 18,  x2: 88, y2: 35,  hasFlow: false },
  { x1: 55, y1: 65,  x2: 72, y2: 82,  hasFlow: false },
];

/* ── Depth parallax multipliers ──────────────────────────── */
const DEPTH_PX = { far: 3, mid: 6, near: 10 };

/* ── Touch/motion detection ──────────────────────────────── */
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ═══════════════════════════════════════════════════════════ */
const EngineeringBackground = () => {
  /* ── Single pointer tracking system ─────────────────── */
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springCfg = { damping: 40, stiffness: 80, mass: 1 };
  const smoothX = useSpring(pointerX, springCfg);
  const smoothY = useSpring(pointerY, springCfg);

  /* ── Three depth transforms from 2 base values ─────── */
  const farX  = useTransform(smoothX, [-1, 1], [-DEPTH_PX.far, DEPTH_PX.far]);
  const farY  = useTransform(smoothY, [-1, 1], [-DEPTH_PX.far, DEPTH_PX.far]);
  const midX  = useTransform(smoothX, [-1, 1], [-DEPTH_PX.mid, DEPTH_PX.mid]);
  const midY  = useTransform(smoothY, [-1, 1], [-DEPTH_PX.mid, DEPTH_PX.mid]);
  const nearX = useTransform(smoothX, [-1, 1], [-DEPTH_PX.near, DEPTH_PX.near]);
  const nearY = useTransform(smoothY, [-1, 1], [-DEPTH_PX.near, DEPTH_PX.near]);

  /* ── Single pointer listener with RAF ──────────────── */
  const disabledRef = useRef(false);

  useEffect(() => {
    disabledRef.current = prefersReducedMotion() || isTouchDevice();
    if (disabledRef.current) return;

    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        pointerX.set((e.clientX / window.innerWidth) * 2 - 1);
        pointerY.set((e.clientY / window.innerHeight) * 2 - 1);
        raf = 0;
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pointerX, pointerY]);

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="eng-bg" aria-hidden="true">

      {/* LAYER 1: Static ambient gradients — pure CSS, zero JS */}
      <div className="eng-bg__ambient" />

      {/* LAYER 2: Perspective grid — pure CSS */}
      <div className="eng-bg__grid-container">
        <div className="eng-bg__grid" />
      </div>

      {/* LAYER 3: Large wireframe structures — parallax grouped */}

      {/* Far depth: hero frame + grid structure */}
      <motion.div
        className="eng-bg__parallax-far"
        style={{ x: farX, y: farY }}
      >
        <div className="eng-bg__frame eng-bg__frame--hero" />
        <div className="eng-bg__frame--hero-accent" />
        <div className="eng-bg__frame eng-bg__frame--contact" />
      </motion.div>

      {/* Mid depth: side frames + connections + mid nodes */}
      <motion.div
        className="eng-bg__parallax-mid"
        style={{ x: midX, y: midY }}
      >
        <div className="eng-bg__frame eng-bg__frame--mid" />
        <div className="eng-bg__frame eng-bg__frame--right" />

        {/* Connection lines */}
        <div className="eng-bg__connections">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {CONNECTIONS.map((c, i) => (
              <g key={i}>
                <line
                  x1={`${c.x1}%`} y1={`${c.y1}%`}
                  x2={`${c.x2}%`} y2={`${c.y2}%`}
                  className="eng-bg__conn-line"
                />
                {c.hasFlow && (
                  <line
                    x1={`${c.x1}%`} y1={`${c.y1}%`}
                    x2={`${c.x2}%`} y2={`${c.y2}%`}
                    className="eng-bg__conn-flow"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Near depth: nodes only */}
      <motion.div
        className="eng-bg__parallax-near"
        style={{ x: nearX, y: nearY }}
      >
        <div className="eng-bg__nodes">
          {NODES.map((node) => (
            <div
              key={node.id}
              className={`eng-bg__node eng-bg__node--${node.type}`}
              data-depth={node.depth}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                opacity: node.depth === 'far' ? 0.5 : node.depth === 'mid' ? 0.65 : 0.8,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(EngineeringBackground);
