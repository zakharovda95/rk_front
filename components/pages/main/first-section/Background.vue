<template>
  <div id="background" class="bg w-full h-[100vh]" />
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';

const props = defineProps({
  blur: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const commonStore = useCommonStore();

const isThereOffset: Ref<boolean> = computed(() => commonStore.isThereOffset);
const philter: Ref<string> = computed(() =>
  isThereOffset.value && props.blur ? 'blur(15px)' : 'none',
);
</script>

<style scoped lang="scss">
.bg {
  background-image: url('public/img/background/main_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  filter: v-bind(philter);
  -webkit-filter: v-bind(philter);
  transition: 1s;
  background-attachment: fixed;
}
</style>
