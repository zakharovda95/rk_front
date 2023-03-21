<template>
  <div>
    <NuxtLink
      v-for="link in links"
      :key="link.id"
      class="cursor-pointer"
      @click="scrollTo(link.url)"
    >
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        {{ link.name }}
      </UIText>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { MENU_CONSTANTS } from '~/helpers/constants/main-menu.constants';
import { MainMenuElemType } from '~/helpers/types/constants/main-menu.type';
import { scrollTo } from '~/helpers/methods/scroll-to.method';

const links: Ref<MainMenuElemType[]> = ref(MENU_CONSTANTS);
</script>
