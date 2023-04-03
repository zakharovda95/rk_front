<template>
  <div class="w-full min-h-[100vh] bg-[white] flex justify-between relative p-5">
    <div
      class="map w-full max-w-[1599px] h-full flex md:flex-row flex-col-reverse items-start justify-around"
      style="margin: 0 auto"
    >
      <div
        id="section5dates"
        class="flex flex-col md:mx-10 justify-between items-center mt-10 md:mt-0 md:w-auto w-full"
      >
        <SharedDataItem v-for="el in data" :key="el.id" :item-data="el" />
      </div>

      <div class="flex flex-col justify-start items-center lg:w-[35%] md:w-[50%] w-[90%] h-full">
        <div id="section5textcontainer" class="md:mr-0 mr-10">
          <UIText
            tag="h1"
            id="section5text"
            class="font-trajan xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px] text-black"
          >
            РЕКОНСТРУКЦИЯ С БЕРЕЖНЫМ ОТНОШЕНИЕМ К ИСТОРИИ ГОРОДА
          </UIText>
          <UIText
            tag="p"
            id="section5endtext"
            class="font-helvetica xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[12px] leading-[25px]text-black md:mt-7 mt-5"
          >
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
import { Section5Type } from '~/helpers/types/constants/section-5.type';

gsap.registerPlugin(ScrollTrigger);

const data: Ref<Section5Type[]> = ref(SECTION_5_CONSTANTS);

const { widthX } = usePageWidthWatcher();

const calculateEndAnimation = () => {
  const elemBottom = document.querySelector('#section5endtext')!.getBoundingClientRect().bottom;
  const elemBottom2 = document.querySelector('#section5dates')!.getBoundingClientRect().bottom;
  return `+=${elemBottom2 - elemBottom - 30}`;
};

onMounted((): void => {
  if (widthX.value >= 768) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section5textcontainer',
        start: 'center center',
        endTrigger: '#section5dates',
        end: () => calculateEndAnimation(),
        pin: true,
      },
    });
  }
});
</script>
