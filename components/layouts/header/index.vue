<template>
  <div class="fixed h-[80px] w-full z-[950] flex items-center">
    <div class="w-full h-full max-w-[1399px] flex justify-between" style="margin: 0 auto">
      <div class="h-full flex justify-start">
        <LayoutsHeaderBurger class="p-2" />
      </div>

      <div class="flex justify-between h-full items-center gap-20">
        <LayoutsHeaderPlay v-if="!isBurgerOpen" />
        <LayoutsHeaderBooklet />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
</script>
