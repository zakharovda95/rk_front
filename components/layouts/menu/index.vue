<template>
  <div class="menu fixed w-full h-[100vh] overflow-hidden z-[900]">
    <SharedBackground class="absolute z-[80]" />
    <LayoutsMenuSidebar class="sidebar hidden md:inline" />

    <div class="max-w-[1599px] relative z-[90] p-5" style="margin: 0 auto">
      <div>
        <UIText
          @click="options.modelValue = true"
          class="font-helvetica text-[white] lg:text-[1.1rem] md:visible lg:hidden absolute top-[80vh] md:left-[20vw] left-[38vw] cursor-pointer"
        >
          +7&nbsp;812&nbsp;242&nbsp;52&nbsp;10 <br />
          <span class="border-b-2 border-dashed">Оставить заявку</span>
        </UIText>
      </div>

      <UIButton
        @click="options.modelValue = true"
        type="rounded"
        color="black"
        font-color="white"
        effect
        class="phone-badge absolute left-[30vw] top-[88vh] z-[95] hidden lg:inline"
      >
        +7&nbsp;812&nbsp;242&nbsp;52&nbsp;10
      </UIButton>

      <SharedAddressBadge
        class="address-badge absolute top-[90vh] left-0 ml-3 z-[95] hidden lg:inline"
      />
      <PagesMainFirstSectionBrand
        class="absolute top-[92vh] md:left-[12vw] left-[28vw] inline lg:hidden"
      />
      <LayoutsMenuLinks class="links absolute top-[calc(1vw+1vh*20)]" />
    </div>

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
      content-class="max-w-xl mx-4 p-8 bg-[white] rounded-lg space-y-2"
    >
      <SharedSuccess v-if="isSuccess" :text="text" @custom:close-modal="close" />

      <div v-if="!isSuccess" class="flex flex-col justify-center items-center">
        <UIText tag="h3" class="text-center font-helvetica font-bold text-[#8F6C51] text-[22px]">
          Введите данные <br />
          и мы Вам перезвоним.
        </UIText>

        <form action="">
          <UIInput
            border="beige"
            color="black"
            placeholder="Ваше имя"
            :model-value="body.name"
            @custom:update-model-value="body.name = $event"
            :is-error="errName"
          />
          <UIInput
            border="beige"
            color="black"
            class="mb-5"
            placeholder="Ваш телефон"
            :model-value="body.phone"
            @custom:update-model-value="body.phone = $event"
            :is-error="errPhone"
          />
          <UIButton
            effect="beige"
            style="margin: auto"
            class="mt-10"
            font-color="white"
            type="rounded"
            color="brown"
            @click.prevent="call"
          >
            Забронировать
          </UIButton>
        </form>
      </div>
    </VueFinalModal>

    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer, VueFinalModal } from 'vue-final-modal';
import { useMainPageStore } from '~/store/main-page.store';
import { CallFormData } from '~/helpers/types/pages/index-page.type';

defineProps({
  corpusData: {
    type: Object,
    required: true,
  },
});

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

const body: Ref<CallFormData> = ref({
  name: '',
  phone: '',
});

const errName = ref(false);
const errPhone = ref(false);

const text: Ref<string> = ref('');
const isSuccess = ref(false);
const mainStore = useMainPageStore();

const call = async (): Promise<void> => {
  errName.value = !body.value.name;

  errPhone.value = !body.value.phone;

  if (body.value.name && body.value.phone) {
    const res = await mainStore.call(body.value);
    if (res.success) {
      isSuccess.value = true;
      text.value = res.data;
      options.value.modelValue = true;
      body.value = { name: '', phone: '' };
    }
  }
};

const close = () => {
  options.value.modelValue = false;
  isSuccess.value = false;
};
</script>

<style scoped lang="scss">
.sidebar {
  animation: anim 0.5s forwards;
}

.phone-badge {
  animation: anim2 0.5s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.address-badge {
  animation: anim2 0.5s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.links {
  animation: anim2 0.5s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

@keyframes anim {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes anim2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
