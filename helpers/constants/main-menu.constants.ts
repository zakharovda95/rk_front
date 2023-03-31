import { MainMenuElemType, MainMenuType } from '~/helpers/types/constants/main-menu.type';

export const MENU_CONSTANTS: MainMenuElemType[] = [
  {
    id: 1,
    name: 'Локация',
    url: '#section-wrapper-4',
  },
  {
    id: 2,
    name: 'История',
    url: '#section-wrapper-5',
  },
  {
    id: 3,
    name: 'Окружение',
    url: '#section-wrapper-7',
  },
  {
    id: 4,
    name: 'Технологии',
    url: '#section-wrapper-10',
  },
];

export const MAIN_MENU_CONSTANTS: MainMenuType[] = [
  {
    id: 1,
    name: 'КОРПУС 2',
    elems: [
      {
        id: 2,
        name: '2 этаж',
        url: '/corpus-2/floor-2',
      },
      {
        id: 3,
        name: '3 этаж',
        url: '/corpus-2/floor-3',
      },
      {
        id: 4,
        name: '4 этаж',
        url: '/corpus-2/floor-4',
      },
      {
        id: 4,
        name: '5 этаж',
        url: '/corpus-2/floor-5',
      },
    ],
  },

  {
    id: 2,
    name: 'КОРПУС 3',
    elems: [
      {
        id: 2,
        name: '2 этаж',
        url: '/corpus-3/floor-2',
      },
      {
        id: 3,
        name: '3 этаж',
        url: '/corpus-3/floor-3',
      },
      {
        id: 4,
        name: '4 этаж',
        url: '/corpus-3/floor-4',
      },
    ],
  },
];
