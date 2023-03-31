<template>
  <div class="flex items-end w-full">
    <div class="flex flex-col h-full min-h-[500px] justify-end w-[40%]">
      <UIText
        v-for="el in data"
        :key="el.id"
        class="font-helvetica text-[white] 2xl:text-[2rem] xl:text-[1.7rem] lg:text-[1.5rem] md:text-[1.3rem] opacity-[0.7] cursor-pointer hover:translate-y-[-2px] transition-[0.2s] my-2"
        :style="{ opacity: el.text === activeText ? 1 : 0.7 }"
        tag="h2"
        @click="activeText = el.text"
      >
        {{ el.title }}
      </UIText>
    </div>

    <UIText
      tag="h1"
      class="relative lg:left-10 md:left-0 font-helvetica text-[white] 2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1.1rem] md:text-[1.1rem] w-[50%]"
    >
      {{ activeText }}
    </UIText>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { Section9Type } from '~/helpers/types/constants/section-9.type';

const props = defineProps({
  data: {
    type: Array as PropType<Section9Type[]>,
    required: true,
  },
});

const activeText: Ref<string> = ref(props.data[0].text);
</script>
