<template>
  <UILoader v-if="isLoaded" @custom:is-loaded="isLoaded = false" />
  <NuxtPage />
</template>

<script setup lang="ts">
import { useCorpusPageStore } from '~/store/corpus.store';

const corpusStore = useCorpusPageStore();
corpusStore.getCorpus();

const isLoaded = ref(true);
</script>
