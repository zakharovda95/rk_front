<template>
  <div class="w-full h-full bg-[white] relative">
    <div class="w-full h-full max-w-[1599px] pt-[12vh]" style="margin: 0 auto">
      <UIText
        class="font-trajan text-black xl:text-[26px] xl:leading-[40px] lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[32px] text-[16px] leading-[28px] max-[400px]:text-[1rem] 2xl:w-full xl:w-4/5 md :mx-10 mx-5"
      >
        В самом центре Санкт-Петербурга на месте пересечения канала Грибоедова и Крюкова мы создали
        уникальный проект реновации, сочетающий архитектуру 18 века и современные концепции
        премиального жилого пространства.
      </UIText>

      <PagesMainSecondSectionParalaxImages
        id="section2img"
        class="relative z-20 md:bottom-[-10vh] bottom-[10vh] left-0"
      />

      <div
        id="section2img-1"
        class="bg-titleBrown 2xl:w-[550px] 2xl:h-[430px] lg:w-[450px] lg:h-[350px] md:w-[350px] md:h-[270px] w-[55vw] h-[55vw] absolute z-[30] m-auto top-0 bottom-0 left-0 right-0 2xl:top-[25%] xl:top-[10%] top-[30%]"
      >
        <img
          id="section2-img"
          :src="`/img/background/${img}.png`"
          alt="img2"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="md:flex hidden flex-col">
        <UIText
          id="section2text"
          tag="h1"
          class="absolute top-[150px] z-[35] font-trajan text-[white] w-[50%] lg:ml-10 md:mx-10 mx-5 xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
        >
          Выберете свою идеальную планировку
        </UIText>

        <PagesMainSecondSectionNavigation
          @custom:select-floor="test($event)"
          class="absolute z-[35] right-0 bottom-[30px] md:w-[40%] w-80% mx-10"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';
import { FloorType } from '~/helpers/types/common.type';

gsap.registerPlugin(ScrollTrigger);

const floor: Ref<FloorType | null> = ref(null);

const test = (ev: FloorType) => {
  setTimeout(() => {
    floor.value = ev;
    if (floor.value === ev) {
      return;
    }
  }, 500);
  gsap.fromTo('#section2-img', { opacity: 0 }, { opacity: 1, duration: 1 });
};

const img = computed(() => {
  if (floor.value) {
    switch (floor.value.floor) {
      case '2':
        return 'floor-2';
      case '3':
        return 'floor-3';
      case '4':
        return 'floor-4';
      case '5':
        return 'floor-5';
    }
  }
});

const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  if (widthX.value > 768) {
    gsap.to('#section2img', {
      y: '-25vh',
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
  }
});
</script>
