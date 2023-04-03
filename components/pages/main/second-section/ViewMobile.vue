<template>
  <div class="w-full h-full bg-[white] relative pb-10">
    <div class="flex-col px-5">
      <UIText
        id="section2text"
        tag="h1"
        class="font-trajan text-black w-[80%] md:text-[24px] md:leading-[29px] text-[24px] max-[400px]:text-[24px] leading-[36px] mb-10"
      >
        Выберете свою идеальную планировку
      </UIText>

      <PagesMainSecondSectionMobileNavigation class="w-[90%]" />
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
