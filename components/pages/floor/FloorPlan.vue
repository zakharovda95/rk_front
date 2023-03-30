<template>
  <component :is="componentByTag" class="w-full" />
</template>

<script setup lang="ts">
import Corpus2Floor2 from '~/components/pages/floor/floor-svgs/Corpus2Floor2.vue';
import Corpus2Floor3 from '~/components/pages/floor/floor-svgs/Corpus2Floor3.vue';
import Corpus2Floor4 from '~/components/pages/floor/floor-svgs/Corpus2Floor4.vue';
import Corpus2Floor5 from '~/components/pages/floor/floor-svgs/Corpus2Floor5.vue';
import Corpus3Floor2 from '~/components/pages/floor/floor-svgs/Corpus3Floor2.vue';
import Corpus3Floor3 from '~/components/pages/floor/floor-svgs/Corpus3Floor3.vue';
import Corpus3Floor4 from '~/components/pages/floor/floor-svgs/Corpus3Floor4.vue';

import { PropType } from '@vue/runtime-core';
import { useFloorPageStore } from '~/store/floor-page.store';

const props = defineProps({
  tag: {
    type: String as PropType<
      'c2f1' | 'c2f2' | 'c2f3' | 'c2f4' | 'c2f5' | 'c3f1' | 'c3f2' | 'c3f3' | 'c3f4'
    >,
    required: true,
  },
  currentFloor: {
    type: String as PropType<'1' | '2' | '3' | '4' | '5'>,
    required: true,
  },
  currentCorpus: {
    type: String as PropType<'2' | '3'>,
    required: true,
  },
  apartments: {
    type: Array,
    required: true,
  },
});

const componentByTag = computed(() => {
  switch (props.tag) {
    case 'c2f2':
      return Corpus2Floor2;
    case 'c2f3':
      return Corpus2Floor3;
    case 'c2f4':
      return Corpus2Floor4;
    case 'c2f5':
      return Corpus2Floor5;
    case 'c3f2':
      return Corpus3Floor2;
    case 'c3f3':
      return Corpus3Floor3;
    case 'c3f4':
      return Corpus3Floor4;
  }
});

const router = useRouter();
const store = useFloorPageStore();

const initMasks = (): void => {
  const maskContainer = document.querySelector(`#${props.tag}`);

  if (maskContainer) {
    const masks = Array.from(document.querySelectorAll('.flat-group'));

    masks.forEach(el => {
      setListener(el);
    });

    const isVisible = props.apartments.map(el => masks.find(elem => String(el) === elem.id));
    const forHidden = masks.filter(el => !isVisible.some(elem => el.id === elem!.id));

    forHidden.forEach(elem => {
      elem.classList.add('flat-mask-hidden');
    });
  }
};

const setListener = (el: Element) => {
  el.addEventListener('click', (e: Event) => {
    const currentTarget = (e.target as HTMLElement).closest('.flat-group');
    if (currentTarget) {
      router.push(
        `/corpus-${props.currentCorpus}/floor-${props.currentFloor}/apartment-${currentTarget.id}`,
      );
    }
  });
};

onMounted(() => {
  try {
    initMasks();
  } catch (e) {
    console.log(e);
  }
});
</script>
