<template>
  <div class="w-full h-[100vh] flex items-end bg-[#FCF9F4] overflow-hidden">
    <div class="w-[20%] h-[calc(100vh-10vh)]">
      <PagesFloorSidebar
        v-if="!isLoading.corpus"
        :current-corpus="currentCorpus"
        :current-floor="currentFloor"
        :available-floors="availableFloors"
      />
    </div>

    <div class="w-[65%] h-full flex flex-col-reverse items-center justify-around overflow-scroll">
      <div class="flex w-full items-center ml-10">
        <PagesFloorInfo v-if="floorInfo" :floor-info="floorInfo" />

        <div class="flex ml-10 mb-10">
          <UIText class="text-[gray] text-[calc(1vw+1vh*0.8)]">
            <span class="text-titleBrown">*</span>
            Чтобы выбрать апартамент, <br />
            наведите мышкой на план этажа
          </UIText>
        </div>
      </div>

      <div class="w-full my-5">
        <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
          Внутренний двор
        </UIText>
      </div>

      <div style="margin: 0 auto" class="w-full overflow-scroll min-h-[calc(1vw+1vh*35)]">
        <PagesFloorPlan
          v-if="!isLoading.floor"
          class="w-[100%] h-auto"
          :tag="tag"
          :current-floor="currentFloor"
          :current-corpus="currentCorpus"
          :apartments="availableApartments"
        />
      </div>

      <div
        class="w-full flex items-center justify-center max-h-[10vh] mt-[100px] mb-5 border-t border-b py-10 border-[lightgray]"
      >
        <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
          пр-т Римского Корсакова
        </UIText>
      </div>
    </div>

    <div
      @click="
        $router.push(
          `/${currentCorpus === '2' ? 'corpus-3' : 'corpus-2'}/floor-${availableFloors[0]}`,
        )
      "
      class="w-[14%] h-full bg-[lightgray] flex items-center justify-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
    >
      <div class="mt-10">
        <NuxtLink>
          <UIText class="text-center text-[calc(1vw+1vh*8)] font-trajan">
            <span class="text-[24px] text-titleBrown">корпус</span>
            <br />
            {{ currentCorpus === '2' ? '3' : '2' }}
          </UIText>
        </NuxtLink>
      </div>
    </div>
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
