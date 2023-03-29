<template>
  <PagesFloorSideSvg
    class="w-full h-full"
    :current-floor="currentFloor"
    :current-corpus="currentCorpus"
  />
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { useCorpusPageStore } from '~/store/corpus.store';

const props = defineProps({
  currentFloor: {
    type: String as PropType<'1' | '2' | '3' | '4' | '5'>,
    required: true,
  },
  currentCorpus: {
    type: String as PropType<'2' | '3'>,
    required: true,
  },
  corpusData: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const store = useCorpusPageStore();

const availableFloors = computed(() =>
  props.currentCorpus === '2' ? props.corpusData.c2 : props.corpusData.c3,
);

const initSidebar = () => {
  const sidebarContainer: HTMLElement | null = document.querySelector('#side-menu-svg');

  if (sidebarContainer) {
    const floorMasks = Array.from(sidebarContainer.querySelectorAll('.sidebar-mask'));

    if (floorMasks && floorMasks.length) {
      const addHandler = (el: HTMLElement) => {
        el.addEventListener('click', (ev: Event): void => {
          const target: HTMLElement = ev.target as HTMLElement;
          const closest: HTMLElement = target.closest('[data-floor]') as HTMLElement;
          if (closest) {
            const floor = closest.dataset.floor;
            router.push(`/corpus-${props.currentCorpus}/floor-${floor}`);
          }
        });
      };
      const forListener = availableFloors.value.map((el: any) => {
        if (floorMasks && floorMasks.length) {
          return floorMasks.find(elem => String(el) === elem.dataset.floor);
        } else return [];
      });

      const forHidden = floorMasks.filter(
        el =>
          !forListener.some((elem: any) => {
            if (elem) {
              return el.dataset.floor === elem.dataset.floor;
            }
          }),
      );
      if (forListener.length) {
        forListener.forEach((el: any) => {
          addHandler(el as HTMLElement);
        });
      }
      if (forHidden.length) {
        forHidden.forEach(el => {
          el.classList.add('flat-mask-hidden');
        });
      }
    }
  }
};

onMounted(() => {
  try {
    initSidebar();
  } catch (err) {
    console.log(err);
  }
});
</script>
