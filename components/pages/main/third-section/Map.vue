<template>
  <div class="w-full h-full">
    <div class="map w-full h-full left-0 bottom-0" />
  </div>
</template>

<style scoped lang="scss">
.map {
  background-image: url('public/img/components/map-clear.svg');
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background-position: bottom left 30%;
  }
}
</style>
