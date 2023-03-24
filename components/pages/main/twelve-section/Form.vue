<template>
  <form action="" class="flex flex-col w-[80%] max-w-[380px]">
    <UIInput
      placeholder="Ваше имя"
      class="my-2"
      :model-value="body.name"
      @custom:update-model-value="body.name = $event"
    />
    <UIInput
      placeholder="Номер телефона"
      v-mask="'+7 (###) ### ## ##'"
      class="my-2"
      :model-value="body.phone"
      @custom:update-model-value="body.phone = $event"
    />
    <UIButton
      @click.prevent="call"
      class="max-w-[200px] w-[80%] my-2"
      color="transparent"
      type="rounded"
      effect="gray"
    >
      Заказать звонок
    </UIButton>
  </form>
</template>

<script lang="ts">
import pkg from 'vue-the-mask';
const { mask } = pkg;

export default {
  directives: { mask },
};
</script>

<script setup lang="ts">
import { useMainPageStore } from '~/store/main-page.store';
import { CallFormData } from '~/helpers/types/pages/index-page.type';

const mainPageStore = useMainPageStore();

const body: Ref<CallFormData> = ref({
  name: '',
  phone: '',
});

const call = (): void => {
  console.log(body.value);
  mainPageStore.call(body.value);
};
</script>
