import { AddressBlockSizesType } from '~/helpers/types/pages/index-page.type';

export interface CommonStoreType {
  isBurgerOpen: boolean;
  isThereOffset: boolean;
  isHideCommonElements: boolean;
  addressBlockSizes: AddressBlockSizesType | null;
}
