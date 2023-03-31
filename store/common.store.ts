import { defineStore } from 'pinia';
import { CommonStoreType } from '~/helpers/types/stores/common-store.type';
import { useAsyncData } from '#app';

export const useCommonStore = defineStore('common', {
  state: () =>
    ({
      isBurgerOpen: false,
      isThereOffset: false,
      addressBlockSizes: null,
      aspectRatio: 0,
      booklet: '',
    } as CommonStoreType),

  actions: {
    async downloadBooklet() {
      try {
        const config = useRuntimeConfig();

        const { data } = (await useAsyncData('booklet', () =>
          $fetch(`http://185.26.120.121:8085/api/booklet`, {
            method: 'GET',
            headers: {
              'accept': 'application/json',
            },
          }),
        )) as any;

        this.booklet = data.value.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
