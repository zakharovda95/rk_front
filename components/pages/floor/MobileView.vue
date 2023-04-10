<template>
  <div class="w-[100vw] bg-[#FCF9F4] p-5 flex flex-col items-center justify-center overflow-hidden">
    <PagesFloorInfo class="mt-[calc(1vw+1vh*10)]" :floor-info="floorInfo" />

    <SharedMobilePlanView
      :is-loading="isLoading.floor"
      :current-corpus="currentCorpus"
      :current-floor="currentFloor"
      :available-apartments="availableApartments"
      :tag="tag"
    />

    <PagesFloorMobileNavigation
      class="my-10"
      :current-floor="currentFloor"
      :current-corpus="currentCorpus"
      :available-floors="availableFloors"
    />
  </div>
</template>

<script setup lang="ts">
import { FloorInfoType } from '~/helpers/types/pages/floor-page.type';

const props = defineProps({
  isLoading: {
    type: Object as PropType<{ corpus: boolean; floor: boolean }>,
    required: true,
  },
  currentFloor: {
    type: String as PropType<'1' | '2' | '3' | '4' | '5'>,
    required: true,
  },
  currentCorpus: {
    type: String as PropType<'2' | '3'>,
    required: true,
  },
  availableApartments: {
    type: Array,
    required: true,
  },
  availableFloors: {
    type: Array as PropType<string[]>,
    required: true,
  },
  tag: {
    type: String as PropType<
      'c2f1' | 'c2f2' | 'c2f3' | 'c2f4' | 'c2f5' | 'c3f1' | 'c3f2' | 'c3f3' | 'c3f4'
    >,
  },
  floorInfo: {
    type: Object as PropType<FloorInfoType | null>,
    required: true,
  },
});
</script>
