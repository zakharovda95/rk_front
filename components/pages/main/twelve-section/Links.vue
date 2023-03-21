<template>
  <div class="grid grid-cols-2 gap-x-[50px] gap-y-5">
    <NuxtLink
      class="cursor-pointer"
      v-for="link in links"
      :key="link.id"
      @click="scrollTo(link.url)"
    >
      <UIText class="font-helvetica text-[white]" tag="p">{{ link.name }}</UIText>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { MainMenuElemType } from '~/helpers/types/constants/main-menu.type';
import { MENU_CONSTANTS } from '~/helpers/constants/main-menu.constants';
import { scrollTo } from '~/helpers/methods/scroll-to.method';

const links: Ref<MainMenuElemType[]> = ref([
  { id: 5, url: '#section-wrapper-2', name: 'Апартаменты' },
  ...MENU_CONSTANTS,
]);
</script>
