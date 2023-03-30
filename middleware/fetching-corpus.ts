import { useCorpusPageStore } from '~/store/corpus.store';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useCorpusPageStore();
  await store.getCorpus();
});
