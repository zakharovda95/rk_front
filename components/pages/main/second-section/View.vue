<template>
  <div class="w-full h-[100vh] bg-[white] relative">
    <div class="w-full h-full max-w-[1499px] 2xl:pt-36 xl:pt-[120px]" style="margin: 0 auto">
      <UIText class="font-trajan text-black text-[calc(1vh+1vw*0.8)] 2xl:w-full xl:w-4/5 xl:ml-10">
        В самом центре Санкт-Петербурга на месте пересечения канала Грибоедова и Крюкова мы создали
        уникальный проект реновации, сочетающий архитектуру 18 века и современные концепции
        премиального жилого пространства.
      </UIText>

      <PagesMainSecondSectionParalaxImages
        id="section2img"
        class="relative z-20 bottom-[-10vh] left-0"
      />

      <img
        id="section2img-1"
        src="/img/images/section2img.png"
        alt="img2"
        class="2xl:w-[550px] 2xl:h-[430px] xl:w-[450px] xl:h-[350px] absolute z-[30] m-auto top-0 bottom-0 left-0 right-0 2xl:top-[25%] xl:top-[10%]"
      />

      <UIText
        id="section2text"
        tag="h1"
        class="absolute bottom-[30px] z-[35] font-trajan text-[46px] text-[white] w-[50%] 2xl:text-[46px] xl:text-[calc(1vh+1vw*2)] xl:ml-10"
      >
        Выберете свою идеальную планировку
      </UIText>

      <PagesMainSecondSectionNavigation class="absolute z-[35] right-0 bottom-[30px] w-[30%]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  gsap.to('#section2img', {
    y: '-10vh',
    duration: 3,
    scrollTrigger: {
      trigger: '#section2img',
      start: 'top 40%',
      markers: true,
    },
  });

  gsap.to('#section2img-1', {
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    duration: 3,
    scrollTrigger: {
      trigger: '#section2img-1',
      start: 'center center',
      scrub: true,
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-2',
      endTrigger: '#section-wrapper-3',
      start: 'top top',
      end: 'bottom center',
      scrub: true,
      pin: true,
    },
  });
  tl.fromTo(
    '#section2text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
    },
  );

  tl.fromTo(
    ['#section2navigation', '#section2button'],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
    },
  );
});
</script>
