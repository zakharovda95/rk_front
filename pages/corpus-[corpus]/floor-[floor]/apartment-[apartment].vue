<template>
  <NuxtLayout>
    <PagesFlatView v-if="widthX > 768" :data="data" :is-corpus-active="isCorpusActive" />
    <PagesFlatMobileView v-if="widthX <= 768" :data="data" :is-corpus-active="isCorpusActive" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useFlatPageStore } from '~/store/flat.store';
import { useCorpusPageStore } from '~/store/corpus.store';

definePageMeta({
  layout: 'default',
  middleware: 'fetching-flats',
});

const { widthX } = usePageWidthWatcher();

const store = useFlatPageStore();
const corpusStore = useCorpusPageStore();

const route = useRoute();

const data = computed(() => store.flatData);
const isCorpusActive = computed(() =>
  route.params.corpus === '2' ? corpusStore.corpusActive.two : corpusStore.corpusActive.three,
);
</script>
