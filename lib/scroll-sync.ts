// Client-only utilities to integrate GSAP ScrollTrigger with Lenis
export async function initScrollSync(lenis: any) {
  if (typeof window === 'undefined' || !lenis) return () => {};

  try {
    const gsap = await import('gsap');
    const ScrollTriggerModule = await import('gsap/ScrollTrigger');
    const ScrollTrigger = (ScrollTriggerModule as any).default ?? ScrollTriggerModule;

    try {
      const _gsap = (gsap as any).default ?? gsap;
      (_gsap as any).registerPlugin(ScrollTrigger);
    } catch (e) {
      // already registered or registration failed silently
    }

    // scrollerProxy to delegate scrolling to Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value: number) {
        if (arguments.length) {
          lenis.scrollTo(value);
        } else {
          return lenis.scroll || 0;
        }
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed'
    });

    const onLenisScroll = () => ScrollTrigger.update();
    if (lenis.on) lenis.on('scroll', onLenisScroll);

    // Ensure ScrollTrigger calculates sizing using Lenis
    ScrollTrigger.refresh();

    return () => {
      if (lenis.off) lenis.off('scroll', onLenisScroll);
    };
  } catch (err) {
    // GSAP not available or failed — fail gracefully
    // eslint-disable-next-line no-console
    console.warn('GSAP ScrollTrigger integration failed', err);
    return () => {};
  }
}
