import { onBeforeUnmount, ref, onMounted, Ref } from 'vue';
import { useNuxtApp } from '#app';

export function usePageWidthWatcher(): { widthX: Ref<number> } {
  const widthX: Ref<number> = ref(0);
  const nuxtApp = useNuxtApp();
  const { $isMobile } = nuxtApp;

  const watchSize = (): void => {
    if ($isMobile()) {
      widthX.value = screen.width;
    } else {
      widthX.value = window.innerWidth;
    }
  };

  onMounted((): void => {
    if ($isMobile()) {
      widthX.value = screen.width;
    } else {
      widthX.value = window.innerWidth;
    }
    window.addEventListener('resize', watchSize);
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('resize', watchSize);
  });
  return { widthX };
}
