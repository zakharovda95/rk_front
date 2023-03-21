<template>
  <form action="" class="flex flex-col max-w-[380px]">
    <UIInput placeholder="Ваше имя" class="my-2" />
    <UIInput placeholder="Номер телефона" class="my-2" />
    <UIButton
      @click.prevent
      class="w-[200px] my-2"
      color="transparent"
      type="rounded"
      effect="gray"
    >
      Заказать звонок
    </UIButton>
  </form>
</template>
