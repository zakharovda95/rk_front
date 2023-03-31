import { onBeforeUnmount, ref, onMounted, Ref } from 'vue';
import { useNuxtApp } from '#app';

export function usePageHeightWatcher(): { heightY: Ref<number> } {
  const heightY: Ref<number> = ref(0);
  const nuxtApp = useNuxtApp();
  const { $isMobile } = nuxtApp;
  const watchSize = (): void => {
    if ($isMobile()) {
      heightY.value = screen.height;
    } else {
      heightY.value = window.innerHeight;
    }
  };

  onMounted((): void => {
    if ($isMobile()) {
      heightY.value = screen.width;
    } else {
      heightY.value = window.innerWidth;
    }

    window.addEventListener('resize', watchSize);
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('resize', watchSize);
  });
  return { heightY };
}
