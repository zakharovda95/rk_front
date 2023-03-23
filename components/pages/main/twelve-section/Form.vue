<template>
  <form action="" class="flex flex-col max-w-[380px] w-[80%]">
    <UIInput placeholder="Ваше имя" class="my-2" />
    <UIInput placeholder="Номер телефона" class="my-2" />
    <UIButton
      @click.prevent
      class="max-w-[200px] w-[70%] my-2"
      color="transparent"
      type="rounded"
      effect="gray"
    >
      Заказать звонок
    </UIButton>
  </form>
</template>
