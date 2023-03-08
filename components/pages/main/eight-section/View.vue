<template>
  <div class="w-full h-full flex justify-between items-center p-5">
    <div
      class="map w-full max-w-[1499px] h-full flex items-center justify-around"
      style="margin: 0 auto"
    >
      <div id="section8img" class="w-[40%] h-full flex flex-col gap-5">
        <img data-speed="1.1" class="w-[90%] my-3" src="/img/images/section8img1.png" alt="img" />
        <img data-speed="1.1" class="w-[90%] my-3" src="/img/images/section8img2.png" alt="img" />
      </div>

      <div
        data-speed="1.3"
        id="section8text"
        class="w-1/2 h-full flex flex-col justify-center items-center p-[24px]"
      >
        <UIText id="section8text1" class="font-trajan text-[46px] text-black mb-20">
          Апартаменты
        </UIText>
        <UIText class="font-helvetica text-[18px] text-black">
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

gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-7',
      pin: '#section-wrapper-8',
      scrub: true,
      start: 'center 45%',
      end: 'bottom top',
    },
  });
});
</script>
