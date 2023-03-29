<template>
  <div
    class="w-full h-[100vh] flex justify-between relative md:mt-0 mt-[10vh] max-[400px]:mt-[240px] max-[400px]:mb-[300px]"
  >
    <div
      class="map w-full max-w-[1499px] h-full flex md:flex-row flex-col-reverse md:items-end items-center justify-around p-5"
      style="margin: 0 auto"
    >
      <div
        id="section5dates"
        class="flex flex-col justify-center items-center md:mx-10 mx-5 relative md:top-[5vh] top-[-60vh] md:my-10"
      >
        <SharedDataItem v-for="el in data" :key="el.id" :item-data="el" />
      </div>

      <div class="flex flex-col 2xl:w-1/2 xl:w-[40%] md:w-[50%] w-full h-full relative top-0">
        <div id="section5textcontainer">
          <UIText
            tag="h1"
            id="section5text"
            class="font-trajan md:text-[calc(1vh+1vw*2.3)] text-[calc(1vh+1vw*3.2)] max-[400px]:text-[1.5rem] text-black"
          >
            РЕКОНСТРУКЦИЯ С БЕРЕЖНЫМ ОТНОШЕНИЕМ К ИСТОРИИ ГОРОДА
          </UIText>
          <UIText
            tag="p"
            id="section5endtext"
            class="font-helvetica md:text-[calc(1vh+1vw*0.9)] text-[calc(1vh+1vw*2)] 2xl:text-[1.5rem] max-[400px]:text-[1rem] h-[80vh] text-black"
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
import { usePageHeightWatcher } from '~/composables/usePageHeightWatcker';
import { Section5Type } from '~/helpers/types/constants/section-5.type';

gsap.registerPlugin(ScrollTrigger);

const data: Ref<Section5Type[]> = ref(SECTION_5_CONSTANTS);

const { widthX } = usePageWidthWatcher();
const { heightY } = usePageHeightWatcher();

onMounted((): void => {
  if (widthX.value < 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-5',
        scrub: 2,
        pin: false,
        start: 'top 30%',
        endTrigger: '#section5dates',
        end: 'bottom 50%',
      },
    });
  }

  if (widthX.value >= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-5',
        scrub: 2,
        pin: true,
        start: 'top 30%',
        endTrigger: '#section5dates',
        end: 'bottom 50%',
      },
    });

    if (widthX.value >= 768 && widthX.value < 1024) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '-20vh',
        },
        {
          x: 0,
          y: `-${widthX.value / 100 + (heightY.value / 100) * 5.4}vh`,
          duration: 5,
        },
      );
    }

    if (widthX.value >= 1024 && widthX.value < 1224) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '20vh',
        },
        {
          x: 0,
          y: `-${(widthX.value / 100 + heightY.value / 100) * 2.7}vh`,
          duration: 5,
        },
      );
    }

    if (widthX.value >= 1224 && widthX.value < 1500) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '40vh',
        },
        {
          x: 0,
          y: `-${widthX.value / 100 + (heightY.value / 100) * 3.5}vh`,
          duration: 10,
        },
      );
    }

    if (widthX.value >= 1500 && widthX.value < 1600) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '40vh',
        },
        {
          x: 0,
          y: `-${(widthX.value / 100 + heightY.value / 100) * 2}vh`,
          duration: 5,
        },
      );
    }

    if (widthX.value >= 1600) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '40vh',
        },
        {
          x: 0,
          y: `-${(widthX.value / 100 + heightY.value / 100) * 1.5}vh`,
          duration: 5,
        },
      );
    }
  }
});
</script>
