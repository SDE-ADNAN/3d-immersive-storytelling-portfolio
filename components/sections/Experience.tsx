"use client";

import { useEffect, useRef } from 'react';
import { useMotion } from '../ui/MotionProvider';

const PANELS = [
  { company: 'Alongside', role: 'Senior Frontend', context: 'International AI workflows', outcome: 'Scaled editor & infra' },
  { company: 'Monsoonfish', role: 'Staff Engineer', context: 'E-commerce ecosystem', outcome: 'Improved retention' },
  { company: 'IOT EXCEL', role: 'Frontend Lead', context: 'Konva editor & systems', outcome: 'Built scalable editor' }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    if (!motionEnabled) return;

    let ctxCleanup: (() => void) | undefined;

    (async () => {
      try {
        const gsapMod = await import('gsap');
        const gsap = (gsapMod as any).default ?? gsapMod;
        const ScrollTriggerMod = await import('gsap/ScrollTrigger');
        const ScrollTrigger = (ScrollTriggerMod as any).default ?? ScrollTriggerMod;
        try {
          (gsap as any).registerPlugin(ScrollTrigger);
        } catch (e) {
          // ignore
        }

        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const panels = Array.from(track.querySelectorAll('.exp-panel')) as HTMLElement[];
        const totalScroll = track.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${Math.max(0, totalScroll)}`,
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        });

        tl.to(track, { x: () => `-${totalScroll}px`, ease: 'none' });

        const onResize = () => {
          if ((ScrollTrigger as any).refresh) (ScrollTrigger as any).refresh();
        };

        window.addEventListener('resize', onResize);

        ctxCleanup = () => {
          try {
            tl.kill();
          } catch (e) {
            // ignore
          }
          window.removeEventListener('resize', onResize);
        };
      } catch (e) {
        // animation optional
        // eslint-disable-next-line no-console
        console.warn('Experience horizontal animation failed', e);
      }
    })();

    return () => {
      if (ctxCleanup) ctxCleanup();
    };
  }, [motionEnabled]);

  // Reduced-motion fallback: vertical stacked panels
  if (!motionEnabled) {
    return (
      <section id="experience" className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          {PANELS.map((p) => (
            <article key={p.company} className="glass p-6">
              <h3 className="font-semibold">{p.company} — {p.role}</h3>
              <p className="text-sm text-neutral-300">{p.context}</p>
              <p className="mt-2 text-sm">{p.outcome}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="experience" ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div ref={trackRef} className="flex h-full" style={{ width: `${PANELS.length * 100}vw` }}>
          {PANELS.map((p) => (
            <article key={p.company} className="exp-panel w-screen h-full flex items-center justify-center px-6">
              <div className="glass p-8 max-w-3xl">
                <h3 className="text-xl font-semibold">{p.company}</h3>
                <p className="mt-1 text-sm text-neutral-300">{p.role} — {p.context}</p>
                <p className="mt-4">{p.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
