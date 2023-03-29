import { defineStore } from 'pinia';
import { AsyncData, useAsyncData } from '#app';
import { FloorDTO } from '~/helpers/types/dto.type';

export const useCorpusPageStore = defineStore('corpus', {
  state: () =>
    ({
      isLoadingCorpus: false,
      corpusData: [],
    } as any),

  actions: {
    async getCorpus(entrance: string) {
      try {
        this.isLoadingCorpus = true;
        const config = useRuntimeConfig();

        const { data } = (await useAsyncData(entrance, () =>
          $fetch(`${config.public.BACK_API}/api/entrance/statuses`, {
            method: 'GET',
            headers: {
              'accept': 'application/json',
            },
            params: {
              entrance,
            },
          }),
        )) as AsyncData<any, Ref<FloorDTO>>;

        const corpusArr = Object.entries(data.value.data);

        return corpusArr
          .filter(el => {
            if (el[1]) {
              return el[0];
            }
          })
          .map(elem => elem[0]);
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingCorpus = false;
      }
    },

    async setCorpuses() {
      const res1 = await this.getCorpus('2');
      const res2 = await this.getCorpus('3');
      this.corpusData = { c2: res1, c3: res2 };
    },
  },
});
