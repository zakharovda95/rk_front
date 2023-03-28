<template>
  <div class="map w-full h-[100vh]">
    <div class="w-full max-w-[1499px] flex flex-col justify-center" style="margin: 0 auto">
      <UIText
        tag="h1"
        id="section3text"
        class="absolute z-[50] left-0 top-[12vh] font-trajan text-black md:w-[50%] w-[90%] md:text-[calc(1vh+1vw*2.5)] text-[calc(1vw+1vh*2.5)] max-[400px]:text-[1.5rem] md:mx-10 mx-5"
      >
        Атмосфера локации в историческом центре
      </UIText>
      <UIButton
        class="absolute flex flex-row z-[50] items-center gap-2 top-[calc(1vw+1vh*85)] left-[40%] hidden md:flex"
        type="rounded"
        color="gray"
        size="large"
        effect
        border="white"
      >
        <img alt="img" src="/img/icons/play2.svg" />
        Видео обзор локации
      </UIButton>
      <UIButton
        class="absolute flex z-[50] items-center justify-center gap-2 top-[calc(1vw+1vh*80)] left-[75%] inline md:hidden w-[80px] h-[80px]"
        type="rounded"
        color="gray"
        size="large"
        border="white"
      >
        <img
          alt="img"
          src="/img/icons/play2.svg"
          width="30"
          height="30"
          class="relative left-[5px]"
        />
      </UIButton>
    </div>
    <!--    <img-->
    <!--      alt="map"-->
    <!--      src="/img/components/map-clear.svg"-->
    <!--      class="w-[100vw] h-[100vh] relative z-[40] top-0 left-0 m-auto object-cover"-->
    <!--    />-->
    <PagesMainThirdSectionMap />
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

<style scoped lang="scss">
@keyframes rotate {
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}
img:hover {
  animation: rotate;
  animation-duration: 1.5s;
}
</style>
