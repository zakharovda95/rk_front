<template>
  <div>
    <UIButton
      tag="a"
      color="transparent"
      border="black"
      target="_blank"
      type="rounded"
      size="medium"
      :href="link"
      download="pdf.pdf"
      class="pdf flex gap-2 items-center"
      :style="{ width: mobile ? '280px' : 'auto' }"
    >
      <img alt="pdf" src="/img/icons/pdf.svg" />
      PDF
    </UIButton>
    <UIButton
      @click="options.modelValue = true"
      color="black"
      border="black"
      type="rounded"
      size="medium"
      font-color="white"
      :style="{ width: mobile ? '280px' : 'auto', 'margin-bottom': mobile ? '5px' : '0' }"
      effect
    >
      Забронировать
    </UIButton>

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
      <SharedSuccess v-if="isSuccess" @custom:close-modal="close" />

      <div v-if="!isSuccess" class="flex flex-col justify-center items-center">
        <UIText tag="h3" class="text-center font-helvetica font-bold text-[#8F6C51] text-[22px]">
          Чтобы забронировать аппартамент <br />
          введите данные
        </UIText>

        <form action="">
          <UIInput
            border="beige"
            color="black"
            placeholder="Ваше имя"
            :model-value="body.name"
            @custom:update-model-value="body.name = $event"
          />
          <UIInput
            border="beige"
            color="black"
            class="mb-5"
            placeholder="Ваш телефон"
            :model-value="body.phone"
            @custom:update-model-value="body.phone = $event"
          />
          <UIButton
            effect="beige"
            style="margin: auto"
            class="mt-10"
            font-color="white"
            type="rounded"
            color="brown"
            @click.prevent="book"
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
import { useFlatPageStore } from '~/store/flat.store';
defineProps({
  mobile: {
    type: Boolean,
    required: false,
    default: false,
  },
  link: {
    type: String,
    required: false,
    default: () => '',
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

const route = useRoute();

const body = ref({
  name: '',
  phone: '',
  corpus: route.params.corpus,
  apartment: route.params.apartment,
});

const flatStore = useFlatPageStore();

const isSuccess = ref(false);
const book = async () => {
  const res = await flatStore.book(body.value);
  isSuccess.value = res!.success;
};

const close = () => {
  options.value.modelValue = false;
  isSuccess.value = false;
};
</script>

<style scoped lang="scss">
.pdf {
  color: black !important;
}
.pdf:hover {
  img {
    animation: anim 2s infinite ease;
  }
}

@keyframes anim {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
