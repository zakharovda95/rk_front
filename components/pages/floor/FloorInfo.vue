<template>
  <div class="flex">
    <div
      class="max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] border border-titleBrown p-5"
    >
      <UIText tag="p" class="font-helvetica text-[14px] text-titleBrown">корпус</UIText>
      <UIText tag="p" class="font-trajan text-[64px]">{{ floorInfo.corpus }}</UIText>
    </div>
    <div class="w-[150px] h-[150px] border border-l-0 border-r-0 border-titleBrown p-5">
      <UIText class="font-trajan text-[32px]">{{ floorInfo.floor }}</UIText>
      <UIText class="font-helvetica text-titleBrown text-[14px]">этаж</UIText>
      <UIText class="font-helvetica text-black text-[14px] mt-5">{{ floorInfo.maxArea }} м2</UIText>
    </div>
    <div class="w-[150px] h-[150px] border border-titleBrown p-5">
      <UIText class="font-trajan text-[32px]">{{ floorInfo.freeAparts }}</UIText>
      <UIText class="font-helvetica text-titleBrown text-[14px]">апартаментов</UIText>
      <UIText class="font-helvetica text-black text-[14px] mt-5">
        {{ floorInfo.rangeAreas }} м2
      </UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FloorInfoType } from '~/helpers/types/pages/floor-page.type';

const props = defineProps({
  floorInfo: {
    type: Object as PropType<FloorInfoType>,
    required: true,
  },
});
</script>
