<template>
  <div class="flex flex-col justify-center items-center">
    <div
      id="s11block"
      class="w-[380px] h-[380px] flex justify-center items-center bg-[#F1F0EE] relative top-0 left-0 overflow-hidden"
    >
      <img
        id="section11addressimg"
        alt="bg"
        src="/img/background/section-11-bg.png"
        class="w-full h-full absolute z-[100]"
      />
      <UIText
        id="section11addressnumber"
        class="font-helvetica relative z-[110] text-[white] text-[calc(1vw+1vh*15)]"
      >
        22
      </UIText>

      <div
        @click="isMusicPlayed = !isMusicPlayed"
        class="absolute bottom-[10%] right-[45%] z-[110] cursor-pointer hover:scale-[1.1] transition-[0.5s]"
      >
        <img alt="img" src="/img/icons/stop.svg" v-if="isMusicPlayed" />
        <img alt="img" src="/img/icons/play3.svg" v-if="!isMusicPlayed" />
      </div>
    </div>

    <UIText class="font-helvetica text-black text-[calc(1vw+1vh*1)] max-[400px]:text-[0.9rem] mt-3">
      Адрес как музыка
    </UIText>
  </div>
</template>

<script setup lang="ts">
const isMusicPlayed: Ref<boolean> = ref(true);
</script>
