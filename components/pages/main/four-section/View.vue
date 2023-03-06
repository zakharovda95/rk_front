<template>
  <div class="w-full h-[100vh] relative">
    <div class="map w-full max-w-[1399px] h-full flex" style="margin: 0 auto">
      <div class="w-[70%]">
        <UIText tag="h1" id="section4text" class="w-full text-black font-trajan text-[46px] mt-20">
          Апартаменты <br />
          <span class="text-titleBrown"> Римского-Корсакова, 22:</span>
          вдохновение историей императорских яхт.
        </UIText>

        <UIText tag="p" class="w-full text-black font-helvetica text-[19px] mt-5 mr-5">
          Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
          привилегированного формирования, офицеры которого несли службу в царских резиденциях и на
          императорских яхтах.
        </UIText>

        <PagesMainFourSectionReadMore class="mt-3" @custom:read-more="isReadMore = !isReadMore" />

        <UIText
          tag="p"
          v-if="isReadMore"
          class="w-full text-black font-helvetica text-[19px] mt-5 mr-5"
        >
          Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
          привилегированного формирования, офицеры которого несли службу в царских резиденциях и на
          императорских яхтах.
        </UIText>
      </div>

      <div class="h-full flex items-end justify-center w-[30%]">
        <img
          id="section4img"
          data-speed="1.4"
          alt="img"
          class="h-[400px] w-full relative bottom-[15%]"
          src="/img/images/section4img.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isReadMore: Ref<boolean> = ref(false);

onMounted((): void => {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: '#section-wrapper-3',
      endTrigger: '#section-wrapper-5',
      start: 'bottom 70%',
      end: 'top 30%',
      scrub: true,
    },
  });

  tl.fromTo(
    '#section4text',
    { x: '-5vw' },
    {
      x: 0,
      duration: 0.8,
    },
  );

  gsap.to('#section4img', {
    duration: 1,
    scrollTrigger: {
      trigger: '#section4img',
      start: 'top bottom',
      scrub: true,
    },
  });
});
</script>
