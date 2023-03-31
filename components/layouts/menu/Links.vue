<template>
  <div>
    <NuxtLink v-for="link in links" :key="link.id" class="cursor-pointer" @click="go(link.url)">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        {{ link.name }}
      </UIText>
    </NuxtLink>
    <NuxtLink @click="go2" class="cursor-pointer inline md:hidden">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        Планировки
      </UIText>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { MENU_CONSTANTS } from '~/helpers/constants/main-menu.constants';
import { MainMenuElemType } from '~/helpers/types/constants/main-menu.type';
import { scrollTo } from '~/helpers/methods/scroll-to.method';
import { useCommonStore } from '~/store/common.store';

const links: Ref<MainMenuElemType[]> = ref(MENU_CONSTANTS);
const store = useCommonStore();
const router = useRouter();

const go = link => {
  scrollTo(link);
  store.isBurgerOpen = false;
};
const go2 = () => {
  router.push('/corpus-2/floor-2');
  store.isBurgerOpen = false;
};
</script>
