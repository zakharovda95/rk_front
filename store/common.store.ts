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
      audio: null,
    } as CommonStoreType),

  actions: {
    async downloadBooklet() {
      try {
        const config = useRuntimeConfig();

        const { data } = (await useAsyncData(`booklet-${Date.now()}`, () =>
          $fetch(`${config.public.BACK_API}/api/booklet`, {
            method: 'GET',
            headers: {
              'accept': 'application/json',
            },
          }),
        )) as any;

        this.booklet = config.public.BACK_API + data.value.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
