<template>
  <div>
    <div id="section-2" class="w-full h-[100vh] flex flex-col relative z-[10]">
      <div
        id="section2-text"
        class="text w-full max-w-[1399px] flex flex-col items-start justify-end relative bottom-[50px] mt-2"
        style="margin: 0 auto"
        :style="textSize"
      >
        <UIText tag="h1" class="font-trajan text-[white] text-[46px] mb-2">Клубный проект</UIText>
        <UIText tag="h2" class="font-trajan text-[white] text-[26px]">
          12 коллекционных резиденций,
          <br />
          включая 4 двухуровневых апартамента
        </UIText>
      </div>
      <div id="section2img" :style="imgSizes" class="img relative z-[20]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  addressBlockSizes: {
    type: Object as PropType<{ w: number; h: number } | null>,
    required: true,
  },
});
const scrollBarWidth: Ref<number> = ref(0);

onMounted(() => {
  const clientWidth: number = document.body.clientWidth;
  const innerWidth: number = window.innerWidth;

  scrollBarWidth.value = innerWidth - clientWidth;
});

const imgSizes: Ref<{ width: string | null; height: string | null } | null> = computed(() => {
  if (props.addressBlockSizes) {
    return {
      width: imgWidth.value,
      height: imgHeight.value,
    };
  }
  return null;
});

const imgWidth: Ref<string | null> = computed(() => {
  if (props.addressBlockSizes) {
    return `calc(100vw - ${scrollBarWidth.value + props.addressBlockSizes.w}px)`;
  } else {
    return null;
  }
});

const imgHeight: Ref<string | null> = computed(() => {
  if (props.addressBlockSizes) {
    return `${props.addressBlockSizes.h}px`;
  } else {
    return null;
  }
});

const textSize: Ref<{ height: string } | null> = computed(() => {
  if (props.addressBlockSizes) {
    return {
      height: `calc(100vh - ${props.addressBlockSizes.h}px)`,
    };
  }
  return null;
});
</script>

<style scoped lang="scss">
.img {
  background-image: url('/img/images/section-2-img.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
