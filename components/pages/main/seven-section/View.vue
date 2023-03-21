<template>
  <div class="w-full h-full flex justify-around">
    <div class="map w-full max-w-[1499px] h-full flex justify-around" style="margin: 0 auto">
      <div id="section7textcontainer" class="w-[25%] h-[300px]">
        <UIText tag="h1" class="font-trajan text-black text-[46px]">Окружение</UIText>
        <UIText tag="p" class="font-helvetica text-black text-[18px]">
          Коломна — исторический район Санкт-Петербурга, один из уникальных мест, откуда быстро и
          просто можно добраться до любой точки исторического центра города на Неве.
        </UIText>
      </div>

      <div id="section7values" class="w-[60%] flex justify-around items-start">
        <div class="flex flex-col">
          <PagesMainSevenSectionBadge class="my-2"> пешком </PagesMainSevenSectionBadge>
          <SharedDataItem v-for="el in walkData" :key="el.id" :item-data="el" />
        </div>

        <div class="flex flex-col">
          <PagesMainSevenSectionBadge class="my-2"> на автомобиле </PagesMainSevenSectionBadge>
          <SharedDataItem v-for="el in carData" :key="el.id" :item-data="el" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section7Type } from '~/helpers/types/constants/section-7.type';
import {
  SECTION_7_CAR_CONSTANTS,
  SECTION_7_WALK_CONSTANTS,
} from '~/helpers/constants/section-7.constants';

const carData: Ref<Section7Type[]> = ref(SECTION_7_CAR_CONSTANTS);
const walkData: Ref<Section7Type[]> = ref(SECTION_7_WALK_CONSTANTS);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-7',
      start: 'top 40%',
      pin: true,
      scrub: 2,
      end: 'bottom center',
    },
  });

  tl.to('#section7values', {
    y: '-770px',
    duration: 10,
  });
});
</script>
