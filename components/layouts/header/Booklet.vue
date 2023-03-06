<template>
  <div class="el flex items-center gap-3 cursor-pointer">
    <span class="line" />
    <UIText class="font-helvetica font-[18px]" :class="textClass">
      <slot />
    </UIText>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);

const textClass: Ref<{ [key: string]: boolean }> = computed(() => ({
  'text-[white]': !isBurgerOpen.value,
  'text-black': isBurgerOpen.value,
}));

const lineBg: Ref<string> = computed(() => (isBurgerOpen.value ? '#252120' : 'white'));
</script>

<style scoped lang="scss">
.line {
  width: 62px;
  height: 2px;
  background: #9d9d9d;
  position: relative;
  top: 2px;
}

.line:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: v-bind(lineBg);
  transition: all 1s ease;
  z-index: 100;
}
.el:hover {
  .line:before {
    width: 100%;
  }
}
</style>
