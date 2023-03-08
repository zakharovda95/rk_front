<template>
  <div class="section6image w-full h-[100vh]" />
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '#section5text',
      pin: '#section-wrapper-6',
      scrub: true,
      start: 'top 50%',
      end: 'bottom top',
    },
  });
});
</script>

<style scoped lang="scss">
.section6image {
  background-image: url('/public/img/images/section6img.png');
  background-size: cover;
  background-position: left top;
}
</style>
