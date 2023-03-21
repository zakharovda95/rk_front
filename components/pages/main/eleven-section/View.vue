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
    paused: true,
    scrollTrigger: {
      trigger: '#section-wrapper-11',
      start: 'top 15%',
      end: 'bottom 95%',
      pin: true,
      scrub: 3,
    },
  });

  tl.fromTo(
    '#s11block',
    {
      x: 0,
      y: 0,
    },
    {
      x: 0,
      y: 0,
      duration: 10,
    },
  );

  tl.fromTo(
    '#section11addressimg',
    {
      x: 0,
      y: '-50vh',
    },
    {
      x: 0,
      y: 0,
      duration: 10,
    },
  );

  tl.to('#section11addressnumber', {
    color: 'white',
    duration: 1,
  });

  tl.to('#section11addressimg', {
    x: 0,
    duration: 10,
  });
});
</script>
