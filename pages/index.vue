<template>
  <NuxtLayout>
    <div class="w-full min-h-[100vh] overflow-hidden">
      <div ref="container" id="container" class="w-full overflow-hidden">
        <section id="section-wrapper-1" class="w-full h-[100vh] bg-black">
          <PagesMainFirstSectionView />
        </section>

        <section id="section-wrapper-2" class="w-full h-[100vh] bg-bg">
          <PagesMainSecondSectionView />
        </section>

        <section id="section-wrapper-2.1" class="w-full bg-bg" v-if="widthX <= 768">
          <PagesMainSecondSectionViewMobile />
        </section>

        <section id="section-wrapper-3" class="w-full md:h-[100vh] h-[105vh] bg-bg">
          <PagesMainThirdSectionView />
        </section>

        <section id="section-wrapper-4" class="w-full min-h-[100vh] bg-bg">
          <PagesMainFourSectionView />
        </section>

        <section id="section-wrapper-5" class="w-full min-h-[100vh] bg-bg">
          <PagesMainFiveSectionView />
        </section>

        <section id="section-wrapper-6" class="w-full md:h-[100vh] h-[40vh] bg-bg">
          <PagesMainSixSectionView />
        </section>

        <section id="section-wrapper-7" class="w-full min-h-[100vh] bg-bg">
          <PagesMainSevenSectionView />
        </section>

        <section id="section-wrapper-8" class="w-full min-h-[100vh] bg-bg">
          <PagesMainEightSectionView />
        </section>

        <section id="section-wrapper-9" class="w-full md:h-[100vh] h-[70vh] bg-bg">
          <PagesMainNineSectionView />
        </section>

        <section id="section-wrapper-10" class="w-full min-h-[100vh] bg-bg">
          <PagesMainTenSectionView />
        </section>

        <section id="section-wrapper-11" class="w-full h-[100vh] bg-bg">
          <PagesMainElevenSectionView />
        </section>

        <section id="section-wrapper-12" class="w-full h-[100vh] flex items-end bg-bg">
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
import { useFloorPageStore } from '~/store/floor-page.store';
import { useCorpusPageStore } from '~/store/corpus.store';
import { FloorFormDataType } from '~/helpers/types/pages/floor-page.type';

definePageMeta({
  middleware: 'fetching-available-floor',
});

const commonStore = useCommonStore();

const store = useFloorPageStore();
const corpusStore = useCorpusPageStore();
const firstAvailableCorpusAndFloor = computed(() => corpusStore.firstAvailableCorpusAndFloor);

await store.initFloorData({
  entrance: firstAvailableCorpusAndFloor.value.corpus,
  floor: firstAvailableCorpusAndFloor.value.floor,
} as FloorFormDataType);

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
