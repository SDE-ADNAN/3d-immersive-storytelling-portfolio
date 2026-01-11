declare module '@studio-freight/lenis' {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smooth?: boolean;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    [key: string]: any;
  }

  export default class Lenis {
    constructor(opts?: LenisOptions);
    raf(time?: number): void;
    destroy(): void;
    stop(): void;
    start(): void;
    // any additional members are intentionally loosely typed
    [key: string]: any;
  }
}

// Also provide types for the renamed package 'lenis' so imports succeed regardless
declare module 'lenis' {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smooth?: boolean;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    [key: string]: any;
  }

  export default class Lenis {
    constructor(opts?: LenisOptions);
    raf(time?: number): void;
    destroy(): void;
    stop(): void;
    start(): void;
    [key: string]: any;
  }
}

