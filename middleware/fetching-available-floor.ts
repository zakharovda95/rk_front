import { useFloorPageStore } from '~/store/floor-page.store';
import { FloorFormDataType } from '~/helpers/types/pages/floor-page.type';
import { useCorpusPageStore } from '~/store/corpus.store';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useFloorPageStore();
  const corpusStore = useCorpusPageStore();
  const firstAvailableCorpusAndFloor = computed(() => corpusStore.firstAvailableCorpusAndFloor);

  await store.initFloorData({
    entrance: firstAvailableCorpusAndFloor.value.corpus,
    floor: firstAvailableCorpusAndFloor.value.floor,
  } as FloorFormDataType);
});
