<template>
  <div class="section9image w-full h-[100vh]">
    <div
      class="map w-full max-w-[1499px] h-full flex flex-col justify-around"
      style="margin: 0 auto"
    >
      <div
        class="flex md:flex-row flex-col md:w-[70%] w-[90%] justify-center items-center h-[10%] gap-[5vw] md:ml-10 mx-5 relative top-[110px] max-[400px]:top-[130px]"
        id="section9header"
      >
        <UIText
          tag="h1"
          class="font-trajan text-[white] 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2rem] md:text-[1.8rem] text-[1.6rem]"
        >
          Service
        </UIText>
        <UIText
          tag="p"
          class="font-trajan text-[white] 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] text-[1.1rem] text-center max-[400px]:text-[0.9rem]"
        >
          Высочайший стандарт сервиса создает уровень комфорта, наполняющий атмосферой роскошного
          жизненного пространства.
        </UIText>
      </div>

      <div id="section9nav" class="flex items-end w-[90%] h-[70%] md:ml-10 mx-5">
        <PagesMainNineSectionNavigation v-if="widthX > 768" :data="data" />
        <PagesMainNineSectionMobileNavigation v-if="widthX <= 768" :data="data" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SECTION_9_CONSTANTS } from '~/helpers/constants/section-9.constants';
import { Section9Type } from '~/helpers/types/constants/section-9.type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

const data: Ref<Section9Type[]> = ref(SECTION_9_CONSTANTS);

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-8',
      scrub: true,
      pin: '#section-wrapper-9',
      start: 'top top',
      end: 'center bottom',
    },
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-9',
      scrub: 1,
      pin: '#section-wrapper-10',
      start: 'top 10%',
      end: 'center 20%',
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section9image',
      start: 'top top',
      scrub: 2,
      pin: '#section-wrapper-9',
    },
  });
  tl.fromTo('#section9header', { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo('#section9nav', { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo('#section9nav', { x: 0, y: 0 }, { x: 0, y: 0, duration: 5 });
});
</script>

<style scoped lang="scss">
.section9image {
  background-image: url('public/img/background/section9bg.png');
  background-size: cover;
  background-position: left top;
}
</style>
