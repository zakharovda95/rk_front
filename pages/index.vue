<template>
  <NuxtLayout>
    <div class="w-full min-h-[100vh]">
      <SharedBackground blur class="fixed z-[-1]" />
      <SharedScroll class="fixed bottom-[10vh] right-[85vw] z-[100]" />
      <SharedAddressBlock
        class="fixed z-10 right-0 bottom-0"
        @custom:get-address-block-sizes="addressBlockSizes = $event"
      />

      <div id="container">
        <section id="section-wrapper-1" class="relative">
          <PagesMainFirstSectionView />
        </section>

        <section id="section-wrapper-2" class="relative">
          <PagesMainSecondSectionView :address-block-sizes="addressBlockSizes" />
        </section>

        <section id="section-wrapper-3" class="relative">
          <PagesMainThirdSectionView />
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import usePageOffsetWatcher from '~/composables/usePageOffsetWatcher';
import { useCommonStore } from '~/store/common.store';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const commonStore = useCommonStore();
const offset = usePageOffsetWatcher();

const addressBlockSizes: Ref<{ w: number; h: number } | null> = ref(null);
const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);

onMounted(() => {
  const tl = gsap.timeline();

  tl.fromTo('#section-wrapper-2', { x: 0, y: '100vh' }, { x: 0, y: 0, duration: 500 });
  tl.fromTo('#section2-text', { opacity: 0 }, { opacity: 1, duration: 500 });
  tl.fromTo('#address-block', { x: 0, y: 0 }, { x: '50vw', y: 0, duration: 500 });
  tl.fromTo('#section2-text', { x: 0, y: 0 }, { x: '-50vw', y: 0, duration: 500 });
  tl.to('#section2img', { width: '100%', height: '300%', duration: 500 });

  tl.fromTo('#section-wrapper-3', { x: 0, y: '200vh' }, { x: 0, y: 0, duration: 500 });

  ScrollTrigger.create({
    animation: tl,
    trigger: '#container',
    start: 'top top',
    end: 'bottom',
    pin: true,
    scrub: true,
  });
});

watch(
  offset,
  () => {
    commonStore.isThereOffset = offset.value > 50;
  },
  { deep: true, immediate: true },
);
</script>

<style></style>
