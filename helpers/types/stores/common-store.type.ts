import { AddressBlockSizesType } from '~/helpers/types/pages/index-page.type';

export interface CommonStoreType {
  isBurgerOpen: boolean;
  isThereOffset: boolean;
  addressBlockSizes: AddressBlockSizesType | null;
  aspectRatio: number;
  booklet: string;
}
