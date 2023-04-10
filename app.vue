<template>
  <UILoader v-if="isLoaded" @custom:is-loaded="isLoaded = false" />
  <NuxtPage />
</template>

<script setup lang="ts">
import { useCorpusPageStore } from '~/store/corpus.store';
import { useCommonStore } from '~/store/common.store';

const corpusStore = useCorpusPageStore();
const commonStore = useCommonStore();
corpusStore.getCorpus();

const isLoaded = ref(true);

const config = useRuntimeConfig();

// onMounted(async () => {
//   commonStore.audio = await new Audio('/mp3/bg.mp3');
// });
</script>
