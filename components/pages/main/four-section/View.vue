<template>
  <div class="w-full min-h-[100vh] md:pt-[10vh] pt-0 relative bg-[white]">
    <div class="map w-full max-w-[1599px] h-full flex flex-col" style="margin: 0 auto">
      <div class="md:w-[60%] w-full">
        <UIText
          tag="h1"
          id="section4text"
          class="w-full text-black font-trajan mt-10 xl:text-[46px] lg:text-[40px] lg:leading-[55px] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px] md:mx-10 mx-5"
        >
          Апартаменты <br />
          <span class="text-titleBrown"> Римского-Корсакова, 22:</span> <br />
          вдохновение историей <br />
          императорских яхт.
        </UIText>
      </div>

      <div class="h-full flex w-full justify-between md:flex-row flex-col mt-2">
        <div class="lg:w-[35%] md:w-[50%] md:mx-10 mx-5 w-[80%]">
          <UIText
            tag="p"
            class="w-full text-black font-helvetica xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[12px] leading-[25px] text mt-5 mr-5"
          >
            Более 100 лет по этому адресу размещался штаб Императорского флотского экипажа — самого
            привилегированного формирования, офицеры которого несли службу в царских резиденциях и
            на императорских яхтах.
          </UIText>
          <UIText
            tag="p"
            v-if="isReadMore"
            class="w-full text-black font-helvetica xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[12px] leading-[25px] text mt-5 mr-5"
          >
            Здесь находилась и квартира командиров Экипажа. В разное время ими были выдающиеся
            адмиралы Беллинсгаузен и Нилов, великие князья Алексей Александрович — брат Александра
            III, и Кирилл Владимирович — кузен Николая II. Последним почетным командиром и шефом
            Экипажа на протяжении 25 лет была Императрица Мария Федоровна, мать Николая II. <br />
            <br />
            Помимо самих строений штаба Императорского флотского экипажа, будет отреставрирован
            внутренний двор, соединенный с набережной парадными воротами— от вековых кирпичей до
            брусчатки, , по которой ступали русские императоры и выдающиеся адмиралы.
          </UIText>

          <PagesMainFourSectionReadMore class="my-3" @custom:read-more="isReadMore = !isReadMore" />
        </div>

        <div
          id="section4imgwrapper"
          class="2xl:w-[40%] 2xl:h-[80%] xl:w-[40%] xl:h-[80%] lg:w-[40%] lg:h-[70%] md:w-[45%] md:h-[70%] w-[85%] h-[55vh] overflow-hidden md:mt-0 my-10"
        >
          <img
            id="section4img"
            class="w-full h-auto bottom-1/3 md:bottom-0"
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
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const isReadMore: Ref<boolean> = ref(false);
const { widthX } = usePageWidthWatcher();

onMounted((): void => {
  if (widthX.value <= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-wrapper-4',
        start: 'top 10%',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
    tl.fromTo('#section4img', { x: '80vw', y: 0 }, { x: 0, y: 0, duration: 10 });
  }

  if (widthX.value > 768) {
    if (widthX.value > 1224) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-wrapper-4',
          start: () => 'top 50%',
          end: () => 'top 30%',
          scrub: true,
        },
      });
      tl.to('#section4img', {
        x: 0,
        y: '-20%',
        duration: 2,
        scrollTrigger: {
          trigger: '#section-wrapper-4',
          start: 'top 20%',
          end: 'bottom 80%',
          scrub: 2,
        },
      });
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-wrapper-4',
          start: () => 'top 50%',
          end: () => 'top 30%',
          scrub: true,
          pin: false,
        },
      });
      tl.to('#section4img', {
        x: 0,
        y: '-20%',
        duration: 2,
        scrollTrigger: {
          trigger: '#section-wrapper-4',
          start: 'top 20%',
          end: 'bottom 80%',
          scrub: 2,
        },
      });
    }
  }
});
</script>
