<template>
  <LayoutsHeader />
  <LayoutsMenu v-if="isBurgerOpen" />
  <slot />
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();
const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
</script>
