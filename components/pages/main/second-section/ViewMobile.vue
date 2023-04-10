<template>
  <div class="w-full h-full bg-bg relative pb-10">
    <div class="flex-col px-5">
      <UIText
        id="section2text"
        tag="h1"
        class="font-trajan text-black w-[80%] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
      >
        Выберете свою идеальную планировку
      </UIText>

      <SharedMobilePlanView
        class="w-full relative left-[-10px]"
        :is-loading="isLoading"
        :current-corpus="corpusData.corpus"
        :current-floor="corpusData.floor"
        :tag="`c${corpusData.corpus}f${corpusData.floor}`"
        :available-apartments="availableApartments"
      />

      <PagesMainSecondSectionMobileNavigation class="w-[90%] mt-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFloorPageStore } from '~/store/floor-page.store';
import { useCorpusPageStore } from '~/store/corpus.store';

const floorStore = useFloorPageStore();
const corpusStore = useCorpusPageStore();

const isLoading: Ref<boolean> = computed(() => floorStore.isLoadingFloor);
const corpusData = computed(() => corpusStore.firstAvailableCorpusAndFloor);
const availableApartments = computed(() => floorStore.availableApartments);
</script>
