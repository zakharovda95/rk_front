<template>
  <div id="header" class="fixed h-[10vh] min-h-[60px] w-full z-[950] flex items-center px-2">
    <div
      class="w-full h-full max-w-[1599px] flex justify-between flex-nowrap items-center"
      style="margin: 0 auto"
    >
      <div class="h-full flex justify-between items-center flex-nowrap md:w-[30%] w-[15%]">
        <LayoutsHeaderBurger class="p-2" />

        <UIText
          id="phone"
          v-if="!isBurgerOpen"
          class="font-helvetica text-[white] text-[1.1rem] hidden lg:block"
        >
          +7&nbsp;812&nbsp;242&nbsp;52&nbsp;10
        </UIText>
      </div>

      <div class="w-auto">
        <SharedAddressBadge
          @click="$router.push('/')"
          id="address-badge"
          class="relative lg:top-[15%] top-[20%]"
          v-if="!isBurgerOpen"
        />
      </div>

      <NuxtLink :href="booklet" download="booklet.pdf" target="_blank">
        <SharedDownloadBooklet class="inline md:hidden" />
      </NuxtLink>

      <div
        class="flex justify-around h-full justify-end items-center lg:w-[33%] md:w-[40%] flex-nowrap gap-5"
      >
        <UIAnimatedLink
          class="hidden lg:flex"
          @click="
            $router.push(
              `/corpus-${availableCorpusAndFloor.corpus}/floor-${availableCorpusAndFloor.floor}`,
            )
          "
          color="white"
        >
          планировки
        </UIAnimatedLink>
        <UIAnimatedLink
          :href="booklet"
          download="booklet.pdf"
          target="_blank"
          class="hidden md:flex"
          color="white"
        >
          получить&nbsp;буклет
        </UIAnimatedLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';
import { PropType } from '@vue/runtime-core';

const commonStore = useCommonStore();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);

defineProps({
  availableCorpusAndFloor: {
    type: Object as PropType<{ corpus: string; floor: string }>,
    required: true,
  },
  booklet: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
#header {
  background-image: url('public/img/background/header-layout.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
}
</style>
