<template>
  <Counter :count :increment :decrement :reset />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Counter from "./components/Counter.vue";

const count = ref(1);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>
