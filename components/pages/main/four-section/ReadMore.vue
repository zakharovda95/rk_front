<template>
  <div class="read-more flex cursor-pointer" @click="readMore">
    <div class="elem w-[30px] h-[2px] rotate-90 mt-1" />
    <span class="font-helvetica text-[calc(1vh+1vw*0.9)] 2xl:text-[1.3rem]">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['custom:read-more']);

const isReadMore: Ref<boolean> = ref(false);

const text: Ref<string> = computed(() => (isReadMore.value ? 'скрыть' : 'читать далее'));

const readMore = (): void => {
  emits('custom:read-more');
  isReadMore.value = !isReadMore.value;
};
</script>

<style scoped lang="scss">
.elem {
  background: #9d9d9d;
}
.elem:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: black;
  transition: all 1s ease;
  z-index: 100;
}

.read-more:hover .elem:before {
  width: 100%;
  height: 100%;
}
</style>
