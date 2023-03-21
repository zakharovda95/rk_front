<template>
  <div id="address-block" class="flex flex-col items-center">
    <UIText
      class="lg:text-[calc(1vh+1vw*2.5)] md:text-[calc(1vh+1vw*4.5)] mx-1 text-titleBrown font-trajan"
      tag="h1"
    >
      Римского<br />Корсакова
    </UIText>

    <div
      ref="address"
      class="flex items-center justify-center w-[40vh] h-[40vh] max-w-[380px] max-h-[380px] bg-[white] mt-10"
    >
      <UIText class="lg:text-[calc(1vh+1vw*10)] md:text-[calc(1vh+1vw*20)] font-helvetica" tag="h1">
        22
      </UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddressBlockSizesType } from '~/helpers/types/pages/index-page.type';

const emits = defineEmits(['custom:get-address-block-sizes']);

const address: Ref<Element | null> = ref(null);
const sizes: Ref<AddressBlockSizesType | null> = ref(null);

onMounted((): void => {
  sizes.value = {
    w: address.value!.clientWidth,
    h: address.value!.clientHeight,
  };

  if (sizes.value.w && sizes.value.h) {
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
