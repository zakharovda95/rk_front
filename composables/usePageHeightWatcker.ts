import { onBeforeUnmount, ref, onMounted, Ref } from 'vue';

export function usePageHeightWatcher(): { heightY: Ref<number> } {
  const heightY: Ref<number> = ref(0);

  const watchSize = (): number => (heightY.value = window.innerHeight);

  onMounted((): void => {
    heightY.value = window.innerHeight;
    window.addEventListener('resize', watchSize);
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('resize', watchSize);
  });
  return { heightY };
}
