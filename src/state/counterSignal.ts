import { signal } from "@preact/signals-react";

export const count = signal(1);

export const increment = () => count.value++;
export const decrement = () => count.value--;
export const reset = () => (count.value = 0);
