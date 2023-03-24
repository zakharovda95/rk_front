<template>
  <input
    class="bg-[transparent] border-b-2 border-[lightgray] h-[60px] w-full outline-none text-[white] text-[1.2rem] font-thin"
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
</script>
