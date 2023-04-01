<template>
  <div class="w-full h-full relative bg-[white] flex justify-between items-center p-5">
    <div
      class="map w-full max-w-[1599px] h-full flex lg:flex-row flex-col items-start justify-around"
      style="margin: 0 auto"
    >
      <div class="md:inline hidden">
        <div class="w-[90%] relative left-0 overflow-hidden">
          <img
            id="s8img1"
            class="w-[130%] h-full my-3"
            src="/img/images/section8img1.png"
            alt="img"
          />
        </div>

        <div class="w-[90%] relative right-0 overflow-hidden">
          <img
            id="s8img2"
            class="w-[130%] h-full my-3"
            src="/img/images/section8img2.png"
            alt="img"
          />
        </div>
      </div>

      <swiper class="h-[100vw] w-full inline md:hidden" :slides-per-view="1">
        <swiper-slide>
          <img class="w-full h-full my-3" src="/img/images/section8img1.png" alt="img" />
        </swiper-slide>

        <swiper-slide>
          <img class="w-full h-full my-3" src="/img/images/section8img2.png" alt="img" />
        </swiper-slide>
      </swiper>

      <div
        id="section8text"
        class="lg:w-[40%] md:w-3/4 w-[90%] h-full flex flex-col justify-center items-start p-[24px]"
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

// onMounted((): void => {
//   if (widthX.value < 768) {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '#section-wrapper-8',
//         start: 'top 80%',
//         endTrigger: '#section-wrapper-8',
//         end: 'bottom center',
//         scrub: 1,
//       },
//     });
//
//     tl.fromTo('#section8img', { x: '80vw' }, { x: '-80vw', duration: 3 });
//   }
//
//   if (widthX.value >= 768 && widthX.value <= 1024) {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '#section8img',
//         start: 'top 80%',
//         scrub: 3,
//       },
//     });
//
//     tl.fromTo('#section8img', { x: '40vw' }, { x: '-40vw', duration: 10 });
//   }
//
//   if (widthX.value > 1024) {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: '#section8text',
//         start: 'top 80%',
//         scrub: 1,
//       },
//     });
//
//     gsap.fromTo(
//       '#section8text',
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 0.1,
//         scrollTrigger: {
//           trigger: '#section8text',
//         },
//       },
//     );
//
//     gsap.fromTo(
//       '#s8img1',
//       { x: '-1vw' },
//       {
//         x: '1vw',
//         duration: 0.1,
//         scrollTrigger: {
//           trigger: '#section8text',
//           start: 'top 80%',
//           scrub: 3,
//         },
//       },
//     );
//
//     gsap.fromTo(
//       '#s8img2',
//       { x: '1vw' },
//       {
//         x: '-1vw',
//         duration: 0.1,
//         scrollTrigger: {
//           trigger: '#section8text',
//           start: 'top 60%',
//           scrub: 1,
//         },
//       },
//     );
//   }
// });
</script>
