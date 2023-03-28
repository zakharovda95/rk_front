<template>
  <NuxtLayout>
    <div class="w-full h-[100vh] flex items-end bg-[#FCF9F4]">
      <div class="w-[20%] h-[calc(100vh-10vh)]">
        <PagesFloorSidebar />
      </div>

      <div class="w-[65%] h-full flex mb-10 flex-col-reverse items-center justify-around">
        <div class="flex w-full items-center ml-10">
          <!--          <PagesFloorInfo />-->

          <div class="flex ml-10 mb-10">
            <UIText class="text-[gray] text-[calc(1vw+1vh*0.8)]">
              <span class="text-titleBrown">*</span>
              Чтобы выбрать апартамент, <br />
              наведите мышкой на план этажа
            </UIText>
          </div>
        </div>

        <div class="w-full h-[8%] my-5">
          <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
            Внутренний двор
          </UIText>
        </div>

        <div style="margin: 0 auto" class="w-full">
          <PagesFloorPlan class="w-[100%] h-auto" :tag="tag" />
        </div>

        <div
          class="w-full flex items-center justify-center h-[10vh] mt-[200px] mb-10 border-t border-b py-10 border-[lightgray]"
        >
          <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
            пр-т Римского Корсакова
          </UIText>
        </div>
      </div>

      <div
        class="w-[14%] h-full bg-[lightgray] flex items-center justify-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
      >
        <div class="mt-10">
          <NuxtLink
            :to="`/${currentCorpus === '2' ? 'corpus-3' : 'corpus-2'}/floor-${currentFloor}`"
          >
            <UIText class="text-center text-[calc(1vw+1vh*8)] font-trajan">
              <span class="text-[24px] text-titleBrown">корпус</span>
              <br />
              {{ currentCorpus === '2' ? '3' : '2' }}
            </UIText>
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const router = useRouter();
const route = useRoute();
const currentFloor = computed(() => route.params.floor);
const currentCorpus = computed(() => route.params.corpus);

const tag = computed(() => `c${currentCorpus.value}f${currentFloor.value}`);
</script>
