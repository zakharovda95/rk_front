<template>
  <div
    class="flex h-full items-center justify-center items-center cursor-pointer"
    @click="commonStore.isBurgerOpen = !commonStore.isBurgerOpen"
  >
    <div class="flex flex-col mr-2 cursor-pointer">
      <span class="el el1 w-[50px] h-[2px] bg-[white] my-1" :class="{ open: isBurgerOpen }" />
      <span class="el el2 w-[50px] h-[2px] bg-[white] my-1" :class="{ open: isBurgerOpen }" />
    </div>
    <UIText
      class="el3 font-helvetica text-[white] text-[18px] relative top-[-2px]"
      :class="{ open: isBurgerOpen }"
    >
      {{ burgerText }}
    </UIText>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const commonStore = useCommonStore();

const isBurgerOpen: Ref<boolean> = computed(() => commonStore.isBurgerOpen);
const burgerText: Ref<string> = computed(() => (isBurgerOpen.value ? 'закрыть меню' : 'меню'));
</script>

<style scoped lang="scss">
.el {
  transition: all 0.5s;
}

.el3 {
  animation: anim2 0.5s forwards;
}

.el1.open {
  transform: rotate(-45deg) translate(0, 6px);
}
.el2.open {
  transform: rotate(45deg) translate(0, -7px);
}

.el3.open {
  animation: anim 0.5s forwards;
}

@keyframes anim {
  0% {
    opacity: 0;
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes anim2 {
  0% {
    opacity: 0;
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
