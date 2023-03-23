<template>
  <div class="flex flex-col justify-center items-center relative">
    <div class="flex items-center mb-1 justify-center">
      <UIText
        tag="h1"
        class="font-trajan text-titleBrown md:text-[calc(1vh+1vw*10)] text-[calc(1vh+1vw*18)]"
      >
        {{ itemData.count }}
      </UIText>
      <UIText
        tag="p"
        v-if="itemData.small"
        class="font-trajan text-titleBrown text-[calc(1vh+1vw*1.1)] mt-6"
      >
        {{ itemData.small }}
      </UIText>
    </div>
    <UIText
      tag="p"
      class="relative bottom-[50px] font-helvetica text-black text-[calc(1vh+1vw*0.9)] text-center mt-3"
    >
      {{ itemData.text }}
    </UIText>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { Section5Type } from '~/helpers/types/constants/section-5.type';
import { Section7Type } from '~/helpers/types/constants/section-7.type';

const props = defineProps({
  itemData: {
    type: Object as PropType<Section5Type | Section7Type>,
    required: true,
  },
});
</script>
