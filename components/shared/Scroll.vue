<template>
  <img class="img" src="/img/components/scroll.svg" alt="scroll" />
</template>

<style scoped lang="scss">
.img {
  animation: anim 2s infinite ease;
}

@keyframes anim {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
