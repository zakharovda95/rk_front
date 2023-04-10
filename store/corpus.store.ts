import { defineStore } from 'pinia';
import { useAsyncData } from '#app';
import { CorpusStoreType } from '~/helpers/types/stores/corpus-store.type';

export const useCorpusPageStore = defineStore('corpus', {
  state: () =>
    ({
      isLoadingCorpus: false,
      corpusData: {},
      corpusActive: {},
      firstAvailableCorpusAndFloor: {
        corpus: null,
        floor: null,
      },
    } as CorpusStoreType),

  actions: {
    async getCorpus() {
      try {
        this.isLoadingCorpus = true;
        const config = useRuntimeConfig();

        const { data } = (await useAsyncData('entrance', () =>
          $fetch(`${config.public.BACK_API}/api/entrance/statuses`, {
            method: 'GET',
            headers: {
              'accept': 'application/json',
            },
          }),
        )) as any;

        const corpusData2 = Object.entries(data.value.data['2']);
        const corpusData3 = Object.entries(data.value.data['3']);

        this.corpusActive = {
          two: data.value.data['2'].is_active,
          three: data.value.data['3'].is_active,
        };

        const format = (arr: any) => {
          return arr
            .filter((el: any) => {
              if (el[1] && el[0] !== 'is_active') {
                return el[0];
              }
            })
            .map((elem: any) => elem[0]);
        };

        const corpusArr2 = format(corpusData2);
        const corpusArr3 = format(corpusData3);
        this.corpusData = { c2: corpusArr2, c3: corpusArr3 };

        this.firstAvailableCorpusAndFloor = {
          corpus: corpusArr2.length ? '2' : '3',
          floor: corpusArr2.length ? corpusArr2[0] : corpusArr3[0],
        };
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingCorpus = false;
      }
    },
  },
});
