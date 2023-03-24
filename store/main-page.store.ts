import { defineStore } from 'pinia';
import { useAsyncData } from '#app';
import { CallFormData } from '~/helpers/types/pages/index-page.type';

export const useMainPageStore = defineStore('main', {
  actions: {
    async call(body: CallFormData) {
      try {
        const config = useRuntimeConfig();
        const res = await useAsyncData('call', () =>
          $fetch(`${config.public.BACK_API}/api/apartment`, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            method: 'POST',
            body: {
              'apartment': '26',
            },
          }),
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
