import { defineStore } from 'pinia';
import { useAsyncData } from '#app';

export const useFlatPageStore = defineStore('flat', {
  state: () => ({
    isLoadingFlat: false,
    flatData: {},
  }),

  actions: {
    async getFlatData(apartment: string): Promise<void> {
      try {
        this.isLoadingFlat = true;
        const config = useRuntimeConfig();
        const urlencoded = new URLSearchParams();
        urlencoded.append('apartment', apartment);

        const { data } = await useAsyncData('apartment', () =>
          $fetch(`${config.public.BACK_API}/api/apartment`, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/x-www-form-urlencoded',
            },
            body: urlencoded,
          }),
        );

        this.flatData = data.value as object;

        console.log(this.flatData);
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingFlat = false;
      }
    },

    async book(body: any) {
      try {
        this.isLoadingFlat = true;
        const config = useRuntimeConfig();
        const urlencoded = new URLSearchParams();
        urlencoded.append('name', body.name);
        urlencoded.append('phone', body.phone);
        urlencoded.append('entrance', body.corpus);
        urlencoded.append('apartment', body.apartment);

        const { data } = await useAsyncData('book', () =>
          $fetch(`http://185.26.120.121:8085/api/reservation-apartment`, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/x-www-form-urlencoded',
            },
            body: urlencoded,
          }),
        );

        return data.value;
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoadingFlat = false;
      }
    },
  },
});
