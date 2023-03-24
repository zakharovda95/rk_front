import { defineStore } from 'pinia';
import { CommonStoreType } from '~/helpers/types/stores/common-store.type';

export const useCommonStore = defineStore('common', {
  state: () =>
    ({
      isBurgerOpen: false,
      isThereOffset: false,
      addressBlockSizes: null,
      aspectRatio: 0,
    } as CommonStoreType),
});
