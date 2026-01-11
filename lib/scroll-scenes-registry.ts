import { ScrollScene } from './scroll-scene';

// Example registry: consumers (sections) should register or export scenes matching this shape.
// This file provides a canonical structure and a few examples to guide implementation.
export const SCROLL_SCENES: ScrollScene[] = [
  {
    id: 'hero-prologue',
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: false,
    pin: false,
    meta: { section: 'hero', lazy: false }
  },
  {
    id: 'identity-cards',
    trigger: '#identity',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    meta: { section: 'identity', lazy: true }
  },
  {
    id: 'experience-horizontal',
    trigger: '#experience',
    start: 'top top',
    end: 'bottom+=2000 top',
    scrub: true,
    pin: true,
    meta: { section: 'experience', lazy: true }
  }
];

export default SCROLL_SCENES;
