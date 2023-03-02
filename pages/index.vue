<template>
  <NuxtLayout>
    <div class="w-full min-h-[100vh]">
      <SharedBackground blur class="fixed z-[-1]" />
      <SharedScroll class="fixed bottom-[10vh] right-[85vw] z-[100]" />
      <SharedAddressBlock
        v-if="!isHideCommonElements"
        class="fixed z-10 right-0 bottom-0"
        :class="{ 'hide-animation': isHideCommonElements }"
        @custom:get-address-block-sizes="addressBlockSizes = $event"
      />

      <div v-if="!isBurgerOpen">
        <section id="section-1" class="relative z-[5]">
          <PagesMainFirstSectionView />
        </section>

        <section id="section-2" class="relative z-[6] mt-[100vh]">
          <PagesMainSecondSectionView
            @custom:show-3-section="isThirdSectionShowed = $event"
            :address-block-sizes="addressBlockSizes"
          />
        </section>

        <section id="section-3" class="relative z-[7]" v-if="isThirdSectionShowed">
          <PagesMainThirdSectionView />
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import usePageOffsetWatcher from '~/composables/usePageOffsetWatcher';
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();
const offset = usePageOffsetWatcher();

const addressBlockSizes: Ref<{ w: number; h: number } | null> = ref(null);
const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isHideCommonElements: Ref<boolean> = computed(() => commonStore.isHideCommonElements);
const isThirdSectionShowed: Ref<boolean> = ref(false);

watch(
  offset,
  () => {
    commonStore.isThereOffset = offset.value > 50;
  },
  { deep: true, immediate: true },
);
</script>

<style></style>
