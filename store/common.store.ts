import { defineStore } from 'pinia';
import { CommonStoreType } from '~/helpers/types/stores/common-store.type';

export const useCommonStore = defineStore('common', {
  state: () =>
    ({
      isBurgerOpen: false,
      isThereOffset: false,
      isHideCommonElements: false,
    } as CommonStoreType),
});
