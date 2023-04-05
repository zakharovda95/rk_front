<template>
  <PagesFloorSideSvg
    class="w-full h-full"
    :current-floor="currentFloor"
    :current-corpus="currentCorpus"
  />
  <!--  <PagesFloorSide2Svg-->
  <!--    v-if="currentCorpus === '3'"-->
  <!--    class="w-full h-full"-->
  <!--    :current-floor="currentFloor"-->
  <!--    :current-corpus="currentCorpus"-->
  <!--  />-->
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  currentFloor: {
    type: String as PropType<'1' | '2' | '3' | '4' | '5'>,
    required: true,
  },
  currentCorpus: {
    type: String as PropType<'2' | '3'>,
    required: true,
  },
  availableFloors: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const router = useRouter();

const initSidebar = () => {
  const sidebarContainer: HTMLElement | null = document.querySelector('#side-menu-svg');

  if (sidebarContainer) {
    const floorMasks = Array.from(sidebarContainer.querySelectorAll('.sidebar-mask'));

    if (floorMasks && floorMasks.length) {
      floorMasks.forEach(el => {
        addHandler(el);
      });

      const forListener = props.availableFloors.map((el: any) =>
        floorMasks.find(elem => String(el) === elem.dataset.floor),
      );

      const forHidden = floorMasks.filter(
        el => !forListener.some((elem: any) => el.dataset.floor === elem.dataset.floor),
      );

      if (forHidden.length) {
        forHidden.forEach(el => {
          el.classList.add('flat-mask-hidden');
        });
      }
    }
  }
};

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

onMounted(() => {
  try {
    initSidebar();
  } catch (err) {
    console.log(err);
  }
});
</script>
