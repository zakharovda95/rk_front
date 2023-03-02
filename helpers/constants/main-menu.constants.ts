import { MainMenuElemType, MainMenuType } from '~/helpers/types/constants/main-menu.type';

export const MENU_CONSTANTS: MainMenuElemType[] = [
  {
    id: 1,
    name: 'Локация',
    url: '/',
  },
  {
    id: 2,
    name: 'История',
    url: '/',
  },
  {
    id: 3,
    name: 'Окружение',
    url: '/',
  },
  {
    id: 4,
    name: 'Технологии',
    url: '/',
  },
];

export const MAIN_MENU_CONSTANTS: MainMenuType[] = [
  {
    id: 1,
    name: 'КОРПУС 2',
    elems: [
      {
        id: 1,
        name: '1 этаж',
        url: '/',
      },
      {
        id: 2,
        name: '2 этаж',
        url: '/',
      },
      {
        id: 3,
        name: '3 этаж',
        url: '/',
      },
      {
        id: 4,
        name: '4 этаж',
        url: '/',
      },
    ],
  },

  {
    id: 2,
    name: 'КОРПУС 3',
    elems: [
      {
        id: 1,
        name: '1 этаж',
        url: '/',
      },
      {
        id: 2,
        name: '2 этаж',
        url: '/',
      },
      {
        id: 3,
        name: '3 этаж',
        url: '/',
      },
      {
        id: 4,
        name: '4 этаж',
        url: '/',
      },
    ],
  },
];
