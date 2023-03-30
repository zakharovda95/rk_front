<template>
  <div>
    <UIText tag="p" class="text-black font-helvetica text-[calc(1vw+1vh*2)]">
      <slot name="value" />
    </UIText>
    <UIText tag="p" class="text-black font-helvetica text-[calc(1vw+1vh*0.9)]">
      <slot name="name" />
    </UIText>
  </div>
</template>
