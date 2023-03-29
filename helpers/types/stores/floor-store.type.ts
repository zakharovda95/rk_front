import { FlatDataType, FloorInfoType } from '~/helpers/types/pages/floor-page.type';
import { FloorDTO } from '~/helpers/types/dto.type';

export interface FloorStoreType {
  floorData: FloorDTO | null;
  apartments: FlatDataType[];
  availableApartments: string[];
  isLoadingFloor: boolean;
}
