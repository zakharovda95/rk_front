import { defineStore } from 'pinia';
import { useAsyncData } from '#app';
import { CallFormData } from '~/helpers/types/pages/index-page.type';

export const useMainPageStore = defineStore('main', {
  actions: {
    async call(body: CallFormData) {
      try {
        const config = useRuntimeConfig();
        const formData = new FormData();
        formData.append('name', body.name);
        formData.append('phone', body.phone);

        const res1 = await useAsyncData('call', () =>
          $fetch(`${config.public.BACK_API}/api/call`, {
            method: 'POST',
            headers: {
              ContentType: 'multipart/form-data',
            },
            body: formData,
          }),
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
});
