<template>
  <div class="w-full h-[100vh]">
    <div class="map w-full max-w-[1499px] h-full flex flex-col" style="margin: 0 auto">
      <div class="w-[70%]">
        <UIText
          tag="h1"
          id="section4text"
          class="w-full text-black font-trajan 2xl:text-[46px] mt-[100px] xl:text-[calc(1vh+1vw*2)] xl:ml-10"
        >
          Апартаменты <br />
          <span class="text-titleBrown"> Римского-Корсакова, 22:</span>
          вдохновение историей императорских яхт.
        </UIText>
      </div>

      <div class="h-full flex w-full mt-2">
        <div class="w-[45%] xl:ml-10">
          <UIText tag="p" class="w-full text-black font-helvetica text-[19px] mt-5 mr-5">
            Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
            привилегированного формирования, офицеры которого несли службу в царских резиденциях и
            на императорских яхтах.
          </UIText>

          <PagesMainFourSectionReadMore class="mt-3" @custom:read-more="isReadMore = !isReadMore" />

          <UIText
            tag="p"
            v-if="isReadMore"
            class="w-full text-black font-helvetica text-[19px] mt-5 mr-5"
          >
            Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
            привилегированного формирования, офицеры которого несли службу в царских резиденциях и
            на императорских яхтах.
          </UIText>
        </div>
        <div
          id="section4imgwrapper"
          class="w-[45%] 2xl:h-[70%] xl:h-[80%] relative top-0 overflow-hidden"
        >
          <img
            id="section4img"
            data-speed="1.3"
            class="w-full h-auto"
            alt="img"
            src="/img/images/section4img.png"
          />
        </div>
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
    scrollTrigger: {
      trigger: '#section-wrapper-4',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
    },
  });

  tl.to('#section4imgwrapper', { x: 0, y: 0, duration: 2 });
});
</script>