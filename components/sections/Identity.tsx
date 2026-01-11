"use client";

import { useEffect, useRef } from 'react';
import { useMotion } from '../ui/MotionProvider';

export default function Identity() {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    if (!motionEnabled) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const gsapMod = await import('gsap');
        const gsap = (gsapMod as any).default ?? gsapMod;
        const ScrollTriggerMod = await import('gsap/ScrollTrigger');
        const ScrollTrigger = (ScrollTriggerMod as any).default ?? ScrollTriggerMod;
        try {
          (gsap as any).registerPlugin(ScrollTrigger);
        } catch (e) {
          // already registered
        }

        const elems = cardsRef.current.filter(Boolean);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });

        tl.from(elems, {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          ease: 'power3.out',
          duration: 0.6
        });

        cleanup = () => {
          try {
            tl.kill();
            if ((ScrollTrigger as any).kill) (ScrollTrigger as any).kill();
          } catch (e) {
            // ignore
          }
        };
      } catch (e) {
        // fail silently — animation optional
        // eslint-disable-next-line no-console
        console.warn('Identity animation failed', e);
      }
    })();

    return () => {
      if (cleanup) cleanup();
    };
  }, [motionEnabled]);

  return (
    <section id="identity" ref={containerRef} className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6">
        <div className="glass p-6 space-y-4">
          <h2 className="text-2xl font-semibold">How I Think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Performance First', 'Systems Thinking', 'Business Impact'].map((text, i) => (
              <div
                key={text}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="glass p-4 opacity-0"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
