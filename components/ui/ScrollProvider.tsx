"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type LenisType = any;

const ScrollContext = createContext<{ lenis?: LenisType } | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<LenisType | undefined>(undefined);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    let lenisInstance: LenisType | undefined;

    async function init() {
      try {
        const mod = await import('@studio-freight/lenis');
        const Lenis = (mod as any).default ?? mod;
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          direction: 'vertical',
          gestureDirection: 'vertical',
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1
        });

        if (!mounted) return;
        setLenis(lenisInstance);

        const raf = (time: number) => {
          try {
            lenisInstance!.raf(time);
          } catch (e) {
            // ignore
          }
          rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);
      } catch (err) {
        // Lenis failed to import — that's fine for now.
        // Consumer code should guard for undefined lenis.
        // eslint-disable-next-line no-console
        console.warn('Lenis load error', err);
      }
    }

    init();

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try {
        lenisInstance?.destroy();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return <ScrollContext.Provider value={{ lenis }}>{children}</ScrollContext.Provider>;
}

export function useLenis() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useLenis must be used within ScrollProvider');
  return ctx.lenis;
}
