export interface Section2NavigationType {
  id: number;
  name: string;
  values: Section2NavigationValueType[];
}

export interface Section2NavigationValueType {
  id: number;
  name: string;
  url?: string;
}
