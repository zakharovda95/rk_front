<template>
  <div ref="observer" class="ui-observer" />
</template>

<script setup lang="ts">
const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  toggleObserve: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const emits = defineEmits(['custom:cross-section']);

onMounted(() => {
  const element = document.querySelector(props.target);
  const root: Ref<null> = ref(null);

  const options: Ref<{ root: null; threshold: number }> = ref({
    root: root.value,
    threshold: 0.9,
  });

  const callback = (entries: any, observer: IntersectionObserver): void => {
    if (props.toggleObserve) {
      emits('custom:cross-section', entries[0].isIntersecting);
    } else {
      if (entries[0].isIntersecting) {
        emits('custom:cross-section');
      }
    }
  };

  const observer: IntersectionObserver = new IntersectionObserver(callback, options.value);
  if (element) {
    observer.observe(element);
  }
});
</script>
