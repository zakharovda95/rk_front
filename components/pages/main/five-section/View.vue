<template>
  <div class="w-full h-[100vh] flex justify-between relative">
    <div
      class="map w-full max-w-[1399px] h-full flex items-end justify-between p-5"
      style="margin: 0 auto"
    >
      <div id="section5dates" class="flex flex-col">
        <PagesMainFiveSectionDateItem v-for="date in dates" :key="date.id" :item-data="date" />
      </div>

      <div class="flex flex-col w-1/2 h-full">
        <div id="section5textcontainer">
          <UIText id="section5text" class="font-trajan text-[46px] text-black">
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

const dates = ref(SECTION_5_CONSTANTS);

onMounted((): void => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: '#section5textcontainer',
      scrub: true,
      pin: true,
      start: 'center center',
      endTrigger: '#section5dates',
      end: 'bottom 60%',
    },
  });

  gsap.fromTo(
    '#section5text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#section-wrapper-4',
        start: 'bottom bottom',
      },
    },
  );
});
</script>
