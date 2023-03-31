<template>
  <div class="w-full h-full flex justify-around md:mt-0 mt-0">
    <div
      class="map w-full max-w-[1499px] h-full flex lg:flex-row flex-col justify-around items-center lg:items-start gap-10"
      style="margin: 0 auto"
    >
      <div id="section7textcontainer" class="lg:w-[30%] md:w-[40%] md:h-[300px] mx-5">
        <UIText
          tag="h1"
          class="font-trajan text-black mb-10 xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
        >
          Окружение
        </UIText>
        <UIText
          tag="p"
          class="font-helvetica text-black xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[12px] leading-[25px]"
        >
          Коломна — исторический район Санкт-Петербурга, один из уникальных мест, откуда быстро и
          просто можно добраться до любой точки исторического центра города на Неве.
        </UIText>
      </div>

      <div
        id="section7values"
        class="lg:w-[60%] w-full flex justify-center gap-5 lg:justify-around items-start md:mt-0 mt-10"
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

  if (widthX.value < 1024) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-7',
        start: 'top 60%',
        pin: '#section-wrapper-8',
        scrub: 2,
        end: '+=500',
      },
    });
  }

  if (widthX.value >= 1024) {
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
        y: `-${(widthX.value / 100 + heightY.value / 100) * 3.8}vh`,
        duration: 5,
      });
    }

    if (widthX.value >= 1024 && widthX.value < 1224) {
      tl.to('#section7values', {
        y: `-${widthX.value / 100 + (heightY.value / 100) * 6}vh`,
        duration: 5,
      });
    }

    if (widthX.value >= 1224) {
      tl.to('#section7values', {
        y: heightY.value > 800 ? '-100vh' : '-140vh',
        duration: 5,
      });
    }

    if (widthX.value >= 1600) {
      tl.to('#section7values', {
        y: heightY.value > 800 ? '-126vh' : '-140vh',
        duration: 5,
      });
    }
  }
});
</script>
