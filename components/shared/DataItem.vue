<template>
  <div class="flex flex-col relative">
    <div class="flex items-center mb-1">
      <UIText
        tag="h1"
        class="font-trajan text-titleBrown lg:text-[calc(1vh+1vw*8)] md:text-[calc(1vh+1vw*12)]"
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
    <UIText tag="p" class="relative bottom-[50px] font-helvetica text-black text-[calc(1vh+1vw*1)]">
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
