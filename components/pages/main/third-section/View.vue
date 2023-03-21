<template>
  <div class="map w-full h-[100vh]">
    <div class="relative w-full max-w-[1499px]" style="margin: 0 auto">
      <UIText
        tag="h1"
        id="section3text"
        class="absolute z-[50] left-0 top-[100px] font-trajan text-black w-[45%] text-[calc(1vh+1vw*2.1)] md:ml-10"
      >
        Атмосфера локации в историческом центре
      </UIText>
      <UIButton
        class="absolute flex z-[50] items-center gap-2 top-[90vh] left-[40%]"
        type="rounded"
        color="gray"
        size="large"
        effect
        border="white"
      >
        <img alt="img" src="/img/icons/play2.svg" />
        Видео обзор локации
      </UIButton>
    </div>
    <img
      alt="map"
      src="/img/components/map-clear.svg"
      class="w-[100vw] h-[100vh] relative z-[40] top-0 left-0 m-auto object-cover"
    />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-3',
      endTrigger: '#section-wrapper-4',
      start: 'top top',
      end: 'bottom center',
      pin: true,
    },
  });

  tl.fromTo(
    '#section3text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
  );
});
</script>
