<template>
  <NuxtLayout>
    <div class="scroll-container">
      <div class="w-full min-h-[100vh] overflow-hidden">
        <SharedScroll class="fixed bottom-[10vh] right-[85vw] z-[100]" />

        <div ref="container" id="container" class="w-full overflow-hidden" v-if="!isBurgerOpen">
          <section id="section-wrapper-1" class="w-full h-[100vh]">
            <PagesMainFirstSectionView />
          </section>

          <section id="section-wrapper-2" class="w-full h-[100vh]">
            <PagesMainSecondSectionView />
          </section>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import usePageOffsetWatcher from '~/composables/usePageOffsetWatcher';
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();
const offset = usePageOffsetWatcher();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);

const container = ref(null);

watch(
  offset,
  () => {
    commonStore.isThereOffset = offset.value > 50;
  },
  { deep: true, immediate: true },
);
</script>

<style></style>
