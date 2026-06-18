import { useEffect } from "react";

/**
 * Adds an intersection observer for any element with `data-reveal`.
 * Each element will animate only once when it enters the viewport.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--scroll");
          } else {
            // re-trigger when scrolling back up
            entry.target.classList.remove("reveal--scroll");
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

