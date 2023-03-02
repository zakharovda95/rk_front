<template>
  <div id="address-block">
    <UIText class="text-[56px] text-titleBrown font-trajan" tag="h1">
      Римского<br />Корсакова
    </UIText>

    <div
      ref="address"
      class="flex items-center justify-center w-[380px] h-[380px] bg-[white] mt-10"
    >
      <UIText class="text-[180px] font-helvetica" tag="h1">22</UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
const address: Ref<Element | null> = ref(null);

const emits = defineEmits(['custom:get-address-block-sizes']);

onMounted((): void => {
  const sizes: { w: number; h: number } = {
    w: address.value!.clientWidth,
    h: address.value!.clientHeight,
  };

  if (sizes.w && sizes.h) {
    emits('custom:get-address-block-sizes', sizes);
  }
});
</script>

<style scoped lang="scss">
.start-anim {
  animation: anim 1s ease;
}

@keyframes anim {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
