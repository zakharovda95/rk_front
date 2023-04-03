<template>
  <div
    class="w-[41px] h-[41px] cursor-pointer hover:scale-[1.1] transition-[2s]"
    @click="play"
    v-if="false"
  >
    <img :src="isMusicPlayed ? '/img/icons/stop2.svg' : '/img/icons/play.svg'" alt="play" />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { useCommonStore } from '~/store/common.store';

const store = useCommonStore();
const isMusicPlayed: Ref<boolean> = ref(false);

// const play = () => {
//   if (isMusicPlayed.value) {
//     store.audio!.pause();
//     isMusicPlayed.value = false;
//   } else {
//     store.audio!.play();
//     isMusicPlayed.value = true;
//   }
// };
</script>
