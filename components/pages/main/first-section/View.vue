<template>
  <div class="w-full h-[100vh] relative">
    <SharedBackground blur class="fixed z-[-1] overflow-hidden" />

    <PagesMainFirstSectionAddressBlock
      class="absolute bottom-0 right-0 z-[5]"
      @custom:get-address-block-sizes="commonStore.addressBlockSizes = $event"
    />

    <div class="w-full h-full max-w-[1399px] px-5" style="margin: 0 auto" v-if="!isBurgerOpen">
      <PagesMainFirstSectionBrand class="relative top-[92vh] z-[5]" v-if="!isThereOffset" />
      <PagesMainFirstSectionHeader class="relative left-0 top-[40vh] z-[5]" />
    </div>

    <div id="section1img" class="img absolute z-[5] bottom-0 left-0" :style="imgSizes" />
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
    paused: true,
    scrollTrigger: {
      pin: true,
      trigger: '#section-wrapper-1',
      start: 'top top',
      endTrigger: '#section-wrapper-2',
      end: 'bottom top',
      scrub: 1,
    },
  });

  tl.to('#scroll', {
    opacity: 0,
    x: 0,
    y: 0,
    duration: 1,
  });

  tl.fromTo(
    '#section1img',
    { y: '100vh', x: 0 },
    {
      y: 0,
      x: 0,
      duration: 2,
    },
  );

  tl.fromTo(
    ['#play'],
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1,
    },
  );

  tl.fromTo(
    ['#phone', '#address-badge', '#plans'],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
  );

  tl.fromTo(
    '#section1text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
  );

  tl.to('#address-block', {
    x: '50vw',
    duration: 3,
  });

  tl.to('#section1text', {
    x: '-50vw',
    duration: 3,
  });

  tl.to('#header', {
    opacity: 0,
    x: 0,
    y: 0,
    duration: 2,
  });

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
