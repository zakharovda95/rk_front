<template>
  <div id="section2navigation" class="flex gap-2">
    <div class="flex flex-col">
      <div v-for="elem in data" :key="data.id" class="flex mb-3 items-center gap-5">
        <UIText tag="p" class="font-helvetica text-[26px] text-[white] cursor-pointer">
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
            <UIText tag="p" class="font-helvetica text-[26px] text-[white]">
              {{ el.name }}
            </UIText>
          </component>
        </div>
      </div>
    </div>

    <UIButton
      id="section2button"
      tag="button"
      size="large"
      color="beige"
      type="round"
      class="w-[91px] h-[91px] ml-10"
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

const data: Ref<Section2NavigationType[]> = ref(SECTION_2_NAVIGATION_CONSTANTS);
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
