<template>
  <div class="w-full h-[100vh]">
    <SharedBackground blur class="fixed z-[0] overflow-hidden" />

    <div
      class="w-full h-full max-w-[1499px] px-5 relative"
      style="margin: 0 auto"
      v-if="!isBurgerOpen"
    >
      <PagesMainFirstSectionBrand class="absolute top-[92vh] z-[500]" v-if="!isThereOffset" />
      <PagesMainFirstSectionScroll class="absolute top-[80vh] z-[500]" v-if="!isThereOffset" />
    </div>

    <div class="absolute top-0 left-0 w-full h-[100vh] z-[2000]">
      <div class="flex flex-col w-full h-full justify-end">
        <div class="flex items-end">
          <div class="flex flex-col">
            <div id="section1text" class="flex flex-col justify-end ml-[10%]">
              <UIText tag="h1" class="font-trajan text-[white] text-[calc(1vh+1vw*2)] mb-2">
                Клубный проект
              </UIText>
              <UIText tag="h2" class="font-trajan text-[white] text-[calc(1vh+1vw*0.9)]">
                12 коллекционных резиденций,
                <br />
                включая 4 двухуровневых апартамента
              </UIText>
            </div>
            <div id="section1img" class="img mt-10" :style="imgSizes" />
          </div>

          <PagesMainFirstSectionAddressBlock
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

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const clientWidth: number = document.body.clientWidth;
  const innerWidth: number = window.innerWidth;

  scrollBarWidth.value = innerWidth - clientWidth;

  const tl = gsap.timeline({
    scrollTrigger: {
      pin: true,
      trigger: '#section-wrapper-1',
      start: 'top top',
      endTrigger: '#section-wrapper-2',
      end: 'bottom top',
      scrub: 1,
    },
  });

  tl.fromTo(
    '#section1text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.1,
      scrollTrigger: {
        trigger: '#section-wrapper-1',
        start: 'top 0.2%',
        end: 'bottom 50%',
        scrub: 0.2,
      },
    },
  );

  tl.fromTo(
    '#section1img',
    { y: '100vh', x: 0 },
    {
      y: 0,
      x: 0,
      duration: 3,
    },
  );

  tl.to('#section1img', {
    x: 0,
    y: 0,
    height: '100vh',
    width: '100vw',
    duration: 2,
  });

  tl.fromTo(
    '#section1img',
    { x: 0, y: 0 },
    {
      x: 0,
      y: 0,
      duration: 2,
    },
  );
});

const commonStore = useCommonStore();

const scrollBarWidth: Ref<number> = ref(0);

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);

const addressBlockSizes: Ref<AddressBlockSizesType | null> = computed(
  () => commonStore.addressBlockSizes,
);

const imgSizes: Ref<StyleType | null> = computed(() => {
  if (addressBlockSizes.value) {
    return {
      width: imgWidth.value,
      height: imgHeight.value,
    };
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