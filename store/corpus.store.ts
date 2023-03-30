import { defineStore } from 'pinia';
import { useAsyncData } from '#app';

export const useCorpusPageStore = defineStore('corpus', {
  state: () =>
    ({
      isLoadingCorpus: false,
      corpusData: {},
      corpusActive: {},
    } as any),

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

        console.log(data.value);

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
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingCorpus = false;
      }
    },
  },
});
