<template>
  <div class="w-full h-full flex justify-between items-center mt-10 md:mt-0 p-5">
    <div
      class="map w-full max-w-[1499px] h-full flex lg:flex-row flex-col items-center justify-around"
      style="margin: 0 auto"
    >
      <div
        id="section8img"
        class="lg:w-[40%] lg:h-full md:h-[50vh] md:w-auto w-[120vw] h-[350px] flex lg:flex-col md:flex-row gap-5"
      >
        <div class="w-[90%] relative left-0 overflow-hidden">
          <img
            id="s8img1"
            data-speed="1.1"
            class="w-[130%] h-full my-3"
            src="/img/images/section8img1.png"
            alt="img"
          />
        </div>

        <div class="w-[90%] relative right-0 overflow-hidden">
          <img
            id="s8img2"
            data-speed="1.1"
            class="w-[130%] h-full my-3"
            src="/img/images/section8img2.png"
            alt="img"
          />
        </div>
      </div>

      <div
        data-speed="1.3"
        id="section8text"
        class="lg:w-[40%] md:w-3/4 w-full h-full flex flex-col justify-center items-start p-[24px] relative md:bottom-[10vh] top-[50px] lg:top-[-80px] bottom-0 max-[400px]:mt-[120px]"
      >
        <UIText
          tag="h1"
          id="section8text1"
          class="font-trajan xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px] mb-10 text-black"
        >
          Апартаменты
        </UIText>
        <UIText
          class="font-helvetica xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[12px] leading-[25px] text-black"
        >
          «Римского-Корсакова, 22» — симбиоз роскошных гостевых апартаментов и уникальных частных
          резиденций. Пересечение архитектурного духа конца 18 века с передовыми коммуникациями и
          инженерией в окружении сервиса высочайших стандартов.
          <br />
          <br />
          Апартаменты займут 5-этажное здание Императорского флотского экипажа. 5-звездочный сервис
          обеспечит команда бутик-отеля, который станет частью комплекса, вместе с ресторанами,
          магазинами, галереей и даже спа- центром.
        </UIText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  if (widthX.value < 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-8',
        start: 'top 80%',
        endTrigger: '#section-wrapper-8',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.fromTo('#section8img', { x: '80vw' }, { x: '-80vw', duration: 3 });
  }

  if (widthX.value >= 768 && widthX.value <= 1024) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section8img',
        start: 'top 80%',
        scrub: 3,
      },
    });

    tl.fromTo('#section8img', { x: '40vw' }, { x: '-40vw', duration: 10 });
  }

  if (widthX.value > 1024) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section8text',
        start: 'top 80%',
        scrub: 1,
      },
    });

    gsap.fromTo(
      '#section8text',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: '#section8text',
        },
      },
    );

    gsap.fromTo(
      '#s8img1',
      { x: '-1vw' },
      {
        x: '1vw',
        duration: 0.1,
        scrollTrigger: {
          trigger: '#section8text',
          start: 'top 80%',
          scrub: 3,
        },
      },
    );

    gsap.fromTo(
      '#s8img2',
      { x: '1vw' },
      {
        x: '-1vw',
        duration: 0.1,
        scrollTrigger: {
          trigger: '#section8text',
          start: 'top 60%',
          scrub: 1,
        },
      },
    );
  }
});
</script>
