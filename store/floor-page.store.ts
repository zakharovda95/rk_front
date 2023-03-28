import { defineStore } from 'pinia';
import { useAsyncData } from '#app';
import { CallFormData } from '~/helpers/types/pages/index-page.type';

export const useFloorPageStore = defineStore('floor', {
  state: (floorData: any = null) => ({
    floorData: floorData,
  }),

  actions: {
    async call(body: CallFormData) {
      try {
        const config = useRuntimeConfig();
        const urlencoded = new URLSearchParams();
        urlencoded.append('phone', body.phone);
        urlencoded.append('name', body.name);

        const { data } = await useAsyncData('call', () =>
          $fetch(`${config.public.BACK_API}/api/call`, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/x-www-form-urlencoded',
            },
            body: urlencoded,
          }),
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
});
