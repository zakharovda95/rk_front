<template>
  <component :is="componentByTag" class="w-full" />
</template>

<script setup lang="ts">
import Corpus2Floor1 from '~/components/pages/floor/floor-svgs/Corpus2Floor1.vue';
import Corpus2Floor2 from '~/components/pages/floor/floor-svgs/Corpus2Floor2.vue';
import Corpus2Floor3 from '~/components/pages/floor/floor-svgs/Corpus2Floor3.vue';
import Corpus2Floor4 from '~/components/pages/floor/floor-svgs/Corpus2Floor4.vue';
import Corpus2Floor5 from '~/components/pages/floor/floor-svgs/Corpus2Floor5.vue';
import Corpus3Floor1 from '~/components/pages/floor/floor-svgs/Corpus3Floor1.vue';
import Corpus3Floor2 from '~/components/pages/floor/floor-svgs/Corpus3Floor2.vue';
import Corpus3Floor3 from '~/components/pages/floor/floor-svgs/Corpus3Floor3.vue';
import Corpus3Floor4 from '~/components/pages/floor/floor-svgs/Corpus3Floor4.vue';

import { PropType } from '@vue/runtime-core';

const props = defineProps({
  tag: {
    type: String as PropType<
      'c2f1' | 'c2f2' | 'c2f3' | 'c2f4' | 'c2f5' | 'c3f1' | 'c3f2' | 'c3f3' | 'c3f4'
    >,
    required: true,
  },
});

const componentByTag = computed(() => {
  switch (props.tag) {
    case 'c2f1':
      return Corpus2Floor1;
    case 'c2f2':
      return Corpus2Floor2;
    case 'c2f3':
      return Corpus2Floor3;
    case 'c2f4':
      return Corpus2Floor4;
    case 'c2f5':
      return Corpus2Floor5;
    case 'c3f1':
      return Corpus3Floor1;
    case 'c3f2':
      return Corpus3Floor2;
    case 'c3f3':
      return Corpus3Floor3;
    case 'c3f4':
      return Corpus3Floor4;
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
