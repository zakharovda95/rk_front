<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="container relative w-full min-h-[245px] mt-10 overflow-scroll cursor-grab">
      <LazySharedFloorPlan
        class="min-w-[1000px]"
        v-if="!isLoading"
        :tag="tag"
        :current-floor="currentFloor"
        :current-corpus="currentCorpus"
        :apartments="availableApartments"
      />

      <div
        v-if="isLoading"
        class="w-full min-h-[245px] bg-titleBrown opacity-[0.3] flex items-center justify-center"
      >
        <UIText tag="h1" class="font-trajan text-black text-[16px] text-center"> загрузка </UIText>
      </div>
    </div>

    <SharedMobilePlanScroll style="margin: auto" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
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
  tag: {
    type: String as PropType<
      'c2f1' | 'c2f2' | 'c2f3' | 'c2f4' | 'c2f5' | 'c3f1' | 'c3f2' | 'c3f3' | 'c3f4'
    >,
  },
});
</script>
