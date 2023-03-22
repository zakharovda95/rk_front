<template>
  <div class="fixed h-[90px] w-full z-[950] flex items-center px-2">
    <div
      class="w-full h-full max-w-[1599px] flex justify-between flex-nowrap items-center"
      style="margin: 0 auto"
    >
      <div class="h-full flex justify-between items-center flex-nowrap lg:w-[15%] md:w-[400%]">
        <LayoutsHeaderBurger class="p-2" />
      </div>

      <SharedAddressBadge class="inline md:hidden" />

      <SharedDownloadBooklet class="inline md:hidden" />

      <div
        class="flex justify-around h-full justify-end items-center 2xl:w-[20%] lg:w-[30%] md:w-[40%] flex-nowrap"
      >
        <LayoutsHeaderPlay class="hidden lg:inline" id="play" v-if="!isBurgerOpen" />
        <LayoutsHeaderBooklet class="hidden lg:inline" id="plans" v-if="isBurgerOpen">
          планировки
        </LayoutsHeaderBooklet>
        <LayoutsHeaderBooklet class="hidden lg:inline"> получить&nbsp;буклет </LayoutsHeaderBooklet>
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
