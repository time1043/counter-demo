<template>
  <Counter />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import Counter from "./components/Counter.vue";
import { counterKey } from "./composables/useCounter";

const count = ref(1);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);

provide(counterKey, { count, increment, decrement, reset });
</script>
