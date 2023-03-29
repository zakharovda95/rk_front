<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useCorpusPageStore } from '~/store/corpus.store';

const corpusStore = useCorpusPageStore();
corpusStore.setCorpuses();
</script>
