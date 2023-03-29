<template>
  <NuxtLayout>
    <PagesFloorView />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useFloorPageStore } from '~/store/floor-page.store';
import { useCorpusPageStore } from '~/store/corpus.store';

definePageMeta({
  layout: 'default',
});

const floorStore = useFloorPageStore();

const route = useRoute();

const currentFloor: Ref<string> = computed(() => route.params.floor) as Ref<string>;
const currentCorpus: Ref<string> = computed(() => route.params.corpus) as Ref<string>;

watch(
  [currentCorpus, currentFloor],
  () => {
    floorStore.initFloorData({ entrance: currentCorpus.value, floor: currentFloor.value });
  },
  { deep: true, immediate: true },
);
</script>
