import { onBeforeUnmount, ref, onMounted, Ref } from 'vue';

export function usePageWidthWatcher(): { widthX: Ref<number> } {
  const widthX: Ref<number> = ref(0);

  const watchSize = (): number => (widthX.value = window.innerWidth);

  onMounted((): void => {
    widthX.value = window.innerWidth;
    window.addEventListener('resize', watchSize);
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('resize', watchSize);
  });
  return { widthX };
}
