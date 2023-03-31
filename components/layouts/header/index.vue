<template>
  <div class="fixed h-[10vh] min-h-[60px] w-full z-[950] flex items-center px-2">
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
        class="flex justify-around h-full gap-5 justify-end items-center 2xl:w-[20%] lg:w-[30%] md:w-[40%] flex-nowrap"
      >
        <!--        <LayoutsHeaderPlay class="hidden lg:inline" id="play" v-if="!isBurgerOpen" />-->
        <UIAnimatedLink
          class="hidden lg:flex"
          @click="
            $router.push(
              `/corpus-${availableCorpusAndFloor.corpus}/floor-${availableCorpusAndFloor.floor}`,
            )
          "
          v-if="isBurgerOpen"
          color="black"
        >
          планировки
        </UIAnimatedLink>
        <UIAnimatedLink
          :href="booklet"
          download="booklet.pdf"
          target="_blank"
          class="hidden lg:flex"
          v-if="isBurgerOpen"
          color="black"
        >
          получить&nbsp;буклет
        </UIAnimatedLink>
        <UIAnimatedLink
          :href="booklet"
          download="booklet.pdf"
          target="_blank"
          class="hidden lg:flex"
          v-if="!isBurgerOpen"
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
  // booklet: {
  //   type: String,
  //   required: true,
  // },
});

const booklet = ref('http://185.26.120.121:8085/upload/booklet/1/641d72a8cf460.pdf');
</script>
