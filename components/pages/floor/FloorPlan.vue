<template>
  <component :is="componentByTag" class="w-full" />
</template>

<script setup lang="ts">
import Corpus2Floor2 from '~/components/pages/floor/floor-svgs/Corpus2Floor2.vue';
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  tag: {
    type: String as PropType<'c2f2'>,
    required: true,
  },
});

const componentByTag = computed(() => {
  switch (props.tag) {
    case 'c2f2':
      return Corpus2Floor2;
  }
});

const maskContainer: Ref<Element | null> = ref(null);
const masks: Ref<Element[] | null> = ref(null);

onMounted((): void => {
  maskContainer.value = document.querySelector(`#${props.tag}`);

  if (maskContainer.value) {
    masks.value = Array.from(document.querySelectorAll('.flat-group'));

    masks.value.forEach(el => {
      el.addEventListener('click', (e: Event) => {
        const currentTarget = (e.target as HTMLElement).closest('.flat-group');
        if (currentTarget) {
          console.log(currentTarget.id);
        }
      });
    });
  }
});

const hoverFlat = (e: Event): void => {
  const target: EventTarget | null = e.currentTarget;
  if (target) {
    console.log(target);
  }
};
</script>
