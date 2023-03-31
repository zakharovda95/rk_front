<template>
  <div
    class="flex flex-col items-center p-5 max-w-[350px] cursor-default hover:translate-y-[-2px] transition-[0.5s]"
  >
    <img alt="img" src="/img/components/section10item-element.svg" class="mb-3" />
    <UIText
      class="font-helvetica xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] max-[400px]:text-[9px] max-[400px]:leading-[18px] leading-[25px] text-black text-center"
    >
      <slot />
    </UIText>
  </div>
</template>
