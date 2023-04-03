<template>
  <input
    class="bg-[transparent] border-b-2 border-[lightgray] h-[60px] w-full outline-none text-[white] text-[1.2rem] font-thin"
    :class="classes"
    v-bind="$attrs"
    type="text"
    :value="modelValueProxy"
    @input="modelValueProxy = $event.target.value"
  />
</template>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  border: {
    type: String,
    required: false,
    default: () => 'lightgray',
  },
  color: {
    type: String,
    required: false,
    default: () => 'white',
  },
  isError: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const emit = defineEmits(['custom:update-model-value']);

const modelValueProxy: Ref<string> = computed({
  get(): string {
    return props.modelValue;
  },
  set(value: string): void {
    console.log(value);
    emit('custom:update-model-value', value);
  },
});

const classes = computed(() => {
  return {
    'border-lightGray': props.border === 'lightgray',
    'border-titleBrown': props.border === 'beige',
    'text-[white]': props.color === 'white',
    'text-black': props.color === 'black',
    'error': props.isError,
  };
});

const placeholder = computed(() => (props.border === 'beige' ? '#8F6C51' : 'lightgray'));
</script>

<style scoped lang="scss">
input::placeholder {
  color: v-bind(placeholder);
}

.error {
  border-bottom: 2px solid #a92d2d !important;
  transition: 2s;
}
</style>
