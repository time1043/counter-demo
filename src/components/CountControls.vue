<template>
  <div class="card" ref="cardRef">
    <div class="button-group">
      <button @click="decrement">- 1</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+ 1</button>
      <button @click="incrementOutside">+1 Outside</button>
    </div>
    <p class="render-count">Renders: 1</p>
  </div>
</template>

<script setup lang="ts">
import { useFlash } from "@/composables/flash";
import { useTemplateRef } from "vue";

const props = defineProps<{
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}>();

const cardRef = useTemplateRef<HTMLElement>("cardRef");
useFlash(cardRef);

function incrementOutside() {
  console.log("Outside of Vue");
  props.increment();
}
</script>
