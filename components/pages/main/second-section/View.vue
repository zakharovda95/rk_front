<template>
  <div class="w-full h-[100vh] bg-[white] relative">
    <div class="w-full h-full max-w-[1499px] pt-[12vh]" style="margin: 0 auto">
      <UIText
        class="font-trajan text-black md:text-[calc(1vw+1vh*1.3)] text-[calc(1vw+1vh*1.5)] max-[400px]:text-[1rem] 2xl:w-full xl:w-4/5 lg:mx-10 mx-5"
      >
        В самом центре Санкт-Петербурга на месте пересечения канала Грибоедова и Крюкова мы создали
        уникальный проект реновации, сочетающий архитектуру 18 века и современные концепции
        премиального жилого пространства.
      </UIText>

      <PagesMainSecondSectionParalaxImages
        id="section2img"
        class="relative z-20 md:bottom-[-10vh] bottom-[-5vw] left-0"
      />

      <img
        id="section2img-1"
        src="/img/images/section2img.png"
        alt="img2"
        class="2xl:w-[550px] object-cover 2xl:h-[430px] lg:w-[450px] lg:h-[350px] md:w-[350px] md:h-[270px] w-[55vw] h-[55vw] absolute z-[30] m-auto top-0 bottom-0 left-0 right-0 2xl:top-[25%] xl:top-[10%] top-[30%]"
      />

      <div class="flex flex-col">
        <UIText
          id="section2text"
          tag="h1"
          class="absolute top-[150px] z-[35] font-trajan text-[46px] text-[white] w-[50%] text-[calc(1vw+1vh*3.1)] lg:ml-10 md:mx-10 mx-5"
        >
          Выберете свою идеальную планировку
        </UIText>

        <PagesMainSecondSectionNavigation
          class="absolute z-[35] right-0 bottom-[30px] md:w-[30%] w-80% mx-10"
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
  gsap.to('#section2img', {
    y: '-35vh',
    duration: 2,
    scrollTrigger: {
      trigger: '#section2img',
      start: 'top 70%',
      scrub: 2,
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-2',
      endTrigger: '#section-wrapper-3',
      start: 'top top',
      end: 'bottom center',
      scrub: 2,
      pin: true,
    },
  });

  tl.to('#section2img-1', {
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    duration: 10,
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

  tl.to(['#section2navigation', '#section2button'], {
    x: 0,
    y: 0,
    duration: 10,
  });
});
</script>
