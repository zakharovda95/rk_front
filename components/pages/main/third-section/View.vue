<template>
  <div class="map w-full h-[100vh]">
    <div class="w-full max-w-[1499px] flex flex-col justify-center" style="margin: 0 auto">
      <UIText
        tag="h1"
        id="section3text"
        class="absolute z-[50] left-0 top-[12vh] font-trajan text-black md:w-[50%] w-[90%] md:text-[calc(1vh+1vw*2.5)] text-[calc(1vw+1vh*2.5)] max-[400px]:text-[1.5rem] md:mx-10 mx-5"
      >
        Атмосфера локации в историческом центре
      </UIText>
      <UIButton
        @click="options.modelValue = true"
        class="absolute flex flex-row z-[50] items-center gap-2 top-[calc(1vw+1vh*85)] left-[40%] hidden md:flex w-[250px]"
        type="rounded"
        color="gray"
        size="large"
        effect
        border="white"
      >
        <img alt="img" src="/img/icons/play2.svg" />
        Видео обзор локации
      </UIButton>
      <UIButton
        @click="options.modelValue = true"
        class="absolute flex z-[50] items-center justify-center gap-2 top-[calc(1vw+1vh*80)] left-[75%] inline md:hidden w-[80px] h-[80px]"
        type="rounded"
        color="gray"
        size="large"
        border="white"
      >
        <img
          alt="img"
          src="/img/icons/play2.svg"
          width="30"
          height="30"
          class="relative left-[5px]"
        />
      </UIButton>
    </div>

    <PagesMainThirdSectionMap class="w-[100vw] h-[100vh]" />

    <VueFinalModal
      v-model="options.modelValue"
      :teleport-to="options.teleportTo"
      :display-directive="options.displayDirective"
      :hide-overlay="options.hideOverlay"
      :overlay-transition="options.overlayTransition"
      :content-transition="options.contentTransition"
      :click-to-close="options.clickToClose"
      :esc-to-close="options.escToClose"
      :background="options.background"
      :lock-scroll="options.lockScroll"
      :swipe-to-close="options.swipeToClose"
      class="flex justify-center items-center"
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QUS9drYS5v8?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </VueFinalModal>

    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModalsContainer, VueFinalModal } from 'vue-final-modal';

gsap.registerPlugin(ScrollTrigger);

const getInitialValues = () => ({
  teleportTo: 'body',
  modelValue: false,
  displayDirective: 'if',
  hideOverlay: false,
  overlayTransition: 'vfm-fade',
  contentTransition: 'vfm-fade',
  clickToClose: true,
  escToClose: true,
  background: 'non-interactive',
  lockScroll: true,
  swipeToClose: 'none',
});
const options = ref(getInitialValues());

onMounted((): void => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-wrapper-3',
      endTrigger: '#section-wrapper-4',
      start: 'top top',
      end: 'bottom center',
      pin: true,
    },
  });

  tl.fromTo(
    '#section3text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
  );
});
</script>

<style scoped lang="scss">
@keyframes rotate {
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}
img:hover {
  animation: rotate;
  animation-duration: 1.5s;
}
</style>
