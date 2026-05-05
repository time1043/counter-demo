<template>
  <div class="card" ref="cardRef">
    <h2 class="count-display">{{ store.count }}</h2>
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
</script>
