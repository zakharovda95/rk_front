<template>
  <div class="w-full h-full bg-[white] relative">
    <img
      id="section2img-1"
      :src="`/img/background/${img}.png`"
      alt="img2"
      class="object-cover w-full h-[100vh]"
    />

    <div class="flex-col px-10">
      <UIText
        id="section2text"
        tag="h1"
        class="absolute top-[150px] font-trajan text-[white] w-[50%] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px]"
      >
        Выберете свою идеальную планировку
      </UIText>

      <PagesMainSecondSectionNavigation
        @custom:select-floor="test($event)"
        class="absolute z-20 bottom-10 right-0 md:w-[40%] w-80% mx-10"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FloorType } from '~/helpers/types/common.type';

const floor: Ref<FloorType | null> = ref(null);

const test = (ev: FloorType) => {
  floor.value = ev;
};

const img = computed(() => {
  if (floor.value) {
    switch (floor.value.floor) {
      case '2':
        return 'floor-2';
      case '3':
        return 'floor-3';
      case '4':
        return 'floor-4';
      case '5':
        return 'floor-5';
    }
  }
});
</script>
