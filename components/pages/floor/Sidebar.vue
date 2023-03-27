<template>
  <PagesFloorSideSvg
    class="w-full h-full"
    :current-floor="currentFloor"
    :current-corpus="currentCorpus"
  />
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const currentFloor = computed(() => route.params.floor);
const currentCorpus = computed(() => route.params.corpus);

onMounted(() => {
  const sidebarContainer: HTMLElement | null = document.querySelector('#side-menu-svg');
  if (sidebarContainer) {
    const floors = Array.from(sidebarContainer.querySelectorAll('.sidebar-mask'));

    floors.forEach(el => {
      el.addEventListener('click', (ev: Event): void => {
        const target = ev.target as HTMLElement;
        const closest = target.closest('[data-floor]') as HTMLElement;
        if (closest) {
          const floor = closest.dataset.floor;
          router.push(`/corpus-${currentCorpus.value}/floor-${floor}`);
        }
      });
    });
  }
});
</script>
