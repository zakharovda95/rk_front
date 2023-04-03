import { defineStore } from 'pinia';
import { AsyncData, useAsyncData } from '#app';
import { FloorFormDataType } from '~/helpers/types/pages/floor-page.type';
import { FloorStoreType } from '~/helpers/types/stores/floor-store.type';
import { FloorDTO } from '~/helpers/types/dto.type';

export const useFloorPageStore = defineStore('floor', {
  state: () =>
    ({
      isLoadingFloor: false,
      floorData: null,
      apartments: [],
      availableApartments: [],
    } as FloorStoreType),

  actions: {
    async initFloorData(body: FloorFormDataType): Promise<void> {
      await this.getFloorData(body);
      await this.setApartments();
    },

    async getFloorData(body: FloorFormDataType): Promise<void> {
      try {
        this.isLoadingFloor = true;
        const config = useRuntimeConfig();
        const urlencoded = new URLSearchParams();
        urlencoded.append('entrance', body.entrance);
        urlencoded.append('floor', body.floor);

        const { data } = (await useAsyncData('floor', () =>
          $fetch(`${config.public.BACK_API}/api/floor`, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/x-www-form-urlencoded',
            },
            body: urlencoded,
          }),
        )) as AsyncData<any, Ref<FloorDTO>>;

        this.floorData = data.value;
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingFloor = false;
      }
    },

    setApartments(): void {
      if (this.floorData && this.floorData.data.apartments) {
        this.apartments = Object.values(this.floorData.data.apartments);
        this.availableApartments = this.apartments
          .filter(el => el.is_active)
          .map(elem => String(elem.number));
      }
    },
  },
});
