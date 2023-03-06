<template>
  <div class="w-full h-[100vh] bg-[white] relative z-[10]">
    <div class="relative w-full h-full max-w-[1399px] pt-36" style="margin: 0 auto">
      <UIText class="font-trajan text-black text-[22px] w-full">
        В самом центре Санкт-Петербурга на месте пересечения канала Грибоедова и Крюкова мы создали
        уникальный проект реновации, сочетающий архитектуру 18 века и современные концепции
        премиального жилого пространства.
      </UIText>

      <PagesMainSecondSectionParalaxImages class="relative z-20 bottom-[5%] left-0" />

      <UIText
        id="section2text"
        tag="h1"
        class="absolute bottom-[30px] z-[35] font-trajan text-[46px] text-[white] w-[50%]"
      >
        Выберете свою идеальную планировку
      </UIText>

      <PagesMainSecondSectionNavigation
        class="absolute z-[35] right-0 bottom-[30px] w-[30%] hover:opacity-[0.5]"
      />
    </div>

    <img
      id="section2img-1"
      src="/img/images/section2img.png"
      alt="img2"
      class="absolute w-[420px] h-[420px] bottom-[22vh] left-[38.5vw] z-[20]"
    />
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
      trigger: '#section-wrapper-2',
      endTrigger: '#section-wrapper-3',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
    },
  });

  tl.to('#section2img-1', {
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    duration: 3,
  });

  tl.fromTo(
    '#section2text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
  );

  tl.fromTo(
    ['#section2navigation', '#section2button'],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
  );
  tl.fromTo(
    '#section-wrapper-2',
    { x: 0, y: 0 },
    {
      x: 0,
      y: 0,
      duration: 3,
    },
  );
});
</script>
