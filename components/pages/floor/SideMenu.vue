<template>
  <div class="side-menu w-full h-full flex flex-col justify-end">
    <div
      class="link w-full flex items-center justify-center relative cursor-pointer my-5 2xl:bottom-[4vw] xl:bottom-[2vw]"
    >
      <NuxtLink class="font-trajan link-text relative z-[200] text-[white] text-[calc(1vh+1vw*2)]">
        4 этаж
      </NuxtLink>

      <div class="mask w-full h-full bg-[white] absolute z-[100] opacity-0 mx-1"></div>
    </div>

    <div
      class="link w-full flex items-center justify-center relative cursor-pointer my-5 2xl:bottom-[3vw] xl:bottom-[2vw]"
    >
      <NuxtLink class="font-trajan link-text relative z-[200] text-[white] text-[calc(1vh+1vw*2)]">
        3 этаж
      </NuxtLink>

      <div class="mask w-full h-full bg-[white] absolute z-[100] opacity-0 mx-1"></div>
    </div>

    <div
      class="link w-full flex items-center justify-center relative cursor-pointer my-5 2xl:bottom-[2.2vw] xl:bottom-[2vw]"
    >
      <NuxtLink class="font-trajan link-text relative z-[200] text-[white] text-[calc(1vh+1vw*2)]">
        2 этаж
      </NuxtLink>

      <div class="mask w-full h-full bg-[white] absolute z-[100] opacity-0 mx-1"></div>
    </div>

    <div
      class="link w-full flex items-center justify-center relative cursor-pointer my-5 bottom-[2vw]"
    >
      <NuxtLink class="font-trajan link-text relative z-[200] text-[white] text-[calc(1vh+1vw*2)]">
        1 этаж
      </NuxtLink>

      <div class="mask w-full h-full bg-[white] absolute z-[100] opacity-0 mx-1"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-menu {
  background-image: url('public/img/components/floor-side.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;

  .link:hover {
    .link-text {
      color: #303030;
      transition: 0.2s;
    }
    .mask {
      opacity: 0.5;
      transition: 0.2s;
    }
  }
}
</style>
