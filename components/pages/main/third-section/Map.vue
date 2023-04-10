<template>
  <div class="w-full h-full">
    <div class="map w-full h-full left-0 bottom-0 absolute" />
  </div>
</template>

<style scoped lang="scss">
.gradient {
  background: linear-gradient(191deg, rgba(252, 249, 244, 1) 0%, rgba(252, 249, 244, 0) 100%);
}

.map {
  background-image: url('public/img/background/map.svg');
  background-position: top 10% left;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background-position: left 30% bottom 10%;
  }
}
</style>
