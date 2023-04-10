<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col">
      <UIText class="font-helvetica text-[lightgray] mb-1">этажность</UIText>
      <div class="flex gap-3">
        <div v-for="el in data[1].values" :key="el.id" class="cursor-pointer">
          <UIButton
            v-if="availableFloors.includes(el.name)"
            @click="$router.push(`/corpus-${currentCorpus}/floor-${el.name}`)"
            tag="a"
            color="transparent"
            :font-color="el.name === currentFloor ? 'black' : 'lightgray'"
            :border="el.name === currentFloor ? 'black' : 'lightgray'"
            size="medium"
          >
            {{ el.name }}
          </UIButton>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <UIText class="font-helvetica text-[lightgray] mb-1">корпус</UIText>
      <div class="flex gap-3">
        <div v-for="el in data[0].values" :key="el.id" class="cursor-pointer">
          <UIButton
            @click="$router.push(`/corpus-${el.name}/floor-${availableFloors[0]}`)"
            tag="a"
            color="transparent"
            size="medium"
            :font-color="el.name === currentCorpus ? 'black' : 'lightgray'"
            :border="el.name === currentCorpus ? 'black' : 'lightgray'"
          >
            {{ el.name }}
          </UIButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SECTION_2_NAVIGATION_CONSTANTS } from '~/helpers/constants/section-2.constants';
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  currentFloor: {
    type: String as PropType<'1' | '2' | '3' | '4' | '5'>,
    required: true,
  },
  currentCorpus: {
    type: String as PropType<'2' | '3'>,
    required: true,
  },
  availableFloors: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const data = ref(SECTION_2_NAVIGATION_CONSTANTS);
</script>
