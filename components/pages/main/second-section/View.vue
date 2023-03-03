<template>
  <div class="w-full h-[100vh] bg-[white]">
    <div class="w-full max-w-[1399px] pt-36" style="margin: 0 auto">
      <UIText class="font-trajan text-black text-[22px] w-full">
        В самом центре Санкт-Петербурга на месте пересечения канала Грибоедова и Крюкова мы создали
        уникальный проект реновации, сочетающий архитектуру 18 века и современные концепции
        премиального жилого пространства.
      </UIText>

      <div class="w-full flex justify-between items-center mt-24 relative">
        <img
          src="/img/images/section3-1.png"
          alt="img1"
          class="section2img h-[350px] relative top-0 left-0"
        />
        <img
          is="section2img-1"
          src="/img/images/section3-2.png"
          alt="img2"
          class="relative top-0 left-0"
        />
        <img
          src="/img/images/section3-3.png"
          alt="img3"
          class="section2img h-[350px] relative top-0 left-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      pin: true,
      trigger: '#section-wrapper-2',
      start: 'top bottom ',
      markers: true,
      scrub: 1,
    },
  });

  tl.fromTo('.section2img', { x: 0, y: '500px' }, { x: 0, y: 20, duration: 5 });
  tl.to('#section2img-1', {
    width: '100vw',
    height: '100vh',
    duration: 5,
  });
});
</script>
