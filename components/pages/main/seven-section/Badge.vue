<template>
  <div
    class="relative z-[50] xl:w-[250px] xl:h-[90px] md:w-[200px] md:h-[70px] w-[80%] h-[60px] bg-bg flex justify-center items-center rounded-[20px] border-[1px]"
  >
    <div class="absolute z-[60] w-[70%] h-[130%] bg-bg flex justify-center items-center">
      <UIText class="font-helvetica text-black text-[12px] md:text-[18px] text-center" tag="p">
        <slot />
      </UIText>
    </div>
  </div>
</template>
