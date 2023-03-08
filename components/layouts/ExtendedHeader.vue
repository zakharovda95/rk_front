<template>
  <div id="header" class="fixed h-[90px] w-full z-[950] flex items-center px-2">
    <div
      class="w-full h-full max-w-[1599px] flex justify-between flex-nowrap"
      style="margin: 0 auto"
    >
      <div class="h-full flex justify-between items-center flex-nowrap w-[30%]">
        <LayoutsHeaderBurger class="p-2" />

        <UIText id="phone" v-if="!isBurgerOpen" class="font-helvetica text-[white] text-[18px]">
          +7&nbsp;812&nbsp;242&nbsp;52&nbsp;10
        </UIText>
      </div>

      <div class="w-auto">
        <SharedAddressBadge
          @click="$router.push('/')"
          id="address-badge"
          class="relative top-[10%]"
          v-if="!isBurgerOpen"
        />
      </div>

      <div class="flex justify-around h-full justify-end items-center w-[30%] flex-nowrap">
        <LayoutsHeaderBooklet @click="$router.push('/floor')"> планировки </LayoutsHeaderBooklet>
        <LayoutsHeaderBooklet> получить&nbsp;буклет </LayoutsHeaderBooklet>
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

<style scoped lang="scss">
#header {
  background-image: url('public/img/background/header-layout.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
}
</style>
