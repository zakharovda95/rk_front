<template>
  <div>
    <NuxtLink class="cursor-pointer" @click="go('#section-wrapper-3')">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        Локация
      </UIText>
    </NuxtLink>

    <NuxtLink class="cursor-pointer" @click="go('#section-wrapper-4')">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        История
      </UIText>
    </NuxtLink>

    <NuxtLink class="cursor-pointer" @click="go('#section-wrapper-7')">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        Окружение
      </UIText>
    </NuxtLink>

    <NuxtLink class="cursor-pointer" @click="go('#section-wrapper-10')">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        Локация
      </UIText>
    </NuxtLink>

    <NuxtLink @click="go2" class="cursor-pointer">
      <UIText
        tag="h2"
        class="font-trajan text-[32px] text-[white] my-5 hover:translate-y-[-2px] transition-[0.2s]"
      >
        Планировки
      </UIText>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { scrollTo } from '~/helpers/methods/scroll-to.method';
import { useCommonStore } from '~/store/common.store';
import { useCorpusPageStore } from '~/store/corpus.store';
import { AvailableFloorsType } from '~/helpers/types/common.type';

const store = useCommonStore();
const corpusStore = useCorpusPageStore();

const route = useRoute();
const router = useRouter();

const availableFloors: Ref<AvailableFloorsType> = computed(() => corpusStore.corpusData);

const currentAvailableFloor: Ref<string> = computed(() =>
  availableFloors.value.c2.length ? availableFloors.value.c2[0] : availableFloors.value.c3[0],
);

const go = (link: string): void => {
  if (route.path !== '/') {
    router.push('/');
  }
  scrollTo(link);
  store.isBurgerOpen = false;
};
const go2 = (): void => {
  router.push(
    `/corpus-${availableFloors.value.c2.length ? '2' : '3'}/floor-${currentAvailableFloor.value}`,
  );
  store.isBurgerOpen = false;
};
</script>
