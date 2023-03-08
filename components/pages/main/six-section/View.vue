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
      trigger: '#section5dates',
      pin: '#section-wrapper-6',
      scrub: 1,
      start: 'top 40%',
      end: 'bottom center',
    },
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-6',
      endTrigger: '#section5dates',
      pin: true,
      scrub: true,
      start: 'top 0',
      end: 'bottom bottom',
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
