<template>
  <div class="w-full h-full">
    <div
      class="map w-full max-w-[1399px] h-full flex flex-col justify-center items-center"
      style="margin: 0 auto"
    >
      <div is="section10textwrapper" class="w-full flex flex-col justify-around mt-10">
        <UIText
          id="section10text1"
          class="font-trajan text-black 2xl:text-[46px] xl:text-[calc(1vh+1vw*2)] xl:ml-10 text-left"
        >
          Высокотехнологичное оснащение
        </UIText>
        <UIText
          id="section10text2"
          class="font-trajan text-black 2xl:text-[46px] xl:text-[calc(1vh+1vw*2)] xl:mr-10 text-right"
        >
          для комфортной жизни
        </UIText>
      </div>

      <div class="flex items-center text-center max-w-[800px] mt-10">
        <UIText class="font-helvetica text-black text-[18px]">
          Клубный проект «Римского-Корсакова, 22», вдохновленный утонченной концепцией бутикового
          жилья, предлагает жителям максимум комфорта и удобств. Апартаменты оснащены современными
          технологиями, что обеспечивает высокое качество жизни и безопасность для всех жителей.
        </UIText>
      </div>

      <div class="flex flex-wrap justify-between mt-10">
        <PagesMainTenSectionItem class="w-[29%]">
          <span class="text-titleBrown">Плавающий пол с шумоизоляцией</span> Rockwool
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          <span class="text-titleBrown">Трехступенчатая фильтрация воды с ультрафиолетом,</span>
          горизонтальная поквартирная разводка немецкими трубами Rehau
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          <span class="text-titleBrown">Межквартирные перегородки толщиной 260 мм,</span> с
          шумоизоляцией Rockwool
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          <span class="text-titleBrown">Бесключевой доступ</span> и видеонаблюдение на территории и
          в парадной, видеодомофон с возможностью доступа со смартфона
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          <span class="text-titleBrown">Централизованная бойлерная</span> на 7000 литров,
          позволяющая круглогодично обеспечивать жильцов и гостей горячей водой
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          Центральная премиальная
          <span class="text-titleBrown">VRF-система кондиционирования</span> «City Multy» от
          Mitsubishi Electric
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          <span class="text-titleBrown">Зарядка</span> для электрических автомобилей на территории
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          Двухкамерные <span class="text-titleBrown">деревянные окна</span> из лиственницы до 2,8
          метров высотой
        </PagesMainTenSectionItem>

        <PagesMainTenSectionItem class="w-[29%]">
          Просторный <span class="text-titleBrown">панорамный лифт</span> Orona (Испания)
        </PagesMainTenSectionItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Section10Type } from '~/helpers/types/constants/section-10.type';
import { SECTION_10_CONSTANTS } from '~/helpers/constants/section-10.constants';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data: Ref<Section10Type[]> = ref(SECTION_10_CONSTANTS);

onMounted(() => {
  gsap.fromTo(
    '#section10text1',
    {
      x: '-2vw',
    },
    {
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '#section10text1',
        start: 'top 20%',
        end: 'top top',
        scrub: true,
      },
    },
  );

  gsap.fromTo(
    '#section10text2',
    {
      x: '2vw',
    },
    {
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '#section10text1',
        start: 'top 20%',
        end: 'top top',
        scrub: true,
      },
    },
  );
});
</script>
