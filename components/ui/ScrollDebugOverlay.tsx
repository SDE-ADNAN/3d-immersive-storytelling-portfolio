"use client";

import React, { useEffect, useState } from 'react';
import { SCROLL_SCENES } from '../../lib/scroll-scenes-registry';
import { useLenis } from './ScrollProvider';

export default function ScrollDebugOverlay() {
  const lenis = (() => {
    try {
      return useLenis();
    } catch (e) {
      return undefined;
    }
  })();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const y = lenis && typeof lenis.scroll === 'number' ? lenis.scroll : window.scrollY;
      setScrollY(y || 0);
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [lenis]);

  // Only render in dev
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div aria-hidden className="fixed left-4 top-4 z-[9999] pointer-events-none">
      <div className="bg-black/60 text-white text-xs p-2 rounded-md glass">
        <div>Scroll Y: {Math.round(scrollY)}</div>
        <div className="mt-1">Scenes:</div>
        <div className="mt-1 space-y-1">
          {SCROLL_SCENES.map((s) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/80 rounded-full" />
              <div>{s.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
