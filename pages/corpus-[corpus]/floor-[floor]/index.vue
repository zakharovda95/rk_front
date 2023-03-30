<template>
  <NuxtLayout>
    <PagesFloorView
      :is-loading="isLoading"
      :current-corpus="currentCorpus"
      :current-floor="currentFloor"
      :available-apartments="availableApartments"
      :tag="tag"
      :available-floors="availableFloors"
      :floor-info="floorInfo"
      v-if="widthX > 768"
    />
    <PagesFloorMobileView
      :is-loading="isLoading"
      :current-corpus="currentCorpus"
      :current-floor="currentFloor"
      :available-apartments="availableApartments"
      :tag="tag"
      :available-floors="availableFloors"
      :floor-info="floorInfo"
      v-if="widthX <= 768"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { FloorInfoType } from '~/helpers/types/pages/floor-page.type';
import { useFloorPageStore } from '~/store/floor-page.store';
import { useCorpusPageStore } from '~/store/corpus.store';

definePageMeta({
  layout: 'default',
  middleware: 'fetching-floors',
});

const { widthX } = usePageWidthWatcher();

const route = useRoute();

const currentFloor: Ref<string> = computed(() => route.params.floor) as Ref<string>;
const currentCorpus: Ref<string> = computed(() => route.params.corpus) as Ref<string>;

const floorStore = useFloorPageStore();
const corpusStore = useCorpusPageStore();

const corpusData = computed(() => corpusStore.corpusData);
const floorData = computed(() => floorStore.floorData);
const apartments = computed(() => floorStore.apartments);
const availableApartments = computed(() => floorStore.availableApartments);

const isLoading: Ref<{ corpus: boolean; floor: boolean }> = computed(() => ({
  corpus: corpusStore.isLoadingCorpus,
  floor: floorStore.isLoadingFloor,
}));

const tag: Ref<string> = computed(() => `c${currentCorpus.value}f${currentFloor.value}`);

const availableFloors = computed(() =>
  currentCorpus.value === '2' ? corpusData.value.c2 : corpusData.value.c3,
);

const floorInfo: Ref<FloorInfoType | null> = computed(() => {
  if (floorData.value) {
    return {
      corpus: currentCorpus.value,
      floor: currentFloor.value,
      maxArea: floorData.value.data.total_space,
      freeAparts: String(apartments.value.length),
      rangeAreas: floorData.value.data.space,
    };
  } else {
    return null;
  }
});
</script>
