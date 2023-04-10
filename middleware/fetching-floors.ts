import { useFloorPageStore } from '~/store/floor-page.store';
import { FloorFormDataType } from '~/helpers/types/pages/floor-page.type';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useFloorPageStore();

  await store.initFloorData({
    entrance: to.params.corpus,
    floor: to.params.floor,
  } as FloorFormDataType);
});
