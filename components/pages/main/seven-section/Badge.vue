<template>
  <div
    class="relative z-[50] w-[250px] h-[90px] bg-[white]] flex justify-center items-center rounded-[20px] border-[1px]"
  >
    <div class="absolute z-[60] w-[70%] h-[130%] bg-[white] flex justify-center items-center">
      <UIText class="font-helvetica text-black text-[24px]" tag="p">
        <slot />
      </UIText>
    </div>
  </div>
</template>
