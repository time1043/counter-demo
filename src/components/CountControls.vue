<template>
  <div class="card" ref="cardRef">
    <div class="button-group">
      <button @click="store.decrement">- 1</button>
      <button @click="store.reset">Reset</button>
      <button @click="store.increment">+ 1</button>
      <button @click="incrementOutside">+1 Outside</button>
    </div>
    <p class="render-count">Renders: 1</p>
  </div>
</template>

<script setup lang="ts">
import { useFlash } from "@/composables/flash";
import { useCounterStore } from "@/state/counter";
import { useTemplateRef } from "vue";

const store = useCounterStore();

const cardRef = useTemplateRef<HTMLElement>("cardRef");
useFlash(cardRef);

function incrementOutside() {
  console.log("Outside of Vue");
  store.increment();
}
</script>
