import { ref } from "vue";

export const count = ref(1);

export const increment = () => count.value++;
export const decrement = () => count.value--;
export const reset = () => (count.value = 0);
