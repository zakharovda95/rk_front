<template>
  <div
    class="relative z-[50] xl:w-[250px] xl:h-[90px] md:w-[200px] md:h-[70px] w-[80%] h-[60px] bg-[white]] flex justify-center items-center rounded-[20px] border-[1px]"
  >
    <div class="absolute z-[60] w-[70%] h-[130%] bg-[white] flex justify-center items-center">
      <UIText class="font-helvetica text-black text-[calk(1vw*1vh*1.2)]" tag="p">
        <slot />
      </UIText>
    </div>
  </div>
</template>
