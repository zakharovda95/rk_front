<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <UIText
        tag="p"
        class="text-titleBrown font-helvetica text-[calc(1vw+1vh*0.3)] relative top-[calc(1vw+1vh*0.1)] left-[calc(1vw+1vh*6)]"
      >
        {{ flatHeight }}М
      </UIText>
      <img alt="img" src="/img/icons/floor-height.svg" class="w-[calc(1vw+1vh*15)] h-auto" />
      <UIText tag="p" class="text-black font-helvetica text-[calc(1vw+1vh*0.1)]">
        Высота потолков
      </UIText>
    </div>

    <div class="flex flex-col items-center">
      <UIText
        tag="p"
        class="text-titleBrown font-helvetica text-[calc(1vw+1vh*0.5)] relative top-[calc(1vw+1vh*1.6)] z-100"
      >
        {{ roomCount }}
      </UIText>
      <img alt="img" src="/img/icons/count-rooms.svg" class="w-[calc(1vw+1vh*11)] h-auto" />
      <UIText tag="p" class="text-black font-helvetica text-[calc(1vw+1vh*0.1)]">
        Спальных комнаты
      </UIText>
    </div>

    <div class="mt-10 flex flex-col items-center" v-if="isCourtyardView">
      <img alt="img" src="/img/icons/courtyard-view.svg" class="w-[calc(1vw+1vh*8)] h-auto" />
      <UIText tag="p" class="text-black font-helvetica text-[calc(1vw+1vh*0.1)]">
        Вид во двор
      </UIText>
    </div>

    <div class="mt-10">
      <img alt="img" src="/img/icons/corpus-badge.svg" v-if="corpusActive" />
    </div>

    <div class="mt-5">
      <div>
        <PagesFlatFloorsSvg :current-floor="currentFloor" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  flatHeight: {
    type: Number,
    required: false,
    default: () => 3,
  },
  roomCount: {
    type: Number,
    required: false,
    default: () => 1,
  },
  currentFloor: {
    type: String,
    required: true,
  },
  isCourtyardView: {
    type: Boolean,
    required: false,
    default: false,
  },
  corpusActive: {
    type: Boolean,
    required: true,
  },
});
</script>
