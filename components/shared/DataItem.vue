<template>
  <div class="flex flex-col relative">
    <div class="flex items-center">
      <UIText class="font-trajan text-titleBrown text-[128px]">{{ itemData.count }}</UIText>
      <UIText v-if="itemData.small" class="font-trajan text-titleBrown text-[36px] mt-6">
        {{ itemData.small }}
      </UIText>
    </div>
    <UIText class="relative bottom-[50px] font-helvetica text-black text-[24px]">
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
