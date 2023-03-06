<template>
  <div class="flex flex-col">
    <UIText class="font-trajan text-titleBrown text-[128px]">{{ itemData.date }}</UIText>
    <UIText class="font-helvetica text-black text-[24px]">{{ itemData.text }}</UIText>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { Section5Type } from '~/helpers/types/constants/section-5.type';

const props = defineProps({
  itemData: {
    type: Object as PropType<Section5Type>,
    required: true,
  },
});
</script>
