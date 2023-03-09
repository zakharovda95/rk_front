<template>
  <div class="w-full h-[100vh] flex justify-between relative">
    <div
      class="map w-full max-w-[1499px] h-full flex items-end justify-around p-5"
      style="margin: 0 auto"
    >
      <div id="section5dates" class="flex flex-col xl:ml-10">
        <SharedDataItem v-for="el in data" :key="el.id" :item-data="el" />
      </div>

      <div class="flex flex-col w-1/2 h-full relative top-0">
        <div id="section5textcontainer">
          <UIText
            id="section5text"
            class="font-trajan 2xl:text-[46px] xl:text-[calc(1vh+1vw*2)] text-black"
          >
            РЕКОНСТРУКЦИЯ С БЕРЕЖНЫМ ОТНОШЕНИЕМ К ИСТОРИИ ГОРОДА
          </UIText>
          <UIText class="font-helvetica text-[18px] text-black">
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

gsap.registerPlugin(ScrollTrigger);

const data = ref(SECTION_5_CONSTANTS);

onMounted((): void => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-5',
      scrub: 3,
      pin: '#section5textcontainer',
      start: 'top 30%',
      endTrigger: '#section5dates',
      end: 'bottom 68%',
    },
  });

  tl.fromTo(
    '#section5text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: 'section5dates',
        start: 'top 10%',
        scrub: 2,
      },
    },
  );
});
</script>
