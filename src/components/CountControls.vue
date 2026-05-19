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
import { useCounter } from "@/composables/useCounter";

const { increment, decrement, reset } = useCounter();

const cardRef = useTemplateRef<HTMLElement>("cardRef");
useFlash(cardRef);

function incrementOutside() {
  console.log("Outside of Vue");
  increment();
}
</script>
