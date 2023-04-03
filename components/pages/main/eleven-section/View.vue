<template>
  <div class="w-full h-[100vh] relative bg-[white]">
    <div
      class="map w-full max-w-[1599px] h-full flex justify-around items-center"
      style="margin: 0 auto"
    >
      <div class="hidden md:inline">
        <UIText
          class="font-trajan text-titleBrown xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
          >Римского</UIText
        >
      </div>
      <div>
        <div class="inline md:hidden text-center">
          <UIText
            class="font-trajan text-titleBrown xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
          >
            Римского <br />
            Корсакова
          </UIText>
        </div>
        <PagesMainElevenSectionAddressBlock id="section11address" />
      </div>
      <div class="hidden md:inline">
        <UIText
          class="font-trajan text-titleBrown xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
        >
          Корсакова
        </UIText>
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
        start: 'top top',
        end: '+=1000',
        pin: '#section-wrapper-11',
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
        y: '-150vh',
      },
      {
        x: 0,
        y: 0,
        duration: 5,
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

    tl.fromTo(
      '#s11block',
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 0,
        duration: 20,
      },
    );
  }
});
</script>
