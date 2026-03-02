import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function useGsapPageAnimations() {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    const scopeNode = scopeRef.current;
    if (!scopeNode) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray('.gsap-reveal', scopeNode);
      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
            },
          },
        );
      });

      const heroImage = scopeNode.querySelector('.hero-media img');
      if (heroImage) {
        gsap.to(heroImage, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: heroImage,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, scopeNode);

    return () => {
      ctx.revert();
    };
  }, []);

  return scopeRef;
}

export default useGsapPageAnimations;
