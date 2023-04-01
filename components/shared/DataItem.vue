<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex items-center mb-1 justify-center">
      <UIText
        tag="h1"
        class="font-trajan text-titleBrown xl:text-[128px] lg:text-[128px] md:text-[128px] text-[96px] max-[400px]:text-[96px]"
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
      class="relative text-center bottom-[40px] font-helvetica xl:text-[24px] lg:text-[24px] md:text-[18px] text-[18x] max-[400px]:text-[18px]"
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
