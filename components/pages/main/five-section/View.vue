<template>
  <div class="w-full h-[100vh] flex justify-between relative md:mt-0 mt-10">
    <div
      class="map w-full max-w-[1499px] h-full flex md:flex-row flex-col-reverse items-end justify-around p-5"
      style="margin: 0 auto"
    >
      <div
        id="section5dates"
        class="flex flex-col md:mx-10 mx-5 relative md:top-[5vh] top-[-50vh] md:left-0 left-[-10vw]"
      >
        <SharedDataItem v-for="el in data" :key="el.id" :item-data="el" />
      </div>

      <div class="flex flex-col md:w-1/2 w-full h-full relative top-0">
        <div id="section5textcontainer">
          <UIText
            tag="h1"
            id="section5text"
            class="font-trajan md:text-[calc(1vh+1vw*2.1)] text-[1.5rem] text-black"
          >
            РЕКОНСТРУКЦИЯ С БЕРЕЖНЫМ ОТНОШЕНИЕМ К ИСТОРИИ ГОРОДА
          </UIText>
          <UIText tag="p" class="font-helvetica md:text-[1.2rem] text-[1.1rem] h-[80vh] text-black">
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

gsap.registerPlugin(ScrollTrigger);

const data = ref(SECTION_5_CONSTANTS);

const { widthX } = usePageWidthWatcher();

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
          y: '-60vh',
          duration: 5,
        },
      );
    }

    if (widthX.value >= 768 && widthX.value < 1024) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '-20vh',
        },
        {
          x: 0,
          y: '-60vh',
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
          y: '-63vh',
          duration: 5,
        },
      );
    }

    if (widthX.value >= 1224) {
      tl.fromTo(
        '#section5dates',
        {
          x: 0,
          y: '40vh',
        },
        {
          x: 0,
          y: '-50vh',
          duration: 10,
        },
      );
    }
  }
});
</script>
