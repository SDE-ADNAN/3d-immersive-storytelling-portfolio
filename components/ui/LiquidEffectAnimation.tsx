"use client";

import React, { useEffect, useRef } from 'react';
import { useMotion } from './MotionProvider';

export default function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  
  let motionEnabled = true;
  try {
    const result = useMotion();
    motionEnabled = result.motionEnabled;
  } catch (e) {
    motionEnabled = true;
  }

  useEffect(() => {
    if (!motionEnabled) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let mounted = true;

    function resize() {
      if (!canvas) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMove(e: MouseEvent) {
      mouse.current.tx = e.clientX;
      mouse.current.ty = e.clientY;
    }

    function draw() {
      if (!mounted) return;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas ? canvas.width / dpr : 0;
      const h = canvas ? canvas.height / dpr : 0;

      if (!ctx) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Subtle radial gradient centered on cursor
      const grd = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        Math.max(w, h) * 0.6
      );
      grd.addColorStop(0, 'rgba(255,255,255,0.02)');
      grd.addColorStop(0.5, 'rgba(255,255,255,0.008)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // subtle noise overlay
      ctx.globalAlpha = 0.015;
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.02})`;
        ctx.fillRect(Math.random() * w, Math.random() * h, Math.random() * 2, Math.random() * 2);
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);

    rafRef.current = requestAnimationFrame(draw);

  return () => {
    mounted = false;
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMove);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };
}, [motionEnabled]);

  // Reduced-motion fallback: render a subtle gradient div with noise
  if (!motionEnabled) {
    return <div className="absolute inset-0 bg-gradient-to-b from-[#071023] to-[#08182c] opacity-80" aria-hidden />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ transform: 'translateZ(0)' }}
      aria-hidden
    />
  );
}

