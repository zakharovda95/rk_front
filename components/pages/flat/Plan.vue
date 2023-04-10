<template>
  <div class="w-full h-full">
    <img
      alt="img"
      class="w-full h-full"
      :src="`${config.public.BACK_API + images.empty}`"
      v-if="isEmptyPlan"
    />
    <img
      class="w-full h-full"
      alt="img"
      :src="`${config.public.BACK_API + images.possible}`"
      v-if="!isEmptyPlan"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

defineProps({
  isEmptyPlan: {
    type: Boolean,
    required: true,
  },
  images: {
    type: Object as PropType<{ empty: string; possible: string | null }>,
    required: true,
  },
});

const config = useRuntimeConfig();
</script>
