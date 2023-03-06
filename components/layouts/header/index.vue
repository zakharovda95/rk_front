<template>
  <div id="header" class="fixed h-[80px] w-full z-[950] flex items-center px-2">
    <div class="w-full h-full max-w-[1399px] flex justify-between" style="margin: 0 auto">
      <div class="h-full flex justify-start">
        <LayoutsHeaderBurger class="p-2" />
      </div>
      <UIText
        id="phone"
        v-if="!isBurgerOpen"
        class="font-helvetica text-[white] text-[18px] relative top-[25%]"
      >
        +7 812 242 52 10
      </UIText>

      <SharedAddressBadge id="address-badge" class="relative top-[10%]" v-if="!isBurgerOpen" />

      <div class="flex justify-between h-full items-center gap-20">
        <LayoutsHeaderPlay id="play" v-if="!isBurgerOpen" />
        <LayoutsHeaderBooklet id="plans" v-if="!isBurgerOpen"> планировки </LayoutsHeaderBooklet>
        <LayoutsHeaderBooklet> получить буклет </LayoutsHeaderBooklet>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);
</script>
