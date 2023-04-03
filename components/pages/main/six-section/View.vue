<template>
  <div class="relative overflow-hidden md:h-[80vh] h-100vh top-0 left-0 bg-[white]">
    <div class="section6image w-full h-[100vh] bg-[white]" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  if (widthX.value > 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-6',
        pin: true,
        start: 'top 15%',
        end: '+=300',
        scrub: 2,
      },
    });

    tl.to('.section6image', { x: 0, y: '-30%', duration: 2 });
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
