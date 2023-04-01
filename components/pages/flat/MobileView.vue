<template>
  <div class="flex flex-col w-full p-5 w-[100vw] overflow-hidden">
    <div class="w-full flex justify-between items-center mt-20">
      <UIText tag="h1" class="text-black font-trajan text-[calc(1vh+1vw*10)]">
        {{ data.data.number }}
        <span class="font-black text-[12px] relative bottom-[25px] left-[-10px]">№</span>
      </UIText>

      <UIAnimatedLink
        @click="$router.push(`/corpus-${$route.params.corpus}/floor-${$route.params.floor}`)"
        color="black"
      >
        назад
      </UIAnimatedLink>
    </div>

    <div class="mx-5 my-5">
      <div
        class="flex items-center justify-center gap-5 mb-5"
        v-if="data.data.image_possible_layout"
      >
        <div>
          <UIRadio
            :disabled="!data.data.image_possible_layout"
            @custom:radio-click="isEmptyPlan = $event"
          />
        </div>
        <UIText tag="p" class="text-titleBrown font-helvetica text-[18px]">
          возможная планировка
        </UIText>
      </div>

      <PagesFlatPlan
        :is-empty-plan="isEmptyPlan"
        :images="{
          empty: data.data.image_empty_layout,
          possible: data.data.image_possible_layout,
        }"
      />
    </div>

    <div class="mt-5">
      <div
        class="flex w-full justify-between my-3 border-b-2 border-[lightgray] px-1"
        v-for="el in info"
        :key="el.id"
      >
        <UIText class="font-trajan text-black text-[2rem]">{{ el.value }}</UIText>
        <UIText class="font-helvetica text-black text-[1.1rem]">{{ el.name }}</UIText>
      </div>
      <UIText
        v-if="isCorpusActive"
        class="font-helvetica relative left-[80%] text-[lightgray] text-[0.8rem]"
      >
        *корпус сдан
      </UIText>
    </div>

    <div class="w-full">
      <PagesFlatButtonGroup
        mobile
        :link="`${'http://185.26.120.121:8085' + data.data.pdf}`"
        class="flex gap-3 flex-col-reverse justify-center items-center"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  isCorpusActive: {
    type: Boolean,
    required: true,
  },
});

const isEmptyPlan = ref(true);

const info = computed(() => [
  {
    id: 1,
    name: 'площадь, м2',
    value: props.data.data.square,
  },
  {
    id: 2,
    name: 'комнатность',
    value: props.data.data.rooms,
  },
  {
    id: 3,
    name: 'корпус',
    value: props.data.data.entrance,
  },
  {
    id: 4,
    name: 'этаж',
    value: props.data.data.floor,
  },
]);

const config = useRuntimeConfig();
</script>
