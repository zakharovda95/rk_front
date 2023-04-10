<template>
  <form action="" class="flex flex-col w-[80%] max-w-[380px]">
    <UIInput
      placeholder="Ваше имя"
      class="my-2"
      :model-value="body.name"
      :is-error="errName"
      @custom:update-model-value="body.name = $event"
    />
    <UIInput
      placeholder="Номер телефона"
      class="my-2"
      :model-value="body.phone"
      :is-error="errPhone"
      @custom:update-model-value="body.phone = $event"
      v-maska
      data-maska="+7 (###) ### ## ##"
    />
    <UIButton
      @click.prevent="call"
      class="max-w-[200px] w-[80%] my-2"
      color="transparent"
      font-color="white"
      type="rounded"
      effect="gray"
    >
      Заказать звонок
    </UIButton>
  </form>

  <VueFinalModal
    v-model="options.modelValue"
    :teleport-to="options.teleportTo"
    :display-directive="options.displayDirective"
    :hide-overlay="options.hideOverlay"
    :overlay-transition="options.overlayTransition"
    :content-transition="options.contentTransition"
    :click-to-close="options.clickToClose"
    :esc-to-close="options.escToClose"
    :background="options.background"
    :lock-scroll="options.lockScroll"
    :swipe-to-close="options.swipeToClose"
    class="flex justify-center items-center"
    content-class="max-w-xl mx-4 p-4 bg-[white] rounded-lg space-y-2"
  >
    <SharedSuccess :text="text" @custom:close-modal="options.modelValue = false" />
  </VueFinalModal>

  <ModalsContainer />
</template>

<script setup lang="ts">
import { useMainPageStore } from '~/store/main-page.store';
import { CallFormData } from '~/helpers/types/pages/index-page.type';
import { ModalsContainer, VueFinalModal } from 'vue-final-modal';
import { vMaska } from 'maska';

const getInitialValues = () => ({
  teleportTo: 'body',
  modelValue: false,
  displayDirective: 'if',
  hideOverlay: false,
  overlayTransition: 'vfm-fade',
  contentTransition: 'vfm-fade',
  clickToClose: true,
  escToClose: true,
  background: 'non-interactive',
  lockScroll: true,
  swipeToClose: 'none',
});
const options = ref(getInitialValues());

const mainPageStore = useMainPageStore();

const body: Ref<CallFormData> = ref({
  name: '',
  phone: '',
});

const errName = ref(false);
const errPhone = ref(false);

const text = ref('');

const call = async (): Promise<void> => {
  errName.value = !body.value.name;

  errPhone.value = !body.value.phone;

  if (body.value.name && body.value.phone) {
    const res = await mainPageStore.call(body.value);
    if (res.success) {
      text.value = res.data;
      options.value.modelValue = true;
      body.value = { name: '', phone: '' };
    }
  }
};
</script>
