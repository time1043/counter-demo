<template>
  <div class="counter-container">
    <CountDisplay :count />
    <CountControls :increment :decrement :reset />
  </div>
</template>

<script setup lang="ts">
import CountControls from "./CountControls.vue";
import CountDisplay from "./CountDisplay.vue";

defineProps<{
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}>();
</script>
