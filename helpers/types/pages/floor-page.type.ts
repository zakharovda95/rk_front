export interface FloorInfoType {
  corpus: string;
  floor: string;
  maxArea: string;
  freeAparts: string;
  rangeAreas: string;
}

export interface FloorFormDataType {
  entrance: string;
  floor: string;
}

export interface FlatDataType {
  entrance: number;
  floor: number;
  number: number;
  rooms: number;
  square: number;
  ceiling_height: number;
  bedrooms: number;
  courtyard_view: number;
  image_empty_layout: string;
  image_possible_layout: string;
  is_active: boolean;
  is_reservation: boolean;
  pdf: string;
}
