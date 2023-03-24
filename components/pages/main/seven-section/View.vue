<template>
  <div class="w-full h-full flex justify-around">
    <div
      class="map w-full max-w-[1499px] h-full flex md:flex-row flex-col justify-around"
      style="margin: 0 auto"
    >
      <div id="section7textcontainer" class="md:w-[25%] md:h-[300px] mx-5">
        <UIText tag="h1" class="font-trajan text-black md:text-[calc(1vw+1vh*2.5)]">
          Окружение
        </UIText>
        <UIText tag="p" class="font-helvetica text-black text-[calc(1vw+1vh*0.9)]">
          Коломна — исторический район Санкт-Петербурга, один из уникальных мест, откуда быстро и
          просто можно добраться до любой точки исторического центра города на Неве.
        </UIText>
      </div>

      <div
        id="section7values"
        class="md:w-[60%] w-full flex justify-around items-start md:mt-0 mt-10"
      >
        <div class="flex flex-col justify-center items-center">
          <PagesMainSevenSectionBadge class="my-2"> пешком </PagesMainSevenSectionBadge>
          <SharedDataItem v-for="el in walkData" :key="el.id" :item-data="el" />
        </div>

        <div class="flex flex-col justify-center items-center">
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
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';
import { usePageHeightWatcher } from '~/composables/usePageHeightWatcker';

const carData: Ref<Section7Type[]> = ref(SECTION_7_CAR_CONSTANTS);
const walkData: Ref<Section7Type[]> = ref(SECTION_7_WALK_CONSTANTS);

const { widthX } = usePageWidthWatcher();
const { heightY } = usePageHeightWatcher();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (widthX.value < 768) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-7',
        start: 'top 60%',
        pin: '#section-wrapper-8',
        scrub: 2,
        endTrigger: '#section7values',
        end: 'bottom bottom',
      },
    });
  }

  if (widthX.value >= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-7',
        start: 'top 40%',
        pin: true,
        scrub: 2,
        end: 'bottom center',
      },
    });

    gsap.timeline({
      scrollTrigger: {},
    });

    if (widthX.value >= 768 && widthX.value < 1024) {
      tl.to('#section7values', {
        y: `-${(widthX.value / 100 + heightY.value / 100) * 2.9}vh`,
        duration: 5,
      });
    }

    if (widthX.value >= 1024 && widthX.value < 1224) {
      tl.to('#section7values', {
        y: `-${widthX.value / 100 + (heightY.value / 100) * 6.5}vh`,
        duration: 5,
      });
    }

    if (widthX.value >= 1224) {
      tl.to('#section7values', {
        y: heightY.value > 800 ? '-95vh' : '-140vh',
        duration: 5,
      });
    }

    if (widthX.value >= 1600) {
      tl.to('#section7values', {
        y: heightY.value > 800 ? '-120vh' : '-140vh',
        duration: 5,
      });
    }
  }
});
</script>
