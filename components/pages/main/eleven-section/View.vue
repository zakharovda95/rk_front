<template>
  <div class="w-full h-full">
    <div
      class="map w-full max-w-[1499px] h-full flex justify-around items-center"
      style="margin: 0 auto"
    >
      <div>
        <UIText class="font-trajan text-titleBrown text-[56px]">Римского</UIText>
      </div>
      <div>
        <PagesMainElevenSectionAddressBlock id="section11address" />
      </div>
      <div>
        <UIText class="font-trajan text-titleBrown text-[56px]">Корсакова</UIText>
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
    scrollTrigger: {
      trigger: '#section-wrapper-11',
      start: 'top 1%',
      end: 'top top',
    },
  });

  tl.fromTo(
    '#section11addressimg',
    {
      x: 0,
      y: '-50vh',
    },
    {
      x: 0,
      y: 0,
      duration: 0.5,
    },
  );

  tl.to('#section11addressnumber', {
    color: 'white',
    duration: 0.5,
  });
});
</script>
