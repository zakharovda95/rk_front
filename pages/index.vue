<template>
  <NuxtLayout>
    <div class="w-full min-h-[100vh] overflow-hidden">
      <div ref="container" id="container" class="w-full overflow-hidden">
        <section id="section-wrapper-1" class="w-full h-[100vh] bg-black">
          <PagesMainFirstSectionView />
        </section>

        <section id="section-wrapper-2" class="w-full h-[100vh]">
          <PagesMainSecondSectionView />
        </section>

        <section id="section-wrapper-2.1" class="w-full" v-if="widthX <= 768">
          <PagesMainSecondSectionViewMobile />
        </section>

        <section id="section-wrapper-3" class="w-full md:h-[100vh] h-[105vh]">
          <PagesMainThirdSectionView />
        </section>

        <section id="section-wrapper-4" class="w-full min-h-[100vh]">
          <PagesMainFourSectionView />
        </section>

        <section id="section-wrapper-5" class="w-full min-h-[100vh] bg-[white]">
          <PagesMainFiveSectionView />
        </section>

        <section id="section-wrapper-6" class="w-full md:h-[100vh] h-[40vh] bg-[white]">
          <PagesMainSixSectionView />
        </section>

        <section id="section-wrapper-7" class="w-full min-h-[100vh] bg-[white]">
          <PagesMainSevenSectionView />
        </section>

        <section id="section-wrapper-8" class="w-full min-h-[100vh] bg-[white]">
          <PagesMainEightSectionView />
        </section>

        <section id="section-wrapper-9" class="w-full md:h-[100vh] h-[70vh] bg-[white]">
          <PagesMainNineSectionView />
        </section>

        <section id="section-wrapper-10" class="w-full min-h-[100vh] bg-[white]">
          <PagesMainTenSectionView />
        </section>

        <section id="section-wrapper-11" class="w-full h-[100vh] bg-[white]">
          <PagesMainElevenSectionView />
        </section>

        <section id="section-wrapper-12" class="w-full h-[100vh] flex items-end bg-[white]">
          <PagesMainTwelveSectionView />
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import usePageOffsetWatcher from '~/composables/usePageOffsetWatcher';
import { useCommonStore } from '~/store/common.store';
import { usePageHeightWatcher } from '~/composables/usePageHeightWatcker';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

const commonStore = useCommonStore();
const offset = usePageOffsetWatcher();

const { widthX } = usePageWidthWatcher();
const { heightY } = usePageHeightWatcher();
watch(
  [widthX, heightY],
  () => {
    commonStore.aspectRatio = widthX.value / 100 + heightY.value / 100;
  },
  { immediate: true, deep: true },
);

watch(
  offset,
  () => {
    commonStore.isThereOffset = offset.value > 200;
  },
  { deep: true, immediate: true },
);
</script>

<style></style>
