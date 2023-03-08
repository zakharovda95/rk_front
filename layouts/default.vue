<template>
  <LayoutsHeader
    v-if="(!isThereOffset && $route.name === 'index') || ($route.name !== 'index' && isBurgerOpen)"
  />
  <LayoutsExtendedHeader v-if="isThereOffset || ($route.name !== 'index' && !isBurgerOpen)" />
  <LayoutsMenu v-if="isBurgerOpen" />
  <slot />
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();
const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);
</script>
