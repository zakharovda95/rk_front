export interface MainMenuType {
  id: number;
  name: string;
  elems: MainMenuElemType[];
}

export interface MainMenuElemType {
  id: number;
  name: string;
  url: string;
}
