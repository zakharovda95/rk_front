<template>
  <div class="w-full h-[100vh] flex items-end bg-[#FCF9F4] overflow-hidden">
    <div class="w-[20%] h-[calc(100vh-10vh)]">
      <PagesFloorSidebar
        v-if="!isLoadingCorpus"
        :current-corpus="currentCorpus"
        :current-floor="currentFloor"
        :corpus-data="corpusData"
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
          v-if="!isLoadingFloor"
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
import { useFloorPageStore } from '~/store/floor-page.store';
import { FloorInfoType } from '~/helpers/types/pages/floor-page.type';
import { useCorpusPageStore } from '~/store/corpus.store';

const router = useRouter();
const route = useRoute();

const floorStore = useFloorPageStore();
const corpusStore = useCorpusPageStore();
const currentFloor: Ref<string> = computed(() => route.params.floor) as Ref<string>;
const currentCorpus: Ref<string> = computed(() => route.params.corpus) as Ref<string>;
const isLoadingCorpus = computed(() => corpusStore.isLoadingCorpus);
const isLoadingFloor = computed(() => floorStore.isLoadingFloor);

const corpusData = computed(() => corpusStore.corpusData);

const availableFloors = computed(() =>
  currentCorpus.value === '2' ? corpusData.value.c2 : corpusData.value.c3,
);

const tag: Ref<string> = computed(() => `c${currentCorpus.value}f${currentFloor.value}`);

const floorData = computed(() => floorStore.floorData);
const apartments = computed(() => floorStore.apartments);
const availableApartments = computed(() => floorStore.availableApartments);

const floorInfo: Ref<FloorInfoType | null> = computed(() => {
  if (floorData.value) {
    return {
      corpus: currentCorpus.value,
      floor: currentFloor.value,
      maxArea: floorData.value.data.total_space,
      freeAparts: String(apartments.value.length),
      rangeAreas: floorData.value.data.space,
    };
  } else {
    return null;
  }
});
</script>
