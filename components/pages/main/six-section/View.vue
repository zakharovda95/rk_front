<template>
  <div class="relative overflow-hidden h-[80vh] top-0 left-0">
    <div class="section6image w-full h-[100vh]" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '#section5text',
      pin: '#section-wrapper-6',
      scrub: 2,
      start: 'top top',
      end: 'bottom bottom',
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-6',
      start: 'top 15%',
      end: 'bottom top',
      scrub: 2,
      pin: true,
    },
  });

  tl.to('.section6image', { x: 0, y: '-30%', duration: 2 });

  if (widthX.value >= 768) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section5text',
        pin: '#section-wrapper-7',
        scrub: 2,
        start: 'top center',
        end: 'top 30%',
      },
    });
  }
});
</script>

<style scoped lang="scss">
.section6image {
  background-image: url('/public/img/images/section6img.png');
  background-size: cover;
  background-position: left top;
}
</style>
