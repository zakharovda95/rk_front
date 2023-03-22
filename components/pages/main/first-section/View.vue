<template>
  <div class="w-full h-[100vh]">
    <SharedBackground blur class="fixed z-[0] overflow-hidden" />

    <div
      class="w-full h-full max-w-[1499px] px-5 relative"
      style="margin: 0 auto"
      v-if="!isBurgerOpen"
    >
      <PagesMainFirstSectionBrand
        class="absolute top-[92vh] z-[500] hidden md:inline"
        v-if="!isThereOffset"
      />
      <PagesMainFirstSectionScroll
        class="absolute top-[80vh] z-[500] hidden md:inline"
        v-if="!isThereOffset"
      />
    </div>

    <div class="absolute top-0 left-0 w-full h-[100vh] z-[2000]">
      <div class="flex flex-col w-full h-full justify-end">
        <div class="flex items-end">
          <div class="flex flex-col">
            <div id="section1text" class="flex flex-col justify-end ml-[10%]">
              <UIText
                tag="h1"
                class="font-trajan text-[white] md:text-[calc(1vh+1vw*2)] text-[2rem] mb-2"
              >
                Клубный проект
              </UIText>

              <UIText
                tag="h1"
                class="font-trajan text-[white] text-titleBrown md:hidden inline text-[2.3rem] mb-2"
              >
                Римского <br />
                Корсакова
              </UIText>

              <UIText
                tag="h2"
                class="font-trajan text-[white] md:text-[calc(1vh+1vw*0.9)] txt-[1.5rem]"
              >
                69 клубных резиденций
                <br />
                с сервисом 5-звездочного бутик-отеля
              </UIText>
            </div>
            <div id="section1img" class="img mt-10" :style="imgSizes" />
          </div>

          <PagesMainFirstSectionAddressBlock
            class="hidden md:inline"
            @custom:get-address-block-sizes="commonStore.addressBlockSizes = $event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';
import { AddressBlockSizesType } from '~/helpers/types/pages/index-page.type';
import { StyleType } from '~/helpers/types/style.type';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

gsap.registerPlugin(ScrollTrigger);

const { widthX } = usePageWidthWatcher();

onMounted(() => {
  const clientWidth: number = document.body.clientWidth;
  const innerWidth: number = window.innerWidth;

  scrollBarWidth.value = innerWidth - clientWidth;

  if (widthX.value <= 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: '#section-wrapper-1',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });

    tl.fromTo(
      '#section1text',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        paused: true,
        scrollTrigger: {
          trigger: '#section1img',
          start: 'top 140%',
          end: 'top 120%',
        },
      },
    );

    tl.fromTo(
      '#header',
      { y: '-100px' },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#section-wrapper-2',
          start: 'top bottom',
          end: 'bottom 10%',
          scrub: 1,
        },
      },
    );
  }

  if (widthX.value > 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: '#section-wrapper-1',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });

    tl.fromTo(
      '#section1text',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        paused: true,
        scrollTrigger: {
          trigger: '#section1img',
          start: 'top 140%',
          end: 'top 120%',
        },
      },
    );
    tl.fromTo(
      '#section1img',
      { y: '100vh', x: 0 },
      {
        y: 0,
        x: 0,
        duration: 10,
      },
    );

    tl.to('#section1img', {
      y: 0,
      x: 0,
      duration: 5,
    });

    tl.to('#section1img', {
      x: 0,
      y: 0,
      height: '100vh',
      width: '100vw',
      duration: 10,
    });

    tl.fromTo(
      '#header',
      { y: '-100px' },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#section1img',
          start: 'top 120%',
          end: 'top 100%',
          scrub: 1,
        },
      },
    );

    tl.fromTo(
      '#section1img',
      { x: 0, y: 0 },
      {
        x: 0,
        y: 0,
        duration: 5,
      },
    );
  }
});

const commonStore = useCommonStore();

const scrollBarWidth: Ref<number> = ref(0);

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);

const addressBlockSizes: Ref<AddressBlockSizesType | null> = computed(
  () => commonStore.addressBlockSizes,
);

const imgSizes: Ref<StyleType | null> = computed(() => {
  if (widthX.value >= 768) {
    if (addressBlockSizes.value) {
      return {
        width: imgWidth.value,
        height: imgHeight.value,
      };
    } else {
      return {
        width: '100vw',
        height: '40vh',
      };
    }
  }
  return null;
});

const imgWidth: Ref<string | null> = computed(() => {
  if (addressBlockSizes.value) {
    return `calc(100vw - ${scrollBarWidth.value + Number(addressBlockSizes.value.w)}px)`;
  } else {
    return null;
  }
});

const imgHeight: Ref<string | null> = computed(() => {
  if (addressBlockSizes.value) {
    return `${addressBlockSizes.value.h}px`;
  } else {
    return null;
  }
});
</script>

<style scoped lang="scss">
.img {
  background-image: url('/img/images/section-2-img.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
