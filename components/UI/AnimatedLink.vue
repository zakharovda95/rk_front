<template>
  <NuxtLink class="el flex items-center gap-3 cursor-pointer">
    <span class="line" />
    <UIText tag="p" class="text-[16px]" :style="{ color }">
      <slot />
    </UIText>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  color: {
    type: String as PropType<'beige' | 'white' | 'black'>,
    required: false,
    default: 'white',
  },
});

const color: Ref<string> = computed(() => {
  switch (props.color) {
    case 'beige':
      return '#E3BC98';
    case 'black':
      return '#252120';
    default:
      return 'white';
  }
});

const bg: Ref<string> = computed(() => {
  switch (props.color) {
    case 'beige':
      return '#f1f0ee';
    case 'black':
      return '#919191';
    case 'white':
      return '#737373';
  }
});
</script>

<style scoped lang="scss">
.line {
  width: 62px;
  height: 2px;
  background: v-bind(bg);
  position: relative;
  top: 2px;
}

.line:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: v-bind(color);
  transition: all 1s ease;
  opacity: 1;
  z-index: 1000;
}
.el:hover {
  .line:before {
    width: 100% !important;
  }
}
</style>
