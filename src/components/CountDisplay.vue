<template>
  <div class="card" ref="cardRef">
    <h2 class="count-display">{{ count }}</h2>
    <p class="render-count">Renders: 1</p>
  </div>
</template>

<script setup lang="ts">
import { useFlash } from "@/composables/flash";
import { count } from "@/state/counter";
import { useTemplateRef } from "vue";

const cardRef = useTemplateRef<HTMLElement>("cardRef");
useFlash(cardRef);
</script>
