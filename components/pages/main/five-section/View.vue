<template>
  <div class="w-full h-[100vh] flex justify-between relative">
    <div
      class="map w-full max-w-[1499px] h-full flex items-end justify-around p-5"
      style="margin: 0 auto"
    >
      <div id="section5dates" class="flex flex-col xl:ml-10 relative top-[5vh]">
        <SharedDataItem v-for="el in data" :key="el.id" :item-data="el" />
      </div>

      <div class="flex flex-col w-1/2 h-full relative top-0">
        <div id="section5textcontainer">
          <UIText
            tag="h1"
            id="section5text"
            class="font-trajan text-[calc(1vh+1vw*2.1)] text-black"
          >
            РЕКОНСТРУКЦИЯ С БЕРЕЖНЫМ ОТНОШЕНИЕМ К ИСТОРИИ ГОРОДА
          </UIText>
          <UIText tag="p" class="font-helvetica text-[calc(1vh+1vw*0.8)] text-black">
            Реконструированное 6-этажное здание казармгвардейского экипажа начала XVIII века, в
            котором будут располагаться частные апартаменты и отель с расширенной инфраструктурой и
            безупречным сервисом.
          </UIText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SECTION_5_CONSTANTS } from '~/helpers/constants/section-5.constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const data = ref(SECTION_5_CONSTANTS);

onMounted((): void => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-5',
      scrub: 2,
      pin: true,
      start: 'top 30%',
      endTrigger: '#section5dates',
      end: 'bottom 120%',
      markers: true
    },
  });

  tl.fromTo(
    '#section5dates',
    { x: 0, y: 0 },
    {
      x: 0,
      y: '-59.5vh',
      duration: 10,
    },
  );
});

const { widthX } = usePageWidthWatcher();

const endResponsive = (): string => {
  if (widthX.value >= 1024) {
    return 'bottom 50%';
  }
  if (widthX.value >= 1224) {
    return 'bottom 40%';
  }
  return '';
};
</script>
