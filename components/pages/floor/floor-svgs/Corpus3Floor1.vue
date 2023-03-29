<template>Нет изображения</template>

<style scoped lang="scss">
.flat-mask {
  opacity: 0;
}

tspan {
  fill: #e3bc98 !important;
}
.flat-group:hover {
  cursor: pointer;
  .flat-mask {
    opacity: 1;
    transition: 0.2s;
  }

  tspan {
    fill: #252120 !important;
  }
}
</style>
