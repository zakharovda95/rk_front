<template>
  <div
    class="w-[41px] h-[41px] cursor-pointer hover:scale-[1.1] transition-[2s]"
    @click="isMusicPlayed = !isMusicPlayed"
  >
    <img :src="isMusicPlayed ? '/img/icons/stop.svg' : '/img/icons/play.svg'" alt="play" />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const isMusicPlayed: Ref<boolean> = ref(true);
</script>
