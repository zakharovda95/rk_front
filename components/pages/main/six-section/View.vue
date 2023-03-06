<template>
  <div class="section6image w-full h-[100vh]" />
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: '#section5textcontainer',
      scrub: true,
      pin: '.section6image',
      start: 'top center',
      end: 'bottom top',
    },
  });
});
</script>

<style scoped lang="scss">
.section6image {
  background-image: url('/public/img/images/section6img.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: left top;
}
</style>
