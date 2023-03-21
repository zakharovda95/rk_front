<template>
  <div class="section9image w-full h-[100vh]">
    <div
      class="map w-full max-w-[1499px] h-full flex flex-col justify-around"
      style="margin: 0 auto"
    >
      <div class="flex w-[70%] h-[10%] gap-[5vw] xl:ml-10 relative top-[40px]" id="section9header">
        <UIText tag="h1" class="font-trajan text-[white] text-[46px]">Service</UIText>
        <UIText tag="p" class="font-helvetica text-[white] text-[18px]">
          Высочайший стандарт сервиса создает уровень комфорта, наполняющий атмосферой роскошного
          жизненного пространства.
        </UIText>
      </div>

      <div id="section9nav" class="flex items-end w-[80%] h-[50%] xl:ml-10">
        <div class="flex flex-col h-full justify-end w-[35%]">
          <UIText
            v-for="el in data"
            :key="data.id"
            class="font-helvetica text-[white] text-[32px] opacity-[0.7] cursor-pointer hover:translate-y-[-2px] transition-[0.2s] my-2"
            :style="{ opacity: el.text === activeText ? 1 : 0.7 }"
            tag="h3"
            @click="activeText = el.text"
          >
            {{ el.title }}
          </UIText>
        </div>

        <UIText class="relative left-10 font-trajan text-[white] text-[26px]">
          {{ activeText }}
        </UIText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SECTION_9_CONSTANTS } from '~/helpers/constants/section-9.constants';
import { Section9Type } from '~/helpers/types/constants/section-9.type';

const data: Ref<Section9Type[]> = ref(SECTION_9_CONSTANTS);
const activeText: Ref<string> = ref(data.value[0].text);
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
      start: 'top top',
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
