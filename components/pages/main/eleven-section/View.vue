<template>
  <div class="w-full h-full max-[400px]:mt-[300px]">
    <div
      class="map w-full max-w-[1499px] h-full flex justify-around items-center"
      style="margin: 0 auto"
    >
      <div class="hidden md:inline">
        <UIText class="font-trajan text-titleBrown text-[calc(1vw+1vh*4)]">Римского</UIText>
      </div>
      <div>
        <div class="inline md:hidden text-center">
          <UIText class="font-trajan text-titleBrown text-[2rem]"
            >Римского <br />
            Корсакова</UIText
          >
        </div>
        <PagesMainElevenSectionAddressBlock id="section11address" />
      </div>
      <div class="hidden md:inline">
        <UIText class="font-trajan text-titleBrown text-[calc(1vw+1vh*4)]">Корсакова</UIText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  if (widthX.value > 768) {
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

    tl.fromTo(
      '#section11addressnumber',
      { color: 'black' },
      {
        color: 'white',
        duration: 1,
      },
    );

    tl.to('#section11addressimg', {
      x: 0,
      duration: 10,
    });
  }
});
</script>
