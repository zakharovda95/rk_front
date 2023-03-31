<template>
  <swiper :slides-per-view="1">
    <swiper-slide v-for="slide in data" :key="slide.id">
      <div
        class="w-[70%] h-[400px] flex flex-col items-center justify-center text-center"
        style="margin: auto"
      >
        <UIText class="font-helvetica text-[1.3rem] text-[white] mb-5">
          {{ slide.title }}
        </UIText>
        <UIText class="font-helvetica text-[0.8rem] text-[white] mb-5">
          {{ slide.text }}
        </UIText>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { Section9Type } from '~/helpers/types/constants/section-9.type';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

defineProps({
  data: {
    type: Array as PropType<Section9Type[]>,
    required: true,
  },
});
</script>
