<template>
  <div class="bg-[#FCF9F4] w-full h-[100vh] overflow-hidden">
    <div class="max-w-[1499px] md:p-10 flex w-full h-full" style="margin: 0 auto">
      <div class="lg:w-[20%] w-[25%] h-full flex flex-col justify-between items-center xl:ml-10">
        <UIAnimatedLink
          class="mt-[calc(1vw+1vh*10)]"
          @click="$router.push(`/corpus-${$route.params.corpus}/floor-${$route.params.floor}`)"
          color="beige"
        >
          назад к этажу
        </UIAnimatedLink>

        <div>
          <UIText tag="h1" class="text-black font-trajan text-[calc(1vh+1vw*10)] mt-10">
            {{ data.data.number }}
          </UIText>
        </div>

        <div class="flex flex-col h-[40vh] gap-5">
          <PagesFlatInfo>
            <template #value> {{ data.data.rooms }} </template>
            <template #name> {{ data.data.rooms === 1 ? 'комната' : 'комнаты' }} </template>
          </PagesFlatInfo>

          <PagesFlatInfo>
            <template #value>
              {{ data.data.square }} м<small class="relative bottom-[10px]">2</small>
            </template>
            <template #name> общая площадь </template>
          </PagesFlatInfo>
        </div>
      </div>

      <div class="w-[60%] flex flex-col justify-start items-center">
        <div class="flex items-center justify-center gap-5 mt-[calc(1vw+1vh*10)]">
          <div>
            <UIRadio
              :disabled="!data.data.image_possible_layout"
              @custom:radio-click="isEmptyPlan = $event"
            />
          </div>
          <UIText tag="p" class="text-titleBrown font-helvetica text-[calc(1vw+1vh*0.8)]">
            возможная планировка
          </UIText>
        </div>

        <div
          class="max-h-[400px] h-[calc(1vw+1vh*50)] relative top-[calc(1vh+1vw*3)] overflow-hidden"
        >
          <PagesFlatPlan
            :is-empty-plan="isEmptyPlan"
            :images="{
              empty: data.data.image_empty_layout,
              possible: data.data.image_possible_layout,
            }"
          />
        </div>

        <div class="relative top-[10vh]">
          <PagesFlatButtonGroup
            :link="`${config.public.BACK_API + data.data.pdf}`"
            class="flex gap-5 justify-center items-center"
          />
        </div>
      </div>

      <div class="w-[20%] h-full flex flex-col">
        <PagesFlatInfoImage
          :flat-height="data.data.ceiling_height"
          :room-count="data.data.bedrooms"
          :is-courtyard-view="!!data.data.courtyard_view"
          :current-floor="$route.params.floor"
          :corpus-active="isCorpusActive"
          class="mt-[calc(1vw+1vh*10)]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
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

const config = useRuntimeConfig();
</script>
