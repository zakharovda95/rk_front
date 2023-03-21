<template>
  <div id="section2navigation" class="flex gap-2">
    <div class="flex flex-col">
      <div v-for="elem in data" :key="data.id" class="flex mb-3 items-center gap-5">
        <UIText
          tag="p"
          class="font-helvetica lg:text-[calc(1vh+1vw*1.2)] md:text-[calc(1vh+1vw*1.5)] text-[white] cursor-pointer"
        >
          {{ elem.name }}
        </UIText>

        <div class="flex gap-2">
          <component
            :is="el.url ? 'NuxtLink' : 'div'"
            v-for="el in elem.values"
            :key="el.id"
            class="cursor-pointer"
            :class="{ 'link-active': el.id === 1 }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              {{ el.name }}
            </UIText>
          </component>
        </div>
      </div>
    </div>

    <UIButton
      id="section2button"
      tag="button"
      :size="widthX > 1024 ? 'large' : 'medium'"
      color="beige"
      type="round"
      class="w-[91px] h-[91px] lg:w-[80px] lg:h-[80px] xl:ml-10 lg:ml-5"
    >
      <img
        alt="arrow"
        src="/img/icons/arrow-right.svg"
        class="relative left-[30%] transition-[0.8s]"
      />
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import { Section2NavigationType } from '~/helpers/types/constants/section-2.type';
import { SECTION_2_NAVIGATION_CONSTANTS } from '~/helpers/constants/section-2.constants';
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';

const data: Ref<Section2NavigationType[]> = ref(SECTION_2_NAVIGATION_CONSTANTS);
const { widthX } = usePageWidthWatcher();
</script>

<style scoped lang="scss">
.link-active {
  border-bottom: 5px solid #e3bc98;
}

#section2button:hover {
  img {
    transform: scale(1.5);
  }
}
</style>
