<template>
  <div id="section2navigation" class="flex gap-5 md:justify-start justify-between">
    <div class="flex flex-col">
      <div class="flex mb-3 items-center gap-5">
        <UIText
          tag="p"
          class="font-helvetica lg:text-[calc(1vh+1vw*1.2)] md:text-[calc(1vh+1vw*1.5)] text-[white] cursor-pointer"
        >
          Корпус
        </UIText>

        <div class="flex gap-5">
          <NuxtLink
            class="cursor-pointer"
            v-if="availableFloor.c2.length"
            @click="to.corpus = '2'"
            :class="{ 'link-active': to.corpus === '2' }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              2
            </UIText>
          </NuxtLink>

          <NuxtLink
            class="cursor-pointer"
            v-if="availableFloor.c3.length"
            @click="to.corpus = '3'"
            :class="{ 'link-active': to.corpus === '3' }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              3
            </UIText>
          </NuxtLink>
        </div>
      </div>

      <div class="flex mb-3 items-center gap-5">
        <UIText
          tag="p"
          class="font-helvetica lg:text-[calc(1vh+1vw*1.2)] md:text-[calc(1vh+1vw*1.5)] text-[white] cursor-pointer"
        >
          Этаж
        </UIText>

        <div class="flex gap-5">
          <NuxtLink
            class="cursor-pointer"
            v-if="currentAvailableFloors.includes('2')"
            @click="setFloor('2')"
            :class="{ 'link-active': to.floor === '2' }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              2
            </UIText>
          </NuxtLink>

          <NuxtLink
            class="cursor-pointer"
            v-if="currentAvailableFloors.includes('3')"
            @click="setFloor('3')"
            :class="{ 'link-active': to.floor === '3' }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              3
            </UIText>
          </NuxtLink>

          <NuxtLink
            class="cursor-pointer"
            v-if="currentAvailableFloors.includes('4')"
            @click="setFloor('4')"
            :class="{ 'link-active': to.floor === '4' }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              4
            </UIText>
          </NuxtLink>

          <NuxtLink
            class="cursor-pointer"
            v-if="currentAvailableFloors.includes('5')"
            @click="setFloor('5')"
            :class="{ 'link-active': to.floor === '5' }"
          >
            <UIText
              tag="p"
              class="font-helvetica lg:text-[calc(1vh+1vw*1.1)] md:text-[calc(1vh+1vw*1.3)] text-[white]"
            >
              5
            </UIText>
          </NuxtLink>
        </div>
      </div>
    </div>

    <UIButton
      @click="goTo"
      id="section2button"
      tag="button"
      :size="widthX > 1024 ? 'large' : 'medium'"
      color="beige"
      type="round"
      class="xl:w-[91px] xl:h-[91px] w-[80px] h-[80px]"
    >
      <img alt="arrow" src="/img/icons/arrow-right.svg" class="relative transition-[0.8s]" />
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import { usePageWidthWatcher } from '~/composables/usePageWidthWatcher';
import { AvailableFloorsType, FloorType } from '~/helpers/types/common.type';
import { useCorpusPageStore } from '~/store/corpus.store';

const store = useCorpusPageStore();
const { widthX } = usePageWidthWatcher();
const router = useRouter();

const emit = defineEmits(['custom:select-floor']);

const availableFloor: Ref<AvailableFloorsType> = computed(() => store.corpusData);

const to: Ref<FloorType> = ref({
  corpus: availableFloor.value.c2.length ? '2' : '3',
  floor: '2',
});

const currentAvailableFloors: Ref<string[]> = computed(() =>
  to.value.corpus === '2' ? availableFloor.value.c2 : availableFloor.value.c3,
);

onMounted(() => {
  emit('custom:select-floor', to.value);
});

const setFloor = (floor: string): void => {
  to.value.floor = floor;
  emit('custom:select-floor', to.value);
};

const goTo = () => {
  if (to.value.corpus === '3' && to.value.floor === '5') {
    router.push(`/corpus-${to.value.corpus}/floor-4`);
  } else {
    router.push(`/corpus-${to.value.corpus}/floor-${to.value.floor}`);
  }
};
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
