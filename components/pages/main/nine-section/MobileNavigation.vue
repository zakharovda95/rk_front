<template>
  <van-swipe class="flex flex-col" autoplay="3000" indicator-color="white" style="margin: 0 auto">
    <van-swipe-item v-for="slide in data" :key="slide.id">
      <div
        class="w-[70%] h-[200px] flex flex-col items-center justify-center text-center"
        style="margin: auto"
      >
        <UIText class="font-helvetica text-[1.5rem] text-[white] mb-5">
          {{ slide.title }}
        </UIText>
        <UIText class="font-helvetica text-[1.2rem] text-[white] mb-5">
          {{ slide.text }}
        </UIText>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { Section9Type } from '~/helpers/types/constants/section-9.type';

defineProps({
  data: {
    type: Array as PropType<Section9Type[]>,
    required: true,
  },
});
</script>
