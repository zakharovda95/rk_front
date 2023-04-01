<template>
  <div class="w-full h-[100vh] flex items-end justify-start bg-[#FCF9F4] overflow-hidden">
    <div class="w-[17%] h-[calc(100vh-10vh)]">
      <PagesFloorSidebar
        v-if="!isLoading.corpus"
        :current-corpus="currentCorpus"
        :current-floor="currentFloor"
        :available-floors="availableFloors"
      />
    </div>

    <div
      class="w-full h-full flex flex-col-reverse items-center justify-around overflow-scroll mx-5"
    >
      <div class="flex w-full items-center mx-10">
        <PagesFloorInfo v-if="floorInfo" :floor-info="floorInfo" />

        <div class="flex ml-10 mb-10">
          <UIText class="text-[gray] text-[calc(1vw+1vh*0.8)]">
            <span class="text-titleBrown">*</span>
            Чтобы выбрать апартамент, <br />
            наведите мышкой на план этажа
          </UIText>
        </div>
      </div>

      <div style="margin: 0 auto" class="w-full overflow-scroll min-h-[calc(1vw+1vh*35)] pt-[12vh]">
        <div
          v-if="currentCorpus === '2'"
          class="w-full flex items-center justify-center max-h-[10vh] mb-5 border-t border-b py-10 border-[lightgray]"
        >
          <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
            пр-т Римского Корсакова
          </UIText>
        </div>

        <div
          v-if="currentCorpus === '3'"
          class="w-full flex gap-5 items-center justify-center h-[20vh] px-5"
        >
          <div class="h-[10vh] w-1/2 border border-[lightgray] flex items-center justify-center">
            <UIText
              tag="h1"
              class="font-trajan text-[lightgray] text-[calc(1vh+1vw*0.8)] text-center"
            >
              Доходный дом В. И. Шене
            </UIText>
          </div>
          <div class="h-[10vh] w-1/2 border border-[lightgray]">
            <UIText
              tag="h1"
              class="font-trajan text-[lightgray] text-[calc(1vh+1vw*0.8)] relative top-[10px] text-center"
            >
              Гимназия Императорского<br />Человеколюбивого общества
            </UIText>
          </div>
        </div>

        <div class="flex w-full">
          <div
            v-if="currentCorpus === '3'"
            @click="$router.push(`/corpus-2/floor-${availableFloors[0]}`)"
            class="w-[14%] h-[50vh] bg-[lightgray] flex items-center justify-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
          >
            <div class="mt-10">
              <NuxtLink>
                <UIText class="text-center text-[calc(1vw+1vh*8)] font-trajan">
                  <span class="text-[24px] text-titleBrown">корпус</span>
                  <br />
                  2
                </UIText>
              </NuxtLink>
            </div>
          </div>
          <div>
            <div class="w-[70vw] min-h-[35vh]">
              <PagesFloorPlan
                v-if="!isLoading.floor"
                class="w-[70vw] h-auto"
                :tag="tag"
                :current-floor="currentFloor"
                :current-corpus="currentCorpus"
                :apartments="availableApartments"
              />

              <div
                v-if="isLoading.floor"
                class="w-[69vw] h-[35vh] bg-titleBrown opacity-[0.3] flex justify-center items-center"
              >
                <UIText tag="h1" class="font-trajan text-black text-[calc(1vh+1vw*1)] text-center">
                  Загрузка
                </UIText>
              </div>
            </div>

            <div class="w-full my-5">
              <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
                Внутренний двор
              </UIText>
            </div>
          </div>

          <div
            v-if="currentCorpus === '2'"
            @click="$router.push(`/corpus-3/floor-${availableFloors[0]}`)"
            class="w-[14%] h-[50vh] bg-[lightgray] flex items-center justify-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
          >
            <div class="mt-10">
              <NuxtLink>
                <UIText class="text-center text-[calc(1vw+1vh*8)] font-trajan">
                  <span class="text-[24px] text-titleBrown">корпус</span>
                  <br />
                  3
                </UIText>
              </NuxtLink>
            </div>
          </div>
        </div>
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
