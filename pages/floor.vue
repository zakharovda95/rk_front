<template>
  <NuxtLayout>
    <div class="w-full h-[100vh] flex items-end bg-[#FCF9F4]">
      <div class="w-[20%] h-[calc(100vh-90px)]">
        <PagesFloorSideMenu />
      </div>

      <div class="w-[65%] h-full flex mb-10 flex-col-reverse items-center justify-around">
        <div class="flex w-full items-center ml-10">
          <PagesFloorInfo />

          <div class="flex ml-10 mb-10">
            <UIText class="text-[gray] text-[18px]">
              <span class="text-titleBrown">*</span>
              Чтобы выбрать апартамент, <br />
              наведите мышкой на план этажа
            </UIText>
          </div>
        </div>

        <div class="w-full h-[12%] my-5">
          <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
            Внутренний двор
          </UIText>
        </div>

        <div style="margin: 0 auto">
          <PagesFloorPlan />
        </div>

        <div class="w-full h-[12%] mt-[150px] mb-10 border-t border-b py-10 border-[lightgray]">
          <UIText tag="h1" class="font-trajan text-[calc(1vh+1vw*1)] text-center">
            пр-т Римского Корсакова
          </UIText>
        </div>
      </div>

      <div
        class="w-[14%] h-full bg-[lightgray] flex items-center justify-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
      >
        <div class="mt-10">
          <UIText class="text-center text-[60px] font-trajan">
            <span class="text-[14px] text-titleBrown">корпус</span>
            <br />
            3
          </UIText>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>
