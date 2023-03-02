<template>
  <div class="w-full">
    <div class="w-full h-full max-w-[1399px] px-5" style="margin: 0 auto" v-if="!isBurgerOpen">
      <PagesMainFirstSectionBrand class="absolute top-[92vh] z-[10]" v-if="!isThereOffset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);
</script>
