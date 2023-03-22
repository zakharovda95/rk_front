<template>
  <div class="w-full h-full">
    <div class="map w-full h-full left-0 bottom-0" />
    <!--    <img-->
    <!--      src="/img/components/map-flags/new-holland.svg"-->
    <!--      alt="flag1"-->
    <!--      class="absolute z-[55] top-[37vh] left-[20vw] hover:scale-[1.1] transition-[0.5s]"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="/img/components/map-flags/alekseev-garden.svg"-->
    <!--      alt="flag1"-->
    <!--      class="absolute z-[55] top-[52%] left-[13%] hover:scale-[1.1] transition-[0.5s]"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="/img/components/map-flags/isaac-cathedral.svg"-->
    <!--      alt="flag1"-->
    <!--      class="absolute z-[55] top-[18%] left-[50%] hover:scale-[1.1] transition-[0.5s]"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="/img/components/map-flags/yusupov-garden.svg"-->
    <!--      alt="flag1"-->
    <!--      class="absolute z-[55] bottom-[60%] left-[35%] hover:scale-[1.1] transition-[0.5s]"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="/img/components/map-flags/mariinskii-opera.svg"-->
    <!--      alt="flag1"-->
    <!--      class="absolute z-[55] top-[60%] left-[30%] hover:scale-[1.1] transition-[0.5s]"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="/img/components/map-flags/nikolskii-garden.svg"-->
    <!--      alt="flag1"-->
    <!--      class="absolute z-[55] top-[70%] left-[41%] hover:scale-[1.1] transition-[0.5s]"-->
    <!--    />-->

    <!--    <div>-->
    <!--      <img-->
    <!--        src="/img/components/map-flags/rk-22-house.svg"-->
    <!--        alt="flag1"-->
    <!--        class="absolute z-[55] top-[78%] left-[30%] hover:scale-[1.1] transition-[0.5s] cursor-pointer"-->
    <!--      />-->
    <!--      <img-->
    <!--        src="/img/components/map-flags/house-badge.svg"-->
    <!--        alt="flag1"-->
    <!--        class="absolute z-[55] top-[83%] left-[28%]"-->
    <!--      />-->
    <!--    </div>-->
  </div>
</template>

<style scoped lang="scss">
.map {
  background-image: url('public/img/components/map-clear.svg');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background-position: top 30% left 20%;
  }
}
</style>
