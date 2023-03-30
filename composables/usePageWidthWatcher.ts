import { onBeforeUnmount, ref, onMounted, Ref } from 'vue';

export function usePageWidthWatcher(): { widthX: Ref<number> } {
  const widthX: Ref<number> = ref(0);

  const watchSize = (): number => (widthX.value = screen.width);

  onMounted((): void => {
    widthX.value = screen.width;
    window.addEventListener('resize', watchSize);
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('resize', watchSize);
  });
  return { widthX };
}
