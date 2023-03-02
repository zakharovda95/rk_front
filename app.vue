<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>
