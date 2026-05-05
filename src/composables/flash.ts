import { onMounted, onUpdated, type Ref } from "vue";

/**
 * Tracks how many times the owning component has re-rendered,
 * and flashes the referenced DOM element on each update.
 *
 * Uses a plain variable (not a ref) so that incrementing the
 * count does not trigger another re-render — avoiding the
 * infinite loop that `onUpdated` + reactive state would cause.
 */
export function useFlash(elRef: Ref<HTMLElement | null>) {
  let renders = 1;

  onMounted(() => {
    const el = elRef.value;
    if (!el) return;
    const countEl = el.querySelector(".render-count");
    if (countEl) countEl.textContent = `Renders: 1`;
  });

  onUpdated(() => {
    renders++;

    const el = elRef.value;
    if (!el) return;

    const countEl = el.querySelector(".render-count");
    if (countEl) countEl.textContent = `Renders: ${renders}`;

    // flash
    el.style.transition = "none";
    el.style.backgroundColor = "rgba(100, 149, 237, 0.5)";

    requestAnimationFrame(() => {
      el.style.transition = "background-color 1.2s ease";
      el.style.backgroundColor = "";
    });
  });
}
