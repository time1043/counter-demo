import { useEffect, useRef, type RefObject } from "react";

/**
 * Tracks how many times the owning component has rendered,
 * and flashes the referenced DOM element on each render.
 */
export function useFlash(ref: RefObject<HTMLElement | null>) {
  const count = useRef(0);

  // increment every render (no deps → runs on every render)
  count.current += 1;

  // flash the element after every render
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // disable transition so the color is set instantly
    el.style.transition = "none";
    el.style.backgroundColor = "rgba(100, 149, 237, 0.5)";

    const frame = requestAnimationFrame(() => {
      // re-enable transition so the color fades out smoothly
      el.style.transition = "background-color 1.2s ease";
      el.style.backgroundColor = "";
    });

    return () => cancelAnimationFrame(frame);
  });

  return count.current;
}
