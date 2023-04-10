<template>
  <div
    id="loader"
    class="w-[100vw] h-[100vh] overflow-hidden fixed z-[10000] bg-titleBrown flex justify-center items-center"
  >
    <div class="w-[50vw] h-[50vw] max-w-[380px] max-h-[380px] bg-titleBrown overflow-hidden">
      <div
        id="loader-block"
        class="w-full h-full bg-[white] flex justify-center items-center relative left-[-50vw]"
      >
        <UIText
          id="loader-text"
          class="text-black md:text-[calc(1vh+1vw*12)] text-[calc(1vh+1vw*23)] font-regular font-bold"
          tag="h1"
        >
          22
        </UIText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const emit = defineEmits(['custom:is-loaded']);

onMounted((): void => {
  const tl = gsap.timeline();
  tl.to('#loader-block', { x: '+50vw', duration: 2, ease: 'SlowMo.easeOut' });
  tl.fromTo('#loader-text', { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.to('#loader-block', { x: '+100vw', duration: 0.5 });
  tl.to('#loader', { opacity: 0, duration: 0.5 });
  setTimeout(() => {
    emit('custom:is-loaded');
  }, 5000);
});
</script>
