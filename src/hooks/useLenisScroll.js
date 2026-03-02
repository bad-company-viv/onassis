import { useEffect } from 'react';
import Lenis from 'lenis';

function useLenisScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.09,
      smoothWheel: true,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

export default useLenisScroll;
