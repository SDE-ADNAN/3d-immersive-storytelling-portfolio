"use client";

import { useEffect, useRef } from 'react';
import { useMotion } from '../ui/MotionProvider';

const METRICS = [
  { id: 'm1', label: 'Retention uplift', value: 12 },
  { id: 'm2', label: 'SEO pages improved', value: 48 },
  { id: 'm3', label: 'Performance wins', value: 3 }
];

export default function Impact() {
  const refs = useRef<Record<string, HTMLSpanElement | null>>({});
  const { motionEnabled } = useMotion();

  useEffect(() => {
    if (!motionEnabled) {
      // set final values immediately
      METRICS.forEach((m) => {
        const el = refs.current[m.id];
        if (el) el.textContent = String(m.value);
      });
      return;
    }

    let killFn: (() => void) | undefined;

    (async () => {
      try {
        const gsapMod = await import('gsap');
        const gsap = (gsapMod as any).default ?? gsapMod;

        const tweens = METRICS.map((m) => {
          const el = refs.current[m.id];
          if (!el) return null;
          const obj = { val: 0 };
          return gsap.to(obj, {
            val: m.value,
            duration: 1.2,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = String(Math.round(obj.val));
            }
          });
        }).filter(Boolean);

        killFn = () => {
          tweens.forEach((t: any) => t && t.kill && t.kill());
        };
      } catch (e) {
        METRICS.forEach((m) => {
          const el = refs.current[m.id];
          if (el) el.textContent = String(m.value);
        });
      }
    })();

    return () => {
      if (killFn) killFn();
    };
  }, [motionEnabled]);

  return (
    <section id="impact" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="glass p-6">
          <h2 className="text-2xl font-semibold">Impact</h2>
          <p className="mt-2 text-sm text-neutral-300">Metrics and results tied back to Profile-3.pdf.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {METRICS.map((m) => (
              <div key={m.id} className="glass p-4 text-center">
                <div className="text-3xl font-bold" aria-hidden>
                  <span ref={(el) => { refs.current[m.id] = el; }}>{motionEnabled ? 0 : m.value}</span>
                </div>
                <div className="mt-2 text-sm text-neutral-300">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

