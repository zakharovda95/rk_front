<template>
  <div class="el flex items-center gap-3 cursor-pointer">
    <span class="line" />
    <NuxtLink>
      <UIText tag="p" class="font-helvetica font-[calc(1vw+1vh*1)]" :style="{ color }">
        <slot />
      </UIText>
    </NuxtLink>
  </div>
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
</script>

<style scoped lang="scss">
.line {
  width: 62px;
  height: 2px;
  background: #f1f0ee;
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
