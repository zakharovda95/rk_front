<template>
  <NuxtLayout>
    <div class="bg-[#FCF9F4] w-full h-[100vh]">
      <div class="max-w-[1499px] flex w-full h-full" style="margin: 0 auto">
        <div class="w-[20%] h-full flex flex-col justify-around xl:ml-10">
          <div
            class="el flex items-center gap-3 cursor-pointer mt-[150px]"
            @click="$router.push('/floor')"
          >
            <span class="line" />
            <UIText tag="p" class="font-helvetica text-[#8F6C51] font-[18px]">
              вернуться к этажу
            </UIText>
          </div>

          <div>
            <UIText tag="h1" class="text-black font-trajan text-[calc(1vh+1vw*10)] mt-10"
              >30</UIText
            >
          </div>

          <div class="flex flex-col h-[40vh]">
            <div>
              <UIText tag="p" class="text-black font-helvetica text-[32px]">2</UIText>
              <UIText tag="p" class="text-black font-helvetica text-[18px]">комнаты</UIText>
            </div>

            <div class="mt-10">
              <UIText tag="p" class="text-black font-helvetica text-[32px]">125 м2</UIText>
              <UIText tag="p" class="text-black font-helvetica text-[18px]"> общая площадь </UIText>
            </div>
          </div>
        </div>

        <div class="w-[60%] flex flex-col justify-around items-center">
          <div class="flex items-center justify-center relative bottom-[20px] gap-5 mt-[150px]">
            <div>
              <img
                alt="img"
                src="/img/icons/switch-left.svg"
                class="cursor-pointer"
                v-if="isEmptyPlan"
                @click="isEmptyPlan = false"
              />
              <img
                alt="img"
                src="/img/icons/switch-right.svg"
                class="cursor-pointer"
                v-if="!isEmptyPlan"
                @click="isEmptyPlan = true"
              />
            </div>

            <UIText tag="p" class="text-titleBrown font-helvetica text-[18px]">
              возможная планировка
            </UIText>
          </div>

          <div class="mb-20">
            <img alt="img" src="/img/components/plan/plan-empty.png" v-if="isEmptyPlan" />
            <img alt="img" src="/img/components/plan/plan-full.png" v-if="!isEmptyPlan" />
          </div>

          <div class="flex gap-5 mt-20">
            <img
              alt="img"
              src="/img/icons/pdf.svg"
              class="cursor-pointer hover:scale-[1.1] transition-[0.5s]"
            />
            <img
              alt="img"
              src="/img/icons/book.svg"
              class="cursor-pointer hover:scale-[1.1] transition-[0.5s]"
            />
          </div>
        </div>

        <div class="w-[20%] h-full flex flex-col">
          <div class="flex flex-col mt-[150px] items-center">
            <div class="flex flex-col items-center">
              <img alt="img" src="/img/icons/floor-height.svg" class="w-[100px]" />
              <UIText tag="p" class="text-black font-helvetica text-[18px]">
                Высота потолков
              </UIText>
            </div>

            <div class="mt-10 flex flex-col items-center">
              <img alt="img" src="/img/icons/count-rooms.svg" class="w-[100px]" />
              <UIText tag="p" class="text-black font-helvetica text-[18px]">
                Спальных комнаты
              </UIText>
            </div>

            <div class="mt-10 flex flex-col items-center">
              <img alt="img" src="/img/icons/courtyard-view.svg" class="w-[100px]" />
              <UIText tag="p" class="text-black font-helvetica text-[18px]"> Вид во двор </UIText>
            </div>
          </div>

          <div class="mt-20 flex flex-col items-center">
            <div>
              <img alt="img" src="/img/icons/corpus-badge.svg" />
            </div>

            <div class="mt-5 cursor-pointer">
              <div>
                <img alt="img" src="/img/icons/floors.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const isEmptyPlan = ref(true);
</script>

<style scoped lang="scss">
.line {
  width: 62px;
  height: 2px;
  background: #ded5d2;
  position: relative;
  top: 2px;
}

.line:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #8f6c51;
  transition: all 1s ease;
  z-index: 100;
}
.el:hover {
  .line:before {
    width: 100%;
  }
}
</style>
