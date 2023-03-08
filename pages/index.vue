<template>
  <NuxtLayout>
    <div class="smooth-wrapper" data-scroll-container>
      <div class="smooth-content">
        <div class="w-full min-h-[100vh] overflow-hidden">
          <div ref="container" id="container" class="w-full overflow-hidden" v-if="!isBurgerOpen">
            <section id="section-wrapper-1" class="w-full h-[100vh] bg-black" data-scroll-section>
              <PagesMainFirstSectionView />
            </section>

            <section id="section-wrapper-2" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainSecondSectionView />
            </section>

            <section id="section-wrapper-3" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainThirdSectionView />
            </section>

            <section id="section-wrapper-4" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainFourSectionView />
            </section>

            <section id="section-wrapper-5" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainFiveSectionView />
            </section>

            <section id="section-wrapper-6" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainSixSectionView />
            </section>

            <section id="section-wrapper-7" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainSevenSectionView />
            </section>

            <section id="section-wrapper-8" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainEightSectionView />
            </section>

            <section id="section-wrapper-9" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainNineSectionView />
            </section>

            <section id="section-wrapper-10" class="w-full min-h-[100vh]" data-scroll-section>
              <PagesMainTenSectionView />
            </section>

            <section id="section-wrapper-11" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainElevenSectionView />
            </section>

            <section id="section-wrapper-12" class="w-full h-[100vh]" data-scroll-section>
              <PagesMainTwelveSectionView />
            </section>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import usePageOffsetWatcher from '~/composables/usePageOffsetWatcher';
import { useCommonStore } from '~/store/common.store';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollSmoother);

const commonStore = useCommonStore();
const offset = usePageOffsetWatcher();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);

onMounted((): void => {
  // setTimeout(async () => {
  //   const LocomotiveScroll = await import('locomotive-scroll');
  //   scroll.value = new LocomotiveScroll.default({
  //     el: document.querySelector('.smooth-wrapper') as HTMLElement,
  //     smooth: true,
  //   });
  // }, 100);
  // const smoother = ScrollSmoother.create({
  //   wrapper: '.smooth-wrapper',
  //   content: '.smooth-content',
  //   smooth: 1.2,
  //   effects: true,
  // });
  //
  // smoother.effects('#section4img', { speed: 'auto' });
});

watch(
  offset,
  () => {
    commonStore.isThereOffset = offset.value > 400;
  },
  { deep: true, immediate: true },
);
</script>

<style></style>
