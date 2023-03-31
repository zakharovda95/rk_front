<template>
  <div class="flex flex-col justify-center items-center">
    <UIText tag="h3" class="text-center font-helvetica text-[#8F6C51] my-2 text-[24px]">
      {{ text ? text : 'Бронирование успешно завершено!' }}
    </UIText>
    <UIText tag="h3" class="text-center font-helvetica text-[#8F6C51] my-2 text-[14px]">
      Наш менеджер свяжется с Вами в ближайшее время.
    </UIText>

    <UIButton
      effect="beige"
      style="margin: auto"
      class="mt-5"
      font-color="white"
      type="rounded"
      color="brown"
      @click.prevent="$emit('custom:close-modal')"
    >
      Закрыть
    </UIButton>
  </div>
</template>

<script setup lang="ts">
defineEmits(['custom:close-modal']);
defineProps({
  text: {
    type: String,
    required: false,
    default: () => '',
  },
});
</script>
