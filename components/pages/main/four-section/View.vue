<template>
  <div class="w-full h-[100vh]">
    <div class="map w-full max-w-[1499px] h-full flex flex-col" style="margin: 0 auto">
      <div class="md:w-[70%] w-full">
        <UIText
          tag="h1"
          id="section4text"
          class="w-full text-black font-trajan mt-[100px] md:text-[calc(1vh+1vw*2.1)] text-[1.8rem] max-[400px]:text-[1.3rem] md:mx-10 mx-5"
        >
          Апартаменты <br />
          <span class="text-titleBrown"> Римского-Корсакова, 22:</span> <br />
          вдохновение историей <br />
          императорских яхт.
        </UIText>
      </div>

      <div class="h-full flex w-full justify-between md:flex-row flex-col mt-2">
        <div class="md:w-[45%] md:mx-10 mx-5 w-[80%]">
          <UIText
            tag="p"
            class="w-full text-black font-helvetica md:text-[calc(1vh+1vw*0.7)] text-[1.1rem] max-[400px]:text-[0.9rem] text mt-5 mr-5"
          >
            Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
            привилегированного формирования, офицеры которого несли службу в царских резиденциях и
            на императорских яхтах.
          </UIText>

          <PagesMainFourSectionReadMore class="mt-3" @custom:read-more="isReadMore = !isReadMore" />

          <UIText
            tag="p"
            v-if="isReadMore"
            class="w-full text-black font-helvetica md:text-[calc(1vh+1vw*0.7)] text-[1.1rem] max-[400px]:text-[0.9rem] text mt-5 mr-5"
          >
            Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
            привилегированного формирования, офицеры которого несли службу в царских резиденциях и
            на императорских яхтах.
          </UIText>
        </div>

        <div
          id="section4imgwrapper"
          class="2xl:w-[40%] 2xl:h-[80%] xl:w-[40%] xl:h-[80%] lg:w-[40%] lg:h-[70%] md:w-[45%] md:h-[70%] w-[90%] h-[350px] relative md:bottom-[50px] bottom-[-50px] overflow-hidden"
        >
          <img id="section4img" class="w-full h-auto" alt="img" src="/img/images/section4img.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const isReadMore: Ref<boolean> = ref(false);
const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  if (widthX.value > 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-4',
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: 3,
        pin: '#section-wrapper-5',
      },
    });
    tl.to('#section4img', { x: 0, y: '-20%', duration: 2 });
  }

  if (widthX.value <= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-4',
        start: 'top 50%',
        end: 'bottom 80%',
        scrub: 3,
        pin: '#section-wrapper-5',
      },
    });
    tl.fromTo('#section4img', { x: '80vw', y: 0 }, { x: 0, y: 0, duration: 10 });
  }
});
</script>
