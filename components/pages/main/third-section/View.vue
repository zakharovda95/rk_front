<template>
  <div class="w-full h-[100vh]">
    <div class="relative w-full max-w-[1399px]" style="margin: 0 auto">
      <UIText
        id="section3text"
        class="absolute z-[50] left-0 top-[20px] font-trajan text-black text-[46px] w-[45%]"
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
