<template>
  <div class="flex">
    <div
      class="max-w-[150px] max-h-[150px] w-[100px] h-[100px] md:w-[calc(1vw+1vh*15)] md:h-[calc(1vw+1vh*15)] border border-titleBrown p-2"
    >
      <UIText
        tag="p"
        class="font-helvetica text-[10px] md:text-[calc(1vw+1vh*0.4)] text-titleBrown"
      >
        корпус
      </UIText>

      <UIText tag="p" class="font-trajan text-[40px] md:text-[calc(1vw+1vh*5)]">
        {{ floorInfo.corpus }}
      </UIText>
    </div>

    <div
      class="max-w-[150px] max-h-[150px] w-[100px] h-[100px] md:w-[calc(1vw+1vh*15)] md:h-[calc(1vw+1vh*15)] border border-l-0 border-r-0 border-titleBrown p-2"
    >
      <UIText class="font-trajan text-[20px] md:text-[calc(1vw+1vh*2)]">
        {{ floorInfo.floor }}
      </UIText>

      <UIText
        class="font-helvetica text-titleBrown text-[10px] md:text-[calc(1vw+1vh*0.3)] xl:text-[14px]"
      >
        этаж
      </UIText>

      <UIText
        class="font-helvetica text-black text-[10px] md:text-[calc(1vw+1vh*0.4)] xl:text-[16px] mt-1"
      >
        {{ Number(floorInfo.maxArea).toFixed(2) }} м2
      </UIText>
    </div>

    <div
      class="max-w-[150px] max-h-[150px] w-[100px] h-[100px] md:w-[calc(1vw+1vh*15)] md:h-[calc(1vw+1vh*15)] border border-titleBrown p-2"
    >
      <UIText class="font-trajan text-[20px] md:text-[calc(1vw+1vh*2)]">
        {{ floorInfo.freeAparts }}
      </UIText>

      <UIText
        class="font-helvetica text-titleBrown text-[10px] md:text-[calc(1vw+1vh*0.1)] xl:text-[14px]"
      >
        {{ text }}
      </UIText>

      <UIText
        class="font-helvetica text-black text-[10px] md:text-[calc(1vw+1vh*0.1)] xl:text-[14px] mt-1"
      >
        {{ floorInfo.rangeAreas }} м2
      </UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FloorInfoType } from '~/helpers/types/pages/floor-page.type';

const props = defineProps({
  floorInfo: {
    type: Object as PropType<FloorInfoType>,
    required: true,
  },
});

const text = computed(() => {
  if (String(props.floorInfo.freeAparts) === String('1')) {
    return 'апартамент';
  }
  if (
    String(props.floorInfo.freeAparts) === '2' ||
    String(props.floorInfo.freeAparts) === '3' ||
    String(props.floorInfo.freeAparts) === '4'
  ) {
    return 'апартамента';
  }
  if (Number(props.floorInfo.freeAparts) >= 5) {
    return 'апартаментов';
  }
});
</script>
