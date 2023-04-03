<template>
  <div
    class="absolute right-0 w-1/3 min-w-[380px] h-full bg-lightGray flex items-start justify-center flex-col px-[80px] z-[100]"
  >
    <div class="absolute top-[30%]">
      <UIText tag="h2" class="text-[32px] font-trajan text-[black]">Апартаменты</UIText>

      <div class="flex flex-col mt-5" v-if="availableFloor.c2.length">
        <UIText class="font-helvetica text-[18px] text-black mb-3">Корпус 2</UIText>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('1')"
          @click="go('/corpus-2/floor-1')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">1 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('2')"
          @click="go('/corpus-2/floor-2')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">2 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('3')"
          @click="go('/corpus-2/floor-3')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">3 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('4')"
          @click="go('/corpus-2/floor-4')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">4 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('5')"
          @click="go('/corpus-2/floor-5')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">5 этаж</UIText>
        </NuxtLink>
      </div>

      <div class="flex flex-col mt-5" v-if="availableFloor.c3.length">
        <UIText class="font-helvetica text-[18px] text-black mb-3">Корпус 3</UIText>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('1')"
          @click="go('/corpus-3/floor-1')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">1 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('2')"
          @click="go('/corpus-3/floor-2')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">2 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('3')"
          @click="go('/corpus-3/floor-3')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">3 этаж</UIText>
        </NuxtLink>

        <NuxtLink
          class="cursor-pointer hover:translate-y-[-1px] transition-[0.2s]"
          v-if="availableFloor.c2.includes('4')"
          @click="go('/corpus-3/floor-4')"
        >
          <UIText tag="p" class="font-helvetica text-[18px] text-black">4 этаж</UIText>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common.store';
import { useCorpusPageStore } from '~/store/corpus.store';
import { AvailableFloorsType } from '~/helpers/types/common.type';

const corpusStore = useCorpusPageStore();
const store = useCommonStore();
const router = useRouter();

const availableFloor: Ref<AvailableFloorsType> = computed(() => corpusStore.corpusData);

const go = (url: string) => {
  router.push(url);
  store.isBurgerOpen = false;
};
</script>
