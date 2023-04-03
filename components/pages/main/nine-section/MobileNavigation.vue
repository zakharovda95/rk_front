<template>
  <swiper
    :slides-per-view="1"
    :pagination="true"
    :modules="[Pagination]"
    :style="{ '--swiper-pagination-color': 'white' }"
  >
    <swiper-slide v-for="slide in data" :key="slide.id">
      <div
        class="w-[90%] h-[42vh] flex flex-col items-center justify-center text-center"
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

import { Pagination } from 'swiper';
import 'swiper/css/pagination';

defineProps({
  data: {
    type: Array as PropType<Section9Type[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
