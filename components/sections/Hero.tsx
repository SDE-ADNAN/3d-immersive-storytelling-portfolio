"use client";

import LiquidEffectAnimation from '../ui/LiquidEffectAnimation';

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative">
      <LiquidEffectAnimation />
      <div className="glass p-8 max-w-2xl z-10 shadow-sm">
        <h1 className="text-4xl font-semibold">Adnan Khan</h1>
        <p className="mt-2 text-lg text-neutral-200">Senior Frontend Engineer — Systems, Performance, Product</p>
        <p className="mt-4 text-sm text-neutral-300">I translate complex UI systems into performant, impactful products.</p>
      </div>
    </section>
  );
}
