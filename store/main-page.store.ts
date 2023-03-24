import { defineStore } from 'pinia';
import { useAsyncData } from '#app';
import { CallFormData } from '~/helpers/types/pages/index-page.type';

export const useMainPageStore = defineStore('main', {
  actions: {
    async call(body: CallFormData) {
      try {
        // const config = useRuntimeConfig();
        // const res = await useAsyncData('call', () =>
        //   $fetch(`https://iat.ru/api/site-service-calculator/step1`, {
        //     method: 'POST',
        //     headers: {
        //       ContentType: 'multipart/form-data',
        //     },
        //     body: {
        //       id: 1,
        //     },
        //   }),
        // );
        // const res1 = await useAsyncData('call', () =>
        //   $fetch(`${config.public.BACK_API}/api/call`, {
        //     method: 'POST',
        //     headers: {
        //       ContentType: 'multipart/form-data',
        //     },
        //     body: {
        //       name: body.name,
        //       phone: body.phone,
        //     },
        //   }),
        // );
        // console.log(res.data.value!.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
