<template>
  <div
    class="absolute right-0 w-1/3 min-w-[380px] h-full bg-lightGray flex items-start justify-center flex-col px-[80px] z-[100]"
  >
    <div class="absolute top-[30%]">
      <UIText tag="h2" class="text-[32px] font-trajan text-[black]">Апартаменты</UIText>
      <ul>
        <li v-for="link in links" :key="link.id" class="flex flex-col mt-5">
          <UIText class="font-helvetica text-[18px] text-black mb-3">{{ link.name }}</UIText>

          <NuxtLink
            v-for="elem in link.elems"
            :key="elem.id"
            class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          >
            <UIText tag="p" class="font-helvetica text-[18px] text-black">{{ elem.name }}</UIText>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MainMenuType } from '~/helpers/types/constants/main-menu.type';
import { MAIN_MENU_CONSTANTS } from '~/helpers/constants/main-menu.constants';

const links: Ref<MainMenuType[]> = ref(MAIN_MENU_CONSTANTS);
</script>
