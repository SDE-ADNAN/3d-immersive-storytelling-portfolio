"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type MotionContextType = {
  motionEnabled: boolean;
  setMotionEnabled: (v: boolean) => void;
};

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [motionEnabled, setMotionEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('motionEnabled');
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReduced = mq ? mq.matches : false;

    if (stored === 'true') setMotionEnabled(true);
    else if (stored === 'false') setMotionEnabled(false);
    else setMotionEnabled(!prefersReduced);

    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('motionEnabled') == null) {
        setMotionEnabled(!e.matches);
      }
    };

    if (mq && 'addEventListener' in mq) mq.addEventListener('change', handler);
    else if (mq && 'addListener' in mq) (mq as any).addListener(handler);

    return () => {
      if (mq && 'removeEventListener' in mq) mq.removeEventListener('change', handler);
      else if (mq && 'removeListener' in mq) (mq as any).removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-motion', motionEnabled ? 'enabled' : 'reduced');
    }
    try {
      localStorage.setItem('motionEnabled', String(motionEnabled));
    } catch (e) {
      // ignore
    }
  }, [motionEnabled]);

  return (
    <MotionContext.Provider value={{ motionEnabled, setMotionEnabled }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotion must be used within MotionProvider');
  return ctx;
}
