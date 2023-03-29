import { FlatDataType } from '~/helpers/types/pages/floor-page.type';

export interface FloorDTO {
  data: {
    space: string;
    total_space: string;
    apartments: { [key: string]: FlatDataType };
  };
}
