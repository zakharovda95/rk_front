<template>
  <component :is="tag" :style="styles" :class="{ effect }">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  tag: {
    type: String as PropType<'button' | 'div' | 'span'>,
    required: false,
    default: () => 'button',
  },
  type: {
    type: String as PropType<'rounded' | 'round' | 'default'>,
    required: false,
    default: () => 'default',
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    required: false,
    default: () => 'large',
  },
  color: {
    type: String as PropType<'beige' | 'gray'>,
    required: false,
    default: () => 'white',
  },
  border: {
    type: String as PropType<'white'>,
    required: false,
    default: () => 'white',
  },
  effect: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const styles: Ref<{ [key: string]: string }> = computed(() => ({
  padding: size.value,
  'border-radius': type.value,
  background: color.value,
  'font-size': fontSize.value,
  color: fontColor.value,
  border: `1px solid ${props.border}`,
}));

const size: Ref<string> = computed(() => {
  switch (props.size) {
    case 'small':
      return '5px';
    case 'medium':
      return '10px';
    default:
      return '15px';
  }
});

const fontSize: Ref<string> = computed(() => {
  switch (props.size) {
    case 'small':
      return '1rem';
    case 'medium':
      return '1.05rem';
    default:
      return '1.1rem';
  }
});

const type: Ref<string> = computed(() => {
  switch (props.type) {
    case 'rounded':
      return '100px';
    case 'round':
      return '51%';
    default:
      return '5px';
  }
});

const color: Ref<string> = computed(() => {
  switch (props.color) {
    case 'beige':
      return '#E3BC98';
    case 'gray':
      return '#F1F0EE';
    default:
      return 'white';
  }
});

const fontColor: Ref<string> = computed(() => {
  switch (props.color) {
    case 'beige':
      return 'black';
    default:
      return 'black';
  }
});
</script>

<style scoped lang="scss">
.effect:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: gray;
  transition: all 1s ease;
  z-index: 100;
  opacity: 0;
}
.effect:hover:before {
  width: 100%;
  border-radius: v-bind(type);
  opacity: 0.2;
}
</style>
