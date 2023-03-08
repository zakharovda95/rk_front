<template>
  <NuxtLayout>
    <div class="smooth-wrapper">
      <div class="smooth-content">
        <div class="w-full min-h-[100vh] overflow-hidden">
          <div ref="container" id="container" class="w-full overflow-hidden" v-if="!isBurgerOpen">
            <section id="section-wrapper-1" class="w-full h-[100vh] bg-black">
              <PagesMainFirstSectionView />
            </section>

            <section id="section-wrapper-2" class="w-full h-[100vh]">
              <PagesMainSecondSectionView />
            </section>

            <section id="section-wrapper-3" class="w-full h-[100vh]">
              <PagesMainThirdSectionView />
            </section>

            <section id="section-wrapper-4" class="w-full h-[100vh]">
              <PagesMainFourSectionView />
            </section>

            <section id="section-wrapper-5" class="w-full min-h-[100vh]">
              <PagesMainFiveSectionView />
            </section>

            <section id="section-wrapper-6" class="w-full h-[100vh]">
              <PagesMainSixSectionView data-speed="1.1" />
            </section>

            <section id="section-wrapper-7" class="w-full min-h-[110vh]">
              <PagesMainSevenSectionView data-speed="1.2" />
            </section>

            <section id="section-wrapper-8" class="w-full min-h-[110vh]">
              <PagesMainEightSectionView />
            </section>

            <section id="section-wrapper-9" class="w-full h-[100vh]">
              <PagesMainNineSectionView />
            </section>

            <section id="section-wrapper-10" class="w-full min-h-[100vh]">
              <PagesMainTenSectionView />
            </section>

            <section id="section-wrapper-11" class="w-full h-[100vh]">
              <PagesMainElevenSectionView />
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
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

const commonStore = useCommonStore();
const offset = usePageOffsetWatcher();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);

const container = ref(null);

onMounted((): void => {
  ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.2,
    effects: true,
    speed: 0.8,
  });
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