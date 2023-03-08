<template>
  <div class="relative">
    <img alt="plan" class="plan w-[862px] h-[232px]" src="/img/components/floor/floor.jpg" />

    <div class="w-full absolute z-[100] top-0 left-0">
      <img
        alt="mask"
        v-if="isFlatVisible"
        class="mask absolute"
        src="/img/components/floor/30.svg"
      />
    </div>
    <UIText
      @click="$router.push('/apartment')"
      @mouseenter="isFlatVisible = true"
      @mouseleave="isFlatVisible = false"
      class="number absolute z-[110] font-helvetica text-[26px] w-[100px] h-[100px] flex justify-center items-center left-[180px] top-[10px] cursor-pointer"
    >
      30
    </UIText>
  </div>
</template>

<script setup>
const isFlatVisible = ref(false);
</script>
