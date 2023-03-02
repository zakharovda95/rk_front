<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'p'>,
    required: false,
    default: () => 'p',
  },
});
</script>
