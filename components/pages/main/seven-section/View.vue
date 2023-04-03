<template>
  <div class="w-full h-full flex justify-around relative bg-[white] pt-10 md:pt-0">
    <div
      class="map w-full max-w-[1599px] h-full flex md:flex-row flex-col justify-around items-start gap-10"
      style="margin: 0 auto"
    >
      <div id="section7textcontainer" class="lg:w-[30%] md:w-[40%] w-[80%] md:h-[300px] mx-5">
        <UIText
          tag="h1"
          class="font-trajan text-black mb-10 xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
        >
          Окружение
        </UIText>
        <UIText
          id="section7endtext"
          tag="p"
          class="font-helvetica text-black xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[12px] leading-[25px]"
        >
          Коломна — исторический район Санкт-Петербурга, один из уникальных мест, откуда быстро и
          просто можно добраться до любой точки исторического центра города на Неве.
        </UIText>
      </div>

      <div
        id="section7values"
        class="lg:w-[60%] w-full flex justify-center lg:gap-5 gap-0 md:justify-around items-start md:mt-0 mt-10"
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

const calculateEndAnimation = () => {
  const elemBottom = document.querySelector('#section7endtext')!.getBoundingClientRect().bottom;
  const elemBottom2 = document.querySelector('#section7values')!.getBoundingClientRect().bottom;
  return `+=${elemBottom2 - elemBottom - 30}`;
};

onMounted(() => {
  if (widthX.value > 768) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section7textcontainer',
        start: 'center center',
        endTrigger: '#section7values',
        pin: true,
        end: () => calculateEndAnimation(),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-7',
        start: 'top center',
        pin: '#section-wrapper-8',
        end: () => '+=200',
      },
    });
  }
});
</script>
