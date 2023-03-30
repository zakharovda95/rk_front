import { useFlatPageStore } from '~/store/flat.store';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useFlatPageStore();
  await store.getFlatData(to.params.apartment as string);
});
