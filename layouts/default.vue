<template>
  <div>
    <LayoutsHeader
      :available-corpus-and-floor="availableCorpusAndFloor"
      v-if="!isThereOffset || isBurgerOpen"
    />
    <LayoutsExtendedHeader
      :available-corpus-and-floor="availableCorpusAndFloor"
      v-if="!isBurgerOpen"
    />
    <LayoutsMenu :corpus-data="corpusData" v-if="isBurgerOpen" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';
import { useCorpusPageStore } from '~/store/corpus.store';

const commonStore = useCommonStore();

commonStore.downloadBooklet();

const { widthX } = usePageWidthWatcher();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);

const corpusStore = useCorpusPageStore();
const corpusData = computed(() => corpusStore.corpusData);

const availableCorpusAndFloor = computed(() =>
  corpusData.value.c2[0]
    ? { corpus: '2', floor: corpusData.value.c2[0] }
    : { corpus: '3', floor: corpusData.value.c3[0] },
);
</script>
