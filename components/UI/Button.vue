<template>
  <component
    class="btn relative overflow-hidden flex gap-3 items-center justify-center"
    :is="tag"
    :style="styles"
    :class="{ effect }"
  >
    <div v-if="gradient" :class="{ gradient }" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  tag: {
    type: String as PropType<'button' | 'div' | 'span' | 'NuxtLink' | 'a'>,
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
    type: String as PropType<'beige' | 'gray' | 'transparent' | 'black' | 'brown'>,
    required: false,
    default: () => 'beige',
  },
  fontColor: {
    type: String,
    required: false,
    default: () => 'black',
  },
  border: {
    type: String as PropType<'white' | 'black' | 'lightgray'>,
    required: false,
    default: () => 'white',
  },
  effect: {
    type: [Boolean, String],
    required: false,
    default: () => false,
  },
  gradient: {
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
  color: props.fontColor,
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
    case 'transparent':
      return 'transparent';
    case 'black':
      return '#252120';
    case 'brown':
      return '#8F6C51';
    default:
      return 'white';
  }
});

const effectBg: Ref<string> = computed(() =>
  props.effect && typeof props.effect === 'string' ? props.effect : 'gray',
);
</script>

<style scoped lang="scss">
.effect:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: v-bind(effectBg);
  transition: all 1s ease;
  z-index: 100;
  opacity: 0;
}
.effect:hover:before {
  width: 100%;
  border-radius: v-bind(type);
  opacity: 0.2;
}

.gradient {
  width: 40px;
  height: 50px;
  top: 2px;
  left: 0;
  transform: rotate(40deg);
  border-radius: 20px;
  position: absolute;
  background: radial-gradient(#e3bc98, rgba(227, 188, 152, 0)) !important;
  opacity: 0.8;
  scale: 1.1;
  transition: 1s;
}

.btn:hover {
  .gradient {
    transition: 3s;
    transform: translateX(80px);
  }
}
</style>
